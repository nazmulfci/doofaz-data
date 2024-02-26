<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\ShopCustomerTypeEntry;
use App\AccountSetupPlacementList;
use App\ChartOfAccount;
use App\ChartOfAccountRegister;
use App\AccountSetup;
use Carbon\Carbon;

class ShopCustomerTypeEntryController extends Controller
{


    public function __construct()
    {
        $this->middleware('auth:,admin');
    }

    public function index()
    {
        $data = ShopCustomerTypeEntry::orderBy('shopCustomerTypeEntryId','desc')->get();
        
        return  ['data' => $data];
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
         $this->validate($request, [
            'shopCustomerName' => 'required',
            'shopCustomerStatus' => 'required',
          ],
          [
              'shopCustomerName.required' => "Enter  Shop customer Type Name",
              'shopCustomerStatus.required' => "Select customer Type Status",
          ]);
        if (ShopCustomerTypeEntry::where('shopCustomerName',$request->shopCustomerName)->exists()){
            return ['changeShopCustomerType'=> 'Change Customer Type Name'];
        }
        else {

            $noOfRow = ShopCustomerTypeEntry::count()+1;
            if(AccountSetup::where('placementType','7')->where('headName','19')->exists()){
                $code= AccountSetup::where('placementType','7')->where('headName','19')->first()->headCode;
            }else{
                return ['AccountCodreError' => 1];
            }
            
            $lavel= ChartOfAccount::where('headCode',$code)->first()->headLavel+1;
            $dr_cr= ChartOfAccount::where('headCode',$code)->first()->dr_cr;
            $headGroupId= ChartOfAccount::where('headCode',$code)->first()->headGroupId;
            $headGroupType= ChartOfAccount::where('headCode',$code)->first()->headGroupType;
            $accCode = $code.str_pad($noOfRow, 2, '0', STR_PAD_LEFT);


            ShopCustomerTypeEntry::insert([
                'shopCustomerName' => $request->shopCustomerName,
                'shopCustomerStatus' => $request->shopCustomerStatus,
                'accountCode' => $accCode,
                'createBy' => Auth::user()->id,
                'created_at' => Carbon::now(),
            ]);


            ChartOfAccountRegister::insert([
                'headGroupType' => $headGroupType,
                'headGroupId' => $headGroupId,
                'dr_cr' => $dr_cr,
                'pre_code' => $code,
                'headCode' => $accCode,
                'headName' => $request->shopCustomerTypeAccountsName,
                'headLavel' => $lavel,
                'lastCode' => 0,
                'status' => 1,
                'position' => 0,
                'autoCreate' => 0,
                'createBy' => Auth::user()->id,
                'created_at' => Carbon::now(),
            ]);
        }
    }


    public function show($id)
    {
        $data=ShopCustomerTypeEntry::where('shopCustomerTypeEntryId',$id)->first()->shopCustomerStatus;
        if($data == 1){
            ShopCustomerTypeEntry::where('shopCustomerTypeEntryId',$id)->update([
                'shopCustomerStatus' => 0,
                'updateBy' => Auth::user()->id,
            ]);
        }
        else{
            ShopCustomerTypeEntry::where('shopCustomerTypeEntryId',$id)->update([
                'shopCustomerStatus' => 1,
                'updateBy' => Auth::user()->id,
            ]);
        }
    }


    public function edit($id)
    {
        $data = ShopCustomerTypeEntry::where('shopCustomerTypeEntryId',$id)->first();
        return ['data'=>$data];
    }


    public function update(Request $request, $id)
    {
          $this->validate($request, [
             'shopCustomerName' => 'required',
             'shopCustomerStatus' => 'required',
           ],
           [
               'shopCustomerName.required' => "Enter  Shop customer Type Name",
               'shopCustomerStatus.required' => "Select customer Type Status",
           ]);

           if (ShopCustomerTypeEntry::where('shopCustomerName',$request->shopCustomerName)->where('shopCustomerTypeEntryId','!=',$id)->exists()){
               return ['changeCustomerType'=> 'Please Change Shop Customer Type'];
           }
           else {
               ShopCustomerTypeEntry::where('shopCustomerTypeEntryId',$id)->update([
                 'shopCustomerName' => $request->shopCustomerName,
                 'shopCustomerStatus' => $request->shopCustomerStatus,
                 'updateBy' => Auth::user()->id,
               ]);
           }



    }


    public function destroy($id)
    {
        $data = ShopCustomerTypeEntry::where('shopCustomerTypeEntryId',$id);
        $data->delete();
    }
}
