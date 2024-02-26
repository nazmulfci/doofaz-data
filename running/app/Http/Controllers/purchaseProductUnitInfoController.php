<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Http\Controllers\Accounting\chartOfAccountController;
use App\PurchaseProductTotalQuantity;
use App\PurchaseProductTotalPrice;
use App\PurchaseProductMoreField;
use App\AddProductSupplierEntry;
use App\PurchaseProductDetails;
use App\PurchaseProductEntry;
use App\AdminPurchaseType;
use App\SalesProductPriceEntry;
use App\PurchaseType;
use App\PurchaseInvoice;
use App\ShopPriceTypeConfigure;
use App\SalesPriceType;
use App\ProductName;
use App\UniteEntry;
use App\ProductBrandEntry;
use App\InvoiceSetup; 
use App\InvoiceSetupDetails;
use App\Country;
use App\ChartOfAccountRegister;
use App\paymentType;
use App\StatementInformation;
use App\SupplierPayment;
use App\chartOfAccount;
use App\AccountSetup;
use App\voucherType;
use App\voucherInformation;
use App\voucherInformationReport;
use App\ReceivePaymentStatement;
use App\ShopAddAssetSupplierEntry;
use App\ShopAddBankEntry;
use App\StockSummery;
use App\ShopAddressLocation;
use App\ProductBarcodeInformation;
use App\PurchaseReturnInvoiceTmp;
use App\PurchaseReturnProductListTmp;
use App\PurchaseReturnInvoiceUnitInfo;

use App\PurchaseProductUnitInfoTmp;
use App\PurchaseProductUnitInfo;
use App\PurchaseProductUnitInfoHistory;
use App\SalesProductEntry;
use App\SalesInvoice;
use App\SalesReturnProductListTmp;
use App\SalesCustomerEntry;
use App\PurchaseInvoiceUnitInfo;

use Auth;
use Carbon\Carbon;

class purchaseProductUnitInfoController extends Controller
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
        //
    }



    public function showUnitListModal($id)
    {
        $info = StockSummery::where('id',$id)->first();

        $lastPriceType = PurchaseProductUnitInfo::where('productId',$info->productId)
              ->where('brandId',$info->brandId)
              ->where('purchaseType',$info->purchaseType)
              ->where('countryId',$info->countryId)
              ->where('colorId',$info->colorId)
              ->where('sizeId',$info->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first()->priceTypeId;
       
              // $datas = PurchaseProductUnitInfo::where('productId',$info->productId)
        //       ->where('brandId',$info->brandId)
        //       ->where('purchaseType',$info->purchaseType)
        //       ->where('countryId',$info->countryId)
        //       ->where('colorId',$info->colorId)
        //       ->where('sizeId',$info->sizeId)->where('priceTypeId',$lastPriceType)->where('shopId',Auth::user()->shopId)->get();
        $msg2 = array();
        // foreach($datas as $data){

        //     if($data->totalQuantity==NULL)
        //     {
        //         $quantity = '';
        //         $unitId = 0;

        //         $totalQuantity = $data->quantity;
        //         $totalUnitId = $data->unitId;
        //     }
        //     else
        //     {
        //         $quantity = $data->quantity;
        //         $unitId = $data->unitId;

        //         $totalQuantity = $data->totalQuantity;
        //         $totalUnitId = $data->totalUnitId;
        //     }

        //     $msg2[] = array(
        //         "id" => $data->id,
        //         "productId" => $data->productId,
        //         "quantity" => $quantity,
        //         "unitId" => $unitId,
        //         "totalQuantity" => $totalQuantity,
        //         "totalUnitId" => $totalUnitId,
        //         "purchaseUnitPrice" => $data->purchaseUnitPrice,
        //         "purchaseTotalPrice" => $data->purchaseTotalPrice,
        //         "salesUnitPrice" => $data->salesUnitPrice,
        //         "salesTotalPrice" => $data->salesTotalPrice,
        //         );
        
        //     }


            // =====================================================================
            // ==================== Unit inward ====================================
            // =====================================================================
            if(1){
                // ================= loop for top serial
                     

                $loopInfos = PurchaseProductUnitInfo::distinct()
                ->where('productId',$info->productId)
                ->where('brandId',$info->brandId)
                ->where('colorId',$info->colorId)
                ->where('priceTypeId',$lastPriceType)
                ->where('sizeId',$info->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get('id');
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
                $inward = '<table>';
                for($i=0;$i<$count;$i++){

                    $inward .= '<tr>';
                    
                    $select = PurchaseProductUnitInfo::where('id',$idExs[$i])->first();

                    $inward .= '<td>';
                    if($select->totalQuantity===NULL)
                    {
                        //$inward .= '1 '. UniteEntry::where('uniteEntryId',$select->unitId)->first()->uniteEntryName;
                    }
                    else
                    {
                        $inward .= $select->quantity.' '. UniteEntry::where('uniteEntryId',$select->unitId)->first()->uniteEntryName;
                    }
                    $inward .= '</td>';

                    $inward .= '<td>';
                    for($j=$i;$j<$count;$j++){
                        $select1 = PurchaseProductUnitInfo::where('id',$idExs[$j])->first();
                        
                        $inward .= $select1->finalQuantity.' '. UniteEntry::where('uniteEntryId',$select1->unitId)->first()->uniteEntryName. ', ';
                    }
                    $inward .= '</td>';

                    
                    $inward .= '<td>';
                    $inward .= $select->purchaseUnitPrice;
                    $inward .= '</td>';

                    $inward .= '</tr>';
                    
                }
                $inward .= '</table>';
                // ================= /loop for top serial
            }
            // =====================================================================
            // ==================== /Unit inward ===================================
            // =====================================================================
        return [
            'data' => $msg2,
            'inward' => $inward,
        ];
    }


    public function advanceUnitSetupByProduct(Request $request)
    {
        $lastInsertId = 0;
        if(PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->exists()){
        $lastInsertId = PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first()->id;
        }
        
        $lastQuantity = 0;
        if(PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->exists()){
        $lastQuantityInfo = PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first();
            
        if($lastQuantityInfo->totalQuantity==NULL){
            $lastQuantity = $lastQuantityInfo->quantity;
        }
        else{
            $lastQuantity = $lastQuantityInfo->totalQuantity;
        }
        }

        $msg2 = array();
        $datas = PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->get();
        foreach($datas as $data){

            if($data->totalQuantity==NULL)
            {
                $totalQuantity = $data->quantity;
                $totalUnitId = $data->unitId;
            }
            else
            {
                $totalQuantity = $data->totalQuantity;
                $totalUnitId = $data->totalUnitId;
            }

            $msg2[] = array(
                "id" => $data->id,
                "productId" => $data->productId,
                "quantity" => $data->quantity,
                "unitId" => $data->unitId,
                "totalQuantity" => $totalQuantity,
                "totalUnitId" => $totalUnitId,
                "purchaseUnitPrice" => $data->purchaseUnitPrice,
                "purchaseTotalPrice" => $data->purchaseTotalPrice,
                "salesUnitPrice" => $data->salesUnitPrice,
                "salesTotalPrice" => $data->salesTotalPrice,
                );
        
            }
        return [
            'data' => $msg2,
            'lastInsertId' => $lastInsertId,
            'lastQuantity' => $lastQuantity,
        ];
    }


    public function advUnitSetupByPurchase(Request $request)
    {
        $lastInsertId = 0;
        if(PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->exists()){
        $lastInsertId = PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first()->id;
        }
        
        $lastQuantity = 0;
        if(PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->exists()){
        $lastQuantityInfo = PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first();
            
        if($lastQuantityInfo->totalQuantity==NULL){
            $lastQuantity = $lastQuantityInfo->quantity;
        }
        else{
            $lastQuantity = $lastQuantityInfo->totalQuantity;
        }
        }

        $msg2 = array();
        $datas = PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->get();
        foreach($datas as $data){

            if($data->totalQuantity==NULL)
            {
                $totalQuantity = $data->quantity;
                $totalUnitId = $data->unitId;
            }
            else
            {
                $totalQuantity = $data->totalQuantity;
                $totalUnitId = $data->totalUnitId;
            }

            if($data->purchaseUnitPrice>0){
                $purchaseUnitPrice = $data->purchaseUnitPrice;
            }
            else{
                $purchaseUnitPrice = 0;
            }

            if($data->purchaseTotalPrice>0){
                $purchaseTotalPrice = $data->purchaseTotalPrice;
            }
            else{
                $purchaseTotalPrice = 0;
            }

            if($data->salesUnitPrice>0){
                $salesUnitPrice = $data->salesUnitPrice;
            }
            else{
                $salesUnitPrice = 0;
            }

            if($data->salesTotalPrice>0){
                $salesTotalPrice = $data->salesTotalPrice;
            }
            else{
                $salesTotalPrice = 0;
            }

            $msg2[] = array(
                "id" => $data->id,
                "productId" => $data->productId,
                "quantity" => $data->quantity,
                "unitId" => $data->unitId,
                "totalQuantity" => $totalQuantity,
                "totalUnitId" => $totalUnitId,
                "purchaseUnitPrice" => $purchaseUnitPrice,
                "purchaseTotalPrice" => $purchaseTotalPrice,
                "salesUnitPrice" => $salesUnitPrice,
                "salesTotalPrice" => $salesTotalPrice,
                );
        
            }
        return [
            'data' => $msg2,
            'lastInsertId' => $lastInsertId,
            'lastQuantity' => $lastQuantity,
        ];
    }


    public function advUnitSetupBySales(Request $request)
    {
        $lastInsertId = 0;
        if(PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->exists()){
        $lastInsertId = PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first()->id;
        }
        
        $lastQuantity = 0;
        if(PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->exists()){
        $lastQuantityInfo = PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first();
            
        if($lastQuantityInfo->totalQuantity==NULL){
            $lastQuantity = $lastQuantityInfo->quantity;
        }
        else{
            $lastQuantity = $lastQuantityInfo->totalQuantity;
        }
        }

        $msg2 = array();
        $datas = PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->get();
        foreach($datas as $data){

            if($data->totalQuantity==NULL)
            {
                $totalQuantity = $data->quantity;
                $totalUnitId = $data->unitId;
            }
            else
            {
                $totalQuantity = $data->totalQuantity;
                $totalUnitId = $data->totalUnitId;
            }


            if($data->purchaseUnitPrice>0){
                $purchaseUnitPrice = $data->purchaseUnitPrice;
            }else{
                $purchaseUnitPrice = 0;
            }

            if($data->purchaseTotalPrice>0){
                $purchaseTotalPrice = $data->purchaseTotalPrice;
            }else{
                $purchaseTotalPrice = 0;
            }

            if($data->salesUnitPrice>0){
                $salesUnitPrice = $data->salesUnitPrice;
            }else{
                $salesUnitPrice = 0;
            }

            if($data->salesTotalPrice>0){
                $salesTotalPrice = $data->salesTotalPrice;
            }else{
                $salesTotalPrice = 0;
            }

            $msg2[] = array(
                "id" => $data->id,
                "productId" => $data->productId,
                "quantity" => $data->quantity,
                "unitId" => $data->unitId,
                "totalQuantity" => $totalQuantity,
                "totalUnitId" => $totalUnitId,
                "purchaseUnitPrice" => $purchaseUnitPrice,
                "purchaseTotalPrice" => $purchaseTotalPrice,
                "salesUnitPrice" => $salesUnitPrice,
                "salesTotalPrice" => $salesTotalPrice,
                );
        
            }
        return [
            'data' => $msg2,
            'lastInsertId' => $lastInsertId,
            'lastQuantity' => $lastQuantity,
        ];
    }


    public function advanceUnitSetupCheck($id)
    {
        if(PurchaseProductUnitInfo::where('shopId',Auth::user()->shopId)->where('productId',$id)->exists())
        {
            $have = 1;
        }
        else{
            $have = 0;
        }
        return['have' => $have];
    }

    public function advanceUnitSetupByPriceType($id,$priceType,$priceSetupId)
    {
         
        $salesPriceProductInfo = SalesProductPriceEntry::where('salesProductPriceEntryId',$priceSetupId)->first();
        
        $priceTypeName = SalesPriceType::where('salesPriceTypeId',$priceType)->first()->salesPriceType;

        $msg2 = array();

        if(PurchaseProductUnitInfo::where('productId',$salesPriceProductInfo->productId)
        ->where('brandId',$salesPriceProductInfo->brandId)
        ->where('colorId',$salesPriceProductInfo->colorId)
        ->where('sizeId',$salesPriceProductInfo->sizeId)
        ->where('priceTypeId',$priceType)
        ->where('shopId',Auth::user()->shopId)->exists()){
        
        }
        else{
            $lastPriceType = PurchaseProductUnitInfo::where('productId',$salesPriceProductInfo->productId)
            ->where('brandId',$salesPriceProductInfo->brandId)
            ->where('colorId',$salesPriceProductInfo->colorId)
            ->where('sizeId',$salesPriceProductInfo->sizeId)
            ->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first()->priceTypeId;

            $infos = PurchaseProductUnitInfo::
            where('productId',$salesPriceProductInfo->productId)
            ->where('brandId',$salesPriceProductInfo->brandId)
            ->where('colorId',$salesPriceProductInfo->colorId)
            ->where('sizeId',$salesPriceProductInfo->sizeId)
            ->where('priceTypeId',$lastPriceType)
            ->where('shopId',Auth::user()->shopId)->get();

            foreach($infos as $info){

                PurchaseProductUnitInfo::insertGetId([
                    'productId' => $info->productId,
                    'brandId' => $info->brandId,
                    'purchaseType' => $info->purchaseType,
                    'countryId' => $info->countryId,
                    'colorId' => $info->colorId,
                    'sizeId' => $info->sizeId,
                    'priceTypeId' => $priceType,
                    'quantity' => $info->quantity,
                    'unitId' => $info->unitId,
                    'totalQuantity' => $info->totalQuantity,
                    'finalQuantity' => $info->finalQuantity,
                    'totalUnitId' => $info->totalUnitId,
                    'purchaseUnitPrice' => $info->purchaseUnitPrice,
                    'purchaseTotalPrice' => $info->purchaseTotalPrice,
                    'salesUnitPrice' => $info->salesUnitPrice,
                    'salesTotalPrice' => $info->salesTotalPrice,
                    'shopId' => Auth::user()->shopId,
                    'createBy' => Auth::user()->id,
                    'created_at' => Carbon::now()
                  ]);
                  PurchaseProductUnitInfoHistory::insertGetId([
                    'purchaseInvoiceNo' => 0,
                    'productId' => $info->productId,
                    'brandId' => $info->brandId,
                    'purchaseType' => $info->purchaseType,
                    'countryId' => $info->countryId,
                    'colorId' => $info->colorId,
                    'sizeId' => $info->sizeId,
                    'priceTypeId' => $priceType,
                    'quantity' => $info->quantity,
                    'unitId' => $info->unitId,
                    'totalQuantity' => $info->totalQuantity,
                    'finalQuantity' => $info->finalQuantity,
                    'totalUnitId' => $info->totalUnitId,
                    'purchaseUnitPrice' => $info->purchaseUnitPrice,
                    'purchaseTotalPrice' => $info->purchaseTotalPrice,
                    'salesUnitPrice' => $info->salesUnitPrice,
                    'salesTotalPrice' => $info->salesTotalPrice,
                    'shopId' => Auth::user()->shopId,
                    'createBy' => Auth::user()->id,
                    'created_at' => Carbon::now()
                  ]);

                  $priceTypeHistorys = PurchaseProductUnitInfo::where('productId',$info->productId)
                ->where('brandId',$info->brandId)
                ->where('colorId',$info->colorId)
                ->where('priceTypeId',$priceType)
                ->where('sizeId',$info->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                 
                foreach($priceTypeHistorys as $priceTypeHistory){
                    if(PurchaseInvoiceUnitInfo::where('productId',$priceTypeHistory->productId)
                    ->where('purchaseInvoiceNo',0)
                    ->where('brandId',$priceTypeHistory->brandId)
                    ->where('purchaseType',$priceTypeHistory->purchaseType)
                    ->where('countryId',$priceTypeHistory->countryId)
                    ->where('colorId',$priceTypeHistory->colorId)
                    ->where('sizeId',$priceTypeHistory->sizeId)
                    ->where('priceTypeId',$priceTypeHistory->priceTypeId)
                    ->where('openingStatus',$priceTypeHistory->openingStatus)
                    ->where('unitId',$priceTypeHistory->unitId)
                    ->exists()){ }
                    else{
                    PurchaseInvoiceUnitInfo::insert([
                        'productId' => $info->productId,
                        'purchaseInvoiceNo' => 0,
                        'brandId' => $info->brandId,
                        'purchaseType' => $info->purchaseType,
                        'countryId' => $info->countryId,
                        'colorId' => $info->colorId,
                        'sizeId' => $info->sizeId,
                        'priceTypeId' => $priceType,
                        'quantity' => $priceTypeHistory->quantity,
                        'unitId' => $priceTypeHistory->unitId,
                        'totalQuantity' => $priceTypeHistory->totalQuantity,
                        'finalQuantity' => $priceTypeHistory->finalQuantity,
                        'totalUnitId' => $priceTypeHistory->unitId,
                        'purchaseUnitPrice' => $priceTypeHistory->purchaseUnitPrice,
                        'purchaseTotalPrice' => $priceTypeHistory->purchaseTotalPrice,
                        'salesUnitPrice' => $priceTypeHistory->salesUnitPrice,
                        'salesTotalPrice' => $priceTypeHistory->salesTotalPrice,
                        'shopId' => Auth::user()->shopId,
                        'createBy' => Auth::user()->id,
                        'created_at' => Carbon::now()
                      ]);}
                    }
            }
        }


        $unitPrice  = PurchaseProductUnitInfo::
        where('productId',$salesPriceProductInfo->productId)
        ->where('brandId',$salesPriceProductInfo->brandId)
        ->where('colorId',$salesPriceProductInfo->colorId)
        ->where('sizeId',$salesPriceProductInfo->sizeId)
        ->where('unitId',$salesPriceProductInfo->unitId)
        ->where('priceTypeId',$priceType)
        ->where('shopId',Auth::user()->shopId)->first()->salesUnitPrice;


        $datas = PurchaseProductUnitInfo::
        where('productId',$salesPriceProductInfo->productId)
        ->where('brandId',$salesPriceProductInfo->brandId)
        ->where('colorId',$salesPriceProductInfo->colorId)
        ->where('sizeId',$salesPriceProductInfo->sizeId)
        ->where('priceTypeId',$priceType)
        ->where('shopId',Auth::user()->shopId)->get();

        foreach($datas as $data){

            if($data->totalQuantity==NULL)
            {
                $totalQuantity = $data->quantity;
                $totalUnitId = $data->unitId;
            }
            else
            {
                $totalQuantity = $data->totalQuantity;
                $totalUnitId = $data->totalUnitId;
            }

            $msg2[] = array(
                "id" => $data->id,
                "productId" => $data->productId,
                "quantity" => $data->quantity,
                "unitId" => $data->unitId,
                "totalQuantity" => $totalQuantity,
                "totalUnitId" => $totalUnitId,
                "salesUnitPriceShow" => $data->salesUnitPrice,
                "salesUnitPrice" => $data->salesUnitPrice,
                "salesTotalPrice" => $data->salesUnitPrice*$totalQuantity,
                );
        
            }
            
        return [
            'data' => $msg2,
            'priceType' => $priceTypeName,
            'unitPrice' => $unitPrice,
        ];
    }

    public function advanceUnitSalesPriceUpdate($id,$price){
        $data = PurchaseProductUnitInfo::where('id',$id)->first();

        if($data->totalQuantity>0){
            $quantity = $data->totalQuantity;
        }else{
            $quantity = $data->quantity;
        }

        $totalPrice = $quantity*$price;

        PurchaseProductUnitInfo::where('id',$id)->update([
            'salesUnitPrice' => $price,
            'salesTotalPrice' => $totalPrice,
            'updateBy' => Auth::user()->id,
            'updated_at' => Carbon::now()
        ]);

        $info = PurchaseProductUnitInfo::where('id',$id)->first();
        return ['info' => $info];
    }

    public function advanceUnitSalesPriceUpdateType($id,$price,$priceType,$priceSetupId){

        $data = PurchaseProductUnitInfo::where('id',$id)->first();

        if(PurchaseProductUnitInfo::where('productId',$data->productId)->where('brandId', $data->brandId)
        ->where('priceTypeId', $priceType)
        ->where('colorId', $data->colorId)
        ->where('sizeId', $data->sizeId)->where('unitId',$data->unitId)->where('shopId',Auth::user()->shopId)->exists()){


        $data1 = PurchaseProductUnitInfo::where('productId',$data->productId)->where('brandId', $data->brandId)
        ->where('priceTypeId', $priceType)
        ->where('colorId', $data->colorId)
        ->where('sizeId', $data->sizeId)->where('unitId',$data->unitId)->where('shopId',Auth::user()->shopId)->first();

        if($data1->totalQuantity>0){
            $quantity = $data1->totalQuantity;
        }else{
            $quantity = $data1->quantity;
        }

        $totalPrice = $quantity*$price;


        PurchaseProductUnitInfo::where('productId',$data1->productId)->where('brandId', $data1->brandId)
        ->where('priceTypeId', $priceType)
        ->where('colorId', $data1->colorId)
        ->where('sizeId', $data1->sizeId)->where('unitId',$data1->unitId)->where('shopId',Auth::user()->shopId)->update([
            'salesUnitPrice' => $price,
            'salesTotalPrice' => $totalPrice,
            'updateBy' => Auth::user()->id,
            'updated_at' => Carbon::now()
        ]);
        PurchaseProductUnitInfoHistory::insertGetId([
            'purchaseInvoiceNo' => 0,
            'productId' => $data1->productId,
            'brandId' => $data1->brandId,
            'purchaseType' => $data1->purchaseType,
            'countryId' => $data1->countryId,
            'colorId' => $data1->colorId,
            'sizeId' => $data1->sizeId,
            'priceTypeId' => $priceType,
            'quantity' => $data1->quantity,
            'unitId' => $data1->unitId,
            'totalQuantity' => $data1->totalQuantity,
            'totalUnitId' => $data1->totalUnitId,
            'purchaseUnitPrice' => $data1->purchaseUnitPrice,
            'purchaseTotalPrice' => $data1->purchaseTotalPrice,
            'salesUnitPrice' => $price,
            'salesTotalPrice' => $totalPrice,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now()
          ]);

          $priceTypeHistorys = PurchaseProductUnitInfo::where('productId',$data1->productId)
                ->where('brandId',$data1->brandId)
                ->where('priceTypeId', $priceType)
                ->where('colorId',$data1->colorId)
                ->where('sizeId',$data1->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                 
                foreach($priceTypeHistorys as $priceTypeHistory){
                    if(PurchaseInvoiceUnitInfo::where('productId',$priceTypeHistory->productId)
                    ->where('purchaseInvoiceNo',0)
                    ->where('brandId',$priceTypeHistory->brandId)
                    ->where('purchaseType',$priceTypeHistory->purchaseType)
                    ->where('countryId',$priceTypeHistory->countryId)
                    ->where('colorId',$priceTypeHistory->colorId)
                    ->where('sizeId',$priceTypeHistory->sizeId)
                    ->where('priceTypeId',$priceTypeHistory->priceTypeId)
                    ->where('openingStatus',$priceTypeHistory->openingStatus)
                    ->where('unitId',$priceTypeHistory->unitId)
                    ->exists()){ }
                    else{
                    PurchaseInvoiceUnitInfo::insert([
                        'productId' => $data1->productId,
                        'purchaseInvoiceNo' => 0,
                        'brandId' => $data1->brandId,
                        'purchaseType' => $data1->purchaseType,
                        'countryId' => $data1->countryId,
                        'colorId' => $data1->colorId,
                        'sizeId' => $data1->sizeId,
                        'priceTypeId' => $priceType,
                        'quantity' => $priceTypeHistory->quantity,
                        'unitId' => $priceTypeHistory->unitId,
                        'totalQuantity' => $priceTypeHistory->totalQuantity,
                        'finalQuantity' => $priceTypeHistory->finalQuantity,
                        'totalUnitId' => $priceTypeHistory->unitId,
                        'purchaseUnitPrice' => $priceTypeHistory->purchaseUnitPrice,
                        'purchaseTotalPrice' => $priceTypeHistory->purchaseTotalPrice,
                        'salesUnitPrice' => $priceTypeHistory->salesUnitPrice,
                        'salesTotalPrice' => $priceTypeHistory->salesTotalPrice,
                        'shopId' => Auth::user()->shopId,
                        'createBy' => Auth::user()->id,
                        'created_at' => Carbon::now()
                      ]);}
                    }
    }
    else{

        $datas = PurchaseProductUnitInfo::where('productId',$data->productId)
        ->where('brandId', $data->brandId)
        ->where('priceTypeId', $priceType)
        ->where('colorId', $data->colorId)
        ->where('sizeId', $data->sizeId)
        ->where('shopId',Auth::user()->shopId)->get();
        
        foreach($datas as $data11){



            if($data11->unitId==$data->unitId){
                if($data11->totalQuantity==NULL)
                {
                    $totalPrice = $data11->quantity*$price;
                }
                else
                {
                    $totalPrice = $data11->totalQuantity*$price;
                }
                $unitPrice = $price;
            }
            else{
                $unitPrice = NULL;
                $totalPrice = NULL;
            }
          
    
            
            if($data11->totalQuantity>0){
                $totalQuantity = $data11->totalQuantity;
            }
            else{
                $totalQuantity = $data11->quantity;
            }

        PurchaseProductUnitInfo::insertGetId([
            'productId' => $data11->productId,
            'brandId' => $data11->brandId,
            'purchaseType' => $data11->purchaseType,
            'countryId' => $data11->countryId,
            'colorId' => $data11->colorId,
            'sizeId' => $data11->sizeId,
            'priceTypeId' => $priceType,
            'quantity' => $data11->quantity,
            'unitId' => $data11->unitId,
            'totalQuantity' => $data11->totalQuantity,
            'totalUnitId' => $data11->totalUnitId,
            'purchaseUnitPrice' => $data11->purchaseUnitPrice,
            'purchaseTotalPrice' => $data11->purchaseTotalPrice,
            'salesUnitPrice' => $unitPrice,
            'salesTotalPrice' => $totalPrice,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now()
          ]);
          PurchaseProductUnitInfoHistory::insertGetId([
            'purchaseInvoiceNo' => 0,
            'productId' => $data11->productId,
            'brandId' => $data11->brandId,
            'purchaseType' => $data11->purchaseType,
            'countryId' => $data11->countryId,
            'colorId' => $data11->colorId,
            'sizeId' => $data11->sizeId,
            'priceTypeId' => $priceType,
            'quantity' => $data11->quantity,
            'unitId' => $data11->unitId,
            'totalQuantity' => $data11->totalQuantity,
            'totalUnitId' => $data11->totalUnitId,
            'purchaseUnitPrice' => $data11->purchaseUnitPrice,
            'purchaseTotalPrice' => $data11->purchaseTotalPrice,
            'salesUnitPrice' => $unitPrice,
            'salesTotalPrice' => $totalPrice,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now()
          ]);

          $priceTypeHistorys = PurchaseProductUnitInfo::where('productId',$data11->productId)
                ->where('brandId',$data11->brandId)
                ->where('priceTypeId', $priceType)
                ->where('colorId',$data11->colorId)
                ->where('sizeId',$data11->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                 
                foreach($priceTypeHistorys as $priceTypeHistory){
                    if(PurchaseInvoiceUnitInfo::where('productId',$request->productId)
                    ->where('purchaseInvoiceNo',0)
                    ->where('brandId',$request->brandId)
                    ->where('purchaseType',$request->purchaseType)
                    ->where('countryId',$request->countryId)
                    ->where('colorId',$request->colorId)
                    ->where('sizeId',$request->sizeId)
                    ->where('priceTypeId',$request->priceTypeId)
                    ->where('openingStatus',$request->openingStatus)
                    ->where('unitId',$request->unitId)
                    ->exists()){ }
                    else{
                    PurchaseInvoiceUnitInfo::insert([
                        'productId' => $data11->productId,
                        'purchaseInvoiceNo' => 0,
                        'brandId' => $data11->brandId,
                        'purchaseType' => $data11->purchaseType,
                        'countryId' => $data11->countryId,
                        'colorId' => $data11->colorId,
                        'sizeId' => $data11->sizeId,
                        'priceTypeId' => $priceType,
                        'quantity' => $priceTypeHistory->quantity,
                        'unitId' => $priceTypeHistory->unitId,
                        'totalQuantity' => $priceTypeHistory->totalQuantity,
                        'finalQuantity' => $priceTypeHistory->finalQuantity,
                        'totalUnitId' => $priceTypeHistory->unitId,
                        'purchaseUnitPrice' => $priceTypeHistory->purchaseUnitPrice,
                        'purchaseTotalPrice' => $priceTypeHistory->purchaseTotalPrice,
                        'salesUnitPrice' => $priceTypeHistory->salesUnitPrice,
                        'salesTotalPrice' => $priceTypeHistory->salesTotalPrice,
                        'shopId' => Auth::user()->shopId,
                        'createBy' => Auth::user()->id,
                        'created_at' => Carbon::now()
                      ]);}
                    }
        }
    }
        
         $datasss = PurchaseProductUnitInfo::where('productId',$data->productId)->where('brandId', $data->brandId)
         ->where('priceTypeId', $priceType)
        ->where('colorId', $data->colorId)
        ->where('sizeId', $data->sizeId)->where('shopId',Auth::user()->shopId)->get();
       
        $info = array();
        foreach($datasss as $data){

            if($data->totalQuantity==NULL)
            {
                $totalQuantity = $data->quantity;
            }
            else
            {
                $totalQuantity = $data->totalQuantity;
            }
            
            $totalUnitId = $data->unitId;


            

            $info[] = array(
                        "id" => $data->id,
                        "productId" => $data->productId,
                        "priceTypeId" => $data->priceTypeId,
                        "quantity" => $data->quantity,
                        "unitId" => $data->unitId,
                        "totalQuantity" => $totalQuantity,
                        "totalUnitId" => $totalUnitId,
                        "salesUnitPrice" => $data->salesUnitPrice,
                        "salesTotalPrice" => $data->salesTotalPrice,
                      );
        
            }

            $firstPrice = PurchaseProductUnitInfo::where('productId',$data->productId)->where('brandId', $data->brandId)
            ->where('priceTypeId', $priceType)
            ->where('colorId', $data->colorId)
            ->where('sizeId', $data->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first()->salesUnitPrice;
        
            if($priceType==1){
            SalesProductPriceEntry::where('salesProductPriceEntryId',$priceSetupId)->update(['salesPrice' => $firstPrice]);
            }
            else if($priceType==2){
            SalesProductPriceEntry::where('salesProductPriceEntryId',$priceSetupId)->update(['mrpPrice' => $firstPrice]);
            }
            else if($priceType==3){
            SalesProductPriceEntry::where('salesProductPriceEntryId',$priceSetupId)->update(['wholesalePrice' => $firstPrice]);
            }
            else if($priceType==4){
            SalesProductPriceEntry::where('salesProductPriceEntryId',$priceSetupId)->update(['specialPrice' => $firstPrice]);
            }
            else if($priceType==5){
            SalesProductPriceEntry::where('salesProductPriceEntryId',$priceSetupId)->update(['eCommercePrice' => $firstPrice]);
            }

            return [
            'info' => $info,
            'firstPrice' => $firstPrice,
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


    public function getLastSalesQuantity(Request $request){


        $info = PurchaseProductUnitInfoTmp::where('productId',$request->productId)
            ->where('brandId',$request->brandId)
            ->where('purchaseType',$request->purchaseType)
            ->where('countryId',$request->countryId)
            ->where('colorId',$request->colorId)
            ->where('sizeId',$request->sizeId)
            ->where('unitId',$request->adv_sale_unitId)
            ->where('createBy',Auth::user()->id)
            ->where('shopId',Auth::user()->shopId)->first();

            $quantity = $info->finalQuantity;
            return ['quantity' => $quantity];
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
              'productId' => 'required',
              'adv_unitId' => 'required',
              'adv_quantity' => 'required',
          ],
          [
             'productId.required' => 'Select Product ',
             'adv_unitId.required' => 'Select Unit ',
             'adv_quantity.required' => 'Enter Quantity ',
          ]);

          $product = 0;

          //-------------------------

          if(ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->exists()){
            $priceTypeId = ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->first()->priceTypeId;
          }
          else{
            $priceTypeId = ShopPriceTypeConfigure::first()->priceTypeId; 
          }

        //   ------------------------
 
          
          if($request->productId>0){
          if(PurchaseProductUnitInfoTmp::where('productId',$request->productId)
          ->where('brandId',$request->brandId)
          ->where('purchaseType',$request->purchaseType)
          ->where('countryId',$request->countryId)
          ->where('colorId',$request->colorId)
          ->where('openingStatus',$request->openingStatus)
          ->where('sizeId',$request->sizeId)->where('unitId',$request->adv_unitId)->where('shopId',Auth::user()->shopId)->exists()){
            $id = 0;
          }else{

            if($request->adv_totalQuantity>0){
                $adv_totalQuantity = $request->adv_totalQuantity;
            }
            else{
                $adv_totalQuantity = $request->adv_quantity;
            }

          $id = PurchaseProductUnitInfoTmp::insertGetId([
            'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
            'productId' => $request->productId,
            'brandId' => $request->brandId,
            'purchaseType' => $request->purchaseType,
            'countryId' => $request->countryId,
            'colorId' => $request->colorId,
            'openingStatus' => $request->openingStatus,
            'sizeId' => $request->sizeId,
            'priceTypeId' => $priceTypeId,
            'quantity' => $request->adv_quantity,
            'unitId' => $request->adv_unitId,
            'totalQuantity' => $request->adv_totalQuantity,
            'finalQuantity' => $adv_totalQuantity,
            'totalUnitId' => $request->adv_totalUnitId,
            'advanceStatus' => 1,
            'singleStatus' => $request->formLastId,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now()
          ]);
           
        }
        $product = $request->productId;
        }
      

          $data = PurchaseProductUnitInfoTmp::where('productId',$request->productId)
          ->where('brandId',$request->brandId)
          ->where('purchaseType',$request->purchaseType)
          ->where('countryId',$request->countryId)
          ->where('colorId',$request->colorId)
          ->where('openingStatus',$request->openingStatus)
          ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->get();


          $getUnitIds = PurchaseProductUnitInfoTmp::distinct()->where('productId',$request->productId)
          ->where('brandId',$request->brandId)
          ->where('purchaseType',$request->purchaseType)
          ->where('countryId',$request->countryId)
          ->where('colorId',$request->colorId)
          ->where('openingStatus',$request->openingStatus)
          ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->get('unitId');

          $unitList = UniteEntry::whereIn('uniteEntryId',$getUnitIds)->get();
          return [
              'unitList' => $unitList,
              'data' => $data,
              'id' => $id,
              'product' => $product,
            ];
    }



    public function store1(Request $request)
    {
          $this->validate($request, [
              'productId' => 'required',
              'adv_unitId' => 'required',
              'adv_quantity' => 'required',
          ],
          [
             'productId.required' => 'Select Product ',
             'adv_unitId.required' => 'Select Unit ',
             'adv_quantity.required' => 'Enter Quantity ',
          ]);

          $product = 0;

          //-------------------------

          if(ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->exists()){
            $priceTypeId = ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->first()->priceTypeId;
          }
          else{
            $priceTypeId = ShopPriceTypeConfigure::first()->priceTypeId; 
          }

        //   ------------------------



        //   ------------------------ delete

          if($request->formLastId==1){

            if($request->openingStatus==0){
            PurchaseReturnInvoiceUnitInfo::where('productId',$request->productId)
            ->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
            ->where('brandId',$request->brandId)
            ->where('purchaseType',$request->purchaseType)
            ->where('countryId',$request->countryId)
            ->where('colorId',$request->colorId)
            ->where('sizeId',$request->sizeId)
            ->where('createBy',Auth::user()->id)
            ->where('shopId',Auth::user()->shopId)->delete();
            }

            PurchaseInvoiceUnitInfo::where('productId',$request->productId)
            ->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
            ->where('brandId',$request->brandId)
            ->where('purchaseType',$request->purchaseType)
            ->where('countryId',$request->countryId)
            ->where('colorId',$request->colorId)
            ->where('sizeId',$request->sizeId)
            ->where('createBy',Auth::user()->id)
            ->where('shopId',Auth::user()->shopId)->delete();

            PurchaseProductUnitInfoHistory::where('productId',$request->productId)
            ->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
            ->where('brandId',$request->brandId)
            ->where('purchaseType',$request->purchaseType)
            ->where('countryId',$request->countryId)
            ->where('colorId',$request->colorId)
            ->where('sizeId',$request->sizeId)
            ->where('createBy',Auth::user()->id)
            ->where('shopId',Auth::user()->shopId)->delete();

            PurchaseProductUnitInfo::where('productId',$request->productId)
            ->where('brandId',$request->brandId)
            ->where('purchaseType',$request->purchaseType)
            ->where('countryId',$request->countryId)
            ->where('colorId',$request->colorId)
            ->where('sizeId',$request->sizeId)
            ->where('createBy',Auth::user()->id)
            ->where('shopId',Auth::user()->shopId)->delete();
 
          }

        //   ------------------------ /delete
          
          if($request->productId>0){
          if(PurchaseProductUnitInfo::where('productId',$request->productId)
          ->where('brandId',$request->brandId)
          ->where('purchaseType',$request->purchaseType)
          ->where('countryId',$request->countryId)
          ->where('colorId',$request->colorId)
          ->where('openingStatus',$request->openingStatus)
          ->where('sizeId',$request->sizeId)->where('unitId',$request->adv_unitId)->where('shopId',Auth::user()->shopId)->exists()){
            $id = 0;
          }else{

            if($request->adv_totalQuantity>0){
                $adv_totalQuantity = $request->adv_totalQuantity;
            }
            else{
                $adv_totalQuantity = $request->adv_quantity;
            }

          $id = PurchaseProductUnitInfo::insertGetId([
            'productId' => $request->productId,
            'brandId' => $request->brandId,
            'purchaseType' => $request->purchaseType,
            'countryId' => $request->countryId,
            'colorId' => $request->colorId,
            'openingStatus' => $request->openingStatus,
            'sizeId' => $request->sizeId,
            'priceTypeId' => $priceTypeId,
            'quantity' => $request->adv_quantity,
            'unitId' => $request->adv_unitId,
            'totalQuantity' => $request->adv_totalQuantity,
            'finalQuantity' => $adv_totalQuantity,
            'totalUnitId' => $request->adv_totalUnitId,
            'advanceStatus' => 1,
            'singleStatus' => $request->formLastId,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now()
          ]);
          
        //   if($request->openingStatus==0){
          PurchaseReturnInvoiceUnitInfo::insertGetId([
            'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
            'productId' => $request->productId,
            'brandId' => $request->brandId,
            'purchaseType' => $request->purchaseType,
            'countryId' => $request->countryId,
            'openingStatus' => $request->openingStatus,
            'colorId' => $request->colorId,
            'sizeId' => $request->sizeId,
            'priceTypeId' => $priceTypeId,
            'quantity' => $request->adv_quantity,
            'unitId' => $request->adv_unitId,
            'totalQuantity' => $request->adv_totalQuantity,
            'finalQuantity' => $adv_totalQuantity,
            'availableQuantity' => $adv_totalQuantity,
            'totalUnitId' => $request->adv_totalUnitId,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now()
          ]);
            // }
          
          PurchaseProductUnitInfoHistory::insertGetId([
            'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
            'productId' => $request->productId,
            'brandId' => $request->brandId,
            'purchaseType' => $request->purchaseType,
            'countryId' => $request->countryId,
            'openingStatus' => $request->openingStatus,
            'colorId' => $request->colorId,
            'sizeId' => $request->sizeId,
            'priceTypeId' => $priceTypeId,
            'quantity' => $request->adv_quantity,
            'unitId' => $request->adv_unitId,
            'totalQuantity' => $request->adv_totalQuantity,
            'finalQuantity' => $adv_totalQuantity,
            'totalUnitId' => $request->adv_totalUnitId,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now()
          ]);
          $priceTypeHistorys = PurchaseProductUnitInfo::where('productId',$request->productId)
                ->where('brandId',$request->brandId)
                ->where('colorId',$request->colorId)
                ->where('openingStatus',$request->openingStatus)
                ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                 
                foreach($priceTypeHistorys as $priceTypeHistory){
                    
                    if(PurchaseInvoiceUnitInfo::where('productId',$priceTypeHistory->productId)
                    ->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
                    ->where('brandId',$priceTypeHistory->brandId)
                    ->where('purchaseType',$priceTypeHistory->purchaseType)
                    ->where('countryId',$priceTypeHistory->countryId)
                    ->where('colorId',$priceTypeHistory->colorId)
                    ->where('sizeId',$priceTypeHistory->sizeId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('openingStatus',$priceTypeHistory->openingStatus)
                    ->where('unitId',$priceTypeHistory->unitId)
                    ->exists()){ }
                    else{
                    PurchaseInvoiceUnitInfo::insert([
                        'productId' => $priceTypeHistory->productId,
                        'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                        'brandId' => $priceTypeHistory->brandId,
                        'purchaseType' => $priceTypeHistory->purchaseType,
                        'countryId' => $priceTypeHistory->countryId,
                        'colorId' => $priceTypeHistory->colorId,
                        'sizeId' => $priceTypeHistory->sizeId,
                        'openingStatus' => $priceTypeHistory->openingStatus,
                        'priceTypeId' => $priceTypeId,
                        'quantity' => $priceTypeHistory->quantity,
                        'unitId' => $priceTypeHistory->unitId,
                        'totalQuantity' => $priceTypeHistory->totalQuantity,
                        'finalQuantity' => $priceTypeHistory->finalQuantity,
                        'totalUnitId' => $priceTypeHistory->unitId,
                        'purchaseUnitPrice' => $priceTypeHistory->purchaseUnitPrice,
                        'purchaseTotalPrice' => $priceTypeHistory->purchaseTotalPrice,
                        'salesUnitPrice' => $priceTypeHistory->salesUnitPrice,
                        'salesTotalPrice' => $priceTypeHistory->salesTotalPrice,
                        'shopId' => Auth::user()->shopId,
                        'createBy' => Auth::user()->id,
                        'created_at' => Carbon::now()
                      ]);
                    } }
        }
        $product = $request->productId;
        }
      

          $data = PurchaseProductUnitInfo::where('productId',$request->productId)
          ->where('brandId',$request->brandId)
          ->where('purchaseType',$request->purchaseType)
          ->where('countryId',$request->countryId)
          ->where('colorId',$request->colorId)
          ->where('openingStatus',$request->openingStatus)
          ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->get();


          $getUnitIds = PurchaseProductUnitInfo::distinct()->where('productId',$request->productId)
          ->where('brandId',$request->brandId)
          ->where('purchaseType',$request->purchaseType)
          ->where('countryId',$request->countryId)
          ->where('colorId',$request->colorId)
          ->where('openingStatus',$request->openingStatus)
          ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->get('unitId');

          $unitList = UniteEntry::whereIn('uniteEntryId',$getUnitIds)->get();
          return [
              'unitList' => $unitList,
              'data' => $data,
              'id' => $id,
              'product' => $product,
            ];
    }

    public function advanceUnitSetupPurchasePrice(Request $request){

        if(ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->exists()){
            $priceTypeId = ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->first()->priceTypeId;
        }
        else{
            $priceTypeId = ShopPriceTypeConfigure::first()->priceTypeId; 
        }

        $purchasePrice = $request->adv_pur_totalPrice;

        $datas = PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('openingStatus',$request->openingStatus)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->get();
        foreach($datas as $data){
        
        if($data->totalQuantity==NULL){
            $unitPrice = $purchasePrice/$data->quantity;
        }
        else{
            $unitPrice = $purchasePrice/$data->totalQuantity;
        }

        PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('openingStatus',$request->openingStatus)
        ->where('sizeId',$request->sizeId)->
        where('quantity',$data->quantity)->
        where('unitId',$data->unitId)->
        where('shopId',Auth::user()->shopId)->update([
            'purchaseUnitPrice' => $unitPrice,
            'purchaseTotalPrice' => $purchasePrice,
        ]);

        

    }

        $data = PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('openingStatus',$request->openingStatus)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data];
    }

    public function advanceUnitSetupSalesPrice(Request $request){


        if(ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->exists())
        {
            $priceTypeId = ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->first()->priceTypeId;
        }
        else
        {
            $priceTypeId = ShopPriceTypeConfigure::first()->priceTypeId; 
        }



        $salesPrice = $request->adv_sale_totalPrice;
        $datas = PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('openingStatus',$request->openingStatus)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->get();
        foreach($datas as $data){
            if($data->totalQuantity==NULL){
            $unitPrice = $salesPrice/$data->quantity;
        }
        else{
            $unitPrice = $salesPrice/$data->totalQuantity;
        }

        PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)
        ->where('openingStatus',$request->openingStatus)->
        where('quantity',$data->quantity)->
        where('unitId',$data->unitId)->
        where('shopId',Auth::user()->shopId)->update([
            'salesUnitPrice' => $unitPrice,
            'salesTotalPrice' => $salesPrice,
        ]);

        
        
                         
    }

        $data = PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('openingStatus',$request->openingStatus)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data];
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
    public function advanceUnitSetupDelete($id,$purchaseInvoiceNo)
    {
          PurchaseProductUnitInfoTmp::where('id',$id)
            ->delete();
    }

    public function advanceUnitSetupDeleteNotWorking($id,$purchaseInvoiceNo)
    {
        
        $info = PurchaseProductUnitInfo::where('id',$id)->first();

        PurchaseReturnInvoiceUnitInfo::where('purchaseInvoiceNo',$purchaseInvoiceNo)
        ->where('unitId',$info->unitId)
        ->where('shopId',Auth::user()->shopId)
        ->where('createBy',Auth::user()->id)
            ->where('openingStatus',0)
            ->delete();

            PurchaseInvoiceUnitInfo::where('purchaseInvoiceNo',$purchaseInvoiceNo)
            ->where('unitId',$info->unitId)
            ->where('shopId',Auth::user()->shopId)
            ->where('createBy',Auth::user()->id)
            ->where('openingStatus',0)
            ->delete();
            PurchaseProductUnitInfoHistory::where('purchaseInvoiceNo',$purchaseInvoiceNo)
            ->where('unitId',$info->unitId)
            ->where('shopId',Auth::user()->shopId)
            ->where('createBy',Auth::user()->id)
            ->where('openingStatus',0)
            ->delete();

            PurchaseProductUnitInfo::where('id',$id)
            ->delete();
    }
    public function advanceUnitSetupDeleteOpening($id,$purchaseInvoiceNo)
    {
        $info = PurchaseProductUnitInfo::where('id',$id)->first();

            PurchaseReturnInvoiceUnitInfo::where('purchaseInvoiceNo',$purchaseInvoiceNo)
            ->where('unitId',$info->unitId)
            ->where('shopId',Auth::user()->shopId)
            ->where('createBy',Auth::user()->id)
            ->where('openingStatus',1)
            ->delete();

            PurchaseInvoiceUnitInfo::where('purchaseInvoiceNo',$purchaseInvoiceNo)
            ->where('unitId',$info->unitId)
            ->where('shopId',Auth::user()->shopId)
            ->where('createBy',Auth::user()->id)
            ->where('openingStatus',1)
            ->delete();

            PurchaseProductUnitInfoHistory::where('purchaseInvoiceNo',$purchaseInvoiceNo)
            ->where('unitId',$info->unitId)
            ->where('shopId',Auth::user()->shopId)
            ->where('createBy',Auth::user()->id)
            ->where('openingStatus',1)
            ->delete();

            PurchaseProductUnitInfo::where('id',$id)
            ->delete();
    }
}
