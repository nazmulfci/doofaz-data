<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ShopEmployeeEntry;
use App\ShopEmployeeType;
use App\JobDepartmentEntry;
use App\ShopInformation;
use App\AdminNameOfInstitute;
use App\AdminNameOfDegree;
use App\AdminSkillGrade;
use App\AdminGrade;
use App\EmployeeEducationEntry;
use App\EmployeeProfessionalEntry;
use App\EmployeeSkillEntry;
use App\EmployeeBankingEntry;
use App\BankEntry;
use App\User;
use App\Models\Admin;
use App\AccountSetup;
use App\BillingInformation;
use App\ChartOfAccount;
use App\ChartOfAccountRelation;
use App\Models\Admin as ModelsAdmin;
use Carbon\Carbon;
use DataTables;
use Auth;

class ShopEmployeeEntryController extends Controller
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



        if (isset(Auth::User()->shopId)) {
            $shopTypeId = Auth::user()->shopTypeId;
            $shopEmployeeList = ShopEmployeeEntry::with('shopEmployeeTypes','JobDepartments')->where('shopId',Auth::User()->shopId)->where('shopTypeId',$shopTypeId)->limit(100);
            return DataTables::eloquent($shopEmployeeList)

            ->addColumn('shopEmployeeTypes', function (ShopEmployeeEntry $get) {

               if( $get->shopEmployeeTypes!==null){
                return $get->shopEmployeeTypes->shopEmployeeTypeName;
               }else{
                return "NULL";
               }

        })
        ->addColumn('customStatus', function (ShopEmployeeEntry $get) {


            return $get->status.','.$get->shopEmployeeEntryId;


    })
            ->addColumn('JobDepartments', function (ShopEmployeeEntry $get) {
                if( $get->JobDepartments!==null){

                return $get->JobDepartments->jobDepartmentName;
                }else{
                    return "NULL";
                }

        })
            ->toJson();
        }
        else {
            $shopEmployeeList = ShopEmployeeEntry::with('shopEmployeeTypes','JobDepartments')->where('createBy',Auth::User()->id)->latest()->paginate(20);
            return ['employeeList' => $shopEmployeeList];
        }
    }

    public function checkShopEmployeeUserName($id){
        if(ShopEmployeeEntry::where('userName',$id)->where('shopId',Auth::User()->shopId)->exists()){
            $return = 1;
        }
        else{
            $return = 0;
        }
        return ['employeeUserNameExist' => $return];
    }
    public function employeeNameList()
    {
        if (isset(Auth::User()->shopId)) {
            $shopTypeId =Auth::User()->shopTypeId;
           $employeeName = ShopEmployeeEntry::with('shopEmployeeTypes','JobDepartments')->where('shopId',Auth::User()->shopId)->where('shopTypeId',$shopTypeId)->latest()->get();
           return ['employeeName' => $employeeName];
        }
        else {
            $employeeName = ShopEmployeeEntry::with('shopEmployeeTypes','JobDepartments')->where('createBy',Auth::User()->id)->latest()->latest()->get();
            return ['employeeName' => $employeeName];
        }
    }

    public function employee_deactivate($shopEmployeeEntryId){
        $info = ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->first();
        $info->status='0';
        $info->save();


        $info1 = Admin::where('employeeId',$shopEmployeeEntryId)->first();
        $info1->status='0';
        $info1->save();

    }


    public function employee_activate($shopEmployeeEntryId){
        $info = ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->first();
        $info->status='1';
        $info->save();

        $info1 = Admin::where('employeeId',$shopEmployeeEntryId)->first();
        $info1->status='9';
        $info1->save();
    }

    public function employeeListAssign()
    {
           $data = Admin::where('shopId',Auth::User()->shopId)->where('role',4)->get();
           return ['data' => $data];

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $employeeTypeList =    ShopEmployeeType::orderBy('shopEmployeeTypeId','desc')->get();
        return ['employeeTypeList' => $employeeTypeList];
    }

    public function showEmployee($type,$department)
    {


            $employeeSetupName = ShopEmployeeEntry::orderBy('shopEmployeeEntryId','desc')->where('jobDepartmentId',$department)->where('employeeTypeId',$type)->where('shopId',Auth::User()->id)->where('shopTypeId',Auth::User()->shopTypeId)->get();
            return ['employeeSetupName'=>$employeeSetupName];

    }
    public function bankTypeList()
    {
          $bankTypeList = [];
          return ['bankTypeList'=> $bankTypeList];
    }
    public function bankNameList($bankTypeId)
    {

          $bankNameList = BankEntry::where('bankTypeEntryId',$bankTypeId)->orderBy('bankName','ASC')->get();
          return ['bankNameList'=> $bankNameList];
    }
    public function bankNameListGetInfo()
    {
          $bankNameList = BillingInformation::with('bank')->get();
          return ['bankNameList'=> $bankNameList];
    }
    public function educationInformation()
    {
        $instituteList = [];
        $degreeList = [];
        $skillGradeList = [];
        $gradeList = [];

        return ['instituteList' => $instituteList, 'degreeList' => $degreeList, 'skillGradeList' => $skillGradeList, 'gradeList' => $gradeList];
    }

    public function educationEntry(Request $request)
    {
        $this->validate($request, [
             'employeEntryId' => 'required',
             'nameOfInstituteId' => 'required',
             'nameOfDegreeId' => 'required',
             'gradeId' => 'required',
         ]);
         if (isset(Auth::User()->id)) {
            $shopTypeId = Auth::User()->shopTypeId;
         }
         if (EmployeeEducationEntry::where('employeEntryId',$request->employeEntryId)->where('nameOfInstituteId',$request->nameOfInstituteId)->where('nameOfDegreeId',$request->nameOfDegreeId)->where('gradeId',$request->gradeId)->exists()) {
            return ['employeeAlreadyEntry' => 'Already Employee Education Information Entry'];
         }
         else {
             $EmployeeEducationEntry = new EmployeeEducationEntry ();
             $EmployeeEducationEntry->employeEntryId = $request->employeEntryId;
             $EmployeeEducationEntry->nameOfInstituteId = $request->nameOfInstituteId;
             $EmployeeEducationEntry->nameOfDegreeId = $request->nameOfDegreeId;
             $EmployeeEducationEntry->gradeId = $request->gradeId;
             $EmployeeEducationEntry->shopId = Auth::User()->shopId;
             $EmployeeEducationEntry->shopTypeId = $shopTypeId;
             $EmployeeEducationEntry->createBy = Auth::User()->id;
             $EmployeeEducationEntry->created_at = Carbon::now();
             $EmployeeEducationEntry->save();
         }

    }
    public function professionalEntry(Request $request)
    {
        $this->validate($request, [
             'employeEntryId' => 'required',
             'organizationName' => 'required',
             'designation' => 'required',
             'yearOfExprience' => 'required',
             'address' => 'required',
         ]);
         if (isset(Auth::User()->id)) {
            $shopTypeId = Auth::User()->shopTypeId;
         }
         if (EmployeeProfessionalEntry::where('employeEntryId',$request->employeEntryId)->where('organizationName',$request->organizationName)->where('designation',$request->designation)->where('yearOfExprience',$request->yearOfExprience)->exists()) {
            return ['employeeAlreadyEntry' => 'Already Employee Professional Information Entry'];
         }
         else {
             $EmployeeProfessionalEntry = new EmployeeProfessionalEntry ();
             $EmployeeProfessionalEntry->employeEntryId = $request->employeEntryId;
             $EmployeeProfessionalEntry->organizationName = $request->organizationName;
             $EmployeeProfessionalEntry->designation = $request->designation;
             $EmployeeProfessionalEntry->yearOfExprience = $request->yearOfExprience;
             $EmployeeProfessionalEntry->address = $request->address;
             $EmployeeProfessionalEntry->shopId = Auth::User()->shopId;
             $EmployeeProfessionalEntry->shopTypeId = $shopTypeId;
             $EmployeeProfessionalEntry->createBy = Auth::User()->id;
             $EmployeeProfessionalEntry->created_at = Carbon::now();
             $EmployeeProfessionalEntry->save();
         }

    }
    public function skillEntry(Request $request)
    {
        $this->validate($request, [
             'employeEntryId' => 'required',
             'skillType' => 'required',
             'nameOfInstitute' => 'required',
             'durationOfSkill' => 'required',
         ]);
         if (isset(Auth::User()->id)) {
            $shopTypeId = Auth::User()->shopTypeId;
         }
         if (EmployeeSkillEntry::where('employeEntryId',$request->employeEntryId)->where('skillType',$request->skillType)->where('nameOfInstitute',$request->nameOfInstitute)->where('durationOfSkill',$request->durationOfSkill)->where('skillGradeId',$request->skillGradeId)->exists()) {
            return ['employeeAlreadyEntry' => 'Already Employee Professional Information Entry'];
         }
         else {
             $EmployeeSkillEntry = new EmployeeSkillEntry ();
             $EmployeeSkillEntry->employeEntryId = $request->employeEntryId;
             $EmployeeSkillEntry->skillType = $request->skillType;
             $EmployeeSkillEntry->nameOfInstitute = $request->nameOfInstitute;
             $EmployeeSkillEntry->durationOfSkill = $request->durationOfSkill;
             $EmployeeSkillEntry->skillGradeId = $request->skillGradeId;
             $EmployeeSkillEntry->shopId = Auth::User()->shopId;
             $EmployeeSkillEntry->shopTypeId = $shopTypeId;
             $EmployeeSkillEntry->createBy = Auth::User()->id;
             $EmployeeSkillEntry->created_at = Carbon::now();
             $EmployeeSkillEntry->save();
         }

    }
    public function bankingEntry(Request $request)
    {
        $this->validate($request, [
             'employeEntryId' => 'required',
             'bankTypeId' => 'required',
             'bankNameId' => 'required',
             'accountName' => 'required',
             'accountNumber' => 'required',
         ]);
         if (isset(Auth::User()->id)) {
            $shopTypeId = Auth::User()->shopTypeId;
         }
         if (EmployeeBankingEntry::where('employeEntryId',$request->employeEntryId)->where('bankTypeId',$request->bankTypeId)->where('bankNameId',$request->bankNameId)->where('accountName',$request->accountName)->where('accountNumber',$request->accountNumber)->exists()) {
            return ['employeeAlreadyEntry' => 'Already Employee Banking Information Entry'];
         }
         else {
             $EmployeeBankingEntry = new EmployeeBankingEntry ();
             $EmployeeBankingEntry->employeEntryId = $request->employeEntryId;
             $EmployeeBankingEntry->bankTypeId = $request->bankTypeId;
             $EmployeeBankingEntry->bankNameId = $request->bankNameId;
             $EmployeeBankingEntry->accountName = $request->accountName;
             $EmployeeBankingEntry->accountNumber = $request->accountNumber;
             $EmployeeBankingEntry->shopId = Auth::User()->shopId;
             $EmployeeBankingEntry->shopTypeId = $shopTypeId;
             $EmployeeBankingEntry->createBy = Auth::User()->id;
             $EmployeeBankingEntry->created_at = Carbon::now();
             $EmployeeBankingEntry->save();
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

      $this->validate($request, [
           'employeeTypeId' => 'required',
           'jobDepartmentId' => 'required',
           'userName' => 'required',
           'email' => 'required',
           'password' => 'required',
           'fullName' => 'required',
           'phoneNumber' => 'required',

       ]);

    //        'fullName' => 'required',
    //        'fatherName' => 'required',
    //        'motherName' => 'required',
    //        'dateOfBirth' => 'required',
    //        'phoneNumber' => 'required',
    //        'religion' => 'required',
    //        'sex' => 'required',
    //        'maritalStatus' => 'required',

    //        'nationality' => 'required',
    //        'presentAddress' => 'required',
    //        'permanentAddress' => 'required',




        if (Auth::guard('admin')->check()&&isset(Auth::User()->id)) {
            $shopTypeId = Auth::User()->shopTypeId;
        }


            $shopEmployeeEntryId = ShopEmployeeEntry::insertGetId([
                'employeeTypeId' => $request->employeeTypeId,
                'jobDepartmentId' => $request->jobDepartmentId,
                'userName' => $request->userName,
                'email' => $request->email,
                'password' => $request->password,
                'fullName' => $request->fullName,
                'fatherName' => $request->fatherName,
                'motherName' => $request->motherName,
                'dateOfBirth' => $request->dateOfBirth,
                'phoneNumber' => $request->phoneNumber,
                'religion' => $request->religion,
                'sex' => $request->sex,
                'maritalStatus' => $request->maritalStatus,
                'nidNumber' => $request->nidNumber,
                'nationality' => $request->nationality,
                'presentAddress' => $request->presentAddress,
                'permanentAddress' => $request->permanentAddress,
                'shopId' => Auth::User()->shopId,
                'shopTypeId' => $shopTypeId,
                'createBy' => Auth::User()->id,
                'created_at' => Carbon::now(),
            ]);

            $shopName = Admin::where('shopId',Auth::User()->shopId)->orderBy('id','ASC')->first()->shopName;

            Admin::insert([
            'userName' => $request->userName,
            'email' => $request->email,
            'shopName' => $shopName,
            'role' => 4,
            'shopId' =>  Auth::User()->shopId,
            'shopSirialId' =>  Auth::User()->shopSirialId,
            'status' =>  Auth::User()->status,
            'paymentStatus' =>  Auth::User()->paymentStatus,
            'shopTypeId' => $shopTypeId,
            'employeeId' => $shopEmployeeEntryId,
            'password' => bcrypt($request->password),
            'pass' => $request->password,
            'countryId' => Auth::User()->countryId,
            'created_at' => Carbon::now(),
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($employeeTypeId)
    {
        $jobDepartmentList = JobDepartmentEntry::where('employeeTypeId',$employeeTypeId)->get();
        return ['jobDepartmentList' => $jobDepartmentList];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($shopEmployeeEntryId)
    {
        $singleShopEmployeeInfo = ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->first();
        $jobDepartmentList = JobDepartmentEntry::where('employeeTypeId',$singleShopEmployeeInfo->employeeTypeId)->get();
        return ['singleShopEmployeeInfo' => $singleShopEmployeeInfo,'jobDepartmentList' => $jobDepartmentList];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $shopEmployeeEntryId)
    {
          $this->validate($request, [
               'employeeTypeId' => 'required',
               'jobDepartmentId' => 'required',
               'userName' => 'required',
               'password' => 'required',
               'fullName' => 'required',
               'phoneNumber' => 'required',
           ]);
          if (ShopEmployeeEntry::where('userName',$request->userName)->where('shopEmployeeEntryId','!=',$shopEmployeeEntryId)->exists()) {
              return ['userName' => "Please Change Employee User Name"];
          }
          else {
                  ShopEmployeeEntry::where('shopEmployeeEntryId',$shopEmployeeEntryId)->update([
                      'employeeTypeId' => $request->employeeTypeId,
                      'jobDepartmentId' => $request->jobDepartmentId,
                      'userName' => $request->userName,
                      'password' => $request->password,
                      'fullName' => $request->fullName,
                      'fatherName' => $request->fatherName,
                      'motherName' => $request->motherName,
                      'dateOfBirth' => $request->dateOfBirth,
                      'phoneNumber' => $request->phoneNumber,
                      'religion' => $request->religion,
                      'sex' => $request->sex,
                      'maritalStatus' => $request->maritalStatus,
                      'nidNumber' => $request->nidNumber,
                      'nationality' => $request->nationality,
                      'presentAddress' => $request->presentAddress,
                      'permanentAddress' => $request->permanentAddress,
                      'updateBy' => Auth::User()->id,
                  ]);

                Admin::where('employeeId',$shopEmployeeEntryId)->update([
                    'userName' => $request->userName,
                    'role' => 4,
                    'shopId' =>  Auth::User()->shopId,

                    'password' => bcrypt($request->password),
                    'created_at' => Carbon::now(),
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
