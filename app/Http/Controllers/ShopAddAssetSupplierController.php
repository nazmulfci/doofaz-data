<?php

namespace App\Http\Controllers;

use App\ShopAddAssetSupplierEntry;
use App\ShopInformation;
use App\ChartOfAccountRegister;
use App\ChartOfAccount;
use App\AccountSetup;
use App\ShopAssetEntry;
use App\StatementInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ShopAddAssetSupplierController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:,admin');
    }



    public function index()
    {
       if (Auth::guard('admin')->check()) {
           $shopTypeId = Auth::user()->shopTypeId;
           $assetSupplierGetData = ShopAddAssetSupplierEntry::with('asset')->where('shopTypeId',$shopTypeId)->where('shopId',Auth::User()->shopId)->paginate(20);
           return ['assetSupplierGetData'=> $assetSupplierGetData];
       }
       else {
           $assetSupplierGetData = ShopAddAssetSupplierEntry::with('asset')->paginate(20);
           return ['assetSupplierGetData'=> $assetSupplierGetData];
       }
    }


    public function create()
    {
      if (isset(Auth::user()->shopId)) {
          $shopTypeId =Auth::user()->shopTypeId;
          $countCode = ShopAddAssetSupplierEntry::where('shopTypeId',$shopTypeId)->where('shopId',Auth::User()->shopId)->get()->count();
          $autoIncrementCode  = $countCode + 1;
          return ['autoIncrementCode' => $autoIncrementCode];
      }
    }

    public function assetSupplierList()
    {
        $get=ShopAddAssetSupplierEntry::where('shopId',Auth::user()->shopId)->get();
        $j=array();
        foreach ($get as $t) {
          $j[]=$t->accountCode;
        }
       
     
        $items = StatementInformation::with('assetSupplier')     
        ->whereIn('accountCode', $j)  
        ->select([
           
              'accountCode',   
        
           DB::raw('sum(debitAmount) AS totalAmount'),
     
           DB::raw('sum(creditAmount) AS currentDue'),
  
       ])->where('shopId',Auth::user()->shopId)->groupBy('accountCode')->limit(100);
       return datatables($items)
       ->addColumn('supplier', function (StatementInformation $get) {
         if( $get->assetSupplier)     {    
        return $get->assetSupplier->assetSupplierName ;
         }
         else{
            return 0;
         }
    
  })
       ->addColumn('phone', function (StatementInformation $get) {
         if( $get->assetSupplier)     {    
        return $get->assetSupplier->assetSupplierPhone ;
         }
         else{
            return 0;
         }
    
  })
       ->addColumn('supplierId', function (StatementInformation $get) {
        if( $get->assetSupplier)     {           
        return $get->assetSupplier->assetSupplierId;
        }
        else{
           return 0;
        }
    
  })
       ->addColumn('paidAmount', function ( $row) {
        
            $cal = $row->totalAmount ;
            return $cal;
  
         })
         ->addColumn('totalAmount', function ($row) {
        
           $totalAmount =$row->currentDue-round($row->currentDue-$row->totalAmount)+ round($row->currentDue-$row->totalAmount);
           return $totalAmount;
        
        })
        ->addColumn('currentDue', function ($row) {
              
           $currentDue =$row->currentDue-$row->totalAmount;
           return $currentDue;
        
        })
    ->toJson();
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'assetSupplierName' => 'required',
         //|unique:shop_add_asset_supplier_entries,assetSupplierPhone
            'assetSupplierPhone' => 'required|numeric',
            'assetSupplierAddress' => 'required',
        ]);



        // ============================================
            // =============== Chart Of Accounts ==========
            // ============================================


            ////////          sirial

            if(ShopAddAssetSupplierEntry::where('shopId',Auth::user()->shopId)
            ->exists()){

            $noOfRow = ShopAddAssetSupplierEntry::
            where('shopId',Auth::user()->shopId)
            ->orderBy('assetSupplierId','DESC')
            ->first()->accountCodeSirial;
            $noOfRow = $noOfRow+1;

            }else{
                $noOfRow = 1;
            }

            ////////          /sirial
            
            
            ////////          Previous Account Code   
            $code = AccountSetup::where('placementType','22')->where('headName','92')->first()->headCode;
            ////////          /Previous Account Code 


 
            
            // $headShortName = strtoupper($headShortName);
            $headShortName = $request->assetSupplierName.' ('.$request->assetSupplierCode.')';
                        

            // $headName = 'Loan-'.$headShortName.'-'.$request->personName;
            $headName = $headShortName;
            $lavel= ChartOfAccount::where('headCode',$code)->first()->headLavel+1;
            $dr_cr= ChartOfAccount::where('headCode',$code)->first()->dr_cr;
            $headGroupId= ChartOfAccount::where('headCode',$code)->first()->headGroupId;
            $headGroupType= ChartOfAccount::where('headCode',$code)->first()->headGroupType+1;
            $accCode = $code.str_pad($noOfRow,2, '0', STR_PAD_LEFT);
 

            ChartOfAccountRegister::insert([
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
                'shopId' => Auth::user()->shopId,
                'createBy' => Auth::user()->id,
                'created_at' => Carbon::now(),
            ]);

            // ============================================
            // =============== // Chart Of Accounts =======
            // ============================================



        $shopTypeId = Auth::user()->shopTypeId;

        $assetSupplierData = new ShopAddAssetSupplierEntry();
        $assetSupplierData->accountCodeSirial = $noOfRow;
        $assetSupplierData->accountHeadCode = $code;
        $assetSupplierData->accountCode = $accCode;
        $assetSupplierData->assetSupplierName = $request->assetSupplierName;
        $assetSupplierData->assetSupplierCode = $request->assetSupplierCode;
        $assetSupplierData->assetSupplierPhone = $request->assetSupplierPhone;
        $assetSupplierData->assetSupplierHotLine = $request->assetSupplierHotLine;
        $assetSupplierData->assetSupplierMail = $request->assetSupplierMail;
        $assetSupplierData->assetSupplierFb = $request->assetSupplierFb;
        $assetSupplierData->assetSupplierWeb = $request->assetSupplierWeb;
        $assetSupplierData->assetSupplierImo = $request->assetSupplierImo;
        $assetSupplierData->assetSupplierAddress = $request->assetSupplierAddress;
        $assetSupplierData->assetSupplierAddress = $request->assetSupplierAddress;
        $assetSupplierData->shopTypeId = $shopTypeId;
        $assetSupplierData->shopId = Auth::user()->shopId;
        
        if(Auth::guard('admin')->check()){
            $assetSupplierData->shopTypeId = $shopTypeId;
          }
         else{
            $assetSupplierData->shopTypeId = 0; 
         }
        $assetSupplierData->createBy = Auth::user()->id;
        $assetSupplierData->created_at = Carbon::now();
        $assetSupplierData->save();
    }


   public function show($id)
   {
       //
   }
   public function assetProductList($id)
   {
      $list=ShopAssetEntry::with('assetBrandName','assetCodeName')->where('assetSupplierId',$id)->where('shopId',Auth::user()->shopId)->where('status',1)->paginate(30);
      return ['list'=>$list];

   }


    public function edit($id)
    {
        $data = ShopAddAssetSupplierEntry::where('assetSupplierId',$id)->first();
        return ['data'=>$data];
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'assetSupplierName' => 'required',
            'assetSupplierMail' => 'required',
            'assetSupplierPhone' => 'required',
            'assetSupplierAddress' => 'required',
        ]);

        ShopAddAssetSupplierEntry::
        where('assetSupplierId', $id)->
        where('shopId', Auth::user()->shopId)->
        update([
            'assetSupplierName' => $request->assetSupplierName,
            'assetSupplierCode' => $request->assetSupplierCode,
            'assetSupplierHotLine' => $request->assetSupplierHotLine,
            'assetSupplierFb' => $request->assetSupplierFb,
            'assetSupplierWeb' => $request->assetSupplierWeb,
            'assetSupplierImo' => $request->assetSupplierImo,
            'assetSupplierAddress' => $request->assetSupplierAddress,
            'updateBy' => Auth::user()->id,
        ]);

        if (ShopAddAssetSupplierEntry::
            where('shopId',Auth::user()->shopId)->
            where('assetSupplierPhone',$request->assetSupplierPhone)->
            where('assetSupplierId','!=',$id)->exists()) {
           return ['samePhone' => "Change Your Phone Number"];
        }
        elseif (ShopAddAssetSupplierEntry::
            where('assetSupplierMail',Auth::user()->shopId)->
            where('assetSupplierMail',$request->assetSupplierMail)->
            where('assetSupplierId','!=',$id)->exists()) {
           return ['sameMail' => "Change Your Mail"];
        }
        else {
          ShopAddAssetSupplierEntry::
          where('shopId', Auth::user()->shopId)->
          where('assetSupplierId', $id)->
          update([
              'assetSupplierPhone' => $request->assetSupplierPhone,
              'assetSupplierMail' => $request->assetSupplierMail,
              'updateBy' => Auth::user()->id,
          ]);
        }

    }

    public function destroy($id)
    {
        $data=ShopAddAssetSupplierEntry::
        where('shopId',Auth::user()->shopId)->
        where('assetSupplierId',$id)->
        delete();
    }

}
