<?php

namespace App\Http\Controllers;

use App\PurchaseProductTotalPrice;
use Illuminate\Http\Request;
use App\Http\Controllers\Accounting\chartOfAccountController;
use App\SalesProductEntry;
use App\ShopInformation;
use App\ChartOfAccountRegister;
use App\paymentType;
use App\ProductBrandEntry;
use App\StatementInformation;
use App\SupplierPayment;
use App\chartOfAccount;
use App\AccountSetup;
use App\BankTypeEntry;
use App\voucherType;
use App\voucherInformation;
use App\voucherInformationReport;
use App\ReceivePaymentStatement;
use App\ShopAddAssetSupplierEntry;
use App\ShopAddBankEntry;
use App\SalesInvoice;
use App\SalesCustomerEntry;
use App\SalesInvoiceTemp;
use App\SalesReturnInvoiceTmp;
use App\SalesPayment;
use App\StockSummery;
use App\InvoiceNoGenerate;
use App\ShopCustomerTypeEntry;
use App\SalesReturnProductListTmp;
use App\PurchaseProductUnitInfo;
use App\DealerSalesOrder;
use App\DealerSalesOrderSubmit;
use App\DealerSalesOrderReceiveSubmit;
use App\AddProductSupplierEntry;
use App\DealerSalesSupplierSearchInfo;
use App\AdvancePayment;
use Carbon\Carbon;
use DataTables;
use Auth;
use Illuminate\Support\Facades\DB;

class SalesInvoiceController extends Controller
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
        $salesInvoiceLists = SalesInvoice::with('customerName','customerType','pay','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')->whereDate('created_at',Carbon::today())->orderby('salesInvoiceId','desc')->where('shopTypeId',$shopTypeId)->where('shopId',Auth::user()->shopId)->paginate(30);
        

       
        $salesinvoiceTemCount = SalesInvoiceTemp::where('shopTypeId',$shopTypeId)->orderby('salesInvoiceId','desc')->where('shopId',Auth::user()->shopId)->where('createBy',Auth::user()->id)->count();
    
        
            
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
     
       
        $currentDate = Carbon::now()->format('d-m-Y');
        return [
                'currentDate' => $currentDate,
                'salesInvoiceLists' => $salesInvoiceLists,
                'salesInvoiceNo' => $salesInvoiceNo,
                'salesinvoiceTemCount' => $salesinvoiceTemCount
            ];
    }


    public function salesInvoiceList()
    {
      $today = date('Y-m-d');

      $items = SalesInvoice::
      with('customerName','customerType','pay','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')
      ->where('salesDate',$today)
      ->where('shopId',Auth::user()->shopId)
      ->where('createBy',Auth::user()->id)
      ->orderBy('salesInvoiceId','DESC')
      ->limit(100);
        
        ;
        return DataTables::eloquent($items)
             
                ->addColumn('customerName', function (SalesInvoice $get) {
                  
                   if( $get->customerName!==null){
                    return $get->customerName->customerName;
                   }else{
                    return "Guest";
                   }
                  
            })
                ->addColumn('currentPaidAmount', function (SalesInvoice $get) {
                  
                   if( $get->pay!==null){
                    return $get->pay->cashAmount;
                   }else{
                    return 'NULL';
                   }
                  
            })
                ->addColumn('mobileAmount', function (SalesInvoice $get) {
                  
                   if( $get->pay!==null){
                    return $get->pay->bankAmount;
                   }else{
                    return 'NULL';
                   }
                  
            })
                ->addColumn('currentDue', function (SalesInvoice $get) {
                  
                   if( $get->pay!==null){
                    return $get->pay->currentDue;
                   }else{
                    return 'NULL';
                   }
                  
            })
                ->addColumn('customerType', function (SalesInvoice $get) {
                  
                   
                    return $get->customerType->shopCustomerName;
                  
            })
                ->toJson();
    }

    public function salesInvoiceSearchList($date,$invoiceNo,$customerId)
    {
      $today = $date;
        
      if($customerId){
        if($invoiceNo){
            $items = SalesInvoice::
            with('customerName','customerType','pay','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')
            ->where('shopId',Auth::user()->shopId)
            ->where('salesInvoiceNo',$invoiceNo)
            ->where('salesCustomerId',$customerId)
            ->orderBy('salesInvoiceId','DESC')
            ->limit(100);
    
                }
                else{
        $items = SalesInvoice::
        with('customerName','customerType','pay','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')
        ->where('shopId',Auth::user()->shopId)
        ->where('salesCustomerId',$customerId)
        ->orderBy('salesInvoiceId','DESC')
        ->limit(100);
                }

            }
      else if($invoiceNo){
        $items = SalesInvoice::
        with('customerName','customerType','pay','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')
        ->where('shopId',Auth::user()->shopId)
        ->where('salesInvoiceNo',$invoiceNo)
        ->orderBy('salesInvoiceId','DESC')
        ->limit(100);

            }
            else{
                      $items = SalesInvoice::
      with('customerName','customerType','pay','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')
      ->where('salesDate',$today)
      ->where('shopId',Auth::user()->shopId)
      ->orderBy('salesInvoiceId','DESC')
      ->limit(100);
            }
         
        return DataTables::eloquent($items)
             
                ->addColumn('customerName', function (SalesInvoice $get) {
                  
                   if( $get->customerName!==null){
                    return $get->customerName->customerName;
                   }else{
                    return "Guest";
                   }
                  
            })
                ->addColumn('currentPaidAmount', function (SalesInvoice $get) {
                  
                   if( $get->pay!==null){
                    return $get->pay->cashAmount;
                   }else{
                    return 'NULL';
                   }
                  
            })
                ->addColumn('mobileAmount', function (SalesInvoice $get) {
                  
                   if( $get->pay!==null){
                    return $get->pay->bankAmount;
                   }else{
                    return 'NULL';
                   }
                  
            })
                ->addColumn('currentDue', function (SalesInvoice $get) {
                  
                   if( $get->pay!==null){
                    return $get->pay->currentDue;
                   }else{
                    return 'NULL';
                   }
                  
            })
                ->addColumn('customerType', function (SalesInvoice $get) {
                  
                   
                    return $get->customerType->shopCustomerName;
                  
            })
                ->toJson();
    }

    public function salesReturnInvoiceList()
    {
         $items = SalesReturnInvoiceTmp::
      with('customerType','pay','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')
      ->where('shopId',Auth::user()->shopId)
      ->where('status',0)
      ->orderBy('id','DESC')
      ->limit(100);
            
         
        return DataTables::eloquent($items)
             
                ->addColumn('customerId', function (SalesReturnInvoiceTmp $get) {
                  
                if(SalesCustomerEntry::where('shopId',Auth::user()->shopId)->where('salesCustomerEntryId',$get->customerId)->exists()){
                    return SalesCustomerEntry::where('shopId',Auth::user()->shopId)->where('salesCustomerEntryId',$get->customerId)->first()->customerName;
                }else{
                    return '';
                }
            })
                ->addColumn('currentPaidAmount', function (SalesReturnInvoiceTmp $get) {
                  
                   if( $get->pay!==null){
                    return $get->pay->cashAmount;
                   }else{
                    return 'NULL';
                   }
                  
            })
                ->addColumn('mobileAmount', function (SalesReturnInvoiceTmp $get) {
                  
                   if( $get->pay!==null){
                    return $get->pay->bankAmount;
                   }else{
                    return 'NULL';
                   }
                  
            })
                ->addColumn('currentDue', function (SalesReturnInvoiceTmp $get) {
                  
                   if( $get->pay!==null){
                    return $get->pay->currentDue;
                   }else{
                    return 'NULL';
                   }
                  
            })
                ->addColumn('customerType', function (SalesReturnInvoiceTmp $get) {
                  
                   
                    return '';
                  
            })
                ->toJson();
    }

    public function salesReturnInvoiceListApprove()
    {
         $items = SalesReturnInvoiceTmp::
      with('customerType','pay','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')
      ->where('shopId',Auth::user()->shopId)
      ->where('status',1)
      ->orderBy('id','DESC')
      ->limit(100);
            
         
        return DataTables::eloquent($items)
             
                ->addColumn('customerId', function (SalesReturnInvoiceTmp $get) {
                  
                if(SalesCustomerEntry::where('shopId',Auth::user()->shopId)->where('salesCustomerEntryId',$get->customerId)->exists()){
                    return SalesCustomerEntry::where('shopId',Auth::user()->shopId)->where('salesCustomerEntryId',$get->customerId)->first()->customerName;
                }else{
                    return '';
                }
            })
                ->addColumn('currentPaidAmount', function (SalesReturnInvoiceTmp $get) {
                  
                   if( $get->pay!==null){
                    return $get->pay->cashAmount;
                   }else{
                    return 'NULL';
                   }
                  
            })
                ->addColumn('mobileAmount', function (SalesReturnInvoiceTmp $get) {
                  
                   if( $get->pay!==null){
                    return $get->pay->bankAmount;
                   }else{
                    return 'NULL';
                   }
                  
            })
                ->addColumn('currentDue', function (SalesReturnInvoiceTmp $get) {
                  
                   if( $get->pay!==null){
                    return $get->pay->currentDue;
                   }else{
                    return 'NULL';
                   }
                  
            })
                ->addColumn('customerType', function (SalesReturnInvoiceTmp $get) {
                  
                   
                    return '';
                  
            })
                ->toJson();
    }

    public function salesInvoiceEntryForAllUser()
    {
      
        $items = SalesInvoice::with('customerName','customerType','pay','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')->where('shopId',Auth::user()->shopId)->limit(100);
        
        ;
        return DataTables::eloquent($items)
             
                ->addColumn('customerName', function (SalesInvoice $get) {
                  
                   if( $get->customerName!==null){
                    return $get->customerName->customerName;
                   }else{
                    return "Guest";
                   }
                  
            })
                ->addColumn('currentPaidAmount', function (SalesInvoice $get) {
                  
                   if( $get->pay!==null){
                    return $get->pay->cashAmount;
                   }else{
                    return 'NULL';
                   }
                  
            })
                ->addColumn('mobileAmount', function (SalesInvoice $get) {
                  
                   if( $get->pay!==null){
                    return $get->pay->bankAmount;
                   }else{
                    return 'NULL';
                   }
                  
            })
                ->addColumn('currentDue', function (SalesInvoice $get) {
                  
                   if( $get->pay!==null){
                    return $get->pay->currentDue;
                   }else{
                    return 'NULL';
                   }
                  
            })
                ->addColumn('customerType', function (SalesInvoice $get) {
                  
                   
                    return $get->customerType->shopCustomerName;
                  
            })
                ->toJson();
    }
    public function salesCashInvoiceList()
    {
      
        $items = SalesInvoice::with('customerName','customerType','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')->whereDate('salesDate',Carbon::today())->where('currentPaidAmount','!=',NULL||0)->where('currentDue',NULL||0)->where('shopId',Auth::user()->shopId)->limit(100);
        
        ;
        return DataTables::eloquent($items)
             
                ->addColumn('customerName', function (SalesInvoice $get) {
                  
                   if( $get->customerName!==null){
                    return $get->customerName->customerName;
                   }else{
                    return "Guest";
                   }
                  
            })
                ->addColumn('customerType', function (SalesInvoice $get) {
                  
                   
                    return $get->customerType->shopCustomerName;
                  
            })
                ->toJson();
    }
    public function salesDiscountInvoiceList()
    {
      
        $items = SalesInvoice::with('customerName','customerType','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')->whereDate('salesDate',Carbon::today())->where('discountPrice','!=',NULL||0)->where('shopId',Auth::user()->shopId)->limit(100);
        
        ;
        return DataTables::eloquent($items)
             
                ->addColumn('customerName', function (SalesInvoice $get) {
                  
                   if( $get->customerName!==null){
                    return $get->customerName->customerName;
                   }else{
                    return "Guest";
                   }
                  
            })
                ->addColumn('customerType', function (SalesInvoice $get) {
                  
                   
                    return $get->customerType->shopCustomerName;
                  
            })
                ->toJson();
    }
    public function todayBankingSale($type,$bank)
    {
      
      

     
        $itemss = SalesPayment::with('invoice','invoice.customerName','invoice.customerType')-> where('receiverbankEntryId', $bank)->where('receiverbankTypeEntryId', $type)->where('bankAmount','!=',NULL||0)->where('shopId',Auth::user()->shopId)->limit(100);
        
    
        return DataTables::eloquent($itemss)
             
        ->addColumn('salesDate', function (SalesPayment $get) {         
         
            return $get->invoice->salesDate;
         
    })
        ->addColumn('salesInvoiceNo', function (SalesPayment $get) {         
         
            return $get->invoice->salesInvoiceNo;
         
    })
        ->addColumn('customerName', function (SalesPayment $get) {
          
           if( $get->invoice->customerName!==null){
            return $get->invoice->customerName->customerName;
           }else{
            return "Guest";
           }
          
    })
        ->addColumn('customerType', function (SalesPayment $get) {
          
           
            return $get->invoice->customerType->shopCustomerName;
          
    })
        ->addColumn('totalQuantity', function (SalesPayment $get) {
          
           
            return $get->invoice->totalQuantity;
          
    })
        ->addColumn('discountPrice', function (SalesPayment $get) {
          
           
            return $get->invoice->discountPrice;
          
    })
        ->addColumn('discountPrice', function (SalesPayment $get) {
          
           
            return $get->invoice->discountPrice;
          
    })
        ->addColumn('currentTotalAmount', function (SalesPayment $get) {
          
           
            return $get->invoice->currentTotalAmount;
          
    })
        ->addColumn('currentPaidAmount', function (SalesPayment $get) {
          
           
            return $get->invoice->currentPaidAmount;
          
    })
        ->addColumn('mobileAmount', function (SalesPayment $get) {
          
           
            return $get->invoice->mobileAmount;
          
    })
        ->addColumn('currentDue', function (SalesPayment $get) {
          
           
            return $get->invoice->currentDue;
          
    })
        ->toJson();
             
     
    }


    public function salesInvoiceGet($id)
    {
        $msg2 = array();
        $lists = SalesProductEntry::with('productName','brandName','unitName','colorName','sizeName')->where('shopId',Auth::user()->shopId)->where('salesInvoiceNo',$id)->get();
        foreach($lists as $data){

            if($data->colorName==null){
                $colorName = '';
            }else{
                $colorName = $data->colorName->colorName;
            }

            if($data->sizeName==null){
                $sizeName = '';
            }else{
                $sizeName = $data->sizeName->sizeName;
            }

            if($data->brandName==null){
                $brandName = '';
            }else{
                $brandName = $data->brandName->productBrandName;
            }



            // =============================================
            $returnQuantity = 0;
            if(SalesReturnProductListTmp::
                where("salesInvoiceNo", $data->salesInvoiceNo)
                ->where("productId", $data->productId)
                ->where("brandId", $data->brandId)
                ->where("unitId", $data->unitId)
                ->where("colorId", $data->colorId)
                ->where("sizeId", $data->sizeId)
                ->where("status", 1)
                ->where("shopId", Auth::user()->shopId)
                ->exists()){

            $returnQuantity = SalesReturnProductListTmp::
            where("salesInvoiceNo", $data->salesInvoiceNo)
            ->where("productId", $data->productId)
            ->where("brandId", $data->brandId)
            ->where("unitId", $data->unitId)
            ->where("colorId", $data->colorId)
            ->where("sizeId", $data->sizeId)
            ->where("status", 1)
            ->where("shopId", Auth::user()->shopId)
            ->sum('quantity');
            
                }


            $returnable1 = $data->quantity-$returnQuantity;
            if($returnable1>0){
                $returnable = $returnable1;
            }else{
                $returnable = 0;
            }


            // ============================== single unit list 
            
            $thisUnitId = PurchaseProductUnitInfo::
            where("unitId", $data->unitId)
            ->where("productId", $data->productId)
            ->where("brandId", $data->brandId)
            ->where("colorId", $data->colorId)
            ->where("sizeId", $data->sizeId)
            ->where('shopId',Auth::user()->shopId)->first()->id;
            $thisUnitId = $thisUnitId-1;
            $singleUnitList = PurchaseProductUnitInfo::distinct()->where("id", '>', $thisUnitId)->where("shopId", Auth::user()->shopId)->get('unitId');
            // ============================== /single uni list 

            $msg2[] = array(
                "salesProductEntryId" => $data->salesProductEntryId,
                "salesInvoiceNo" => $data->salesInvoiceNo,
                "salesDate" => $data->salesDate,
                "salesCustomerId" => $data->salesCustomerId,
                "purchaseProductId" => $data->purchaseProductId,
                "productId" => $data->productId,
                "brandId" => $data->brandId,
                "unitId" => $data->unitId,
                "singleUnitList" => $singleUnitList,
                "colorId" => $data->colorId,
                "sizeId" => $data->sizeId,
                "quantity" => $data->quantity,
                "unitPrice" => $data->unitPrice,
                "totalPrice" => $data->totalPrice,
                "preTotalPrice" => $data->preTotalPrice,
                "totalDiscount" => $data->totalDiscount,
                "discountPrice" => $data->discountPrice,
                "priceType" => $data->priceType,
                "status" => $data->status,
                "productName" => $data->productName->productName,
                "brandName" => $brandName,
                "unit_name" => $data->unitName->uniteEntryName,
                "colorName" => $colorName,
                "sizeName" => $sizeName,
                "returnable" => $returnable,
                "returnQuantity" => $returnQuantity
                );
        
            }


        $due = SalesInvoice::where('shopId',Auth::user()->shopId)->where('salesInvoiceNo',$id)->first();
        
        $customer = SalesInvoice::with('customer')->where('shopId',Auth::user()->shopId)->where('salesInvoiceNo',$id)->get();
        
        $total = SalesProductEntry::with('productName','brandName')->where('shopId',Auth::user()->shopId)->where('salesInvoiceNo',$id)->sum('totalPrice');
        
        $discount = SalesProductEntry::with('productName','brandName')->where('shopId',Auth::user()->shopId)->where('salesInvoiceNo',$id)->sum('totalDiscount');
        
        return ['lists'=>$msg2,
        'total'=>$total,
        'discount'=>$discount,
        'due'=>$due,
        'customer'=>$customer];
        
    }
   
   
   
    public function salesReturnInvoiceProductList($id)
    {
     
        
        $due = SalesReturnInvoiceTmp::where('shopId',Auth::user()->shopId)->where('id',$id)->first();
        $lists = SalesReturnProductListTmp::with('productName','brandName','unitName','colorName','sizeName')->where('shopId',Auth::user()->shopId)->where('returnInvoiceNo',$due->returnInvoiceNo)->where('salesInvoiceNo',$due->salesInvoiceNo)->get();
         

        
        
        $customerId = SalesReturnInvoiceTmp::where('shopId',Auth::user()->shopId)->where('id',$id)->first()->customerId;
        $customer = SalesCustomerEntry::where('salesCustomerEntryId',$customerId)->first();
        
        $total = SalesReturnProductListTmp::with('productName','brandName')->where('shopId',Auth::user()->shopId)->where('returnInvoiceNo',$due->returnInvoiceNo)->where('salesInvoiceNo',$due->salesInvoiceNo)->sum('totalPrice');
        
        $discount = SalesReturnProductListTmp::with('productName','brandName')->where('shopId',Auth::user()->shopId)->where('returnInvoiceNo',$due->returnInvoiceNo)->where('salesInvoiceNo',$due->salesInvoiceNo)->sum('discount');
        
        return ['lists'=>$lists,'total'=>$total,'discount'=>$discount,'due'=>$due,'customer'=>$customer];
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $shopTypeId = Auth::user()->shopTypeId;
        
       $items=SalesInvoiceTemp::with('customerName','customerType','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')->where('paymentStatus',0)->where('shopTypeId',$shopTypeId)->where('shopId',Auth::user()->shopId)->where('createBy',Auth::user()->id)->limit(100);
       return DataTables::eloquent($items)
             
       ->addColumn('customerName', function (SalesInvoiceTemp $get) {
         
          if( $get->customerName!==null){
           return $get->customerName->customerName;
          }else{
           return "Guest";
          }
         
   })
       ->addColumn('customerType', function (SalesInvoiceTemp $get) {
         
          
           return $get->customerType->shopCustomerName;
         
   })
       ->toJson(); 
    }
    public function salesPendingInvoiceAllUser()
    {
        $shopTypeId = Auth::user()->shopTypeId;
        
       $items=SalesInvoiceTemp::with('customerName','customerType','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')->where('paymentStatus',0)->where('shopTypeId',$shopTypeId)->where('shopId',Auth::user()->shopId)->limit(100);
       return DataTables::eloquent($items)
             
       ->addColumn('customerName', function (SalesInvoiceTemp $get) {
         
          if( $get->customerName!==null){
           return $get->customerName->customerName;
          }else{
           return "Guest";
          }
         
   })
       ->addColumn('customerType', function (SalesInvoiceTemp $get) {
         
          
           return $get->customerType->shopCustomerName;
         
   })
       ->toJson(); 
    }



    public function salesDueList()
    {
        $shopTypeId = Auth::user()->shopTypeId;
        $items = SalesInvoice::with('customerName','customerType','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')->where('currentDue','!=',NULL||0)->where('shopTypeId',$shopTypeId)->where('shopId',Auth::user()->shopId)->limit(100);
        return DataTables::eloquent($items)
             
        ->addColumn('customerName', function (SalesInvoice $get) {
          
           if( $get->customerName!==null){
            return $get->customerName->customerName;
           }else{
            return "Guest";
           }
          
    })
        ->addColumn('customerType', function (SalesInvoice $get) {
          
           
            return $get->customerType->shopCustomerName;
          
    })
        ->toJson();
    }
    public function salesDueListWithId($id)
    {
        $shopTypeId = Auth::user()->shopTypeId;
        $items = SalesInvoice::with('customerName','customerType','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')->where('salesCustomerId',$id)->where('currentDue','!=',NULL||0)->where('shopTypeId',$shopTypeId)->where('shopId',Auth::user()->shopId)->limit(100);
        return DataTables::eloquent($items)
             
        ->addColumn('customerName', function (SalesInvoice $get) {
          
           if( $get->customerName!==null){
            return $get->customerName->customerName;
           }else{
            return "Guest";
           }
          
    })
        ->addColumn('customerType', function (SalesInvoice $get) {
          
           
            return $get->customerType->shopCustomerName;
          
    })
        ->toJson();
    }

    public function salesReturnInvoicePay($id)
    {
        $salesInvoice = SalesReturnInvoiceTmp::where('id',$id)->where('shopId',Auth::user()->shopId)->first();
        $gt = SalesCustomerEntry::where('salesCustomerEntryId',$salesInvoice->customerId)->where('shopId',Auth::user()->shopId)->first();
        $info=StatementInformation::where('accountCode',$gt->accountCode)->where('shopId',Auth::user()->shopId)->orderby('id','desc')->first();
        return [
            'balance'=>$salesInvoice->totalPurchaseValue,
            'customerId'=>$salesInvoice->customerId,
               ];
    }


    public function customerDuel($id)
    {
        
        $gt = SalesCustomerEntry::where('salesCustomerEntryId',$id)->where('shopId',Auth::user()->shopId)->first();
        $info=StatementInformation::where('accountCode',$gt->accountCode)->orderby('id','desc')->first();
        return ['info'=>$info];
        
    }
    
    
    public function salesDueCustomerList()
    {
      $get=SalesCustomerEntry:: where('shopId',Auth::user()->shopId)->get();
      $j=array();
      foreach ($get as $t) {
        $j[]=$t->accountCode;
      }
    
     
      $uc=  StatementInformation::
        select('accountCode',
        DB::raw('sum(debitAmount) as debitAmount'),
        DB::raw('sum(creditAmount) as creditAmount'))             
      ->whereIn('accountCode',  $j)   
      ->groupby('accountCode')
      -> where('shopId',Auth::user()->shopId)
      ->orderBy('id', 'desc')->get();
      $k=array();
      foreach ($uc as $u) {
          $balance=$u->debitAmount-$u->creditAmount;
          if($balance>0){
        $k[]=$u->accountCode;
          }
          else{
            $k[]=0;
          }
      }

      $users=  StatementInformation::with('customer')
     ->select('accountCode',
     DB::raw('sum(debitAmount) as debitAmount'),
     DB::raw('sum(creditAmount) as creditAmount'),
     )
      ->where('balanceAmount','>=',0)       
      ->whereIn('accountCode',  $k)   
      ->groupby('accountCode')
       ->where('shopId',Auth::user()->shopId)
      ->orderBy('id', 'desc')->get();

      return DataTables::of($users)
             
        ->addColumn('balanceAmount', function (StatementInformation $get) {
          
          
            return ($get->debitAmount  -  $get->creditAmount);
          
    })
        ->addColumn('customer', function (StatementInformation $get) {
          
           if( $get->customer!==null){
            return $get->customer->customerName;
           }else{
            return "Guest";
           }
          
    })
        ->addColumn('customerPhone', function (StatementInformation $get) {
          
            if( $get->customer!==null){
            return $get->customer->customerPhone;
            }else{
                return null; 
            }
          
    })
        ->addColumn('salesCustomerEntryId', function (StatementInformation $get) {
          
            if( $get->customer!==null){
            return $get->customer->salesCustomerEntryId;
            }else{
                return null; 
            }
          
    })
    ->toJson();
 
    }
    
    
    public function salesDueCustomerListDashboard()
    {
      $gets=SalesCustomerEntry:: where('shopId',Auth::user()->shopId)->get();
      
      $msg2 = array();
      $totalDue = 0;
      foreach($gets as $data){

        $currentDue = 0;

        if(StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$data->accountCode)->orderBy('id','DESC')->exists()){
            $currentDue = StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$data->accountCode)->orderBy('id','DESC')->first()->balanceAmount;
        }
        if($currentDue>0){
        $totalDue += $currentDue;
        $msg2[] = array(
            "id" => $data->salesCustomerEntryId,
            "customerName" => $data->customerName,
            "customerPhone" => $data->customerPhone,
            "customerAddress" => $data->customerAddress,
            "currentDue" => $currentDue,
            );
           }
           }

    return ['data' => $msg2,'totalDue' => $totalDue];
 
    }
    
    public function advanceSupplierListDashboard()
    {
      $gets=AdvancePayment::distinct()->where('type',1)->where('shopId',Auth::user()->shopId)->get('accountCode');
      
      $msg2 = array();
      $totalDue = 0;
      foreach($gets as $data){

        $currentDue = 0;
        $supplierInfo = '';

        if(AddProductSupplierEntry::where('shopId',Auth::user()->shopId)->where('accountCode',$data->accountCode)->exists()){
        $supplierInfo = AddProductSupplierEntry::where('shopId',Auth::user()->shopId)->where('accountCode',$data->accountCode)->first();
        }


        if(StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$data->accountCode)->orderBy('id','DESC')->exists()){
            $currentDue = StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$data->accountCode)->orderBy('id','DESC')->first()->balanceAmount;
        }
        if($currentDue>0){
        $totalDue += $currentDue;
        $msg2[] = array(
            "id" => $supplierInfo->productSupplierId,
            "name" => $supplierInfo->productSupplierName,
            "mobile" => $supplierInfo->productSupplierPhone,
            "currentDue" => $currentDue,
            );
           }
           }

    return ['data' => $msg2,'totalDue' => $totalDue];
 
    }
    
    public function advanceCustomerListDashboard()
    {
      $gets=AdvancePayment::distinct()->where('type',2)->where('shopId',Auth::user()->shopId)->get('accountCode');
      
      $msg2 = array();
      $totalDue = 0;
      foreach($gets as $data){

        $currentDue = 0;

        $supplierInfo = SalesCustomerEntry::where('shopId',Auth::user()->shopId)->where('accountCode',$data->accountCode)->first();

        if(StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$data->accountCode)->orderBy('id','DESC')->exists()){
            $currentDue = StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$data->accountCode)->orderBy('id','DESC')->first()->balanceAmount;
        }
        if($currentDue<0){
        $totalDue += $currentDue;
        $msg2[] = array(
            "id" => $supplierInfo->salesCustomerEntryId,
            "name" => $supplierInfo->customerName,
            "currentDue" => abs($currentDue),
            );
           }
           }

    return ['data' => $msg2,'totalDue' => abs($totalDue)];
 
    }


    public function salesTodayDueList()
    {
        $shopTypeId = Auth::user()->shopTypeId;
        $items = SalesInvoice::with('customerName','customerType','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')->whereDate('salesDate',Carbon::today())->where('currentDue','!=',NULL||0)->where('shopTypeId',$shopTypeId)->where('shopId',Auth::user()->shopId)->limit(100);
        return DataTables::eloquent($items)
             
        ->addColumn('customerName', function (SalesInvoice $get) {
          
           if( $get->customerName!==null){
            return $get->customerName->customerName;
           }else{
            return "Guest";
           }
          
    })
        ->addColumn('customerType', function (SalesInvoice $get) {
          
           
            return $get->customerType->shopCustomerName;
          
    })
        ->toJson();
    }

    
    public function salesBalanceSheet()
    {

    $get=BankTypeEntry::get();
        $j=array();
        foreach ($get as $t) {
          $j[]=$t->bankTypeEntryId;
        }
        $getcus=SalesCustomerEntry::where('shopId',Auth::user()->shopId)->get();
        $i=array();
        foreach ($getcus as $cus) {
          $i[]=$cus->accountCode;
        }
        $c=SalesPayment::where('salesCustomerTypeId','!=',0)->where('shopId',Auth::user()->shopId)->whereDate('created_at',Carbon::today())->orderby('id','desc')->get()->unique('salesCustomerId');
        $currentDue=0;
       foreach ($c as $cd) {
           $currentDue+=$cd->currentDue;
       }
       $bank=StatementInformation::with('bank')->where('paymentType' ,2)->where('shopId',Auth::user()->shopId)->whereIn('accountCode',$i)->whereIn('bankTypeEntryId',$j)->whereDate('created_at',Carbon::today())
       ->select('bankEntryId',DB::raw('sum(creditAmount) as creditAmount'))
       ->groupby('bankEntryId')->get();
        $cashAmountStatement = StatementInformation::where('shopId',Auth::user()->shopId)->where('paymentType' ,1)->whereIn('accountCode',$i)->whereDate('created_at',Carbon::today())->sum('creditAmount');
        $bankAmountStatement = StatementInformation::where('shopId',Auth::user()->shopId)->where('paymentType' ,2)->whereIn('accountCode',$i)->whereDate('created_at',Carbon::today())->sum('creditAmount');
        $cashAmount = SalesPayment::where('salesCustomerTypeId','!=',0)->where('shopId',Auth::user()->shopId)->whereDate('created_at',Carbon::today())->sum('cashAmount');
        // $currentDue = SalesPayment::where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->sum('currentDue');
        $bankAmount = SalesPayment::where('salesCustomerTypeId','!=',0)->where('shopId',Auth::user()->shopId)->whereDate('created_at',Carbon::today())->sum('bankAmount');
        $totalSale = SalesInvoice::where('shopId',Auth::user()->shopId)->whereDate('created_at',Carbon::today())->sum('totalPayable');
    return [
        'totalSale'=>$totalSale,
        'cashAmount'=>$cashAmount,
        'bankAmountStatement'=>$bankAmountStatement,
        'currentDue'=>$currentDue,
        'cashAmountStatement'=>$cashAmountStatement,
        'bankAmount'=>$bankAmount,
        'bank'=>$bank];
    }

    public function salesBalanceSheetUser()
    {

    $get=BankTypeEntry::get();
        $j=array();
        foreach ($get as $t) {
          $j[]=$t->bankTypeEntryId;
        }
        $getcus=SalesCustomerEntry::where('shopId',Auth::user()->shopId)->get();
        $i=array();
        foreach ($getcus as $cus) {
          $i[]=$cus->accountCode;
        }
        $c=SalesPayment::where('salesCustomerTypeId','!=',0)->where('createBy',Auth::user()->id)->where('shopId',Auth::user()->shopId)->whereDate('created_at',Carbon::today())->orderby('id','desc')->get()->unique('salesCustomerId');
        $currentDue=0;
       foreach ($c as $cd) {
           $currentDue+=$cd->currentDue;
       }
       $bank=StatementInformation::with('bank')->where('paymentType' ,2)
       ->where('shopId',Auth::user()->shopId)
       ->where('createBy',Auth::user()->id)
       ->whereIn('accountCode',$i)->whereIn('bankTypeEntryId',$j)->whereDate('created_at',Carbon::today())
       ->select('bankEntryId',DB::raw('sum(creditAmount) as creditAmount'))
       ->groupby('bankEntryId')->get();
        $cashAmountStatement = StatementInformation::where('shopId',Auth::user()->shopId)->where('createBy',Auth::user()->id)->where('paymentType' ,1)->whereIn('accountCode',$i)->whereDate('created_at',Carbon::today())->sum('creditAmount');
        $bankAmountStatement = StatementInformation::where('shopId',Auth::user()->shopId)->where('createBy',Auth::user()->id)->where('paymentType' ,2)->whereIn('accountCode',$i)->whereDate('created_at',Carbon::today())->sum('creditAmount');
        $cashAmount = SalesPayment::where('salesCustomerTypeId','!=',0)->where('shopId',Auth::user()->shopId)->where('createBy',Auth::user()->id)->whereDate('created_at',Carbon::today())->sum('cashAmount');
        // $currentDue = SalesPayment::where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->sum('currentDue');
        $bankAmount = SalesPayment::where('salesCustomerTypeId','!=',0)->where('createBy',Auth::user()->id)->where('shopId',Auth::user()->shopId)->whereDate('created_at',Carbon::today())->sum('bankAmount');
        $totalSale = SalesInvoice::where('shopId',Auth::user()->shopId)->where('createBy',Auth::user()->id)->whereDate('created_at',Carbon::today())->sum('totalPayable');
    return [
        'totalSale'=>$totalSale,
        'cashAmount'=>$cashAmount,
        'bankAmountStatement'=>$bankAmountStatement,
        'currentDue'=>$currentDue,
        'cashAmountStatement'=>$cashAmountStatement,
        'bankAmount'=>$bankAmount,
        'bank'=>$bank];
    }




    public function salesBalanceSheetDate($date)
    {
        $get=BankTypeEntry::get();
        $j=array();
        foreach ($get as $t) {
          $j[]=$t->bankTypeEntryId;
        }
        $getcus=SalesCustomerEntry::where('shopId',Auth::user()->shopId)->get();
        $i=array();
        foreach ($getcus as $cus) {
          $i[]=$cus->accountCode;
        }
        $c=SalesPayment::where('salesCustomerTypeId','!=',0)->where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->orderby('id','desc')->get()->unique('salesCustomerId');
        $currentDue=0;
       foreach ($c as $cd) {
           $currentDue+=$cd->currentDue;
       }
       $bank=StatementInformation::with('bank')->where('paymentType' ,2)->where('shopId',Auth::user()->shopId)->whereIn('accountCode',$i)->whereIn('bankTypeEntryId',$j)->whereDate('created_at',$date)
       ->select('bankEntryId',DB::raw('sum(creditAmount) as creditAmount'))
       ->groupby('bankEntryId')->get();
        $cashAmountStatement = StatementInformation::where('paymentType' ,1)->whereIn('accountCode',$i)->where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->sum('creditAmount');
        $bankAmountStatement = StatementInformation::where('paymentType' ,2)->whereIn('accountCode',$i)->where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->sum('creditAmount');
        $cashAmount = SalesPayment::where('salesCustomerTypeId','!=',0)->where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->sum('cashAmount');
        // $currentDue = SalesPayment::where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->sum('currentDue');
        $bankAmount = SalesPayment::where('salesCustomerTypeId','!=',0)->where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->sum('bankAmount');
        $totalSale = SalesInvoice::where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->sum('totalPayable');
    return ['totalSale'=>$totalSale,'cashAmount'=>$cashAmount,'bankAmountStatement'=>$bankAmountStatement,'currentDue'=>$currentDue,'cashAmountStatement'=>$cashAmountStatement,'bankAmount'=>$bankAmount,'bank'=>$bank];
    
    }



    public function salesBalanceSheetDateUser($date)
    {
        $get=BankTypeEntry::get();
        $j=array();
        foreach ($get as $t) {
          $j[]=$t->bankTypeEntryId;
        }
        $getcus=SalesCustomerEntry::where('shopId',Auth::user()->shopId)->get();
        $i=array();
        foreach ($getcus as $cus) {
          $i[]=$cus->accountCode;
        }
        $c=SalesPayment::where('salesCustomerTypeId','!=',0)->where('createBy',Auth::user()->id)->where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->orderby('id','desc')->get()->unique('salesCustomerId');
        $currentDue=0;
       foreach ($c as $cd) {
           $currentDue+=$cd->currentDue;
       }
       $bank=StatementInformation::with('bank')->where('paymentType' ,2)->where('createBy',Auth::user()->id)->where('shopId',Auth::user()->shopId)->whereIn('accountCode',$i)->whereIn('bankTypeEntryId',$j)->whereDate('created_at',$date)
       ->select('bankEntryId',DB::raw('sum(creditAmount) as creditAmount'))
       ->groupby('bankEntryId')->get();
        $cashAmountStatement = StatementInformation::where('paymentType' ,1)->whereIn('accountCode',$i)->where('createBy',Auth::user()->id)->where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->sum('creditAmount');
        $bankAmountStatement = StatementInformation::where('paymentType' ,2)->whereIn('accountCode',$i)->where('createBy',Auth::user()->id)->where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->sum('creditAmount');
        $cashAmount = SalesPayment::where('salesCustomerTypeId','!=',0)->where('createBy',Auth::user()->id)->where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->sum('cashAmount');
        // $currentDue = SalesPayment::where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->sum('currentDue');
        $bankAmount = SalesPayment::where('salesCustomerTypeId','!=',0)->where('createBy',Auth::user()->id)->where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->sum('bankAmount');
        $totalSale = SalesInvoice::where('shopId',Auth::user()->shopId)->where('createBy',Auth::user()->id)->whereDate('created_at',$date)->sum('totalPayable');
    return ['totalSale'=>$totalSale,'cashAmount'=>$cashAmount,'bankAmountStatement'=>$bankAmountStatement,'currentDue'=>$currentDue,'cashAmountStatement'=>$cashAmountStatement,'bankAmount'=>$bankAmount,'bank'=>$bank];
    
    }

    public function salesBalanceSheetDateUserWithId($date,$id)
    {
        $get=BankTypeEntry::get();
        $j=array();
        foreach ($get as $t) {
          $j[]=$t->bankTypeEntryId;
        }
        $getcus=SalesCustomerEntry::where('shopId',Auth::user()->shopId)->get();
        $i=array();
        foreach ($getcus as $cus) {
          $i[]=$cus->accountCode;
        }
        $c=SalesPayment::where('salesCustomerTypeId','!=',0)->where('createBy',$id)->where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->orderby('id','desc')->get()->unique('salesCustomerId');
        $currentDue=0;
       foreach ($c as $cd) {
           $currentDue+=$cd->currentDue;
       }
       $bank=StatementInformation::with('bank')->where('paymentType' ,2)->where('createBy',$id)->where('shopId',Auth::user()->shopId)->whereIn('accountCode',$i)->whereIn('bankTypeEntryId',$j)->whereDate('created_at',$date)
       ->select('bankEntryId',DB::raw('sum(creditAmount) as creditAmount'))
       ->groupby('bankEntryId')->get();
        $cashAmountStatement = StatementInformation::where('paymentType' ,1)->whereIn('accountCode',$i)->where('createBy',$id)->where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->sum('creditAmount');
        $bankAmountStatement = StatementInformation::where('paymentType' ,2)->whereIn('accountCode',$i)->where('createBy',$id)->where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->sum('creditAmount');
        $cashAmount = SalesPayment::where('salesCustomerTypeId','!=',0)->where('createBy',$id)->where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->sum('cashAmount');
        // $currentDue = SalesPayment::where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->sum('currentDue');
        $bankAmount = SalesPayment::where('salesCustomerTypeId','!=',0)->where('createBy',$id)->where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->sum('bankAmount');
        $totalSale = SalesInvoice::where('shopId',Auth::user()->shopId)->where('createBy',$id)->whereDate('created_at',$date)->sum('totalPayable');
    return ['totalSale'=>$totalSale,'cashAmount'=>$cashAmount,'bankAmountStatement'=>$bankAmountStatement,'currentDue'=>$currentDue,'cashAmountStatement'=>$cashAmountStatement,'bankAmount'=>$bankAmount,'bank'=>$bank];
    
    }
        public function dueSaleToday()
    {
        
       $c=SalesPayment::where('shopId',Auth::user()->shopId)->where('salesCustomerTypeId','!=',0)->whereDate('created_at',Carbon::today())->orderby('id','desc')->get()->unique('salesCustomerId');
       $totaldue=0;
       $j=array();
      foreach ($c as $cd) {
          $totaldue+=$cd->currentDue;
          $j[]=$cd->id;
      }
       $due=SalesPayment::with('type')->select('salesCustomerTypeId',DB::raw('sum(currentDue) as currentDue'))
       ->where('shopId',Auth::user()->shopId)
       ->whereDate('created_at',Carbon::today())
       ->where('currentDue','!=',NULL||0)
       ->whereIn('id',$j)
      
       ->groupBy('salesCustomerTypeId')->get();

        
    return ['due'=>$due,'totaldue'=>$totaldue];
    
    }
    public function dueSaleTodayUser()
    {
        
       $c=SalesPayment::where('shopId',Auth::user()->shopId)->where('createBy',Auth::user()->id)->where('salesCustomerTypeId','!=',0)->whereDate('created_at',Carbon::today())->orderby('id','desc')->get()->unique('salesCustomerId');
       $totaldue=0;
       $j=array();
      foreach ($c as $cd) {
          $totaldue+=$cd->currentDue;
          $j[]=$cd->id;
      }
       $due=SalesPayment::with('type')->select('salesCustomerTypeId',DB::raw('sum(currentDue) as currentDue'))
       ->where('shopId',Auth::user()->shopId)
       ->where('createBy',Auth::user()->id)
       ->whereDate('created_at',Carbon::today())
       ->where('currentDue','!=',NULL||0)
       ->whereIn('id',$j)
       ->groupBy('salesCustomerTypeId')->get();

        
    return ['due'=>$due,'totaldue'=>$totaldue];
    
    }


    public function getCustomerListBSheet($id)
    {
       $c=SalesPayment::where('salesCustomerTypeId',$id)
       ->where('shopId',Auth::user()->shopId)
       ->where('createBy',Auth::user()->id)
       ->where('salesCustomerTypeId','!=',0)
       ->whereDate('created_at',Carbon::today())
       ->orderby('id','desc')->get()->unique('salesCustomerId');
       $totaldue=0;
       $j=array();
      foreach ($c as $cd) {
          $totaldue+=$cd->currentDue;
          $j[]=$cd->id;
      }

    $customerIds = SalesPayment::whereIn('id',$j)->where('salesCustomerTypeId',$id)->distinct()->get('salesCustomerId');

    $msg2 = array();

    foreach($customerIds as $customerId){

        if($customerId->salesCustomerId){
       $due=SalesPayment::select('salesCustomerId',DB::raw('sum(currentDue) as currentDue'))
       ->where('salesCustomerId',$customerId->salesCustomerId)
       ->where('shopId',Auth::user()->shopId)
       ->where('createBy',Auth::user()->id)
       ->whereDate('created_at',Carbon::today())
       ->where('currentDue','!=',NULL||0)
       ->orderBy('id','DESC')
       ->groupBy('salesCustomerId')->first();

       $msg2[] = array(
        "customerId" => $customerId->salesCustomerId,
        "customerName" => SalesCustomerEntry::where('salesCustomerEntryId',$customerId->salesCustomerId)->first()->customerName,
        "due" => SalesPayment::whereIn('id',$j)->where('createBy',Auth::user()->id)->where('salesCustomerId',$customerId->salesCustomerId)->orderBy('id','DESC')->first()->currentDue,
        );
    }


    }

       $customerTypeName = ShopCustomerTypeEntry::where('shopCustomerTypeEntryId',$id)->first()->shopCustomerName;

        
    return ['customerList'=>$msg2,'customerTypeName'=>$customerTypeName];
    }

    public function getCustomerListBSheetEId($id,$eid)
    {
       $c=SalesPayment::where('salesCustomerTypeId',$id)
       ->where('shopId',Auth::user()->shopId)
       ->where('createBy',$eid)
       ->where('salesCustomerTypeId','!=',0)
       ->whereDate('created_at',Carbon::today())
       ->orderby('id','desc')->get()->unique('salesCustomerId');
       $totaldue=0;
       $j=array();
      foreach ($c as $cd) {
          $totaldue+=$cd->currentDue;
          $j[]=$cd->id;
      }

    $customerIds = SalesPayment::whereIn('id',$j)->where('salesCustomerTypeId',$id)->distinct()->get('salesCustomerId');

    $msg2 = array();

    foreach($customerIds as $customerId){

        if($customerId->salesCustomerId){

       $msg2[] = array(
        "customerId" => $customerId->salesCustomerId,
        "customerName" => SalesCustomerEntry::where('salesCustomerEntryId',$customerId->salesCustomerId)->first()->customerName,
        "due" => SalesPayment::whereIn('id',$j)->where('createBy',Auth::user()->id)->where('salesCustomerId',$customerId->salesCustomerId)->orderBy('id','DESC')->first()->currentDue,
        );
        
    }


    }

       $customerTypeName = ShopCustomerTypeEntry::where('shopCustomerTypeEntryId',$id)->first()->shopCustomerName;

        
    return ['customerList'=>$msg2,'customerTypeName'=>$customerTypeName];
    }

    public function getCustomerListBSheetDate($id,$date)
    {
       $c=SalesPayment::where('salesCustomerTypeId',$id)
       ->where('shopId',Auth::user()->shopId)
       ->where('createBy',Auth::user()->id)
       ->where('salesCustomerTypeId','!=',0)
       ->whereDate('created_at',$date)
       ->orderby('id','desc')->get()->unique('salesCustomerId');
       $totaldue=0;
       $j=array();
      foreach ($c as $cd) {
          $totaldue+=$cd->currentDue;
          $j[]=$cd->id;
      }

    $customerIds = SalesPayment::whereIn('id',$j)->where('salesCustomerTypeId',$id)->distinct()->get('salesCustomerId');

    $msg2 = array();

    foreach($customerIds as $customerId){

        if($customerId->salesCustomerId){
       

       $msg2[] = array(
        "customerId" => $customerId->salesCustomerId,
        "customerName" => SalesCustomerEntry::where('salesCustomerEntryId',$customerId->salesCustomerId)->first()->customerName,
        "due" => SalesPayment::whereIn('id',$j)->where('createBy',Auth::user()->id)->where('salesCustomerId',$customerId->salesCustomerId)->orderBy('id','DESC')->first()->currentDue,
        );
    }


    }

       $customerTypeName = ShopCustomerTypeEntry::where('shopCustomerTypeEntryId',$id)->first()->shopCustomerName;

        
    return ['customerList'=>$msg2,'customerTypeName'=>$customerTypeName];
    }


    public function getCustomerListBSheetDateEId($id,$date,$eid)
    {
       $c=SalesPayment::where('salesCustomerTypeId',$id)
       ->where('shopId',Auth::user()->shopId)
       ->where('createBy',$eid)->where('salesCustomerTypeId','!=',0)->whereDate('created_at',$date)->orderby('id','desc')->get()->unique('salesCustomerId');
       $totaldue=0;
       $j=array();
      foreach ($c as $cd) {
          $totaldue+=$cd->currentDue;
          $j[]=$cd->id;
      }

    $customerIds = SalesPayment::whereIn('id',$j)->where('salesCustomerTypeId',$id)->distinct()->get('salesCustomerId');

    $msg2 = array();

    foreach($customerIds as $customerId){

        if($customerId->salesCustomerId){

       $msg2[] = array(
        "customerId" => $customerId->salesCustomerId,
        "customerName" => SalesCustomerEntry::where('salesCustomerEntryId',$customerId->salesCustomerId)->first()->customerName,
        "due" => SalesPayment::whereIn('id',$j)->where('createBy',$eid)->where('salesCustomerId',$customerId->salesCustomerId)->orderBy('id','DESC')->first()->currentDue,
        );
    }


    }

       $customerTypeName = ShopCustomerTypeEntry::where('shopCustomerTypeEntryId',$id)->first()->shopCustomerName;

        
    return ['customerList'=>$msg2,'customerTypeName'=>$customerTypeName];
    }


    public function salesBalanceSheetDateDue($date)
    {

        $c=SalesPayment::where('salesCustomerTypeId','!=',0)->where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->orderby('id','desc')->get()->unique('salesCustomerId');
        $totaldue=0;
        $j=array();
       foreach ($c as $cd) {
           $totaldue+=$cd->currentDue;
           $j[]=$cd->id;
       }
        $due=SalesPayment::with('type')->select('salesCustomerTypeId',DB::raw('sum(currentDue) as currentDue'))
        ->where('shopId',Auth::user()->shopId)
        ->whereDate('created_at',$date)
        ->where('currentDue','!=',NULL||0)
        ->whereIn('id',$j)
        ->groupBy('salesCustomerTypeId')->get();
 
        
    return ['due'=>$due,'totaldue'=>$totaldue];
    
    }


    public function salesBalanceSheetDateDueUser($date)
    {

        $c=SalesPayment::where('salesCustomerTypeId','!=',0)->where('createBy',Auth::user()->id)->where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->orderby('id','desc')->get()->unique('salesCustomerId');
        $totaldue=0;
        $j=array();
       foreach ($c as $cd) {
           $totaldue+=$cd->currentDue;
           $j[]=$cd->id;
       }
        $due=SalesPayment::with('type')->select('salesCustomerTypeId',DB::raw('sum(currentDue) as currentDue'))
        ->where('shopId',Auth::user()->shopId)
        ->where('createBy',Auth::user()->id)
        ->whereDate('created_at',$date)
        ->where('currentDue','!=',NULL||0)
        ->whereIn('id',$j)
        ->groupBy('salesCustomerTypeId')->get();
 
        
    return ['due'=>$due,'totaldue'=>$totaldue];
    
    }

    public function salesBalanceSheetDateDueUserWithId($date,$id)
    {

        $c=SalesPayment::where('salesCustomerTypeId','!=',0)->where('createBy',$id)->where('shopId',Auth::user()->shopId)->whereDate('created_at',$date)->orderby('id','desc')->get()->unique('salesCustomerId');
        $totaldue=0;
        $j=array();
       foreach ($c as $cd) {
           $totaldue+=$cd->currentDue;
           $j[]=$cd->id;
       }
        $due=SalesPayment::with('type')->select('salesCustomerTypeId',DB::raw('sum(currentDue) as currentDue'))
        ->where('shopId',Auth::user()->shopId)
        ->where('createBy',$id)
        ->whereDate('created_at',$date)
        ->where('currentDue','!=',NULL||0)
        ->whereIn('id',$j)
        ->groupBy('salesCustomerTypeId')->get();
 
        
    return ['due'=>$due,'totaldue'=>$totaldue];
    
    }


    public function salesCustomerListTotalDue($id)
    {
        $getcus = SalesCustomerEntry::where('shopId',Auth::user()->shopId)->get();
        $i=array();
        foreach ($getcus as $cus) {
          $i[]=$cus->accountCode;
        }
        // with('type','name')
        $due=StatementInformation::
            with('customer')
            ->where('shopId',Auth::user()->shopId)
            ->where('accountHeadCode',$id)
         ->whereIn('accountCode',$i)
         ->where('balanceAmount','>=',0)
        
         ->select('accountCode',DB::raw('sum(debitAmount) as debitAmount')
         ,DB::raw('sum(creditAmount) as creditAmount')
         )
        ->groupby('accountCode')
        ->limit(100);
      
        return DataTables::eloquent($due)
        ->addColumn('balanceAmount', function (StatementInformation $get) {
          
          
            return ($get->debitAmount  -  $get->creditAmount);
          
    })
    ->addColumn('customer', function (StatementInformation $get) {
          
        if( $get->customer!==null){
         return $get->customer->customerName;
        }else{
         return "Guest";
        }
       
 })
     ->addColumn('customerPhone', function (StatementInformation $get) {
       
         if( $get->customer!==null){
         return $get->customer->customerPhone;
         }else{
             return null; 
         }
       
 })
     ->addColumn('salesCustomerEntryId', function (StatementInformation $get) {
       
         if( $get->customer!==null){
         return $get->customer->salesCustomerEntryId;
         }else{
             return null; 
         }
       
 })
             
  
        ->toJson();
   
    
    }
    public function dueSaleTotal()
    { 

       $getcus=SalesCustomerEntry::where('shopId',Auth::user()->shopId)->get();
       $i=array();
       foreach ($getcus as $cus) {
         $i[]=$cus->accountCode;
       }
     $st=StatementInformation::whereIn('accountCode',$i)->where('shopId',Auth::user()->shopId)->orderby('id','desc')->get()->unique('accountCode') ;


     
      $k=array();
     $totaldue=0;
     foreach($st as $t){
        $totaldue+= $t->balanceAmount;
        $k[]=$t->id;
     }
     $due=StatementInformation::with('type')->select('accountHeadCode',DB::raw('sum(balanceAmount) as currentDue'))
     ->where('shopId',Auth::user()->shopId)
     
     ->where('balanceAmount','>',0)
     ->whereIn('id',$k)
   
     ->groupBy('accountHeadCode')->get();

    return ['due'=>$due,'totaldue'=>$totaldue];
    
    }
    public function salesDueListWithType($id)
    {
        $shopTypeId = Auth::user()->shopTypeId;
        $items = SalesInvoice::with('customerName','customerType','salesProductList.productName','salesProductList.brandName','salesProductList.unitName')->where('currentDue','!=',NULL||0)->where('salesCustomerTypeId',$id)->where('shopTypeId',$shopTypeId)->where('shopId',Auth::user()->shopId)->limit(100);
        return DataTables::eloquent($items)
             
        ->addColumn('customerName', function (SalesInvoice $get) {
          
           if( $get->customerName!==null){
            return $get->customerName->customerName;
           }else{
            return "Guest";
           }
          
    })
        ->addColumn('customerType', function (SalesInvoice $get) {
          
           
            return $get->customerType->shopCustomerName;
          
    })
        ->toJson();
}
   

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
   
   
     public function salesDueCollection(Request $request)
    {
        SalesPayment::where('shopId',Auth::user()->shopId)->insert([
              
            'shopId'=> Auth::User()->shopId,
            'salesCustomerTypeId'=>  0,
            'salesInvoiceId'=>  0,
            'salesCustomerId'=>  $request->salesCustomerId,
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
            'createBy' => Auth::user()->id,
            'created_at'=>Carbon::now(),
        ]);

        


        //  --------------------------------------------------------------------
        //  ------------------ voucher & statement information -----------------
        //  --------------------------------------------------------------------


        
        $salesCustomerId = $request->salesCustomerId;
        $companyId = $salesCustomerId;
        $referance = 'customer-'.$companyId;
        $title = 'Customer Invoice Create';
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
                            'accountCode' => $headCode2,
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
                    
                     
                        $voucherType = 4;
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
                            'accountCode' => $headCode2,
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
   
   
     public function salesDueCollection1(Request $request)
    {
        // SalesPayment::where('shopId',Auth::user()->shopId)->insert([
              
        //     'shopId'=> Auth::User()->shopId,
        //     'salesCustomerTypeId'=>  0,
        //     'salesInvoiceId'=>  0,
        //     'salesCustomerId'=>  $request->salesCustomerId,
        //     'cashAmount'=>  $request->currentPaidAmount,
        //     'bankAmount'=>  $request->mobileAmount,
        //     'currentDue' => $request->currentDue,
        //     'senderbankTypeEntryId'=>  $request->senderbankTypeEntryId,
        //     'senderBankName'=>  $request->senderBankName,
        //     'senderAcNo'=>  $request->senderAcNo,
        //     'senderAcName'=>  $request->senderAcName,
        //     'senderBranchName'=>  $request->senderBranchName,
        //     'senderMobileAcNo'=>  $request->senderMobileAcNo,
        //     'senderTrxNo'=>  $request->senderTrxNo,
        //     'receiverbankTypeEntryId'=>  $request->receiverbankTypeEntryId,
        //     'receiverbankEntryId'=>  $request->receiverbankEntryId,
        //     'receiverbankAccountId'=>  $request->receiverbankAccountId,
        //     'receiverbranchName'=>  $request->receiverbranchName,
        //     'receiverAccNo'=>  $request->receiverAccNo,
        //     'createBy' => Auth::user()->id,
        //     'created_at'=>Carbon::now(),
        // ]);

        


        //  --------------------------------------------------------------------
        //  ------------------ voucher & statement information -----------------
        //  --------------------------------------------------------------------


        
        $salesCustomerId = $request->salesCustomerId;
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
            $expenseTitle = 'Cash receive for return.';
            $title = 'Customer cash receive for return.';
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
                            'accountCode' => $headCode2,
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
            $balanceAmount = $balanceAmountDb-$request->mobileAmount;
            $expenseTitle = 'Bank receive for return.';
            $title = 'Customer bank receive for return.';
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
                            'accountCode' => $headCode2,
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


       
    }
    
    public function saleOrderRequest(Request $request)
    {
        if(DealerSalesOrder::
            where('supplierId',$request->productSupplierId)
            ->where('productId',$request->t_productId)
            ->where('rendomNumber',$request->rendomNumber)
            ->where('brandId',$request->t_brandId)
            ->where('colorId',$request->t_colorId)
            ->where('sizeId',$request->t_sizeId)
            ->where('priceType',$request->t_priceTypeId)
            ->where('OrderRequestDate',$request->OrderRequestDate)
            ->where('createBy',Auth::user()->id)
            ->where('shopId',Auth::user()->shopId)->exists()){

                DealerSalesOrder::
            where('supplierId',$request->productSupplierId)
            ->where('rendomNumber',$request->rendomNumber)
            ->where('productId',$request->t_productId)
            ->where('brandId',$request->t_brandId)
            ->where('colorId',$request->t_colorId)
            ->where('sizeId',$request->t_sizeId)
            ->where('priceType',$request->t_priceTypeId)
            ->where('OrderRequestDate',$request->OrderRequestDate)
            ->where('createBy',Auth::user()->id)
            ->where('shopId',Auth::user()->shopId)->update([

                'cartonRequest' => $request->t_carton,
                'pieceRequest' => $request->t_pcs,
                'totalPieceRequest' => $request->t_totalPcs,
                'totalPriceRequest' => $request->t_totalPrice,
            ]);

        }
        else{
            DealerSalesOrder::insert([
            'rendomNumber' => $request->rendomNumber,
            'supplierId' => $request->productSupplierId,
            'productId' => $request->t_productId,
            'brandId' => $request->t_brandId,
            'colorId' => $request->t_colorId,
            'sizeId' => $request->t_sizeId,
            'unitPrice' => $request->t_tpRate,
            'priceType' => $request->t_priceTypeId,
            'purchaseUnitPrice' => $request->t_purchaseRate,
            'perCartonQuantity' => $request->t_perPcsQuantity,
            'unitId' => $request->t_unitId,
            'perCartonUnitName' => $request->t_unit,
            'cartonRequest' => $request->t_carton,
            'pieceRequest' => $request->t_pcs,
            'totalPieceRequest' => $request->t_totalPcs,
            'totalPriceRequest' => $request->t_totalPrice,
            'customerId' => $request->customerId,
            'srId'  => $request->srId,
            'dsrId'  => $request->dsrId,
            'OrderRequestDate'  => $request->OrderRequestDate,
            'createBy' => Auth::user()->id,
            'shopId' => Auth::user()->shopId,
            'shopTypeId' => Auth::user()->shopTypeId,
            'created_at'=>Carbon::now(),
            ]);
        }

        $total = DealerSalesOrder::
        where('supplierId',$request->productSupplierId)
        ->where('rendomNumber',$request->rendomNumber)
        ->where('OrderRequestDate',$request->OrderRequestDate)
        ->where('createBy',Auth::user()->id)
        ->where('shopId',Auth::user()->shopId)->sum('totalPriceRequest');

        return ['total' => $total];

    }
    
    
    public function orderReceiveRequest(Request $request)
    {
     

                DealerSalesOrder::
            where('id',$request->t_id)
            ->where('shopId',Auth::user()->shopId)->update([

                'totalPieceGood' => $request->t_carton,
                'totalPieceDamage' => $request->t_pcs,
                'totalPieceReturn' => $request->t_returnQuantity,
                'quantity' => $request->t_saleQuantity,
                'totalPrice' => $request->t_totalPrice,
                'purchaseTotalPrice' => $request->t_totalPurchasePrice,
                'totalProfit' => $request->t_totalPrice-$request->t_totalPurchasePrice,

            ]);

         

        $total = DealerSalesOrder::
        where('rendomNumber',$request->rendomNumber)
        ->where('shopId',Auth::user()->shopId)->sum('totalPrice');

        return ['total' => $total];

    }
    
    public function saleOrderFinalListById($id)
    {
            $data = DealerSalesOrderReceiveSubmit::with('supplier','customer')->where('shopId',Auth::user()->shopId)->where('salesRequestId',$id)->first();
            return ['data' => $data];
    }
    public function salesSupplierSearchDetails($id)
    {
            $data = DealerSalesSupplierSearchInfo::with('supplier','brand','customer')->where('id',$id)->first();
            return ['data' => $data];
    }
    
    
    public function salesOrderSupplierSearch($sid,$bid,$searchId)
    {

        $searchId = DealerSalesSupplierSearchInfo::where('id',$searchId)->update([
            'supplierId' => $sid,
            'brandId' => $bid,
        ]);
    }
    
    public function salesOrderCustomerSearch($cid,$sid,$bid,$searchId)
    {

        $searchId = DealerSalesSupplierSearchInfo::where('id',$searchId)->update([
            'customerId' => $cid,
            'supplierId' => $sid,
            'brandId' => $bid,
        ]);
    }

     
    public function customerSalesReport($sid,$date)
    {

        $searchId = DealerSalesSupplierSearchInfo::insertGetId([
            'customerId' => $sid,
            'dateTime' => $date,
            'createBy' => Auth::user()->id,
            'shopId' => Auth::user()->shopId,
            'created_at'=>Carbon::now(),
        ]);

        $datas = DealerSalesOrder::query();
        $datas = $datas->distinct();
        $datas = $datas->where('shopId',Auth::user()->shopId);
        $datas = $datas->where('status',3);

            if($sid){
                $datas = $datas->where('customerId',$sid);
            }
            
            if($date){
                $datas = $datas->where('OrderRequestDate','LIKE',$date.'%');
            }

            // $datas = $datas->orderBy('id','DESC');
            
            $datas = $datas->get('id');
            
            
            $msg2 = array();
            $ts = 0;
            $tp = 0;
            $tpr = 0;

            $suppliers = DealerSalesOrder::distinct()->whereIn('id',$datas)->get('supplierId');
            
            foreach($suppliers as $data){
                $supplierId = $data->supplierId;
                $supplierInfo = AddProductSupplierEntry::where('productSupplierId',$supplierId)->first();
                 
                $selectBrand = DealerSalesOrder::distinct()->whereIn('id',$datas)->get('brandId');
                    
                    foreach($selectBrand as $brand){

                        $brandId= $brand->brandId;
                        $brandName = ProductBrandEntry::where('productBrandEntryId',$brandId)->first()->productBrandName;
                        $info = DealerSalesOrder::whereIn('id',$datas)->where('supplierId',$supplierId)->where('brandId',$brandId)->first();
                        $customerInfo = SalesCustomerEntry::where('salesCustomerEntryId',$info->customerId)->first();
                        $salesPrice = DealerSalesOrder::whereIn('id',$datas)->where('supplierId',$supplierId)->where('brandId',$brandId)->sum('totalPrice');
                        $ts += $salesPrice;
                        $purchasePrice = DealerSalesOrder::whereIn('id',$datas)->where('supplierId',$supplierId)->where('brandId',$brandId)->sum('purchaseTotalPrice');
                        $tp += $purchasePrice;
                        $profit = DealerSalesOrder::whereIn('id',$datas)->where('supplierId',$supplierId)->where('brandId',$brandId)->sum('totalProfit');
                        $tpr += $profit;
                        
                        $msg2[] = array(
                            "customerId" => $info->customerId,
                            "customerName" => $customerInfo->customerName,
                            "supplierId" => $data->supplierId,
                            "supplierName" => $supplierInfo->productSupplierName,
                            "mobileNo" => $supplierInfo->productSupplierPhone,
                            "brandId" => $brandId,
                            "brandName" => $brandName,
                            "sales" => $salesPrice,
                            "purchase" => $purchasePrice,
                            "profit" => $profit,
                            "searchId" => $searchId,
                            );
                    }
                
            }

            
            return [
                'data' =>$msg2,
                'totalSale'=>$ts,
                'totalPurchase'=>$tp,
                'totalProfit' => $tpr
            ];
            // return datatables($msg2)->toJson();
    }
    
    public function supplierSalesReport($sid,$bid,$date)
    {

        $searchId = DealerSalesSupplierSearchInfo::insertGetId([
            'supplierId' => $sid,
            'brandId' => $bid,
            'dateTime' => $date,
            'createBy' => Auth::user()->id,
            'shopId' => Auth::user()->shopId,
            'created_at'=>Carbon::now(),
        ]);

        $datas = DealerSalesOrder::query();
        $datas = $datas->distinct();
        $datas = $datas->where('shopId',Auth::user()->shopId);
        $datas = $datas->where('status',3);

            if($sid){
                $datas = $datas->where('supplierId',$sid);
            }
            if($bid){
                $datas = $datas->where('brandId',$bid);
            }

            if($date){
                $datas = $datas->where('OrderRequestDate','LIKE',$date.'%');
            }

            // $datas = $datas->orderBy('id','DESC');
            
            $datas = $datas->get('id');

            $suppliers = DealerSalesOrder::distinct()->whereIn('id',$datas)->get('supplierId');
            
            $msg2 = array();
            $ts = 0;
            $tp = 0;
            $tpr = 0;
            
            foreach($suppliers as $data){
                $supplierId = $data->supplierId;
                $supplierInfo = AddProductSupplierEntry::where('productSupplierId',$supplierId)->first();

                $selectBrand = DealerSalesOrder::distinct()->whereIn('id',$datas)->get('brandId');
                    
                    foreach($selectBrand as $brand){

                        $brandId= $brand->brandId;
                        $brandName = ProductBrandEntry::where('productBrandEntryId',$brandId)->first()->productBrandName;
                        $salesPrice = DealerSalesOrder::whereIn('id',$datas)->where('supplierId',$supplierId)->where('brandId',$brandId)->sum('totalPrice');
                        $ts += $salesPrice;
                        $purchasePrice = DealerSalesOrder::whereIn('id',$datas)->where('supplierId',$supplierId)->where('brandId',$brandId)->sum('purchaseTotalPrice');
                        $tp += $purchasePrice;
                        $profit = DealerSalesOrder::whereIn('id',$datas)->where('supplierId',$supplierId)->where('brandId',$brandId)->sum('totalProfit');
                        $tpr += $profit;
                        
                        $msg2[] = array(
                            "supplierId" => $data->supplierId,
                            "supplierName" => $supplierInfo->productSupplierName,
                            "mobileNo" => $supplierInfo->productSupplierPhone,
                            "brandId" => $brandId,
                            "brandName" => $brandName,
                            "sales" => $salesPrice,
                            "purchase" => $purchasePrice,
                            "profit" => $profit,
                            "searchId" => $searchId,
                            );
                    }
                
            }

            
            return [
                'data' =>$msg2,
                'totalSale'=>$ts,
                'totalPurchase'=>$tp,
                'totalProfit' => $tpr
            ];
            // return datatables($msg2)->toJson();
    }

    
    public function saleOrderListById($id)
    {

            $data = DealerSalesOrderSubmit::with('supplier','customer')->where('shopId',Auth::user()->shopId)->where('id',$id)->first();
            return ['data' => $data];
    }
    
    public function saleOrderList()
    {

            $data = DealerSalesOrderSubmit::with('supplier','customer')->where('shopId',Auth::user()->shopId)->get();
            $total = DealerSalesOrderSubmit::with('supplier','customer')->where('shopId',Auth::user()->shopId)->sum('totalPriceRequest');
            return [
                'data' => $data,
                'total' => $total,
            ];
    }
    
    public function saleOrderRequestList()
    {

            $data = DealerSalesOrderSubmit::with('supplier','customer')->where('shopId',Auth::user()->shopId)->where('status',1)->get();
            $total = DealerSalesOrderSubmit::with('supplier','customer')->where('shopId',Auth::user()->shopId)->where('status',1)->sum('totalPriceRequest');
            return [
                'data' => $data,
                'total' => $total,
            ];
    }

    public function saleOrderSubmit(Request $request)
    {

        $request->validate([
            'productSupplierId' => 'required',
            'customerListId' => 'required',
            'OrderRequestDate' => 'required',
       ],
       [
            'productSupplierId.required' => 'Select Supplier',
            'customerListId.required' => 'Select Customer',
            'OrderRequestDate.required' => 'Select Date',
       ]);

            $id = DealerSalesOrderSubmit::insertGetId([
            'rendomNumber' => $request->rendomNumber,
            'supplierId' => $request->productSupplierId,
            'brandId' => $request->brandId,
            'customerId' => $request->customerId,
            'srId'  => $request->srId,
            'dsrId'  => $request->dsrId,
            'OrderRequestDate'  => $request->OrderRequestDate,
            'totalPriceRequest'  => $request->totalAmount,
            'createBy' => Auth::user()->id,
            'shopId' => Auth::user()->shopId,
            'shopTypeId' => Auth::user()->shopTypeId,
            'created_at'=>Carbon::now(),
            ]);

            DealerSalesOrder::where('rendomNumber',$request->rendomNumber)->where('shopId',Auth::user()->shopId)->update([
                'orderRequestId' => $id,
                'status' => 1,
                'customerId' => $request->customerId,
            ]);
       

    }

    public function saleOrderReceiveSubmit(Request $request)
    {   

            
            

            $insert = DealerSalesOrderReceiveSubmit::insertGetId([
            'salesRequestId' => $request->id,
            'rendomNumber' => $request->rendomNumber,
            'supplierId' => $request->productSupplierId,
            'customerId' => $request->customerId,
            'srId'  => $request->srId,
            'dsrId'  => $request->dsrId,
            'OrderReceiveDate'  => $request->OrderRequestDate,
            'totalSalesAmount'  => $request->totalSalesAmount,
            'todayDue'  => $request->todayDue,
            'pevDueCollection'  => $request->pevDueCollection,
            'totalCollection'  => $request->totalCollection,
            'netCollection'  => $request->netCollection,

            'salesDate' => $request->OrderRequestDate,
            'salesCustomerTypeId' => $request->customerTypeId,
            'salesCustomerId' => $request->customerId,
            'totalQuantity' => 0,
            'totalBalance' => $request->totalSalesAmount,
            'discountPrice' => $request->discountPrice,
            'totalVat' => $request->totalVat,
            'vatCalculate' => $request->vatCalculate,
            'totalPayable' => $request->totalPayable,
            'previousDue' => $request->previousDue,
            'currentDue' => $request->currentDue,
            'paymentType' => $request->paymentType,
            'currentTotalAmount' => $request->currentTotalAmount,
            'currentPaidAmount' => $request->currentPaidAmount,
            'mobileAmount' => $request->mobileAmount,
            'paymentStatus' => 1,

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

            'createBy' => Auth::user()->id,
            'shopId' => Auth::user()->shopId,
            'shopTypeId' => Auth::user()->shopTypeId,
            'created_at'=>Carbon::now(),
            ]);

            DealerSalesOrder::where('rendomNumber',$request->rendomNumber)->where('shopId',Auth::user()->shopId)->update([
                'status' => 3,
            ]);

            DealerSalesOrderSubmit::where('id',$request->id)->update([
                'status' => 2,
                'updateBy' => Auth::user()->id,
                'updated_at'=>Carbon::now(),
            ]);
       

    }

    public function saleOrderFinalList(Request $request)
    {
        $data = DealerSalesOrderReceiveSubmit::with('supplier','customer')->where('status',1)->where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data];
    }

    public function salesInvoiceUpdate(Request $request)
    {
        if($request->salesCustomerId==''){
            $salesCustomerId = 0;
        }
        else{
            $implodeSalesCustomerId = implode(',', array_column($request->salesCustomerId,$request->id));
            $salesCustomerId = explode(',',$implodeSalesCustomerId)[0];
        }
      $salesInvoice=  SalesInvoice::where('salesInvoiceNo',$request->salesInvoiceNo)->where('shopId',Auth::user()->shopId)->first();
            SalesInvoice::where('salesInvoiceNo',$request->salesInvoiceNo)->where('shopId',Auth::user()->shopId)->update([
                'salesDate' => $request->salesDate,  
                'salesInvoiceNo' => $request->salesInvoiceNo,  
                'salesCustomerTypeId' => $request->salesCustomerTypeId,  
                'salesCustomerId' =>  $salesCustomerId,  
                'totalQuantity' => $request->totalQuantity,  
                'totalBalance' => $request->totalBalance,  
                'discountPrice' => $request->discountPrice,  
                'discountPrice' => $request->discountPrice,  
                'totalVat' => $request->totalVat,  
                'vatCalculate' => $request->vatCalculate,  
                'totalPayable' => $request->totalPayable,  
                'previousDue' => $request->previousDue,  
                'currentDue' => $request->currentDue,  
                'paymentType' => $request->paymentType,  
                'currentTotalAmount' => $request->currentTotalAmount,  
                'currentPaidAmount' => $request->currentPaidAmount,  
                'mobileAmount' => $request->mobileAmount,  
                'paymentStatus' => 1,  
            ]);
        
      

          SalesPayment::where('salesInvoiceId',$salesInvoice->salesInvoiceId)->where('shopId',Auth::user()->shopId)->update([
              
              'shopId'=> Auth::User()->shopId,
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
              'created_at'=>Carbon::now(),
          ]);
          
        //   SalesProductEntry::where('salesInvoiceNo',$request->salesInvoiceNo)
        //   ->where('shopId',Auth::user()->shopId)->update([
        //       'status'=>1,
        //   ]);
        


        

        //  --------------------------------------------------------------------
        //  ------------------ voucher & statement information -----------------
        //  --------------------------------------------------------------------


        
        $companyId = $salesCustomerId;
        $referance = 'customer-'.$companyId;
        $title = 'Customer Invoice Return';
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

        $balanceAmount = $balanceAmountDb-$request->totalPayable;

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
 
          

        $voucherUniqueId = time().'3';
        $day = date('d');
        $month = date('m');
        $year = date('Y');
        $voucherDate = date('Y-m-d');
        
         
        
        $particular = $title.'.';
            $voucherAmount = ($request->totalPayable);
          
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
            

// ==========================================================
// ============// #1 Journal Voucher Information ============
// ==========================================================



 


// ==========================================================
// =========== #2  Journal Voucher Information ==============
// ==========================================================


        $voucherUniqueId = time().'4';
        $day = date('d');
        $month = date('m');
        $year = date('Y');
        $voucherDate = date('Y-m-d');
        
         
        
        $particular = $title.'.';
        $voucherAmount = ($request->totalPayable);
          
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
// ============// #2 Journal Voucher Information ============
// ==========================================================








         
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
            $balanceAmount = $balanceAmountDb+$request->currentPaidAmount;
            $dr_cr_amount = $request->currentPaidAmount;
            $expenseTitle = 'Cash Return';
            $title = 'Customer Cash Return';
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

                $voucherUniqueId = time().'5';
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
                          'receiverBankAccountName' => '',
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
                        $last_rp_total = $last_amount-$request->currentTotalAmount;
                        
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

                $voucherUniqueId = time().'6';
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
                    
                    // if($request->paymentType == 1)
                    // {
                    //     $voucherType = 1;
                    //     $headCode2 = AccountSetup::where('placementType','9')->where('headName','100')->first()->headCode;
                    // }
                    // else if($request->paymentType == 2)
                    // {
                        $voucherType = 3;
                        $headCode2 = ShopAddBankEntry::where('bankId',$request->receiverbankAccountId)->first()->accountCode;
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
                        $last_rp_total = $last_amount-$voucherAmount;
                        
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
    
    public function store(Request $request)
    {

          $currentDate = Carbon::now()->format('d-m-Y');

        if($request->salesCustomerId==''){
                $salesCustomerId = 0;
            }
        else{
                $implodeSalesCustomerId = implode(',', array_column($request->salesCustomerId,$request->id));
                $salesCustomerId = explode(',',$implodeSalesCustomerId)[0];
            }
          $shopTypeId = Auth::user()->shopTypeId;

       
         
         if(1){
            $status=1;
            $salesInvoice = new SalesInvoice();
        
          $salesInvoice->salesDate = $request->salesDate;
          $salesInvoice->salesInvoiceNo = $request->salesInvoiceNo;
          $salesInvoice->salesCustomerTypeId = $request->salesCustomerTypeId;
          $salesInvoice->salesCustomerId = $salesCustomerId;
          $salesInvoice->totalQuantity = $request->totalQuantity;
          $salesInvoice->totalBalance = $request->totalBalance;
          $salesInvoice->totalPurchase = $request->totalPurchase;
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
            $voucherAmount = ($request->totalPayable);
          
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
        $voucherAmount = ($request->totalPurchase);
          
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

    }






    public function salesInvoicePendingEntry(Request $request){

          $currentDate = Carbon::now()->format('d-m-Y');

        if($request->salesCustomerId==''){
                $salesCustomerId = 0;
            }
        else{
                $implodeSalesCustomerId = implode(',', array_column($request->salesCustomerId,$request->id));
                $salesCustomerId = explode(',',$implodeSalesCustomerId)[0];
            }
          $shopTypeId = Auth::user()->shopTypeId;

       
         
             $status=0;
             $salesInvoice = new SalesInvoiceTemp();
        
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
          $salesInvoice->guestCustomerName = $request->guestCustomerName;
          $salesInvoice->guestCustomerPhone = $request->guestCustomerPhone;
          $salesInvoice->paymentStatus = $status;
          $salesInvoice->shopId = Auth::User()->shopId;
          $salesInvoice->shopTypeId = $shopTypeId;
          $salesInvoice->shopUserId = Auth::User()->id;
          $salesInvoice->createBy = Auth::User()->id;
          $salesInvoice->save();
          SalesProductEntry::where('salesInvoiceNo',$request->salesInvoiceNo)->where('shopId',Auth::user()->shopId)->update([
            'status'=>1,
        ]);
             
         
        InvoiceNoGenerate::where('shopId',Auth::user()->shopId)->where('invoiceNo',$request->salesInvoiceNo)->update([
            'status' => 1,
            'updateBy' => Auth::user()->id,
            'updated_at' => Carbon::now(),
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
     
        $get=SalesProductEntry::select('salesCustomerId')->where('salesInvoiceNo',$id)->where('shopId',Auth::User()->shopId)->first();
        if(!empty($get)){
        $data=SalesCustomerEntry::select('salesCustomerEntryId','customerName','customerTypeId')->where('salesCustomerEntryId',$get->salesCustomerId)->where('shopId',Auth::User()->shopId)->first();
        return['data'=>$data];
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($salesInvoiceId)
    {
        $singleSalesInvoiceList = SalesInvoice::where('salesInvoiceId',$salesInvoiceId)->first();
        $singleSalesProductList = SalesProductEntry::with('productName','brandName','unitName')->where('salesInvoiceNo',$singleSalesInvoiceList->salesInvoiceNo)->get();
        return ['singleSalesInvoiceList' => $singleSalesInvoiceList,'singleSalesProductList' => $singleSalesProductList];

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $salesInvoiceId)
    {
        $currentDate = Carbon::now()->format('d-m-Y');


        $implodeSalesCustomerTypeId = $request->salesCustomerTypeId;
        $salesCustomerTypeId = $implodeSalesCustomerTypeId;

        $implodeSalesCustomerId = implode(',', array_column($request->salesCustomerId,$request->id));
        $salesCustomerId = explode(',',$implodeSalesCustomerId)[0];

        $shopTypeId = Auth::user()->shopTypeId;


         SalesInvoice::where('salesInvoiceId',$salesInvoiceId)->update([
            'salesInvoiceNo'      =>   $request->salesInvoiceNo,
            'salesCustomerTypeId' =>   $salesCustomerTypeId,
            'salesCustomerId'     =>   $salesCustomerId,
            'totalQuantity'       =>   $request->totalQuantity,
            'totalBalance'        =>   $request->totalBalance,
            'discountPrice'       =>   $request->discountPrice,
            'totalVat'            =>   $request->totalVat,
            'vatCalculate'        =>   $request->vatCalculate,
            'totalPayable'        =>   $request->totalPayable,
            'currentTotalAmount'  =>   $request->currentTotalAmount,
            'currentPaidAmount'   =>   $request->currentPaidAmount,
            'updateBy'            =>   Auth::User()->id,
        ]);

        if ($request->salesDate == $currentDate) {
            SalesInvoice::where('salesInvoiceId',$salesInvoiceId)->update([
                'salesDate' => $request->salesDate,
            ]);
        }
        else {
           $salesDatePosition = strpos($request->salesDate, 'T');
           $salesDate = substr($request->salesDate, 0, $salesDatePosition);
           $date = explode('-',$salesDate)[2];
           $dateIncrement = $date+1;
           $month = explode('-',$salesDate)[1];
           $year = explode('-',$salesDate)[0];

           $finalDate = $dateIncrement.'-'.$month.'-'.$year;

           SalesInvoice::where('salesInvoiceId',$salesInvoiceId)->update([
               'salesDate' => $finalDate,
           ]);
        }

        if ($request->currentTotalAmount > $request->currentPaidAmount) {
            $previousPayable = $request->currentTotalAmount - $request->currentPaidAmount;

            SalesInvoice::where('salesInvoiceId',$salesInvoiceId)->update([
                'previousDue' => $previousPayable,
            ]);
        }
        else {
            SalesInvoice::where('salesInvoiceId',$salesInvoiceId)->update([
                'previousDue' => '',
            ]);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function salesInvoicePaid(Request $request,$id)
    {
        $data=SalesInvoiceTemp::where('shopId',Auth::user()->shopId)->where('salesInvoiceNo',$id)->first();
          $salesInvoice = new SalesInvoice();
        
          $salesInvoice->salesDate = $data->salesDate;
          $salesInvoice->salesInvoiceNo = $data->salesInvoiceNo;
          $salesInvoice->salesCustomerTypeId = $data->salesCustomerTypeId;
          $salesInvoice->salesCustomerId = $data->salesCustomerId;
          $salesInvoice->totalQuantity = $data->totalQuantity;
          $salesInvoice->totalBalance = $data->totalBalance;
          $salesInvoice->discountPrice = $data->discountPrice;
          $salesInvoice->totalVat = $data->totalVat;
          $salesInvoice->vatCalculate = $data->vatCalculate;
          $salesInvoice->totalPayable = $data->totalPayable;
          $salesInvoice->previousDue = $data->previousDue;
          $salesInvoice->currentDue = $data->currentDue;         
          $salesInvoice->paymentTYpe = $data->paymentType;         
          $salesInvoice->currentTotalAmount = $data->currentTotalAmount;
          $salesInvoice->currentPaidAmount = $data->currentPaidAmount;
          $salesInvoice->mobileAmount = $data->mobileAmount;
          $salesInvoice->paymentStatus = 1;
          $salesInvoice->shopId = Auth::User()->shopId;
          $salesInvoice->shopTypeId = $data->shopTypeId;
          $salesInvoice->shopUserId = Auth::User()->id;
          $salesInvoice->createBy = Auth::User()->id;
          $salesInvoice->save();
          $insertedId = $salesInvoice->id;

          
          SalesPayment::insert([
            'salesInvoiceId'=>  $insertedId,
            'shopId'=> Auth::User()->shopId,
            'currentDue' => $request->currentDue, 
            'salesCustomerTypeId'=>  $data->salesCustomerTypeId,
            'salesCustomerId'=>  $data->salesCustomerId,
            'cashAmount'=>  $request->currentPaidAmount,
            'bankAmount'=>  $request->mobileAmount,
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
            'createBy'=>Auth::user()->id,
            'created_at'=>Carbon::now(),
        ]);
        SalesInvoiceTemp::where('shopId',Auth::user()->shopId)->where('salesInvoiceNo',$id)->delete();
    
    
    

        //  --------------------------------------------------------------------
        //  -----------------  voucher & statement information -----------------
        //  --------------------------------------------------------------------


        
        $salesCustomerId = $data->salesCustomerId;
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

        $balanceAmount = $balanceAmountDb+$data->totalPayable;

        StatementInformation::insert([
            'shopId' => Auth::user()->shopId,
            'rendomNumber' => $rendomNumber,
            'type' => 0,
            'accountHeadCode' => $companyAccountHeadCode,
            'accountCode' => $companyAccountCode,
            'title' => $title,
            'referance' => $referance,
            'paymentType' => 0, // Due
            'dueAmount' => $data->totalPayable,
            'debitAmount' => $data->totalPayable,
            'balanceAmount' => $balanceAmount,
            'note' => $title,
            'createBy' => Auth::user()->id,
            'shopId' => Auth::user()->shopId,
            'created_at' => Carbon::now(),
        ]);




        

        // ==========================================================
        // =========== #1  Journal Voucher Information ==============
        // ==========================================================
 
          

        $voucherUniqueId = time().'11';
        $day = date('d');
        $month = date('m');
        $year = date('Y');
        $voucherDate = date('Y-m-d');
        
         
        
        $particular = $title.'.';
            $voucherAmount = $data->totalPayable;
          
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

              if($data->discountPrice){
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
                  'voucherAmount' => $data->discountPrice,
                  
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
                  'voucherAmount' => $voucherAmount+$data->discountPrice,
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


        $voucherUniqueId = time().'12';
        $day = date('d');
        $month = date('m');
        $year = date('Y');
        $voucherDate = date('Y-m-d');
        
         
        
        $particular = $title.'.';
        $voucherAmount = $data->totalPayable;
          
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

                $voucherUniqueId = time().'13';
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
                            'accountCode' => $headCode2,
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

                $voucherUniqueId = time().'14';
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
                    
                    // if($request->paymentType == 1)
                    // {
                    //     $voucherType = 1;
                    //     $headCode2 = AccountSetup::where('placementType','9')->where('headName','100')->first()->headCode;
                    // }
                    // else if($request->paymentType == 2)
                    // {
                        $voucherType = 4;
                        $headCode2 = ShopAddBankEntry::where('bankId',$request->receiverbankAccountId)->first()->accountCode;
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
    public function salesInvoice($id)
    {
        $data=SalesInvoiceTemp::where('shopId',Auth::user()->shopId)->where('salesInvoiceNo',$id)->first();
        return ['data'=>$data];
    }
    public function salesInvoiceDelete($id)
    {
        $gt=SalesProductEntry::where('salesInvoiceNo',$id)->where('shopId',Auth::user()->shopId)->get();
        foreach($gt as $get){
         $tt= StockSummery::where('productId',$get->productId)->where('brandId',$get->brandId)->where('shopId',Auth::user()->shopId)->where('purchaseInvoiceNo',$get->purchaseInvoiceNo)->get();
         foreach($tt as $t){ 
         $total=$t->quantity+$get->quantity;
         StockSummery::where('productId',$get->productId)->where('brandId',$get->brandId)->where('shopId',Auth::user()->shopId)->where('purchaseInvoiceNo',$get->purchaseInvoiceNo)->update([
             'quantity'=> $total
         ]);
     
         }
        }
        SalesInvoiceTemp::where('shopId',Auth::user()->shopId)->where('salesInvoiceNo',$id)->delete(); 
        SalesProductEntry::where('shopId',Auth::user()->shopId)->where('salesInvoiceNo',$id)->delete(); 
        

    }
    public function destroy($id)
    {
        //
    }
}
