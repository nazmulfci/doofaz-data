<?php

namespace App\Http\Controllers\ShopInformation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ShopInformation\MettingInformation;
use App\ShopInformation\MettingEditHistory;
use App\ShopInformation\MettingInformationCreate;
use App\ShopInformation\StatusTypeInformation;
use Illuminate\Support\Facades\Auth;
use DB;
use App\TimelineInformation;
use App\DataInformation;

class MettingInformationController extends Controller
{
    public function MettingStore(Request $request){

        

       $info = new MettingInformation();
       $info->shop_id = $request->shop_id;
       $info->title = $request->title;
       $info->location = $request->location;
       $info->date = $request->date;
       $info->time = $request->time;
       $info->person_info = $request->person_info;
       $info->shopId = Auth::user()->shopId;
       $info->createBy = Auth::user()->id;
       $info->save();

        $shopInfo = DataInformation::with('StatusTypeInformation')->where('id',$request->shop_id)->first();

        if($shopInfo->StatusTypeInformation!=null){
           $from = $shopInfo->StatusTypeInformation->name;
        }else{
            $from = "New Registration";
        }

        // if($statusStatus){
        //     $from = $statusStatus->name;
        //  }else{
        //      $from = "New Registration";
        //  }

        $to="Metting Setup";

        $MettingInfo = TimelineInformation::where('shopInfoId',$request->shop_id)
                                            ->where('referanceTypeId',4)
                                            ->orderBy('id','desc')
                                            ->first();


        if($MettingInfo){
            $newMessage ="Update a new metting at ".$request->date." ".$request->time." with ".$request->person_info;
        }else{
            $newMessage = "Set a new metting at ".$request->date." ".$request->time." with ".$request->person_info;
        }

        // $newMessage = 'Welcome to '. $shopInfo->shopOfficeName . " (" . $shopInfo->shopOfficeNo.")  contact No :+88".$shopInfo->mobileNo;

       $shopInfoId = $request->shop_id;
       $dataId = $info->id;
       TimelineInformation::insert([
           'shopId' => Auth::user()->shopId,
           'shopInfoId' => $shopInfoId,
           'referanceTypeId' => 4,
           'referanceId' => $dataId,
           'title' => 'Metting Submitted',
           'description' => $newMessage,
           'date' => date('Y-m-d'),
           'time' => date('H:i:s'),
           'from' => $from,
           'to' => $to,
           'createBy' => Auth::user()->id,
           'created_at' => date('Y-m-d H:i:s'),
       ]);

       return response()->json(['success',200]);
    }

    public function MettingUpdate(Request $request){

       $info = MettingInformation::where('id',$request->metting_id)->where('shop_id',$request->shop_id)->first();
       $info->shop_id = $request->shop_id;
       $info->title = $request->title;
       $info->location = $request->location;
       $info->date = $request->date;
       $info->time = $request->time;
       $info->person_info = $request->person_info;
       $info->shopId = Auth::user()->shopId;
       $info->createBy = Auth::user()->id;
       $info->save();

       $shopInfo = DataInformation::with('StatusTypeInformation')->where('id',$request->shop_id)->first();

       if($shopInfo->StatusTypeInformation!=null){
        $from = $shopInfo->StatusTypeInformation->name;
     }else{
         $from = "New Registration";
     }
       $to="Metting Update";

       $newMessage = "Metting Update Reason is ".$request->reason;

       $shopInfoId = $request->shop_id;
       $dataId = $info->id;
       TimelineInformation::insert([
           'shopId' => Auth::user()->shopId,
           'shopInfoId' => $shopInfoId,
           'referanceTypeId' => 5,
           'referanceId' => $dataId,
           'title' => 'Metting Updated',
           'description' => $newMessage,
           'date' => date('Y-m-d'),
           'time' => date('H:i:s'),
           'from' => $from,
           'to' => $to,
           'createBy' => Auth::user()->id,
           'created_at' => date('Y-m-d H:i:s'),
       ]);

        $MettingId = $info->id;
        $info1 = new MettingEditHistory();
        $info1->metting_id = $request->metting_id;
        $info1->shop_id = $request->shop_id;
        $info1->title = $request->title;
        $info1->location = $request->location;
        $info1->reason = $request->reason;
        $info1->date = $request->date;
        $info1->time = $request->time;
        $info1->save();

       return response()->json(['success',200]);
    }

    public function metting_info_store(Request $request){
        $info = new MettingInformationCreate();
        $info->metting_id = $request->metting_id;
        $info->shop_id = $request->shop_id;
        $info->information = $request->information;
        $info->save();
        return response()->json(['success',200]);
    }

    public function MettingListShow($status){
        $role = Auth::user()->role;
        $data = MettingInformation::with('ShopName','CreateByNameShow')->where('status',$status)->get();
        return ['data'=>$data,'role'=>$role];
    }

    public function MettingEdit($id){
       $data = MettingInformation::where('id',$id)->first();
       return ['data'=>$data];
    }

    public function MettingEditHistory($MettingId,$ShopInfoId){
       $data = MettingEditHistory::with('MettingInfo')
                                    ->where('metting_id',$MettingId)
                                    ->where('shop_id',$ShopInfoId)
                                    ->latest()
                                    ->get();
       return ['data'=>$data];
    }

    public function SuccessStatusChange($metting_id,$shop_id){
       

       $StatusInfo = MettingInformation::where('id',$metting_id)->where('shop_id',$shop_id)->first();

       $shopInfo = DataInformation::with('StatusTypeInformation')->where('id',$shop_id)->first();

       if($shopInfo->StatusTypeInformation!=null){
        $from = $shopInfo->StatusTypeInformation->name;
        }else{
            $from = "New Registration";
        }

       $to="Metting Status Update";

       if($StatusInfo->status==1){
          $status ="Pending";
       }else if($StatusInfo->status==2){
         $status ="Success";
       }else {
        $status ="Cancel";
       }

       $newMessage = "Metting Status Update ".$status." To "." Success";

       $shopInfoId = $shop_id;
       $dataId = $metting_id;
       TimelineInformation::insert([
           'shopId' => Auth::user()->shopId,
           'shopInfoId' => $shopInfoId,
           'referanceTypeId' => 9,
           'referanceId' => $dataId,
           'title' => 'Metting Status Updated',
           'description' => $newMessage,
           'date' => date('Y-m-d'),
           'time' => date('H:i:s'),
           'from' => $from,
           'to' => $to,
           'createBy' => Auth::user()->id,
           'created_at' => date('Y-m-d H:i:s'),
       ]);

       MettingInformation::where('id',$metting_id)->where('shop_id',$shop_id)->update(['status'=>2]);


    }

    public function CancelStatusChange($metting_id,$shop_id){
        $StatusInfo = MettingInformation::where('id',$metting_id)->where('shop_id',$shop_id)->first();

        $shopInfo = DataInformation::with('StatusTypeInformation')->where('id',$shop_id)->first();
 
        if($shopInfo->StatusTypeInformation!=null){
         $from = $shopInfo->StatusTypeInformation->name;
      }else{
          $from = "New Registration";
      }
        $to="Metting Status Update";
       
        if($StatusInfo->status==1){
           $status ="Pending";
        }else if($StatusInfo->status==2){
          $status ="Success";
        }else if($StatusInfo->status==2){
         $status ="Cancel";
        }
 
        $newMessage = "Metting Status Update ".$status." To "." Cancel";
 
        $shopInfoId = $shop_id;
        $dataId = $metting_id;
        TimelineInformation::insert([
            'shopId' => Auth::user()->shopId,
            'shopInfoId' => $shopInfoId,
            'referanceTypeId' => 9,
            'referanceId' => $dataId,
            'title' => 'Metting Status Updated',
            'description' => $newMessage,
            'date' => date('Y-m-d'),
            'time' => date('H:i:s'),
            'from' => $from,
            'to' => $to,
            'createBy' => Auth::user()->id,
            'created_at' => date('Y-m-d H:i:s'),
        ]);
       MettingInformation::where('id',$metting_id)->where('shop_id',$shop_id)->update(['status'=>3]);
    }



}
