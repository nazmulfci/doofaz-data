<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use App\ChartOfAccount;
use App\ChartOfAccountRegister;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class chartOfAccountRegisterController extends Controller
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
        $chartOfAccounts = chartOfAccountRegister::
        whereIn('shopId',[0,Auth::user()->shopId])
        ->orderBy('headCode','ASC')->get();

        $chartOfAccountList = chartOfAccountRegister::
        whereOr('shopId',[0,Auth::user()->shopId])
        ->orderBy('id','DESC')->get();
        return [
            'chartOfAccounts' => $chartOfAccounts,
            'chartOfAccountList' => $chartOfAccountList,
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
