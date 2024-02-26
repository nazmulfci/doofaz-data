<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\ProductPriceSetupDetail;
use App\PurchaseProductDetails;
use App\SalesProductPriceEntry;
use App\PurchaseProductEntry;
use App\ProductBrandEntry;
use App\ProductCategory;
use App\ShopInformation;
use App\ProductName;
use App\PriceSetupHistory;
use App\ProductLowQuantity;
use App\Category;
use App\ProductExpireDateSoon;
use App\PurchaseProductTotalPrice;
use Carbon\Carbon;
use Auth;
use DataTables;


class AlertController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
            $shopTypeId = Auth::user()->shopTypeId;
            $nowData = Carbon::now()->format('Y-m-d');
            $exp = ProductExpireDateSoon::orderby('id', 'desc')->first();
           if(!empty($exp)){
              $dt=$exp->soonDate;
           }
           else{
               $dt=0;
           }
            $soonDates = PurchaseProductDetails::with('productPriceDetails.brandName')->with('productName')->where('expiryDate', '>', $nowData)->whereDate('expiryDate', '<=', Carbon::now()->addDay($dt))->where('shopId',Auth::user()->shopId)->where('dateOverSoonStatus',0)->get()
            
            ;


            $shortage = PurchaseProductDetails::with('productPriceDetails.brandName', 'productName')
            ->with('purchaseProductInfo')
            ->with('total')
            ->whereHas('total', function ($query) {
                $query->whereColumn('totalQuantity', '<=', 'purchase_product_details.quantityNoti');
            })
            ->where('shortageStatus',0)
            ->where('shopId', Auth::user()->shopId)->latest()->get();
       
            $info = ProductLowQuantity::where('shopId', Auth::user()->id)->orderby('id', 'desc')->first();
            if(empty($info)) {
                $qt=0;
            }
            else{
                $qt=$info->lowQuantity;
            }
             $low = PurchaseProductTotalPrice::with('productName')
             
            -> where('totalQuantity', '<=', $qt)           
           ->where('shopId', Auth::user()->id)->where('shopTypeId', $shopTypeId)->where('seenStatus',0)->get();        
 
             $stockZero = PurchaseProductTotalPrice::with('productName')             
             ->where('totalQuantity', 0)           
            ->where('shopId', Auth::user()->id)->where('shopTypeId', $shopTypeId)->where('stockStatus',0)->get();        
 
         
            $expired = PurchaseProductDetails::with('productPriceDetails.brandName','productName')->where('expiryDate', '<', $nowData)->where('dateOverStatus',0)->where('shopId', Auth::user()->shopId)->get();
          
            return ['soonDates'=>$soonDates,'stockZero'=>$stockZero,'nowData'=>$nowData,'shortage'=>$shortage,'low'=>$low,'expired'=>$expired];
             
         
        

    
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $shopTypeId = Auth::user()->shopTypeId;
        $nowData = Carbon::now()->format('Y-m-d');
        $exp = ProductExpireDateSoon::orderby('id', 'desc')->first();
       if(!empty($exp)){
          $dt=$exp->soonDate;
       }
       else{
           $dt=0;
       }
        $soonDatesCount = PurchaseProductDetails::with('productPriceDetails.brandName')->with('productName')->where('expiryDate', '>', $nowData)->whereDate('expiryDate', '<=', Carbon::now()->addDay($dt))->where('shopId',Auth::user()->shopId)->where('dateOverSoonStatus',0)->count()
        
        ;


        $shortageCount = PurchaseProductDetails::with('productPriceDetails.brandName', 'productName')
        ->with('purchaseProductInfo')
        ->with('total')
        ->whereHas('total', function ($query) {
            $query->whereColumn('totalQuantity', '<=', 'purchase_product_details.quantityNoti');
        })
        ->where('shortageStatus',0)
        ->where('shopId', Auth::user()->shopId)->latest()->count();
        $stockZeroCount = PurchaseProductTotalPrice::with('productName')             
        ->where('totalQuantity', 0)           
       ->where('shopId', Auth::user()->id)->where('shopTypeId', $shopTypeId)->where('stockStatus',0)->count();        

        $info = ProductLowQuantity::where('shopId', Auth::user()->id)->orderby('id', 'desc')->first();
        if(empty($info)) {
            $qt=0;
        }
        else{
            $qt=$info->lowQuantity;
        }
         $lowCount = PurchaseProductTotalPrice::with('productName')
         
        ->where('totalQuantity', '<=', $qt)           
       ->where('shopId', Auth::user()->id)->where('shopTypeId', $shopTypeId)->where('seenStatus',0)->count();        
       $expiredCount = PurchaseProductDetails::with('productPriceDetails.brandName','productName')->where('expiryDate', '<', $nowData)->where('dateOverStatus',0)->where('shopId', Auth::user()->shopId)->count();
        $totalCount=$soonDatesCount+$shortageCount+$lowCount+$expiredCount+$stockZeroCount; 
        return ['totalCount'=>$totalCount];
         
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
        PurchaseProductDetails::where('purchaseProductDetailsId', $id)->where('shopId', Auth::user()->shopId)->update([
         'dateOverStatus'=>1   
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
        PurchaseProductTotalPrice:: where('shopId', Auth::user()->id)->where('purchaseProductTotalPriceId', $id)->update([
            'seenStatus'=>1
        ]); 
    }
    public function alertstockZeroNoti($id)
    {
        PurchaseProductTotalPrice:: where('shopId', Auth::user()->id)->where('purchaseProductTotalPriceId', $id)->update([
            'stockStatus'=>1
        ]); 
    }
    public function alertsoonExpNoti($id)
    {
        PurchaseProductDetails::where('purchaseProductDetailsId', $id)->where('shopId', Auth::user()->shopId)->update([
            'dateOverSoonStatus'=>1   
           ]); 
    }
    public function alertshortageNoti($id)
    {
        PurchaseProductDetails::where('purchaseProductDetailsId', $id)->where('shopId', Auth::user()->shopId)->update([
            'shortageStatus'=>1   
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
