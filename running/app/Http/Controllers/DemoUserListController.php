<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DemoUserList;
use App\DemoUserEmailMobileHistory;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class DemoUserListController extends Controller
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
        $list = DemoUserList::orderBy('id','DESC')->get();
        return ['employeeList' => $list];
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
        
        $this->validate($request, 
        [
            'productSupplierName' => 'required',
            'productSupplierPhone' => 'required|unique:demo_user_lists,mobileNo',
            'productSupplierMail' => 'required|unique:demo_user_lists,email',
            'status' => 'required'
        ],
        [
            'productSupplierName' => 'Enter Name',
            'productSupplierPhone' => 'Enter Mobile Number',
            'productSupplierMail' => 'Enter Email',
            'status' => 'Please select status'
        ]
    );

  

        $lastId = DemoUserList::insertGetId([
            'name' => $request->productSupplierName,
            'mobileNo' => $request->productSupplierPhone,
            'email' => $request->productSupplierMail,
            'status' => $request->status,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);

        DemoUserEmailMobileHistory::insert([
            'employeeId' => $lastId,
            'mobile' => $request->productSupplierPhone,
            'email' => $request->productSupplierMail,
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
        $list = DemoUserList::where('id',$id)->first();
        $history = DemoUserEmailMobileHistory::where('employeeId',$id)->orderBy('id','DESC')->get();
        return [
            'data' => $list,
            'history' => $history,
        ];
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
        $this->validate($request, 
        [
            'name' => 'required',
            'mobileNo' => 'required',
            'email' => 'required',
            'status' => 'required'
        ],
        [
            'name' => 'Enter Name',
            'mobileNo' => 'Enter Mobile Number',
            'email' => 'Enter Email',
            'status' => 'Please select status'
        ]
    );

  

        DemoUserList::where('id',$id)->update([
            'name' => $request->name,
            'mobileNo' => $request->mobileNo,
            'email' => $request->email,
            'status' => $request->status,
            'updateBy' => Auth::user()->id,
            'updated_at' => Carbon::now(),
        ]);

        DemoUserEmailMobileHistory::insert([
            'employeeId' => $id,
            'mobile' => $request->mobileNo,
            'email' => $request->email,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
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
        DemoUserList::where('id',$id)->delete();
    }
}
