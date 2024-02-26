<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Accounting\chartOfAccountController;
use App\SalesProductDiscountPriceEntry;
use App\SalesProductPriceEntry;
use App\ShopCustomerTypeEntry;
use App\PurchaseProductEntry;
use App\SalesCustomerEntry;
use App\SalesProductEntry;
use App\SalesProductEntryTmp;
use App\ShopAddBankEntry;
use App\SalesInvoice;
use App\UniteEntry;
use App\BrandEntry;
use App\ProductBrandEntry;
use App\ChartOfAccount;
use App\AccountSetup;
use App\voucherType;
use App\voucherInformation;
use App\voucherInformationReport;
use App\ChartOfAccountRegister;
use App\PurchaseProductDetails;
use App\PurchaseProductTotalPrice;
use App\SalesSetting;
use App\StockSummery;
use App\StockSummeryTemp;
use App\ShopPriceTypeConfigure;
use App\PriceTypeSetup;
use App\PurchaseProductUnitInfo;
use App\SalesReturnInvoiceUnitInfo;
use App\DealerSalesOrder;
use App\DealerSalesOrderReceiveSubmit;
use App\InvoiceNoGenerate;
use App\SalesPayment;
use App\StatementInformation;
use App\ReceivePaymentStatement;
use Carbon\Carbon;
use Auth;
use DB;
use Illuminate\Support\Facades\DB as FacadesDB;

class SalesProductController extends Controller
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
        $salesProductLists = SalesProductEntry::with('productName','brandName','unitName','colorName','sizeName')->where('shopTypeId',$shopTypeId)->where('shopId',Auth::user()->shopId)->distinct()->paginate(30);
        $discountPriceLists = SalesProductDiscountPriceEntry::where('shopTypeId',$shopTypeId)->where('shopId',Auth::user()->shopId)->get();
        return ['salesProductLists' => $salesProductLists,'discountPriceLists' => $discountPriceLists];
    }

    public function salesTotalBalance($salesInvoiceNo)
    {
        $shopTypeId = Auth::user()->shopTypeId;
        $salesTotalBalances = SalesProductEntry::where('salesInvoiceNo',$salesInvoiceNo)->where('shopTypeId',$shopTypeId)->where('shopId',Auth::user()->shopId)->get();

        return ['salesTotalBalances' => $salesTotalBalances];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function shopPriceCustomerType()
    {

          $shopTypeId = Auth::user()->shopTypeId;

          $customerTypeLists = ShopCustomerTypeEntry::select('shopCustomerTypeEntryId','shopCustomerName')->where('shopCustomerStatus',1)->orderBy('shopCustomerTypeEntryId','asc')->get();
                    
          
                    //-------------------------

                    if(ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->exists()){
                        $priceTypeId = ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->first()->priceTypeId;
                      }
                      else{
                        $priceTypeId = ShopPriceTypeConfigure::first()->priceTypeId; 
                      }

                      $customerTypeId = PriceTypeSetup::where('priceType',$priceTypeId)->first()->customerType;

            
                    //   ------------------------

                    return [
                        'priceType' => $priceTypeId,
                        'customerType' => $customerTypeId,
                    ];
    }





    public function create()
    {

          $shopTypeId = Auth::user()->shopTypeId;

          $uniteLists = UniteEntry::select('uniteEntryId','uniteEntryName')->where('shopTypeId',Auth::user()->shopTypeId)->orderBy('uniteEntryId','desc')->get();
        //   $brandLists = BrandEntry::select('brandId','brandName')->orderBy('brandId','desc')->where('createBy',Auth::User()->id)->get();
          $customerTypeLists = ShopCustomerTypeEntry::select('shopCustomerTypeEntryId','shopCustomerName')->where('shopCustomerStatus',1)->orderBy('shopCustomerTypeEntryId','asc')->get();
                    
          
                    //-------------------------

                    if(ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->exists()){
                        $priceTypeId = ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->first()->priceTypeId;
                      }
                      else{
                        $priceTypeId = ShopPriceTypeConfigure::first()->priceTypeId; 
                      }

                      $customerTypeId = PriceTypeSetup::where('priceType',$priceTypeId)->first()->customerType;

            
                    //   ------------------------


          $stockProductIds = StockSummery::
          distinct()->
          where('shopId',Auth::user()->shopId)->
          where('quantity','>',0)->
          get('productId');
          $productPriceLists = SalesProductPriceEntry::
          with('productName')
          ->where('shopId',Auth::user()->shopId)
          ->whereIn('productId',$stockProductIds)
          ->distinct('productId')->get('productId');
          
          return  [
              'customerTypeLists' => $customerTypeLists,
              'uniteLists' => $uniteLists,
              'productPriceLists' => $productPriceLists,
              'customerTypeId' => $customerTypeId,
                 ];
    }


    public function customerInformationEntry(Request $request)
    {
          $this->validate($request, [
              'customerTypeId1' => 'required',
              'customerName' => 'required',
              'customerPhone' => 'required|numeric|unique:sales_customer_entries,customerPhone',
          ]);

          $shopTypeId = Auth::user()->shopTypeId;


            // ============================================
            // =============== Chart Of Accounts ==========
            // ============================================

            $noOfRow = SalesCustomerEntry::where('shopId',Auth::user()->shopId)
            ->where('customerTypeId',$request->customerTypeId1)->count()+1;
            if(ShopCustomerTypeEntry::where('shopCustomerTypeEntryId',$request->customerTypeId1)->exists()){
                $code= ShopCustomerTypeEntry::where('shopCustomerTypeEntryId',$request->customerTypeId1)->first()->accountCode;
            }else{
                return ['accountCodeError' => 1];
            }
            $headNamePre= ChartOfAccount::where('headCode',$code)->first()->headName;
                        
                        $temp = explode(' ', $headNamePre);
                        $headShortName = '';
                        foreach($temp as $t){
                            $headShortName .= $t[0];
                        }

            // $headName = $headShortName.'-'.$request->customerName;
            $headName = $request->customerName;
            $lavel= ChartOfAccount::where('headCode',$code)->first()->headLavel+1;
            $dr_cr= ChartOfAccount::where('headCode',$code)->first()->dr_cr;
            $headGroupId= ChartOfAccount::where('headCode',$code)->first()->headGroupId;
            $headGroupType= ChartOfAccount::where('headCode',$code)->first()->headGroupType+1;
            $accCode = $code.str_pad($noOfRow, 3, '0', STR_PAD_LEFT);
 

            ChartOfAccountRegister::insert([
                'headGroupType' => $headGroupType,
                'headGroupId' => $headGroupId,
                'dr_cr' => $dr_cr,
                'pre_code' => $code,
                'headCode' => $accCode,
                'headName' => $headName,
                'headLavel' => $lavel,
                'lastCode' => 0,
                'status' => 1,
                'position' => 0,
                'autoCreate' => 0,
                'shopId' => Auth::user()->shopId,
                'createBy' => Auth::user()->id,
                'created_at' => Carbon::now(),
            ]);

            // ============================================
            // =============== // Chart Of Accounts ==========
            // ============================================


            SalesCustomerEntry::insert([
                'srId' => $request->srId,
                'customerTypeId' => $request->customerTypeId1,
                'accountCode' => $accCode,
                'customerName' => $request->customerName,
                'customerEmail' => $request->customerEmail,
                'customerPhone' => $request->customerPhone,
                'customerImoNumber' => $request->customerImoNumber,
                'customerFacebookID' => $request->customerFacebookID,
                'customerAddress' => $request->customerAddress,
                'referenceName' => $request->referenceName,
                'referenceEmail' => $request->referenceEmail,
                'referencePhone' => $request->referencePhone,
                'shopId' => Auth::user()->shopId,
                'shopTypeId' => $shopTypeId,
                'createBy' => Auth::User()->id,
            ]);



            

    }

    function salesStackProductWithPrice()
    {
        $shopTypeId = Auth::user()->shopTypeId;

        $salesProductPriceLists = SalesProductPriceEntry::with('productName')->where('quantity','>',0)->where('shopTypeId',$shopTypeId)->where('shopId',Auth::user()->shopId)->where('createBy',Auth::User()->id)->latest()->paginate(20);
        $alertQuantityProductLists = SalesProductPriceEntry::with('productName')->where('alertQuantity','!=',"")->where('shopTypeId',$shopTypeId)->where('shopId',Auth::user()->shopId)->where('createBy',Auth::User()->id)->latest()->paginate(20);

        return ['salesProductPriceLists' => $salesProductPriceLists, 'alertQuantityProductLists' => $alertQuantityProductLists];
    }
    function allCustomerList()
    {
        $shopTypeId = Auth::user()->shopTypeId;
        $salesCustomerLists = SalesCustomerEntry::select('salesCustomerEntryId','customerName','customerTypeId','customerPhone')->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->get();

        return ['salesCustomerLists' => $salesCustomerLists];
    }
    function customerTypeIdCatch($customerTypeId)
    {
        $shopTypeId = Auth::user()->shopTypeId;
        // $salesCustomerLists = SalesCustomerEntry::select('salesCustomerEntryId','customerName','customerTypeId','customerPhone')->where('customerTypeId',$customerTypeId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->get();
        $salesCustomerLists = SalesCustomerEntry::select('salesCustomerEntryId','customerName','customerTypeId','customerPhone')->where('customerTypeId',$customerTypeId)->where('shopId',Auth::user()->shopId)->get();

        return ['salesCustomerLists' => $salesCustomerLists];
    }
    function customerIdCatch($customerId)
    {
        $shopTypeId = Auth::user()->shopTypeId;
        $customerPreviousDue = SalesInvoice::select('salesInvoiceId','salesCustomerId','previousDue')->where('salesCustomerId',$customerId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->latest()->first();
        if (isset($customerPreviousDue->previousDue)) {
           return ['customerPreviousDue' => $customerPreviousDue->previousDue];
        }
        else {
           $customerPreviousDue = '';
           return ['customerPreviousDue' => $customerPreviousDue];
        }
    }
    function brandIdCatch($purchaseProductId)
    {
        $stockBrandIds = StockSummery::
        distinct()->
        where('shopId',Auth::user()->shopId)->
        where('quantity','>',0)->
        get('brandId');
        $sales=SalesProductPriceEntry::distinct()
        ->where('productId',$purchaseProductId)
        ->whereIn('brandId',$stockBrandIds)
        ->where('shopTypeId',Auth::user()->shopTypeId)->get('brandId');
        
        $brandLists= ProductBrandEntry::whereIn('productBrandEntryId',$sales)
            ->where('shopTypeId',Auth::user()->shopTypeId)
            ->get();
            return ['brandLists'=> $brandLists];
    }

    function purchaseProductInf($purchaseProductId,$brandId)
    {
        
       $total= StockSummery:: where('productId',$purchaseProductId)->where('brandId',$brandId)->groupby('productId','brandId')->where('shopId',Auth::user()->shopId)->sum('quantity');
       return response()->json($total);
    }

    function purchaseProductInfForSale($purchaseProductId,$brandId,$color,$size)
    {
        $colorId = 0;
        $sizeId = 0;
        if($color>0){
            $colorId = $color;
        }
        if($size>0){
            $sizeId = $size;
        }
       $total= StockSummery:: where('productId',$purchaseProductId)->where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->groupby('productId','brandId')->where('shopId',Auth::user()->shopId)->sum('quantity');
       return response()->json($total);
    }



    function purchaseProductInfForSaleUnit($purchaseProductId,$brandId,$color,$size,$unitId,$priceType0)
    {
        $colorId = 0;
        $sizeId = 0;
        if($color>0){
            $colorId = $color;
        }
        if($size>0){
            $sizeId = $size;
        }

        $priceType = PurchaseProductUnitInfo::where('productId',$purchaseProductId)
       ->where('brandId',$brandId)
       ->where('unitId',$unitId)
       ->where('colorId',$colorId)
       ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first()->priceTypeId;

       $stockInfo = PurchaseProductUnitInfo::where('productId',$purchaseProductId)
       ->where('brandId',$brandId)
       ->where('unitId',$unitId)
       ->where('priceTypeId',$priceType)
       ->where('colorId',$colorId)
       ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first();

       if($stockInfo->totalQuantity==NULL){
           $total = $stockInfo->finalQuantity;
       }
       else{
           $total = $stockInfo->finalQuantity;
       }
       return response()->json($total);
    }

    function purchaseProductInfForSaleColor($purchaseProductId,$brandId,$color,$size)
    {
        $colorId = 0;
        $sizeId = 0;
        if($color>0){
            $colorId = $color;
        }
        if($size>0){
            $sizeId = $size;
        }
       $total= StockSummery:: where('productId',$purchaseProductId)->where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->groupby('productId','brandId')->where('shopId',Auth::user()->shopId)->sum('quantity');
       return response()->json($total);
    }

    function purchaseProductInfForSaleSize($purchaseProductId,$brandId,$color,$size)
    {
        $colorId = 0;
        $sizeId = 0;
        if($color>0){
            $colorId = $color;
        }
        if($size>0){
            $sizeId = $size;
        }
       $total= StockSummery:: where('productId',$purchaseProductId)->where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->groupby('productId','brandId')->where('shopId',Auth::user()->shopId)->sum('quantity');
       return response()->json($total);
    }

    function purchaseProductIdCatch($purchaseProductId,$priceType,$brandId)
    {
        $currentDate = Carbon::now()->format('Y-m-d');
        $shopTypeId = Auth::user()->shopTypeId;
          
        if ($priceType == 1) {
            $singleProudctPriceInfo = SalesProductPriceEntry::where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
            $discountSalesPrice = SalesProductDiscountPriceEntry::where('brandId',$brandId)->where('productId',$purchaseProductId)->where('salesExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
            if (isset($discountSalesPrice->salesPrice)) {
                return ['price' => $singleProudctPriceInfo->salesPrice,'discountPrice' => $discountSalesPrice->salesPrice];
            }
            else {
               return ['price' => $singleProudctPriceInfo->salesPrice,'discountPrice' => ''];
            }
        }
        elseif ($priceType == 2) {
            $singleProudctPriceInfo = SalesProductPriceEntry::where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
            $discountMrpPrice = SalesProductDiscountPriceEntry::where('brandId',$brandId)->where('productId',$purchaseProductId)->whereDate('mrpExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
            if (isset($discountMrpPrice->mrpPrice)) {
                return ['price' => $singleProudctPriceInfo->mrpPrice,'discountPrice' => $discountMrpPrice->mrpPrice];
            }
            else {
                return ['price' => $singleProudctPriceInfo->mrpPrice,'discountPrice' => ''];
            }
        }
        elseif ($priceType == 3) {
           $singleProudctPriceInfo = SalesProductPriceEntry::where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
           $discountWholesalePrice = SalesProductDiscountPriceEntry::where('brandId',$brandId)->where('productId',$purchaseProductId)->whereDate('wholesaleExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
           if (isset($discountWholesalePrice->wholesalePrice)) {
               return ['price' => $singleProudctPriceInfo->wholesalePrice, 'discountPrice' => $discountWholesalePrice->wholesalePrice];
           }
           else {
               return ['price' => $singleProudctPriceInfo->wholesalePrice, 'discountPrice' => ''];
           }
        }
        elseif ($priceType == 4) {
           $singleProudctPriceInfo = SalesProductPriceEntry::where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
           $discountSpecialPrice = SalesProductDiscountPriceEntry::where('brandId',$brandId)->where('productId',$purchaseProductId)->whereDate('specialExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
           if (isset($discountSpecialPrice->specialPrice)) {
               return ['price' => $singleProudctPriceInfo->specialPrice, 'discountPrice' => $discountSpecialPrice->specialPrice];
           }
           else {
              return ['price' => $singleProudctPriceInfo->specialPrice, 'discountPrice' => ''];
           }
        }
        elseif ($priceType == 5) {
           $singleProudctPriceInfo = SalesProductPriceEntry::where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
           $discountECommercePrice = SalesProductDiscountPriceEntry::where('brandId',$brandId)->where('productId',$purchaseProductId)->whereDate('eCommerceExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
           if (isset($discountSpecialPrice->specialPrice)) {
               return ['price' => $singleProudctPriceInfo->eCommercePrice, 'discountPrice' => $discountECommercePrice->eCommercePrice];
           }
           else {
              return ['price' => $singleProudctPriceInfo->eCommercePrice, 'discountPrice' => ''];
           }
        }
    }
    function purchaseProductIdCatchForSale($purchaseProductId,$priceType,$brandId,$color,$size)
    {
        $colorId = 0;
        $sizeId = 0;
        if($color>0){
            $colorId = $color;
        }
        if($size>0){
            $sizeId = $size;
        }

        // return ['price' => $priceType];

        $currentDate = Carbon::now()->format('Y-m-d');
        $shopTypeId = Auth::user()->shopTypeId;
          
        if ($priceType == 1) {
            $singleProudctPriceInfo = SalesProductPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
            $discountSalesPrice = SalesProductDiscountPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->where('salesExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
            if (isset($discountSalesPrice->salesPrice)) {
                return ['price' => $singleProudctPriceInfo->salesPrice,'discountPrice' => $discountSalesPrice->salesPrice];
            }
            else {
               return ['price' => $singleProudctPriceInfo->salesPrice,'discountPrice' => ''];
            }
        }
        elseif ($priceType == 2) {
            $singleProudctPriceInfo = SalesProductPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
            $discountMrpPrice = SalesProductDiscountPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->whereDate('mrpExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
            if (isset($discountMrpPrice->mrpPrice)) {
                return ['price' => $singleProudctPriceInfo->mrpPrice,'discountPrice' => $discountMrpPrice->mrpPrice];
            }
            else {
                return ['price' => $singleProudctPriceInfo->mrpPrice,'discountPrice' => ''];
            }
        }
        elseif ($priceType == 3) {
           $singleProudctPriceInfo = SalesProductPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
           $discountWholesalePrice = SalesProductDiscountPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->whereDate('wholesaleExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
           if (isset($discountWholesalePrice->wholesalePrice)) {
               return ['price' => $singleProudctPriceInfo->wholesalePrice, 'discountPrice' => $discountWholesalePrice->wholesalePrice];
           }
           else {
               return ['price' => $singleProudctPriceInfo->wholesalePrice, 'discountPrice' => ''];
           }
        }
        elseif ($priceType == 4) {
           $singleProudctPriceInfo = SalesProductPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
           $discountSpecialPrice = SalesProductDiscountPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->whereDate('specialExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
           if (isset($discountSpecialPrice->specialPrice)) {
               return ['price' => $singleProudctPriceInfo->specialPrice, 'discountPrice' => $discountSpecialPrice->specialPrice];
           }
           else {
              return ['price' => $singleProudctPriceInfo->specialPrice, 'discountPrice' => ''];
           }
        }
        elseif ($priceType == 5) {
           $singleProudctPriceInfo = SalesProductPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
           $discountECommercePrice = SalesProductDiscountPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->whereDate('eCommerceExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
           if (isset($discountSpecialPrice->specialPrice)) {
               return ['price' => $singleProudctPriceInfo->eCommercePrice, 'discountPrice' => $discountECommercePrice->eCommercePrice];
           }
           else {
              return ['price' => $singleProudctPriceInfo->eCommercePrice, 'discountPrice' => ''];
           }
        }

    }
    function purchaseProductIdCatchForSaleUnit($purchaseProductId,$priceType,$brandId,$color,$size,$unitId)
    {
        $colorId = 0;
        $sizeId = 0;

        if($color>0){
            $colorId = $color;
        }

        if($size>0){
            $sizeId = $size;
        }

        $salesUnitPrice = 0;
        $purchaseUnitPrice = 0;

        if(PurchaseProductUnitInfo::where('productId',$purchaseProductId)
        ->where('brandId',$brandId)
        ->where('unitId',$unitId)
        ->where('colorId',$colorId)
        ->where('priceTypeId',$priceType)
        ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->exists()){
        $salesPriceInfo = PurchaseProductUnitInfo::where('productId',$purchaseProductId)
        ->where('brandId',$brandId)
        ->where('unitId',$unitId)
        ->where('colorId',$colorId)
        ->where('priceTypeId',$priceType)
        ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first();
            
        $salesUnitPrice = $salesPriceInfo->salesUnitPrice;
        $purchaseUnitPrice = $salesPriceInfo->purchaseUnitPrice;
    }
               return [
                   'price' => $salesUnitPrice,
                   'purchaseUnitPrice' => $purchaseUnitPrice,
                   'discountPrice' => ''];
            
       

    }
    function purchaseProductIdCatchForSaleColor($purchaseProductId,$priceType,$brandId,$color,$size)
    {
        $colorId = 0;
        $sizeId = 0;
        if($color>0){
            $colorId = $color;
        }
        if($size>0){
            $sizeId = $size;
        }

        $currentDate = Carbon::now()->format('Y-m-d');
        $shopTypeId = Auth::user()->shopTypeId;
          
        if ($priceType == 1) {
            $singleProudctPriceInfo = SalesProductPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
            $discountSalesPrice = SalesProductDiscountPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->where('salesExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
            if (isset($discountSalesPrice->salesPrice)) {
                return ['price' => $singleProudctPriceInfo->salesPrice,'discountPrice' => $discountSalesPrice->salesPrice];
            }
            else {
               return ['price' => $singleProudctPriceInfo->salesPrice,'discountPrice' => ''];
            }
        }
        elseif ($priceType == 2) {
            $singleProudctPriceInfo = SalesProductPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
            $discountMrpPrice = SalesProductDiscountPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->whereDate('mrpExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
            if (isset($discountMrpPrice->mrpPrice)) {
                return ['price' => $singleProudctPriceInfo->mrpPrice,'discountPrice' => $discountMrpPrice->mrpPrice];
            }
            else {
                return ['price' => $singleProudctPriceInfo->mrpPrice,'discountPrice' => ''];
            }
        }
        elseif ($priceType == 3) {
           $singleProudctPriceInfo = SalesProductPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
           $discountWholesalePrice = SalesProductDiscountPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->whereDate('wholesaleExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
           if (isset($discountWholesalePrice->wholesalePrice)) {
               return ['price' => $singleProudctPriceInfo->wholesalePrice, 'discountPrice' => $discountWholesalePrice->wholesalePrice];
           }
           else {
               return ['price' => $singleProudctPriceInfo->wholesalePrice, 'discountPrice' => ''];
           }
        }
        elseif ($priceType == 4) {
           $singleProudctPriceInfo = SalesProductPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
           $discountSpecialPrice = SalesProductDiscountPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->whereDate('specialExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
           if (isset($discountSpecialPrice->specialPrice)) {
               return ['price' => $singleProudctPriceInfo->specialPrice, 'discountPrice' => $discountSpecialPrice->specialPrice];
           }
           else {
              return ['price' => $singleProudctPriceInfo->specialPrice, 'discountPrice' => ''];
           }
        }
        elseif ($priceType == 5) {
           $singleProudctPriceInfo = SalesProductPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
           $discountECommercePrice = SalesProductDiscountPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->whereDate('eCommerceExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
           if (isset($discountSpecialPrice->specialPrice)) {
               return ['price' => $singleProudctPriceInfo->eCommercePrice, 'discountPrice' => $discountECommercePrice->eCommercePrice];
           }
           else {
              return ['price' => $singleProudctPriceInfo->eCommercePrice, 'discountPrice' => ''];
           }
        }
    }
    function purchaseProductIdCatchForSaleSize($purchaseProductId,$priceType,$brandId,$color,$size)
    {
        $colorId = 0;
        $sizeId = 0;
        if($color>0){
            $colorId = $color;
        }
        if($size>0){
            $sizeId = $size;
        }

        $currentDate = Carbon::now()->format('Y-m-d');
        $shopTypeId = Auth::user()->shopTypeId;
          
        if ($priceType == 1) {
            $singleProudctPriceInfo = SalesProductPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
            $discountSalesPrice = SalesProductDiscountPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->where('salesExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
            if (isset($discountSalesPrice->salesPrice)) {
                return ['price' => $singleProudctPriceInfo->salesPrice,'discountPrice' => $discountSalesPrice->salesPrice];
            }
            else {
               return ['price' => $singleProudctPriceInfo->salesPrice,'discountPrice' => ''];
            }
        }
        elseif ($priceType == 2) {
            $singleProudctPriceInfo = SalesProductPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
            $discountMrpPrice = SalesProductDiscountPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->whereDate('mrpExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
            if (isset($discountMrpPrice->mrpPrice)) {
                return ['price' => $singleProudctPriceInfo->mrpPrice,'discountPrice' => $discountMrpPrice->mrpPrice];
            }
            else {
                return ['price' => $singleProudctPriceInfo->mrpPrice,'discountPrice' => ''];
            }
        }
        elseif ($priceType == 3) {
           $singleProudctPriceInfo = SalesProductPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
           $discountWholesalePrice = SalesProductDiscountPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->whereDate('wholesaleExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
           if (isset($discountWholesalePrice->wholesalePrice)) {
               return ['price' => $singleProudctPriceInfo->wholesalePrice, 'discountPrice' => $discountWholesalePrice->wholesalePrice];
           }
           else {
               return ['price' => $singleProudctPriceInfo->wholesalePrice, 'discountPrice' => ''];
           }
        }
        elseif ($priceType == 4) {
           $singleProudctPriceInfo = SalesProductPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
           $discountSpecialPrice = SalesProductDiscountPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->whereDate('specialExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
           if (isset($discountSpecialPrice->specialPrice)) {
               return ['price' => $singleProudctPriceInfo->specialPrice, 'discountPrice' => $discountSpecialPrice->specialPrice];
           }
           else {
              return ['price' => $singleProudctPriceInfo->specialPrice, 'discountPrice' => ''];
           }
        }
        elseif ($priceType == 5) {
           $singleProudctPriceInfo = SalesProductPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->first();
           $discountECommercePrice = SalesProductDiscountPriceEntry::where('colorId',$colorId)->where('sizeId',$sizeId)->where('brandId',$brandId)->where('productId',$purchaseProductId)->whereDate('eCommerceExpiredDate', '>=', $currentDate)->where('shopTypeId',$shopTypeId)->first();
           if (isset($discountSpecialPrice->specialPrice)) {
               return ['price' => $singleProudctPriceInfo->eCommercePrice, 'discountPrice' => $discountECommercePrice->eCommercePrice];
           }
           else {
              return ['price' => $singleProudctPriceInfo->eCommercePrice, 'discountPrice' => ''];
           }
        }
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

   


    public function store(Request $request)
    {

       $request->validate([
            'quantity' => 'required|numeric',
            'unitPrice' => 'required',
            'unitId' => 'required',
       ],
       [
            'quantity.required' => 'Enter Quantity',
            'unitPrice.required' => 'Enter Price',
            'unitId.required' => 'Select Unit',
       ]);

            if($request->salesCustomerEntryId==''){
                $salesCustomerId =0;
            }else{
                $implodeSalesCustomerId = implode(',', array_column($request->salesCustomerEntryId,$request->id));
                $salesCustomerId = explode(',',$implodeSalesCustomerId)[0];
            }

        //    $implodePriceType = implode(',', array_column($request->priceTypeId,$request->id));
        //    $priceType = explode(',',$implodePriceType)[0];

       $implodeBrandId = implode(',', array_column($request->brandId,$request->id));
       $brandId =explode(',',$implodeBrandId)[0];

       $implodeUnitId = implode(',', array_column($request->unitId,$request->id));
       $unitId = explode(',',$implodeUnitId)[0];

       if($request->colorId){
            $implodeColorId = implode(',', array_column($request->colorId,$request->id));
            $colorId = explode(',',$implodeColorId)[0];
       }else{
           $colorId = 0;
       }

       if($request->sizeId){
            $implodeSizeId = implode(',', array_column($request->sizeId,$request->id));
            $sizeId = explode(',',$implodeSizeId)[0];
       }else{
           $sizeId = 0;
       }

       $shopTypeId = Auth::user()->shopTypeId;

       $salesDatePosition = strpos($request->salesDate, 'T');
       $salesDate = substr($request->salesDate, 0, $salesDatePosition);

        foreach ($request->purchaseProductId as $purchaseProductId) {
          $productId = PurchaseProductEntry::where('productId',$purchaseProductId)->first()->productId;
          
        


           if (SalesProductEntry::
            where('productId',$purchaseProductId)
            ->where('brandId',$brandId)
            ->where('salesInvoiceNo',$request->salesInvoiceNo)
            ->where('shopId',Auth::user()->shopId)->exists()) {
              return ['alReadyEntry' => 'Already Product Entry'];
          }
          else {
          
            $lastInsertId = SalesProductEntry::insertGetId([
                   'salesInvoiceNo' => $request->salesInvoiceNo,
                   'salesDate'      => 1,
                   'salesCustomerId' =>$salesCustomerId,
                   'purchaseProductId' => 1,
                   'productId'      => $productId,
                   'brandId'        =>$brandId ,
                   'unitId'         =>  $unitId ,
                   'colorId'         =>  $colorId ,
                   'sizeId'         =>  $sizeId ,
                   'quantity'       => $request->quantity,
                   'unitPrice'      => $request->unitPrice,
                   'purchaseUnitPrice'      => $request->purchaseUnitPrice,
                   'purchaseTotalPrice'      => $request->purchaseTotalPrice,
                   'totalPrice'     => $request->totalPrice,
                   'preTotalPrice'  => $request->totalPrice,
                   'discountPrice'  => $request->discountPriceHidden,
                   'totalDiscount'  => $request->totalDis,
                   'priceType'      => $request->priceTypeId,
                   'shopId'         => Auth::user()->shopId,
                   'shopTypeId'     => $shopTypeId,
                   'createBy'       => Auth::User()->id,
                   'created_at'     => Carbon::now(),
                ]);


                if(SalesSetting::where('shopId',Auth::user()->shopId)->exists()){
                   $inf=SalesSetting::where('shopId',Auth::user()->shopId)->first();
                   if($inf->status==1){
                       $lifoFifo='asc';
                   }
                   else{
                    $lifoFifo='desc';  
                   }
                }
                else{
                  $lifoFifo='asc';
                }


            //   ========================== advance unit calculation
            if(1){
                // if(0){

                    $priceTypeId = PurchaseProductUnitInfo::where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('unitId',$unitId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first()->priceTypeId;
                    $lastPriceType = $priceTypeId;

                    // --------------------------------- single 
                    $id = PurchaseProductUnitInfo::where('unitId',$unitId)
                    ->where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->first()->id;
                    
                    $selectUnitInfo = PurchaseProductUnitInfo::where('id',$id)
                    ->where('productId',$productId)
                    ->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first();
                    
                    if($selectUnitInfo->totalQuantity===NULL){
                        $lastSingleQuantity = $request->quantity;
                        $currentQuantity = $selectUnitInfo->quantity-$request->quantity;
                        $currentPurchasePrice = $selectUnitInfo->purchaseTotalPrice-($selectUnitInfo->purchaseUnitPrice*$request->quantity);
                        $currentSalesPrice = $selectUnitInfo->salesTotalPrice-($request->unitPrice*$request->quantity);
                    
                        PurchaseProductUnitInfo::where('id',$id)->update([
                            'quantity' => $currentQuantity,
                            'finalQuantity' => $currentQuantity,
                            'purchaseTotalPrice' => $currentPurchasePrice,
                            'salesTotalPrice' => $currentSalesPrice,
                            
                        ]);
                        
                    }
                    else{
                        // $lastSingleQuantity = $selectUnitInfo->quantity;
                        $lastSingleQuantity = $request->quantity;
                        $currentQuantity = $selectUnitInfo->totalQuantity-$request->quantity;
                        
                        $currentPurchasePrice = $selectUnitInfo->purchaseTotalPrice-($selectUnitInfo->purchaseUnitPrice*$request->quantity);
                        $currentSalesPrice = $selectUnitInfo->salesTotalPrice-($request->unitPrice*$request->quantity);
                        PurchaseProductUnitInfo::where('id',$id)->update([
                            'totalQuantity' => $currentQuantity,
                            'finalQuantity' => $currentQuantity,
                            'purchaseTotalPrice' => $currentPurchasePrice,
                            'salesTotalPrice' => $currentSalesPrice,
                ]);

                    }

                    
                    // --------------------------------- /single
                    
                    // --------------------------------- loop 
                    $selectUnitLists = PurchaseProductUnitInfo::where('id','>',$id)
                    ->where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('sizeId',$sizeId)
                    ->where('colorId',$colorId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                                    
                    foreach($selectUnitLists as $selectUnitList){
                        
                        $unitQuantity = ($lastSingleQuantity*$selectUnitList->quantity);
                        $updateTotalQuantity = $selectUnitList->totalQuantity-$unitQuantity;
                        
                        $currentPurchasePrice = $selectUnitInfo->purchaseTotalPrice-($selectUnitInfo->purchaseUnitPrice*$request->quantity);
                        $currentSalesPrice = $selectUnitInfo->salesTotalPrice-($request->unitPrice*$request->quantity);
                        
                        PurchaseProductUnitInfo::where('id',$selectUnitList->id)->update([
                            'totalQuantity' => $updateTotalQuantity,
                            'finalQuantity' => $updateTotalQuantity,
                            'purchaseTotalPrice' => $currentPurchasePrice,
                            'salesTotalPrice' => $currentSalesPrice,
                        ]);
                        

                    
    
                    //==========
                    $lastSingleQuantity = $lastSingleQuantity*$selectUnitList->quantity;
                    }
                    // --------------------------------- /loop 


                    // ================= update all purchase and sales price 
                    
                    $lastPUnitInfo = PurchaseProductUnitInfo::
                    where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first();
                        
                    PurchaseProductUnitInfo::
                    where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('shopId',Auth::user()->shopId)->update([
                        'purchaseTotalPrice' => $lastPUnitInfo->purchaseTotalPrice,
                        'salesTotalPrice' => $lastPUnitInfo->salesTotalPrice,
                    ]);
       

                    // ================= /update all purchase and sales price 

                    // ================= loop for top serial
                     

                    $loopInfos = PurchaseProductUnitInfo::distinct()
                    ->where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->get('id');
                    $lC = 1;
                    $loopCount = count($loopInfos);
                    $idIms = '';
                    foreach($loopInfos as $loopInfo){

                        if($loopCount==$lC){
                            $idIms .= "$loopInfo->id";
                        }else{
                            $idIms .= "$loopInfo->id,";
                        }

                        $lC++;
                    }
                     
                    // $idIms = '19,18,17,16';
                    $idExs = explode(',',$idIms);
                    $count = count($idExs);
                    for($i=0;$i<$count;$i++){

                     if(($i+1)<$count){
                        $select = PurchaseProductUnitInfo::where('id',$idExs[$i])->first();
                        $updateQuantity = intval($select->totalQuantity/$select->quantity);
                   
                    if(PurchaseProductUnitInfo::where('id',$idExs[$i+1])->first()->totalQuantity==NULL){
                    PurchaseProductUnitInfo::where('id',$idExs[$i+1])->update([
                        'quantity' => $updateQuantity,
                        'finalQuantity' => $updateQuantity,
                        
                    ]);
                    }else{
                    PurchaseProductUnitInfo::where('id',$idExs[$i+1])->update([
                        'totalQuantity' => $updateQuantity,
                        'finalQuantity' => $updateQuantity,
                    ]);
                    }
                    }
                    }
                    // ================= /loop for top serial

                    // ------------- get last quantity
                    if(PurchaseProductUnitInfo::where('finalQuantity','>',0)
                    ->where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->exists()){
                    
                    $lastQuantityPriceInfo = PurchaseProductUnitInfo::where('finalQuantity','>',0)
                    ->where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first();
                    
                    StockSummery::where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => $lastQuantityPriceInfo->finalQuantity,
                        'unitId' => $lastQuantityPriceInfo->unitId,
                        'totalPrice' => $lastQuantityPriceInfo->purchaseTotalPrice,
                    ]);
                }
                else{
                    $lastQuantityPriceInfo = PurchaseProductUnitInfo::
                    where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->orderBy('finalQuantity','DESC')->orderBy('id','ASC')->first();
                    
                    StockSummery::where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => $lastQuantityPriceInfo->finalQuantity,
                        'unitId' => $lastQuantityPriceInfo->unitId,
                        'totalPrice' => $lastQuantityPriceInfo->purchaseTotalPrice,
                    ]);
                }
                    // ------------- /get last quantity
                }
                //   ========================== /advance unit calculation



                
                //==============================================================================
                //============================= Return advance unit calculation  ===============

                if(1){

                    $this->insertPurchaseProductUnitInfoReturn($request,$priceTypeId,$productId,$brandId,$unitId,$colorId,$sizeId);
                    
                        // ================= loop for top serial
                       $this->updateUnitQuantityBottomToTopReturn($request,$priceTypeId,$productId,$brandId,$unitId,$colorId,$sizeId);
                        // ================= /loop for top serial
    
                    }
    
                    //============================= /Return advance unit calculation
                    //==============================================================================
           
              
                return ['success' => 'ok'];
           }
       }
    }

    public function getInvoiceNoDealerApprove(){
        if(InvoiceNoGenerate::
            orderby('invoiceNo','desc')
            ->where('status',0)
            ->where('shopId',Auth::user()->shopId)
            ->exists()){
            
            if(InvoiceNoGenerate::
                orderby('invoiceNo','desc')
                ->where('status',0)
                ->where('shopId',Auth::user()->shopId)
                ->where('createBy',Auth::user()->id)->exists()){
                        
                $salesInvoiceNo = InvoiceNoGenerate::orderby('invoiceNo','desc')->where('createBy',Auth::user()->id)->where('status',0)->where('shopId',Auth::user()->shopId)->first()->invoiceNo;
                
            }
            else{

                $lastInvoiceNo = InvoiceNoGenerate::
                orderby('invoiceNo','desc')
                ->where('shopId',Auth::user()->shopId)
                ->first()->invoiceNo+1;

                InvoiceNoGenerate::insert([
                    'shopId' => Auth::user()->shopId,
                    'status' => 0,
                    'invoiceNo' => $lastInvoiceNo,
                    'createBy' => Auth::user()->id,
                    'created_at' => Carbon::now()
                ]);
                
                $salesinvoiceNumber = InvoiceNoGenerate::orderby('invoiceNo','desc')->where('createBy',Auth::user()->id)->where('shopId',Auth::user()->shopId)->first();
                $salesInvoiceNo = $salesinvoiceNumber->invoiceNo;
            }
            

        }
        else if(InvoiceNoGenerate::
            orderby('invoiceNo','desc')
            ->where('status',1)
            ->where('shopId',Auth::user()->shopId)
            ->exists()){

                $lastInvoiceNo = InvoiceNoGenerate::orderby('invoiceNo','desc')
                ->where('status',1)
                ->where('shopId',Auth::user()->shopId)->first()->invoiceNo+1;
                
                InvoiceNoGenerate::insert([
                    'shopId' => Auth::user()->shopId,
                    'status' => 0,
                    'invoiceNo' => $lastInvoiceNo,
                    'createBy' => Auth::user()->id,
                    'created_at' => Carbon::now()
                ]);

                $salesInvoiceNo = $lastInvoiceNo;

            }
        else{

                InvoiceNoGenerate::insert([
                    'shopId' => Auth::user()->shopId,
                    'status' => 0,
                    'invoiceNo' => 1,
                    'createBy' => Auth::user()->id,
                    'created_at' => Carbon::now()
                ]);
                $salesinvoiceNumber = InvoiceNoGenerate::orderby('invoiceNo','desc')->where('shopId',Auth::user()->shopId)->first();
                $salesInvoiceNo = $salesinvoiceNumber->invoiceNo;
        }

        return $salesInvoiceNo;
    }












    public function salesProductEntryDealerApprove($salesRequestId)
    {


        
       $receiveInfo1 = DealerSalesOrderReceiveSubmit::where('shopId',Auth::user()->shopId)->where('salesRequestId',$salesRequestId)->first();
       $rendomNumber = $receiveInfo1->rendomNumber;

    //    =================== invoice information
       $salesInvoiceNo = $this->getInvoiceNoDealerApprove();
       DealerSalesOrderReceiveSubmit::where('shopId',Auth::user()->shopId)->where('salesRequestId',$salesRequestId)->update([
        'salesInvoiceNo' => $salesInvoiceNo,
        'status' => 2
       ]);
       DealerSalesOrder::where('shopId',Auth::user()->shopId)->where('rendomNumber',$rendomNumber)->update([
        'salesInvoiceNo' => $salesInvoiceNo
       ]);
    //    =================== /invoice information

        $receiveInfo = DealerSalesOrderReceiveSubmit::where('shopId',Auth::user()->shopId)->where('salesRequestId',$salesRequestId)->first();
        $rendomNumber = $receiveInfo->rendomNumber;

       
       $productLists = DealerSalesOrder::where('shopId',Auth::user()->shopId)->where('rendomNumber',$rendomNumber)->get();
       
       $salesCustomerId = $receiveInfo->customerId;
       

       foreach($productLists as $request){


       
       $productId = $request->productId;

       $brandId = $request->brandId;
 
       $unitId = $request->unitId;

       $colorId = $request->colorId;
       
       $sizeId = $request->sizeId;

       $shopTypeId = Auth::user()->shopTypeId;
 
     
        
          
        $lastInsertId =  SalesProductEntry::insertGetId([
                'salesInvoiceNo' => $request->salesInvoiceNo,
                'salesDate'      => Carbon::now(),
                'salesCustomerId' =>$salesCustomerId,
                'purchaseProductId' => 1,
                'productId'      => $productId,
                'brandId'        =>$brandId ,
                'unitId'         =>  $unitId ,
                'colorId'         =>  $colorId ,
                'sizeId'         =>  $sizeId ,
                'quantity'       => $request->quantity,
                'unitPrice'      => $request->unitPrice,
                'purchaseUnitPrice'      => $request->purchaseUnitPrice,
                'purchaseTotalPrice'      => $request->purchaseTotalPrice,
                'totalPrice'     => $request->totalPrice,
                'preTotalPrice'  => $request->totalPrice,
                'discountPrice'  => $request->discountPriceHidden,
                'totalDiscount'  => $request->totalDis,
                'priceType'      => $request->priceType,
                'shopId'         => Auth::user()->shopId,
                'shopTypeId'     => $shopTypeId,
                'createBy'       => Auth::User()->id,
                'created_at'     => Carbon::now(),
            ]);


                if(SalesSetting::where('shopId',Auth::user()->shopId)->exists()){
                   $inf=SalesSetting::where('shopId',Auth::user()->shopId)->first();
                   if($inf->status==1){
                       $lifoFifo='asc';
                   }
                   else{
                    $lifoFifo='desc';  
                   }
                }
                else{
                  $lifoFifo='asc';
                }


            //   ========================== advance unit calculation
            if(1){
                // if(0){

                    $priceTypeId = PurchaseProductUnitInfo::where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('unitId',$unitId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first()->priceTypeId;
                    $lastPriceType = $priceTypeId;

                    // --------------------------------- single 
                    $id = PurchaseProductUnitInfo::where('unitId',$unitId)
                    ->where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->first()->id;
                    
                    $selectUnitInfo = PurchaseProductUnitInfo::where('id',$id)
                    ->where('productId',$productId)
                    ->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first();
                    
                    if($selectUnitInfo->totalQuantity===NULL){
                        $lastSingleQuantity = $request->quantity+$request->totalPieceDamage;
                        $currentQuantity = $selectUnitInfo->quantity-($request->quantity+$request->totalPieceDamage);
                        $currentPurchasePrice = $selectUnitInfo->purchaseTotalPrice-($selectUnitInfo->purchaseUnitPrice*$request->quantity+$request->totalPieceDamage);
                        $currentSalesPrice = $selectUnitInfo->salesTotalPrice-($request->unitPrice*($request->quantity+$request->totalPieceDamage));
                    
                        PurchaseProductUnitInfo::where('id',$id)->update([
                            'quantity' => $currentQuantity,
                            'finalQuantity' => $currentQuantity,
                            'purchaseTotalPrice' => $currentPurchasePrice,
                            'salesTotalPrice' => $currentSalesPrice,
                        ]);
                        
                    }
                    else{
                        // $lastSingleQuantity = $selectUnitInfo->quantity;
                        $lastSingleQuantity = $request->quantity+$request->totalPieceDamage;
                        $currentQuantity = $selectUnitInfo->totalQuantity-($request->quantity+$request->totalPieceDamage);
                        
                        $currentPurchasePrice = $selectUnitInfo->purchaseTotalPrice-($selectUnitInfo->purchaseUnitPrice*($request->quantity+$request->totalPieceDamage));
                        $currentSalesPrice = $selectUnitInfo->salesTotalPrice-($request->unitPrice*($request->quantity+$request->totalPieceDamage));
                        PurchaseProductUnitInfo::where('id',$id)->update([
                            'totalQuantity' => $currentQuantity,
                            'finalQuantity' => $currentQuantity,
                            'purchaseTotalPrice' => $currentPurchasePrice,
                            'salesTotalPrice' => $currentSalesPrice,
                ]);

                    }

                    
                    // --------------------------------- /single
                    
                    // --------------------------------- loop 
                    $selectUnitLists = PurchaseProductUnitInfo::where('id','>',$id)
                    ->where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('sizeId',$sizeId)
                    ->where('colorId',$colorId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                                    
                    foreach($selectUnitLists as $selectUnitList){
                        
                        $unitQuantity = ($lastSingleQuantity*$selectUnitList->quantity);
                        $updateTotalQuantity = $selectUnitList->totalQuantity-$unitQuantity;
                        
                        $currentPurchasePrice = $selectUnitInfo->purchaseTotalPrice-($selectUnitInfo->purchaseUnitPrice*($request->quantity+$request->totalPieceDamage));
                        $currentSalesPrice = $selectUnitInfo->salesTotalPrice-($request->unitPrice*($request->quantity+$request->totalPieceDamage));
                        
                        PurchaseProductUnitInfo::where('id',$selectUnitList->id)->update([
                            'totalQuantity' => $updateTotalQuantity,
                            'finalQuantity' => $updateTotalQuantity,
                            'purchaseTotalPrice' => $currentPurchasePrice,
                            'salesTotalPrice' => $currentSalesPrice,
                        ]);
                        

                    
    
                    //==========
                    $lastSingleQuantity = $lastSingleQuantity*$selectUnitList->quantity;
                    }
                    // --------------------------------- /loop 


                    // ================= update all purchase and sales price 
                    
                    $lastPUnitInfo = PurchaseProductUnitInfo::
                    where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first();
                        
                    PurchaseProductUnitInfo::
                    where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('shopId',Auth::user()->shopId)->update([
                        'purchaseTotalPrice' => $lastPUnitInfo->purchaseTotalPrice,
                        'salesTotalPrice' => $lastPUnitInfo->salesTotalPrice,
                    ]);
       

                    // ================= /update all purchase and sales price 

                    // ================= loop for top serial
                     

                    $loopInfos = PurchaseProductUnitInfo::distinct()
                    ->where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->get('id');
                    $lC = 1;
                    $loopCount = count($loopInfos);
                    $idIms = '';
                    foreach($loopInfos as $loopInfo){

                        if($loopCount==$lC){
                            $idIms .= "$loopInfo->id";
                        }else{
                            $idIms .= "$loopInfo->id,";
                        }

                        $lC++;
                    }
                     
                    // $idIms = '19,18,17,16';
                    $idExs = explode(',',$idIms);
                    $count = count($idExs);
                    for($i=0;$i<$count;$i++){

                     if(($i+1)<$count){
                        $select = PurchaseProductUnitInfo::where('id',$idExs[$i])->first();
                        $updateQuantity = intval($select->totalQuantity/$select->quantity);
                   
                    if(PurchaseProductUnitInfo::where('id',$idExs[$i+1])->first()->totalQuantity==NULL){
                    PurchaseProductUnitInfo::where('id',$idExs[$i+1])->update([
                        'quantity' => $updateQuantity,
                        'finalQuantity' => $updateQuantity,
                        
                    ]);
                    }else{
                    PurchaseProductUnitInfo::where('id',$idExs[$i+1])->update([
                        'totalQuantity' => $updateQuantity,
                        'finalQuantity' => $updateQuantity,
                    ]);
                    }
                    }
                    }
                    // ================= /loop for top serial

                    // ------------- get last quantity
                    if(PurchaseProductUnitInfo::where('finalQuantity','>',0)
                    ->where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->exists()){
                    
                    $lastQuantityPriceInfo = PurchaseProductUnitInfo::where('finalQuantity','>',0)
                    ->where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first();
                    
                    StockSummery::where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => $lastQuantityPriceInfo->finalQuantity,
                        'unitId' => $lastQuantityPriceInfo->unitId,
                        'totalPrice' => $lastQuantityPriceInfo->purchaseTotalPrice,
                    ]);
                }
                else{
                    
                    $lastQuantityPriceInfo = PurchaseProductUnitInfo::
                    where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->orderBy('finalQuantity','DESC')->orderBy('id','ASC')->first();
                    
                    StockSummery::where('productId',$productId)
                    ->where('brandId',$brandId)
                    ->where('colorId',$colorId)
                    ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => $lastQuantityPriceInfo->finalQuantity,
                        'unitId' => $lastQuantityPriceInfo->unitId,
                        'totalPrice' => $lastQuantityPriceInfo->purchaseTotalPrice,
                    ]);
                }
                    // ------------- /get last quantity
                }
                //   ========================== /advance unit calculation



                
                //==============================================================================
                //============================= Return advance unit calculation  ===============

                if(1){

                    //$this->insertPurchaseProductUnitInfoReturn($request,$priceTypeId,$productId,$brandId,$unitId,$colorId,$sizeId);
                    
                        // ================= loop for top serial
                       //$this->updateUnitQuantityBottomToTopReturn($request,$priceTypeId,$productId,$brandId,$unitId,$colorId,$sizeId);
                        // ================= /loop for top serial
    
                    }
    
                    //============================= /Return advance unit calculation
                    //==============================================================================
           
              
                
       }
    //    ============== invoice product
    
    


    //    ============== invoice submit 


       if(1){

        $request = $receiveInfo;
        $status=1;
        $salesInvoice = new SalesInvoice();
    
      $salesInvoice->salesDate = $request->salesDate;
      $salesInvoice->salesInvoiceNo = $request->salesInvoiceNo;
      $salesInvoice->salesCustomerTypeId = $request->salesCustomerTypeId;
      $salesInvoice->salesCustomerId = $salesCustomerId;
      $salesInvoice->totalQuantity = $request->totalQuantity;
      $salesInvoice->totalBalance = $request->totalBalance;
      $salesInvoice->discountPrice = $request->discountPrice;
      $salesInvoice->totalVat = $request->totalVat;
      $salesInvoice->vatCalculate = $request->vatCalculate;
      $salesInvoice->totalPayable = $request->totalPayable;
      $salesInvoice->previousDue = $request->previousDue;
      $salesInvoice->currentDue = $request->currentDue;         
      $salesInvoice->paymentTYpe = $request->paymentType;         
      $salesInvoice->currentTotalAmount = $request->currentTotalAmount;
      $salesInvoice->currentPaidAmount = $request->currentPaidAmount;
      $salesInvoice->mobileAmount = $request->mobileAmount;
      $salesInvoice->paymentStatus = $status;
      $salesInvoice->shopId = Auth::User()->shopId;
      $salesInvoice->shopTypeId = $shopTypeId;
      $salesInvoice->shopUserId = Auth::User()->id;
      $salesInvoice->createBy = Auth::User()->id;
      $salesInvoice->save();
      $insertedId = $salesInvoice->id;

      SalesPayment::insert([
          'salesInvoiceId'=>  $insertedId,
          'shopId'=> Auth::User()->shopId,
          'createBy'=> Auth::User()->id,
          'salesCustomerTypeId'=>  $request->salesCustomerTypeId,
          'salesCustomerId'=>  $salesCustomerId,
          'cashAmount'=>  $request->currentPaidAmount,
          'bankAmount'=>  $request->mobileAmount,
          'currentDue' => $request->currentDue, 
          'senderbankTypeEntryId'=>  $request->senderbankTypeEntryId,
          'senderBankName'=>  $request->senderBankName,
          'senderAcNo'=>  $request->senderAcNo,
          'senderAcName'=>  $request->senderAcName,
          'senderBranchName'=>  $request->senderBranchName,
          'senderMobileAcNo'=>  $request->senderMobileAcNo,
          'senderTrxNo'=>  $request->senderTrxNo,
          'receiverbankTypeEntryId'=>  $request->receiverbankTypeEntryId,
          'receiverbankEntryId'=>  $request->receiverbankEntryId,
          'receiverbankAccountId'=>  $request->receiverbankAccountId,
          'receiverbranchName'=>  $request->receiverbranchName,
          'receiverAccNo'=>  $request->receiverAccNo,
          'created_at'=>carbon::now(),
      ]);
      
      SalesProductEntry::where('salesInvoiceNo',$request->salesInvoiceNo)
      ->where('shopId',Auth::user()->shopId)->update([
          'status'=>1,
      ]);




      

    //  --------------------------------------------------------------------
    //  ------------------ voucher & statement information -----------------
    //  --------------------------------------------------------------------


    
    $companyId = $salesCustomerId;
    $referance = 'customer-'.$companyId;
    $title = 'Customer Invoice Create';
    $companyAccountCode = SalesCustomerEntry::where('salesCustomerEntryId',$salesCustomerId)->first()->accountCode;
    $companyAccountHeadCode = ChartOfAccountRegister::where('headCode',$companyAccountCode)->first()->pre_code;
    
    $rendomNumber = substr(time(),0,12);
    
    
    // ==========================================================


    if(StatementInformation::where('shopId',Auth::user()->shopId)
    ->where('advanceSecurityDepositPrepayment',0)
    ->where('referance',$referance)->exists()){
        $balanceAmountDb = StatementInformation::where('shopId',Auth::user()->shopId)
        ->where('advanceSecurityDepositPrepayment',0)
        ->where('referance',$referance)->orderBy('id','DESC')->first()->balanceAmount;
        
    }
    else{
        $balanceAmountDb = 0;
    }

    $balanceAmount = $balanceAmountDb+$request->totalPayable;

    StatementInformation::insert([
        'shopId' => Auth::user()->shopId,
        'rendomNumber' => $rendomNumber,
        'type' => 0,
        'accountHeadCode' => $companyAccountHeadCode,
        'accountCode' => $companyAccountCode,
        'title' => $title,
        'referance' => $referance,
        'paymentType' => 0, // Due
        'dueAmount' => $request->totalPayable,
        'debitAmount' => $request->totalPayable,
        'balanceAmount' => $balanceAmount,
        'note' => $request->note,
        'createBy' => Auth::user()->id,
        'shopId' => Auth::user()->shopId,
        'created_at' => Carbon::now(),
    ]);
    


    // ==========================================================
    // =========== #1  Journal Voucher Information ==============
    // ==========================================================

      

    $voucherUniqueId = time().'7';
    $day = date('d');
    $month = date('m');
    $year = date('Y');
    $voucherDate = date('Y-m-d');
    
     
    
    $particular = $title.'.';
        $voucherAmount = ($request->currentTotalAmount-$request->totalDis);
      
            $headCode1 = $companyAccountCode;
            $headOfAccounts1 = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
      
            $headCode11 = AccountSetup::where('placementType','4')->where('headName','15')->first()->headCode;
            $headOfAccounts11 = ChartOfAccountRegister::where('headCode',$headCode11)->first()->pre_code;
        
            $voucherType = 6;

            $headCode2 = AccountSetup::where('placementType','4')->where('headName','88')->first()->headCode;
            $headOfAccounts2 = ChartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;

            $headCode22 = AccountSetup::where('placementType','4')->where('headName','13')->first()->headCode;
            $headOfAccounts22 = ChartOfAccountRegister::where('headCode',$headCode22)->first()->pre_code;

            $headCode222 = AccountSetup::where('placementType','4')->where('headName','14')->first()->headCode;
            $headOfAccounts222 = ChartOfAccountRegister::where('headCode',$headCode222)->first()->pre_code;


        // =============================
        // ======= create voucher no ===
        // =============================

        
    $shortName = voucherType::where('id',$voucherType)->first()->shortName;

    if(voucherInformation::where('shopId',Auth::user()->shopId)->where('voucherType',$voucherType)->orderBy('id','DESC')->exists()){
    $last_voucher_no = voucherInformation::where('shopId',Auth::user()->shopId)->where('voucherType',$voucherType)->orderBy('id','DESC')->first()->voucherNo;

    $exp = explode('-',$last_voucher_no);
    $ex_last = $exp[1]+1;
    }
    else{
        $ex_last = 1;
    }
    
    $num_padded = sprintf("%02d", $ex_last);
    $lastId = $num_padded;
    $date = date('m/y');
    $voucherNo = $shortName.'-'.$lastId.'-'.$date;
    // $newCode = $last_voucher_no;



        // =============================
        // ===== //create voucher no ===
        // =============================

    
    voucherInformation::insert([
              'shopId' => Auth::user()->shopId,
              'branchId' => 0,
              'voucherDate' => $voucherDate,
              'voucherType' => $voucherType,
              'voucherNo' => $voucherNo,
              'voucherUniqueId' => $voucherUniqueId,
              'paymentTo' => ' ',
              'mobileNo' => ' ',
              'checkPaymentType' => 0,
              'receiverBankAccountName' => ' ',
              'chequeNo' => ' ',
              'chequeDate' => $voucherDate,

              'accountsHeadCode' => $headOfAccounts1,
              'accountCodeDebit' => $headCode1,
              'accountCodeCredit' => $headCode2,
              'debitAmount' => $voucherAmount,
              'creditAmount' => $voucherAmount,
              'voucherAmount' => $voucherAmount,

              'particular' => $particular,
              'day' => $day,
              'month' => $month,
              'year' => $year,
              'createBy' => Auth::user()->id,
              'created_at' => Carbon::now(),
          ]);

    
          
          voucherInformationReport::insert([
              'shopId' => Auth::user()->shopId, 
              'branchId' => 0,
              'voucherDate' => $voucherDate,
              'voucherType' => $voucherType,
              'voucherNo' => $voucherNo,
              'voucherUniqueId' => $voucherUniqueId,
              'paymentTo' => ' ',
              'mobileNo' => '  ',
              'checkPaymentType' => 0,
              'receiverBankAccountName' => '  ',
              'chequeNo' => '  ',
              'chequeDate' => $voucherDate,

              'accountsHeadCode' => $headOfAccounts1,
              'accountsCode' => $headCode1,
              'type' => 1,
              'voucherAmount' => $voucherAmount,
              
              'randId' => '0',

              'particular' => $particular,
              'day' => $day,
              'month' => $month,
              'year' => $year,
              'createBy' => Auth::user()->id,
              'created_at' => Carbon::now(),
          ]);

          if($request->totalDis){
          voucherInformationReport::insert([
              'shopId' => Auth::user()->shopId, 
              'branchId' => 0,
              'voucherDate' => $voucherDate,
              'voucherType' => $voucherType,
              'voucherNo' => $voucherNo,
              'voucherUniqueId' => $voucherUniqueId,
              'paymentTo' => ' ',
              'mobileNo' => '  ',
              'checkPaymentType' => 0,
              'receiverBankAccountName' => '  ',
              'chequeNo' => '  ',
              'chequeDate' => $voucherDate,

              'accountsHeadCode' => $headOfAccounts11,
              'accountsCode' => $headCode11,
              'type' => 1,
              'voucherAmount' => $request->totalDis,
              
              'randId' => '0',

              'particular' => $particular,
              'day' => $day,
              'month' => $month,
              'year' => $year,
              'createBy' => Auth::user()->id,
              'created_at' => Carbon::now(),
          ]);
        }
       
    
          voucherInformationReport::insert([
              'shopId' => Auth::user()->shopId,
              'branchId' => 0,
              'voucherDate' => $voucherDate,
              'voucherType' => $voucherType,
              'voucherNo' => $voucherNo,
              'voucherUniqueId' => $voucherUniqueId,
              'paymentTo' => ' ',
              'mobileNo' => '  ',
              'checkPaymentType' => 0,
              'receiverBankAccountName' => '  ',
              'chequeNo' => '  ',
              'chequeDate' => $voucherDate,

              'accountsHeadCode' => $headOfAccounts2,
              'accountsCode' => $headCode2,
              'type' => 2,
              'voucherAmount' => $voucherAmount-$request->discount,
              'randId' => '0',

              'particular' => $particular,
              'day' => $day,
              'month' => $month,
              'year' => $year,
              'createBy' => Auth::user()->id,
              'created_at' => Carbon::now(),
          ]);
             
          
              

// ==========================================================
// ============// #1 Journal Voucher Information ============
// ==========================================================






// ==========================================================
// =========== #2  Journal Voucher Information ==============
// ==========================================================


    $voucherUniqueId = time().'8';
    $day = date('d');
    $month = date('m');
    $year = date('Y');
    $voucherDate = date('Y-m-d');
    
     
    
    $particular = $title.'.';
    $voucherAmount = ($request->currentTotalAmount);
      
            $headCode1 = AccountSetup::where('placementType','4')->where('headName','84')->first()->headCode;
            $headOfAccounts1 = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;

            $voucherType = 6;

            $headCode2 = AccountSetup::where('placementType','4')->where('headName','86')->first()->headCode;
            $headOfAccounts2 = ChartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;


        // =============================
        // ======= create voucher no ===
        // =============================

        
    $shortName = voucherType::where('id',$voucherType)->first()->shortName;

    if(voucherInformation::where('shopId',Auth::user()->shopId)->where('voucherType',$voucherType)->orderBy('id','DESC')->exists()){
    $last_voucher_no = voucherInformation::where('shopId',Auth::user()->shopId)->where('voucherType',$voucherType)->orderBy('id','DESC')->first()->voucherNo;

    $exp = explode('-',$last_voucher_no);
    $ex_last = $exp[1]+1;

    }else{
        $ex_last = 1;
    }
    
    $num_padded = sprintf("%02d", $ex_last);
    $lastId = $num_padded;
    $date = date('m/y');
    $voucherNo = $shortName.'-'.$lastId.'-'.$date;
    // $newCode = $last_voucher_no;



        // =============================
        // ======= create voucher no ===
        // =============================

    
    voucherInformation::insert([
              'shopId' => Auth::user()->shopId,
              'branchId' => 0,
              'voucherDate' => $voucherDate,
              'voucherType' => $voucherType,
              'voucherNo' => $voucherNo,
              'voucherUniqueId' => $voucherUniqueId,
              'paymentTo' => ' ',
              'mobileNo' => ' ',
              'checkPaymentType' => 0,
              'receiverBankAccountName' => ' ',
              'chequeNo' => ' ',
              'chequeDate' => $voucherDate,

              'accountsHeadCode' => $headOfAccounts1,
              'accountCodeDebit' => $headCode1,
              'accountCodeCredit' => $headCode2,
              'debitAmount' => $voucherAmount,
              'creditAmount' => $voucherAmount,
              'voucherAmount' => $voucherAmount,

              'particular' => $particular,
              'day' => $day,
              'month' => $month,
              'year' => $year,
              'createBy' => Auth::user()->id,
              'created_at' => Carbon::now(),
          ]);

        //   ----------- Debit Voucher 
          voucherInformationReport::insert([
              'shopId' => Auth::user()->shopId, 
              'branchId' => 0,
              'voucherDate' => $voucherDate,
              'voucherType' => $voucherType,
              'voucherNo' => $voucherNo,
              'voucherUniqueId' => $voucherUniqueId,
              'paymentTo' => ' ',
              'mobileNo' => '  ',
              'checkPaymentType' => 0,
              'receiverBankAccountName' => '  ',
              'chequeNo' => '  ',
              'chequeDate' => $voucherDate,

              'accountsHeadCode' => $headOfAccounts1,
              'accountsCode' => $headCode1,
              'type' => 1,
              'voucherAmount' => $voucherAmount,
              
              'randId' => '0',

              'particular' => $particular,
              'day' => $day,
              'month' => $month,
              'year' => $year,
              'createBy' => Auth::user()->id,
              'created_at' => Carbon::now(),
          ]);
    
          //   ----------- / Debit Voucher

        //   ----------- Credit Voucher 
          voucherInformationReport::insert([
              'shopId' => Auth::user()->shopId, 
              'branchId' => 0,
              'voucherDate' => $voucherDate,
              'voucherType' => $voucherType,
              'voucherNo' => $voucherNo,
              'voucherUniqueId' => $voucherUniqueId,
              'paymentTo' => ' ',
              'mobileNo' => '  ',
              'checkPaymentType' => 0,
              'receiverBankAccountName' => '  ',
              'chequeNo' => '  ',
              'chequeDate' => $voucherDate,

              'accountsHeadCode' => $headOfAccounts2,
              'accountsCode' => $headCode2,
              'type' => 2,
              'voucherAmount' => $voucherAmount,
              
              'randId' => '0',

              'particular' => $particular,
              'day' => $day,
              'month' => $month,
              'year' => $year,
              'createBy' => Auth::user()->id,
              'created_at' => Carbon::now(),
          ]);
    
          
          //   ----------- / Credit Voucher

// ==========================================================
// ============// #2 Journal Voucher Information ============
// ==========================================================


     
    // ===================== Payment type condition =======================
    
    if($request->currentPaidAmount>0){
     

    if(StatementInformation::where('shopId',Auth::user()->shopId)
    ->where('advanceSecurityDepositPrepayment',0)
    ->where('referance',$referance)->exists()){
        $balanceAmountDb = StatementInformation::where('shopId',Auth::user()->shopId)
        ->where('advanceSecurityDepositPrepayment',0)
        ->where('referance',$referance)
        ->orderBy('id','DESC')->first()->balanceAmount;
        
    }
    else{
        $balanceAmountDb = 0;
    }


    // if($request->paymentType==1){
        $balanceAmount = $balanceAmountDb-$request->currentPaidAmount;
        $dr_cr_amount = $request->currentPaidAmount;
        $expenseTitle = 'Cash Receive';
        $title = 'Customer Cash Receive';
    // }else if($request->paymentType==2){
    //     $balanceAmount = $balanceAmountDb+$request->mobileAmount;
    //     $expenseTitle = 'Bank Payment';
    //     $dr_cr_amount = $request->mobileAmount;
    // }
    
    StatementInformation::insert([
        'shopId' => Auth::user()->shopId,
        'rendomNumber' => $rendomNumber,
        'type' => 2,
        'accountHeadCode' => $companyAccountHeadCode,
        'accountCode' => $companyAccountCode,
        'title' => $title,
        'referance' => $referance,
        'paymentType' => 1, //cash
        'cashAmount' => $request->currentPaidAmount,
        'personName' => $request->personName,
        'personMobileNo' => $request->personMobileNo,
        'dueAmount' => $request->currentDue,
        'creditAmount' => $dr_cr_amount,
        'balanceAmount' => $balanceAmount,
        'note' => $title,
        'createBy' => Auth::user()->id,
        'shopId' => Auth::user()->shopId,
        'created_at' => Carbon::now(),
    ]);
    
    // ===============================================





    // ==========================================================
    // ==================== Voucher Information =================
    // ==========================================================

        if(1){
        // if($request->paymentType>0 && $request->paymentType<3){

            $voucherUniqueId = time().'9';
            $day = date('d');
            $month = date('m');
            $year = date('Y');
            $voucherDate = date('Y-m-d');
            
             
            
            $particular = $title.'.';
            // if($request->paymentType==1){
                $voucherAmount = $request->currentPaidAmount;
            // }else if($request->paymentType==2){
            //     $voucherAmount = $request->mobileAmount;
            // }
            
              
                    $headCode2 = SalesCustomerEntry::where('SalesCustomerEntryId',$salesCustomerId)->first()->accountCode;
                    $headOfAccounts = ChartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                
                
                    $voucherType = 2;
                    $headCode1 = AccountSetup::where('placementType','9')->where('headName','100')->first()->headCode;
                
    
    
                // =============================
                // ======= create voucher no ===
                // =============================
    
                
            $shortName = voucherType::where('id',$voucherType)->first()->shortName;
    
            if(voucherInformation::where('voucherType',$voucherType)->orderBy('id','DESC')->exists()){
            $last_voucher_no = voucherInformation::where('voucherType',$voucherType)->orderBy('id','DESC')->first()->voucherNo;
    
            $exp = explode('-',$last_voucher_no);
            $ex_last = $exp[1]+1;
    
            }else{
                $ex_last = 1;
            }
            
            $num_padded = sprintf("%02d", $ex_last);
            $lastId = $num_padded;
            $date = date('m/y');
            $voucherNo = $shortName.'-'.$lastId.'-'.$date;
            // $newCode = $last_voucher_no;
    
    
    
                // =============================
                // ======= create voucher no ===
                // =============================
    
            
            voucherInformation::insert([
                      'shopId' => Auth::user()->shopId,
                      'branchId' => 0,
                      'voucherDate' => $voucherDate,
                      'voucherType' => $voucherType,
                      'voucherNo' => $voucherNo,
                      'voucherUniqueId' => $voucherUniqueId,
                      'paymentTo' => ' ',
                      'mobileNo' => ' ',
                      'checkPaymentType' => 0,
                      'receiverBankAccountName' => ' ',
                      'chequeNo' => ' ',
                      'chequeDate' => $voucherDate,
    
                      'accountsHeadCode' => $headOfAccounts,
                      'accountCodeDebit' => $headCode1,
                      'accountCodeCredit' => $headCode2,
                      'debitAmount' => $voucherAmount,
                      'creditAmount' => $voucherAmount,
                      'voucherAmount' => $voucherAmount,
    
                      'particular' => $particular,
                      'day' => $day,
                      'month' => $month,
                      'year' => $year,
                      'createBy' => Auth::user()->id,
                      'created_at' => Carbon::now(),
                  ]);


        //   ======================= chart of account balance update

        $debitHeadCodeForBalance = chartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
        $debitCodeForBalance = $headCode1;
        $creditHeadCodeForBalance = 0;
        $creditCodeForBalance = 0;
        // balanceUpdate(headCode1,code1,headCode2,code2,dr,cr,balance);
        chartOfAccountController::balanceUpdate($debitHeadCodeForBalance,
        $debitCodeForBalance,
        $creditHeadCodeForBalance,
        $creditCodeForBalance,
        $voucherAmount,
        $voucherAmount,
        $voucherAmount
    );

//   ======================= /chart of account balance update
            
                  voucherInformationReport::insert([
                      'shopId' => Auth::user()->shopId, 
                      'branchId' => 0,
                      'voucherDate' => $voucherDate,
                      'voucherType' => $voucherType,
                      'voucherNo' => $voucherNo,
                      'voucherUniqueId' => $voucherUniqueId,
                      'paymentTo' => ' ',
                      'mobileNo' => '  ',
                      'checkPaymentType' => 0,
                      'receiverBankAccountName' => '  ',
                      'chequeNo' => '  ',
                      'chequeDate' => $voucherDate,
    
                      'accountsHeadCode' => $headOfAccounts,
                      'accountsCode' => $headCode1,
                      'type' => 1,
                      'voucherAmount' => $voucherAmount,
                      
                      'randId' => '0',
    
                      'particular' => $particular,
                      'day' => $day,
                      'month' => $month,
                      'year' => $year,
                      'createBy' => Auth::user()->id,
                      'created_at' => Carbon::now(),
                  ]);
            
                  voucherInformationReport::insert([
                      'shopId' => Auth::user()->shopId,
                      'branchId' => 0,
                      'voucherDate' => $voucherDate,
                      'voucherType' => $voucherType,
                      'voucherNo' => $voucherNo,
                      'voucherUniqueId' => $voucherUniqueId,
                      'paymentTo' => ' ',
                      'mobileNo' => '  ',
                      'checkPaymentType' => 0,
                      'receiverBankAccountName' => '  ',
                      'chequeNo' => '  ',
                      'chequeDate' => $voucherDate,
    
                      'accountsHeadCode' => $headOfAccounts,
                      'accountsCode' => $headCode2,
                      'type' => 2,
                      'voucherAmount' => $voucherAmount,
                      'randId' => '0',
    
                      'particular' => $particular,
                      'day' => $day,
                      'month' => $month,
                      'year' => $year,
                      'createBy' => Auth::user()->id,
                      'created_at' => Carbon::now(),
                  ]);
    
                //   ===================================================
                //   ========================= receive payment statement 
                //   ===================================================
                    
                $last_inserted_voucher_id = voucherInformation::where('voucherUniqueId',$voucherUniqueId)->first()->id;
                
                 
    
                    if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                    ->where('type',1)
                    ->orderBy('id','DESC')
                    ->exists()){
                        $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                    ->where('type',1)
                    ->orderBy('id','DESC')
                    ->first()->total;
                    }else{
                        $last_amount = 0;
                    }
                    $last_rp_total = $last_amount+$request->currentTotalAmount;
                    
                    ReceivePaymentStatement::insert([
                        'shopId' => Auth::user()->shopId,
                        'branchId' => 0,

                        'voucherType' => $voucherType,
                        'voucherDate' => $voucherDate,
                        'voucherId' => $last_inserted_voucher_id,
                        'voucherUniqueId' => $voucherUniqueId,
                        'accountHeadCode' => $headOfAccounts,
                        'accountCode' => $headCode1,
                        'type' => 1,
                        'cash' => $voucherAmount,
                        'total' => $last_rp_total,
      
                        'createBy' => Auth::user()->id,
                        'created_at' => Carbon::now(),
                    ]);
    
                
                
                }
                
    
                //   ===================================================
                //   ========================= receive payment statement 
                //   ===================================================
                
                
                
                // ==========================================================
                // ==================== Voucher Information =================
                // ==========================================================

                
            } // payment type condition end
    
    
    
            // ===================== Payment type condition =======================
    
    if($request->mobileAmount>0){
    // if($request->paymentType==1 || $request->paymentType==2){

    if(StatementInformation::where('shopId',Auth::user()->shopId)
    ->where('advanceSecurityDepositPrepayment',0)
    ->where('referance',$referance)->exists()){
        $balanceAmountDb = StatementInformation::where('shopId',Auth::user()->shopId)
        ->where('advanceSecurityDepositPrepayment',0)
        ->where('referance',$referance)
        ->orderBy('id','DESC')->first()->balanceAmount;
        
    }
    else{
        $balanceAmountDb = 0;
    }


    // if($request->paymentType==1){
        // $balanceAmount = $balanceAmountDb+$request->currentPaidAmount;
        // $dr_cr_amount = $request->currentPaidAmount;
        // $expenseTitle = 'Cash Payment';
    // }else if($request->paymentType==2){
        $balanceAmount = $balanceAmountDb-$request->mobileAmount;
        $expenseTitle = 'Bank Receive';
        $title = 'Customer Bank Receive';
        $dr_cr_amount = $request->mobileAmount;
    // }
    
    StatementInformation::insert([
        'shopId' => Auth::user()->shopId,
        'rendomNumber' => $rendomNumber,
        'type' => 2,
        'accountHeadCode' => $companyAccountHeadCode,
        'accountCode' => $companyAccountCode,
        'title' => $title,
        'referance' => $referance,
        'paymentType' => 2, //bank
        'bankAmount' => $request->mobileAmount,
        'bankTypeEntryId' => $request->receiverbankTypeEntryId,
        'bankEntryId' => $request->receiverbankEntryId,
        'bankAccountId' => $request->receiverbankAccountId,
        'dueAmount' => $request->currentDue,
        'creditAmount' => $dr_cr_amount,
        'balanceAmount' => $balanceAmount,
        'note' => $title,
        'createBy' => Auth::user()->id,
        'created_at' => Carbon::now(),
    ]);
    
    // ===============================================





    // ==========================================================
    // ==================== Voucher Information =================
    // ==========================================================

        if(1){
        // if($request->paymentType>0 && $request->paymentType<3){

            $voucherUniqueId = time().'10';
            $day = date('d');
            $month = date('m');
            $year = date('Y');
            $voucherDate = date('Y-m-d');
            
             
            
            $particular = $title.'.';
            // if($request->paymentType==1){
                // $voucherAmount = $request->currentPaidAmount;
            // }else if($request->paymentType==2){
                $voucherAmount = $request->mobileAmount;
            // }
            
              
                    $headCode2 = SalesCustomerEntry::where('salesCustomerEntryId',$salesCustomerId)->first()->accountCode;
                    $headOfAccounts = ChartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                
                
                    $voucherType = 4;
                    $headCode1 = ShopAddBankEntry::where('bankId',$request->receiverbankAccountId)->first()->accountCode;
                
    
    
                // =============================
                // ======= create voucher no ===
                // =============================
    
                
            $shortName = voucherType::where('id',$voucherType)->first()->shortName;
    
            if(voucherInformation::where('voucherType',$voucherType)->orderBy('id','DESC')->exists()){
            $last_voucher_no = voucherInformation::where('voucherType',$voucherType)->orderBy('id','DESC')->first()->voucherNo;
    
            $exp = explode('-',$last_voucher_no);
            $ex_last = $exp[1]+1;
    
            }else{
                $ex_last = 1;
            }
            
            $num_padded = sprintf("%02d", $ex_last);
            $lastId = $num_padded;
            $date = date('m/y');
            $voucherNo = $shortName.'-'.$lastId.'-'.$date;
            // $newCode = $last_voucher_no;
    
    
    
                // =============================
                // ======= create voucher no ===
                // =============================
    
            
            voucherInformation::insert([
                      'shopId' => Auth::user()->shopId,
                      'branchId' => 0,
                      'voucherDate' => $voucherDate,
                      'voucherType' => $voucherType,
                      'voucherNo' => $voucherNo,
                      'voucherUniqueId' => $voucherUniqueId,
                      'paymentTo' => ' ',
                      'mobileNo' => ' ',
                      'checkPaymentType' => 0,
                      'receiverBankAccountName' => ' ',
                      'chequeNo' => ' ',
                      'chequeDate' => $voucherDate,
    
                      'accountsHeadCode' => $headOfAccounts,
                      'accountCodeDebit' => $headCode1,
                      'accountCodeCredit' => $headCode2,
                      'debitAmount' => $voucherAmount,
                      'creditAmount' => $voucherAmount,
                      'voucherAmount' => $voucherAmount,
    
                      'particular' => $particular,
                      'day' => $day,
                      'month' => $month,
                      'year' => $year,
                      'createBy' => Auth::user()->id,
                      'created_at' => Carbon::now(),
                  ]);


                  
        //   ======================= chart of account balance update

        $debitHeadCodeForBalance = chartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
        $debitCodeForBalance = $headCode1;
        $creditHeadCodeForBalance = 0;
        $creditCodeForBalance = 0;
        // balanceUpdate(headCode1,code1,headCode2,code2,dr,cr,balance);
        chartOfAccountController::balanceUpdate($debitHeadCodeForBalance,
        $debitCodeForBalance,
        $creditHeadCodeForBalance,
        $creditCodeForBalance,
        $voucherAmount,
        $voucherAmount,
        $voucherAmount
    );

//   ======================= /chart of account balance update
            
                  voucherInformationReport::insert([
                      'shopId' => Auth::user()->shopId, 
                      'branchId' => 0,
                      'voucherDate' => $voucherDate,
                      'voucherType' => $voucherType,
                      'voucherNo' => $voucherNo,
                      'voucherUniqueId' => $voucherUniqueId,
                      'paymentTo' => ' ',
                      'mobileNo' => '  ',
                      'checkPaymentType' => 0,
                      'receiverBankAccountName' => '  ',
                      'chequeNo' => '  ',
                      'chequeDate' => $voucherDate,
    
                      'accountsHeadCode' => $headOfAccounts,
                      'accountsCode' => $headCode1,
                      'type' => 1,
                      'voucherAmount' => $voucherAmount,
                      
                      'randId' => '0',
    
                      'particular' => $particular,
                      'day' => $day,
                      'month' => $month,
                      'year' => $year,
                      'createBy' => Auth::user()->id,
                      'created_at' => Carbon::now(),
                  ]);
            
                  voucherInformationReport::insert([
                      'shopId' => Auth::user()->shopId,
                      'branchId' => 0,
                      'voucherDate' => $voucherDate,
                      'voucherType' => $voucherType,
                      'voucherNo' => $voucherNo,
                      'voucherUniqueId' => $voucherUniqueId,
                      'paymentTo' => ' ',
                      'mobileNo' => '  ',
                      'checkPaymentType' => 0,
                      'receiverBankAccountName' => '  ',
                      'chequeNo' => '  ',
                      'chequeDate' => $voucherDate,
    
                      'accountsHeadCode' => $headOfAccounts,
                      'accountsCode' => $headCode2,
                      'type' => 2,
                      'voucherAmount' => $voucherAmount,
                      'randId' => '0',
    
                      'particular' => $particular,
                      'day' => $day,
                      'month' => $month,
                      'year' => $year,
                      'createBy' => Auth::user()->id,
                      'created_at' => Carbon::now(),
                  ]);
    
                //   ===================================================
                //   ========================= receive payment statement 
                //   ===================================================
                    
                $last_inserted_voucher_id = voucherInformation::where('voucherUniqueId',$voucherUniqueId)->first()->id;
                 
    
                    if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                    ->where('type',1)
                    ->orderBy('id','DESC')
                    ->exists()){
                        $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                    ->where('type',1)
                    ->orderBy('id','DESC')
                    ->first()->total;
                    }else{
                        $last_amount = 0;
                    }
                    $last_rp_total = $last_amount+$voucherAmount;
                    
                    ReceivePaymentStatement::insert([
                        'shopId' => Auth::user()->shopId,
                        'branchId' => 0,
    
                        'voucherType' => $voucherType,
                        'voucherDate' => $voucherDate,
                        'voucherId' => $last_inserted_voucher_id,
                        'voucherUniqueId' => $voucherUniqueId,
                        'accountHeadCode' => $headOfAccounts,
                        'accountCode' => $headCode1,
                        'type' => 1,
                        'bank' => $voucherAmount,
                        'total' => $last_rp_total,
      
                        'createBy' => Auth::user()->id,
                        'created_at' => Carbon::now(),
                    ]);
    
                
                }
                
    
                //   ===================================================
                //   ========================= receive payment statement 
                //   ===================================================
                
                
                
                // ==========================================================
                // ==================== Voucher Information =================
                // ==========================================================

                
            } // payment type condition end
    
    
            


    //  --------------------------------------------------------------------
    //  ----------------- /voucher & statement information -----------------
    //  --------------------------------------------------------------------

    InvoiceNoGenerate::where('shopId',Auth::user()->shopId)->where('invoiceNo',$request->salesInvoiceNo)->update([
        'status' => 1,
        'updateBy' => Auth::user()->id,
        'updated_at' => Carbon::now(),
    ]);

    }
           
       return ['success' => 'ok'];
    }


    public function insertPurchaseProductUnitInfoReturn($request,$priceTypeId,$productId,$brandId,$unitId,$colorId,$sizeId){
     
        // if(SalesReturnInvoiceUnitInfo::where('productId',$productId)
        // ->where('brandId',$brandId)
        // ->where('colorId',$colorId)->where('sizeId',$sizeId)->where('priceTypeId',$priceTypeId)->where('shopId',Auth::user()->shopId)->exists()){

            $infos = PurchaseProductUnitInfo::where('productId',$productId)
            ->where('colorId',$colorId)
            ->where('priceTypeId',$priceTypeId)
            ->where('sizeId',$sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
            foreach($infos as $info){
                if($info->totalQuantity===NULL){
                    $quantity = 1;
                }else{
                    $quantity = $info->quantity;
                }
                SalesReturnInvoiceUnitInfo::insert([
                    'salesInvoiceNo' => $request->salesInvoiceNo,
                    'productId' => $info->productId,
                    'brandId' => $info->brandId,
                    'purchaseType' => $info->purchaseType,
                    'countryId' => $info->countryId,
                    'colorId' => $info->colorId,
                    'sizeId' => $info->sizeId,
                    'priceTypeId' => $priceTypeId,
                    'quantity' => $quantity,
                    'unitId' => $info->unitId,
                    'finalQuantity' => 0,
                    'availableQuantity' => 0,
                    'totalUnitId' => $info->unitId,
                    'purchaseUnitPrice' => 0,
                    'purchaseTotalPrice' => 0,
                    'salesUnitPrice' => 0,
                    'salesTotalPrice' => 0,
                    'openingStatus' => 0,
                    'shopId' => Auth::user()->shopId,
                    'createBy' => Auth::user()->id,
                    'created_at' => Carbon::now()
                  ]);
            }




           // --------------------------------- single 
            $unitInfo = SalesReturnInvoiceUnitInfo::where('productId',$productId)
            ->where('salesInvoiceNo',$request->salesInvoiceNo)
            ->where('openingStatus',0)
            ->where('brandId',$brandId)->where('colorId',$colorId)->where('sizeId',$sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$unitId)->where('shopId',Auth::user()->shopId)->first();
            
            if($unitInfo->totalQuantity===NULL){
                SalesReturnInvoiceUnitInfo::where('productId',$productId)
                ->where('salesInvoiceNo',$request->salesInvoiceNo)
                ->where('openingStatus',0)
                ->where('brandId',$brandId)->where('colorId',$colorId)->where('sizeId',$sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$unitId)->where('shopId',Auth::user()->shopId)->update([
                    'finalQuantity' => DB::raw('finalQuantity + '.$request->quantity),
                    'availableQuantity' => DB::raw('availableQuantity + '.$request->quantity),
                    'purchaseUnitPrice' => $request->purchaseUnitPrice,
                    'purchaseTotalPrice' => DB::raw('purchaseTotalPrice + '.$request->purchaseTotalPrice),
                    'salesUnitPrice' => $request->unitPrice,
                    'salesTotalPrice' => DB::raw('salesTotalPrice + '.$request->totalPrice),
                    'updateBy' => Auth::user()->id,
                    'updated_at' => Carbon::now()
                ]);
                $lastSingleQuantity = $request->quantity;
            }
            else{
                SalesReturnInvoiceUnitInfo::where('productId',$productId)
                ->where('salesInvoiceNo',$request->salesInvoiceNo)
                ->where('openingStatus',0)
                ->where('brandId',$brandId)->where('colorId',$colorId)->where('sizeId',$sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$unitId)->where('shopId',Auth::user()->shopId)->update([
                    'totalQuantity' => DB::raw('totalQuantity + '.$request->quantity),
                    'finalQuantity' => DB::raw('finalQuantity + '.$request->quantity),
                    'availableQuantity' => DB::raw('availableQuantity + '.$request->quantity),
                    'purchaseUnitPrice' => $request->purchaseUnitPrice,
                    'purchaseTotalPrice' => DB::raw('purchaseTotalPrice + '.$request->purchaseTotalPrice),
                    'salesUnitPrice' => $request->unitPrice,
                    'salesTotalPrice' => DB::raw('salesTotalPrice + '.$request->totalPrice),
                    'updateBy' => Auth::user()->id,
                    'updated_at' => Carbon::now()
               ]);
               $lastSingleQuantity = $request->quantity;
            }


            // --------------------------------- / single 

            // --------------------------------- loop 
            $selectUnitLists = SalesReturnInvoiceUnitInfo::where('id','>',$unitInfo->id)->where('openingStatus',0)
            ->where('productId',$productId)
                ->where('brandId',$brandId)->where('colorId',$colorId)->where('sizeId',$sizeId)->where('priceTypeId',$priceTypeId)
                ->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                                
            foreach($selectUnitLists as $selectUnitList){
                
                $info = SalesReturnInvoiceUnitInfo::where('unitId',$selectUnitList->unitId)
                ->where('productId',$productId)
                ->where('brandId',$brandId)->where('colorId',$colorId)->where('sizeId',$sizeId)->where('priceTypeId',$priceTypeId)->where('shopId',Auth::user()->shopId)->first();
            
                $unitQuantity = ($lastSingleQuantity*$info->quantity);
                $updateTotalQuantity = $unitQuantity;
                $currentPurchase = ($request->purchaseUnitPrice/$unitQuantity)*$request->quantity;
                $currentPurchasePrice = $info->purchaseTotalPrice+($request->purchaseUnitPrice*$request->quantity);
                $currentSales = ($request->unitPrice/$unitQuantity)*$request->quantity;
                $currentSalesPrice = $info->salesTotalPrice+($request->unitPrice*$request->quantity);
                SalesReturnInvoiceUnitInfo::where('id',$selectUnitList->id)->update([
                    'totalQuantity' => $updateTotalQuantity,
                    'finalQuantity' => $updateTotalQuantity,
                    'availableQuantity' => $updateTotalQuantity,
                    'purchaseUnitPrice' => $currentPurchase,
                    'purchaseTotalPrice' => $currentPurchasePrice,
                    'salesUnitPrice' => $currentSales,
                    'salesTotalPrice' => $currentSalesPrice,
                    'updateBy' => Auth::user()->id,
                    'updated_at' => Carbon::now()
                ]);

                 

            //==========
            $lastSingleQuantity = $lastSingleQuantity*$info->quantity;
            }
            // --------------------------------- /loop 
         

        // }
        // else{
        //     SalesReturnInvoiceUnitInfo::insert([
        //             'salesInvoiceNo' => $request->salesInvoiceNo,
        //             'productId' => $productId,
        //             'brandId' => $brandId,
        //             'purchaseType' => 0,
        //             'countryId' => 0,
        //             'colorId' => $colorId,
        //             'sizeId' => $sizeId,
        //             'priceTypeId' => $priceTypeId,
        //             'quantity' => $request->quantity,
        //             'unitId' => $unitId,
        //             'finalQuantity' => $request->quantity,
        //             'availableQuantity' => $request->quantity,
        //             'totalUnitId' => $unitId,
        //             'purchaseUnitPrice' => $request->unitPrice,
        //             'purchaseTotalPrice' => $request->totalPrice,
        //             'salesUnitPrice' => $request->salePrice,
        //             'salesTotalPrice' => $request->salePrice*$request->quantity,
        //             'openingStatus' => 0,
        //             'shopId' => Auth::user()->shopId,
        //             'createBy' => Auth::user()->id,
        //             'created_at' => Carbon::now()
        //           ]);

        //         }
                }


                public function updateUnitQuantityBottomToTopReturn($request,$priceTypeId,$productId,$brandId,$unitId,$colorId,$sizeId){
                    $loopInfos = SalesReturnInvoiceUnitInfo::distinct()->where('priceTypeId',$priceTypeId)
                                ->where('openingStatus',0)
                                ->where('salesInvoiceNo',$request->salesInvoiceNo)
                                ->where('productId',$productId)
                                ->where('brandId',$brandId)
                                ->where('colorId',$colorId)
                                ->where('sizeId',$sizeId)
                                ->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->get('id');
                                $lC = 1;
                                $loopCount = count($loopInfos);
                                $idIms = '';
                                foreach($loopInfos as $loopInfo){
                        
                                    if($loopCount==$lC){
                                        $idIms .= "$loopInfo->id";
                                    }else{
                                        $idIms .= "$loopInfo->id,";
                                    }
                        
                                    $lC++;
                                }
                                 
                                // $idIms = '19,18,17,16';
                                $idExs = explode(',',$idIms);
                                $count = count($idExs);
                                $null = 0;
                                for($i=0;$i<$count;$i++){
                                    
                                 if(($i+1)<$count){
                                    $select = SalesReturnInvoiceUnitInfo::where('id',$idExs[$i])->first();
                                     
                                    $divQnt = intval($select->finalQuantity/$select->quantity);
                                     
                                     if($divQnt>0){
                                         $updateQuantity = $divQnt;
                                     }
                                     else{
                                         $updateQuantity = 0;
                                     }
                                    
                                    
                                    
            
                                    $checkUnitInfo = SalesReturnInvoiceUnitInfo::where('id',$idExs[$i+1])->first()->totalQuantity;
                                // if($checkUnitInfo===NULL){
                                    SalesReturnInvoiceUnitInfo::where('id',$idExs[$i+1])->update([
                                    'totalQuantity' => $updateQuantity,
                                    'finalQuantity' => $updateQuantity,
                                    'availableQuantity' => $updateQuantity,
                                    'updateBy' => Auth::user()->id,
                                    'updated_at' => Carbon::now()
                                ]);
                                // }else{
                                //     SalesReturnInvoiceUnitInfo::where('id',$idExs[$i+1])->update([
                                //     'totalQuantity' => $updateQuantity,
                                //     'finalQuantity' => $updateQuantity,
                                //     'availableQuantity' => $updateQuantity,
                                //     'updateBy' => Auth::user()->id,
                                //     'updated_at' => Carbon::now()
                                // ]);
                                // }
                                }
                                }
                }

                


                

    public function salesProductQuantityUpdate(Request $request)
    {
        $implodeBrandId = implode(',', array_column($request->brandId,$request->id));
        $brandId =explode(',',$implodeBrandId)[0];

        if($request->colorId){
            $implodeColorId = implode(',', array_column($request->colorId,$request->id));
            $colorId = explode(',',$implodeColorId)[0];
       }else{
           $colorId = 0;
       }

       if($request->sizeId){
            $implodeSizeId = implode(',', array_column($request->sizeId,$request->id));
            $sizeId = explode(',',$implodeSizeId)[0];
       }else{
           $sizeId = 0;
       }


        foreach ($request->purchaseProductId as $purchaseProductId) {
   
            SalesProductEntry::
            where('productId',$purchaseProductId)
            ->where('brandId',$request->brandId)
            ->where('colorId',$colorId)
            ->where('sizeId',$sizeId)
            ->where('salesInvoiceNo',$request->salesInvoiceNo)->update([
                'quantity' => $request->quantity,
                'unitPrice' => $request->unitPrice,
                'totalPrice' => $request->totalPrice,
                'totalDiscount' => $request->totalDis,
            ]);
            $ft=SalesProductEntry::where('productId',$purchaseProductId)->where('sizeId',$sizeId)->where('colorId',$colorId)->where('brandId',$request->brandId)->where('salesInvoiceNo',$request->salesInvoiceNo)->first();
            $data=StockSummeryTemp::where('salesProductEntryId',$ft->salesProductEntryId)->get();
            foreach($data  as $info){
               $sts=StockSummery::where('shopId',Auth::user()->shopId)->where('purchaseInvoiceNo',$info->purchaseInvoiceNo)->get();
   
               foreach($sts as $st){
                   $total = $st->quantity+$info->quantity; 
                   StockSummery::where('shopId',Auth::user()->shopId)->where('purchaseInvoiceNo',$info->purchaseInvoiceNo)->update([
                       'quantity'=>$total,
                   ]); 
               }
               StockSummeryTemp::where('salesProductEntryId',$ft->salesProductEntryId)->delete();
          
            }
               if(SalesSetting::where('shopId',Auth::user()->shopId)->exists()){
                $inf=SalesSetting::where('shopId',Auth::user()->shopId)->first();
                if($inf->status==1){
                    $info='asc';
                }
                else{
                 $info='desc';  
                }
             }
             else{
               $info='asc';
             }
       
             $ct=StockSummery::where('quantity','!=',0)->where('productId',$purchaseProductId)->where('brandId',$brandId)->where('shopId',Auth::user()->shopId)->orderby('id',$info)->get();              
         
         
             $a=$request->quantity;     
            
              foreach($ct as $c){                   
                  if($c->quantity<=$a){
                        $j=0; 
                        $a=$a-$c->quantity; 
                        $qt=$c->quantity;
                     
                     }
                 else{
                   
                     $j=$c->quantity-$a;                               
                     $qt=$a;
                     $a=0;  
                                    
                     
                  }
                StockSummeryTemp::insert([
                     'salesProductEntryId'=>$ft->salesProductEntryId,
                     'purchaseInvoiceNo'=>$c->purchaseInvoiceNo,
                     'quantity'=>$qt,
                ]);
                  StockSummery::where('quantity','!=',0)->where('productId',$purchaseProductId)->where('brandId',$brandId)->where('id',$c->id)->where('shopId',Auth::user()->shopId)->orderby('id',$info)->update([
                      'quantity'=>$j]);
 
              }
          
            
        
        }
    }
    public function salesProductQuantityReturn(Request $request,$id)
    {
        $pd =SalesProductEntry::where('salesProductEntryId',$id)->where('shopId',Auth::user()->shopId)->first(); 
        $qun=$pd->quantity-$request->quantity;
      
        if($qun==0){
            $qCal=0;
        }
        else{
            $qCal=$pd->totalPrice;
        }
                SalesProductEntry::where('salesProductEntryId',$id)->where('shopId',Auth::user()->shopId)->update([
                    'preTotalPrice'=>$qCal
                 ]);
        
   
        
        $brandId =  $pd->brandId  ;
        $purchaseProductId=  $pd->productId  ;
      
        if($pd->discountPrice==0){
        $unitPrice=$qun*$pd->unitPrice;     
        $totalDiscount=0;   
        }
        else{
            $unitPrice=$qun*$pd->discountPrice;
            $totalDiscount=$qun*$pd->unitPrice-$qun*$pd->discountPrice;       
        }
      
          $productId = PurchaseProductEntry::where('productId',$purchaseProductId)->first()->productId;
           $qt=SalesProductEntry::where('productId',$purchaseProductId)->where('salesInvoiceNo',$request->salesInvoiceNo)->where('brandId',$brandId)->first();
           if($qt->quantity<$request->quantity){
            return ['error' => 'error'];
           }
           else{
            SalesProductEntry::where('productId',$purchaseProductId)->where('salesInvoiceNo',$request->salesInvoiceNo)->update([
                'quantity' =>  $qun,
                'totalPrice' =>  $unitPrice,
                'totalDiscount' =>  $totalDiscount,
                
            ]);
            $ft=SalesProductEntry::where('productId',$purchaseProductId)->where('salesInvoiceNo',$request->salesInvoiceNo)->first();
            $data=StockSummeryTemp::where('salesProductEntryId',$ft->salesProductEntryId)->get();
            foreach($data  as $info){
               $sts=StockSummery::where('shopId',Auth::user()->shopId)->where('purchaseInvoiceNo',$info->purchaseInvoiceNo)->get();
   
               foreach($sts as $st){
                   $total = $st->quantity+$info->quantity; 
                   StockSummery::where('shopId',Auth::user()->shopId)->where('purchaseInvoiceNo',$info->purchaseInvoiceNo)->update([
                       'quantity'=>$total,
                   ]); 
               }
               StockSummeryTemp::where('salesProductEntryId',$ft->salesProductEntryId)->delete();
          
            }
               if(SalesSetting::where('shopId',Auth::user()->shopId)->exists()){
                $inf=SalesSetting::where('shopId',Auth::user()->shopId)->first();
                if($inf->status==1){
                    $info='asc';
                }
                else{
                 $info='desc';  
                }
             }
             else{
               $info='asc';
             }
       
             $ct=StockSummery::where('quantity','!=',0)->where('productId',$purchaseProductId)->where('brandId',$brandId)->where('shopId',Auth::user()->shopId)->orderby('id',$info)->get();              
         
         
             $a=$qun;     
            
              foreach($ct as $c){                   
                  if($c->quantity<=$a){
                        $j=0; 
                        $a=$a-$c->quantity; 
                        $qt=$c->quantity;
                     
                     }
                 else{
                   
                     $j=$c->quantity-$a;                               
                     $qt=$a;
                     $a=0;  
                                    
                     
                  }
                StockSummeryTemp::insert([
                     'salesProductEntryId'=>$ft->salesProductEntryId,
                     'purchaseInvoiceNo'=>$c->purchaseInvoiceNo,
                     'quantity'=>$qt,
                ]);
                  StockSummery::where('quantity','!=',0)->where('productId',$purchaseProductId)->where('brandId',$brandId)->where('id',$c->id)->where('shopId',Auth::user()->shopId)->orderby('id',$info)->update([
                      'quantity'=>$j]);
 
              
                  
 
              }
          
            
             return ['success' => 'ok'];
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($salesCustomerEntryId)
    {
        $customerStatus = SalesCustomerEntry::where('salesCustomerEntryId', $salesCustomerEntryId)->first()->customerStatus;

        if ($customerStatus == 0){
            SalesCustomerEntry::where('salesCustomerEntryId', $salesCustomerEntryId)->update([
                'customerStatus' => 1,
                'updateBy'=>  Auth::user()->id,
            ]);

        }
        else {
            SalesCustomerEntry::where('salesCustomerEntryId', $salesCustomerEntryId)->update([
                'customerStatus' => 0,
                'updateBy'=>  Auth::user()->id,
            ]);
        }
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
    public function salesProductDelete($id)
    {
        
            $salesInfo = SalesProductEntry::where('salesProductEntryId',$id)->first();
            $id1 = $id;
        
            //   ========================== advance unit calculation
            if(1){
                // if(0){
                $lastPriceType = $salesInfo->priceType;

                    // --------------------------------- single 
                    $id = PurchaseProductUnitInfo::where('unitId',$salesInfo->unitId)
                    ->where('productId',$salesInfo->productId)
                    ->where('brandId',$salesInfo->brandId)
                    ->where('colorId',$salesInfo->colorId)
                    ->where('sizeId',$salesInfo->sizeId)->where('shopId',Auth::user()->shopId)->first()->id;
                    
                    $selectUnitInfo = PurchaseProductUnitInfo::where('id',$id)
                    ->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first();
                    
                    if($selectUnitInfo->totalQuantity==NULL){
                        $lastSingleQuantity = 1;
                        $currentQuantity = $selectUnitInfo->quantity+$salesInfo->quantity;
                        $currentPurchasePrice = $selectUnitInfo->purchaseTotalPrice+($selectUnitInfo->purchaseUnitPrice*$salesInfo->quantity);
                        $currentSalesPrice = $selectUnitInfo->salesTotalPrice+($salesInfo->unitPrice*$salesInfo->quantity);
                    
                        PurchaseProductUnitInfo::where('id',$id)->update([
                            'quantity' => $currentQuantity,
                            'finalQuantity' => $currentQuantity,
                            
                        ]);
                        
                    }else{
                        // $lastSingleQuantity = $selectUnitInfo->quantity;
                        $lastSingleQuantity = $salesInfo->quantity;
                        $currentQuantity = $selectUnitInfo->totalQuantity+$salesInfo->quantity;
                        
                        $currentPurchasePrice = $selectUnitInfo->purchaseTotalPrice+($selectUnitInfo->purchaseUnitPrice*$salesInfo->quantity);
                        $currentSalesPrice = $selectUnitInfo->salesTotalPrice+($salesInfo->unitPrice*$salesInfo->quantity);
                        PurchaseProductUnitInfo::where('id',$id)->update([
                            'totalQuantity' => $currentQuantity,
                            'finalQuantity' => $currentQuantity,
                ]);

                    }

                    
                    // --------------------------------- /single
                    
                    // --------------------------------- loop 
                    $selectUnitLists = PurchaseProductUnitInfo::where('id','>',$id)
                    ->where('productId',$salesInfo->productId)
                    ->where('brandId',$salesInfo->brandId)
                    ->where('sizeId',$salesInfo->sizeId)
                    ->where('colorId',$salesInfo->colorId)
                    ->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                                    
                    foreach($selectUnitLists as $selectUnitList){
                        
                        $unitQuantity = ($lastSingleQuantity*$selectUnitList->quantity);
                        $updateTotalQuantity = $selectUnitList->totalQuantity+$unitQuantity;
                        
                        $currentPurchasePrice = $selectUnitInfo->purchaseTotalPrice+($selectUnitInfo->purchaseUnitPrice*$salesInfo->quantity);
                        $currentSalesPrice = $selectUnitInfo->salesTotalPrice+($salesInfo->unitPrice*$salesInfo->quantity);
                        
                        PurchaseProductUnitInfo::where('id',$selectUnitList->id)->update([
                            'totalQuantity' => $updateTotalQuantity,
                            'finalQuantity' => $updateTotalQuantity,
                        ]);
                        

                    
    
                    //==========
                    $lastSingleQuantity = $lastSingleQuantity*$selectUnitList->quantity;
                    }
                    // --------------------------------- /loop 


                    // ================= update all purchase and sales price 
                    
                    PurchaseProductUnitInfo::where('productId',$salesInfo->productId)
                    ->where('brandId',$salesInfo->brandId)
                    ->where('colorId',$salesInfo->colorId)
                    ->where('sizeId',$salesInfo->sizeId)->where('shopId',Auth::user()->shopId)->update([
                        'purchaseTotalPrice' => $currentPurchasePrice,
                        'salesTotalPrice' => $currentSalesPrice,
                    ]);


                    // ================= /update all purchase and sales price 

                    // ================= loop for top serial
                     

                    $loopInfos = PurchaseProductUnitInfo::distinct()
                    ->where('productId',$salesInfo->productId)
                    ->where('brandId',$salesInfo->brandId)
                    ->where('colorId',$salesInfo->colorId)
                    ->where('sizeId',$salesInfo->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->get('id');
                    $lC = 1;
                    $loopCount = count($loopInfos);
                    $idIms = '';
                    foreach($loopInfos as $loopInfo){

                        if($loopCount==$lC){
                            $idIms .= "$loopInfo->id";
                        }else{
                            $idIms .= "$loopInfo->id,";
                        }

                        $lC++;
                    }
                     
                    // $idIms = '19,18,17,16';
                    $idExs = explode(',',$idIms);
                    $count = count($idExs);
                    for($i=0;$i<$count;$i++){

                     if(($i+1)<$count){
                        $select = PurchaseProductUnitInfo::where('id',$idExs[$i])->first();
                        $updateQuantity = intval($select->totalQuantity/$select->quantity);
                   
                    if(PurchaseProductUnitInfo::where('id',$idExs[$i+1])->first()->totalQuantity==NULL){
                    PurchaseProductUnitInfo::where('id',$idExs[$i+1])->update([
                        'quantity' => $updateQuantity,
                        'finalQuantity' => $updateQuantity,
                    ]);
                    }else{
                    PurchaseProductUnitInfo::where('id',$idExs[$i+1])->update([
                        'totalQuantity' => $updateQuantity,
                        'finalQuantity' => $updateQuantity,
                    ]);
                    }
                    }
                    }
                    // ================= /loop for top serial

                    // ------------- get last quantity
                    $lastQuantityPriceInfo = PurchaseProductUnitInfo::where('finalQuantity','>',0)
                    ->where('productId',$salesInfo->productId)
                    ->where('brandId',$salesInfo->brandId)
                    ->where('colorId',$salesInfo->colorId)
                    ->where('sizeId',$salesInfo->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first();
                    
                    StockSummery::where('productId',$salesInfo->productId)
                    ->where('brandId',$salesInfo->brandId)
                    ->where('colorId',$salesInfo->colorId)
                    ->where('sizeId',$salesInfo->sizeId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => $lastQuantityPriceInfo->finalQuantity,
                        'unitId' => $lastQuantityPriceInfo->unitId,
                        'totalPrice' => $lastQuantityPriceInfo->purchaseTotalPrice,
                    ]);
                    // ------------- /get last quantity
                }
                //   ========================== /advance unit calculation



            SalesProductEntry::where('salesProductEntryId',$id1)->delete();
            SalesReturnInvoiceUnitInfo::where('salesInvoiceNo',$salesInfo->salesInvoiceNo)->delete();
         
         

      
    }
    public function destroy($salesProdcutId)
    {
       
    }
}
