<?php

namespace App\Http\Controllers\ShopVerification;
use App\ShopInformation\ShopInformation;
use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\ShopInformation\ShopAddressLocation;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ShopverificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $newshop=Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('role',3)->where('status',1)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress];
    }
    public function verifiedShop()
    {
        $newshop=Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('status',2)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress];
    }
    public function pendingShop()
    {
        $newshop=Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('status',3)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress];
    }
    public function cancelShop()
    {
        $newshop=Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('status',4)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress];
    }
    public function informationNeed()
    {
        $newshop=Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('status',5)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress];
    }
    public function informationNeedStatusup()
    {
        $newshop=Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('informationNeedStatus',0)->where('status',5)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress];
    }
    public function deliveredShop()
    {
        $newshop = Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('status',6)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress];
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
      
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       
    }
    public function shopVerificationPending(Request $request,$id)
    {
        Admin::where('shopId',$id)->update([
            'reason'=>$request->reason,
            'status'=>3
         ]);
    }
    public function cancelShopStatus(Request $request,$id)
    {
        Admin::where('shopId',$id)->update([
            'reason'=>$request->reason,
            'status'=>4
         ]);
    }
    public function informationNeedStatus(Request $request,$id)
    {
        Admin::where('shopId',$id)->update([
            'reason'=>$request->reason,
            'status'=>5
         ]);
    }
    public function deliveredShopStatus(Request $request,$id)
    {
   
        Admin::where('shopId',$id)->update([
            'reason'=>$request->reason,
            'status'=>6
         ]);
    }
    public function informationneedBack(Request $request,$id)
    {
        Admin::where('shopId',$id)->update([
         
            'informationNeedStatus'=>1
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
        Admin::where('shopId',$id)->update([
            'reason'=>$request->reason,
            'status'=>2

         ]);
        $link = Admin::where('shopId',$id)->first();
        $url="https://cashbook.com.bd/".$link->id;
         Admin::where('shopId',$id)->update([
            'existingUrl'=>$url,           

         ]);

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
