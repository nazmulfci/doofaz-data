<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\IncomeExpenseCompany;
use App\IncomeProviderEntry;
use App\ExpenseProviderEntry;
use App\ChartOfAccount;
use App\AccountSetup;
use App\VoucherType;
use App\voucherInformation;
use App\voucherInformationReport;
use App\ReceivePaymentStatement;
use App\expenceType;
use App\IncomeDetailsItem;
use App\IncomeInformationEntry;
use App\IncomeExpenseStatementInformation;
use App\IncomeTarget;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class incomeTargetController extends Controller
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
         $data = IncomeTarget::where('shopId',Auth::user()->shopId)->get();
         $totalTarget = 0;
         if(IncomeTarget::where('shopId',Auth::user()->shopId)->exists()){
         $totalTarget = IncomeTarget::where('shopId',Auth::user()->shopId)->sum('incomeAmount');
         }
        return [
            'data' => $data,
            'totalTarget' => $totalTarget,
    ];
    }
    public function getIncomeTargetList()
    {
         $data = IncomeTarget::where('status',1)->where('shopId',Auth::user()->shopId)->get();
         $totalTarget = 0;
         if(IncomeTarget::where('status',1)->where('shopId',Auth::user()->shopId)->exists()){
         $totalTarget = IncomeTarget::where('status',1)->where('shopId',Auth::user()->shopId)->sum('incomeAmount');
         }
        return [
            'data' => $data,
            'totalTarget' => $totalTarget,
    ];
    }
    
    public function changeStatusTarget($id)
    {
        $statusDb = IncomeTarget::where('shopId',Auth::user()->shopId)->where('id',$id)->first()->status;
        
        if($statusDb==1){
            $status = 0;
        }
        else{
            $status = 1;
        }

        IncomeTarget::where('id',$id)->update([
            'status' => $status
        ]);
    }
    
    public function getIncomeExpenseBudget($type,$id)
    {

        if($type==2){

            $subHead = IncomeProviderEntry::where('shopId',Auth::user()->shopId)
            ->where('id',$id)->first()->accountCode;


        if(IncomeTarget::
            where('shopId',Auth::user()->shopId)
            ->where('type',$type)
            ->where('subHead',$subHead)
            ->exists()){
         $data = IncomeTarget::
         where('shopId',Auth::user()->shopId)
         ->where('type',$type)
         ->where('subHead',$subHead)
         ->first()->incomeAmount;
            }
            else{
                $data = 0;
            }

        }
        else{
            $subHead = ExpenseProviderEntry::where('shopId',Auth::user()->shopId)
            ->where('id',$id)->first()->accountCode;


        if(IncomeTarget::
            where('shopId',Auth::user()->shopId)
            ->where('type',$type)
            ->where('subHead',$subHead)
            ->exists()){
         $data = IncomeTarget::
         where('shopId',Auth::user()->shopId)
         ->where('type',$type)
         ->where('subHead',$subHead)
         ->first()->incomeAmount;
            }
            else{
                $data = 0;
            }

        }

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
            'voucherType' => 'required',
            'headOfAccounts' => 'required', 
            'subHead' => 'required', 
            'incomeAmount' => 'required|numeric|min:1',  
        ],
        [
        //   'headCode.required' => 'Enter Head Code',
        ]);


        $rendomNumber = substr($request->rendomNumber,0,12);
        $companyId = 0;

        IncomeTarget::insert([
            'type' => $request->voucherType,
            'headOfAccounts' => $request->headOfAccounts,
            'subHead' => $request->subHead,
            'incomeCompanyId' => $companyId,
            'incomeTargetType' => $request->interestTimeType,
            'fromDate' => $request->fromDate,
            'toDate' => $request->toDate,
            'incomeAmount' => $request->incomeAmount,
            'note' => $request->note,
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
        IncomeTarget::where('id',$id)->delete();
    }
}
