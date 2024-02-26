<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\ShopAssetCategory;
use App\ShopInformation;
use App\ShopTypeEntry;
use App\AssetCodeEntry;
use App\ShopAssetEntry;
use App\AssetStatusHistory;
use App\ShopAddAssetSupplierEntry;
use App\AssetBrandEntry;
use App\AssetStatusList;
use App\Category;
use Illuminate\Support\Facades\DB;

class ShopReportController extends Controller
{


    public function __construct(){
        $this->middleware('auth:,admin');
    }

    public function shoptype()
    {
        $adminShopDataShow = Category::with('shopTypeName')->distinct()->get(['shopTypeId']);
        $adminShopDatalabel = Category::with('shopTypeName')->distinct()->get(['label','shopTypeId']);
        $shopOwnerTypeShow = Category::with('shopTypeName')->where('createBy',Auth::user()->id)->distinct()->get(['shopTypeId']);
        if (isset(Auth::user()->shopId)) {
            $shopTypeId = Auth::user()->shopTypeId;
            
            $shopGlobalTypeShow = Category::with('shopTypeName')
                                            ->where('shopTypeId',$shopTypeId)
                                            ->distinct()
                                            ->get(['shopTypeId']);
            
            return ['shopOwnerTypeShow'=> $shopOwnerTypeShow,'shopGlobalTypeShow' => $shopGlobalTypeShow,'adminShopDataShow' => $adminShopDataShow ,'adminShopDatalabel'=> $adminShopDatalabel ];
          }
        return ['shopOwnerTypeShow'=> $shopOwnerTypeShow,'adminShopDataShow' => $adminShopDataShow ,'adminShopDatalabel'=> $adminShopDatalabel ];
    }
    public function categorydata()
    {
        $category = Category::where('label',1)->where('createBy',Auth::user()->id)->get()->count();
        $subcategory = Category::where('label',2)->where('createBy',Auth::user()->id)->get()->count();
        $thirdCategory = Category::where('label',3)->where('createBy',Auth::user()->id)->get()->count();
        $foreCategory = Category::where('label',4)->where('createBy',Auth::user()->id)->get()->count();
        $fiveCategory = Category::where('label',5)->where('createBy',Auth::user()->id)->get()->count();
        $sixCategory = Category::where('label',6)->where('createBy',Auth::user()->id)->get()->count();
        $sevenCategory = Category::where('label',7)->where('createBy',Auth::user()->id)->get()->count();
        $eightCategory = Category::where('label',8)->where('createBy',Auth::user()->id)->get()->count();
        $nineCategory = Category::where('label',9)->where('createBy',Auth::user()->id)->get()->count();
        $tenCategory = Category::where('label',10)->where('createBy',Auth::user()->id)->get()->count();
        return ['category'=> $category,'subcategory' => $subcategory,'thirdCategory' => $thirdCategory,'foreCategory' => $foreCategory,'fiveCategory' => $fiveCategory,'sixCategory' => $sixCategory,'sevenCategory' => $sevenCategory,'eightCategory' => $eightCategory,'nineCategory' => $nineCategory,'tenCategory' => $tenCategory ];

    }
    public function categoryOwnerShow($categoryLabel)
    {
        $categoryListData = Category::where('label',$categoryLabel)->where('createBy',Auth::user()->id)->get();
        return ['categoryListData'=>$categoryListData];
    }
    public function categoryGlobalShow($categoryLabel)
    {
        if (isset(Auth::user()->shopId)) {
            $shopTypeId = Auth::user()->shopTypeId;
            $categoryListData = Category::where('label',$categoryLabel)->where('shopTypeId',$shopTypeId)->where('createBy','!=', Auth::user()->id)->get();
            return ['categoryListData'=>$categoryListData];
        }
    }

    public function condition()
    {
        
        $authInfo = Auth::User();
        return ['authInfo' => $authInfo];
        
    }

    public function adminCategoryListShow($shopTypeId, $labelId){
        $adminCategoryList = Category::where('label',$labelId)->where('shopTypeId',$shopTypeId)->get();
        return ['adminCategoryList'=> $adminCategoryList];
    }
    public function categoryGlobalCount()
    {
        if (isset(Auth::user()->shopId)) {
            $shopTypeId = Auth::user()->shopTypeId;
            $category = Category::where('label',1)->where('shopTypeId',$shopTypeId)->where('createBy','!=', Auth::User()->id)->get()->count();
            $subcategory = Category::where('label',2)->where('shopTypeId',$shopTypeId)->where('createBy','!=', Auth::User()->id)->get()->count();
            $thirdCategory = Category::where('label',3)->where('shopTypeId',$shopTypeId)->where('createBy','!=', Auth::User()->id)->get()->count();
            $foreCategory = Category::where('label',4)->where('shopTypeId',$shopTypeId)->where('createBy','!=', Auth::User()->id)->get()->count();
            $fiveCategory = Category::where('label',5)->where('shopTypeId',$shopTypeId)->where('createBy','!=', Auth::User()->id)->get()->count();
            $sixCategory = Category::where('label',6)->where('shopTypeId',$shopTypeId)->where('createBy','!=', Auth::User()->id)->get()->count();
            $sevenCategory = Category::where('label',7)->where('shopTypeId',$shopTypeId)->where('createBy','!=', Auth::User()->id)->get()->count();
            $eightCategory = Category::where('label',8)->where('shopTypeId',$shopTypeId)->where('createBy','!=', Auth::User()->id)->get()->count();
            $nineCategory = Category::where('label',9)->where('shopTypeId',$shopTypeId)->where('createBy','!=', Auth::User()->id)->get()->count();
            $tenCategory = Category::where('label',10)->where('shopTypeId',$shopTypeId)->where('createBy','!=', Auth::User()->id)->get()->count();

            return ['globalCategoryCount'=> $category,'globalSubcategoryCount' => $subcategory,'globalThirdCategoryCount' => $thirdCategory,'globalForeCategoryCount' => $foreCategory,'globalFiveCategoryCount' => $fiveCategory,'globalSixCategoryCount' => $sixCategory,'globalSevenCategoryCount' => $sevenCategory,'globalEightCategoryCount' => $eightCategory,'globalNineCategoryCount' => $nineCategory,'globalTenCategoryCount' => $tenCategory ];
        }
    }

    public function shopAssetCategoryReportOwner()
    {
        
        $category =  ShopAssetCategory::where('label',1)->where('shopId',Auth::user()->shopId)->get()->count();
        $subcategory = ShopAssetCategory::where('label',2)->where('shopId',Auth::user()->shopId)->get()->count();
        $thirdCategory = ShopAssetCategory::where('label',3)->where('shopId',Auth::user()->shopId)->get()->count();
        $foreCategory = ShopAssetCategory::where('label',4)->where('shopId',Auth::user()->shopId)->get()->count();
        $fiveCategory = ShopAssetCategory::where('label',5)->where('shopId',Auth::user()->shopId)->get()->count();
        $sixCategory = ShopAssetCategory::where('label',6)->where('shopId',Auth::user()->shopId)->get()->count();
        $sevenCategory = ShopAssetCategory::where('label',7)->where('shopId',Auth::user()->shopId)->get()->count();
        $eightCategory = ShopAssetCategory::where('label',8)->where('shopId',Auth::user()->shopId)->get()->count();
        $nineCategory = ShopAssetCategory::where('label',9)->where('shopId',Auth::user()->shopId)->get()->count();
        $tenCategory = ShopAssetCategory::where('label',10)->where('shopId',Auth::user()->shopId)->get()->count();

        return ['category'=> $category,'subcategory' => $subcategory,'thirdCategory' => $thirdCategory,'foreCategory' => $foreCategory,'fiveCategory' => $fiveCategory,'sixCategory' => $sixCategory,'sevenCategory' => $sevenCategory,'eightCategory' => $eightCategory,'nineCategory' => $nineCategory,'tenCategory' => $tenCategory ];
        
    }
    public function shopAssetCategoryReportOwnerShow($labelId)
    {
          $assetCategoryList =  ShopAssetCategory::where('label',$labelId)->where('shopId',Auth::user()->shopId)->get();
          return ['assetCategoryList' => $assetCategoryList];
    }
    public function shopAssetCategoryReportGlobalShow($labelId)
    {
        $assetCategoryList =  ShopAssetCategory::where('label',$labelId)->where('shopId','!=', Auth::User()->shopId)->get();
        return ['assetCategoryList' => $assetCategoryList];
    }
    public function shopAssetCategoryReportGlobal()
    {

        $category = ShopAssetCategory::where('label',1)->where('shopId','!=', Auth::User()->shopId)->get()->count();
        $subcategory = ShopAssetCategory::where('label',2)->where('shopId','!=', Auth::User()->shopId)->get()->count();
        $thirdCategory = ShopAssetCategory::where('label',3)->where('shopId','!=', Auth::User()->shopId)->get()->count();
        $foreCategory = ShopAssetCategory::where('label',4)->where('shopId','!=', Auth::User()->shopId)->get()->count();
        $fiveCategory = ShopAssetCategory::where('label',5)->where('shopId','!=', Auth::User()->shopId)->get()->count();
        $sixCategory = ShopAssetCategory::where('label',6)->where('shopId','!=', Auth::User()->shopId)->get()->count();
        $sevenCategory = ShopAssetCategory::where('label',7)->where('shopId','!=', Auth::User()->shopId)->get()->count();
        $eightCategory = ShopAssetCategory::where('label',8)->where('shopId','!=', Auth::User()->shopId)->get()->count();
        $nineCategory = ShopAssetCategory::where('label',9)->where('shopId','!=', Auth::User()->shopId)->get()->count();
        $tenCategory = ShopAssetCategory::where('label',10)->where('shopId','!=', Auth::User()->shopId)->get()->count();

        return ['globalCategoryCount'=> $category,'globalSubcategoryCount' => $subcategory,'globalThirdCategoryCount' => $thirdCategory,'globalForeCategoryCount' => $foreCategory,'globalFiveCategoryCount' => $fiveCategory,'globalSixCategoryCount' => $sixCategory,'globalSevenCategoryCount' => $sevenCategory,'globalEightCategoryCount' => $eightCategory,'globalNineCategoryCount' => $nineCategory,'globalTenCategoryCount' => $tenCategory ];

    }

    public function assetCodeReport()
    {
         
             $assetCategoryIdLists = AssetCodeEntry::with('assetCategoryName')->where('createBy',Auth::user()->id)->where('shopId',Auth::User()->shopId)->where('shopTypeId',Auth::user()->shopTypeId)->orderBy('assetCategoryLevel','ASC')->get();
             return datatables($assetCategoryIdLists)->toJson();
    }


    
    public function shopAssetEntryReport()
    {
        
        
            $selectProductIds = ShopAssetEntry::distinct()->where('shopId',Auth::user()->shopId)->get('assetProductId');
            
            
            $totalCostall = 0;


            foreach($selectProductIds as $selectProductId){

                $selectBrandIds = ShopAssetEntry::distinct()->where('shopId',Auth::user()->shopId)->where('assetProductId',$selectProductId->assetProductId)->get('assetBrandId');

                foreach($selectBrandIds as $selectBrandId){

                    $selectPrices = ShopAssetEntry::distinct()->where('shopId',Auth::user()->shopId)->where('assetProductId',$selectProductId->assetProductId)->where('assetBrandId',$selectBrandId->assetBrandId)->get('productCost');
                    
                    $totalQuantity = 0;
                    $totalCost = 0;
                    foreach($selectPrices as $selectPrice){

                        $selectProducts = ShopAssetEntry::where('shopId',Auth::user()->shopId)->where('assetProductId',$selectProductId->assetProductId)->where('assetBrandId',$selectBrandId->assetBrandId)->where('productCost',$selectPrice->productCost)->first();
                        
                        $price = $selectProducts->productCost;
                        $quantity = $selectProducts->productQuantity;

                        $totalQuantity += $quantity;
                        $totalCost += ($price*$quantity);
                        $totalCostall += ($price*$quantity);

                    }
                }


                $assetName = AssetCodeEntry::where('shopId',Auth::user()->shopId)->where('assetCodeEntryId',$selectProductId->assetProductId)->first()->assetPorductName;
                
                
                $shopAssetEntryReports[] = array(
                    "assetProductId" => $selectProductId->assetProductId,
                    "assetName" => $assetName,
                    "productQuantity" => $totalQuantity,
                    "totalCost" => $totalCost,
                    );
            }
            
            return datatables($shopAssetEntryReports)->toJson();
       
    }


    public function shopAssetEntryReportStatusHistory($id)
    {
        
            $info = AssetStatusHistory::
            where('shopId',Auth::User()->shopId)
            ->where('assetInfoId',$id)
            ->orderBy('id','DESC')
            ->get();
            $shopAssetEntryReports = array();

            foreach($info as $data){

                $date = $data->created_at->format('Y-m-d H:i:s');
                if(Auth::user()->language==1){
                $toStatus = AssetStatusList::where('id',$data->toStatus)->first()->nameEn;
                $fromStatus = AssetStatusList::where('id',$data->fromStatus)->first()->nameEn;
                }else{
                $toStatus = AssetStatusList::where('id',$data->toStatus)->first()->nameBn;
                $fromStatus = AssetStatusList::where('id',$data->fromStatus)->first()->nameBn;
                }

                $shopAssetEntryReports[] = array(
                    "id" => $data->id,
                    "assetProductId" => AssetCodeEntry::where('assetCodeEntryId',$data->assetProductId)->where('shopId',Auth::user()->shopId)->first()->assetPorductName,
                    "fromStatus" => $fromStatus,
                    "toStatus" => $toStatus,
                    "productQuantity" => $data->productQuantity,
                    "totalProductCost" => $data->totalProductCost,
                    "date" => $date,

                );
            }

            return datatables($shopAssetEntryReports)->toJson();
        
         
    }

    public function getAssetStatusList()
    {
        
             
            $list = AssetStatusList::
            orderBy('id','ASC')
            ->get();
            return ['list'=> $list];
         
         
    }

    public function shopTotalAsset()
    {
        $totalAsset=0;
        // $lost=0;
        // $damage=0;
        // $warenty=0;
        // $geranty=0;
        // $unused=0;
        // $use=0;

            if(ShopAssetEntry::where('shopId',Auth::User()->shopId)->exists())
            {
                $select1s = ShopAssetEntry::where('shopId',Auth::User()->shopId)->get();
                foreach($select1s as $select1){
                $totalAssetq = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('shopAssetEntryId',$select1->shopAssetEntryId)->first()->productQuantity;
                $totalAssetp = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('shopAssetEntryId',$select1->shopAssetEntryId)->first()->productCost;
                $totalAsset += $totalAssetq*$totalAssetp;
                }
            }

            // if(ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',1)->exists())
            // {
            //     $select2s = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',1)->get();
            //     foreach($select2s as $select2){
            //     $useq = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',1)->where('shopAssetEntryId',$select2->shopAssetEntryId)->first()->productQuantity;
            //     $usep = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',1)->where('shopAssetEntryId',$select2->shopAssetEntryId)->first()->productCost;
            //     $use += $useq*$usep;
            //     }
            // }

            // if(ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',2)->exists())
            // {
            //     $select3s = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',2)->get();
            //     foreach($select3s as $select3){
            //     $damageq = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',2)->where('shopAssetEntryId',$select3->shopAssetEntryId)->first()->productQuantity;
            //     $damagep = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',2)->where('shopAssetEntryId',$select3->shopAssetEntryId)->first()->productCost;
            //     $damage += $damageq*$damagep;
            //     }
                   
            // }

            // if(ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',3)->exists())
            // {
             
            //     $select4s = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',3)->get();
            //     foreach($select4s as $select4){
            //     $warentyq = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',3)->where('shopAssetEntryId',$select4->shopAssetEntryId)->first()->productQuantity;
            //     $warentyp = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',3)->where('shopAssetEntryId',$select4->shopAssetEntryId)->first()->productCost;
            //     $warenty += $warentyq*$warentyp;
            //     }
                 
            // }

            // if(ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',4)->exists())
            // {
            //     $select5s = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',4)->get();
            //     foreach($select5s as $select5){
            //     $gerantyq = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',4)->where('shopAssetEntryId',$select5->shopAssetEntryId)->first()->productQuantity;
            //     $gerantyp = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',4)->where('shopAssetEntryId',$select5->shopAssetEntryId)->first()->productCost;
            //     $geranty += $gerantyq*$gerantyp;
            //     }
                    
            // }

            // if(ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',5)->exists())
            // {
            //     $select6s = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',5)->get();
            //     foreach($select6s as $select6){
            //     $unusedq = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',5)->where('shopAssetEntryId',$select6->shopAssetEntryId)->first()->productQuantity;
            //     $unusedp = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',5)->where('shopAssetEntryId',$select6->shopAssetEntryId)->first()->productCost;
            //     $unused += $unusedq*$unusedp;
            //     }
                    
            // }

            // if(ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',6)->exists())
            // {
            //     $select6s = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',6)->get();
            //     foreach($select6s as $select6){
            //     $lostq = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',6)->where('shopAssetEntryId',$select6->shopAssetEntryId)->first()->productQuantity;
            //     $lostp = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',6)->where('shopAssetEntryId',$select6->shopAssetEntryId)->first()->productCost;
            //     $lost += $lostq*$lostp;
            //     }
                    
            // }

            $allAssetReport[] = array(
                'id' => 1,
                'Status' => 'Total Asset',
                'Amount' => $totalAsset,
            );

            $assetStatusList = AssetStatusList::get();
             $i=1;
            foreach($assetStatusList as $data){
                $lost = 0;
                if(ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',$data->id)->exists())
            {
                $select7s = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',$data->id)->get();
                foreach($select7s as $select7){
                $lostq = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',$data->id)->where('shopAssetEntryId',$select7->shopAssetEntryId)->first()->productQuantity;
                $lostp = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',$data->id)->where('shopAssetEntryId',$select7->shopAssetEntryId)->first()->productCost;
                $lost += $lostq*$lostp;
                }
                    
            }

            if(Auth::user()->language==1)
            {
                $status = $data->nameEn;
            }
            else{
                $status = $data->nameBn;
            }
                $allAssetReport[] = array(
                    "id" => ++$i,
                    'Status' => $status,
                    'Amount' => $lost,
                );
            }
            
          
            return datatables($allAssetReport)->toJson();
        }

    public function shopAssetEntryReportDetails($id)
    {
        
            $shopTypeId = Auth::user()->shopTypeId;
             
            $selects = ShopAssetEntry::where('shopId',Auth::user()->shopId)->where('status',1)->where('assetProductId',$id)->get();
            foreach($selects as $select){
                //$select = ShopAssetEntry::where('shopId',Auth::user()->shopId)->where('assetProductId',$id)->where('assetBrandId',$selectd->assetBrandId)->first();
                $shopAssetEntryReports[] = array(
                    "shopAssetEntryId" => $select->shopAssetEntryId,
                    "asset_category_name" => ShopAssetCategory::where('assetCategoryId',$select->assetCategoryId)->first()->assetCategoryName,
                    "asset_code_name" => AssetCodeEntry::where('assetCodeEntryId',$select->assetProductId)->first()->assetPorductName,
                    "asset_brand_name" => AssetBrandEntry::where('assetBrandEntryId',$select->assetBrandId)->first()->assetBrandName,
                    "supplier_name" => ShopAddAssetSupplierEntry::where('assetSupplierId',$select->assetSupplierId)->first()->assetSupplierName,
                    "productQuantity" => $select->productQuantity,
                    "productCost" => $select->productCost,
                    "totalProductCost" => ($select->productQuantity*$select->productCost),
                    "purchasedate" => $select->purchasedate,
                    "mfgDate" => $select->mfgDate,
                    "expiryDate" => $select->expiryDate,
                    "invoiceNo" => $select->invoiceNo,
                    "modelNo" => $select->modelNo,
                    "depreciation" => $select->depreciation,
                    "warranty" => $select->warranty,
                    "guarantee" => $select->guarantee,
                    "color" => $select->color,
                    "size" => $select->size,
                    "description" => $select->description,
                    );
            }
            return datatables($shopAssetEntryReports)->toJson();
    }
    public function shopAssetDamageReport()
    {
        
            $shopTypeId = Auth::user()->shopTypeId;
            $shopAssetDamageReports = ShopAssetEntry::with('assetCategoryName','assetBrandName','assetCodeName','supplierName')->where('productQuantity','>',0)->where('createBy',Auth::User()->id)->where('shopTypeId',$shopTypeId)->where('shopId',Auth::User()->shopId)->orderBy('shopAssetEntryId','desc')->where('status',2)->get();
            return datatables($shopAssetDamageReports)->toJson();
        
    }
    public function shopAssetWarantyReport()
    {
            $shopTypeId = Auth::user()->shopTypeId;
            $shopAssetWarantyReports = ShopAssetEntry::with('assetCategoryName','assetBrandName','assetCodeName','supplierName')->where('productQuantity','>',0)->where('createBy',Auth::User()->id)->where('shopTypeId',$shopTypeId)->where('shopId',Auth::User()->shopId)->orderBy('shopAssetEntryId','desc')->where('status',3)->get();
            return datatables($shopAssetWarantyReports)->toJson();
    }
    public function shopAssetGuranteeReport()
    {

            $shopTypeId = Auth::user()->shopTypeId;
            $shopAssetGuranteeReports = ShopAssetEntry::with('assetCategoryName','assetBrandName','assetCodeName','supplierName')->where('productQuantity','>',0)->where('createBy',Auth::User()->id)->where('shopTypeId',$shopTypeId)->where('shopId',Auth::User()->shopId)->orderBy('shopAssetEntryId','desc')->where('status',4)->get();
            return datatables($shopAssetGuranteeReports)->toJson();
        
    }
    public function shopAssetUnusedReport()
    {
            $shopTypeId = Auth::user()->shopTypeId;
            $shopAssetUnusedReports = ShopAssetEntry::with('assetCategoryName','assetBrandName','assetCodeName','supplierName')->where('productQuantity','>',0)->where('createBy',Auth::User()->id)->where('shopTypeId',$shopTypeId)->where('shopId',Auth::User()->shopId)->orderBy('shopAssetEntryId','desc')->where('status',5)->get();
            return datatables($shopAssetUnusedReports)->toJson();
    }
    public function shopAssetTheftReport()
    {
            $shopTypeId = Auth::user()->shopTypeId;
            $shopAssetTheftReports = ShopAssetEntry::with('assetCategoryName','assetBrandName','assetCodeName','supplierName')->where('productQuantity','>',0)->where('createBy',Auth::User()->id)->where('shopTypeId',$shopTypeId)->where('shopId',Auth::User()->shopId)->orderBy('shopAssetEntryId','desc')->where('status',6)->get();
            return datatables($shopAssetTheftReports)->toJson();
    }









}
