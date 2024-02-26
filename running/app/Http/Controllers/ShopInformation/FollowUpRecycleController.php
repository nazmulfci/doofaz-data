<?php

namespace App\Http\Controllers\ShopInformation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ShopInformation\FollowUpRecycle;
use Illuminate\Support\Facades\Auth;
use DB;
use App\DataInformation;

class FollowUpRecycleController extends Controller
{
    public function followup_recycle_store(Request $request){
        $info = new FollowUpRecycle();
       $info->shopInfoId = $request->shop_id;
       $info->note = $request->note;
       $info->status = 6;
       $info->shopId = Auth::user()->shopId;
       $info->createBy = Auth::user()->id;
       $info->save();

       DataInformation::where('id',$request->shop_id)->update(['category_status'=>6]);
    }
}
