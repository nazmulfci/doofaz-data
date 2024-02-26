<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PurchaseProductEntry;
use App\ShopInformation;
use App\StockSummery;
use App\ProductName;
use App\ProductCategory;
use Auth;
use DataTables;
use Illuminate\Support\Facades\DB;
class InventoryShortageController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:,admin');
    }

    public function brandWithProductShortage()
    {
        $shopTypeId = Auth::user()->shopTypeId;
        $purchaseBrandLists = PurchaseProductEntry::select('brandId')->with('brandName')->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->latest()->distinct()->get(['brandId']);
        $purchaseProductLists = PurchaseProductEntry::with('productName','brandName','unitName')->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->latest()->get();
        return ['purchaseBrandLists' => $purchaseBrandLists, 'purchaseProductLists' => $purchaseProductLists];
    }



    public function brandWithProductList($id)
    {
        // $shopTypeId = Auth::user()->shopTypeId;
     
        // $purchaseProductLists = PurchaseProductEntry::with('total','productName','brandName','unitName','productPriceDetails')->where('brandId',$id)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->latest()->get();
        // return ['purchaseProductLists' => $purchaseProductLists];
        $shopTypeId = Auth::user()->shopTypeId;
        // $purchaseProductReports = PurchaseProductEntry::with('productName', 'total', 'brandName', 'unitName', 'productPriceDetails')->where('productId', $id)->where('shopId', Auth::user()->shopId)->where('shopTypeId', $shopTypeId)->latest()->paginate(50);
        $items =StockSummery::with('product','brand','unit','color','size')->where('brandId',$id)->where('shopId', Auth::user()->shopId)->select([
            
            'id',
            'productId',
            'brandId',
            'colorId',
            'sizeId',
            'unitId',
            'quantity',
            'totalPrice'

        ])->where('quantity','>',0)->limit(100);
        return DataTables::eloquent($items)
         
        ->addColumn('product', function ($get) {
        
            return $get->product->productName;
        
    })
        ->addColumn('brand', function ($get) {
        
            return $get->brand->productBrandName;
        
    })
        ->addColumn('quantity', function ($get) {
        
            return $get->quantity. ' '. $get->unit->uniteEntryName;
        
    })
    
        ->toJson();
    }


    public function categoryWithProductList($id)
    {
        $productId = ProductCategory::distinct()->where('categoryId',$id)->where('shopTypeId',Auth::user()->shopTypeId)->get('productNameId');
            
        
        $items =StockSummery::with('product','brand','unit','color','size')
        ->whereIn('productId', $productId)
        ->where('shopId', Auth::user()->shopId)
        ->select([
            'id',
            'productId',
            'brandId',
            'colorId',
            'sizeId',
            'unitId',
            'quantity',
            'totalPrice'
        ])->where('quantity','>',0)->limit(100);
        return DataTables::eloquent($items)
         
        ->addColumn('product', function ($get) {
        
            return $get->product->productName;
        
    })
        ->addColumn('brand', function ($get) {
        
            return $get->brand->productBrandName;
        
    })
        ->addColumn('quantity', function ($get) {
        
            return $get->quantity. ' '. $get->unit->uniteEntryName;
        
    })
    
        ->toJson();
    }
    public function supplierWithProductShortage()
    {
        $shopTypeId = ShopInformation::where('shopInfoId',Auth::user()->shopId)->first()->shopTypeId;
        $purchaseSupplierLists = PurchaseProductEntry::select('productSupplierId')->with('productSupplierName')->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->latest()->distinct()->paginate(15,['productSupplierId']);
        $purchaseProductLists = PurchaseProductEntry::with('productName','brandName','unitName')->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->latest()->get();
        return ['purchaseSupplierLists' => $purchaseSupplierLists, 'purchaseProductLists' => $purchaseProductLists];
    }






}
