<?php

namespace App\Http\Controllers;

use App\GradeEntry;
use App\SalarySheet;
use App\ShopEmployeeEntry;
use App\StartSalarySetup;
use App\ChartOfAccountRegister;
use App\StatementInformation;
use App\PaymentType;
use App\SalaryPay;
use Auth;
use Carbon\Carbon;
use DataTables;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SalarySheetController extends Controller
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
        if (isset(Auth::user()->id)) {
           
            $salarySheetReports = SalarySheet::with('gradeEntryList','shopEmployeeName','shopEmployeeName.shopEmployeeTypes','shopEmployeeName.jobDepartments')->where('status',0)->where('shopId',Auth::User()->shopId)->orderBy('id','desc')->where('salaryStartMonth',Carbon::now()->format('m'))->paginate(30);
            return ['salarySheetReports' => $salarySheetReports];
        }
    }
    public function monthwiseSalarySheet($month,$year)
    {
        if (isset(Auth::user()->id)) {
           
            $salarySheetReports = SalarySheet::with('gradeEntryList','shopEmployeeName','shopEmployeeName.shopEmployeeTypes','shopEmployeeName.jobDepartments')->where('salaryStartMonth',$month)->where('salaryStartYear',$year)->where('status',0)->where('shopId',Auth::User()->shopId)->orderBy('id','desc')->paginate(30);
            return ['salarySheetReports' => $salarySheetReports];
        }
    }
    public function pendingSalary($month,$year)
    {
        if ($month==0) {
           
            $salarySheetReports = SalarySheet::with('gradeEntryList','shopEmployeeName.shopEmployeeTypes','shopEmployeeName.JobDepartments')->where('status',1)->where('paymentStatus',0)->where('salaryStartMonth',Carbon::now()->format('m'))->where('shopId',Auth::User()->shopId)->orderBy('id','desc')->where('shopId',Auth::User()->id)->paginate(30);
            return ['salarySheetReports' => $salarySheetReports];
        }
        else{
            $salarySheetReports = SalarySheet::with('gradeEntryList','shopEmployeeName.shopEmployeeTypes','shopEmployeeName.JobDepartments')->where('status',1)->where('salaryStartMonth',$month)->where('salaryStartYear',$year)->where('paymentStatus',0)->where('shopId',Auth::User()->shopId)->orderBy('id','desc')->where('shopId',Auth::User()->id)->paginate(30);
            return ['salarySheetReports' => $salarySheetReports]; 
        }
    }
    public function dueSalary($month,$year)
    {
        if ($month==0) {
           
            $salarySheetReports = SalarySheet::with('gradeEntryList','shopEmployeeName.shopEmployeeTypes','shopEmployeeName.JobDepartments')->where('salaryStartMonth',Carbon::now()->format('m'))->where('status',1)->where('paymentStatus',2)->where('shopId',Auth::User()->shopId)->orderBy('id','desc')->where('shopId',Auth::User()->id)->paginate(30);
            return ['salarySheetReports' => $salarySheetReports];
        }
        else{
            $salarySheetReports = SalarySheet::with('gradeEntryList','shopEmployeeName.shopEmployeeTypes','shopEmployeeName.JobDepartments')->where('salaryStartMonth',$month)->where('salaryStartYear',$year)->where('status',1)->where('paymentStatus',2)->where('shopId',Auth::User()->shopId)->orderBy('id','desc')->paginate(30);
            return ['salarySheetReports' => $salarySheetReports];
        }
    }
    public function paidSalary($month,$year)
    {
        if ($month==0) {
           
            $salarySheetReports = SalarySheet::with('gradeEntryList','shopEmployeeName.shopEmployeeTypes','shopEmployeeName.JobDepartments')->where('salaryStartMonth',Carbon::now()->format('m'))->where('status',1)->where('paymentStatus',1)->where('shopId',Auth::User()->shopId)->orderBy('id','desc')->paginate(30);
            return ['salarySheetReports' => $salarySheetReports];
        }
      else {
           
            $salarySheetReports = SalarySheet::with('gradeEntryList','shopEmployeeName.shopEmployeeTypes','shopEmployeeName.JobDepartments')->where('salaryStartMonth',$month)->where('salaryStartYear',$year)->where('status',1)->where('paymentStatus',1)->where('shopId',Auth::User()->shopId)->orderBy('id','desc')->paginate(30);
            return ['salarySheetReports' => $salarySheetReports];
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (isset(Auth::user()->id)) {
           
            $salarySheetReports = SalarySheet::with('gradeEntryList','shopEmployeeName.shopEmployeeTypes','shopEmployeeName.JobDepartments')->where('paymentStatus','!=',1)->where('status',1)->where('shopId',Auth::User()->id)->orderBy('id','desc')->where('shopId',Auth::User()->shopId)->where('salaryStartMonth',Carbon::now()->format('m'))->paginate(30);
            return ['salarySheetReports' => $salarySheetReports];
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
     if(SalarySheet::where('shopId',Auth::User()->shopId)->where('salaryStartDate',$request->monthInfo)->exists()){
      return ['alreadyExit' => 'alreadyExit'];
     }
     else{
        $employeeId=StartSalarySetup::where('shopId',Auth::User()->shopId)->whereDate('salaryStartDate','>=',$request->monthInfo)->get();
        $employeeIdcount=StartSalarySetup::where('shopId',Auth::User()->shopId)->whereDate('salaryStartDate', '<=',  $request->mt)->count();
        if($employeeIdcount==0){
            return ['count' => 'count'];
        }
        else{
        foreach($employeeId as $eId){
         $grade=StartSalarySetup::where('shopId',Auth::User()->shopId)->where('employeEntryId',$eId->employeEntryId)->get();     
         foreach($grade as $g)   {
            $gamount=GradeEntry::where('shopId',Auth::User()->shopId)->where('gradeEntryId',$g->gradeEntryId)->first();
             SalarySheet::insert([
               'employeeId'  =>$eId->employeEntryId,
               'shopId'=>Auth::user()->shopId,
               'salaryGradeId'=>$g->gradeEntryId,
               'amount'=>$gamount->gradeAmount,
               'netAmount'=>$gamount->gradeAmount,
               'salaryStartMonth'=>$request->monthIndex,
               'salaryStartYear'=>$request->year,
               'salaryStartDate'=>$request->monthInfo,
               'created_at'=>Carbon::now(),
             ]);
         }
        }
    }

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
       
    }
    public function salarySheetConfirm($id,$month,$year)
    {
        if($month==0)
        {
                SalarySheet::where('employeeId',$id)
                ->where('salaryStartMonth',Carbon::now()->format('m'))
                ->update([
                    'status'=>1,
                ]);
               $select = SalarySheet::where('employeeId',$id)
                ->where('salaryStartMonth',Carbon::now()->format('m'))
                ->first();
                $salary_amount = $select->netAmount;
                $monthName = date('F', mktime(0, 0, 0, Carbon::now()->format('m'), 10)); // March
        }
        else
        {
                SalarySheet::where('employeeId',$id)
                ->where('salaryStartMonth',$month)
                ->where('salaryStartYear',$year)->update([
                    'status'=>1,
                ]);

                $select = SalarySheet::where('employeeId',$id)
                ->where('salaryStartMonth',$month)
                ->where('salaryStartYear',$year)
                ->first();
                $salary_amount = $select->netAmount;
                $monthName = date('F', mktime(0, 0, 0, $month, 10));
        }

        $accountCode = startSalarySetup::where('employeEntryId',$id)->first()->accountCode;
        $referance = 'Emp-'.$id;
        $companyAccountCode = $accountCode;
        $companyAccountHeadCode = ChartOfAccountRegister::where('headCode',$companyAccountCode)->first()->pre_code;
        $rendomNumber = 0;
        $payment_type = PaymentType::where('status',1)->where('paymentType','LIKE','%Due%')->first()->id;
        $title = "Employee Salary for $monthName";


         // ==========================================================

         if(StatementInformation::where('createBy',Auth::user()->id)
         ->where('advanceSecurityDepositPrepayment',0)
         ->where('accountCode',$accountCode)->exists()){
             $balanceAmountDb = StatementInformation::where('createBy',Auth::user()->id)
             ->where('advanceSecurityDepositPrepayment',0)
             ->where('accountCode',$accountCode)->orderBy('id','DESC')->first()->balanceAmount;
             
         }
         else{
             $balanceAmountDb = 0;
         }
 
         $balanceAmount = $balanceAmountDb-$salary_amount;
 
 
         
         StatementInformation::insert([
             'shopId' => Auth::user()->shopId,
             'rendomNumber' => $rendomNumber,
             'type' => 0,
             'accountHeadCode' => $companyAccountHeadCode,
             'accountCode' => $companyAccountCode,
             'referance' => $referance,
             'title' => $title,
             'paymentType' => $payment_type,
             'dueAmount' => $salary_amount,
             'creditAmount' => $salary_amount,
             'balanceAmount' => $balanceAmount,
             'note' => $title,
             'createBy' => Auth::user()->id,
             'created_at' => Carbon::now(),
         ]);
 
         // ==========================================================

         return ['salaryConfirmStatus' => 1];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
    //    $payable=SalarySheet::where('employeeId',$id)->first();
    //    return ['payable'=>$payable];
    }
    public function fullSalary()
    {
       
        $data=SalarySheet::where('shopId',Auth::user()->shopId)->select(DB::raw('sum(amount) as totalAmount'),DB::raw('salaryStartYear as year, salaryStartMonth as  month'))
        ->groupby('year','month')
        ->get();        
       
        $infoGet=SalarySheet::where('shopId',Auth::user()->shopId)->select(DB::raw('sum(amount) as totalAmount'),DB::raw('salaryStartYear as year'))
        ->groupby('year')
        ->get();        
       
        
       $items=SalaryPay::where('shopId',Auth::user()->shopId)->select( DB::raw(' sum(payAmount) payAmount'),  DB::raw('YEAR(payMonth) year, MONTH(payMonth) month'))
        ->groupby('year','month')
        ->get();        
        return ['data'=>$data,'items'=>$items,'infoGet'=>$infoGet];
        
    }
    public function yearlyFullSalary($year)
    {
       
        $data=SalarySheet::where('shopId',Auth::user()->shopId)->select(DB::raw('sum(amount) as totalAmount'),DB::raw('salaryStartYear as year, salaryStartMonth as  month'))
        ->groupby('year','month')
        ->where('salaryStartYear',$year)
        ->get();        
       
        $infoGet=SalarySheet::where('shopId',Auth::user()->shopId)->select(DB::raw('sum(amount) as totalAmount'),DB::raw('salaryStartYear as year'))
        ->groupby('year')
        ->where('salaryStartYear',$year)
        ->get();        
       
        
       $items=SalaryPay::where('shopId',Auth::user()->shopId)->select( DB::raw(' sum(payAmount) payAmount'),  DB::raw('YEAR(payMonth) year,MONTH(payMonth) month'))
       ->groupby('year','month')
        ->whereYear('payMonth',$year)
        ->get();        
        return ['data'=>$data,'items'=>$items,'infoGet'=>$infoGet];
        
    }
    public function fullSalaryInfo($month,$year)
    {

        $get=SalarySheet::where('shopId',Auth::user()->shopId)->select('employeeId',DB::raw('sum(amount) amount'))
        ->groupby('employeeId')
        ->where('salaryStartMonth',$month)
        ->where('salaryStartYear',$year)
        ->get(); 
       $views=SalaryPay::with('employee','employee.shopEmployeeTypes','employee.jobDepartments')->where('shopId',Auth::user()->shopId)->select('employeeId', DB::raw(' sum(payAmount) payAmount'))
     
       ->groupby('employeeId')
        ->whereMonth('payMonth',$month)
        ->whereYear('payMonth',$year)
        ->get();
        return ['views'=>$views,'get'=>$get];
        
    }
    public function salaryPayStuff($id,$month,$year)
    {
        if($month==0)
        {
       $payable=SalarySheet::where('shopId',Auth::user()->shopId)->where('salaryStartMonth',Carbon::now()->format('m'))->where('employeeId',$id)->first();
      
        }
        else{
            $payable=SalarySheet::where('shopId',Auth::user()->shopId)  ->where('salaryStartMonth',$month)
            ->where('salaryStartYear',$year)->where('employeeId',$id)->first(); 
        }
        return ['payable'=>$payable];
    }
    public function salaryMonth($month,$year)
    {
        $salarySheetReports = SalarySheet::with('gradeEntryList','shopEmployeeName.shopEmployeeTypes','shopEmployeeName.JobDepartments')->where('status',1)->where('shopId',Auth::User()->shopId)->orderBy('id','desc')->where('shopId',Auth::User()->id)->where('salaryStartMonth',$month)->whereYear('created_at', '=', $year)->paginate(30);
        return ['salarySheetReports' => $salarySheetReports]; 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
     
           
    }
    public function salaryDeduct(Request $request)
    {
     if($request->month==''){
        $amt= SalarySheet::where('employeeId',$request->id)->where('salaryStartMonth',Carbon::now()->format('m'))->first();
        $netamount=$amt->amount-$request->deduct;
        SalarySheet::where('employeeId',$request->id)->where('salaryStartMonth',Carbon::now()->format('m'))->update([
            'reason'=>$request->reason,
            'reasonDate'=>$request->date,
            'deductAmount'=>$request->deduct,
            'netAmount'=> $netamount,
        ]);
     }
     else{
            $amt= SalarySheet::where('employeeId',$request->id)->where('salaryStartMonth',$request->month)->whereYear('created_at',$request->year)->first();
            $netamount=$amt->amount-$request->deduct;
            SalarySheet::where('employeeId',$request->id)->where('salaryStartMonth',$request->month)->whereYear('created_at',$request->year)->update([
                'reason'=>$request->reason,
                'reasonDate'=>$request->date,
                'deductAmount'=>$request->deduct,
                'netAmount'=> $netamount,
            ]);
     }
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
