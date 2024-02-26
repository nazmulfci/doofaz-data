<?php

namespace App\Http\Controllers\ShopInformation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ShopInformation\SendMessageInformation;
use App\TimelineInformation;
use App\DataInformation;
use Auth;

class SendMessageInformationController extends Controller
{
    public function send_message_store(Request $request){
       $info = new SendMessageInformation();
       $info->shop_id = $request->shop_id;
       $info->sender_id = $request->sender_id;
       if($request->default_message!=""){
        $info->default_message = $request->default_message;
       }else{
        $info->default_message = "";
       }

       $info->mobile_no = "88".$request->mobile_no;
       $info->message = $request->message;
       $info->save();

       $shopInfo = DataInformation::with('StatusTypeInformation')->where('id',$request->shop_id)->first();

       $shopInfo = DataInformation::with('StatusTypeInformation')->where('id',$request->shop_id)->first();
       if($shopInfo->StatusTypeInformation!=null){
          $from = $shopInfo->StatusTypeInformation->name;
       }else{
           $from = "New Registration";
       }
       $to="Send SMS";


        // $shopInfo = DataInformation::where('id',$request->shop_id)->first();

       $newMessage = $request->message;

       $shopInfoId = $request->shop_id;
       $dataId = $info->id;
       TimelineInformation::insert([
           'shopId' => Auth::user()->shopId,
           'shopInfoId' => $shopInfoId,
           'referanceTypeId' => 6,
           'referanceId' => $dataId,
           'title' => 'Message Submitted',
           'description' => $newMessage,
           'date' => date('Y-m-d'),
           'time' => date('H:i:s'),
           'from' => $from,
           'to' => $to,
           'createBy' => Auth::user()->id,
           'created_at' => date('Y-m-d H:i:s'),
       ]);
    }
}
