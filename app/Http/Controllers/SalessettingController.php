<?php

namespace App\Http\Controllers;

use App\SalesSetting;
use App\Models\Admin;
use Illuminate\Http\Request;
use Auth;
class SalessettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $inf=SalesSetting::where('shopId',Auth::user()->shopId)->first();
       if(!empty($inf)){
        $info=SalesSetting::where('shopId',Auth::user()->shopId)->first();
       }
       else{
                $info=0;
       }
       return ['info'=>$info];
    }


    public function changeLanguage($id,$shopId){
        Admin::where('shopId',$shopId)->update([
            'language' => $id,
        ]);
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
        //
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
        //
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
                if(SalesSetting::where('shopId',Auth::user()->shopId)->exists()){
                    SalesSetting::where('shopId',Auth::user()->shopId)->update([
                        'status'=>$id,   
                    ]);
                      
                }
                else{
                    SalesSetting::insert([
                     'shopId'=>Auth::user()->shopId,
                     'status'=>$id,
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
