<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\WarehouseInformation;
use Auth;
use Carbon\Carbon;

class warehouseEntryController extends Controller
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
        $data = WarehouseInformation::where('shopId',Auth::user()->shopId)->get();
        return [
            'data' => $data
        ];
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
            'warehouseName' => 'required',
            'location' => 'required',
            'fullAddress' => 'required',
        ],
        [
            'warehouseName.required' => "Enter Warehouse  Name",
            'location.required' => "Enter Location ",
            'fullAddress.required' => "Enter Full Address",
        ]);



        WarehouseInformation::insert([
            'warehouseName' => $request->warehouseName,
            'location' => $request->location,
            'fullAddress' => $request->fullAddress,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);

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
        $data = WarehouseInformation::where('id',$id)->first();
        return ['data'=>$data];
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
            'warehouseName' => 'required',
            'location' => 'required',
            'fullAddress' => 'required',
        ],
        [
            'warehouseName.required' => "Enter Warehouse  Name",
            'location.required' => "Enter Location ",
            'fullAddress.required' => "Enter Full Address",
        ]);



        WarehouseInformation::where('id',$id)->where('shopId',Auth::user()->shopId)->update([
            'warehouseName' => $request->warehouseName,
            'location' => $request->location,
            'fullAddress' => $request->fullAddress,
            'updateBy' => Auth::user()->id,
            'updated_at' => Carbon::now(),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        WarehouseInformation::where('id',$id)->delete();
    }
}