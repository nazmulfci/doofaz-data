<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Accounting\chartOfAccountController;
use App\IncomeExpenseCompany;
use App\ExpenseProviderEntry;
use App\ChartOfAccount;
use App\ChartOfAccountRegister;
use App\AccountSetup;
use App\voucherType;
use App\voucherInformation;
use App\voucherInformationReport;
use App\ReceivePaymentStatement;
use App\expenceType;
use App\ShopAddBankEntry;
use App\ExpenseDetailsItem;
use App\ExpenseInformationEntry;
use App\StatementInformation;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\SecurityMoney;


class securityMoneyController extends Controller
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
        $data1 = SecurityMoney::distinct()
        ->where('shopId',Auth::user()->shopId)
        ->get('expensePurpous');
        
        $count = count($data1);
        $i = 1;
        $ids = '';
        foreach($data1 as $datas){

            if($i==$count){
                $ids .= $datas->expensePurpous;
            }
            else{
                $ids .= $datas->expensePurpous.',';
            }

            $i++;
        }

        $exps = explode(',',$ids);
        $counte = count($exps);
        $ii=1;
        $id1s = '';
        foreach($exps as $exp){

            if(SecurityMoney::where('shopId',Auth::user()->shopId)
            ->where('expensePurpous', $exp)
            ->orderBy('id','DESC')
            ->exists()){
            $select = SecurityMoney::where('shopId',Auth::user()->shopId)
            ->where('expensePurpous', $exp)
            ->orderBy('id','DESC')
            ->first();
            if($ii==$counte){
                $id1s .= $select->id;
            }
            else{
                $id1s .= $select->id.',';
            }
            $ii++;
        }else{
            $id1s = '0';
        }

        }

        $data2 = SecurityMoney::where('shopId',Auth::user()->shopId)
        ->whereRaw("id IN($id1s)")
        ->get();
        return ['data' => $data2];
    }


    public function getSecurityMoneyListById($id){

        $data2 = SecurityMoney::where('shopId',Auth::user()->shopId)
        ->where('expensePurpous',$id)
        ->get();
        return ['data' => $data2];

    }


    public function getSecurityMoneyInfoById($id)
    {
        
        $data = SecurityMoney::where('id',$id)->where('shopId',Auth::user()->shopId)->first();
        
    
        $expensePurpous = $data->expensePurpous;

        $expenseCode = ExpenseProviderEntry::where('accountCodeSecurityDeposit',$expensePurpous)->where('shopId',Auth::user()->shopId)->first()->accountCode;

        $balance = StatementInformation::
            where('shopId',Auth::user()->shopId)
            ->where('accountCode',$expensePurpous)
            ->where('advanceSecurityDepositPrepayment',1)
            ->first()->balanceAmount;

        return [
            'expenseCode' => $expenseCode,
            'balance' => $balance,
            'data' => $data
        ];
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
            'expenseTitle' => 'required',
            'expenseType' => 'required',
            'expenseHead' => 'required', 
            'expensePurpous' => 'required', 
            'paymentType' => 'required', 
            'expenseAmount' => 'required|numeric|min:1', 
        ],
        [
        //   'headCode.required' => 'Enter Head Code',
        ]);


        $rendomNumber = substr($request->rendomNumber,0,12);
        $companyId = ExpenseProviderEntry::where('accountCodeSecurityDeposit',$request->expensePurpous)->first()->expenseProviderId;
        $referance = 'IEC-'.$companyId;
        $companyAccountCode = $request->expensePurpous;
        $companyAccountHeadCode = ChartOfAccountRegister::where('headCode',$companyAccountCode)->first()->pre_code;

        if(SecurityMoney::where('shopId',Auth::user()->shopId)
        ->where('expenseType',$request->expenseType)
        ->where('expenseHead',$request->expenseHead)
        ->where('expensePurpous',$request->expensePurpous)
        ->exists()
        ){
            $previous_dueAmount = SecurityMoney::where('shopId',Auth::user()->shopId)
            ->where('expenseType',$request->expenseType)
            ->where('expenseHead',$request->expenseHead)
            ->where('expensePurpous',$request->expensePurpous)
            ->orderBy('id','DESC')
            ->first()->dueAmount;
        }
        else{
            $previous_dueAmount = 0;
        }

        $dueAmount = $previous_dueAmount+$request->expenseAmount;

        SecurityMoney::insert([
            'type' => 1,
            'expenseType' => $request->expenseType,
            'expenseHead' => $request->expenseHead,
            'expensePurpous' => $request->expensePurpous,
            'expenseCompany' => $companyId,
            'expenseTitle' => $request->expenseTitle,
            'mainSecurityAmount' => $request->expenseAmount,
            'securityAmount' => $request->expenseAmount,
            'dueAmount' => $dueAmount,
            'paymentType' => $request->paymentType,
            'cashAmount' => $request->cashAmount,
            'personName' => $request->personName,
            'personMobileNo' => $request->personMobileNo,
            'bankAmount' => $request->bankAmount,
            'bankTypeEntryId' => $request->bankTypeEntryId,
            'bankEntryId' => $request->bankEntryId,
            'bankAccountId' => $request->bankAccountId,
            'note' => $request->note,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);


        
        // ==========================================================


        

        if(StatementInformation::where('shopId',Auth::user()->shopId)
        ->where('accountCode',$companyAccountCode)
        ->where('advanceSecurityDepositPrepayment',1)
        ->exists()){
            $selectFromDB = StatementInformation::where('shopId',Auth::user()->shopId)
            ->where('accountCode',$companyAccountCode)
            ->where('advanceSecurityDepositPrepayment',1)
            ->orderBy('id','DESC')->first();

            $balanceAmountDb = $selectFromDB->balanceAmount;
            $debitAmountDB = $selectFromDB->debitAmount;

            $balanceAmount = $balanceAmountDb+$request->expenseAmount;
            $debitAmount = $debitAmountDB+$request->expenseAmount;

               StatementInformation::where('shopId',Auth::user()->shopId)
               ->where('referance',$referance)
               ->where('advanceSecurityDepositPrepayment',1)
               ->update([
                'debitAmount' => $debitAmount,
                'balanceAmount' => $balanceAmount,
                'updateBy' => Auth::user()->id,
                'updated_at' => Carbon::now(),
            ]);
        }
        else{
 
        StatementInformation::insert([
            'shopId' => Auth::user()->shopId,
            'rendomNumber' => $rendomNumber,
            'type' => 2,
            'accountHeadCode' => $companyAccountHeadCode,
            'accountCode' => $companyAccountCode,
            'referance' => $referance,
            'title' => $request->expenseTitle,
            'paymentType' => $request->paymentType,
            'cashAmount' => $request->cashAmount,
            'personName' => $request->personName,
            'personMobileNo' => $request->personMobileNo,
            'bankAmount' => $request->bankAmount,
            'bankTypeEntryId' => $request->bankTypeEntryId,
            'bankEntryId' => $request->bankEntryId,
            'bankAccountId' => $request->bankAccountId,
            'dueAmount' => $request->dueAmount,
            'debitAmount' => $request->expenseAmount,
            'balanceAmount' => $request->expenseAmount,
            'advanceSecurityDepositPrepayment' => 1,
            'note' => $request->note,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);

    }

        // ==========================================================




     



        // ==========================================================
        // ==================== Voucher Information =================
        // ==========================================================

            if($request->paymentType>0 && $request->paymentType<3){

                $voucherUniqueId = time();
                $day = date('d');
                $month = date('m');
                $year = date('Y');
                $voucherDate = date('Y-m-d');
                
                 
                
                $particular = $request->note.'.';
                if($request->paymentType==1){
                    $voucherAmount = $request->cashAmount;
                }else if($request->paymentType==2){
                    $voucherAmount = $request->bankAmount;
                }
                
                  
                        $headCode1 = $companyAccountCode;
                        $headOfAccounts = ChartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
                    
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
