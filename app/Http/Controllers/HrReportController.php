<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\EmployeeEducationEntry;
use App\EmployeeProfessionalEntry;
use App\EmployeeSkillEntry;
use App\EmployeeBankingEntry;
use App\ShopEmployeeEntry;
use App\GradeEntry;
use App\JobDepartmentEntry;
use App\AdminHolidaySetup;
use App\SalaryGradeSetup;
use App\ShopEmployeeType;
use App\ShopInformation;
use App\StartSalarySetup;
use App\EmployeeLeaveEntry;
use App\EmployeeAttendance;
use Carbon\Carbon;
use App\User;
use Auth;
use Illuminate\Support\Facades\DB;

class HrReportController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:,admin');
    }
    public function employeeReport()
    {
        if (isset(Auth::User()->id)) {
           
           $shopEmployeeList = ShopEmployeeEntry::with('shopEmployeeTypes','JobDepartments','grade.GradeList','start')->where('status',1)->where('shopId',Auth::user()->shopId)->where('shopTypeId',Auth::User()->shopTypeId)->latest()->paginate(20);
           return ['employeeList' => $shopEmployeeList];
        }
        else {
            $shopEmployeeList = ShopEmployeeEntry::with('shopEmployeeTypes','JobDepartments','grade.GradeList','start')->where('status',1)->where('createBy',Auth::User()->id)->latest()->paginate(20);
            return ['employeeList' => $shopEmployeeList];
        }
    }
    public function closeList()
    {
        if (isset(Auth::User()->id)) {
           
           $shopEmployeeList = ShopEmployeeEntry::with('shopEmployeeTypes','JobDepartments')->where('status',3)->where('shopId',Auth::user()->shopId)->where('shopTypeId',Auth::User()->shopTypeId)->latest()->paginate(20);
           return ['employeeList' => $shopEmployeeList];
        }
        else {
            $shopEmployeeList = ShopEmployeeEntry::with('shopEmployeeTypes','JobDepartments')->where('status',3)->where('createBy',Auth::User()->id)->latest()->paginate(20);
            return ['employeeList' => $shopEmployeeList];
        }
    }
    public function suspendList()
    {
        if (isset(Auth::User()->id)) {
           
           $shopEmployeeList = ShopEmployeeEntry::with('shopEmployeeTypes','JobDepartments')->where('status',2)->where('shopId',Auth::user()->shopId)->where('shopTypeId',Auth::User()->shopTypeId)->latest()->paginate(20);
           return ['employeeList' => $shopEmployeeList];
        }
        else {
            $shopEmployeeList = ShopEmployeeEntry::with('shopEmployeeTypes','JobDepartments')->where('status',2)->where('createBy',Auth::User()->id)->latest()->paginate(20);
            return ['employeeList' => $shopEmployeeList];
        }
    }
    public function pushList()
    {
        if (isset(Auth::User()->id)) {
           
           $shopEmployeeList = ShopEmployeeEntry::with('shopEmployeeTypes','JobDepartments')->where('salaryStatus',2)->where('shopId',Auth::user()->shopId)->where('shopTypeId',Auth::User()->shopTypeId)->latest()->paginate(20);
           return ['employeeList' => $shopEmployeeList];
        }
        else {
            $shopEmployeeList = ShopEmployeeEntry::with('shopEmployeeTypes','JobDepartments')->where('salaryStatus',2)->where('createBy',Auth::User()->id)->latest()->paginate(20);
            return ['employeeList' => $shopEmployeeList];
        }
    }

    public function employeeReportView($employeeId){

        $singleEmployeeInfo = ShopEmployeeEntry::with('shopEmployeeTypes','JobDepartments')->where('shopEmployeeEntryId',$employeeId)->first();
        $singleEmployeeEducation = EmployeeEducationEntry::with('nameOfInstitute','nameOfDegree','grade')->where('employeEntryId',$employeeId)->get();
        $singleEmployeeProfessional = EmployeeProfessionalEntry::where('employeEntryId',$employeeId)->get();
        $singleEmployeeSkill = EmployeeSkillEntry::with('skillGrade')->where('employeEntryId',$employeeId)->get();
        $singleEmployeeBanking = EmployeeBankingEntry::with('bankTypeEntry','bankEntry')->where('employeEntryId',$employeeId)->get();

        return ['singleEmployeeInfo' => $singleEmployeeInfo, 'singleEmployeeEducation' => $singleEmployeeEducation,
        'singleEmployeeProfessional' => $singleEmployeeProfessional, 'singleEmployeeSkill' => $singleEmployeeSkill,
        'singleEmployeeBanking' => $singleEmployeeBanking];
    }
    public function suspend(Request $request,$shopEmployeeEntryId)
    {
        // $status = ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->first()->status;
        // if ($status == 1) {
        //     ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
        //         'status' => 2,
        //         'updateBy' => Auth::User()->id,
        //     ]);

        //     $shopAccessName = User::where('employeeId',$shopEmployeeEntryId)->first()->shopAccessName;
        //     User::where('employeeId',$shopEmployeeEntryId)->update([
        //        'shopAccessName' => strrev($shopAccessName),
        //     ]);
        // }
        // else {
        //     ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
        //         'status' => 1,
        //         'updateBy' => Auth::User()->id,
        //     ]);
        //     $shopAccessName = User::where('employeeId',$shopEmployeeEntryId)->first()->shopAccessName;
        //     User::where('employeeId',$shopEmployeeEntryId)->update([
        //        'shopAccessName' => strrev($shopAccessName),
        //     ]);
        // }
        ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
                    'status' => 2,
                    'statusUpdateDate' =>  $request->date,
                    'reason' => $request->reason,
                    'updateBy' => Auth::User()->id,
                ]);
        return ['success' => "ok"];
    }
    public function unsuspend(Request $request,$shopEmployeeEntryId)
    {
        // $status = ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->first()->status;
        // if ($status == 1) {
        //     ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
        //         'status' => 2,
        //         'updateBy' => Auth::User()->id,
        //     ]);

        //     $shopAccessName = User::where('employeeId',$shopEmployeeEntryId)->first()->shopAccessName;
        //     User::where('employeeId',$shopEmployeeEntryId)->update([
        //        'shopAccessName' => strrev($shopAccessName),
        //     ]);
        // }
        // else {
        //     ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
        //         'status' => 1,
        //         'updateBy' => Auth::User()->id,
        //     ]);
        //     $shopAccessName = User::where('employeeId',$shopEmployeeEntryId)->first()->shopAccessName;
        //     User::where('employeeId',$shopEmployeeEntryId)->update([
        //        'shopAccessName' => strrev($shopAccessName),
        //     ]);
        // }
        ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
                    'status' => 1,
                    'statusUpdateDate' =>  $request->date,
                    'reason' => $request->reason,
                    'updateBy' => Auth::User()->id,
                ]);
        return ['success' => "ok"];
    }
    public function salaryPush(Request $request,$shopEmployeeEntryId)
    {
        // $status = ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->first()->status;
        // if ($status == 1) {
        //     ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
        //         'status' => 2,
        //         'updateBy' => Auth::User()->id,
        //     ]);

        //     $shopAccessName = User::where('employeeId',$shopEmployeeEntryId)->first()->shopAccessName;
        //     User::where('employeeId',$shopEmployeeEntryId)->update([
        //        'shopAccessName' => strrev($shopAccessName),
        //     ]);
        // }
        // else {
        //     ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
        //         'status' => 1,
        //         'updateBy' => Auth::User()->id,
        //     ]);
        //     $shopAccessName = User::where('employeeId',$shopEmployeeEntryId)->first()->shopAccessName;
        //     User::where('employeeId',$shopEmployeeEntryId)->update([
        //        'shopAccessName' => strrev($shopAccessName),
        //     ]);
        // }
        ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
                    'salaryStatus' => 2,
                    'statusUpdateDate' =>  $request->date,
                    'reason' => $request->reason,
                    'updateBy' => Auth::User()->id,
                ]);
        return ['success' => "ok"];
    }
    public function salaryactive(Request $request,$shopEmployeeEntryId)
    {
        // $status = ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->first()->status;
        // if ($status == 1) {
        //     ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
        //         'status' => 2,
        //         'updateBy' => Auth::User()->id,
        //     ]);

        //     $shopAccessName = User::where('employeeId',$shopEmployeeEntryId)->first()->shopAccessName;
        //     User::where('employeeId',$shopEmployeeEntryId)->update([
        //        'shopAccessName' => strrev($shopAccessName),
        //     ]);
        // }
        // else {
        //     ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
        //         'status' => 1,
        //         'updateBy' => Auth::User()->id,
        //     ]);
        //     $shopAccessName = User::where('employeeId',$shopEmployeeEntryId)->first()->shopAccessName;
        //     User::where('employeeId',$shopEmployeeEntryId)->update([
        //        'shopAccessName' => strrev($shopAccessName),
        //     ]);
        // }
        ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
                    'salaryStatus' => 1,
                    'statusUpdateDate' =>  $request->date,
                    'reason' => $request->reason,
                    'updateBy' => Auth::User()->id,
                ]);
        return ['success' => "ok"];
    }
    public function close(Request $request,$shopEmployeeEntryId)
    {
        // $status = ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->first()->status;
        // if ($status == 1) {
        //     ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
        //         'status' => 2,
        //         'updateBy' => Auth::User()->id,
        //     ]);

        //     $shopAccessName = User::where('employeeId',$shopEmployeeEntryId)->first()->shopAccessName;
        //     User::where('employeeId',$shopEmployeeEntryId)->update([
        //        'shopAccessName' => strrev($shopAccessName),
        //     ]);
        // }
        // else {
        //     ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
        //         'status' => 1,
        //         'updateBy' => Auth::User()->id,
        //     ]);
        //     $shopAccessName = User::where('employeeId',$shopEmployeeEntryId)->first()->shopAccessName;
        //     User::where('employeeId',$shopEmployeeEntryId)->update([
        //        'shopAccessName' => strrev($shopAccessName),
        //     ]);
        // }
        ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
                    'status' => 3,
                    'statusUpdateDate' =>  $request->date,
                    'reason' => $request->reason,
                    'updateBy' => Auth::User()->id,
                ]);
        return ['success' => "ok"];
    }
    public function rejoin(Request $request,$shopEmployeeEntryId)
    {
        // $status = ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->first()->status;
        // if ($status == 1) {
        //     ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
        //         'status' => 2,
        //         'updateBy' => Auth::User()->id,
        //     ]);

        //     $shopAccessName = User::where('employeeId',$shopEmployeeEntryId)->first()->shopAccessName;
        //     User::where('employeeId',$shopEmployeeEntryId)->update([
        //        'shopAccessName' => strrev($shopAccessName),
        //     ]);
        // }
        // else {
        //     ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
        //         'status' => 1,
        //         'updateBy' => Auth::User()->id,
        //     ]);
        //     $shopAccessName = User::where('employeeId',$shopEmployeeEntryId)->first()->shopAccessName;
        //     User::where('employeeId',$shopEmployeeEntryId)->update([
        //        'shopAccessName' => strrev($shopAccessName),
        //     ]);
        // }
        ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
                    'status' => 1,
                    'statusUpdateDate' =>  $request->date,
                    'reason' => $request->reason,
                    'updateBy' => Auth::User()->id,
                ]);
        return ['success' => "ok"];
    }
    public function salarySheetReport()
    {
        if (isset(Auth::user()->id)) {
           $shopTypeId = Auth::User()->shopTypeId;
           $salarySheetReports = StartSalarySetup::with(['shopEmployeeName'=>function($query){
        $query->where('status',1)->where('salaryStatus',1)->get();
     }])->with('gradeEntryList','JobDepartments')->orderBy('salarySetupId','desc')->where('createBy',Auth::User()->id)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->paginate(30);
           return ['salarySheetReports' => $salarySheetReports];
        }
        else {
            $salarySheetReports = "";
            return ['salarySheetReports' => $salarySheetReports];
        }
    }
    public function serchEmployeeSalary(Request $request)
    {

        if ($request->employeEntryId == 'all' && $request->paymentStatus == 'all' && $request->monthlyPayment == 'all' ) {
            return ['all'=> 'all'];
        }
        else {
          if (isset(Auth::user()->shopId)) {
                $employeEntryId = $request->employeEntryId;
                $paymentStatus = $request->paymentStatus;
                $monthlyPayment = $request->monthlyPayment;

                   $salarySheetReports =  StartSalarySetup::with('shopEmployeeName','gradeEntryList','JobDepartments')
                                     ->where('employeEntryId', 'LIKE', "%$employeEntryId%")
                                     ->where('paymentStatus','LIKE',"%$paymentStatus%")
                                     ->where('monthDate','LIKE',"%$monthlyPayment%")
                                     ->orderBy('salarySetupId','desc')
                                     ->paginate(20);

              if (count($salarySheetReports) > 0) {
                  return ['salarySheetReports' => $salarySheetReports];
              }
              else {
                  return ['noRecode' => 'noRecode'];
              }
          }
       }
    }
    public function salarySheetStatement($employeEntryId)
    {
          $employeeSalaryDetails = StartSalarySetup::with('shopEmployeeName','gradeEntryList','JobDepartments')->where('employeEntryId', $employeEntryId)->get();
          $employeeName = StartSalarySetup::with('shopEmployeeName')->where('employeEntryId', $employeEntryId)->first();
          return ['employeeSalaryDetails' => $employeeSalaryDetails, 'employeeName' =>$employeeName];
    }
    public function salaryGradeReport()
    {
        if (isset(Auth::user()->id)) {
         
           $gradeLists = GradeEntry::orderBy('gradeEntryId','desc')->where('createBy',Auth::User()->id)->where('shopId',Auth::user()->shopId)->where('shopTypeId',Auth::User()->shopTypeId)->paginate(30);
           return ['gradeLists' => $gradeLists];
        }
        else {
            $gradeLists = GradeEntry::where('createBy',Auth::User()->id)->paginate(30);
            return ['gradeLists' => $gradeLists];
        }
    }
    public function salaryGradeSetupReport()
    {
        if (isset(Auth::user()->id)) {
             $shopTypeId = Auth::user()->shopTypeId;
             $employeeTypeList = ShopEmployeeType::where('shopEmployeeTypeStatus',1)->orderBy('shopEmployeeTypeId','desc')->get();
             $jobDepartmentList = JobDepartmentEntry::orderBy('jobDepartmentEntryId','desc')->get();
             $salaryGradeSetupList = SalaryGradeSetup::with('ShopEmployeeList','GradeList')->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->orderBy('salaryGradeSetupId','desc')->paginate(30);
             return ['employeeTypeList' => $employeeTypeList,'jobDepartmentList' => $jobDepartmentList,'salaryGradeSetupList' => $salaryGradeSetupList];
          }
          else {
            $employeeTypeList = ShopEmployeeType::where('shopEmployeeTypeStatus',1)->orderBy('shopEmployeeTypeId','desc')->get();
            $jobDepartmentList = JobDepartmentEntry::orderBy('jobDepartmentEntryId','desc')->get();
            $salaryGradeSetupList = SalaryGradeSetup::with('ShopEmployeeList','GradeList')->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->orderBy('salaryGradeSetupId','desc')->paginate(30);
            return ['employeeTypeList' => $employeeTypeList,'jobDepartmentList' => $jobDepartmentList,'salaryGradeSetupList' => $salaryGradeSetupList];
          }
    }
    public function jobDepartmentReport()
    {
        $jobDepartmentOwnerList = JobDepartmentEntry::orderBy('jobDepartmentEntryId','desc')->where('shopId',Auth::user()->shopId)->paginate(20);
        $jobDepartmentGlobalList = JobDepartmentEntry::orderBy('jobDepartmentEntryId','desc')->where('createBy','!=',Auth::User()->id)->paginate(20);
        return ['jobDepartmentOwnerList'=> $jobDepartmentOwnerList,'jobDepartmentGlobalList' => $jobDepartmentGlobalList];
    }
    public function employeeTypeReport()
    {
        $employeeTypeOwnerList = ShopEmployeeType::orderBy('shopEmployeeTypeId','desc')->where('shopTypeId',Auth::User()->shopTypeId)->where('shopId',Auth::User()->shopId)->paginate(20);
        $employeeTypeGlobalList = ShopEmployeeType::orderBy('shopEmployeeTypeId','desc')->where('shopTypeId',!Auth::User()->shopTypeId)->where('shopId',!Auth::User()->shopId)->paginate(20);
        return ['employeeTypeOwnerList'=> $employeeTypeOwnerList,'employeeTypeGlobalList' => $employeeTypeGlobalList];
    }
    public function employeeAttendanceInfo($id){
                     $present=EmployeeAttendance::where('employeEntryId',$id)->where('attendanceStatus','P')->whereMonth('created_at', Carbon::now()->subMonth())->count();
                     return['present'=>$present];
    }
    public function holidaySetupReport()
    {
        $holidaySetupOWnerList = AdminHolidaySetup::with('adminHolidayTypeRelation')->where('createBy',Auth::User()->id)->paginate(20);
        $dayRemain = AdminHolidaySetup::with('adminHolidayTypeRelation')->whereMonth('holidayStartDate', Carbon::now()->month)->sum('dayRemain');
        $workingDay = AdminHolidaySetup::with('adminHolidayTypeRelation')->whereMonth('holidayStartDate', Carbon::now()->subMonth())->sum('dayRemain');

        $holidaySetupOWnerListPagi = AdminHolidaySetup::with('adminHolidayTypeRelation')->where('holidaySetupStatus',1)->get();
        $holidaySetupGlobalList = AdminHolidaySetup::with('adminHolidayTypeRelation')->where('createBy','!=',Auth::User()->id)->paginate(20);
        return ['holidaySetupOWnerList' => $holidaySetupOWnerList,'workingDay'=>$workingDay,'dayRemain'=>$dayRemain,'holidaySetupGlobalList' => $holidaySetupGlobalList,'holidaySetupOWnerListPagi'=>$holidaySetupOWnerListPagi];
     }
     public function yearlyLeave($month,$year)
    {
          

        
          $holidaySetupOWnerList = AdminHolidaySetup::with('adminHolidayTypeRelation')->whereYear('holidayStartDate', '=', $year)->whereMonth('holidayStartDate', '=', $month)->paginate(20);
          $holidaySetupOWnerListPagi = AdminHolidaySetup::with('adminHolidayTypeRelation')->where('holidaySetupStatus',1)->whereYear('holidayStartDate', '=', $year)->whereMonth('holidayStartDate', '=', $month)->where('createBy',Auth::User()->id)->get();
          $holidaySetupGlobalList = AdminHolidaySetup::with('adminHolidayTypeRelation')->whereYear('holidayStartDate', '=', $year)->whereMonth('holidayStartDate', '=', $month)->paginate(20);
          return ['holidaySetupOWnerList' => $holidaySetupOWnerList,'holidaySetupGlobalList' => $holidaySetupGlobalList,'holidaySetupOWnerListPagi'=>$holidaySetupOWnerListPagi];
     }
    public function leaveReport()
    {
        $shopTypeId = Auth::User()->shopTypeId;
        $leaveReportLists = EmployeeLeaveEntry::with('employeeName','employeeName.shopEmployeeTypes','employeeName.jobDepartments')->whereDate('endDate','>=',Carbon::now())->where('shopId',Auth::user()->shopId)->orderby('endDate','desc')->where('shopTypeId',$shopTypeId)->latest()->paginate(20);
       
        $leaveLists = EmployeeLeaveEntry::with('employeeName')->where('shopId',Auth::user()->shopId)->orderby('endDate','desc')->where('shopTypeId',$shopTypeId)->distinct('employeEntryId')->get('employeEntryId');
       
        return ['leaveReportLists' => $leaveReportLists,'leaveLists' => $leaveLists];
     }
    public function leaveReportMonth($employee,$month,$year)
    {
        $shopTypeId = Auth::User()->shopTypeId;
        if($employee==0){       
        $leaveReportLists = EmployeeLeaveEntry::whereDate('endDate','>=',Carbon::now())->whereYear('created_at', '=', $year)
        ->whereMonth('created_at', '=', $month)->with('employeeName','employeeName.shopEmployeeTypes','employeeName.jobDepartments')->where('shopId',Auth::user()->shopId)->orderby('endDate','desc')->where('shopTypeId',$shopTypeId)->latest()->paginate(20);

        return ['leaveReportLists' => $leaveReportLists];
        }
        if($employee!=0&&$month!=0){       
        $leaveReportLists = EmployeeLeaveEntry::whereDate('endDate','>=',Carbon::now())->where('employeEntryId',$employee)->whereYear('created_at', '=', $year)
        ->whereMonth('created_at', '=', $month)->with('employeeName','employeeName.shopEmployeeTypes','employeeName.jobDepartments')->where('shopId',Auth::user()->shopId)->orderby('endDate','desc')->where('shopTypeId',$shopTypeId)->latest()->paginate(20);

        return ['leaveReportLists' => $leaveReportLists];
        }
        if($month==0){       
        $leaveReportLists = EmployeeLeaveEntry::where('employeEntryId',$employee)->whereDate('endDate','>=',Carbon::now())->with('employeeName','employeeName.shopEmployeeTypes','employeeName.jobDepartments')->where('shopId',Auth::User()->shopId)->orderby('endDate','desc')->where('shopTypeId',$shopTypeId)->latest()->paginate(20);

        return ['leaveReportLists' => $leaveReportLists];
        }
        else{       
        $leaveReportLists = EmployeeLeaveEntry::whereDate('endDate','>=',Carbon::now())->whereYear('created_at', '=', $year)
        ->whereMonth('created_at', '=', $month)->with('employeeName','employeeName.shopEmployeeTypes','employeeName.jobDepartments')->where('shopId',Auth::user()->shopId)->orderby('endDate','desc')->where('shopTypeId',$shopTypeId)->latest()->paginate(20);

        return ['leaveReportLists' => $leaveReportLists];
        }
     }
    public function employeeAttendanceReport()
    {
          $shopTypeId = Auth::User()->shopTypeId;
                         
          $employeeNames = ShopEmployeeEntry::select('shopEmployeeEntryId','userName')->where('createBy',Auth::User()->id)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->latest()->get();

          $attendanceReports = EmployeeAttendance::whereYear('created_at', '=', Carbon::now())->whereMonth('created_at', '=',  Carbon::now())->where('shopId',Auth::User()->shopId)->where('shopTypeId',$shopTypeId)->orderBy('employeeAttendanceId','asc')->get();
          $totalAttendance = DB::table('employee_attendances')->whereYear('created_at', '=', Carbon::now())->whereMonth('created_at', '=',  Carbon::now())->where('shopId',Auth::User()->shopId)->where('shopTypeId',$shopTypeId)->select('employeEntryId','attendanceStatus', DB::raw('count(*) as total'))->groupby('employeEntryId','attendanceStatus')->get();
          return ['totalAttendance'=>$totalAttendance,'employeeNames' => $employeeNames, 'attendanceReports' => $attendanceReports];
     }
    public function employeeAttendanceReportMonthly($month,$year)
    {
          $shopTypeId = Auth::User()->shopTypeId;

          $employeeNames = ShopEmployeeEntry::select('shopEmployeeEntryId','userName')->where('createBy',Auth::User()->id)->whereYear('created_at', '<=', $year)->whereMonth('created_at', '<=', $month)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->latest()->get();
          $dayRemain = AdminHolidaySetup::with('adminHolidayTypeRelation')->where('createBy',Auth::User()->id)->whereYear('holidayStartDate', '=', $year)->whereMonth('holidayStartDate', '=', $month)->sum('dayRemain');

          $attendanceReports = EmployeeAttendance::whereYear('created_at', '=', $year)->whereMonth('created_at', '=', $month)->where('createBy', Auth::User()->id)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->orderBy('employeeAttendanceId','asc')->get();
          $totalAttendance = DB::table('employee_attendances')->whereYear('created_at', '=',  $year)->whereMonth('created_at', '=', $month)->where('shopId',Auth::User()->shopId)->where('shopTypeId',$shopTypeId)->select('employeEntryId','attendanceStatus', DB::raw('count(*) as total'))->groupby('employeEntryId','attendanceStatus')->get();
          return ['totalAttendance'=>$totalAttendance ,'employeeNames' => $employeeNames,'dayRemain'=>$dayRemain, 'attendanceReports' => $attendanceReports];
     }

}
