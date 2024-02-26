<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ShopInformation;
use App\ShopAssetCategory;
use App\ChartOfAccountRegister;
use App\ChartOfAccount;
use App\AccountSetup;
use App\AssetCodeEntry;
use Carbon\Carbon;
use Auth;
use Illuminate\Support\Facades\Auth as FacadesAuth;


class ShopAssetCategoryController extends Controller
{
  public function __construct()
  {
      $this->middleware('auth:,admin');
  }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      
        $shopTypeId = Auth::User()->shopTypeId;

        $shopAssetCategoryLists = ShopAssetCategory::where('shopId',Auth::User()->shopId)->orderBy('assetCategoryId','DESC')->paginate(30);
        return ['shopAssetCategoryLists' => $shopAssetCategoryLists];
      
    }
    public function shopAssetCategoryAll()
    {
        $shopAssetCategoryLists = array();

        $cats1 = ShopAssetCategory::where('label',1)->get();
        foreach($cats1 as $cat1){
          $cats2 = ShopAssetCategory::where('previousId',$cat1->previousId)->where('label',2)->get();
        }
        return datatables($shopAssetCategoryLists)->toJson();
      
    }

    public function assetCateorySelectList()
    {
      
          $shopTypeId = Auth::User()->shopTypeId;

          $shopAssetCategoryList =  ShopAssetCategory::where('label',1)->get();

          $assetCategoryPosition = ShopAssetCategory::where('label',1)->get()->count();
          $assetCategoryPositionIncre = $assetCategoryPosition + 1;
          return ['shopAssetCategoryList' => $shopAssetCategoryList,'assetCategoryPositionIncre' => $assetCategoryPositionIncre];
      
    }
    public function assetCategoryId($assetCategoryId)
    {
          $assetSubCategoryList =  ShopAssetCategory::where('label',2)->where('previousId',$assetCategoryId)->get();

          $assetCategorylabel = ShopAssetCategory::where('assetCategoryId',$assetCategoryId)->first()->label;
          $incrementLabel = $assetCategorylabel +1;
          $assetCategorylabel = ShopAssetCategory::where('previousId',$assetCategoryId)->where('label',$incrementLabel)->count();
          $assetCategoryPositionIncre = $assetCategorylabel + 1;

          return ['assetSubCategoryList' => $assetSubCategoryList,'assetCategoryPositionIncre' => $assetCategoryPositionIncre];
    }
    public function assetSubCategoryId($assetSubCategoryId)
    {
          $assetThirdCategoryList =  ShopAssetCategory::where('label',3)->where('previousId',$assetSubCategoryId)->get();

          $assetCategorylabel = ShopAssetCategory::where('assetCategoryId',$assetSubCategoryId)->first()->label;
          $incrementLabel = $assetCategorylabel +1;
          $assetCategorylabel = ShopAssetCategory::where('previousId',$assetSubCategoryId)->where('label',$incrementLabel)->count();
          $assetCategoryPositionIncre = $assetCategorylabel + 1;

          return ['assetThirdCategoryList' => $assetThirdCategoryList,'assetCategoryPositionIncre' => $assetCategoryPositionIncre];
    }
    public function assetThirdCategoryId($assetThirdCategoryId)
    {
          $assetFourCategoryList =  ShopAssetCategory::where('label',4)->where('previousId',$assetThirdCategoryId)->get();

          $assetCategorylabel = ShopAssetCategory::where('assetCategoryId',$assetThirdCategoryId)->first()->label;
          $incrementLabel = $assetCategorylabel +1;
          $assetCategorylabel = ShopAssetCategory::where('previousId',$assetThirdCategoryId)->where('label',$incrementLabel)->count();
          $assetCategoryPositionIncre = $assetCategorylabel + 1;

          return ['assetFourCategoryList' => $assetFourCategoryList,'assetCategoryPositionIncre' => $assetCategoryPositionIncre];
    }
    public function assetFourCategoryId($assetFourCategoryId)
    {
          $assetFiveCategoryList =  ShopAssetCategory::where('label',5)->where('previousId',$assetFourCategoryId)->get();

          $assetCategorylabel = ShopAssetCategory::where('assetCategoryId',$assetFourCategoryId)->first()->label;
          $incrementLabel = $assetCategorylabel +1;
          $assetCategorylabel = ShopAssetCategory::where('previousId',$assetFourCategoryId)->where('label',$incrementLabel)->count();
          $assetCategoryPositionIncre = $assetCategorylabel + 1;

          return ['assetFiveCategoryList' => $assetFiveCategoryList,'assetCategoryPositionIncre' => $assetCategoryPositionIncre];
    }
    public function assetFiveCategoryId($assetFiveCategoryId)
    {
          $assetSixCategoryList =  ShopAssetCategory::where('label',6)->where('previousId',$assetFiveCategoryId)->get();

          $assetCategorylabel = ShopAssetCategory::where('assetCategoryId',$assetFiveCategoryId)->first()->label;
          $incrementLabel = $assetCategorylabel +1;
          $assetCategorylabel = ShopAssetCategory::where('previousId',$assetFiveCategoryId)->where('label',$incrementLabel)->count();
          $assetCategoryPositionIncre = $assetCategorylabel + 1;

          return ['assetSixCategoryList' => $assetSixCategoryList,'assetCategoryPositionIncre' => $assetCategoryPositionIncre];
    }
    public function assetSixCategoryId($assetSixCategoryId)
    {
          $assetSevenCategoryList =  ShopAssetCategory::where('label',7)->where('previousId',$assetSixCategoryId)->get();

          $assetCategorylabel = ShopAssetCategory::where('assetCategoryId',$assetSixCategoryId)->first()->label;
          $incrementLabel = $assetCategorylabel +1;
          $assetCategorylabel = ShopAssetCategory::where('previousId',$assetSixCategoryId)->where('label',$incrementLabel)->count();
          $assetCategoryPositionIncre = $assetCategorylabel + 1;

          return ['assetSevenCategoryList' => $assetSevenCategoryList,'assetCategoryPositionIncre' => $assetCategoryPositionIncre];
    }
    public function assetSevenCategoryId($assetSevenCategoryId)
    {

          $assetCategorylabel = ShopAssetCategory::where('assetCategoryId',$assetSevenCategoryId)->first()->label;
          $incrementLabel = $assetCategorylabel +1;
          $assetCategorylabel = ShopAssetCategory::where('previousId',$assetSevenCategoryId)->where('label',$incrementLabel)->count();
          $assetCategoryPositionIncre = $assetCategorylabel + 1;

          return ['assetCategoryPositionIncre' => $assetCategoryPositionIncre];
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
          $shopTypeId = Auth::User()->shopTypeId;

          $assetCategoryLists      =   ShopAssetCategory::where('label',1)->where('shopId',Auth::User()->shopId)->get();
          $assetSubCategoryLists   =   ShopAssetCategory::where('label',2)->where('shopId',Auth::User()->shopId)->get();
          $assetThirdCategoryLists =   ShopAssetCategory::where('label',3)->where('shopId',Auth::User()->shopId)->get();
          $assetFourCategoryLists  =   ShopAssetCategory::where('label',4)->where('shopId',Auth::User()->shopId)->get();
          $assetFiveCategoryLists  =   ShopAssetCategory::where('label',5)->where('shopId',Auth::User()->shopId)->get();
          $assetSixCategoryLists   =   ShopAssetCategory::where('label',6)->where('shopId',Auth::User()->shopId)->get();
          $assetSevenCategoryLists =   ShopAssetCategory::where('label',7)->where('shopId',Auth::User()->shopId)->get();

          return [
            'assetCategoryLists' => $assetCategoryLists, 'assetSubCategoryLists' => $assetSubCategoryLists,
            'assetThirdCategoryLists' => $assetThirdCategoryLists, 'assetFourCategoryLists' => $assetFourCategoryLists,
            'assetFiveCategoryLists' => $assetFiveCategoryLists, 'assetSixCategoryLists' => $assetSixCategoryLists,
            'assetSevenCategoryLists' => $assetSevenCategoryLists,
        ];

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
          $this->validate($request, [
              'assetCategoryName' => 'required',
              'assetCategoryStatus' => 'required',
          ],
          [
             'assetCategoryName.required' => 'Enter Asset Category  Name',
             'assetCategoryStatus.required' => 'Select Asset Category Status',
          ]);




          $shopTypeId = Auth::User()->shopTypeId;

          if (ShopAssetCategory::where('assetCategoryName',$request->assetCategoryName)->exists()) {
              return ['changeAssetName' => 'Change Asset Category Name'];
          }
          else {
            if (isset($request->assetSevenCategory)) {
                $ShopAssetCategory = new ShopAssetCategory();
                $ShopAssetCategory->assetCategoryName = $request->assetCategoryName;
                $ShopAssetCategory->assetCategoryPosition = $request->assetCategoryPosition;
                $ShopAssetCategory->assetCategoryStatus = $request->assetCategoryStatus;
                if (isset($request->assetSubCategoryStatus)){
                  $ShopAssetCategory->assetSubCategoryStatus =  true;
                }
                else {
                  $ShopAssetCategory->assetSubCategoryStatus = false;
                }

                if (isset($request->assetSevenCategory)) {
                  $ShopAssetCategory->previousId = $request->assetSevenCategory;
                }
                if (isset($request->assetSevenCategory)) {
                  $label = ShopAssetCategory::where('assetCategoryId',$request->assetSevenCategory)->first()->label;
                  $incrementLabel = $label+1;
                  $ShopAssetCategory->label = $incrementLabel;
                }
                if(Auth::guard('admin')->check()){
                  $ShopAssetCategory->shopId = Auth::User()->shopId;
                  $ShopAssetCategory->shopTypeId = $shopTypeId;
                }
               else{
                $ShopAssetCategory->shopId = 0;
                $ShopAssetCategory->shopTypeId =0;
               }
                
                $ShopAssetCategory->createBy = Auth::User()->id;
                $ShopAssetCategory->created_at = Carbon::now();
                $ShopAssetCategory->save();
                return ;
            }

            if (isset($request->assetSixCategory)) {
                $ShopAssetCategory = new ShopAssetCategory();
                $ShopAssetCategory->assetCategoryName = $request->assetCategoryName;
                $ShopAssetCategory->assetCategoryPosition = $request->assetCategoryPosition;
                $ShopAssetCategory->assetCategoryStatus = $request->assetCategoryStatus;
                if (isset($request->assetSubCategoryStatus)){
                  $ShopAssetCategory->assetSubCategoryStatus =  true;
                }
                else {
                  $ShopAssetCategory->assetSubCategoryStatus = false;
                }

                if (isset($request->assetSixCategory)) {
                  $ShopAssetCategory->previousId = $request->assetSixCategory;
                }
                if (isset($request->assetSixCategory)) {
                  $label = ShopAssetCategory::where('assetCategoryId',$request->assetSixCategory)->first()->label;
                  $incrementLabel = $label+1;
                  $ShopAssetCategory->label = $incrementLabel;
                }
                if(Auth::guard('admin')->check()){
                  $ShopAssetCategory->shopId = Auth::User()->shopId;
                  $ShopAssetCategory->shopTypeId = $shopTypeId;
                }
               else{
                $ShopAssetCategory->shopId = 0;
                $ShopAssetCategory->shopTypeId =0;
               }
             
                $ShopAssetCategory->createBy = Auth::User()->id;
                $ShopAssetCategory->created_at = Carbon::now();
                $ShopAssetCategory->save();
                return ;
            }
            if (isset($request->assetFiveCategory)) {
                $ShopAssetCategory = new ShopAssetCategory();
                $ShopAssetCategory->assetCategoryName = $request->assetCategoryName;
                $ShopAssetCategory->assetCategoryPosition = $request->assetCategoryPosition;
                $ShopAssetCategory->assetCategoryStatus = $request->assetCategoryStatus;
                if (isset($request->assetSubCategoryStatus)){
                  $ShopAssetCategory->assetSubCategoryStatus =  true;
                }
                else {
                  $ShopAssetCategory->assetSubCategoryStatus = false;
                }

                if (isset($request->assetFiveCategory)) {
                  $ShopAssetCategory->previousId = $request->assetFiveCategory;
                }
                if (isset($request->assetFiveCategory)) {
                  $label = ShopAssetCategory::where('assetCategoryId',$request->assetFiveCategory)->first()->label;
                  $incrementLabel = $label+1;
                  $ShopAssetCategory->label = $incrementLabel;
                }
                if(Auth::guard('admin')->check()){
                  $ShopAssetCategory->shopId = Auth::User()->shopId;
                  $ShopAssetCategory->shopTypeId = $shopTypeId;
                }
               else{
                $ShopAssetCategory->shopId = 0;
                $ShopAssetCategory->shopTypeId =0;
               }
               
                $ShopAssetCategory->createBy = Auth::User()->id;
                $ShopAssetCategory->created_at = Carbon::now();
                $ShopAssetCategory->save();
                return ;
            }

            if (isset($request->assetFourCategory)) {
              $ShopAssetCategory = new ShopAssetCategory();
              $ShopAssetCategory->assetCategoryName = $request->assetCategoryName;
              $ShopAssetCategory->assetCategoryPosition = $request->assetCategoryPosition;
              $ShopAssetCategory->assetCategoryStatus = $request->assetCategoryStatus;
              if (isset($request->assetSubCategoryStatus)){
                $ShopAssetCategory->assetSubCategoryStatus =  true;
              }
              else {
                $ShopAssetCategory->assetSubCategoryStatus = false;
              }

              if (isset($request->assetFourCategory)) {
                $ShopAssetCategory->previousId = $request->assetFourCategory;
              }
              if (isset($request->assetFourCategory)) {
                $label = ShopAssetCategory::where('assetCategoryId',$request->assetFourCategory)->first()->label;
                $incrementLabel = $label+1;
                $ShopAssetCategory->label = $incrementLabel;
              }
              if(Auth::guard('admin')->check()){
                $ShopAssetCategory->shopId = Auth::User()->shopId;
                $ShopAssetCategory->shopTypeId = $shopTypeId;
              }
             else{
              $ShopAssetCategory->shopId = 0;
              $ShopAssetCategory->shopTypeId =0;
             }
             
              $ShopAssetCategory->createBy = Auth::User()->id;
              $ShopAssetCategory->created_at = Carbon::now();
              $ShopAssetCategory->save();
              return ;
            }

            if (isset($request->assetThirdCategory)) {
              $ShopAssetCategory = new ShopAssetCategory();
              $ShopAssetCategory->assetCategoryName = $request->assetCategoryName;
              $ShopAssetCategory->assetCategoryPosition = $request->assetCategoryPosition;
              $ShopAssetCategory->assetCategoryStatus = $request->assetCategoryStatus;
              if (isset($request->assetSubCategoryStatus)){
                $ShopAssetCategory->assetSubCategoryStatus =  true;
              }
              else {
                $ShopAssetCategory->assetSubCategoryStatus = false;
              }

              if (isset($request->assetThirdCategory)) {
                $ShopAssetCategory->previousId = $request->assetThirdCategory;
              }
              if (isset($request->assetThirdCategory)) {
                $label = ShopAssetCategory::where('assetCategoryId',$request->assetThirdCategory)->first()->label;
                $incrementLabel = $label+1;
                $ShopAssetCategory->label = $incrementLabel;
              }
              if(Auth::guard('admin')->check()){
                $ShopAssetCategory->shopId = Auth::User()->shopId;
                $ShopAssetCategory->shopTypeId = $shopTypeId;
              }
             else{
              $ShopAssetCategory->shopId = 0;
              $ShopAssetCategory->shopTypeId =0;
             }
           
              $ShopAssetCategory->createBy = Auth::User()->id;
              $ShopAssetCategory->created_at = Carbon::now();
              $ShopAssetCategory->save();
              return ;
            }

            if (isset($request->assetSubCategory)) {
              $ShopAssetCategory = new ShopAssetCategory();
              $ShopAssetCategory->assetCategoryName = $request->assetCategoryName;
              $ShopAssetCategory->assetCategoryPosition = $request->assetCategoryPosition;
              $ShopAssetCategory->assetCategoryStatus = $request->assetCategoryStatus;
              if (isset($request->assetSubCategoryStatus)){
                $ShopAssetCategory->assetSubCategoryStatus =  true;
              }
              else {
                $ShopAssetCategory->assetSubCategoryStatus = false;
              }

              if (isset($request->assetSubCategory)) {
                $ShopAssetCategory->previousId = $request->assetSubCategory;
              }
              if (isset($request->assetSubCategory)) {
                $label = ShopAssetCategory::where('assetCategoryId',$request->assetSubCategory)->first()->label;
                $incrementLabel = $label+1;
                $ShopAssetCategory->label = $incrementLabel;
              }
              if(Auth::guard('admin')->check()){
                $ShopAssetCategory->shopId = Auth::User()->shopId;
                $ShopAssetCategory->shopTypeId = $shopTypeId;
              }
             else{
              $ShopAssetCategory->shopId = 0;
              $ShopAssetCategory->shopTypeId =0;
             }
             
              $ShopAssetCategory->createBy = Auth::User()->id;
              $ShopAssetCategory->created_at = Carbon::now();
              $ShopAssetCategory->save();
              return ;
            }

            if (isset($request->assetCategory)) {
                $ShopAssetCategory = new ShopAssetCategory();
                $ShopAssetCategory->assetCategoryName = $request->assetCategoryName;
                $ShopAssetCategory->assetCategoryPosition = $request->assetCategoryPosition;
                $ShopAssetCategory->assetCategoryStatus = $request->assetCategoryStatus;
                if (isset($request->assetSubCategoryStatus)){
                  $ShopAssetCategory->assetSubCategoryStatus =  true;
                }
                else {
                  $ShopAssetCategory->assetSubCategoryStatus = false;
                }
                if (isset($request->assetCategory)) {
                    $ShopAssetCategory->previousId = $request->assetCategory;
                }
                if (isset($request->assetCategory)) {
                    $label = ShopAssetCategory::where('assetCategoryId',$request->assetCategory)->first()->label;
                    $incrementLabel = $label+1;
                    $ShopAssetCategory->label = $incrementLabel;
                }
                if(Auth::guard('admin')->check()){
                  $ShopAssetCategory->shopId = Auth::User()->shopId;
                  $ShopAssetCategory->shopTypeId = $shopTypeId;
                }
               else{
                $ShopAssetCategory->shopId = 0;
                $ShopAssetCategory->shopTypeId =0;
               }
          
                
                $ShopAssetCategory->createBy = Auth::User()->id;
                $ShopAssetCategory->created_at = Carbon::now();
                $ShopAssetCategory->save();
                return ;
            }

              $ShopAssetCategory = new ShopAssetCategory();
              $ShopAssetCategory->assetCategoryName = $request->assetCategoryName;
              $ShopAssetCategory->assetCategoryPosition = $request->assetCategoryPosition;
              $ShopAssetCategory->assetCategoryStatus = $request->assetCategoryStatus;
              if (isset($request->assetSubCategoryStatus)){
                $ShopAssetCategory->assetSubCategoryStatus =  true;
              }
              else {
                $ShopAssetCategory->assetSubCategoryStatus = false;
              }
              if(Auth::guard('admin')->check()){
                $ShopAssetCategory->shopId = Auth::User()->shopId;
                $ShopAssetCategory->shopTypeId = $shopTypeId;
              }
             else{
              $ShopAssetCategory->shopId = 0;
              $ShopAssetCategory->shopTypeId =0;
             }
           
              $ShopAssetCategory->createBy = Auth::User()->id;
              $ShopAssetCategory->created_at = Carbon::now();
              $ShopAssetCategory->save();




            
          // ============================================
            // =============== Chart Of Accounts ==========
            // ============================================

             if(0){
            ////////          sirial

            // if(ShopAssetCategory::where('label',$label)
            // ->exists()){

            // $noOfRow = ShopAssetCategory::where('label',$label)
            // ->first()->accountCodeSirial+1;

            // }else{
                $noOfRow = 1;
            // }

            ////////          /sirial
            
            
            ////////          Previous Account Code   
            // if($label==1){
            $code = AccountSetup::where('placementType','27')->where('headName','106')->first()->headCode;
            // }
            ////////          /Previous Account Code 


 
            
            // $headShortName = strtoupper($headShortName);
                      

            // $headName = 'Loan-'.$headShortName.'-'.$request->personName;
            $headName = $request->assetCategoryName;
            $lavel= ChartOfAccount::where('headCode',$code)->first()->headLavel+1;
            $dr_cr= ChartOfAccount::where('headCode',$code)->first()->dr_cr;
            $headGroupId= ChartOfAccount::where('headCode',$code)->first()->headGroupId;
            $headGroupType= ChartOfAccount::where('headCode',$code)->first()->headGroupType+1;
            $accCode = $code.str_pad($noOfRow,2, '0', STR_PAD_LEFT);
 

          //   ChartOfAccountRegister::insert([
          //     'headGroupType' => $headGroupType,
          //     'headGroupId' => $headGroupId,
          //     'dr_cr' => $dr_cr,
          //     'pre_code' => $code,
          //     'headCode' => $accCode,
          //     'headName' => $headName,
          //     'headLavel' => $lavel,
          //     'lastCode' => 0,
          //     'status' => 1,
          //     'position' => 0,
          //     'autoCreate' => 0,
          //     'shopId' => Auth::user()->shopId,
          //     'createBy' => Auth::user()->id,
          //     'created_at' => Carbon::now(),
          // ]);
          }
            // ============================================
            // =============== // Chart Of Accounts =======
            // ============================================


            // $ShopAssetCategory->accountCodeSirial = 0;
            //     $ShopAssetCategory->accountHeadCode = 0;
            //     $ShopAssetCategory->accountCode = 0;
                
            // ShopAssetCategory::where()->update([

            // ]);


          }





    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($assetCategoryId)
    {
        $assetCategoryStatus = ShopAssetCategory::where('assetCategoryId', $assetCategoryId)->first()->assetCategoryStatus;

        if ($assetCategoryStatus == 0){
            ShopAssetCategory::where('assetCategoryId', $assetCategoryId)->update([
                'assetCategoryStatus' => 1,
                'updateBy'=>  Auth::user()->id,
            ]);

        }
        else {
            ShopAssetCategory::where('assetCategoryId', $assetCategoryId)->update([
                'assetCategoryStatus' => 0,
                'updateBy'=>  Auth::user()->id,
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($assetCategoryId)
    {

          $shopTypeId = Auth::User()->shopTypeId;

          $assetCategorySingleInfo = ShopAssetCategory::where('assetCategoryId',$assetCategoryId)->first();

          $categoryInfo = ShopAssetCategory::where('assetCategoryId',$assetCategorySingleInfo->assetCategoryId)->first();

          if ($categoryInfo->label == 8 ) {

              $sevenCategoryName = ShopAssetCategory::where('assetCategoryId',$categoryInfo->previousId)->first();
              $sixCategoryName = ShopAssetCategory::where('assetCategoryId',  $sevenCategoryName->previousId)->first();
              $fiveCategoryName = ShopAssetCategory::where('assetCategoryId', $sixCategoryName->previousId)->first();
              $fourCategoryName = ShopAssetCategory::where('assetCategoryId', $fiveCategoryName->previousId)->first();
              $thirdCategoryName = ShopAssetCategory::where('assetCategoryId',$fourCategoryName->previousId)->first();
              $subCategoryName = ShopAssetCategory::where('assetCategoryId',  $thirdCategoryName->previousId)->first();
              $categoryName = ShopAssetCategory::where('assetCategoryId',     $subCategoryName->previousId)->first();

              return [
                  'assetCategorySingleInfo' => $assetCategorySingleInfo, 'categoryInfo' => $categoryInfo,
                  'thirdCategoryName'=> $thirdCategoryName,'subCategoryName' => $subCategoryName, 'categoryName' => $categoryName,
                  'fourCategoryName' => $fourCategoryName,'fiveCategoryName'=> $fiveCategoryName, 'sixCategoryName' => $sixCategoryName,
                  'sevenCategoryName' => $sevenCategoryName,
              ];
          }
          if ($categoryInfo->label == 7 ) {

              $sixCategoryName = ShopAssetCategory::where('assetCategoryId',$categoryInfo->previousId)->first();
              $fiveCategoryName = ShopAssetCategory::where('assetCategoryId',$sixCategoryName->previousId)->first();
              $fourCategoryName = ShopAssetCategory::where('assetCategoryId',$fiveCategoryName->previousId)->first();
              $thirdCategoryName = ShopAssetCategory::where('assetCategoryId',$fourCategoryName->previousId)->first();
              $subCategoryName = ShopAssetCategory::where('assetCategoryId',$thirdCategoryName->previousId)->first();
              $categoryName = ShopAssetCategory::where('assetCategoryId',$subCategoryName->previousId)->first();

              return [
                  'assetCategorySingleInfo' => $assetCategorySingleInfo, 'categoryInfo' => $categoryInfo,
                  'thirdCategoryName'=> $thirdCategoryName,'subCategoryName' => $subCategoryName, 'categoryName' => $categoryName,
                  'fourCategoryName' => $fourCategoryName,'fiveCategoryName'=> $fiveCategoryName, 'sixCategoryName' => $sixCategoryName,
              ];
          }
          if ($categoryInfo->label == 6 ) {

              $fiveCategoryName = ShopAssetCategory::where('assetCategoryId',$categoryInfo->previousId)->first();
              $fourCategoryName = ShopAssetCategory::where('assetCategoryId',$fiveCategoryName->previousId)->first();
              $thirdCategoryName = ShopAssetCategory::where('assetCategoryId',$fourCategoryName->previousId)->first();
              $subCategoryName = ShopAssetCategory::where('assetCategoryId',$thirdCategoryName->previousId)->first();
              $categoryName = ShopAssetCategory::where('assetCategoryId',$subCategoryName->previousId)->first();

              return [
                  'assetCategorySingleInfo' => $assetCategorySingleInfo, 'categoryInfo' => $categoryInfo,
                  'thirdCategoryName'=> $thirdCategoryName,'subCategoryName' => $subCategoryName, 'categoryName' => $categoryName,
                  'fourCategoryName' => $fourCategoryName,'fiveCategoryName'=> $fiveCategoryName,
              ];
          }
          if ($categoryInfo->label == 5 ) {

              $fourCategoryName = ShopAssetCategory::where('assetCategoryId',$categoryInfo->previousId)->first();
              $thirdCategoryName = ShopAssetCategory::where('assetCategoryId',$fourCategoryName->previousId)->first();
              $subCategoryName = ShopAssetCategory::where('assetCategoryId',$thirdCategoryName->previousId)->first();
              $categoryName = ShopAssetCategory::where('assetCategoryId',$subCategoryName->previousId)->first();

              return [
                  'assetCategorySingleInfo' => $assetCategorySingleInfo, 'categoryInfo' => $categoryInfo,
                  'thirdCategoryName'=> $thirdCategoryName,'subCategoryName' => $subCategoryName, 'categoryName' => $categoryName,
                  'fourCategoryName' => $fourCategoryName,
              ];
          }
          if ($categoryInfo->label == 4 ) {

              $thirdCategoryName = ShopAssetCategory::where('assetCategoryId',$categoryInfo->previousId)->first();
              $subCategoryName = ShopAssetCategory::where('assetCategoryId',$thirdCategoryName->previousId)->first();
              $categoryName = ShopAssetCategory::where('assetCategoryId',$subCategoryName->previousId)->first();

              return [
                  'assetCategorySingleInfo' => $assetCategorySingleInfo, 'categoryInfo' => $categoryInfo,
                  'thirdCategoryName'=> $thirdCategoryName,'subCategoryName' => $subCategoryName, 'categoryName' => $categoryName,
              ];
          }
          if ($categoryInfo->label == 3 ) {

              $subCategoryName = ShopAssetCategory::where('assetCategoryId',$categoryInfo->previousId)->first();
              $categoryName = ShopAssetCategory::where('assetCategoryId',$subCategoryName->previousId)->first();

              return [
                  'assetCategorySingleInfo' => $assetCategorySingleInfo, 'categoryInfo' => $categoryInfo,
                  'subCategoryName' => $subCategoryName, 'categoryName' => $categoryName,
              ];
          }

          if ($categoryInfo->label == 2 ) {

              $categoryName = ShopAssetCategory::where('assetCategoryId',$categoryInfo->previousId)->first();

              return [
                  'assetCategorySingleInfo' => $assetCategorySingleInfo, 'categoryInfo' => $categoryInfo,
                  'categoryName' => $categoryName,
              ];
          }
          if ($categoryInfo->label == 1 ) {

              return [
                  'assetCategorySingleInfo' => $assetCategorySingleInfo, 'categoryInfo' => $categoryInfo,
              ];
          }

          return ['assetCategorySingleInfo' => $assetCategorySingleInfo];

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $assetCategoryId)
    {
          $this->validate($request, [
              'assetCategoryName' => 'required',
              'assetCategoryStatus' => 'required',
          ],
          [
             'assetCategoryName.required' => 'Enter Asset Category  Name',
             'assetCategoryStatus.required' => 'Select Asset Category Status',
          ]);

          $shopTypeId = Auth::User()->shopTypeId;

          if (ShopAssetCategory::where('assetCategoryId','!=',$assetCategoryId)->where('assetCategoryName',$request->assetCategoryName)->exists()) {
              return ['changeAssetName' => 'Change Asset Category Name'];
          }
          else {
              if (isset($request->assetSevenCategory)) {
                  ShopAssetCategory::where('assetCategoryId',$assetCategoryId)->update([
                       'assetCategoryName' => $request->assetCategoryName,
                       'assetCategoryPosition' => $request->assetCategoryPosition,
                       'assetCategoryStatus' => $request->assetCategoryStatus,
                       'previousId' => $request->assetSevenCategory,
                       'updateBy' => Auth::User()->id,
                  ]);
                  return ;
               }
              if (isset($request->assetSixCategory)) {
                  ShopAssetCategory::where('assetCategoryId',$assetCategoryId)->update([
                       'assetCategoryName' => $request->assetCategoryName,
                       'assetCategoryPosition' => $request->assetCategoryPosition,
                       'assetCategoryStatus' => $request->assetCategoryStatus,
                       'previousId' => $request->assetSixCategory,
                       'updateBy' => Auth::User()->id,
                  ]);
                  return ;
               }
              if (isset($request->assetFiveCategory)) {
                  ShopAssetCategory::where('assetCategoryId',$assetCategoryId)->update([
                       'assetCategoryName' => $request->assetCategoryName,
                       'assetCategoryPosition' => $request->assetCategoryPosition,
                       'assetCategoryStatus' => $request->assetCategoryStatus,
                       'previousId' => $request->assetFiveCategory,
                       'updateBy' => Auth::User()->id,
                  ]);
                  return ;
               }
              if (isset($request->assetFourCategory)) {
                  ShopAssetCategory::where('assetCategoryId',$assetCategoryId)->update([
                       'assetCategoryName' => $request->assetCategoryName,
                       'assetCategoryPosition' => $request->assetCategoryPosition,
                       'assetCategoryStatus' => $request->assetCategoryStatus,
                       'previousId' => $request->assetFourCategory,
                       'updateBy' => Auth::User()->id,
                  ]);
                  return ;
               }
              if (isset($request->assetThirdCategory)) {
                  ShopAssetCategory::where('assetCategoryId',$assetCategoryId)->update([
                       'assetCategoryName' => $request->assetCategoryName,
                       'assetCategoryPosition' => $request->assetCategoryPosition,
                       'assetCategoryStatus' => $request->assetCategoryStatus,
                       'previousId' => $request->assetThirdCategory,
                       'updateBy' => Auth::User()->id,
                  ]);
                  return ;
               }
              if (isset($request->assetSubCategory)) {
                  ShopAssetCategory::where('assetCategoryId',$assetCategoryId)->update([
                       'assetCategoryName' => $request->assetCategoryName,
                       'assetCategoryPosition' => $request->assetCategoryPosition,
                       'assetCategoryStatus' => $request->assetCategoryStatus,
                       'previousId' => $request->assetSubCategory,
                       'updateBy' => Auth::User()->id,
                  ]);
                  return ;
               }
              if (isset($request->assetCategory)) {
                  ShopAssetCategory::where('assetCategoryId',$assetCategoryId)->update([
                       'assetCategoryName' => $request->assetCategoryName,
                       'assetCategoryPosition' => $request->assetCategoryPosition,
                       'assetCategoryStatus' => $request->assetCategoryStatus,
                       'previousId' => $request->assetCategory,
                       'updateBy' => Auth::User()->id,
                  ]);
                  return ;
               }
               ShopAssetCategory::where('assetCategoryId',$assetCategoryId)->update([
                   'assetCategoryName' => $request->assetCategoryName,
                   'assetCategoryPosition' => $request->assetCategoryPosition,
                   'assetCategoryStatus' => $request->assetCategoryStatus,
                   'updateBy' => Auth::User()->id,
               ]);

          }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      $mes = '';
        if(shopAssetCategory::where('previousId',$id)->exists()){
          $deleteStatus = 0;
          $mes = 'Delete down category.';
        }else{
          if(AssetCodeEntry::where('assetCategoryId',$id)->exists()){
            $deleteStatus = 0;
            $mes = 'Delete asset.';
          }
          else
          {
            shopAssetCategory::where('assetCategoryId',$id)->delete();
            $deleteStatus = 1;
          }
          }

        return [
          'deleteStatus' => $deleteStatus,
          'mes' => $mes,
        ];
    }
}