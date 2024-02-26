<?php

namespace App\Http\Controllers;

use App\BankCheckDetails;
use App\ChequePosting;
use App\ChequeStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChequePostingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $get=ChequeStatus::where('id','!=',1)->get();
        return ['get'=>$get];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $items= BankCheckDetails::with('banks','account','statuss','posting')->whereHas('posting', function($q) {
            $q->whereColumn('chequeNo', '=', 'bank_check_details.checkNo');
        })
        ->where('status',1)->where('shopId',Auth::user()->shopId)->limit(100);
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
        ->addColumn('deliveryDate', function (BankCheckDetails $get) {
          if( $get->posting)     {    
         return $get->posting->cashDate;
          }
          else{
             return 0;
          }
     
   })
        ->addColumn('issueDate', function (BankCheckDetails $get) {
          if( $get->posting)     {    
         return $get->posting->issueDate;
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
            'chequeNo' => 'required',
            'chequeType' => 'required',
            'amount' => 'required', 
            'cashDate' => 'required', 
            'issueDate' => 'required', 
        ],
        [
        //   'headCode.required' => 'Enter Head Code',
        ]);


        ChequePosting::insert([
            'bank'=>$request->bankEntryId,
            'bankAccountId'=>$request->bankAccountId,
            'chequeNo'=>$request->chequeNo,
            'chequeType'=>$request->chequeType,
            'receiver'=>$request->receiver,
            'amount'=>$request->amount,
            'cashDate'=>$request->cashDate,
            'issueDate'=>$request->issueDate,
            'accountName'=>$request->accountName,
            'accountNumber'=>$request->accountNumber,
            'status'=>1,
            'shopId'=>Auth::user()->shopId,
        ]);
        BankCheckDetails::where('bank',$request->bankEntryId)->where('bankAccountId',$request->bankAccountId)->where('checkNo',$request->chequeNo)->update([
           'status' =>1
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
        $st= BankCheckDetails::where('id',$id)->first();
        $view=ChequePosting::where('bank',$st->bank)->where('bankAccountId',$st->bankAccountId)->where('chequeNo',$st->checkNo )->where('shopId',Auth::user()->shopId)->first();
        return ['view'=>$view];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $st= BankCheckDetails::where('id',$id)->first();
        if($st->status==0){
            return ['posting'=>'posting'];
        }
        else{
            if($st->status==4||$st->status==5){
            return ['true'=>'true'];
        }
        else{
            return ['false']; 
        }
    }
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
        BankCheckDetails::where('id',$request->statusId)->update([
            'status'=>$request->status,
            'note'=>$request->note
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
        //
    }
}
