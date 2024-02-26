<?php

namespace App\Http\Controllers\BillingAdmin;

use App\GraceDateEntry;
use App\Http\Controllers\Controller;
use App\Http\Resources\ShopInformation\ShopOwnerInformation;
use App\Mail\SuccessMail;
use Illuminate\Http\Request;
use App\Models\Admin;
use App\ShopAccountIntormation;
use App\ShopInformation\ShopAddressLocation;
use App\ShopInformation\ShopOwnerInformation as ShopInformationShopOwnerInformation;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Stringable;
use Illuminate\Support\Str;
class BillingAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $newshop=Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('status',6)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress];
        
    }
    public function billingPending()
    {
        $newshop=Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('status',7)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress];
    }
    public function billingCancel()
    {
        $newshop=Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('status',8)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress];
    }
    public function billingDelivered()
    {
        $newshop=Admin::where('role',3)->with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('status',9)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress];
    }
    public function billingList()
    {
        $newshop=Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        $blist=Admin::where('status',6)->get();
        
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress,'blist'=>$blist];
    }

    public function graceDateList()
    {
        $newshop=Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        $blist=ShopAccountIntormation::where('billingGraceDate',Carbon::now()->format('Y-m-d'))->orwhere('billingGraceDate','>',Carbon::now()->format('Y-m-d'))->get();
        
   
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress,'blist'=>$blist];
    }
    public function expiredDateList()
    {
        $newshop=Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
     
        $get = GraceDateEntry::first();
        
        $blist=ShopAccountIntormation::whereDate('billingDate','>',Carbon::now()->addDays(-($get->dayLimit)))
        ->whereDate('billingDate','<',Carbon::now())
        
        ->get();
     
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress,'blist'=>$blist];
    }
    public function expiredDateListall()
    {
        $newshop=Admin::with('shoprepresentative','account','billinginfo')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('role',3)->where('status',50)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
     
        $get = GraceDateEntry::first();
        
        $blist=ShopAccountIntormation::whereDate('billingDate','<',Carbon::now())
        
        ->get();
     
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress,'blist'=>$blist];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        Admin::where('shopId',$id)->update([
            'status'=>8
         ]);
    }
    public function deliveredBillingStatus(Request $request,$id)
    {

        $link=Admin::where('shopId',$id)->first();
       
        Admin::where('shopId',$id)->update([
            'status'=>9,
            'refferUrl'=>''
         ]);


         $s= Admin::where('shopId',$id)->first();
         $shopId =$s->shopId;
         $select_amount = ShopAccountIntormation::where('shopId', $shopId)->first();
         $today = $select_amount->billingDate;
         $billingDate =  date('Y-m-d H:i:s', strtotime("$today +10000 Months"));
         $billingDate1 =  substr($billingDate,0,10);
 
         $details = [

            'title' => 'Mail from cashbook.com.bd',
    
            'body' => 'Welcome to cashbook. your shop user name ',
            'userName' => $s->userName,
            'shopSirialId' => $s->shopSirialId,
            'pass' => $s->pass,
    
        ];
        $con= DB::table('shop_owner_information')->where('shopId',$s->shopId)->first();
        

        $ShopOwnerInformation =  ShopInformationShopOwnerInformation::where('shopId', $s->shopId)->first();


 
         $ShopAccount =  ShopAccountIntormation::where('shopId', $shopId)->update([        
             'billingDate' => $billingDate,
             'billingGraceDate' => '',
         ]); 
         $Shop =  Admin::where('shopId', $shopId)->update([
             'paymentStatus' => 2,
             'status' => 9,
         ]);
         
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        Admin::where('shopId',$id)->update([
            'status'=>7
         ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
       
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

