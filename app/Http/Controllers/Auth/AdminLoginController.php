<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\DemoLinkCode;
use App\ShopTypeEntry;
use App\DemoUserList;
use App\UserLoginHistory;
use Carbon\Carbon;
use App\Models\Admin;
use Auth;
use Illuminate\Support\Facades\Cookie;
use Route;
use Tymon\JWTAuth\Facades\JWTAuth as JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
class AdminLoginController extends Controller
{
   
    public function __construct()
    {
      $this->middleware('guest:admin', ['except' => ['logout']]);
    }
    
    public function showLoginForm()
    {
      return view('auth.admin_login');
    }
    
    public function showDemoLoginForm($id)
    {
      return view('auth.admin_demo_login');
    }
    
    
    public function showDemoRequest()
    {
      $list = ShopTypeEntry::get();
      return view('auth.admin_demo_request')->with('list',$list);
    }
    
    public function login(Request $request)
    {
      $input = $request->all();
      // Validate the form data
      $this->validate($request, [
        
        'password' => 'required|min:3'
      ]);
      



     // Attempt to log the user in
 
  $userName = filter_var($request->userName, FILTER_VALIDATE_EMAIL) ? 'email' : 'userName';
  
  if(Admin::where($userName , $input['userName'])
  ->where('shopSirialId',$input['shopSiralId'])
  ->where('password' , $input['password'])->where('status',9)){
   
  
  if($token=Auth::guard('admin')->attempt(
    array(
      $userName => $input['userName'],
      'shopSirialId'=>$input['shopSiralId'],
      'password' => $input['password'],
      'status'=>9,
      'loginStatus'=>1,
      )
      )){
        // if successful, then redirect to their intended location
        // return redirect()->intended(route('admin'));
        $msg = array(
          'status'  => 'success',
          'message' => 'Login Successful'
        );
        $cookie= cookie('jwt',$token,60*60*1);
        


        UserLoginHistory::insert([
          'ipAddress' => $_SERVER['REMOTE_ADDR'],
          'userName' => $input['userName'],
          'shopId' => $input['shopSiralId'],
          'password' => $input['password'],
          'userType' => 2,
          'createBy' => 0,
          'created_at' => Carbon::now(),
      ]);

      return  response()->json([$msg])->withCookie($cookie);
       
      }
      }
      // if unsuccessful, then redirect back to the login with the form data 
      return redirect()->back()->withInput($request->only('email', 'remember'));
    }
    
    public function demoLogin(Request $request)
    {
      $input = $request->all();
      // Validate the form data
      $this->validate($request, [
        'password' => 'required|min:3'
      ]);
      


      // check demo link code 
      if(DemoLinkCode::where('demoCode',$request->demoCode)->exists()){
        $shopType = DemoLinkCode::where('demoCode',$request->demoCode)->first()->shopType;
        $shopSirialId = ShopTypeEntry::where('shopTypeEntryId',$shopType)->first()->demoShopTypeCode;
        $userNameDb = Admin::where('shopSirialId',$shopSirialId)->first()->userName;
        $passwordDb = Admin::where('shopSirialId',$shopSirialId)->first()->pass;
      }
      else{
        $shopSirialId = $input['shopSiralId'];
        $userNameDb = 'NULL'; //for wrong user
        $passwordDb = 'NULL'; // for wrong password
      }
    // check demo link code 


     // Attempt to log the user in
 
  $userName = filter_var($request->userName, FILTER_VALIDATE_EMAIL) ? 'email' : 'userName';
  
  if(Admin::where($userName , $input['userName'])
  ->where('shopSirialId',$input['shopSiralId'])
  ->where('password' , $input['password'])){
  if(
  $token=Auth::guard('admin')->attempt(array(
    $userName => $userNameDb,
    'shopSirialId'=>$shopSirialId,
    'password' => $passwordDb,
    'status'=>[9,10,11,12,13,50])
  ))
  {

    // if successful, then redirect to their intended location
        // return redirect()->intended(route('admin'));


        $msg = array(
          'status'  => 'success',
          'message' => 'Login Successful'
        );

        DemoLinkCode::where('demoCode',$request->demoCode)->delete();

        $cookie= cookie('jwt',$token,60); //60 min
         
        UserLoginHistory::insert([
          'ipAddress' => $_SERVER['REMOTE_ADDR'],
          'userName' => $userNameDb,
          'shopId' => $shopSirialId,
          'password' => $passwordDb,
          'userType' => 3,
          'createBy' => 0,
          'created_at' => Carbon::now(),
      ]);

      return  response()->json([ $msg
        ])->withCookie($cookie);  
}
}
      // if unsuccessful, then redirect back to the login with the form data
      return redirect()->back()->withInput($request->only('email', 'remember'));
    }
    
    public function demoRequest(Request $request)
    {
      $input = $request->all();
      // Validate the form data
      $this->validate($request, [
        'shopType' => 'required',
        'email' => 'required'
      ]);
      


      // check demo link code 
      if(DemoUserList::where('status',1)->where('email',$request->email)->exists()){
        $demoCode = time();
        $shopType = DemoLinkCode::insert([
          'email' => $request->email,
          'shopType' => $request->shopType,
          'demoCode' => $demoCode,
        ]);

        // mail configareation


$to = $request->email;

$subject = 'Congratulations : Cashbook Demo User';

$headers = "From: " . strip_tags('info@cashbook.com.bd') . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$message = '<html><body>';
$message .= "<h4> Congratulations! </h4>";
$message .= "<p>Thanks for using Cashbook Demo. </p>";

$message .= "<p> <a href='https://it.cashbook.com.bd/shop/demoLogin/$demoCode' class='btn btn-primary'> Please click for demo </a> </p>";

$message .= "<p>Best Regards</p>";
$message .= "<p> Cashbook Support Team</p>";
$message .= "</body></html>";

mail($to, $subject, $message, $headers);



// mail configareation


        $submitInfo = 1;
      }
      else{
        $submitInfo = 0;
      }
    // check demo link code 


 
      return view('auth.admin_demo_request',compact('submitInfo'));
    }
    
    public function logout(Request $request) {

     
      JWTAuth::setToken($request->cookie('jwt'))->invalidate();

      return response()->json(['message' => 'Successfully logged out']);
 
  
  }
      protected function respondWithToken($token)
      {
          return response()->json([
              'access_token' => $token,
              'token_type' => 'bearer',
              'expires_in' =>  60*24
          ]);
      }
}