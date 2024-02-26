<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
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
use App\RelationTableList;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;


class expenseController extends Controller
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
        $data = ExpenseInformationEntry::where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data];
    }


    
    public function getExpenseInvoiceInformation($id)
    {
       
       $data = ExpenseInformationEntry::where('id',$id)->first();
       $purchaseInvoiceNo = ExpenseInformationEntry::where('id',$id)->first()->rendomNumber;
       $purpousId = ExpenseInformationEntry::where('id',$id)->first()->expensePurpous;
       $productSupplierId = ExpenseProviderEntry::where('id',$purpousId)->first()->expenseProviderId;
       $invoiceProductLists = ExpenseDetailsItem::where('rendomNumber',$purchaseInvoiceNo)->get();
       $supplierInfo = IncomeExpenseCompany::where('id',$productSupplierId)->first();
        
        //    $purchaseProductList = ProductName::get();
        //    $purchaseType = PurchaseType::get();
        //    $productBrandList = ProductBrandEntry::get();
        //    $countryList = Country::get();
        //    $unitList = UniteEntry::get();

 

       return [
           
                // 'countryList' => $countryList,
                // 'purchaseType' => $purchaseType,
                // 'productBrandList' => $productBrandList,
                'data' => $data,
                'invoiceProductLists' => $invoiceProductLists,
                'supplierInfo' => $supplierInfo,
                // 'purchaseProductList' => $purchaseProductList,
             ];
    }

    public function addExpenseDetailsItem($rendomNumber,$expensePurpous,$item,$itemAmount){
        $rendomNumber = substr($rendomNumber,0,12);
        $insert = ExpenseDetailsItem::insert([
            'shopId' => Auth::user()->shopId,
            'rendomNumber' => $rendomNumber,
            'expensePurpous' => $expensePurpous,
            'item' => $item,
            'itemAmount' => $itemAmount,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);

        if($insert){
        return ['status'=>1];
        }
        else{
        return ['status'=>0];
        }

    }
    public function deleteExpenseDetailsItem($id){
         
        $delete = ExpenseDetailsItem::where('id',$id)->delete();

        if($delete){
        return ['status'=>1];
        }
        else{
        return ['status'=>0];
        }

    }

    public function getExpenseDetailsListById($expensePurpousId){
        
        $data = ExpenseDetailsItem::
        where('expensePurpous',$expensePurpousId)
        ->where('shopId',Auth::user()->shopId)
        ->where('status',1)
        ->get();
        
        
        $totalAmount = ExpenseDetailsItem::
        where('expensePurpous',$expensePurpousId)
        ->where('shopId',Auth::user()->shopId)
        ->where('status',1)
        ->sum('itemAmount');

 
        return [
            'data'=>$data,
            'totalAmount'=>$totalAmount,
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
            'expenseType' => 'required',
            'expenseHead' => 'required', 
            'expensePurpous' => 'required', 
            'expenseTitle' => 'required', 
            'paymentType' => 'required', 
            'expenseAmount' => 'required|numeric|min:1', 
        ],
        [
        //   'headCode.required' => 'Enter Head Code',
        ]);



        $companyId = ExpenseProviderEntry::where('id',$request->expensePurpous)->first()->expenseProviderId;
        $referance = 'IEC-'.$companyId;
        $companyAccountCode = ExpenseProviderEntry::where('id',$request->expensePurpous)->first()->accountCode;
        $companyAccountHeadCode = ChartOfAccountRegister::where('headCode',$companyAccountCode)->first()->pre_code;
        
        $rendomNumber = substr($request->rendomNumber,0,12);
        
        ExpenseInformationEntry::insert([
            'shopId' => Auth::user()->shopId,
            'rendomNumber' => $rendomNumber,
            'expenseType' => $request->expenseType,
            'expenseHead' => $request->expenseHead,
            'expensePurpous' => $request->expensePurpous,
            'expenseCompanyId' => $companyId,
            'expenseTitle' => $request->expenseTitle,
            'expenseAmount' => $request->expenseAmount,
            'paymentType' => $request->paymentType,
            'cashAmount' => $request->cashAmount,
            'personName' => $request->personName,
            'personMobileNo' => $request->personMobileNo,
            'bankAmount' => $request->bankAmount,
            'bankTypeEntryId' => $request->bankTypeEntryId,
            'bankEntryId' => $request->bankEntryId,
            'bankAccountId' => $request->bankAccountId,
            'dueAmount' => $request->dueAmount,
            'note' => $request->note,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);


        
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

        $balanceAmount = $balanceAmountDb-$request->expenseAmount;


        
        StatementInformation::insert([
            
            'shopId' => Auth::user()->shopId,
            'rendomNumber' => $rendomNumber,
            'type' => 0,
            'accountHeadCode' => $companyAccountHeadCode,
            'accountCode' => $companyAccountCode,
            'referance' => $referance,
            'title' => $request->expenseTitle,
            'paymentType' => 0,
            'cashAmount' => 0,
            'personName' => $request->personName,
            'personMobileNo' => $request->personMobileNo,
            'bankAmount' => 0,
            'bankTypeEntryId' => $request->bankTypeEntryId,
            'bankEntryId' => $request->bankEntryId,
            'bankAccountId' => $request->bankAccountId,
            'dueAmount' => $request->dueAmount,
            'creditAmount' => $request->expenseAmount,
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
            $bankAmount = 0;
            $cashAmount = $request->cashAmount;

        }else if($request->paymentType==2){
            $balanceAmount = $balanceAmountDb+$request->bankAmount;
            $expenseTitle = 'Bank Payment';
            $dr_cr_amount = $request->bankAmount;
            $bankAmount = $request->bankAmount;
            $cashAmount = 0;
            
        }
        
        StatementInformation::insert([
            'shopId' => Auth::user()->shopId,
            'rendomNumber' => $rendomNumber,
            'type' => 1,
            'accountHeadCode' => $companyAccountHeadCode,
            'accountCode' => $companyAccountCode,
            'title' => $request->expenseTitle,
            'referance' => $referance,
            'paymentType' => $request->paymentType,
            'cashAmount' => $cashAmount,
            'personName' => $request->personName,
            'personMobileNo' => $request->personMobileNo,
            'bankAmount' => $bankAmount,
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



        ExpenseDetailsItem::
        where('rendomNumber',$rendomNumber)
        ->where('shopId',Auth::user()->shopId)
        ->update([
            'status' => 2,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);



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
                
                  
                        $headCode1 = ExpenseProviderEntry::where('id',$request->expensePurpous)->first()->accountCode;
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
        ExpenseInformationEntry::where('id',$id)->delete();
    }
}
