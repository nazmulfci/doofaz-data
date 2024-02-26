<?php

namespace App\Http\Controllers;

use App\BankEntry;
use App\ShopAddBankEntry;
use App\BankTypeEntry;
use App\ChartOfAccount;
use App\ChartOfAccountRegister;
use App\CorporateBankType;
use App\MobileBankType;
use App\BankCardType;
use App\ChartOfAccountBalance;
use App\ShopBillMonthList;
use App\CompanyBankAccount;
use App\CompanyBankInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class ShopAddBankController extends Controller
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
        $showData = ShopAddBankEntry::with('BankTypeEntry','BankEntry')
        ->where('shopId',Auth::user()->shopId)
        ->orderBy('bankId','desc')
        ->get();
        return  ['showData' => $showData];
    }

    public function getBankType($id){
        if(BankTypeEntry::where('bankTypeEntryId',$id)->exists()){
            return BankTypeEntry::where('bankTypeEntryId',$id)->first()->bankTypeEntryName;
        }else{
            return ' ';
        }
    }

    public function getBankName($id){
        if(BankEntry::where('bankEntryId',$id)->exists()){
            return BankEntry::where('bankEntryId',$id)->first()->bankName;
        }else{
            return ' ';
        }
    }

    public function getBalance($bankAccountCode){

        if(ChartOfAccountBalance::where('shopId',Auth::user()->shopId)->where('accountCode',$bankAccountCode)->exists()){
            $balance = ChartOfAccountBalance::where('shopId',Auth::user()->shopId)->where('accountCode',$bankAccountCode)->first()->balanceAmount;
        }
        else{
            $balance = 0;
        }
        return $balance;

    }


    public function getBankListWithBalance()
    { 
        $items = ShopAddBankEntry::with('bankTypeEntry','bankEntry')
        ->where('shopId',Auth::user()->shopId)
        ->limit(100);
       return datatables($items)
       ->addColumn('bankTypeEntry', function (ShopAddBankEntry $get) {
           
   
        if( $get->bankTypeEntry)     {    
                return $get->bankTypeEntry->bankTypeEntryName;
             }
             else{
                return NULL;
             }
    
  })
       ->addColumn('bankEntry', function (ShopAddBankEntry $get) {
         if( $get->bankEntry)     {    
        return$get->bankEntry->bankName;
         }
         else{
            return NULL;
         }
    
  })
       ->addColumn('account', function (ShopAddBankEntry $get) {
         if(ChartOfAccountBalance::where('shopId',Auth::user()->shopId)->where('accountCode',$get->accountCode)->exists())     {    
            return ChartOfAccountBalance::where('shopId',Auth::user()->shopId)->where('accountCode',$get->accountCode)->first()->balanceAmount;
         }
         else{
            return NULL;
         }
    
  })
       
    ->toJson();
    }


    public function corporateBankAccountType(){
        $data = CorporateBankType::get();
        return ['data' => $data];
    }
  

    public function bankCardType(){
        $data = BankCardType::get();
        return ['data' => $data];
    }
  


    public function mobileBankAccountType(){
        $data = MobileBankType::get();
        return ['data' => $data];
    }
  

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }
    public function bankTypeEntryList()
    {
        $show = BankTypeEntry::orderBy('bankTypeEntryId','desc')->get();
        return ['show'=>$show];
    }
    public function getShopBillMonthList()
    {
        $data = ShopBillMonthList::orderBy('id','ASC')->get();
        return ['data'=>$data];
    }

    public function getShopBillMonthListById($id)
    {
        $data = ShopBillMonthList::where('month',$id)->orderBy('id','ASC')->first();
        return ['data'=>$data];
    }
    
    public function bankAccountList($bankTypeId)
    {
        $show = ShopAddBankEntry::where('shopId',Auth::user()->shopId)->where('bankEntryId',$bankTypeId)->get();
        return ['data'=>$show];
    }
    
    public function bankAccountListWithCard($bankTypeId,$bankTypeEntryId)
    {
        $show = ShopAddBankEntry::where('shopId',Auth::user()->shopId)
        ->where('bankTypeEntryId',$bankTypeEntryId)
        ->where('bankEntryId',$bankTypeId)
        ->get();
        return ['data'=>$show];
    }
    
    public function companyBankAccountList($bankTypeId)
    {
        $show = CompanyBankInformation::where('bankAccountId',$bankTypeId)->first();
        return ['data'=>$show];
    }

    public function bankAccountMoreInfo($bankTypeId)
    {
        $show = ShopAddBankEntry::where('shopId',Auth::user()->shopId)->where('bankId',$bankTypeId)->first();
        return ['data'=>$show];
    }

    public function bankNameList($bankTypeId)
    {
        if($bankTypeId==2){
        $show = BankEntry::where('bankTypeEntryId',$bankTypeId)->orderBy('bankName','ASC')->get();
        }
        else{
        $show = BankEntry::where('bankTypeEntryId',1)->orderBy('bankName','ASC')->get();
        }
        return ['show'=>$show];
    }

    public function bankNameListByShop($bankTypeId)
    {

        $shopBankIds = ShopAddBankEntry::distinct()->
        where('shopId',Auth::user()->shopId)->
        where('bankTypeEntryId',$bankTypeId)->get('bankEntryId');

        if($bankTypeId==2){
            $show = BankEntry::
            whereIn('bankEntryId',$shopBankIds)->
            where('bankTypeEntryId',$bankTypeId)->
            orderBy('bankName','ASC')->get();
        }
        else{
            $show = BankEntry::whereIn('bankEntryId',$shopBankIds)->
            where('bankTypeEntryId',1)->orderBy('bankName','ASC')->get();
        }
        return ['show'=>$show];
    }
    public function companyBankNameList($bankTypeId)
    {
        $show = CompanyBankAccount::where('bankTypeEntryId',$bankTypeId)->orderBy('bankEntryId','desc')->get();
        return ['show'=>$show];
    }
    public function bankNameListGet()
    {
        $show = BankEntry::where('bankTypeEntryId',1)->orderBy('bankName','ASC')->get();
        return ['show'=>$show];
    }
    public function allBankNameList()
    {
        $show = BankEntry::orderBy('bankEntryId','desc')->get();
        return ['show'=>$show];
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'bankTypeEntryId' => 'required',
            'bankEntryId' => 'required',
            'bankAccountType' => 'required',
            // 'bankAccountName' => 'required',
            'bankAccountNumber' => 'required',
            'status' => 'required',
        ],
        [
            'bankTypeEntryId.required' => "Select Bank Type Name",
            'bankEntryId.required' => "Select Bank Name",
            'bankAccountType.required' => "Select Account Type",
            // 'bankAccountName.required' => "Enter bankAccount Name",
            'bankAccountNumber.required' => "Enter Account Number",
            'status.required' => "Select Shop Bank Status",
        ]);

        $loginUserId = Auth::user()->id;
        // $loginUserId = 1;

        if($request->bankAccountName){
            $newAccountHeadName = $request->bankAccountName.'('.$request->bankAccountNumber.')';
        }
        else{
            $agentOrPersonal = mobileBankType::where('id',$request->bankAccountType)->first()->name;
            $newAccountHeadName = $request->bankAccountNumber.'('.$agentOrPersonal.')';
        }

            // ============================================
            // =============== Chart Of Accounts ==========
            // ============================================


            ////////          sirial

            if(ShopAddBankEntry::where('shopId',Auth::user()->shopId)
            ->where('bankTypeEntryId',$request->bankTypeEntryId)
            ->orderBy('bankId','DESC')
            ->exists()){

            $noOfRow = ShopAddBankEntry::where('shopId',Auth::user()->shopId)
            ->where('bankTypeEntryId',$request->bankTypeEntryId)
            ->orderBy('bankId','DESC')
            ->first()->accountCodeSirial+1;

            }else{
                $noOfRow = 1;
            }

            ////////          /sirial 
            
            
            ////////          Previous Account Code   
 
            $code = BankTypeEntry::where('bankTypeEntryId',$request->bankTypeEntryId)->first()->accountCode;
             
            ////////          /Previous Account Code 




            
            // $headNamePre= ChartOfAccount::where('headCode',$code)->first()->headName;
                       if($request->bankAccountName){
                           
                        $headNamePre= BankEntry::where('bankEntryId',$request->bankEntryId)->first()->bankName;
                        $temp = explode(' ', $headNamePre);
                        $headShortName = '';

                        foreach($temp as $t){
                            $headShortName .= $t[0];
                        }
                        
                        
                        $headShortName = strtoupper($headShortName);
                        }
                        else{
                            $headShortName = BankEntry::where('bankEntryId',$request->bankEntryId)->first()->bankName;
                        }

            $headName = $headShortName.'-'.$newAccountHeadName;
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
                'createBy' => $loginUserId,
                'created_at' => Carbon::now(),
            ]);

            // ============================================
            // =============== // Chart Of Accounts ==========
            // ============================================




        ShopAddBankEntry::insert([
            'bankTypeEntryId' => $request->bankTypeEntryId,
            'bankEntryId' => $request->bankEntryId,
            'bankBranch' => $request->bankBranch,
            'accountCodeSirial' => $noOfRow,
            'accountCode' => $accCode,
            'bankAccountType' => $request->bankAccountType,
            'bankAccountName' => $request->bankAccountName,
            'bankAccountNumber' => $request->bankAccountNumber,
            'status' => $request->status,
            'createBy' => $loginUserId,
            'shopId' => Auth::user()->shopId,
            'created_at' => Carbon::now(),
        ]);

        // Auth::user()->id

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $shopBankStatus = ShopAddBankEntry::where('shopId',Auth::user()->shopId)->where('bankId',$id)->first()->status;
        if ($shopBankStatus == 1 ){
            ShopAddBankEntry::where('shopId',Auth::user()->shopId)->where('bankId',$id)->update([
                'status' => 0,
                'updateBy' => Auth::user()->id,
            ]);
        }
        else
        {
            ShopAddBankEntry::where('shopId',Auth::user()->shopId)->where('bankId',$id)->update([
                'status' => 1,
                'updateBy' => Auth::user()->id,
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $editShopBankEntry = ShopAddBankEntry::where('shopId',Auth::user()->shopId)->where('bankId',$id)->first();
        return ['editShopBankEntry' => $editShopBankEntry];
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
            'bankTypeEntryId' => 'required',
            'bankEntryId' => 'required',
            // 'bankBranch' => 'required',
            // 'bankAccountName' => 'required',
            // 'bankAccountNumber' => 'required',
            'status' => 'required',
        ],
        [
            'bankTypeEntryId.required' => "Select Bank Type Name",
            'bankEntryId.required' => "Select Bank Name",
            // 'bankBranch.required' => "Enter bankBranch Name",
            // 'bankAccountName.required' => "Enter bankAccount Name",
            // 'bankAccountNumber.required' => "Enter bankAccount Number",
            'status.required' => "Select Shop Bank Status",
        ]);

        ShopAddBankEntry::where('shopId',Auth::user()->shopId)->where('bankId',$id)->update([
            'bankTypeEntryId' => $request->bankTypeEntryId,
            'bankEntryId' => $request->bankEntryId,
            'bankBranch' => $request->bankBranch,
            'bankAccountType' => $request->bankAccountType,
            'bankAccountName' => $request->bankAccountName,
            'bankAccountNumber' => $request->bankAccountNumber,
            'status' => $request->status,
            'updateBy' => Auth::user()->id,
            'updated_at' => Carbon::now(),
        ]);


        // ============================================
            // =============== Chart Of Accounts ==========
            // ============================================

            $headcode = ShopAddBankEntry::where('shopId',Auth::user()->shopId)->where('bankId',$id)->first()->accountCode;


            if($request->bankAccountName){
                $newAccountHeadName = $request->bankAccountName.'('.$request->bankAccountNumber.')';
            }
            else{
                $agentOrPersonal = mobileBankType::where('id',$request->bankAccountType)->first()->name;
                $newAccountHeadName = $request->bankAccountNumber.'('.$agentOrPersonal.')';
            }
            
            
            ////////          Previous Account Code   
 
            $code = BankTypeEntry::where('bankTypeEntryId',$request->bankTypeEntryId)->first()->accountCode;
             
            ////////          /Previous Account Code 




            
            // $headNamePre= ChartOfAccount::where('headCode',$code)->first()->headName;
                       if($request->bankAccountName){
                           
                        $headNamePre= BankEntry::where('bankEntryId',$request->bankEntryId)->first()->bankName;
                        $temp = explode(' ', $headNamePre);
                        $headShortName = '';

                        foreach($temp as $t){
                            $headShortName .= $t[0];
                        }
                        
                        
                        $headShortName = strtoupper($headShortName);
                        }
                        else{
                            $headShortName = BankEntry::where('bankEntryId',$request->bankEntryId)->first()->bankName;
                        }

            $headName = $headShortName.'-'.$newAccountHeadName;
             
 

            ChartOfAccountRegister::where('shopId',Auth::user()->shopId)->where('headCode',$headcode)->update([
                'headName' => $headName,
                'updateBy' => Auth::user()->id,
                'updated_at' => Carbon::now(),
            ]);

            // ============================================
            // =============== // Chart Of Accounts ==========
            // ============================================


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = ShopAddBankEntry::where('shopId',Auth::user()->shopId)->where('bankId',$id)->delete();
    }
}
