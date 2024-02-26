<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SalesProductDiscountPriceEntry;
use App\SalesProductDiscountDateInformation;
use App\SalesProductPriceEntry;
use App\PurchaseProductEntry; 
use App\PurchaseProductDetails; 
use App\ProductName; 
use App\ProductBrandEntry; 
use App\SalesProductPriceEntryHistory; 
use App\PurchaseProductUnitInfo; 
use App\PurchaseProductUnitInfoHistory; 
use Carbon\Carbon;
use Auth;

class SalesProductDiscountPriceEntryController extends Controller
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
        //   =================================  delete area
          $deleteIds = SalesProductDiscountDateInformation::distinct()->where('shopId', Auth::user()->shopId)
          ->where('discountExpiredDate', '<',Carbon::now()->format('Y-m-d'))
          ->get('discountInfoId');
          SalesProductDiscountPriceEntry::where('shopId', Auth::user()->shopId)           
          ->whereIn('salesProductDiscountPriceId',$deleteIds)
          ->delete();
          
          SalesProductDiscountDateInformation::where('shopId', Auth::user()->shopId)           
          ->whereIn('discountInfoId',$deleteIds)
          ->delete();
          
          $infoss = SalesProductDiscountPriceEntry::where('shopId', Auth::user()->shopId)           
          ->where('mrpDiscountAmount',NULL)
          ->where('salesDiscountAmount',NULL)
          ->where('wholesaleDiscountAmount',NULL)
          ->where('specialDiscountAmount',NULL)
          ->where('eCommerceDiscountAmount',NULL)
          ->get();
          foreach($infoss as $infos){
               SalesProductDiscountPriceEntry::where('salesProductDiscountPriceId', $infos->salesProductDiscountPriceId)->delete();
               SalesProductDiscountDateInformation::where('discountInfoId', $infos->salesProductDiscountPriceId)->delete();
          }
          
        //   =================================  /delete area


          $shopTypeId =  Auth::user()->shopTypeId;
          $salesProductDiscountPriceLists = SalesProductDiscountPriceEntry::with('brandget')->with('productName')->where('shopTypeId',$shopTypeId)->where('shopId',Auth::user()->shopId)->where('createBy',Auth::User()->id)->latest()->paginate(20);
          return ['salesProductDiscountPriceLists' => $salesProductDiscountPriceLists];
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */


     public function productPriceEntryInfoById($id)    
    {
       

        $salesProductPrice = SalesProductPriceEntry::where('salesProductPriceEntryId',$id)
        ->where('shopId',Auth::user()->shopId)->first();
        
        return [
             'salesProductPrice' => $salesProductPrice,
          ];

    }


     public function productPriceEntryInfoForPriceUpdate($purchaseProductId,$brandId)    
    {
       
        $info=PurchaseProductEntry::where('productId',$purchaseProductId)
        ->where('brandId',$brandId)
        ->where('shopId',Auth::user()
        ->shopId)->first();

        $productUnitePrice = PurchaseProductEntry::
        with('productName')
        ->select('purchaseProductId','productId','unitPrice')
        ->where('purchaseProductId',$info->purchaseProductId)
        ->where('shopId',Auth::user()->shopId)->latest()->first();


        $salesProductPrice = SalesProductPriceEntry::
        where('productId',$purchaseProductId)
        ->where('brandId',$brandId)
        ->where('shopId',Auth::user()->shopId)->get();
        $pname=ProductName::where('productNameId',$purchaseProductId)->first();
        $brandget=ProductBrandEntry::where('productBrandEntryId',$brandId)->first();
        return [
             'productUnitePrice' =>$productUnitePrice,
             'salesProductPrice' => $salesProductPrice,
             'pname'=> $pname,
             'brandget'=>$brandget
          ];

    }


     public function productPriceEntryInfoForPriceHistory($pId,$bId,$cId,$sId)    
    {
        $salesProductPrice = SalesProductPriceEntryHistory::
        where('productId',$pId)
        ->where('brandId',$bId)
        ->where('colorId',$cId)
        ->where('sizeId',$sId)
        ->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->get();
        
        return [
             'salesProductPrice' => $salesProductPrice,
          ];

    }

     public function productPriceEntryUnitHistory($pId,$bId,$cId,$sId)
    {
        $productInfo = SalesProductPriceEntryHistory::
        where('productId',$pId)
        ->where('brandId',$bId)
        ->where('colorId',$cId)
        ->where('sizeId',$sId)
        ->where('shopId',Auth::user()->shopId)->first();

        $salesProductPrices = PurchaseProductUnitInfoHistory::where('productId',$pId)
        ->where('brandId',$bId)
        ->where('colorId',$cId)
        ->where('sizeId',$sId)
        ->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->get();
        $msg2 = array();
        $colors = array('rgba(221, 26, 26, 0.15)','rgba(10, 255, 48, 0.15)','rgba(255, 217, 10, 0.15)','rgba(37, 8, 238, 0.15)','rgba(175, 255, 0, 0.15)','rgba(0, 0, 0, 0.15)');
        foreach($salesProductPrices as $data){

          $dt = explode(':',$data->created_at);
          $dt1 = substr($dt[2],0,1);
          $color=$colors[$dt1];

          $msg2[] = array(
              "id" => $data->id,
              "priceTypeId" => $data->priceTypeId,
              "unitId" => $data->unitId,
              "salesUnitPrice" => $data->salesUnitPrice,
              "created_at" => date("Y-m-d H:i:s", strtotime($data->created_at)),
              "color" => $color,
              );
      
          }
        
        return [
             'salesProductPrice' => $msg2,
             'productInfo' => $productInfo,
               ];

    }


     public function ProductSalePriceInfo($pId,$bId,$cId,$sId)
    {

        $salesProductPrices = PurchaseProductUnitInfo::where('productId',$pId)
        ->where('brandId',$bId)
        ->where('colorId',$cId)
        ->where('sizeId',$sId)
        ->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
        $msg2 = array();
        $colors = array('rgba(221, 26, 26, 0.15)','rgba(10, 255, 48, 0.15)','rgba(255, 217, 10, 0.15)','rgba(37, 8, 238, 0.15)','rgba(175, 255, 0, 0.15)','rgba(0, 0, 0, 0.15)');
        foreach($salesProductPrices as $data){

          $dt = explode(':',$data->created_at);
          $dt1 = substr($dt[2],0,1);
          $color=$colors[$data->priceTypeId];

          $msg2[] = array(
              "id" => $data->id,
              "priceTypeId" => $data->priceTypeId,
              "unitId" => $data->unitId,
              "salesUnitPrice" => $data->salesUnitPrice,
              "created_at" => date("Y-m-d H:i:s", strtotime($data->created_at)),
              "color" => $color,
              );
      
          }
        
        return [
             'salesProductPrice' => $msg2,
               ];

    }



     public function productPriceEntryInfo($purchaseProductId,$brandId)    
    {
       
        $info=PurchaseProductEntry::where('productId',$purchaseProductId)
        ->where('brandId',$brandId)
        ->where('shopId',Auth::user()
        ->shopId)->first();

        $productUnitePrice = PurchaseProductEntry::
        with('productName')
        ->select('purchaseProductId','productId','unitPrice')
        ->where('purchaseProductId',$info->purchaseProductId)
        ->where('shopId',Auth::user()->shopId)->latest()->first();

        
        $salesProductPrice = SalesProductPriceEntry::with('productName','brandname','color','size')
        ->where('productId',$purchaseProductId)
        ->where('brandId',$brandId)
        ->where('shopId',Auth::user()->shopId)->first();
        $pname=ProductName::where('productNameId',$purchaseProductId)->first();
        $brandget=ProductBrandEntry::where('productBrandEntryId',$brandId)->first();
        return [
             'productUnitePrice' =>$productUnitePrice,
             'salesProductPrice' => $salesProductPrice,
             'pname'=> $pname,
             'brandget'=>$brandget
          ];

    }



     public function productPriceOfferInfo($id)    
    {
       
        $info=PurchaseProductEntry::where('productId',$purchaseProductId)
        ->where('brandId',$brandId)
        ->where('shopId',Auth::user()
        ->shopId)->first();

        $productUnitePrice = PurchaseProductEntry::
        with('productName')
        ->select('purchaseProductId','productId','unitPrice')
        ->where('purchaseProductId',$info->purchaseProductId)
        ->where('shopId',Auth::user()->shopId)->latest()->first();

        
        $salesProductPrice = SalesProductPriceEntry::with('productName','brandname','color','size')
        ->where('productId',$purchaseProductId)
        ->where('brandId',$brandId)
        ->where('shopId',Auth::user()->shopId)->first();
        $pname=ProductName::where('productNameId',$purchaseProductId)->first();
        $brandget=ProductBrandEntry::where('productBrandEntryId',$brandId)->first();
        return [
             'productUnitePrice' =>$productUnitePrice,
             'salesProductPrice' => $salesProductPrice,
             'pname'=> $pname,
             'brandget'=>$brandget
          ];

    }


     public function productPriceEntryInfoColor($purchaseProductId,$brandId,$color)    
    {
       
        $info=PurchaseProductEntry::where('productId',$purchaseProductId)
        ->where('brandId',$brandId)
        ->where('colorId',$color)
        ->where('shopId',Auth::user()
        ->shopId)->first();

        $productUnitePrice = PurchaseProductEntry::
        with('productName')
        ->select('purchaseProductId','productId','unitPrice')
        ->where('purchaseProductId',$info->purchaseProductId)
        ->where('shopId',Auth::user()->shopId)->latest()->first();

        
        $salesProductPrice = SalesProductPriceEntry::with('productName','brandname','color','size')
        ->where('productId',$purchaseProductId)
        ->where('brandId',$brandId)
        ->where('colorId',$color)
        ->where('shopId',Auth::user()->shopId)->first();
        $pname=ProductName::where('productNameId',$purchaseProductId)->first();
        $brandget=ProductBrandEntry::where('productBrandEntryId',$brandId)->first();
        return [
             'productUnitePrice' =>$productUnitePrice,
             'salesProductPrice' => $salesProductPrice,
             'pname'=> $pname,
             'brandget'=>$brandget
          ];

    }


     public function productPriceEntryInfoSize($purchaseProductId,$brandId,$color,$size)    
    {
       
        $info=PurchaseProductEntry::where('productId',$purchaseProductId)
        ->where('brandId',$brandId)
        ->where('colorId',$color)
        ->where('sizeId',$size)
        ->where('shopId',Auth::user()
        ->shopId)->first();

        $productUnitePrice = PurchaseProductEntry::
        with('productName')
        ->select('purchaseProductId','productId','unitPrice')
        ->where('purchaseProductId',$info->purchaseProductId)
        ->where('shopId',Auth::user()->shopId)->latest()->first();

        
        $salesProductPrice = SalesProductPriceEntry::with('productName','brandname','color','size')
        ->where('productId',$purchaseProductId)
        ->where('brandId',$brandId)
        ->where('colorId',$color)
        ->where('sizeId',$size)
        ->where('shopId',Auth::user()->shopId)->first();
        $pname=ProductName::where('productNameId',$purchaseProductId)->first();
        $brandget=ProductBrandEntry::where('productBrandEntryId',$brandId)->first();
        return [
             'productUnitePrice' =>$productUnitePrice,
             'salesProductPrice' => $salesProductPrice,
             'pname'=> $pname,
             'brandget'=>$brandget
          ];

    }
    public function productDetailsInfo($purchaseProductId,$brandId)    
    {
       
        $info=PurchaseProductEntry::where('productId',$purchaseProductId)->where('brandId',$brandId)->where('shopId',Auth::user()->shopId)->first();
        $pDetail = PurchaseProductDetails::where('purchaseProductId',$info->purchaseProductId)->where('shopId',Auth::user()->shopId)->latest()->first();
        $pname=ProductName::where('productNameId',$purchaseProductId)->first();
        $brandget=ProductBrandEntry::where('productBrandEntryId',$brandId)->first();
        return [
             'pDetail' =>$pDetail,
             'pname'=> $pname,
             'brandget'=>$brandget
          ];

    }
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
         $shopTypeId = Auth::user()->shopTypeId;
   
          $mrpStartDate = NULL;
          $mrpExpiredDate = NULL;
          if($request->mrpStartDate){
          $mrpStartDate = date('Y-m-d',strtotime($request->mrpStartDate . "+0 days"));
          $mrpStartDate1 = date('Y-m-d',strtotime($request->mrpStartDate . "+0 days"));
          }
          if($request->mrpExpiredDate){
          $mrpExpiredDate = date('Y-m-d',strtotime($request->mrpExpiredDate . "+0 days"));
          $mrpExpiredDate1 = date('Y-m-d',strtotime($request->mrpExpiredDate . "+0 days"));
          }

          
          $salesStartDate = NULL;
          $salesExpiredDate = NULL;
          if($request->salesStartDate){
          $salesStartDate = date('Y-m-d',strtotime($request->salesStartDate . "+0 days"));
          $salesStartDate1 = date('Y-m-d',strtotime($request->salesStartDate . "+0 days"));
          }
          if($request->salesExpiredDate){
          $salesExpiredDate = date('Y-m-d',strtotime($request->salesExpiredDate . "+0 days"));
          $salesExpiredDate1 = date('Y-m-d',strtotime($request->salesExpiredDate . "+0 days"));
          }


          $wholesaleStartDate = NULL;
          $wholesaleExpiredDate = NULL;
          if($request->wholesaleStartDate){
          $wholesaleStartDate = date('Y-m-d',strtotime($request->wholesaleStartDate . "+0 days"));
          $wholesaleStartDate1 = date('Y-m-d',strtotime($request->wholesaleStartDate . "+0 days"));
          }
          if($request->wholesaleExpiredDate){
          $wholesaleExpiredDate = date('Y-m-d',strtotime($request->wholesaleExpiredDate . "+0 days"));
          $wholesaleExpiredDate1 = date('Y-m-d',strtotime($request->wholesaleExpiredDate . "+0 days"));
          }


          $specialStartDate = NULL;
          $specialExpiredDate = NULL;
          if($request->specialStartDate){
          $specialStartDate = date('Y-m-d',strtotime($request->specialStartDate . "+0 days"));
          $specialStartDate1 = date('Y-m-d',strtotime($request->specialStartDate . "+0 days"));
          }
          if($request->specialExpiredDate){
          $specialExpiredDate = date('Y-m-d',strtotime($request->specialExpiredDate . "+0 days"));
          $specialExpiredDate1 = date('Y-m-d',strtotime($request->specialExpiredDate . "+0 days"));
          }

          
          $eCommerceStartDate = NULL;
          $eCommerceExpiredDate = NULL;
          if($request->eCommerceStartDate){
          $eCommerceStartDate = date('Y-m-d',strtotime($request->eCommerceStartDate . "+0 days"));
          $eCommerceStartDate1 = date('Y-m-d',strtotime($request->eCommerceStartDate . "+0 days"));
          }
          if($request->eCommerceExpiredDate){
          $eCommerceExpiredDate = date('Y-m-d',strtotime($request->eCommerceExpiredDate . "+0 days"));
          $eCommerceExpiredDate1 = date('Y-m-d',strtotime($request->eCommerceExpiredDate . "+0 days"));
          }

          $currentDate = Carbon::now()->format('Y-m-d');

         if (SalesProductDiscountPriceEntry::where('purchaseProductId',$request->purchaseProductId)->where('mrpExpiredDate','>=',$currentDate)->exists()) {
              return ['alReadyEntry' => 'Already Sales Product Price Entry'];
         }
         elseif (SalesProductDiscountPriceEntry::where('purchaseProductId',$request->purchaseProductId)->where('salesExpiredDate','>=',$currentDate)->exists()) {
              return ['alReadyEntry' => 'Already Sales Product Price Entry'];
         }
         elseif (SalesProductDiscountPriceEntry::where('purchaseProductId',$request->purchaseProductId)->where('wholesaleExpiredDate','>=',$currentDate)->exists()) {
              return ['alReadyEntry' => 'Already Sales Product Price Entry'];
         }
         elseif (SalesProductDiscountPriceEntry::where('purchaseProductId',$request->purchaseProductId)->where('specialExpiredDate','>=',$currentDate)->exists()) {
              return ['alReadyEntry' => 'Already Sales Product Price Entry'];
         }
         elseif (SalesProductDiscountPriceEntry::where('purchaseProductId',$request->purchaseProductId)->where('eCommerceExpiredDate','>=',$currentDate)->exists()) {
              return ['alReadyEntry' => 'Already Sales Product Price Entry'];
         }
         else {

               $color = 0;
              if($request->colorId>0){
              $color = $request->colorId;
              }

              $size = 0;
              if($request->sizeId>0){
               $size = $request->sizeId;
              }
          $infos=PurchaseProductEntry::where('productId',$request->purchaseProductId)->where('brandId',$request->productBrandId)->where('shopId',Auth::user()->shopId)->first();
             $lastInsertId = SalesProductDiscountPriceEntry::insertGetId([
                  'purchaseProductId' => $infos->purchaseProductId,
                  'productId' => $request->productId,
                  'brandId' => $request->productBrandId,
                  'colorId' => $color,
                  'sizeId' => $size,

                  'mrpDiscountAmount' => $request->mrpDiscountAmount,
                  'mrpDiscountType' => $request->mrpDiscountType,
                  'mrpStartDate' => $mrpStartDate,
                  'mrpExpiredDate' => $mrpExpiredDate,
                  'mrpPrice' => $request->mrpPrice,

                  'salesDiscountAmount' => $request->salesDiscountAmount,
                  'salesDiscountType' => $request->salesDiscountType,
                  'salesStartDate' => $salesStartDate,
                  'salesExpiredDate' => $salesExpiredDate,
                  'salesPrice' => $request->salesPrice,

                  'wholesaleDiscountAmount' => $request->wholesaleDiscountAmount,
                  'wholesaleDiscountType' => $request->wholesaleDiscountType,
                  'wholesaleStartDate' => $wholesaleStartDate,
                  'wholesaleExpiredDate' => $wholesaleExpiredDate,
                  'wholesalePrice' => $request->wholesalePrice,

                  'specialDiscountAmount' => $request->specialDiscountAmount,
                  'specialDiscountType' => $request->specialDiscountType,
                  'specialStartDate' => $specialStartDate,
                  'specialExpiredDate' => $specialExpiredDate,
                  'specialPrice' => $request->specialPrice,

                  'eCommerceDiscountAmount' => $request->eCommerceDiscountAmount,
                  'eCommerceDiscountType' => $request->eCommerceDiscountType,
                  'eCommerceStartDate' => $eCommerceStartDate,
                  'eCommerceExpiredDate' => $eCommerceExpiredDate,
                  'eCommercePrice' => $request->eCommercePrice,

                  'shopId' => Auth::User()->shopId,
                  'shopTypeId' => $shopTypeId,
                  'createBy' => Auth::User()->id,
                  'created_at' => Carbon::now(),
             ]);
             $info=PurchaseProductEntry::where('productId',$request->purchaseProductId)->where('brandId',$request->productBrandId)->where('shopId',Auth::user()->shopId)->first();
             PurchaseProductEntry::where('purchaseProductId',$info->purchaseProductId)->update([
               'discountStatus'=>1
               ]);

             if($request->mrpDiscountAmount>0){
               SalesProductDiscountDateInformation::insert([
                    'discountInfoId' => $lastInsertId,
                    'purchaseProductId' => $info->purchaseProductId,
                    'productId' => $request->purchaseProductId,
                    'brandId' => $request->productBrandId,
                    'colorId' => $color,
                    'sizeId' => $size,

                    'discountType' => 1,
                    'discountAmount' => $request->mrpDiscountAmount,
                    'discountAmountType' => $request->mrpDiscountType,
                    'discountStartDate' => $mrpStartDate1,
                    'discountExpiredDate' => $mrpExpiredDate1,
                    'discountPrice' => $request->mrpPrice,

                    'shopId' => Auth::User()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
               ]);
             }

             if($request->salesDiscountAmount>0){

               SalesProductDiscountDateInformation::insert([
                    'discountInfoId' => $lastInsertId,
                    'purchaseProductId' => $info->purchaseProductId,
                    'productId' => $request->purchaseProductId,
                    'brandId' => $request->productBrandId,
                    'colorId' => $color,
                    'sizeId' => $size,

                    'discountType' => 2,
                    'discountAmount' => $request->salesDiscountAmount,
                    'discountAmountType' => $request->salesDiscountType,
                    'discountStartDate' => $salesStartDate1,
                    'discountExpiredDate' => $salesExpiredDate1,
                    'discountPrice' => $request->salesPrice,

                    'shopId' => Auth::User()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
               ]);
             }

             if($request->wholesaleDiscountAmount>0){

               SalesProductDiscountDateInformation::insert([
                    'discountInfoId' => $lastInsertId,
                    'purchaseProductId' => $info->purchaseProductId,
                    'productId' => $request->purchaseProductId,
                    'brandId' => $request->productBrandId,
                    'colorId' => $color,
                    'sizeId' => $size,

                    'discountType' => 3,
                    'discountAmount' => $request->wholesaleDiscountAmount,
                    'discountAmountType' => $request->wholesaleDiscountType,
                    'discountStartDate' => $wholesaleStartDate1,
                    'discountExpiredDate' => $wholesaleExpiredDate1,
                    'discountPrice' => $request->wholesalePrice,

                    'shopId' => Auth::User()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
               ]);
             }

             if($request->specialDiscountAmount>0){
               
               SalesProductDiscountDateInformation::insert([
                    'discountInfoId' => $lastInsertId,
                    'purchaseProductId' => $info->purchaseProductId,
                    'productId' => $request->purchaseProductId,
                    'brandId' => $request->productBrandId,
                    'colorId' => $color,
                    'sizeId' => $size,

                    'discountType' => 4,
                    'discountAmount' => $request->specialDiscountAmount,
                    'discountAmountType' => $request->specialDiscountType,
                    'discountStartDate' => $specialStartDate1,
                    'discountExpiredDate' => $specialExpiredDate1,
                    'discountPrice' => $request->specialPrice,

                    'shopId' => Auth::User()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
               ]);
             }

             if($request->eCommerceDiscountAmount>0){
               
               SalesProductDiscountDateInformation::insert([
                    'discountInfoId' => $lastInsertId,
                    'purchaseProductId' => $info->purchaseProductId,
                    'productId' => $request->purchaseProductId,
                    'brandId' => $request->productBrandId,
                    'colorId' => $color,
                    'sizeId' => $size,

                    'discountType' => 5,
                    'discountAmount' => $request->eCommerceDiscountAmount,
                    'discountAmountType' => $request->eCommerceDiscountType,
                    'discountStartDate' => $eCommerceStartDate1,
                    'discountExpiredDate' => $eCommerceExpiredDate1,
                    'discountPrice' => $request->eCommercePrice,

                    'shopId' => Auth::User()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
               ]);
             }



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
    public function edit($salesProductDiscountPriceId)
    {
         $productDiscountPrice = SalesProductDiscountPriceEntry::with('productName')->where('salesProductDiscountPriceId',$salesProductDiscountPriceId)->latest()->first();
         $productUnitePrice = PurchaseProductEntry::with('productName')->select('purchaseProductId','unitPrice')->where('purchaseProductId',$productDiscountPrice->purchaseProductId)->where('shopId',Auth::user()->shopId)->latest()->first();
         $productSalesPrice = SalesProductPriceEntry::where('shopId',Auth::user()->shopId)->where('purchaseProductId',$productUnitePrice->purchaseProductId)->first();
          
        return [
               'productDiscountPrice' => $productDiscountPrice,
               'productUnitePrice' => $productUnitePrice,
               'productSalesPrice' => $productSalesPrice,
          ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $salesProductDiscountPriceId)
    {
          if (1){


               $mrpStartDate = NULL;
               $mrpExpiredDate = NULL;
               if($request->mrpStartDate){
                $mrpStartDate = date('Y-m-d',strtotime($request->mrpStartDate . "+0 days"));
               }
               if($request->mrpExpiredDate){
                $mrpExpiredDate = date('Y-m-d',strtotime($request->mrpExpiredDate . "+0 days"));
               }

                
               $salesStartDate = NULL;
               $salesExpiredDate = NULL;

               if($request->salesStartDate){
                $salesStartDate = date('Y-m-d',strtotime($request->salesStartDate . "+0 days"));
               }
               if($request->salesExpiredDate){
                $salesExpiredDate = date('Y-m-d',strtotime($request->salesExpiredDate . "+0 days"));
               }
                


               $wholesaleStartDate = NULL;
               $wholesaleExpiredDate = NULL;
               if($request->wholesaleStartDate){
                $wholesaleStartDate = date('Y-m-d',strtotime($request->wholesaleStartDate . "+0 days"));
               }
               if($request->wholesaleExpiredDate){
                    $wholesaleExpiredDate = date('Y-m-d',strtotime($request->wholesaleExpiredDate . "+0 days"));
               }
           

               $specialStartDate = NULL;
               $specialExpiredDate = NULL;
               if($request->specialStartDate){
                $specialStartDate = date('Y-m-d',strtotime($request->specialStartDate . "+0 days"));
               }
               if($request->specialExpiredDate){
                    $specialExpiredDate = date('Y-m-d',strtotime($request->specialExpiredDate . "+0 days"));
               }
                
               $eCommerceStartDate = NULL;
               $eCommerceExpiredDate = NULL;

               if($request->eCommerceStartDate){
                $eCommerceStartDate = date('Y-m-d',strtotime($request->eCommerceStartDate . "+0 days"));
               }
               if($request->eCommerceExpiredDate){
                    $eCommerceExpiredDate = date('Y-m-d',strtotime($request->eCommerceExpiredDate . "+0 days"));
               }


                SalesProductDiscountPriceEntry::
                where('salesProductDiscountPriceId', $salesProductDiscountPriceId)->update([
                  'mrpDiscountAmount' => $request->mrpDiscountAmount,
                  'mrpDiscountType' => $request->mrpDiscountType,
                  'mrpStartDate' => $mrpStartDate,
                  'mrpExpiredDate' => $mrpExpiredDate,
                  'mrpPrice' => $request->mrpPrice,
                  'salesDiscountAmount' => $request->salesDiscountAmount,
                  'salesDiscountType' => $request->salesDiscountType,
                  'salesStartDate' => $salesStartDate,
                  'salesExpiredDate' => $salesExpiredDate,
                  'salesPrice' => $request->salesPrice,
                  'wholesaleDiscountAmount' => $request->wholesaleDiscountAmount,
                  'wholesaleDiscountType' => $request->wholesaleDiscountType,
                  'wholesaleStartDate' => $wholesaleStartDate,
                  'wholesaleExpiredDate' => $wholesaleExpiredDate,
                  'wholesalePrice' => $request->wholesalePrice,
                  'specialDiscountAmount' => $request->specialDiscountAmount,
                  'specialDiscountType' => $request->specialDiscountType,
                  'specialStartDate' => $specialStartDate,
                  'specialExpiredDate' =>$specialExpiredDate,
                  'specialPrice' => $request->specialPrice,
                  'eCommerceDiscountAmount' => $request->eCommerceDiscountAmount,
                  'eCommerceDiscountType' => $request->eCommerceDiscountType,
                  'eCommerceStartDate' => $eCommerceStartDate,
                  'eCommerceExpiredDate' =>$eCommerceExpiredDate,
                  'eCommercePrice' => $request->eCommercePrice,
                  'updateBy' => Auth::User()->id,
              ]);

              SalesProductDiscountDateInformation::where('discountInfoId', $salesProductDiscountPriceId)->delete();
              
              $lastInsertId = $salesProductDiscountPriceId;
              $info = SalesProductDiscountPriceEntry::where('salesProductDiscountPriceId', $salesProductDiscountPriceId)->first();
              $shopTypeId = Auth::user()->shopTypeId;

              if($request->mrpDiscountAmount>0){
               SalesProductDiscountDateInformation::insert([
                    'discountInfoId' => $lastInsertId,
                    'purchaseProductId' => $info->purchaseProductId,
                    'productId' => $info->productId,
                    'brandId' => $info->brandId,
                    'colorId' => $info->colorId,
                    'sizeId' => $info->sizeId,

                    'discountType' => 1,
                    'discountAmount' => $request->mrpDiscountAmount,
                    'discountAmountType' => $request->mrpDiscountType,
                    'discountStartDate' => $mrpStartDate,
                    'discountExpiredDate' => $mrpExpiredDate,
                    'discountPrice' => $request->mrpPrice,

                    'shopId' => Auth::User()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
               ]);
             }

             if($request->salesDiscountAmount>0){

               SalesProductDiscountDateInformation::insert([
                    'discountInfoId' => $lastInsertId,
                    'purchaseProductId' => $info->purchaseProductId,
                    'productId' => $info->productId,
                    'brandId' => $info->brandId,
                    'colorId' => $info->colorId,
                    'sizeId' => $info->sizeId,

                    'discountType' => 2,
                    'discountAmount' => $request->salesDiscountAmount,
                    'discountAmountType' => $request->salesDiscountType,
                    'discountStartDate' => $salesStartDate,
                    'discountExpiredDate' => $salesExpiredDate,
                    'discountPrice' => $request->salesPrice,

                    'shopId' => Auth::User()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
               ]);
             }

             if($request->wholesaleDiscountAmount>0){

               SalesProductDiscountDateInformation::insert([
                    'discountInfoId' => $lastInsertId,
                    'purchaseProductId' => $info->purchaseProductId,
                    'productId' => $info->productId,
                    'brandId' => $info->brandId,
                    'colorId' => $info->colorId,
                    'sizeId' => $info->sizeId,

                    'discountType' => 3,
                    'discountAmount' => $request->wholesaleDiscountAmount,
                    'discountAmountType' => $request->wholesaleDiscountType,
                    'discountStartDate' => $wholesaleStartDate,
                    'discountExpiredDate' => $wholesaleExpiredDate,
                    'discountPrice' => $request->wholesalePrice,

                    'shopId' => Auth::User()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
               ]);
             }

             if($request->specialDiscountAmount>0){
               
               SalesProductDiscountDateInformation::insert([
                    'discountInfoId' => $lastInsertId,
                    'purchaseProductId' => $info->purchaseProductId,
                    'productId' => $info->productId,
                    'brandId' => $info->brandId,
                    'colorId' => $info->colorId,
                    'sizeId' => $info->sizeId,

                    'discountType' => 4,
                    'discountAmount' => $request->specialDiscountAmount,
                    'discountAmountType' => $request->specialDiscountType,
                    'discountStartDate' => $specialStartDate,
                    'discountExpiredDate' => $specialExpiredDate,
                    'discountPrice' => $request->specialPrice,

                    'shopId' => Auth::User()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
               ]);
             }

             if($request->eCommerceDiscountAmount>0){
               
               SalesProductDiscountDateInformation::insert([
                    'discountInfoId' => $lastInsertId,
                    'purchaseProductId' => $info->purchaseProductId,
                    'productId' => $info->productId,
                    'brandId' => $info->brandId,
                    'colorId' => $info->colorId,
                    'sizeId' => $info->sizeId,

                    'discountType' => 5,
                    'discountAmount' => $request->eCommerceDiscountAmount,
                    'discountAmountType' => $request->eCommerceDiscountType,
                    'discountStartDate' => $eCommerceStartDate,
                    'discountExpiredDate' => $eCommerceExpiredDate,
                    'discountPrice' => $request->eCommercePrice,

                    'shopId' => Auth::User()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
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
