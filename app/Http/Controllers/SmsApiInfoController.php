<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SmsApiInfo;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class SmsApiInfoController extends Controller
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
        $data = SmsApiInfo::get();
        return ['data' => $data];
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
        'oparetorId' => 'required',
        'smsTypeId' => 'required',
        'smsLinkUrl' => 'required',
        'userName' => 'required',
        'password' => 'required',
        'from' => 'required',
        ],
        [
        'oparetorId.required' => 'Enter Oparetor',
        'smsTypeId.required' => 'Enter SmsType',
        'smsLinkUrl.required' => 'Enter SmsLinkUrl',
        'userName.required' => 'Enter UserName',
        'password.required' => 'Enter Password',
        'from.required' => 'Enter From',
]);


        SmsApiInfo::insertGetId([
        'oparetorId' => $request->oparetorId, 
        'smsTypeId' => $request->smsTypeId, 
        'smsLinkUrl' => $request->smsLinkUrl, 
        'userName' => $request->userName, 
        'password' => $request->password, 
        'from' => $request->from, 
        'shopId' => 0,
        'createBy' => Auth::User()->id,
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
        $data = SmsApiInfo::where('id',$id)->first();
        return ['data' => $data];
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
            'oparetorId' => 'required',
            'smsTypeId' => 'required',
            'smsLinkUrl' => 'required',
            'userName' => 'required',
            'password' => 'required',
            'from' => 'required',
            ],
            [
            'oparetorId.required' => 'Enter Oparetor',
            'smsTypeId.required' => 'Enter SmsType',
            'smsLinkUrl.required' => 'Enter SmsLinkUrl',
            'userName.required' => 'Enter UserName',
            'password.required' => 'Enter Password',
            'from.required' => 'Enter From',
    ]);
    
    
            SmsApiInfo::where('id',$id)->update([
            'oparetorId' => $request->oparetorId, 
            'smsTypeId' => $request->smsTypeId, 
            'smsLinkUrl' => $request->smsLinkUrl, 
            'userName' => $request->userName, 
            'password' => $request->password, 
            'from' => $request->from, 
            'updateBy' => Auth::User()->id,
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
        SmsApiInfo::where('id', $id)->delete();
    }
}
