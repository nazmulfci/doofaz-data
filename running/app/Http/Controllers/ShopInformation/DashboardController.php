<?php

namespace App\Http\Controllers\ShopInformation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\DataInformation;

class DashboardController extends Controller
{
    public function countInfo(){
        $role = Auth::user()->role;
        if($role==4){
            $data = DataInformation::whereDate('created_at', date('Y-m-d'))->where('createBy',Auth::user()->id)->count();
        }

        if($role==3){
            $data = DataInformation::whereDate('created_at', date('Y-m-d'))->count();
        }

        return ['data'=>$data];
    }

    public function toDayEntryShow(){

        $role = Auth::user()->role;

        if($role==4){
             $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','CategoryInformation','RoadInformation')
                                ->whereDate('created_at', date('Y-m-d'))
                                ->where('shopId',Auth::user()->shopId)
                                ->where('createBy',Auth::user()->id)
                                ->get();
        }

        if($role==3){
            $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','CreateByNameShow','CategoryInformation','RoadInformation')
                                ->where('shopId',Auth::user()->shopId)
                                ->whereDate('created_at', date('Y-m-d'))
                                ->get();
        }

         return ['data' => $data,'role'=>$role];

    }

    public function searchInfo(Request $request){

        // $requestData = $request->all();
        // dd($requestData);

            $datas = DataInformation::query();
            $datas = $datas->where('shopId',Auth::user()->shopId);

            if($request->mobileNo){
                $datas = $datas->where('mobileNo',$request->mobileNo);
            }

            if($request->date){
                $datas = $datas->where('created_at','LIKE',$request->date.'%');
            }

            if($request->areaId){
                $datas = $datas->where('areaId',$request->areaId);
            }

            if($request->blockId){
                $datas = $datas->where('blockRoadId',$request->blockId);
            }

            if($request->roadId){
                $datas = $datas->where('roadId',$request->roadId);
            }

            if($request->houseMarketId){
                $datas = $datas->where('houseMarketId',$request->houseMarketId);
            }


            if($request->employeeId){
                $datas = $datas->where('createBy',$request->employeeId);
            }

            if($request->productTypeId){
                $datas = $datas->where('productTypeId',$request->productTypeId);
            }

            if($request->employeeStatus){
                $datas = $datas->where('category_status',$request->employeeStatus);
            }

             if($request->status){
                $datas = $datas->where('status_type_id',$request->status);
            }

            if($request->categoryId=='All')
            {
                $datas = $datas->where('category_id','>',0);

            }
            else if($request->categoryId>0){
                $datas = $datas->where('category_id',$request->categoryId);
            }

            if(Auth::user()->role==4){

                $datas = $datas->where('createBy',Auth::user()->id);

            }


            $datas = $datas->with('AreaInformation','ProductTypeInformation','HouseMarket','BlockRoad','StatusTypeInformation','CreateByNameShow','CategoryInformation','RoadInformation');

            $datas = $datas->get();

            return ['data' => $datas];
    }
}
