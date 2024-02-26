<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\IncomeExpenseCompany;
use App\IncomeProviderEntry;
use App\ChartOfAccount;
use App\ChartOfAccountRegister;
use App\AccountSetup;
use App\VoucherType;
use App\voucherInformation;
use App\voucherInformationReport;
use App\ReceivePaymentStatement;
use App\expenceType;
use App\IncomeDetailsItem;
use App\IncomeInformationEntry;
use App\StatementInformation;
use App\IncomeExpenseBillPaymentReceive;
use App\ShopAddBankEntry;
use App\ShopInformation\ShopOwnerInformation;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class incomeExpenseBillPaymentReceiveController extends Controller
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

    public function getCompanyOwnerByType($id){
        $data = ShopOwnerInformation::where('ownerTypeId',$id)->get();
        return ['data' => $data];
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
            'type' => 'required',
            'companyId' => 'required', 
            'lastBalance' => 'required', 
            'amount' => 'required|numeric|min:1',
            'paymentType' => 'required', 
            'dueAmount' => 'required', 
        ],
        [
        //   'headCode.required' => 'Enter Head Code',
        ]);


        $rendomNumber = substr($request->rendomNumber,0,12);

        IncomeExpenseBillPaymentReceive::insert([
            'type' => $request->type,
            'companyId' => $request->companyId,
            'lastBalance' => $request->lastBalance,
            'amount' => $request->amount,
            'paymentType' => $request->paymentType,
            'personName' => $request->personName,
            'personMobileNo' => $request->personMobileNo,
            'bankTypeEntryId' => $request->bankTypeEntryId,
            'bankEntryId' => $request->bankEntryId,
            'bankAccountId' => $request->bankAccountId,
            'dueAmount' => $request->dueAmount,
            'note' => $request->note,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);


if(1){
        
 
// ==========================================================


if($request->paymentType==1 || $request->paymentType==2){

if($request->type==1)
{
    $title = 'Bill Payment';
}
else
{
    $title = 'Bill Receive';
}
$companyId = $request->companyId;
$companyAccountCodeIncome = IncomeExpenseCompany::where('id',$companyId)->first()->incomeAccountCode;
$companyAccountCodeExpense = IncomeExpenseCompany::where('id',$companyId)->first()->expenseAccountCode;

        if($companyAccountCodeIncome)
        {
            $companyAccountCode = $companyAccountCodeIncome;
        }
        else
        {
            $companyAccountCode = $companyAccountCodeExpense;
        }
$companyAccountHeadCode = ChartOfAccountRegister::where('headCode',$companyAccountCode)->first()->pre_code;
$referance = 'IEC-'.$companyId;

if(StatementInformation::where('shopId',Auth::user()->shopId)
->where('accountCode',$companyAccountCode)->exists())
{
    $balanceAmountDb = StatementInformation::where('shopId',Auth::user()->shopId)
    ->where('accountCode',$companyAccountCode)->orderBy('id','DESC')->first()->balanceAmount;
    
}
else
{
    $balanceAmountDb = 0;
}


 


if($request->type==1){

    if($request->paymentType==1){
        $balanceAmount = $balanceAmountDb+$request->amount;
        $dr_cr_amount = $request->amount;
        $drcrFieldName = 'creditAmount';
        $paymentReceiveTitle = 'Cash Payment';
    }
    else if($request->paymentType==2){
        $balanceAmount = $balanceAmountDb+$request->amount;
        $paymentReceiveTitle = 'Bank Payment';
        $drcrFieldName = 'creditAmount';
        $dr_cr_amount = $request->amount;
    }

}else if($request->type==2){

    if($request->paymentType==1){
        $balanceAmount = $balanceAmountDb-$request->amount;
        $dr_cr_amount = $request->amount;
        $drcrFieldName = 'debitAmount';
        $paymentReceiveTitle = 'Cash Recive';
    }
    else if($request->paymentType==2){
        $balanceAmount = $balanceAmountDb-$request->amount;
        $paymentReceiveTitle = 'Bank Recive';
        $drcrFieldName = 'debitAmount';
        $dr_cr_amount = $request->amount;
    }
}



StatementInformation::insert([
    'type' => $request->type,
    'accountHeadCode' => $companyAccountHeadCode,
    'accountCode' => $companyAccountCode,
    'title' => $title,
    'referance' => $referance,
    'paymentType' => $request->paymentType,
    'cashAmount' => 0,
    'personName' => $request->personName,
    'personMobileNo' => $request->personMobileNo,
    'bankAmount' => 0,
    'bankTypeEntryId' => $request->bankTypeEntryId,
    'bankEntryId' => $request->bankEntryId,
    'bankAccountId' => $request->bankAccountId,
    'dueAmount' => $request->dueAmount,
    $drcrFieldName => $request->amount,
    'balanceAmount' => $balanceAmount,
    'note' => $request->note,
    'shopId' => Auth::user()->shopId,
    'createBy' => Auth::user()->id,
    'created_at' => Carbon::now(),
]);
}
// ===============================================

      



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
                if($request->paymentType==1)
                {
                    $voucherAmount = $request->amount;
                }
                else if($request->paymentType==2)
                {
                    $voucherAmount = $request->amount;
                }

                        $headCode2 = IncomeProviderEntry::where('incomeProviderId',$request->companyId)->first()->accountCode;
                        $headOfAccounts = ChartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                    
                    if($request->type == 1)
                    {
                        if($request->paymentType==1){
                            $voucherType = 1;
                        }
                        else if($request->paymentType==2){
                            $voucherType = 3;
                        }
                    }
                    else if($request->type == 2)
                    {
                        if($request->paymentType==1){
                            $voucherType = 2;
                        }
                        else if($request->paymentType==2){
                            $voucherType = 4;
                        }
                    }
                    
                    if($request->paymentType == 1)
                    {
                        $headCode1 = AccountSetup::where('placementType','9')->where('headName','100')->first()->headCode;
                    }
                    else if($request->paymentType == 2)
                    {
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

                    $debitHeadCodeForBalance = chartOfAccountRegister::where('headCode',$headCode1)->first()->pre_code;
                    $debitCodeForBalance = $headCode1;
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
