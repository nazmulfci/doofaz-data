<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ChartOfAccount;
use App\AccountGroup;
use App\chartOfAccountGroupType;
use App\ChartOfAccountBalance;
use App\ChartOfAccountRegister;
use App\AccountSetup;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class chartOfAccountController extends Controller
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
        // orWhere('createBy','1')
        // ->orWhere('createBy',Auth::user()->id)
        // ->
        
        $chartOfAccounts = ChartOfAccount::orderBy('headCode','ASC')->get();
        return ['chartOfAccounts' => $chartOfAccounts];
    }


    public static function balanceUpdate($drhc,$drc,$crhc,$crc,$drAmount,$crAmount,$balance){

        $array = array();
        $general_cash_code = AccountSetup::where('placementType',28)->where('headName',107)->first()->headCode;
        $petty_cash_code = AccountSetup::where('placementType',28)->where('headName',108)->first()->headCode;
        $bank_book_code = AccountSetup::where('placementType',8)->where('headName',25)->first()->headCode;

        
        $array[] = $general_cash_code;
        $array[] = $petty_cash_code;

        $coa_register_banks = ChartOfAccountRegister::where('shopId', Auth::user()->shopId)->where('headCode','LIKE',"$bank_book_code%")->get();
        foreach($coa_register_banks as $coa_register_bank){
            $array[] = $coa_register_bank->headCode;
        }



        //========================== debit amount 
        if($drc>0){

            $array1 = array($drc);
            $have = array_intersect($array1,$array);
        if(in_array($drc,$have)){

        if(ChartOfAccountBalance::
            where('accountHeadCode',$drhc)
            ->where('accountCode',$drc)
            ->where('shopId', Auth::user()->shopId)
            ->exists()){

                

            $lastDebitAmount = ChartOfAccountBalance::where('accountHeadCode',$drhc)
            ->where('accountCode', $drc)
            ->where('shopId', Auth::user()->shopId)
            ->orderBy('id', 'DESC')
            ->first()
            ->debitAmount;
            $lastBalanceAmount = ChartOfAccountBalance::where('accountHeadCode',$drhc)
            ->where('accountCode', $drc)
            ->where('shopId', Auth::user()->shopId)
            ->orderBy('id', 'DESC')
            ->first()
            ->balanceAmount;

            $debitAmount = $lastDebitAmount+$drAmount;
            $balanceAmount = $lastBalanceAmount+$balance;

                        ChartOfAccountBalance::where('accountHeadCode',$drhc)
                        ->where('accountCode', $drc)
                        ->where('shopId', Auth::user()->shopId)
                        ->update([
                                'debitAmount' => $debitAmount,
                                'balanceAmount' => $balanceAmount,
                                'updateBy' => Auth::user()->id,
                                'updated_at' => Carbon::now(),
                        ]);
                        
        }
        else{

            ChartOfAccountBalance::insert([
                'shopId' => Auth::user()->shopId,
                'branchId' => 0,
                'accountHeadCode' => $drhc,
                'accountCode' => $drc,
                'debitAmount' => $drAmount,
                'balanceAmount' => $balance,
                'createBy' => Auth::user()->id,
                'created_at' => Carbon::now(),
        ]);

        } //else condition 
        } // check in array 
        } // check drc>0

        //========================== // debit amount 


        //==========================  credit amount 

        if($crc>0){

        
            
            $array1 = array($crc);
            $have = array_intersect($array1,$array);
        if(in_array($crc,$have)){


        if(ChartOfAccountBalance::
            where('accountHeadCode',$crhc)
            ->where('accountCode',$crc)
            ->where('shopId', Auth::user()->shopId)
            ->exists()){
                        
            $lastCreditAmount = ChartOfAccountBalance::where('accountHeadCode',$crhc)
            ->where('accountCode', $crc)
            ->where('shopId', Auth::user()->shopId)
            ->orderBy('id', 'DESC')
            ->first()
            ->creditAmount;
            $lastBalanceAmount = ChartOfAccountBalance::where('accountHeadCode',$crhc)
            ->where('accountCode', $crc)
            ->where('shopId', Auth::user()->shopId)
            ->orderBy('id', 'DESC')
            ->first()
            ->balanceAmount;

            $creditAmount = $lastCreditAmount-$crAmount;
            $balanceAmount = $lastBalanceAmount-$balance;

                        ChartOfAccountBalance::where('accountHeadCode',$crhc)
                        ->where('accountCode', $crc)
                        ->where('shopId', Auth::user()->shopId)
                        ->update([
                                'creditAmount' => $creditAmount,
                                'balanceAmount' => $balanceAmount,
                                'updateBy' => Auth::user()->id,
                                'updated_at' => Carbon::now(),
                        ]);
        }
        else{
            $crAmount = -1*$crAmount;
            $balance = -1*$balance;
            ChartOfAccountBalance::insert([
                'shopId' => Auth::user()->shopId,
                'branchId' => 0,
                'accountHeadCode' => $crhc,
                'accountCode' => $crc,
                'creditAmount' => $crAmount,
                'balanceAmount' => $balance,
                'createBy' => Auth::user()->id,
                'created_at' => Carbon::now(),
        ]);


        } // else condition 
        } // check in array 
        } // check crc>0 

        //========================== // credit amount 


    }



    public function chartOfAccountWithRegister(){
        $datas = '';
        $chartOfAccounts = ChartOfAccount::orderBy('headCode','ASC')->get();

        
        foreach($chartOfAccounts as $coa){

            
            
            if(chartOfAccountRegister::where('pre_code',$coa->headCode)->exists()){

            $coars = chartOfAccountRegister::where('pre_code',$coa->headCode)->get();
            
            foreach($coars as $coar){
                
            $datas .= '<tr>';

            $datas .= '<td>';
            $datas .= $coar->headCode;
            $datas .= '</td>';

            $datas .= '<td class="pt-0 pb-0 bg-infos">';
            for($i=1;$i<=$coar->headLavel;$i++){
                if($i==$coar->headLavel){
                    $datas .= '<div class="tree">
                    <div class="tree1"></div>
                    </div>';
                }else{
                    $datas .= '<div class="tree">
                <div class="tree1" style="background:transparent!important;"></div>
                </div>';
                }
                }
            $datas .= '<span style="position:relative;top:15px;">'.$coar->headName.'</span>';
            $datas .= '</td>';

            $datas .= '<td> Level ';
            $datas .= $coar->headLavel;
            $datas .= '</td>';

            $datas .= '<td>';
            $datas .= AccountGroup::where('id',$coar->headGroupId)->first()->groupName;
            $datas .= '</td>';

            $datas .= '<td>';
            $datas .= chartOfAccountGroupType::where('id',$coar->headGroupId)->first()->name;
            $datas .= '</td>';

            $datas .= '</tr>';
            }

            }
            else{
            $datas .= '<tr class="">';

            $datas .= '<td>';
            $datas .= $coa->headCode;
            $datas .= '</td>';

            $datas .= '<td class="pt-0 pb-0">';
            
            for($i=1;$i<=$coa->headLavel;$i++){
                if($i==$coa->headLavel){
                    $datas .= '<div class="tree">
                    <div class="tree1"></div>
                    </div>';
                }else{
                    $datas .= '<div class="tree">
                <div class="tree1" style="background:transparent!important;"></div>
                </div>';
                }
            }
            $datas .= '<span style="position:relative;top:15px;">'.$coa->headName.'</span>';
            $datas .= '</td>';

            $datas .= '<td> Level ';
            $datas .= $coa->headLavel;
            $datas .= '</td>';

            $datas .= '<td>';
            $datas .= AccountGroup::where('id',$coa->headGroupId)->first()->groupName;
            $datas .= '</td>';

            $datas .= '<td>';
            $datas .= chartOfAccountGroupType::where('id',$coa->headGroupId)->first()->name;
            $datas .= '</td>';

            $datas .= '</tr>';
            }

        }
        return ['chartOfAccounts' => $datas];
    }

    public function getAccountGroup(){
        $accountGroups = AccountGroup::get();
        return ['accountGroups' => $accountGroups];
    }

    public function chartOfAccountGroupType(){
        if(Auth::guard('admin')->check()){
            $accountGroupTypes = 'Login as admin';
        }else{
            $accountGroupTypes = chartOfAccountGroupType::get();
        }

        return ['accountGroupTypes' => $accountGroupTypes];
    }


    public function getUplinkInformation($id){

        if(ChartOfAccount::where('id',$id)->exists()){
         
            $code = ChartOfAccount::where('id',$id)->first()->headCode;
            $lavel = ChartOfAccount::where('id',$id)->first()->headLavel+1;
            
            if(ChartOfAccount::where('headLavel',$lavel)->where('headCode','like',"$code%")->exists()){
                $newCode = ChartOfAccount::where('headLavel',$lavel)->where('headCode','like',"$code%")->orderBy('headCode','DESC')->first()->headCode+1;
            }
            else{
                $newCode = $code.'01';
            }

        }
        else{
            $lavel = 1;
            if(ChartOfAccount::where('headLavel',1)->orderBy('headCode','DESC')->exists()){
            $newCode = ChartOfAccount::where('headLavel',1)->orderBy('headCode','DESC')->first()->headCode+1;
            }else{
                $newCode = 1;
            }
        }

 
 
        

        return [
            'lavel' => $lavel,
            'code' => $newCode,
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
        $this->validate($request, [
            'headCode' => 'required',
            'headName' => 'required',
            'headGroupType' => 'required',
        ],
        [
          'headCode.required' => 'Enter Head Code',
          'headName.required' => 'Enter Head Name',
          'headGroupType.required' => 'Enter Group Type',
        ]);
            
        if(ChartOfAccount::where('id',$request->headUpLink)->exists()){
            $code = ChartOfAccount::where('id',$request->headUpLink)->first()->headCode;
        }else{
            $code = 0;
        }


        if($request->headGroupType<5){
        
            ChartOfAccount::insert([
                  'headGroupType' => $request->headGroupType,
                  'headGroupId' => $request->headGroupId,
                  'dr_cr' => $request->dr_cr,
                  'pre_code' => $code,
                  'headCode' => $request->headCode,
                  'headName' => $request->headName,
                  'headLavel' => $request->headLavel,
                  'lastCode' => 0,
                  'status' => 1,
                  'position' => 0,
                  'autoCreate' => 0,
                  'createBy' => Auth::user()->id,
                  'created_at' => Carbon::now(),
              ]);

            }
            else{
              
        ChartOfAccountRegister::insert([
                  'headGroupType' => $request->headGroupType,
                  'headGroupId' => $request->headGroupId,
                  'dr_cr' => $request->dr_cr,
                  'pre_code' => $code,
                  'headCode' => $request->headCode,
                  'headName' => $request->headName,
                  'headLavel' => $request->headLavel,
                  'lastCode' => 0,
                  'status' => 1,
                  'position' => 0,
                  'autoCreate' => 0,
                  'shopId' => 0,
                  'createBy' => Auth::user()->id,
                  'created_at' => Carbon::now(),
              ]);
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
        $data = chartOfAccount::where('id',$id)->first();
        return ['data' => $data];
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
        $update = chartOfAccount::where('id',$id)->update([
            
            'headName' => $request->headName,
            'dr_cr' => $request->dr_cr,
            'headGroupId' => $request->headGroupId,
            'headGroupType' => $request->headGroupType
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
        $delete = chartOfAccount::where('id',$id)->delete();
    }



}
