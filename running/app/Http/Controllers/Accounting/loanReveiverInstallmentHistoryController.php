<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Accounting\chartOfAccountController;
use Carbon\Carbon;
use App\ProviderLoanReceiveEntry;
use App\LoanProviderEntry;
use App\AccountSetup;
use App\ChartOfAccount;
use App\ChartOfAccountRegister;
use App\LoanInterestType;
use App\LoanInterestTimeType;
use App\LoanPayType;
use App\ReceiverLoanPay;
use App\ShopAddBankEntry;
use App\voucherType;
use App\voucherInformation;
use App\voucherInformationReport;
use App\ReceivePaymentStatement;
use App\LoanReveiverInstallmentHistory;
use App\LoanReceiverInstallmentHistoryDetails;

class loanReveiverInstallmentHistoryController extends Controller
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
    public function store(Request $request)
    {
        $this->validate($request, [
            'loanProviderTypeId' => 'required',
            'loanProviderId' => 'required',
            'loanProviderLoanId' => 'required',
            'paymentType' => 'required',
            'installmentAmount' => 'required',
            'loanMainAmount' => 'required',
            'note' => 'required',
        ],
        [
          'note.required' => 'Enter Note',
        //   'headName.required' => 'Enter Head Name',
        //   'headGroupType.required' => 'Enter Group Type',
        ]);

        $loanInfo = ReceiverLoanPay::where('id',$request->loanProviderLoanId)->where('shopId',Auth::user()->shopId)->first();
        
        if($loanInfo->loanPayType == 2){

            // ==========================================================
            // ==================== Voucher Information =================
            // ==========================================================

            if(1){
            $voucherUniqueId = time();
            $day = date('d');
            $month = date('m');
            $year = date('Y');
            $voucherDate = date('Y-m-d');
            
             
            
            $providerName = LoanProviderEntry::where('id',$request->loanProviderId)->first()->providerName;
            $particular = "Loan Installment Pay Mr/Mrs $providerName";
            $voucherAmount = $request->installmentAmount;
            
    
                    $headCode2 = LoanProviderEntry::where('id',$request->loanProviderId)->first()->accountCode;
                    $headOfAccounts = ChartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                
                if($request->paymentType == 1)
                {
                    $voucherType = 2;
                    $headCode1 = AccountSetup::where('placementType','9')->where('headName','100')->first()->headCode;
                }
                else
                {
                    $voucherType = 4;
                    $headCode1 = ShopAddBankEntry::where('bankId',$request->bankAccountId)->first()->accountCode;
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

                    $debitHeadCodeForBalance = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
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
      
          //   ======================= chart of account balance update
            
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
                    $last_rp_total = $last_amount+$request->voucherAmount;
                    
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
                
            }else{
            // ==========================================================
            // ==================== Voucher Information =================
            // ==========================================================

            if(1){
            $voucherUniqueId = time();
            $day = date('d');
            $month = date('m');
            $year = date('Y');
            $voucherDate = date('Y-m-d');
            
             
            
            $providerName = LoanProviderEntry::where('id',$request->loanProviderId)->first()->providerName;
            $particular = "Loan Installment Pay Mr/Mrs $providerName";
            $voucherAmount = $request->installmentAmount;
            
    
                    $headCode2 = LoanProviderEntry::where('id',$request->loanProviderId)->first()->accountCode;
                    $headOfAccounts = ChartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                
                if($request->paymentType == 1)
                {
                    $voucherType = 2;
                    $headCode1 = AccountSetup::where('placementType','9')->where('headName','100')->first()->headCode;
                }
                else
                {
                    $voucherType = 4;
                    $headCode1 = ShopAddBankEntry::where('bankId',$request->bankAccountId)->first()->accountCode;
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

                    $debitHeadCodeForBalance = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
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
      
          //   ======================= chart of account balance update
            
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
                    $last_rp_total = $last_amount+$request->voucherAmount;
                    
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
                
            }
                if(LoanReveiverInstallmentHistory::where('loanId',$request->loanProviderLoanId)->where('shopId',Auth::user()->shopId)->exists()){
                     
                                    $totalPaidAmountDb= LoanReveiverInstallmentHistory::orderBy('id','DESC')->where('loanId',$request->loanProviderLoanId)->where('shopId',Auth::user()->shopId)->first()->totalPaidAmount;
                                    $dueAmountDb= LoanReveiverInstallmentHistory::orderBy('id','DESC')->where('loanId',$request->loanProviderLoanId)->where('shopId',Auth::user()->shopId)->first()->dueAmount;
                                    $mainAmount= LoanReveiverInstallmentHistory::orderBy('id','DESC')->where('loanId',$request->loanProviderLoanId)->where('shopId',Auth::user()->shopId)->first()->mainLoanAmount;
                  
                                    if($request->loanPayTypeId == 2){
                                        $totalPaidAmount=$totalPaidAmountDb+$request->installmentAmount;
            
                                        if(LoanReveiverInstallmentHistory::where('loanId',$request->loanProviderLoanId)->where('mainAmountReceiveStatus','1')->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->exists()){
                                            $lastDueAmount = LoanReveiverInstallmentHistory::where('loanId',$request->loanProviderLoanId)->where('mainAmountReceiveStatus','1')->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first()->dueAmount;
                                            $dueAmount = $lastDueAmount;
                                        }
                                        else{
                                            $dueAmount = $request->loanMainAmount;
                                        }
                                    }
                                    else{
                                        $totalPaidAmount=$totalPaidAmountDb+$request->installmentAmount;
                                        $dueAmount = $dueAmountDb-$request->installmentAmount;
                                    }
                  
                                }
                    else{

                        if($request->loanPayTypeId == 2){
                            $totalPaidAmount=$request->installmentAmount;
                            $dueAmount = $request->loanMainAmount;
                        }else{
                            $totalPaidAmount=$request->installmentAmount;
                            $dueAmount = $request->loanMainAmount-$request->installmentAmount;
                        }

                    }



                    $info = ReceiverLoanPay::
                    where('id',$request->loanProviderLoanId)
                    ->where('shopId',Auth::user()->shopId)
                    ->orderBy('id','DESC')->first();
                    $loanMainAmounts = $info->loanMainAmount;
                    $lastPaidAmount = $info->paidAmount+$request->installmentAmount;
    
                    ReceiverLoanPay::
                    where('id',$request->loanProviderLoanId)->update([
                        'paidAmount' => $lastPaidAmount,
                        'dueAmount' => $loanMainAmounts-$lastPaidAmount,
                    ]);
 
                LoanReveiverInstallmentHistory::insert([
                      'loanId' => $request->loanProviderLoanId,
                      'paymentType' => $request->paymentType,
                      'installmentAmount' => $request->installmentAmount,
                      'mainLoanAmount' => $request->loanMainAmount,
                      'totalPaidAmount' => $totalPaidAmount,
                      'dueAmount' => $dueAmount,
                      'bankAccountId' => $request->bankAccountId,
                      'personName' => $request->personName,
                      'personMobileNo' => $request->personMobileNo,
                      'note' => $request->note,
                      'status' => $request->status,
                      'shopId' => Auth::user()->shopId,
                      'createBy' => Auth::user()->id,
                      'created_at' => Carbon::now(),
                  ]);


                  LoanReceiverInstallmentHistoryDetails::insert([
                    'shopId' => Auth::user()->shopId,
                    'loanProviderTypeId' => $request->loanProviderTypeId,
                    'loanProviderId' => $request->loanProviderId,
                    'loanId' => $request->loanProviderLoanId,
                    'debitAmount' => $request->loanMainAmount,
                    'creditAmount' => 0,
                    'balanceAmount' => $request->loanMainAmount,
                    'paymentType' => $request->paymentType,
                    'note' => $request->note,
                    'status' => $request->status,
                    'createBy' => Auth::user()->id,
                    'created_at' => Carbon::now(),
                ]);


                  if(LoanReveiverInstallmentHistory::
                    where('loanId',$request->loanProviderLoanId)
                    ->where('shopId',Auth::user()->shopId)
                    ->orderBy('id','DESC')->exists())
                    {
                  $lastDueAmount = LoanReveiverInstallmentHistory::
                  where('loanId',$request->loanProviderLoanId)
                  ->where('shopId',Auth::user()->shopId)
                  ->orderBy('id','DESC')->first()->dueAmount;

                  if($lastDueAmount<1){
                    ReceiverLoanPay::where('id',$request->loanProviderLoanId)
                    ->where('shopId',Auth::user()->shopId)->update([
                        'receiveStatus' => 1,
                        'paidAmount' => $totalPaidAmount,
                        'dueAmount' => $dueAmount,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now(),
                    ]);
                  }
                  else{
                    ReceiverLoanPay::where('id',$request->loanProviderLoanId)
                    ->where('shopId',Auth::user()->shopId)->update([
                        'paidAmount' => $totalPaidAmount,
                        'dueAmount' => $dueAmount,
                        'updateBy' => Auth::user()->id,
                        'updated_at' => Carbon::now(),
                    ]);
                  }
                  }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
