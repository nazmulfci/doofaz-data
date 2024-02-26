<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SimOperator;
use App\SmsApiInfo;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class SimOperatorController extends Controller
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
        $data = SimOperator::get();
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
        'operatorName' => 'required',
        'shortCode' => 'required',
        ],
        [
        'operatorName.required' => 'Enter OperatorName',
        'shortCode.required' => 'Enter ShortCode',
]);


        SimOperator::insertGetId([
        'operatorName' => $request->operatorName, 
        'shortCode' => $request->shortCode, 
        'logo' => $request->logo, 
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
        if(SmsApiInfo::where('oparetorId',$id)->exists()){
            return ['delete'=>0];
        }
        else{
            $id = SimOperator::where('id', $id)->delete();
            return ['delete'=>$id];
        }
    }
}
