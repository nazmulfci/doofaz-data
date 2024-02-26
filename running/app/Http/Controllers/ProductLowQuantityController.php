<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProductLowQuantity;
use Auth;
class ProductLowQuantityController extends Controller
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
        $quan=ProductLowQuantity::where('shopId',Auth::user()->shopId)->orderby('id','desc')->first();
        return ['quan'=>$quan];

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
        ProductLowQuantity::insert([
            'lowQuantity'=>$request->input('lowQuantity'),
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
        ProductLowQuantity::where('id',$id)->update(
            [ 'lowQuantity'=>$request->input('lowQuantity'),
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
