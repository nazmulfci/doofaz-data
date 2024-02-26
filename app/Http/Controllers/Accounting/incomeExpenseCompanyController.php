<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\IncomeExpenseCompany;
use App\ExpenseProviderEntry;
use App\IncomeProviderEntry;
use App\voucherInformation;
use App\voucherInformationReport;
use App\voucherType;
use App\ChartOfAccount;
use App\ChartOfAccountRegister;
use App\StatementInformation;
use App\LoanProviderEntry;
use App\IncomeTarget;
use App\ExpenseBudget;
use App\ShopAddAssetSupplierEntry;
use App\ShopEmployeeEntry;
use App\StartSalarySetup;
use App\AddProductSupplierEntry;
use App\SalesCustomerEntry;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon; 

class incomeExpenseCompanyController extends Controller
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
        $data = IncomeExpenseCompany::where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->get();
        return  ['data' => $data];
    }
 
    public function getIncomeExpenseCompanyLastBalance($id)
    {

        $referance = 'IEC-'.$id;
         if(StatementInformation::where('shopId',Auth::user()->shopId)->where('referance',$referance)->orderBy('id','DESC')->exists()){
            $balance = StatementInformation::where('shopId',Auth::user()->shopId)->where('referance',$referance)->orderBy('id','DESC')->first()->balanceAmount;
         }
         else{
                $balance = 0;
            }

            $balance = abs($balance);
            
        return  ['balance' => $balance];
    }
 
    public function getLastBalanceByAccCode($id)
    {

        $precode = ChartOfAccountRegister::where('headCode',$id)->first()->pre_code;
        $headAcc = ChartOfAccount::where('headCode',$precode)->get();


         if(StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$id)->orderBy('id','DESC')->exists()){
            $balance = StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$id)->orderBy('id','DESC')->first()->balanceAmount;
         }
         else{
                $balance = 0;
            }

            $balance = abs($balance);
            // if($balance<0){
            //     $balance = $balance;
            // }
            // else{
            //     $balance = 0;
            // }
            
        return  [
            'balance' => $balance,
            'precode' => $precode,
            'headAcc' => $headAcc,
        ];
    }
 
    public function getLastBalanceByAccCodePurchase($id)
    {

        $precode = ChartOfAccountRegister::where('headCode',$id)->first()->pre_code;
        $headAcc = ChartOfAccount::where('headCode',$precode)->get();


         if(StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$id)->orderBy('id','DESC')->exists()){
            $balance = StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$id)->orderBy('id','DESC')->first()->balanceAmount;
         }
         else
         {
            $balance = 0;
         }

            // $balance = abs($balance);
            if($balance>0){
                $balance = -$balance;
            }
            else{
                $balance = abs($balance);
            }
            
        return  [
            'balance' => $balance,
            'precode' => $precode,
            'headAcc' => $headAcc,
        ];
    }
 
    public function getLastBalanceByAccCodeAdvPayment($id)
    {

        $precode = ChartOfAccountRegister::where('headCode',$id)->first()->pre_code;
        $headAcc = ChartOfAccount::where('headCode',$precode)->get();


         if(StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$id)->orderBy('id','DESC')->exists()){
            $balance = StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$id)->orderBy('id','DESC')->first()->balanceAmount;
         }
         else{
                $balance = 0;
            }

            if($balance>0){
            $balance = -$balance;
            }
            else{
                $balance = $balance;
            }
            
        return  [
            'balance' => $balance,
            'precode' => $precode,
            'headAcc' => $headAcc,
        ];
    }
 
    public function getIncomeExpenseCompanyByIEType($id)
    {
        if($id==1){
            $data = IncomeExpenseCompany::where('shopId',Auth::user()->shopId)->where('expenseAccountCode','>','0')->get();
        }
        else if($id==2){
            $data = IncomeExpenseCompany::where('shopId',Auth::user()->shopId)->where('incomeAccountCode','>','0')->get();
        }

        return  ['data' => $data];
    }
 
    public function getIncomeExpenseCompanyFrom($id)
    {
        $data = IncomeExpenseCompany::where('shopId',Auth::user()->shopId)->where('id',$id)->first();
        return  ['data' => $data];
    }
 
    public function getIncomeExpenseCompany($id)
    {
        $incomeExpenseCompanyId = ExpenseProviderEntry::where('shopId',Auth::user()->shopId)->where('id',$id)->first()->expenseProviderId;
        $data = IncomeExpenseCompany::where('shopId',Auth::user()->shopId)->where('id',$incomeExpenseCompanyId)->first();

        $budget = ExpenseBudget::where('shopId',Auth::user()->shopId)->where('expensePurpous',$id)
        ->where('expenseCompanyId',$incomeExpenseCompanyId)
        ->orderBy('id','DESC')
        ->first()
        ->expenseAmount;

        return  [
            'data' => $data,
            'budget' => $budget,
        ];
    }
 
    public function getIncomeExpenseCompanyInformation($id)
    {
        $data = IncomeExpenseCompany::where('shopId',Auth::user()->shopId)->where('id',$id)->first();
        $incomeAccountCode = IncomeExpenseCompany::where('shopId',Auth::user()->shopId)->where('id',$id)->first()->incomeAccountCode;
        if($incomeAccountCode){
            $incomeAccountPreCode = ChartOfAccountRegister::where('shopId',Auth::user()->shopId)->where('headCode',$incomeAccountCode)->first()->pre_code;
        }
        $expenseAccountCode = IncomeExpenseCompany::where('shopId',Auth::user()->shopId)->where('id',$id)->first()->expenseAccountCode;
        if($expenseAccountCode){
            $expenseAccountPreCode = ChartOfAccountRegister::where('shopId',Auth::user()->shopId)->where('headCode',$expenseAccountCode)->first()->pre_code;
        }

      
    //    get this company voucher list

        $voucherInformationReport = voucherInformationReport::query();
        $voucherInformationReport = $voucherInformationReport->where('shopId',Auth::user()->shopId);
        $voucherInformationReport = $voucherInformationReport->distinct();

        if($incomeAccountCode && $expenseAccountCode){
            $in = $incomeAccountCode.','.$expenseAccountCode;
        }
        else if($incomeAccountCode){
            $in = $incomeAccountCode;
        }
        else if($expenseAccountCode){
            $in = $expenseAccountCode;
        }

        if($in){
            $voucherInformationReport = $voucherInformationReport->whereRaw("accountsCode IN($in)");
        }
      
        $voucherInformationReport = $voucherInformationReport->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->get('voucherNo');

        $voucherInformationReportCount = count($voucherInformationReport);
        $iReport = 1;
        $voucherNos = '';
        foreach($voucherInformationReport as $voucherInformationReports){

            if($iReport==$voucherInformationReportCount){
                $voucherNos .= $voucherInformationReports->voucherNo;
            }else{
                $voucherNos .= $voucherInformationReports->voucherNo.',';
            }

            $iReport++;
        }

        $voucherInformation = voucherInformation::where('shopId',Auth::user()->shopId)->whereRaw("voucherNo IN('$voucherNos')")->get();

        //  // get this company voucher list



        // get this company voucher types

        $voucherInformationForVoucherType = voucherInformation::where('shopId',Auth::user()->shopId)->distinct()->whereRaw("voucherNo IN('$voucherNos')")->get('voucherType');
        $ivtype = 1;
        $voucherTypes = '';
        $vtypeCount = count($voucherInformationForVoucherType);
        foreach($voucherInformationForVoucherType as $voucherInformationForVoucherTypes){

            if($ivtype==$vtypeCount){
                $voucherTypes .= $voucherInformationForVoucherTypes->voucherType;
            }else{
                $voucherTypes .= $voucherInformationForVoucherTypes->voucherType.',';
            }
            $ivtype++;
        }
        $voucherType = voucherType::whereRaw("id IN('$voucherTypes')")->get();

        //  //get this company voucher types




        //  get this company voucher main head list
        
        if($incomeAccountCode && $expenseAccountCode){
            $headCodes = $incomeAccountPreCode.','.$expenseAccountPreCode;
        }
        else if($incomeAccountCode){
            $headCodes = $incomeAccountPreCode;
        }
        else if($expenseAccountCode){
            $headCodes = $expenseAccountPreCode;
        }
        $mainHeadList = ChartOfAccount::whereRaw("headCode IN($headCodes)")->get();

        //  //get this company voucher main head list



        return[
            'data' => $data,
            'voucherInformation' => $voucherInformation,
            'list' => $voucherType,
            'mainHeadList' => $mainHeadList,
        ];
    }
 
 
    public function getLoanProviderVoucherInformation($id)
    {
        $data = LoanProviderEntry::where('shopId',Auth::user()->shopId)->where('id',$id)->first();
        $incomeAccountCode = LoanProviderEntry::where('shopId',Auth::user()->shopId)->where('id',$id)->first()->accountCode;
        if($incomeAccountCode){
            $incomeAccountPreCode = ChartOfAccountRegister::where('headCode',$incomeAccountCode)->first()->pre_code;
        }
       

      
    //    get this company voucher list

        $voucherInformationReport = voucherInformationReport::query();
        $voucherInformationReport = $voucherInformationReport->where('shopId',Auth::user()->shopId);
        $voucherInformationReport = $voucherInformationReport->distinct();

         
        $in = $incomeAccountCode;
         

        if($in){
            $voucherInformationReport = $voucherInformationReport->whereRaw("accountsCode IN($in)");
        }
      
        $voucherInformationReport = $voucherInformationReport->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->get('voucherUniqueId');

        $voucherInformationReportCount = count($voucherInformationReport);
        $iReport = 1;
        $voucherNos = '';
        foreach($voucherInformationReport as $voucherInformationReports){

            if($iReport==$voucherInformationReportCount){
                $voucherNos .= $voucherInformationReports->voucherUniqueId;
            }else{
                $voucherNos .= $voucherInformationReports->voucherUniqueId.',';
            }

            $iReport++;
        }

        $voucherInformation = voucherInformation::where('shopId',Auth::user()->shopId)->whereRaw("voucherUniqueId IN($voucherNos)")->get();

        //  // get this company voucher list



        // get this company voucher types

        $voucherInformationForVoucherType = voucherInformation::where('shopId',Auth::user()->shopId)->distinct()->whereRaw("voucherUniqueId IN($voucherNos)")->get('voucherType');
        $ivtype = 1;
        $voucherTypes = '';
        $vtypeCount = count($voucherInformationForVoucherType);
        foreach($voucherInformationForVoucherType as $voucherInformationForVoucherTypes){

            if($ivtype==$vtypeCount){
                $voucherTypes .= $voucherInformationForVoucherTypes->voucherType;
            }else{
                $voucherTypes .= $voucherInformationForVoucherTypes->voucherType.',';
            }
            $ivtype++;
        }
        $voucherType = voucherType::whereRaw("id IN($voucherTypes)")->get();

        //  //get this company voucher types




        //  get this company voucher main head list
        
        
            $headCodes = $incomeAccountPreCode;
         
        $mainHeadList = ChartOfAccount::whereRaw("headCode IN($headCodes)")->get();

        //  //get this company voucher main head list



        return[
            'data' => $data,
            'voucherInformation' => $voucherInformation,
            'list' => $voucherType,
            'mainHeadList' => $mainHeadList,
        ];
    }
 
 
    public function searchIncomeExpenseCompany(request $request)
    {
        
        if(Auth::guard('admin')->check()){


            $datas = IncomeExpenseCompany::query();
            $datas = $datas->where('shopId',Auth::user()->shopId);

            if($request->type){
                $datas = $datas->where('type',$request->type);
            }

            if($request->companyName){
                
                $datas = $datas->Where('companyName','LIKE','%'.$request->companyName.'%');
            }

            if($request->mobileNo){
                
                $datas = $datas->Where('mobileNo','LIKE','%'.$request->mobileNo.'%');
            }

            $datas = $datas->get();
            
        } // auth condition 


        return ['data' => $datas];
    }
 
 
    public function searchDueRegister(request $request)
    {
        
        if(Auth::guard('admin')->check()){


            $coars = ChartOfAccountRegister::query();
            $coars = $coars->where('shopId',Auth::user()->shopId);
            
            if($request->headOfAccounts){
            $coars = $coars->where('pre_code',$request->headOfAccounts);
            }
            
            if($request->subHead){
            $coars = $coars->where('headCode',$request->subHead);
            }

            $coars = $coars->get();

            $datas = '';
            $i=1;
            foreach($coars as $coar){


                if(StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$coar->headCode)->orderBy('id','DESC')->exists())
                    {
                        $lastBalance = abs(StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$coar->headCode)->orderBy('id','DESC')->first()->balanceAmount);    
                    }
                    else
                    {
                        $lastBalance = 0;
                    }

                    if($lastBalance){
                $datas .= '<tr>';

                $datas .= '<td>';
                $datas .= $i;
                $datas .= '</td>';

                $datas .= '<td>';
                $datas .= ChartOfAccount::where('headCode',$request->headOfAccounts)->first()->headName;
                $datas .= '</td>';



                $datas .= '<td>';
                $datas .= $coar->headName;
                $datas .= '</td>';

                $datas .= '<td>';
                    
                $datas .= $lastBalance;
                $datas .= '</td>';

                //$datas .= '<td>';
                // $datas .= '<a href="/billPayReceive@Edit/'.$coar->headCode.'" class="btn btn-primary"> Pay Now </a>';
                //$datas .= '</td>';

                $datas .= '</tr>';
                    }

                $i++;
            }
            
        } // auth condition 


        return ['data' => $datas];
    }
 
    public function getIncomeExpenseCompanyIncome($id)
    {
        $incomeExpenseCompanyId = IncomeProviderEntry::where('shopId',Auth::user()->shopId)->where('id',$id)->first()->incomeProviderId;
        $data = IncomeExpenseCompany::where('shopId',Auth::user()->shopId)->where('id',$incomeExpenseCompanyId)->first();

        $target = IncomeTarget::where('shopId',Auth::user()->shopId)->
        where('incomePurpous',$id)
        ->where('incomeCompanyId',$incomeExpenseCompanyId)
        ->orderBy('id','DESC')
        ->first()->incomeAmount;
        return  [
            'target' => $target,
            'data' => $data,
        ];
    }
 
    public function getIncomeExpenseCompanyExpense($id)
    {
        $data = IncomeExpenseCompany::where('shopId',Auth::user()->shopId)->where('id',$id)->first();
        return  ['data' => $data];
    }


    
    public function getEmployeeStatementInformation($id)
    {
        
        $employee = ShopEmployeeEntry::where('shopId',Auth::user()->shopId)->where('shopEmployeeEntryId',$id)->first();
        $accountCode = StartSalarySetup::where('shopId',Auth::user()->shopId)->where('employeEntryId',$id)->first()->accountCode;


        $statementList = StatementInformation::
            whereRaw("accountCode IN($accountCode)")
            ->where('shopId',Auth::user()->shopId)
            ->get();

        return [
            'statementList' => $statementList,
            'employee' => $employee,
        ];
    }

    

    
    public function getAssetSupplierStatementInformation($id)
    {
        
        $supplier = ShopAddAssetSupplierEntry::where('shopId',Auth::user()->shopId)->where('assetSupplierId',$id)->first();
        $accountCode = $supplier->accountCode;


        $statementList = StatementInformation::
            whereRaw("accountCode IN($accountCode)")
            ->where('shopId',Auth::user()->shopId)
            ->get();

        return [
            'statementList' => $statementList,
            'supplier' => $supplier,
        ];
    }
    
    public function getProductSupplierStatementInformation($id)
    {
        
        $supplier = AddProductSupplierEntry::where('shopId',Auth::user()->shopId)->where('productSupplierId',$id)->first();
        $accountCode = $supplier->accountCode;


        $statementList = StatementInformation::
            whereRaw("accountCode IN($accountCode)")
            ->where('shopId',Auth::user()->shopId)
            ->get();
        $totalDr = StatementInformation::
            whereRaw("accountCode IN($accountCode)")
            ->where('shopId',Auth::user()->shopId)
            ->sum('debitAmount');
        $totalCr = StatementInformation::
            whereRaw("accountCode IN($accountCode)")
            ->where('shopId',Auth::user()->shopId)
            ->sum('creditAmount');
        $totalBl = StatementInformation::
            whereRaw("accountCode IN($accountCode)")
            ->orderBy('id','DESC')
            ->where('shopId',Auth::user()->shopId)
            ->first()->balanceAmount;

        return [
            'statementList' => $statementList,
            'supplier' => $supplier,
            'totalDr' => $totalDr,
            'totalCr' => $totalCr,
            'totalBl' => $totalBl,
        ];
    }
    
    public function getCustomerStatementInformation($id)
    {
        
        $customer = SalesCustomerEntry::where('shopId',Auth::user()->shopId)->where('SalesCustomerEntryId',$id)->first();
        $accountCode = $customer->accountCode;


        $statementList = StatementInformation::
            whereRaw("accountCode IN($accountCode)")
            ->where('shopId',Auth::user()->shopId)
            ->get();

        $totalDr = StatementInformation::
            whereRaw("accountCode IN($accountCode)")
            ->where('shopId',Auth::user()->shopId)
            ->sum('debitAmount');

        $totalCr = StatementInformation::
            whereRaw("accountCode IN($accountCode)")
            ->where('shopId',Auth::user()->shopId)
            ->sum('creditAmount');

        $totalBl = StatementInformation::
            whereRaw("accountCode IN($accountCode)")
            ->where('shopId',Auth::user()->shopId)
            ->orderBy('id','DESC')
            ->first()->balanceAmount;

        return [
            'statementList' => $statementList,
            'supplier' => $customer,
            'totalDr' => $totalDr,
            'totalCr' => $totalCr,
            'totalBl' => $totalBl,
        ];
    }

    
    public function getIncomeExpenseInvoiceInformation($id)
    {
        
        $data = IncomeExpenseCompany::where('shopId',Auth::user()->shopId)->where('id',$id)->first();
        $incomeAccountCode = IncomeExpenseCompany::where('shopId',Auth::user()->shopId)->where('id',$id)->first()->incomeAccountCode;
        if($incomeAccountCode){
            $incomeAccountPreCode = ChartOfAccountRegister::where('shopId',Auth::user()->shopId)->where('headCode',$incomeAccountCode)->first()->pre_code;
        }
        $expenseAccountCode = IncomeExpenseCompany::where('shopId',Auth::user()->shopId)->where('id',$id)->first()->expenseAccountCode;
        if($expenseAccountCode){
            $expenseAccountPreCode = ChartOfAccountRegister::where('shopId',Auth::user()->shopId)->where('headCode',$expenseAccountCode)->first()->pre_code;
        }

      
        //    get this company voucher list

        $voucherInformationReport = voucherInformationReport::query();
        $voucherInformationReport = $voucherInformationReport->where('shopId',Auth::user()->shopId);
        $voucherInformationReport = $voucherInformationReport->distinct();

        if($incomeAccountCode && $expenseAccountCode){
            $in = $incomeAccountCode.','.$expenseAccountCode;
        }
        else if($incomeAccountCode){
            $in = $incomeAccountCode;
        }
        else if($expenseAccountCode){
            $in = $expenseAccountCode;
        }

        if($in){
            $voucherInformationReport = $voucherInformationReport->whereRaw("accountsCode IN($in)");
        }
      
        $voucherInformationReport = $voucherInformationReport->orderBy('id','DESC')->get('voucherNo');

        $voucherInformationReportCount = count($voucherInformationReport);
        $iReport = 1;
        $voucherNos = '';
        foreach($voucherInformationReport as $voucherInformationReports){

            if($iReport==$voucherInformationReportCount){
                $voucherNos .= $voucherInformationReports->voucherNo;
            }else{
                $voucherNos .= $voucherInformationReports->voucherNo.',';
            }

            $iReport++;
        }

        $voucherInformation = voucherInformation::where('shopId',Auth::user()->shopId)->whereRaw("voucherNo IN('$voucherNos')")->get();

        //  // get this company voucher list



        // get this company voucher types

        $voucherInformationForVoucherType = voucherInformation::where('shopId',Auth::user()->shopId)->distinct()->whereRaw("voucherNo IN('$voucherNos')")->get('voucherType');
        $ivtype = 1;
        $voucherTypes = '';
        $vtypeCount = count($voucherInformationForVoucherType);
        foreach($voucherInformationForVoucherType as $voucherInformationForVoucherTypes){

            if($ivtype==$vtypeCount){
                $voucherTypes .= $voucherInformationForVoucherTypes->voucherType;
            }else{
                $voucherTypes .= $voucherInformationForVoucherTypes->voucherType.',';
            }
            $ivtype++;
        }
        $voucherType = voucherType::whereRaw("id IN('$voucherTypes')")->get();

        //  //get this company voucher types




        //  get this company voucher main head list
        
        if($incomeAccountCode && $expenseAccountCode){
            $headCodes = $incomeAccountPreCode.','.$expenseAccountPreCode;
        }
        else if($incomeAccountCode){
            $headCodes = $incomeAccountPreCode;
        }
        else if($expenseAccountCode){
            $headCodes = $expenseAccountPreCode;
        }
        $mainHeadList = ChartOfAccount::whereRaw("headCode IN($headCodes)")->get();

        //  //get this company voucher main head list




        $statementList = StatementInformation::
            whereRaw("accountCode IN($in)")
            ->where('shopId',Auth::user()->shopId)
            ->get();

        return[
            'data1' => $data,
            'voucherInformation' => $voucherInformation,
            'list' => $voucherType,
            'statementList' => $statementList,
            'mainHeadList' => $mainHeadList,
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
            'type' => 'required',
            'companyName' => 'required', 
            'mobileNo' => 'required', 
        ],
        [
        //   'headCode.required' => 'Enter Head Code',
        ]);


        IncomeExpenseCompany::insert([
            'shopId' => Auth::user()->shopId,
            'type' => $request->type,
            'companyName' => $request->companyName,
            'mobileNo' => $request->mobileNo,
            'email' => $request->email,
            'address' => $request->address,
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
        $data = IncomeExpenseCompany::where('id',$id)->get();
        return  ['data' => $data];
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

            if(IncomeProviderEntry::where('shopId',Auth::user()->shopId)->where('incomeProviderId',$id)->exists()){
                return ['delete' => 0];
            }
            else if(ExpenseProviderEntry::where('shopId',Auth::user()->shopId)->where('expenseProviderId',$id)->exists()){
                return ['delete' => 0];
            }
            else{
                IncomeExpenseCompany::where('shopId',Auth::user()->shopId)->where('id',$id)->delete();
                return ['delete' => 1];
            }
         }
}
