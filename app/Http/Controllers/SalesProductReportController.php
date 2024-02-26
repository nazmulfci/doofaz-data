<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SalesProductDiscountPriceEntry;
use App\SalesProductDiscountDateInformation;
use App\SalesProductPriceEntry;
use App\ShopCustomerTypeEntry;
use App\SalesCustomerEntry;
use App\SalesProductEntry;
use App\ShopInformation;
use App\ProductBrandEntry;
use App\StatementInformation;
use App\ProductName;
use App\ProductSize;
use App\ProductColor;
use App\PurchaseProductEntry;
use App\SalesReturnProductListTmp;

use DataTables;
use Illuminate\Support\Facades\DB;
use Auth;
use Carbon\Carbon;

class SalesProductReportController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:,admin');
    }
    public function salesProductPriceReport()
    {
      

        $items = SalesProductPriceEntry::
        with('productName','color','size')
        ->where('shopTypeId',Auth::user()->shopTypeId)
        ->where('shopId', Auth::user()->shopId)
        ->latest()->limit(100);

        return DataTables::eloquent($items)
       ->addColumn('productName', function (SalesProductPriceEntry $get) {
           return $get->productName->productName; 
        })
       ->addColumn('brandname', function (SalesProductPriceEntry $get) {
           return ProductBrandEntry::where('productBrandEntryId',$get->brandId)->first()->productBrandName;
        })
       ->toJson(); 
    }

    public function salesProductDiscountPriceReport()
    {
      
        //   =================================  delete area

        $deleteIds = SalesProductDiscountDateInformation::distinct()->where('shopId', Auth::user()->shopId)
          ->where('discountExpiredDate', '<',Carbon::now()->format('Y-m-d'))
          ->get('discountInfoId');
          SalesProductDiscountPriceEntry::where('shopId', Auth::user()->shopId)           
          ->whereIn('salesProductDiscountPriceId',$deleteIds)
          ->delete();
          SalesProductDiscountDateInformation::where('shopId', Auth::user()->shopId)           
          ->whereIn('discountInfoId',$deleteIds)
          ->delete();

          $infoss = SalesProductDiscountPriceEntry::where('shopId', Auth::user()->shopId)           
          ->where('mrpDiscountAmount',NULL)
          ->where('salesDiscountAmount',NULL)
          ->where('wholesaleDiscountAmount',NULL)
          ->where('specialDiscountAmount',NULL)
          ->where('eCommerceDiscountAmount',NULL)
          ->get();
          foreach($infoss as $infos){
               SalesProductDiscountPriceEntry::where('salesProductDiscountPriceId', $infos->salesProductDiscountPriceId)->delete();
               SalesProductDiscountDateInformation::where('discountInfoId', $infos->salesProductDiscountPriceId)->delete();
          }


        //   ================================= / delete area 

        $ids = SalesProductDiscountDateInformation::distinct()->where('shopId', Auth::user()->shopId)           
        ->where('discountStartDate', '<=',Carbon::now()->format('Y-m-d'))
        ->where('discountExpiredDate', '>=',Carbon::now()->format('Y-m-d'))
        ->get('discountInfoId');
      
        $items = SalesProductDiscountPriceEntry::with('productName','color','size')
        ->where('shopId', Auth::user()->shopId)
        ->whereIn('salesProductDiscountPriceId',$ids)
        ->limit(100);
        
        return DataTables::eloquent($items)
        ->addColumn('productName', function (SalesProductDiscountPriceEntry $get) {
                  
            if( $get->productName!==null){
             return $get->productName->productName;
            }else{
             return 'NULL';
            }
           
     })
        ->addColumn('productBrandName', function (SalesProductDiscountPriceEntry $get) {
                  
            if( $get->brandget!==null){
             return $get->brandget->brandName->productBrandName;
            }else{
             return 'NULL';
            }
           
         })
     
        ->addColumn('mergeColumnMrp', function ($row) {
            if ($row->mrpDiscountType == 1) {
                $cal = round($row->mrpPrice + $row->mrpDiscountAmount);
                if($row->mrpExpiredDate >= Carbon::now()->format('Y-m-d')){
                return '
            <span style="color:green">Previous Price&nbsp;</span><span style="color:red"> ' . $cal . '</span><br>
            <span style="color:green">Discount&nbsp;</span><span style="color:red">' . $row->mrpDiscountAmount . '&nbsp;Tk</span><br>
            <span style="color:green">After Discount &nbsp;</span><span style="color:red">' . round($row->mrpPrice) . '</span>
            ';
        }
            else{
                return '';
            }
            }
            if ($row->mrpDiscountType == 2) {

                $cal = round($row->mrpPrice * $row->mrpDiscountAmount / 100 + $row->mrpPrice);
                if($row->mrpExpiredDate >= Carbon::now()->format('Y-m-d')){
                return '
            <span style="color:green">Previous Price&nbsp;</span><span style="color:red"> ' . $cal . '</span><br>
            <span style="color:green">Discount&nbsp;</span><span style="color:red">' . $row->mrpDiscountAmount . '&nbsp;%</span><br>
            <span style="color:green">After Discount &nbsp;</span><span style="color:red">' . round($row->mrpPrice) . '</span>

            ';}
            else{
                return '';
            }
            }
        })->addColumn('mergeColumnSales', function ($row) {
            if ($row->salesDiscountType == 1) {
                $cal = round($row->salesPrice + $row->salesDiscountAmount);
                if($row->salesExpiredDate >= Carbon::now()->format('Y-m-d')){  
                return '
           <span style="color:green">Previous Price&nbsp;</span><span style="color:red"> ' . $cal . '</span><br>
           <span style="color:green">Discount&nbsp;</span><span style="color:red">' . $row->salesDiscountAmount . '&nbsp;Tk</span><br>
           <span style="color:green">After Discount &nbsp;</span><span style="color:red">' . round($row->salesPrice) . '</span>

          
           ';}
           else{
               return '';
           }
            }
            if ($row->salesDiscountType == 2) {

                $cal = round($row->salesPrice * $row->salesDiscountAmount / 100 + $row->salesPrice);
                if($row->salesExpiredDate >= Carbon::now()->format('Y-m-d')){ 
                    return '
           <span style="color:green">Previous Price&nbsp;</span><span style="color:red"> ' . $cal . '</span><br>
           <span style="color:green">Discount&nbsp;</span><span style="color:red">' . $row->salesDiscountAmount . '&nbsp;%</span><br>
           <span style="color:green">After Discount &nbsp;</span><span style="color:red">' . round($row->salesPrice) . '</span>

          
           ';}
           else{
               return '';
           }
            }
        })
            ->addColumn('mergeColumnWholeSale', function ($row) {
                if ($row->wholesaleDiscountType == 1) {
                    $cal = round($row->wholesalePrice + $row->wholesaleDiscountAmount);
                    if($row->wholesaleExpiredDate >= Carbon::now()->format('Y-m-d')){ 
                    return '
       <span style="color:green">Previous Price&nbsp;</span><span style="color:red"> ' . $cal . '</span><br>
       <span style="color:green">Discount&nbsp;</span><span style="color:red">' . $row->wholesaleDiscountAmount . '&nbsp;Tk</span><br>
       <span style="color:green">After Discount &nbsp;</span><span style="color:red">' . round($row->wholesalePrice) . '</span>

      
       ';}else{
           return '';
       }
                }
                if ($row->wholesaleDiscountType == 2) {

                    $cal = round($row->wholesalePrice * $row->wholesaleDiscountAmount / 100 + $row->wholesalePrice);
                    if($row->wholesaleExpiredDate >= Carbon::now()->format('Y-m-d')){ 
                    return '
       <span style="color:green">Previous Price&nbsp;</span><span style="color:red"> ' . $cal . '</span><br>
       <span style="color:green">Discount&nbsp;</span><span style="color:red">' . $row->wholesaleDiscountAmount . '&nbsp;%</span><br>
       <span style="color:green">After Discount &nbsp;</span><span style="color:red">' . round($row->wholesalePrice) . '</span>

      
       ';}
       else{
           return '';
       }
                }
            })
            ->addColumn('mergeColumnSpecial', function ($row) {
                if ($row->specialDiscountType == 1) {
                    $cal = round($row->specialPrice + $row->specialDiscountAmount);
                    if($row->specialExpiredDate >= Carbon::now()->format('Y-m-d')){ 
                    return '
   <span style="color:green">Previous Price&nbsp;</span><span style="color:red"> ' . $cal . '</span><br>
   <span style="color:green">Discount&nbsp;</span><span style="color:red">' . $row->specialDiscountAmount . '&nbsp;Tk</span><br>
   <span style="color:green">After Discount &nbsp;</span><span style="color:red">' . round($row->specialPrice) . '</span>

  
   ';}else{
       return '';
   }
                }
                if ($row->specialDiscountType == 2) {

                    $cal = round($row->specialPrice * $row->specialDiscountAmount / 100 + $row->specialPrice);
                    if($row->specialExpiredDate >= Carbon::now()->format('Y-m-d')){ 
                    return '
                    <span style="color:green">Previous Price&nbsp;</span><span style="color:red"> ' . $cal . '</span><br>
                    <span style="color:green">Discount&nbsp;</span><span style="color:red">' . $row->specialDiscountAmount . '&nbsp;%</span><br>
                    <span style="color:green">After Discount &nbsp;</span><span style="color:red">' . round($row->specialPrice) . '</span>

                    
                    ';}
                    else{
                        return '';
                    }
                }
            })
            ->addColumn('mergeColumnEcom', function ($row) {
                if ($row->eCommerceDiscountType == 1) {
                    $cal = round($row->eCommercePrice + $row->eCommerceDiscountAmount);
                    if($row->eCommerceExpiredDate >= Carbon::now()->format('Y-m-d')){ 
                    return '
   <span style="color:green">Previous Price&nbsp;</span><span style="color:red"> ' . $cal . '</span><br>
   <span style="color:green">Discount&nbsp;</span><span style="color:red">' . $row->eCommerceDiscountAmount . '&nbsp;Tk</span><br>
   <span style="color:green">After Discount &nbsp;</span><span style="color:red">' . round($row->eCommercePrice) . '</span>
   ';}else{
       return '';
   }
                }
                if ($row->eCommerceDiscountType == 2) {

                    $cal = round($row->eCommercePrice * $row->eCommerceDiscountAmount / 100 + $row->eCommercePrice);
                    if($row->eCommerceExpiredDate >= Carbon::now()->format('Y-m-d')){ 
                    return '
   <span style="color:green">Previous Price&nbsp;</span><span style="color:red"> ' . $cal . '</span><br>
   <span style="color:green">Discount&nbsp;</span><span style="color:red">' . $row->eCommerceDiscountAmount . '&nbsp;%</span><br>
   <span style="color:green">After Discount &nbsp;</span><span style="color:red">' . round($row->eCommercePrice) . '</span>

  
   ';}
   else{
       return'';
   }
                }
            })
            ->addColumn('mrpStartDate', function ($row) {
                if($row->mrpExpiredDate >= Carbon::now()->format('Y-m-d')){ 
                return substr($row->mrpStartDate,0,10);
            }else{
                return '';
            }
            })
            ->addColumn('mrpExpiredDate', function ($row) {
                if($row->mrpExpiredDate >= Carbon::now()->format('Y-m-d')){ 
                return substr($row->mrpExpiredDate,0,10);
            }else{
                return '';
            }
            })
            ->addColumn('salesStartDate', function ($row) {
                if($row->salesExpiredDate >= Carbon::now()->format('Y-m-d')){ 
                return substr($row->salesStartDate,0,10);
            }else{
                return '';
            }
            })
            ->addColumn('salesExpiredDate', function ($row) {
                if($row->salesExpiredDate >= Carbon::now()->format('Y-m-d')){ 
                return substr($row->salesExpiredDate,0,10);
            }else{
                return '';
            }
            })
            ->addColumn('wholesaleStartDate', function ($row) {
                if($row->wholesaleExpiredDate >= Carbon::now()->format('Y-m-d')){ 
                return substr($row->wholesaleStartDate,0,10);
            }else{
                return '';
            }
            })
            ->addColumn('wholesaleExpiredDate', function ($row) {
                if($row->wholesaleExpiredDate >= Carbon::now()->format('Y-m-d')){ 
                return substr($row->wholesaleExpiredDate,0,10);
            }else{
                return '';
            }
            })
            ->addColumn('specialStartDate', function ($row) {
                if($row->specialExpiredDate >= Carbon::now()->format('Y-m-d')){ 
                return substr($row->specialStartDate,0,10);
            }else{
                return '';
            }
            })
            ->addColumn('specialExpiredDate', function ($row) {
                if($row->specialExpiredDate >= Carbon::now()->format('Y-m-d')){ 
                return substr($row->specialExpiredDate,0,10);
            }else{
                return '';
            }
            })
            ->addColumn('eCommerceStartDate', function ($row) {
                if($row->eCommerceExpiredDate >= Carbon::now()->format('Y-m-d')){ 
                    return substr($row->eCommerceStartDate,0,10);
                }else{
                    return '';
                }
            })
            ->addColumn('eCommerceExpiredDate', function ($row) {
                if($row->eCommerceExpiredDate >= Carbon::now()->format('Y-m-d')){ 
                    return substr($row->eCommerceExpiredDate,0,10);
                }else{
                    return '';
                }
            })
            ->toJson();
    }
    public function salesCustomerListReport()
    {
        $shopTypeId = Auth::user()->shopTypeId;

        $items = SalesCustomerEntry::with('shopCustomerTypeName')->where('shopId', Auth::User()->shopId)->where('shopTypeId', $shopTypeId)->latest()->limit(100);
        ;
        return DataTables::eloquent($items)
             
                ->addColumn('shopCustomerTypeName', function ($get) {
                
                    return $get->shopCustomerTypeName->shopCustomerName;
                
            })
            
                ->toJson();
    }
    public function srCustomerListReport($srId)
    {
        $shopTypeId = Auth::user()->shopTypeId;

        $items = SalesCustomerEntry::where('shopId', Auth::User()->shopId)
        ->where('srId', $srId)
        ->where('shopTypeId', $shopTypeId)->get();
        
        $msg2 = array();
        foreach($items as $data){

            $due=0;
            $totalCollection=0;
            $thisMonthCollection=0;

            if(StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$data->accountCode)->orderBy('id','DESC')->exists())
                {
                    $due = StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$data->accountCode)->orderBy('id','DESC')->first()->balanceAmount;
                }


                // ===================================
                $today_cash_collection = StatementInformation::
                    where('shopId',Auth::user()->shopId)
                  ->where('type','2')
                  ->where('paymentType','1')
                  ->where('accountCode',$data->accountCode)->sum('creditAmount');
      
              $today_bank_collection = StatementInformation::
                    where('shopId',Auth::user()->shopId)
                    ->where('bankTypeEntryId','1')
                    ->where('type','2')
                  ->where('paymentType','2')
                  ->where('accountCode',$data->accountCode)->sum('creditAmount');
            
              $today_mobile_bank_collection = StatementInformation::
                    where('shopId',Auth::user()->shopId)
                    ->where('bankTypeEntryId','2')
                    ->where('type','2')
                  ->where('paymentType','2')
                  ->where('accountCode',$data->accountCode)->sum('creditAmount');

              $totalCollection = $today_mobile_bank_collection+$today_bank_collection+$today_cash_collection;
                // ===================================


                // ===================================
                $thisMonth = date('Y-m');
                $today_cash_collection1 = StatementInformation::
                    where('shopId',Auth::user()->shopId)
                  ->where('type','2')
                  ->where('paymentType','1')
                  ->where('created_at','LIKE',"$thisMonth%")
                  ->where('accountCode',$data->accountCode)->sum('creditAmount');
      
              $today_bank_collection1 = StatementInformation::
                    where('shopId',Auth::user()->shopId)
                    ->where('bankTypeEntryId','1')
                    ->where('type','2')
                  ->where('paymentType','2')
                  ->where('created_at','LIKE',"$thisMonth%")
                  ->where('accountCode',$data->accountCode)->sum('creditAmount');
            
              $today_mobile_bank_collection1 = StatementInformation::
                    where('shopId',Auth::user()->shopId)
                    ->where('bankTypeEntryId','2')
                    ->where('type','2')
                  ->where('paymentType','2')
                  ->where('created_at','LIKE',"$thisMonth%")
                  ->where('accountCode',$data->accountCode)->sum('creditAmount');

              $thisMonthCollection = $today_mobile_bank_collection1+$today_bank_collection1+$today_cash_collection1;
                // ===================================


            $msg2[] = array(
                "id" => $data->salesCustomerEntryId,
                "type" => ShopCustomerTypeEntry::where('shopCustomerTypeEntryId',$data->customerTypeId)->first()->shopCustomerName,
                "customerName" => $data->customerName,
                "customerPhone" => $data->customerPhone,
                "due" => $due,
                "totalCollection" => $totalCollection,
                "thisMonthCollection" => $thisMonthCollection,
                );
        
            }



        return ['data' => $msg2];
    }
    public function salesCustomerListReportwithType($id)
    {
        $shopTypeId = Auth::user()->shopTypeId;

        $items = SalesCustomerEntry::with('shopCustomerTypeName')->where('customerTypeId',$id)->where('shopId', Auth::User()->shopId)->where('shopTypeId', $shopTypeId)->latest()->limit(100);
        
        return DataTables::eloquent($items)
             
                ->addColumn('shopCustomerTypeName', function ($get) {
                
                    return $get->shopCustomerTypeName->shopCustomerName;
                
                })
                ->addColumn('shopCustomerTypeName', function ($get) {
                
                    return $get->shopCustomerTypeName->shopCustomerName;
                
                })
            
                ->toJson();
    }
    public function salesCustomerTypeListReport()
    {
   
        $customerTypeLists = ShopCustomerTypeEntry::select('shopCustomerTypeEntryId', 'shopCustomerName')->where('shopCustomerStatus', 1)->orderBy('shopCustomerTypeEntryId', 'desc')->get();
      
        return ['customerTypeLists' => $customerTypeLists,];
    }


    public function salesProductList()
    {
        $product = salesProductEntry::distinct()->where('shopId',Auth::user()->shopId)->get('productId');
        $data = ProductName::whereIn('productNameId',$product)->get();
        return ['data' => $data];
    }

    public function dateWiseProductSearch(Request $request)
    {
        $msg2 = array();
        $tprofit = 0;
        
        
         if($request->dateFrom && $request->dateTo){
            if($request->productId)
            {
            $productIds = SalesProductEntry::distinct()
            ->whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])
            ->where('productId',$request->productId)
            ->where('shopId',Auth::user()->shopId)->get('productId');
            }
            else{
                $productIds = SalesProductEntry::distinct()
                    ->whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])
                    ->where('shopId',Auth::user()->shopId)->get('productId');
            }
        } 
        else if($request->dateFrom){
            if($request->productId)
            {
                $productIds = SalesProductEntry::distinct()->where('created_at','LIKE',"$request->dateFrom%")->where('productId',$request->productId)->where('shopId',Auth::user()->shopId)->get('productId');
            } 
            else{
                $productIds = SalesProductEntry::distinct()->where('created_at','LIKE',"$request->dateFrom%")->where('shopId',Auth::user()->shopId)->get('productId');
            } 
        }   
        else{
            if($request->productId)
            {
                $productIds = SalesProductEntry::distinct()->where('productId',$request->productId)->where('shopId',Auth::user()->shopId)->get('productId');
            } 
            else{
                $productIds = 0;
            } 
        }

        
        if($productIds){
        foreach($productIds as $productId){
        $data = SalesProductEntry::where('productId',$productId->productId)->where('shopId',Auth::user()->shopId)->first();
        if(1){

            $quantity = SalesProductEntry::whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])->where('productId',$productId->productId)->where('shopId',Auth::user()->shopId)->sum('quantity');
            $customerInfo = SalesCustomerEntry::where('salesCustomerEntryId',$data->salesCustomerId)->first();
            $customerType = $customerInfo->customerTypeId;
            $totalPrice = SalesProductEntry::whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])->where('productId',$productId->productId)->where('shopId',Auth::user()->shopId)->sum('totalPrice');
            
            $mrp=0;
            $sales=0;
            $wholesale=0;
            $special=0;
            $ecommerce=0;


            if(SalesProductEntry::whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])->where('priceType',2)->where('productId',$productId->productId)->where('shopId',Auth::user()->shopId)->exists()){
                $mrp = SalesProductEntry::whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])->where('priceType',2)->where('productId',$productId->productId)->where('shopId',Auth::user()->shopId)->first()->unitPrice;
            }
            if(SalesProductEntry::whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])->where('priceType',1)->where('productId',$productId->productId)->where('shopId',Auth::user()->shopId)->exists()){
                $sales= SalesProductEntry::whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])->where('priceType',1)->where('productId',$productId->productId)->where('shopId',Auth::user()->shopId)->first()->unitPrice;
            }
            if(SalesProductEntry::whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])->where('priceType',3)->where('productId',$productId->productId)->where('shopId',Auth::user()->shopId)->exists()){
                $wholesale= SalesProductEntry::whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])->where('priceType',3)->where('productId',$productId->productId)->where('shopId',Auth::user()->shopId)->first()->unitPrice;
            }
            if(SalesProductEntry::whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])->where('priceType',4)->where('productId',$productId->productId)->where('shopId',Auth::user()->shopId)->exists()){
                $special= SalesProductEntry::whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])->where('priceType',4)->where('productId',$productId->productId)->where('shopId',Auth::user()->shopId)->first()->unitPrice;
            }
            if(SalesProductEntry::whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])->where('priceType',5)->where('productId',$productId->productId)->where('shopId',Auth::user()->shopId)->exists()){
                $ecommerce= SalesProductEntry::whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])->where('priceType',5)->where('productId',$productId->productId)->where('shopId',Auth::user()->shopId)->first()->unitPrice;
            }

            $returnCost = SalesReturnProductListTmp::whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])->where('productId',$productId->productId)->where('shopId',Auth::user()->shopId)->sum('totalPrice');
            $returnQuantity = SalesReturnProductListTmp::whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])->where('productId',$productId->productId)->where('shopId',Auth::user()->shopId)->sum('quantity');
            $returnCostPurchase = SalesReturnProductListTmp::whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])->where('productId',$productId->productId)->where('shopId',Auth::user()->shopId)->sum('totalPurchasePrice');
            $purchaseCost = SalesProductEntry::whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])->where('productId',$productId->productId)->where('shopId',Auth::user()->shopId)->sum('purchaseTotalPrice');
            $totalPurchaseCost = $purchaseCost;
            $totalSalesPrice = $totalPrice;
            $totalProfit = abs(($totalSalesPrice-$totalPurchaseCost)-$returnCostPurchase);

            $tprofit += $totalProfit;


            $msg2[] = array(
                "id" => $data->salesProductEntryId,
                "created_at" => $data->created_at,
                "product" => $data->productId,
                "productId" => ProductName::where('productNameId',$data->productId)->first()->productName,
                "brandId" => ProductBrandEntry::where('productBrandEntryId',$data->brandId)->first()->productBrandName,
                "size" => $data->sizeId,
                "color" => $data->colorId,
                "salesCustomerType" => ShopCustomerTypeEntry::where('shopCustomerTypeEntryId',$customerInfo->customerTypeId)->first()->shopCustomerName,
                "salesCustomerName" => $customerInfo->customerName,
                "quantity" => $quantity,
                "unitPrice" => $mrp,
                "sales" => $sales,
                "wholesale" => $wholesale,
                "special" => $special,
                "ecommerce" => $ecommerce,
                "totalPrice" => $totalSalesPrice,
                "totalPurchase" => $purchaseCost,
                "returnQuantity" => $returnQuantity,
                "totalReturn" => $returnCost,
                "totalProfit" => $totalProfit,
                );
        
            }
            }
            }

            

        return [
            'productList' => $msg2,
            'toatlProfit' => $tprofit,
    ];
    }

    public function dateWiseProductSearchDetails(Request $request)
    {
        $msg2 = array();
        $tprofit = 0;
        
        $id = $request->productIdClick;
         
        
        if(1){
        if(1){
        $datas = SalesProductEntry::whereBetween('created_at',[date("$request->dateFrom 00:00:00"),date("$request->dateTo 23:59:59")])->where('productId',$id)->where('shopId',Auth::user()->shopId)->get();
        foreach($datas as $data){

            $quantity = $data->quantity;
            $customerInfo = SalesCustomerEntry::where('salesCustomerEntryId',$data->salesCustomerId)->first();
            $customerType = $customerInfo->customerTypeId;
            $totalPrice = $data->totalPrice;
            
            $mrp=0;
            $sales=0;
            $wholesale=0;
            $special=0;
            $ecommerce=0;


            if($customerType==1){
                $mrp= $totalPrice;
            }
            else if($customerType==2){
                $sales= $totalPrice;
            }
            else if($customerType==4){
                $wholesale= $totalPrice;
            }
            else if($customerType==5){
                $special= $totalPrice;
            }
            else if($customerType==3){
                $ecommerce= $totalPrice;
            }

            $returnCost = SalesReturnProductListTmp::where('productId',$data->productId)->where('shopId',Auth::user()->shopId)->sum('totalPurchasePrice');
            $purchaseCost = SalesProductEntry::where('productId',$data->productId)->where('shopId',Auth::user()->shopId)->sum('purchaseTotalPrice');
            $totalPurchaseCost = $purchaseCost;
            $totalSalesPrice = $mrp + $sales + $wholesale + $special + $ecommerce;
            $totalProfit = ($totalSalesPrice-$totalPurchaseCost)-$returnCost;


            if(ProductColor::where('id',$data->colorId)->exists())
            {
                $color = ProductColor::where('id',$data->colorId)->first()->colorName;
            }
            else{
                $color = '-';
            }

            if(ProductSize::where('id',$data->sizeId)->exists())
            { 
                $size = ProductSize::where('id',$data->sizeId)->first()->sizeName;
            }
            else{
                $size = '-';
            }


            $msg2[] = array(
                "id" => $data->salesProductEntryId,
                "created_at" => $data->created_at,
                "product" => $data->productId,
                "productId" => ProductName::where('productNameId',$data->productId)->first()->productName,
                "brandId" => ProductBrandEntry::where('productBrandEntryId',$data->brandId)->first()->productBrandName,
                "size" => $size,
                "color" => $color,
                "salesCustomerType" => ShopCustomerTypeEntry::where('shopCustomerTypeEntryId',$customerInfo->customerTypeId)->first()->shopCustomerName,
                "salesCustomerName" => $customerInfo->customerName,
                "quantity" => $quantity,
                "unitPrice" => $mrp,
                "sales" => $sales,
                "wholesale" => $wholesale,
                "special" => $special,
                "ecommerce" => $ecommerce,
                "totalDiscount" => $data->totalDiscount,
                "totalPrice" => $totalSalesPrice,
                "totalProfit" => $totalProfit,
                );
        
            }
            }
            }

            

        return [
            'product' => $msg2,
    ];
    }




    public function serchCustomerInfo(Request $request)
    {
        if (isset($request->customerTypeId)) {
            foreach ($request->customerTypeId as $customerTypeId) {
                $shopTypeId = Auth::user()->shopTypeId;
                $customerReports = SalesCustomerEntry::with('shopCustomerTypeName')->where('customerTypeId', $customerTypeId)->where('shopId', Auth::User()->shopId)->where('shopTypeId', $shopTypeId)->latest()->get();
                return ['customerReports' => $customerReports];
            }
        } else {
            foreach ($request->customerPhoneNumber as $salesCustomerEntryId) {
                $shopTypeId =Auth::user()->shopTypeId;
                $customerReports = SalesCustomerEntry::with('shopCustomerTypeName')->where('salesCustomerEntryId', $salesCustomerEntryId)->where('shopId', Auth::User()->shopId)->where('shopTypeId', $shopTypeId)->latest()->get();
                return ['customerReports' => $customerReports];
            }
        }
    }
}
