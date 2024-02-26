<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ShopAssetCategory;
use App\ShopInformation;
use App\AssetCodeEntry;
use App\ShopAssetEntry;
use Carbon\Carbon;
use Auth;

class AssetCodeEntryController extends Controller
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
            $assetCodeEntryLists = AssetCodeEntry::with('assetCategoryName','product')->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->paginate(30);
            return ['assetCodeEntryLists' => $assetCodeEntryLists];
        
    }

    public function getAssetCodeEntryList(){
        $list = AssetCodeEntry::get();

        return ['list' => $list]; 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

           $shopTypeId = Auth::User()->shopTypeId;
        //    ->where('shopTypeId',$shopTypeId)
           $assetCategoryLists      =   ShopAssetCategory::where('label',1)->get();
           $assetSubCategoryLists   =   ShopAssetCategory::where('label',2)->get();
           $assetThirdCategoryLists =   ShopAssetCategory::where('label',3)->get();
           $assetFourCategoryLists  =   ShopAssetCategory::where('label',4)->get();
           $assetFiveCategoryLists  =   ShopAssetCategory::where('label',5)->get();
           $assetSixCategoryLists   =   ShopAssetCategory::where('label',6)->get();
           $assetSevenCategoryLists =   ShopAssetCategory::where('label',7)->get();

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
            'assetCategory' => 'required',
            'assetPorductName' => 'required',
           
           
        ],
        [
           'assetCategory.required' => 'Select Asset Category  Name',
           'assetPorductName.required' => 'Enter Asset Category  Name',         
           'assetCodeStatus.required' => 'Select Asset Category Status',
        ]);

        $shopTypeId = Auth::User()->shopTypeId;

        if(AssetCodeEntry::where('assetPorductName',$request->assetPorductName)->where('shopId',Auth::user()->shopId)->exists()){
            return ['changeName' => 1];
        }


        if (isset($request->assetSevenCategory)) {
            $AssetCodeEntry = new AssetCodeEntry();
            $AssetCodeEntry->assetCategoryId = $request->assetSevenCategory;
            $AssetCodeEntry->assetPorductName = $request->assetPorductName;
            $AssetCodeEntry->assetPorductCode = $request->assetPorductCode;
            $AssetCodeEntry->assetCategoryLevel = 7;

            if (isset($request->assetCodeStatus)){
              $AssetCodeEntry->assetCodeStatus =  true;
            }
            else {
              $AssetCodeEntry->assetCodeStatus = false;
            }
            
            if(Auth::guard('admin')->check()){
                $AssetCodeEntry->shopId =  Auth::user()->shopId;
                $AssetCodeEntry->shopTypeId = $shopTypeId;
              }
             else{
                $AssetCodeEntry->shopId = 0;
                $AssetCodeEntry->shopTypeId = 0; 
             }


            $AssetCodeEntry->createBy = Auth::User()->id;
            $AssetCodeEntry->created_at = Carbon::now();
            $AssetCodeEntry->save();
            return ;
        }

        if (isset($request->assetSixCategory)) {
            $AssetCodeEntry = new AssetCodeEntry();
            $AssetCodeEntry->assetCategoryId = $request->assetSixCategory;
            $AssetCodeEntry->assetPorductName = $request->assetPorductName;
            $AssetCodeEntry->assetPorductCode = $request->assetPorductCode;
            $AssetCodeEntry->assetCategoryLevel = 6;

            if (isset($request->assetCodeStatus)){
              $AssetCodeEntry->assetCodeStatus =  true;
            }
            else {
              $AssetCodeEntry->assetCodeStatus = false;
            }
            if(Auth::guard('admin')->check()){
                $AssetCodeEntry->shopId =  Auth::user()->shopId;
                $AssetCodeEntry->shopTypeId = $shopTypeId;
              }
             else{
                $AssetCodeEntry->shopId = 0;
                $AssetCodeEntry->shopTypeId = 0; 
             }


            $AssetCodeEntry->createBy = Auth::User()->id;
            $AssetCodeEntry->created_at = Carbon::now();
            $AssetCodeEntry->save();
            return ;
        }
        if (isset($request->assetFiveCategory)) {
            $AssetCodeEntry = new AssetCodeEntry();
            $AssetCodeEntry->assetCategoryId = $request->assetFiveCategory;
            $AssetCodeEntry->assetPorductName = $request->assetPorductName;
            $AssetCodeEntry->assetPorductCode = $request->assetPorductCode;
            $AssetCodeEntry->assetCategoryLevel = 5;

            if (isset($request->assetCodeStatus)){
              $AssetCodeEntry->assetCodeStatus =  true;
            }
            else {
              $AssetCodeEntry->assetCodeStatus = false;
            }
            if(Auth::guard('admin')->check()){
                $AssetCodeEntry->shopId =  Auth::user()->shopId;
                $AssetCodeEntry->shopTypeId = $shopTypeId;
              }
             else{
                $AssetCodeEntry->shopId = 0;
                $AssetCodeEntry->shopTypeId = 0; 
             }


            $AssetCodeEntry->createBy = Auth::User()->id;
            $AssetCodeEntry->created_at = Carbon::now();
            $AssetCodeEntry->save();
            return ;
        }

        if (isset($request->assetFourCategory)) {
            $AssetCodeEntry = new AssetCodeEntry();
            $AssetCodeEntry->assetCategoryId = $request->assetFourCategory;
            $AssetCodeEntry->assetPorductName = $request->assetPorductName;
            $AssetCodeEntry->assetPorductCode = $request->assetPorductCode;
            $AssetCodeEntry->assetCategoryLevel = 4;

            if (isset($request->assetCodeStatus)){
              $AssetCodeEntry->assetCodeStatus =  true;
            }
            else {
              $AssetCodeEntry->assetCodeStatus = false;
            }
            if(Auth::guard('admin')->check()){
                $AssetCodeEntry->shopId =  Auth::user()->shopId;
                $AssetCodeEntry->shopTypeId = $shopTypeId;
              }
             else{
                $AssetCodeEntry->shopId = 0;
                $AssetCodeEntry->shopTypeId = 0; 
             }


            $AssetCodeEntry->createBy = Auth::User()->id;
            $AssetCodeEntry->created_at = Carbon::now();
            $AssetCodeEntry->save();
            return ;
        }
        if (isset($request->assetThirdCategory)) {
            $AssetCodeEntry = new AssetCodeEntry();
            $AssetCodeEntry->assetCategoryId = $request->assetThirdCategory;
            $AssetCodeEntry->assetPorductName = $request->assetPorductName;
            $AssetCodeEntry->assetPorductCode = $request->assetPorductCode;
            $AssetCodeEntry->assetCategoryLevel = 3;

            if (isset($request->assetCodeStatus)){
              $AssetCodeEntry->assetCodeStatus =  true;
            }
            else {
              $AssetCodeEntry->assetCodeStatus = false;
            }
            if(Auth::guard('admin')->check()){
                $AssetCodeEntry->shopId =  Auth::User()->id;
                $AssetCodeEntry->shopTypeId = $shopTypeId;
              }
             else{
                $AssetCodeEntry->shopId = 0;
                $AssetCodeEntry->shopTypeId = 0; 
             }

            $AssetCodeEntry->createBy = Auth::User()->id;
            $AssetCodeEntry->created_at = Carbon::now();
            $AssetCodeEntry->save();
            return ;
        }
        if (isset($request->assetSubCategory)) {
            $AssetCodeEntry = new AssetCodeEntry();
            $AssetCodeEntry->assetCategoryId = $request->assetSubCategory;
            $AssetCodeEntry->assetPorductName = $request->assetPorductName;
            $AssetCodeEntry->assetPorductCode = $request->assetPorductCode;
            $AssetCodeEntry->assetCategoryLevel = 2;

            if (isset($request->assetCodeStatus)){
              $AssetCodeEntry->assetCodeStatus =  true;
            }
            else {
              $AssetCodeEntry->assetCodeStatus = false;
            }
            if(Auth::guard('admin')->check()){
                $AssetCodeEntry->shopId = Auth::user()->shopId;
                $AssetCodeEntry->shopTypeId = $shopTypeId;
              }
             else{
                $AssetCodeEntry->shopId = 0;
                $AssetCodeEntry->shopTypeId = 0; 
             }


            $AssetCodeEntry->createBy = Auth::User()->id;
            $AssetCodeEntry->created_at = Carbon::now();
            $AssetCodeEntry->save();
            return ;
        }
        if (isset($request->assetCategory)) {
            $AssetCodeEntry = new AssetCodeEntry();
            $AssetCodeEntry->assetCategoryId = $request->assetCategory;
            $AssetCodeEntry->assetPorductName = $request->assetPorductName;
            $AssetCodeEntry->assetPorductCode = $request->assetPorductCode;
            $AssetCodeEntry->assetCategoryLevel = 1;

            if (isset($request->assetCodeStatus)){
              $AssetCodeEntry->assetCodeStatus =  true;
            }
            else {
              $AssetCodeEntry->assetCodeStatus = false;
            }
            if(Auth::guard('admin')->check()){
                $AssetCodeEntry->shopId = Auth::user()->shopId;
                $AssetCodeEntry->shopTypeId = $shopTypeId;
              }
             else{
                $AssetCodeEntry->shopId = 0;
                $AssetCodeEntry->shopTypeId = 0; 
             }

            $AssetCodeEntry->createBy =Auth::user()->shopId;
            $AssetCodeEntry->created_at = Carbon::now();
            $AssetCodeEntry->save();
            return ;
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($assetCodeEntryId)
    {
        $shopTypeId = Auth::User()->shopTypeId;
        $assetCategorySingleInfo = AssetCodeEntry::where('assetCodeEntryId',$assetCodeEntryId)->first();

        $categoryInfo = ShopAssetCategory::where('assetCategoryId',$assetCategorySingleInfo->assetCategoryId)->first();

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
    public function update(Request $request, $assetCodeEntryId)
    {
          $this->validate($request, [
              'assetCategory' => 'required',
              'assetPorductName' => 'required',
              
          ],
          [
             'assetCategory.required' => 'Select Asset Category  Name',
             'assetPorductName.required' => 'Enter Asset Category  Name',
            
          ]);


          if (isset($request->assetSevenCategory)) {
            $category = $request->assetSevenCategory;
            $label = ShopAssetCategory::where('assetCategoryId',$request->assetSevenCategory)->first()->label;
            AssetCodeEntry::where('assetCodeEntryId',$assetCodeEntryId)->update([
                'assetCategoryLevel' => $label,
                'assetCategoryId' => $request->assetSevenCategory,
                'assetPorductName' => $request->assetPorductName,
                'assetPorductCode' => $request->assetPorductCode,
                'assetCodeStatus' => $request->assetCodeStatus,
                'updateBy' => Auth::User()->shopId,
              ]);
            
          }

          else if (isset($request->assetSixCategory)) {
            $category = $request->assetSixCategory;
            $label = ShopAssetCategory::where('assetCategoryId',$request->assetSixCategory)->first()->label;
            AssetCodeEntry::where('assetCodeEntryId',$assetCodeEntryId)->update([
                'assetCategoryLevel' => $label,
                  'assetCategoryId' => $request->assetSixCategory,
                  'assetPorductName' => $request->assetPorductName,
                  'assetPorductCode' => $request->assetPorductCode,
                  'assetCodeStatus' => $request->assetCodeStatus,
                  'updateBy' => Auth::User()->shopId,
              ]);
            
          }
          else if (isset($request->assetFiveCategory)) {
            $category = $request->assetFiveCategory;
            $label = ShopAssetCategory::where('assetCategoryId',$request->assetFiveCategory)->first()->label;
            AssetCodeEntry::where('assetCodeEntryId',$assetCodeEntryId)->update([
                'assetCategoryLevel' => $label,
                  'assetCategoryId' => $request->assetFiveCategory,
                  'assetPorductName' => $request->assetPorductName,
                  'assetPorductCode' => $request->assetPorductCode,
                  'assetCodeStatus' => $request->assetCodeStatus,
                  'updateBy' => Auth::User()->shopId,
              ]);
              
          }
          else if (isset($request->assetFourCategory)) {
            $category = $request->assetFourCategory;
            $label = ShopAssetCategory::where('assetCategoryId',$request->assetFourCategory)->first()->label;
            AssetCodeEntry::where('assetCodeEntryId',$assetCodeEntryId)->update([
                'assetCategoryLevel' => $label,
                  'assetCategoryId' => $request->assetFourCategory,
                  'assetPorductName' => $request->assetPorductName,
                  'assetPorductCode' => $request->assetPorductCode,
                  'assetCodeStatus' => $request->assetCodeStatus,
                  'updateBy' => Auth::User()->shopId,
              ]);
              
           }
           else if (isset($request->assetThirdCategory)) {
            $category = $request->assetThirdCategory;
            $label = ShopAssetCategory::where('assetCategoryId',$request->assetThirdCategory)->first()->label;
            AssetCodeEntry::where('assetCodeEntryId',$assetCodeEntryId)->update([
                'assetCategoryLevel' => $label,
                  'assetCategoryId' => $request->assetThirdCategory,
                  'assetPorductName' => $request->assetPorductName,
                  'assetPorductCode' => $request->assetPorductCode,
                  'assetCodeStatus' => $request->assetCodeStatus,
                  'updateBy' => Auth::User()->shopId,
              ]);
             
           }
           else if (isset($request->assetSubCategory)) {
            $category = $request->assetSubCategory;
            $label = ShopAssetCategory::where('assetCategoryId',$request->assetSubCategory)->first()->label;
              AssetCodeEntry::where('assetCodeEntryId',$assetCodeEntryId)->update([
                  'assetCategoryLevel' => $label,
                  'assetCategoryId' => $request->assetSubCategory,
                  'assetPorductName' => $request->assetPorductName,
                  'assetPorductCode' => $request->assetPorductCode,
                  'assetCodeStatus' => $request->assetCodeStatus,
                  'updateBy' => Auth::User()->shopId,
              ]);
           }
           else if (isset($request->assetCategory)) {
            $category = $request->assetCategory;
            $label = ShopAssetCategory::where('assetCategoryId',$request->assetCategory)->first()->label;
            AssetCodeEntry::where('assetCodeEntryId',$assetCodeEntryId)->update([
                'assetCategoryLevel' => $label,
                  'assetCategoryId' => $request->assetCategory,
                  'assetPorductName' => $request->assetPorductName,
                  'assetPorductCode' => $request->assetPorductCode,
                  'assetCodeStatus' => $request->assetCodeStatus,
                  'updateBy' => Auth::User()->shopId,
              ]);

           }

           if(ShopAssetEntry::where('shopId',Auth::user()->shopId)->where('assetProductId',$assetCodeEntryId)->exists()){
            ShopAssetEntry::where('shopId',Auth::user()->shopId)
            ->where('assetProductId',$assetCodeEntryId)->update([
                    'assetCategoryId' => $category,
                    'assetCategoryLevel' => $label,
            ]);
           }
              return ;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {   
        if(ShopAssetEntry::where('assetProductId',$id)->where('shopId',Auth::user()->shopId)->exists()){
            $deleteStatus = 0;
        }
        else{
            AssetCodeEntry::where('assetCodeEntryId',$id)->delete();
            $deleteStatus = 1;
        }

        return ['deleteStatus' => $deleteStatus];
        
    }
}
