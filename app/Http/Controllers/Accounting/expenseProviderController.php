<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\IncomeExpenseCompany;
use App\ExpenseProviderEntry;
use App\ChartOfAccount;
use App\ChartOfAccountRegister;
use App\expenceType;
use App\AccountSetup;
use App\RelationTableList;
use App\ExpenseProviderEntryLog;
use App\ExpenseInformationEntry;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;



class expenseProviderController extends Controller
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
        $datas = ExpenseProviderEntry::where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->get();

        $msg2 = array();

        foreach($datas as $data){
            if(ExpenseInformationEntry::where('shopId',Auth::user()->shopId)->where('expensePurpous',$data->id)->exists()){
                $deleteStatus = 0;
            }else{
                $deleteStatus = 1;
            }
            $msg2[] = array(
                "id" => $data->id,
                "expenseType" => $data->expenseType,
                "expenseHead" => $data->expenseHead,
                "expensePurpous" => $data->expensePurpous,
                "expenseProviderId" => $data->expenseProviderId,
                "note" => $data->note,
                "deleteStatus" => $deleteStatus,
                );
        }

        return  ['data' => $msg2];  
    }


    public function getExpensePurposeListById($id)
    {   
        $datas = ExpenseProviderEntry::where('expenseHead',$id)
        ->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->get();
        return  ['datas' => $datas];
    }

    public function getExpensePurposeListByIdForSecurity($id)
    {   
        $datas = ExpenseProviderEntry::where('accountCode','LIKE',"$id%")
        ->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->get();
        return  ['datas' => $datas];
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
            'expenseCompany' => 'required', 
            'expensePurpous' => 'required', 
        ],
        [
        //   'headCode.required' => 'Enter Head Code',
        ]);

            // ============================================
            // =============== Chart Of Accounts ==========
            // ============================================


            ////////          sirial

            if(ExpenseProviderEntry::where('shopId',Auth::user()->shopId)
            ->where('expenseHead',$request->expenseHead)
            ->orderBy('id','DESC')
            ->exists()){

            $noOfRow = ExpenseProviderEntry::where('shopId',Auth::user()->shopId)->
            where('expenseHead',$request->expenseHead)
            ->orderBy('id','DESC')
            ->first()->accountCodeSirial+1;

            }else{
                $noOfRow = 1;
            }

            ////////          /sirial 
            
            
            ////////          Previous Account Code   
            
                $code = expenceType::where('id',$request->expenseHead)->first()->accountCode;
            
            ////////          /Previous Account Code 

            
            
            // $headShortName = strtoupper($headShortName);
            $headShortName = $request->expensePurpous.' ('.
            IncomeExpenseCompany::where('id',$request->expenseCompany)->first()->companyName.')';
                        

            $headName = ''.$headShortName;
            $lavel= ChartOfAccount::where('headCode',$code)->first()->headLavel+1;
            $dr_cr= ChartOfAccount::where('headCode',$code)->first()->dr_cr;
            $headGroupId= ChartOfAccount::where('headCode',$code)->first()->headGroupId;
            $headGroupType= ChartOfAccount::where('headCode',$code)->first()->headGroupType+1;
            $accCode = $code.str_pad($noOfRow,2, '0', STR_PAD_LEFT);
 

            // ChartOfAccountRegister::insert([
                 
            // ]);

            // ============================================
            // =============== // Chart Of Accounts ==========
            // ============================================

            
            
            
            
            // ==============================================================
            // =============== Chart Of Accounts for security code ==========
            // ==============================================================


            //////// sirial

            //from up numOfRow

            ////////          /sirial 
            
            
            ////////          Previous Account Code   
            
             $code1 = AccountSetup::where('placementType',13)->where('headName',37)->first()->headCode; 
             
            ////////          /Previous Account Code 

            
            
            // $headShortName = strtoupper($headShortName);
            
            $headShortName = $request->expensePurpous.' (Security Money)';
                        

            $headName1 = ''.$headShortName;
            $lavel1= ChartOfAccount::where('headCode',$code1)->first()->headLavel+1;
            $dr_cr1= ChartOfAccount::where('headCode',$code1)->first()->dr_cr;
            $headGroupId1= ChartOfAccount::where('headCode',$code1)->first()->headGroupId;
            $headGroupType1= ChartOfAccount::where('headCode',$code1)->first()->headGroupType+1;
            $accCode1 = $code1.str_pad($noOfRow,2, '0', STR_PAD_LEFT);
 

            // ChartOfAccountRegister::insert([

            // ]);

            // ==================================================================
            // =============== // Chart Of Accounts for security code ==========
            // ==================================================================


            ExpenseProviderEntryLog::insert([

             // expense provider table   
            'shopId' => Auth::user()->shopId,
            'accountCodeSirial' => $noOfRow,
            'accountCode' => $accCode,
            'accountCodeSecurityDeposit' => $accCode1,
            'expenseType' => $request->expenseType,
            'expenseHead' => $request->expenseHead,
            'expensePurpous' => $request->expensePurpous,
            'expenseProviderId' => $request->expenseCompany,
            'note' => $request->note,

            // chart of account register 
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

            // chart of account
            'headGroupType1' => $headGroupType1,
            'headGroupId1' => $headGroupId1,
            'dr_cr1' => $dr_cr1,
            'pre_code1' => $code1,
            'headCode1' => $accCode1,
            'headName1' => $headName1,
            'headLavel1' => $lavel1,
            'lastCode1' => 0, 
            'position1' => 0,
            'autoCreate1' => 0,

            // income expense company
            'expenseAccountCode' => $accCode,

            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);

        // IncomeExpenseCompany::where('id',$request->expenseCompany)->update([
             
        // ]);
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
        if(ExpenseInformationEntry::where('shopId',Auth::user()->shopId)->where('expensePurpous',$id)->exists()){
            return ['delete' => 0];
        }else{

            $info = ExpenseProviderEntry::where('id',$id)->first(); 

            ChartOfAccountRegister::where('headCode',$info->accountCode)->delete();
            ChartOfAccountRegister::where('headCode',$info->accountCodeSecurityDeposit)->delete();

            ExpenseProviderEntry::where('id',$id)->delete();
            return ['delete' => 1];
        }
        
    }
}
