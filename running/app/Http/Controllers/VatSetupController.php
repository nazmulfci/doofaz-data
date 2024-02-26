<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\VatSetup;
use Auth;
class VatSetupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth:,admin');
    }

    public function index()
    {
        $dt=VatSetup::where('shopId',Auth::user()->shopId)->orderby('id','desc')->first();
              if(!empty($dt)){
                $data=VatSetup::where('shopId',Auth::user()->shopId)->orderby('id','desc')->first();
              }
              else{
                  $data=0;
              }
            
        return ['data'=>$data];
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
        VatSetup::insert([
            'vat'=>$request->input('vat'),
            'shopId'=>Auth::user()->shopId,
            'shopTypeId'=>Auth::user()->shopTypeId,
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
        $edit=VatSetup::where('id',$id)->first();
        return response()->json($edit);
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
        VatSetup::where('id',$id)->update([
            'vat'=>$request->input('vat'),
            'shopId'=>Auth::user()->shopId,
            'shopTypeId'=>Auth::user()->shopTypeId,
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
        //
    }
}
