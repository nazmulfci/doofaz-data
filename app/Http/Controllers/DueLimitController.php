<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\DueLimitSetup;
use App\SalesCustomerEntry;
use App\StatementInformation;

class DueLimitController extends Controller
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
        $data=DueLimitSetup::with('customerType','customer')->where('shopId',Auth::user()->shopId)->orderby('id','desc')->paginate(30);
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
        $implodeSalesCustomerId = implode(',', array_column($request->salesCustomerEntryId,$request->id));
        $salesCustomerId = explode(',',$implodeSalesCustomerId)[0];
        if(DueLimitSetup::where('shopId',Auth::user()->shopId)->where('customerId',$salesCustomerId)->exists()){

            return ['status'=> 0];
        }else{
        DueLimitSetup::insert([
            'customerTypeId'=>$request->input('customerTypeId'),
            'customerId'=>$salesCustomerId ,
            'limitDueAmmount'=>$request->input('dueLimitAmmount') ,
            'shopId'=>Auth::user()->shopId,
            'shopTypeId'=>Auth::user()->shopTypeId,

        ]);
        return ['status'=> 1];
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
        $data=[];
       $dueLimit = 1234567890;
        if(DueLimitSetup::where('customerId',$id)->where('shopId',Auth::user()->shopId)->exists()){
       $data=DueLimitSetup::where('customerId',$id)->where('shopId',Auth::user()->shopId)->first();
       $dueLimit = $data->limitDueAmmount;
        }
       $info=SalesCustomerEntry::where('salesCustomerEntryId',$id)->where('shopId',Auth::user()->shopId)->first();
       if(!empty($info)){
       $get=StatementInformation::where('accountCode',$info->accountCode)->where('shopId',Auth::user()->shopId)->orderby('id','desc')->first();
       return ['data'=>$data,'get'=>$get, 'limitDueAmount' => $dueLimit];
       }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data=DueLimitSetup::with('customerType','customer')->where('shopId',Auth::user()->shopId)->where('id',$id)->first();
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
        DueLimitSetup::where('id',$id)->update([
           
            'limitDueAmmount'=>$request->input('dueLimitAmmount') ,

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
        DueLimitSetup::where('id',$id)->delete();
    }
}
