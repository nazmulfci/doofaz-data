<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\AddProductSupplierEntry;
use App\ShopInformation;
use App\AccountSetup;
use App\ChartOfAccount;
use App\ChartOfAccountRegister;
use Carbon\Carbon;
class ShopAddProductSupplierController extends Controller
{


    

    public function __construct()
    {
        $this->middleware('auth:,admin');
    }




    public function index()
    {
        if(Auth::guard('web')->check()){

            $productSupplierGetData = AddProductSupplierEntry::with('product')->latest()->orderBy('productSupplierId','DESC')->paginate(20);
            return ['productSupplierGetData'=> $productSupplierGetData];

        }
        else {

            $productSupplierGetData = AddProductSupplierEntry::with('product')->where('shopId',Auth::User()->shopId)->orderBy('productSupplierId','DESC')->paginate(20);
            return ['productSupplierGetData'=> $productSupplierGetData];

        }
    }

    public function getCheckOpenningSupplier(){

        if(AddProductSupplierEntry::where('shopId',Auth::user()->shopId)->where('openingStatus','1')->exists()){
        $status = 0;
        }
        else{
        $status = 1;
        }

        return ['status' => $status];
    }


    public function create()
    {
        if(Auth::guard('admin')->check()){
        $shopTypeId = Auth::user()->shopTypeId;
        $countCode = 0;
        if(AddProductSupplierEntry::where('shopId',Auth::User()->shopId)->orderBy('productSupplierId','DESC')->exists()){
        $countCode = AddProductSupplierEntry::where('shopId',Auth::User()->shopId)->orderBy('productSupplierId','DESC')->first()->productSupplierCode;
        }
        $autoIncrementCode  = $countCode+1;
        return ['autoIncrementCode' => $autoIncrementCode];
      }
      
      
    }


    public function store(Request $request)
    {
        $this->validate($request, [
            'productSupplierName' => 'required',
     
            'productSupplierCode' => 'required',
            'productSupplierPhone' => 'required|numeric',
            'productSupplierAddress' => 'required',
        ]);


            // ============================================
            // =============== Chart Of Accounts ==========
            // ============================================


            ////////          sirial

            if(AddProductSupplierEntry::where('shopId',Auth::user()->shopId)
            ->orderBy('productSupplierId','DESC')
            ->exists()){

            $noOfRow = AddProductSupplierEntry::where('shopId',Auth::user()->shopId)
            ->orderBy('productSupplierId','DESC')
            ->first()->accountCodeSirial+1;

            }else{
                $noOfRow = 1;
            }

            ////////          /sirial 
            
            
            ////////          Previous Account Code   
            
             
                $code = AccountSetup::where('placementType','5')->where('headName','17')->first()->headCode;
             
             
            ////////          /Previous Account Code 

            
            
            $headShortName = strtoupper($request->productSupplierName);
            $headShortName = $headShortName.' ('.$request->productSupplierCode.')';
                        

            $headName = ''.$headShortName;
            $lavel= ChartOfAccount::where('headCode',$code)->first()->headLavel+1;
            $dr_cr= ChartOfAccount::where('headCode',$code)->first()->dr_cr;
            $headGroupId= ChartOfAccount::where('headCode',$code)->first()->headGroupId;
            $headGroupType= ChartOfAccount::where('headCode',$code)->first()->headGroupType+1;
            $accCode = $code.str_pad($noOfRow,2, '0', STR_PAD_LEFT);
 
 
            ChartOfAccountRegister::insert([
                'shopId' => Auth::user()->shopId,
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

  

        $lastInsertId = AddProductSupplierEntry::insert([
            'accountCodeSirial' => $noOfRow,
            'accountCode' => $accCode,
            'productSupplierName' => $request->productSupplierName,
            'productSupplierCode' => $request->productSupplierCode,
            'productSupplierPhone' => $request->productSupplierPhone,
            'productSupplierHotLine' => $request->productSupplierHotLine,
            'productSupplierMail' => $request->productSupplierMail,
            'productSupplierFb' => $request->productSupplierFb,
            'productSupplierWeb' => $request->productSupplierWeb,
            'productSupplierImo' => $request->productSupplierImo,
            'productSupplierAddress' => $request->productSupplierAddress,
            'openingStatus' => $request->openingStatus,
            'shopId' => Auth::user()->shopId,
            'shopTypeId' => Auth::user()->shopTypeId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);
        

    }


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        $data = AddProductSupplierEntry::where('productSupplierId',$id)->first();
        return ['data'=>$data];
    }


    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'productSupplierName' => 'required',
        
            'productSupplierCode' => 'required',
            'productSupplierPhone' => 'required',
            'productSupplierAddress' => 'required',
        ]);

        AddProductSupplierEntry::where('shopId', Auth::user()->shopId)->where('productSupplierId', $id)->update([
            'productSupplierName' => $request->productSupplierName,
            'productSupplierCode' => $request->productSupplierCode,
            'productSupplierMail' => $request->productSupplierMail,
            'productSupplierHotLine' => $request->productSupplierHotLine,
            'productSupplierFb' => $request->productSupplierFb,
            'productSupplierWeb' => $request->productSupplierWeb,
            'productSupplierPhone' => $request->productSupplierPhone,
            'productSupplierImo' => $request->productSupplierImo,
            'productSupplierAddress' => $request->productSupplierAddress,
            'updateBy' => Auth::user()->id,
        ]);
        if (AddProductSupplierEntry::where('shopId', Auth::user()->shopId)->
        where('productSupplierMail',$request->productSupplierMail)->
        where('productSupplierId','!=',$id)->exists()) {
            return ['sameMail' => "Change Your Mail"];
        }
        elseif (AddProductSupplierEntry::where('shopId', Auth::user()->shopId)->
        where('productSupplierPhone',$request->productSupplierPhone)->where('productSupplierId','!=',$id)->exists()) {
              return ['samePhone' => "Change Your Phone Number"];
        }
        else {
          AddProductSupplierEntry::where('shopId', Auth::user()->shopId)->
          where('productSupplierId', $id)->update([
              'productSupplierMail' => $request->productSupplierMail,
              'productSupplierPhone' => $request->productSupplierPhone,
              'updateBy' => Auth::user()->id,
          ]);
        }

    }

    public function destroy($id)
    {
        $info = AddProductSupplierEntry::where('shopId', Auth::user()->shopId)->where('productSupplierId',$id)->first();
        $accCode = $info->accountCode;
        if(VoucherInformationReport::where('shopId', Auth::user()->shopId)->where('accountsHeadCode',$accCode)->exists()){
            return ['delete'=>0];
        }else{
        ChartOfAccountRegister::where('shopId', Auth::user()->shopId)->where('headCode',$accCode)->delete();
        AddProductSupplierEntry::where('shopId', Auth::user()->shopId)->where('productSupplierId',$id)->delete();
        return ['delete'=>1];
        }
    }
}
