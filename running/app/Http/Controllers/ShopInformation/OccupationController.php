<?php

namespace App\Http\Controllers\ShopInformation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ShopInformation\Occupation;
use Auth;

class OccupationController extends Controller
{
    public function index(){
        $data = Occupation::latest()->get();
        return ['data'=>$data];
    }

     public function guestOccupationShow(){
        $data = Occupation::latest()->where('status',1)->get();
        return ['data'=>$data];
    }

    public function store(Request $request){

       $info = new Occupation();
       $info->occupationName = $request->occupationName;
       $info->status = 1;
       $info->shopId = Auth::user()->shopId;
       $info->save();
       return response()->json('success',200);
    }

     public function edit($id){
        $data = Occupation::findOrFail($id);
        return ['data'=>$data];
    }

     public function statusDeactivate($id){
        $info = Occupation::findOrFail($id);
        $info->status='0';
        $info->save();
    }
     public function statusActivate($id){
        $info = Occupation::findOrFail($id);
        $info->status='1';
        $info->save();
    }

    public function update(Request $request){
       $info = Occupation::findOrFail($request->id);
       $info->occupationName = $request->occupationName;
       $info->save();
       return response()->json('success',200);
    }
}
