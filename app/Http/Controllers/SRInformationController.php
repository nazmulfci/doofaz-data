<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use App\SRInformation;
use App\SalesCustomerEntry;
use App\JobDepartmentEntry;
use App\ShopEmployeeEntry;
use App\StatementInformation;
use Auth;
use Carbon\Carbon;


class SRInformationController extends Controller
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

        $data = SRInformation::where('shopId',Auth::user()->shopId)->get();

        return [
            'data' => $data
        ];
    }

    public function addSREntryReport()
    {

        $datas = SRInformation::where('shopId',Auth::user()->shopId)->get();

        foreach($datas as $data){

            $info = SRInformation::where('id',$data->id)->where('shopId',Auth::user()->shopId)->first();
            $customerIds = SalesCustomerEntry::distinct()->where('srId',$data->id)->where('shopId',Auth::user()->shopId)->get('accountCode');
            
            $totalDue = 0;
            $totalCollection = 0;
            $thisMonthCollection = 0;

            foreach($customerIds as $customerId){

                if(StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$customerId->accountCode)->orderBy('id','DESC')->exists())
                {
                    $totalDue += StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$customerId->accountCode)->orderBy('id','DESC')->first()->balanceAmount;
                }


                // ===================================
                $today_cash_collection = StatementInformation::
                    where('shopId',Auth::user()->shopId)
                  ->where('type','2')
                  ->where('paymentType','1')
                  ->where('accountCode',$customerId->accountCode)->sum('creditAmount');
      
              $today_bank_collection = StatementInformation::
                    where('shopId',Auth::user()->shopId)
                    ->where('bankTypeEntryId','1')
                    ->where('type','2')
                  ->where('paymentType','2')
                  ->where('accountCode',$customerId->accountCode)->sum('creditAmount');
            
              $today_mobile_bank_collection = StatementInformation::
                    where('shopId',Auth::user()->shopId)
                    ->where('bankTypeEntryId','2')
                    ->where('type','2')
                  ->where('paymentType','2')
                  ->where('accountCode',$customerId->accountCode)->sum('creditAmount');

              $totalCollection = $today_mobile_bank_collection+$today_bank_collection+$today_cash_collection;
                // ===================================


                // ===================================
                $thisMonth = date('Y-m');
                $today_cash_collection1 = StatementInformation::
                    where('shopId',Auth::user()->shopId)
                  ->where('type','2')
                  ->where('paymentType','1')
                  ->where('created_at','LIKE',"$thisMonth%")
                  ->where('accountCode',$customerId->accountCode)->sum('creditAmount');
      
              $today_bank_collection1 = StatementInformation::
                    where('shopId',Auth::user()->shopId)
                    ->where('bankTypeEntryId','1')
                    ->where('type','2')
                  ->where('paymentType','2')
                  ->where('created_at','LIKE',"$thisMonth%")
                  ->where('accountCode',$customerId->accountCode)->sum('creditAmount');
            
              $today_mobile_bank_collection1 = StatementInformation::
                    where('shopId',Auth::user()->shopId)
                    ->where('bankTypeEntryId','2')
                    ->where('type','2')
                  ->where('paymentType','2')
                  ->where('created_at','LIKE',"$thisMonth%")
                  ->where('accountCode',$customerId->accountCode)->sum('creditAmount');

              $thisMonthCollection = $today_mobile_bank_collection1+$today_bank_collection1+$today_cash_collection1;
                // ===================================

            }
            
            $msg2[] = array(
                "id" => $data->id,
                "name" => $info->name,
                "mobileNo" => $info->mobileNo,
                "area" => $info->area,
                "customer" => SalesCustomerEntry::where('srId',$data->id)->where('shopId',Auth::user()->shopId)->count(),
                "customerDue" => $totalDue,
                "totalCollection" => $totalCollection,
                "thisMonthCollection" => $thisMonthCollection,
                );
        
            }

        return [ 'data' => $msg2 ];
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
            'name' => 'required',
            'mobileNo' => 'required',
            'address' => 'required',
        ]);


        $data = SRInformation::insert([
            'name' => $request->name,
            'mobileNo' => $request->mobileNo,
            'phoneNo' => $request->phoneNo,
            'email' => $request->email,
            'address' => $request->address,
            'area' => $request->area,
            'status' => $request->status,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);

        return ['data' => $data];
    }

    public function srTypeList(){
        $list = JobDepartmentEntry::whereIn('jobDepartmentEntryId',[6,7])->get();

        return ['srTypeList' => $list];
    }
    public function selectSrDsrList($id){
        $list = ShopEmployeeEntry::where('jobDepartmentId',$id)->get();

        return ['srDsrList' => $list];
    }

    public function getSrDsrList()
    {
        $srList = ShopEmployeeEntry::where('jobDepartmentId',6)->get();
        $dsrList = ShopEmployeeEntry::where('jobDepartmentId',7)->get();

        return [
            'srList' => $srList,
            'dsrList' => $dsrList,
        ];
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
        $data = SRInformation::where('id',$id)->where('shopId',Auth::user()->shopId)->first();

        return [
            'data' => $data
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
        SRInformation::where('id',$id)->update([
            'name' => $request->name,
            'mobileNo' => $request->mobileNo,
            'phoneNo' => $request->phoneNo,
            'email' => $request->email,
            'address' => $request->address,
            'area' => $request->area,
            'status' => $request->status,
            'shopId' => Auth::user()->shopId,
            'updateBy' => Auth::user()->id,
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
        SRInformation::where('id',$id)->delete();
    }
}
