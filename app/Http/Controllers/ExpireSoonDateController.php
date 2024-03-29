<?php

namespace App\Http\Controllers;

use App\ProductExpireDateSoon;
use Illuminate\Http\Request;
use Auth;
class ExpireSoonDateController extends Controller
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
        $exp=ProductExpireDateSoon::where('shopId',Auth::user()->shopId)->orderby('id','desc')->first();
        return ['exp'=>$exp];

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
        ProductExpireDateSoon::insert([
            'soonDate'=>$request->input('soonDate'),
            'shopId'=>Auth::user()->shopId,
            'shopTypeId'=>Auth::user()->shopTypeId,
            'createBy'=>Auth::user()->id,
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
        ProductExpireDateSoon::where('id',$id)->update(
            [ 'soonDate'=>$request->input('soonDate'),
            'shopId'=>Auth::user()->shopId,
            'shopTypeId'=>Auth::user()->shopTypeId,
            'createBy'=>Auth::user()->id,]
        );
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
