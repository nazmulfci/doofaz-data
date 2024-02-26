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

use App\PurchaseProductEntryTmp;
use App\PurchaseProductUnitInfo;
use App\PurchaseProductUnitInfoTmp;
use App\PurchaseProductUnitInfoHistory;
use App\SalesProductPriceEntryHistory;
use App\ShopCustomerTypeEntry;
use App\PriceTypeSetup;
use App\DealerSalesOrder;

use App\SalesProductEntry;
use App\SalesInvoice;
use App\SalesReturnProductListTmp;
use App\SalesCustomerEntry;
use App\PurchaseReturnInvoiceUnitInfo;
use App\SalesReturnInvoiceUnitInfo;
use App\SalesReturnInvoiceTmp;
use App\StockInformation;

use App\BankTypeEntry;
use App\BankEntry;
use App\CorporateBankType;
use App\MobileBankType;
use App\BankCardType;
use App\SalesPayment;

use Auth;
use DB;
use Carbon\Carbon;


class PurchaseController extends Controller
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

        $purchaseInvoiceList = PurchaseInvoice::with('productSupplierName','purchaseType')
        ->where('shopId',Auth::user()->shopId)
        ->where('productSupplierId','>',0)
        ->where('shopTypeId',$shopTypeId)->orderBy('purchaseInvoiceId','DESC')->get();
        $adminPurchaseTypeList = AdminPurchaseType::all();
        return ['purchaseInvoiceList' => $purchaseInvoiceList,'adminPurchaseTypeList' => $adminPurchaseTypeList];
    }

    public function purchaseInvoiceList()
    {
        $shopTypeId = Auth::user()->shopTypeId;

        $purchaseInvoiceList = PurchaseInvoice::with('productSupplierName','purchaseType')
        ->where('shopId',Auth::user()->shopId)
        ->where('productSupplierId','>',0)
        ->where('openingPurchaseRepurchase',1)
        ->where('shopTypeId',$shopTypeId)->orderBy('purchaseInvoiceId','DESC')->get();
        $adminPurchaseTypeList = AdminPurchaseType::all();
        return ['purchaseInvoiceList' => $purchaseInvoiceList,'adminPurchaseTypeList' => $adminPurchaseTypeList];
    }

    public function purchaseInvoiceListToday()
    {
        $shopTypeId = Auth::user()->shopTypeId;
        $today = date('Y-m-d');
        $purchaseInvoiceList = PurchaseInvoice::with('productSupplierName','purchaseType')
        ->where('shopId',Auth::user()->shopId)
        ->where('purchaseDate',$today)
        ->where('productSupplierId','>',0)
        ->where('openingPurchaseRepurchase',1)
        ->where('shopTypeId',$shopTypeId)->orderBy('purchaseInvoiceId','DESC')->get();
        $adminPurchaseTypeList = AdminPurchaseType::all();
        return ['purchaseInvoiceList' => $purchaseInvoiceList,'adminPurchaseTypeList' => $adminPurchaseTypeList];
    }

    public function openingInvoiceList()
    {
        $shopTypeId = Auth::user()->shopTypeId;

        $purchaseInvoiceList = PurchaseInvoice::with('productSupplierName','purchaseType')
        ->where('shopId',Auth::user()->shopId)
        ->where('openingPurchaseRepurchase',0)
        ->where('shopTypeId',$shopTypeId)->orderBy('purchaseInvoiceId','DESC')->get();
        $adminPurchaseTypeList = AdminPurchaseType::all();
        return ['purchaseInvoiceList' => $purchaseInvoiceList,'adminPurchaseTypeList' => $adminPurchaseTypeList];
    }


    public function rePurchaseInvoice()
    {
        $shopTypeId = Auth::user()->shopTypeId;

        $purchaseInvoiceList = PurchaseInvoice::with('productSupplierName','purchaseType')
        ->where('shopId',Auth::user()->shopId)
        ->where('productSupplierId','>',0)
        ->where('openingPurchaseRepurchase',2)
        ->where('shopTypeId',$shopTypeId)->orderBy('purchaseInvoiceId','DESC')->get();
        $adminPurchaseTypeList = AdminPurchaseType::all();
        return ['purchaseInvoiceList' => $purchaseInvoiceList,'adminPurchaseTypeList' => $adminPurchaseTypeList];
    }

    public function purchaseInvoiceShow()
    {
        if (Auth::user()->id) {
            $shopTypeId = Auth::user()->shopTypeId;
            $purchaseInvoice = 1;
            if(PurchaseInvoice::where('shopId',Auth::User()->shopId)->orderBy('purchaseInvoiceNo','DESC')->where('openingPurchaseRepurchase',1)->exists()){
            $purchaseInvoice = PurchaseInvoice::where('shopId',Auth::User()->shopId)->where('openingPurchaseRepurchase',1)->orderBy('purchaseInvoiceNo','DESC')->first()->purchaseInvoiceNo+1;
            }
            $currentDate = Carbon::now()->format('d/m/Y');
            return ['currentDate' => $currentDate, 'purchaseInvoiceIncrement' => $purchaseInvoice];
        }
    }

    public function openingInvoiceShow()
    {
        if (Auth::user()->id) {
            $shopTypeId = Auth::user()->shopTypeId;
            $purchaseInvoice = 1;
            if(PurchaseInvoice::where('shopId',Auth::User()->shopId)->orderBy('purchaseInvoiceNo','DESC')->where('openingPurchaseRepurchase',0)->exists()){
            $purchaseInvoice = PurchaseInvoice::where('shopId',Auth::User()->shopId)->where('openingPurchaseRepurchase',0)->orderBy('purchaseInvoiceNo','DESC')->first()->purchaseInvoiceNo+1;
            }
            $currentDate = Carbon::now()->format('d/m/Y');
            return ['currentDate' => $currentDate, 'purchaseInvoiceIncrement' => $purchaseInvoice];
        }
    }

    public function purchaseOpeningInvoice()
    {
        $shopTypeId = Auth::user()->shopTypeId;

        $purchaseInvoiceList = PurchaseInvoice::with('productSupplierName','purchaseType')
        ->where('shopId',Auth::user()->shopId)
        ->where('productSupplierId',0)
        ->where('shopTypeId',$shopTypeId)->orderBy('purchaseInvoiceId','DESC')->get();
        $adminPurchaseTypeList = AdminPurchaseType::all();
        return ['purchaseInvoiceList' => $purchaseInvoiceList,'adminPurchaseTypeList' => $adminPurchaseTypeList];
    }








    public function getInvoiceSetupInformation($id)
    {
        if($id>0){
       if(InvoiceSetupDetails::where('shopId',Auth::user()->shopId)->where('invoiceForId',$id)->exists()){
            $data = InvoiceSetupDetails::where('shopId',Auth::user()->shopId)->where('invoiceForId',$id)->orderBy('id','DESC')->first();
       }
       else{
            $data = InvoiceSetupDetails::where('shopId','0')->where('invoiceForId',$id)->first();
       }
    }
       else{
            $data = InvoiceSetupDetails::where('shopId','0')->first();
       }
       return ['data' => $data];
    }


    public function searchPurchaseInvoice($id)
    {
        if(PurchaseInvoice::where('shopId',Auth::user()->shopId)->where('openingPurchaseRepurchase',1)->where('purchaseInvoiceNo',$id)->exists()){
        $data = PurchaseInvoice::where('shopId',Auth::user()->shopId)->where('openingPurchaseRepurchase',1)->where('purchaseInvoiceNo',$id)->first();
        $invoiceId = $data->purchaseInvoiceId;
        }
        else{
            $invoiceId = 0;
        }
        return ['invoiceId' => $invoiceId];
    }

    public function purchaseProductReturnEntry($id,$quantity,$unitId)
    {

        if($quantity>0){
        $info = PurchaseProductEntry::where('purchaseProductId',$id)->first();
        
        $infoUnit = PurchaseReturnInvoiceUnitInfo::
        where('productId',$info->productId)
        ->where('purchaseInvoiceNo',$info->purchaseInvoiceNo)
        ->where('brandId',$info->brandId)
        ->where('colorId',$info->colorId)
        ->where('unitId',$unitId)
        ->where('sizeId',$info->sizeId)
        ->where('openingStatus',0)
        ->where('priceTypeId',$info->priceTypeId)
        ->where('shopId',Auth::user()->shopId)
        ->first();

        $invoiceInfo = PurchaseInvoice::where('purchaseInvoiceNo',$info->purchaseInvoiceNo)->where('openingPurchaseRepurchase',1)->first();
        
        $discountType = $info->discountType;
        $discountAmount = 0;
        if($discountType==1){   //percentage
            // $overallDiscount = $info->discount;
            // $perUnitDiscount = $overallDiscount/$info->quantity;
            // $discountAmount = $overallDiscount*$perUnitDiscount/100;
        }
        else if($discountType==2){   //amount tk

        }

        $totalPrice = $infoUnit->purchaseUnitPrice*$quantity;
        $totalSalesPrice = $infoUnit->salesUnitPrice*$quantity;
        $discountAmount = $totalPrice*$info->discount/100;
        $totalWithDiscount = $totalPrice-$discountAmount;
        
        if(PurchaseReturnProductListTmp::
            where('shopId', Auth::user()->shopId)->
            where('createBy', Auth::user()->id)->
            where('returnInvoiceNo', 0)->
            where('purchaseInvoiceNo' , $info->purchaseInvoiceNo)->
            where('productSupplierId' , $info->productSupplierId)->
            where('productId' , $info->productId)->exists()){

                //$this->insertPurchaseProductUnitInfoReturnSubmitDelete($info,$info->priceTypeId,$quantity,$unitId);
                
                PurchaseReturnProductListTmp::
            where('shopId', Auth::user()->shopId)->
            where('createBy', Auth::user()->id)->
            where('returnInvoiceNo', 0)->
            where('purchaseInvoiceNo' , $info->purchaseInvoiceNo)->
            where('productSupplierId' , $info->productSupplierId)->
            where('unitId' , $unitId)->
            where('productId' , $info->productId)->update([
                'quantity' => $quantity,
                'salePrice' => $infoUnit->salesUnitPrice,
                'unitPrice' => $infoUnit->purchaseUnitPrice,
                'totalPrice' => $totalPrice,
                'totalSalesPrice' => $totalSalesPrice,
                'discount' => $info->discount,
                'totalWithDiscount' => $totalWithDiscount,
            ]);
 
            }else{

        PurchaseReturnProductListTmp::insertGetId([
            'returnInvoiceNo' => 0,
            'purchaseInvoiceNo' => $info->purchaseInvoiceNo,
            'productSupplierId' => $info->productSupplierId,
            'productId' => $info->productId,
            'productBarcode' => $info->productBarcode,
            'brandId' => $info->brandId,
            'purchaseType' => $info->purchaseType,
            'countryId' => $info->countryId,
            'quantity' => $quantity,
            'preQun' => $info->quantity,
            'unitId' => $unitId,
            'colorId' => $info->colorId,
            'sizeId' => $info->sizeId,
            'priceTypeId' => $infoUnit->priceTypeId,
            'salePrice' => $infoUnit->salesUnitPrice,
            'unitPrice' => $infoUnit->purchaseUnitPrice,
            'totalPrice' => $totalPrice,
            'totalSalesPrice' => $totalSalesPrice,
            'discountType' => $info->discountType,
            'discount' => $info->discount,
            'totalWithDiscount' => $totalWithDiscount,
            'shopId' => Auth::User()->shopId,
            'shopTypeId' => Auth::User()->shopTypeId,
            'createBy' => Auth::User()->id,
            'created_at' => Carbon::now(),
        ]);
 
    }







        $grandTotal = PurchaseReturnProductListTmp::
        where('shopId', Auth::user()->shopId)->
        where('createBy', Auth::user()->id)->
        where('returnInvoiceNo', 0)->
        where('purchaseInvoiceNo' , $info->purchaseInvoiceNo)->
        where('productSupplierId' , $info->productSupplierId)
        ->sum('totalWithDiscount');


        $supplierAccCode = AddProductSupplierEntry::where('productSupplierId',$info->productSupplierId)->first()->accountCode;
        if(StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$supplierAccCode)->orderBy('id','DESC')->exists()){
            $balance = StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$supplierAccCode)->orderBy('id','DESC')->first()->balanceAmount;
         }
         else{
                $balance = 0;
            }

            $balance = abs($balance);

            // ------------------------
                $invoiceDiscount = $invoiceInfo->discount;
            // ------------------------

            $supplierPayable = $balance;
            $totalProductCost = $grandTotal-$invoiceDiscount;
            $currentPayable = $supplierPayable-$totalProductCost;

            $unitName = UniteEntry::where('uniteEntryId',$unitId)->first()->uniteEntryName;
        return [
            'status' => 1,
            'unitName' => $unitName,
            'unitPrice' => $infoUnit->purchaseUnitPrice,
            'totalPrice' => $totalPrice,
            'discountAmount' => $info->discount,
            'totalWithDiscount' => $totalWithDiscount,

            'purchaseReturnDate' => date('Y-m-d H:i:s'),
            'purchaseInvoiceNo' => $invoiceInfo->purchaseInvoiceNo,
            'grandTotal' => $grandTotal,
            'invoiceDiscount' => $invoiceDiscount,
            'supplierPayable' => $supplierPayable,
            'totalProductCost' => $totalProductCost,
            'currentPayable' => $currentPayable,
              ];

            }else{
                return ['status' => 0];
            }
    }

    public function salesProductReturnEntry($id,$quantity,$unitId)
    {

        if($quantity>0){
        $info = SalesProductEntry::where('SalesProductEntryId',$id)->first();
        
        $infoUnit = SalesReturnInvoiceUnitInfo::
        where('productId',$info->productId)
        ->where('salesInvoiceNo',$info->salesInvoiceNo)
        ->where('brandId',$info->brandId)
        ->where('colorId',$info->colorId)
        ->where('unitId',$unitId)
        ->where('sizeId',$info->sizeId)
        ->where('openingStatus',0)
        ->where('priceTypeId',$info->priceType)
        ->where('shopId',Auth::user()->shopId)
        ->first();

        $invoiceInfo = SalesInvoice::where('salesInvoiceNo',$info->salesInvoiceNo)->first();
        
 
        $discountAmount = 0;
            

        $totalPrice = $infoUnit->salesUnitPrice*$quantity;
        $totalSalesPrice = $infoUnit->salesUnitPrice*$quantity;
        $discountAmount = ($info->discountPrice/$info->quantity)*$quantity;
        $totalWithDiscount = $totalPrice-$discountAmount;
        
        if(SalesReturnProductListTmp::
            where('shopId', Auth::user()->shopId)->
            where('returnInvoiceNo', 0)->
            where('salesInvoiceNo' , $info->salesInvoiceNo)->
            where('productId' , $info->productId)->
            where('brandId' , $info->brandId)->
            where('colorId' , $info->colorId)->
            where('sizeId' , $info->sizeId)->
            where('priceType' , $info->priceType)->
            where('unitId' , $info->unitId)
            ->exists()){

                //$this->insertPurchaseProductUnitInfoReturnSubmitDelete($info,$info->priceTypeId,$quantity,$unitId);
                
                SalesReturnProductListTmp::
            where('shopId', Auth::user()->shopId)->
            where('returnInvoiceNo', 0)->
            where('salesInvoiceNo' , $info->salesInvoiceNo)->
            where('productId' , $info->productId)->
            where('brandId' , $info->brandId)->
            where('colorId' , $info->colorId)->
            where('sizeId' , $info->sizeId)->
            where('priceType' , $info->priceType)->
            where('unitId' , $info->unitId)->update([
                'quantity' => $quantity,
                'salePrice' => $infoUnit->salesUnitPrice,
                'unitPrice' => $infoUnit->salesUnitPrice,
                'unitPurchasePrice' => $infoUnit->purchaseUnitPrice,
                'totalPrice' => $totalPrice,
                'totalPurchasePrice' => $infoUnit->purchaseUnitPrice*$quantity,
                'discount' => $discountAmount,
                'totalWithDiscount' => $totalWithDiscount,
            ]);
 
            }else{

            SalesReturnProductListTmp::insertGetId([
            'returnInvoiceNo' => 0,
            'salesInvoiceNo' => $info->salesInvoiceNo,
            'customerId' => $info->salesCustomerId,
            'productId' => $info->productId,
            'productBarcode' => $info->productBarcode,
            'brandId' => $info->brandId,
            'countryId' => $info->countryId,
            'quantity' => $quantity,
            'preQun' => $info->quantity,
            'unitId' => $unitId,
            'colorId' => $info->colorId,
            'sizeId' => $info->sizeId,
            'priceType' => $infoUnit->priceTypeId,
            'salePrice' => $infoUnit->salesUnitPrice,
            'unitPrice' => $infoUnit->salesUnitPrice,
            'unitPurchasePrice' => $infoUnit->purchaseUnitPrice,
            'totalPrice' => $totalPrice,
            'totalPurchasePrice' => $infoUnit->purchaseUnitPrice*$quantity,
            'discountType' => 2, //discount type == 2 == amount
            'discount' => $discountAmount,
            'totalWithDiscount' => $totalWithDiscount,
            'shopId' => Auth::User()->shopId,
            'shopTypeId' => Auth::User()->shopTypeId,
            'createBy' => Auth::User()->id,
            'created_at' => Carbon::now(),
        ]);
 
    }


        $grandTotal = SalesReturnProductListTmp::
        where('shopId', Auth::user()->shopId)->
        where('createBy', Auth::user()->id)->
        where('returnInvoiceNo', 0)->
        where('salesInvoiceNo' , $info->salesInvoiceNo)->
        where('customerId', $info->salesCustomerId)
        ->sum('totalWithDiscount');


        $supplierAccCode = SalesCustomerEntry::where('salesCustomerEntryId',$info->salesCustomerId)->where('shopId',Auth::user()->shopId)->first()->accountCode;
        if(StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$supplierAccCode)->orderBy('id','DESC')->exists()){
            $balance = StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$supplierAccCode)->orderBy('id','DESC')->first()->balanceAmount;
         }
         else{
                $balance = 0;
            }

            $balance = abs($balance);

            // ------------------------
                $invoiceDiscount = $invoiceInfo->discountPrice;
            // ------------------------

            $supplierPayable = $balance;
            $totalProductCost = $grandTotal-$invoiceDiscount;
            $currentPayable = $supplierPayable-$totalProductCost;

            $unitName = UniteEntry::where('uniteEntryId',$unitId)->first()->uniteEntryName;
        return [
            'status' => 1,
            'unitName' => $unitName,
            'unitPrice' => $info->unitPrice,
            'totalPrice' => $totalPrice,
            'discountAmount' => $discountAmount,
            'totalWithDiscount' => $totalWithDiscount,

            'purchaseReturnDate' => date('Y-m-d H:i:s'),
            'purchaseInvoiceNo' => $info->salesInvoiceNo,
            'purchaseSupplier' => $info->salesCustomerId,
            'grandTotal' => $grandTotal,
            'invoiceDiscount' => $invoiceDiscount,
            'supplierPayable' => $supplierPayable,
            'totalProductCost' => $totalProductCost,
            'currentPayable' => $currentPayable,
              ];

            }else{
                return ['status' => 0];
            }
    }

    

    public function getInvoiceBankDetails($id)
    {
        $payment = SupplierPayment::where('shopId',Auth::user()->shopId)->where('purchaseInvoiceNo',$id)->first();
                
        $bankType = BankTypeEntry::where('bankTypeEntryId',$payment->senderBankTypeEntryId)->first()->bankTypeEntryName;
        $bankName = BankEntry::where('bankEntryId',$payment->senderbankEntryId)->first()->bankName;
        $bankAccountInfo = ShopAddBankEntry::where('bankId',$payment->senderbankAccountId)->first();

         if($payment->senderBankTypeEntryId==1){
            $bankAccountType = CorporateBankType::where('id',$bankAccountInfo->bankAccountType)->first()->name;
        }
        else if($payment->senderBankTypeEntryId==2){
            $bankAccountType = MobileBankType::where('id',$bankAccountInfo->bankAccountType)->first()->name;
        }
        else if($payment->senderBankTypeEntryId==3){
            $bankAccountType = BankCardType::where('id',$bankAccountInfo->bankAccountType)->first()->name;
        }
        

        $msg2 = array(
            'bankType' => $bankType,
            'bankName' => $bankName,
            'bankAccountType' => $bankAccountType,
            'branch' => $payment->senderbranchName,
            'bankAccountNo' => $payment->senderAccNo,
        );
        
        return ['data' => $msg2];
    }
    

    public function getSalesBankDetails($id)
    {
        $saleInvoiceId = SalesInvoice::where('shopId',Auth::user()->shopId)->where('salesInvoiceNo',$id)->first()->salesInvoiceId;
        $payment = SalesPayment::where('shopId',Auth::user()->shopId)->where('salesInvoiceId',$saleInvoiceId)->first();
                
        $bankType = BankTypeEntry::where('bankTypeEntryId',$payment->receiverbankTypeEntryId)->first()->bankTypeEntryName;
        $bankName = BankEntry::where('bankEntryId',$payment->receiverbankEntryId)->first()->bankName;
        $bankAccountInfo = ShopAddBankEntry::where('bankId',$payment->receiverbankAccountId)->first();

         if($payment->receiverbankTypeEntryId==1){
            $bankAccountType = CorporateBankType::where('id',$bankAccountInfo->bankAccountType)->first()->name;
        }
        else if($payment->receiverbankTypeEntryId==2){
            $bankAccountType = MobileBankType::where('id',$bankAccountInfo->bankAccountType)->first()->name;
        }
        else if($payment->receiverbankTypeEntryId==3){
            $bankAccountType = BankCardType::where('id',$bankAccountInfo->bankAccountType)->first()->name;
        }
        

        $msg2 = array(
            'bankType' => $bankType,
            'bankName' => $bankName,
            'bankAccountType' => $bankAccountType,
            'branch' => $payment->receiverbranchName,
            'bankAccountNo' => $payment->receiverAccNo,
        );
        
        return ['data' => $msg2];
    }
        

    public function getInvoiceInformation($id)
    {
        
       $data = PurchaseInvoice::where('shopId',Auth::user()->shopId)->where('purchaseInvoiceId',$id)->where('openingPurchaseRepurchase',1)->first();
       $purchaseInvoiceNo = PurchaseInvoice::where('shopId',Auth::user()->shopId)->where('purchaseInvoiceId',$id)->where('openingPurchaseRepurchase',1)->first()->purchaseInvoiceNo;
       $productSupplierId = PurchaseInvoice::where('shopId',Auth::user()->shopId)->where('purchaseInvoiceId',$id)->where('openingPurchaseRepurchase',1)->first()->productSupplierId;
       $openingStatus = 0;

        $msg2 = array();
       $invoiceProductLists = PurchaseProductEntry::where('shopId',Auth::user()->shopId)->where('openingStatus',$openingStatus)->where('purchaseInvoiceNo',$purchaseInvoiceNo)->get();
        foreach($invoiceProductLists as $invoiceProductList){
            
            $stock = 0;
            $returnable = 0;
            $returned = 0;

            if(StockSummery::
                where('shopId',Auth::user()->shopId)->
                where('productId',$invoiceProductList->productId)->
                where('brandId',$invoiceProductList->brandId)->
                where('purchaseType',$invoiceProductList->purchaseType)->
                where('countryId',$invoiceProductList->countryId)->
                where('unitId',$invoiceProductList->unitId)->
                where('colorId',$invoiceProductList->colorId)->
                where('sizeId',$invoiceProductList->sizeId)->
                orderBy('id','DESC')->exists()){
            $stock = StockSummery::
            where('shopId',Auth::user()->shopId)->
            where('productId',$invoiceProductList->productId)->
            where('brandId',$invoiceProductList->brandId)->
            where('purchaseType',$invoiceProductList->purchaseType)->
            where('countryId',$invoiceProductList->countryId)->
            where('unitId',$invoiceProductList->unitId)->
            where('colorId',$invoiceProductList->colorId)->
            where('sizeId',$invoiceProductList->sizeId)->
            orderBy('id','DESC')->sum('quantity');
                }

                if($stock==$invoiceProductList->quantity){
                    $returnable = $stock;
                }
                else if($invoiceProductList->quantity>$stock){
                    $returnable = $stock;
                }
                else if($stock>$invoiceProductList->quantity){
                    $returnable = $invoiceProductList->quantity;
                }

                if(PurchaseReturnProductListTmp::
                    where('purchaseInvoiceNo',$invoiceProductList->purchaseInvoiceNo)->
                    where('productId',$invoiceProductList->productId)->
                    where('brandId',$invoiceProductList->brandId)->
                    where('purchaseType',$invoiceProductList->purchaseType)->
                    where('countryId',$invoiceProductList->countryId)->
                    where('unitId',$invoiceProductList->unitId)->
                    where('colorId',$invoiceProductList->colorId)->
                    where('sizeId',$invoiceProductList->sizeId)->
                    where('shopId',Auth::user()->shopId)->
                    where('status',1)->
                    orderBy('id','DESC')->exists()){

                        $returned = PurchaseReturnProductListTmp::
                        where('purchaseInvoiceNo',$invoiceProductList->purchaseInvoiceNo)->
                        where('productId',$invoiceProductList->productId)->
                        where('brandId',$invoiceProductList->brandId)->
                        where('purchaseType',$invoiceProductList->purchaseType)->
                        where('countryId',$invoiceProductList->countryId)->
                        where('unitId',$invoiceProductList->unitId)->
                        where('colorId',$invoiceProductList->colorId)->
                        where('sizeId',$invoiceProductList->sizeId)->
                        where('shopId',Auth::user()->shopId)->
                        where('status',1)->
                        orderBy('id','DESC')->sum('quantity');
                    }

                    $returnable =  $returnable - $returned;

                    // ============================== single unit list 
                    $singleUnitList = PurchaseReturnInvoiceUnitInfo::distinct()
                    ->where("purchaseInvoiceNo", $invoiceProductList->purchaseInvoiceNo)
                    ->where("productId", $invoiceProductList->productId)
                    ->where("brandId", $invoiceProductList->brandId)
                    ->where("colorId", $invoiceProductList->colorId)
                    ->where("sizeId", $invoiceProductList->sizeId)
                    ->where("openingStatus", $invoiceProductList->openingStatus)
                    ->where('shopId',Auth::user()->shopId)->get('unitId');
                    //$thisUnitId = $thisUnitId-1;
                    // $singleUnitList = PurchaseProductUnitInfo::distinct()->where("id", '>', $thisUnitId)->get('unitId');
                    // ============================== /single uni list 


        $msg2[] = array(
            "id" => $invoiceProductList->purchaseProductId,
            "purchaseProductId" => $invoiceProductList->purchaseProductId,
            "purchaseInvoiceNo" => $invoiceProductList->purchaseInvoiceNo,
            "productSupplierId" => $invoiceProductList->productSupplierId,
            "productId" => $invoiceProductList->productId,
            "productBarcode" => $invoiceProductList->productBarcode,
            "brandId" => $invoiceProductList->brandId,
            "purchaseType" => $invoiceProductList->purchaseType,
            "countryId" => $invoiceProductList->countryId,
            "quantity" => $invoiceProductList->quantity,
            "unitId" => $invoiceProductList->unitId,
            "singleUnitList" => $singleUnitList,
            "colorId" => $invoiceProductList->colorId,
            "sizeId" => $invoiceProductList->sizeId,
            "salePrice" => $invoiceProductList->salePrice,
            "unitPrice" => $invoiceProductList->unitPrice,
            "totalPrice" => $invoiceProductList->totalPrice,
            "discountType" => $invoiceProductList->discountType,
            "discount" => $invoiceProductList->discount,
            "totalWithDiscount" => $invoiceProductList->totalWithDiscount,
            "stock" => $stock,
            "returnable" => $returnable,
            );

    }
       
       $supplierInfo = AddProductSupplierEntry::where('shopId',Auth::user()->shopId)->where('productSupplierId',$productSupplierId)->first();
       $purchaseProductList = ProductName::get();
       $purchaseType = PurchaseType::get();
       $productBrandList = ProductBrandEntry::get();
       $unitList = UniteEntry::where('shopTypeId',Auth::user()->shopTypeId)->get();

 

       return [
                'unitList' => $unitList,
                'purchaseType' => $purchaseType,
                'productBrandList' => $productBrandList,
                'data' => $data,
                'invoiceProductLists' => $msg2,
                'supplierInfo' => $supplierInfo,
                'purchaseProductList' => $purchaseProductList,
             ];
    }

    public function getInvoiceInfoPurchaseReturn($id)
    {
        
       $data = PurchaseInvoice::where('shopId',Auth::user()->shopId)->where('purchaseInvoiceId',$id)->where('openingPurchaseRepurchase',1)->first();
       $purchaseInvoiceNo = PurchaseInvoice::where('shopId',Auth::user()->shopId)->where('purchaseInvoiceId',$id)->where('openingPurchaseRepurchase',1)->first()->purchaseInvoiceNo;
       $productSupplierId = PurchaseInvoice::where('shopId',Auth::user()->shopId)->where('purchaseInvoiceId',$id)->where('openingPurchaseRepurchase',1)->first()->productSupplierId;
       $openingStatus = 0;

        $msg2 = array();
       $invoiceProductLists = PurchaseProductEntry::where('shopId',Auth::user()->shopId)->where('openingStatus',$openingStatus)->where('purchaseInvoiceNo',$purchaseInvoiceNo)->get();
        foreach($invoiceProductLists as $invoiceProductList){
            
            $stock = 0;
            $returnable = 0;
            $returned = 0;

            if(StockSummery::
                where('shopId',Auth::user()->shopId)->
                where('productId',$invoiceProductList->productId)->
                where('brandId',$invoiceProductList->brandId)->
                where('purchaseType',$invoiceProductList->purchaseType)->
                where('countryId',$invoiceProductList->countryId)->
                where('unitId',$invoiceProductList->unitId)->
                where('colorId',$invoiceProductList->colorId)->
                where('sizeId',$invoiceProductList->sizeId)->
                orderBy('id','DESC')->exists()){
            $stock = StockSummery::
            where('shopId',Auth::user()->shopId)->
            where('productId',$invoiceProductList->productId)->
            where('brandId',$invoiceProductList->brandId)->
            where('purchaseType',$invoiceProductList->purchaseType)->
            where('countryId',$invoiceProductList->countryId)->
            where('unitId',$invoiceProductList->unitId)->
            where('colorId',$invoiceProductList->colorId)->
            where('sizeId',$invoiceProductList->sizeId)->
            orderBy('id','DESC')->sum('quantity');
                }

                if($stock==$invoiceProductList->quantity){
                    $returnable = $stock;
                }
                else if($invoiceProductList->quantity>$stock){
                    $returnable = $stock;
                }
                else if($stock>$invoiceProductList->quantity){
                    $returnable = $invoiceProductList->quantity;
                }

                if(PurchaseReturnProductListTmp::
                    where('purchaseInvoiceNo',$invoiceProductList->purchaseInvoiceNo)->
                    where('productId',$invoiceProductList->productId)->
                    where('brandId',$invoiceProductList->brandId)->
                    where('purchaseType',$invoiceProductList->purchaseType)->
                    where('countryId',$invoiceProductList->countryId)->
                    where('unitId',$invoiceProductList->unitId)->
                    where('colorId',$invoiceProductList->colorId)->
                    where('sizeId',$invoiceProductList->sizeId)->
                    where('shopId',Auth::user()->shopId)->
                    where('status',1)->
                    orderBy('id','DESC')->exists()){

                        $returned = PurchaseReturnProductListTmp::
                        where('purchaseInvoiceNo',$invoiceProductList->purchaseInvoiceNo)->
                        where('productId',$invoiceProductList->productId)->
                        where('brandId',$invoiceProductList->brandId)->
                        where('purchaseType',$invoiceProductList->purchaseType)->
                        where('countryId',$invoiceProductList->countryId)->
                        where('unitId',$invoiceProductList->unitId)->
                        where('colorId',$invoiceProductList->colorId)->
                        where('sizeId',$invoiceProductList->sizeId)->
                        where('shopId',Auth::user()->shopId)->
                        where('status',1)->
                        orderBy('id','DESC')->sum('quantity');
                    }

                    $returnable =  $returnable - $returned;

                    // ============================== single unit list 
                    $singleUnitList = PurchaseReturnInvoiceUnitInfo::distinct()
                    ->where("purchaseInvoiceNo", $invoiceProductList->purchaseInvoiceNo)
                    ->where("productId", $invoiceProductList->productId)
                    ->where("brandId", $invoiceProductList->brandId)
                    ->where("colorId", $invoiceProductList->colorId)
                    ->where("sizeId", $invoiceProductList->sizeId)
                    ->where("openingStatus", $invoiceProductList->openingStatus)
                    ->where('shopId',Auth::user()->shopId)->get('unitId');
                    //$thisUnitId = $thisUnitId-1;
                    // $singleUnitList = PurchaseProductUnitInfo::distinct()->where("id", '>', $thisUnitId)->get('unitId');
                    // ============================== /single uni list 


        $msg2[] = array(
            "id" => $invoiceProductList->purchaseProductId,
            "purchaseProductId" => $invoiceProductList->purchaseProductId,
            "purchaseInvoiceNo" => $invoiceProductList->purchaseInvoiceNo,
            "productSupplierId" => $invoiceProductList->productSupplierId,
            "productId" => $invoiceProductList->productId,
            "productBarcode" => $invoiceProductList->productBarcode,
            "brandId" => $invoiceProductList->brandId,
            "purchaseType" => $invoiceProductList->purchaseType,
            "countryId" => $invoiceProductList->countryId,
            "quantity" => $invoiceProductList->quantity,
            "unitId" => $invoiceProductList->unitId,
            "singleUnitList" => $singleUnitList,
            "colorId" => $invoiceProductList->colorId,
            "sizeId" => $invoiceProductList->sizeId,
            "salePrice" => $invoiceProductList->salePrice,
            "unitPrice" => $invoiceProductList->unitPrice,
            "totalPrice" => $invoiceProductList->totalPrice,
            "discountType" => $invoiceProductList->discountType,
            "discount" => $invoiceProductList->discount,
            "totalWithDiscount" => $invoiceProductList->totalWithDiscount,
            "stock" => $stock,
            "returnable" => $returnable,
            );

    }
       
       $supplierInfo = AddProductSupplierEntry::where('shopId',Auth::user()->shopId)->where('productSupplierId',$productSupplierId)->first();
       $purchaseProductList = ProductName::get();
       $purchaseType = PurchaseType::get();
       $productBrandList = ProductBrandEntry::get();
       $unitList = UniteEntry::where('shopTypeId',Auth::user()->shopTypeId)->get();

 

       return [
                'unitList' => $unitList,
                'purchaseType' => $purchaseType,
                'productBrandList' => $productBrandList,
                'data' => $data,
                'invoiceProductLists' => $msg2,
                'supplierInfo' => $supplierInfo,
                'purchaseProductList' => $purchaseProductList,
             ];
    }

    public function getOpeningInvoiceInformation($id)
    {
        
       $data = PurchaseInvoice::where('shopId',Auth::user()->shopId)->where('purchaseInvoiceId',$id)->where('openingPurchaseRepurchase',0)->first();
       $purchaseInvoiceNo = PurchaseInvoice::where('shopId',Auth::user()->shopId)->where('purchaseInvoiceId',$id)->where('openingPurchaseRepurchase',0)->first()->purchaseInvoiceNo;
       $productSupplierId = PurchaseInvoice::where('shopId',Auth::user()->shopId)->where('purchaseInvoiceId',$id)->where('openingPurchaseRepurchase',0)->first()->productSupplierId;
       $openingStatus = 1;
        $msg2 = array();
       $invoiceProductLists = PurchaseProductEntry::where('shopId',Auth::user()->shopId)->where('openingStatus',$openingStatus)->where('purchaseInvoiceNo',$purchaseInvoiceNo)->get();
        foreach($invoiceProductLists as $invoiceProductList){
            
            $stock = 0;
            $returnable = 0;
            $returned = 0;

            if(StockSummery::
                where('shopId',Auth::user()->shopId)->
                where('productId',$invoiceProductList->productId)->
                where('brandId',$invoiceProductList->brandId)->
                where('purchaseType',$invoiceProductList->purchaseType)->
                where('countryId',$invoiceProductList->countryId)->
                where('unitId',$invoiceProductList->unitId)->
                where('colorId',$invoiceProductList->colorId)->
                where('sizeId',$invoiceProductList->sizeId)->
                orderBy('id','DESC')->exists()){
            $stock = StockSummery::
            where('shopId',Auth::user()->shopId)->
            where('productId',$invoiceProductList->productId)->
            where('brandId',$invoiceProductList->brandId)->
            where('purchaseType',$invoiceProductList->purchaseType)->
            where('countryId',$invoiceProductList->countryId)->
            where('unitId',$invoiceProductList->unitId)->
            where('colorId',$invoiceProductList->colorId)->
            where('sizeId',$invoiceProductList->sizeId)->
            orderBy('id','DESC')->sum('quantity');
                }

                if($stock==$invoiceProductList->quantity){
                    $returnable = $stock;
                }
                else if($invoiceProductList->quantity>$stock){
                    $returnable = $stock;
                }
                else if($stock>$invoiceProductList->quantity){
                    $returnable = $invoiceProductList->quantity;
                }

                if(PurchaseReturnProductListTmp::
                    where('purchaseInvoiceNo',$invoiceProductList->purchaseInvoiceNo)->
                    where('productId',$invoiceProductList->productId)->
                    where('brandId',$invoiceProductList->brandId)->
                    where('purchaseType',$invoiceProductList->purchaseType)->
                    where('countryId',$invoiceProductList->countryId)->
                    where('unitId',$invoiceProductList->unitId)->
                    where('colorId',$invoiceProductList->colorId)->
                    where('sizeId',$invoiceProductList->sizeId)->
                    where('shopId',Auth::user()->shopId)->
                    where('status',1)->
                    orderBy('id','DESC')->exists()){

                        $returned = PurchaseReturnProductListTmp::
                        where('purchaseInvoiceNo',$invoiceProductList->purchaseInvoiceNo)->
                        where('productId',$invoiceProductList->productId)->
                        where('brandId',$invoiceProductList->brandId)->
                        where('purchaseType',$invoiceProductList->purchaseType)->
                        where('countryId',$invoiceProductList->countryId)->
                        where('unitId',$invoiceProductList->unitId)->
                        where('colorId',$invoiceProductList->colorId)->
                        where('sizeId',$invoiceProductList->sizeId)->
                        where('shopId',Auth::user()->shopId)->
                        where('status',1)->
                        orderBy('id','DESC')->sum('quantity');
                    }

                    $returnable =  $returnable - $returned;

                    // ============================== single unit list 
                    $singleUnitList = PurchaseReturnInvoiceUnitInfo::distinct()
                    ->where("purchaseInvoiceNo", $invoiceProductList->purchaseInvoiceNo)
                    ->where("productId", $invoiceProductList->productId)
                    ->where("brandId", $invoiceProductList->brandId)
                    ->where("colorId", $invoiceProductList->colorId)
                    ->where("sizeId", $invoiceProductList->sizeId)
                    ->where("openingStatus", $invoiceProductList->openingStatus)
                    ->where('shopId',Auth::user()->shopId)->get('unitId');
                    //$thisUnitId = $thisUnitId-1;
                    // $singleUnitList = PurchaseProductUnitInfo::distinct()->where("id", '>', $thisUnitId)->get('unitId');
                    // ============================== /single uni list 


        $msg2[] = array(
            "id" => $invoiceProductList->purchaseProductId,
            "purchaseProductId" => $invoiceProductList->purchaseProductId,
            "purchaseInvoiceNo" => $invoiceProductList->purchaseInvoiceNo,
            "productSupplierId" => $invoiceProductList->productSupplierId,
            "productId" => $invoiceProductList->productId,
            "productBarcode" => $invoiceProductList->productBarcode,
            "brandId" => $invoiceProductList->brandId,
            "purchaseType" => $invoiceProductList->purchaseType,
            "countryId" => $invoiceProductList->countryId,
            "quantity" => $invoiceProductList->quantity,
            "unitId" => $invoiceProductList->unitId,
            "singleUnitList" => $singleUnitList,
            "colorId" => $invoiceProductList->colorId,
            "sizeId" => $invoiceProductList->sizeId,
            "salePrice" => $invoiceProductList->salePrice,
            "unitPrice" => $invoiceProductList->unitPrice,
            "totalPrice" => $invoiceProductList->totalPrice,
            "discountType" => $invoiceProductList->discountType,
            "discount" => $invoiceProductList->discount,
            "totalWithDiscount" => $invoiceProductList->totalWithDiscount,
            "stock" => $stock,
            "returnable" => $returnable,
            );

    }
       
       $supplierInfo = AddProductSupplierEntry::where('shopId',Auth::user()->shopId)->where('productSupplierId',$productSupplierId)->first();
       $purchaseProductList = ProductName::get();
       $purchaseType = PurchaseType::get();
       $productBrandList = ProductBrandEntry::get();
       $unitList = UniteEntry::where('shopTypeId',Auth::user()->shopTypeId)->get();

 

       return [
                'unitList' => $unitList,
                'purchaseType' => $purchaseType,
                'productBrandList' => $productBrandList,
                'data' => $data,
                'invoiceProductLists' => $msg2,
                'supplierInfo' => $supplierInfo,
                'purchaseProductList' => $purchaseProductList,
             ];
    }

    public function purchaseReturnInvoiceInfo($id)
    {
       
       $data = PurchaseReturnInvoiceTmp::where('shopId',Auth::user()->shopId)->where('id',$id)->first();
       
       $productSupplierId = PurchaseReturnInvoiceTmp::where('shopId',Auth::user()->shopId)->where('id',$id)->first()->productSupplierId;
       
        $msg2 = array();
       $invoiceProductLists = PurchaseReturnProductListTmp::where('shopId',Auth::user()->shopId)->where('returnInvoiceNo',$data->returnInvoiceNo)->get();
        foreach($invoiceProductLists as $invoiceProductList){
            
            $stock = 0;
            $returnable = 0;

        $msg2[] = array(
            "id" => $invoiceProductList->id,
            "purchaseProductId" => $invoiceProductList->productId,
            "purchaseInvoiceNo" => $invoiceProductList->purchaseInvoiceNo,
            "productSupplierId" => $invoiceProductList->productSupplierId,
            "productId" => $invoiceProductList->productId,
            "productBarcode" => $invoiceProductList->productBarcode,
            "brandId" => $invoiceProductList->brandId,
            "purchaseType" => $invoiceProductList->purchaseType,
            "countryId" => $invoiceProductList->countryId,
            "quantity" => $invoiceProductList->quantity,
            "unitId" => $invoiceProductList->unitId,
            "colorId" => $invoiceProductList->colorId,
            "sizeId" => $invoiceProductList->sizeId,
            "salePrice" => $invoiceProductList->salePrice,
            "unitPrice" => $invoiceProductList->unitPrice,
            "totalPrice" => $invoiceProductList->totalPrice,
            "discountType" => $invoiceProductList->discountType,
            "discount" => $invoiceProductList->discount,
            "totalWithDiscount" => $invoiceProductList->totalWithDiscount,
            "stock" => $stock,
            "returnable" => $returnable,
            );

    }
       
       $supplierInfo = AddProductSupplierEntry::where('shopId',Auth::user()->shopId)->where('productSupplierId',$productSupplierId)->first();
       $purchaseProductList = ProductName::where('shopTypeId',Auth::user()->shopTypeId)->get();
       $purchaseType = PurchaseType::get();
       $productBrandList = ProductBrandEntry::get();
       $unitList = UniteEntry::where('shopTypeId',Auth::user()->shopTypeId)->get();

 

       return [
                'unitList' => $unitList,
                'purchaseType' => $purchaseType,
                'productBrandList' => $productBrandList,
                'data' => $data,
                'invoiceProductLists' => $msg2,
                'supplierInfo' => $supplierInfo,
                'purchaseProductList' => $purchaseProductList,
             ];
    }


    public function salesReturnInvoiceInfo($id)
    {
       
       $data = SalesReturnInvoiceTmp::where('shopId',Auth::user()->shopId)->where('id',$id)->first();
       
       $productSupplierId = SalesReturnInvoiceTmp::where('shopId',Auth::user()->shopId)->where('id',$id)->first()->customerId;
       
        $msg2 = array();
       $invoiceProductLists = SalesReturnProductListTmp::where('shopId',Auth::user()->shopId)->where('returnInvoiceNo',$data->returnInvoiceNo)->where('salesInvoiceNo',$data->salesInvoiceNo)->get();
        foreach($invoiceProductLists as $invoiceProductList){
            
            $stock = 0;
            $returnable = 0;

        $msg2[] = array(
            "id" => $invoiceProductList->id,
            "purchaseProductId" => $invoiceProductList->productId,
            "purchaseInvoiceNo" => $invoiceProductList->salesInvoiceNo,
            "productSupplierId" => $invoiceProductList->customerId,
            "productId" => $invoiceProductList->productId,
            "productBarcode" => $invoiceProductList->productBarcode,
            "brandId" => $invoiceProductList->brandId,
            "purchaseType" => $invoiceProductList->purchaseType,
            "countryId" => $invoiceProductList->countryId,
            "quantity" => $invoiceProductList->quantity,
            "unitId" => $invoiceProductList->unitId,
            "colorId" => $invoiceProductList->colorId,
            "sizeId" => $invoiceProductList->sizeId,
            "salePrice" => $invoiceProductList->salePrice,
            "unitPrice" => $invoiceProductList->unitPrice,
            "totalPrice" => $invoiceProductList->totalPrice,
            "discountType" => $invoiceProductList->discountType,
            "discount" => $invoiceProductList->discount,
            "totalWithDiscount" => $invoiceProductList->totalWithDiscount,
            "stock" => $stock,
            "returnable" => $returnable,
            );

    }
       
       $supplierInfo = SalesCustomerEntry::where('shopId',Auth::user()->shopId)->where('salesCustomerEntryId',$productSupplierId)->first();
       $purchaseProductList = ProductName::where('shopTypeId',Auth::user()->shopTypeId)->get();
       $purchaseType = PurchaseType::get();
       $productBrandList = ProductBrandEntry::get();
       $unitList = UniteEntry::where('shopTypeId',Auth::user()->shopTypeId)->get();

 

       return [
                'unitList' => $unitList,
                'purchaseType' => $purchaseType,
                'productBrandList' => $productBrandList,
                'data' => $data,
                'invoiceProductLists' => $msg2,
                'supplierInfo' => $supplierInfo,
                'purchaseProductList' => $purchaseProductList,
             ];
    }


    public function getSupllierInformation($id)
    {
       
       $data = AddProductSupplierEntry::where('productSupplierId',$id)->first();

       return ['data' => $data];
    }







    public function shopWishProductSupplier()
    {
        $shopTypeId = Auth::user()->shopTypeId;
        $productSupplierList = AddProductSupplierEntry::orderBy('productSupplierId','desc')->where('shopTypeId',$shopTypeId)->where('shopId',Auth::User()->shopId)->get();
        return ['productSupplierList' => $productSupplierList];
    }

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


    public function supplierWiseDamageList($productSupplierId)
    {

        
        $brandList = PurchaseProductEntry::distinct()->where('shopId',Auth::user()->shopId)->where('productSupplierId',$productSupplierId)->get('brandId');
        
        $brand = array();
        foreach($brandList as $data){

            $brand[] = array(
                "productBrandEntryId" => $data->brandId,
                "productBrandName" => ProductBrandEntry::where('productBrandEntryId',$data->brandId)->first()->productBrandName,
                );
            }
        
        
        
        $productList = StockSummery::where('shopId',Auth::user()->shopId)->where('productSupplierId',$productSupplierId)->get();
        
        $product = array();
        $tDam = 0;
        $tDamAmount = 0;
        foreach($productList as $data){
            
            $productInfo = $data;

            $priceTypeId = PurchaseProductUnitInfo::where('productId',$productInfo->productId)
            ->where('brandId',$productInfo->brandId)
            ->where('colorId',$productInfo->colorId)
            ->where('sizeId',$productInfo->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first()->priceTypeId;


            
            if(PurchaseProductUnitInfo::where('productId',$productInfo->productId)->where('brandId',$productInfo->brandId)->where('colorId',$productInfo->colorId)->where('sizeId',$productInfo->sizeId)->where('priceTypeId',$priceTypeId)->orderBy('id','DESC')->exists()){
            $priceInfo = PurchaseProductUnitInfo::where('productId',$productInfo->productId)->where('brandId',$productInfo->brandId)->where('colorId',$productInfo->colorId)->where('sizeId',$productInfo->sizeId)->where('priceTypeId',$priceTypeId)->orderBy('id','DESC')->first();
            $mainStock = $priceInfo->finalQuantity;
            $damageStock = DealerSalesOrder::where('productId',$productInfo->productId)->where('supplierId',$productSupplierId)->where('brandId',$productInfo->brandId)->where('colorId',$productInfo->colorId)->where('sizeId',$productInfo->sizeId)->where('shopId',Auth::user()->shopId)->sum('totalPieceDamage');
            $tmpSalesStock = DealerSalesOrder::where('productId',$productInfo->productId)->where('brandId',$productInfo->brandId)->where('colorId',$productInfo->colorId)->where('sizeId',$productInfo->sizeId)->where('shopId',Auth::user()->shopId)->where('status',1)->sum('totalPieceRequest');
            $availableStock = $mainStock+$tmpSalesStock;
            $tpRate = $priceInfo->salesUnitPrice;
            $purchaseRate = $priceInfo->purchaseUnitPrice;
            $carton = $priceInfo->quantity;
            $unitId = $priceInfo->unitId;
            $unit = UniteEntry::where('uniteEntryId',$priceInfo->unitId)->first()->uniteEntryName;
            }
            
            if($damageStock){
            $product[] = array(
                "productNameId" => $data->productId,
                "brandId" => $productInfo->brandId,
                "colorId" => $productInfo->colorId,
                "sizeId" => $productInfo->sizeId,
                "productName" => ProductName::where('productNameId',$data->productId)->first()->productName,
                "tpRate" => $tpRate,
                "purchaseRate" => $purchaseRate,
                "carton" => $carton,
                "unitId" => $unitId,
                "unit" => $unit,
                "priceTypeId" => $priceTypeId,
                "availableStock" => $availableStock,
                "damageStock" => $damageStock,
                "damageAmount" => $damageStock*$tpRate,
                );
                $tDam += $damageStock;
                $tDamAmount += ($damageStock*$tpRate);
            }
            }
        
        return [
            'brandList' => $brand,
            'productList' => $product,
            'tDam' => $tDam,
            'tDamAmount' => $tDamAmount,
        ];
    }
 

    public function supplierWiseBrandList($productSupplierId)
    {

        
        $brandList = PurchaseProductEntry::distinct()->where('shopId',Auth::user()->shopId)->where('productSupplierId',$productSupplierId)->get('brandId');
        
        $brand = array();
        foreach($brandList as $data){

            $brand[] = array(
                "productBrandEntryId" => $data->brandId,
                "productBrandName" => ProductBrandEntry::where('productBrandEntryId',$data->brandId)->first()->productBrandName,
                );
            }
        
        
        
        $productList = StockSummery::where('shopId',Auth::user()->shopId)->where('productSupplierId',$productSupplierId)->get();
        
        $product = array();
        $i=1;
        foreach($productList as $data){
            
            $productInfo = $data;

            $priceTypeId = PurchaseProductUnitInfo::where('productId',$productInfo->productId)
            ->where('brandId',$productInfo->brandId)
            ->where('colorId',$productInfo->colorId)
            ->where('sizeId',$productInfo->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first()->priceTypeId;


            
            if(PurchaseProductUnitInfo::where('productId',$productInfo->productId)->where('brandId',$productInfo->brandId)->where('colorId',$productInfo->colorId)->where('sizeId',$productInfo->sizeId)->where('priceTypeId',$priceTypeId)->orderBy('id','DESC')->exists()){
            $priceInfo = PurchaseProductUnitInfo::where('productId',$productInfo->productId)->where('brandId',$productInfo->brandId)->where('colorId',$productInfo->colorId)->where('sizeId',$productInfo->sizeId)->where('priceTypeId',$priceTypeId)->orderBy('id','DESC')->first();
            $mainStock = $priceInfo->finalQuantity;
            $tmpSalesStock = DealerSalesOrder::where('productId',$productInfo->productId)->where('brandId',$productInfo->brandId)->where('colorId',$productInfo->colorId)->where('sizeId',$productInfo->sizeId)->where('shopId',Auth::user()->shopId)->where('status',1)->sum('totalPieceRequest');
            $availableStock = $mainStock+$tmpSalesStock;
            $tpRate = $priceInfo->salesUnitPrice;
            $purchaseRate = $priceInfo->purchaseUnitPrice;
            $carton = $priceInfo->quantity;
            $unitId = $priceInfo->unitId;

            if($priceInfo->singleStatus>1){
                $availableCarton = (int)$availableStock/$priceInfo->quantity;
                $disabled = 0;
            }else{
                $availableCarton = 0;
                $disabled = 1;
            }
            $unit = UniteEntry::where('uniteEntryId',$priceInfo->unitId)->first()->uniteEntryName;
            }
            
            $product[] = array(
                "productSerialId" => $i++,
                "productNameId" => $data->productId,
                "brandId" => $productInfo->brandId,
                "colorId" => $productInfo->colorId,
                "sizeId" => $productInfo->sizeId,
                "productName" => ProductName::where('productNameId',$data->productId)->first()->productName,
                "tpRate" => $tpRate,
                "purchaseRate" => $purchaseRate,
                "carton" => $carton,
                "availableCarton" => $availableCarton,
                "disabled" => $disabled,
                "unitId" => $unitId,
                "unit" => $unit,
                "priceTypeId" => $priceTypeId,
                "availableStock" => $availableStock,
                );
            }
        
        return [
            'brandList' => $brand,
            'productList' => $product,
        ];
    }
 

    public function brandWiseProductList($productSupplierId,$brandId)
    {
         
        $productList = PurchaseProductEntry::distinct()->where('shopId',Auth::user()->shopId)->where('productSupplierId',$productSupplierId)->where('brandId',$brandId)->get('productId');
        
        $product = array();
        $i = 1;
        foreach($productList as $data){

            $productInfo = PurchaseProductEntry::where('shopId',Auth::user()->shopId)->where('productSupplierId',$productSupplierId)->where('brandId',$brandId)->where('productId',$data->productId)->first();

            $priceTypeId = PurchaseProductUnitInfo::where('productId',$productInfo->productId)
            ->where('brandId',$productInfo->brandId)
            ->where('colorId',$productInfo->colorId)
            ->where('sizeId',$productInfo->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first()->priceTypeId;


            $productInfo = PurchaseProductEntry::where('productId',$data->productId)->where('shopId',Auth::user()->shopId)->first();
            $priceInfo = PurchaseProductUnitInfo::where('productId',$productInfo->productId)->where('brandId',$productInfo->brandId)->where('colorId',$productInfo->colorId)->where('sizeId',$productInfo->sizeId)->where('priceTypeId',$priceTypeId)->orderBy('id','DESC')->first();
            $mainStock = $priceInfo->finalQuantity;
            $tmpSalesStock = DealerSalesOrder::where('shopId',Auth::user()->shopId)->where('status',1)->sum('totalPieceRequest');
            $availableStock = $mainStock+$tmpSalesStock;
            $tpRate = $priceInfo->salesUnitPrice;
            $purchaseRate = $priceInfo->purchaseUnitPrice;
            $carton = $priceInfo->quantity;
            $unitId = $priceInfo->unitId;
            $unit = UniteEntry::where('uniteEntryId',$priceInfo->unitId)->first()->uniteEntryName;

            if($priceInfo->singleStatus>1){
                $availableCarton = (int)$availableStock/$priceInfo->quantity;
                $disabled = 0;
            }else{
                $availableCarton = 0;
                $disabled = 1;
            }

            $product[] = array(
                "productSerialId" => $i++,
                "productNameId" => $data->productId,
                "brandId" => $productInfo->brandId,
                "colorId" => $productInfo->colorId,
                "sizeId" => $productInfo->sizeId,
                "productName" => ProductName::where('productNameId',$data->productId)->first()->productName,
                "tpRate" => $tpRate,
                "purchaseRate" => $purchaseRate,
                "carton" => $carton,
                "availableCarton" => $availableCarton,
                "disabled" => $disabled,
                "unitId" => $unitId,
                "unit" => $unit,
                "priceTypeId" => $priceTypeId,
                "availableStock" => $availableStock,
                );
            }
        
        return [
            'productList' => $product,
        ];
    }
 

    public function brandWiseDamageList($productSupplierId,$brandId)
    {
         
        
        $productList = PurchaseProductEntry::distinct()->where('shopId',Auth::user()->shopId)->where('productSupplierId',$productSupplierId)->where('brandId',$brandId)->get('productId');
        
        $product = array();
        $tDam = 0;
        
        foreach($productList as $data){

            $productInfo = PurchaseProductEntry::where('shopId',Auth::user()->shopId)->where('productSupplierId',$productSupplierId)->where('brandId',$brandId)->where('productId',$data->productId)->first();

            $priceTypeId = PurchaseProductUnitInfo::where('productId',$productInfo->productId)
            ->where('brandId',$productInfo->brandId)
            ->where('colorId',$productInfo->colorId)
            ->where('sizeId',$productInfo->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first()->priceTypeId;


            $productInfo = PurchaseProductEntry::where('productId',$data->productId)->where('shopId',Auth::user()->shopId)->first();
            $priceInfo = PurchaseProductUnitInfo::where('productId',$productInfo->productId)->where('brandId',$productInfo->brandId)->where('colorId',$productInfo->colorId)->where('sizeId',$productInfo->sizeId)->where('priceTypeId',$priceTypeId)->orderBy('id','DESC')->first();
            $mainStock = $priceInfo->finalQuantity;
            $damageStock = DealerSalesOrder::where('productId',$productInfo->productId)->where('brandId',$productInfo->brandId)->where('colorId',$productInfo->colorId)->where('sizeId',$productInfo->sizeId)->where('shopId',Auth::user()->shopId)->sum('totalPieceDamage');
            $tmpSalesStock = DealerSalesOrder::where('shopId',Auth::user()->shopId)->where('status',1)->sum('totalPieceRequest');
            $availableStock = $mainStock+$tmpSalesStock;
            $tpRate = number_format($priceInfo->salesUnitPrice,2);
            $carton = $priceInfo->quantity;
            $unitId = $priceInfo->unitId;
            $unit = UniteEntry::where('uniteEntryId',$priceInfo->unitId)->first()->uniteEntryName;

            
            $product[] = array(
                "productNameId" => $data->productId,
                "brandId" => $productInfo->brandId,
                "productName" => ProductName::where('productNameId',$data->productId)->first()->productName,
                "tpRate" => $tpRate,
                "carton" => $carton,
                "unitId" => $unitId,
                "unit" => $unit,
                "priceTypeId" => $priceTypeId,
                "availableStock" => $availableStock,
                "damageStock" => $damageStock,
                );
                $tDam += $damageStock;
            }
        
        return [
            'productList' => $product,
            'tDam' => $tDam,
        ];
    }
        

    public function supplierBrandList($sid,$bid,$date)
    {
          
        $productList = DealerSalesOrder::
        where('supplierId',$sid)
        ->where('brandId',$bid)
        ->where('OrderRequestDate','LIKE',"$date%")
        ->where('shopId',Auth::user()->shopId)->get();
        
        $product = array();
        $ts = 0;
        $tp=0;
        $tpro=0;

        foreach($productList as $data){

            $product[] = array(
                "id" => $data->id,
                "rendomNumber" => $data->rendomNumber,
                "productNameId" => $data->productId,
                "brandId" => $data->brandId,
                "sizeId" => $data->sizeId,
                "colorId" => $data->colorId,
                "productName" => ProductName::where('productNameId',$data->productId)->first()->productName,
                "tpRate" => $data->unitPrice,
                "purchaseRate" => $data->purchaseUnitPrice,
                "perCarton" => $data->perCartonQuantity,
                "perCartonUnitId" => $data->perCartonUnitId,
                "perCartonUnitName" => $data->perCartonUnitName,
                "cartonRequest" => $data->cartonRequest,
                "pieceRequest" => $data->pieceRequest,
                "totalPieceRequest" => $data->totalPieceRequest,
                "totalPriceRequest" => $data->totalPriceRequest,
                "totalPieceGood" => $data->totalPieceGood,
                "totalPieceDamage" => $data->totalPieceDamage,
                "totalPieceReturn" => $data->totalPieceReturn,
                "totalPieceSale" => $data->quantity,
                "totalPriceSale" => $data->totalPrice,
                "totalPurchase" => $data->purchaseTotalPrice,
                "profit" => $data->totalProfit,
                );
                $ts += $data->totalPrice;
                $tp += $data->purchaseTotalPrice;
                $tpro += $data->totalProfit;
            }
        
        return [
            'productList' => $product,
            'sale' => $ts,
            'purchase' => $tp,
            'profit' => $tpro,
        ];
    }
        

    public function requisitionProductList($reqId)
    {
          
        $productList = DealerSalesOrder::where('rendomNumber',$reqId)->where('shopId',Auth::user()->shopId)->get();
        
        $product = array();
        foreach($productList as $data){

            $product[] = array(
                "id" => $data->id,
                "rendomNumber" => $reqId,
                "productNameId" => $data->productId,
                "brandId" => $data->brandId,
                "sizeId" => $data->sizeId,
                "colorId" => $data->colorId,
                "productName" => ProductName::where('productNameId',$data->productId)->first()->productName,
                "tpRate" => $data->unitPrice,
                "purchaseRate" => $data->purchaseUnitPrice,
                "perCarton" => $data->perCartonQuantity,
                "perCartonUnitId" => $data->perCartonUnitId,
                "perCartonUnitName" => $data->perCartonUnitName,
                "cartonRequest" => $data->cartonRequest,
                "pieceRequest" => $data->pieceRequest,
                "totalPieceRequest" => $data->totalPieceRequest,
                "totalPriceRequest" => $data->totalPriceRequest,
                "totalPieceGood" => $data->totalPieceGood,
                "totalPieceDamage" => $data->totalPieceDamage,
                "totalPieceReturn" => $data->totalPieceReturn,
                "totalPieceSale" => $data->quantity,
                "totalPriceSale" => $data->totalPrice,
                );
            }
        
        return [
            'productList' => $product,
        ];
    }
        

    public function shopWishProductSupplierId($productSupplierId)
    {
        
        $singleProductSupplier = AddProductSupplierEntry::where('productSupplierId',$productSupplierId)->first();
        $productSupplierPhone = $singleProductSupplier->productSupplierPhone;
        $productSupplierAddress = $singleProductSupplier->productSupplierAddress;
        $accountCode = $singleProductSupplier->accountCode;
         
        $shopTypeId = Auth::user()->shopTypeId;
        // $previousPayableDue = PurchaseInvoice::where('productSupplierId',$productSupplierId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->latest()->first();
        // if (isset($previousPayableDue->previousPayableDue)) {
        //     $previousBill = $previousPayableDue->previousPayableDue;
        //     return ['previousBill'=> $previousBill,'productSupplierPhone' => $productSupplierPhone,'productSupplierAddress'=>$productSupplierAddress];
        // }
        return [
            'productSupplierPhone' => $productSupplierPhone,
            'productSupplierAddress'=>$productSupplierAddress,
            'accountCode'=>$accountCode
        ];
    }



    public function purchaseTypeShow()
    {
        $purchaseType = PurchaseType::where('status','0')->orderBY('id','asc')->get();
        return ['purchaseType' => $purchaseType];
    }


    public function unitNameShowPurchase()
    {
          $unitNameShow = UniteEntry::
          where('shopTypeId',Auth::User()->shopTypeId)
          ->orderBy('uniteEntryId','desc')->get();
 
          return  ['unitNameShow' => $unitNameShow];
    }

    public function unitNameShow()
    {
          $unitNameShow = UniteEntry::
          where('shopTypeId',Auth::User()->shopTypeId)
          ->orderBy('uniteEntryId','desc')->get();

          $brandLists = ProductBrandEntry::orderBy('productBrandEntryId','desc')
        //   ->whereIn('shopId',[0,Auth::User()->shopId])
          ->where('shopTypeId',Auth::User()->shopTypeId)
          ->get();
          return  ['unitNameShow' => $unitNameShow, 'brandLists' => $brandLists];
    }

    public function unitNameShowSales($productId,$brandId,$priceType)
    {
        // ->where('purchaseType', $data->purchaseType)
          $unitIds = PurchaseProductUnitInfo::distinct()->where('productId',$productId)->where('brandId', $brandId)
         ->where('shopId',Auth::user()->shopId)->get('unitId');

         $unitIdLists = '';
         $count = count($unitIds);
         for($i=0;$i<$count;$i++){
             
            if($i==($count-1)){
                $unitIdLists .= $unitIds[$i]->unitId;
             }
             else{
                $unitIdLists .= $unitIds[$i]->unitId.',';
             }
             
         }
         $unitNameShow = UniteEntry::
         where('shopTypeId',Auth::User()->shopTypeId)
         ->whereRaw("uniteEntryId IN($unitIdLists)")->get();

          return  ['unitNameShow' => $unitNameShow];
    }

    public function productNameShow()
    {

          $shopLocation = ShopAddressLocation::where('shopId',Auth::user()->shopId)->first();

          $shopTypeId = Auth::user()->shopTypeId;

          $productNameList = ProductName::with('openingproduct')->where('countryId',Auth::user()->countryId)->where('status',1)->where('shopTypeId',$shopTypeId)->get();
          
          return  ['productNameList' => $productNameList];
    }
    
    public function productNameList()
    {
          $productNameList = ProductName::where('shopId',Auth::user()->shopId)->get();
          return  ['productList' => $productNameList];
    }
    public function productNameListOwner()
    {
          $productNameList = ProductName::where('shopId',Auth::user()->shopId)->get();
          return  ['productList' => $productNameList];
    }
    

    public function purchaseProductList()
    {
        $shopTypeId = Auth::user()->shopTypeId;
        $purchaseProductList = PurchaseProductEntry::with('productName','unitName')->where('openingStatus',0)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->latest()->get();
        $productBrandList = ProductBrandEntry::where('shopTypeId',$shopTypeId)->get();
        $purchaseTypeList = PurchaseType::get();
        $productEntryHave = false;

        if(PurchaseProductEntry::where('shopId',Auth::user()->shopId)->where('openingStatus',0)->where('shopTypeId',$shopTypeId)->exists()){
            $productEntryHave = true;
        }
        return [
            'purchaseProductList' => $purchaseProductList,
            'productBrandList' => $productBrandList,
            'productEntryHave' => $productEntryHave,
            'purchaseTypeList' => $purchaseTypeList
        ];
    }
    

    public function purchaseProductListTmp()
    {
        $shopTypeId = Auth::user()->shopTypeId;
        $purchaseProductList = PurchaseProductEntryTmp::with('productName','unitName')->where('openingStatus',0)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->latest()->get();
        $productBrandList = ProductBrandEntry::where('shopTypeId',$shopTypeId)->get();
        $purchaseTypeList = PurchaseType::get();
        $productEntryHave = false;

        if(PurchaseProductEntryTmp::where('shopId',Auth::user()->shopId)->where('openingStatus',0)->where('shopTypeId',$shopTypeId)->exists()){
            $productEntryHave = true;
        }
        return [
            'purchaseProductList' => $purchaseProductList,
            'productBrandList' => $productBrandList,
            'productEntryHave' => $productEntryHave,
            'purchaseTypeList' => $purchaseTypeList
        ];
    }
    

    public function purchaseProductListOpening()
    {
        
        $shopTypeId = Auth::user()->shopTypeId;
        $purchaseProductList = PurchaseProductEntryTmp::with('productName','unitName')->where('openingStatus',1)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->latest()->get();
        $productBrandList = ProductBrandEntry::where('shopTypeId',$shopTypeId)->get();
        $purchaseTypeList = PurchaseType::get();
        $productEntryHave = false;

        if(PurchaseProductEntryTmp::where('shopId',Auth::user()->shopId)->where('openingStatus',1)->where('shopTypeId',$shopTypeId)->exists()){
            $productEntryHave = true;
        }
        return [
            'purchaseProductList' => $purchaseProductList,
            'productBrandList' => $productBrandList,
            'productEntryHave' => $productEntryHave,
            'purchaseTypeList' => $purchaseTypeList
        ];
    }

    public function getPurchaseProductList()
    {
        $purchaseProductList = ProductName::where('productNameId',17)->get();
        return ['purchaseProductList' => $purchaseProductList];
    }

    public function totalPurchaseValue($purchaseInvoiceNo)
    {
        $shopTypeId = Auth::user()->shopTypeId;
        if(PurchaseProductEntry::where('purchaseInvoiceNo',$purchaseInvoiceNo)->where('openingStatus',0)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->exists()){
        $purchaseProductList = PurchaseProductEntry::where('purchaseInvoiceNo',$purchaseInvoiceNo)->where('openingStatus',0)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->get();
        $have = 1;
    }else{
            $purchaseProductList = '';
            $have = 0;
        }
        return [
            'purchaseProductList' => $purchaseProductList,
            'have' => $have,
        ];
    }

    public function totalPurchaseValueTmp($purchaseInvoiceNo)
    {
        $shopTypeId = Auth::user()->shopTypeId;
        if(PurchaseProductEntryTmp::where('purchaseInvoiceNo',$purchaseInvoiceNo)->where('openingStatus',0)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->exists()){
        $purchaseProductList = PurchaseProductEntryTmp::where('purchaseInvoiceNo',$purchaseInvoiceNo)->where('openingStatus',0)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->get();
        $have = 1;
    }else{
            $purchaseProductList = '';
            $have = 0;
        }
        return [
            'purchaseProductList' => $purchaseProductList,
            'have' => $have,
        ];
    }

    public function totalPurchaseValueOpening($purchaseInvoiceNo)
    {
        $shopTypeId = Auth::user()->shopTypeId;
        if(PurchaseProductEntryTmp::where('purchaseInvoiceNo',$purchaseInvoiceNo)->where('openingStatus',1)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->exists()){
        $purchaseProductList = PurchaseProductEntryTmp::where('purchaseInvoiceNo',$purchaseInvoiceNo)->where('openingStatus',1)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->get();
        $have = 1;
    }else{
            $purchaseProductList = '';
            $have = 0;
        }
        return [
            'purchaseProductList' => $purchaseProductList,
            'have' => $have,
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

    
    
    
    public function deleteInvoiceTmpItems($openingStatus,$invoice)
    {
        PurchaseProductUnitInfoTmp::where('openingStatus',$openingStatus)->where('purchaseInvoiceNo',$invoice)->where('shopId',Auth::user()->shopId)->where('createBy',Auth::user()->id)->delete();
        PurchaseProductEntryTmp::where('openingStatus',$openingStatus)->where('purchaseInvoiceNo',$invoice)->where('shopId',Auth::user()->shopId)->where('createBy',Auth::user()->id)->delete();
    }
    
    
    
    public function store(Request $request)
    {

          $this->validate($request, [
              'productSupplierId' => 'required',
          ],
          [
             'productSupplierId.required' => 'Select Product Supplier Name',
          ]);

          if($request->openingPurchaseRepurchase==1){
          $opening1 = AddProductSupplierEntry::where('productSupplierId',$request->productSupplierId)->where('shopId',Auth::user()->shopId)->first()->openingStatus;
          if($opening1==1){
            $openingPurchaseRepurchase = 0;
          }
          else if($opening1==0){
            $openingPurchaseRepurchase = 1;
          }
          
          }
          else if($request->openingPurchaseRepurchase==2){
            $openingPurchaseRepurchase = 2;
          }

          $this->productEntryInvoiceSubmit(0,$request->purchaseInvoiceNo);
          $this->deleteInvoiceTmpItems(0,$request->purchaseInvoiceNo);
          


          $purchaseType = $request->purchaseType;

          $shopTypeId = Auth::user()->shopTypeId;

          $purchaseInvoice = new PurchaseInvoice();
          $purchaseInvoice->purchaseDate = $request->purchaseDate;
          $purchaseInvoice->purchaseInvoiceNo = $request->purchaseInvoiceNo;
          $purchaseInvoice->productSupplierId = $request->productSupplierId;
          $purchaseInvoice->purchaseType = $purchaseType;
          $purchaseInvoice->totalPurchaseValue = $request->totalPurchaseValue;
          $purchaseInvoice->carriageInward = $request->carriageInward;
          $purchaseInvoice->totalAmount = $request->totalAmount;
          $purchaseInvoice->discount = $request->discount;
          $purchaseInvoice->supplierPayable = $request->supplierPayable;
          $purchaseInvoice->otherCost = $request->otherCost;
          $purchaseInvoice->damageAndWarranty = $request->damageAndWarranty;
          $purchaseInvoice->totalProductCost = $request->totalProductCost;
          $purchaseInvoice->openingPurchaseRepurchase = $openingPurchaseRepurchase;
          



          $purchaseInvoice->currentPayable = $request->currentPayable;
          $purchaseInvoice->cash = $request->currentPaidAmount;
          $purchaseInvoice->bank = $request->bankAmount;
          $purchaseInvoice->currentDue = $request->currentDue;
          $purchaseInvoice->shopId = Auth::user()->shopId;
          $purchaseInvoice->shopTypeId = $shopTypeId;
          $purchaseInvoice->shopUserId = Auth::user()->id;
          $purchaseInvoice->createBy = Auth::User()->id;
          $purchaseInvoice->created_at = Carbon::now();
          $purchaseInvoice->save();

          SupplierPayment::insert([
            'purchaseInvoiceNo'=>  $request->purchaseInvoiceNo,
            'shopId'=> Auth::User()->shopId,
            'supplierId'=>  $request->productSupplierId,
            'due'=>$request->currentDue,
            'cashAmount'=>  $request->currentPaidAmount,
            'bankAmount'=>  $request->bankAmount,
            'receiverbankTypeEntryId'=>  $request->receiverbankTypeEntryId,
            'receiverBankName'=>  $request->receiverBankName,
            'receiverAcNo'=>  $request->receiverAcNo,
            'receiverAcName'=>  $request->receiverAcName,
            'receiverBranchName'=>  $request->receiverBranchName,
            'receiverMobileAcNo'=>  $request->receiverMobileAcNo,
            'receiverTrxNo'=>  $request->receiverTrxNo,
            'senderbankTypeEntryId'=>  $request->senderbankTypeEntryId,
            'senderbankEntryId'=>  $request->senderbankEntryId,
            'senderbankAccountId'=>  $request->senderbankAccountId,
            'senderbranchName'=>  $request->senderbranchName,
            'senderAccNo'=>  $request->senderAccNo,
        ]);

            if (PurchaseProductTotalQuantity::where('productSupplierId',$request->productSupplierId)->exists()) {
                $productInfo = PurchaseProductTotalQuantity::where('productSupplierId',$request->productSupplierId)->latest()->first();
                $totalQuantity = $productInfo->totalQuantity + (float)($request->totalProductQuantity);
                $totalPrice = $productInfo->totalPrice + (float)($request->supplierPayable);

                PurchaseProductTotalQuantity::where('productSupplierId',$request->productSupplierId)->update([
                    'totalQuantity' => $totalQuantity,
                    'totalPrice' => $totalPrice,
                    'updateBy' => Auth::User()->id,
                ]);
            }
            else {
                PurchaseProductTotalQuantity::insert([
                    'productSupplierId' => $request->productSupplierId,
                    'totalQuantity' => $request->totalProductQuantity,
                    'totalPrice' => $request->supplierPayable,
                    'shopId' =>Auth::user()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
                ]);
            }
            
        

        //  --------------------------------------------------------------------
        //  ------------------  MRP price setup --------------------------------
        
            
        $purchaseProductInfos = PurchaseProductEntry::where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->where('shopId',Auth::user()->shopId)->get();
        
        foreach($purchaseProductInfos as $purchaseInfo){
        
        $alertQuantity = PurchaseProductDetails::where('purchaseProductId',$purchaseInfo->purchaseProductId)->first();


      if(ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->exists()){
        $priceTypeId = ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->first()->priceTypeId;
    }else{
        $priceTypeId = ShopPriceTypeConfigure::orderBy('id','ASC')->first()->priceTypeId;
      }
      $priceTypeInfo = SalesPriceType::where('salesPriceTypeId',$priceTypeId)->first();

      $salesPrice = $priceTypeInfo->salesPriceTypeField;


      if(SalesProductPriceEntry::
       where('productId', $purchaseInfo->productId)
        ->where('brandId', $purchaseInfo->brandId)
        ->where('colorId', $purchaseInfo->colorId)
        ->where('sizeId', $purchaseInfo->sizeId)
        ->where('shopId', Auth::User()->shopId)
      ->exists()){

        $salesProductInfo = SalesProductPriceEntry::
        where('productId', $purchaseInfo->productId)
        ->where('brandId', $purchaseInfo->brandId)
        ->where('colorId', $purchaseInfo->colorId)
        ->where('sizeId', $purchaseInfo->sizeId)
        ->where('shopId', Auth::User()->shopId)
      ->first();
      $lastInsertId = $salesProductInfo->salesProductPriceEntryId;
      SalesProductPriceEntry::
        where('productId', $purchaseInfo->productId)
        ->where('brandId', $purchaseInfo->brandId)
        ->where('colorId', $purchaseInfo->colorId)
        ->where('sizeId', $purchaseInfo->sizeId)
        ->where('unitId', $purchaseInfo->unitId)
        ->where('shopId', Auth::User()->shopId)
      ->update([
        $salesPrice => $purchaseInfo->salePrice,
        'quantity' => $purchaseInfo->quantity,
      ]);
      SalesProductPriceEntryHistory::insertGetId([
        'salesProductPriceEntryId' => $lastInsertId,
        'purchaseProductId' => $purchaseInfo->purchaseProductId,
        'productId' => $purchaseInfo->productId,
        'brandId' => $purchaseInfo->brandId,
        'colorId' => $purchaseInfo->colorId,
        'sizeId' => $purchaseInfo->sizeId,
        'unitId' => $purchaseInfo->unitId,
        $salesPrice => $purchaseInfo->salePrice,
        
        'quantity' => $purchaseInfo->quantity,
        'shopId' => Auth::User()->shopId,
        'shopTypeId' => $shopTypeId,
        'createBy' => Auth::User()->id,
        'created_at' => Carbon::now(),
   ]);

      }else{
        $lastInsertId = SalesProductPriceEntry::insertGetId([
             'purchaseProductId' => $purchaseInfo->purchaseProductId,
             'productId' => $purchaseInfo->productId,
             'brandId' => $purchaseInfo->brandId,
             'colorId' => $purchaseInfo->colorId,
             'sizeId' => $purchaseInfo->sizeId,
             'unitId' => $purchaseInfo->unitId,
             $salesPrice => $purchaseInfo->salePrice,
             
             'quantity' => $purchaseInfo->quantity,
             'shopId' => Auth::User()->shopId,
             'shopTypeId' => $shopTypeId,
             'createBy' => Auth::User()->id,
             'created_at' => Carbon::now(),
        ]);
        SalesProductPriceEntryHistory::insertGetId([
            'salesProductPriceEntryId' => $lastInsertId,
             'purchaseProductId' => $purchaseInfo->purchaseProductId,
             'productId' => $purchaseInfo->productId,
             'brandId' => $purchaseInfo->brandId,
             'colorId' => $purchaseInfo->colorId,
             'sizeId' => $purchaseInfo->sizeId,
             'unitId' => $purchaseInfo->unitId,
             $salesPrice => $purchaseInfo->salePrice,
             
             'quantity' => $purchaseInfo->quantity,
             'shopId' => Auth::User()->shopId,
             'shopTypeId' => $shopTypeId,
             'createBy' => Auth::User()->id,
             'created_at' => Carbon::now(),
        ]);
        }
       $data=PurchaseProductEntry::where('purchaseProductId',$purchaseInfo->purchaseProductId)->first();

        PurchaseProductEntry::where('purchaseProductId',$purchaseInfo->purchaseProductId)->update([
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
          SalesProductPriceEntryHistory::where('salesProductPriceEntryId',$lastInsertId)->update([
              'alertQuantity' => $alertQuantity->quantityNoti,
          ]);
        }

        ProductName::where('productNameId',$request->productId)->update([
            'priceStatus' => 2,
        ]);
        }
        
        //  ------------------ /MRP price setup --------------------------------
        //  --------------------------------------------------------------------






        //  --------------------------------------------------------------------
        //  ------------------ voucher & statement information -----------------
        //  --------------------------------------------------------------------


        
        $companyId = $request->productSupplierId;
        $referance = 'Pro-Supp-'.$companyId;
        $title = 'Product purchase from supplier';
        $companyAccountCode = AddProductSupplierEntry::where('shopId',Auth::user()->shopId)->where('productSupplierId',$request->productSupplierId)->first()->accountCode;
        $companyAccountHeadCode = ChartOfAccountRegister::where('shopId',Auth::user()->shopId)->where('headCode',$companyAccountCode)->first()->pre_code;
        
        $rendomNumber = substr(time(),0,12);
        
        
        // ==========================================================

 
        if(StatementInformation::where('shopId',Auth::user()->shopId)
        ->where('advanceSecurityDepositPrepayment',0)
        ->where('accountCode',$companyAccountCode)->exists()){
            $balanceAmountDb = StatementInformation::where('shopId',Auth::user()->shopId)
            ->where('advanceSecurityDepositPrepayment',0)
            ->where('accountCode',$companyAccountCode)->orderBy('id','DESC')->first()->balanceAmount;
            
        }
        else{
            $balanceAmountDb = 0;
        }

        $balanceAmount = $balanceAmountDb-$request->totalProductCost;

        StatementInformation::insert([
            'shopId' => Auth::user()->shopId,
            'rendomNumber' => $rendomNumber,
            'type' => 0,
            'accountHeadCode' => $companyAccountHeadCode,
            'accountCode' => $companyAccountCode,
            'title' => $title,
            'referance' => $referance,
            'paymentType' => 0,
            'dueAmount' => $request->currentDue,
            'creditAmount' => $request->totalProductCost,
            'balanceAmount' => $balanceAmount,
            'note' => $request->note,
            'createBy' => Auth::user()->id,
            'shopId' => Auth::user()->shopId,
            'created_at' => Carbon::now(),
        ]);





        // ==========================================================
        // =========== #1  Journal Voucher Information ==============
        // ==========================================================
 
          

                $voucherUniqueId = time();
                $day = date('d');
                $month = date('m');
                $year = date('Y');
                $voucherDate = date('Y-m-d');
                
                 
                
                $particular = $title.'.';
                    $voucherAmount = ($request->totalPurchaseValue-$request->discount);
                  
                        $headCode1 = AccountSetup::where('placementType','1')->where('headName','1')->first()->headCode;
                        $headOfAccounts = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
                    
                        $voucherType = 6;
                        $headCode2 = AddProductSupplierEntry::where('productSupplierId',$request->productSupplierId)->first()->accountCode;
                        $headCode22 = AccountSetup::where('placementType','1')->where('headName','7')->first()->headCode;
        
        
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
                          'voucherAmount' => $voucherAmount-$request->discount,
                          'randId' => '0',
        
                          'particular' => $particular,
                          'day' => $day,
                          'month' => $month,
                          'year' => $year,
                          'createBy' => Auth::user()->id,
                          'created_at' => Carbon::now(),
                      ]);
                
                      if($request->discount){
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
                          'accountsCode' => $headCode22,
                          'type' => 2,
                          'voucherAmount' => $request->discount,
                          'randId' => '0',
        
                          'particular' => $particular,
                          'day' => $day,
                          'month' => $month,
                          'year' => $year,
                          'createBy' => Auth::user()->id,
                          'created_at' => Carbon::now(),
                      ]);
                    }

        // ==========================================================
        // ============// #1 Journal Voucher Information ============
        // ==========================================================
        





        // ==========================================================
        // =========== #2  Journal Voucher Information ==============
        // ==========================================================
 
            // if($request->paymentType>0 && $request->paymentType<3){

                $voucherUniqueId = time().'1';
                $day = date('d');
                $month = date('m');
                $year = date('Y');
                $voucherDate = date('Y-m-d');
                
                 
                
                $particular = $title.'.';
                    $voucherAmount = ($request->carriageInward+$request->otherCost+$request->damageAndWarranty);
                  
                        $headCode1 = AccountSetup::where('placementType','1')->where('headName','2')->first()->headCode;
                        $headCode11 = AccountSetup::where('placementType','1')->where('headName','3')->first()->headCode;
                        $headCode111 = AccountSetup::where('placementType','1')->where('headName','4')->first()->headCode;
                        $headOfAccounts1 = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
                        $headOfAccounts11 = ChartOfAccountRegister::where('headCode',$headCode11)->first()->pre_code;
                        $headOfAccounts111 = ChartOfAccountRegister::where('headCode',$headCode111)->first()->pre_code;
                    
                        $voucherType = 6;
                        $headCode2 = AccountSetup::where('placementType','1')->where('headName','6')->first()->headCode;
                        $headCode22 = AccountSetup::where('placementType','1')->where('headName','5')->first()->headCode;
                        $headCode222 = AccountSetup::where('placementType','1')->where('headName','83')->first()->headCode;
                        $headOfAccounts2 = ChartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                        $headOfAccounts22 = ChartOfAccountRegister::where('headCode',$headCode22)->first()->pre_code;
                        $headOfAccounts222 = ChartOfAccountRegister::where('headCode',$headCode222)->first()->pre_code;
                    
        
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
        
                if($voucherAmount){
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
                    }

                    //   ----------- Debit Voucher 
                    if($request->carriageInward){
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
                          'voucherAmount' => $request->carriageInward,
                          
                          'randId' => '0',
        
                          'particular' => $particular,
                          'day' => $day,
                          'month' => $month,
                          'year' => $year,
                          'createBy' => Auth::user()->id,
                          'created_at' => Carbon::now(),
                      ]);
                    }
                
                      if($request->otherCost){
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
                          'voucherAmount' => $request->otherCost,
                          'randId' => '0',
        
                          'particular' => $particular,
                          'day' => $day,
                          'month' => $month,
                          'year' => $year,
                          'createBy' => Auth::user()->id,
                          'created_at' => Carbon::now(),
                      ]);
                    }
                
                      if($request->damageAndWarranty){
                        
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
        
                          'accountsHeadCode' => $headOfAccounts111,
                          'accountsCode' => $headCode111,
                          'type' => 1,
                          'voucherAmount' => $request->damageAndWarranty,
                          'randId' => '0',
        
                          'particular' => $particular,
                          'day' => $day,
                          'month' => $month,
                          'year' => $year,
                          'createBy' => Auth::user()->id,
                          'created_at' => Carbon::now(),
                      ]);
                    }

                      //   ----------- / Debit Voucher

                    //   ----------- Credit Voucher 
                      
                    if($request->damageAndWarranty){
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
                          'voucherAmount' => $request->damageAndWarranty,
                          
                          'randId' => '0',
        
                          'particular' => $particular,
                          'day' => $day,
                          'month' => $month,
                          'year' => $year,
                          'createBy' => Auth::user()->id,
                          'created_at' => Carbon::now(),
                      ]);
                    }
                
                      if($request->otherCost){
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
        
                          'accountsHeadCode' => $headOfAccounts22,
                          'accountsCode' => $headCode22,
                          'type' => 2,
                          'voucherAmount' => $request->otherCost,
                          'randId' => '0',
        
                          'particular' => $particular,
                          'day' => $day,
                          'month' => $month,
                          'year' => $year,
                          'createBy' => Auth::user()->id,
                          'created_at' => Carbon::now(),
                      ]);
                    }
                
                      if($request->carriageInward){
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
        
                          'accountsHeadCode' => $headOfAccounts222,
                          'accountsCode' => $headCode222,
                          'type' => 2,
                          'voucherAmount' => $request->carriageInward,
                          'randId' => '0',
        
                          'particular' => $particular,
                          'day' => $day,
                          'month' => $month,
                          'year' => $year,
                          'createBy' => Auth::user()->id,
                          'created_at' => Carbon::now(),
                      ]);
                    }

                      //   ----------- / Credit Voucher

        // ==========================================================
        // ============// #2 Journal Voucher Information ============
        // ==========================================================
        





        // ==========================================================
        // =========== #3  Journal Voucher Information ==============
        // ==========================================================
 

                $voucherUniqueId = time().'3';
                $day = date('d');
                $month = date('m');
                $year = date('Y');
                $voucherDate = date('Y-m-d');
                
                 
                
                $particular = $title.'.';
                $voucherAmount = ($request->totalPurchaseValue-$request->discount);
                  
                        $headCode1 = AccountSetup::where('placementType','1')->where('headName','81')->first()->headCode;
                        $headOfAccounts1 = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;

                        $voucherType = 6;

                        $headCode2 = AccountSetup::where('placementType','1')->where('headName','1')->first()->headCode;
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
        // ============// #3 Journal Voucher Information ============
        // ==========================================================
        













        
        
        // ===================== Payment type condition =======================
        
        if($request->currentPaidAmount>0){
        // if($request->paymentType==1 || $request->paymentType==2){

        if(StatementInformation::where('shopId',Auth::user()->shopId)
        ->where('advanceSecurityDepositPrepayment',0)
        ->where('accountCode',$companyAccountCode)->exists()){
            $balanceAmountDb = StatementInformation::where('shopId',Auth::user()->shopId)
            ->where('advanceSecurityDepositPrepayment',0)
            ->where('accountCode',$companyAccountCode)
            ->orderBy('id','DESC')->first()->balanceAmount;
            
        }
        else{
            $balanceAmountDb = 0;
        }


        // if($request->paymentType==1){
            $balanceAmount = $balanceAmountDb+$request->currentPaidAmount;
            $dr_cr_amount = $request->currentPaidAmount;
            $expenseTitle = 'Cash Payment';
            $title = 'Product supplier cash payment';
        // }else if($request->paymentType==2){
        //     $balanceAmount = $balanceAmountDb+$request->bankAmount;
        //     $expenseTitle = 'Bank Payment';
        //     $dr_cr_amount = $request->bankAmount;
        // }
        
        StatementInformation::insert([
            'shopId' => Auth::user()->shopId,
            'rendomNumber' => $rendomNumber,
            'type' => 1,
            'accountHeadCode' => $companyAccountHeadCode,
            'accountCode' => $companyAccountCode,
            'title' => $title,
            'referance' => $referance,
            'paymentType' => 1, //cash
            'cashAmount' => $request->currentPaidAmount,
            'personName' => $request->personName,
            'personMobileNo' => $request->personMobileNo,
            'bankAmount' => 0,
            'bankTypeEntryId' => $request->bankTypeEntryId,
            'bankEntryId' => $request->bankEntryId,
            'bankAccountId' => $request->bankAccountId,
            'dueAmount' => $request->currentDue,
            'debitAmount' => $dr_cr_amount,
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

                $voucherUniqueId = time().'4';
                $day = date('d');
                $month = date('m');
                $year = date('Y');
                $voucherDate = date('Y-m-d');
                
                 
                
                $particular = $title.'.';
                // if($request->paymentType==1){
                    $voucherAmount = $request->currentPaidAmount;
                // }else if($request->paymentType==2){
                //     $voucherAmount = $request->bankAmount;
                // }
                
                  
                        $headCode1 = AddProductSupplierEntry::where('productSupplierId',$request->productSupplierId)->first()->accountCode;
                        $headOfAccounts = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
                    
                    // if($request->paymentType == 1)
                    // {
                        $voucherType = 1;
                        $headCode2 = AccountSetup::where('placementType','9')->where('headName','100')->first()->headCode;
                    // }
                    // else if($request->paymentType == 2)
                    // {
                    //     $voucherType = 3;
                    //     $headCode2 = ShopAddBankEntry::where('bankId',$request->bankAccountId)->first()->accountCode;
                    // }
        
        
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

                    $debitHeadCodeForBalance = 0;
                    $debitCodeForBalance = 0;
                    $creditHeadCodeForBalance = chartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                    $creditCodeForBalance = $headCode2;
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
                    
                    
                    if($voucherType == 1){
        
                        if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->id)
                        ->where('type',2)
                        ->orderBy('id','DESC')
                        ->exists()){
                            $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->id)
                        ->where('shopId',Auth::user()->shopId)
                        ->where('type',2)
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
                            'type' => 2,
                            'cash' => $voucherAmount,
                            'total' => $last_rp_total,
          
                            'createBy' => Auth::user()->id,
                            'created_at' => Carbon::now(),
                        ]);
        
                    }
                    else if($voucherType == 2){
        
        
                        if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->shopId)
                        ->where('type',1)
                        ->orderBy('id','DESC')
                        ->exists()){
                            $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->shopId)
                        ->where('type',1)
                        ->orderBy('id','DESC')
                        ->first()->total;
                        }else{
                            $last_amount = 0;
                        }
                        $last_rp_total = $last_amount+$request->currentPayable;
                        
                        ReceivePaymentStatement::insert([
                            'shopId' => Auth::user()->shopId,
                            'branchId' => 0,

                            'voucherType' => $voucherType,
                            'voucherDate' => $voucherDate,
                            'voucherId' => $last_inserted_voucher_id,
                            'voucherUniqueId' => $voucherUniqueId,
                            'accountHeadCode' => $headOfAccounts,
                            'accountCode' => $headCode2,
                            'type' => 1,
                            'cash' => $voucherAmount,
                            'total' => $last_rp_total,
          
                            'createBy' => Auth::user()->id,
                            'created_at' => Carbon::now(),
                        ]);
        
                    }
                    else if($voucherType == 3){
        
        
                        if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->id)
                        ->where('type',2)
                        ->orderBy('id','DESC')
                        ->exists()){
                            $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->id)
                        ->where('type',2)
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
                            'type' => 2,
                            'bank' => $voucherAmount,
                            'total' => $last_rp_total,
          
                            'createBy' => Auth::user()->id,
                            'created_at' => Carbon::now(),
                        ]);
                        
                    }
                    else if($voucherType == 4){
        
                        if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->id)
                        ->where('type',1)
                        ->orderBy('id','DESC')
                        ->exists()){
                            $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->shopId)
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
                            'accountCode' => $headCode2,
                            'type' => 1,
                            'bank' => $voucherAmount,
                            'total' => $last_rp_total,
          
                            'createBy' => Auth::user()->id,
                            'created_at' => Carbon::now(),
                        ]);
        
                    }
                    }
                    
        
                    //   ===================================================
                    //   ========================= receive payment statement 
                    //   ===================================================
                    
                    
                    
                    // ==========================================================
                    // ==================== Voucher Information =================
                    // ==========================================================

                    
                } // payment type condition end
        
        
        
                // ===================== Payment type condition =======================
        
        if($request->bankAmount>0){
        // if($request->paymentType==1 || $request->paymentType==2){

        if(StatementInformation::where('shopId',Auth::user()->shopId)
        ->where('advanceSecurityDepositPrepayment',0)
        ->where('accountCode',$companyAccountCode)->exists()){
            $balanceAmountDb = StatementInformation::where('shopId',Auth::user()->shopId)
            ->where('advanceSecurityDepositPrepayment',0)
            ->where('accountCode',$companyAccountCode)
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
            $balanceAmount = $balanceAmountDb+$request->bankAmount;
            $expenseTitle = 'Bank Payment';
            $title = 'Product supplier bank payment';
            $dr_cr_amount = $request->bankAmount;
        // }
        
        StatementInformation::insert([
            'shopId' => Auth::user()->shopId,
            'rendomNumber' => $rendomNumber,
            'type' => 1,
            'accountHeadCode' => $companyAccountHeadCode,
            'accountCode' => $companyAccountCode,
            'title' => $title,
            'referance' => $referance,
            'paymentType' => 2, //Bank
            'cashAmount' => 0,
            'personName' => $request->personName,
            'personMobileNo' => $request->personMobileNo,
            'bankAmount' => $request->bankAmount,
            'bankTypeEntryId' => $request->bankTypeEntryId,
            'bankEntryId' => $request->bankEntryId,
            'bankAccountId' => $request->bankAccountId,
            'dueAmount' => $request->currentDue,
            'debitAmount' => $dr_cr_amount,
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

                $voucherUniqueId = time().'5';
                $day = date('d');
                $month = date('m');
                $year = date('Y');
                $voucherDate = date('Y-m-d');
                
                    
                
                $particular = $title.'.';
                // if($request->paymentType==1){
                    // $voucherAmount = $request->currentPaidAmount;
                // }else if($request->paymentType==2){
                    $voucherAmount = $request->bankAmount;
                // }
                
                  
                        $headCode1 = AddProductSupplierEntry::where('productSupplierId',$request->productSupplierId)->first()->accountCode;
                        $headOfAccounts = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
                    
                    // if($request->paymentType == 1)
                    // {
                    //     $voucherType = 1;
                    //     $headCode2 = AccountSetup::where('placementType','9')->where('headName','100')->first()->headCode;
                    // }
                    // else if($request->paymentType == 2)
                    // {
                        $voucherType = 3;
                        $headCode2 = ShopAddBankEntry::where('bankId',$request->senderbankAccountId)->first()->accountCode;
                    // }
        
        
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

                                  $debitHeadCodeForBalance = 0;
                                  $debitCodeForBalance = 0;
                                  $creditHeadCodeForBalance = chartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                                  $creditCodeForBalance = $headCode2;
                                  // balanceUpdate(headCode1,code1,headCode2,code2,dr,cr,balance);
                                  chartOfAccountController::balanceUpdate($debitHeadCodeForBalance,
                                  $debitCodeForBalance,
                                  $creditHeadCodeForBalance,
                                  $creditCodeForBalance,
                                  $request->voucherAmount,
                                  $request->voucherAmount,
                                  $request->voucherAmount
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
                    
                    
                    if($voucherType == 1){
        
                        if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->id)
                        ->where('type',2)
                        ->orderBy('id','DESC')
                        ->exists()){
                            $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->id)
                        ->where('type',2)
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
                            'type' => 2,
                            'cash' => $voucherAmount,
                            'total' => $last_rp_total,
          
                            'createBy' => Auth::user()->id,
                            'created_at' => Carbon::now(),
                        ]);
        
                    }
                    else if($voucherType == 2){
        
        
                        if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->id)
                        ->where('type',1)
                        ->orderBy('id','DESC')
                        ->exists()){
                            $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->shopId)
                        ->where('type',1)
                        ->orderBy('id','DESC')
                        ->first()->total;
                        }else{
                            $last_amount = 0;
                        }
                        $last_rp_total = $last_amount+$request->currentPayable;
                        
                        ReceivePaymentStatement::insert([
                            'shopId' => Auth::user()->shopId,
                            'branchId' => 0,

                            'voucherType' => $voucherType,
                            'voucherDate' => $voucherDate,
                            'voucherId' => $last_inserted_voucher_id,
                            'voucherUniqueId' => $voucherUniqueId,
                            'accountHeadCode' => $headOfAccounts,
                            'accountCode' => $headCode2,
                            'type' => 1,
                            'cash' => $voucherAmount,
                            'total' => $last_rp_total,
          
                            'createBy' => Auth::user()->id,
                            'created_at' => Carbon::now(),
                        ]);
        
                    }
                    else if($voucherType == 3){
        
        
                        if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->shopId)
                        ->where('type',2)
                        ->orderBy('id','DESC')
                        ->exists()){
                            $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->id)
                        ->where('type',2)
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
                            'type' => 2,
                            'bank' => $voucherAmount,
                            'total' => $last_rp_total,
          
                            'createBy' => Auth::user()->id,
                            'created_at' => Carbon::now(),
                        ]);
                        
                    }
                    else if($voucherType == 4){
        
                        if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->id)
                        ->where('type',1)
                        ->orderBy('id','DESC')
                        ->exists()){
                            $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->shopId)
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
                            'accountCode' => $headCode2,
                            'type' => 1,
                            'bank' => $voucherAmount,
                            'total' => $last_rp_total,
          
                            'createBy' => Auth::user()->id,
                            'created_at' => Carbon::now(),
                        ]);
        
                    }
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

    }

    public function repurchaseProductInfo(Request $request){

        $datas = PurchaseProductEntry::query();
        $datas = $datas->where('shopId',Auth::user()->shopId);
        $datas = $datas->where('productId',$request->productId);
        $datas = $datas->where('brandId',$request->brandId);
        $datas = $datas->where('countryId',$request->countryId);

        if($request->unitId){
            $datas = $datas->where('unitId',$request->unitId);
        }

        if($request->purchaseType){
            $datas = $datas->where('purchaseType',$request->purchaseType);
        }

        if($request->colorId){
            $datas = $datas->where('colorId',$request->colorId);
        }

        if($request->sizeId){
            $datas = $datas->where('sizeId',$request->sizeId);
        }
        $datas = $datas->orderBy('purchaseProductId','DESC');
        $final = $datas->first();
         

        if($datas->exists()){
            $repurchase = 1;
        }else{
            $repurchase = 0;
        }

        $unitDistincts = PurchaseProductUnitInfo::distinct()->where('shopId',Auth::user()->shopId)->where('productId',$request->productId)->get('unitId');
        
        $count = count($unitDistincts);
        $unitIds = '0';
        if($count){
            $unitIds = '';
        for($i=0;$i<$count;$i++){
            if($i==($count-1)){
                $unitIds .= $unitDistincts[$i]->unitId;
            }else{
                $unitIds .= $unitDistincts[$i]->unitId.',';
            }
        }
        }

        $unitNameShows =  UniteEntry::whereRaw("uniteEntryId IN($unitIds)")->get();
        
        return [
            'productInfo'=> $final,
            'repurchase'=> $repurchase,
            'unitNameShows'=> $unitNameShows,
        ];
    }

    public function repurchaseProductInfoUnit(Request $request){

        $datas = PurchaseProductEntry::query();
        $datas = $datas->where('shopId',Auth::user()->shopId);
        $datas = $datas->where('productId',$request->productId);
        $datas = $datas->where('brandId',$request->brandId);
        $datas = $datas->where('countryId',$request->countryId);
        $datas = $datas->where('purchaseType',$request->purchaseType);
        $datas = $datas->where('colorId',$request->colorId);
        $datas = $datas->where('sizeId',$request->sizeId);
        $datas = $datas->orderBy('purchaseProductId','DESC');
        $final = $datas->first();
         

        if($datas->exists()){
            $repurchase = 1;
        }else{
            $repurchase = 0;
        }


        //-------------------------------------
        $purchaseUnitPrice = '';
        $salesUnitPrice = '';
        if(PurchaseProductUnitInfo::where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->exists()){
        $lastPriceType = PurchaseProductUnitInfo::where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first()->priceTypeId;
        
        $unitPriceInfo = PurchaseProductUnitInfo::where('shopId',Auth::user()->shopId)->where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('unitId',$request->unitId)->first();
        $purchaseUnitPrice = $unitPriceInfo->purchaseUnitPrice;
        $salesUnitPrice = $unitPriceInfo->salesUnitPrice;
        }
        // ----------------------------------------
        return [
            'productInfo'=> $final,
            'purchaseUnitPrice'=> $purchaseUnitPrice,
            'salesUnitPrice'=> $salesUnitPrice,
        ];
    }

    

    public function repurchaseProductOpeningUnit(Request $request){

        $datas = PurchaseProductEntry::query();
        $datas = $datas->where('shopId',Auth::user()->shopId);
        $datas = $datas->where('productId',$request->productId);
        $datas = $datas->where('brandId',$request->brandId);
        $datas = $datas->where('countryId',$request->countryId);
        $datas = $datas->where('purchaseType',$request->purchaseType);
        $datas = $datas->where('colorId',$request->colorId);
        $datas = $datas->where('sizeId',$request->sizeId);
        $datas = $datas->orderBy('purchaseProductId','DESC');
        $final = $datas->first();


        $opening = $datas->where('openingStatus',0);
        if($opening->exists()){

            return [
                'productInfo'=> [],
                'purchaseUnitPrice'=> 0,
                'salesUnitPrice'=> 0,
                'purchase'=> 1,
            ];
        }else{
         

        if($datas->exists()){
            $repurchase = 1;
        }else{
            $repurchase = 0;
        }


        //-------------------------------------
        $purchaseUnitPrice = '';
        $salesUnitPrice = '';
        if(PurchaseProductUnitInfo::where('productId',$request->productId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->exists()){
        $lastPriceType = PurchaseProductUnitInfo::where('productId',$request->productId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first()->priceTypeId;
        
        $unitPriceInfo = PurchaseProductUnitInfo::where('shopId',Auth::user()->shopId)->where('productId',$request->productId)->where('unitId',$request->unitId)->first();
        $purchaseUnitPrice = $unitPriceInfo->purchaseUnitPrice;
        $salesUnitPrice = $unitPriceInfo->salesUnitPrice;
        }
        // ----------------------------------------
        return [
            'productInfo'=> $final,
            'purchaseUnitPrice'=> $purchaseUnitPrice,
            'salesUnitPrice'=> $salesUnitPrice,
            'purchase'=> 0,
        ];
    }
    }

    
    
    public function purchaseInvoiceOpening(Request $request)
    {

        //   $this->validate($request, [
        //       'productSupplierId' => 'required',
        //   ],
        //   [
        //      'productSupplierId.required' => 'Select Product Supplier  Name',
        //   ]);

        //   if($request->openingPurchaseRepurchase==1){
        //   $opening1 = AddProductSupplierEntry::where('productSupplierId',$request->productSupplierId)->where('shopId',Auth::user()->shopId)->first()->openingStatus;
        //   if($opening1==1){
        //     $openingPurchaseRepurchase = 0;
        //   }
        //   else if($opening1==0){
        //     $openingPurchaseRepurchase = 1;
        //   }
          
        //   }
        //   else if($request->openingPurchaseRepurchase==2){
        //     $openingPurchaseRepurchase = 2;
        //   }
          

          $this->productEntryInvoiceSubmit(1,$request->purchaseInvoiceNo);
          $this->deleteInvoiceTmpItems(1,$request->purchaseInvoiceNo);
          

          $purchaseType = 1;

          $shopTypeId = Auth::user()->shopTypeId;

          $purchaseInvoice = new PurchaseInvoice();
          $purchaseInvoice->purchaseDate = $request->purchaseDate;
          $purchaseInvoice->purchaseInvoiceNo = $request->purchaseInvoiceNo;
          $purchaseInvoice->productSupplierId = 0;
          $purchaseInvoice->purchaseType = $purchaseType;
          $purchaseInvoice->totalPurchaseValue = $request->totalPurchaseValue;
          $purchaseInvoice->carriageInward = $request->carriageInward;
          $purchaseInvoice->totalAmount = $request->totalAmount;
          $purchaseInvoice->discount = $request->discount;
          $purchaseInvoice->supplierPayable = $request->supplierPayable;
          $purchaseInvoice->otherCost = $request->otherCost;
          $purchaseInvoice->damageAndWarranty = $request->damageAndWarranty;
          $purchaseInvoice->totalProductCost = $request->totalProductCost;
          $purchaseInvoice->openingPurchaseRepurchase = 0;
          
          
          // if (PurchaseInvoice::where('productSupplierId',$request->productSupplierId)->where('shopId',Auth::user()->id)->where('shopTypeId',$shopTypeId)->exists()) {
          //     $previousPayableDue = PurchaseInvoice::where('productSupplierId',$request->productSupplierId)->where('shopId',Auth::user()->id)->where('shopTypeId',$shopTypeId)->latest()->first()->previousPayableDue;
          //       if ($request->currentPayable > $request->payable) {
          //         $previousPayable = $request->currentPayable - $request->payable;
          //         $totalPayableBill = $previousPayable + $previousPayableDue;
          //         $purchaseInvoice->previousPayableDue = $totalPayableBill;
          //       }
          // }
          // else {
          //     if ($request->currentPayable > $request->payable) {
          //       $previousPayable = $request->currentPayable - $request->payable;
          //       $purchaseInvoice->previousPayableDue = $previousPayable;
          //     }
          // }


          $purchaseInvoice->currentPayable = $request->currentPayable;
          $purchaseInvoice->cash = $request->currentPaidAmount;
          $purchaseInvoice->bank = $request->bankAmount;
          $purchaseInvoice->currentDue = $request->currentDue;
          // $purchaseInvoice->totalPayable = $request->payable;
          $purchaseInvoice->shopId = Auth::user()->shopId;
          $purchaseInvoice->shopTypeId = $shopTypeId;
          $purchaseInvoice->shopUserId = Auth::user()->id;
          $purchaseInvoice->createBy = Auth::User()->id;
          $purchaseInvoice->created_at = Carbon::now();
          $purchaseInvoice->save();

        //   SupplierPayment::insert([
        //     'purchaseInvoiceNo'=>  $request->purchaseInvoiceNo,
        //     'shopId'=> Auth::User()->shopId,
        //     'supplierId'=>  $request->productSupplierId,
        //     'due'=>$request->currentDue,
        //     'cashAmount'=>  $request->currentPaidAmount,
        //     'bankAmount'=>  $request->bankAmount,
        //     'receiverbankTypeEntryId'=>  $request->receiverbankTypeEntryId,
        //     'receiverBankName'=>  $request->receiverBankName,
        //     'receiverAcNo'=>  $request->receiverAcNo,
        //     'receiverAcName'=>  $request->receiverAcName,
        //     'receiverBranchName'=>  $request->receiverBranchName,
        //     'receiverMobileAcNo'=>  $request->receiverMobileAcNo,
        //     'receiverTrxNo'=>  $request->receiverTrxNo,
        //     'senderbankTypeEntryId'=>  $request->senderbankTypeEntryId,
        //     'senderbankEntryId'=>  $request->senderbankEntryId,
        //     'senderbankAccountId'=>  $request->senderbankAccountId,
        //     'senderbranchName'=>  $request->senderbranchName,
        //     'senderAccNo'=>  $request->senderAccNo,
        // ]);

            if (PurchaseProductTotalQuantity::where('productSupplierId',$request->productSupplierId)->exists()) {
                $productInfo = PurchaseProductTotalQuantity::where('productSupplierId',$request->productSupplierId)->latest()->first();
                $totalQuantity = $productInfo->totalQuantity + (float)($request->totalProductQuantity);
                $totalPrice = $productInfo->totalPrice + (float)($request->supplierPayable);

                PurchaseProductTotalQuantity::where('productSupplierId',$request->productSupplierId)->update([
                    'totalQuantity' => $totalQuantity,
                    'totalPrice' => $totalPrice,
                    'updateBy' => Auth::User()->id,
                ]);
            }
            else {
                PurchaseProductTotalQuantity::insert([
                    'productSupplierId' => $request->productSupplierId,
                    'totalQuantity' => $request->totalProductQuantity,
                    'totalPrice' => $request->supplierPayable,
                    'shopId' =>Auth::user()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
                ]);
            }
            
        

        //  --------------------------------------------------------------------
        //  ------------------  MRP price setup --------------------------------
        
            
        $purchaseProductInfos = PurchaseProductEntry::where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->get();
        

        // =============== price type setup
        if(ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->exists()){
            $priceTypeId = ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->first()->priceTypeId;
        }else{
            $priceTypeId = ShopPriceTypeConfigure::orderBy('id','ASC')->first()->priceTypeId;
          }
          $priceTypeInfo = SalesPriceType::where('salesPriceTypeId',$priceTypeId)->first();
    
          $salesPrice = $priceTypeInfo->salesPriceTypeField;
        // =============== /price type setup





        foreach($purchaseProductInfos as $purchaseInfo){
        
        $alertQuantity = PurchaseProductDetails::where('purchaseProductId',$purchaseInfo->purchaseProductId)->first();

        if(SalesProductPriceEntry::
           where('productId' ,$purchaseInfo->productId)
            ->where('brandId' ,$purchaseInfo->brandId)
            ->where('colorId' ,$purchaseInfo->colorId)
            ->where('shopId' ,Auth::user()->shopId)
            ->where('sizeId', $purchaseInfo->sizeId)->exists()){
                $sppeInfo = SalesProductPriceEntry::
                where('productId' ,$purchaseInfo->productId)
                 ->where('brandId' ,$purchaseInfo->brandId)
                 ->where('colorId' ,$purchaseInfo->colorId)
                 ->where('shopId' ,Auth::user()->shopId)
                 ->where('sizeId', $purchaseInfo->sizeId)->first();
                 $lastInsertId = $sppeInfo->salesProductPriceEntryId;

                SalesProductPriceEntry::
                where('productId' ,$purchaseInfo->productId)
            ->where('brandId' ,$purchaseInfo->brandId)
            ->where('colorId' ,$purchaseInfo->colorId)
            ->where('shopId' ,Auth::user()->shopId)
            ->where('sizeId', $purchaseInfo->sizeId)->update([
                $salesPrice => $purchaseInfo->salePrice,
                'updateBy' => Auth::User()->id,
                'updated_at' => Carbon::now(),
            ]);
            SalesProductPriceEntryHistory::insertGetId([
                'salesProductPriceEntryId' => $lastInsertId,
                'purchaseProductId' => $purchaseInfo->purchaseProductId,
                'productId' => $purchaseInfo->productId,
                'brandId' => $purchaseInfo->brandId,
                'colorId' => $purchaseInfo->colorId,
                'sizeId' => $purchaseInfo->sizeId,
                'unitId' => $purchaseInfo->unitId,
                $salesPrice => $purchaseInfo->salePrice,
                
                'quantity' => $purchaseInfo->quantity,
                'shopId' => Auth::User()->shopId,
                'shopTypeId' => $shopTypeId,
                'createBy' => Auth::User()->id,
                'created_at' => Carbon::now(),
           ]);
            }
            else{
                
        $lastInsertId = SalesProductPriceEntry::insertGetId([
             'purchaseProductId' => $purchaseInfo->purchaseProductId,
             'productId' => $purchaseInfo->productId,
             'brandId' => $purchaseInfo->brandId,
             'colorId' => $purchaseInfo->colorId,
             'sizeId' => $purchaseInfo->sizeId,
             'unitId' => $purchaseInfo->unitId,
             'mrpPrice' => $purchaseInfo->salePrice,
             
             'quantity' => $purchaseInfo->quantity,
             'shopId' => Auth::User()->shopId,
             'shopTypeId' => $shopTypeId,
             'createBy' => Auth::User()->id,
             'created_at' => Carbon::now(),
        ]);
        
        SalesProductPriceEntryHistory::insertGetId([
             'salesProductPriceEntryId' => $lastInsertId,
             'purchaseProductId' => $purchaseInfo->purchaseProductId,
             'productId' => $purchaseInfo->productId,
             'brandId' => $purchaseInfo->brandId,
             'colorId' => $purchaseInfo->colorId,
             'sizeId' => $purchaseInfo->sizeId,
             'unitId' => $purchaseInfo->unitId,
             'mrpPrice' => $purchaseInfo->salePrice,
             
             'quantity' => $purchaseInfo->quantity,
             'shopId' => Auth::User()->shopId,
             'shopTypeId' => $shopTypeId,
             'createBy' => Auth::User()->id,
             'created_at' => Carbon::now(),
        ]);
        
    }
       $data=PurchaseProductEntry::where('purchaseProductId',$purchaseInfo->purchaseProductId)->first();

        PurchaseProductEntry::where('purchaseProductId',$purchaseInfo->purchaseProductId)->update([
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
        if (isset($alertQuantity->quantityNoti)) { 
            SalesProductPriceEntryHistory::where('salesProductPriceEntryId',$lastInsertId)->update([
              'alertQuantity' => $alertQuantity->quantityNoti,
          ]);
        }

        ProductName::where('productNameId',$request->productId)->update([
            'priceStatus' => 2,
        ]);
        }
        
        //  ------------------ /MRP price setup --------------------------------
        //  --------------------------------------------------------------------






        //  --------------------------------------------------------------------
        //  ------------------ voucher & statement information -----------------
        //  --------------------------------------------------------------------


        
        // $companyId = $request->productSupplierId;
        // $referance = 'Pro-Supp-'.$companyId;
        $title = 'Opening Inventory';
        // $companyAccountCode = AddProductSupplierEntry::where('shopId',Auth::user()->shopId)->where('productSupplierId',$request->productSupplierId)->first()->accountCode;
        // $companyAccountHeadCode = ChartOfAccountRegister::where('shopId',Auth::user()->shopId)->where('headCode',$companyAccountCode)->first()->pre_code;
        
        $rendomNumber = substr(time(),0,12);
        
        
        // ==========================================================

 
        // if(StatementInformation::where('shopId',Auth::user()->shopId)
        // ->where('advanceSecurityDepositPrepayment',0)
        // ->where('accountCode',$companyAccountCode)->exists()){
        //     $balanceAmountDb = StatementInformation::where('shopId',Auth::user()->shopId)
        //     ->where('advanceSecurityDepositPrepayment',0)
        //     ->where('accountCode',$companyAccountCode)->orderBy('id','DESC')->first()->balanceAmount;
            
        // }
        // else{
        //     $balanceAmountDb = 0;
        // }

        // $balanceAmount = $balanceAmountDb-$request->totalProductCost;

        // StatementInformation::insert([
        //     'shopId' => Auth::user()->shopId,
        //     'rendomNumber' => $rendomNumber,
        //     'type' => 0,
        //     'accountHeadCode' => $companyAccountHeadCode,
        //     'accountCode' => $companyAccountCode,
        //     'title' => $title,
        //     'referance' => $referance,
        //     'paymentType' => 0,
        //     'dueAmount' => $request->currentDue,
        //     'creditAmount' => $request->totalProductCost,
        //     'balanceAmount' => $balanceAmount,
        //     'note' => $request->note,
        //     'createBy' => Auth::user()->id,
        //     'shopId' => Auth::user()->shopId,
        //     'created_at' => Carbon::now(),
        // ]);



 



        // ==========================================================
        // =========== #2  Journal Voucher Information ==============
        // ==========================================================
 
            // if($request->paymentType>0 && $request->paymentType<3){

                $voucherUniqueId = time().'1';
                $day = date('d');
                $month = date('m');
                $year = date('Y');
                $voucherDate = date('Y-m-d');
                
                 
                
                $particular = $title.'.';
                    $voucherAmount = ($request->carriageInward+$request->otherCost+$request->damageAndWarranty);
                  
                        $headCode1 = AccountSetup::where('placementType','1')->where('headName','2')->first()->headCode;
                        $headCode11 = AccountSetup::where('placementType','1')->where('headName','3')->first()->headCode;
                        $headCode111 = AccountSetup::where('placementType','1')->where('headName','4')->first()->headCode;
                        $headOfAccounts1 = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
                        $headOfAccounts11 = ChartOfAccountRegister::where('headCode',$headCode11)->first()->pre_code;
                        $headOfAccounts111 = ChartOfAccountRegister::where('headCode',$headCode111)->first()->pre_code;
                    
                        $voucherType = 6;
                        $headCode2 = AccountSetup::where('placementType','1')->where('headName','6')->first()->headCode;
                        $headCode22 = AccountSetup::where('placementType','1')->where('headName','5')->first()->headCode;
                        $headCode222 = AccountSetup::where('placementType','1')->where('headName','83')->first()->headCode;
                        $headOfAccounts2 = ChartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                        $headOfAccounts22 = ChartOfAccountRegister::where('headCode',$headCode22)->first()->pre_code;
                        $headOfAccounts222 = ChartOfAccountRegister::where('headCode',$headCode222)->first()->pre_code;
                    
        
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
        
                if($voucherAmount){
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
                    }

                    //   ----------- Debit Voucher 
                    if($request->carriageInward){
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
                          'voucherAmount' => $request->carriageInward,
                          
                          'randId' => '0',
        
                          'particular' => $particular,
                          'day' => $day,
                          'month' => $month,
                          'year' => $year,
                          'createBy' => Auth::user()->id,
                          'created_at' => Carbon::now(),
                      ]);
                    }
                
                      if($request->otherCost){
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
                          'voucherAmount' => $request->otherCost,
                          'randId' => '0',
        
                          'particular' => $particular,
                          'day' => $day,
                          'month' => $month,
                          'year' => $year,
                          'createBy' => Auth::user()->id,
                          'created_at' => Carbon::now(),
                      ]);
                    }
                
                      if($request->damageAndWarranty){
                        
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
        
                          'accountsHeadCode' => $headOfAccounts111,
                          'accountsCode' => $headCode111,
                          'type' => 1,
                          'voucherAmount' => $request->damageAndWarranty,
                          'randId' => '0',
        
                          'particular' => $particular,
                          'day' => $day,
                          'month' => $month,
                          'year' => $year,
                          'createBy' => Auth::user()->id,
                          'created_at' => Carbon::now(),
                      ]);
                    }

                      //   ----------- / Debit Voucher

                    //   ----------- Credit Voucher 
                      
                    if($request->damageAndWarranty){
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
                          'voucherAmount' => $request->damageAndWarranty,
                          
                          'randId' => '0',
        
                          'particular' => $particular,
                          'day' => $day,
                          'month' => $month,
                          'year' => $year,
                          'createBy' => Auth::user()->id,
                          'created_at' => Carbon::now(),
                      ]);
                    }
                
                      if($request->otherCost){
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
        
                          'accountsHeadCode' => $headOfAccounts22,
                          'accountsCode' => $headCode22,
                          'type' => 2,
                          'voucherAmount' => $request->otherCost,
                          'randId' => '0',
        
                          'particular' => $particular,
                          'day' => $day,
                          'month' => $month,
                          'year' => $year,
                          'createBy' => Auth::user()->id,
                          'created_at' => Carbon::now(),
                      ]);
                    }
                
                      if($request->carriageInward){
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
        
                          'accountsHeadCode' => $headOfAccounts222,
                          'accountsCode' => $headCode222,
                          'type' => 2,
                          'voucherAmount' => $request->carriageInward,
                          'randId' => '0',
        
                          'particular' => $particular,
                          'day' => $day,
                          'month' => $month,
                          'year' => $year,
                          'createBy' => Auth::user()->id,
                          'created_at' => Carbon::now(),
                      ]);
                    }

                      //   ----------- / Credit Voucher

        // ==========================================================
        // ============// #2 Journal Voucher Information ============
        // ==========================================================
        





        // ==========================================================
        // =========== #3  Journal Voucher Information ==============
        // ==========================================================
 

                $voucherUniqueId = time().'3';
                $day = date('d');
                $month = date('m');
                $year = date('Y');
                $voucherDate = date('Y-m-d');
                
                 
                
                $particular = $title.'.';
                $voucherAmount = ($request->totalPurchaseValue-$request->discount);
                  
                        $headCode1 = AccountSetup::where('placementType','1')->where('headName','81')->first()->headCode;
                        $headOfAccounts1 = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;

                        $voucherType = 6;

                        $headCode2 = AccountSetup::where('placementType','1')->where('headName','1')->first()->headCode;
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
        // ============// #3 Journal Voucher Information ============
        // ==========================================================
        













        
        
        // ===================== Payment type condition =======================
        
        if($request->currentPaidAmount>0){
        // if($request->paymentType==1 || $request->paymentType==2){

        if(StatementInformation::where('shopId',Auth::user()->shopId)
        ->where('advanceSecurityDepositPrepayment',0)
        ->where('accountCode',$companyAccountCode)->exists()){
            $balanceAmountDb = StatementInformation::where('shopId',Auth::user()->shopId)
            ->where('advanceSecurityDepositPrepayment',0)
            ->where('accountCode',$companyAccountCode)
            ->orderBy('id','DESC')->first()->balanceAmount;
            
        }
        else{
            $balanceAmountDb = 0;
        }


        // if($request->paymentType==1){
            $balanceAmount = $balanceAmountDb+$request->currentPaidAmount;
            $dr_cr_amount = $request->currentPaidAmount;
            $expenseTitle = 'Cash Payment';
            $title = 'Product supplier cash payment';
        // }else if($request->paymentType==2){
        //     $balanceAmount = $balanceAmountDb+$request->bankAmount;
        //     $expenseTitle = 'Bank Payment';
        //     $dr_cr_amount = $request->bankAmount;
        // }
        
        StatementInformation::insert([
            'shopId' => Auth::user()->shopId,
            'rendomNumber' => $rendomNumber,
            'type' => 1,
            'accountHeadCode' => $companyAccountHeadCode,
            'accountCode' => $companyAccountCode,
            'title' => $title,
            'referance' => $referance,
            'paymentType' => 1, //cash
            'cashAmount' => $request->currentPaidAmount,
            'personName' => $request->personName,
            'personMobileNo' => $request->personMobileNo,
            'bankAmount' => 0,
            'bankTypeEntryId' => $request->bankTypeEntryId,
            'bankEntryId' => $request->bankEntryId,
            'bankAccountId' => $request->bankAccountId,
            'dueAmount' => $request->currentDue,
            'debitAmount' => $dr_cr_amount,
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

                $voucherUniqueId = time().'4';
                $day = date('d');
                $month = date('m');
                $year = date('Y');
                $voucherDate = date('Y-m-d');
                
                 
                
                $particular = $title.'.';
                // if($request->paymentType==1){
                    $voucherAmount = $request->currentPaidAmount;
                // }else if($request->paymentType==2){
                //     $voucherAmount = $request->bankAmount;
                // }
                
                  
                        $headCode1 = AddProductSupplierEntry::where('productSupplierId',$request->productSupplierId)->first()->accountCode;
                        $headOfAccounts = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
                    
                    // if($request->paymentType == 1)
                    // {
                        $voucherType = 1;
                        $headCode2 = AccountSetup::where('placementType','9')->where('headName','100')->first()->headCode;
                    // }
                    // else if($request->paymentType == 2)
                    // {
                    //     $voucherType = 3;
                    //     $headCode2 = ShopAddBankEntry::where('bankId',$request->bankAccountId)->first()->accountCode;
                    // }
        
        
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

                    $debitHeadCodeForBalance = 0;
                    $debitCodeForBalance = 0;
                    $creditHeadCodeForBalance = chartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                    $creditCodeForBalance = $headCode2;
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
                    
                    
                    if($voucherType == 1){
        
                        if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->id)
                        ->where('type',2)
                        ->orderBy('id','DESC')
                        ->exists()){
                            $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->id)
                        ->where('shopId',Auth::user()->shopId)
                        ->where('type',2)
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
                            'type' => 2,
                            'cash' => $voucherAmount,
                            'total' => $last_rp_total,
          
                            'createBy' => Auth::user()->id,
                            'created_at' => Carbon::now(),
                        ]);
        
                    }
                    else if($voucherType == 2){
        
        
                        if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->shopId)
                        ->where('type',1)
                        ->orderBy('id','DESC')
                        ->exists()){
                            $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->shopId)
                        ->where('type',1)
                        ->orderBy('id','DESC')
                        ->first()->total;
                        }else{
                            $last_amount = 0;
                        }
                        $last_rp_total = $last_amount+$request->currentPayable;
                        
                        ReceivePaymentStatement::insert([
                            'shopId' => Auth::user()->shopId,
                            'branchId' => 0,

                            'voucherType' => $voucherType,
                            'voucherDate' => $voucherDate,
                            'voucherId' => $last_inserted_voucher_id,
                            'voucherUniqueId' => $voucherUniqueId,
                            'accountHeadCode' => $headOfAccounts,
                            'accountCode' => $headCode2,
                            'type' => 1,
                            'cash' => $voucherAmount,
                            'total' => $last_rp_total,
          
                            'createBy' => Auth::user()->id,
                            'created_at' => Carbon::now(),
                        ]);
        
                    }
                    else if($voucherType == 3){
        
        
                        if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->id)
                        ->where('type',2)
                        ->orderBy('id','DESC')
                        ->exists()){
                            $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->id)
                        ->where('type',2)
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
                            'type' => 2,
                            'bank' => $voucherAmount,
                            'total' => $last_rp_total,
          
                            'createBy' => Auth::user()->id,
                            'created_at' => Carbon::now(),
                        ]);
                        
                    }
                    else if($voucherType == 4){
        
                        if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->id)
                        ->where('type',1)
                        ->orderBy('id','DESC')
                        ->exists()){
                            $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->shopId)
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
                            'accountCode' => $headCode2,
                            'type' => 1,
                            'bank' => $voucherAmount,
                            'total' => $last_rp_total,
          
                            'createBy' => Auth::user()->id,
                            'created_at' => Carbon::now(),
                        ]);
        
                    }
                    }
                    
        
                    //   ===================================================
                    //   ========================= receive payment statement 
                    //   ===================================================
                    
                    
                    
                    // ==========================================================
                    // ==================== Voucher Information =================
                    // ==========================================================

                    
                } // payment type condition end
        
        
        
                // ===================== Payment type condition =======================
        
        if($request->bankAmount>0){
        // if($request->paymentType==1 || $request->paymentType==2){

        if(StatementInformation::where('shopId',Auth::user()->shopId)
        ->where('advanceSecurityDepositPrepayment',0)
        ->where('accountCode',$companyAccountCode)->exists()){
            $balanceAmountDb = StatementInformation::where('shopId',Auth::user()->shopId)
            ->where('advanceSecurityDepositPrepayment',0)
            ->where('accountCode',$companyAccountCode)
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
            $balanceAmount = $balanceAmountDb+$request->bankAmount;
            $expenseTitle = 'Bank Payment';
            $title = 'Product supplier bank payment';
            $dr_cr_amount = $request->bankAmount;
        // }
        
        StatementInformation::insert([
            'shopId' => Auth::user()->shopId,
            'rendomNumber' => $rendomNumber,
            'type' => 1,
            'accountHeadCode' => $companyAccountHeadCode,
            'accountCode' => $companyAccountCode,
            'title' => $title,
            'referance' => $referance,
            'paymentType' => 2, //Bank
            'cashAmount' => 0,
            'personName' => $request->personName,
            'personMobileNo' => $request->personMobileNo,
            'bankAmount' => $request->bankAmount,
            'bankTypeEntryId' => $request->bankTypeEntryId,
            'bankEntryId' => $request->bankEntryId,
            'bankAccountId' => $request->bankAccountId,
            'dueAmount' => $request->currentDue,
            'debitAmount' => $dr_cr_amount,
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

                $voucherUniqueId = time().'5';
                $day = date('d');
                $month = date('m');
                $year = date('Y');
                $voucherDate = date('Y-m-d');
                
                    
                
                $particular = $title.'.';
                // if($request->paymentType==1){
                    // $voucherAmount = $request->currentPaidAmount;
                // }else if($request->paymentType==2){
                    $voucherAmount = $request->bankAmount;
                // }
                
                  
                        $headCode1 = AddProductSupplierEntry::where('productSupplierId',$request->productSupplierId)->first()->accountCode;
                        $headOfAccounts = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
                    
                    // if($request->paymentType == 1)
                    // {
                    //     $voucherType = 1;
                    //     $headCode2 = AccountSetup::where('placementType','9')->where('headName','100')->first()->headCode;
                    // }
                    // else if($request->paymentType == 2)
                    // {
                        $voucherType = 3;
                        $headCode2 = ShopAddBankEntry::where('bankId',$request->senderbankAccountId)->first()->accountCode;
                    // }
        
        
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

                                  $debitHeadCodeForBalance = 0;
                                  $debitCodeForBalance = 0;
                                  $creditHeadCodeForBalance = chartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                                  $creditCodeForBalance = $headCode2;
                                  // balanceUpdate(headCode1,code1,headCode2,code2,dr,cr,balance);
                                  chartOfAccountController::balanceUpdate($debitHeadCodeForBalance,
                                  $debitCodeForBalance,
                                  $creditHeadCodeForBalance,
                                  $creditCodeForBalance,
                                  $request->voucherAmount,
                                  $request->voucherAmount,
                                  $request->voucherAmount
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
                    
                    
                    if($voucherType == 1){
        
                        if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->id)
                        ->where('type',2)
                        ->orderBy('id','DESC')
                        ->exists()){
                            $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->id)
                        ->where('type',2)
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
                            'type' => 2,
                            'cash' => $voucherAmount,
                            'total' => $last_rp_total,
          
                            'createBy' => Auth::user()->id,
                            'created_at' => Carbon::now(),
                        ]);
        
                    }
                    else if($voucherType == 2){
        
        
                        if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->id)
                        ->where('type',1)
                        ->orderBy('id','DESC')
                        ->exists()){
                            $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->shopId)
                        ->where('type',1)
                        ->orderBy('id','DESC')
                        ->first()->total;
                        }else{
                            $last_amount = 0;
                        }
                        $last_rp_total = $last_amount+$request->currentPayable;
                        
                        ReceivePaymentStatement::insert([
                            'shopId' => Auth::user()->shopId,
                            'branchId' => 0,

                            'voucherType' => $voucherType,
                            'voucherDate' => $voucherDate,
                            'voucherId' => $last_inserted_voucher_id,
                            'voucherUniqueId' => $voucherUniqueId,
                            'accountHeadCode' => $headOfAccounts,
                            'accountCode' => $headCode2,
                            'type' => 1,
                            'cash' => $voucherAmount,
                            'total' => $last_rp_total,
          
                            'createBy' => Auth::user()->id,
                            'created_at' => Carbon::now(),
                        ]);
        
                    }
                    else if($voucherType == 3){
        
        
                        if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->shopId)
                        ->where('type',2)
                        ->orderBy('id','DESC')
                        ->exists()){
                            $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->id)
                        ->where('type',2)
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
                            'type' => 2,
                            'bank' => $voucherAmount,
                            'total' => $last_rp_total,
          
                            'createBy' => Auth::user()->id,
                            'created_at' => Carbon::now(),
                        ]);
                        
                    }
                    else if($voucherType == 4){
        
                        if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->id)
                        ->where('type',1)
                        ->orderBy('id','DESC')
                        ->exists()){
                            $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('shopId',Auth::user()->shopId)
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
                            'accountCode' => $headCode2,
                            'type' => 1,
                            'bank' => $voucherAmount,
                            'total' => $last_rp_total,
          
                            'createBy' => Auth::user()->id,
                            'created_at' => Carbon::now(),
                        ]);
        
                    }
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

    }

 

    public function productEntry(Request $request)
    {
        $this->validate($request, [
            'unitId' => 'required',
            'quantity' => 'required',
            'unitPrice' => 'required',
            'salePrice' => 'required',
        ],
        [
           'unitId.required' => 'Select Unit.',
           'quantity.required' => 'Enter Quantity.',
           'unitPrice.required' => 'Enter Price.',
           'salePrice.required' => 'Enter Sale Price.',
        ]);



        if($request->productSupplierId==''){
            $productSupplierId=0;
        }
        else{
            $productSupplierId=$request->productSupplierId;
        }

 

        //   ----------------------

        if(PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->exists()){
            
            $lastPriceType = PurchaseProductUnitInfoTmp::where('productId',$request->productId)
            ->where('brandId',$request->brandId)
            ->where('purchaseType',$request->purchaseType)
            ->where('countryId',$request->countryId)
            ->where('colorId',$request->colorId)
            ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first()->priceTypeId;
            
        }else{
           
            $lastPriceType = ShopPriceTypeConfigure::first()->priceTypeId; 

        if(ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->exists()){
            $lastPriceType = ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->first()->priceTypeId;
          }
          
          }
          $priceTypeId = $lastPriceType;

        //   ----------------------


 
             
 
            $shopTypeId = Auth::user()->shopTypeId;
                  if( $request->percetage==''){
                      $percetage=0;
                  }else{
                    $percetage=$request->percetage ;
                  }
           
                
                $priceSetupStatus=0;
         
          $id = PurchaseProductEntryTmp::insertGetId([
                'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                'productSupplierId' => $productSupplierId,
                'productId' => $request->productId,
                'productBarcode' => $request->productBarcode,
                'brandId' => $request->brandId,
                'purchaseType' => $request->purchaseType,
                'adv_entry_status' => $request->adv_entry_status,
                'countryId' => $request->countryId,
                'quantity' => $request->quantity,
                'unitId' => $request->unitId,
                'colorId' => $request->colorId,
                'sizeId' => $request->sizeId,
                'priceTypeId' => $priceTypeId,
                'salePrice' => $request->salePrice,
                'unitPrice' => $request->unitPrice,
                'totalPrice' => $request->unitPrice*$request->quantity,
                'totalSalesPrice' => $request->salePrice*$request->quantity,
                'discountType' =>  $request->discountType,
                'discount' =>  $percetage,
                'totalWithDiscount' =>  $request->totalPrice,
                'shopId' => Auth::user()->shopId,
                'shopTypeId' => $shopTypeId,
                'openingStatus' => $request->openingStatus,
                'priceSetupStatus' => $priceSetupStatus,
                'rePurchaseStatus' => $request->rePurchaseStatus,
                'createBy' => Auth::User()->id,
                'created_at' => Carbon::now(),
          ]);


          if($request->adv_entry_status==0){
          PurchaseProductUnitInfoTmp::insert([
            'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
            'productId' => $request->productId,
            'brandId' => $request->brandId,
            'purchaseType' => $request->purchaseType,
            'countryId' => $request->countryId,
            'colorId' => $request->colorId,
            'sizeId' => $request->sizeId,
            'priceTypeId' => $priceTypeId,
            'quantity' => $request->quantity,
            'unitId' => $request->unitId,
            'finalQuantity' => $request->quantity,
            'totalUnitId' => $request->unitId,
            'purchaseUnitPrice' => $request->unitPrice,
            'purchaseTotalPrice' => $request->totalPrice,
            'salesUnitPrice' => $request->salePrice,
            'salesTotalPrice' => $request->salePrice*$request->quantity,
            'openingStatus' => $request->openingStatus,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now()
          ]);
        }


          
          
           
        return ['data' => ''];

    }

 

    public function productEntryNotWorking(Request $request)
    {
        $this->validate($request, [
            'unitId' => 'required',
            'quantity' => 'required',
            'unitPrice' => 'required',
            'salePrice' => 'required',
        ],
        [
           'unitId.required' => 'Select Unit.',
           'quantity.required' => 'Enter Quantity.',
           'unitPrice.required' => 'Enter Price.',
           'salePrice.required' => 'Enter Sale Price.',
        ]);



        if($request->productSupplierId==''){
            $productSupplierId=0;
        }
        else{
            $productSupplierId=$request->productSupplierId;
        }

 

        //   ----------------------

        if(PurchaseProductUnitInfo::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->exists()){
            
            $lastPriceType = PurchaseProductUnitInfo::where('productId',$request->productId)
            ->where('brandId',$request->brandId)
            ->where('purchaseType',$request->purchaseType)
            ->where('countryId',$request->countryId)
            ->where('colorId',$request->colorId)
            ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first()->priceTypeId;
            
        }else{
           
            $lastPriceType = ShopPriceTypeConfigure::first()->priceTypeId; 

        if(ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->exists()){
            $lastPriceType = ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->first()->priceTypeId;
          }
          
          }
          $priceTypeId = $lastPriceType;

        //   ----------------------


 
             
 
            $shopTypeId = Auth::user()->shopTypeId;
                  if( $request->percetage==''){
                      $percetage=0;
                  }else{
                    $percetage=$request->percetage ;
                  }
           
                
                $priceSetupStatus=0;
         
          $id = PurchaseProductEntry::insertGetId([
                'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                'productSupplierId' => $productSupplierId,
                'productId' => $request->productId,
                'productBarcode' => $request->productBarcode,
                'brandId' => $request->brandId,
                'purchaseType' => $request->purchaseType,
                'countryId' => $request->countryId,
                'quantity' => $request->quantity,
                'unitId' => $request->unitId,
                'colorId' => $request->colorId,
                'sizeId' => $request->sizeId,
                'priceTypeId' => $priceTypeId,
                'salePrice' => $request->salePrice,
                'unitPrice' => $request->unitPrice,
                'totalPrice' => $request->unitPrice*$request->quantity,
                'totalSalesPrice' => $request->salePrice*$request->quantity,
                'discountType' =>  $request->discountType,
                'discount' =>  $percetage,
                'totalWithDiscount' =>  $request->totalPrice,
                'shopId' => Auth::user()->shopId,
                'shopTypeId' => $shopTypeId,
                'openingStatus' => $request->openingStatus,
                'priceSetupStatus' => $priceSetupStatus,
                'rePurchaseStatus' => $request->rePurchaseStatus,
                'createBy' => Auth::User()->id,
                'created_at' => Carbon::now(),
          ]);
          
          if($request->productBarcode){
                    ProductBarcodeInformation::insert([
                        'productId' => $request->productId,
                        'productBarcode' => $request->productBarcode,  
                        'shopId' => Auth::user()->shopId,
                        'createBy' => Auth::User()->id,
                        'created_at' => Carbon::now(),
                    ]);
          }

          
        


          
          PurchaseProductDetails::insert([
            'purchaseProductId'=>$id,
            'purchaseInvoiceNo'=> $request->purchaseInvoiceNo,
            'productSupplierId'=> $productSupplierId,
            'productId' => $request->productId,
            'productBarcode' => $request->productBarcode,  
            'brandId' => $request->brandId,
            'shopId'=>Auth::user()->shopId,
            'shopTypeId'=>$shopTypeId,
        ]);




        if(StockSummery::
              where('productId',$request->productId)
            ->where('brandId',$request->brandId)
            ->where('purchaseType',$request->purchaseType)
            ->where('countryId',$request->countryId)
            ->where('colorId',$request->colorId)
            ->where('sizeId',$request->sizeId)
            ->where('shopId',Auth::user()->shopId)->exists()){
            }else{
                StockSummery::insert([
                    'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                    'productSupplierId' => $productSupplierId,
                    'productId' => $request->productId,
                    'productBarcode' => $request->productBarcode,  
                    'brandId' => $request->brandId,
                    'purchaseType' => $request->purchaseType,
                    'countryId' => $request->countryId,
                    'quantity' => $request->quantity,
                    'unitId' => $request->unitId,
                    'colorId' => $request->colorId,
                    'sizeId' => $request->sizeId,
                    'unitPrice' => $request->unitPrice,
                    'totalPrice' => $request->totalPrice,
                    'percetage' =>  $percetage,
                    'shopId' => Auth::user()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'priceSetupStatus' => $priceSetupStatus,
                    'rePurchaseStatus' => $request->rePurchaseStatus,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
                  ]);
            }
          
       
                //   ========================== advance unit calculation

                if($request->adv_entry_status==0){


                    if(PurchaseProductUnitInfo::where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->exists()){
                // --------------------------------- single 
                $unitInfo = PurchaseProductUnitInfo::where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->first();
                
                if($unitInfo->totalQuantity===NULL){
                    PurchaseProductUnitInfo::where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => DB::raw('quantity + '.$request->quantity),
                        'finalQuantity' => DB::raw('finalQuantity + '.$request->quantity),
                        'purchaseUnitPrice' => $request->unitPrice,
                        'purchaseTotalPrice' => DB::raw('purchaseTotalPrice + '.$request->totalPrice),
                        'salesUnitPrice' => $request->salePrice,
                        'salesTotalPrice' => DB::raw('salesTotalPrice + '.$request->salePrice*$request->quantity),
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    $lastSingleQuantity = $request->quantity;
                }
                else{
                    PurchaseProductUnitInfo::where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->update([
                        'totalQuantity' => DB::raw('totalQuantity + '.$request->quantity),
                        'finalQuantity' => DB::raw('finalQuantity + '.$request->quantity),
                        'purchaseUnitPrice' => $request->unitPrice,
                        'purchaseTotalPrice' => DB::raw('purchaseTotalPrice + '.$request->totalPrice),
                        'salesUnitPrice' => $request->salePrice,
                        'salesTotalPrice' => DB::raw('salesTotalPrice + '.$request->salePrice*$request->quantity),
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                   ]);
                   $lastSingleQuantity = $request->quantity;
                }

                

                // --------------------------------- / single 

                // --------------------------------- loop 
                $selectUnitLists = PurchaseProductUnitInfo::where('id','>',$unitInfo->id)->where('productId',$request->productId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                                    
                foreach($selectUnitLists as $selectUnitList){
                    
                    $unitQuantity = ($lastSingleQuantity*$selectUnitList->quantity);
                    $updateTotalQuantity = $selectUnitList->totalQuantity+$unitQuantity;
                    $currentPurchase = ($request->unitPrice/$unitQuantity)*$request->quantity;
                    $currentPurchasePrice = $selectUnitList->purchaseTotalPrice+($request->unitPrice*$request->quantity);
                    $currentSales = ($request->salePrice/$unitQuantity)*$request->quantity;
                    $currentSalesPrice = $selectUnitList->salesTotalPrice+($request->salePrice*$request->quantity);
                    PurchaseProductUnitInfo::where('id',$selectUnitList->id)->update([
                        'totalQuantity' => $updateTotalQuantity,
                        'finalQuantity' => $updateTotalQuantity,
                        'purchaseUnitPrice' => $currentPurchase,
                        'purchaseTotalPrice' => $currentPurchasePrice,
                        'salesUnitPrice' => $currentSales,
                        'salesTotalPrice' => $currentSalesPrice,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);


                    $this->insertPurchaseProductUnitInfoHistory1($request,
                    $priceTypeId,$updateTotalQuantity,$updateTotalQuantity,
                    $currentPurchase,$currentPurchasePrice,$currentSales,
                    $currentSalesPrice);

                    
                     

                //==========
                $lastSingleQuantity = $lastSingleQuantity*$selectUnitList->quantity;
                }
                // --------------------------------- /loop 

            }

            else{
                
                $this->insertPurchaseProductUnitInfo($request,$priceTypeId);

                

                $this->insertPurchaseProductUnitInfoHistory($request,$priceTypeId);
                
            }
                //   ========================== /advance unit calculation

           
 
        // ---------------------------
        $lastPUnitInfo = PurchaseProductUnitInfo::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)
        ->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first();
            
        PurchaseProductUnitInfo::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)
        ->where('shopId',Auth::user()->shopId)->update([
            'purchaseTotalPrice' => $lastPUnitInfo->purchaseTotalPrice,
            'salesTotalPrice' => $lastPUnitInfo->salesTotalPrice,
        ]);
        //------------------------
            
                    // ================= loop for top serial
                    $this->updateUnitQuantityBottomToTop($request,$priceTypeId);
                    // ================= /loop for top serial
            
                }
                    // ------------- get last quantity
                    $this->updateLastQuantityInStock($request,$priceTypeId);
                    // ------------- /get last quantity


               
                    
        
                //==============================================================================
                //============================= Return advance unit calculation  ===============

                if($request->adv_entry_status==0){

                $this->insertPurchaseProductUnitInfoReturn($request,$priceTypeId);
                
                    // ================= loop for top serial
                   $this->updateUnitQuantityBottomToTopReturn($request,$priceTypeId);
                    // ================= /loop for top serial

                }

                //============================= /Return advance unit calculation
                //==============================================================================
                    
        
        return ['data' => ''];

    }
 

    public function productEntryInvoiceSubmit10($invoiceNo)
    {
      

                $data = PurchaseProductEntryTmp::where('purchaseInvoiceNo',$invoiceNo)->where('shopId',Auth::user()->shopId)->where('createBy',Auth::user()->id)->get();
                foreach($data as $request){


       
            $productSupplierId = $request->productSupplierId;
            $adv_entry_status = $request->adv_entry_status;
        

 

        //   ----------------------

        if(PurchaseProductUnitInfo::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->exists()){
            
            $lastPriceType = PurchaseProductUnitInfo::where('productId',$request->productId)
            ->where('brandId',$request->brandId)
            ->where('purchaseType',$request->purchaseType)
            ->where('countryId',$request->countryId)
            ->where('colorId',$request->colorId)
            ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first()->priceTypeId;
            
        }else{
           
            $lastPriceType = ShopPriceTypeConfigure::first()->priceTypeId; 

        if(ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->exists()){
            $lastPriceType = ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->first()->priceTypeId;
          }
          
          }
          $priceTypeId = $lastPriceType;

        //   ----------------------


 
             
 
            $shopTypeId = Auth::user()->shopTypeId;
                  if( $request->percetage==''){
                      $percetage=0;
                  }else{
                    $percetage=$request->percetage ;
                  }
           
                
                $priceSetupStatus=0;
         
          $id = PurchaseProductEntry::insertGetId([
                'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                'productSupplierId' => $productSupplierId,
                'productId' => $request->productId,
                'productBarcode' => $request->productBarcode,
                'brandId' => $request->brandId,
                'purchaseType' => $request->purchaseType,
                'countryId' => $request->countryId,
                'quantity' => $request->quantity,
                'unitId' => $request->unitId,
                'colorId' => $request->colorId,
                'sizeId' => $request->sizeId,
                'priceTypeId' => $priceTypeId,
                'salePrice' => $request->salePrice,
                'unitPrice' => $request->unitPrice,
                'totalPrice' => $request->unitPrice*$request->quantity,
                'totalSalesPrice' => $request->salePrice*$request->quantity,
                'discountType' =>  $request->discountType,
                'discount' =>  $percetage,
                'totalWithDiscount' =>  $request->totalPrice,
                'shopId' => Auth::user()->shopId,
                'shopTypeId' => $shopTypeId,
                'openingStatus' => $request->openingStatus,
                'priceSetupStatus' => $priceSetupStatus,
                'rePurchaseStatus' => $request->rePurchaseStatus,
                'createBy' => Auth::User()->id,
                'created_at' => Carbon::now(),
          ]);
          
          if($request->productBarcode){
                    ProductBarcodeInformation::insert([
                        'productId' => $request->productId,
                        'productBarcode' => $request->productBarcode,  
                        'shopId' => Auth::user()->shopId,
                        'createBy' => Auth::User()->id,
                        'created_at' => Carbon::now(),
                    ]);
          }

          
        


          
          PurchaseProductDetails::insert([
            'purchaseProductId'=>$id,
            'purchaseInvoiceNo'=> $request->purchaseInvoiceNo,
            'productSupplierId'=> $productSupplierId,
            'productId' => $request->productId,
            'productBarcode' => $request->productBarcode,  
            'brandId' => $request->brandId,
            'shopId'=>Auth::user()->shopId,
            'shopTypeId'=>$shopTypeId,
        ]);




        if(StockSummery::
              where('productId',$request->productId)
            ->where('brandId',$request->brandId)
            ->where('purchaseType',$request->purchaseType)
            ->where('countryId',$request->countryId)
            ->where('colorId',$request->colorId)
            ->where('sizeId',$request->sizeId)
            ->where('shopId',Auth::user()->shopId)->exists()){
            }else{
                StockSummery::insert([
                    'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                    'productSupplierId' => $productSupplierId,
                    'productId' => $request->productId,
                    'productBarcode' => $request->productBarcode,  
                    'brandId' => $request->brandId,
                    'purchaseType' => $request->purchaseType,
                    'countryId' => $request->countryId,
                    'quantity' => $request->quantity,
                    'unitId' => $request->unitId,
                    'colorId' => $request->colorId,
                    'sizeId' => $request->sizeId,
                    'unitPrice' => $request->unitPrice,
                    'totalPrice' => $request->totalPrice,
                    'percetage' =>  $percetage,
                    'shopId' => Auth::user()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'priceSetupStatus' => $priceSetupStatus,
                    'rePurchaseStatus' => $request->rePurchaseStatus,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
                  ]);
            }
          
       
                //   ========================== advance unit calculation

                $unitInfos = PurchaseProductUnitInfoTmp::where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->where('shopId',Auth::user()->shopId)->where('createBy',Auth::user()->id)->get();
                foreach($unitInfos as $request){

                    if(PurchaseProductUnitInfo::where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->exists()){
                // --------------------------------- single 
                $unitInfo = PurchaseProductUnitInfo::where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->first();
                
                if($unitInfo->totalQuantity===NULL){
                    PurchaseProductUnitInfo::where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => DB::raw('quantity + '.$request->quantity),
                        'finalQuantity' => DB::raw('finalQuantity + '.$request->quantity),
                        'purchaseUnitPrice' => $request->unitPrice,
                        'purchaseTotalPrice' => DB::raw('purchaseTotalPrice + '.$request->totalPrice),
                        'salesUnitPrice' => $request->salePrice,
                        'salesTotalPrice' => DB::raw('salesTotalPrice + '.$request->salePrice*$request->quantity),
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    $lastSingleQuantity = $request->quantity;
                }
                else{
                    PurchaseProductUnitInfo::where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->update([
                        'totalQuantity' => DB::raw('totalQuantity + '.$request->quantity),
                        'finalQuantity' => DB::raw('finalQuantity + '.$request->quantity),
                        'purchaseUnitPrice' => $request->unitPrice,
                        'purchaseTotalPrice' => DB::raw('purchaseTotalPrice + '.$request->totalPrice),
                        'salesUnitPrice' => $request->salePrice,
                        'salesTotalPrice' => DB::raw('salesTotalPrice + '.$request->salePrice*$request->quantity),
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                   ]);
                   $lastSingleQuantity = $request->quantity;
                }

               

                // --------------------------------- / single 

                // --------------------------------- loop 
                $selectUnitLists = PurchaseProductUnitInfo::where('id','>',$unitInfo->id)->where('productId',$request->productId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                                    
                foreach($selectUnitLists as $selectUnitList){
                    
                    $unitQuantity = ($lastSingleQuantity*$selectUnitList->quantity);
                    $updateTotalQuantity = $selectUnitList->totalQuantity+$unitQuantity;
                    $currentPurchase = ($request->unitPrice/$unitQuantity)*$request->quantity;
                    $currentPurchasePrice = $selectUnitList->purchaseTotalPrice+($request->unitPrice*$request->quantity);
                    $currentSales = ($request->salePrice/$unitQuantity)*$request->quantity;
                    $currentSalesPrice = $selectUnitList->salesTotalPrice+($request->salePrice*$request->quantity);
                    PurchaseProductUnitInfo::where('id',$selectUnitList->id)->update([
                        'totalQuantity' => $updateTotalQuantity,
                        'finalQuantity' => $updateTotalQuantity,
                        'purchaseUnitPrice' => $currentPurchase,
                        'purchaseTotalPrice' => $currentPurchasePrice,
                        'salesUnitPrice' => $currentSales,
                        'salesTotalPrice' => $currentSalesPrice,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);


                    $this->insertPurchaseProductUnitInfoHistory1($request,
                    $priceTypeId,$updateTotalQuantity,$updateTotalQuantity,
                    $currentPurchase,$currentPurchasePrice,$currentSales,
                    $currentSalesPrice);

                   
                     

                //==========
                $lastSingleQuantity = $lastSingleQuantity*$selectUnitList->quantity;
                }
                // --------------------------------- /loop 

            }

            else{
                
                $this->insertPurchaseProductUnitInfo($request,$priceTypeId);

             

                $this->insertPurchaseProductUnitInfoHistory($request,$priceTypeId);
                
            }
                //   ========================== /advance unit calculation

           
 
        // ---------------------------
        $lastPUnitInfo = PurchaseProductUnitInfo::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)
        ->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first();
            
        PurchaseProductUnitInfo::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)
        ->where('shopId',Auth::user()->shopId)->update([
            'purchaseTotalPrice' => $lastPUnitInfo->purchaseTotalPrice,
            'salesTotalPrice' => $lastPUnitInfo->salesTotalPrice,
        ]);
        //------------------------
            
                    // ================= loop for top serial
                    $this->updateUnitQuantityBottomToTop($request,$priceTypeId);
                    // ================= /loop for top serial
            
                

                
                    // ------------- get last quantity
                    $this->updateLastQuantityInStock($request,$priceTypeId);
                    // ------------- /get last quantity


               
                    
        
                //==============================================================================
                //============================= Return advance unit calculation  ===============

               

                $this->insertPurchaseProductUnitInfoReturn($request,$priceTypeId);
                
                    // ================= loop for top serial
                   $this->updateUnitQuantityBottomToTopReturn($request,$priceTypeId);
                    // ================= /loop for top serial

               

                //============================= /Return advance unit calculation
                //==============================================================================
                }
            }
        
        return ['data' => ''];

    }
 

    public function productEntryInvoiceSubmit($openingStatus,$invoiceNo)
    {
      

                $data = PurchaseProductEntryTmp::where('openingStatus',$openingStatus)->where('purchaseInvoiceNo',$invoiceNo)->where('shopId',Auth::user()->shopId)->where('createBy',Auth::user()->id)->get();
                foreach($data as $request){

                    $adv_entry_status = $request->adv_entry_status;

                if($request->productSupplierId==''){
                    $productSupplierId=0;
                }
                else{
                    $productSupplierId=$request->productSupplierId;
                }

 

                //   ----------------------

                if(PurchaseProductUnitInfo::where('productId',$request->productId)
                ->where('brandId',$request->brandId)
                ->where('purchaseType',$request->purchaseType)
                ->where('countryId',$request->countryId)
                ->where('colorId',$request->colorId)
                ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->exists()){
                    
                    $lastPriceType = PurchaseProductUnitInfo::where('productId',$request->productId)
                    ->where('brandId',$request->brandId)
                    ->where('purchaseType',$request->purchaseType)
                    ->where('countryId',$request->countryId)
                    ->where('colorId',$request->colorId)
                    ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first()->priceTypeId;
                    
                }else{
           
                $lastPriceType = ShopPriceTypeConfigure::first()->priceTypeId; 

            if(ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->exists()){
                $lastPriceType = ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->first()->priceTypeId;
            }
            
            }
            $priceTypeId = $lastPriceType;

            //   ----------------------


 
             
 
            $shopTypeId = Auth::user()->shopTypeId;
                  if( $request->percetage==''){
                      $percetage=0;
                  }else{
                    $percetage=$request->percetage ;
                  }
           
                
                $priceSetupStatus=0;
         
          $id = PurchaseProductEntry::insertGetId([
                'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                'productSupplierId' => $productSupplierId,
                'productId' => $request->productId,
                'productBarcode' => $request->productBarcode,
                'brandId' => $request->brandId,
                'purchaseType' => $request->purchaseType,
                'countryId' => $request->countryId,
                'quantity' => $request->quantity,
                'unitId' => $request->unitId,
                'colorId' => $request->colorId,
                'sizeId' => $request->sizeId,
                'priceTypeId' => $priceTypeId,
                'salePrice' => $request->salePrice,
                'unitPrice' => $request->unitPrice,
                'totalPrice' => $request->unitPrice*$request->quantity,
                'totalSalesPrice' => $request->salePrice*$request->quantity,
                'discountType' =>  $request->discountType,
                'discount' =>  $percetage,
                'totalWithDiscount' =>  $request->totalPrice,
                'shopId' => Auth::user()->shopId,
                'shopTypeId' => $shopTypeId,
                'openingStatus' => $request->openingStatus,
                'priceSetupStatus' => $priceSetupStatus,
                'rePurchaseStatus' => $request->rePurchaseStatus,
                'createBy' => Auth::User()->id,
                'created_at' => Carbon::now(),
          ]);
          
          if($request->productBarcode){
                    ProductBarcodeInformation::insert([
                        'productId' => $request->productId,
                        'productBarcode' => $request->productBarcode,  
                        'shopId' => Auth::user()->shopId,
                        'createBy' => Auth::User()->id,
                        'created_at' => Carbon::now(),
                    ]);
          }

          
        


            
            PurchaseProductDetails::insert([
                'purchaseProductId'=>$id,
                'purchaseInvoiceNo'=> $request->purchaseInvoiceNo,
                'productSupplierId'=> $productSupplierId,
                'productId' => $request->productId,
                'productBarcode' => $request->productBarcode,  
                'brandId' => $request->brandId,
                'shopId'=>Auth::user()->shopId,
                'shopTypeId'=>$shopTypeId,
            ]);




            if(StockSummery::
                where('productId',$request->productId)
                ->where('brandId',$request->brandId)
                ->where('purchaseType',$request->purchaseType)
                ->where('countryId',$request->countryId)
                ->where('colorId',$request->colorId)
                ->where('sizeId',$request->sizeId)
                ->where('shopId',Auth::user()->shopId)->exists()){
                }else{
                    StockSummery::insert([
                        'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                        'productSupplierId' => $productSupplierId,
                        'productId' => $request->productId,
                        'productBarcode' => $request->productBarcode,  
                        'brandId' => $request->brandId,
                        'purchaseType' => $request->purchaseType,
                        'countryId' => $request->countryId,
                        'quantity' => $request->quantity,
                        'unitId' => $request->unitId,
                        'colorId' => $request->colorId,
                        'sizeId' => $request->sizeId,
                        'unitPrice' => $request->unitPrice,
                        'totalPrice' => $request->totalPrice,
                        'percetage' =>  $percetage,
                        'shopId' => Auth::user()->shopId,
                        'shopTypeId' => $shopTypeId,
                        'priceSetupStatus' => $priceSetupStatus,
                        'rePurchaseStatus' => $request->rePurchaseStatus,
                        'createBy' => Auth::User()->id,
                        'created_at' => Carbon::now(),
                    ]);
                }

                $unitInfos = PurchaseProductUnitInfoTmp::where('openingStatus',$openingStatus)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->where('shopId',Auth::user()->shopId)->where('createBy',Auth::user()->id)->get();
                foreach($unitInfos as $request){

                if(PurchaseProductUnitInfo::where('openingStatus',$openingStatus)->where('priceTypeId',$priceTypeId)->where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->exists()){
                   
                   // --------------------------------- single 
                    // $unitInfo = PurchaseProductUnitInfo::where('openingStatus',$openingStatus)->where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->first();
                    


                    
                $unitInfo = PurchaseProductUnitInfo::where('openingStatus',$openingStatus)->where('priceTypeId',$priceTypeId)->where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->first();
                    $qnt = $unitInfo->quantity+$request->quantity;
                    $qntt = $unitInfo->totalQuantity+$request->quantity;
                    $finalQuantity = $unitInfo->finalQuantity+$request->finalQuantity;
                    $purchaseUnitPrice = $request->purchaseUnitPrice;
                    $purchaseTotalPrice = $unitInfo->purchaseTotalPrice+$request->purchaseTotalPrice;
                    $salesUnitPrice = $request->salesUnitPrice;
                    $salesTotalPrice = $unitInfo->salesTotalPrice+$request->salesTotalPrice;
                    

                if($unitInfo->totalQuantity===NULL){
                    PurchaseProductUnitInfo::where('openingStatus',$openingStatus)->where('priceTypeId',$priceTypeId)->where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => $qnt,
                        'finalQuantity' => $finalQuantity,
                        'purchaseUnitPrice' => $purchaseUnitPrice,
                        'purchaseTotalPrice' => $purchaseTotalPrice,
                        'salesUnitPrice' => $salesUnitPrice,
                        'salesTotalPrice' => $salesTotalPrice,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    $lastSingleQuantity = $request->quantity;
                }
                else{
                    PurchaseProductUnitInfo::where('openingStatus',$openingStatus)->where('priceTypeId',$priceTypeId)->where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->update([
                        'totalQuantity' => $qntt,
                        'finalQuantity' => $finalQuantity,
                        'purchaseUnitPrice' => $purchaseUnitPrice,
                        'purchaseTotalPrice' => $purchaseTotalPrice,
                        'salesUnitPrice' => $salesUnitPrice,
                        'salesTotalPrice' => $salesTotalPrice,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                   $lastSingleQuantity = $request->quantity;
                }

                

                // --------------------------------- / single 

                    // --------------------------------- loop 
                $selectUnitLists = PurchaseProductUnitInfo::where('openingStatus',$openingStatus)->where('priceTypeId',$priceTypeId)->where('id','>',$unitInfo->id)->where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                                    
                foreach($selectUnitLists as $selectUnitList){
                    
                    $unitQuantity = ($lastSingleQuantity*$selectUnitList->quantity);
                    $updateTotalQuantity = $selectUnitList->totalQuantity+$unitQuantity;
                    if($unitQuantity){
                        $unitQuantity = $unitQuantity;
                    }else{
                        $unitQuantity = 1;
                    }
                    $currentPurchase = ($request->purchaseUnitPrice/$unitQuantity)*$request->quantity;
                    $currentPurchasePrice = $selectUnitList->purchaseTotalPrice+($request->purchaseUnitPrice*$request->quantity);
                    $currentSales = ($request->salesUnitPrice/$unitQuantity)*$request->quantity;
                    $currentSalesPrice = $selectUnitList->salesTotalPrice+($request->salesUnitPrice*$request->quantity);
                    PurchaseProductUnitInfo::where('openingStatus',$openingStatus)->where('id',$selectUnitList->id)->update([
                        'totalQuantity' => $updateTotalQuantity,
                        'finalQuantity' => $updateTotalQuantity,
                        'purchaseUnitPrice' => $currentPurchase,
                        'purchaseTotalPrice' => $currentPurchasePrice,
                        'salesUnitPrice' => $currentSales,
                        'salesTotalPrice' => $currentSalesPrice,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);


                    $this->insertPurchaseProductUnitInfoHistory1($request,
                    $priceTypeId,$unitQuantity,$unitQuantity,
                    $currentPurchase,$currentPurchasePrice,$currentSales,
                    $currentSalesPrice);

                    
                     

                //==========
                $lastSingleQuantity = $lastSingleQuantity*$selectUnitList->quantity;
                }
                // --------------------------------- /loop 



                // ---------------------------
        $lastPUnitInfo = PurchaseProductUnitInfo::where('openingStatus',$openingStatus)->where('priceTypeId',$priceTypeId)->where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)
        ->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first();
            
        PurchaseProductUnitInfo::where('openingStatus',$openingStatus)->where('priceTypeId',$priceTypeId)->where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)
        ->where('shopId',Auth::user()->shopId)->update([
            'purchaseTotalPrice' => $lastPUnitInfo->purchaseTotalPrice,
            'salesTotalPrice' => $lastPUnitInfo->salesTotalPrice,
        ]);
        

        //------------------------



                     // ================= loop for top serial
                        $this->updateUnitQuantityBottomToTop($request,$priceTypeId);
                     // ================= /loop for top serial

                     // ================= loop for top serial
                     $this->insertStockInformation($request,$priceTypeId);
                     // ================= /loop for top serial
             
                }
                else{
                    $this->insertPurchaseProductUnitInfo($request,$priceTypeId);
                    $this->insertStockInformation($request,$priceTypeId);
                }
                
                
                $this->insertPurchaseProductUnitInfoHistory($request,$priceTypeId);
                $this->insertPurchaseReturnInvoiceUnitInfo($request,$priceTypeId);
                
                  
                     // ------------- get last quantity
                            $this->updateLastQuantityInStockFinal($request,$priceTypeId);
                     // ------------- /get last quantity


                }

                }
            
        
                   


    }



    public function updateLastQuantityInStockNotWorking($request,$priceTypeId){

        if(PurchaseProductUnitInfo::where('finalQuantity','>',0)
                    ->where('productId',$request->productId)
                    ->where('brandId',$request->brandId)
                    ->where('colorId',$request->colorId)
                    ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->exists()){
                    
                    $lastQuantityPriceInfo = PurchaseProductUnitInfo::where('finalQuantity','>',0)
                    ->where('productId',$request->productId)
                    ->where('brandId',$request->brandId)
                    ->where('colorId',$request->colorId)
                    ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first();
                    
                    StockSummery::where('productId',$request->productId)
                    ->where('brandId',$request->brandId)
                    ->where('colorId',$request->colorId)
                    ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => $lastQuantityPriceInfo->finalQuantity,
                        'unitId' => $lastQuantityPriceInfo->unitId,
                        'totalPrice' => $lastQuantityPriceInfo->purchaseTotalPrice,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    }
                    else{
                        $lastQuantityPriceInfo = PurchaseProductUnitInfo::where('productId',$request->productId)
                    ->where('brandId',$request->brandId)
                    ->where('colorId',$request->colorId)
                    ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first();
                    
                    StockSummery::where('productId',$request->productId)
                    ->where('brandId',$request->brandId)
                    ->where('colorId',$request->colorId)
                    ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => $lastQuantityPriceInfo->finalQuantity,
                        'unitId' => $lastQuantityPriceInfo->unitId,
                        'totalPrice' => $lastQuantityPriceInfo->purchaseTotalPrice,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    }

    }

    public function updateLastQuantityInStockFinal($request,$priceTypeId){
        
        if(PurchaseProductUnitInfo::where('finalQuantity','>',0)
                    ->where('productId',$request->productId)
                    ->where('brandId',$request->brandId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('colorId',$request->colorId)
                    ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->exists()){
                    
                    $lastQuantityPriceInfo = PurchaseProductUnitInfo::where('finalQuantity','>',0)
                    ->where('productId',$request->productId)
                    ->where('brandId',$request->brandId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('colorId',$request->colorId)
                    ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first();
                    
                    StockSummery::where('productId',$request->productId)
                    ->where('brandId',$request->brandId)
                    ->where('colorId',$request->colorId)
                    ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => $lastQuantityPriceInfo->finalQuantity,
                        'unitId' => $lastQuantityPriceInfo->unitId,
                        'totalPrice' => $lastQuantityPriceInfo->purchaseTotalPrice,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    }
                    else{
                        $lastQuantityPriceInfo = PurchaseProductUnitInfo::where('productId',$request->productId)
                    ->where('brandId',$request->brandId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('colorId',$request->colorId)
                    ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first();
                    
                    StockSummery::where('productId',$request->productId)
                    ->where('brandId',$request->brandId)
                    ->where('colorId',$request->colorId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => $lastQuantityPriceInfo->finalQuantity,
                        'unitId' => $lastQuantityPriceInfo->unitId,
                        'totalPrice' => $lastQuantityPriceInfo->purchaseTotalPrice,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    }

    }
    public function updateLastQuantityInStock($request,$priceTypeId){

        if(PurchaseProductUnitInfoTmp::where('finalQuantity','>',0)
                    ->where('productId',$request->productId)
                    ->where('brandId',$request->brandId)
                    ->where('colorId',$request->colorId)
                    ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->exists()){
                    
                    $lastQuantityPriceInfo = PurchaseProductUnitInfoTmp::where('finalQuantity','>',0)
                    ->where('productId',$request->productId)
                    ->where('brandId',$request->brandId)
                    ->where('colorId',$request->colorId)
                    ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first();
                    
                    StockSummery::where('productId',$request->productId)
                    ->where('brandId',$request->brandId)
                    ->where('colorId',$request->colorId)
                    ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => $lastQuantityPriceInfo->finalQuantity,
                        'unitId' => $lastQuantityPriceInfo->unitId,
                        'totalPrice' => $lastQuantityPriceInfo->purchaseTotalPrice,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    }
                    else{
                        $lastQuantityPriceInfo = PurchaseProductUnitInfoTmp::where('productId',$request->productId)
                    ->where('brandId',$request->brandId)
                    ->where('colorId',$request->colorId)
                    ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first();
                    
                    StockSummery::where('productId',$request->productId)
                    ->where('brandId',$request->brandId)
                    ->where('colorId',$request->colorId)
                    ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => $lastQuantityPriceInfo->finalQuantity,
                        'unitId' => $lastQuantityPriceInfo->unitId,
                        'totalPrice' => $lastQuantityPriceInfo->purchaseTotalPrice,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    }

    }
    public function updateUnitQuantityBottomToTop($request,$priceTypeId){
        $loopInfos = PurchaseProductUnitInfo::distinct()
                    ->where('productId',$request->productId)
                    ->where('brandId',$request->brandId)
                    ->where('colorId',$request->colorId)
                    ->where('priceTypeId',$priceTypeId)
                    ->where('sizeId',$request->sizeId)
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
                        $select = PurchaseProductUnitInfo::where('id',$idExs[$i])->first();
                        if($select->finalQuantity>0){
                            if($select->quantity){
                                $selectquantity = $select->quantity;
                            }
                            else{
                                $selectquantity = 1;
                            }
                        $updateQuantity = intval($select->totalQuantity/$selectquantity);
                        }
                        else{
                        $updateQuantity = 0;
                        }
                        

                        $checkUnitInfo = PurchaseProductUnitInfo::where('id',$idExs[$i+1])->first()->totalQuantity;
                    if($checkUnitInfo===NULL){
                    PurchaseProductUnitInfo::where('id',$idExs[$i+1])->update([
                        'quantity' => $updateQuantity,
                        'finalQuantity' => $updateQuantity,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    }else{
                    PurchaseProductUnitInfo::where('id',$idExs[$i+1])->update([
                        'totalQuantity' => $updateQuantity,
                        'finalQuantity' => $updateQuantity,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    }
                    }
                    }
    }
    public function updateUnitQuantityBottomToTopReturn($request,$priceTypeId){
        $loopInfos = PurchaseReturnInvoiceUnitInfo::distinct()->where('priceTypeId',$priceTypeId)
                    ->where('openingStatus',$request->openingStatus)
                    ->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
                    ->where('productId',$request->productId)
                    ->where('brandId',$request->brandId)
                    ->where('colorId',$request->colorId)
                    ->where('sizeId',$request->sizeId)
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
                        $select = PurchaseReturnInvoiceUnitInfo::where('id',$idExs[$i])->first();
                         
                        $divQnt = intval($select->finalQuantity/$select->quantity);
                         
                         if($divQnt>0){
                             $updateQuantity = $divQnt;
                         }
                         else{
                             $updateQuantity = 0;
                         }
                        
                        
                        

                        $checkUnitInfo = PurchaseReturnInvoiceUnitInfo::where('id',$idExs[$i+1])->first()->totalQuantity;
                    // if($checkUnitInfo===NULL){
                        PurchaseReturnInvoiceUnitInfo::where('id',$idExs[$i+1])->update([
                        'totalQuantity' => $updateQuantity,
                        'finalQuantity' => $updateQuantity,
                        'availableQuantity' => $updateQuantity,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    // }else{
                    //     PurchaseReturnInvoiceUnitInfo::where('id',$idExs[$i+1])->update([
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

      public function insertPurchaseReturnInvoiceUnitInfo($request,$priceTypeId){
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
            'quantity' => $request->quantity,
            'unitId' => $request->unitId,
            'totalQuantity' => $request->totalQuantity,
            'finalQuantity' => $request->finalQuantity,
            'availableQuantity' => $request->finalQuantity,
            'totalUnitId' => $request->totalUnitId,
            'purchaseUnitPrice' => $request->purchaseUnitPrice,
            'purchaseTotalPrice' => $request->purchaseTotalPrice,
            'salesUnitPrice' => $request->salesUnitPrice,
            'salesTotalPrice' => $request->salesTotalPrice,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now()
        ]);

        }


      public function insertPurchaseProductUnitInfoHistory($request,$priceTypeId){
        PurchaseProductUnitInfoHistory::insert([
            'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
            'productId' => $request->productId,
            'brandId' => $request->brandId,
            'purchaseType' => $request->purchaseType,
            'countryId' => $request->countryId,
            'colorId' => $request->colorId,
            'sizeId' => $request->sizeId,
            'priceTypeId' => $priceTypeId,
            'quantity' => $request->quantity,
            'unitId' => $request->unitId,
            'finalQuantity' => $request->quantity,
            'totalUnitId' => $request->unitId,
            'purchaseUnitPrice' => $request->unitPrice,
            'purchaseTotalPrice' => $request->totalPrice,
            'salesUnitPrice' => $request->quantity,
            'salesTotalPrice' => $request->salePrice*$request->quantity,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now()
          ]);
    }

      public function insertPurchaseProductUnitInfoHistory1($request,$priceTypeId,$totalQuantity,$finalQuantity,$purchaseUnitPrice,$purchaseTotalPrice,$salesUnitPrice,$salesTotalPrice){
        PurchaseProductUnitInfoHistory::insert([
            'productId' => $request->productId,
            'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
            'brandId' => $request->brandId,
            'purchaseType' => $request->purchaseType,
            'countryId' => $request->countryId,
            'colorId' => $request->colorId,
            'sizeId' => $request->sizeId,
            'priceTypeId' => $priceTypeId,
            'quantity' => $request->quantity,
            'unitId' => $request->unitId,
            'totalQuantity' => $totalQuantity,
            'finalQuantity' => $finalQuantity,
            'totalUnitId' => $request->unitId,
            'purchaseUnitPrice' => $purchaseUnitPrice,
            'purchaseTotalPrice' => $purchaseTotalPrice,
            'salesUnitPrice' => $salesUnitPrice,
            'salesTotalPrice' => $salesTotalPrice,
            'openingStatus' => $request->openingStatus,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now()
          ]);
    }
    public function insertPurchaseProductUnitInfo($request,$priceTypeId){
     
     
        PurchaseProductUnitInfo::insert([
                    'productId' => $request->productId,
                    'brandId' => $request->brandId,
                    'purchaseType' => $request->purchaseType,
                    'countryId' => $request->countryId,
                    'colorId' => $request->colorId,
                    'sizeId' => $request->sizeId,
                    'priceTypeId' => $priceTypeId,
                    'quantity' => $request->quantity,
                    'unitId' => $request->unitId,
                    'totalQuantity' => $request->totalQuantity,
                    'finalQuantity' => $request->finalQuantity,
                    'totalUnitId' => $request->unitId,
                    'purchaseUnitPrice' => $request->purchaseUnitPrice,
                    'purchaseTotalPrice' => $request->purchaseTotalPrice,
                    'salesUnitPrice' => $request->salesUnitPrice,
                    'salesTotalPrice' => $request->salesTotalPrice,
                    'openingStatus' => $request->openingStatus,
                    'shopId' => Auth::user()->shopId,
                    'createBy' => Auth::user()->id,
                    'created_at' => Carbon::now()
                  ]);

                }
    public function insertStockInformation($request,$priceTypeId){
     
     
        StockInformation::insert([
                    'productId' => $request->productId,
                    'brandId' => $request->brandId,
                    'purchaseType' => $request->purchaseType,
                    'countryId' => $request->countryId,
                    'colorId' => $request->colorId,
                    'sizeId' => $request->sizeId,
                    'priceTypeId' => $priceTypeId,
                    'quantity' => $request->quantity,
                    'unitId' => $request->unitId,
                    'totalQuantity' => $request->totalQuantity,
                    'finalQuantity' => $request->finalQuantity,
                    'totalUnitId' => $request->unitId,
                    'purchaseUnitPrice' => $request->purchaseUnitPrice,
                    'purchaseTotalPrice' => $request->purchaseTotalPrice,
                    'salesUnitPrice' => $request->salesUnitPrice,
                    'salesTotalPrice' => $request->salesTotalPrice,
                    'openingStatus' => $request->openingStatus,
                    'shopId' => Auth::user()->shopId,
                    'createBy' => Auth::user()->id,
                    'created_at' => Carbon::now()
                  ]);

                }
    public function insertPurchaseProductUnitInfoNotWorking($request,$priceTypeId){
     
     
        PurchaseProductUnitInfo::insert([
                    'productId' => $request->productId,
                    'brandId' => $request->brandId,
                    'purchaseType' => $request->purchaseType,
                    'countryId' => $request->countryId,
                    'colorId' => $request->colorId,
                    'sizeId' => $request->sizeId,
                    'priceTypeId' => $priceTypeId,
                    'quantity' => $request->quantity,
                    'unitId' => $request->unitId,
                    'finalQuantity' => $request->quantity,
                    'totalUnitId' => $request->unitId,
                    'purchaseUnitPrice' => $request->unitPrice,
                    'purchaseTotalPrice' => $request->totalPrice,
                    'salesUnitPrice' => $request->salePrice,
                    'salesTotalPrice' => $request->salePrice*$request->quantity,
                    'openingStatus' => $request->openingStatus,
                    'shopId' => Auth::user()->shopId,
                    'createBy' => Auth::user()->id,
                    'created_at' => Carbon::now()
                  ]);

                }
    public function insertPurchaseProductUnitInfoReturn($request,$priceTypeId){
     
        if(PurchaseReturnInvoiceUnitInfo::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('shopId',Auth::user()->shopId)->exists()){

            $infos = PurchaseProductUnitInfo::where('productId',$request->productId)
            ->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
            foreach($infos as $info){
                if($info->totalQuantity===NULL){
                    $quantity = 1;
                }else{
                    $quantity = $info->quantity;
                }
                PurchaseReturnInvoiceUnitInfo::insert([
                    'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
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
            $unitInfo = PurchaseReturnInvoiceUnitInfo::where('productId',$request->productId)
            ->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
            ->where('openingStatus',0)
            ->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->first();
            
            if($unitInfo->totalQuantity===NULL){
                PurchaseReturnInvoiceUnitInfo::where('productId',$request->productId)
                ->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
                ->where('openingStatus',0)
                ->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->update([
                    'finalQuantity' => DB::raw('finalQuantity + '.$request->quantity),
                    'availableQuantity' => DB::raw('availableQuantity + '.$request->quantity),
                    'purchaseUnitPrice' => $request->unitPrice,
                    'purchaseTotalPrice' => DB::raw('purchaseTotalPrice + '.$request->totalPrice),
                    'salesUnitPrice' => $request->salePrice,
                    'salesTotalPrice' => DB::raw('salesTotalPrice + '.$request->salePrice*$request->quantity),
                    'updateBy' => Auth::user()->id,
                    'updated_at' => Carbon::now()
                ]);
                $lastSingleQuantity = $request->quantity;
            }
            else{
                PurchaseReturnInvoiceUnitInfo::where('productId',$request->productId)
                ->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
                ->where('openingStatus',0)
                ->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->update([
                    'totalQuantity' => DB::raw('totalQuantity + '.$request->quantity),
                    'finalQuantity' => DB::raw('finalQuantity + '.$request->quantity),
                    'availableQuantity' => DB::raw('availableQuantity + '.$request->quantity),
                    'purchaseUnitPrice' => $request->unitPrice,
                    'purchaseTotalPrice' => DB::raw('purchaseTotalPrice + '.$request->totalPrice),
                    'salesUnitPrice' => $request->salePrice,
                    'salesTotalPrice' => DB::raw('salesTotalPrice + '.$request->salePrice*$request->quantity),
                    'updateBy' => Auth::user()->id,
                    'updated_at' => Carbon::now()
               ]);
               $lastSingleQuantity = $request->quantity;
            }


            // --------------------------------- / single 

            // --------------------------------- loop 
            $selectUnitLists = PurchaseReturnInvoiceUnitInfo::where('id','>',$unitInfo->id)->where('openingStatus',0)
            ->where('productId',$request->productId)
                ->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)
                ->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                                
            foreach($selectUnitLists as $selectUnitList){
                
                $info = PurchaseReturnInvoiceUnitInfo::where('unitId',$selectUnitList->unitId)
                ->where('productId',$request->productId)
                ->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('shopId',Auth::user()->shopId)->first();
            
                $unitQuantity = ($lastSingleQuantity*$info->quantity);
                $updateTotalQuantity = $unitQuantity;
                $currentPurchase = ($request->unitPrice/$unitQuantity)*$request->quantity;
                $currentPurchasePrice = $info->purchaseTotalPrice+($request->unitPrice*$request->quantity);
                $currentSales = ($request->salePrice/$unitQuantity)*$request->quantity;
                $currentSalesPrice = $info->salesTotalPrice+($request->salePrice*$request->quantity);
                PurchaseReturnInvoiceUnitInfo::where('id',$selectUnitList->id)->update([
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
         

        }
        else{
        PurchaseReturnInvoiceUnitInfo::insert([
                    'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                    'productId' => $request->productId,
                    'brandId' => $request->brandId,
                    'purchaseType' => $request->purchaseType,
                    'countryId' => $request->countryId,
                    'colorId' => $request->colorId,
                    'sizeId' => $request->sizeId,
                    'priceTypeId' => $priceTypeId,
                    'quantity' => $request->quantity,
                    'unitId' => $request->unitId,
                    'finalQuantity' => $request->quantity,
                    'availableQuantity' => $request->quantity,
                    'totalUnitId' => $request->unitId,
                    'purchaseUnitPrice' => $request->unitPrice,
                    'purchaseTotalPrice' => $request->totalPrice,
                    'salesUnitPrice' => $request->salePrice,
                    'salesTotalPrice' => $request->salePrice*$request->quantity,
                    'openingStatus' => 0,
                    'shopId' => Auth::user()->shopId,
                    'createBy' => Auth::user()->id,
                    'created_at' => Carbon::now()
                  ]);

                }
                }
    public function insertPurchaseProductUnitInfoReturnSubmit($request,$priceTypeId,$quantity,$unitId){
     
         
            // --------------------------------- single 
            $unitInfo = PurchaseReturnInvoiceUnitInfo::where('productId',$request->productId)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->first();
            
                PurchaseReturnInvoiceUnitInfo::where('productId',$request->productId)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
                ->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->update([
                    'returnQuantity' => DB::raw('returnQuantity + '.$quantity),
                    'updateBy' => Auth::user()->id,
                    'updated_at' => Carbon::now()
               ]);
               $lastSingleQuantity = $quantity;
           


            // --------------------------------- / single 

            // --------------------------------- loop 
            $selectUnitLists = PurchaseReturnInvoiceUnitInfo::where('id','>',$unitInfo->id)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                                
            foreach($selectUnitLists as $selectUnitList){
                
                $info = PurchaseReturnInvoiceUnitInfo::where('unitId',$selectUnitList->unitId)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('shopId',Auth::user()->shopId)->first();
            
                $unitQuantity = ($lastSingleQuantity*$info->quantity);
                $updateTotalQuantity = $unitQuantity;
                PurchaseReturnInvoiceUnitInfo::where('id',$selectUnitList->id)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->update([
                    'returnQuantity' =>  DB::raw('returnQuantity + '.$updateTotalQuantity),
                    'updateBy' => Auth::user()->id,
                    'updated_at' => Carbon::now()
                ]);

                 

            //==========
            $lastSingleQuantity = $lastSingleQuantity*$info->quantity;
            }
            // --------------------------------- /loop 
        

      
        }
    public function insertPurchaseProductUnitInfoReturnSubmitDelete($request,$priceTypeId,$quantity,$unitId){
     
            $invoiceInfo = PurchaseReturnProductListTmp::where('productId',$request->productId)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
            ->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->first();
            $quantity = $invoiceInfo->quantity;
            // --------------------------------- single 
            $unitInfo = PurchaseReturnInvoiceUnitInfo::where('productId',$request->productId)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->first();
            
                PurchaseReturnInvoiceUnitInfo::where('productId',$request->productId)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
                ->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->update([
                    'returnQuantity' => DB::raw('returnQuantity - '.$quantity),
                    'updateBy' => Auth::user()->id,
                    'updated_at' => Carbon::now()
               ]);
               $lastSingleQuantity = $quantity;
           


            // --------------------------------- / single 

            // --------------------------------- loop 
            $selectUnitLists = PurchaseReturnInvoiceUnitInfo::where('id','>',$unitInfo->id)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                                
            foreach($selectUnitLists as $selectUnitList){
                
                $info = PurchaseReturnInvoiceUnitInfo::where('unitId',$selectUnitList->unitId)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->where('productId',$request->productId)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('shopId',Auth::user()->shopId)->first();
            
                $unitQuantity = ($lastSingleQuantity*$info->quantity);
                $updateTotalQuantity = $unitQuantity;
                PurchaseReturnInvoiceUnitInfo::where('id',$selectUnitList->id)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->update([
                    'returnQuantity' =>  DB::raw('returnQuantity - '.$updateTotalQuantity),
                    'updateBy' => Auth::user()->id,
                    'updated_at' => Carbon::now()
                ]);

                 

            //==========
            $lastSingleQuantity = $lastSingleQuantity*$info->quantity;
            }
            // --------------------------------- /loop 
        

      
        }

    public function productEntryOpening(Request $request)
    {
        $this->validate($request, [
            'unitId' => 'required',
            'quantity' => 'required',
            'unitPrice' => 'required',
            'salePrice' => 'required',
        ],
        [
           'unitId.required' => 'Select Unit.',
           'quantity.required' => 'Enter Quantity.',
           'unitPrice.required' => 'Enter Price.',
           'salePrice.required' => 'Enter Sale Price.',
        ]);



        if($request->productSupplierId==''){
            $productSupplierId=0;
        }
        else{
            $productSupplierId=$request->productSupplierId;
        }

 

        //   ----------------------

        if(PurchaseProductUnitInfoTmp::where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('countryId',$request->countryId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->exists()){
            
            $lastPriceType = PurchaseProductUnitInfoTmp::where('productId',$request->productId)
            ->where('brandId',$request->brandId)
            ->where('purchaseType',$request->purchaseType)
            ->where('countryId',$request->countryId)
            ->where('colorId',$request->colorId)
            ->where('sizeId',$request->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first()->priceTypeId;
            
        }else{
           
            $lastPriceType = ShopPriceTypeConfigure::first()->priceTypeId; 

        if(ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->exists()){
            $lastPriceType = ShopPriceTypeConfigure::where('shopId',Auth::user()->shopId)->first()->priceTypeId;
          }
          
          }
          $priceTypeId = $lastPriceType;

        //   ----------------------


 
             
 
            $shopTypeId = Auth::user()->shopTypeId;
                  if( $request->percetage==''){
                      $percetage=0;
                  }else{
                    $percetage=$request->percetage ;
                  }
           
                
                $priceSetupStatus=0;
         
          $id = PurchaseProductEntryTmp::insertGetId([
                'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                'productSupplierId' => $productSupplierId,
                'productId' => $request->productId,
                'productBarcode' => $request->productBarcode,
                'brandId' => $request->brandId,
                'purchaseType' => $request->purchaseType,
                'adv_entry_status' => $request->adv_entry_status,
                'countryId' => $request->countryId,
                'quantity' => $request->quantity,
                'unitId' => $request->unitId,
                'colorId' => $request->colorId,
                'sizeId' => $request->sizeId,
                'priceTypeId' => $priceTypeId,
                'salePrice' => $request->salePrice,
                'unitPrice' => $request->unitPrice,
                'totalPrice' => $request->unitPrice*$request->quantity,
                'totalSalesPrice' => $request->salePrice*$request->quantity,
                'discountType' =>  $request->discountType,
                'discount' =>  $percetage,
                'totalWithDiscount' =>  $request->totalPrice,
                'shopId' => Auth::user()->shopId,
                'shopTypeId' => $shopTypeId,
                'openingStatus' => $request->openingStatus,
                'priceSetupStatus' => $priceSetupStatus,
                'rePurchaseStatus' => $request->rePurchaseStatus,
                'createBy' => Auth::User()->id,
                'created_at' => Carbon::now(),
          ]);


          if($request->adv_entry_status==0){
          PurchaseProductUnitInfoTmp::insert([
            'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
            'productId' => $request->productId,
            'brandId' => $request->brandId,
            'purchaseType' => $request->purchaseType,
            'countryId' => $request->countryId,
            'colorId' => $request->colorId,
            'sizeId' => $request->sizeId,
            'priceTypeId' => $priceTypeId,
            'quantity' => $request->quantity,
            'unitId' => $request->unitId,
            'finalQuantity' => $request->quantity,
            'totalUnitId' => $request->unitId,
            'purchaseUnitPrice' => $request->unitPrice,
            'purchaseTotalPrice' => $request->totalPrice,
            'salesUnitPrice' => $request->salePrice,
            'salesTotalPrice' => $request->salePrice*$request->quantity,
            'openingStatus' => $request->openingStatus,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now()
          ]);
        }


          
          
           
        return ['data' => ''];

    }

     
    public function productQuantityUpdate(Request $request){
        PurchaseProductEntry::where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
        ->where('brandId',$request->brandId)
        ->where('purchaseType',$request->purchaseType)
        ->where('productId',$request->productId)
        ->update([
            'quantity' => $request->quantity,
            'unitPrice' => $request->unitPrice,
            'totalPrice' => $request->totalPrice,
        ]);
    }

    public function supplierListGet($productId,$brandId){
     $suppliers=PurchaseProductEntry::with('productSupplierName')->where('productId',$productId)
        ->where('shopId',Auth::user()->shopId)
        ->where('brandId',$brandId)
        ->distinct('productSupplierId')
        ->get('productSupplierId');
        return['suppliers'=>$suppliers];
      
    }
    

    public function supplierListGetRepurchase($productId,$brandId,$color,$size){
        $colorId = 0;
        $sizeId = 0;
        if($color>0){
            $colorId=$color;
        }
        if($size>0){
            $sizeId=$size;
        }

     $suppliers=PurchaseProductEntry::with('productSupplierName')->where('productId',$productId)
        ->where('shopId',Auth::user()->shopId)
        ->where('brandId',$brandId)
        ->where('colorId',$colorId)
        ->where('sizeId',$sizeId)
        ->distinct('productSupplierId')
        ->get('productSupplierId');
        return['suppliers'=>$suppliers];
      
    }

    public function rePurchaseGet($productId,$brandId,$supplierId){
     $infos=PurchaseProductEntry::with('productSupplierName')->where('productId',$productId)
        ->where('shopId',Auth::user()->shopId)
        ->where('brandId',$brandId)
        ->where('productSupplierId',$supplierId)
        ->first();
        $accCode = AddProductSupplierEntry::where('productSupplierId',$supplierId)->first()->accountCode;
        $previousdue = SupplierPayment::where('supplierId',$supplierId)->orderby('id','desc')->where('shopId',Auth::user()->shopId)->first();
        if(empty($previousdue)){
            $previousdue=0;  
        }
        else{
            $previousdue= $previousdue->due; 
        }
        return[
                'infos'=>$infos,
                'accCode'=>$accCode,
                'previousdue'=>$previousdue
              ];
      
    }
    public function rePurchaseGetColor($productId,$brandId,$supplierId,$color){
     $infos=PurchaseProductEntry::with('productSupplierName')->where('productId',$productId)
        ->where('shopId',Auth::user()->shopId)
        ->where('brandId',$brandId)
        ->where('colorId',$color)
        ->where('productSupplierId',$supplierId)
        ->first();
        $accCode = AddProductSupplierEntry::where('productSupplierId',$supplierId)->first()->accountCode;
        $previousdue = SupplierPayment::where('supplierId',$supplierId)->orderby('id','desc')->where('shopId',Auth::user()->shopId)->first();
        if(empty($previousdue)){
            $previousdue=0;  
        }
        else{
            $previousdue= $previousdue->due; 
        }
        return[
                'infos'=>$infos,
                'accCode'=>$accCode,
                'previousdue'=>$previousdue
              ];
      
    }
    public function rePurchaseGetSize($productId,$brandId,$supplierId,$color,$size){
     $infos=PurchaseProductEntry::with('productSupplierName')->where('productId',$productId)
        ->where('shopId',Auth::user()->shopId)
        ->where('brandId',$brandId)
        ->where('colorId',$color)
        ->where('sizeId',$size)
        ->where('productSupplierId',$supplierId)
        ->first();
        $accCode = AddProductSupplierEntry::where('productSupplierId',$supplierId)->first()->accountCode;
        $previousdue = SupplierPayment::where('supplierId',$supplierId)->orderby('id','desc')->where('shopId',Auth::user()->shopId)->first();
        if(empty($previousdue)){
            $previousdue=0;  
        }
        else{
            $previousdue= $previousdue->due; 
        }
        return[
                'infos'=>$infos,
                'accCode'=>$accCode,
                'previousdue'=>$previousdue
              ];
      
    }



    public function purchaseProductDetails(Request $request)
    {
           $shopTypeId = Auth::user()->shopTypeId;

            if (isset($request->quantityNoti) || isset($request->modelNo) || isset($request->batchNo) || isset($request->qrCode) || isset($request->mfgLicenseNO) || isset($request->mfgDate) || isset($request->expiryDate)) {
                
                
                if (PurchaseProductDetails::where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->where('productSupplierId',$request->productSupplierId)->where('purchaseProductId',$request->purchaseProductIdCatch)->exists()) {
                
                 

                    PurchaseProductDetails::where('purchaseProductId',$request->purchaseProductIdCatch)->update([
                        'modelNo' => $request->modelNo,
                        'batchNo' => $request->batchNo,
                        'qrCode' => $request->qrCode,
                        'mfgLicenseNO' => $request->mfgLicenseNO,
                        'warranty' => $request->warranty,
                        'selectMothOrYearWarranty' => $request->selectMothOrYearWarranty,
                        'guarantee' => $request->guarantee,
                        'selectMothOrYearGuarantee' => $request->selectMothOrYearGuarantee,
                        'mfgDate' => $request->mfgDate,
                        'expiryDate' => $request->expiryDate,
                        'quantityType' => $request->quantityType,
                        'quantityNoti' => $request->quantityNoti,
                        'proDescription' => strip_tags($request->proDescription),
                        'proAdvantage' => strip_tags($request->proAdvantage),
                        'updateBy' => Auth::User()->id,
                    ]);
          
                    if (isset($request->tax)) {
                         if ($request->tax == 1) {
                              PurchaseProductDetails::where('purchaseProductId',$request->purchaseProductIdCatch)->update([
                                  'tax' => $request->tax,
                                  'taxAmount' => $request->taxAmount,
                                  'taxAmountType' => $request->taxAmountType,
                              ]);
                         }
                         else {
                             PurchaseProductDetails::where('purchaseProductId',$request->purchaseProductIdCatch)->update([
                                  'tax' => 0,
                              ]);
                         }
                    }

                    
                // ===================================
                // ========== More field information =
                // ===================================


                // ========== one information 
                if (isset($request->fieldNameOne)) {
                if (PurchaseProductMoreField::
                    where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
                    ->where('purchaseProductId',$request->purchaseProductIdCatch)
                    ->where('serialId',1)->exists()) {
                    
                
                PurchaseProductMoreField::where('purchaseProductId',$request->purchaseProductIdCatch)
                    ->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
                    ->where('serialId',1)
                    ->update([
                        'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                        'purchaseProductId' => $request->purchaseProductIdCatch,
                        'optionName' => $request->fieldNameOne,
                        'optionWork' => $request->workOne,
                        'updateBy' => Auth::User()->id,
                    ]);
                    }else{

                PurchaseProductMoreField::insert([
                    'serialId' => 1,
                    'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                    'purchaseProductId' => $request->purchaseProductIdCatch,
                    'optionName' => $request->fieldNameOne,
                    'optionWork' => $request->workOne,
                    'shopId' => Auth::user()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
                ]);
                    }
                    }

                    
                // ========== one information 
                


                // ========== two information 
                
                    if (isset($request->fieldNameTwo)) {
                if (PurchaseProductMoreField::
                    where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
                    ->where('purchaseProductId',$request->purchaseProductIdCatch)
                    ->where('serialId',2)->exists()) {
                    
                
                PurchaseProductMoreField::where('purchaseProductId',$request->purchaseProductIdCatch)
                    ->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
                    ->where('serialId',2)
                    ->update([
                        'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                        'purchaseProductId' => $request->purchaseProductIdCatch,
                        'optionName' => $request->fieldNameTwo,
                        'optionWork' => $request->workTwo,
                        'updateBy' => Auth::User()->id,
                    ]);
                    }else{

                PurchaseProductMoreField::insert([
                    'serialId' => 2,
                    'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                    'purchaseProductId' => $request->purchaseProductIdCatch,
                    'optionName' => $request->fieldNameTwo,
                    'optionWork' => $request->workTwo,
                    'shopId' =>Auth::user()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
                ]);
                    }
                    }

                    
                // ========== two information 
                


                // ========== three information 
                
                if (isset($request->fieldNameThree)) {
                if (PurchaseProductMoreField::
                    where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
                    ->where('purchaseProductId',$request->purchaseProductIdCatch)
                    ->where('serialId',3)->exists()) {
                    
                
                PurchaseProductMoreField::where('purchaseProductId',$request->purchaseProductIdCatch)
                    ->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
                    ->where('serialId',3)
                    ->update([
                        'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                        'purchaseProductId' => $request->purchaseProductIdCatch,
                        'optionName' => $request->fieldNameThree,
                        'optionWork' => $request->workThree,
                        'updateBy' => Auth::User()->id,
                    ]);
                    }else{

                PurchaseProductMoreField::insert([
                    'serialId' => 3,
                    'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                    'purchaseProductId' => $request->purchaseProductIdCatch,
                    'optionName' => $request->fieldNameThree,
                    'optionWork' => $request->workThree,
                    'shopId' => Auth::user()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
                ]);
                    }
                    }

                    
                // ========== three information 
                


                // ========== Fore information 
                
                if (isset($request->fieldNameFour)) {
                if (PurchaseProductMoreField::
                    where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
                    ->where('purchaseProductId',$request->purchaseProductIdCatch)
                    ->where('serialId',4)->exists()) {
                    
                
                PurchaseProductMoreField::where('purchaseProductId',$request->purchaseProductIdCatch)
                    ->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
                    ->where('serialId',4)
                    ->update([
                        'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                        'purchaseProductId' => $request->purchaseProductIdCatch,
                        'optionName' => $request->fieldNameFour,
                        'optionWork' => $request->workFour,
                        'updateBy' => Auth::User()->id,
                    ]);
                    }else{

                PurchaseProductMoreField::insert([
                    'serialId' => 4,
                    'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                    'purchaseProductId' => $request->purchaseProductIdCatch,
                    'optionName' => $request->fieldNameFour,
                    'optionWork' => $request->workFour,
                    'shopId' => Auth::user()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
                ]);
                    }
                    }

                    
                // ========== fore information 
                
                
                // ===================================
                // ========== More field information =
                // ===================================

                



                    return ['alreadyEntry' => 'Update Poroduct Description'];
                }
                else {
                    $purchaseProduct = PurchaseProductEntry::where('purchaseProductId',$request->purchaseProductIdCatch)->first();
                    if($request->productId==''){
                      $pid=$purchaseProduct->productId;
                      $idcatch= $request->purchaseProductIdCatch;
                        }
                        else{
                            $pid=  $request->productId;
                           
                        }
                        if($request->productId){
                        $purchaseProducts = PurchaseProductEntry::where('productId',$request->productId)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->where('productSupplierId',$request->productSupplierId)->first();
                            if($request->purchaseProductIdCatch==''){
                            $idcatch= $purchaseProducts->purchaseProductId;
                            }
                           
                        }
                        PurchaseProductDetails::where('purchaseProductId', $idcatch)->delete();
                    $lastInsertId = PurchaseProductDetails::insertGetId([
                        'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                        'productSupplierId' => $request->productSupplierId,
                        'purchaseProductId' => $idcatch,                       
                        'productId' => $pid,                      
                        'modelNo' => $request->modelNo,
                        'batchNo' => $request->batchNo,
                        'qrCode' => $request->qrCode,
                        'mfgLicenseNO' => $request->mfgLicenseNO,
                        'warranty' => $request->warranty,
                        'selectMothOrYearWarranty' => $request->selectMothOrYearWarranty,
                        'guarantee' => $request->guarantee,
                        'selectMothOrYearGuarantee' => $request->selectMothOrYearGuarantee,
                        'mfgDate' => $request->mfgDate,
                        'expiryDate' => $request->expiryDate,
                        'quantityType' => $request->quantityType,
                        'quantityNoti' => $request->quantityNoti,
                        'proDescription' => strip_tags($request->proDescription),
                        'proAdvantage' => strip_tags($request->proAdvantage),
                        'shopId' => Auth::user()->shopId,
                        'shopTypeId' => $shopTypeId,
                        'createBy' => Auth::User()->id,
                        'created_at' => Carbon::now(),
                    ]);
                }
            }
            else {
               return ['noEntry' => 'Enter Your Information'];
            }
            if (isset($request->tax)) {
                 if ($request->tax == 1) {
                    	PurchaseProductDetails::where('purchaseProductDetailsId',$lastInsertId)->update([
                          'tax' => $request->tax,
                          'taxAmount' => $request->taxAmount,
                          'taxAmountType' => $request->taxAmountType,
                      ]);
                 }
                 else {
                     PurchaseProductDetails::where('purchaseProductDetailsId',$lastInsertId)->update([
                          'tax' => 0,
                      ]);
                 }
            }

            if (isset($request->fieldNameOne)) {
                PurchaseProductMoreField::insert([
                    'serialId' => 1,
                    'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                    'purchaseProductId' => $request->purchaseProductIdCatch,
                    'optionName' => $request->fieldNameOne,
                    'optionWork' => $request->workOne,
                    'shopId' => Auth::user()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
                ]);
            }
            
            if (isset($request->fieldNameTwo)) {
                PurchaseProductMoreField::insert([
                    'serialId' => 2,
                    'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                    'purchaseProductId' => $request->purchaseProductIdCatch,
                    'optionName' => $request->fieldNameTwo,
                    'optionWork' => $request->workTwo,
                    'shopId' =>Auth::user()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
                ]);
            }
            
            if (isset($request->fieldNameThree)) {
                PurchaseProductMoreField::insert([
                    'serialId' => 3,
                    'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                    'purchaseProductId' => $request->purchaseProductIdCatch,
                    'optionName' => $request->fieldNameThree,
                    'optionWork' => $request->workThree,
                    'shopId' => Auth::user()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
                    'created_at' => Carbon::now(),
                ]);
            }
            
            if (isset($request->fieldNameFour)) {
                PurchaseProductMoreField::insert([
                    'serialId' => 4,
                    'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                    'purchaseProductId' => $request->purchaseProductIdCatch,
                    'optionName' => $request->fieldNameFour,
                    'optionWork' => $request->workFour,
                    'shopId' =>Auth::user()->shopId,
                    'shopTypeId' => $shopTypeId,
                    'createBy' => Auth::User()->id,
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
    public function show($purchaseInvoiceId)
    {
        $shopTypeId = Auth::user()->shopTypeId;
        $purchaseProductList = PurchaseProductEntry::with('productName','brandName','unitName')->where('purchaseInvoiceNo',$purchaseInvoiceId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->latest()->get();
        return ['purchaseProductList' => $purchaseProductList];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($purchaseInvoiceId)
    {
        $purchaseInfor = PurchaseInvoice::where('purchaseInvoiceId',$purchaseInvoiceId)->latest()->first();
        return ['purchaseInfor' => $purchaseInfor];
    }
    public function purchaseProductInfo($purchaseProductId)
    {
        $purchaseProductdetail = PurchaseProductDetails::where('purchaseProductId',$purchaseProductId)->latest()->first();
        $purchaseProductMoredetails = PurchaseProductMoreField::where('purchaseProductId',$purchaseProductId)->get();
        return ['purchaseProductdetail' => $purchaseProductdetail , 'purchaseProductMoredetails' => $purchaseProductMoredetails];
    }


    public function invoiceProductMoreDetails($productId,$invoiceNo)
    {
        $invoiceProductMoreDetails = PurchaseProductDetails::where('purchaseProductId',$productId)->where('purchaseInvoiceNo',$invoiceNo)->first();
        $invoiceProductMoreField1 = PurchaseProductMoreField::where('purchaseProductId',$productId)->where('purchaseInvoiceNo',$invoiceNo)->where('serialId',1)->first();
        $invoiceProductMoreField2 = PurchaseProductMoreField::where('purchaseProductId',$productId)->where('purchaseInvoiceNo',$invoiceNo)->where('serialId',2)->first();
        $invoiceProductMoreField3 = PurchaseProductMoreField::where('purchaseProductId',$productId)->where('purchaseInvoiceNo',$invoiceNo)->where('serialId',3)->first();
        $invoiceProductMoreField4 = PurchaseProductMoreField::where('purchaseProductId',$productId)->where('purchaseInvoiceNo',$invoiceNo)->where('serialId',4)->first();

        return [
            'invoiceProductMoreDetailss' => $invoiceProductMoreDetails,
            'invoiceProductMoreField1' => $invoiceProductMoreField1,
            'invoiceProductMoreField2' => $invoiceProductMoreField2,
            'invoiceProductMoreField3' => $invoiceProductMoreField3,
            'invoiceProductMoreField4' => $invoiceProductMoreField4,
        ];
    }
    public function invoiceProductMoreDetailsInfo($productId,$supplierId)
    {
        $invoiceProductMoreDetails = PurchaseProductDetails::where('productId',$productId)->where('productSupplierId',$supplierId)->latest()->first();
        // $invoiceProductMoreField1 = PurchaseProductMoreField::where('purchaseProductId	',$productId)->where('productSupplierId',$supplierId)->where('serialId',1)->first();
        // $invoiceProductMoreField2 = PurchaseProductMoreField::where('purchaseProductId	',$productId)->where('productSupplierId',$supplierId)->where('serialId',2)->first();
        // $invoiceProductMoreField3 = PurchaseProductMoreField::where('purchaseProductId	',$productId)->where('productSupplierId',$supplierId)->where('serialId',3)->first();
        // $invoiceProductMoreField4 = PurchaseProductMoreField::where('purchaseProductId	',$productId)->where('productSupplierId',$supplierId)->where('serialId',4)->first();

        return [
            'invoiceProductMoreDetailss' => $invoiceProductMoreDetails,
            // 'invoiceProductMoreField1' => $invoiceProductMoreField1,
            // 'invoiceProductMoreField2' => $invoiceProductMoreField2,
            // 'invoiceProductMoreField3' => $invoiceProductMoreField3,
            // 'invoiceProductMoreField4' => $invoiceProductMoreField4,
        ];
    }


    public function purchaseProductMoreFieldDelete($id)
    {
        $delete = PurchaseProductMoreField::where('purchaseProductMoreFieldId',$id)->delete();
        
        if($delete){
        return ['delete' => 1];
        }else{
            return ['delete' => 0];
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $purchaseInvoiceId)
    {

           $this->validate($request, [
                'productSupplierId' => 'required',
            ],
            [
               'productSupplierId.required' => 'Select Product Supplier  Name',
            ]);

            PurchaseInvoice::where('purchaseInvoiceId',$purchaseInvoiceId)->update([
                  'productSupplierId' => $request->productSupplierId,
                  'purchaseType' => $request->purchaseType,
                  'totalPurchaseValue' => $request->totalPurchaseValue,
                  'carriageInward' => $request->carriageInward,
                  'totalAmount' => $request->totalAmount,
                  'discount' => $request->discount,
                  'supplierPayable' => $request->supplierPayable,
                  'otherCost' => $request->otherCost,
                  'damageAndWarranty' => $request->damageAndWarranty,
                  'totalProductCost' => $request->totalProductCost,
                  'currentPayable' => $request->currentPayable,
                  'updateBy' => Auth::User()->id,
            ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function purchaseProductDetailsUpdate(Request $request)
    {
           PurchaseProductDetails::where('purchaseProductId',$request->purchaseProductIdCatch)->update([
              'modelNo' => $request->modelNo,
              'batchNo' => $request->batchNo,
              'qrCode' => $request->qrCode,
              'mfgLicenseNO' => $request->mfgLicenseNO,
              'warranty' => $request->warranty,
              'selectMothOrYearWarranty' => $request->selectMothOrYearWarranty,
              'guarantee' => $request->guarantee,
              'selectMothOrYearGuarantee' => $request->selectMothOrYearGuarantee,
              'mfgDate' => $request->mfgDate,
              'expiryDate' => $request->expiryDate,
              'quantityType' => $request->quantityType,
              'quantityNoti' => $request->quantityNoti,
              'proDescription' => strip_tags($request->proDescription),
              'proAdvantage' => strip_tags($request->proAdvantage),
              'updateBy' => Auth::User()->id,
          ]);

          if (isset($request->tax)) {
               if ($request->tax == 1) {
                    PurchaseProductDetails::where('purchaseProductId',$request->purchaseProductIdCatch)->update([
                        'tax' => $request->tax,
                        'taxAmount' => $request->taxAmount,
                        'taxAmountType' => $request->taxAmountType,
                    ]);
               }
               else {
                   PurchaseProductDetails::where('purchaseProductId',$request->purchaseProductIdCatch)->update([
                        'tax' => 0,
                    ]);
               }
          }

    }
    public function purchaseProductDetailsUpdateinfo(Request $request ,$id)
    {
           PurchaseProductDetails::where('purchaseProductId',$id)->update([
              'modelNo' => $request->modelNo,
              'batchNo' => $request->batchNo,
              'qrCode' => $request->qrCode,
              'mfgLicenseNO' => $request->mfgLicenseNO,
              'warranty' => $request->warranty,
              'selectMothOrYearWarranty' => $request->selectMothOrYearWarranty,
              'guarantee' => $request->guarantee,
              'selectMothOrYearGuarantee' => $request->selectMothOrYearGuarantee,
              'mfgDate' => $request->mfgDate,
              'expiryDate' => $request->expiryDate,
              'quantityType' => $request->quantityType,
              'quantityNoti' => $request->quantityNoti,
              'proDescription' => strip_tags($request->proDescription),
              'proAdvantage' => strip_tags($request->proAdvantage),
              'updateBy' => Auth::User()->id,
          ]);

          if (isset($request->tax)) {
               if ($request->tax == 1) {
                    PurchaseProductDetails::where('purchaseProductId',$request->purchaseProductIdCatch)->update([
                        'tax' => $request->tax,
                        'taxAmount' => $request->taxAmount,
                        'taxAmountType' => $request->taxAmountType,
                    ]);
               }
               else {
                   PurchaseProductDetails::where('purchaseProductId',$request->purchaseProductIdCatch)->update([
                        'tax' => 0,
                    ]);
               }
          }

    }
    public function destroy($purchaseProductId)
    {
      
        
        $data = PurchaseProductEntryTmp::where('purchaseProductId',$purchaseProductId)->first();
        
                
            PurchaseProductUnitInfoTmp::where('productId',$data->productId)
                ->where('brandId',$data->brandId)
                ->where('purchaseType',$data->purchaseType)
                ->where('priceTypeId',$data->priceTypeId)
                ->where('countryId',$data->countryId)
                ->where('colorId',$data->colorId)
                ->where('sizeId',$data->sizeId)
                ->where('shopId',Auth::user()->shopId)->delete();


        PurchaseProductEntryTmp::where('purchaseProductId',$purchaseProductId)->delete();

    }
    
    
    
    public function destroyNotWork($purchaseProductId)
    {
        if (PurchaseProductDetails::where('purchaseProductId',$purchaseProductId)->exists()) {
            $purchaseProductDetailsId = PurchaseProductDetails::where('purchaseProductId',$purchaseProductId)->latest()->first();
            PurchaseProductDetails::where('purchaseProductDetailsId',$purchaseProductDetailsId->purchaseProductDetailsId)->delete();
        }
        
        $data=PurchaseProductEntry::where('purchaseProductId',$purchaseProductId)->first();
        $invoiceProductInfo=PurchaseProductEntry::where('purchaseProductId',$purchaseProductId)->first();
       
        


        
            //   =========================================================
            //   ========================== advance unit calculation





            

            $priceTypeId = $invoiceProductInfo->priceTypeId;


                //   ========================== advance unit calculation

                // --------------------------------- single 
                
                $unitInfo = PurchaseProductUnitInfo::where('productId',$invoiceProductInfo->productId)->where('brandId',$invoiceProductInfo->brandId)->where('colorId',$invoiceProductInfo->colorId)->where('sizeId',$invoiceProductInfo->sizeId)->where('unitId',$invoiceProductInfo->unitId)->where('shopId',Auth::user()->shopId)->first();
                
                if($unitInfo->totalQuantity===NULL){
                    PurchaseProductUnitInfo::where('productId',$invoiceProductInfo->productId)->where('brandId',$invoiceProductInfo->brandId)->where('colorId',$invoiceProductInfo->colorId)->where('sizeId',$invoiceProductInfo->sizeId)->where('unitId',$invoiceProductInfo->unitId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => DB::raw('quantity - '.$invoiceProductInfo->quantity),
                        'finalQuantity' => DB::raw('finalQuantity - '.$invoiceProductInfo->quantity),
                        'purchaseTotalPrice' => DB::raw('purchaseTotalPrice - '.$invoiceProductInfo->totalPrice),
                        'salesTotalPrice' => DB::raw('salesTotalPrice - '.$invoiceProductInfo->totalSalesPrice),
                    ]);
                    $lastSingleQuantity = $invoiceProductInfo->quantity;
                }
                else{
                    PurchaseProductUnitInfo::where('productId',$invoiceProductInfo->productId)->where('brandId',$invoiceProductInfo->brandId)->where('colorId',$invoiceProductInfo->colorId)->where('sizeId',$invoiceProductInfo->sizeId)->where('unitId',$invoiceProductInfo->unitId)->where('shopId',Auth::user()->shopId)->update([
                        'totalQuantity' => DB::raw('totalQuantity - '.$invoiceProductInfo->quantity),
                        'finalQuantity' => DB::raw('finalQuantity - '.$invoiceProductInfo->quantity),
                        'purchaseTotalPrice' => DB::raw('purchaseTotalPrice - '.$invoiceProductInfo->totalPrice),
                        'salesTotalPrice' => DB::raw('salesTotalPrice - '.$invoiceProductInfo->totalSalesPrice),
                   ]);
                   $lastSingleQuantity = $invoiceProductInfo->quantity;
                }

                // --------------------------------- / single 

                // --------------------------------- loop 
                $selectUnitLists = PurchaseProductUnitInfo::where('id','>',$unitInfo->id)->where('priceTypeId',$priceTypeId)->where('productId',$invoiceProductInfo->productId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                                    
                foreach($selectUnitLists as $selectUnitList){
                    
                    $unitQuantity = ($lastSingleQuantity*$selectUnitList->quantity);
                    $updateTotalQuantity = $selectUnitList->totalQuantity-$unitQuantity;
                    $currentPurchase = ($invoiceProductInfo->unitPrice/$unitQuantity)*$invoiceProductInfo->quantity;
                    $currentPurchasePrice = $selectUnitList->purchaseTotalPrice-($invoiceProductInfo->unitPrice*$invoiceProductInfo->quantity);
                    $currentSales = ($invoiceProductInfo->salePrice/$unitQuantity)*$invoiceProductInfo->quantity;
                    $currentSalesPrice = $selectUnitList->salesTotalPrice-($invoiceProductInfo->salePrice*$invoiceProductInfo->quantity);
                    PurchaseProductUnitInfo::where('id',$selectUnitList->id)->update([
                        'totalQuantity' => $updateTotalQuantity,
                        'finalQuantity' => $updateTotalQuantity,
                        'purchaseUnitPrice' => $currentPurchase,
                        'purchaseTotalPrice' => $currentPurchasePrice,
                        'salesUnitPrice' => $currentSales,
                        'salesTotalPrice' => $currentSalesPrice,
                    ]);
                    
                

                //==========
                $lastSingleQuantity = $lastSingleQuantity*$selectUnitList->quantity;
                }
                // --------------------------------- /loop 
                //   ========================== /advance unit calculation






                



                     // ---------------------------
        $lastPUnitInfo = PurchaseProductUnitInfo::
        where('productId',$invoiceProductInfo->productId)
        ->where('brandId',$invoiceProductInfo->brandId)
        ->where('colorId',$invoiceProductInfo->colorId)
        ->where('sizeId',$invoiceProductInfo->sizeId)
        ->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first();
            
        PurchaseProductUnitInfo::
        where('productId',$invoiceProductInfo->productId)
        ->where('brandId',$invoiceProductInfo->brandId)
        ->where('colorId',$invoiceProductInfo->colorId)
        ->where('sizeId',$invoiceProductInfo->sizeId)
        ->where('shopId',Auth::user()->shopId)->update([
            'purchaseTotalPrice' => $lastPUnitInfo->purchaseTotalPrice,
            'salesTotalPrice' => $lastPUnitInfo->salesTotalPrice,
        ]);
        //------------------------
            
                    // ================= loop for top serial
                    $this->updateUnitQuantityBottomToTop($invoiceProductInfo,$priceTypeId);
                    // ================= /loop for top serial
            
 
                    // ------------- get last quantity
                    $this->updateLastQuantityInStock($invoiceProductInfo,$priceTypeId);
                    // ------------- /get last quantity


            
            //   ========================== /advance unit calculation
            //   =========================================================









                
            PurchaseProductUnitInfoHistory::where('productId',$data->productId)
                ->where('purchaseInvoiceNo',$data->purchaseInvoiceNo)
                ->where('brandId',$data->brandId)
                ->where('purchaseType',$data->purchaseType)
                ->where('priceTypeId',$data->priceTypeId)
                ->where('countryId',$data->countryId)
                ->where('colorId',$data->colorId)
                ->where('sizeId',$data->sizeId)
                ->where('shopId',Auth::user()->shopId)->delete();
                
         

                
                PurchaseReturnInvoiceUnitInfo::where('productId',$data->productId)
                ->where('purchaseInvoiceNo',$data->purchaseInvoiceNo)
                ->where('brandId',$data->brandId)
                ->where('purchaseType',$data->purchaseType)
                ->where('priceTypeId',$data->priceTypeId)
                ->where('countryId',$data->countryId)
                ->where('colorId',$data->colorId)
                ->where('sizeId',$data->sizeId)
                ->where('shopId',Auth::user()->shopId)->delete();

        PurchaseProductEntry::where('purchaseProductId',$purchaseProductId)->delete();

    }
}
