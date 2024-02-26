<?php

namespace App\Http\Controllers\ShopInformation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ShopInformation\CategoryProduct;
use App\ShopInformation\CategoryEntry;
use App\TimelineInformation;
use Illuminate\Support\Facades\Auth;
use DB;
use App\DataInformation;

class CategoryProductController extends Controller
{


public function store(Request $request){

        $shopInfo = DataInformation::with('CategoryInformation','StatusTypeInformation')->where('id',$request->shop_id)->first();
        $cat_id = $shopInfo->category_id;
        $category_status = $shopInfo->category_status;

        if(!$cat_id){
            $this->dataCategoryInsert($request,$shopInfo);
        }else{

                if($category_status<3){
                    if($cat_id==$request->category_id){
                        return ['msg'=>0];
                    }else{
                        $this->dataCategoryInsert($request,$shopInfo);
                    }
                }
                else{
                    $this->dataCategoryInsert($request,$shopInfo);
                }
        }




    }

    public function dataCategoryInsert($request,$shopInfo){



        $info = new CategoryProduct();
        $info->shop_id = $request->shop_id;
        $info->category_id = $request->category_id;
        $info->shopId = Auth::user()->shopId;
        $info->createBy = Auth::user()->id;
        $info->save();



        // status change
        if($shopInfo->StatusTypeInformation!=null){
            $from = $shopInfo->StatusTypeInformation->name;
         }else{
             $from = "New Registration";
         }
         // status change
        $to="Category Update";

        $catInfo = CategoryEntry::where('id',$request->category_id)->first();
        $newCatName = $catInfo->category_name;

        if($shopInfo->CategoryInformation!=null){
            $oldCategoryName = $shopInfo->CategoryInformation->category_name;
            $newMessage = "From ".$oldCategoryName." To ".$newCatName;
        }else{
            $newMessage = "Set a new category ".$newCatName;
        }

        $shopInfoId = $request->shop_id;
        $dataId = $info->id;
        TimelineInformation::insert([
            'shopId' => Auth::user()->shopId,
            'shopInfoId' => $shopInfoId,
            'referanceTypeId' => 7,
            'referanceId' => $dataId,
            'title' => 'Category Change',
            'description' => $newMessage,
            'date' => date('Y-m-d'),
            'time' => date('H:i:s'),
            'from' => $from,
            'to' => $to,
            'note' => $newMessage,
            'createBy' => Auth::user()->id,
            'created_at' => date('Y-m-d H:i:s'),
        ]);

        DB::table('data_information')
        ->where('id',$request->shop_id)
        ->update(['category_id'=>$request->category_id]);

        return ['msg'=>1];
    }

// public function store(Request $request){

//     // $catInfo = CategoryProduct::where('shop_id',$request->shop_id)->orderBy('id','DESC')->first();
//     // if($catInfo->category_id==$request->category_id){
//     //     return ['msg'=>0];
//     // }

//     if(CategoryProduct::where('shop_id',$request->shop_id)
//                          ->where('category_id',$request->category_id)
//                          ->whereIn('status',[1,2])
//                          ->exists()){
//      return ['msg'=>0];

//     }
//     else{
//      $info = new CategoryProduct();
//      $info->shop_id = $request->shop_id;
//      $info->category_id = $request->category_id;
//      $info->shopId = Auth::user()->shopId;
//      $info->createBy = Auth::user()->id;
//      $info->save();

//      $shopInfo = DataInformation::with('CategoryInformation','StatusTypeInformation')->where('id',$request->shop_id)->first();

//      // status change
//      if($shopInfo->StatusTypeInformation!=null){
//          $from = $shopInfo->StatusTypeInformation->name;
//       }else{
//           $from = "New Registration";
//       }
//       // status change
//      $to="Category Update";

//      $catInfo = CategoryEntry::where('id',$request->category_id)->first();
//      $newCatName = $catInfo->category_name;

//      if($shopInfo->CategoryInformation!=null){
//          $oldCategoryName = $shopInfo->CategoryInformation->category_name;
//          $newMessage = "From ".$oldCategoryName." To ".$newCatName;
//      }else{
//          $newMessage = "Set a new category ".$newCatName;
//      }

//      $shopInfoId = $request->shop_id;
//      $dataId = $info->id;
//      TimelineInformation::insert([
//          'shopId' => Auth::user()->shopId,
//          'shopInfoId' => $shopInfoId,
//          'referanceTypeId' => 7,
//          'referanceId' => $dataId,
//          'title' => 'Category Change',
//          'description' => $newMessage,
//          'date' => date('Y-m-d'),
//          'time' => date('H:i:s'),
//          'from' => $from,
//          'to' => $to,
//          'note' => $newMessage,
//          'createBy' => Auth::user()->id,
//          'created_at' => date('Y-m-d H:i:s'),
//      ]);

//      DB::table('data_information')
//      ->where('id',$request->shop_id)
//      ->update(['category_id'=>$request->category_id]);

//      return ['msg'=>1];
//     }


//  }

//  public function change_category_status(Request $request){

//     $getStatus = DataInformation::where('id',$request->shop_id)
//                                 ->where('category_id',$request->category_id)
//                                 ->first('category_status');

//     dd($getStatus);


//  }

    // public function change_category_status(Request $request){
    //     if($request->status==4){
    //         $info = CategoryProduct::where('shop_id',$request->shop_id)
    //                                 ->where('category_id',$request->category_id)
    //                                 ->where('unique_status',null)
    //                                 ->update([
    //                                     'status'=>$request->status,
    //                                     'unique_status'=>rand(0,9999),
    //                                 ]);
    //     }else{
    //         $info = CategoryProduct::where('shop_id',$request->shop_id)
    //         ->where('category_id',$request->category_id)
    //         ->update([
    //             'status'=>$request->status,
    //             'unique_status'=>'',
    //         ]);
    //     }

    //    return response()->json('success',200);
    // }

    public function change_category_status(Request $request){
        $shopInfo = DataInformation::with('StatusTypeInformation')->where('id',$request->shop_id)->first();
        $statusChange = CategoryProduct::where('shop_id',$request->shop_id)
                                            ->where('category_id',$request->category_id)
                                            ->latest()
                                            ->first();


            if($shopInfo->StatusTypeInformation!=null){
                $from = $shopInfo->StatusTypeInformation->name;
            }else{
                $from = "New Registration";
            }

            $to = "Category Status Change";

            if($request->status==2){
                $statusRequest = "Pending";
            }else if($request->status==3){
                $statusRequest = "Cancel";
            }else if($request->status==4){
                $statusRequest = "Final";
            }

            if($statusChange->status==1){
                $statusName = "New";
            }else if($statusChange->status==2){
                $statusName = "Pending";
            }else if($statusChange->status==3){
                $statusName = "Cancel";
            }else if($statusChange->status==4){
                $statusName = "Final";
            }




       if($statusChange->status==4){
            $statusChange->status=$request->status;
            $statusChange->save();
            $statusName1 = "Final";
            $newMessage = "Cateogory Status Change ".$statusName1." to ".$statusRequest;
            $shopInfoId = $request->shop_id;
            $dataId = $statusChange->id;
            TimelineInformation::insert([
                'shopId' => Auth::user()->shopId,
                'shopInfoId' => $shopInfoId,
                'referanceTypeId' =>8,
                'referanceId' => $dataId,
                'title' => 'Category Status Change',
                'description' => $newMessage,
                'date' => date('Y-m-d'),
                'time' => date('H:i:s'),
                'from' => $from,
                'to' => $to,
                'createBy' => Auth::user()->id,
                'created_at' => date('Y-m-d H:i:s'),
            ]);

            DB::table('data_information')
            ->where('id',$request->shop_id)
            ->where('category_id',$request->category_id)
            ->update(['category_status'=>$request->status]);
       }else{

        // dd($request->all());
        // die();
            $info = CategoryProduct::where('shop_id',$request->shop_id)
                                    ->where('category_id',$request->category_id)
                                    // ->where('status',1)
                                    ->update(['status'=>$request->status]);

            $newMessage = "Cateogory Status Change ".$statusName." to ".$statusRequest;
            $shopInfoId = $request->shop_id;
            $dataId = $statusChange->id;
            TimelineInformation::insert([
                'shopId' => Auth::user()->shopId,
                'shopInfoId' => $shopInfoId,
                'referanceTypeId' =>8,
                'referanceId' => $dataId,
                'title' => 'Category Status Change',
                'description' => $newMessage,
                'date' => date('Y-m-d'),
                'time' => date('H:i:s'),
                'from' => $from,
                'to' => $to,
                'createBy' => Auth::user()->id,
                'created_at' => date('Y-m-d H:i:s'),
            ]);
       }


       DB::table('data_information')
        ->where('id',$request->shop_id)
        ->where('category_id',$request->category_id)
        ->update(['category_status'=>$request->status]);

       return response()->json('success',200);
    }

    public function engagementList($id){

      $role = Auth::user()->role;

      if($role==3){
          $data = CategoryProduct::with('ShopInfo','ShopInfo.BlockRoad','ShopInfo.HouseMarket','ShopInfo.StatusTypeInformation','ShopInfo.CreateByNameShow','ShopInfo.CategoryInformation','ShopInfo.RoadInformation','ShopInfo.ProductTypeInformation','ShopInfo.AreaInformation')
                              ->where('category_id',$id)
                              ->whereIn('status',[1,2])
                              ->get();
      }

      if($role==4){
         $data = CategoryProduct::with('ShopInfo','ShopInfo.BlockRoad','ShopInfo.HouseMarket','ShopInfo.StatusTypeInformation','ShopInfo.CreateByNameShow','ShopInfo.CategoryInformation','ShopInfo.RoadInformation','ShopInfo.ProductTypeInformation','ShopInfo.AreaInformation')
                              ->where('category_id',$id)
                              ->where('shopId',Auth::user()->shopId)
                              ->where('createBy',Auth::user()->id)
                              ->whereIn('status',[1,2])
                              ->get();
      }


      return ['data'=>$data];
    }

    public function category_product_status_list_by_status($status){
            $role = Auth::user()->role;

      if($role==3){
          $data = CategoryProduct::with('ShopInfo','ShopInfo.BlockRoad','ShopInfo.HouseMarket','ShopInfo.StatusTypeInformation','ShopInfo.CreateByNameShow','ShopInfo.CategoryInformation','ShopInfo.RoadInformation')
                              ->where('status',$status)
                              ->get();
      }

      if($role==4){
         $data = CategoryProduct::with('ShopInfo','ShopInfo.BlockRoad','ShopInfo.HouseMarket','ShopInfo.StatusTypeInformation','ShopInfo.CreateByNameShow','ShopInfo.CategoryInformation','ShopInfo.RoadInformation')
                              ->where('shopId',Auth::user()->shopId)
                              ->where('createBy',Auth::user()->id)
                              ->where('status',$status)
                              ->get();
      }


      return ['data'=>$data];
    }
}
