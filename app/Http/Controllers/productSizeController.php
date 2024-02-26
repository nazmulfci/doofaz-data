<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProductSize;
use App\PurchaseProductEntry;
use App\SalesProductPriceEntry;
use Auth;
use Carbon\Carbon;

class productSizeController extends Controller
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
        $data = ProductSize::where('shopId',Auth::user()->shopId)->get();
        return ['sizeList' => $data];
    }

    public function sizeListById($product,$brand)
    {   
        if(SalesProductPriceEntry::where('shopId',Auth::user()->shopId)->where('productId',$product)->where('brandId',$brand)->where('sizeId','>',0)->exists()){
      
        $sales = SalesProductPriceEntry::distinct()->where('shopId',Auth::user()->shopId)->where('productId',$product)->where('brandId',$brand)->get('sizeId');
        $data = ProductSize::whereIn('id',$sales)->get();
        
        }
        else{
            $data  = [];
        }
        
        return ['sizeList' => $data];
    }





    public function sizeListByBrandId($pId,$bId)
    {
        $data = '';
        if(PurchaseProductEntry::where('productId',$pId)->where('brandId',$bId)->where('sizeId','>',0)->exists()){
            $purchases = PurchaseProductEntry::distinct()->where('productId',$pId)->where('brandId',$bId)->where('sizeId','>',0)->get('sizeId');
            $ids = array();
            foreach($purchases as $purchase){
                $ids[] = $purchase->sizeId;
            }
            $data = ProductSize::whereIn('id',$ids)->where('shopId',Auth::user()->shopId)->get();
            $sizeStatus=1;
        }else{
            $sizeStatus=0;
        }
        
          return [
             'sizeList' => $data,
             'sizeStatus' => $sizeStatus,
            ];
    }


    public function sizeListByColorId($pId,$bId,$colorId)
    {
        $data = '';
        if(PurchaseProductEntry::where('productId',$pId)->where('brandId',$bId)->where('colorId',$colorId)->where('sizeId','>',0)->exists()){
            $purchases = PurchaseProductEntry::distinct()->where('productId',$pId)->where('brandId',$bId)->where('colorId',$colorId)->where('sizeId','>',0)->get('sizeId');
            $ids = array();
            foreach($purchases as $purchase){
                $ids[] = $purchase->sizeId;
            }
            $data = ProductSize::whereIn('id',$ids)->where('shopId',Auth::user()->shopId)->get();
            $sizeStatus=1;
        }else{
            $sizeStatus=0;
        }
        
          return [
             'sizeList' => $data,
             'sizeStatus' => $sizeStatus,
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
            'sizeEntryName' => 'required',
          ],
          [
              'sizeEntryName.required' => 'Enter Size'
          ]
    );

        if(ProductSize::where('shopTypeId',Auth::user()->shopTypeId)->where('sizeName',$request->sizeEntryName)->exists()){
            return ['changeSizeName' => 1];
        }else{
            ProductSize::insert([
                'sizeName' => $request->sizeEntryName,
                'shopId' => Auth::user()->shopId,
                'createBy' => Auth::user()->id,
                'shopTypeId' => Auth::user()->shopTypeId,
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
