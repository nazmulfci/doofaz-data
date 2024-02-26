<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProductColor;
use App\UniteEntry;
use App\PurchaseProductEntry;
use App\SalesProductPriceEntry;
use Auth;
use Carbon\Carbon;

class productColorController extends Controller
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
        $data = ProductColor::where('shopId',Auth::user()->shopId)->get();
        return ['colorList' => $data];
    }
    public function colorListById($product,$brand)
    {    
        if(SalesProductPriceEntry::where('shopId',Auth::user()->shopId)->where('productId',$product)->where('brandId',$brand)->where('colorId','>',0)->exists()){
      
        $sales = SalesProductPriceEntry::distinct()->where('shopId',Auth::user()->shopId)->where('productId',$product)->where('brandId',$brand)->get('colorId');
        $data = ProductColor::whereIn('id',$sales)->get();
        
        }
        else{
            $data  = [];
        }
        
        return ['colorList' => $data];
    }

    
    public function checkColorSizeHave($pId,$bId)
    {
        $data = '';
        if(PurchaseProductEntry::where('productId',$pId)->where('brandId',$bId)->exists()){
            // $purchases = PurchaseProductEntry::where('productId',$pId)->where('brandId',$bId)->first();
            
            // $colorId = $purchases->colorId;
            // $sizeId = $purchases->sizeId;

            $brand = 0;
            $color = 0;
            $size = 0;
            $sizeOnly = 0;

            if(PurchaseProductEntry::where('shopId',Auth::user()->shopId)->where('productId',$pId)->where('brandId',$bId)->where('priceSetupStatus',0)->exists()){
            $brand = 1;
            }

            if(PurchaseProductEntry::where('shopId',Auth::user()->shopId)->where('productId',$pId)->where('brandId',$bId)->where('priceSetupStatus',0)->where('colorId','>',0)->exists()){
            $color = 1;
            }

            if(PurchaseProductEntry::where('shopId',Auth::user()->shopId)->where('productId',$pId)->where('brandId',$bId)->where('priceSetupStatus',0)->where('colorId','>',0)->where('sizeId','>',0)->exists()){
            $size = 1;
            }

            if(PurchaseProductEntry::where('shopId',Auth::user()->shopId)->where('productId',$pId)->where('brandId',$bId)->where('priceSetupStatus',0)->where('sizeId','>',0)->exists()){
            $sizeOnly = 1;
            }

            if($color==0 && $size==0){
                $have=0;
            }
            else if($color==1 && $size==1 && $brand==1 && $sizeOnly==1){
                $have=1;
            }
            else if($color==1 && $size==0){
                $have=2;
            }
            else if($color==0 && $size==1){
                $have=3;
            }

              
        }else{
            $have=0;
        }
        
          return [
             'have' => $brand,
            ];
    }
    public function colorListByBrandId($pId,$bId)
    {
        $data = '';
        if(PurchaseProductEntry::where('productId',$pId)->where('brandId',$bId)->where('colorId','>',0)->exists()){
            $purchases = PurchaseProductEntry::distinct()->where('productId',$pId)->where('brandId',$bId)->where('colorId','>',0)->get('colorId');
            foreach($purchases as $purchase){
                $data = ProductColor::where('id',$purchase->colorId)->where('shopId',Auth::user()->shopId)->get();
            }
            $colorStatus=1;
        }else{
            $colorStatus=0;
        }
        
          return [
             'colorList' => $data,
             'colorStatus' => $colorStatus,
            ];
    }
    public function checkColorHave($pId,$bId)
    {
        if(PurchaseProductEntry::where('productId',$pId)->where('brandId',$bId)->where('colorId','>',0)->exists()){
            $colorStatus=1;
        }else{
            $colorStatus=0;
        }
        
          return [
             'colorStatus' => $colorStatus,
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
            'colorEntryName' => 'required',
          ],
          [
              'colorEntryName.required' => 'Enter Color'
          ]
    );

        if(ProductColor::where('colorName',$request->colorEntryName)->where('shopTypeId',Auth::user()->shopTypeId)->exists()){
            return ['changeColorName' => 1];
        }
        else{
        ProductColor::insert([
            'colorName' => $request->colorEntryName,
            'colorCode' => $request->colorEntryCode,
            'shopId' => Auth::user()->shopId,
            'shopTypeId' => Auth::user()->shopTypeId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),

        ]);
    }
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
