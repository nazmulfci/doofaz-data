<?php

namespace App\Http\Controllers;

use App\BankCheck;
use App\BankCheckDetails;
use App\BankEntry;
use App\ChequeType;
use App\ShopAddBankEntry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use DataTables;
class BankCheckController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
        $account=ShopAddBankEntry::where('shopId',Auth::user()->shopId)->get(); 
        $data= DB::table('bank_checks')
        ->select('bank_checks.*','bank_entries.bankName')
        ->join('bank_entries','bank_checks.bank','=','bank_entries.bankEntryId')    
        ->where('shopId',Auth::user()->shopId)->orderby('id','desc')->get();
        return ['data'=>$data,'account'=>$account];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $account=ShopAddBankEntry::where('shopId',Auth::user()->shopId)->get();   
        $data=BankCheck::with('bk')->select('bank')->groupby('bank')->where('shopId',Auth::user()->shopId)->orderby('id','desc')->get();
        $bank=BankEntry::get();
        return ['data'=>$data,'bank'=>$bank,'account'=>$account];
    }
    public function chequeType()
    {
        
        $type=ChequeType::get();
        return ['type'=>$type];
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
            'bankEntryId' => 'required',
            'bankAccountId' => 'required', 
            'firstPage' => 'required', 
            'lastPage' => 'required', 
        ],
        [
        //   'headCode.required' => 'Enter Head Code',
        ]);

        
      if(BankCheck::where('bankAccountId',$request->bankAccountId)->where('firstPage',$request->firstPage)->where('shopId',Auth::user()->shopId)->exists())  {
          return ['exist'=>'exist'];
      }
      else{
      $id= BankCheck::insertGetId([
            'bank'=>$request->bankEntryId,
            'bankAccountId'=>$request->bankAccountId,
            'lastPage'=>$request->lastPage,
            'firstPage'=>$request->firstPage,
            'shopId'=>Auth::user()->shopId
        ]);

        $check=$request->lastPage-$request->firstPage;

        for($i=0; $i<=$check;$i++){
            $checkNo=$request->firstPage++;
        BankCheckDetails::insert([
          'bankCheckId'=>$id,
          'bank'=>$request->bankEntryId,
          'bankAccountId'=>$request->bankAccountId,
          'checkNo'=>$checkNo,
           'shopId'=>Auth::user()->shopId
        ]);
    }
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
       $account= BankCheckDetails::select('bankAccountId')->groupby('bankAccountId')->where('shopId',Auth::user()->shopId)->where('bank',$id)->get();
       return ['account'=>$account];
    }
    public function chequeInfo($bank,$account)
    {
       $items= BankCheckDetails::with('banks','account','statuss')->where('shopId',Auth::user()->shopId)->where('bank',$bank)->where('bankAccountId',$account)->limit(100);
       return datatables($items)
       ->addColumn('account', function (BankCheckDetails $get) {
         if( $get->account)     {    
        return $get->account->bankAccountName;
         }
         else{
            return 0;
         }
    
  })
       ->addColumn('accountNumber', function (BankCheckDetails $get) {
         if( $get->account)     {    
        return $get->account->bankAccountNumber;
         }
         else{
            return 0;
         }
    
  })
       ->addColumn('banks', function (BankCheckDetails $get) {
         if( $get->banks)     {    
        return $get->banks->bankName	;
         }
         else{
            return 0;
         }
    
  })
       ->addColumn('statuss', function (BankCheckDetails $get) {
        if( $get->status==1)     {           
      
            return '
            <span class="badge badge-warning"> ' . $get->statuss->chequeType . '</span>';
        }
        if( $get->status==2)     {           
      
            return '
            <span class="badge badge-danger"> ' . $get->statuss->chequeType . '</span>';
        }
        if( $get->status==3)     {           
      
            return '
            <span class="badge badge-dark"> ' . $get->statuss->chequeType . '</span>';
        }
        if( $get->status==4)     {           
      
            return '
            <span class="badge badge-info"> ' . $get->statuss->chequeType . '</span>';
        }
        if( $get->status==5)     {           
      
            return '
            <span class="badge badge-success"> ' . $get->statuss->chequeType . '</span>';
        }
        if( $get->status==0){
           return  '<span class="badge badge-secondary">' . $get->statuss->chequeType .'</span>';
        }
    
  })
       
    ->toJson();
     
    }
    public function chequeInfoGet($bank,$account)
    {
       $info= BankCheckDetails::where('shopId',Auth::user()->shopId)->where('bank',$bank)->where('bankAccountId',$account)->where('status',0)->get();
       return ['info'=>$info];
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
