<?php

namespace App\Http\Controllers;

use App\Http\Resources\ShopInformation\ShopOwnerInformation;
use Illuminate\Http\Request;
use App\User;
use App\Models\Admin;
use App\ShopInformation;
use App\Http\Resources\User as UserResource;
use Illuminate\Support\Facades\Auth;
use DB;

class UserInfoController extends Controller
{


    public function __construct()
    {
        $this->middleware('auth:,admin');
    }

    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $shop=Admin::where('role',3)->where('paymentStatus',2)->where('status','>=',9)->get();
        return ['shop'=>$shop];
    }

    public function getUserInfoWtihShopType(){
        $data = 
        DB::table('shop_information')->join('shop_type_entries', 'shop_type_entries.shopTypeEntryId', '=', 'shop_information.shopTypeId')
        ->select('shop_information.*', 'shop_type_entries.shopTypeName')->get();
        return ['data' => $data];
    }

    public function getAuthInfoByType($type){
        $data = Admin::where('shopId',Auth::user()->shopId)->first()->$type;
        return ['data' => $data];
    }


    public function getAuthInfo(){
        $userId = Auth::user()->shopId;
        $refferCount =Admin::where('refferType',1)->where('paymentStatus',2)->where('refferUserId',Auth::user()->shopId)->count();
        $userName = Auth::user()->userName;
        $owner=DB::table('shop_owner_information')->where('shopId',Auth::user()->shopId)->first();
        $representative=DB::table('shop_representative_information')->where('shopId',Auth::user()->shopId)->first();
        $reg=DB::table('admins')->where('shopId',Auth::user()->shopId)->first();
        $data = 
        DB::table('admins')
        ->select('admins.id as shopId','admins.*', 'currencies.*', 'currencies.id as countryId')
        ->join('currencies', 'currencies.id', '=', 'admins.currencyId')
        ->where('admins.shopId', '=', $userId)
        ->first();
         $info=Admin::where('shopId',Auth::user()->shopId)->first();
         $shopOrEmployee = Auth::user()->role;
        return ['shopOrEmployee' => $shopOrEmployee,'info'=>$info,'refferCount'=>$refferCount,'data' => $data,'userName'=>$userName,'owner'=>$owner,'representative'=>$representative,'reg'=>$reg];
    }

    public function getShopOrEmployee(){
         $shopOrEmployee = Auth::user()->role;
        return ['shopOrEmployee' => $shopOrEmployee];
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }
    public function informationEdit(Request $request)
    {
      if($request->shopOwnerName||$request->shopOwnerMobileNo||$request->shopOwnerEmail){
          if($request->shopOwnerName!=''){
             $id=DB::table('shop_owner_information')->where('shopId',Auth::user()->shopId)->orderby('shopOwnerInfoId','desc')->first();
           
             DB::table('shop_owner_information')->where('shopOwnerInfoId',$id->shopOwnerInfoId)->orderby('shopOwnerInfoId','desc')->update([
                'shopOwnerName' =>$request->shopOwnerName
             ]);
          }
          if($request->shopOwnerMobileNo!=''){
             $id=DB::table('shop_owner_information')->where('shopId',Auth::user()->shopId)->orderby('shopOwnerInfoId','desc')->first();
           
             DB::table('shop_owner_information')->where('shopOwnerInfoId',$id->shopOwnerInfoId)->orderby('shopOwnerInfoId','desc')->update([
                'shopOwnerMobileNo' =>$request->shopOwnerMobileNo
             ]);
          }
          if($request->shopOwnerEmail!=''){
             $id=DB::table('shop_owner_information')->where('shopId',Auth::user()->shopId)->orderby('shopOwnerInfoId','desc')->first();
           
             DB::table('shop_owner_information')->where('shopOwnerInfoId',$id->shopOwnerInfoId)->orderby('shopOwnerInfoId','desc')->update([
                'shopOwnerEmail' =>$request->shopOwnerEmail
             ]);
          }
      }
      if($request->SRName||$request->SRMobileNo||$request->SREmail){
          if($request->SRName!=''){
             $id=DB::table('shop_representative_information')->where('shopId',Auth::user()->shopId)->orderby('shopRepInfoId','desc')->first();
           
             DB::table('shop_representative_information')->where('shopRepInfoId',$id->shopRepInfoId)->orderby('shopRepInfoId','desc')->update([
                'SRName' =>$request->SRName
             ]);
          }
          if($request->SRMobileNo!=''){
             $id=DB::table('shop_representative_information')->where('shopId',Auth::user()->shopId)->orderby('shopRepInfoId','desc')->first();
           
             DB::table('shop_representative_information')->where('shopRepInfoId',$id->shopRepInfoId)->orderby('shopRepInfoId','desc')->update([
                'SRMobileNo' =>$request->SRMobileNo
             ]);
          }
          if($request->SREmail!=''){
             $id=DB::table('shop_representative_information')->where('shopId',Auth::user()->shopId)->orderby('shopRepInfoId','desc')->first();
           
             DB::table('shop_representative_information')->where('shopRepInfoId',$id->shopRepInfoId)->orderby('shopRepInfoId','desc')->update([
                'SREmail' =>$request->SREmail
             ]);
          }
      }
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
