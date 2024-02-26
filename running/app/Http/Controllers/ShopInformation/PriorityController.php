<?php

namespace App\Http\Controllers\ShopInformation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ShopInformation\Priority;
use App\DataInformation;
use Auth;

class PriorityController extends Controller
{
    public function PriorityInformation($shop_id){
       $dataInfo = DataInformation::where('id',$shop_id)->first();
       $dataInfo->priority_status=1;
       $dataInfo->save();

       $info = new Priority();
       $info->employeeId = Auth::user()->id;
       $info->shopInfoId = $shop_id;
       $info->shopInfoId = $shop_id;
       $info->priority_time = date('Y-m-d H:i:s');
       $info->save();
       return response()->json('success',200);
    }

    public function PriorityView()
    {
        $role = Auth::user()->role;

          if($role==4){
             $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','RoadInformation','CategoryInformation','AreaInformation','ProductTypeInformation')
                                ->where('shopId',Auth::user()->shopId)
                                ->where('createBy',Auth::user()->id)
                                ->where('priority_status',1)
                                ->orderBy('id','DESC')
                                ->get();
        }

        if($role==3){
            $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','CreateByNameShow','RoadInformation','CategoryInformation','AreaInformation','ProductTypeInformation')
                                ->where('shopId',Auth::user()->shopId)
                                ->where('priority_status',1)
                                ->orderBy('id','DESC')
                                ->get();
        }
        return ['data' => $data,'role'=>$role];
    }

    public function PriorityViewDelete()
    {
        $role = Auth::user()->role;

          if($role==4){
             $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','RoadInformation','CategoryInformation','AreaInformation','ProductTypeInformation')
                                ->where('shopId',Auth::user()->shopId)
                                ->where('createBy',Auth::user()->id)
                                ->where('priority_status',2)
                                ->orderBy('id','DESC')
                                ->get();
        }
        return ['data' => $data,'role'=>$role];
    }

    public function PriorityDelete(Request $request){
       $info = Priority::where('shopInfoId',$request->shop_id)->first();
       $info->reason = $request->note;
       $info->delete_time = date('Y-m-d H:i:s');
       $info->status =2;
       $info->delete_by = Auth::user()->id;
       $info->save();

       $dataInfo = DataInformation::where('id',$request->shop_id)->first();
       $dataInfo->priority_status=2;
       $dataInfo->save();
    }

    public function PrioritySearch(Request $request){
        $datas = DataInformation::query();
        $datas = $datas->where('shopId',Auth::user()->shopId);

        if($request->employee_id && $request->statusDelete==null){
            $datas = $datas->where('createBy',$request->employee_id)->where('priority_status',1);
        }

        if($request->employee_id && $request->statusDelete){
            $datas = $datas->where('createBy',$request->employee_id)->where('priority_status',$request->statusDelete);
        }
        $datas = $datas->with('AreaInformation','ProductTypeInformation','HouseMarket','BlockRoad','StatusTypeInformation','CreateByNameShow','CategoryInformation','RoadInformation');
        $datas = $datas->get();
        return ['data' => $datas];
    }

}
