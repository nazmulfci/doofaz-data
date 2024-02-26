<?php

namespace App\Http\Controllers;

use App\AssetBrandEntry;
use App\UserDetail;
use App\ShopAddAssetSupplierEntry;
use App\StatementInformation;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use DB;

class ShopAssetBrandController extends Controller
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
        $assetBrandList = AssetBrandEntry::with('brand')->where('shopId',Auth::user()->shopId)->orderBy('assetBrandEntryId','desc')->paginate(20);
        return  ['assetBrandList' => $assetBrandList];
    }

    public function shopAssetBrandReport()
    {
        if(Auth::guard('admin')->check()){
        $assetBrandReportOwner = AssetBrandEntry::where('shopId',Auth::user()->shopId)->orderBy('assetBrandEntryId','desc')->get();
        $assetBrandReportGlobal = AssetBrandEntry::where('shopId','!=',Auth::user()->shopId)->orderBy('assetBrandEntryId','desc')->get();
     
        return  ['assetBrandReportOwner' => $assetBrandReportOwner, 'assetBrandReportGlobal' => $assetBrandReportGlobal];
        }
    
        else{
        $assetBrandReportOwner = AssetBrandEntry::where('shopId',Auth::user()->shopId)->orderBy('assetBrandEntryId','desc')->get();
        $assetBrandReportGlobal = AssetBrandEntry::where('shopId','!=',Auth::user()->shopId)->orderBy('assetBrandEntryId','desc')->get();
     
        return  ['assetBrandReportOwner' => $assetBrandReportOwner, 'assetBrandReportGlobal' => $assetBrandReportGlobal];
        }
    }

    public function shopAssetBrandReportAll()
    {
         $assetBrandReportAll = AssetBrandEntry::orderBy('assetBrandEntryId','desc')->get();
        //  $assetBrandReportAll = UserDetail::get();
     
         return datatables($assetBrandReportAll)->toJson();
        
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'assetBrandName' => 'required',
            'assetBrandStatus' => 'required',
        ],
        [
            'assetBrandName.required' => "Enter Asset Brand Name",
            'assetBrandStatus.required' => "Select Asset Brand Status",
        ]);

        if (AssetBrandEntry::where('assetBrandName', $request->assetBrandName)->exists()) {
            return ['changeAssetBrandName' => 'Change Your  Name'];
        } else {
            AssetBrandEntry::insert([
                'assetBrandName' => $request->assetBrandName,
                'assetBrandStatus' => $request->assetBrandStatus,
                'createBy' => Auth::user()->id,
                'shopId' => Auth::user()->shopId,
                'created_at' => Carbon::now(),
            ]);
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
    public function edit($id)
    {
        $data = AssetBrandEntry::where('assetBrandEntryId',$id)->first();
        return ['ShopAssetdata'=>$data];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'assetBrandName' => 'required',
            'assetBrandStatus' => 'required',
        ],
        [
            'assetBrandName.required' => "Enter Asset Brand Name",
            'assetBrandStatus.required' => "Select Asset Brand Status",
        ]);
        if (AssetBrandEntry::where('assetBrandName',$request->assetBrandName)->where('assetBrandEntryId','!=',$id)->exists()) {
            return ['changeAssetName' => "Change Asset Brand Name"];
        }
        else {
            AssetBrandEntry::where('assetBrandEntryId',$id)->update([
              'assetBrandName' => $request->assetBrandName,
              'assetBrandStatus' => $request->assetBrandStatus,
              'updateBy' => Auth::user()->id,
              'updated_at' => Carbon::now(),
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
        //
    }
}
