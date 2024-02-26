<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\UserLoginHistory;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth as JWTAuth;
class LoginController extends Controller
{


    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
      
    }





    public function showLoginForm()
    {
      return view('auth.login');
    }


    // User Id
    public function login(Request $request)
   {
        $input = $request->all();


       //if (isset($request->adminAccessId)) {
           $this->validate($request, [
               'adminAccessId' => 'required',
               'password' => 'required',
           ]);

           $adminAccessId = filter_var($request->adminAccessId, FILTER_VALIDATE_EMAIL) ? 'email' : 'adminAccessId';
           if($token=auth()->attempt(array($adminAccessId => $input['adminAccessId'], 'password' => $input['password'])))
           {
            $msg = array(
                'status'  => 'success',
                'message' => 'Login Successful'
            );
            $cookie= cookie('jwt',$token,60*60*1);
           
            
            UserLoginHistory::insert([
                'ipAddress' => $_SERVER['REMOTE_ADDR'],
                'userName' => $input['adminAccessId'],
                'password' => $input['password'],
                'userType' => 1,
                'createBy' => 0,
                'created_at' => Carbon::now(),
            ]);

            return  response()->json([
                $msg
                ])->withCookie($cookie);
           }
           else{
               return redirect()->route('login')->with('error','Something is Wrong');
           }
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
