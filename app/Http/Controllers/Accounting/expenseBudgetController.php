<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\IncomeExpenseCompany;
use App\ExpenseProviderEntry;
use App\AccountSetup;
use App\VoucherType;
use App\voucherInformation;
use App\voucherInformationReport;
use App\ReceivePaymentStatement;
use App\expenceType;
use App\ShopAddBankEntry;
use App\ExpenseDetailsItem;
use App\ExpenseInformationEntry;
use App\ExpenseBudget;
use App\IncomeExpenseStatementInformation;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class expenseBudgetController extends Controller
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
        $data = ExpenseBudget::where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->get();
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
            'expenseType' => 'required',
            'expenseHead' => 'required', 
            'expensePurpous' => 'required', 
            'expenseAmount' => 'required|numeric|min:1', 
        ],
        [
        //   'headCode.required' => 'Enter Head Code',
        ]);


        $companyId = ExpenseProviderEntry::where('shopId',Auth::user()->shopId)->where('id',$request->expensePurpous)->first()->expenseProviderId;

        ExpenseBudget::insert([ 
            'expenseType' => $request->expenseType,
            'expenseHead' => $request->expenseHead,
            'expensePurpous' => $request->expensePurpous,
            'expenseCompanyId' => $companyId,
            'expenseBadgetType' => $request->interestTimeType,
            'expenseAmount' => $request->expenseAmount,
            'fromDate' => $request->fromDate,
            'toDate' => $request->toDate,
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
        ExpenseBudget::where('id',$id)->delete();
    }
}
