<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\SalesPriceType;
use App\ShopPriceTypeConfigure;
use Carbon\Carbon;


class SalesPriceTypeController extends Controller
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
    public function updatePriceTypeConfigure($id)
    {
        if(ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->exists()){
            $priceTypeId = ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->update([
                'priceTypeId' => $id,
                'updateBy' => Auth::user()->id,
                'updated_at' => Carbon::now(),
            ]);
          }
          else{
            $priceTypeId = ShopPriceTypeConfigure::insert([
                'priceTypeId' => $id,
                'shopId' => Auth::user()->shopId,
                'shopTypeId' => Auth::user()->shopTypeId,
                'createBy' => Auth::user()->id,
                'created_at' => Carbon::now(),
            ]);
          }
          return ['priceTypeId' => $priceTypeId];
    }


    public function index()
    {
      $salesPriceTypes=SalesPriceType::orderby('salesPriceTypeId','desc')->get();

      
      if(ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->exists()){
        $priceTypeId = ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->first()->priceTypeId;
      }
      else{
        $priceTypeId = ShopPriceTypeConfigure::first()->priceTypeId; 
      }

      $priceTypeInfo = SalesPriceType::where('salesPriceTypeId',$priceTypeId)->first();

      return [
          'salesPriceTypes'=> $salesPriceTypes,
          'priceTypeId'=> $priceTypeId,
          'priceTypeInfo'=> $priceTypeInfo,
             ];
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
        $this->validate($request, [
           
            'salesPriceType' => 'required|unique:sales_price_types',
        ]);
        SalesPriceType::insert([
            'salesPriceType'=>$request->input('salesPriceType')
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
       $edit=SalesPriceType::where('salesPriceTypeId',$id)->first();
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
        SalesPriceType::where('salesPriceTypeId',$id)->update([
            'salesPriceType'=>$request->input('salesPriceType') 
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
