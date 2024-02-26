<?php

namespace App\Http\Controllers\ShopInformation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ShopInformation\StatusInformation;
use App\ShopInformation\StatusTypeInformation;
use App\DataInformation;
use Illuminate\Support\Facades\Auth;
use DB;
use App\TimelineInformation;

class StatusInformationController extends Controller
{
    public function statusReasonStore(Request $request){

        $shopInfo = DataInformation::with('StatusTypeInformation')->where('id',$request->shop_id)->first();
        if($shopInfo->StatusTypeInformation!=null){
           $oldStatus = $shopInfo->StatusTypeInformation->name;
        }else{
            $oldStatus = "New Registration";
        }

        $newStatus = StatusTypeInformation::where('id',$request->status_type_id)->first();
        $newStatusName = $newStatus->name;

       StatusInformation::where('shop_id',$request->shop_id)->delete();

       $info = new StatusInformation();
       $info->shop_id = $request->shop_id;
       $info->status_type_id = $request->status_type_id;
       $info->note = $request->note;
       $info->shopId = Auth::user()->shopId;
       $info->createBy = Auth::user()->id;
       $info->save();

        $newMessage = 'Status Change '. $oldStatus . " to ".$newStatusName.' Note: '.$request->note;
        $referanceTypeId =30;
        if($request->status_type_id==1){
            $referanceTypeId = 31;
        } else if($request->status_type_id==2){
            $referanceTypeId = 32;
        } else if($request->status_type_id==3){
            $referanceTypeId = 33;
        } else if($request->status_type_id==4){
            $referanceTypeId = 34;
        } else if($request->status_type_id==5){
            $referanceTypeId = 35;
        } else if($request->status_type_id==6){
            $referanceTypeId = 36;
        } else if($request->status_type_id==7){
            $referanceTypeId = 37;
        }else if($request->status_type_id==8){
          $referanceTypeId = 38;
        }else{
            $referanceTypeId =$referanceTypeId;
        }

       $shopInfoId = $request->shop_id;
       $dataId = $info->id;
       TimelineInformation::insert([
           'shopId' => Auth::user()->shopId,
           'shopInfoId' => $shopInfoId,
           'referanceTypeId' => $referanceTypeId,
           'referanceId' => $dataId,
           'title' => 'Status Change',
           'description' => $newMessage,
           'date' => date('Y-m-d'),
           'time' => date('H:i:s'),
           'note' => $request->note,
           'from' => $oldStatus,
           'to' => $newStatusName,
           'createBy' => Auth::user()->id,
           'created_at' => date('Y-m-d H:i:s'),
       ]);

        DB::table('data_information')
          ->where('id',$request->shop_id)
          ->update(['status_type_id'=>$request->status_type_id]);

       return response()->json('success',200);
    }

    public function interested_list($id){
        $shopId = Auth::user()->shopId;
        $role=Auth::user()->role;
        if($role==4){
            $lists = DataInformation::with('HouseMarket','BlockRoad','CategoryInformation','RoadInformation','ProductTypeInformation','AreaInformation','StatusTypeInformation')
                                  ->where('status_type_id',$id)
                                  ->where('shopId', $shopId)
                                  ->where('createBy',Auth::user()->id)
                                  ->get();
        }

        if($role==3){
            $lists = DataInformation::with('HouseMarket','BlockRoad','CategoryInformation','RoadInformation','ProductTypeInformation','AreaInformation','StatusTypeInformation')
                                  ->where('status_type_id',$id)
                                  ->where('shopId', $shopId)
                                //   ->where('createBy',Auth::user()->id)
                                  ->get();
        }

        return ['lists'=>$lists];
    }

    public function status_type_show(){
        $lists = StatusTypeInformation::all();
        return ['lists'=>$lists];
    }

    public function TimelineShow($shop_id){
        $shopId = Auth::user()->shopId;
        $data = TimelineInformation::where('shopInfoId',$shop_id)
                                        ->where('shopId', $shopId)
                                        // ->where('referanceId',$shop_id)
                                        ->orderBy('id','desc')
                                        ->get();
        return ['data'=>$data];
    }

}
