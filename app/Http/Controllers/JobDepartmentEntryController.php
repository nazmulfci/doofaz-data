<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\JobDepartmentEntry;
use App\ShopEmployeeType;
use App\ShopInformation;
use Carbon\Carbon;
use Auth;

class JobDepartmentEntryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:,admin');
    }
    public function index()
    {
        if(Auth::guard('admin')->check()){
           
            $show = JobDepartmentEntry::with('employeeTypeName','employee')->orderBy('jobDepartmentEntryId','desc')->where('shopTypeId',Auth::User()->shopTypeId)->where('createBy',Auth::User()->id)->paginate(20);
            return ['show'=> $show];
        }
        else{
      
        $show = JobDepartmentEntry::with('employeeTypeName','employee')->orderBy('jobDepartmentEntryId','desc')->where('createBy',Auth::User()->id)->paginate(20);
        return ['show'=> $show];
        }
    }


    public function create()
    {
        $employeeTypeList = ShopEmployeeType::orderBy('shopEmployeeTypeId','desc')->where('shopEmployeeTypeStatus',1)->get();
        return ['employeeTypeList' => $employeeTypeList];
    }


    public function store(Request $request)
    {
          $request->validate([
              'jobDepartmentName' => 'required',
              'jobDepartmentStatus' => 'required',
          ],
          [
              'jobDepartmentName.required' => 'Enter Job Department Name',
              'jobDepartmentStatus.required' => 'Select Job Department Status',
          ]);

          if (JobDepartmentEntry::where('employeeTypeId',$request->employeeTypeId)->where('jobDepartmentName',$request->jobDepartmentName)->exists()){
              return ['changeJobDepartmentName'=>'Change Your Job Department Name'];
          }
          else {
            if (Auth::User()->shopId) {
                $shopTypeId = Auth::User()->shopTypeId;
             
              $data = new JobDepartmentEntry();
              $data->employeeTypeId = $request->employeeTypeId;
              $data->jobDepartmentName = $request->jobDepartmentName;
              $data->jobDepartmentStatus = $request->jobDepartmentStatus;
              $data->shopId = Auth::user()->shopId;
              $data->shopTypeId = $shopTypeId;
              $data->createBy = Auth::user()->id;
              $data->created_at = Carbon::now();
              $data->save();
          }
          else{
               
            $data = new JobDepartmentEntry();
            $data->employeeTypeId = $request->employeeTypeId;
            $data->jobDepartmentName = $request->jobDepartmentName;
            $data->jobDepartmentStatus = $request->jobDepartmentStatus;
            $data->shopId= 0;
            $data->shopTypeId = 0;
            $data->createBy = Auth::user()->id;
            $data->created_at = Carbon::now();
            $data->save();
          }
        }
    }



    public function show($id)
    {
        $data=JobDepartmentEntry::where('jobDepartmentEntryId',$id)->first()->jobDepartmentStatus;

        if($data == 1){
            JobDepartmentEntry::where('jobDepartmentEntryId',$id)->update([
                'jobDepartmentStatus' => 0,
                'updateBy' => Auth::user()->id,
            ]);
        }
        else{
            JobDepartmentEntry::where('jobDepartmentEntryId',$id)->update([
                'jobDepartmentStatus' => 1,
                'updateBy' => Auth::user()->id,
            ]);
        }
    }


    public function edit($id)
    {
        $editData = JobDepartmentEntry::where('jobDepartmentEntryId',$id)->first();
        return ['editData'=>$editData];
    }


    public function update(Request $request, $id)
    {
        $request->validate([
            'jobDepartmentName' => 'required',
            'jobDepartmentStatus' => 'required',
        ],
        [
            'jobDepartmentName.required' => 'Enter Job Department Name',
            'jobDepartmentStatus.required' => 'Select Job Department Status',
        ]);

         if (JobDepartmentEntry::where('jobDepartmentName',$request->jobDepartmentName)->where('jobDepartmentEntryId','!=',$id)->exists()) {
            return ['changeName' => 'Change Job Department Name'];
         }
         else {
             JobDepartmentEntry::where('jobDepartmentEntryId',$id)->update([
                 'jobDepartmentName' => $request->jobDepartmentName,
                 'jobDepartmentStatus'=> $request->jobDepartmentStatus,
                 'updateBy'=> Auth::user()->id,
             ]);
         }
    }

    public function destroy($id)
    {
        $dataDelete = JobDepartmentEntry::where('jobDepartmentEntryId',$id);
        $dataDelete->delete();
    }
}
