<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ShopAddAssetSupplierEntry;
use App\Http\Controllers\Accounting\chartOfAccountController;
use App\ShopAssetCategory;
use App\AssetBrandEntry;
use App\ShopInformation;
use App\ShopAssetEntry;
use App\AssetCodeEntry;
use App\StatementInformation;
use App\chartOfAccount;
use App\ChartOfAccountRegister;
use App\AccountSetup;
use App\voucherType;
use App\voucherInformation;
use App\voucherInformationReport;
use App\ReceivePaymentStatement;
use App\ShopAddBankEntry;
use Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ShopAssetEntryController extends Controller
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
        if (Auth::guard('admin')->check()) {
            $shopTypeId =Auth::user()->shopTypeId;
            $shopAssetEntryLists = ShopAssetEntry::with('assetCategoryName','assetBrandName','assetCodeName','supplierName')->where('shopId',Auth::User()->shopId)->orderBy('shopAssetEntryId','desc')->paginate(30);
            $shopAssetPrices = ShopAssetEntry::where('shopId',Auth::User()->shopId)->get();
            return ['shopAssetEntryLists'=> $shopAssetEntryLists, 'shopAssetPrices' => $shopAssetPrices];
        }
        else {
           
            $shopAssetEntryLists = ShopAssetEntry::with('assetCategoryName','assetBrandName','assetCodeName','supplierName')->where('createBy',Auth::User()->id)->where('shopTypeId',0)->where('shopId',0)->orderBy('shopAssetEntryId','desc')->paginate(30);
            $shopAssetPrices = ShopAssetEntry::where('createBy',Auth::User()->id)->where('shopTypeId',0)->where('shopId',0)->get();
            return ['shopAssetEntryLists'=> $shopAssetEntryLists];
        }
    }
    public function viewProduct($id)
    {
        if (Auth::guard('admin')->check()) {
            $shopTypeId =Auth::User()->shopTypeId;

            $assetCodeEntryLists = AssetCodeEntry::select('assetCodeEntryId','assetPorductName','assetPorductCode')
            ->where('assetCategoryId',$id)
            ->orderBy('assetCodeEntryId','desc')->get();

            return [ 'assetCodeEntryLists' => $assetCodeEntryLists];


        }
        else {
             
           
            $assetCodeEntryLists = AssetCodeEntry::select('assetCodeEntryId','assetPorductName','assetPorductCode')
            ->where('assetCategoryId',$id)
            ->orderBy('assetCodeEntryId','desc')->get();

            return [ 'assetCodeEntryLists' => $assetCodeEntryLists];

        }
    }
    public function viewAllProductById($id)
    {
            $info = AssetCodeEntry::where('assetCodeEntryId',$id)
            ->orderBy('assetCodeEntryId','desc')->first();

            return [ 
                'assetCategoryId' => $info->assetCategoryId,
                'assetCategoryLevel' => $info->assetCategoryLevel
            ];
 
    }
    public function viewAllProduct()
    {
            $assetCodeEntryLists = AssetCodeEntry::select('assetCodeEntryId','assetPorductName','assetPorductCode')
            ->orderBy('assetCodeEntryId','desc')->get();

            return [ 'assetCodeEntryLists' => $assetCodeEntryLists];
 
    }

    public function shopAssetSupplierLastBalance($id){
        $accountCode = ShopAddAssetSupplierEntry::where('shopId',Auth::user()->shopId)->where('assetSupplierId',$id)->first()->accountCode;

        if(StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$accountCode)->orderBy('id','DESC')->exists())
        {
            $lastBalance = StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$accountCode)->orderBy('id','DESC')->first()->balanceAmount;    
        }
        else
        {
            $lastBalance = 0;
        }
        
        return ['lastBalance' => abs($lastBalance)];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::guard('admin')->check()) {
            $shopTypeId =Auth::User()->shopTypeId;

            $assetBrandLists = AssetBrandEntry::select('assetBrandEntryId','assetBrandName')->where('assetBrandStatus',1)->orderBy('assetBrandEntryId','desc')->get();
            $assetSupplierLists = ShopAddAssetSupplierEntry::select('assetSupplierId','assetSupplierName','assetSupplierCode')->where('shopId',Auth::User()->shopId)->orderBy('assetSupplierId','desc')->get();
            $assetCodeEntryLists = AssetCodeEntry::select('assetCodeEntryId','assetPorductName','assetPorductCode')->where('shopId',Auth::User()->shopId)->orderBy('assetCodeEntryId','desc')->get();

            return ['assetBrandLists' => $assetBrandLists, 'assetCodeEntryLists' => $assetCodeEntryLists, 'assetSupplierLists'=> $assetSupplierLists];

        }
        else {
             
            $assetBrandLists = AssetBrandEntry::select('assetBrandEntryId','assetBrandName')->where('assetBrandStatus',1)->orderBy('assetBrandEntryId','desc')->get();
            $assetSupplierLists = ShopAddAssetSupplierEntry::select('assetSupplierId','assetSupplierName','assetSupplierCode')->where('shopTypeId',0)->where('shopId',Auth::User()->shopId)->orderBy('assetSupplierId','desc')->get();
            $assetCodeEntryLists = AssetCodeEntry::select('assetCodeEntryId','assetPorductName','assetPorductCode')->where('createBy',Auth::user()->id)->where('shopId',0)->where('shopTypeId',0)->orderBy('assetCodeEntryId','desc')->get();

            return ['assetBrandLists' => $assetBrandLists, 'assetCodeEntryLists' => $assetCodeEntryLists, 'assetSupplierLists'=> $assetSupplierLists];
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
              'assetCategoryId' => 'required',
              'assetProductId' => 'required',
              'assetSupplierId' => 'required',
              'assetBrandId' => 'required',
              'productQuantity' => 'required',
              'productCost' => 'required',
              'currentPayable' => 'required',
              'purchasedate' => 'required',
              'paymentType' => 'required',
          ]);

          $shopTypeId = Auth::User()->shopTypeId;
          $shopId = Auth::User()->shopId;

          $ShopAssetEntry = new ShopAssetEntry();

          
                 $ShopAssetEntry->assetCategoryId = $request->assetCategoryId;
                 $assetCategoryLevel = $request->assetCategoryLevel;
       


         
         $ShopAssetEntry->assetProductId = $request->assetProductId;
         $ShopAssetEntry->assetCategoryLevel = $assetCategoryLevel;
         $ShopAssetEntry->assetSupplierId = $request->assetSupplierId;
         $ShopAssetEntry->assetBrandId = $request->assetBrandId;
         $ShopAssetEntry->purchasedate = $request->purchasedate;
         $ShopAssetEntry->mfgDate = $request->mfgDate;
         $ShopAssetEntry->expiryDate = $request->expiryDate;
         $ShopAssetEntry->invoiceNo = $request->invoiceNo;
         $ShopAssetEntry->modelNo = $request->modelNo;
         $ShopAssetEntry->productQuantity = $request->productQuantity;
         $ShopAssetEntry->productCost = $request->productCost;
         
         
         
         if (ShopAssetEntry::
            where('assetSupplierId',$request->assetSupplierId)
         ->where('shopId',Auth::user()->shopId)
         ->where('shopTypeId',$shopTypeId)->exists()) {
             $previousPayableDue = ShopAssetEntry::where('assetSupplierId',$request->assetSupplierId)->latest()->first();
               if ($request->currentPayable > $request->totalProductCost) {

                    $previousPayable = ($request->totalProductCost)- $request->currentPayable;

                    if ($previousPayableDue->previousPayableDue ==  $previousPayable) {
                         $ShopAssetEntry->previousPayableDue = '';
                    }

                    elseif ($previousPayableDue->previousPayableDue <  $previousPayable ) {
                     //   return ['owed' => 'You wrote more money than you owed category'];
                    }
                    else {
                        $finalDue = ($previousPayableDue->previousPayableDue) -  ($previousPayable);
                        $ShopAssetEntry->previousPayableDue = $finalDue;
                    }
                }
                elseif ($request->totalProductCost == $request->currentPayable) {

                }
               else {
                   $previousPayable =  ($request->totalProductCost) - ($request->currentPayable);
                   $ShopAssetEntry->previousPayableDue = ($previousPayable) + ($previousPayableDue->previousPayableDue);
               }
         }
         else {
             if ($request->currentPayable < $request->totalProductCost) {
                 $previousPayable =  ($request->totalProductCost) - ($request->currentPayable);
                 $ShopAssetEntry->previousPayableDue = $previousPayable;
             }
         }
         $ShopAssetEntry->totalProductCost = $request->totalProductCost;
         $ShopAssetEntry->currentPayable = $request->currentPayable;
         $ShopAssetEntry->depreciation = $request->totalDepreciation;
         $ShopAssetEntry->depreciationDay = $request->depreciationDay;
         $ShopAssetEntry->depreciationMonth = $request->depreciationMonth;
         $ShopAssetEntry->depreciationYear = $request->depreciationYear;
         $ShopAssetEntry->warranty = $request->warranty;
         $ShopAssetEntry->selectMothOrYearWarranty = $request->selectMothOrYearWarranty;
         $ShopAssetEntry->guarantee = $request->guarantee;
         $ShopAssetEntry->selectMothOrYearGuarantee = $request->selectMothOrYearGuarantee;
         $ShopAssetEntry->color = $request->color;
         $ShopAssetEntry->size = strip_tags($request->size);
         $ShopAssetEntry->description = strip_tags($request->description);
         if (Auth::guard('admin')->check()) {
            $ShopAssetEntry->shopId = Auth::User()->shopId;
            $ShopAssetEntry->shopTypeId = $shopTypeId;
            }
            else{
               $ShopAssetEntry->shopId = 0;
               $ShopAssetEntry->shopTypeId = 0;   
            }
            
         $ShopAssetEntry->createBy = Auth::User()->id;


         if(ShopAssetEntry::
            where('assetProductId',$request->assetProductId)
            ->where('assetBrandId',$request->assetBrandId)
            ->where('productCost',$request->productCost)
            ->where('assetSupplierId',$request->assetSupplierId)
         ->where('shopId',Auth::user()->shopId)
         ->where('shopTypeId',$shopTypeId)->exists()){


            $pre_quantity1 = ShopAssetEntry::
            where('assetProductId',$request->assetProductId)
            ->where('assetBrandId',$request->assetBrandId)
            ->where('productCost',$request->productCost)
            ->where('assetSupplierId',$request->assetSupplierId)
         ->where('shopId',Auth::user()->shopId)
         ->where('shopTypeId',$shopTypeId)->first()->productQuantity;
         $pre_quantity = $pre_quantity1+$request->productQuantity;


            ShopAssetEntry::
            where('assetProductId',$request->assetProductId)
            ->where('assetBrandId',$request->assetBrandId)
            ->where('productCost',$request->productCost)
            ->where('assetSupplierId',$request->assetSupplierId)
         ->where('shopId',Auth::user()->shopId)
         ->where('shopTypeId',$shopTypeId)->update([
             'productQuantity' => $pre_quantity,
             'updateBy' => Auth::user()->id,
             'updated_at' => Carbon::now(),
         ]);


         }
         else{
            $ShopAssetEntry->save();
         }
         
         



        //  --------------------------------------------------------------------
        //  ------------------ voucher & statement information -----------------
        //  --------------------------------------------------------------------


        
        $companyId = $request->assetSupplierId;
        $referance = 'A-Supp-'.$companyId;
        $title = 'Asset Supplier Invoice';
        $companyAccountCode = ShopAddAssetSupplierEntry::where('shopId',Auth::user()->shopId)->where('assetSupplierId',$request->assetSupplierId)->first()->accountCode;
        $companyAccountHeadCode = ChartOfAccountRegister::where('shopId',Auth::user()->shopId)->where('headCode',$companyAccountCode)->first()->pre_code;
        
        $rendomNumber = substr($request->rendomNumber,0,12);
        
        
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
            'cashAmount' => 0,
            'personName' => $request->personName,
            'personMobileNo' => $request->personMobileNo,
            'bankAmount' => 0,
            'bankTypeEntryId' => $request->bankTypeEntryId,
            'bankEntryId' => $request->bankEntryId,
            'bankAccountId' => $request->bankAccountId,
            'dueAmount' => $request->dueAmount,
            'creditAmount' => $request->totalProductCost,
            'balanceAmount' => $balanceAmount,
            'note' => $request->note,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);
        

        
        // ==========================================================
        if($request->paymentType==1 || $request->paymentType==2){

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


        if($request->paymentType==1){
            $balanceAmount = $balanceAmountDb+$request->cashAmount;
            $dr_cr_amount = $request->cashAmount;
            $expenseTitle = 'Cash Payment';
            $title = 'Asset Supplier Cash Payment';
        }else if($request->paymentType==2){
            $balanceAmount = $balanceAmountDb+$request->bankAmount;
            $expenseTitle = 'Bank Payment';
            $title = 'Asset Supplier Bank Payment';
            $dr_cr_amount = $request->bankAmount;
        }
        
        StatementInformation::insert([
            'shopId' => Auth::user()->shopId,
            'rendomNumber' => $rendomNumber,
            'type' => 1,
            'accountHeadCode' => $companyAccountHeadCode,
            'accountCode' => $companyAccountCode,
            'title' => $title,
            'referance' => $referance,
            'paymentType' => $request->paymentType,
            'cashAmount' => $request->cashAmount,
            'personName' => $request->personName,
            'personMobileNo' => $request->personMobileNo,
            'bankAmount' => $request->bankAmount,
            'bankTypeEntryId' => $request->bankTypeEntryId,
            'bankEntryId' => $request->bankEntryId,
            'bankAccountId' => $request->bankAccountId,
            'dueAmount' => $request->dueAmount,
            'debitAmount' => $dr_cr_amount,
            'balanceAmount' => $balanceAmount,
            'note' => $request->note,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);
        }
        // ===============================================

 







        // ==========================================================
        // ==================== #1 Voucher Information ==============
        // ==========================================================

       
            $voucherUniqueId = time();
            $day = date('d');
            $month = date('m');
            $year = date('Y');
            $voucherDate = date('Y-m-d');
            
             
            
            $particular = $title.'.';
            
                $voucherAmount = $request->totalProductCost;
            
            
              
                    $headCode2 = ShopAddAssetSupplierEntry::where('shopId',Auth::user()->shopId)->where('assetSupplierId',$request->assetSupplierId)->first()->accountCode;
                    $headOfAccounts2 = ChartOfAccountRegister::where('shopId',Auth::user()->shopId)->where('headCode',$headCode2)->first()->pre_code;
                
                
                    $voucherType = 6;
                    $headCode1 = AccountSetup::where('placementType','27')->where('headName','113')->first()->headCode;
                    $headOfAccounts1 = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
                
    
    
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
    
                
    
    
    
                // ==========================================================
                // ==================== // #1 Voucher Information ===========
                // ==========================================================





        // ==========================================================
        // ==================== #2 Voucher Information ==============
        // ==========================================================

            if($request->paymentType>0 && $request->paymentType<3){

                $voucherUniqueId = time().'1';
                $day = date('d');
                $month = date('m');
                $year = date('Y');
                $voucherDate = date('Y-m-d');
                
                 
                
                $particular = $title.'.';
                if($request->paymentType==1){
                    $voucherAmount = $request->cashAmount;
                }else if($request->paymentType==2){
                    $voucherAmount = $request->bankAmount;
                }
                
                  
                        $headCode1 = ShopAddAssetSupplierEntry::where('shopId',Auth::user()->shopId)->where('assetSupplierId',$request->assetSupplierId)->first()->accountCode;
                        $headOfAccounts = ChartOfAccountRegister::where('shopId',Auth::user()->shopId)->where('headCode',$headCode1)->first()->pre_code;
                    
                    if($request->paymentType == 1)
                    {
                        $voucherType = 1;
                        $headCode2 = AccountSetup::where('placementType','9')->where('headName','100')->first()->headCode;
                    }
                    else if($request->paymentType == 2)
                    {
                        $voucherType = 3;
                   
                        $headCode2 = ShopAddBankEntry::where('bankId',$request->bankAccountId)->first()->accountCode;
                    }
        
        
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
                        $last_rp_total = $last_amount+$request->totalProductCost;
                        
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
                    // ==================== // #2 Voucher Information ===========
                    // ==========================================================
        

        //  --------------------------------------------------------------------
        //  ----------------- /voucher & statement information -----------------
        //  --------------------------------------------------------------------


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($assetSupplierId)
    {
            
        $previousPayableDue = ShopAssetEntry::where('assetSupplierId',$assetSupplierId)->latest()->first();

            if (isset($previousPayableDue->previousPayableDue)) {
                return ['previousPayableDue' => $previousPayableDue->previousPayableDue];
            }

            // if(!isset($previousPayableDue->previousPayableDue)) {
            //    return ['paidPayableBill' => $paidPayableBill];
            // }

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function allCategoryShow()
    {

            $shopTypeId = Auth::User()->shopTypeId;

            $assetCategoryLists      =   ShopAssetCategory::where('label',1)->where('shopTypeId',$shopTypeId)->get();
            $assetSubCategoryLists   =   ShopAssetCategory::where('label',2)->where('shopTypeId',$shopTypeId)->get();
            $assetThirdCategoryLists =   ShopAssetCategory::where('label',3)->where('shopTypeId',$shopTypeId)->get();
            $assetFourCategoryLists  =   ShopAssetCategory::where('label',4)->where('shopTypeId',$shopTypeId)->get();
            $assetFiveCategoryLists  =   ShopAssetCategory::where('label',5)->where('shopTypeId',$shopTypeId)->get();
            $assetSixCategoryLists   =   ShopAssetCategory::where('label',6)->where('shopTypeId',$shopTypeId)->get();
            $assetSevenCategoryLists =   ShopAssetCategory::where('label',7)->where('shopTypeId',$shopTypeId)->get();

            return [
              'assetCategoryLists' => $assetCategoryLists, 'assetSubCategoryLists' => $assetSubCategoryLists,
              'assetThirdCategoryLists' => $assetThirdCategoryLists, 'assetFourCategoryLists' => $assetFourCategoryLists,
              'assetFiveCategoryLists' => $assetFiveCategoryLists, 'assetSixCategoryLists' => $assetSixCategoryLists,
              'assetSevenCategoryLists' => $assetSevenCategoryLists,
          ];
    }
    public function edit($shopAssetEntryId)
    {
        $assetSingleData =  ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->first();
        $categoryInfo = ShopAssetCategory::where('assetCategoryId',$assetSingleData->assetCategoryId)->first();

        if ($categoryInfo->label == 7 ) {

            $sixCategoryName = ShopAssetCategory::where('assetCategoryId',$categoryInfo->previousId)->first();
            $fiveCategoryName = ShopAssetCategory::where('assetCategoryId',$sixCategoryName->previousId)->first();
            $fourCategoryName = ShopAssetCategory::where('assetCategoryId',$fiveCategoryName->previousId)->first();
            $thirdCategoryName = ShopAssetCategory::where('assetCategoryId',$fourCategoryName->previousId)->first();
            $subCategoryName = ShopAssetCategory::where('assetCategoryId',$thirdCategoryName->previousId)->first();
            $categoryName = ShopAssetCategory::where('assetCategoryId',$subCategoryName->previousId)->first();

            return [
                'assetSingleData' => $assetSingleData, 'categoryInfo' => $categoryInfo,
                'thirdCategoryName'=> $thirdCategoryName,'subCategoryName' => $subCategoryName, 'categoryName' => $categoryName,
                'fourCategoryName' => $fourCategoryName,'fiveCategoryName'=> $fiveCategoryName, 'sixCategoryName' => $sixCategoryName,
            ];
        }
        if ($categoryInfo->label == 6 ) {

            $fiveCategoryName = ShopAssetCategory::where('assetCategoryId',$categoryInfo->previousId)->first();
            $fourCategoryName = ShopAssetCategory::where('assetCategoryId',$fiveCategoryName->previousId)->first();
            $thirdCategoryName = ShopAssetCategory::where('assetCategoryId',$fourCategoryName->previousId)->first();
            $subCategoryName = ShopAssetCategory::where('assetCategoryId',$thirdCategoryName->previousId)->first();
            $categoryName = ShopAssetCategory::where('assetCategoryId',$subCategoryName->previousId)->first();

            return [
                'assetSingleData' => $assetSingleData, 'categoryInfo' => $categoryInfo,
                'thirdCategoryName'=> $thirdCategoryName,'subCategoryName' => $subCategoryName, 'categoryName' => $categoryName,
                'fourCategoryName' => $fourCategoryName,'fiveCategoryName'=> $fiveCategoryName,
            ];
        }
        if ($categoryInfo->label == 5 ) {

            $fourCategoryName = ShopAssetCategory::where('assetCategoryId',$categoryInfo->previousId)->first();
            $thirdCategoryName = ShopAssetCategory::where('assetCategoryId',$fourCategoryName->previousId)->first();
            $subCategoryName = ShopAssetCategory::where('assetCategoryId',$thirdCategoryName->previousId)->first();
            $categoryName = ShopAssetCategory::where('assetCategoryId',$subCategoryName->previousId)->first();

            return [
                'assetSingleData' => $assetSingleData, 'categoryInfo' => $categoryInfo,
                'thirdCategoryName'=> $thirdCategoryName,'subCategoryName' => $subCategoryName, 'categoryName' => $categoryName,
                'fourCategoryName' => $fourCategoryName,
            ];
        }
        if ($categoryInfo->label == 4 ) {

            $thirdCategoryName = ShopAssetCategory::where('assetCategoryId',$categoryInfo->previousId)->first();
            $subCategoryName = ShopAssetCategory::where('assetCategoryId',$thirdCategoryName->previousId)->first();
            $categoryName = ShopAssetCategory::where('assetCategoryId',$subCategoryName->previousId)->first();

            return [
                'assetSingleData' => $assetSingleData, 'categoryInfo' => $categoryInfo,
                'thirdCategoryName'=> $thirdCategoryName,'subCategoryName' => $subCategoryName, 'categoryName' => $categoryName,
            ];
        }
        if ($categoryInfo->label == 3 ) {

            $subCategoryName = ShopAssetCategory::where('assetCategoryId',$categoryInfo->previousId)->first();
            $categoryName = ShopAssetCategory::where('assetCategoryId',$subCategoryName->previousId)->first();

            return [
                'assetSingleData' => $assetSingleData, 'categoryInfo' => $categoryInfo,
                'subCategoryName' => $subCategoryName, 'categoryName' => $categoryName,
            ];
        }

        if ($categoryInfo->label == 2 ) {

            $categoryName = ShopAssetCategory::where('assetCategoryId',$categoryInfo->previousId)->first();

            return [
                'assetSingleData' => $assetSingleData, 'categoryInfo' => $categoryInfo,
                'categoryName' => $categoryName,
            ];
        }
        if ($categoryInfo->label == 1 ) {

            return [
                'assetSingleData' => $assetSingleData, 'categoryInfo' => $categoryInfo,
            ];
        }
        return ['assetSingleData' => $assetSingleData];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $shopAssetEntryId)
    {
            $this->validate($request, [
                'assetCategory' => 'required',
                'assetProductId' => 'required',
                'assetSupplierId' => 'required',
                'assetBrandId' => 'required',
                'totalProductCost' => 'required',
                'currentPayable' => 'required',
                'currentPayable' => 'required',
            ]);

            $shopTypeId =Auth::User()->shopTypeId;

            if (isset($request->assetSevenCategory)) {
                    ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                         'assetCategoryId' => $request->assetCategory,
                         'assetProductId' => $request->assetProductId,
                         'assetSupplierId' => $request->assetSupplierId,
                         'assetBrandId' => $request->assetBrandId,
                         'purchasedate' => $request->purchasedate,
                         'mfgDate' => $request->mfgDate,
                         'expiryDate' => $request->expiryDate,
                         'invoiceNo' => $request->invoiceNo,
                         'modelNo' => $request->modelNo,
                         'productQuantity' => $request->productQuantity,
                         'productCost' => $request->productCost,
                         'totalProductCost' => $request->totalProductCost,
                         'currentPayable' => $request->currentPayable,
                         'depreciation' => $request->totalDepreciation,
                         'depreciationDay' => $request->depreciationDay,
                         'depreciationMonth' => $request->depreciationMonth,
                         'depreciationYear' => $request->depreciationYear,
                         'warranty' => $request->warranty,
                         'selectMothOrYearWarranty' => $request->selectMothOrYearWarranty,
                         'guarantee' => $request->guarantee,
                         'selectMothOrYearGuarantee' => $request->selectMothOrYearGuarantee,
                         'color' => $request->color,
                         'size' => strip_tags($request->size),
                         'description' => strip_tags($request->description),
                         'shopId' => Auth::User()->shopId,
                         'shopTypeId' => $shopTypeId,
                         'updateBy' => Auth::User()->id,
                   ]);

                if ($request->currentPayable > $request->totalProductCost) {
                       $previousPayable = $request->currentPayable - $request->totalProductCost;

                       if ($request->previousPayableDue ==  $previousPayable) {
                              ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                                  'previousPayableDue' => '',
                              ]);
                       }
                       elseif ($request->previousPayableDue <  $previousPayable ) {
                         //  return ['owed' => 'You wrote more money than you owed seven'];
                       }
                       else {
                           $finalDue = $request->previousPayableDue -  $previousPayable;
                           ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                               'previousPayableDue' => $finalDue,
                           ]);
                       }
                   }

                  else {
                        $previousPayable =  $request->totalProductCost - $request->currentPayable;
                        $totalDue = $previousPayable + $request->previousPayableDue;
                        ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                           'previousPayableDue' => $totalDue,
                        ]);
                  }
            }

            if (isset($request->assetSixCategory)) {
                    ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                         'assetCategoryId' => $request->assetCategory,
                         'assetProductId' => $request->assetProductId,
                         'assetSupplierId' => $request->assetSupplierId,
                         'assetBrandId' => $request->assetBrandId,
                         'purchasedate' => $request->purchasedate,
                         'mfgDate' => $request->mfgDate,
                         'expiryDate' => $request->expiryDate,
                         'invoiceNo' => $request->invoiceNo,
                         'modelNo' => $request->modelNo,
                         'productQuantity' => $request->productQuantity,
                         'productCost' => $request->productCost,
                         'totalProductCost' => $request->totalProductCost,
                         'currentPayable' => $request->currentPayable,
                         'depreciation' => $request->totalDepreciation,
                         'depreciationDay' => $request->depreciationDay,
                         'depreciationMonth' => $request->depreciationMonth,
                         'depreciationYear' => $request->depreciationYear,
                         'warranty' => $request->warranty,
                         'selectMothOrYearWarranty' => $request->selectMothOrYearWarranty,
                         'guarantee' => $request->guarantee,
                         'selectMothOrYearGuarantee' => $request->selectMothOrYearGuarantee,
                         'color' => $request->color,
                         'size' => strip_tags($request->size),
                         'description' => strip_tags($request->description),
                         'shopId' => Auth::User()->shopId,
                         'shopTypeId' => $shopTypeId,
                         'updateBy' => Auth::User()->id,
                   ]);

                if ($request->currentPayable > $request->totalProductCost) {
                       $previousPayable = $request->currentPayable - $request->totalProductCost;

                       if ($request->previousPayableDue ==  $previousPayable) {
                              ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                                  'previousPayableDue' => '',
                              ]);
                       }
                       elseif ($request->previousPayableDue <  $previousPayable ) {
                         //  return ['owed' => 'You wrote more money than you owed six'];
                       }
                       else {
                           $finalDue = $request->previousPayableDue -  $previousPayable;
                           ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                               'previousPayableDue' => $finalDue,
                           ]);
                       }
                   }

                  else {
                        $previousPayable =  $request->totalProductCost - $request->currentPayable;
                        $totalDue = $previousPayable + $request->previousPayableDue;
                        ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                           'previousPayableDue' => $totalDue,
                        ]);
                  }
            }

            if (isset($request->assetFiveCategory)) {
                    ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                         'assetCategoryId' => $request->assetCategory,
                         'assetProductId' => $request->assetProductId,
                         'assetSupplierId' => $request->assetSupplierId,
                         'assetBrandId' => $request->assetBrandId,
                         'purchasedate' => $request->purchasedate,
                         'mfgDate' => $request->mfgDate,
                         'expiryDate' => $request->expiryDate,
                         'invoiceNo' => $request->invoiceNo,
                         'modelNo' => $request->modelNo,
                         'productQuantity' => $request->productQuantity,
                         'productCost' => $request->productCost,
                         'totalProductCost' => $request->totalProductCost,
                         'currentPayable' => $request->currentPayable,
                         'depreciation' => $request->totalDepreciation,
                         'depreciationDay' => $request->depreciationDay,
                         'depreciationMonth' => $request->depreciationMonth,
                         'depreciationYear' => $request->depreciationYear,
                         'warranty' => $request->warranty,
                         'selectMothOrYearWarranty' => $request->selectMothOrYearWarranty,
                         'guarantee' => $request->guarantee,
                         'selectMothOrYearGuarantee' => $request->selectMothOrYearGuarantee,
                         'color' => $request->color,
                         'size' => strip_tags($request->size),
                         'description' => strip_tags($request->description),
                         'shopId' => Auth::User()->shopId,
                         'shopTypeId' => $shopTypeId,
                         'updateBy' => Auth::User()->id,
                   ]);

                if ($request->currentPayable > $request->totalProductCost) {
                       $previousPayable = $request->currentPayable - $request->totalProductCost;

                       if ($request->previousPayableDue ==  $previousPayable) {
                              ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                                  'previousPayableDue' => '',
                              ]);
                       }
                       elseif ($request->previousPayableDue <  $previousPayable ) {
                         //  return ['owed' => 'You wrote more money than you owed five'];
                       }
                       else {
                           $finalDue = $request->previousPayableDue -  $previousPayable;
                           ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                               'previousPayableDue' => $finalDue,
                           ]);
                       }
                   }

                  else {
                        $previousPayable =  $request->totalProductCost - $request->currentPayable;
                        $totalDue = $previousPayable + $request->previousPayableDue;
                        ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                           'previousPayableDue' => $totalDue,
                        ]);
                  }
            }

            if (isset($request->assetFourCategory)) {
                    ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                         'assetCategoryId' => $request->assetCategory,
                         'assetProductId' => $request->assetProductId,
                         'assetSupplierId' => $request->assetSupplierId,
                         'assetBrandId' => $request->assetBrandId,
                         'purchasedate' => $request->purchasedate,
                         'mfgDate' => $request->mfgDate,
                         'expiryDate' => $request->expiryDate,
                         'invoiceNo' => $request->invoiceNo,
                         'modelNo' => $request->modelNo,
                         'productQuantity' => $request->productQuantity,
                         'productCost' => $request->productCost,
                         'totalProductCost' => $request->totalProductCost,
                         'currentPayable' => $request->currentPayable,
                         'depreciation' => $request->totalDepreciation,
                         'depreciationDay' => $request->depreciationDay,
                         'depreciationMonth' => $request->depreciationMonth,
                         'depreciationYear' => $request->depreciationYear,
                         'warranty' => $request->warranty,
                         'selectMothOrYearWarranty' => $request->selectMothOrYearWarranty,
                         'guarantee' => $request->guarantee,
                         'selectMothOrYearGuarantee' => $request->selectMothOrYearGuarantee,
                         'color' => $request->color,
                         'size' => strip_tags($request->size),
                         'description' => strip_tags($request->description),
                         'shopId' => Auth::User()->shopId,
                         'shopTypeId' => $shopTypeId,
                         'updateBy' => Auth::User()->id,
                   ]);

                if ($request->currentPayable > $request->totalProductCost) {
                       $previousPayable = $request->currentPayable - $request->totalProductCost;

                       if ($request->previousPayableDue ==  $previousPayable) {
                              ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                                  'previousPayableDue' => '',
                              ]);
                       }
                       elseif ($request->previousPayableDue <  $previousPayable ) {
                         //  return ['owed' => 'You wrote more money than you owed four'];
                       }
                       else {
                           $finalDue = $request->previousPayableDue -  $previousPayable;
                           ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                               'previousPayableDue' => $finalDue,
                           ]);
                       }
                   }

                  else {
                        $previousPayable =  $request->totalProductCost - $request->currentPayable;
                        $totalDue = $previousPayable + $request->previousPayableDue;
                        ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                           'previousPayableDue' => $totalDue,
                        ]);
                  }
            }

            if (isset($request->assetThirdCategory)) {
                    ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                         'assetCategoryId' => $request->assetCategory,
                         'assetProductId' => $request->assetProductId,
                         'assetSupplierId' => $request->assetSupplierId,
                         'assetBrandId' => $request->assetBrandId,
                         'purchasedate' => $request->purchasedate,
                         'mfgDate' => $request->mfgDate,
                         'expiryDate' => $request->expiryDate,
                         'invoiceNo' => $request->invoiceNo,
                         'modelNo' => $request->modelNo,
                         'productQuantity' => $request->productQuantity,
                         'productCost' => $request->productCost,
                         'totalProductCost' => $request->totalProductCost,
                         'currentPayable' => $request->currentPayable,
                         'depreciation' => $request->totalDepreciation,
                         'depreciationDay' => $request->depreciationDay,
                         'depreciationMonth' => $request->depreciationMonth,
                         'depreciationYear' => $request->depreciationYear,
                         'warranty' => $request->warranty,
                         'selectMothOrYearWarranty' => $request->selectMothOrYearWarranty,
                         'guarantee' => $request->guarantee,
                         'selectMothOrYearGuarantee' => $request->selectMothOrYearGuarantee,
                         'color' => $request->color,
                         'size' => strip_tags($request->size),
                         'description' => strip_tags($request->description),
                         'shopId' => Auth::User()->shopId,
                         'shopTypeId' => $shopTypeId,
                         'updateBy' => Auth::User()->id,
                   ]);

                if ($request->currentPayable > $request->totalProductCost) {
                       $previousPayable = $request->currentPayable - $request->totalProductCost;

                       if ($request->previousPayableDue ==  $previousPayable) {
                              ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                                  'previousPayableDue' => '',
                              ]);
                       }
                       elseif ($request->previousPayableDue <  $previousPayable ) {
                         //  return ['owed' => 'You wrote more money than you owed three'];
                       }
                       else {
                           $finalDue = $request->previousPayableDue -  $previousPayable;
                           ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                               'previousPayableDue' => $finalDue,
                           ]);
                       }
                   }

                  else {
                        $previousPayable =  $request->totalProductCost - $request->currentPayable;
                        $totalDue = $previousPayable + $request->previousPayableDue;
                        ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                           'previousPayableDue' => $totalDue,
                        ]);
                  }
            }

            if (isset($request->assetSubCategory)) {
                    ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                         'assetCategoryId' => $request->assetCategory,
                         'assetProductId' => $request->assetProductId,
                         'assetSupplierId' => $request->assetSupplierId,
                         'assetBrandId' => $request->assetBrandId,
                         'purchasedate' => $request->purchasedate,
                         'mfgDate' => $request->mfgDate,
                         'expiryDate' => $request->expiryDate,
                         'invoiceNo' => $request->invoiceNo,
                         'modelNo' => $request->modelNo,
                         'productQuantity' => $request->productQuantity,
                         'productCost' => $request->productCost,
                         'totalProductCost' => $request->totalProductCost,
                         'currentPayable' => $request->currentPayable,
                         'depreciation' => $request->totalDepreciation,
                         'depreciationDay' => $request->depreciationDay,
                         'depreciationMonth' => $request->depreciationMonth,
                         'depreciationYear' => $request->depreciationYear,
                         'warranty' => $request->warranty,
                         'selectMothOrYearWarranty' => $request->selectMothOrYearWarranty,
                         'guarantee' => $request->guarantee,
                         'selectMothOrYearGuarantee' => $request->selectMothOrYearGuarantee,
                         'color' => $request->color,
                         'size' => strip_tags($request->size),
                         'description' => strip_tags($request->description),
                         'shopId' => Auth::User()->shopId,
                         'shopTypeId' => $shopTypeId,
                         'updateBy' => Auth::User()->id,
                   ]);

                if ($request->currentPayable > $request->totalProductCost) {
                       $previousPayable = $request->currentPayable - $request->totalProductCost;

                       if ($request->previousPayableDue ==  $previousPayable) {
                              ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                                  'previousPayableDue' => '',
                              ]);
                       }
                       elseif ($request->previousPayableDue <  $previousPayable ) {
                         //  return ['owed' => 'You wrote more money than you owed two'];
                       }
                       else {
                           $finalDue = $request->previousPayableDue -  $previousPayable;
                           ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                               'previousPayableDue' => $finalDue,
                           ]);
                       }
                   }

                  else {
                        $previousPayable =  $request->totalProductCost - $request->currentPayable;
                        $totalDue = $previousPayable + $request->previousPayableDue;
                        ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                           'previousPayableDue' => $totalDue,
                        ]);
                  }
            }

           if (isset($request->assetCategory)) {
                   ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                        'assetCategoryId' => $request->assetCategory,
                        'assetProductId' => $request->assetProductId,
                        'assetSupplierId' => $request->assetSupplierId,
                        'assetBrandId' => $request->assetBrandId,
                        'purchasedate' => $request->purchasedate,
                        'mfgDate' => $request->mfgDate,
                        'expiryDate' => $request->expiryDate,
                        'invoiceNo' => $request->invoiceNo,
                        'modelNo' => $request->modelNo,
                        'productQuantity' => $request->productQuantity,
                        'productCost' => $request->productCost,
                        'totalProductCost' => $request->totalProductCost,
                        'currentPayable' => $request->currentPayable,
                        'depreciation' => $request->totalDepreciation,
                        'depreciationDay' => $request->depreciationDay,
                        'depreciationMonth' => $request->depreciationMonth,
                        'depreciationYear' => $request->depreciationYear,
                        'warranty' => $request->warranty,
                        'selectMothOrYearWarranty' => $request->selectMothOrYearWarranty,
                        'guarantee' => $request->guarantee,
                        'selectMothOrYearGuarantee' => $request->selectMothOrYearGuarantee,
                        'color' => $request->color,
                        'size' => strip_tags($request->size),
                        'description' => strip_tags($request->description),
                        'shopId' => Auth::User()->shopId,
                        'shopTypeId' => $shopTypeId,
                        'updateBy' => Auth::User()->id,
                  ]);

               if ($request->currentPayable > $request->totalProductCost) {
                      $previousPayable = $request->currentPayable - $request->totalProductCost;

                      if ($request->previousPayableDue ==  $previousPayable) {
                             ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                                 'previousPayableDue' => '',
                             ]);
                      }
                      elseif ($request->previousPayableDue <  $previousPayable ) {
                          //return ['owed' => 'You wrote more money than you owed one'];
                      }
                      else {
                          $finalDue = $request->previousPayableDue -  $previousPayable;
                          ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                              'previousPayableDue' => $finalDue,
                          ]);
                      }
                  }

                 else {
                       $previousPayable =  $request->totalProductCost - $request->currentPayable;
                       $totalDue = $previousPayable + $request->previousPayableDue;
                       ShopAssetEntry::where('shopAssetEntryId',$shopAssetEntryId)->update([
                          'previousPayableDue' => $totalDue,
                       ]);
                 }
           }




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
