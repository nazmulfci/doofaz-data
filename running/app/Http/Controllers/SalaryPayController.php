<?php

namespace App\Http\Controllers;

use App\SalaryPay;
use App\Http\Controllers\Accounting\chartOfAccountController;
use App\SalarySheet;
use App\StartSalarySetup;
use App\ChartOfAccount;
use App\ChartOfAccountRegister;
use App\AccountSetup;
use App\voucherType;
use App\voucherInformation;
use App\voucherInformationReport;
use App\ReceivePaymentStatement;
use App\ShopAddBankEntry;
use App\StatementInformation;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Auth;


class SalaryPayController extends Controller
{
   
    public function __construct()
    {
        $this->middleware('auth:,admin');
    } /**
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
            'payAmount' => 'required',
        ],
        [
            'payAmount.required' => 'Please Enter Amount.',
        ]);

        if($request->monthInfo==''){
          $dt=Carbon::now();
        }
        else{
$dt=$request->monthInfo;
        }
        SalaryPay::insert([
            'employeeId'=>$request->employeeId,
            'shopId'=>Auth::user()->shopId,
            'bankTypeEntryId'=>$request->bankTypeEntryId,
            'bankEntryId'=>$request->bankEntryId,
            'bankAccountId'=>$request->bankAccountId,
            'branchName'=>$request->branchName,
            'paymentType'=>$request->paymentType,
            'accNo'=>$request->accNo,
            'receiverBankName'=>$request->receiverBankName,
            'receiverAcNo'=>$request->receiverAcNo,
            'receiverAcName'=>$request->receiverAcName,
            'receiverBranchName'=>$request->receiverBranchName,
            'receiverMobileAcNo'=>$request->receiverMobileAcNo,
            'receiverName'=>$request->receiverName,
            'receiverMobile'=>$request->receiverMobile,
            'payAmount'=>$request->payAmount,
            'dueAmount'=>$request->dueAmount,
            'note'=>$request->note,
            'payDate'=>$request->payDate,
            'payMonth'=>$dt,
            'created_at'=>Carbon::now(),
        ]);


        if($request->month==null){
        $netAmount=SalarySheet::where('employeeId',$request->employeeId)
        ->where('salaryStartMonth',Carbon::now()->format('m'))
        ->where('shopId',Auth::user()->shopId)->first();

        $netAmountCal= $netAmount->netAmount-$request->payAmount;

        if($request->dueAmount>0){
          
            SalarySheet::where('employeeId',$request->employeeId)->where('salaryStartMonth',Carbon::now()->format('m'))->where('shopId',Auth::user()->shopId)->update([
                'paymentStatus'=>2,
                'netAmount'=> $netAmountCal
            ]);
        }
        else{
        SalarySheet::where('employeeId',$request->employeeId)->where('salaryStartMonth',Carbon::now()->format('m'))->where('shopId',Auth::user()->shopId)->update([
            'paymentStatus'=>1,
            'netAmount'=> $netAmountCal
        ]);
    }
}
else{
    $netAmount=SalarySheet::where('employeeId',$request->employeeId)->where('salaryStartMonth',$request->month)->where('salaryStartYear',$request->year)->where('shopId',Auth::user()->shopId)->first();
    $netAmountCal= $netAmount->netAmount-$request->payAmount;
    if($request->dueAmount>0){
      
        SalarySheet::where('employeeId',$request->employeeId)->where('salaryStartMonth',$request->month)->where('salaryStartYear',$request->year)->where('shopId',Auth::user()->shopId)->update([
            'paymentStatus'=>2,
            'netAmount'=> $netAmountCal
        ]);
    }else{
    SalarySheet::where('employeeId',$request->employeeId)->where('salaryStartMonth',$request->month)->where('salaryStartYear',$request->year)->where('shopId',Auth::user()->shopId)->update([
        'paymentStatus'=>1,
        'netAmount'=> $netAmountCal
    ]);
}
}



$accountCode = StartSalarySetup::where('employeEntryId',$request->employeeId)->first()->accountCode;
$referance = 'Emp-'.$request->employeeId;
$companyAccountCode = $accountCode;
$companyAccountHeadCode = ChartOfAccountRegister::where('headCode',$companyAccountCode)->first()->pre_code;
$rendomNumber = time();


// ==========================================================


if($request->paymentType==1 || $request->paymentType==2){

    if(StatementInformation::where('createBy',Auth::user()->id)
    ->where('advanceSecurityDepositPrepayment',0)
    ->where('accountCode',$companyAccountCode)->exists()){
        $balanceAmountDb = StatementInformation::where('createBy',Auth::user()->id)
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
        $expenseTitle = 'Employee Salary Cash Payment';
    }else if($request->paymentType==2){
        $balanceAmount = $balanceAmountDb+$request->bankAmount;
        $expenseTitle = 'Employee Salary  Bank Payment';
        $dr_cr_amount = $request->bankAmount;
    }
    
    StatementInformation::insert([
        'shopId' => Auth::user()->shopId,
        'rendomNumber' => $rendomNumber,
        'type' => 1,
        'accountHeadCode' => $companyAccountHeadCode,
        'accountCode' => $companyAccountCode,
        'title' => $expenseTitle,
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
        'note' => $expenseTitle,
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
            if($request->paymentType==1){
                $voucherAmount = $request->cashAmount;
            }else if($request->paymentType==2){
                $voucherAmount = $request->bankAmount;
            }
            
              
                    $headCode1 = $accountCode;
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
                      'shopId' => Auth::user()->id,
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
                      'shopId' => Auth::user()->id, 
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
                      'shopId' => Auth::user()->id,
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
    
                    if(ReceivePaymentStatement::where('shopId',Auth::user()->id)
                    ->where('shopId',Auth::user()->id)
                    ->where('type',2)
                    ->orderBy('id','DESC')
                    ->exists()){
                        $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->id)
                    ->where('shopId',Auth::user()->id)
                    ->where('type',2)
                    ->orderBy('id','DESC')
                    ->first()->total;
                    }else{
                        $last_amount = 0;
                    }
                    $last_rp_total = $last_amount+$voucherAmount;
    
                    ReceivePaymentStatement::insert([
                        'shopId' => Auth::user()->id,
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
    
    
                    if(ReceivePaymentStatement::where('shopId',Auth::user()->id)
                    ->where('shopId',Auth::user()->id)
                    ->where('type',1)
                    ->orderBy('id','DESC')
                    ->exists()){
                        $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->id)
                    ->where('shopId',Auth::user()->id)
                    ->where('type',1)
                    ->orderBy('id','DESC')
                    ->first()->total;
                    }else{
                        $last_amount = 0;
                    }
                    $last_rp_total = $last_amount+$voucherAmount;
                    
                    ReceivePaymentStatement::insert([
                        'shopId' => Auth::user()->id,
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
    
    
                    if(ReceivePaymentStatement::where('shopId',Auth::user()->id)
                    ->where('shopId',Auth::user()->id)
                    ->where('type',2)
                    ->orderBy('id','DESC')
                    ->exists()){
                        $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->id)
                    ->where('shopId',Auth::user()->id)
                    ->where('type',2)
                    ->orderBy('id','DESC')
                    ->first()->total;
                    }else{
                        $last_amount = 0;
                    }
                    $last_rp_total = $last_amount+$voucherAmount;
                    
                    ReceivePaymentStatement::insert([
                        'shopId' => Auth::user()->id,
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
    
                    if(ReceivePaymentStatement::where('shopId',Auth::user()->id)
                    ->where('shopId',Auth::user()->id)
                    ->where('type',1)
                    ->orderBy('id','DESC')
                    ->exists()){
                        $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->id)
                    ->where('shopId',Auth::user()->id)
                    ->where('type',1)
                    ->orderBy('id','DESC')
                    ->first()->total;
                    }else{
                        $last_amount = 0;
                    }
                    $last_rp_total = $last_amount+$voucherAmount;
                    
                    ReceivePaymentStatement::insert([
                        'shopId' => Auth::user()->id,
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
