<?php

namespace App\Http\Controllers\ShopInformation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ShopInformation\Designation;
use Auth;

class DesignationController extends Controller
{
    public function index(){
        $data = Designation::latest()->get();
        return ['data'=>$data];
    }
    public function guestDesignationShow(){
        $data = Designation::latest()->where('status',1)->get();
        return ['data'=>$data];
    }

    public function store(Request $request){

       $info = new Designation();
       $info->designationName = $request->designationName;
       $info->status = 1;
       $info->shopId = Auth::user()->shopId;
       $info->save();
       return response()->json('success',200);
    }

     public function edit($id){
        $data = Designation::findOrFail($id);
        return ['data'=>$data];
    }

     public function statusDeactivate($id){
        $info = Designation::findOrFail($id);
        $info->status='0';
        $info->save();
    }
     public function statusActivate($id){
        $info = Designation::findOrFail($id);
        $info->status='1';
        $info->save();
    }

    public function update(Request $request){
       $info = Designation::findOrFail($request->id);
       $info->designationName = $request->designationName;
       $info->save();
       return response()->json('success',200);
    }
}
