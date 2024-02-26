<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\LoanProviderType;
use App\LoanProviderEntry;
use App\AccountSetup;
use App\ChartOfAccount;
use App\ChartOfAccountRegister;
use App\LoanInterestType;
use App\LoanInterestTimeType;
use App\LoanPayType;
use App\PaymentType;
use App\ProviderLoanReceiveEntry;
use App\LoanProviderInstallmentHistory;



class loanProviderEntryController extends Controller
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
        $data4 = LoanProviderEntry::where('tableType','1')->where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data4];
    }


    public function getLoanProviderById($id)
    {
        $data4 = LoanProviderEntry::where('id',$id)->where('shopId',Auth::user()->shopId)->first();
        return ['data' => $data4];
    }


    public function getLoanProviderInfoLoanInfo($id)
    {
        $loanInfo = ProviderLoanReceiveEntry::where('id',$id)->where('shopId',Auth::user()->shopId)->first();
        $providerInfo = LoanProviderEntry::where('id',$loanInfo->loanProviderId)->where('shopId',Auth::user()->shopId)->first();
        return [
            'loanInfo' => $loanInfo,
            'providerInfo' => $providerInfo,
        ];
    }



    public function getLoanProviderWithLoanNpadiAmount()
    {
        $data4s = LoanProviderEntry::where('tableType','1')->where('shopId',Auth::user()->shopId)->get();
        $data = array();
        foreach($data4s as $data4){
            $totalLoan  =  ProviderLoanReceiveEntry::where('shopId',Auth::user()->shopId)->where('loanProviderId',$data4->id)->sum('loanMainAmount');
            $totalPaid  =  ProviderLoanReceiveEntry::where('shopId',Auth::user()->shopId)->where('loanProviderId',$data4->id)->sum('paidAmount');
            $data[] = array(
                "id" => $data4->id,
                "providerType" => $data4->providerType,
                "providerName" => $data4->providerName,
                "providerContactPersonMobileNo" => $data4->providerContactPersonMobileNo,
                "providerAddress" => $data4->providerAddress,
                "totalLoan" => $totalLoan,
                "totalPaid" => $totalPaid,
                "totalDue" => $totalLoan - $totalPaid,
                );
        }
        return ['data' => $data];
    }


    public function getLoanProviderTypeList(){
        $data3 = LoanProviderType::get();
        return ['data' => $data3];
    }

    public function getLoanProviderLoanInformation($type,$id){
 
 
            if($type){
                $data3 = ProviderLoanReceiveEntry::where('interestTimeType','<','5')->where('paidStatus','0')->where('loanProviderId',$id)->where('shopId',Auth::user()->shopId)->get();
            }
            else{
                $data3 = ProviderLoanReceiveEntry::where('loanProviderId',$id)->where('paidStatus','0')->where('shopId',Auth::user()->shopId)->get();
            }
         
            return ['data' => $data3];
         
    }




    
    public function getLoanProviderInformation($id){
        $data3 = ProviderLoanReceiveEntry::where('id',$id)->where('shopId',Auth::user()->shopId)->first();
        $interestType = LoanInterestType::where('id',$data3->interestType)->first()->name;
        
        if(LoanPayType::where('id',$data3->loanPayType)->exists()){
            $loanPayType = LoanPayType::where('id',$data3->loanPayType)->first()->name;
        }else{
            $loanPayType = '';
        }
        $loanPayTypeId = $data3->loanPayType;
        $interestTimeType = LoanInterestTimeType::where('id',$data3->interestTimeType)->first()->name;
        $howMuchTime = $data3->howMuchTime;
        $loanMainAmount = $data3->loanMainAmount;

        if(LoanProviderInstallmentHistory::where('loanId',$id)->orderBy('id','DESC')->exists()){
            $loanPaidAmount = LoanProviderInstallmentHistory::where('loanId',$id)->orderBy('id','DESC')->first()->totalPaidAmount;
            $loanDueAmount = LoanProviderInstallmentHistory::where('loanId',$id)->orderBy('id','DESC')->first()->dueAmount;  
        }
        else{
            $loanPaidAmount = 0;
            $loanDueAmount = $data3->loanMainAmount;
        }
        
        $monthlyAmount = $data3->monthlyAmount;
        $paidDate = $data3->paidDate;
        $bankAccountId = $data3->bankAccountId;

        return $data = [
            'interestType' => $interestType,
            'loanPayType' => $loanPayType,
            'loanPayTypeId' => $loanPayTypeId,
            'interestTimeType' => $interestTimeType,
            'howMuchTime' => $howMuchTime,
            'loanMainAmount' => $loanMainAmount,
            'monthlyAmount' => $monthlyAmount,
            'loanPaidAmount' => $loanPaidAmount,
            'loanDueAmount' => $loanMainAmount-$loanPaidAmount,
            'paidDate' => $paidDate,
            'bankAccountId' => $bankAccountId];
            // $loanDueAmount
         
    }


    public function loanProviderListById($tableId,$id){
        $data2 = LoanProviderEntry::where('tableType',$tableId)->where('providerType',$id)->where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data2];
    }


    public function getLoanProviderList(){
        $data2 = LoanProviderEntry::where('tableType','1')->where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data2];
    }


    public function getInterestTypeList($id){
        if($id==1){
            $data = LoanInterestType::limit(1)->get();
        }else{
            $data = LoanInterestType::get();
        }
        
        return ['data' => $data];
    }

    public function getInterestTimeTypeList(){
        $data1 = LoanInterestTimeType::get();
        return ['data' => $data1];
    }

    public function paymentTypeList(){
        $data1 = PaymentType::get();
        return ['data' => $data1];
    }

    public function getLoanPayTypeList($id){
        if($id==1){
        $data1 = LoanPayType::limit(1)->get();
        }
        else{
        $data1 = LoanPayType::get();
        }
        return ['data' => $data1];
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
            'personName' => 'required',
            'mobileNumber' => 'required',
            'address' => 'required',
            'status' => 'required',
        ],
        [
        //   'headCode.required' => 'Enter Head Code',
        //   'headName.required' => 'Enter Head Name',
        //   'headGroupType.required' => 'Enter Group Type',
        ]);


        // ============================================
            // =============== Chart Of Accounts ==========
            // ============================================


            ////////          sirial

            if(LoanProviderEntry::where('shopId',Auth::user()->shopId)->
            where('tableType','1')
            ->where('providerType',$request->loanProviderTypeId)
            ->orderBy('id','DESC')
            ->exists()){

            $noOfRow = LoanProviderEntry::where('shopId',Auth::user()->shopId)->
            where('tableType','1')
            ->where('providerType',$request->loanProviderTypeId)
            ->orderBy('id','DESC')
            ->first()->accountCodeSirial+1;

            }else{
                $noOfRow = 1;
            }

            ////////          /sirial 
            
            
            ////////          Previous Account Code   
            
            if($request->loanProviderTypeId==1){
                $code = AccountSetup::where('placementType',9)->where('headName',26)->first()->headCode;
            }
            else if($request->loanProviderTypeId==2){
                $code = AccountSetup::where('placementType',9)->where('headName',27)->first()->headCode;
            }
            else if($request->loanProviderTypeId==3){
                $code = AccountSetup::where('placementType',9)->where('headName',99)->first()->headCode;
            }
             
            ////////          /Previous Account Code 




            
            // $headNamePre= ChartOfAccount::where('headCode',$code)->first()->headName;
                          
            // $headNamePre= BankEntry::where('bankEntryId',$request->bankEntryId)->first()->bankName;
            
            // $temp = explode(' ', $headNamePre);
            // $headShortName = '';

            // foreach($temp as $t){
            //     $headShortName .= $t[0];
            // }
            
            
            // $headShortName = strtoupper($headShortName);
            $headShortName = LoanProviderType::where('id',$request->loanProviderTypeId)->first()->type;
                        
            if($request->loanProviderTypeId==1){
                $branch = '';
            }else{
                $branch = '('.$request->branchName.')';
            }

            $headName = 'Loan-'.$headShortName.'-'.$request->personName.' '.$branch;
            $lavel= ChartOfAccount::where('headCode',$code)->first()->headLavel+1;
            $dr_cr= ChartOfAccount::where('headCode',$code)->first()->dr_cr;
            $headGroupId= ChartOfAccount::where('headCode',$code)->first()->headGroupId;
            $headGroupType= ChartOfAccount::where('headCode',$code)->first()->headGroupType+1;
            $accCode = $code.str_pad($noOfRow,2, '0', STR_PAD_LEFT);
 

            ChartOfAccountRegister::insert([
                'shopId' => Auth::user()->shopId,
                'headGroupType' => $headGroupType,
                'headGroupId' => $headGroupId,
                'dr_cr' => $dr_cr,
                'pre_code' => $code,
                'headCode' => $accCode,
                'headName' => $headName,
                'headLavel' => $lavel,
                'lastCode' => 0,
                'status' => 1,
                'position' => 0,
                'autoCreate' => 0,
                'createBy' => Auth::user()->id,
                'created_at' => Carbon::now(),
            ]);

            // ============================================
            // =============== // Chart Of Accounts ==========
            // ============================================






            // ========================================================
            // =============== Chart Of Accounts for expense ==========
            // ========================================================


            ////////          sirial

            if(LoanProviderEntry::where('shopId',Auth::user()->shopId)->
            where('tableType','1')
            ->where('providerType',$request->loanProviderTypeId)
            ->orderBy('id','DESC')
            ->exists()){

            $noOfRow1 = LoanProviderEntry::where('shopId',Auth::user()->shopId)->
            where('tableType','1')
            ->where('providerType',$request->loanProviderTypeId)
            ->orderBy('id','DESC')
            ->first()->accountCodeSirial+1;

            }else{
                $noOfRow1 = 1;
            }

            ////////          /sirial 
            
            
            ////////          Previous Account Code   
            
            if($request->loanProviderTypeId==1){
                $code1 = AccountSetup::where('placementType',9)->where('headName',109)->first()->headCode;
            }
            else if($request->loanProviderTypeId==2){
                $code1 = AccountSetup::where('placementType',9)->where('headName',110)->first()->headCode;
            }
            else if($request->loanProviderTypeId==3){
                $code1 = AccountSetup::where('placementType',9)->where('headName',111)->first()->headCode;
            }
             
            ////////          /Previous Account Code 




            
            // $headNamePre= ChartOfAccount::where('headCode',$code)->first()->headName;
                          
            // $headNamePre= BankEntry::where('bankEntryId',$request->bankEntryId)->first()->bankName;
            
            // $temp = explode(' ', $headNamePre);
            // $headShortName = '';

            // foreach($temp as $t){
            //     $headShortName .= $t[0];
            // }
            
            
            // $headShortName = strtoupper($headShortName);
            $headShortName1 = LoanProviderType::where('id',$request->loanProviderTypeId)->first()->type;
                        
            if($request->loanProviderTypeId==1){
                $branch1 = '';
            }else{
                $branch1 = '('.$request->branchName.')';
            }

            $headName1 = 'Loan-'.$headShortName1.'-'.$request->personName.' '.$branch1;
            $lavel1= ChartOfAccount::where('headCode',$code1)->first()->headLavel+1;
            $dr_cr1= ChartOfAccount::where('headCode',$code1)->first()->dr_cr;
            $headGroupId1= ChartOfAccount::where('headCode',$code1)->first()->headGroupId;
            $headGroupType1= ChartOfAccount::where('headCode',$code1)->first()->headGroupType+1;
            $accCode1 = $code1.str_pad($noOfRow1,2, '0', STR_PAD_LEFT);
 

            ChartOfAccountRegister::insert([
                'shopId' => Auth::user()->shopId,
                'headGroupType' => $headGroupType1,
                'headGroupId' => $headGroupId1,
                'dr_cr' => $dr_cr1,
                'pre_code' => $code1,
                'headCode' => $accCode1,
                'headName' => $headName1,
                'headLavel' => $lavel1,
                'lastCode' => 0,
                'status' => 1,
                'position' => 0,
                'autoCreate' => 0,
                'createBy' => Auth::user()->id,
                'created_at' => Carbon::now(),
            ]);

            // ===========================================================
            // =============== // Chart Of Accounts for expense ==========
            // ===========================================================
            
         
        LoanProviderEntry::insert([
                  'providerType' => $request->loanProviderTypeId,
                  'tableType' => '1',
                  'accountCodeSirial' => $noOfRow,
                  'accountCode' => $accCode,
                  'accountCodeExpense' => $accCode1,
                  'providerName' => $request->personName,
                  'providerContactPersonMobileNo' => $request->mobileNumber,
                  'providerAddress' => $request->address,
                  'providerBranchName' => $request->branchName,
                  'providerContactPersonName' => $request->contactPersonName,
                  'status' => $request->status,
                  'shopId' => Auth::user()->shopId,
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
        $data = LoanProviderEntry::where('id',$id)->first();
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
        LoanProviderEntry::where('id',$id)->where('shopId',Auth::user()->shopId)->update([
            'providerType' => $request->loanProviderTypeId,
            'providerName' => $request->personName,
            'providerContactPersonMobileNo' => $request->mobileNumber,
            'providerAddress' => $request->address,
            'providerBranchName' => $request->branchName,
            'providerContactPersonName' => $request->contactPersonName,
            'status' => $request->status,
            'updateBy' => Auth::user()->id,
            'updated_at' => Carbon::now(),
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
