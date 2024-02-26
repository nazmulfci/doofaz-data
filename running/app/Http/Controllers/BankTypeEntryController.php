<?php

namespace App\Http\Controllers;

use App\BankTypeEntry;
use App\ChartOfAccount;
use App\AccountSetup;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BankTypeEntryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $show = BankTypeEntry::orderBy('bankTypeEntryId','desc')->paginate(20);
        return ['show'=>$show];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
          $show = BankTypeEntry::orderBy('bankTypeEntryId','desc')->get();
          return ['show'=>$show];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'bankTypeEntryName' => 'required',
            'bankTypeEntryStatus' => 'required',
        ],
        [
          'bankTypeEntryName.required' => 'Enter Your bank Type Name',
          'bankTypeEntryStatus.required' => 'Select Bank Type Status',
        ]);



        if (BankTypeEntry::where('bankTypeEntryName',$request->bankTypeEntryName)->exists()){
            return ['changebankTypeEntryName'=>'Change Your  changebankTypeEntryName'];
        }
        else{

            // ============================================
            // =============== Chart Of Accounts ==========
            // ============================================

            $noOfRow = BankTypeEntry::count()+1;
            $code = AccountSetup::where('placementType','8')->where('headName','25')->first()->headCode;
            $headNamePre= ChartOfAccount::where('headCode',$code)->first()->headName;
                        
                        $temp = explode(' ', $headNamePre);
                        $headShortName = '';
                        foreach($temp as $t){
                            $headShortName .= $t[0];
                        }
                        $headShortName = strtoupper($headShortName);

            // $headName = $headShortName.'-'.$request->bankTypeEntryName;
            $headName = $request->bankTypeEntryName;
            $lavel= ChartOfAccount::where('headCode',$code)->first()->headLavel+1;
            $dr_cr= ChartOfAccount::where('headCode',$code)->first()->dr_cr;
            $headGroupId= ChartOfAccount::where('headCode',$code)->first()->headGroupId;
            $headGroupType= ChartOfAccount::where('headCode',$code)->first()->headGroupType+1;
            $accCode = $code.str_pad($noOfRow,2, '0', STR_PAD_LEFT);
 

            ChartOfAccount::insert([
                'headGroupType' => $headGroupType,
                'headGroupId' => $headGroupId,
                'dr_cr' => $dr_cr,
                'pre_code' => $code,
                'headCode' => $accCode,
                'headName' => $headName,
                'headLavel' => $lavel,
                'lastCode' => 0,
                'status' => 1,
                'position' => 0,
                'autoCreate' => 0,
                'createBy' => Auth::user()->id,
                'created_at' => Carbon::now(),
            ]);

            // ============================================
            // =============== // Chart Of Accounts ==========
            // ============================================

            $data = new BankTypeEntry();
            $data->accountCode = $accCode;
            $data->bankTypeEntryName = $request->bankTypeEntryName;
            $data->bankTypeEntryStatus = $request->bankTypeEntryStatus;
            $data->createBy = Auth::user()->id;
            $data->save();
            $data->created_at = Carbon::now();

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
        $data=BankTypeEntry::where('bankTypeEntryId',$id)->first()->bankTypeEntryStatus;

        if($data == 1){
            BankTypeEntry::where('bankTypeEntryId',$id)->update([
                'bankTypeEntryStatus' => 0,
                'updateBy' => Auth::user()->id,
            ]);
        }
        else{
            BankTypeEntry::where('bankTypeEntryId',$id)->update([
                'bankTypeEntryStatus' => 1,
                'updateBy' => Auth::user()->id,
            ]);
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
        $editData = BankTypeEntry::where('bankTypeEntryId',$id)->first();
        return ['editData'=>$editData];
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
        $request->validate([
            'bankTypeEntryName' => 'required',
            'bankTypeEntryStatus' => 'required',
        ],
        [
          'bankTypeEntryName.required' => 'Enter Your bank Type Name',
          'bankTypeEntryStatus.required' => 'Select Bank Type Status',
        ]);

        if (BankTypeEntry::where('bankTypeEntryName',$request->bankTypeEntryName)->where('bankTypeEntryId','!=',$id)->exists()){
            return ['changeBankName' => 'Change Your Bank Type Name'];
        }
        else {
            BankTypeEntry::where('bankTypeEntryId',$id)->update([
              'bankTypeEntryName' => $request->bankTypeEntryName,
              'bankTypeEntryStatus'=> $request->bankTypeEntryStatus,
              'updateBy'=> Auth::user()->id,
            ]);
            return ['success' => 'ok'];
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
        $dataDelete = BankTypeEntry::where('bankTypeEntryId',$id);
        $dataDelete->delete();
    }
}
