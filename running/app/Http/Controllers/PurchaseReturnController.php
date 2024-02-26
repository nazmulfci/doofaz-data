<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Accounting\chartOfAccountController;
use App\PurchaseProductEntry;
use App\PurchaseInvoice;
use App\PurchaseProductTotalPrice;
use App\PurchaseProductTotalQuantity;
use App\PurchaseReturnHistory;
use App\SupplierPayment;
use App\AddProductSupplierEntry;
use App\ChartOfAccountRegister;
use App\StatementInformation;
use App\AccountSetup;
use App\voucherInformation;
use App\voucherType;
use App\voucherInformationReport;
use App\ReceivePaymentStatement;
use App\StockSummery;
use App\ShopAddBankEntry;

use App\PurchaseReturnInvoiceTmp;
use App\PurchaseReturnProductListTmp;
use App\PurchaseProductUnitInfo;
use App\PurchaseProductUnitInfoHistory;
use App\ShopPriceTypeConfigure;
use App\PurchaseReturnInvoiceUnitInfo;

use App\SalesReturnInvoiceTmp;
use App\SalesReturnProductListTmp;
use App\SalesCustomerEntry;
use App\SalesProductEntry;
use App\SalesReturnInvoiceUnitInfo;

use Auth;
use DB;
use Carbon\Carbon;
class PurchaseReturnController extends Controller
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
        $getInvoice=PurchaseProductEntry::where('shopId',Auth::user()->shopId)->where('shopTypeId',Auth::user()->shopTypeId)->orderby('purchaseProductId','desc')->distinct('purchaseInvoiceNo')->get('purchaseInvoiceNo');
        return ['getInvoice'=>$getInvoice];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       
    }
    public function returnPList($id)
    {
        $getData=PurchaseProductEntry::with('productSupplierName','productName','unitName','brandname')->where('returnStatus',1)->where('purchaseInvoiceNo', $id)->where('shopId',Auth::user()->shopId)->get();

        return ['getData'=> $getData];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

     
    public function store(Request $request)
    {
        $returnInvoiceNo = 1;
        if(PurchaseReturnInvoiceTmp::where('shopId',Auth::user()->shopId)->orderBy('returnInvoiceNo','DESC')->exists()){
        $returnInvoiceNo = PurchaseReturnInvoiceTmp::where('shopId',Auth::user()->shopId)->orderBy('returnInvoiceNo','DESC')->first()->returnInvoiceNo+1;
        }
        $data = PurchaseReturnInvoiceTmp::insertGetId([
                'returnDate' => $request->purchaseReturnDate,
                'returnInvoiceNo' => $returnInvoiceNo,
                'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
                'purchaseTypeId' => 0,
                'productSupplierId' => $request->purchaseSupplier,
                'totalPurchaseValue' => $request->grandTotal,
                'carriageInward' => 0,
                'totalAmount' => $request->grandTotal,
                'discount' => $request->invoiceDiscount,
                'supplierPayable' => $request->supplierPayable,
                'otherCost' => 0,
                'damageAndWarranty' => 0,
                'totalProductCost' => $request->totalProductCost,
                'previousPayableDue' => 0,
                'currentDue' =>  $request->currentPayable,
                'currentPayable' =>  $request->currentPayable,
                'shopId' => Auth::user()->shopId,
                'shopTypeId' => Auth::user()->shopTypeId,
                'shopUserId' => Auth::User()->id,
                'createBy' => Auth::User()->id,
                'created_at' => Carbon::now()
        ]);





        $infos = PurchaseReturnProductListTmp::
            where('shopId', Auth::user()->shopId)->
            where('createBy', Auth::user()->id)->
            where('returnInvoiceNo',0)->get();

            foreach($infos as $info){

    //==============================================================================
    //============================= Return advance unit calculation  ===============
            
            $this->insertPurchaseProductUnitInfoReturnSubmit($info,$info->priceTypeId,$info->quantity,$info->unitId);


            // ================= loop for top serial
            $this->updateUnitQuantityBottomToTopReturnSubmit($info,$info->priceTypeId);
            // ================= /loop for top serial
            
    //============================= /Return advance unit calculation   =============
    //==============================================================================

            }


        
        PurchaseReturnProductListTmp::
        where('shopId', Auth::user()->shopId)->
        where('createBy', Auth::user()->id)->
        where('returnInvoiceNo', 0)->update([
            'returnInvoiceNo' => $returnInvoiceNo,
            'status' => 1
        ]);



        return ['data' => $data];
    }

    public function updateUnitQuantityBottomToTopReturnSubmit($request,$priceTypeId){

        $loopInfos = PurchaseReturnInvoiceUnitInfo::distinct()->where('priceTypeId',$priceTypeId)
                    ->where('productId',$request->productId)
                    ->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
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
                        if($select->availableQuantity>0){
                        $updateQuantity = intval($select->availableQuantity/$select->quantity);
                        }
                        else{
                        $updateQuantity = 0;
                        }
                        

                        $checkUnitInfo = PurchaseReturnInvoiceUnitInfo::where('id',$idExs[$i+1])->first()->totalQuantity;
                    if($checkUnitInfo===NULL){
                        PurchaseReturnInvoiceUnitInfo::where('id',$idExs[$i+1])->update([
                        'availableQuantity' => $updateQuantity,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    }else{
                        PurchaseReturnInvoiceUnitInfo::where('id',$idExs[$i+1])->update([
                        'availableQuantity' => $updateQuantity,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    }
                    }
                    }
    }
    

    public function insertPurchaseProductUnitInfoReturnSubmit($request,$priceTypeId,$quantity,$unitId){
     
         
        // --------------------------------- single 
        $unitInfo = PurchaseReturnInvoiceUnitInfo::where('productId',$request->productId)
        ->where('openingStatus',0)
        ->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->first();
        
            PurchaseReturnInvoiceUnitInfo::where('productId',$request->productId)
            ->where('openingStatus',0)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
            ->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->update([
                'returnQuantity' => DB::raw('returnQuantity + '.$quantity),
                'availableQuantity' => DB::raw('finalQuantity - returnQuantity'),
                'updateBy' => Auth::user()->id,
                'updated_at' => Carbon::now()
           ]);
           $lastSingleQuantity = $quantity;
       


        // --------------------------------- / single 

        // --------------------------------- loop 
        $selectUnitLists = PurchaseReturnInvoiceUnitInfo::where('id','>',$unitInfo->id)
        ->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
        ->where('openingStatus',0)
        ->where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)
        ->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                            
        foreach($selectUnitLists as $selectUnitList){
            
            $info = PurchaseReturnInvoiceUnitInfo::where('unitId',$selectUnitList->unitId)
            ->where('openingStatus',0)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->where('productId',$selectUnitList->productId)->where('brandId',$selectUnitList->brandId)->where('colorId',$selectUnitList->colorId)->where('sizeId',$selectUnitList->sizeId)->where('priceTypeId',$priceTypeId)->where('shopId',Auth::user()->shopId)->first();
        
            $unitQuantity = ($lastSingleQuantity*$info->quantity);
            $updateTotalQuantity = $unitQuantity;
            PurchaseReturnInvoiceUnitInfo::where('id',$selectUnitList->id)->where('openingStatus',0)->where('unitId',$selectUnitList->unitId)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->where('productId',$selectUnitList->productId)->where('brandId',$selectUnitList->brandId)->where('colorId',$selectUnitList->colorId)->where('sizeId',$selectUnitList->sizeId)->where('priceTypeId',$priceTypeId)->where('shopId',Auth::user()->shopId)
            ->update([
                'returnQuantity' =>  DB::raw('returnQuantity + '.$updateTotalQuantity),
                'availableQuantity' => DB::raw('finalQuantity - returnQuantity'),
                'updateBy' => Auth::user()->id,
                'updated_at' => Carbon::now()
            ]);

             

        //==========
        $lastSingleQuantity = $lastSingleQuantity*$info->quantity;
        }
      
        // --------------------------------- /loop 
    

  
    }

    public function returnSales(Request $request)
    {
        $returnInvoiceNo = 1;
        if(SalesReturnInvoiceTmp::where('returnInvoiceNo','>',0)->where('shopId',Auth::user()->shopId)->exists()){
           $invo =  SalesReturnInvoiceTmp::where('returnInvoiceNo','>',0)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first()->returnInvoiceNo;
            $returnInvoiceNo = $invo+1;
        }
        $data = SalesReturnInvoiceTmp::insertGetId([
                'returnDate' =>         $request->purchaseReturnDate,
                'returnInvoiceNo' =>     $returnInvoiceNo,
                'salesInvoiceNo' =>     $request->purchaseInvoiceNo,
                'priceType' => 0,
                'customerId' =>         $request->purchaseSupplier,
                'totalPurchaseValue' => $request->grandTotal,
                'discount' =>           $request->invoiceDiscount,
                'previousPayableDue' => 0,
                'currentDue' =>         $request->currentPayable,
                'currentPayable' =>     $request->currentPayable,
                'shopId' => Auth::user()->shopId,
                'shopTypeId' => Auth::user()->shopTypeId,
                'shopUserId' => Auth::User()->id,
                'createBy' => Auth::User()->id,
                'created_at' => Carbon::now(),
                ]);




                $infos = SalesReturnProductListTmp::
            where('shopId', Auth::user()->shopId)->
            where('createBy', Auth::user()->id)->
            where('returnInvoiceNo', 0)->get();

            foreach($infos as $info){

                //==============================================================================
                //============================= Return advance unit calculation  ===============
                        
                        $this->insertSalesProductUnitInfoReturnSubmit($info,$info->priceType,$info->quantity,$info->unitId);
            
            
                        // ================= loop for top serial
                        $this->updateSalesUnitQuantityBottomToTopReturnSubmit($info,$info->priceType);
                        // ================= /loop for top serial
                        
                //============================= /Return advance unit calculation   =============
                //==============================================================================
            
                        }

      

        SalesReturnProductListTmp::
            where('shopId', Auth::user()->shopId)->
            where('createBy', Auth::user()->id)->
            where('returnInvoiceNo', 0)->update([
                'returnInvoiceNo' => $returnInvoiceNo,
                'status' => 1
            ]);

        return ['data' => $data];
    }

    public function updateSalesUnitQuantityBottomToTopReturnSubmit($request,$priceTypeId){

        $loopInfos = SalesReturnInvoiceUnitInfo::distinct()->where('priceTypeId',$priceTypeId)
                    ->where('productId',$request->productId)
                    ->where('salesInvoiceNo',$request->salesInvoiceNo)
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
                        $select = SalesReturnInvoiceUnitInfo::where('id',$idExs[$i])->first();
                        if($select->availableQuantity>0){
                        $updateQuantity = intval($select->availableQuantity/$select->quantity);
                        }
                        else{
                        $updateQuantity = 0;
                        }
                        

                        $checkUnitInfo = SalesReturnInvoiceUnitInfo::where('id',$idExs[$i+1])->first()->totalQuantity;
                    if($checkUnitInfo===NULL){
                        SalesReturnInvoiceUnitInfo::where('id',$idExs[$i+1])->update([
                        'availableQuantity' => $updateQuantity,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    }else{
                        SalesReturnInvoiceUnitInfo::where('id',$idExs[$i+1])->update([
                        'availableQuantity' => $updateQuantity,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    }
                    }
                    }
    }
    

    public function insertSalesProductUnitInfoReturnSubmit($request,$priceTypeId,$quantity,$unitId){
     
         
        // --------------------------------- single 
        $unitInfo = SalesReturnInvoiceUnitInfo::where('productId',$request->productId)
        ->where('openingStatus',0)
        ->where('salesInvoiceNo',$request->salesInvoiceNo)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->first();
        
        SalesReturnInvoiceUnitInfo::where('productId',$request->productId)
            ->where('openingStatus',0)->where('salesInvoiceNo',$request->salesInvoiceNo)
            ->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->update([
                'returnQuantity' => DB::raw('returnQuantity + '.$quantity),
                'availableQuantity' => DB::raw('finalQuantity - returnQuantity'),
                'updateBy' => Auth::user()->id,
                'updated_at' => Carbon::now()
           ]);
           $lastSingleQuantity = $quantity;
       


        // --------------------------------- / single 

        // --------------------------------- loop 
        $selectUnitLists = SalesReturnInvoiceUnitInfo::where('id','>',$unitInfo->id)
        ->where('salesInvoiceNo',$request->salesInvoiceNo)
        ->where('openingStatus',0)
        ->where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)
        ->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                            
        foreach($selectUnitLists as $selectUnitList){
            
            $info = SalesReturnInvoiceUnitInfo::where('unitId',$selectUnitList->unitId)
            ->where('openingStatus',0)->where('salesInvoiceNo',$request->salesInvoiceNo)->where('productId',$selectUnitList->productId)->where('brandId',$selectUnitList->brandId)->where('colorId',$selectUnitList->colorId)->where('sizeId',$selectUnitList->sizeId)->where('priceTypeId',$priceTypeId)->where('shopId',Auth::user()->shopId)->first();
        
            $unitQuantity = ($lastSingleQuantity*$info->quantity);
            $updateTotalQuantity = $unitQuantity;
            SalesReturnInvoiceUnitInfo::where('id',$selectUnitList->id)->where('openingStatus',0)->where('unitId',$selectUnitList->unitId)->where('salesInvoiceNo',$request->salesInvoiceNo)->where('productId',$selectUnitList->productId)->where('brandId',$selectUnitList->brandId)->where('colorId',$selectUnitList->colorId)->where('sizeId',$selectUnitList->sizeId)->where('priceTypeId',$priceTypeId)->where('shopId',Auth::user()->shopId)
            ->update([
                'returnQuantity' =>  DB::raw('returnQuantity + '.$updateTotalQuantity),
                'availableQuantity' => DB::raw('finalQuantity - returnQuantity'),
                'updateBy' => Auth::user()->id,
                'updated_at' => Carbon::now()
            ]);

             

        //==========
        $lastSingleQuantity = $lastSingleQuantity*$info->quantity;
        }
      
        // --------------------------------- /loop 
    

  
    }


    public function purchaseReturnCheckQuantity($id,$unitId){

        $productInfo = PurchaseProductEntry::where('purchaseProductId',$id)->first();

        $stock = 0;


                $returnInfo = PurchaseReturnInvoiceUnitInfo::where('productId',$productInfo->productId)
                ->where('purchaseInvoiceNo',$productInfo->purchaseInvoiceNo)
                ->where('brandId',$productInfo->brandId)
                ->where('unitId',$unitId)
                ->where('openingStatus',0)
                ->where('sizeId',$productInfo->sizeId)
                ->where('colorId',$productInfo->colorId)
                ->where('priceTypeId',$productInfo->priceTypeId)
                ->where('shopId',Auth::user()->shopId)
                ->first();

                $stock = $returnInfo->availableQuantity;
              

         
 
        return ['stock' => $stock];

    }

    public function salesReturnCheckQuantity($id,$unitId){

        $productInfo = SalesProductEntry::where('salesProductEntryId',$id)->first();

        $stock = 0;


                $returnInfo = SalesReturnInvoiceUnitInfo::where('productId',$productInfo->productId)
                ->where('salesInvoiceNo',$productInfo->salesInvoiceNo)
                ->where('brandId',$productInfo->brandId)
                ->where('unitId',$unitId)
                ->where('openingStatus',0)
                ->where('sizeId',$productInfo->sizeId)
                ->where('colorId',$productInfo->colorId)
                ->where('priceTypeId',$productInfo->priceType)
                ->where('shopId',Auth::user()->shopId)
                ->first();

                $stock = $returnInfo->availableQuantity;
              

         
 
        return ['stock' => $stock];

    }


    public function purchaseReturnInvoiceInfoPay($id){
 
        $invoiceInfo = PurchaseReturnInvoiceTmp::where('id',$id)->first();
        $invoiceAmount = $invoiceInfo->totalProductCost;
        $supplierPayable = $invoiceInfo->currentPayable;

        $invoiceInfo1 =  AddProductSupplierEntry::where('productSupplierId',$invoiceInfo->productSupplierId)->first();
        $accCode = $invoiceInfo1->accountCode;

        $amount = StatementInformation::where('accountCode',$accCode)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first()->balanceAmount;
 
        
        return ['totalAmount' => $amount];

    }

    public function purchaseReturnInvoiceDelete($id){
 
        $invoiceInfo = PurchaseReturnInvoiceTmp::where('id',$id)->first();

        $infos = PurchaseReturnProductListTmp::
        where('shopId', Auth::user()->shopId)->
        where('returnInvoiceNo',$invoiceInfo->returnInvoiceNo)->get();

        foreach($infos as $info){

    //==============================================================================
    //============================= Return advance unit calculation  ===============
            
    $this->insertPurchaseProductUnitInfoReturnSubmitDelete($info,$info->priceTypeId,$info->quantity,$info->unitId);


    // ================= loop for top serial
    $this->updateUnitQuantityBottomToTopReturnSubmitDelete($info,$info->priceTypeId);
    // ================= /loop for top serial
    
//============================= /Return advance unit calculation   =============
//==============================================================================

        }

        PurchaseReturnProductListTmp::
        where('shopId', Auth::user()->shopId)->
        where('returnInvoiceNo',$invoiceInfo->returnInvoiceNo)->delete();

        $delete = PurchaseReturnInvoiceTmp::where('id',$id)->delete();
        
        return ['delete' => $delete];

    }
    public function updateUnitQuantityBottomToTopReturnSubmitDelete($request,$priceTypeId){

        $loopInfos = PurchaseReturnInvoiceUnitInfo::distinct()->where('priceTypeId',$priceTypeId)
                    ->where('productId',$request->productId)
                    ->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
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
                        if($select->availableQuantity>0){
                        $updateQuantity = intval($select->availableQuantity/$select->quantity);
                        }
                        else{
                        $updateQuantity = 0;
                        }
                        

                        $checkUnitInfo = PurchaseReturnInvoiceUnitInfo::where('id',$idExs[$i+1])->first()->totalQuantity;
                    if($checkUnitInfo===NULL){
                        PurchaseReturnInvoiceUnitInfo::where('id',$idExs[$i+1])->update([
                        'availableQuantity' => $updateQuantity,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    }else{
                        PurchaseReturnInvoiceUnitInfo::where('id',$idExs[$i+1])->update([
                        'availableQuantity' => $updateQuantity,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    }
                    }
                    }
    }
    public function insertPurchaseProductUnitInfoReturnSubmitDelete($request,$priceTypeId,$quantity,$unitId){
     
         
        // --------------------------------- single 
        $unitInfo = PurchaseReturnInvoiceUnitInfo::where('productId',$request->productId)
        ->where('openingStatus',0)
        ->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->first();
        
            PurchaseReturnInvoiceUnitInfo::where('productId',$request->productId)->where('openingStatus',0)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
            ->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->update([
                'returnQuantity' => DB::raw('returnQuantity - '.$quantity),
                'availableQuantity' => DB::raw('availableQuantity + '.$quantity),
                'updateBy' => Auth::user()->id,
                'updated_at' => Carbon::now()
           ]);
           $lastSingleQuantity = $quantity;
       


        // --------------------------------- / single 

        // --------------------------------- loop 
        $selectUnitLists = PurchaseReturnInvoiceUnitInfo::where('id','>',$unitInfo->id)
        ->where('openingStatus',0)
        ->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)
        ->where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)
        ->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                            
        foreach($selectUnitLists as $selectUnitList){
            
            $info = PurchaseReturnInvoiceUnitInfo::where('unitId',$selectUnitList->unitId)->where('openingStatus',0)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->where('productId',$selectUnitList->productId)->where('brandId',$selectUnitList->brandId)->where('colorId',$selectUnitList->colorId)->where('sizeId',$selectUnitList->sizeId)->where('priceTypeId',$priceTypeId)->where('shopId',Auth::user()->shopId)->first();
        
            $unitQuantity = ($lastSingleQuantity*$info->quantity);
            $updateTotalQuantity = $unitQuantity;
            PurchaseReturnInvoiceUnitInfo::where('id',$selectUnitList->id)->where('openingStatus',0)->where('unitId',$selectUnitList->unitId)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->where('productId',$selectUnitList->productId)->where('brandId',$selectUnitList->brandId)->where('colorId',$selectUnitList->colorId)->where('sizeId',$selectUnitList->sizeId)->where('priceTypeId',$priceTypeId)->where('shopId',Auth::user()->shopId)
            ->update([
                'returnQuantity' =>  DB::raw('returnQuantity - '.$updateTotalQuantity),
                'availableQuantity' =>  DB::raw('availableQuantity + '.$updateTotalQuantity),
                'updateBy' => Auth::user()->id,
                'updated_at' => Carbon::now()
            ]);

             

        //==========
        $lastSingleQuantity = $lastSingleQuantity*$info->quantity;
        }
      
        // --------------------------------- /loop 
    

  
    }


    public function salesReturnInvoiceDelete($id){
 
        $invoiceInfo = SalesReturnInvoiceTmp::where('id',$id)->first();

        $infos = SalesReturnProductListTmp::
        where('shopId', Auth::user()->shopId)->
        where('returnInvoiceNo',$invoiceInfo->returnInvoiceNo)->get();

        foreach($infos as $info){

    //==============================================================================
    //============================= Return advance unit calculation  ===============
            
    $this->insertSalesProductUnitInfoReturnSubmitDelete($info,$info->priceType,$info->quantity,$info->unitId);


    // ================= loop for top serial
    $this->updateSalesUnitQuantityBottomToTopReturnSubmitDelete($info,$info->priceType);
    // ================= /loop for top serial
    
//============================= /Return advance unit calculation   =============
//==============================================================================

        }

        SalesReturnProductListTmp::
        where('shopId', Auth::user()->shopId)->
        where('returnInvoiceNo',$invoiceInfo->returnInvoiceNo)->delete();

        $delete = SalesReturnInvoiceTmp::where('id',$id)->delete();
        
        return ['delete' => $delete];

    }
    public function updateSalesUnitQuantityBottomToTopReturnSubmitDelete($request,$priceTypeId){

        $loopInfos = SalesReturnInvoiceUnitInfo::distinct()->where('priceTypeId',$priceTypeId)
                    ->where('productId',$request->productId)
                    ->where('salesInvoiceNo',$request->salesInvoiceNo)
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
                        $select = SalesReturnInvoiceUnitInfo::where('id',$idExs[$i])->first();
                        if($select->availableQuantity>0){
                        $updateQuantity = intval($select->availableQuantity/$select->quantity);
                        }
                        else{
                        $updateQuantity = 0;
                        }
                        

                        $checkUnitInfo = SalesReturnInvoiceUnitInfo::where('id',$idExs[$i+1])->first()->totalQuantity;
                    if($checkUnitInfo===NULL){
                        SalesReturnInvoiceUnitInfo::where('id',$idExs[$i+1])->update([
                        'availableQuantity' => $updateQuantity,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    }else{
                        SalesReturnInvoiceUnitInfo::where('id',$idExs[$i+1])->update([
                        'availableQuantity' => $updateQuantity,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now()
                    ]);
                    }
                    }
                    }
    }
    public function insertSalesProductUnitInfoReturnSubmitDelete($request,$priceTypeId,$quantity,$unitId){
     
         
        // --------------------------------- single 
        $unitInfo = SalesReturnInvoiceUnitInfo::where('productId',$request->productId)
        ->where('openingStatus',0)
        ->where('salesInvoiceNo',$request->salesInvoiceNo)->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->first();
        
        SalesReturnInvoiceUnitInfo::where('productId',$request->productId)->where('openingStatus',0)->where('salesInvoiceNo',$request->salesInvoiceNo)
            ->where('brandId',$request->brandId)->where('colorId',$request->colorId)->where('sizeId',$request->sizeId)->where('priceTypeId',$priceTypeId)->where('unitId',$request->unitId)->where('shopId',Auth::user()->shopId)->update([
                'returnQuantity' => DB::raw('returnQuantity - '.$quantity),
                'availableQuantity' => DB::raw('availableQuantity + '.$quantity),
                'updateBy' => Auth::user()->id,
                'updated_at' => Carbon::now()
           ]);
           $lastSingleQuantity = $quantity;
       


        // --------------------------------- / single 

        // --------------------------------- loop 
        $selectUnitLists = SalesReturnInvoiceUnitInfo::where('id','>',$unitInfo->id)
        ->where('openingStatus',0)
        ->where('salesInvoiceNo',$request->salesInvoiceNo)
        ->where('productId',$request->productId)
        ->where('brandId',$request->brandId)
        ->where('colorId',$request->colorId)
        ->where('sizeId',$request->sizeId)
        ->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                            
        foreach($selectUnitLists as $selectUnitList){
            
            $info = SalesReturnInvoiceUnitInfo::where('unitId',$selectUnitList->unitId)->where('openingStatus',0)->where('salesInvoiceNo',$request->salesInvoiceNo)->where('productId',$selectUnitList->productId)->where('brandId',$selectUnitList->brandId)->where('colorId',$selectUnitList->colorId)->where('sizeId',$selectUnitList->sizeId)->where('priceTypeId',$priceTypeId)->where('shopId',Auth::user()->shopId)->first();
        
            $unitQuantity = ($lastSingleQuantity*$info->quantity);
            $updateTotalQuantity = $unitQuantity;
            SalesReturnInvoiceUnitInfo::where('id',$selectUnitList->id)->where('openingStatus',0)->where('unitId',$selectUnitList->unitId)->where('salesInvoiceNo',$request->salesInvoiceNo)->where('productId',$selectUnitList->productId)->where('brandId',$selectUnitList->brandId)->where('colorId',$selectUnitList->colorId)->where('sizeId',$selectUnitList->sizeId)->where('priceTypeId',$priceTypeId)->where('shopId',Auth::user()->shopId)
            ->update([
                'returnQuantity' =>  DB::raw('returnQuantity - '.$updateTotalQuantity),
                'availableQuantity' =>  DB::raw('availableQuantity + '.$updateTotalQuantity),
                'updateBy' => Auth::user()->id,
                'updated_at' => Carbon::now()
            ]);

             

        //==========
        $lastSingleQuantity = $lastSingleQuantity*$info->quantity;
        }
      
        // --------------------------------- /loop 
    

  
    }


    public function purchaseReturnSupplierDue($supplierId){
 
        $invoiceInfo =  AddProductSupplierEntry::where('productSupplierId',$supplierId)->first();
        $accCode = $invoiceInfo->accountCode;

        $amount = StatementInformation::where('accountCode',$accCode)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first()->balanceAmount;

        if($amount>0){
            $supplierDue = $amount;
        }else
        {
            $supplierDue = 0;
        }
         
        
        return ['supplierDue' => $supplierDue];

    }

    public function salesReturnCustomerDue($supplierId){
 
        $invoiceInfo =  SalesCustomerEntry::where('salesCustomerEntryId',$supplierId)->first();
        $accCode = $invoiceInfo->accountCode;

        $amount = StatementInformation::where('accountCode',$accCode)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first()->balanceAmount;

        if($amount<0){
            $supplierDue = $amount;
        }else
        {
            $supplierDue = 0;
        }
         
        
        return ['supplierDue' => $supplierDue];

    }



    public function purchaseReturnApprove(Request $request){


        $id = $request->returnInvoiceId;
        $invoiceInfo = PurchaseReturnInvoiceTmp::where('id',$id)->first();
        $invoiceId = $id;
        $invoiceProductInfos = PurchaseReturnProductListTmp::where('returnInvoiceNo',$invoiceInfo->returnInvoiceNo)->where('shopId',Auth::user()->shopId)->get();

        foreach($invoiceProductInfos as $invoiceProductInfo){

            $priceTypeId = $invoiceProductInfo->priceTypeId;


                //   ========================== advance unit calculation

                // --------------------------------- single 
                
                $unitInfo = PurchaseProductUnitInfo::where('productId',$invoiceProductInfo->productId)->where('brandId',$invoiceProductInfo->brandId)->where('colorId',$invoiceProductInfo->colorId)->where('sizeId',$invoiceProductInfo->sizeId)->where('priceTypeId',$invoiceProductInfo->priceTypeId)->where('unitId',$invoiceProductInfo->unitId)->where('shopId',Auth::user()->shopId)->first();
                
                if($unitInfo->totalQuantity===NULL){
                    PurchaseProductUnitInfo::where('productId',$invoiceProductInfo->productId)->where('brandId',$invoiceProductInfo->brandId)->where('colorId',$invoiceProductInfo->colorId)->where('sizeId',$invoiceProductInfo->sizeId)->where('priceTypeId',$invoiceProductInfo->priceTypeId)->where('unitId',$invoiceProductInfo->unitId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => DB::raw('quantity - '.$invoiceProductInfo->quantity),
                        'finalQuantity' => DB::raw('finalQuantity - '.$invoiceProductInfo->quantity),
                        'purchaseTotalPrice' => DB::raw('purchaseTotalPrice - '.$invoiceProductInfo->totalWithDiscount),
                        'salesTotalPrice' => DB::raw('salesTotalPrice - '.$invoiceProductInfo->totalSalesPrice),
                    ]);
                    $lastSingleQuantity = $invoiceProductInfo->quantity;
                }
                else{
                    PurchaseProductUnitInfo::where('productId',$invoiceProductInfo->productId)->where('brandId',$invoiceProductInfo->brandId)->where('colorId',$invoiceProductInfo->colorId)->where('sizeId',$invoiceProductInfo->sizeId)->where('priceTypeId',$invoiceProductInfo->priceTypeId)->where('unitId',$invoiceProductInfo->unitId)->where('shopId',Auth::user()->shopId)->update([
                        'totalQuantity' => DB::raw('totalQuantity - '.$invoiceProductInfo->quantity),
                        'finalQuantity' => DB::raw('finalQuantity - '.$invoiceProductInfo->quantity),
                        'purchaseTotalPrice' => DB::raw('purchaseTotalPrice - '.$invoiceProductInfo->totalWithDiscount),
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






                if(1){


                    // ---------------------------
                     $lastPUnitInfo = PurchaseProductUnitInfo::where('priceTypeId',$priceTypeId)
                    ->where('productId',$invoiceProductInfo->productId)
                    ->where('brandId',$invoiceProductInfo->brandId)
                    ->where('colorId',$invoiceProductInfo->colorId)
                    ->where('sizeId',$invoiceProductInfo->sizeId)
                    ->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first();
                        
                    PurchaseProductUnitInfo::where('priceTypeId',$priceTypeId)
                    ->where('productId',$invoiceProductInfo->productId)
                    ->where('brandId',$invoiceProductInfo->brandId)
                    ->where('colorId',$invoiceProductInfo->colorId)
                    ->where('sizeId',$invoiceProductInfo->sizeId)
                    ->where('shopId',Auth::user()->shopId)->update([
                        'purchaseTotalPrice' => $lastPUnitInfo->purchaseTotalPrice,
                        'salesTotalPrice' => $lastPUnitInfo->salesTotalPrice,
                    ]);//------------------------
            
            
                    // ================= loop for top serial
                      
                    $loopInfos = PurchaseProductUnitInfo::distinct()->where('priceTypeId',$priceTypeId)
                    ->where('productId',$invoiceProductInfo->productId)
                    ->where('brandId',$invoiceProductInfo->brandId)
                    ->where('colorId',$invoiceProductInfo->colorId)
                    ->where('sizeId',$invoiceProductInfo->sizeId)
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
                        $updateQuantity = intval($select->totalQuantity/$select->quantity);
                        }
                        else{
                        $updateQuantity = 0;
                        }
                        

                        $checkUnitInfo = PurchaseProductUnitInfo::where('id',$idExs[$i+1])->first()->totalQuantity;
                    if($checkUnitInfo===NULL){
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
                    if(PurchaseProductUnitInfo::where('finalQuantity','>',0)->where('priceTypeId',$priceTypeId)
                    ->where('productId',$invoiceProductInfo->productId)
                    ->where('brandId',$invoiceProductInfo->brandId)
                    ->where('colorId',$invoiceProductInfo->colorId)
                    ->where('sizeId',$invoiceProductInfo->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->exists()){
                    $lastQuantityPriceInfo = PurchaseProductUnitInfo::where('finalQuantity','>',0)->where('priceTypeId',$priceTypeId)
                    ->where('productId',$invoiceProductInfo->productId)
                    ->where('brandId',$invoiceProductInfo->brandId)
                    ->where('colorId',$invoiceProductInfo->colorId)
                    ->where('sizeId',$invoiceProductInfo->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first();
                    
                    StockSummery::where('productId',$invoiceProductInfo->productId)
                    ->where('brandId',$invoiceProductInfo->brandId)
                    ->where('colorId',$invoiceProductInfo->colorId)
                    ->where('sizeId',$invoiceProductInfo->sizeId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => $lastQuantityPriceInfo->finalQuantity,
                        'unitId' => $lastQuantityPriceInfo->unitId,
                        'totalPrice' => $lastQuantityPriceInfo->purchaseTotalPrice,
                    ]);
                    }
                    else{
                        $lastQuantityPriceInfo = PurchaseProductUnitInfo::where('priceTypeId',$priceTypeId)
                    ->where('productId',$invoiceProductInfo->productId)
                    ->where('brandId',$invoiceProductInfo->brandId)
                    ->where('colorId',$invoiceProductInfo->colorId)
                    ->where('sizeId',$invoiceProductInfo->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first();
                    
                    StockSummery::where('productId',$invoiceProductInfo->productId)
                    ->where('brandId',$invoiceProductInfo->brandId)
                    ->where('colorId',$invoiceProductInfo->colorId)
                    ->where('sizeId',$invoiceProductInfo->sizeId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => $lastQuantityPriceInfo->finalQuantity,
                        'unitId' => $lastQuantityPriceInfo->unitId,
                        'totalPrice' => $lastQuantityPriceInfo->purchaseTotalPrice,
                    ]);
                    }
                    // ------------- /get last quantity
                    }


 

                
            
        }


        PurchaseReturnInvoiceTmp::where('id',$invoiceId)->update([
            'status' => 1
        ]);

        
    // ==========================================================================================================

        





      //  --------------------------------------------------------------------
      //  ------------------ voucher & statement information -----------------
      //  --------------------------------------------------------------------


      
      $companyId = $invoiceInfo->productSupplierId;
      $referance = 'Pro-Supp-'.$companyId;
      $title = 'Product purchase Return to supplier';
      $companyAccountCode = AddProductSupplierEntry::where('shopId',Auth::user()->shopId)->where('productSupplierId',$invoiceInfo->productSupplierId)->first()->accountCode;
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

      $balanceAmount = $balanceAmountDb+$invoiceInfo->totalProductCost;

      StatementInformation::insert([
          'shopId' => Auth::user()->shopId,
          'rendomNumber' => $rendomNumber,
          'type' => 0,
          'accountHeadCode' => $companyAccountHeadCode,
          'accountCode' => $companyAccountCode,
          'title' => $title,
          'referance' => $referance,
          'paymentType' => 0,
          'dueAmount' => $invoiceInfo->currentDue,
          'debitAmount' => $invoiceInfo->totalProductCost,
          'balanceAmount' => $balanceAmount,
          'note' => $title,
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
                  $voucherAmount = ($invoiceInfo->totalPurchaseValue-$invoiceInfo->discount);
                
                      $headCode1 = AccountSetup::where('placementType','1')->where('headName','1')->first()->headCode;
                      $headOfAccounts = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
                  
                      $voucherType = 6;
                      $headCode2 = AddProductSupplierEntry::where('productSupplierId',$invoiceInfo->productSupplierId)->first()->accountCode;
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
                        'accountCodeDebit' => $headCode2,
                        'accountCodeCredit' => $headCode1,
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
                        'type' => 1,
                        'voucherAmount' => $voucherAmount-$invoiceInfo->discount,
                        'randId' => '0',
      
                        'particular' => $particular,
                        'day' => $day,
                        'month' => $month,
                        'year' => $year,
                        'createBy' => Auth::user()->id,
                        'created_at' => Carbon::now(),
                    ]);
              
                    if($invoiceInfo->discount){
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
                        'type' => 1,
                        'voucherAmount' => $invoiceInfo->discount,
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
                  $voucherAmount = ($invoiceInfo->carriageInward+$invoiceInfo->otherCost+$invoiceInfo->damageAndWarranty);
                
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
                        'accountCodeDebit' => $headCode2,
                        'accountCodeCredit' => $headCode1,
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

                  //   ----------- Credit Voucher 
                  if($invoiceInfo->carriageInward){
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
                        'type' => 2,
                        'voucherAmount' => $invoiceInfo->carriageInward,
                        
                        'randId' => '0',
      
                        'particular' => $particular,
                        'day' => $day,
                        'month' => $month,
                        'year' => $year,
                        'createBy' => Auth::user()->id,
                        'created_at' => Carbon::now(),
                    ]);
                  }
              
                    if($invoiceInfo->otherCost){
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
                        'type' => 2,
                        'voucherAmount' => $invoiceInfo->otherCost,
                        'randId' => '0',
      
                        'particular' => $particular,
                        'day' => $day,
                        'month' => $month,
                        'year' => $year,
                        'createBy' => Auth::user()->id,
                        'created_at' => Carbon::now(),
                    ]);
                  }
              
                    if($invoiceInfo->damageAndWarranty){
                      
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
                        'type' => 2,
                        'voucherAmount' => $invoiceInfo->damageAndWarranty,
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

                  //   ----------- Debit Voucher 
                    
                  if($invoiceInfo->damageAndWarranty){
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
                        'type' => 1,
                        'voucherAmount' => $invoiceInfo->damageAndWarranty,
                        
                        'randId' => '0',
      
                        'particular' => $particular,
                        'day' => $day,
                        'month' => $month,
                        'year' => $year,
                        'createBy' => Auth::user()->id,
                        'created_at' => Carbon::now(),
                    ]);
                  }
              
                    if($invoiceInfo->otherCost){
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
                        'type' => 1,
                        'voucherAmount' => $invoiceInfo->otherCost,
                        'randId' => '0',
      
                        'particular' => $particular,
                        'day' => $day,
                        'month' => $month,
                        'year' => $year,
                        'createBy' => Auth::user()->id,
                        'created_at' => Carbon::now(),
                    ]);
                  }
              
                    if($invoiceInfo->carriageInward){
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
                        'type' => 1,
                        'voucherAmount' => $invoiceInfo->carriageInward,
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
              $voucherAmount = ($invoiceInfo->totalPurchaseValue-$invoiceInfo->discount);
                
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
      
                        'accountsHeadCode' => $headOfAccounts2,
                        'accountCodeDebit' => $headCode2,
                        'accountCodeCredit' => $headCode1,
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
      
                        'accountsHeadCode' => $headOfAccounts1,
                        'accountsCode' => $headCode1,
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

                  //   ----------- debit Voucher 
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
              
                    
                    //   ----------- / debit Voucher

      // ==========================================================
      // ============// #3 Journal Voucher Information ============
      // ==========================================================
      




      //  --------------------------------------------------------------------
      //  ----------------- /voucher & statement information -----------------
      //  --------------------------------------------------------------------



     // =========================  For cash bank payment ==============================================================================
        
         


        //  --------------------------------------------------------------------
        //  ------------------ voucher & statement information -----------------
        //  --------------------------------------------------------------------


        
        $salesCustomerId = $request->returnInvoiceId;
        $companyId = $salesCustomerId;
        $referance = 'Pro-Supp-'.$companyId;
        $title = 'Supplier Invoice Return By Cash';
        $companyAccountCode = AddProductSupplierEntry::where('productSupplierId',$salesCustomerId)->first()->accountCode;
        $companyAccountHeadCode = ChartOfAccountRegister::where('headCode',$companyAccountCode)->first()->pre_code;
        
        $rendomNumber = substr(time(),0,12);
        
         
         
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
            $balanceAmount = $balanceAmountDb-$request->currentPaidAmount;
            $dr_cr_amount = $request->currentPaidAmount;
            $expenseTitle = 'Cash Receive for return.';
            $title = 'Supplier cash Receive for return.';
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

                $voucherUniqueId = time().'1';
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
                
                  
                        $headCode1 = AddProductSupplierEntry::where('productSupplierId',$salesCustomerId)->first()->accountCode;
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
                          'accountCodeDebit' => $headCode2,
                          'accountCodeCredit' => $headCode1,
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
            chartOfAccountController::balanceUpdate(
            $creditHeadCodeForBalance,
            $creditCodeForBalance,
            $debitHeadCodeForBalance,
            $debitCodeForBalance,
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
                          'receiverBankAccountName' => ' ',
                          'chequeNo' => '  ',
                          'chequeDate' => $voucherDate,
        
                          'accountsHeadCode' => $headOfAccounts,
                          'accountsCode' => $headCode1,
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
            $expenseTitle = 'Bank receive for return.';
            $title = 'Supplier bank receive for return.';
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

                $voucherUniqueId = time().'2';
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
                
                  
                        $headCode1 = AddProductSupplierEntry::where('productSupplierId',$salesCustomerId)->first()->accountCode;
                        $headOfAccounts = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
                    
                     
                        $voucherType = 3;
                        $headCode2 = ShopAddBankEntry::where('bankId',$request->receiverbankAccountId)->first()->accountCode;
                     
        
        
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
                          'accountCodeDebit' => $headCode2,
                          'accountCodeCredit' => $headCode1,
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


       
        // ========================== /For cash bank payment =========================================================
    
      
        // ==========================================================================================================
    }





    public function purchaseReturnBillReceive(Request $request){




            
        // =========================  For cash bank payment ==============================================================================
        
         


        //  --------------------------------------------------------------------
        //  ------------------ voucher & statement information -----------------
        //  --------------------------------------------------------------------


        
        $salesCustomerId = $request->returnInvoiceId;
        $companyId = $salesCustomerId;
        $referance = 'Pro-Supp-'.$companyId;
        $title = 'Supplier Invoice Return By Cash';
        $companyAccountCode = AddProductSupplierEntry::where('productSupplierId',$salesCustomerId)->first()->accountCode;
        $companyAccountHeadCode = ChartOfAccountRegister::where('headCode',$companyAccountCode)->first()->pre_code;
        
        $rendomNumber = substr(time(),0,12);
        
         
         
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
            $balanceAmount = $balanceAmountDb-$request->currentPaidAmount;
            $dr_cr_amount = $request->currentPaidAmount;
            $expenseTitle = 'Cash Receive for return.';
            $title = 'Supplier cash Receive for return.';
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

                $voucherUniqueId = time().'1';
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
                
                  
                        $headCode1 = AddProductSupplierEntry::where('productSupplierId',$salesCustomerId)->first()->accountCode;
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
                          'accountCodeDebit' => $headCode2,
                          'accountCodeCredit' => $headCode1,
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
            chartOfAccountController::balanceUpdate(
            $creditHeadCodeForBalance,
            $creditCodeForBalance,
            $debitHeadCodeForBalance,
            $debitCodeForBalance,
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
                          'receiverBankAccountName' => ' ',
                          'chequeNo' => '  ',
                          'chequeDate' => $voucherDate,
        
                          'accountsHeadCode' => $headOfAccounts,
                          'accountsCode' => $headCode1,
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
            $expenseTitle = 'Bank receive for return.';
            $title = 'Supplier bank receive for return.';
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

                $voucherUniqueId = time().'2';
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
                
                  
                        $headCode1 = AddProductSupplierEntry::where('productSupplierId',$salesCustomerId)->first()->accountCode;
                        $headOfAccounts = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
                    
                     
                        $voucherType = 3;
                        $headCode2 = ShopAddBankEntry::where('bankId',$request->receiverbankAccountId)->first()->accountCode;
                     
        
        
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
                          'accountCodeDebit' => $headCode2,
                          'accountCodeCredit' => $headCode1,
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


       
        // ========================== /For cash bank payment =========================================================
    
      
        // ==========================================================================================================
    }



    public function salesReturnInvoiceApproveOld(Request $request){



        $id = $request->returnInvoiceId;
        $invoiceInfo = SalesReturnInvoiceTmp::where('id',$id)->first();
        $invoiceId = $id;
        $invoiceProductInfos = SalesReturnProductListTmp::where('returnInvoiceNo',$invoiceInfo->returnInvoiceNo)->where('shopId',Auth::user()->shopId)->get();

        foreach($invoiceProductInfos as $invoiceProductInfo){

            $priceTypeId = $invoiceProductInfo->priceType;


                //   ========================== advance unit calculation

                // --------------------------------- single 
                
                $unitInfo = PurchaseProductUnitInfo::where('productId',$invoiceProductInfo->productId)->where('brandId',$invoiceProductInfo->brandId)->where('colorId',$invoiceProductInfo->colorId)->where('sizeId',$invoiceProductInfo->sizeId)->where('priceTypeId',$invoiceProductInfo->priceType)->where('unitId',$invoiceProductInfo->unitId)->where('shopId',Auth::user()->shopId)->first();
                
                if($unitInfo->totalQuantity===NULL){
                    PurchaseProductUnitInfo::where('productId',$invoiceProductInfo->productId)->where('brandId',$invoiceProductInfo->brandId)->where('colorId',$invoiceProductInfo->colorId)->where('sizeId',$invoiceProductInfo->sizeId)->where('priceTypeId',$invoiceProductInfo->priceType)->where('unitId',$invoiceProductInfo->unitId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => DB::raw('quantity + '.$invoiceProductInfo->quantity),
                        'finalQuantity' => DB::raw('finalQuantity + '.$invoiceProductInfo->quantity),
                        'purchaseTotalPrice' => DB::raw('purchaseTotalPrice + '.$invoiceProductInfo->totalPurchasePrice),
                        'salesTotalPrice' => DB::raw('salesTotalPrice + '.$invoiceProductInfo->totalPrice),
                    ]);
                    $lastSingleQuantity = $invoiceProductInfo->quantity;
                }
                else{
                    PurchaseProductUnitInfo::where('productId',$invoiceProductInfo->productId)->where('brandId',$invoiceProductInfo->brandId)->where('colorId',$invoiceProductInfo->colorId)->where('sizeId',$invoiceProductInfo->sizeId)->where('priceTypeId',$invoiceProductInfo->priceType)->where('unitId',$invoiceProductInfo->unitId)->where('shopId',Auth::user()->shopId)->update([
                        'totalQuantity' => DB::raw('totalQuantity + '.$invoiceProductInfo->quantity),
                        'finalQuantity' => DB::raw('finalQuantity + '.$invoiceProductInfo->quantity),
                        'purchaseTotalPrice' => DB::raw('purchaseTotalPrice + '.$invoiceProductInfo->totalPurchasePrice),
                        'salesTotalPrice' => DB::raw('salesTotalPrice + '.$invoiceProductInfo->totalPrice),
                   ]);
                   $lastSingleQuantity = $invoiceProductInfo->quantity;
                }

                // --------------------------------- / single 

                // --------------------------------- loop 
                $selectUnitLists = PurchaseProductUnitInfo::where('id','>',$unitInfo->id)->where('priceTypeId',$priceTypeId)->where('productId',$invoiceProductInfo->productId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->get();
                                    
                foreach($selectUnitLists as $selectUnitList){
                    
                    $unitQuantity = ($lastSingleQuantity*$selectUnitList->quantity);
                    $updateTotalQuantity = $selectUnitList->totalQuantity+$unitQuantity;
                    $currentPurchase = ($invoiceProductInfo->unitPurchasePrice/$unitQuantity)*$invoiceProductInfo->quantity;
                    $currentPurchasePrice = $selectUnitList->purchaseTotalPrice+($invoiceProductInfo->unitPurchasePrice*$invoiceProductInfo->quantity);
                    $currentSales = ($invoiceProductInfo->salePrice/$unitQuantity)*$invoiceProductInfo->quantity;
                    $currentSalesPrice = $selectUnitList->salesTotalPrice+($invoiceProductInfo->salePrice*$invoiceProductInfo->quantity);
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






                if(1){


                    // ---------------------------
                     $lastPUnitInfo = PurchaseProductUnitInfo::where('priceTypeId',$priceTypeId)
                    ->where('productId',$invoiceProductInfo->productId)
                    ->where('brandId',$invoiceProductInfo->brandId)
                    ->where('colorId',$invoiceProductInfo->colorId)
                    ->where('sizeId',$invoiceProductInfo->sizeId)
                    ->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first();
                        
                    PurchaseProductUnitInfo::where('priceTypeId',$priceTypeId)
                    ->where('productId',$invoiceProductInfo->productId)
                    ->where('brandId',$invoiceProductInfo->brandId)
                    ->where('colorId',$invoiceProductInfo->colorId)
                    ->where('sizeId',$invoiceProductInfo->sizeId)
                    ->where('shopId',Auth::user()->shopId)->update([
                        'purchaseTotalPrice' => $lastPUnitInfo->purchaseTotalPrice,
                        'salesTotalPrice' => $lastPUnitInfo->salesTotalPrice,
                    ]);//------------------------
            
            
                    // ================= loop for top serial
                      
                    $loopInfos = PurchaseProductUnitInfo::distinct()->where('priceTypeId',$priceTypeId)
                    ->where('productId',$invoiceProductInfo->productId)
                    ->where('brandId',$invoiceProductInfo->brandId)
                    ->where('colorId',$invoiceProductInfo->colorId)
                    ->where('sizeId',$invoiceProductInfo->sizeId)
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
                        $updateQuantity = intval($select->totalQuantity/$select->quantity);
                        }
                        else{
                        $updateQuantity = 0;
                        }
                        

                        $checkUnitInfo = PurchaseProductUnitInfo::where('id',$idExs[$i+1])->first()->totalQuantity;
                    if($checkUnitInfo===NULL){
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
                    if(PurchaseProductUnitInfo::where('finalQuantity','>',0)->where('priceTypeId',$priceTypeId)
                    ->where('productId',$invoiceProductInfo->productId)
                    ->where('brandId',$invoiceProductInfo->brandId)
                    ->where('colorId',$invoiceProductInfo->colorId)
                    ->where('sizeId',$invoiceProductInfo->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->exists()){
                    $lastQuantityPriceInfo = PurchaseProductUnitInfo::where('finalQuantity','>',0)->where('priceTypeId',$priceTypeId)
                    ->where('productId',$invoiceProductInfo->productId)
                    ->where('brandId',$invoiceProductInfo->brandId)
                    ->where('colorId',$invoiceProductInfo->colorId)
                    ->where('sizeId',$invoiceProductInfo->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first();
                    
                    StockSummery::where('productId',$invoiceProductInfo->productId)
                    ->where('brandId',$invoiceProductInfo->brandId)
                    ->where('colorId',$invoiceProductInfo->colorId)
                    ->where('sizeId',$invoiceProductInfo->sizeId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => $lastQuantityPriceInfo->finalQuantity,
                        'unitId' => $lastQuantityPriceInfo->unitId,
                        'totalPrice' => $lastQuantityPriceInfo->purchaseTotalPrice,
                    ]);
                    }
                    else{
                        $lastQuantityPriceInfo = PurchaseProductUnitInfo::where('priceTypeId',$priceTypeId)
                    ->where('productId',$invoiceProductInfo->productId)
                    ->where('brandId',$invoiceProductInfo->brandId)
                    ->where('colorId',$invoiceProductInfo->colorId)
                    ->where('sizeId',$invoiceProductInfo->sizeId)->where('shopId',Auth::user()->shopId)->orderBy('id','ASC')->first();
                    
                    StockSummery::where('productId',$invoiceProductInfo->productId)
                    ->where('brandId',$invoiceProductInfo->brandId)
                    ->where('colorId',$invoiceProductInfo->colorId)
                    ->where('sizeId',$invoiceProductInfo->sizeId)->where('shopId',Auth::user()->shopId)->update([
                        'quantity' => $lastQuantityPriceInfo->finalQuantity,
                        'unitId' => $lastQuantityPriceInfo->unitId,
                        'totalPrice' => $lastQuantityPriceInfo->purchaseTotalPrice,
                    ]);
                    }
                    // ------------- /get last quantity
                    }


 

                
            
        }

        SalesReturnInvoiceTmp::where('id',$invoiceId)->update([
            'status' => 1
        ]);

        
    // ==========================================================================================================
 
        





        //  --------------------------------------------------------------------
        //  ------------------ voucher & statement information -----------------
        //  --------------------------------------------------------------------


        
        $companyId = $invoiceInfo->customerId;
        $referance = 'customer-'.$companyId;
        $title = 'Customer Invoice Return';
        $companyAccountCode = SalesCustomerEntry::where('salesCustomerEntryId',$companyId)->first()->accountCode;
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

        $balanceAmount = $balanceAmountDb-$invoiceInfo->totalPurchaseValue;

        StatementInformation::insert([
            'shopId' => Auth::user()->shopId,
            'rendomNumber' => $rendomNumber,
            'type' => 0,
            'accountHeadCode' => $companyAccountHeadCode,
            'accountCode' => $companyAccountCode,
            'title' => $title,
            'referance' => $referance,
            'paymentType' => 0, // Due
            'dueAmount' => $invoiceInfo->totalPurchaseValue,
            'debitAmount' => $invoiceInfo->totalPurchaseValue,
            'balanceAmount' => $balanceAmount,
            'note' => $title,
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
            $voucherAmount = ($invoiceInfo->totalPurchaseValue-$invoiceInfo->discount);
          
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

                  'accountsHeadCode' => $headOfAccounts2,
                  'accountCodeDebit' => $headCode2,
                  'accountCodeCredit' => $headCode1,
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

              if($invoiceInfo->discount){
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
                  'type' => 2,
                  'voucherAmount' => $invoiceInfo->discount,
                  
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
                  'type' => 1,
                  'voucherAmount' => $voucherAmount-$invoiceInfo->discount,
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
        $voucherAmount = ($invoiceInfo->totalPurchaseValue-$invoiceInfo->discount);
          
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

                  'accountsHeadCode' => $headOfAccounts2,
                  'accountCodeDebit' => $headCode2,
                  'accountCodeCredit' => $headCode1,
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
        
              
              //   ----------- / Credit Voucher

// ==========================================================
// ============// #2 Journal Voucher Information ============
// ==========================================================

 
         
                


        //  --------------------------------------------------------------------
        //  ----------------- /voucher & statement information -----------------
        //  --------------------------------------------------------------------


        // ==========================================================================================================
    }


    

    
    public function salesReturnBillReceive(Request $request){


        // =========================  For cash bank payment ==============================================================================
        
         


        //  --------------------------------------------------------------------
        //  ------------------ voucher & statement information -----------------
        //  --------------------------------------------------------------------


        
        $salesCustomerId = $request->returnInvoiceId;
        $companyId = $salesCustomerId;
        $referance = 'customer-'.$companyId;
        $title = 'Customer Invoice Return';
        $companyAccountCode = SalesCustomerEntry::where('salesCustomerEntryId',$salesCustomerId)->first()->accountCode;
        $companyAccountHeadCode = ChartOfAccountRegister::where('headCode',$companyAccountCode)->first()->pre_code;
        
        $rendomNumber = substr(time(),0,12);
        
         
         
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
            $expenseTitle = 'Cash payment for return.';
            $title = 'Customer cash payment for return.';
        // }else if($request->paymentType==2){
        //     $balanceAmount = $balanceAmountDb+$request->mobileAmount;
        //     $expenseTitle = 'Bank Payment';
        //     $dr_cr_amount = $request->mobileAmount;
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

                $voucherUniqueId = time().'1';
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
                
                  
                        $headCode1 = SalesCustomerEntry::where('SalesCustomerEntryId',$salesCustomerId)->first()->accountCode;
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

            $debitHeadCodeForBalance = chartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
            $debitCodeForBalance = $headCode2;
            $creditHeadCodeForBalance = 0;
            $creditCodeForBalance = 0;
            // balanceUpdate(headCode1,code1,headCode2,code2,dr,cr,balance);
            chartOfAccountController::balanceUpdate(
            $creditHeadCodeForBalance,
            $creditCodeForBalance,
            $debitHeadCodeForBalance,
            $debitCodeForBalance,
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
                            'type' => 2,
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
            $balanceAmount = $balanceAmountDb+$request->mobileAmount;
            $expenseTitle = 'Bank receive for return.';
            $title = 'Customer bank receive for return.';
            $dr_cr_amount = $request->mobileAmount;
        // }
        
        StatementInformation::insert([
            'shopId' => Auth::user()->shopId,
            'rendomNumber' => $rendomNumber,
            'type' => 1,
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

                $voucherUniqueId = time().'2';
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
                
                  
                        $headCode1 = SalesCustomerEntry::where('salesCustomerEntryId',$salesCustomerId)->first()->accountCode;
                        $headOfAccounts = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
                    
                     
                        $voucherType = 3;
                        $headCode2 = ShopAddBankEntry::where('bankId',$request->receiverbankAccountId)->first()->accountCode;
                     
        
        
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

            $debitHeadCodeForBalance = chartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
            $debitCodeForBalance = $headCode2;
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
                            'type' => 2,
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


       
        // ========================== /For cash bank payment =========================================================
            }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $getProduct=PurchaseProductEntry::with('productSupplierName','productName','unitName','brandName')->where('returnStatus',0)->where('purchaseInvoiceNo',$id)->where('shopId',Auth::user()->shopId)->where('shopTypeId',Auth::user()->shopTypeId)->orderby('purchaseProductId','desc')->get();
        $count=PurchaseProductEntry::where('returnStatus',1)->where('purchaseInvoiceNo',$id)->where('shopId',Auth::user()->shopId)->where('shopTypeId',Auth::user()->shopTypeId)->count();
if( $count==0){
        $getTotalPrice=PurchaseProductEntry::where('returnStatus',1)->where('purchaseInvoiceNo',$id)->where('shopId',Auth::user()->shopId)->where('shopTypeId',Auth::user()->shopTypeId)->sum('totalPrice');
}
else{
        $getTotal=PurchaseProductEntry::where('returnStatus',1)->where('purchaseInvoiceNo',$id)->where('shopId',Auth::user()->shopId)->where('shopTypeId',Auth::user()->shopTypeId)->first();
        $getTPrice= $getTotal->preQun-$getTotal->quantity;
        $getTotalPrice=$getTPrice*$getTotal->unitPrice;
}
        return ['getProduct'=>$getProduct,'getTotalPrice'=>  $getTotalPrice];
    }





    
    public function returnPurchaseProduct($invoiceId,$productId)
    {
       
        $edit=PurchaseProductEntry::with('productSupplierName','productName','unitName','brandname')->where('purchaseInvoiceNo',$invoiceId)->where('purchaseProductId',$productId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',Auth::user()->shopTypeId)->orderby('purchaseProductId','desc')->first();
        return response()->json($edit);
    }
    public function returnPurchaseInvoice($invoiceId)
    {
       
        $edit=PurchaseInvoice::where('purchaseInvoiceNo',$invoiceId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',Auth::user()->shopTypeId)->first();
        
        $t=SupplierPayment::where('supplierId',$edit->productSupplierId)->where('shopId',Auth::user()->shopId)->orderby('id','desc')->first();
        return response()->json($edit);
    }
    public function returnPurchaseSupplierDue($invoiceId)
    {
       
        $edit=PurchaseInvoice::where('purchaseInvoiceNo',$invoiceId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',Auth::user()->shopTypeId)->first();
        $t=SupplierPayment::where('supplierId',$edit->productSupplierId)->where('shopId',Auth::user()->shopId)->orderby('id','desc')->first();
        return ['t'=>$t,'edit'=>$edit];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $edit=PurchaseProductEntry::with('productSupplierName')->where('purchaseInvoiceNo',$id)->where('shopId',Auth::user()->shopId)->where('shopTypeId',Auth::user()->shopTypeId)->orderby('purchaseProductId','desc')->first();

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
        $pre=PurchaseInvoice::where('purchaseInvoiceNo',$id)->first();
       $totalPurchaseValue=$pre->totalPurchaseValue- $request->totalPurchaseValue;
       $totalAmount=$pre->totalAmount- $request->totalAmount;
       $supplierPayable=$pre->supplierPayable- $request->supplierPayable;
       $totalProductCost=$pre->totalProductCost- $request->totalProductCost;
        PurchaseInvoice::where('purchaseInvoiceNo',$id)->update([
            'productSupplierId' => $request->productSupplierId,
           
            'totalPurchaseValue' => $totalPurchaseValue,
            'carriageInward' => $request->carriageInward,
            'totalAmount' => $totalAmount,
            'discount' => $request->discount,
            'supplierPayable' => $supplierPayable,
            'otherCost' => $request->otherCost,
            'damageAndWarranty' => $request->damageAndWarranty,
            'totalProductCost' => $totalProductCost,
            'currentPayable' => $request->currentPayable,
            'updateBy' => Auth::User()->id,
      ]);
      StockSummery::where('shopId',Auth::user()->shopId)->where('productId',$request->productId)->where('brandId',$request->brandId)->where('purchaseInvoiceNo',$request->purchaseInvoiceNo)->delete();
      StockSummery::insert([
        'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
        'productSupplierId' => $request->productSupplierId,
        'productId' => $request->productId,
        'brandId' => $request->brandId,  
        'purchaseType' => 0,
        'countryId' => 0,          
        'quantity' => $request->quantity,
        'unitId' => $request->unitId,
        'unitPrice' => $request->unitPrice,
        'totalPrice' => $request->totalPrice,
        'percetage' => $request->percetage,
        'shopId' => Auth::user()->shopId,
        'shopTypeId' => Auth::user()->shopTypeId,
        'createBy' => Auth::User()->id,
        'updated_at' => Carbon::now(),
        'returnStatus' => 1,
        'priceSetupStatus' => 1,
  ]);
  $in= PurchaseProductEntry::where('purchaseInvoiceNo', $request->purchaseInvoiceNo)->where('productId',  $request->productId)->where('shopId',Auth::user()->shopId)->orderby('purchaseProductId','desc')->first();
  PurchaseReturnHistory::insert([
    'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
    'productSupplierId' => $request->productSupplierId,
    'productId' => $request->productId,         
    'brandId' => $request->brandId,         
    'purchaseDate' => $in->created_at,            
    'preQuantity' =>   $request->preQun,
    'newQuantity' => $request->quantity,
    'unitId' => $request->unitId,
    'unitPrice' => $request->unitPrice,
    'totalPrice' => $request->totalPrice,
    'percetage' => $request->percetage,
    'shopId' => Auth::user()->shopId,
    'shopTypeId' => Auth::user()->shopTypeId,
    'createBy' => Auth::User()->id,
    'created_at' => Carbon::now(),
]);

      SupplierPayment::insert([
        'purchaseInvoiceNo'=>  $request->purchaseInvoiceNo,
        'shopId'=> Auth::User()->shopId,
        'supplierId'=>  $request->productSupplierId,
        'due'=>$request->currentDue,
        'returnAmount' => $request->totalProductCost,
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
      PurchaseProductEntry::where('purchaseInvoiceNo', $id)->where('shopId',Auth::user()->shopId)->update([
          'returnStatus'=>0
      ]);
      $totalQuantit = PurchaseProductEntry::where('shopId',Auth::user()->id)->where('productSupplierId', $request->productSupplierId)->sum('quantity');
        $tp = PurchaseInvoice::where('shopId',Auth::user()->id)->where('productSupplierId', $request->productSupplierId)->sum('supplierPayable');
        $productInfo = PurchaseProductTotalQuantity::where('productSupplierId',$request->productSupplierId)->latest()->first();
      
        $totalQuantity =$totalQuantit;
      
  
        $totalPrice = $tp;
  
        PurchaseProductTotalQuantity::where('productSupplierId',$request->productSupplierId)->update([
            'totalQuantity' => $totalQuantity,
            'totalPrice' => $totalPrice,
            'updateBy' => Auth::User()->id,
        ]);



        $title='';
    
        //  --------------------------------------------------------------------
        //  ------------------ voucher & statement information -----------------
        //  --------------------------------------------------------------------





        if(1){



        // ==========================================================
        // =========== #1  Journal Voucher Information ==============
        // ==========================================================
 
          

        $voucherUniqueId = time().'1';
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
                  'accountCodeDebit' => $headCode2,
                  'accountCodeCredit' => $headCode1,
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
                  'accountsCode' => $headCode2,
                  'type' => 1,
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
                  'type' => 1,
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

// ==========================================================
// ============// #1 Journal Voucher Information ============
// ==========================================================






// ==========================================================
// =========== #2  Journal Voucher Information ==============
// ==========================================================

    // if($request->paymentType>0 && $request->paymentType<3){

        $voucherUniqueId = time().'2';
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

        if($voucherAmount>0){
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
                  'accountCodeDebit' => $headCode2,
                  'accountCodeCredit' => $headCode1,
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
                  'accountCodeDebit' => $headCode2,
                  'accountCodeCredit' => $headCode1,
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

                'accountsHeadCode' => $headOfAccounts2,
                'accountsCode' => $headCode2,
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

                  'accountsHeadCode' => $headOfAccounts1,
                  'accountsCode' => $headCode1,
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




        }


        
        $companyId = $request->productSupplierId;
        $referance = 'Pro-Supp-'.$companyId;
        $title = 'Purchase Return ';
        $companyAccountCode = AddProductSupplierEntry::where('productSupplierId',$request->productSupplierId)->first()->accountCode;
        $companyAccountHeadCode = ChartOfAccountRegister::where('headCode',$companyAccountCode)->first()->pre_code;
        
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

        $balanceAmount = $balanceAmountDb+$request->totalProductCost;

        StatementInformation::insert([
            'shopId' => Auth::user()->shopId,
            'rendomNumber' => $rendomNumber,
            'type' => 2,
            'accountHeadCode' => $companyAccountHeadCode,
            'accountCode' => $companyAccountCode,
            'title' => $title,
            'referance' => $referance,
            'paymentType' => 0,
            'dueAmount' => $request->currentDue,
            'debitAmount' => $request->totalProductCost,
            'balanceAmount' => $balanceAmount,
            'note' => $title,
            'createBy' => Auth::user()->id,
            'shopId' => Auth::user()->shopId,
            'created_at' => Carbon::now(),
        ]);
        

        
        // ===================== Payment type condition =======================
        
        if($request->currentPaidAmount>0){
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
            $balanceAmount = $balanceAmountDb-$request->currentPaidAmount;
            $dr_cr_amount = $request->currentPaidAmount;
            $expenseTitle = 'Cash Return';
            $title = 'Supplier cash Return';
        // }else if($request->paymentType==2){
        //     $balanceAmount = $balanceAmountDb+$request->bankAmount;
        //     $expenseTitle = 'Bank Payment';
        //     $dr_cr_amount = $request->bankAmount;
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
            'bankAmount' => $request->bankAmount,
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
                        $voucherType = 2;
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

                    $debitHeadCodeForBalance = chartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                    $debitCodeForBalance = $headCode2;
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
                          'mobileNo' => ' ',
                          'checkPaymentType' => 0,
                          'receiverBankAccountName' => ' ',
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
                        ->where('type',2)
                        ->orderBy('id','DESC')
                        ->exists()){
                            $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
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
            $balanceAmount = $balanceAmountDb+$request->bankAmount;
            $expenseTitle = 'Bank Return';
            $title = 'Supplier bank return';
            $dr_cr_amount = $request->bankAmount;
        // }
        
        StatementInformation::insert([
            'shopId' => Auth::user()->shopId,
            'rendomNumber' => $rendomNumber,
            'type' => 2,
            'accountHeadCode' => $companyAccountHeadCode,
            'accountCode' => $companyAccountCode,
            'title' => $title,
            'referance' => $referance,
            'paymentType' => 2,
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
                        $voucherType = 4;
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

                                  $debitHeadCodeForBalance = chartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                                  $debitCodeForBalance = $headCode2;
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
                    
                    
                    if($voucherType == 1){
        
                        if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                        ->where('type',2)
                        ->orderBy('id','DESC')
                        ->exists()){
                            $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
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










    public function returnPurchaseUpdate(Request $request, $invoiceId,$productId)
    {
        $in= PurchaseProductEntry::where('purchaseInvoiceNo', $invoiceId)->where('purchaseProductId', $productId)->where('shopId',Auth::user()->shopId)->first();
    //     PurchaseReturnHistory::insert([
    //         'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
    //         'productSupplierId' => $request->productSupplierId,
    //         'productId' => $request->productId,         
    //         'brandId' => $request->brandId,         
    //         'purchaseDate' => $in->created_at,            
    //         'preQuantity' => $in->quantity,
    //         'newQuantity' => $request->quantity,
    //         'unitId' => $request->unitId,
    //         'unitPrice' => $request->unitPrice,
    //         'totalPrice' => $request->totalPrice,
    //         'percetage' => $request->percetage,
    //         'shopId' => Auth::user()->shopId,
    //         'shopTypeId' => Auth::user()->shopTypeId,
    //         'createBy' => Auth::User()->id,
    //         'created_at' => Carbon::now(),
    //   ]);
        PurchaseProductEntry::where('purchaseInvoiceNo', $invoiceId)->where('purchaseProductId', $productId)->where('shopId',Auth::user()->shopId)->update([
            'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
            'productSupplierId' => $request->productSupplierId,
            'productId' => $request->productId,
            'brandId' => $request->brandId,            
            'quantity' => $request->quantity,
            'preQun' => $request->preQun,
            'unitId' => $request->unitId,
            'unitPrice' => $request->unitPrice,
            'totalPrice' => $request->totalPrice,
            'percetage' => $request->percetage,
            'shopId' => Auth::user()->shopId,
            'shopTypeId' => Auth::user()->shopTypeId,
            'createBy' => Auth::User()->id,
            'updated_at' => Carbon::now(),
            'returnStatus' => 1,
      ]);
//       StockSummery::where('shopId',Auth::user()->shopId)->where('productId',$request->productId)->where('brandId',$request->brandId)->where('purchaseInvoiceNo',$invoiceId)->delete();
//       StockSummery::insert([
//         'purchaseInvoiceNo' => $request->purchaseInvoiceNo,
//         'productSupplierId' => $request->productSupplierId,
//         'productId' => $request->productId,
//         'brandId' => $request->brandId,  
//         'purchaseType' => 0,
//         'countryId' => 0,          
//         'quantity' => $request->quantity,
//         'unitId' => $request->unitId,
//         'unitPrice' => $request->unitPrice,
//         'totalPrice' => $request->totalPrice,
//         'percetage' => $request->percetage,
//         'shopId' => Auth::user()->shopId,
//         'shopTypeId' => Auth::user()->shopTypeId,
//         'createBy' => Auth::User()->id,
//         'updated_at' => Carbon::now(),
//         'returnStatus' => 1,
//         'priceSetupStatus' => 1,
//   ]);

      
            //  $totalQuantity = PurchaseProductEntry::where('shopId',Auth::user()->shopId)->where('productId', $request->productId)->sum('quantity');
             
            //  $totalPrice = PurchaseProductEntry::where('shopId',Auth::user()->shopId)->where('productId', $request->productId)->sum('totalPrice');
             
            //   PurchaseProductTotalPrice::where('shopId',Auth::user()->id)->where('productId',$request->productId)->update([
            //       'totalQuantity' => $totalQuantity,
            //       'totalPrice' => $totalPrice,
            //       'updateBy' => Auth::User()->id,
            //   ]);

          
            //   $total = PurchaseProductEntry::where('shopId',Auth::user()->id)->where('productId', $request->productId)->sum('quantity');
             
            //   $totalQ= PurchaseProductTotalPrice::where('shopId',Auth::user()->id)->where('productId', $request->productId)->first();
            //   $t=$totalQ->totalQuantity-$total
            //   $totalQuantity= $totalQ->totalQuantity-$total;
            //   $totalP = PurchaseProductEntry::where('shopId',Auth::user()->id)->where('productId', $request->productId)->sum('totalPrice');
            //   $p=$totalQ->totalPrice-$totalP
            //   $totalQuantity= $totalQ->totalPrice-$totalP;
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
    public function rePurchaseDistroy($id)
    {
        $data=PurchaseProductEntry::where('purchaseProductId',$id)->first();
        $info=PurchaseProductEntry::where('purchaseInvoiceNo',$data->purchaseInvoiceNo)->where('productId',$data->productId)->where('brandId',$data->brandId)->where('shopId',Auth::user()->shopId)->orderby('purchaseProductId','desc')->first();
        // $dt=StockSummery::where('purchaseInvoiceNo',$data->purchaseInvoiceNo)->where('productId',$data->productId)->where('brandId',$data->brandId)->where('shopId',Auth::user()->shopId)->first();
        //  StockSummery::where('id',$dt->id)->update([
        //      'quantity'=>$info->preQuantity
        //  ]);
         $unit=$data->unitPrice;
         $qt=$unit*$info->preQun;
         PurchaseProductEntry::where('purchaseProductId',$id)->update([
            'quantity'=>$info->preQun,
            'returnStatus'=>0,
            'totalPrice'=>$qt,
        ]);
        //  PurchaseReturnHistory::where('purchaseInvoiceNo',$data->purchaseInvoiceNo)->where('productId',$data->productId)->where('brandId',$data->brandId)->where('shopId',Auth::user()->shopId)->delete();
    }
}
