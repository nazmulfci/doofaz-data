<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ChartOfAccount;
use App\ChartOfAccountRegister;
use App\AccountGroup;
use App\chartOfAccountGroupType;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\expenceType;
use App\AccountSetup;


class expenseEntryController extends Controller
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
            $data = expenceType::get();
            return ['data' => $data];
    }


    public function expenseTypeList(){
        $code = AccountSetup::where('placementType',25)->where('headName',103)->first()->headCode;
        $select = ChartOfAccount::where('headLavel','2')->where('headCode','LIKE',"$code%")->get();
        $expenseType = ChartOfAccount::where('headLavel','2')->where('headCode','LIKE',"$code%")->first()->headCode;
        return [
            'data' => $select,
            'expenseType' => $expenseType,
        ];
    }


        
    public function getExpenseHeadList($id){
        $data = expenceType::where('accountHeadCode',$id)->get();
        $id = expenceType::where('accountHeadCode',$id)->first()->id;
        return ['data' => $data, 'id'=>$id];
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
            'subHeadName' => 'required', 
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

            if(expenceType::
            where('accountHeadCode',$request->expenseType)
            ->exists()){

            $noOfRow = expenceType::
            where('accountHeadCode',$request->expenseType)
            ->orderBy('id','DESC')
            ->first()->accountCodeSirial+1;

            }else{
                $noOfRow = 1;
            }

            ////////          /sirial
            
            
            ////////          Previous Account Code   
            
            $code = $request->expenseType;
             
            ////////          /Previous Account Code 




            
            // $headNamePre= ChartOfAccount::where('headCode',$code)->first()->headName;
                          
            // $headNamePre= BankEntry::where('bankEntryId',$request->bankEntryId)->first()->bankName;
            
            // $temp = explode(' ', $headNamePre);
            // $headShortName = '';

            // foreach($temp as $t){
            //     $headShortName .= $t[0];
            // }
            
            
            // $headShortName = strtoupper($headShortName);
            $headShortName = ChartOfAccount::where('headCode',$request->expenseType)->first()->headName;
                        

            // $headName = 'Loan-'.$headShortName.'-'.$request->personName;
            $headName = $request->subHeadName;
            $lavel= ChartOfAccount::where('headCode',$code)->first()->headLavel+1;
            $dr_cr= ChartOfAccount::where('headCode',$code)->first()->dr_cr;
            $headGroupId= ChartOfAccount::where('headCode',$code)->first()->headGroupId;
            $headGroupType= ChartOfAccount::where('headCode',$code)->first()->headGroupType+1;
            $accCode = $code.str_pad($noOfRow,2, '0', STR_PAD_LEFT);
 

            ChartOfAccount::insert([
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
            
            if(Auth::user()->shopId){
                $shopId = Auth::user()->shopId;
            }
            else{
                $shopId = 0;
            }
            expenceType::insert([
                  'shopId' => $shopId,
                  'accountCodeSirial' => $noOfRow,
                  'accountHeadCode' => $code,
                  'accountCode' => $accCode,
                  'expenseType' => $request->expenseType,
                  'name' => $request->subHeadName,
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
        expenceType::where('id',$id)->delete();
    }
}
