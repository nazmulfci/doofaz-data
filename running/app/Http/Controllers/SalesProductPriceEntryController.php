<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PurchaseProductDetails;
use App\SalesProductPriceEntry;
use App\PurchaseProductEntry;
use App\ProductCategory;
use App\ProductName;
use App\Category;
use App\ProductBrandEntry;
use App\PriceSetupHistory;
use App\PurchaseType;
use App\StockSummery;
use App\SalesProductPriceEntryHistory;
use Auth;
use Carbon\Carbon;

class SalesProductPriceEntryController extends Controller
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
          $shopTypeId = Auth::user()->shopTypeId;

          $salesProductPriceLists = SalesProductPriceEntry::with('productName')->with('brand')->where('shopTypeId',$shopTypeId)->where('shopId',Auth::user()->shopId)->where('createBy',Auth::User()->id)->latest()->paginate(30);
          return ['salesProductPriceLists' => $salesProductPriceLists];
    }


    public function salesProductNameShowOffer()
    {
          $shopTypeId = Auth::user()->shopTypeId;

          $salesPriceProductLists = SalesProductPriceEntry::distinct('productId')->with('productName')->where('shopTypeId',$shopTypeId)->where('shopId',Auth::user()->shopId)->get('productId');
          
          return ['salesPriceProductLists'  => $salesPriceProductLists ];
    }


    public function salesProductNameShow()
    {
          $shopTypeId = Auth::user()->shopTypeId;

          $purchaseProductLists = PurchaseProductEntry::distinct('productId')->with('productName')->where('shopTypeId',$shopTypeId)->where('priceSetupStatus',0)->where('shopId',Auth::user()->shopId)->get('productId');
          $purchaseProductListgets = PurchaseProductEntry::distinct('productId')->with('productName')->where('shopTypeId',$shopTypeId)->where('discountStatus',0)->where('priceSetupStatus',1)->where('shopId',Auth::user()->shopId)->get(['productId']);
          $purchaseProductListinfo = PurchaseProductEntry::distinct('productId')->with('productName')->where('shopTypeId',$shopTypeId)->where('shopId',Auth::user()->shopId)->get(['productId']);

          return ['purchaseProductLists'  => $purchaseProductLists,
          'purchaseProductListgets'=> $purchaseProductListgets,
          'purchaseProductListinfo' => $purchaseProductListinfo ];
    }

    public function salesProductPriceId($id)
    {
        $productList = SalesProductPriceEntry::with('productName','brandName') 
        ->where('purchaseProductId',$id)
        ->first();

        return ['productList' => $productList ];
    }

    public function salesProductPriceOfferId($id)
    {
        $salesProductPrice = SalesProductPriceEntry::with('productName','brandname','color','size')
        ->where('salesProductPriceEntryId',$id)
        ->where('shopId',Auth::user()->shopId)->first();

        $purchaseProductId = $salesProductPrice->productId;
        $brandId = $salesProductPrice->brandId;

        $info=PurchaseProductEntry::where('productId',$purchaseProductId)
        ->where('brandId',$brandId)
        ->where('shopId',Auth::user()
        ->shopId)->first();

        $productUnitePrice = PurchaseProductEntry::
        with('productName')
        ->select('purchaseProductId','productId','unitPrice')
        ->where('purchaseProductId',$info->purchaseProductId)
        ->where('shopId',Auth::user()->shopId)->latest()->first();

          
        $pname=ProductName::where('productNameId',$purchaseProductId)->first();
        $brandget=ProductBrandEntry::where('productBrandEntryId',$brandId)->first();

        return [
             'productUnitePrice' =>$productUnitePrice,
             'salesProductPrice' => $salesProductPrice,
             'pname'=> $pname,
             'brandget'=>$brandget
          ];
    }

    public function salesProductPurchaseId($id)
    {
        $productList = PurchaseProductEntry::with('productName','brandName') 
        ->where('purchaseProductId',$id)
        ->first();

        return ['productList' => $productList ];
    }

    public function salesProductListBrandWise($productId,$brandId)
    {
        $productList = PurchaseProductEntry::with('productName','brandName')
        ->where('productId',$productId)
        ->where('brandId',$brandId)
        ->where('priceSetupStatus',0)
        ->get();

        return ['productList' => $productList ];
    }

    public function purchaseProductListBrandWise($productId,$brandId)
    {
        $productList = PurchaseProductEntry::with('productName','brandName')
        ->where('productId',$productId)
        ->where('brandId',$brandId)
        ->where('rePurchaseStatus',0)
        ->get();

        return ['productList' => $productList ];
    }

    public function salesProductListBrandWiseForOffer($productId,$brandId)
    {
        $productList = SalesProductPriceEntry::with('productName','brandName')
        ->where('productId',$productId)
        ->where('brandId',$brandId)
        ->get();

        return ['productList' => $productList ];
    }

    public function salesProductBrandShow($productId,$brandId)
    {
          $shopTypeId = Auth::user()->shopTypeId;

          $purchaseTypeList = PurchaseProductEntry::distinct()
          ->where('productId',$productId)
          ->where('brandId',$brandId)
          ->where('shopTypeId',$shopTypeId)
          ->where('shopId',Auth::user()->shopId)
          ->get('purchaseType');
          $productPurchaseTypeList = PurchaseType::get();

          return [
              'purchaseTypeList'  => $purchaseTypeList,
              'productPurchaseTypeList'  => $productPurchaseTypeList
            ];
    }

    public function salesProductBrandShowColor($productId,$brandId,$color)
    {
          $shopTypeId = Auth::user()->shopTypeId;

          $purchaseTypeList = PurchaseProductEntry::distinct()
          ->where('productId',$productId)
          ->where('brandId',$brandId)
          ->where('colorId',$colorId)
          ->where('shopTypeId',$shopTypeId)
          ->where('shopId',Auth::user()->shopId)
          ->get('purchaseType');
          $productPurchaseTypeList = PurchaseType::get();

          return [
              'purchaseTypeList'  => $purchaseTypeList,
              'productPurchaseTypeList'  => $productPurchaseTypeList
            ];
    }

    public function salesProductBrandShowSizeWithoutColor($productId,$brandId,$sizeId)
    {
          $shopTypeId = Auth::user()->shopTypeId;

          $purchaseTypeList = PurchaseProductEntry::distinct()
          ->where('productId',$productId)
          ->where('brandId',$brandId)
          ->where('sizeId',$sizeId)
          ->where('shopTypeId',$shopTypeId)
          ->where('shopId',Auth::user()->shopId)
          ->get('purchaseType');
          $productPurchaseTypeList = PurchaseType::get();

          return [
              'purchaseTypeList'  => $purchaseTypeList,
              'productPurchaseTypeList'  => $productPurchaseTypeList
            ];
    }

    public function salesProductBrandShowSize($productId,$brandId,$color,$size)
    {
          $shopTypeId = Auth::user()->shopTypeId;

          $purchaseTypeList = PurchaseProductEntry::distinct()
          ->where('productId',$productId)
          ->where('brandId',$brandId)
          ->where('colorId',$colorId)
          ->where('sizeId',$sizeId)
          ->where('shopTypeId',$shopTypeId)
          ->where('shopId',Auth::user()->shopId)
          ->get('purchaseType');
          $productPurchaseTypeList = PurchaseType::get();

          return [
              'purchaseTypeList'  => $purchaseTypeList,
              'productPurchaseTypeList'  => $productPurchaseTypeList
            ];
    }

    
    public function productUnitePrice($id)
    {
        $shopTypeId = Auth::user()->shopTypeId;
      
        $brandList = PurchaseProductEntry::with('productName','brandName')->where('productId',$id)->where('priceSetupStatus',0)->where('shopId',Auth::user()->shopId)
        ->groupby('brandId')
        ->get('brandId');
        $brandListgt = PurchaseProductEntry::with('productName','brandName')->where('productId',$id)->where('shopId',Auth::user()->shopId)
        ->groupby('brandId')
        ->get('brandId');
        $brandListinfo = PurchaseProductEntry::distinct()->with('productName')->where('productId',$id)->where('shopTypeId',$shopTypeId)->where('shopId',Auth::user()->shopId)->get('brandId');
        $brandListget = PurchaseProductEntry::distinct()->with('productName')->where('productId',$id)->where('shopTypeId',$shopTypeId)->where('discountStatus',0)->where('priceSetupStatus',1)->where('shopId',Auth::user()->id)->get('brandId');
        $productBrandList = ProductBrandEntry::get();

        return [
           
            'brandList'  => $brandList,
            'brandListgt'  => $brandListgt,
            'brandListget'=> $brandListget,
            'productBrandList'  => $productBrandList,
            'brandListinfo'  => $brandListinfo
      ];
    }
    
    public function productUniteOfferEntry($id)
    {
        $shopTypeId = Auth::user()->shopTypeId;
      
        $brandList = PurchaseProductEntry::with('productName','brandName')->where('productId',$id)->where('shopId',Auth::user()->shopId)
        ->groupby('brandId')
        ->get('brandId');
        $brandListgt = PurchaseProductEntry::with('productName','brandName')->where('productId',$id)->where('shopId',Auth::user()->shopId)
        ->groupby('brandId')
        ->get('brandId');
        $brandListinfo = PurchaseProductEntry::distinct()->with('productName')->where('productId',$id)->where('shopTypeId',$shopTypeId)->where('shopId',Auth::user()->shopId)->get('brandId');
        $brandListget = PurchaseProductEntry::distinct()->with('productName')->where('productId',$id)->where('shopTypeId',$shopTypeId)->where('discountStatus',0)->where('shopId',Auth::user()->id)->get('brandId');
        $productBrandList = ProductBrandEntry::get();

        return [
           
            'brandList'  => $brandList,
            'brandListgt'  => $brandListgt,
            'brandListget'=> $brandListget,
            'productBrandList'  => $productBrandList,
            'brandListinfo'  => $brandListinfo
      ];
    }

    public function productUnitePrice1($purchaseProductId,$brandId,$purchaseTypeId)
    {
          $shopId = Auth::user()->shopId;
          $productUnitePrice = PurchaseProductEntry::with('productName')
          ->select('purchaseProductId','productId','unitPrice')
          ->where('productId',$purchaseProductId)
          ->where('brandId',$brandId)
          ->where('purchaseType',$purchaseTypeId)
          ->where('shopId',Auth::user()->shopId)
          ->first();
          return ['productUnitePrice' => $productUnitePrice];
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
         $shopTypeId = Auth::user()->shopTypeId;

         $colorId = 0;         
            if($request->colorId>0){
                $colorId = $request->colorId;
            }
         $sizeId = 0;         
            if($request->sizeId>0){
                $sizeId = $request->sizeId;
            }
        //  if (SalesProductPriceEntry::where('shopId',Auth::user()->shopId)
        //  ->where('brandId',$request->productBrandId)
        //  ->where('colorId',$colorId)
        //  ->where('sizeId',$sizeId)
        //  ->where('purchaseProductId',$request->purchaseProductId1)->exists()) {
        //       return ['alReadyEntry' => 'Already Sales Product Price Entry'];
        //  }
        if(0){
                
        }
         else {
             $productQuantity = PurchaseProductEntry::where('purchaseProductId',$request->purchaseProductId1)->first();
             $alertQuantity = PurchaseProductDetails::where('purchaseProductId',$request->purchaseProductId1)->first();

             $lastInsertId = SalesProductPriceEntry::insertGetId([
                  'purchaseProductId' => $request->purchaseProductId1,
                  'productId' => $request->productId,
                  'brandId' => $request->productBrandId,
                  'colorId' => $colorId,
                  'sizeId' => $sizeId,
                  'mrpPrice' => $request->mrpPrice,
                  'salesPrice' => $request->salesPrice,
                  'wholesalePrice' => $request->wholesalePrice,
                  'specialPrice' => $request->specialPrice,
                  'eCommercePrice' => $request->eCommercePrice,
                  'quantity' => $productQuantity->quantity,
                  'shopId' => Auth::User()->shopId,
                  'shopTypeId' => $shopTypeId,
                  'createBy' => Auth::User()->id,
                  'created_at' => Carbon::now(),
             ]);
            $data=PurchaseProductEntry::where('purchaseProductId',$request->purchaseProductId1)->first();

             PurchaseProductEntry::where('purchaseProductId',$request->purchaseProductId1)->update([
                 'priceSetupStatus'=>1
             ]);
             StockSummery::where('productId',$data->productId)
             ->where('brandId',$data->brandId)
             ->where('colorId',$data->colorId)
             ->where('sizeId',$data->sizeId)
             ->where('shopId',Auth::user()->shopId)
             ->update([
                'priceSetupStatus'=>1
            ]);
             if (isset($alertQuantity->quantityNoti)) {
               SalesProductPriceEntry::where('salesProductPriceEntryId',$lastInsertId)->update([
                   'alertQuantity' => $alertQuantity->quantityNoti,
               ]);
             }

             ProductName::where('productNameId',$request->productId)->update([
                 'priceStatus' => 2,
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
    public function edit($salesProductPriceEntryId)
    {
        $getData = SalesProductPriceEntry::with('productName')->with('brand')->where('salesProductPriceEntryId',$salesProductPriceEntryId)->first();
        return ['getData'=>$getData];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $salesProductPriceEntryId)
    {
          if (1){
                $info = SalesProductPriceEntry::
                where('purchaseProductId',$request->purchaseProductId)
                ->where('productId',$request->productId)
                ->where('salesProductPriceEntryId',$salesProductPriceEntryId)->first();

                SalesProductPriceEntry::
                where('purchaseProductId',$request->purchaseProductId)
                ->where('productId',$request->productId)
                ->where('salesProductPriceEntryId',$salesProductPriceEntryId)
                ->update([
                     'purchaseProductId' => $request->purchaseProductId,
                     'productId' => $request->productId,
                     'mrpPrice' => $request->mrpPrice,
                     'salesPrice' => $request->salesPrice,
                     'wholesalePrice' => $request->wholesalePrice,
                     'specialPrice' => $request->specialPrice,
                     'eCommercePrice' => $request->eCommercePrice,
                     'updateBy' => Auth::User()->id,
                ]);

                SalesProductPriceEntryHistory::insertGetId([
                    'salesProductPriceEntryId' => $salesProductPriceEntryId,
                    'purchaseProductId' => $info->purchaseProductId,
                    'productId' => $info->productId,
                    'brandId' => $info->brandId,
                    'colorId' => $info->colorId,
                    'sizeId' => $info->sizeId,
                    'unitId' => $info->unitId,
                    'mrpPrice' => $request->mrpPrice,
                     'salesPrice' => $request->salesPrice,
                     'wholesalePrice' => $request->wholesalePrice,
                     'specialPrice' => $request->specialPrice,
                     'eCommercePrice' => $request->eCommercePrice,
                    'quantity' => 0,
                    'shopId' => Auth::User()->shopId,
                    'shopTypeId' => Auth::User()->shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
               ]);
               
                PriceSetupHistory::insert([
                     'purchaseProductId' => $request->purchaseProductId,
                     'productId' => $request->productId,
                     'mrpPrice' => $request->mrpPrice,
                     'quantity' => 0,
                     'salesPrice' => $request->salesPrice,
                     'wholesalePrice' => $request->wholesalePrice,
                     'specialPrice' => $request->specialPrice,
                     'eCommercePrice' => $request->eCommercePrice,
                     'shopId' => Auth::User()->shopId,
                     'shopTypeId' => Auth::User()->shopTypeId,
                     'createBy' => Auth::User()->id,
                     'updateBy' => Auth::User()->id,
                     'created_at' => Carbon::now(),
                ]);
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
