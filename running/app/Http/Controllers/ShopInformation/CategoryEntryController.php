<?php

namespace App\Http\Controllers\ShopInformation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ShopInformation\CategoryEntry;
use App\ShopInformation\CategoryProduct;
use Auth;

class CategoryEntryController extends Controller
{
    public function index(){
        $role = Auth::user()->role;
        $data=CategoryEntry::query();

        if($role==3){
         $data = CategoryEntry::withCount('products')->where('shopId',Auth::user()->shopId)->get();
        }

        if($role==4){
          $data = CategoryEntry::withCount('products')
                                  ->where('status',1)
                                  ->where('shopId',Auth::user()->shopId)
                                  ->get();
        }

        return ['data'=>$data,'role'=>$role];
    }

    // public function index(){
    //     $role = Auth::user()->role;
    //     $datas=CategoryProduct::query();
    //     $datas = $datas->where('shopId',Auth::user()->shopId);

    //     // if($role==3){
    //     //  $datas = $datas->where('shopId',Auth::user()->shopId);
    //     // }

    //    if(Auth::user()->role==4){
    //         $datas = $datas->where('createBy',Auth::user()->id);
    //      }

    //     $datas=$datas->withCount('CategoryInfo');
    //     $datas=$datas->get();

    //     return ['data'=>$datas,'role'=>$role];
    // }

    public function get_category_list(){
        $data = CategoryEntry::where('status',1)->get();
        return ['data'=>$data];
    }

    public function store(Request $request){

       $info = new CategoryEntry();
       $info->category_name = $request->category_name;
       $info->shopId = Auth::user()->shopId;
       $info->save();
       return response()->json('success',200);
    }

     public function edit($id){
        $data = CategoryEntry::findOrFail($id);
        return ['data'=>$data];
    }

     public function statusDeactivate($id){
        $info = CategoryEntry::findOrFail($id);
        $info->status='0';
        $info->save();
    }
     public function statusActivate($id){
        $info = CategoryEntry::findOrFail($id);
        $info->status='1';
        $info->save();
    }

    public function update(Request $request){
       $info = CategoryEntry::findOrFail($request->id);
       $info->category_name = $request->category_name;
       $info->status = $request->status;
       $info->save();
       return response()->json('success',200);
    }

}
