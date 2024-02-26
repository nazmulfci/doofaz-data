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
use App\ReceiverLoanPay;
use App\LoanReveiverInstallmentHistory;
use App\LoanProviderInstallmentHistoryDetails;


class loanReceiverEntryController extends Controller
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
        $data4 = LoanProviderEntry::where('tableType','2')->where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data4];
    }

    

    public function getLoanReceiverInfoLoanInfo($id)
    {
        $loanInfo = ReceiverLoanPay::where('id',$id)->where('shopId',Auth::user()->shopId)->first();
        $providerInfo = LoanProviderEntry::where('id',$loanInfo->loanProviderId)->where('shopId',Auth::user()->shopId)->first();
        return [
            'loanInfo' => $loanInfo,
            'providerInfo' => $providerInfo,
        ];
    }

    
    public function getLoanReceiverInformation($id){
        $data3 = ReceiverLoanPay::where('id',$id)->where('shopId',Auth::user()->shopId)->first();
        $interestType = LoanInterestType::where('id',$data3->interestType)->first()->name;

        if(LoanPayType::where('id',$data3->loanPayType)->exists()){
            $loanPayType = LoanPayType::where('id',$data3->loanPayType)->first()->name;
        }
        else{
            $loanPayType = '';
        }
        
        $loanPayTypeId = $data3->loanPayType;
        $interestTimeType = LoanInterestTimeType::where('id',$data3->interestTimeType)->first()->name;
        $howMuchTime = $data3->howMuchTime;
        $loanMainAmount = $data3->loanMainAmount;
        
        
        if(LoanReveiverInstallmentHistory::where('loanId',$id)->orderBy('id','DESC')->exists()){
            $loanPaidAmount = LoanReveiverInstallmentHistory::where('loanId',$id)->orderBy('id','DESC')->first()->totalPaidAmount;
            $loanDueAmount = LoanReveiverInstallmentHistory::where('loanId',$id)->orderBy('id','DESC')->first()->dueAmount;  
        }
        else{
            $loanPaidAmount = 0;
            
        }
        $loanDueAmount = $data3->dueAmount;
        

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
            'loanDueAmount' => $loanDueAmount,
            'loanPaidAmount' => $loanPaidAmount,
            'paidDate' => $paidDate,
            'bankAccountId' => $bankAccountId];
         
    }



    public function getLoanReceiverWithLoanNpadiAmount()
    {
        $data4s = LoanProviderEntry::where('tableType','2')->where('shopId',Auth::user()->shopId)->get();
        $data = array();
        foreach($data4s as $data4){

                $data[] = array(
                    "id" => $data4->id,
                    "providerType" => $data4->providerType,
                    "providerName" => $data4->providerName,
                    "providerContactPersonMobileNo" => $data4->providerContactPersonMobileNo,
                    "providerAddress" => $data4->providerAddress,
                    "totalLoan" => ReceiverLoanPay::where('shopId',Auth::user()->shopId)->where('loanProviderId',$data4->id)->sum('loanMainAmount'),
                    "totalPaid" => ReceiverLoanPay::where('shopId',Auth::user()->shopId)->where('loanProviderId',$data4->id)->sum('paidAmount'),
                    "totalDue" => ReceiverLoanPay::where('shopId',Auth::user()->shopId)->where('loanProviderId',$data4->id)->sum('dueAmount'),
                    );
        
            }

        return ['data' => $data];
    }



    public function getLoanProviderLoanReceiveInfo($loanId)
    {
        $singleData = ProviderLoanReceiveEntry::where('id',$loanId)->where('shopId',Auth::user()->shopId)->first();
        $data = ProviderLoanReceiveEntry::where('id',$loanId)->where('shopId',Auth::user()->shopId)->get();
        $data1 = LoanProviderInstallmentHistoryDetails::where('loanId',$loanId)->where('shopId',Auth::user()->shopId)->get();
        $totalInstallment = LoanProviderInstallmentHistory::where('mainAmountPaidStatus',0)->where('loanId',$loanId)->where('shopId',Auth::user()->shopId)->sum('installmentAmount');
        return [
                    'singleData' => $singleData,
                    'loanInfo' => $data,
                    'loanInfo1' => $data1,
                    'totalInstallment' => $totalInstallment,
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
            where('tableType','2')
            ->where('providerType',$request->loanProviderTypeId)
            ->orderBy('id','DESC')
            ->exists()){

            $noOfRow = LoanProviderEntry::where('shopId',Auth::user()->shopId)->
            where('tableType','2')
            ->where('providerType',$request->loanProviderTypeId)
            ->orderBy('id','DESC')
            ->first()->accountCodeSirial+1;

            }else{
                $noOfRow = 1;
            }

            ////////          /sirial 
            
            
            ////////          Previous Account Code   
            
            if($request->loanProviderTypeId==1){
                $code = AccountSetup::where('placementType',18)->where('headName',63)->first()->headCode;
            }
            else if($request->loanProviderTypeId==2){
                $code = AccountSetup::where('placementType',18)->where('headName',64)->first()->headCode;
            }
            else if($request->loanProviderTypeId==3){
                $code = AccountSetup::where('placementType',18)->where('headName',101)->first()->headCode;
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
                        

            $headName = 'Loan-'.$headShortName.'-'.$request->personName;
            $lavel= ChartOfAccount::where('headCode',$code)->first()->headLavel+1;
            $dr_cr= ChartOfAccount::where('headCode',$code)->first()->dr_cr;
            $headGroupId= ChartOfAccount::where('headCode',$code)->first()->headGroupId;
            $headGroupType= ChartOfAccount::where('headCode',$code)->first()->headGroupType+1;
            $accCode = $code.str_pad($noOfRow,2, '0', STR_PAD_LEFT);
 

            ChartOfAccountRegister::insert([
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
                'shopId' => Auth::user()->shopId,
                'createBy' => Auth::user()->id,
                'created_at' => Carbon::now(),
            ]);

            // ============================================
            // =============== // Chart Of Accounts =======
            // ============================================
            

            // ============================================
            // =============== Chart Of Accounts Income
            // ============================================


            ////////          sirial

            if(LoanProviderEntry::where('shopId',Auth::user()->shopId)->
            where('tableType','2')
            ->where('providerType',$request->loanProviderTypeId)
            ->orderBy('id','DESC')
            ->exists()){

            $noOfRow1 = LoanProviderEntry::where('shopId',Auth::user()->shopId)->
            where('tableType','2')
            ->where('providerType',$request->loanProviderTypeId)
            ->orderBy('id','DESC')
            ->first()->accountCodeSirial+1;

            }else{
                $noOfRow1 = 1;
            }

            ////////          /sirial 
            
            
            ////////          Previous Account Code   
            
            if($request->loanProviderTypeId==1){
                $code1 = AccountSetup::where('placementType',18)->where('headName',112)->first()->headCode;
            }
            else if($request->loanProviderTypeId==2){
                $code = AccountSetup::where('placementType',18)->where('headName',64)->first()->headCode;
            }
            else if($request->loanProviderTypeId==3){
                $code = AccountSetup::where('placementType',18)->where('headName',101)->first()->headCode;
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
                        

            $headName = 'Loan-'.$headShortName.'-'.$request->personName;
            $lavel= ChartOfAccount::where('headCode',$code)->first()->headLavel+1;
            $dr_cr= ChartOfAccount::where('headCode',$code)->first()->dr_cr;
            $headGroupId= ChartOfAccount::where('headCode',$code)->first()->headGroupId;
            $headGroupType= ChartOfAccount::where('headCode',$code)->first()->headGroupType+1;
            $accCode1 = $code1.str_pad($noOfRow1,2, '0', STR_PAD_LEFT);
 

            ChartOfAccountRegister::insert([
                'headGroupType' => $headGroupType,
                'headGroupId' => $headGroupId,
                'dr_cr' => $dr_cr,
                'pre_code' => $code1,
                'headCode' => $accCode1,
                'headName' => $headName,
                'headLavel' => $lavel,
                'lastCode' => 0,
                'status' => 1,
                'position' => 0,
                'autoCreate' => 0,
                'shopId' => Auth::user()->shopId,
                'createBy' => Auth::user()->id,
                'created_at' => Carbon::now(),
            ]);

            // ============================================
            // =============== // Chart Of Accounts Income 
            // ============================================
            
         
        LoanProviderEntry::insert([
                  'providerType' => $request->loanProviderTypeId,
                  'tableType' => '2',
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
