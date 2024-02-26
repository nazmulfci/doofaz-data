<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ShopInformation;
use App\ShopAssetEntry;
use App\AssetStatus;
use App\AssetCodeEntry;
use App\AssetBrandEntry;
use App\AssetStatusHistory;
use Carbon\Carbon;
use Auth;

class AssetStatusController extends Controller
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
    public function getAssetQuantityForReceive($send_receive,$product_id,$status,$brand_id,$price)
    {
        $quantity = 0;

        if($send_receive==2){
            $pro_id = $product_id;
            
            if(ShopAssetEntry::where('shopId',Auth::user()->shopId)->where('assetProductId',$pro_id)->where('assetBrandId',$brand_id)->where('status',$status)->where('productCost',$price)->exists()){
                $quantity = ShopAssetEntry::where('shopId',Auth::user()->shopId)->where('assetProductId',$pro_id)->where('assetBrandId',$brand_id)->where('status',$status)->where('productCost',$price)->sum('productQuantity');
            }
            
        }
        else if($send_receive==1){

            if(ShopAssetEntry::where('shopId',Auth::user()->shopId)->where('assetProductId',$product_id)->where('productCost',$price)->where('assetBrandId',$brand_id)->where('status',$status)->exists()){
                $quantity = ShopAssetEntry::where('shopId',Auth::user()->shopId)->where('assetProductId',$product_id)->where('productCost',$price)->where('assetBrandId',$brand_id)->where('status',$status)->sum('productQuantity');
            }

        }
        
        return [
            'productQuantity' => $quantity
        ];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::guard('admin')->check()) {
            $shopTypeId = Auth::User()->shopTypeId;
            $assetProductIds = ShopAssetEntry::distinct()->where('shopId',Auth::user()->shopId)->where('status',1)->where('shopTypeId',$shopTypeId)->orderBy('shopAssetEntryId','desc')->get('assetProductId');
            foreach($assetProductIds as $assetProductId){
                $select = AssetCodeEntry::where('shopId',Auth::user()->shopId)->where('assetCodeEntryId',$assetProductId->assetProductId)->first();

                $shopAssetEntryLists[] = array(
                    'shopAssetEntryId' => $select->assetCodeEntryId,
                    'assetPorductName' => $select->assetPorductName,
                    'assetPorductCode' => $select->assetPorductCode
                );
            }
            return ['shopAssetEntryLists' => $shopAssetEntryLists];

        }
        else {
            $shopAssetEntryLists = ShopAssetEntry::with('assetCodeName')->select('shopAssetEntryId','assetProductId')->where('createBy',Auth::user()->id)->where('shopId',0)->where('shopTypeId',0)->orderBy('shopAssetEntryId','desc')->get();
              return ['shopAssetEntryLists' => $shopAssetEntryLists];
        }
    }
    public function getAssetBrandList($id)
    {
        if (Auth::guard('admin')->check()) {
            $shopTypeId = Auth::User()->shopTypeId;
            $assetProductIds = ShopAssetEntry::distinct()->where('assetProductId',$id)->where('shopId',Auth::user()->shopId)->where('status',1)->where('shopTypeId',$shopTypeId)->orderBy('shopAssetEntryId','desc')->get('assetBrandId');
            foreach($assetProductIds as $assetProductId){
                $select = AssetBrandEntry::where('assetBrandEntryId',$assetProductId->assetBrandId)->first();

                $brandList[] = array(
                    'assetBrandEntryId' => $select->assetBrandEntryId,
                    'assetBrandName' => $select->assetBrandName
                );
            }
            return ['brandList' => $brandList];

        }
        else {
            $shopAssetEntryLists = ShopAssetEntry::with('assetCodeName')->select('shopAssetEntryId','assetProductId')->where('createBy',Auth::user()->id)->where('shopId',0)->where('shopTypeId',0)->orderBy('shopAssetEntryId','desc')->get();
              return ['shopAssetEntryLists' => $shopAssetEntryLists];
        }
    }
    public function getAssetPriceList($id,$brand)
    {
        if (Auth::guard('admin')->check()) {
            $shopTypeId = Auth::User()->shopTypeId;
            $selects = ShopAssetEntry::distinct()->where('assetProductId',$id)->where('assetBrandId',$brand)->where('shopId',Auth::user()->shopId)->where('status',1)->where('shopTypeId',$shopTypeId)->orderBy('shopAssetEntryId','desc')->get('productCost');
            foreach($selects as $select){
               
                $priceList[] = array(
                    'productCost' => $select->productCost,
                );
            }
            return ['priceList' => $priceList];

        }
        else {
            $shopAssetEntryLists = ShopAssetEntry::with('assetCodeName')->select('shopAssetEntryId','assetProductId')->where('createBy',Auth::user()->id)->where('shopId',0)->where('shopTypeId',0)->orderBy('shopAssetEntryId','desc')->get();
              return ['shopAssetEntryLists' => $shopAssetEntryLists];
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
            $this->validate($request, [
                'shopAssetEntryId' => 'required',
                'typeSelectId' => 'required',
                'productQuantity' => 'required',
                // 'remark' => 'required',
            ],
            [
                'shopAssetEntryId.required' => 'Select Product Name',
                'typeSelectId.required' => 'Select Type',
                'productQuantity.required' => 'Enter Product Quantity.',
                // 'remark.required' => 'Enter Your Remark',
            ]);




            $shopTypeId = Auth::User()->shopTypeId;
            $receiveDate = AssetStatus::where('shopAssetEntryId',$request->shopAssetEntryId)->latest()->first();
             
                $ast = ShopAssetEntry::where('assetProductId',$request->shopAssetEntryId)->where('assetBrandId',$request->assetBrandId)->where('status',1)->where('productCost',$request->productCost)->first();
          
            $qun=$ast->productQuantity-$request->productQuantity;   
           
             $total = $request->productQuantity*$ast->productCost;


             if($request->productQuantity>$request->productQuantityPro){

                $insertStatus = 1;

             }else{

            //  ----------------- for receive ------------

             if($request->typeSelectId==2){

                AssetStatus::where('assetStatusId',$receiveDate->assetStatusId)->update([
                                'receiveDate' => Carbon::now()->format('d-m-y h:s:i'),
                                'remarkReceiveTime' => $request->remarkReceiveTime,
                                'remarkSendTime' =>0,
                                'updateBy' => Auth::User()->id,
                            ]);
                            
                            $AssetStatus = new AssetStatus();
                            $AssetStatus->shopAssetEntryId = $request->shopAssetEntryId;
                            $AssetStatus->typeSelectId = $request->typeSelectId;

                            
                          
                                $AssetStatus->typeOptionId = $request->fromStatus;
                              
                                   $treceive=$ast->productQuantity+$request->productQuantity;
                                ShopAssetEntry::where('assetProductId',$request->shopAssetEntryId)
                                ->where('assetBrandId',$request->assetBrandId)->where('status',1)
                                ->where('productCost',$request->productCost)->update([
                                                              
                                    'productQuantity' => $treceive,
                                ]);
                             
                                    $gt=ShopAssetEntry::where('assetSupplierId',$ast->assetSupplierId)->where('assetProductId',$ast->assetProductId)->where('assetBrandId',$ast->assetBrandId)->where('status',$request->fromStatus)->where('shopId',$ast->shopId)->first();
                                    $cal=$gt->productQuantity-$request->productQuantity;
                                    ShopAssetEntry::where('assetSupplierId',$ast->assetSupplierId)->where('assetProductId',$ast->assetProductId)->where('assetBrandId',$ast->assetBrandId)->where('status',$request->fromStatus)->where('shopId',$ast->shopId)->update([
                                        'productQuantity' =>$cal   
                                    ]);
                             
                          
                            
                       
             }
             //  ----------------- // for receive ------------
       
             //  ----------------- for send ------------
            else {
                $AssetStatus = new AssetStatus();
                $AssetStatus->shopAssetEntryId = $request->shopAssetEntryId;
                $AssetStatus->typeSelectId = $request->typeSelectId;

               
                

                    $AssetStatus->typeOptionId = $request->fromStatus;
                    ShopAssetEntry::where('assetProductId',$request->shopAssetEntryId)
                    ->where('assetBrandId',$request->assetBrandId)->where('status',1)
                    ->where('productCost',$request->productCost)->update([
                        'productQuantity' => $qun,
                    ]);
                    if(  ShopAssetEntry::where('assetSupplierId',$ast->assetSupplierId)->where('assetProductId',$ast->assetProductId)->where('assetBrandId',$ast->assetBrandId)->where('status',$request->fromStatus)->where('shopId',$ast->shopId)->exists()){
                        $gt=ShopAssetEntry::where('assetSupplierId',$ast->assetSupplierId)->where('assetProductId',$ast->assetProductId)->where('assetBrandId',$ast->assetBrandId)->where('status',$request->fromStatus)->where('shopId',$ast->shopId)->first();
                        $cal=$gt->productQuantity+$request->productQuantity;
                        ShopAssetEntry::where('assetSupplierId',$ast->assetSupplierId)->where('assetProductId',$ast->assetProductId)->where('assetBrandId',$ast->assetBrandId)->where('status',$request->fromStatus)->where('shopId',$ast->shopId)->update([
                            'productQuantity' =>$cal   
                        ]);
                    }
                    else{
                    ShopAssetEntry::insert([
                        'status' => $request->fromStatus,
                        'productQuantity' => $request->productQuantity,
                        'shopId' => $ast->shopId,
                        'shopTypeId' => $ast->shopTypeId,
                        'createBy' => $ast->createBy,                      
                        'createBy' => $ast->createBy,
                        'currentPayable' => $ast->currentPayable,                      
                        'productCost' => $ast->productCost,
                        'totalProductCost' => $ast->totalProductCost,
                        'assetBrandId' => $ast->assetBrandId,
                        'assetSupplierId' => $ast->assetSupplierId ,
                        'assetProductId' => $ast->assetProductId  ,
                        'assetCategoryId' => $ast->assetCategoryId   ,
                        'assetCategoryLevel' => $ast->assetCategoryLevel,
                      
                       
                    ]);
                }
            



                $AssetStatus->sendDate = Carbon::now()->format('d-m-y h:s:i');
                $AssetStatus->remarkSendTime = ' '.$request->remarkSendTime;
               if(Auth::guard('admin')->check()){
                $AssetStatus->shopId = Auth::user()->shopId;
                $AssetStatus->shopTypeId = $shopTypeId;
               }
               if(Auth::guard('admin')->check()){
                $AssetStatus->shopId = Auth::user()->shopId;
                $AssetStatus->shopTypeId = $shopTypeId;
               }
                $AssetStatus->createBy = Auth::user()->shopId;
                $AssetStatus->save();
            }

            //  ----------------- // for send ------------
            $insertStatus = 0;
        


        if($request->typeSelectId==1){
            $fromStatus = 1;
            $toStatus = $request->fromStatus;
        }
        else{
            $fromStatus = $request->fromStatus;
            $toStatus = 1;
        }


        AssetStatusHistory::insert([
             
            'shopId' => Auth::user()->shopId,
            'shopTypeId' => $ast->shopTypeId,
            'createBy' => $ast->createBy,   
            'assetInfoId' => $ast->shopAssetEntryId,   
            'currentPayable' => $ast->currentPayable,                      
            'productCost' => $ast->productCost,
            'totalProductCost' => $ast->totalProductCost,
            'assetBrandId' => $ast->assetBrandId,
            'assetSupplierId' => $ast->assetSupplierId ,
            'assetProductId' => $ast->assetProductId  ,
            'assetCategoryId' => $ast->assetCategoryId   ,
            'productQuantity' => $request->productQuantity ,
            'fromStatus' => $fromStatus,
            'toStatus' => $toStatus,
            'created_at' => Carbon::now(),
            
        ]);

    }
        
    
        return [
            'insertStatus' => $insertStatus
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($shopAssetEntryId,$assetBrandId)
    {
        $assetSingleData =  ShopAssetEntry::with('assetBrandName','supplierName')
        ->where('shopAssetEntryId',$shopAssetEntryId)
        ->where('assetBrandId',$assetBrandId)
        ->first();
        $dateInfo = AssetStatus::where('shopAssetEntryId',$shopAssetEntryId)->latest()->first();

        // if (isset($dateInfo->sendDate) && isset($dateInfo->receiveDate)) {
        //     return ['assetSingleData' => $assetSingleData, 'dateInfo' => $dateInfo , 'productReceive'=> 'Product Receive'];
        // }
        // elseif (isset($dateInfo->sendDate)) {
        //     return ['assetSingleData' => $assetSingleData, 'dateInfo' => $dateInfo ,'productSend'=> 'Product Send'];
        // }
        // else {

            // return ['assetSingleData' => $assetSingleData, 'noEntry' => 'Database No Entry'];
             return ['assetSingleData' => $assetSingleData];
        // }
    }
    
    
    
    public function getAssetStatusInfo($shopAssetEntryId,$assetBrandId,$price)
    {
        $assetSingleData =  ShopAssetEntry::with('assetBrandName','supplierName')
        ->where('assetProductId',$shopAssetEntryId)
        ->where('assetBrandId',$assetBrandId)
        ->where('productCost',$price)
        ->first();
        $dateInfo = AssetStatus::where('shopAssetEntryId',$shopAssetEntryId)->latest()->first();

        // if (isset($dateInfo->sendDate) && isset($dateInfo->receiveDate)) {
        //     return ['assetSingleData' => $assetSingleData, 'dateInfo' => $dateInfo , 'productReceive'=> 'Product Receive'];
        // }
        // elseif (isset($dateInfo->sendDate)) {
        //     return ['assetSingleData' => $assetSingleData, 'dateInfo' => $dateInfo ,'productSend'=> 'Product Send'];
        // }
        // else {

            // return ['assetSingleData' => $assetSingleData, 'noEntry' => 'Database No Entry'];
             return ['assetSingleData' => $assetSingleData];
        // }
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
