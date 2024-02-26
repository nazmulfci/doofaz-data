<?php

namespace App\Http\Controllers\ShopInformation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ShopInformation\NoteInformation;
use App\DataInformation;
use App\TimelineInformation;
use Illuminate\Support\Facades\Auth;
use DB;

class NoteInformationController extends Controller
{
    public function NoteStore(Request $request){
       $info = new NoteInformation();
       $info->shop_id = $request->shop_id;
       $info->note = $request->note;
       $info->shopId = Auth::user()->shopId;
       $info->createBy = Auth::user()->id;
       $info->save();

       $shopInfo = DataInformation::with('StatusTypeInformation')->where('id',$request->shop_id)->first();

       if($shopInfo->StatusTypeInformation!=null){
        $from = $shopInfo->StatusTypeInformation->name;
     }else{
         $from = "New Registration";
     }
       $to="Note";

       $newMessage = $request->note;

       $shopInfoId = $request->shop_id;
       $dataId = $info->id;
       TimelineInformation::insert([
           'shopId' => Auth::user()->shopId,
           'shopInfoId' => $shopInfoId,
           'referanceTypeId' => 5,
           'referanceId' => $dataId,
           'title' => 'Note Submitted',
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
}
