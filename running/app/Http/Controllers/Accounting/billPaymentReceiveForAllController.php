<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\IncomeExpenseCompany;
use App\IncomeProviderEntry;
use App\ChartOfAccount;
use App\ChartOfAccountRegister;
use App\AccountSetup;
use App\voucherType;
use App\voucherInformation;
use App\voucherInformationReport;
use App\ReceivePaymentStatement;
use App\expenceType;
use App\IncomeDetailsItem;
use App\IncomeInformationEntry;
use App\StatementInformation;
use App\BillPaymentReceive;
use App\ShopAddBankEntry;
use App\CompanyShareInformation;
use App\AdvancePayment;
use App\Models\Admin;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class billPaymentReceiveForAllController extends Controller
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
            'voucherType' => 'required',
            'lastBalance' => 'required|numeric|min:1', 
            'amount' => 'required|numeric|min:1',
            'paymentType' => 'required', 
            'dueAmount' => 'required', 
        ],
        [
        //   'headCode.required' => 'Enter Head Code',
        ]);

        // ------- available balance validation 

        // if($request->paymentType==1){    // cash
        //     $headCode = AccountSetup::where('placementType',28)->where('headName',107)->first()->headCode;
        // }

        // ------- /available balance validation 



        if($request->voucherType==1)
        {
            $title = 'Bill Payment';
        }
        else
        {
            $title = 'Bill Receive';
        }


        $rendomNumber = substr($request->rendomNumber,0,12);

        BillPaymentReceive::insert([
            'type' => $request->voucherType,
            'accountHeadCode' => $request->headOfAccounts,
            'accountCode' => $request->subHead,
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

 
// ================================== Statement Information =============
if(StatementInformation::where('shopId',Auth::user()->shopId)
->where('accountCode',$request->subHead)->exists()){
    $balanceAmountDb = StatementInformation::where('shopId',Auth::user()->shopId)
    ->where('accountCode',$request->subHead)->orderBy('id','DESC')->first()->balanceAmount;
    
}
else{
    $balanceAmountDb = 0;
}


 


if($request->voucherType==1){

    if($request->paymentType==1){
        $balanceAmount = $balanceAmountDb+$request->amount;
        $dr_cr_amount = $request->amount;
        $drcrFieldName = 'debitAmount';
        $paymentReceiveTitle = 'Cash Payment';
        $cashAmount = $request->amount;
        $bankAmount = 0;
    }
    else if($request->paymentType==2){
        $balanceAmount = $balanceAmountDb+$request->amount;
        $paymentReceiveTitle = 'Bank Payment';
        $drcrFieldName = 'debitAmount';
        $dr_cr_amount = $request->amount;
        $cashAmount = 0;
        $bankAmount = $request->amount;
        
    }

}else if($request->voucherType==2){

    if($request->paymentType==1){
        $balanceAmount = $balanceAmountDb-$request->amount;
        $dr_cr_amount = $request->amount;
        $drcrFieldName = 'creditAmount';
        $paymentReceiveTitle = 'Cash Recive';
        $cashAmount = $request->amount;
        $bankAmount = 0;
    }
    else if($request->paymentType==2){
        $balanceAmount = $balanceAmountDb-$request->amount;
        $paymentReceiveTitle = 'Bank Recive';
        $drcrFieldName = 'creditAmount';
        $dr_cr_amount = $request->amount;
        $cashAmount = 0;
        $bankAmount = $request->amount;
    }
}


$title .= ' '.$paymentReceiveTitle;



StatementInformation::insert([
    'shopId' => Auth::user()->shopId,
    'type' => $request->voucherType,
    'accountHeadCode' => $request->headOfAccounts,
    'accountCode' => $request->subHead,
    'title' => $title,
    'paymentType' => $request->paymentType,
    'cashAmount' => $cashAmount,
    'personName' => $request->personName,
    'personMobileNo' => $request->personMobileNo,
    'bankAmount' => $bankAmount,
    'bankTypeEntryId' => $request->bankTypeEntryId,
    'bankEntryId' => $request->bankEntryId,
    'bankAccountId' => $request->bankAccountId,
    'dueAmount' => $request->dueAmount,
    $drcrFieldName => $request->amount,
    'balanceAmount' => $balanceAmount,
    'note' => $request->note,
    'createBy' => Auth::user()->id,
    'shopId' => Auth::user()->shopId,
    'created_at' => Carbon::now(),
]);
}
// ================================== /Statement Information =============

      



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
                    $voucherAmount = $request->amount;
                }else if($request->paymentType==2){
                    $voucherAmount = $request->amount;
                }
                
                  
                        $headCode1 = $request->subHead;
                        $headOfAccounts =  $request->headOfAccounts;
                    
                    if($request->voucherType == 1)
                    {
                        if($request->paymentType==1){
                            $voucherType = 1;
                        }
                        else if($request->paymentType==2){
                            $voucherType = 3;
                        }
                    }
                    else if($request->voucherType == 2)
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
                        $headCode2 = AccountSetup::where('placementType','9')->where('headName','100')->first()->headCode;
                    }
                    else if($request->paymentType == 2)
                    {
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
                    
                    if($request->voucherType==1){
                    $debitHeadCodeForBalance = 0;
                    $debitCodeForBalance = 0;
                    $creditHeadCodeForBalance = ChartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                    $creditCodeForBalance = $headCode2;
                    $vrTypeDr = 1;
                    $vrTypeCr = 2;
                    
                    }
                    else if($request->voucherType==2){
                        $debitHeadCodeForBalance = ChartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                        $debitCodeForBalance = $headCode2;
                        $creditHeadCodeForBalance = 0;
                        $creditCodeForBalance = 0;
                        $vrTypeDr = 2;
                        $vrTypeCr = 1;
                    }

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
                          'type' => $vrTypeDr,
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
                          'type' => $vrTypeCr,
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
                            'accountCode' => $headCode1,
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




    public function shareCapitalEntry(Request $request)
    {
        $this->validate($request, [
            'ownerTypeId' => 'required',
            'amount' => 'required|numeric|min:1',
            'paymentType' => 'required', 
        ],
        [
        //   'headCode.required' => 'Enter Head Code',
        ]);

        // ------- available balance validation 

        // if($request->paymentType==1){    // cash
        //     $headCode = AccountSetup::where('placementType',28)->where('headName',107)->first()->headCode;
        // }

        // ------- /available balance validation 



        if($request->ownerTypeId==1)
        {
            $title = 'Ordinary Share';
        }
        else
        {
            $title = 'Preference  Share';
        }


        $rendomNumber = substr($request->rendomNumber,0,12);

        CompanyShareInformation::insert([
            'type' => $request->ownerTypeId,
            'accountHeadCode' => $request->headOfAccounts,
            'accountCode' => $request->subHead,
            'lastBalance' => $request->lastBalance,
            'authorizeShare' => $request->authorizeShare,
            'amount' => $request->amount,
            'paymentType' => $request->paymentType,
            'personName' => $request->personName,
            'personMobileNo' => $request->personMobileNo,
            'bankTypeEntryId' => $request->bankTypeEntryId,
            'bankEntryId' => $request->bankEntryId,
            'bankAccountId' => $request->bankAccountId,
            'dueAmount' => $request->amount+$request->lastBalance,
            'note' => $request->note,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);

        $adminInfo = Admin::where('role',3)->where('shopId',Auth::user()->shopId)->first()->shareUse;
        $use = $adminInfo+$request->authorizeShare;
        Admin::where('role',3)->where('shopId',Auth::user()->shopId)->update([
            'shareUse' => $use,
        ]);


if(1){
        
 
// ==========================================================


if($request->paymentType==1 || $request->paymentType==2){

 
// ================================== Statement Information =============
if(StatementInformation::where('shopId',Auth::user()->shopId)
->where('accountCode',$request->subHead)->exists()){
    $balanceAmountDb = StatementInformation::where('shopId',Auth::user()->shopId)
    ->where('accountCode',$request->subHead)->orderBy('id','DESC')->first()->balanceAmount;
    
}
else{
    $balanceAmountDb = 0;
}


 



    if($request->paymentType==1){
        $balanceAmount = $balanceAmountDb-$request->amount;
        $dr_cr_amount = $request->amount;
        $drcrFieldName = 'creditAmount';
        $paymentReceiveTitle = 'Cash Receive';
        $cashAmount = $request->amount;
        $bankAmount = 0;
    }
    else if($request->paymentType==2){
        $balanceAmount = $balanceAmountDb-$request->amount;
        $paymentReceiveTitle = 'Bank Receive';
        $drcrFieldName = 'creditAmount';
        $dr_cr_amount = $request->amount;
        $cashAmount = 0;
        $bankAmount = $request->amount;
    }



$title .= ' '.$paymentReceiveTitle;



StatementInformation::insert([
    'shopId' => Auth::user()->shopId,
    'type' => 2,
    'accountHeadCode' => $request->headOfAccounts,
    'accountCode' => $request->subHead,
    'title' => $title,
    'paymentType' => $request->paymentType,
    'cashAmount' => $cashAmount,
    'personName' => $request->personName,
    'personMobileNo' => $request->personMobileNo,
    'bankAmount' => $bankAmount,
    'bankTypeEntryId' => $request->bankTypeEntryId,
    'bankEntryId' => $request->bankEntryId,
    'bankAccountId' => $request->bankAccountId,
    'dueAmount' => $request->amount+$request->lastBalance,
    $drcrFieldName => $request->amount,
    'balanceAmount' => $balanceAmount,
    'note' => $request->note,
    'createBy' => Auth::user()->id,
    'shopId' => Auth::user()->shopId,
    'created_at' => Carbon::now(),
]);
}
// ================================== /Statement Information =============

      



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
                    $voucherAmount = $request->amount;
                }else if($request->paymentType==2){
                    $voucherAmount = $request->amount;
                }
                
                  
                        $headCode1 = $request->subHead;
                        $headOfAccounts =  $request->headOfAccounts;
                    
                    if($request->ownerTypeId == 1)
                    {
                        if($request->paymentType==1){
                            $voucherType = 1;
                        }
                        else if($request->paymentType==2){
                            $voucherType = 3;
                        }
                    }
                    else if($request->ownerTypeId == 2)
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
                        $headCode2 = AccountSetup::where('placementType','9')->where('headName','100')->first()->headCode;
                    }
                    else if($request->paymentType == 2)
                    {
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
                    
                    // if($request->voucherType==1){

                    // $debitHeadCodeForBalance = 0;
                    // $debitCodeForBalance = 0;
                    // $creditHeadCodeForBalance = ChartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                    // $creditCodeForBalance = $headCode2;
                    // $vrTypeDr = 1;
                    // $vrTypeCr = 2;
                    
                    // }
                    // else if($request->voucherType==2){
                        $debitHeadCodeForBalance = ChartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                        $debitCodeForBalance = $headCode2;
                        $creditHeadCodeForBalance = 0;
                        $creditCodeForBalance = 0;
                        $vrTypeDr = 2;
                        $vrTypeCr = 1;
                    // }

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
                          'type' => $vrTypeDr,
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
                          'type' => $vrTypeCr,
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
                            'accountCode' => $headCode1,
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

public function advancePayment(Request $request)
    {
        $this->validate($request, [
            'voucherType' => 'required',
            'lastBalance' => 'required|numeric', 
            'amount' => 'required|numeric|min:1',
            'paymentType' => 'required', 
            'dueAmount' => 'required', 
        ],
        [
        //   'headCode.required' => 'Enter Head Code',
        ]);

        // ------- available balance validation 

        // if($request->paymentType==1){    // cash
        //     $headCode = AccountSetup::where('placementType',28)->where('headName',107)->first()->headCode;
        // }

        // ------- /available balance validation 



        if($request->voucherType==1)
        {
            $title = '';
        }
        else
        {
            $title = 'Bill Receive';
        }


        $rendomNumber = substr($request->rendomNumber,0,12);

        AdvancePayment::insert([
            'type' => $request->voucherType,
            'accountHeadCode' => $request->headOfAccounts,
            'accountCode' => $request->subHead,
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

 
// ================================== Statement Information =============
if(StatementInformation::where('shopId',Auth::user()->shopId)
->where('accountCode',$request->subHead)->exists()){
    $balanceAmountDb = StatementInformation::where('shopId',Auth::user()->shopId)
    ->where('accountCode',$request->subHead)->orderBy('id','DESC')->first()->balanceAmount;
    
}
else{
    $balanceAmountDb = 0;
}


 


if($request->voucherType==1){

    if($request->paymentType==1){
        $balanceAmount = $balanceAmountDb+$request->amount;
        $dr_cr_amount = $request->amount;
        $drcrFieldName = 'debitAmount';
        $paymentReceiveTitle = 'Cash Advance Payment';
        $cashAmount = $request->amount;
        $bankAmount = 0;
    }
    else if($request->paymentType==2){
        $balanceAmount = $balanceAmountDb+$request->amount;
        $paymentReceiveTitle = 'Bank Advance Payment';
        $drcrFieldName = 'debitAmount';
        $dr_cr_amount = $request->amount;
        $cashAmount = 0;
        $bankAmount = $request->amount;
        
    }

}else if($request->voucherType==2){

    if($request->paymentType==1){
        $balanceAmount = $balanceAmountDb-$request->amount;
        $dr_cr_amount = $request->amount;
        $drcrFieldName = 'creditAmount';
        $paymentReceiveTitle = 'Cash Receive';
        $cashAmount = $request->amount;
        $bankAmount = 0;
    }
    else if($request->paymentType==2){
        $balanceAmount = $balanceAmountDb-$request->amount;
        $paymentReceiveTitle = 'Bank Receive';
        $drcrFieldName = 'creditAmount';
        $dr_cr_amount = $request->amount;
        $cashAmount = 0;
        $bankAmount = $request->amount;
    }
}


$title .= ' '.$paymentReceiveTitle;



StatementInformation::insert([
    'shopId' => Auth::user()->shopId,
    'type' => $request->voucherType,
    'accountHeadCode' => $request->headOfAccounts,
    'accountCode' => $request->subHead,
    'title' => $title,
    'paymentType' => $request->paymentType,
    'cashAmount' => $cashAmount,
    'personName' => $request->personName,
    'personMobileNo' => $request->personMobileNo,
    'bankAmount' => $bankAmount,
    'bankTypeEntryId' => $request->bankTypeEntryId,
    'bankEntryId' => $request->bankEntryId,
    'bankAccountId' => $request->bankAccountId,
    'dueAmount' => $request->dueAmount,
    $drcrFieldName => $request->amount,
    'balanceAmount' => $balanceAmount,
    'note' => $request->note,
    'createBy' => Auth::user()->id,
    'shopId' => Auth::user()->shopId,
    'created_at' => Carbon::now(),
]);
}
// ================================== /Statement Information =============

      



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
                    $voucherAmount = $request->amount;
                }else if($request->paymentType==2){
                    $voucherAmount = $request->amount;
                }
                
                  
                        $headCode1 = $request->subHead;
                        $headOfAccounts =  $request->headOfAccounts;
                    
                    if($request->voucherType == 1)
                    {
                        if($request->paymentType==1){
                            $voucherType = 1;
                        }
                        else if($request->paymentType==2){
                            $voucherType = 3;
                        }
                    }
                    else if($request->voucherType == 2)
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
                        $headCode2 = AccountSetup::where('placementType','9')->where('headName','100')->first()->headCode;
                    }
                    else if($request->paymentType == 2)
                    {
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
                    
                    if($request->voucherType==1){
                    $debitHeadCodeForBalance = 0;
                    $debitCodeForBalance = 0;
                    $creditHeadCodeForBalance = ChartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                    $creditCodeForBalance = $headCode2;
                    $vrTypeDr = 1;
                    $vrTypeCr = 2;
                    
                    }
                    else if($request->voucherType==2){
                        $debitHeadCodeForBalance = ChartOfAccountRegister::where('headCode',$headCode2)->first()->pre_code;
                        $debitCodeForBalance = $headCode2;
                        $creditHeadCodeForBalance = 0;
                        $creditCodeForBalance = 0;
                        $vrTypeDr = 2;
                        $vrTypeCr = 1;
                    }

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
                          'type' => $vrTypeDr,
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
                          'type' => $vrTypeCr,
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
                            'accountCode' => $headCode1,
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
