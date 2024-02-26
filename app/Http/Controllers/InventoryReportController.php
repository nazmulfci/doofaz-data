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
use App\ProductColor;
use App\ProductSize;
use App\PriceSetupHistory;
use App\ProductLowQuantity;
use App\Category;
use App\ProductExpireDateSoon;
use App\PurchaseProductTotalPrice;
use App\StockSummery;
use Carbon\Carbon;
use Auth;
use DataTables;
use Illuminate\Support\Facades\DB;

class InventoryReportController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:,admin');
    }

    public function stockSummaryProductReport($id)
    {
        if (isset(Auth::user()->id)) {
            $shopTypeId = Auth::user()->shopTypeId;
            
            // $purchaseProductReports = PurchaseProductEntry::with('productName', 'total', 'brandName', 'unitName', 'productPriceDetails')->where('productId', $id)->where('shopId', Auth::user()->shopId)->where('shopTypeId', $shopTypeId)->latest()->paginate(50);
            // $items =StockSummery::with('product','brand')->where('productId',$id)->where('shopId', Auth::user()->shopId)->groupBy('productId','brandId')->select([
            //     'productId',
            //     'brandId',
            //     DB::raw('sum(quantity) AS quantity'),
            //     DB::raw('sum(quantity*unitPrice) AS totalPrice'),
            // ])->limit(100);

            $items = StockSummery::with('product','brand','color','size','unit')->where('priceSetupStatus',1)->where('productId',$id)->where('shopId', Auth::user()->shopId)->select([
                'id',
                'productId',
                'brandId',
                'colorId',
                'sizeId',
                'unitId',
                'quantity',
                'unitPrice',
                'totalPrice'
            ])->limit(100);
            
            return DataTables::eloquent($items)
             
            ->addColumn('product', function ($get) {
                return $get->product->productName;
        })
        
        
            ->addColumn('brand', function ($get) {
            
                return $get->brand->productBrandName;
            
        })
            
        
            ->toJson();
        
        }
    }
    public function stockSummaryProduct()
    {
        if (isset(Auth::user()->id)) {
            // $shopTypeId = Auth::user()->shopTypeId;
            // $purchaseProductReports = PurchaseProductEntry::with('productName')->groupBy('productId')->where('shopId',Auth::user()->shopId)->where('shopTypeId', $shopTypeId)->where('priceSetupStatus',1)
            //     ->select([

            //         'productId',

            //     ])
            //     ->latest()->paginate(50);
            $items = StockSummery::with('product')->where('priceSetupStatus',1)->where('shopId', Auth::user()->shopId)->groupBy('productId')->select([
               
                'productId',
                DB::raw('sum(quantity) AS quantity'),
                DB::raw('sum(totalPrice) AS totalPrice'),

            ])->where('quantity','>',0)->limit(100);
            return DataTables::eloquent($items)
             
            ->addColumn('product', function ($get) {
            
                return $get->product->productName;
            
        })
            ->toJson();
        }
    }
    public function repurchase($product, $brand)
    {
        if (isset(Auth::user()->id)) {
            $shopTypeId = Auth::user()->shopTypeId;
            $purchaseProduct = PurchaseProductEntry::with('productName', 'brandName', 'unitName', 'productPriceDetails')->where('brandId', $brand)->where('rePurchaseStatus', 1)->where('productId', $product)->where('shopId', Auth::user()->shopId)->where('shopTypeId', $shopTypeId)->latest()->paginate(50);

            return ['purchaseProduct' => $purchaseProduct];
        }
    }


    public function repurchaseHistory($product, $brand)
    {
        if (isset(Auth::user()->id)) {
            $shopTypeId = Auth::user()->shopTypeId;
            $stockInfo = StockSummery::where('id',$brand)->where('shopId',Auth::user()->shopId)->first();
            $purchaseProduct = PurchaseProductEntry::with('productName', 'brandName', 'unitName', 'productPriceDetails')
            ->where('brandId', $stockInfo->brandId)
            ->where('productId', $stockInfo->productId)
            ->where('colorId', $stockInfo->colorId)
            ->where('sizeId', $stockInfo->sizeId)
            ->where('shopId', Auth::user()->shopId)
            ->where('shopTypeId', $shopTypeId)
            ->orderBy('purchaseProductId','DESC')
            ->latest()->paginate(50);

            return ['purchaseProduct' => $purchaseProduct];
        }
    }
    public function stockSummaryProductDetails($purchaseProductId)
    {

        $shopTypeId = Auth::user()->shopTypeId;
        $purchaseProductDetails = PurchaseProductDetails::where('purchaseProductId', $purchaseProductId)->where('shopId', Auth::user()->shopId)->where('shopTypeId', $shopTypeId)->latest()->first();
        return ['purchaseProductDetails' => $purchaseProductDetails];
    }
    public function stockSummaryProductDetailsInf($productId)
    {

        $shopTypeId = Auth::user()->shopTypeId;
        $purchaseProductDetails = PurchaseProductDetails::where('productId', $productId)->where('shopId', Auth::user()->shopId)->where('shopTypeId', $shopTypeId)->latest()->first();
        return ['purchaseProductDetails' => $purchaseProductDetails];
    }
    public function priceUpdateHistory($purchaseProductId)
    {

        $shopTypeId = Auth::user()->shopTypeId;
        $historyGet = PriceSetupHistory::where('purchaseProductId', $purchaseProductId)->where('shopId', Auth::user()->shopId)->where('shopTypeId', $shopTypeId)->orderby('salesProductPriceEntryId', 'desc')->get();
        return ['historyGet' => $historyGet];
    }

    
    public function stockShortageProductReport()
    {


        $selects = StockSummery::distinct()->where('shopId',Auth::user()->shopId)->get('productId');
        $items = array();
        $i=1;
        foreach($selects as $select){

            $selectBrands = StockSummery::distinct()->where('shopId',Auth::user()->shopId)->get('brandId');
            
            foreach($selectBrands as $selectBrand){

            if(PurchaseProductDetails::where('quantityNoti','>',0)->where('brandId',$selectBrand->brandId)->where('productId',$select->productId)->where('shopId', Auth::user()->shopId)->exists()){
            
            $alert_quantity = PurchaseProductDetails::where('productId',$select->productId)->where('brandId',$selectBrand->brandId)->where('shopId', Auth::user()->shopId)->first()->quantityNoti;
            $stockInfo = StockSummery::with('unit')->where('productId',$select->productId)->where('brandId',$selectBrand->brandId)->where('shopId',Auth::user()->shopId)->first();
            $current_quantity = StockSummery::where('productId',$select->productId)->where('brandId',$selectBrand->brandId)->where('shopId',Auth::user()->shopId)->sum('quantity');
            $current_amount = StockSummery::where('productId',$select->productId)->where('brandId',$selectBrand->brandId)->where('shopId',Auth::user()->shopId)->sum('unitPrice');
            $current_total_price = $current_quantity*$current_amount;

            $brandName = '';
            if(ProductBrandEntry::where('productBrandEntryId',$selectBrand->brandId)->exists()){
                $brandName = ProductBrandEntry::where('productBrandEntryId',$selectBrand->brandId)->first()->productBrandName;
            }
            
            if($alert_quantity<=$current_quantity){
                $items[] = array(
                    'id' => $stockInfo->id,
                "purchaseProductDetailsId" => $i++,
                "productName" => ProductName::where('productNameId',$select->productId)->where('shopTypeId',Auth::user()->shopTypeId)->first()->productName,
                "brand" => $brandName,
                "quantityNoti" => $alert_quantity,
                "quantity" => $current_quantity .' '. $stockInfo->unit->uniteEntryName,
                "totalPrice" => $current_total_price,
                "purchaseProductId" => $select->productId
                );
            }
        }
    }

        }
        
    
    return dataTables($items)
        ->toJson();
      
    }



    public function inventoryProductNameWithoutPrice()
    {
        if (isset(Auth::user()->id)) {
            $shopTypeId = Auth::user()->shopTypeId;
            
            $selectPurchaseProducts = PurchaseProductEntry::distinct()->where('shopId',Auth::user()->shopId)->orderBy('purchaseProductId','DESC')->get('productId');
            
            $productNameList = array();
            
            foreach($selectPurchaseProducts as $selectPurchaseProduct){
                
                // if(SalesProductPriceEntry::where('shopId',Auth::user()->shopId)->where('purchaseProductId',$selectPurchaseProduct->purchaseProductId)->exists()){
                // }else{
                    if(1){
                    $selectProduct = PurchaseProductEntry::where('shopId',Auth::user()->shopId)->where('productId',$selectPurchaseProduct->productId)->first();
                    ;
                
                $color = '';
                if(ProductColor::where('id',$selectPurchaseProduct->colorId)->exists()){
                    $color = ProductColor::where('id',$selectPurchaseProduct->colorId)->first()->colorName;
                }
                else{
                    $color='---';
                }
                
                $size = '';
                if(ProductSize::where('id',$selectPurchaseProduct->sizeId)->exists()){
                    $size = ProductSize::where('id',$selectPurchaseProduct->sizeId)->first()->sizeName;
                }else{
                    $size='---';
                }
                $productNameList[] = array(
                    "productName" => ProductName::where('productNameId',$selectProduct->productId)->first()->productName,
                    "productBrandName" => ProductBrandEntry::where('productBrandEntryId',$selectProduct->brandId)->first()->productBrandName,
                    "color" => $color,
                    "size" => $size,
                    "created_at" => $selectProduct->created_at,
                    );
            }
            }
     
            return ['productNameList' => $productNameList];
        }
    }
    public function inventoryProductNameWithPrice()
    {
        if (isset(Auth::user()->id)) {
            $shopTypeId = Auth::user()->shopTypeId;
            $salesProductPriceReports = SalesProductPriceEntry::with('unit','brand','brandname')->with('productName')->where('shopId',Auth::user()->shopId)->where('shopTypeId', $shopTypeId)->latest()->paginate(50);
            return ['salesProductPriceReports' => $salesProductPriceReports];
        }
    }
    public function invetoryCategoryWithoutPriceList()
    {
        if (isset(Auth::user()->id)) {
            $shopTypeId = Auth::user()->shopTypeId;

            $productPriceSetupCategory = ProductPriceSetupDetail::with('categoryName')->where('shopId', Auth::user()->shopId)->where('shopTypeId', $shopTypeId)->distinct()->latest()->paginate(5, ['categoryId']);
            $productPriceSetupCategoryProduct = ProductPriceSetupDetail::where('shopId', Auth::user()->id)->where('shopTypeId', $shopTypeId)->get();
            $productPriceSetupProduct = ProductPriceSetupDetail::with('productName', 'productBrandName')->where('shopId', Auth::user()->shopId)->where('shopTypeId', $shopTypeId)->get();
            $productName = ProductName::where('shopId', Auth::user()->shopId)->where('shopTypeId', $shopTypeId)->get();

            return ['productPriceSetupCategoryProduct' => $productPriceSetupCategoryProduct, 'productPriceSetupCategory' => $productPriceSetupCategory, 'productPriceSetupProduct' => $productPriceSetupProduct, 'productName' => $productName];
        }
    }
    public function invetoryCategoryWithPriceList()
    {
        if (isset(Auth::user()->id)) {
            $shopTypeId = Auth::user()->shopTypeId;
            $productPriceSetupCategory = ProductPriceSetupDetail::with('categoryName')->where('shopId', Auth::user()->shopId)->where('shopTypeId', $shopTypeId)->distinct()->latest()->paginate(5, ['categoryId']);
            $productPriceSetupProduct = ProductPriceSetupDetail::with('productName', 'productBrandName')->where('shopId', Auth::user()->shopId)->where('shopTypeId', $shopTypeId)->get();

            return ['productPriceSetupCategory' => $productPriceSetupCategory, 'productPriceSetupProduct' => $productPriceSetupProduct];
        }
    }
    public function categoryList()
    {
        if (isset(Auth::user()->id)) {
            $shopTypeId = Auth::user()->shopTypeId;
            $productPriceSetupCategory = ProductCategory::with('categoryName')->where('label', '=', 1)->where('shopId',Auth::user()->shopId)->where('shopTypeId', $shopTypeId)->distinct()->latest()->paginate(5, ['categoryId']);

            $productPriceSetupProduct = ProductPriceSetupDetail::with('productName', 'productBrandName')->where('shopId', Auth::user()->shopId)->where('shopTypeId', $shopTypeId)->get();

            return ['productPriceSetupCategory' => $productPriceSetupCategory, 'productPriceSetupProduct' => $productPriceSetupProduct];
        }
    }

    public function categoryListInventory()
    {
            $productId = PurchaseProductEntry::distinct()->where('shopId',Auth::user()->shopId)->get('productId');
            $productPriceSetupCategory = ProductCategory::with('categoryName')->whereIn('productNameId',$productId)->where('label', '=', 1)->where('shopTypeId',Auth::user()->shopTypeId)->distinct()->get('categoryId');

            return ['productPriceSetupCategory' => $productPriceSetupCategory];
       
    }
    public function productShow($id)
    {
        if (isset(Auth::user()->id)) {
            $shopTypeId = Auth::user()->shopTypeId;

            $productCategory = ProductCategory::with('productName')->with('pName','pName.brandname')->where('categoryId', $id)->where('label', '=', 1)->where('shopId', Auth::user()->shopId)->where('shopTypeId', $shopTypeId)->get(['categoryId', 'productNameId']);

            return ['productCategory' => $productCategory];
        }
    }
    public function lowQuantityProductList()
    {
        if (isset(Auth::user()->id)) {
            $shopTypeId = Auth::user()->shopTypeId;
            $info = ProductLowQuantity::where('shopId', Auth::user()->shopId)->orderby('id', 'desc')->first();
           if(empty($info)) {
               $qt=0;
           }
           else{
               $qt=$info->lowQuantity;
           }


            $items = StockSummery::with('product','brand','color','size','unit')->select('id','productId','brandId','colorId','sizeId','unitId',DB::raw('sum(quantity)as quantity'))  
            ->having('quantity','<=', $qt )
           ->groupby('id','productId','brandId','colorId','sizeId','unitId')
           ->where('shopId', Auth::user()->shopId)
           ->where('quantity','>',0)
           ->where('shopTypeId', $shopTypeId)->latest()->limit(100);
          
          
           return DataTables::eloquent($items)

          ->addColumn('product', function (StockSummery $get) {


              return $get->product->productName;
          })

          ->addColumn('brand', function (StockSummery $get) {


              return $get->brand->productBrandName;
          })
          
          ->addColumn('quantity', function (StockSummery $get) {
              return $get->quantity . ' '. $get->unit->uniteEntryName;
          })
          ->addColumn('color', function (StockSummery $get) {

            if(empty($get->color)){
                return '-';
            }else{
              return  $get->color->colorName;
            }
          })
          ->addColumn('size', function (StockSummery $get) {

            if(empty($get->size)){
                return '-';
            }else{
              return  $get->size->sizeName;
            }
          })
      
         
         
          ->toJson();
       
        }
    }
    public function expireDateOverProductList()
    {
        if (isset(Auth::user()->id)) {
            $shopTypeId = Auth::user()->shopTypeId;
            $nowData = Carbon::now()->format('Y-m-d');
            $items = PurchaseProductDetails::with('productPriceDetails.brandName','productName')->where('expiryDate', '<', $nowData)->where('shopId', Auth::user()->shopId)->latest()->limit(100);
            return DataTables::eloquent($items)

            ->addColumn('productName', function (PurchaseProductDetails $get) {

                return $get->productName->productName;
            })
       
            ->addColumn('brand', function (PurchaseProductDetails $get) {
                 if($get->productPriceDetails){
                return $get->productPriceDetails->brandName->productBrandName;
            }
            else{
                return NULL;
            }
            })
            ->toJson();
        }
    }
    public function expireDateOverProductListForDashboard()
    {
        if (isset(Auth::user()->id)) {
            $shopTypeId = Auth::user()->shopTypeId;
            $nowData = Carbon::now()->format('Y-m-d');
            $items = PurchaseProductDetails::with('productPriceDetails.brandName','productName')->where('expiryDate', '<', $nowData)->where('shopId', Auth::user()->shopId)->get();
            return ['data' => $items];
        }
    }

    public function expireDateSoonProductList()
    {
        if (isset(Auth::user()->id)) {
            $shopTypeId = Auth::user()->shopTypeId;
            $nowData = Carbon::now()->format('Y-m-d');
            $exp = ProductExpireDateSoon::orderby('id', 'desc')->first();
           if(!empty($exp)){
              $dt=$exp->soonDate;
           }
           else{
               $dt=0;
           }
            $items = PurchaseProductDetails::with('productPriceDetails.brandName')->with('productName')->where('expiryDate', '>', $nowData)->whereDate('expiryDate', '<=', Carbon::now()->addDay($dt))->where('shopId',Auth::user()->shopId)->latest()->limit(100);
            return DataTables::eloquent($items)
             
            ->addColumn('productName', function (PurchaseProductDetails $get) {


                return $get->productName->productName;
            })
       
            ->addColumn('brand', function (PurchaseProductDetails $get) {

                return $get->productPriceDetails->brandName->productBrandName;
            })
            ->addColumn('dayRemain', function (PurchaseProductDetails $get) {
                $to = Carbon::today();
                $from =$get->expiryDate;
             return   $get = $to->diffInDays($from);
              
            })
            ->toJson();
        }
    
    }

    public function upcomingDateOverProductListForDashboard()
    {
        if (isset(Auth::user()->id)) {
            $shopTypeId = Auth::user()->shopTypeId;
            $nowData = Carbon::now()->format('Y-m-d');
            $exp = ProductExpireDateSoon::orderby('id', 'desc')->first();
           if(!empty($exp)){
              $dt=$exp->soonDate;
           }
           else{
               $dt=0;
           }
            $items = PurchaseProductDetails::with('productPriceDetails.brandName')->with('productName')->where('expiryDate', '>', $nowData)->whereDate('expiryDate', '<=', Carbon::now()->addDay($dt))->where('shopId',Auth::user()->shopId)->get();
            return ['data' => $items];
        }
    
    }
}
