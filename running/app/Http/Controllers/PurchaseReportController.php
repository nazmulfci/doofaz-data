<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PurchaseProductTotalQuantity;
use App\PurchaseProductTotalPrice;
use App\AddProductSupplierEntry;
use App\PurchaseProductDetails;
use App\PurchaseProductEntry;
use App\PurchaseReturnHistory;
use App\PurchaseInvoice;
use App\ShopInformation;
use App\AccountSetup;
use App\StatementInformation;
use App\PurchaseReturnInvoiceTmp;
use App\SalesReturnInvoiceTmp;
use Auth;
use DataTables;
use Illuminate\Support\Facades\DB;
class PurchaseReportController extends Controller
{

   
   public function __construct()
   {
       $this->middleware('auth:,admin');
   }



    public function productSupplierReport()
    {
      $get=AddProductSupplierEntry::where('shopId',Auth::user()->shopId)->get();
      $j=array();
      foreach ($get as $t) {
        $j[]=$t->accountCode;
      }
     
      
      $items = StatementInformation::with('supplier')     
      ->whereIn('accountCode', $j)  
      ->select([
         
            'accountCode',   
       
         DB::raw('sum(debitAmount) AS totalAmount'),
   
         DB::raw('sum(creditAmount) AS currentDue'),

     ])->where('shopId',Auth::user()->shopId)->groupBy('accountCode')->limit(100);
     return datatables($items)
     ->addColumn('supplier', function (StatementInformation $get) {
       if( $get->supplier)     {    
      return $get->supplier->productSupplierName;
       }
       else{
          return 0;
       }
  
})
     ->addColumn('phone', function (StatementInformation $get) {
       if( $get->supplier)     {    
      return $get->supplier->productSupplierPhone;
       }
       else{
          return 0;
       }
  
})
     ->addColumn('supplierId', function (StatementInformation $get) {
      if( $get->supplier)     {           
      return $get->supplier->productSupplierId;
      }
      else{
         return 0;
      }
  
})
      ->addColumn('returnAmount', function (StatementInformation $row) {
        
         $rAmount = StatementInformation::where('accountCode',$row->accountCode)->where('shopId',Auth::user()->shopId)->where('type',0)->sum('debitAmount');
         return $rAmount;
  
         })
      ->addColumn('paidAmount', function ( $row) {
        
            $cal = StatementInformation::where('accountCode',$row->accountCode)->where('shopId',Auth::user()->shopId)->where('type',1)->sum('debitAmount');
            return $cal;
  
         })
      ->addColumn('receiveAmount', function ( $row) {
        
            $res = StatementInformation::where('accountCode',$row->accountCode)->where('shopId',Auth::user()->shopId)->where('type',2)->sum('creditAmount');
            return $res;
  
         })
         ->addColumn('totalAmount', function ($row) {
        
           $totalAmount = StatementInformation::where('accountCode',$row->accountCode)->where('shopId',Auth::user()->shopId)->where('type',0)->sum('creditAmount');
           return $totalAmount;
        
        })
        ->addColumn('currentDue', function ($row) {
              
           $currentDue =$row->currentDue-$row->totalAmount;
           return $currentDue;
        
        })
  ->toJson();
    }






    public function dueSupplierList()
    {
      
      
      $supplierHeadCode = AccountSetup::where('placementType',30)->where('headName',115)->first()->headCode;
      $select_info_dis = StatementInformation::distinct()->where('accountCode','LIKE',"$supplierHeadCode%")->where('shopId',Auth::user()->shopId)->get('accountCode');
      $select_statementInformation = StatementInformation::whereIn('accountCode',$select_info_dis)->where('shopId',Auth::user()->shopId)->get();
      
      $accList = array();
      foreach($select_statementInformation as $selects){
         $select = StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$selects->accountCode)->orderBy('id','DESC')->first();
         $balance = abs($select->balanceAmount);
         if($balance>0){
            $accList[] = $select->accountCode;
         }
      }
      // rtrim($accList,',');
      $items = AddProductSupplierEntry::whereIn('accountCode',$accList)->where('shopId',Auth::user()->shopId)->get();
      

     return datatables($items)
     ->addColumn('supplier', function ($row) {
       return $row->productSupplierName;
  
      })
     ->addColumn('supplierId', function ($row) {
      return $row->productSupplierId;
  
})
->addColumn('phone', function ($row) {
   return $row->productSupplierPhone;

})
->addColumn('returnAmount', function ($row) {
   $returnAmount = StatementInformation::where('shopId',Auth::user()->shopId)->where('type',0)->where('accountCode',$row->accountCode)->sum('debitAmount');
     return $returnAmount;
})
->addColumn('totalAmount', function ($row) {
   $totalAmount = StatementInformation::where('shopId',Auth::user()->shopId)->where('type',0)->where('accountCode',$row->accountCode)->sum('creditAmount');
     return $totalAmount;
})
->addColumn('currentDue', function ($row) {
      
   $currentDue = abs(StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$row->accountCode)->orderBy('id','DESC')->first()->balanceAmount);
     return $currentDue;

})
     ->addColumn('paidAmount', function ($row) {
      
      $paidAmount = StatementInformation::where('shopId',Auth::user()->shopId)->where('type','>',0)->where('accountCode',$row->accountCode)->sum('debitAmount');
      return $paidAmount;

       })
  ->toJson();
      
    }



    public function dueSupplierListDashboard()
    {
      
      
      $supplierHeadCode = AccountSetup::where('placementType',30)->where('headName',115)->first()->headCode;
      $select_info_dis = StatementInformation::distinct()->where('accountCode','LIKE',"$supplierHeadCode%")->where('shopId',Auth::user()->shopId)->get('accountCode');
      $select_statementInformation = StatementInformation::whereIn('accountCode',$select_info_dis)->where('shopId',Auth::user()->shopId)->get();
      
      $accList = array();
      foreach($select_statementInformation as $selects){
         $select = StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$selects->accountCode)->orderBy('id','DESC')->first();
         $balance = $select->balanceAmount;
         if($balance<0){
            $accList[] = $select->accountCode;
         }
      }
      // rtrim($accList,',');
      $items = AddProductSupplierEntry::whereIn('accountCode',$accList)->where('shopId',Auth::user()->shopId)->get();
      
      $msg2 = array();
      $totalDue = 0;
      foreach($items as $data){

         $currentDue = abs(StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$data->accountCode)->orderBy('id','DESC')->first()->balanceAmount);
         $totalDue += $currentDue;
         $msg2[] = array(
             "id" => $data->productSupplierId,
             "productSupplierName" => $data->productSupplierName,
             "productSupplierPhone" => $data->productSupplierPhone,
             "productSupplierAddress" => $data->productSupplierAddress,
             "currentDue" => $currentDue,
             );
            }

     return ['data' => $msg2,'totalDue' => $totalDue];
      
    }






    public function supplierInvoiceDetails($productSupplierId)
    {
       if (isset(Auth::user()->id)) {
          $shopTypeId =Auth::user()->shopTypeId;
          $purchaseInvoiceReports = PurchaseInvoice::with('productSupplierName','purchaseType','purchaseProduct.productName','purchaseProduct.brandName','purchaseProduct.unitName')->where('productSupplierId',$productSupplierId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->latest()->get();
          return ['purchaseInvoiceReports' => $purchaseInvoiceReports];
       }
    }
    public function supplierProductDetails($productSupplierId)
    {
      $lists = PurchaseProductEntry::with('productName','brandName')->
      select('productId','brandId',DB::raw('sum(quantity) as quantity')
      ,DB::raw('sum(totalPrice) as totalPrice')
      )->
    where('productSupplierId',$productSupplierId)

      ->where('shopId', Auth::user()->shopId)
      ->groupby('productId','brandId')
      ->paginate(30);
  return ['lists'=>$lists];
    }
    public function purchasePriceHistory($productSupplierId,$product,$brand)
    {
      $lists = PurchaseProductEntry::with('productName','brandName')->
    
    where('productSupplierId',$productSupplierId)
   -> where('productId',$product)
   -> where('brandId',$brand)

      ->where('shopId', Auth::user()->shopId)
     
      ->get();
  return ['lists'=>$lists];
    }
    public function purchaseReturn()
    {
       if (isset(Auth::user()->id)) {
          $shopTypeId =Auth::user()->shopTypeId;
          $purchaseInvoiceReports = PurchaseReturnHistory::with('productSupplierName','productName')->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->paginate(30);
          return ['purchaseInvoiceReports' => $purchaseInvoiceReports];
       }
    }
    public function purchaseInvoiceReport()
    {
       if (isset(Auth::user()->id)) {
          $shopTypeId = Auth::user()->shopTypeId;
          $purchaseInvoiceReports = PurchaseInvoice::with('productSupplierName','purchaseType','purchaseProduct.productName','purchaseProduct.brandName','purchaseProduct.unitName')
          ->where('openingPurchaseRepurchase',1)
          ->where('shopId',Auth::user()->shopId)
          ->where('shopTypeId',$shopTypeId)->latest()->paginate(30);
          return ['purchaseInvoiceReports' => $purchaseInvoiceReports];
      }
    }

    public function purchaseReturnInvoice()
    {
       if (isset(Auth::user()->id)) {
          $shopTypeId = Auth::user()->shopTypeId;
          $purchaseInvoiceReports = PurchaseReturnInvoiceTmp::with('productSupplierName','purchaseProduct.productName','purchaseProduct.brandName','purchaseProduct.unitName')
          ->where('shopId',Auth::user()->shopId)
          ->where('status',0)
          ->where('shopTypeId',$shopTypeId)->latest()->paginate(30);
          return ['purchaseInvoiceReports' => $purchaseInvoiceReports];
      }
    }

    public function purchaseReturnInvoiceApproved()
    {
       if (isset(Auth::user()->id)) {
          $shopTypeId = Auth::user()->shopTypeId;
          $purchaseInvoiceReports = PurchaseReturnInvoiceTmp::with('productSupplierName','purchaseProduct.productName','purchaseProduct.brandName','purchaseProduct.unitName')
          ->where('shopId',Auth::user()->shopId)
          ->where('status',1)
          ->where('shopTypeId',$shopTypeId)->latest()->paginate(30);
          return ['purchaseInvoiceReports' => $purchaseInvoiceReports];
      }
    }

    public function salesApprovedReturnInvoice()
    {
       if (isset(Auth::user()->id)) {
          $shopTypeId = Auth::user()->shopTypeId;
          $purchaseInvoiceReports = SalesReturnInvoiceTmp::
          with('customerName','customerType','pay','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')
          ->where('shopId',Auth::user()->shopId)
          ->where('status',1)
          ->orderBy('id','DESC')->latest()->paginate(30);
          return ['purchaseInvoiceReports' => $purchaseInvoiceReports];
      }
    }

    public function salesReturnInvoiceApproved()
    {
       
      $purchaseInvoiceReports = SalesReturnInvoiceTmp::
      with('customerType','pay','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')
      ->where('shopId',Auth::user()->shopId)
      ->where('status',1)
      ->orderBy('id','DESC')
      ->latest()->paginate(30);

         
          return ['purchaseInvoiceReports' => $purchaseInvoiceReports];
      
    }


    public function openingInvoiceReport()
    {
       if (isset(Auth::user()->id)) {
          $shopTypeId = Auth::user()->shopTypeId;
          $purchaseInvoiceReports = PurchaseInvoice::with('productSupplierName','purchaseType','purchaseProduct.productName','purchaseProduct.brandName','purchaseProduct.unitName')
          ->where('openingPurchaseRepurchase',0)
          ->where('shopId',Auth::user()->shopId)
          ->where('shopTypeId',$shopTypeId)->latest()->paginate(30);
          return ['purchaseInvoiceReports' => $purchaseInvoiceReports];
      }
    }


    public function purchaseProductReport()
    {
       if (isset(Auth::user()->id)) {
          $shopTypeId = Auth::user()->shopTypeId;
          $purchaseProductReports = PurchaseProductEntry::
          with('productName')
          ->where('openingStatus',0)
          ->where('shopId',Auth::user()->shopId)
          ->select('productId',DB::raw('sum(quantity)as quantity'),DB::raw('sum(totalWithDiscount)as totalPrice'))
          ->groupby('productId')->latest()->paginate(30);
          return ['purchaseProductReports' => $purchaseProductReports];
       }
    }


    public function openingProductReport()
    {
       if (isset(Auth::user()->id)) {
          $shopTypeId = Auth::user()->shopTypeId;
          $purchaseProductReports = PurchaseProductEntry::
          with('productName')
          ->where('openingStatus',1)
          ->where('shopId',Auth::user()->shopId)
          ->select('productId',DB::raw('sum(quantity)as quantity'),DB::raw('sum(totalWithDiscount)as totalPrice'))
          ->groupby('productId')->latest()->paginate(30);
          return ['purchaseProductReports' => $purchaseProductReports];
       }
    }


    public function purchaseProductReportList($purchaseProductId)
    {
       if (isset(Auth::user()->id)) {
          $shopTypeId = Auth::user()->shopTypeId;
          $purchaseProductReports = PurchaseProductEntry::with('productName','unitName','invoice')
          ->where('productId',$purchaseProductId)->orderby('purchaseProductId','desc')
          ->where('openingStatus',0)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->paginate(30);
          return ['purchaseProductReports' => $purchaseProductReports];
       }
    }
    

    public function openingProductReportList($purchaseProductId)
    {
       if (isset(Auth::user()->id)) {
          $shopTypeId = Auth::user()->shopTypeId;
          $purchaseProductReports = PurchaseProductEntry::with('productName','unitName','invoice')
          ->where('productId',$purchaseProductId)->orderby('purchaseProductId','desc')
          ->where('openingStatus',1)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->paginate(30);
          return ['purchaseProductReports' => $purchaseProductReports];
       }
    }

    public function rePurchaseProductReportList()
    {
       if (isset(Auth::user()->id)) {
          $shopTypeId = Auth::user()->shopTypeId;
          $rePurchaseProductReports = PurchaseProductEntry::with('productName','unitName','invoice')
          ->where('rePurchaseStatus',1)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->get();
          return ['rePurchaseProductReports' => $rePurchaseProductReports];
       }
    }
    public function purchaseProductReportListInfo()
    {
       if (isset(Auth::user()->id)) {
          $shopTypeId = Auth::user()->shopTypeId;
          $purchaseProductReports = PurchaseProductEntry::with('productName','unitName')        
          ->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->get();
          return ['purchaseProductReports' => $purchaseProductReports];
       }
    }
    public function purchaseProductReportDetails($purchaseProductId)
    {
       if (isset(Auth::user()->id)) {
          $shopTypeId =Auth::user()->shopTypeId;
          $purchaseProductDetails = PurchaseProductDetails::where('purchaseProductId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->latest()->first();
          return ['purchaseProductDetails' => $purchaseProductDetails];
       }
    }
    public function purchaseProductDetails($purchaseProductId)
    {
       if (isset(Auth::user()->id)) {
          $shopTypeId =Auth::user()->shopTypeId;
          $purchaseProductDetails = PurchaseProductDetails::where('productId',$purchaseProductId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->latest()->first();
          return ['purchaseProductDetails' => $purchaseProductDetails];
       }
    }






}
