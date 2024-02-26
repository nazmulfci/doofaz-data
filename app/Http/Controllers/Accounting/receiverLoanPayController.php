<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Accounting\chartOfAccountController;
use Carbon\Carbon;
use App\ReceiverLoanPay;
use App\LoanProviderEntry;
use App\AccountSetup;
use App\ChartOfAccount;
use App\ChartOfAccountRegister;
use App\LoanInterestType;
use App\LoanInterestTimeType;
use App\LoanPayType;
use App\ShopAddBankEntry;
use App\voucherType;
use App\voucherInformation;
use App\voucherInformationReport;
use App\ReceivePaymentStatement;
use App\LoanReveiverInstallmentHistory;
use App\LoanReceiverInstallmentHistoryDetails;



class receiverLoanPayController extends Controller
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
        $data = ReceiverLoanPay::where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data];
    }



    public function getLoanReceiverLoanPayInfo($loanId)
    {
        $singleData = ReceiverLoanPay::where('id',$loanId)->where('shopId',Auth::user()->shopId)->first();
        $data = ReceiverLoanPay::where('id',$loanId)->where('shopId',Auth::user()->shopId)->get();
        $data1 = LoanReceiverInstallmentHistoryDetails::where('loanId',$loanId)->where('shopId',Auth::user()->shopId)->get();
        $totalInstallment = LoanReveiverInstallmentHistory::where('mainAmountReceiveStatus',0)->where('loanId',$loanId)->where('shopId',Auth::user()->shopId)->sum('installmentAmount');
        return [
            'singleData' => $singleData,
            'loanInfo' => $data,
            'loanInfo1' => $data1,
            'totalInstallment' => $totalInstallment,
        ];
    }

    public function getLoanReceiverLoanList($id)
    {
        $data = ReceiverLoanPay::where('loanProviderId',$id)->where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data];
    }
    
    public function getLoanReceiverLoanInformation($type,$id){
        if($type){
            $data3 = ReceiverLoanPay::where('interestTimeType','<','5')->where('receiveStatus','0')->where('loanProviderId',$id)->where('shopId',Auth::user()->shopId)->get();
        }else{
            $data3 = ReceiverLoanPay::where('receiveStatus','0')->where('loanProviderId',$id)->where('shopId',Auth::user()->shopId)->get();
        }
        return ['data' => $data3];  
         
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
            'interestType' => 'required',
            'interestTimeType' => 'required',
            'paymentType' => 'required',
            'loanMainAmount' => 'required',
            'paidDate' => 'required',
        ],
        [
        //   'headCode.required' => 'Enter Head Code',
        //   'headName.required' => 'Enter Head Name',
        //   'headGroupType.required' => 'Enter Group Type',
        ]);

            // ==========================================================
            // ==================== Voucher Information =================
            // ==========================================================

            
        $voucherUniqueId = time();
        $day = date('d');
        $month = date('m');
        $year = date('Y');
        $voucherDate = date('Y-m-d');
        
         
        
        $providerName = LoanProviderEntry::where('id',$request->loanProviderId)->first()->providerName;
        $particular = "Loan Receive From $providerName";
        $voucherAmount = $request->loanMainAmount;
        

                $headCode1 = LoanProviderEntry::where('id',$request->loanProviderId)->first()->accountCode;
                $headOfAccounts = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
            
            if($request->paymentType == 1){
                $voucherType = 1;
                $headCode2 = AccountSetup::where('placementType','9')->where('headName','100')->first()->headCode;
            }
            else{
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

                    $debitHeadCodeForBalance = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
                    $debitCodeForBalance = $headCode1;
                    $creditHeadCodeForBalance = ChartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
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
            

            //   ===================================================
            //   ========================= receive payment statement 
            //   ===================================================



            // ==========================================================
            // ==================== Voucher Information =================
            // ==========================================================

        $id = ReceiverLoanPay::insertGetId([
                  'loanProviderTypeId' => $request->loanProviderTypeId,
                  'loanProviderId' => $request->loanProviderId,
                  'interestType' => $request->interestType,
                  'interestTimeType' => $request->interestTimeType,
                  'loanPayType' => $request->loanPayType,
                  'howMuchTime' => $request->howMuchTime,
                  'loanMainAmount' => $request->loanMainAmount,
                  'dueAmount' => $request->loanMainAmount,
                  'monthlyAmount' => $request->monthlyAmount,
                  'paidDate' => $request->paidDate,
                  'bankAccountId' => $request->bankAccountId,
                  'status' => $request->status,
                  'shopId' => Auth::user()->shopId,
                  'createBy' => Auth::user()->id,
                  'created_at' => Carbon::now(),
              ]);

              
              LoanReceiverInstallmentHistoryDetails::insert([
                'shopId' => Auth::user()->shopId,
                'loanProviderTypeId' => $request->loanProviderTypeId,
                'loanProviderId' => $request->loanProviderId,
                'loanId' => $id,
                'debitAmount' => $request->loanMainAmount,
                'creditAmount' => 0,
                'balanceAmount' => $request->loanMainAmount,
                'paymentType' => $request->paymentType,
                'note' => ' ',
                'status' => $request->status,
                'createBy' => Auth::user()->id,
                'created_at' => Carbon::now(),
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
        $data = ReceiverLoanPay::where('id',$id)->first();
        return ['data' => $data];
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
        
        $this->validate($request, [
            'loanProviderTypeId' => 'required',
            'loanProviderId' => 'required',
            'interestType' => 'required',
            'monthlyAmount' => 'required',
        ],
        [
        //   'headCode.required' => 'Enter Head Code',
        //   'headName.required' => 'Enter Head Name',
        //   'headGroupType.required' => 'Enter Group Type',
        ]);

            // ==========================================================
            // ==================== Voucher Information =================
            // ==========================================================

            
        $voucherUniqueId = time();
        $day = date('d');
        $month = date('m');
        $year = date('Y');
        $voucherDate = date('Y-m-d');
        
         
        
        $providerName = LoanProviderEntry::where('id',$request->loanProviderId)->first()->providerName;
        $particular = "Loan Receive From $providerName";
        $voucherAmount = $request->monthlyAmount;
        

                $headCode1 = LoanProviderEntry::where('id',$request->loanProviderId)->first()->accountCode;
                $headOfAccounts = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
            
            if($request->paymentType == 1){
                $voucherType = 1;
                $headCode2 = AccountSetup::where('placementType','9')->where('headName','100')->first()->headCode;
            }
            else{
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

                    $debitHeadCodeForBalance = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
                    $debitCodeForBalance = $headCode1;
                    $creditHeadCodeForBalance = ChartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
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
            

            //   ===================================================
            //   ========================= receive payment statement 
            //   ===================================================



            // ==========================================================
            // ==================== Voucher Information =================
            // ==========================================================


            $info = LoanReceiverInstallmentHistoryDetails::where('loanId',$id)->orderBy('id','DESC')->first();
            $dueDb = $info->balanceAmount;
    
            ReceiverLoanPay::where('id',$id)->update([
                      'loanMainAmount' => $request->monthlyAmount+$request->loanMainAmount,
                      'dueAmount' => $dueDb+$request->monthlyAmount,
                      'receiveStatus' => 0,
                      'updateBy' => Auth::user()->id,
                      'updated_at' => Carbon::now(),
                  ]);
    
                  LoanReceiverInstallmentHistoryDetails::insert([
                      'shopId' => Auth::user()->shopId,
                      'loanProviderTypeId' => $request->loanProviderTypeId,
                      'loanProviderId' => $request->loanProviderId,
                      'loanId' => $id,
                      'debitAmount' => $request->monthlyAmount,
                      'creditAmount' => 0,
                      'balanceAmount' => $dueDb+$request->monthlyAmount,
                      'paymentType' => $request->paymentType,
                      'note' => $particular,
                      'status' => $request->status,
                      'createBy' => Auth::user()->id,
                      'created_at' => Carbon::now(),
                  ]);

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
