<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\JobDepartmentEntry;
use App\ShopEmployeeEntry;
use App\SalaryGradeSetup;
use App\StartSalarySetup;
use App\ShopInformation;
use App\GradeEntry;
use App\AccountSetup;
use App\ChartOfAccount;
use App\ChartOfAccountRegister;
use Carbon\Carbon;
use Auth;

class SalaryStartSetupController extends Controller
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
          $shopTypeId = Auth::User()->shopTypeId;
          $salarySetupLists = StartSalarySetup::
          with('shopEmployeeName','gradeEntryList','JobDepartments')
          ->where('shopId',Auth::User()->shopId)->where('shopTypeId',$shopTypeId)->latest()->paginate(15);
          return ['salarySetupLists' => $salarySetupLists];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }
    public function salaryGradeName($employeEntryId)
    {
          $employeeTypeId = ShopEmployeeEntry::where('shopEmployeeEntryId',$employeEntryId)->first();
          $jobDepartmentinfo = JobDepartmentEntry::where('jobDepartmentEntryId',$employeeTypeId->jobDepartmentId)->first();

          $gradeEntryId = SalaryGradeSetup::where('employeEntryId',$employeEntryId)->first();
          $salaryGradeinfo = GradeEntry::where('gradeEntryId',$gradeEntryId->gradeEntryId)->first();

          return ['salaryGradeinfo' => $salaryGradeinfo, 'jobDepartmentinfo' => $jobDepartmentinfo];


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
        
            'salarySetupStatus' => 'required',
        ],
        [
           'employeEntryId.required' => 'Select Employee  Name',
           'startDate.required' => 'Select Salary Setup Date',
           'salarySetupStatus.required' => 'Select Salary Status',
        ]);

        if (StartSalarySetup::where('employeEntryId',$request->employeEntryId)->exists()) {
           return ['alreadySetup' => 'Already Employee Salary Setup'];
        }
        else {


            // ============================================
            // =============== Chart Of Accounts ==========
            // ============================================


            ////////          sirial

            if(StartSalarySetup::where('shopId',Auth::user()->shopId)
            ->orderBy('salarySetupId','DESC')
            ->exists()){

            $noOfRow = StartSalarySetup::where('shopId',Auth::user()->shopId)
            ->orderBy('salarySetupId','DESC')
            ->first()->accountCodeSirial+1;

            }else{
                $noOfRow = 1;
            }

            ////////          /sirial 
            
            
            ////////          Previous Account Code   
                $code = AccountSetup::where('placementType','26')->where('headName','104')->first()->headCode;
            ////////          /Previous Account Code 
             

            
            $fullName = ShopEmployeeEntry::where('shopEmployeeEntryId',$request->employeEntryId)->first()->fullName;
            // $headShortName = strtoupper($headShortName);
            // $headShortName = $request->userName.' ('. $request->phoneNumber .')';
                        

            $headName = $fullName;
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





            $shopTypeId = Auth::User()->shopTypeId;
            $jobDepartmentinfo = ShopEmployeeEntry::where('shopEmployeeEntryId',$request->employeEntryId)->first()->jobDepartmentId;

            $StartSalarySetup = new StartSalarySetup();
            $StartSalarySetup->employeEntryId = $request->employeEntryId;
            
            $StartSalarySetup->accountCodeSirial = $noOfRow;
            $StartSalarySetup->accountCode = $accCode;

            $StartSalarySetup->jobDepartmentId = $jobDepartmentinfo;
            $StartSalarySetup->gradeEntryId = $request->gradeEntryId;
            $StartSalarySetup->salaryStartYear = $request->year;
            $StartSalarySetup->salaryMonthYear = $request->monthIndex;
            $StartSalarySetup->salaryStartDate = $request->monthInfo;
            $StartSalarySetup->salarySetupStatus = $request->salarySetupStatus;
            $StartSalarySetup->shopId = Auth::User()->shopId;
            $StartSalarySetup->shopTypeId = $shopTypeId;
            $StartSalarySetup->createBy = Auth::User()->id;
            $StartSalarySetup->save();
        }

        return ['success' => 'ok'];

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($salarySetupId)
    {
          $salarySetupStatus = StartSalarySetup::where('salarySetupId', $salarySetupId)->first()->salarySetupStatus;

          if ($salarySetupStatus == 1){
              StartSalarySetup::where('salarySetupId', $salarySetupId)->update([
                  'salarySetupStatus' => 0,
                  'updateBy' => Auth::user()->id,
              ]);
          }
          if ($salarySetupStatus == 0){
              StartSalarySetup::where('salarySetupId', $salarySetupId)->update([
                  'salarySetupStatus' => 1,
                  'updateBy' => Auth::user()->id,
              ]);
          }
    }
    public function salaryPaymentStatus($salarySetupId)
    {
          $paymentStatus = StartSalarySetup::where('salarySetupId', $salarySetupId)->first()->paymentStatus;

          if ($paymentStatus == 1){
              StartSalarySetup::where('salarySetupId', $salarySetupId)->update([
                  'paymentStatus' => 0,
                  'updateBy' => Auth::user()->id,
              ]);
          }
          if ($paymentStatus == 0){
              StartSalarySetup::where('salarySetupId', $salarySetupId)->update([
                  'paymentStatus' => 1,
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
    public function edit($salarySetupId)
    {
          $startSalarySetupList = StartSalarySetup::with('gradeEntryList','JobDepartments')->where('salarySetupId',$salarySetupId)->first();
          return ['startSalarySetupList' => $startSalarySetupList];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $salarySetupId)
    {
        

          if (StartSalarySetup::where('employeEntryId',$request->employeEntryId)->where('salarySetupId','!=',$salarySetupId)->exists()) {
              return ['alreadySetup' => 'Already Employee Salary Setup'];
          }
          else {
             $jobDepartmentinfo = ShopEmployeeEntry::where('shopEmployeeEntryId',$request->employeEntryId)->first()->jobDepartmentId;

                       StartSalarySetup::where('salarySetupId',$salarySetupId)->update([
                      'employeEntryId' => $request->employeEntryId,
                      'jobDepartmentId' => $jobDepartmentinfo,
                      'gradeEntryId' => $request->gradeEntryId,
                      'salaryStartYear' => $request->year,
                      'salaryMonthYear' => $request->monthIndex,
                      'salarySetupStatus' => $request->salarySetupStatus,
                      'updateBy' => Auth::User()->id,
                ]);

                return ['success' => 'ok'];
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
