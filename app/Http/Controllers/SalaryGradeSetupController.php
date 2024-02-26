<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ShopEmployeeEntry;
use App\GradeEntry;
use App\Models\Admin;
use App\ShopInformation;
use App\SalaryGradeSetup;
use App\JobDepartmentEntry;
use Carbon\Carbon;
use Auth;
class SalaryGradeSetupController extends Controller
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
             $shopTypeId = Auth::user()->shopTypeId;

             $salaryGradeSetupList = SalaryGradeSetup::with('ShopEmployeeList','GradeList')->where('createBy',Auth::User()->id)->where('shopId',Auth::User()->shopId)->where('shopTypeId',$shopTypeId)->orderBy('salaryGradeSetupId','desc')->paginate(30);
             return ['salaryGradeSetupList' => $salaryGradeSetupList];
          }
          else {
              $salaryGradeSetupList = SalaryGradeSetup::where('createBy',Auth::User()->id)->orderBy('salaryGradeSetupId','desc')->paginate(30);
              return ['salaryGradeSetupList' => $salaryGradeSetupList];
          }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {   if (isset(Auth::user()->shopId)) {
            $shopTypeId = ShopInformation::where('shopInfoId',Auth::user()->shopId)->first()->shopTypeId;
            $employeeName = ShopEmployeeEntry::orderBy('shopEmployeeEntryId','desc')->where('shopId',Auth::User()->shopId)->where('shopTypeId',$shopTypeId)->get();
            $salaryGradeList = GradeEntry::orderBy('gradeEntryId','desc')->where('shopId',Auth::User()->shopId)->where('shopTypeId',$shopTypeId)->get();
            return ['salaryGradeList' => $salaryGradeList,'employeeName' => $employeeName];
         }
    }
    public function employeeName()
    {   
            $employeeName = ShopEmployeeEntry::orderBy('shopEmployeeEntryId','desc')->where('setupStatus',0)->where('shopId',Auth::User()->shopId)->where('shopTypeId',Auth::User()->shopTypeId)->get();
            $employeeNameInfo = ShopEmployeeEntry::orderBy('shopEmployeeEntryId','desc')->where('shopId',Auth::User()->shopId)->where('shopTypeId',Auth::User()->shopTypeId)->get();
            $employeeSetupName = ShopEmployeeEntry::with('start')->orderBy('shopEmployeeEntryId','desc')->where('setupStatus',1)->where('shopId',Auth::User()->shopId)->where('shopTypeId',Auth::User()->shopTypeId)->get();
            return ['employeeNameInfo'=>$employeeNameInfo,'employeeName' => $employeeName,'employeeSetupName'=>$employeeSetupName];
    }
    public function employeeList()
    {       $msg2 = array();
            $datas = Admin::where('role',4)->where('shopId',Auth::User()->shopId)->get();
            foreach($datas as $data){

                $jobId = ShopEmployeeEntry::where('shopEmployeeEntryId',$data->employeeId)->first()->jobDepartmentId;
                if(JobDepartmentEntry::where('jobDepartmentEntryId',$jobId)->exists()){
                    $job = JobDepartmentEntry::where('jobDepartmentEntryId',$jobId)->first()->jobDepartmentName;
                }
                else{
                    $job = '';
                }
                $msg2[] = array(
                    "id" => $data->id,
                    "employeeName" => ShopEmployeeEntry::where('shopEmployeeEntryId',$data->employeeId)->first()->fullName,
                    "job" => $job,
                    );
            
                }
            return ['employeeName' => $msg2];
    }

    public function salaryGradeList()
    {   if (isset(Auth::user()->id)) {
            $shopTypeId = Auth::user()->shopTypeId;
            $salaryGradeList = GradeEntry::orderBy('gradeEntryId','desc')->where('shopId',Auth::User()->shopId)->where('shopTypeId',$shopTypeId)->get();
            return ['salaryGradeList' => $salaryGradeList];
         }
    }
    
    public function salaryGradeAmount($gradeEntryId)
    {
        $salaryGradeAmount = GradeEntry::where('gradeEntryId',$gradeEntryId)->first()->gradeAmount;
        return ['salaryGradeAmount' => $salaryGradeAmount];
    }
    public function salaryInfo($employee)
    {
        $grade = SalaryGradeSetup::where('employeEntryId',$employee)->first();
       
        $salaryGradeAmount = GradeEntry::where('gradeEntryId',$grade->gradeEntryId)->first();
        return ['salaryGradeAmount' => $salaryGradeAmount];
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
              'employeEntryId' => 'required',
              'gradeEntryId' => 'required',
              'salaryGradeSetupStatus' => 'required',
          ],
          [
             'employeEntryId.required' => 'Select Employee  Name',
             'gradeEntryId.required' => 'Select Salary Grade  Name',
             'salaryGradeSetupStatus.required' => 'Select Grade Setup Status',
          ]);

          if (isset(Auth::User()->id)) {
            $shopTypeId = Auth::User()->shopTypeId;
          }

          if (SalaryGradeSetup::where('employeEntryId',$request->employeEntryId)->where('gradeEntryId',$request->gradeEntryId)->exists()) {
            return ['gradeSetup' => 'Already Salary Grade Setup'];
          }
          else {
            $SalaryGradeSetup = new SalaryGradeSetup ();
            $SalaryGradeSetup->employeEntryId = $request->employeEntryId;
            $SalaryGradeSetup->gradeEntryId = $request->gradeEntryId;
            $SalaryGradeSetup->salaryGradeSetupStatus = $request->salaryGradeSetupStatus;
            $SalaryGradeSetup->shopId = Auth::User()->shopId;
            $SalaryGradeSetup->shopTypeId = $shopTypeId;
            $SalaryGradeSetup->createBy = Auth::User()->id;
            $SalaryGradeSetup->created_at = Carbon::now();
            $SalaryGradeSetup->save();
            ShopEmployeeEntry::where('shopEmployeeEntryId',$request->employeEntryId)->where('shopId',Auth::User()->shopId)->update([
                'setupStatus'=>1,
            ]);
          }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($salaryGradeSetupId)
    {
        $salaryGradeSetupStatus = SalaryGradeSetup::where('salaryGradeSetupId', $salaryGradeSetupId)->first()->salaryGradeSetupStatus;

        if ($salaryGradeSetupStatus == 0){
            SalaryGradeSetup::where('salaryGradeSetupId', $salaryGradeSetupId)->update([
                'salaryGradeSetupStatus' => 1,
                'updateBy' => Auth::User()->id,
            ]);
        }
        else {
            SalaryGradeSetup::where('salaryGradeSetupId', $salaryGradeSetupId)->update([
              'salaryGradeSetupStatus' => 0,
              'updateBy' => Auth::User()->id,
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($salaryGradeSetupId)
    {
       $salaryGradeSetupData = SalaryGradeSetup::where('salaryGradeSetupId', $salaryGradeSetupId)->first();

       $gradeAmount = GradeEntry::where('gradeEntryId', $salaryGradeSetupData->gradeEntryId)->first()->gradeAmount;
       return ['salaryGradeSetupData' => $salaryGradeSetupData, 'gradeAmount' => $gradeAmount];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $salaryGradeSetupId)
    {
        $this->validate($request, [
            'employeEntryId' => 'required',
            'gradeEntryId' => 'required',
            'salaryGradeSetupStatus' => 'required',
        ],
        [
           'employeEntryId.required' => 'Select Employee  Name',
           'gradeEntryId.required' => 'Select Salary Grade  Name',
           'salaryGradeSetupStatus.required' => 'Select Grade Setup Status',
        ]);

        if (SalaryGradeSetup::where('employeEntryId',$request->employeEntryId)->where('gradeEntryId',$request->gradeEntryId)->where('salaryGradeSetupId','!=',$salaryGradeSetupId)->exists()) {
           return ['changeName' => 'Change Your Grade Name'];
        }
        else {
            SalaryGradeSetup::where('salaryGradeSetupId',$salaryGradeSetupId)->update([
                'employeEntryId' => $request->employeEntryId,
                'gradeEntryId'=> $request->gradeEntryId,
                'salaryGradeSetupStatus'=> $request->salaryGradeSetupStatus,
                'updateBy'=> Auth::user()->id,
            ]);
        }

    }
    public function salaryGradeUpdate(Request $request,$employeeId,$gradeId)
    {
        
            SalaryGradeSetup::where('employeEntryId',$employeeId)->update([
               
                'gradeEntryId'=> $gradeId,
              
                'updateBy'=> Auth::user()->id,
            ]);
        ShopEmployeeEntry::where('shopEmployeeEntryId',$employeeId)->update([
            'jobDepartmentId'=>$request->jobDepartment,
            'employeeTypeId'=>$request->employeeType,
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
