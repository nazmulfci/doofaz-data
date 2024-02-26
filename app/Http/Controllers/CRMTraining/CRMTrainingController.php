<?php

namespace App\Http\Controllers\CRMTraining;
use App\ShopInformation\ShopInformation;

use App\Models\Admin;
use App\CRMTraining\Training;
use App\ShopInformation\ShopAddressLocation;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CRMTrainingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $newshop=Admin::where('role',3)->with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('status',9)->get();
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
        $newshop=Admin::where('role',3)->with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('status',10)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        $slist=Training::get();
        
   
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress,'slist'=>$slist];
    }
    public function trainerTSchedule()
    {
        $newshop=Admin::where('role',3)->with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('status',11)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        $slist=Training::with('trainer')->get();
        
   
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress,'slist'=>$slist];
    }
    public function successTraining()
    {
        $newshop=Admin::where('role',3)->with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('status',12)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        $slist=Training::with('trainer')->get();
        
   
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress,'slist'=>$slist];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Training::insert([
          'shopId'=>$request->input('shopId'),
          'tLocation'=>$request->input('tLocation'),
          'tDate'=>$request->input('tDate'),
          'tTime'=>$request->input('tTime'),
          'tMember'=>$request->input('tMember'),
        ]);
        Admin::where('shopId',$request->input('shopId'))->update([
            'status'=>10
         ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        Admin::where('shopId', $id)->update([
            'status'=>12
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
       $edit=Training::where('id',$id)->first();
       return response()->json($edit);
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
      
        Training::where('id',$id)->update([
           
            'tLocation'=>$request->input('tLocation'),
            'tDate'=>$request->input('tDate'),
            'tTime'=>$request->input('tTime'),
            'tMember'=>$request->input('tMember'),
          ]);
    }
    public function trainerAssign(Request $request, $id)
    {
       Training::where('id',$id)->update([
           'trainerId'=>$request->input('trainerId')
       ]);
      $shop=Training::where('id',$id)->first();
       Admin::where('shopId', $shop->shopId)->update([
        'status'=>11
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
