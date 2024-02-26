<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\ShopInformation\ShopAddressLocation;
use Illuminate\Http\Request;

class ActiveShopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    
    // {
        
    //   $items = Admin::where('registredForm',$id)->where('status',[9,10,11,12,13])->limit(100);
    //  return datatables($items)->toJson();
    // }
    // public function activeShopGet($source,$type)
    // {
        
    //   $items = Admin::where('registredForm',$source)->where('shopTypeId',$type)->where('status',[9,10,11,12,13])->limit(100);
    //  return datatables($items)->toJson();
    // }
    public function show($id)
    {
        
        $items = Admin::where('registredForm',$id)->where('status',9)->where('role',3)->limit(100);
       return datatables($items) ->toJson();
      }
      public function activeShopGet($source,$type)
      {
          if($source>0){
        $items = Admin::where('registredForm',$source)->where('shopTypeId',$type)->where('status',9)->where('role',3)->limit(100);
          }
          else{
        $items = Admin::where('shopTypeId',$type)->where('status',9)->where('role',3)->limit(100);
          }
       return datatables($items) ->toJson();
      }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $newshop=Admin::where('id',$id)->with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('employeeId',NULL)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
    
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress];
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
