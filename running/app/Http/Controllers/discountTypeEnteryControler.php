<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\DiscountTypeEntry;
use App\DiscountTypeByShop;
use Carbon\Carbon;

class discountTypeEnteryControler extends Controller
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
        
        $list = DiscountTypeEntry::get();
        
        return [
            'list' => $list,
        ];
    }
    public function getDiscountType()
    {
        $discountType = 1;
        if(DiscountTypeByShop::where('shopId',Auth::user()->shopId)->exists()){
        $discountType = DiscountTypeByShop::where('shopId',Auth::user()->shopId)->first()->discountTypeId;
        }
        return [
            'discountType' => $discountType,
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
            'discountTypeId' => 'required',
        ],
        [
           'discountTypeId.required' => 'Select Discount Type',
        ]);

        if(DiscountTypeByShop::where('shopId',Auth::user()->shopId)->exists()){
            DiscountTypeByShop::where('shopId',Auth::user()->shopId)->update([
                'discountTypeId' => $request->discountTypeId,
                'updateBy' => Auth::user()->id,
                'updated_at' => Carbon::now(),
            ]);
        }
        else{
            DiscountTypeByShop::insert([
                'discountTypeId' => $request->discountTypeId,
                'createBy' => Auth::user()->id,
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
        //
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
