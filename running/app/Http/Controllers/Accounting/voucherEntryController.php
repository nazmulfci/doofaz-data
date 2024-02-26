<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Accounting\chartOfAccountController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

use App\voucherType;
use App\AccountSetup;
use App\ChartOfAccount;
use App\ChartOfAccountBalance;
use App\voucherInformation;
use App\voucherInformationReport;
use App\ReceivePaymentStatement;
use App\tmpOpeningVoucher;
use App\IncomeExpenseCompany;
use App\LoanProviderEntry;
use App\ChartOfAccountRegister;
use App\StatementInformation;


class voucherEntryController extends Controller
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
        $today = date('Y-m-d');
        // $today = '2021-08-25';
        // where('voucherDate','LIKE',$today.'%')->
        if(Auth::guard('admin')->check()){

        $voucherInformation = voucherInformation::
            where('shopId',Auth::user()->shopId)->
            where('voucherDate','LIKE',$today.'%')->
            orderBy('id','DESC')->get();
        $total = voucherInformation::
            where('shopId',Auth::user()->shopId)->
            where('voucherDate','LIKE',$today.'%')->
            sum('voucherAmount');


        $cashPayment = voucherInformation::
            where('shopId',Auth::user()->shopId)->
            where('voucherDate','LIKE',$today.'%')->
            where('voucherType',1)->
            sum('voucherAmount');
        $cashReceive = voucherInformation::
            where('shopId',Auth::user()->shopId)->
            where('voucherDate','LIKE',$today.'%')->
            where('voucherType',2)->
            sum('voucherAmount');
        $bankPayment = voucherInformation::
            where('shopId',Auth::user()->shopId)->
            where('voucherDate','LIKE',$today.'%')->
            where('voucherType',3)->
            sum('voucherAmount');
        $bankReceive = voucherInformation::
            where('shopId',Auth::user()->shopId)->
            where('voucherDate','LIKE',$today.'%')->
            where('voucherType',4)->
            sum('voucherAmount');

        $totalPayment = $cashPayment+$bankPayment;
        $totalReceive = $cashReceive+$bankReceive;

        $data = voucherType::get();

       }

        return [
            'list' => $data,
            'voucherInformation' => $voucherInformation,
            'totalPayment' => $totalPayment,
            'totalReceive' => $totalReceive,
            'total' => $total,
        ];

    }


    public function openingVoucherEntryInformation()
    {
        $today = date('Y-m-d');
        // $today = '2021-08-25';
        // where('voucherDate','LIKE',$today.'%')->
        if(Auth::guard('admin')->check()){

        $voucherInformation = voucherInformation::
            where('shopId',Auth::user()->shopId)->
            where('voucherType',7)->
            orderBy('id','DESC')->get();
        $data = voucherType::get();

       }

        return [
            'list' => $data,
            'voucherInformation' => $voucherInformation,
        ];

    }


    public function voucherEntryInformationUser()
    {
        $today = date('Y-m-d');
        // $today = '2021-08-25';
        // where('voucherDate','LIKE',$today.'%')->
        if(Auth::guard('admin')->check()){

        $voucherInformation = voucherInformation::
            where('shopId',Auth::user()->shopId)->
            where('createBy',Auth::user()->id)->
            orderBy('id','DESC')->get();

        $data = voucherType::get();
       }

        return [
            'list' => $data,
            'voucherInformation' => $voucherInformation,
        ];

    }


    public function getGeneralJournal()
    {
        $today = date('Y-m-d');
        // $today = '2021-08-25';
        if(Auth::guard('admin')->check()){
        $voucherUniqueId = voucherInformation::distinct()->
            where('shopId',Auth::user()->shopId)->
            where('voucherDate','LIKE',$today.'%')->
            orderBy('id','DESC')->get('voucherUniqueId');

        $voucherInformation = voucherInformationReport::where('shopId',Auth::user()->shopId)
        ->whereIn('voucherUniqueId',$voucherUniqueId)
        ->orderBy('id','DESC')
        ->get();
        $data = voucherType::get();
       }

        return [
            'list' => $data,
            'voucherInformation' => $voucherInformation,
        ];

    }



    public function getGeneralJournalSearch(Request $request){


        if(Auth::guard('admin')->check()){


            $datas = voucherInformation::query();
            $datas = $datas->distinct();
            $datas = $datas->where('shopId',Auth::user()->shopId);

            if($request->mainHead){
                $datas = $datas->where('accountsHeadCode',$request->mainHead);
            }

            if($request->subHead){
                $datas = $datas->Where('accountCodeDebit','LIKE',$request->subHead.'%');
            }

            if($request->voucherNo){
                $datas = $datas->where('voucherNo',$request->voucherNo);
            }

            if($request->voucherDate){
                $datas = $datas->where('voucherDate','LIKE',$request->voucherDate.'%');
            }

            if($request->voucherType){
                $datas = $datas->where('voucherType',$request->voucherType);
            }

            $datas = $datas->get('voucherUniqueId');

        } // auth condition

        $voucherInformation = voucherInformationReport::where('shopId',Auth::user()->shopId)
        ->whereIn('voucherUniqueId',$datas)
        ->orderBy('id','DESC')
        ->get();

        return ['voucherInformation' => $voucherInformation];
    }



    public function getMainHeadCodeForTrialBalance()
    {

        if(Auth::guard('admin')->check()){

                $mainHeadList = ChartOfAccount::where('headGroupType',4)
                ->get('headCode');

       }

        return [
            'mainHeadList' => $mainHeadList
        ];

    }

    public function getVoucherType()
    {
        $data = VoucherType::get();
        return ['data' => $data];
    }

    public function getMainHeadCode($type)
    {

        if(Auth::guard('admin')->check()){
            if($type>0){
                $mainHeadList = voucherInformationReport::distinct()
                ->where('accountsHeadCode','LIKE',$type.'%')
                ->where('shopId',Auth::user()->shopId)
                ->get('accountsHeadCode');
            }
            else{
                $mainHeadList = voucherInformationReport::distinct()
                ->where('shopId',Auth::user()->shopId)
                ->get('accountsHeadCode');
            }
       }

        return [
            'mainHeadList' => $mainHeadList
        ];

    }

    public function getsubHeadCode()
    {

        if(Auth::guard('admin')->check()){
        $subHeadList = voucherInformationReport::distinct()->get('accountsCode');
       }

        return [
            'subHeadList' => $subHeadList,
        ];

    }

    public function addTmpVoucher($voucherNo,$headCode,$subhead,$amount,$type,$date)
    {

        if(Auth::guard('admin')->check()){
        $subHeadList = tmpOpeningVoucher::insert([
            'shopId' => Auth::user()->shopId,
            'type' => $type,
            'voucherNo' => $voucherNo,
            'voucherDate' => $date,
            'accountHeadCode' => $headCode,
            'accountCode' => $subhead,
            'amount' => $amount,
            'createBy' => Auth::user()->id,
        ]);

        $datas = '';
        $totald = 0;
        $totalc = 0;
        $select = tmpOpeningVoucher::where('voucherNo',$voucherNo)->where('shopId',Auth::user()->shopId)->get();
        foreach($select as $data){
            $datas .= '<tr>';

            $datas .= '<td>';
            if(ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$data->accountCode)->exists()){
                $headName = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$data->accountCode)->first()->headName;
            }else{
                $headName = '';
            }

            $datas .= $headName;
            $datas .= '</td>';

            if($data->type == 1){
            $datas .= '<td>';
            $totald += $data->amount;
            $datas .= $data->amount;
            $datas .= '</td>';

            $datas .= '<td>';
            $datas .= '</td>';
            }
            else if($data->type == 2){
            $datas .= '<td>';
            $datas .= '</td>';

            $datas .= '<td>';
            $totalc += $data->amount;
            $datas .= $data->amount;
            $datas .= '</td>';
            }

            $datas .= '</tr>';
        }

        $datas .= '<tr>';

        $datas .= '<th class="text-right">';
        $datas .= 'Total';
        $datas .= '</th>';

        $datas .= '<th>';
        $datas .= $totald;
        $datas .= '</th>';

        $datas .= '<th>';
        $datas .= $totalc;
        $datas .= '</th>';

        $datas .= '</tr>';

       }

        return [
            'data' => $datas,
        ];

    }




    public function getGeneralLadger()
    {

        //$cashAccCode = AccountSetup::where('placementType',9)->where('headName',100)->first()->headCode;
        if(Auth::guard('admin')->check()){

        $today = date('Y-m-d');

        // ->whereNotIn('accountsCode',[$cashAccCode])

        $datas = voucherInformationReport::
        where('shopId',Auth::user()->shopId)
        ->where('voucherDate','LIKE',"$today%")
        ->distinct()
        ->orderBy('id','DESC')->get('accountsCode');
        $voucherInformationHeadNameForLadger = '';

        foreach($datas as $data){
            $total = 0;
            $voucherInformationHeadNameForLadger .= '<tr> <td colspan="7"> <center> <b>';
            $voucherInformationHeadNameForLadger .= ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$data['accountsCode'])->first()->headName;

            $headTitleCode = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$data['accountsCode'])->first()->pre_code;
            $voucherInformationHeadNameForLadger .= '('.ChartOfAccount::where('headCode',$headTitleCode)->first()->headName.')';

            $dr_cr_type = ChartOfAccountRegister::where('headCode',$data['accountsCode'])->first()->dr_cr;
            $pro = substr($data['accountsCode'],0,1);
            // $voucherInformationHeadNameForLadger .= ' - '.$data['accountsCode'];
            $voucherInformationHeadNameForLadger .= '</b> </center> </td></tr>';

            $type = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$data['accountsCode'])->first()->type;
            $voucherUniqueId = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$data['accountsCode'])->first()->voucherUniqueId;

            if(voucherInformationReport::
                where('shopId',Auth::user()->shopId)
                ->where('accountsCode',$data['accountsCode'])
                ->where('voucherType',7)
                ->exists()){

                   $infos =  voucherInformationReport::
                        where('shopId',Auth::user()->shopId)
                        ->where('accountsCode',$data['accountsCode'])
                        ->where('voucherType',7)
                        ->first();
                        $type = $infos->type;

                    $voucherInformationHeadNameForLadger .= '<tr>
                <td> '.substr($infos->voucherDate,0,10).'  </td>
                <td> '.$infos->voucherNo.'  </td>
                <td> Opening Entry </td> ';



                if($type == 1){

                    $total = $infos->voucherAmount;

                    $voucherInformationHeadNameForLadger .= '<td>  </td>
                    <td> '.$infos->voucherAmount.'  </td>
                    ';

                }
                else{

                    $total = $infos->voucherAmount;

                    $voucherInformationHeadNameForLadger .= '
                    <td> '.$infos->voucherAmount.' </td>
                    <td> </td>
                    ';

                }

                if($dr_cr_type == 2){

                    $voucherInformationHeadNameForLadger .= '
                    <td> </td>
                    <td> '.abs($total).' </td>
                    ';

                }
                else{

                    $voucherInformationHeadNameForLadger .= '
                    <td> '.abs($total).' </td>
                    <td> </td>
                    ';

                }
                $voucherInformationHeadNameForLadger .= '</tr>';



            }

            if(1){
            $select_another_unique_nos = voucherInformationReport::where('shopId',Auth::user()->shopId)->distinct()
            ->where('accountsCode',$data['accountsCode'])->get('voucherUniqueId');

            foreach($select_another_unique_nos as $select_another_unique_no){

            $select_anothers = voucherInformationReport::where('shopId',Auth::user()->shopId)
            ->where('voucherUniqueId',$select_another_unique_no['voucherUniqueId'])
            ->where('voucherDate','LIKE',"$today%")
            ->whereNotIn('accountsCode',[$data['accountsCode']])->get();


            foreach($select_anothers as $select_another){

                $voucherInformationHeadNameForLadger .= '<tr>
                <td> '.substr($select_another['voucherDate'],0,10).'  </td>
                <td> '.$select_another['voucherNo'].'  </td>
                <td> '.ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$select_another['accountsCode'])->first()->headName.'   </td> ';
                $type = $select_another['type'];




                if($type == 1){

                    if($pro==1){
                        $total -= $select_another['voucherAmount'];
                    }
                    else if($pro==2){
                        $total += $select_another['voucherAmount'];
                    }
                    else if($pro==3){
                        $total += $select_another['voucherAmount'];
                    }
                    else if($pro==4){
                        $total -= $select_another['voucherAmount'];
                    }
                    else if($pro==5){
                        $total -= $select_another['voucherAmount'];
                    }


                    $voucherInformationHeadNameForLadger .= '<td>  </td>
                    <td> '.$select_another['voucherAmount'].'  </td>
                    ';

                }
                else{

                    if($pro==1){
                        $total += $select_another['voucherAmount'];
                    }
                    else if($pro==2){
                        $total -= $select_another['voucherAmount'];
                    }
                    else if($pro==3){
                        $total -= $select_another['voucherAmount'];
                    }
                    else if($pro==4){
                        $total += $select_another['voucherAmount'];
                    }
                    else if($pro==5){
                        $total += $select_another['voucherAmount'];
                    }

                    $voucherInformationHeadNameForLadger .= '
                    <td> '.$select_another['voucherAmount'].' </td>
                    <td> </td>

                    ';

                }

                if($dr_cr_type==1){
                    $voucherInformationHeadNameForLadger .= '
                    <td>'.abs($total).'</td>
                    <td>  </td>
                    ';
                }
                else{
                    $voucherInformationHeadNameForLadger .= '
                    <td>  </td>
                    <td>'.abs($total).'</td>
                    ';
                }



                $voucherInformationHeadNameForLadger .= '</tr>';


            }
        }
        }
        }




        // $voucherInformationHeadNameForLadger .= '<tr>
        //  <td> 05 May 2021  </td>
        //  <td> CR-01-05/21  </td>
        //  <td> General Cash </td>
        //  <td> -  </td>
        //  <td>  	.00   </td>
        //  <td>  	5000   </td>
        //  <td>  .00  </td>
        //  </tr>';

        }
            return [
                'voucherInformationHeadNameForLadger' => $voucherInformationHeadNameForLadger,
            ];

    }


    public function getCompanyGeneralLadger($id)
    {

        if(Auth::guard('admin')->check()){

        $companyInformation = IncomeExpenseCompany::where('id',$id)->first();

        $incomeAccountCode = IncomeExpenseCompany::where('id',$id)->first()->incomeAccountCode;
        if($incomeAccountCode){
            $incomeAccountPreCode = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$incomeAccountCode)->first()->pre_code;
        }
        $expenseAccountCode = IncomeExpenseCompany::where('id',$id)->first()->expenseAccountCode;
        if($expenseAccountCode){
            $expenseAccountPreCode = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$expenseAccountCode)->first()->pre_code;
        }




            //    get this company voucher list

            $voucherInformationReport = voucherInformationReport::query();
            $voucherInformationReport = $voucherInformationReport->where('shopId',Auth::user()->shopId);
            $voucherInformationReport = $voucherInformationReport->distinct();


            if($incomeAccountCode && $expenseAccountCode){
                $in = $incomeAccountCode.','.$expenseAccountCode;
            }
            else if($incomeAccountCode){
                $in = $incomeAccountCode;
            }
            else if($expenseAccountCode){
                $in = $expenseAccountCode;
            }

            if($in){
                $voucherInformationReport = $voucherInformationReport->whereRaw("accountsCode IN($in)");
            }

            $voucherInformationReport = $voucherInformationReport->orderBy('id','DESC')->get('voucherNo');

            $voucherInformationReportCount = count($voucherInformationReport);
            $iReport = 1;
            $voucherNos = '';
            foreach($voucherInformationReport as $voucherInformationReports){

                if($iReport==$voucherInformationReportCount){
                    $voucherNos .= $voucherInformationReports->voucherNo;
                }else{
                    $voucherNos .= $voucherInformationReports->voucherNo.',';
                }

                $iReport++;
            }

            $voucherInformation = voucherInformation::whereRaw("voucherNo IN('$voucherNos')")->get();

            //  // get this company voucher list





        // get this company voucher types

        $voucherInformationForVoucherType = voucherInformation::distinct()->whereRaw("voucherNo IN('$voucherNos')")->get('voucherType');
        $ivtype = 1;
        $voucherTypes = '';
        $vtypeCount = count($voucherInformationForVoucherType);
        foreach($voucherInformationForVoucherType as $voucherInformationForVoucherTypes){

            if($ivtype==$vtypeCount){
                $voucherTypes .= $voucherInformationForVoucherTypes->voucherType;
            }else{
                $voucherTypes .= $voucherInformationForVoucherTypes->voucherType.',';
            }
            $ivtype++;
        }
        $voucherType = voucherType::whereRaw("id IN('$voucherTypes')")->get();

        //  //get this company voucher types



        //  get this company voucher main head list

        if($incomeAccountCode && $expenseAccountCode){
            $headCodes = $incomeAccountPreCode.','.$expenseAccountPreCode;
        }
        else if($incomeAccountCode){
            $headCodes = $incomeAccountPreCode;
        }
        else if($expenseAccountCode){
            $headCodes = $expenseAccountPreCode;
        }
        $mainHeadList = ChartOfAccount::whereRaw("headCode IN($headCodes)")->get();

        //  //get this company voucher main head list








        //$today = '2021-07-14';

        $datas   =  voucherInformationReport::
                    where('shopId',Auth::user()->shopId)->distinct()
                    ->whereRaw("accountsCode IN($in)")
                    ->orderBy('id','DESC')->get('accountsCode');

        $voucherInformationHeadNameForLadger = '';

        foreach($datas as $data){
            $voucherInformationHeadNameForLadger .= '<tr> <td colspan="7"> <center> <b>';
            $voucherInformationHeadNameForLadger .= ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$data['accountsCode'])->first()->headName;
            $voucherInformationHeadNameForLadger .= '</b> </center> </td></tr>';

            $type = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$data['accountsCode'])->first()->type;
            $voucherUniqueId = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$data['accountsCode'])->first()->voucherUniqueId;

            $select_another_unique_nos = voucherInformationReport::where('shopId',Auth::user()->shopId)->distinct()
            ->where('accountsCode',$data['accountsCode'])->get('voucherUniqueId');
            $total = 0;
            foreach($select_another_unique_nos as $select_another_unique_no){

            $select_anothers = voucherInformationReport::where('shopId',Auth::user()->shopId)
            ->where('voucherUniqueId',$select_another_unique_no['voucherUniqueId'])
            ->whereNotIn('accountsCode',[$data['accountsCode']])->get();


            foreach($select_anothers as $select_another){

                $voucherInformationHeadNameForLadger .= '<tr>
                <td> '.substr($select_another['voucherDate'],0,10).'  </td>
                <td> '.$select_another['voucherNo'].'  </td>
                <td> '.chartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$select_another['accountsCode'])->first()->headName.'   </td> ';
                $type = $select_another['type'];



                if($type == 1){

                    $total -= $select_another['voucherAmount'];

                    $voucherInformationHeadNameForLadger .= '<td>  </td>
                    <td> '.$select_another['voucherAmount'].'  </td>
                    <td> </td>
                    <td> '.abs($total).' </td>
                    ';

                }else{

                    $total += $select_another['voucherAmount'];

                    $voucherInformationHeadNameForLadger .= '
                    <td> '.$select_another['voucherAmount'].' </td>
                    <td> </td>
                    <td> '.abs($total).' </td>
                    <td> </td>
                    ';

                }
                $voucherInformationHeadNameForLadger .= '</tr>';


            }
        }
        }



        }
            return [
                'companyInformation' => $companyInformation,
                'voucherList' => $voucherType,
                'mainHeadList' => $mainHeadList,
                'voucherInformationHeadNameForLadger' => $voucherInformationHeadNameForLadger,
            ];

    }


    public function getLoanProviderGeneralLadger($id)
    {

        if(Auth::guard('admin')->check()){

        $companyInformation = LoanProviderEntry::where('id',$id)->first();

        $incomeAccountCode = LoanProviderEntry::where('id',$id)->first()->accountCode;
        if($incomeAccountCode){
            $incomeAccountPreCode = ChartOfAccountRegister::where('headCode',$incomeAccountCode)->first()->pre_code;
        }





            // get this company voucher list

            $voucherInformationReport = voucherInformationReport::query();
            $voucherInformationReport = $voucherInformationReport->where('shopId',Auth::user()->shopId);
            $voucherInformationReport = $voucherInformationReport->distinct();



            $in = $incomeAccountCode;


            if($in){
                $voucherInformationReport = $voucherInformationReport->whereRaw("accountsCode IN($in)");
            }

            $voucherInformationReport = $voucherInformationReport->orderBy('id','DESC')->get('voucherNo');

            $voucherInformationReportCount = count($voucherInformationReport);
            $iReport = 1;
            $voucherNos = '';
            foreach($voucherInformationReport as $voucherInformationReports){

                if($iReport==$voucherInformationReportCount){
                    $voucherNos .= $voucherInformationReports->voucherNo;
                }else{
                    $voucherNos .= $voucherInformationReports->voucherNo.',';
                }

                $iReport++;
            }

            $voucherInformation = voucherInformation::whereRaw("voucherNo IN('$voucherNos')")->get();

            //  // get this company voucher list





        // get this company voucher types

        $voucherInformationForVoucherType = voucherInformation::distinct()->whereRaw("voucherNo IN('$voucherNos')")->get('voucherType');
        $ivtype = 1;
        $voucherTypes = '';
        $vtypeCount = count($voucherInformationForVoucherType);
        foreach($voucherInformationForVoucherType as $voucherInformationForVoucherTypes){

            if($ivtype==$vtypeCount){
                $voucherTypes .= $voucherInformationForVoucherTypes->voucherType;
            }else{
                $voucherTypes .= $voucherInformationForVoucherTypes->voucherType.',';
            }
            $ivtype++;
        }
        $voucherType = voucherType::whereRaw("id IN('$voucherTypes')")->get();

        //  //get this company voucher types



        //  get this company voucher main head list


        $headCodes = $incomeAccountPreCode;


        $mainHeadList = ChartOfAccount::whereRaw("headCode IN($headCodes)")->get();

        //  //get this company voucher main head list








        //$today = '2021-07-14';

        $datas   =  voucherInformationReport::
                    where('shopId',Auth::user()->shopId)->distinct()
                    ->whereRaw("accountsCode IN($in)")
                    ->orderBy('id','DESC')->get('accountsCode');

        $voucherInformationHeadNameForLadger = '';

        foreach($datas as $data){
            $voucherInformationHeadNameForLadger .= '<tr> <td colspan="7"> <center> <b>';
            $voucherInformationHeadNameForLadger .= ChartOfAccountRegister::where('headCode',$data['accountsCode'])->first()->headName;
            $dr_cr_type = ChartOfAccountRegister::where('headCode',$data['accountsCode'])->first()->dr_cr;
            //$voucherInformationHeadNameForLadger .= $dr_cr_type;
            $voucherInformationHeadNameForLadger .= '</b> </center> </td></tr>';

            $type = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$data['accountsCode'])->first()->type;
            $voucherUniqueId = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$data['accountsCode'])->first()->voucherUniqueId;

            $select_another_unique_nos = voucherInformationReport::where('shopId',Auth::user()->shopId)->distinct()
            ->where('accountsCode',$data['accountsCode'])->get('voucherUniqueId');
            $total = 0;
            foreach($select_another_unique_nos as $select_another_unique_no){

            $select_anothers = voucherInformationReport::where('shopId',Auth::user()->shopId)
            ->where('voucherUniqueId',$select_another_unique_no['voucherUniqueId'])
            ->whereNotIn('accountsCode',[$data['accountsCode']])->get();


            foreach($select_anothers as $select_another){

                $voucherInformationHeadNameForLadger .= '<tr>
                <td> '.substr($select_another['voucherDate'],0,10).'  </td>
                <td> '.$select_another['voucherNo'].'  </td>
                <td> '.chartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$select_another['accountsCode'])->first()->headName.'   </td> ';
                $type = $select_another['type'];



                if($type == 1){

                    $total -= $select_another['voucherAmount'];

                    $voucherInformationHeadNameForLadger .= '<td>  </td>
                    <td> '.$select_another['voucherAmount'].'  </td>
                    ';
                }
                else{

                    $total += $select_another['voucherAmount'];

                    $voucherInformationHeadNameForLadger .= '
                    <td> '.$select_another['voucherAmount'].' </td> <td> </td>';
                }



                if($dr_cr_type==1){
                    $voucherInformationHeadNameForLadger .= '
                    <td> '.abs($total).' </td><td> </td>
                    ';
                        }else{

                    $voucherInformationHeadNameForLadger .= '
                    <td> </td><td> '.abs($total).' </td>
                    ';
                        }



                $voucherInformationHeadNameForLadger .= '</tr>';


            }
        }
        }



        }
            return [
                'companyInformation' => $companyInformation,
                'voucherList' => $voucherType,
                'mainHeadList' => $mainHeadList,
                'voucherInformationHeadNameForLadger' => $voucherInformationHeadNameForLadger,
            ];

    }


    public function getLoanReceiverGeneralLadger($id)
    {

        // this function provider and receiver are same

        if(Auth::guard('admin')->check()){

        $companyInformation = LoanProviderEntry::where('id',$id)->first();

        $incomeAccountCode = LoanProviderEntry::where('id',$id)->first()->accountCode;
        if($incomeAccountCode){
            $incomeAccountPreCode = ChartOfAccountRegister::where('headCode',$incomeAccountCode)->first()->pre_code;
        }





            //    get this company voucher list

            $voucherInformationReport = voucherInformationReport::query();
            $voucherInformationReport = $voucherInformationReport->where('shopId',Auth::user()->shopId);
            $voucherInformationReport = $voucherInformationReport->distinct();



            $in = $incomeAccountCode;


            if($in){
                $voucherInformationReport = $voucherInformationReport->whereRaw("accountsCode IN($in)");
            }

            $voucherInformationReport = $voucherInformationReport->orderBy('id','DESC')->get('voucherNo');

            $voucherInformationReportCount = count($voucherInformationReport);
            $iReport = 1;
            $voucherNos = '';
            foreach($voucherInformationReport as $voucherInformationReports){

                if($iReport==$voucherInformationReportCount){
                    $voucherNos .= $voucherInformationReports->voucherNo;
                }else{
                    $voucherNos .= $voucherInformationReports->voucherNo.',';
                }

                $iReport++;
            }

            $voucherInformation = voucherInformation::whereRaw("voucherNo IN('$voucherNos')")->get();

            //  // get this company voucher list





        // get this company voucher types

        $voucherInformationForVoucherType = voucherInformation::distinct()->whereRaw("voucherNo IN('$voucherNos')")->get('voucherType');
        $ivtype = 1;
        $voucherTypes = '';
        $vtypeCount = count($voucherInformationForVoucherType);
        foreach($voucherInformationForVoucherType as $voucherInformationForVoucherTypes){

            if($ivtype==$vtypeCount){
                $voucherTypes .= $voucherInformationForVoucherTypes->voucherType;
            }else{
                $voucherTypes .= $voucherInformationForVoucherTypes->voucherType.',';
            }
            $ivtype++;
        }
        $voucherType = voucherType::whereRaw("id IN('$voucherTypes')")->get();

        //  //get this company voucher types



        //  get this company voucher main head list


        $headCodes = $incomeAccountPreCode;


        $mainHeadList = ChartOfAccount::whereRaw("headCode IN($headCodes)")->get();

        //  //get this company voucher main head list








        //$today = '2021-07-14';

        $datas   =  voucherInformationReport::
                    where('shopId',Auth::user()->shopId)->distinct()
                    ->whereRaw("accountsCode IN($in)")
                    ->orderBy('id','DESC')->get('accountsCode');

        $voucherInformationHeadNameForLadger = '';

        foreach($datas as $data){
            $voucherInformationHeadNameForLadger .= '<tr> <td colspan="7"> <center> <b>';
            $voucherInformationHeadNameForLadger .= ChartOfAccountRegister::where('shopId',Auth::user()->shopId)->where('headCode',$data['accountsCode'])->first()->headName;
            $voucherInformationHeadNameForLadger .= '</b> </center> </td></tr>';

            $type = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$data['accountsCode'])->first()->type;
            $voucherUniqueId = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$data['accountsCode'])->first()->voucherUniqueId;

            $select_another_unique_nos = voucherInformationReport::where('shopId',Auth::user()->shopId)->distinct()
            ->where('accountsCode',$data['accountsCode'])->get('voucherUniqueId');
            $total = 0;
            foreach($select_another_unique_nos as $select_another_unique_no){

            $select_anothers = voucherInformationReport::where('shopId',Auth::user()->shopId)
            ->where('voucherUniqueId',$select_another_unique_no['voucherUniqueId'])
            ->whereNotIn('accountsCode',[$data['accountsCode']])->get();


            foreach($select_anothers as $select_another){

                $voucherInformationHeadNameForLadger .= '<tr>
                <td> '.substr($select_another['voucherDate'],0,10).'</td>
                <td> '.$select_another['voucherNo'].'  </td>
                <td> '.chartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$select_another['accountsCode'])->first()->headName.'   </td> ';
                $type = $select_another['type'];



                if($type == 1){

                    $total -= $select_another['voucherAmount'];

                    $voucherInformationHeadNameForLadger .= '<td>  </td>
                    <td> '.$select_another['voucherAmount'].'  </td>
                    <td> </td>
                    <td> '.abs($total).' </td>
                    ';

                }else{

                    $total += $select_another['voucherAmount'];

                    $voucherInformationHeadNameForLadger .= '
                    <td> '.$select_another['voucherAmount'].' </td>
                    <td> </td>
                    <td> '.abs($total).' </td>
                    <td> </td>
                    ';

                }
                $voucherInformationHeadNameForLadger .= '</tr>';


            }
        }
        }



        }
            return [
                'companyInformation' => $companyInformation,
                'voucherList' => $voucherType,
                'mainHeadList' => $mainHeadList,
                'voucherInformationHeadNameForLadger' => $voucherInformationHeadNameForLadger,
            ];

    }


    public function getCashBankGeneralLadger($id)
    {

        // this function provider and receiver are same

        if(Auth::guard('admin')->check()){

        $incomeAccountCode = $id;
        $incomeAccountPreCode = ChartOfAccountRegister::where('headCode',$incomeAccountCode)->first()->pre_code;

            //    get this company voucher list

            $voucherInformationReport = voucherInformationReport::query();
            $voucherInformationReport = $voucherInformationReport->where('shopId',Auth::user()->shopId);
            $voucherInformationReport = $voucherInformationReport->distinct();



            $in = $incomeAccountCode;


            if($in){
                $voucherInformationReport = $voucherInformationReport->whereRaw("accountsCode IN($in)");
            }

            $voucherInformationReport = $voucherInformationReport->orderBy('id','DESC')->get('voucherNo');

            $voucherInformationReportCount = count($voucherInformationReport);
            $iReport = 1;
            $voucherNos = '';
            foreach($voucherInformationReport as $voucherInformationReports){

                if($iReport==$voucherInformationReportCount){
                    $voucherNos .= $voucherInformationReports->voucherNo;
                }
                else{
                    $voucherNos .= $voucherInformationReports->voucherNo.',';
                }

                $iReport++;
            }

            $voucherInformation = voucherInformation::whereRaw("voucherNo IN('$voucherNos')")->get();

            //  // get this company voucher list





        // get this company voucher types

        $voucherInformationForVoucherType = voucherInformation::distinct()->whereRaw("voucherNo IN('$voucherNos')")->get('voucherType');
        $ivtype = 1;
        $voucherTypes = '';
        $vtypeCount = count($voucherInformationForVoucherType);
        foreach($voucherInformationForVoucherType as $voucherInformationForVoucherTypes){

            if($ivtype==$vtypeCount){
                $voucherTypes .= $voucherInformationForVoucherTypes->voucherType;
            }else{
                $voucherTypes .= $voucherInformationForVoucherTypes->voucherType.',';
            }
            $ivtype++;
        }
        $voucherType = voucherType::whereRaw("id IN('$voucherTypes')")->get();

        //  //get this company voucher types



        //  get this company voucher main head list


        $headCodes = $incomeAccountPreCode;


        $mainHeadList = ChartOfAccount::whereRaw("headCode IN($headCodes)")->get();

        //  //get this company voucher main head list








        //$today = '2021-07-14';

        $datas   =  voucherInformationReport::
                    where('shopId',Auth::user()->shopId)->distinct()
                    ->whereRaw("accountsCode IN($in)")
                    ->orderBy('id','DESC')->get('accountsCode');

        $voucherInformationHeadNameForLadger = '';

        foreach($datas as $data){
            $voucherInformationHeadNameForLadger .= '<tr> <td colspan="7"> <center> <b>';
            $voucherInformationHeadNameForLadger .= ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$data['accountsCode'])->first()->headName;
            $voucherInformationHeadNameForLadger .= '</b> </center> </td></tr>';

            $type = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$data['accountsCode'])->first()->type;
            $voucherUniqueId = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$data['accountsCode'])->first()->voucherUniqueId;

            // $today = date('d-m-Y');      ->where('voucherDate','LIKE',$today.'%')
            $select_another_unique_nos = voucherInformationReport::where('shopId',Auth::user()->shopId)->distinct()
            ->where('accountsCode',$data['accountsCode'])
            ->get('voucherUniqueId');

            $total = 0;
            $dr_cr_type = ChartOfAccountRegister::where('headCode',$data['accountsCode'])->first()->dr_cr;
            $pro = substr($data['accountsCode'],0,1);


            // --------------------- opening
            if(voucherInformationReport::
                where('shopId',Auth::user()->shopId)
                ->where('accountsCode',$data['accountsCode'])
                ->where('voucherType',7)
                ->exists()){

                   $infos =  voucherInformationReport::
                        where('shopId',Auth::user()->shopId)
                        ->where('accountsCode',$data['accountsCode'])
                        ->where('voucherType',7)
                        ->first();
                        $type = $infos->type;

                    $voucherInformationHeadNameForLadger .= '<tr>
                <td> '.substr($infos->voucherDate,0,10).'  </td>
                <td> '.$infos->voucherNo.'  </td>
                <td> Opening Entry </td> ';



                if($type == 1){

                    $total = $infos->voucherAmount;

                    $voucherInformationHeadNameForLadger .= '<td>  </td>
                    <td> '.$infos->voucherAmount.'  </td>
                    ';

                }else{

                    $total = $infos->voucherAmount;

                    $voucherInformationHeadNameForLadger .= '
                    <td> '.$infos->voucherAmount.' </td>
                    <td> </td>
                    ';

                }


                if($dr_cr_type == 1){

                    $voucherInformationHeadNameForLadger .= '
                    <td> '.abs($total).' </td> <td> </td>
                    ';

                }else{

                    $voucherInformationHeadNameForLadger .= '
                    <td> </td> <td> '.abs($total).' </td>
                    ';

                }
                $voucherInformationHeadNameForLadger .= '</tr>';



            }
            // --------------------- /opening





            foreach($select_another_unique_nos as $select_another_unique_no){


            $select_anothers = voucherInformationReport::where('shopId',Auth::user()->shopId)
            ->where('voucherUniqueId',$select_another_unique_no['voucherUniqueId'])
            ->whereNotIn('accountsCode',[$data['accountsCode']])->get();


            foreach($select_anothers as $select_another){
                $headName = '';
                if(chartOfAccountRegister::where('headCode',$select_another['accountsCode'])->whereIn('shopId',[0,Auth::user()->shopId])->exists()){
                    $headName = chartOfAccountRegister::where('headCode',$select_another['accountsCode'])->whereIn('shopId',[0,Auth::user()->shopId])->first()->headName;
                }
                $voucherInformationHeadNameForLadger .= '<tr>
                <td> '.substr($select_another['voucherDate'],0,10).'  </td>
                <td> '.$select_another['voucherNo'].'  </td>
                <td> '.$headName.'   </td> ';
                $type = $select_another['type'];



                if($type == 1){

                    if($pro==1){
                        $total -= $select_another['voucherAmount'];
                    }
                    else if($pro==2){
                        $total += $select_another['voucherAmount'];
                    }
                    else if($pro==3){
                        $total += $select_another['voucherAmount'];
                    }
                    else if($pro==4){
                        $total -= $select_another['voucherAmount'];
                    }
                    else if($pro==5){
                        $total -= $select_another['voucherAmount'];
                    }

                    $voucherInformationHeadNameForLadger .= '<td>  </td>
                    <td> '.$select_another['voucherAmount'].'  </td>

                    ';

                }else{

                    if($pro==1){
                        $total += $select_another['voucherAmount'];
                    }
                    else if($pro==2){
                        $total -= $select_another['voucherAmount'];
                    }
                    else if($pro==3){
                        $total -= $select_another['voucherAmount'];
                    }
                    else if($pro==4){
                        $total += $select_another['voucherAmount'];
                    }
                    else if($pro==5){
                        $total += $select_another['voucherAmount'];
                    }

                    $voucherInformationHeadNameForLadger .= '
                    <td> '.$select_another['voucherAmount'].' </td>
                    <td> </td>
                    ';

                }

                if($dr_cr_type == 1){

                    $voucherInformationHeadNameForLadger .= '

                    <td> '.abs($total).' </td> <td> </td>
                    ';

                }else{


                    $voucherInformationHeadNameForLadger .= '
                    <td> </td> <td> '.abs($total).' </td>

                    ';

                }
                $voucherInformationHeadNameForLadger .= '</tr>';


            }
        }
        }



        }
            return [
                'voucherList' => $voucherType,
                'mainHeadList' => $mainHeadList,
                'voucherInformationHeadNameForLadger' => $voucherInformationHeadNameForLadger,
            ];

    }



    public function expenseSummary()
    {

        if(Auth::guard('admin')->check()){


        //   =========================== income
            $select_COA = chartOfAccount::where('headCode','LIKE','5%')->orderBy('headCode','ASC')->get();
            $datas =  '';
            $today = date('Y-m-d');


            $totalIncome = 0;
            foreach($select_COA as $coaCode){

                $headGroupType = $coaCode['headGroupType'];
                $headLevel = $coaCode['headLavel'];
                $headLevel1 = $headLevel+1;
                $headCode = $coaCode['headCode'];
                $headCode1 = $coaCode['headCode'];

                if(ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headLavel',$headLevel1)->where('pre_code',$headCode)->exists()){


                    $income =  0;
                    $income1 = 0;


                    if(voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->exists()){
                        $income = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->sum('voucherAmount');
                        $income1 += $income;
                    }
                    // if(voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->exists()){
                    //     $income = voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->sum('voucherAmount');
                    //     $income1 -= $income;
                    // }

                $datas .= '<tr class="" style="font-weight:bold;"  onclick="showSubHeadCodeExpenseSummery('.$headCode.')">';

                $datas .=  '<td>';

                $datas .=  $coaCode['headName'];
                $datas .=   '</td>';
                $datas .=   '<td>';
                $datas .=  abs($income1);
                $datas .=   '</td>';

                $datas .=   '<td>';
                $datas .=   '</td>';

                $datas .=   '</tr>';


                if($headGroupType==4){
                    $income = 0;
                $select_COAs = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('pre_code',$headCode)->orderBy('headCode','ASC')->get();
                foreach($select_COAs as $select_COA){
                    $headCode1 = $select_COA['headCode'];

                    $incomeAmount = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->sum('voucherAmount');
                    if($incomeAmount){
                    $datas .=   '<tr style="display:none;" class="clk2ShowExpenseSummery-'.$headCode.'">';
                    $datas .=   '<td>';
                    $datas .=  $select_COA['headName'];
                    $datas .=   '</td>';
                    $datas .=   '<td>';
                    $income = $incomeAmount;
                    $totalIncome += $income;
                    $datas .=   $totalIncome;
                    $datas .=   '</td>';

                    $datas .=   '<td>';
                    $datas .=   '</td>';

                    $datas .=   '</tr>';
                    }
                }
            }
            }
            }

            $datas .=   '<tr>';
            $datas .=   '<th class="text-right"> Total Expense';
            $datas .=   '</th>';
            $datas .=   '<th>';
            $datas .=   $totalIncome;
            $datas .=   '</th>';
            $datas .=   '<td>';
            $datas .=   '</td>';
            $datas .=   '</tr>';


         //   =========================== /income
        }
            return [
                'voucherInformationHeadNameForLadger' => $datas,
            ];

    }



    public function expenseSummarySearch(Request $request)
    {

        if(Auth::guard('admin')->check()){


        //   =========================== income


            $select_COA = chartOfAccount::query();
            $select_COA = $select_COA->where('headCode','LIKE','5%');

              if($request->mainHead){
                $select_COA = $select_COA->where('headCode','LIKE',$request->mainHead.'%');
            }


            $select_COA = $select_COA->orderBy('headCode','ASC');
            $select_COA = $select_COA->get();


            $datas =  '';


            $totalIncome = 0;
            foreach($select_COA as $coaCode){

                $headGroupType = $coaCode['headGroupType'];
                $headLevel = $coaCode['headLavel'];
                $headCode = $coaCode['headCode'];


                $datas .= '<tr class="alert-warning" style="font-weight:bold;">';

                $datas .=  '<td>';

                if($headLevel==3){
                    $datas .=   '&nbsp;&nbsp;&nbsp;|-- ';
                }
                else if($headLevel==4){
                    $datas .=   '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- ';
                }
                else if($headLevel==5){
                    $datas .=   '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- ';
                }
                else if($headLevel==6){
                    $datas .=   '
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    |-- ';
                }
                else if($headLevel==7){
                    $datas .=   '
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    |-- ';
                }
                $datas .=  $coaCode['headName'];
                $datas .=   '</td>';
                $datas .=   '<td>';
                $datas .=  '';
                $datas .=   '</td>';

                $datas .=   '<td>';
                $datas .=   '</td>';

                $datas .=   '</tr>';


                if($headGroupType==4){
                    $income = 0;

                $select_COAs = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('pre_code',$headCode)->orderBy('headCode','ASC')->get();

                foreach($select_COAs as $select_COA){
                    $headCode1 = $select_COA['headCode'];


                    if($request->voucherDate){
                        $incomeAmount = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('voucherDate',$request->voucherDate)->where('accountsCode',$headCode1)->sum('voucherAmount');
                    }
                    else{
                        $incomeAmount = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->sum('voucherAmount');
                    }


                    if($incomeAmount){
                    if($select_COA['headCode'] == $request->subHead){
                    $datas .=   '<tr>';
                    $datas .=   '<td>';
                    $datas .=  $select_COA['headName'];
                    $datas .=   '</td>';
                    $datas .=   '<td>';
                    $income = $incomeAmount;
                    $totalIncome += $income;
                    $datas .=   $income;
                    $datas .=   '</td>';

                    $datas .=   '<td>';
                    $datas .=   '</td>';

                    $datas .=   '</tr>';
                    }
                    else{
                    $datas .=   '<tr>';
                    $datas .=   '<td>';
                    $datas .=  $select_COA['headName'];
                    $datas .=   '</td>';
                    $datas .=   '<td>';
                    $income = $incomeAmount;
                    $totalIncome += $income;
                    $datas .=   $income;
                    $datas .=   '</td>';

                    $datas .=   '<td>';
                    $datas .=   '</td>';

                    $datas .=   '</tr>';
                    }
                    }
                }
            }
            }

            $datas .=   '<tr>';
            $datas .=   '<th class="text-right"> Total Income';
            $datas .=   '</th>';
            $datas .=   '<th>';
            $datas .=   $totalIncome;
            $datas .=   '</th>';
            $datas .=   '<td>';
            $datas .=   '</td>';
            $datas .=   '</tr>';


         //   =========================== /income
        }
            return [
                'voucherInformationHeadNameForLadger' => $datas,
            ];

    }



    public function getIncomeStatement()
    {

        if(Auth::guard('admin')->check()){

        //   =========================== income
        $select_COA = chartOfAccount::where('headCode','LIKE','3%')->orderBy('headCode','ASC')->get();
        $datas =  '';
        $today = date('Y-m-d');


        $totalIncome = 0;
        foreach($select_COA as $coaCode){

            $headGroupType = $coaCode['headGroupType'];
            $headLevel = $coaCode['headLavel'];
            $headLevel1 = $headLevel+1;
            $headCode = $coaCode['headCode'];
            $headCode1 = $coaCode['headCode'];


            if(ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headLavel',$headLevel1)->where('pre_code',$headCode)->exists()){


                $income =  0;
                $income1 = 0;


                if(voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->exists()){
                    $income = voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->sum('voucherAmount');
                    $income1 += $income;
                }
                if(voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->exists()){
                    $income = voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->sum('voucherAmount');
                    $income1 -= $income;
                }

            $datas .= '<tr style="font-weight:bold;"  onclick="showSubHeadCodeIncomeStatement('.$headCode.')">';
            $datas .=  '<td>';
            $datas .=  $coaCode['headName'];
            $datas .=   '</td>';
            $datas .=   '<td>';
            $datas .=  abs($income1);
            $datas .=   '</td>';

            $datas .=   '<td>';
            $datas .=   '</td>';

            $datas .=   '</tr>';


            if($headGroupType==4){

            $select_COAs = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('pre_code',$headCode)->orderBy('headCode','ASC')->get();
            foreach($select_COAs as $select_COA){
                $income = 0;
                $income1 = 0;
                $headCode1 = $select_COA['headCode'];




                if(voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->exists()){
                    $income = voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->sum('voucherAmount');
                    $totalIncome += $income;
                    $income1 += $income;
                }
                if(voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->exists()){
                    $income = voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->sum('voucherAmount');
                    $totalIncome -= $income;
                    $income1 -= $income;
                }
                $income1 = abs($income1);
                $totalIncome = abs($totalIncome);
                if($income1){
                $datas .=   '<tr style="display:none;" class="clk2ShowIncomeStatement-'.$headCode.'">';
                $datas .=   '<td>';
                $datas .=  $select_COA['headName'];
                $datas .=   '</td>';
                $datas .=   '<td>';
                $datas .=   $income1;
                $datas .=   '</td>';

                $datas .=   '<td>';
                $datas .=   '</td>';

                $datas .=   '</tr>';
                }
            }
        }
        }
        }

        $datas .=   '<tr>';
        $datas .=   '<th class="text-right"> Total Income';
        $datas .=   '</th>';
        $datas .=   '<th>';
        $datas .=   $totalIncome;
        $datas .=   '</th>';
        $datas .=   '<td>';
        $datas .=   '</td>';
        $datas .=   '</tr>';


     //   =========================== /income



     //   =========================== income
     $select_COA = chartOfAccount::where('headCode','LIKE','5%')->orderBy('headCode','ASC')->get();

     $today = date('Y-m-d');


     $totalExpense = 0;
     foreach($select_COA as $coaCode){

         $headGroupType = $coaCode['headGroupType'];
         $headLevel = $coaCode['headLavel'];
         $headLevel1 = $headLevel+1;
         $headCode = $coaCode['headCode'];
         $headCode1 = $coaCode['headCode'];


         if(ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headLavel',$headLevel1)->where('pre_code',$headCode)->exists()){


            $income =  0;
            $income1 = 0;


            if(voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->exists()){
                $income = voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->sum('voucherAmount');
                $income1 += $income;
            }
            if(voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->exists()){
                $income = voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->sum('voucherAmount');
                $income1 -= $income;
            }
         $datas .= '<tr style="font-weight:bold;" onclick="showSubHeadCodeIncomeStatementExpense('.$headCode.')">';
         $datas .=  '<td>';
         $datas .=  $coaCode['headName'];
         $datas .=   '</td>';
         $datas .=   '<td>';
         $datas .=  abs($income1);
         $datas .=   '</td>';

         $datas .=   '<td>';
         $datas .=   '</td>';

         $datas .=   '</tr>';


         if($headGroupType==4){

         $select_COAs = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('pre_code',$headCode)->orderBy('headCode','ASC')->get();
         foreach($select_COAs as $select_COA){
            $expense = 0;
            $expense1 = 0;

             $headCode1 = $select_COA['headCode'];



             if(voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->exists()){
                $expense = voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->sum('voucherAmount');
                $totalExpense += $expense;
                $expense1 += $expense;
            }
            if(voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->exists()){
                $expense = voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->sum('voucherAmount');
                $totalExpense -= $expense;
                $expense1 -= $expense;
            }
            $expense1 = abs($expense1);
            $totalExpense = abs($totalExpense);

            if($expense1){
            $datas .=   '<tr style="display:none;" class="clk2ShowIncomeStatementExpense-'.$headCode.'">';
             $datas .=   '<td>';
             $datas .=  $select_COA['headName'];
             $datas .=   '</td>';
             $datas .=   '<td>';
             $datas .=   $expense1;
             $datas .=   '</td>';

             $datas .=   '<td>';
             $datas .=   '</td>';

             $datas .=   '</tr>';
            }
         }
     }
     }
     }

     $datas .=   '<tr>';
     $datas .=   '<th class="text-right"> Total Expense';
     $datas .=   '</th>';
     $datas .=   '<th>';
     $datas .=   $totalExpense;
     $datas .=   '</th>';
     $datas .=   '<td>';
     $datas .=   '</td>';
     $datas .=   '</tr>';

     $datas .=   '<tr class="bg-info">';
     $datas .=   '<th>';
     $datas .=   '</th>';
     $datas .=   '<th>';
     $datas .=   '</th>';
     $datas .=   '<td>';
     $datas .=   '</td>';
     $datas .=   '</tr>';


  //   =========================== /expense




  //   =========================== net income


  $datas .=   '<tr>';
  $datas .=   '<th class="text-right"> Toal Income';
  $datas .=   '</th>';
  $datas .=   '<th>';
  $datas .=   $totalIncome;
  $datas .=   '</th>';
  $datas .=   '<td>';
  $datas .=   '</td>';
  $datas .=   '</tr>';


  $datas .=   '<tr>';
  $datas .=   '<th class="text-right"> Total Expense';
  $datas .=   '</th>';
  $datas .=   '<th>';
  $datas .=   $totalExpense;
  $datas .=   '</th>';
  $datas .=   '<td>';
  $datas .=   '</td>';
  $datas .=   '</tr>';


  $datas .=   '<tr>';
  $datas .=   '<th class="text-right"> Net Income';
  $datas .=   '</th>';
  $datas .=   '<th>';
  $datas .=   $totalIncome-$totalExpense;
  $datas .=   '</th>';
  $datas .=   '<td>';
  $datas .=   '</td>';
  $datas .=   '</tr>';


  //   =========================== /net income
        }
            return [
                'voucherInformationHeadNameForLadger' => $datas,
            ];

    }



    public function getBalanceSheetAsset()
    {

        if(Auth::guard('admin')->check()){

        //   =========================== Asset
        $select_COA = ChartOfAccount::where('headCode','LIKE','1%')->where('headLavel','>',1)->orderBy('headCode','ASC')->get();
        $datas =  '';


        $totalIncome = 0;
        $income1 = 0;
        foreach($select_COA as $coaCode){

            $headGroupType = $coaCode['headGroupType'];
            $headLevel = $coaCode['headLavel'];
            $headLevel1 = $headLevel+1;
            $headCode = $coaCode['headCode'];
            $headCode1 = $coaCode['headCode'];

            $income1 = 0;
            if(ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headLavel',$headLevel1)->where('pre_code',$headCode)->exists()){

            $datas .= '<tr class="alert-success" style="font-weight:bold;" onclick="showSubHeadCodeAsset('.$headCode.')">';

            $datas .=  '<td>';
            $datas .=  $coaCode['headName'];
            $datas .=   '</td>';
            $datas .=   '<td>';
            if(voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->exists()){
                $income = voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->sum('voucherAmount');
                $totalIncome += $income;
                $income1 += $income;
            }
            if(voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->exists()){
                $income = voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->sum('voucherAmount');
                $totalIncome -= $income;
                $income1 -= $income;
            }

            $income1 = abs($income1);
            $totalIncome = abs($totalIncome);
            $datas .=  $income1;
            $datas .=   '</td>';


            $datas .=   '</tr>';




            $income = 0;
            $income1 = 0;
            $select_COAs = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('pre_code',$headCode)->orderBy('headCode','ASC')->get();
            foreach($select_COAs as $select_COA){
                $headCode1 = $select_COA['headCode'];
                $income = 0;
                $income1 = 0;

                if(voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->exists()){
                    $income = voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->sum('voucherAmount');

                    $income1 += $income;
                }
                if(voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->exists()){
                    $income = voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->sum('voucherAmount');

                    $income1 -= $income;
                }

                $income1 = abs($income1);
                if($income1){
                $datas .=   '<tr style="display:none;" class="clk2ShowAsset-'.$headCode.'">';
                $datas .=   '<td>';
                $datas .=  $select_COA['headName'];
                $datas .=   '</td>';
                $datas .=   '<td>';
                $datas .=   $income1;
                $datas .=   '</td>';


                $datas .=   '</tr>';
                }
            }


            }



        }

        $datas .=   '<tr>';
        $datas .=   '<th class="text-right"> Total Asset';
        $datas .=   '</th>';
        $datas .=   '<th>';
        $datas .=   $totalIncome;
        $datas .=   '</th>';
        $datas .=   '</tr>';


     //   =========================== /Asset




        }
            return [
                'voucherInformationHeadNameForLadger' => $datas,
            ];

    }


    public function getBalanceSheetLiability()
    {

        if(Auth::guard('admin')->check()){


     //   =========================== Liability
     $select_COA = chartOfAccount::where('headCode','LIKE','2%')->where('headLavel','>',1)->orderBy('headCode','ASC')->get();
     $datas =  '';
     $today = date('Y-m-d');
    //  $today = '2021-10-18';


     $totalExpense = 0;
     foreach($select_COA as $coaCode){

         $headGroupType = $coaCode['headGroupType'];
         $headLevel = $coaCode['headLavel'];
         $headLevel1 = $headLevel+1;
         $headCode = $coaCode['headCode'];
         $headCode1 = $coaCode['headCode'];

         $expense = 0;

         if(ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headLavel',$headLevel1)->where('pre_code',$headCode)->exists()){
             $datas .= '<tr class="alert-danger" style="font-weight:bold;" onclick="showSubHeadCode('.$headCode.')">';

         $datas .=  '<td>';


         $datas .=  $coaCode['headName'];
         $datas .=   '</td>';
         $datas .=   '<td>';
         $expense = 0;
         $expense1 = 0;
         if(voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->exists()){
            $expense = voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->sum('voucherAmount');
            $totalExpense -= $expense;
            $expense1 -= $expense;
           }
            if(voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->exists()){
            $expense = voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->sum('voucherAmount');
            $expense1 += $expense;
            $totalExpense += $expense;
           }
           $totalExpense = ($totalExpense);
         $datas .=   $expense1;
         $datas .=   '</td>';


         $datas .=   '</tr>';



         $expense2 = 0;
         $totalExpense2 = 0;
         $select_COAs = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('pre_code',$headCode)->orderBy('headCode','ASC')->get();
         foreach($select_COAs as $select_COA){
            $expense2 = 0;
            $expense12 = 0;
             $headCode1 = $select_COA['headCode'];



             if(voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->exists()){
             $expense2 = voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->sum('voucherAmount');
             $totalExpense2 -= $expense2;
             $expense12 -= $expense2;
            }
             if(voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->exists()){
             $expense2 = voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->sum('voucherAmount');
             $totalExpense2 += $expense2;
             $expense12 += $expense2;
            }
            $expense12 = abs($expense12);
            $totalExpense2 = abs($totalExpense2);

            if($expense12){
             $datas .=   '<tr  style="display:none;" class="clk2Show-'.$headCode.'">';
             $datas .=   '<td>';
             $datas .=  $select_COA['headName'];
             $datas .=   '</td>';
             $datas .=   '<td>';
             $datas .=   $expense12;
             $datas .=   '</td>';

             $datas .=   '</tr>';
            }
         }
         }



     }




  //   =========================== /Liability




  //   =========================== net income


  $datas .=   '<tr>';
  $datas .=   '<th class="text-right"> Total Liability';
  $datas .=   '</th>';
  $datas .=   '<th>';
  $datas .=   $totalExpense;
  $datas .=   '</th>';
  $datas .=   '</tr>';


  //   =========================== /net income
        }
            return [
                'voucherInformationHeadNameForLadger' => $datas,
            ];

    }



    public function getChartOfAccountBalance()
    {

        if(Auth::guard('admin')->check()){

            $select_COA = chartOfAccount::orderBy('headCode','ASC')->get();
            $datas =  '';
            $today = date('Y-m-d');



            foreach($select_COA as $coaCode){

                $headGroupType = $coaCode['headGroupType'];
                $headLevel = $coaCode['headLavel'];
                $headCode = $coaCode['headCode'];

                if($headGroupType<5){
                    $datas .= '<tr class="alert-warning" style="font-weight:bold;">';
                }
                else {
                    $datas .= '<tr style="">';
                }


                $datas .=  '<td>';

                 if($headLevel==3){
                    $datas .=   '&nbsp;&nbsp;&nbsp;|-- ';
                }
                else if($headLevel==4){
                    $datas .=   '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- ';
                }
                else if($headLevel==5){
                    $datas .=   '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- ';
                }
                else if($headLevel==6){
                    $datas .=   '
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    |-- ';
                }
                else if($headLevel==7){
                    $datas .=   '
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    |-- ';
                }
                $datas .=  $coaCode['headName'];
                $datas .=   '</td>';
                $datas .=   '<td>';

                if($headGroupType<5){}else{

                    if(ChartOfAccountBalance::where('accountCode',"$headCode")->where('shopId',Auth::user()->shopId)->exists()){
                        $datas .= ChartOfAccountBalance::where('accountCode',"$headCode")->where('shopId',Auth::user()->shopId)->first()->debitAmount;
                    }else{
                        $datas .= 0;
                    }
                 }

                $datas .=   '</td>';
                $datas .=   '<td>';

                if($headGroupType<5){}else{

                    if(ChartOfAccountBalance::where('accountCode',"$headCode")->where('shopId',Auth::user()->shopId)->exists()){
                        $datas .= ChartOfAccountBalance::where('accountCode',"$headCode")->where('shopId',Auth::user()->shopId)->first()->creditAmount;
                    }else{
                        $datas .= 0;
                    }
                 }

                $datas .=   '</td>';
                $datas .=   '<td>';

                if($headGroupType<5){}else{

                    if(ChartOfAccountBalance::where('accountCode',"$headCode")->where('shopId',Auth::user()->shopId)->exists()){
                        $datas .= ChartOfAccountBalance::where('accountCode',"$headCode")->where('shopId',Auth::user()->shopId)->first()->balanceAmount;
                    }else{
                        $datas .= 0;
                    }
                 }

                $datas .=   '</td>';


                $datas .=   '</tr>';
            }
        }
            return [
                'voucherInformationHeadNameForLadger' => $datas,
            ];

    }


    public function getCashAccountBalance()
    {

        if(Auth::guard('admin')->check()){

            $generalCashCode = AccountSetup::where('placementType',28)->where('headName',107)->first()->headCode;
            $pettyCashCode = AccountSetup::where('placementType',28)->where('headName',108)->first()->headCode;

            $select_COA = chartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->whereIn('headCode',[$generalCashCode,$pettyCashCode])->orderBy('headCode','ASC')->get();
            $datas =  '';

            foreach($select_COA as $coaCode){

                $headCode = $coaCode['headCode'];

                if(ChartOfAccountBalance::where('shopId',Auth::user()->shopId)
                ->where('accountCode',$headCode)->first()){
                    $debitAmount = abs(ChartOfAccountBalance::where('shopId',Auth::user()->shopId)
                ->where('accountCode',$headCode)->first()->debitAmount);
                }else{
                    $debitAmount = 0;
                }
                if(ChartOfAccountBalance::where('shopId',Auth::user()->shopId)
                ->where('accountCode',$headCode)->first()){
                    $creditAmount = abs(ChartOfAccountBalance::where('shopId',Auth::user()->shopId)
                ->where('accountCode',$headCode)->first()->creditAmount);
                }else{
                    $creditAmount = 0;
                }
                if(ChartOfAccountBalance::where('shopId',Auth::user()->shopId)
                ->where('accountCode',$headCode)->first()){
                    $balanceAmount = ChartOfAccountBalance::where('shopId',Auth::user()->shopId)
                ->where('accountCode',$headCode)->first()->balanceAmount;
                }else{
                    $balanceAmount = 0;
                }



                $datas .= '<tr>';

                $datas .=  '<td>';
                $datas .=  $coaCode['headName'];
                $datas .=  '</td>';

                $datas .=  '<td>';
                    if($debitAmount){
                        $datas .=  $debitAmount;
                    }else{
                        $datas .=  0;
                    }
                $datas .=  '</td>';

                $datas .=  '<td>';
                    if($creditAmount){
                        $datas .=  $creditAmount;
                    }else{
                        $datas .=  0;
                    }
                $datas .=  '</td>';

                $datas .=  '<td>';
                    if($balanceAmount){
                        $datas .=  $balanceAmount;
                    }else{
                        $datas .=  0;
                    }
                $datas .=  '</td>';

                $datas .=  '<td>';
                $datas .=  '<a href="/cashBankLadger'.$headCode.'" class="btn btn-primary"> Ladger </a>';
                $datas .=  '</td>';

                $datas .=  '</tr>';

            }

        }
            return [
                'voucherInformationHeadNameForLadger' => $datas,
            ];

    }

    public function incomeSummary()
    {

        if(Auth::guard('admin')->check()){


        //   =========================== income
            $select_COA = chartOfAccount::where('headCode','LIKE','3%')->orderBy('headCode','ASC')->get();
            $datas =  '';
            $today = date('Y-m-d');


            $totalIncome = 0;
            foreach($select_COA as $coaCode){

                $headGroupType = $coaCode['headGroupType'];
                $headLevel = $coaCode['headLavel'];
                $headLevel1 = $headLevel+1;
                $headCode = $coaCode['headCode'];
                $headCode1 = $coaCode['headCode'];



                if(ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headLavel',$headLevel1)->where('pre_code',$headCode)->exists()){


                    $income =  0;
                    $income1 = 0;


                    if(voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->exists()){
                        $income = voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->sum('voucherAmount');
                        $income1 += $income;
                    }
                    if(voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->exists()){
                        $income = voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->sum('voucherAmount');
                        $income1 -= $income;
                    }


                $datas .= '<tr class="" style="font-weight:bold;"  onclick="showSubHeadCodeIncomeSummery('.$headCode.')">';

                $datas .=  '<td>';

                $datas .=  $coaCode['headName'];
                $datas .=   '</td>';
                $datas .=   '<td>';
                $datas .=  abs($income1);
                $datas .=   '</td>';

                $datas .=   '<td>';
                $datas .=   '</td>';

                $datas .=   '</tr>';


                if($headGroupType==4){
                    $income = 0;
                $select_COAs = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('pre_code',$headCode)->orderBy('headCode','ASC')->get();
                foreach($select_COAs as $select_COA){
                    $headCode1 = $select_COA['headCode'];

                    $incomeAmount = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->sum('voucherAmount');
                    if($incomeAmount){
                    $datas .=   '<tr style="display:none;" class="clk2ShowIncomeSummery-'.$headCode.'">';
                    $datas .=   '<td>';
                    $datas .=  $select_COA['headName'];
                    $datas .=   '</td>';
                    $datas .=   '<td>';
                    $income = $incomeAmount;
                    $totalIncome += $income;
                    $datas .=   $income;
                    $datas .=   '</td>';

                    $datas .=   '<td>';
                    $datas .=   '</td>';

                    $datas .=   '</tr>';
                    }
                }
            }
            }
            }

            $datas .=   '<tr>';
            $datas .=   '<th class="text-right"> Total Income';
            $datas .=   '</th>';
            $datas .=   '<th>';
            $datas .=   $totalIncome;
            $datas .=   '</th>';
            $datas .=   '<td>';
            $datas .=   '</td>';
            $datas .=   '</tr>';


         //   =========================== /income
        }
            return [
                'voucherInformationHeadNameForLadger' => $datas,
            ];

    }

    public function incomeSummaryOld()
    {

        if(Auth::guard('admin')->check()){


        //   =========================== income
            $select_COA = chartOfAccount::where('headCode','LIKE','3%')->orderBy('headCode','ASC')->get();
            $datas =  '';
            $today = date('Y-m-d');


            $totalIncome = 0;
            foreach($select_COA as $coaCode){

                $headGroupType = $coaCode['headGroupType'];
                $headLevel = $coaCode['headLavel'];
                $headCode = $coaCode['headCode'];


                    $datas .= '<tr class="alert-warning" style="font-weight:bold;">';

                $datas .=  '<td>';

                 if($headLevel==3){
                    $datas .=   '&nbsp;&nbsp;&nbsp;|-- ';
                }
                else if($headLevel==4){
                    $datas .=   '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- ';
                }
                else if($headLevel==5){
                    $datas .=   '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- ';
                }
                else if($headLevel==6){
                    $datas .=   '
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    |-- ';
                }
                else if($headLevel==7){
                    $datas .=   '
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    |-- ';
                }
                $datas .=  $coaCode['headName'];
                $datas .=   '</td>';
                $datas .=   '<td>';
                $datas .=  '';
                $datas .=   '</td>';

                $datas .=   '<td>';
                $datas .=   '</td>';

                $datas .=   '</tr>';


                if($headGroupType==4){
                    $income = 0;
                $select_COAs = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('pre_code',$headCode)->orderBy('headCode','ASC')->get();
                foreach($select_COAs as $select_COA){
                    $headCode1 = $select_COA['headCode'];

                    $incomeAmount = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->sum('voucherAmount');
                    if($incomeAmount){
                    $datas .=   '<tr>';
                    $datas .=   '<td>';
                    $datas .=  $select_COA['headName'];
                    $datas .=   '</td>';
                    $datas .=   '<td>';
                    $income = $incomeAmount;
                    $totalIncome += $income;
                    $datas .=   $income;
                    $datas .=   '</td>';

                    $datas .=   '<td>';
                    $datas .=   '</td>';

                    $datas .=   '</tr>';
                    }
                }
            }
            }

            $datas .=   '<tr>';
            $datas .=   '<th class="text-right"> Total Income';
            $datas .=   '</th>';
            $datas .=   '<th>';
            $datas .=   $totalIncome;
            $datas .=   '</th>';
            $datas .=   '<td>';
            $datas .=   '</td>';
            $datas .=   '</tr>';


         //   =========================== /income
        }
            return [
                'voucherInformationHeadNameForLadger' => $datas,
            ];

    }

    public function incomeSummarySearch(Request $request)
            {

                if(Auth::guard('admin')->check()){


                //   =========================== income


                    $select_COA = chartOfAccount::query();
                    $select_COA = $select_COA->where('headCode','LIKE','3%');

                      if($request->mainHead){
                        $select_COA = $select_COA->where('headCode','LIKE',$request->mainHead.'%');
                    }


                    $select_COA = $select_COA->orderBy('headCode','ASC');
                    $select_COA = $select_COA->get();


                    $datas =  '';


                    $totalIncome = 0;
                    foreach($select_COA as $coaCode){

                        $headGroupType = $coaCode['headGroupType'];
                        $headLevel = $coaCode['headLavel'];
                        $headCode = $coaCode['headCode'];


                        $datas .= '<tr class="alert-warning" style="font-weight:bold;">';

                        $datas .=  '<td>';

                        if($headLevel==3){
                            $datas .=   '&nbsp;&nbsp;&nbsp;|-- ';
                        }
                        else if($headLevel==4){
                            $datas .=   '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- ';
                        }
                        else if($headLevel==5){
                            $datas .=   '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- ';
                        }
                        else if($headLevel==6){
                            $datas .=   '
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            |-- ';
                        }
                        else if($headLevel==7){
                            $datas .=   '
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            |-- ';
                        }
                        $datas .=  $coaCode['headName'];
                        $datas .=   '</td>';
                        $datas .=   '<td>';
                        $datas .=  '';
                        $datas .=   '</td>';

                        $datas .=   '<td>';
                        $datas .=   '</td>';

                        $datas .=   '</tr>';


                        if($headGroupType==4){
                            $income = 0;

                        $select_COAs = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('pre_code',$headCode)->orderBy('headCode','ASC')->get();

                        foreach($select_COAs as $select_COA){
                            $headCode1 = $select_COA['headCode'];


                            if($request->voucherDate){
                                $incomeAmount = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('voucherDate',$request->voucherDate)->where('accountsCode',$headCode1)->sum('voucherAmount');
                            }
                            else{
                                $incomeAmount = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->sum('voucherAmount');
                            }


                            if($incomeAmount){
                            if($select_COA['headCode'] == $request->subHead){
                            $datas .=   '<tr>';
                            $datas .=   '<td>';
                            $datas .=  $select_COA['headName'];
                            $datas .=   '</td>';
                            $datas .=   '<td>';
                            $income = $incomeAmount;
                            $totalIncome += $income;
                            $datas .=   $income;
                            $datas .=   '</td>';

                            $datas .=   '<td>';
                            $datas .=   '</td>';

                            $datas .=   '</tr>';
                            }
                            else{
                            $datas .=   '<tr>';
                            $datas .=   '<td>';
                            $datas .=  $select_COA['headName'];
                            $datas .=   '</td>';
                            $datas .=   '<td>';
                            $income = $incomeAmount;
                            $totalIncome += $income;
                            $datas .=   $income;
                            $datas .=   '</td>';

                            $datas .=   '<td>';
                            $datas .=   '</td>';

                            $datas .=   '</tr>';
                            }
                            }
                        }
                    }
                    }

                    $datas .=   '<tr>';
                    $datas .=   '<th class="text-right"> Total Income';
                    $datas .=   '</th>';
                    $datas .=   '<th>';
                    $datas .=   $totalIncome;
                    $datas .=   '</th>';
                    $datas .=   '<td>';
                    $datas .=   '</td>';
                    $datas .=   '</tr>';


                 //   =========================== /income
                }
                    return [
                        'voucherInformationHeadNameForLadger' => $datas,
                    ];

            }


    public function trialBalance()
    {

        if(Auth::guard('admin')->check()){

            $select_COA = chartOfAccount::orderBy('headCode','ASC')->get();
            $datas =  '';
            $today = date('Y-m-d');
            // $today = '2021-09-21';


            $totaldr = 0;
            $totalcr = 0;
            foreach($select_COA as $coaCode){

                $headGroupType = $coaCode['headGroupType'];
                $headLevel = $coaCode['headLavel'];
                $headLevel1 = $coaCode['headLavel']+1;
                $headCode = $coaCode['headCode'];
                $headCode1 = $coaCode['headCode'];
                $dr_cr = $coaCode['dr_cr'];

                if(ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headLavel',$headLevel1)->where('pre_code',$headCode)->exists()){

                    $income =  0;
                    $income1 = 0;


                    if(voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->exists()){
                        $income = voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->sum('voucherAmount');
                        $income1 += $income;
                    }
                    if(voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->exists()){
                        $income = voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->sum('voucherAmount');
                        $income1 -= $income;
                    }

                    if(1){
                    $datas .=   '<tr class="" style="font-weight:bold;"  onclick="showSubHeadCodeTrialBalance('.$headCode.')">';
                    $datas .=   '<td>';
                    $datas .=  $coaCode['headName'];
                    $datas .=   '</td>';
                    $datas .=   '<td>';
                        if($dr_cr==1){
                            $datas .=   abs($income1);
                            $totaldr += abs($income1);
                        }
                    $datas .=   '</td>';
                    $datas .=   '<td>';
                        if($dr_cr==2){
                            $datas .=  abs($income1);
                            $totalcr += abs($income1);
                        }
                    $datas .=   '</td>';

                    $datas .=   '</tr>';
                }


                if($headGroupType==4){

                $select_COAs = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('pre_code',$headCode)->orderBy('headCode','ASC')->get();
                foreach($select_COAs as $select_COA){
                    $headCode1 = $select_COA['headCode'];
                    $headGroupId1 = $select_COA['headGroupId'];
                    $dr_cr = $select_COA['dr_cr'];

                    $income =  0;
                    $income1 = 0;

                    if(voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->exists()){
                        $income = voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->sum('voucherAmount');

                        $income1 += $income;
                    }

                    if(voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->exists()){
                        $income = voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->sum('voucherAmount');

                        $income1 -= $income;
                    }

                    if($income1){
                        $datas .=   '<tr style="display:none;" class="clk2ShowTrialBalance-'.$headCode.'">';
                    $datas .=   '<td>';
                    $datas .=  $select_COA['headName'];
                    $datas .=   '</td>';
                    $datas .=   '<td>';
                        if($dr_cr==1){
                            $datas .=   abs($income1);
                        }
                    $datas .=   '</td>';
                    $datas .=   '<td>';
                        if($dr_cr==2){
                            $datas .=  abs($income1);
                        }
                    $datas .=   '</td>';

                    $datas .=   '</tr>';
                }
                }
            }
        }
            }
            $datas .= '<tr>';
            // $datas .= '<td>';
            // $datas .= '</td>';
            $datas .= '<td>';
            $datas .= '</td>';
            $datas .= '<th>';
            $datas .= $totaldr;
            $datas .= '</th>';
            $datas .= '<th>';
            $datas .= $totalcr;
            $datas .= '</th>';
            $datas .= '</tr>';
        }
            return [
                'voucherInformationHeadNameForLadger' => $datas,
            ];

    }

    public function trialBalanceOld()
    {

        if(Auth::guard('admin')->check()){

            $select_COA = chartOfAccount::orderBy('headCode','ASC')->get();
            $datas =  '';
            $today = date('Y-m-d');
            // $today = '2021-09-21';


            $totaldr = 0;
            $totalcr = 0;
            foreach($select_COA as $coaCode){

                $headGroupType = $coaCode['headGroupType'];
                $headLevel = $coaCode['headLavel'];
                $headCode = $coaCode['headCode'];


                    $datas .= '<tr class="alert-warning" style="font-weight:bold;">';

                $datas .=  '<td>';
                if($headLevel==1){ $hName = '<center><span class="badge badge-primary">'.$coaCode['headName'].'</span></center>';}else{ $hName = $coaCode['headName'];}
                $datas .=  $hName;
                $datas .=   '</td>';
                $datas .=   '<td>';
                $datas .=  '';
                $datas .=   '</td>';

                $datas .=   '<td>';
                $datas .=   '</td>';

                $datas .=   '</tr>';


                if($headGroupType==4){

                $select_COAs = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('pre_code',$headCode)->orderBy('headCode','ASC')->get();
                foreach($select_COAs as $select_COA){
                    $headCode1 = $select_COA['headCode'];
                    $headGroupId1 = $select_COA['headGroupId'];
                    $dr_cr = $select_COA['dr_cr'];

                    $income =  0;
                    $income1 = 0;

                    if(voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->exists()){
                        $income = voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->sum('voucherAmount');

                        $income1 += $income;
                    }

                    if(voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->exists()){
                        $income = voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode',$headCode1)->sum('voucherAmount');

                        $income1 -= $income;
                    }

                    if($income1){
                    $datas .=   '<tr>';
                    $datas .=   '<td>';
                    $datas .=  $select_COA['headName'];
                    $datas .=   '</td>';
                    $datas .=   '<td>';
                        if($dr_cr==1){
                            $datas .=   abs($income1);
                            $totaldr += abs($income1);
                        }
                    $datas .=   '</td>';
                    $datas .=   '<td>';
                        if($dr_cr==2){
                            $datas .=  abs($income1);
                            $totalcr += abs($income1);
                        }
                    $datas .=   '</td>';

                    $datas .=   '</tr>';
                }
                }
            }

            }
            $datas .= '<tr>';
            // $datas .= '<td>';
            // $datas .= '</td>';
            $datas .= '<td>';
            $datas .= '</td>';
            $datas .= '<th>';
            $datas .= $totaldr;
            $datas .= '</th>';
            $datas .= '<th>';
            $datas .= $totalcr;
            $datas .= '</th>';
            $datas .= '</tr>';
        }
            return [
                'voucherInformationHeadNameForLadger' => $datas,
            ];

    }


    public function trialBalanceSearch(Request $request)
    {

        if(Auth::guard('admin')->check()){

            $select_COA = chartOfAccount::query();


            if($request->mainHead){
                $select_COA = $select_COA->where('headCode',$request->mainHead);
            }

            $select_COA = $select_COA->orderBy('headCode','ASC')->get();


            $datas =  '';
            $today = $request->voucherDate;
            // $today = '2021-09-21';


            $totaldr = 0;
            $totalcr = 0;
            foreach($select_COA as $coaCode){

                $headGroupType = $coaCode['headGroupType'];
                $headLevel = $coaCode['headLavel'];
                $headCode = $coaCode['headCode'];


                    $datas .= '<tr class="alert-warning" style="font-weight:bold;">';

                $datas .=  '<td>';
                if($headLevel==1){ $hName = '<center><span class="badge badge-primary">'.$coaCode['headName'].'</span></center>';}else{ $hName = $coaCode['headName'];}
                $datas .=  $hName;
                $datas .=   '</td>';
                $datas .=   '<td>';
                $datas .=  '';
                $datas .=   '</td>';

                $datas .=   '<td>';
                $datas .=   '</td>';

                $datas .=   '</tr>';


                if($headGroupType==4){


                    if($request->subHead){
                        $select_COAs = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$request->subHead)->orderBy('headCode','ASC')->get();
                    }
                    else{
                        $select_COAs = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('pre_code',$headCode)->orderBy('headCode','ASC')->get();
                    }

                foreach($select_COAs as $select_COA){
                    $headCode1 = $select_COA['headCode'];
                    $headGroupId1 = $select_COA['headGroupId'];
                    $dr_cr = $select_COA['dr_cr'];


                    $amount =  0;
                    $amount1 = 0;

                    if(voucherInformation::where('shopId',Auth::user()->shopId)->where('accountCodeDebit',"$headCode1")->where('voucherDate','LIKE',"$today%")->exists()){
                        $amount = voucherInformation::where('shopId',Auth::user()->shopId)->where('accountCodeDebit',"$headCode1")->where('voucherDate','LIKE',"$today%")->sum('debitAmount');

                    }
                    if(voucherInformation::where('shopId',Auth::user()->shopId)->where('accountCodeCredit',"$headCode1")->where('voucherDate','LIKE',"$today%")->exists()){
                        $amount1 = voucherInformation::where('shopId',Auth::user()->shopId)->where('accountCodeCredit',"$headCode1")->where('voucherDate','LIKE',"$today%")->sum('creditAmount');

                    }

                    if($amount || $amount1){
                    $datas .=   '<tr>';
                    $datas .=   '<td>';
                    $datas .=  $select_COA['headName'];
                    $datas .=   '</td>';
                    $datas .=   '<td>';
                        if($dr_cr==1){
                            $datas .=   abs($amount);
                            $totaldr += abs($amount);
                        }
                    $datas .=   '</td>';
                    $datas .=   '<td>';
                        if($dr_cr==2){
                            $datas .=  abs($amount1);
                            $totalcr += abs($amount1);
                        }
                    $datas .=   '</td>';

                    $datas .=   '</tr>';




                    // $datas .=   $amount; $totaldr+=$amount;
                    // $datas .=   '</td>';
                    // $datas .=   '<td>';
                    // $datas .=   $amount1;$totalcr += $amount1;
                    // $datas .=   '</td>';

                    // $datas .=   '</tr>';
                }
                }
            }

            }
            $datas .= '<tr>';
            // $datas .= '<td>';
            // $datas .= '</td>';
            $datas .= '<td>';
            $datas .= '</td>';
            $datas .= '<th>';
            $datas .= $totaldr;
            $datas .= '</th>';
            $datas .= '<th>';
            $datas .= $totalcr;
            $datas .= '</th>';
            $datas .= '</tr>';
        }
            return [
                'voucherInformationHeadNameForLadger' => $datas,
            ];

    }







    public function receiveSummaryList($id)
    {

        if(Auth::guard('admin')->check()){

        $today = date('Y-m-d');

        $select_receiveSummary = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
        ->where('type',$id)
        ->where('voucherDate','LIKE',$today.'%')
        ->orderBy('id','DESC')->get();

        $table_data = '';
        $i=1;
        $total=0;
        foreach($select_receiveSummary as $receiveSummary){

            $table_data .= '<tr>';
            $table_data .= '<td>';
            $table_data .= $i;
            $table_data .= '</td>';

            $table_data .= '<td>';
            $table_data .= date("d M Y", strtotime($receiveSummary['voucherDate']));
            $table_data .= '</td>';

            $table_data .= '<td>';
            $table_data .= chartOfAccount::where('headCode','=',$receiveSummary['accountHeadCode'])->first()->headName;
            $table_data .= '</td>';

            $table_data .= '<td>';
            $table_data .= ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode','=',$receiveSummary['accountCode'])->first()->headName;
            $table_data .= '</td>';

            $table_data .= '<td>';
            $table_data .= $receiveSummary['cash'];
            $table_data .= '</td>';

            $table_data .= '<td>';
            $table_data .= $receiveSummary['bank'];
            $table_data .= '</td>';

            $table_data .= '<td>';
            $table_data .= $total += $receiveSummary['cash']+$receiveSummary['bank'];
            $table_data .= '</td>';

            $table_data .= '<td>';
            $table_data .= '<a
            href="viewVoucher'.$receiveSummary['voucherId'].'"
            class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"
          ><i class="fa fa-eye"></i> View </a>';
            $table_data .= '</td>';


            $table_data .= '</tr>';


        $i++;
        }

        $voucherTypeList = voucherType::get();
        $chartOfAccountList = ChartOfAccount::get();
        $chartOfAccountRegisterList = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->get();


        }

        return [
            'receiveSummary' => $table_data,
            'voucherTypeList' => $voucherTypeList,
            'chartOfAccountList' => $chartOfAccountList,
            'chartOfAccountRegisterList' => $chartOfAccountRegisterList,
        ];

    }



    public function getGeneralLadgerSearch(Request $request)
    {
        if(Auth::guard('admin')->check()){


            $today = $request->voucherDate;


            $datas = voucherInformationReport::query();
            $datas = $datas->distinct();
            $datas = $datas->where('shopId',Auth::user()->shopId);
            if($request->mainHead){
                $datas = $datas->where('accountsHeadCode',$request->mainHead);
            }
            if($request->subHead){
                $datas = $datas->where('accountsCode',$request->subHead);
            }
            if($request->voucherNo){
                $datas = $datas->where('voucherNo',$request->voucherNo);
            }
            if($request->voucherDate){
                $datas = $datas->where('voucherDate','LIKE',$request->voucherDate.'%');
            }
            if($request->voucherType){
                $datas = $datas->where('voucherType',$request->voucherType);
            }
            $datas = $datas->get('accountsCode');





            $voucherInformationHeadNameForLadger = '';

        foreach($datas as $data){


            $headName1 = '';
            if(ChartOfAccountRegister::where('headCode',$data['accountsCode'])->whereIn('shopId',[0,Auth::user()->shopId])->exists()){
                $headName1 = ChartOfAccountRegister::where('headCode',$data['accountsCode'])->whereIn('shopId',[0,Auth::user()->shopId])->first()->headName;
            }

            $word = $request->mainHead;
                $mystring = $data['accountsCode'];

            if(preg_match("/{$word}/i", $mystring)){

            $voucherInformationHeadNameForLadger .= '<tr> <td colspan="7"> <center> <b>';
            $voucherInformationHeadNameForLadger .= $headName1;
            $dr_cr_type = $data['type'];
            $pro = substr($data['accountsCode'],0,1);
            $voucherInformationHeadNameForLadger .= '';
            $voucherInformationHeadNameForLadger .= '</b> </center> </td></tr>';

            $type = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$data['accountsCode'])->first()->type;
            $voucherUniqueId = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$data['accountsCode'])->first()->voucherUniqueId;


            $select_another_unique_nos = voucherInformationReport::query();
            $select_another_unique_nos = $select_another_unique_nos->where('shopId',Auth::user()->shopId)->distinct();

            if($request->voucherDate){
                $select_another_unique_nos = $select_another_unique_nos->where('voucherDate','LIKE',$today.'%');
            }

            if($request->voucherType){
                $select_another_unique_nos = $select_another_unique_nos->where('voucherType',$request->voucherType);
            }

            if($request->voucherNo){
                $select_another_unique_nos = $select_another_unique_nos->where('voucherNo',$request->voucherNo);
            }

            $select_another_unique_nos = $select_another_unique_nos->where('accountsCode',$data['accountsCode']);
            $select_another_unique_nos = $select_another_unique_nos->get('voucherUniqueId');

            $total = 0;
            foreach($select_another_unique_nos as $select_another_unique_no){

            $select_anothers = voucherInformationReport::query();
            $select_anothers = $select_anothers->where('shopId',Auth::user()->shopId);
            $select_anothers = $select_anothers->where('voucherDate','LIKE',$today.'%');
            $select_anothers = $select_anothers->where('voucherUniqueId',$select_another_unique_no['voucherUniqueId']);
            $select_anothers = $select_anothers->whereNotIn('accountsCode',[$data['accountsCode']])->get();


            foreach($select_anothers as $select_another){

                $headName = '';
                if(chartOfAccountRegister::where('headCode',$select_another['accountsCode'])->whereIn('shopId',[0,Auth::user()->shopId])->exists()){
                    $headName = chartOfAccountRegister::where('headCode',$select_another['accountsCode'])->whereIn('shopId',[0,Auth::user()->shopId])->first()->headName;
                }
                $voucherInformationHeadNameForLadger .= '<tr>
                <td> '.substr($select_another['voucherDate'],0,10).'  </td>
                <td> '.$select_another['voucherNo'].'  </td>
                <td> '.$headName.
                '</td> ';
                $type = $select_another['type'];



                if($type == 1){

                    if($pro==1){
                        $total -= $select_another['voucherAmount'];
                    }
                    else if($pro==2){
                        $total += $select_another['voucherAmount'];
                    }
                    else if($pro==3){
                        $total += $select_another['voucherAmount'];
                    }
                    else if($pro==4){
                        $total -= $select_another['voucherAmount'];
                    }
                    else if($pro==5){
                        $total -= $select_another['voucherAmount'];
                    }

                    $voucherInformationHeadNameForLadger .= '<td>  </td>
                    <td> '.$select_another['voucherAmount'].'  </td>
                    ';

                }else{

                    if($pro==1){
                        $total += $select_another['voucherAmount'];
                    }
                    else if($pro==2){
                        $total -= $select_another['voucherAmount'];
                    }
                    else if($pro==3){
                        $total -= $select_another['voucherAmount'];
                    }
                    else if($pro==4){
                        $total += $select_another['voucherAmount'];
                    }
                    else if($pro==5){
                        $total += $select_another['voucherAmount'];
                    }

                    $voucherInformationHeadNameForLadger .= '
                    <td> '.$select_another['voucherAmount'].' </td>
                    <td> </td>
                    ';

                }

                if($dr_cr_type==1){
                    $voucherInformationHeadNameForLadger .= '
                    <td>'.abs($total).'</td>
                    <td>  </td>
                    ';
                }
                else{
                    $voucherInformationHeadNameForLadger .= '
                    <td>  </td>
                    <td>'.abs($total).'</td>
                    ';
                }
                $voucherInformationHeadNameForLadger .= '</tr>';


                }
                }
            }
        }




        // $voucherInformationHeadNameForLadger .= '<tr>
        //  <td> 05 May 2021  </td>
        //  <td> CR-01-05/21  </td>
        //  <td> General Cash   </td>
        //  <td> -  </td>
        //  <td>  	.00   </td>
        //  <td>  	5000   </td>
        //  <td>  .00  </td>
        //  </tr>';


    } // auth condition

        return [
            'voucherInformationHeadNameForLadger' => $voucherInformationHeadNameForLadger,
        ];

    }


    public function getCashBankLadgerSearch(Request $request)
    {
        if(Auth::guard('admin')->check()){


            $today = $request->voucherDate;

            $cashAccountCode = AccountSetup::where('placementType','9')->where('headName','100')->first()->headCode;
            $datas = voucherInformationReport::query();
            $datas = $datas->distinct();
            $datas = $datas->where('shopId',Auth::user()->shopId);
            if($request->mainHead){
                $datas = $datas->where('accountsHeadCode',$request->mainHead);
            }
            if($request->subHead){
                $datas = $datas->where('accountsCode',$request->subHead);
            }
            else{
                $datas = $datas->where('accountsCode',$cashAccountCode);
            }
            if($request->voucherNo){
                $datas = $datas->where('voucherNo',$request->voucherNo);
            }
            if($request->voucherDate){
                $datas = $datas->where('voucherDate','LIKE',$request->voucherDate.'%');
            }
            if($request->voucherType){
                $datas = $datas->where('voucherType',$request->voucherType);
            }
            $datas = $datas->get('accountsCode');





            $voucherInformationHeadNameForLadger = '';

        foreach($datas as $data){


            $headName1 = '';
            if(ChartOfAccountRegister::where('headCode',$data['accountsCode'])->whereIn('shopId',[0,Auth::user()->shopId])->exists()){
                $headName1 = ChartOfAccountRegister::where('headCode',$data['accountsCode'])->whereIn('shopId',[0,Auth::user()->shopId])->first()->headName;
            }

            $word = $request->mainHead;
                $mystring = $data['accountsCode'];

            if(preg_match("/{$word}/i", $mystring)){

            $voucherInformationHeadNameForLadger .= '<tr> <td colspan="7"> <center> <b>';
            $voucherInformationHeadNameForLadger .= $headName1;
            $dr_cr_type = $data['type'];
            $pro = substr($data['accountsCode'],0,1);
            $voucherInformationHeadNameForLadger .= '';
            $voucherInformationHeadNameForLadger .= '</b> </center> </td></tr>';

            $type = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$data['accountsCode'])->first()->type;
            $voucherUniqueId = voucherInformationReport::where('shopId',Auth::user()->shopId)->where('accountsCode',$data['accountsCode'])->first()->voucherUniqueId;


            $select_another_unique_nos = voucherInformationReport::query();
            $select_another_unique_nos = $select_another_unique_nos->where('shopId',Auth::user()->shopId)->distinct();

            if($request->voucherDate){
                $select_another_unique_nos = $select_another_unique_nos->where('voucherDate','LIKE',$today.'%');
            }

            if($request->voucherType){
                $select_another_unique_nos = $select_another_unique_nos->where('voucherType',$request->voucherType);
            }

            if($request->voucherNo){
                $select_another_unique_nos = $select_another_unique_nos->where('voucherNo',$request->voucherNo);
            }

            $select_another_unique_nos = $select_another_unique_nos->where('accountsCode',$data['accountsCode']);
            $select_another_unique_nos = $select_another_unique_nos->get('voucherUniqueId');

            $total = 0;
            foreach($select_another_unique_nos as $select_another_unique_no){

            $select_anothers = voucherInformationReport::query();
            $select_anothers = $select_anothers->where('shopId',Auth::user()->shopId);
            $select_anothers = $select_anothers->where('voucherDate','LIKE',$today.'%');
            $select_anothers = $select_anothers->where('voucherUniqueId',$select_another_unique_no['voucherUniqueId']);
            $select_anothers = $select_anothers->whereNotIn('accountsCode',[$data['accountsCode']])->get();


            foreach($select_anothers as $select_another){

                $headName = '';
                if(chartOfAccountRegister::where('headCode',$select_another['accountsCode'])->whereIn('shopId',[0,Auth::user()->shopId])->exists()){
                    $headName = chartOfAccountRegister::where('headCode',$select_another['accountsCode'])->whereIn('shopId',[0,Auth::user()->shopId])->first()->headName;
                }
                $voucherInformationHeadNameForLadger .= '<tr>
                <td> '.substr($select_another['voucherDate'],0,10).'  </td>
                <td> '.$select_another['voucherNo'].'  </td>
                <td> '.$headName.
                '</td> ';
                $type = $select_another['type'];



                if($type == 1){

                    if($pro==1){
                        $total -= $select_another['voucherAmount'];
                    }
                    else if($pro==2){
                        $total += $select_another['voucherAmount'];
                    }
                    else if($pro==3){
                        $total += $select_another['voucherAmount'];
                    }
                    else if($pro==4){
                        $total -= $select_another['voucherAmount'];
                    }
                    else if($pro==5){
                        $total -= $select_another['voucherAmount'];
                    }

                    $voucherInformationHeadNameForLadger .= '<td>  </td>
                    <td> '.$select_another['voucherAmount'].'  </td>
                    ';

                }else{

                    if($pro==1){
                        $total += $select_another['voucherAmount'];
                    }
                    else if($pro==2){
                        $total -= $select_another['voucherAmount'];
                    }
                    else if($pro==3){
                        $total -= $select_another['voucherAmount'];
                    }
                    else if($pro==4){
                        $total += $select_another['voucherAmount'];
                    }
                    else if($pro==5){
                        $total += $select_another['voucherAmount'];
                    }

                    $voucherInformationHeadNameForLadger .= '
                    <td> '.$select_another['voucherAmount'].' </td>
                    <td> </td>
                    ';

                }

                if($dr_cr_type==1){
                    $voucherInformationHeadNameForLadger .= '
                    <td>'.abs($total).'</td>
                    <td>  </td>
                    ';
                }
                else{
                    $voucherInformationHeadNameForLadger .= '
                    <td>  </td>
                    <td>'.abs($total).'</td>
                    ';
                }
                $voucherInformationHeadNameForLadger .= '</tr>';


                }
                }
            }
        }




        // $voucherInformationHeadNameForLadger .= '<tr>
        //  <td> 05 May 2021  </td>
        //  <td> CR-01-05/21  </td>
        //  <td> General Cash   </td>
        //  <td> -  </td>
        //  <td>  	.00   </td>
        //  <td>  	5000   </td>
        //  <td>  .00  </td>
        //  </tr>';


    } // auth condition

        return [
            'voucherInformationHeadNameForLadger' => $voucherInformationHeadNameForLadger,
        ];

    }

    public function getCashRegister($id){

        if($id==1)
        {
            $headCode = AccountSetup::where('placementType',28)->where('headName',107)->first()->headCode;
        }
        else if($id==2)
        {
            $headCode = AccountSetup::where('placementType',28)->where('headName',108)->first()->headCode;
        }

        return [
            'accCode' => $headCode,
        ];
    }

    public function getVoucherCode($id){

        if(Auth::guard('admin')->check()){

        $shortName = voucherType::where('id',$id)->first()->shortName;

        if(voucherInformation::where('voucherType',$id)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->exists()){
        $last_voucher_no = voucherInformation::where('voucherType',$id)->where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->first()->voucherNo;

        $exp = explode('-',$last_voucher_no);
        $ex_last = $exp[1]+1;

        }else{
            $ex_last = 1;
        }

        $num_padded = sprintf("%02d", $ex_last);
        $lastId = $num_padded;
        $date = date('m/y');
        $newCode = $shortName.'-'.$lastId.'-'.$date;
        // $newCode = $last_voucher_no;

        } // auth condition

        return [
            'code' => $newCode,
            'code1' => $ex_last,
        ];
    }
    public function checkAccountCodeInOpening($id){

        if(Auth::guard('admin')->check()){


            if(tmpOpeningVoucher::where('shopId',Auth::user()->shopId)->where('accountCode',$id)->exists()){
                $have=1;
            }else{
                $have = 0;
            }

        }
        return [
            'have' => $have
        ];
    }

    public function checkBalance($id){

        $precode = ChartOfAccountRegister::where('headCode',$id)->first()->pre_code;
        $headAcc = ChartOfAccount::where('headCode',$precode)->get();


        if(chartOfAccountBalance::where('shopId',Auth::user()->shopId)->where('accountCode',$id)->orderBy('id','DESC')->exists())
        {
            $available_balance = chartOfAccountBalance::where('shopId',Auth::user()->shopId)->where('accountCode',$id)->orderBy('id','DESC')->first()->balanceAmount;
        }
        else if(StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$id)->orderBy('id','DESC')->exists())
        {
            $available_balance = StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode',$id)->orderBy('id','DESC')->first()->balanceAmount;
        }
        else
        {
            $available_balance = 0;
        }

        return  [
                    'precode' => $precode,
                    'headAcc' => $headAcc,
                    'available_balance' => $available_balance,
                ];
    }

    public function getVoucherHeadCashbookCode($id){

        if(Auth::guard('admin')->check()){

        if($id == 1){
            $headCode = AccountSetup::where('placementType',15)->where('headName',45)->get('headCode');
            $headCode1 = AccountSetup::where('placementType',15)->where('headName',46)->get('headCode');
        }
       else if($id == 2){
            $headCode = AccountSetup::where('placementType',15)->where('headName',47)->get('headCode');
            $headCode1 = AccountSetup::where('placementType',15)->where('headName',48)->get('headCode');
        }
       else if($id == 3){
            $headCode = AccountSetup::where('placementType',15)->where('headName',49)->get('headCode');
            $headCode1 = AccountSetup::where('placementType',15)->where('headName',50)->get('headCode');
        }
       else if($id == 4){
            $headCode = AccountSetup::where('placementType',15)->where('headName',51)->get('headCode');
            $headCode1 = AccountSetup::where('placementType',15)->where('headName',52)->get('headCode');
        }
       else if($id == 5){
            $headCode = AccountSetup::where('placementType',15)->where('headName',93)->get('headCode');
            $headCode1 = AccountSetup::where('placementType',15)->where('headName',94)->get('headCode');
        }
       else if($id == 6){
            $headCode = AccountSetup::where('placementType',15)->where('headName',51)->get('headCode');
            $headCode1 = AccountSetup::where('placementType',15)->where('headName',52)->get('headCode');
        }
       else if($id == 7){
            $headCode = ChartOfAccount::where('headGroupType',6)->get('headCode');
            $headCode1 = ChartOfAccount::where('headGroupType',1)->get('headCode');
        }


        // $shopIdList = "0,".Auth::user()->id;

        $headCode11List = '';
        $hci1=1;
        $hcc1 = count($headCode);
        $headOfCashBookList = ChartOfAccountRegister::query();
        $headOfCashBookList = $headOfCashBookList->whereIn('shopId',[0,Auth::user()->shopId]);

        $headOfCashBookList = $headOfCashBookList->where(function ($query) use ($headCode,$hci1){
            foreach($headCode as $headCode111){
                 $query->orWhere('headCode','LIKE',$headCode111['headCode'].'%');
                $hci1++;
            }
        });


        // $headOfCashBookList = $headOfCashBookList->whereRaw("shopId IN($shopIdList)");
        $headOfCashBookList = $headOfCashBookList->where('headGroupType', 5);
        $headOfCashBookList = $headOfCashBookList->get();



        $headOfAccountList = ChartOfAccount::query();

        // $hci=1;
        // $hcc = count($headCode1);
        // foreach($headCode1 as $headCode11){

        //     $headOfAccountList = $headOfAccountList->orWhere('headCode','LIKE',$headCode11['headCode'].'%');

        // }


        $headOfAccountList = $headOfAccountList->where(function($query) use ($headCode1)
        {
            $hci=1;
            foreach($headCode1 as $headCode11){
                if($hci==1)
                {
                    $query = $query->where('headCode','LIKE',$headCode11['headCode'].'%');
                }
                else
                {
                    $query = $query->orWhere('headCode','LIKE',$headCode11['headCode'].'%');
                }
                $hci++;
            }
        });
        $headOfAccountList = $headOfAccountList->where('headGroupType',4);
        $headOfAccountList = $headOfAccountList->get();

    } //auth condition
        return [
                'headOfCashBookList' => $headOfCashBookList,
                'headOfAccountList' => $headOfAccountList,
               ];
    }

    public function getVoucherHeadCashbookCodeNew($id){

        if(Auth::guard('admin')->check()){

        if($id == 1){
            $headCode = AccountSetup::where('placementType',15)->where('headName',45)->get('headCode');
            $headCode1 = AccountSetup::where('placementType',15)->where('headName',46)->get('headCode');
        }
       else if($id == 2){
            $headCode = AccountSetup::where('placementType',15)->where('headName',47)->get('headCode');
            $headCode1 = AccountSetup::where('placementType',15)->where('headName',48)->get('headCode');
        }
       else if($id == 3){
            $headCode = AccountSetup::where('placementType',15)->where('headName',49)->get('headCode');
            $headCode1 = AccountSetup::where('placementType',15)->where('headName',50)->get('headCode');
        }
       else if($id == 4){
            $headCode = AccountSetup::where('placementType',15)->where('headName',51)->get('headCode');
            $headCode1 = AccountSetup::where('placementType',15)->where('headName',52)->get('headCode');
        }
       else if($id == 5){
            $headCode = AccountSetup::where('placementType',15)->where('headName',93)->get('headCode');
            $headCode1 = AccountSetup::where('placementType',15)->where('headName',94)->get('headCode');
        }
       else if($id == 6){
            $headCode = AccountSetup::where('placementType',15)->where('headName',51)->get('headCode');
            $headCode1 = AccountSetup::where('placementType',15)->where('headName',52)->get('headCode');
        }
       else if($id == 7){
            $headCode = ChartOfAccount::where('headGroupType',6)->get('headCode');
            $headCode1 = ChartOfAccount::where('headGroupType',1)->get('headCode');
        }


        // $shopIdList = "0,".Auth::user()->id;

        $headCode11List = '';
        $hci1=1;
        $hcc1 = count($headCode);
        $headOfCashBookList = ChartOfAccountRegister::query();
        $headOfCashBookList = $headOfCashBookList->whereIn('shopId',[0,Auth::user()->shopId]);

        $headOfCashBookList = $headOfCashBookList->where(function ($query) use ($headCode,$hci1){
            foreach($headCode as $headCode111){
                 $query->orWhere('headCode','LIKE',$headCode111['headCode'].'%');
                $hci1++;
            }
        });


        // $headOfCashBookList = $headOfCashBookList->whereRaw("shopId IN($shopIdList)");
        $headOfCashBookList = $headOfCashBookList->where('headGroupType', 5);
        $headOfCashBookList = $headOfCashBookList->get();



        $headOfAccountList = ChartOfAccountRegister::query();

        // $hci=1;
        // $hcc = count($headCode1);
        // foreach($headCode1 as $headCode11){

        //     $headOfAccountList = $headOfAccountList->orWhere('headCode','LIKE',$headCode11['headCode'].'%');

        // }


        $headOfAccountList = $headOfAccountList->where(function($query) use ($headCode1)
        {
            $hci=1;
            foreach($headCode1 as $headCode11){
                if($hci==1)
                {
                    $query = $query->where('headCode','LIKE',$headCode11['headCode'].'%');
                }
                else
                {
                    $query = $query->orWhere('headCode','LIKE',$headCode11['headCode'].'%');
                }
                $hci++;
            }
        });
        $headOfAccountList = $headOfAccountList->whereIn('shopId',[0,Auth::user()->shopId]);
        $headOfAccountList = $headOfAccountList->get();
        $msg2 = array();
        foreach($headOfAccountList as $data){

            $msg2[] = array(
                "id" => $data->id,
                "headCode" => $data->headCode,
                "headName" => $data->headName.' = ['.ChartOfAccount::where('headCode',$data->pre_code)->first()->headName.']',
                "pre_code" => $data->pre_code
                );

            }

    } //auth condition
        return [
                'headOfCashBookList' => $headOfCashBookList,
                'headOfAccountList' => $msg2,
               ];
    }

    public function supplierAccountList($id){

        if(Auth::guard('admin')->check()){

        if($id == 1){
            $headCode = AccountSetup::where('placementType',5)->where('headName',17)->get('headCode');
            $headCode1 = AccountSetup::where('placementType',5)->where('headName',17)->get('headCode');
        }
       else if($id == 2){
            $headCode = AccountSetup::where('placementType',7)->where('headName',19)->get('headCode');
            $headCode1 = AccountSetup::where('placementType',7)->where('headName',19)->get('headCode');
        }

        // $shopIdList = "0,".Auth::user()->id;

        $headCode11List = '';
        $hci1=1;
        $hcc1 = count($headCode);
        $headOfCashBookList = ChartOfAccountRegister::query();
        $headOfCashBookList = $headOfCashBookList->whereIn('shopId',[0,Auth::user()->shopId]);

        $headOfCashBookList = $headOfCashBookList->where(function ($query) use ($headCode,$hci1){
            foreach($headCode as $headCode111){
                 $query->orWhere('headCode','LIKE',$headCode111['headCode'].'%');
                $hci1++;
            }
        });


        // $headOfCashBookList = $headOfCashBookList->whereRaw("shopId IN($shopIdList)");
        $headOfCashBookList = $headOfCashBookList->where('headGroupType', 5);
        $headOfCashBookList = $headOfCashBookList->get();



        $headOfAccountList = ChartOfAccountRegister::query();

        // $hci=1;
        // $hcc = count($headCode1);
        // foreach($headCode1 as $headCode11){

        //     $headOfAccountList = $headOfAccountList->orWhere('headCode','LIKE',$headCode11['headCode'].'%');

        // }


        $headOfAccountList = $headOfAccountList->where(function($query) use ($headCode1)
        {
            $hci=1;
            foreach($headCode1 as $headCode11){
                if($hci==1)
                {
                    $query = $query->where('headCode','LIKE',$headCode11['headCode'].'%');
                }
                else
                {
                    $query = $query->orWhere('headCode','LIKE',$headCode11['headCode'].'%');
                }
                $hci++;
            }
        });
        $headOfAccountList = $headOfAccountList->whereIn('shopId',[0,Auth::user()->shopId]);
        $headOfAccountList = $headOfAccountList->get();
        $msg2 = array();
        foreach($headOfAccountList as $data){

            $msg2[] = array(
                "id" => $data->id,
                "headCode" => $data->headCode,
                "headName" => $data->headName.' = ['.ChartOfAccount::where('headCode',$data->pre_code)->first()->headName.']',
                "pre_code" => $data->pre_code
                );

            }

    } //auth condition
        return [
                'headOfCashBookList' => $headOfCashBookList,
                'headOfAccountList' => $msg2,
               ];
    }

    public function getSubHeadOfAccounts($accounts){


        // $cblist = "1,".Auth::user()->id;
        // whereRaw("createBy IN($cblist)")
        if(ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode','LIKE',"$accounts%")
            ->exists()){

            $subHeadList = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode','LIKE',"$accounts%")
            ->get();



            }

            else{
                $subHeadList[] =   array(
                        'headCode' => '',
                        'headName' => 'Result not found.',
                    );
            }

        return  [
                    'subHeadList' => $subHeadList,
                ];
    }

    public function getSubHeadOfAccountsForContraVoucher($vType,$cashbook,$accounts){


        // $cblist = "1,".Auth::user()->id;
        // whereRaw("createBy IN($cblist)")
        if(ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode','LIKE',"$accounts%")
            ->exists()){
        if($vType==5 or $vType==6){
            $subHeadList = ChartOfAccountRegister::
            whereIn('shopId',[0,Auth::user()->shopId])
            ->whereNotIn('headCode',[$cashbook])
            ->where('headCode','LIKE',"$accounts%")
            ->get();
        }
        else{
            $subHeadList = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode','LIKE',"$accounts%")
            ->get();
        }


            }

            else{
                $subHeadList[] =   array(
                        'headCode' => '',
                        'headName' => 'Result not found.',
                    );
            }

        return  [
                    'subHeadList' => $subHeadList,
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

        if(Auth::guard('admin')->check()){

        if($request->voucherType<7){



        $this->validate($request, [
            'voucherType' => 'required',
            'voucherNo' => 'required',
            // 'paymentTo' => 'required',
            // 'mobileNo' => 'required',
            'headOfCashBook' => 'required',
            'headOfAccounts' => 'required|min:1',
            'headOfAccounts' => 'required',
            'subHead' => 'required',
            'voucherAmount' => 'required|numeric|min:1',
            'particular' => 'required',
        ],
        [
            'voucherType.required' => 'Select Voucher Type.',
            'voucherNo.required' => 'Enter Voucher No.',
            // 'paymentTo.required' => 'Enter Person Name.',
            // 'mobileNo.required' => 'Enter Mobile No.',
            'subHead.required' => 'Select Sub Head Code.',
            'headOfCashBook.required' => 'Select Accounts Code.',
            'headOfAccounts.required' => 'Select Accounts Code.',
            'voucherAmount.required' => 'Enter Voucher Amount.',
            'particular.required' => 'Write Particular.',
        ]);



        $voucherUniqueId = time();
        $day = date('d');
        $month = date('m');
        $year = date('Y');


        if($request->voucherType == 1){
            $headCode1 = $request->subHead;
            $headCode2 = $request->headOfCashBook;
        }
        else if($request->voucherType == 2){
            $headCode1 = $request->headOfCashBook;
            $headCode2 = $request->subHead;
        }
        else if($request->voucherType == 3){
            $headCode1 = $request->subHead;
            $headCode2 = $request->headOfCashBook;
        }
        else if($request->voucherType == 4){
            $headCode1 = $request->headOfCashBook;
            $headCode2 = $request->subHead;
        }
        else if($request->voucherType == 5){
            $headCode1 = $request->subHead;
            $headCode2 = $request->headOfCashBook;
        }
        else{
            $headCode1 = $request->headOfCashBook;
            $headCode2 = $request->subHead;
        }


        voucherInformation::insert([
                  'shopId' => Auth::user()->shopId,
                  'branchId' => 0,
                  'voucherDate' => $request->voucherDate,
                  'voucherType' => $request->voucherType,
                  'voucherNo' => $request->voucherNo,
                  'voucherUniqueId' => $voucherUniqueId,
                  'paymentTo' => $request->paymentTo,
                  'mobileNo' => $request->mobileNo,
                  'checkPaymentType' => $request->checkPaymentType,
                  'receiverBankAccountName' => $request->receiverBankAccountName,
                  'receiverBankAccountNo' => $request->receiverBankAccountNo,
                  'chequeNo' => $request->chequeNo,
                  'chequeDate' => $request->chequeDate,

                  'accountsHeadCode' => $request->headOfAccounts,
                  'accountCodeDebit' => $headCode1,
                  'accountCodeCredit' => $headCode2,
                  'debitAmount' => $request->voucherAmount,
                  'creditAmount' => $request->voucherAmount,
                  'voucherAmount' => $request->voucherAmount,

                  'particular' => $request->particular,
                  'day' => $day,
                  'month' => $month,
                  'year' => $year,
                  'createBy' => Auth::user()->id,
                  'created_at' => Carbon::now(),
              ]);



            //   ======================= chart of account balance update
            if($request->voucherType == 1){
                $debitHeadCodeForBalance = 0;
                $debitCodeForBalance = 0;
                $creditHeadCodeForBalance = chartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$headCode2)->first()->pre_code;
                $creditCodeForBalance = $headCode2;
            }
            else if($request->voucherType == 2){
                $debitHeadCodeForBalance = chartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$headCode1)->first()->pre_code;
                $debitCodeForBalance = $headCode1;
                $creditHeadCodeForBalance = 0;
                $creditCodeForBalance = 0;
            }
            else if($request->voucherType == 3){
                $debitHeadCodeForBalance = 0;
                $debitCodeForBalance = 0;
                $creditHeadCodeForBalance = chartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$headCode2)->first()->pre_code;
                $creditCodeForBalance = $headCode2;
            }
            else if($request->voucherType == 4){
                $debitHeadCodeForBalance = chartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$headCode1)->first()->pre_code;
                $debitCodeForBalance = $headCode1;
                $creditHeadCodeForBalance = 0;
                $creditCodeForBalance = 0;
            }
            else if($request->voucherType == 5){
                $debitHeadCodeForBalance = chartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$headCode1)->first()->pre_code;
                $debitCodeForBalance = $headCode1;
                $creditHeadCodeForBalance = chartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$headCode2)->first()->pre_code;
                $creditCodeForBalance = $headCode2;
            }
            else{
                $debitHeadCodeForBalance = chartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$headCode1)->first()->pre_code;
                $debitCodeForBalance = $headCode1;
                $creditHeadCodeForBalance = 0;
                $creditCodeForBalance = 0;
            }

                    // balanceUpdate(headCode1,code1,headCode2,code2,dr,cr,balance);
                    chartOfAccountController::balanceUpdate($debitHeadCodeForBalance,
                    $debitCodeForBalance,
                    $creditHeadCodeForBalance,
                    $creditCodeForBalance,
                    $request->voucherAmount,
                    $request->voucherAmount,
                    $request->voucherAmount
                );

            //   ======================= /chart of account balance update




              voucherInformationReport::insert([
                  'shopId' => Auth::user()->shopId,
                  'branchId' => 0,
                  'voucherDate' => $request->voucherDate,
                  'voucherType' => $request->voucherType,
                  'voucherNo' => $request->voucherNo,
                  'voucherUniqueId' => $voucherUniqueId,
                  'paymentTo' => $request->paymentTo,
                  'mobileNo' => $request->mobileNo,
                  'checkPaymentType' => $request->checkPaymentType,
                  'receiverBankAccountName' => $request->receiverBankAccountName,
                  'receiverBankAccountNo' => $request->receiverBankAccountNo,
                  'chequeNo' => $request->chequeNo,
                  'chequeDate' => $request->chequeDate,

                  'accountsHeadCode' => $request->headOfAccounts,
                  'accountsCode' => $headCode1,
                  'type' => 1,
                  'voucherAmount' => $request->voucherAmount,
                  'randId' => '0',

                  'particular' => $request->particular,
                  'day' => $day,
                  'month' => $month,
                  'year' => $year,
                  'createBy' => Auth::user()->id,
                  'created_at' => Carbon::now(),
              ]);

              voucherInformationReport::insert([
                  'shopId' => Auth::user()->shopId,
                  'branchId' => 0,
                  'voucherDate' => $request->voucherDate,
                  'voucherType' => $request->voucherType,
                  'voucherNo' => $request->voucherNo,
                  'voucherUniqueId' => $voucherUniqueId,
                  'paymentTo' => $request->paymentTo,
                  'mobileNo' => $request->mobileNo,
                  'checkPaymentType' => $request->checkPaymentType,
                  'receiverBankAccountName' => $request->receiverBankAccountName,
                  'receiverBankAccountNo' => $request->receiverBankAccountNo,
                  'chequeNo' => $request->chequeNo,
                  'chequeDate' => $request->chequeDate,

                  'accountsHeadCode' => $request->headOfAccounts,
                  'accountsCode' => $headCode2,
                  'type' => 2,
                  'voucherAmount' => $request->voucherAmount,
                  'randId' => '0',

                  'particular' => $request->particular,
                  'day' => $day,
                  'month' => $month,
                  'year' => $year,
                  'createBy' => Auth::user()->id,
                  'created_at' => Carbon::now(),
              ]);










            //   ===================================================
            //   ========================= receive payment statement
            //   ===================================================

            $last_inserted_voucher_id = voucherInformation::where('voucherUniqueId',$voucherUniqueId)->first()->id;


            if($request->voucherType == 1){

                if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                ->where('type',2)
                ->orderBy('id','DESC')
                ->exists()){
                    $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                ->where('type',2)
                ->orderBy('id','DESC')
                ->first()->total;
                }else{
                    $last_amount = 0;
                }
                $last_rp_total = $last_amount+$request->voucherAmount;

                ReceivePaymentStatement::insert([
                    'shopId' => Auth::user()->shopId,
                    'branchId' => 0,

                    'voucherType' => $request->voucherType,
                    'voucherDate' => $request->voucherDate,
                    'voucherId' => $last_inserted_voucher_id,
                    'voucherUniqueId' => $voucherUniqueId,
                    'accountHeadCode' => $request->headOfAccounts,
                    'accountCode' => $headCode1,
                    'type' => 2,
                    'cash' => $request->voucherAmount,
                    'total' => $last_rp_total,

                    'createBy' => Auth::user()->id,
                    'created_at' => Carbon::now(),
                ]);



// ================================== Statement Information =============

if(StatementInformation::where('shopId',Auth::user()->shopId)
->where('accountCode',$headCode1)->exists()){
    $balanceAmountDb = StatementInformation::where('shopId',Auth::user()->shopId)
    ->where('accountCode',$headCode1)->orderBy('id','DESC')->first()->balanceAmount;

}
else{
    $balanceAmountDb = 0;
}


        $balanceAmount = $balanceAmountDb+$request->voucherAmount;
        $dr_cr_amount = $request->voucherAmount;
        $drcrFieldName = 'debitAmount';
        $paymentReceiveTitle = 'Cash Payment';


StatementInformation::insert([
    'shopId' => Auth::user()->shopId,
    'type' => 1,
    'accountHeadCode' => $request->headOfAccounts,
    'accountCode' => $headCode1,
    'title' => $paymentReceiveTitle,
    'paymentType' => 1,
    'cashAmount' => $request->voucherAmount,
    'personName' => $request->personName,
    'personMobileNo' => $request->personMobileNo,
    'bankAmount' => 0,
    'bankTypeEntryId' => $request->bankTypeEntryId,
    'bankEntryId' => $request->bankEntryId,
    'bankAccountId' => $request->bankAccountId,
    'dueAmount' => 0,
    $drcrFieldName => $request->voucherAmount,
    'balanceAmount' => $balanceAmount,
    'note' => $paymentReceiveTitle,
    'createBy' => Auth::user()->id,
    'shopId' => Auth::user()->shopId,
    'created_at' => Carbon::now(),
]);

// ================================== /Statement Information =============

            }
            else if($request->voucherType == 2){


                if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                ->where('type',1)
                ->orderBy('id','DESC')
                ->exists()){
                    $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                ->where('type',1)
                ->orderBy('id','DESC')
                ->first()->total;
                }else{
                    $last_amount = 0;
                }
                $last_rp_total = $last_amount+$request->voucherAmount;

                ReceivePaymentStatement::insert([
                    'shopId' => Auth::user()->shopId,
                    'branchId' => 0,

                    'voucherType' => $request->voucherType,
                    'voucherDate' => $request->voucherDate,
                    'voucherId' => $last_inserted_voucher_id,
                    'voucherUniqueId' => $voucherUniqueId,
                    'accountHeadCode' => $request->headOfAccounts,
                    'accountCode' => $headCode2,
                    'type' => 1,
                    'cash' => $request->voucherAmount,
                    'total' => $last_rp_total,

                    'createBy' => Auth::user()->id,
                    'created_at' => Carbon::now(),
                ]);



// ================================== Statement Information =============

if(StatementInformation::where('shopId',Auth::user()->shopId)
->where('accountCode',$headCode2)->exists()){
    $balanceAmountDb = StatementInformation::where('shopId',Auth::user()->shopId)
    ->where('accountCode',$headCode2)->orderBy('id','DESC')->first()->balanceAmount;

}
else{
    $balanceAmountDb = 0;
}


$balanceAmount = $balanceAmountDb-$request->voucherAmount;
$dr_cr_amount = $request->voucherAmount;
$drcrFieldName = 'creditAmount';
$paymentReceiveTitle = 'Cash Recive';


StatementInformation::insert([
    'shopId' => Auth::user()->shopId,
    'type' => 2,
    'accountHeadCode' => $request->headOfAccounts,
    'accountCode' => $headCode2,
    'title' => $paymentReceiveTitle,
    'paymentType' => 1,
    'cashAmount' => $request->voucherAmount,
    'personName' => $request->personName,
    'personMobileNo' => $request->personMobileNo,
    'bankAmount' => 0,
    'bankTypeEntryId' => $request->bankTypeEntryId,
    'bankEntryId' => $request->bankEntryId,
    'bankAccountId' => $request->bankAccountId,
    'dueAmount' => 0,
    $drcrFieldName => $request->voucherAmount,
    'balanceAmount' => $balanceAmount,
    'note' => $paymentReceiveTitle,
    'createBy' => Auth::user()->id,
    'shopId' => Auth::user()->shopId,
    'created_at' => Carbon::now(),
]);

// ================================== /Statement Information =============



            }
            else if($request->voucherType == 3){


                if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                ->where('type',2)
                ->orderBy('id','DESC')
                ->exists()){
                    $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                ->where('type',2)
                ->orderBy('id','DESC')
                ->first()->total;
                }else{
                    $last_amount = 0;
                }
                $last_rp_total = $last_amount+$request->voucherAmount;

                ReceivePaymentStatement::insert([
                    'shopId' => Auth::user()->shopId,
                    'branchId' => 0,
                    'voucherType' => $request->voucherType,
                    'voucherDate' => $request->voucherDate,
                    'voucherId' => $last_inserted_voucher_id,
                    'voucherUniqueId' => $voucherUniqueId,
                    'accountHeadCode' => $request->headOfAccounts,
                    'accountCode' => $headCode1,
                    'type' => 2,
                    'bank' => $request->voucherAmount,
                    'total' => $last_rp_total,
                    'createBy' => Auth::user()->id,
                    'created_at' => Carbon::now(),
                ]);





// ================================== Statement Information =============

if(StatementInformation::where('shopId',Auth::user()->shopId)
->where('accountCode',$headCode1)->exists()){
    $balanceAmountDb = StatementInformation::where('shopId',Auth::user()->shopId)
    ->where('accountCode',$headCode1)->orderBy('id','DESC')->first()->balanceAmount;

}
else{
    $balanceAmountDb = 0;
}


$balanceAmount = $balanceAmountDb+$request->voucherAmount;
$paymentReceiveTitle = 'Bank Payment';
$drcrFieldName = 'debitAmount';
$dr_cr_amount = $request->voucherAmount;


StatementInformation::insert([
    'shopId' => Auth::user()->shopId,
    'type' => 1,
    'accountHeadCode' => $request->headOfAccounts,
    'accountCode' => $headCode1,
    'title' => $paymentReceiveTitle,
    'paymentType' => 2,
    'cashAmount' => 0,
    'personName' => $request->personName,
    'personMobileNo' => $request->personMobileNo,
    'bankAmount' => $request->voucherAmount,
    'bankTypeEntryId' => $request->bankTypeEntryId,
    'bankEntryId' => $request->bankEntryId,
    'bankAccountId' => $request->bankAccountId,
    'dueAmount' => 0,
    $drcrFieldName => $request->voucherAmount,
    'balanceAmount' => $balanceAmount,
    'note' => $paymentReceiveTitle,
    'createBy' => Auth::user()->id,
    'shopId' => Auth::user()->shopId,
    'created_at' => Carbon::now(),
]);

// ================================== /Statement Information =============

            }
            else if($request->voucherType == 4){

                if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                ->where('type',1)
                ->orderBy('id','DESC')
                ->exists()){
                    $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                ->where('type',1)
                ->orderBy('id','DESC')
                ->first()->total;
                }else{
                    $last_amount = 0;
                }
                $last_rp_total = $last_amount+$request->voucherAmount;

                ReceivePaymentStatement::insert([
                    'shopId' => Auth::user()->shopId,
                    'branchId' => 0,

                    'voucherType' => $request->voucherType,
                    'voucherDate' => $request->voucherDate,
                    'voucherId' => $last_inserted_voucher_id,
                    'voucherUniqueId' => $voucherUniqueId,
                    'accountHeadCode' => $request->headOfAccounts,
                    'accountCode' => $headCode2,
                    'type' => 1,
                    'bank' => $request->voucherAmount,
                    'total' => $last_rp_total,

                    'createBy' => Auth::user()->id,
                    'created_at' => Carbon::now(),
                ]);


// ================================== Statement Information =============

if(StatementInformation::where('shopId',Auth::user()->shopId)
->where('accountCode',$headCode1)->exists()){
    $balanceAmountDb = StatementInformation::where('shopId',Auth::user()->shopId)
    ->where('accountCode',$headCode1)->orderBy('id','DESC')->first()->balanceAmount;

}
else{
    $balanceAmountDb = 0;
}


$balanceAmount = $balanceAmountDb-$request->voucherAmount;
$paymentReceiveTitle = 'Bank Recive';
$drcrFieldName = 'creditAmount';
$dr_cr_amount = $request->voucherAmount;


StatementInformation::insert([
    'shopId' => Auth::user()->shopId,
    'type' => 2,
    'accountHeadCode' => $request->headOfAccounts,
    'accountCode' => $headCode1,
    'title' => $paymentReceiveTitle,
    'paymentType' => 2,
    'cashAmount' => 0,
    'personName' => $request->personName,
    'personMobileNo' => $request->personMobileNo,
    'bankAmount' => $request->voucherAmount,
    'bankTypeEntryId' => $request->bankTypeEntryId,
    'bankEntryId' => $request->bankEntryId,
    'bankAccountId' => $request->bankAccountId,
    'dueAmount' => 0,
    $drcrFieldName => $request->voucherAmount,
    'balanceAmount' => $balanceAmount,
    'note' => $paymentReceiveTitle,
    'createBy' => Auth::user()->id,
    'shopId' => Auth::user()->shopId,
    'created_at' => Carbon::now(),
]);

// ================================== /Statement Information =============
            }
            // else{

            // }

            //   =====================================================
            //   ========================= / receive payment statement
            //   =====================================================
    }


        else if($request->voucherType==7){



        $this->validate($request, [
            'voucherType' => 'required',
            'voucherNo' => 'required',
            // 'paymentTo' => 'required',
            // 'mobileNo' => 'required',
            // 'headOfCashBook' => 'required',
            // 'headOfAccounts' => 'required',
            // 'voucherAmount' => 'required|numeric|min:1',
            'particular' => 'required',
        ],
        [
            'voucherType.required' => 'Select Voucher Type.',
            'voucherNo.required' => 'Enter Voucher No.',
            // 'paymentTo.required' => 'Enter Person Name.',
            // 'mobileNo.required' => 'Enter Mobile No.',
            // 'headOfCashBook.required' => 'Select Accounts Code.',
            // 'headOfAccounts.required' => 'Select Accounts Code.',
            // 'voucherAmount.required' => 'Enter Voucher Amount.',
            'particular.required' => 'Write Particular.',
        ]);



        $voucherUniqueId = time();
        $day = date('d');
        $month = date('m');
        $year = date('Y');


        $select_tmp_opening_voucher = tmpOpeningVoucher::where('shopId',Auth::user()->shopId)->where('voucherNo',$request->voucherNo1)->get();

        foreach($select_tmp_opening_voucher as $datas){

            $voucherUniqueId = $voucherUniqueId+1;

            if($datas->type==1){

                $headCode1 = $datas->accountCode;
                $headCode2 = '';
                $debitAmount = $datas->amount;
                $creditAmount = 0;

            }
            else if($datas->type == 2){

                $headCode1 = '';
                $headCode2 = $datas->accountCode;
                $debitAmount = 0;
                $creditAmount = $datas->amount;

            }





        // ============================= statement information
        $companyId = 0;
        $referance = 'Opening';
        $title = 'Opening Voucher Entry';
        $companyAccountCode = $datas->accountCode;
        $companyAccountHeadCode = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$companyAccountCode)->first()->pre_code;

        $rendomNumber = substr(time(),0,12);


        // ==========================================================


        if(StatementInformation::where('shopId',Auth::user()->shopId)
        ->where('advanceSecurityDepositPrepayment',0)
        ->where('accountCode',$companyAccountCode)->exists()){
            $balanceAmountDb = StatementInformation::where('shopId',Auth::user()->shopId)
            ->where('advanceSecurityDepositPrepayment',0)
            ->where('accountCode',$companyAccountCode)->orderBy('id','DESC')->first()->balanceAmount;

        }
        else{
            $balanceAmountDb = 0;
        }

        if($datas->type==1){
            $balanceAmount = $balanceAmountDb+$datas->amount;
            $debitCreditAmountFieldName = 'creditAmount';
        }
        else{
            $balanceAmount = $balanceAmountDb-$datas->amount;
            $debitCreditAmountFieldName = 'debitAmount';
        }

        if($datas->type==1){
            $tmp_type = 2;
        }
        else{
            $tmp_type = 1;
        }


        $cashAccCode = AccountSetup::where('placementType',29)->where('headName',127)->first()->headCode;
        $bankAccCode = AccountSetup::where('placementType',29)->where('headName',128)->first()->headCode;
        $mobileBankAccCode = AccountSetup::where('placementType',29)->where('headName',129)->first()->headCode;

        $tmp_bankTypeEntryId = 0;

        if($datas->accountHeadCode == $cashAccCode){
            $tmp_paymentType = 1;
        }
        else if($datas->accountHeadCode == $bankAccCode){
            $tmp_bankTypeEntryId = 1;
            $tmp_paymentType = 2;
        }
        else if($datas->accountHeadCode == $mobileBankAccCode){
            $tmp_bankTypeEntryId = 2;
            $tmp_paymentType = 2;
        }
        else{
            $tmp_paymentType = 0;
        }

        StatementInformation::insert([
            'shopId' => Auth::user()->shopId,
            'rendomNumber' => $rendomNumber,
            'type' => $tmp_type,
            'accountHeadCode' => $companyAccountHeadCode,
            'accountCode' => $companyAccountCode,
            'title' => $title,
            'referance' => $referance,
            'bankTypeEntryId' => $tmp_bankTypeEntryId,
            'paymentType' => $tmp_paymentType,
            'dueAmount' => 0,
            "$debitCreditAmountFieldName" => $datas->amount,
            'balanceAmount' => $balanceAmount,
            'note' => $title,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);

        // ============================= /statement information

        voucherInformation::insert([
                  'shopId' => Auth::user()->shopId,
                  'branchId' => 0,
                  'voucherDate' => $request->voucherDate,
                  'voucherType' => $request->voucherType,
                  'voucherNo' => $request->voucherNo,
                  'voucherUniqueId' => $voucherUniqueId,
                  'paymentTo' => $request->paymentTo,
                  'mobileNo' => $request->mobileNo,
                  'checkPaymentType' => $request->checkPaymentType,
                  'receiverBankAccountName' => $request->receiverBankAccountName,
                  'receiverBankAccountNo' => $request->receiverBankAccountNo,
                  'chequeNo' => $request->chequeNo,
                  'chequeDate' => $request->chequeDate,

                  'accountsHeadCode' => $datas->accountHeadCode,
                  'accountCodeDebit' => $headCode1,
                  'accountCodeCredit' => $headCode2,
                  'debitAmount' => $debitAmount,
                  'creditAmount' => $creditAmount,
                  'voucherAmount' => $datas->amount,

                  'particular' => $request->particular,
                  'day' => $day,
                  'month' => $month,
                  'year' => $year,
                  'createBy' => Auth::user()->id,
                  'created_at' => Carbon::now(),
              ]);

              //   ======================= chart of account balance update

              if($datas->type==2){
              $debitHeadCodeForBalance = 0;
              $debitCodeForBalance = 0;
              $creditHeadCodeForBalance = chartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$headCode2)->first()->pre_code;
              $creditCodeForBalance = $headCode2;
              }
              else if($datas->type==1){
              $debitHeadCodeForBalance = chartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$headCode1)->first()->pre_code;
              $debitCodeForBalance = $headCode1;
              $creditHeadCodeForBalance = 0;
              $creditCodeForBalance = 0;
              }
              // balanceUpdate(headCode1,code1,headCode2,code2,dr,cr,balance);
              chartOfAccountController::balanceUpdate($debitHeadCodeForBalance,
              $debitCodeForBalance,
              $creditHeadCodeForBalance,
              $creditCodeForBalance,
              $datas->amount,
              $datas->amount,
              $datas->amount
          );

      //   ======================= chart of account balance update


              if($datas->type == 1){

              voucherInformationReport::insert([
                  'shopId' => Auth::user()->shopId,
                  'branchId' => 0,
                  'voucherDate' => $request->voucherDate,
                  'voucherType' => $request->voucherType,
                  'voucherNo' => $request->voucherNo,
                  'voucherUniqueId' => $voucherUniqueId,
                  'paymentTo' => $request->paymentTo,
                  'mobileNo' => $request->mobileNo,
                  'checkPaymentType' => $request->checkPaymentType,
                  'receiverBankAccountName' => $request->receiverBankAccountName,
                  'receiverBankAccountNo' => $request->receiverBankAccountNo,
                  'chequeNo' => $request->chequeNo,
                  'chequeDate' => $request->chequeDate,

                  'accountsHeadCode' => $datas->accountHeadCode,
                  'accountsCode' => $headCode1,
                  'type' => 1,
                  'voucherAmount' => $datas->amount,
                  'randId' => '0',

                  'particular' => $request->particular,
                  'day' => $day,
                  'month' => $month,
                  'year' => $year,
                  'createBy' => Auth::user()->id,
                  'created_at' => Carbon::now(),
              ]);

            }else{

              voucherInformationReport::insert([
                'shopId' => Auth::user()->shopId,
                'branchId' => 0,
                'voucherDate' => $request->voucherDate,
                'voucherType' => $request->voucherType,
                'voucherNo' => $request->voucherNo,
                'voucherUniqueId' => $voucherUniqueId,
                'paymentTo' => $request->paymentTo,
                'mobileNo' => $request->mobileNo,
                'checkPaymentType' => $request->checkPaymentType,
                'receiverBankAccountName' => $request->receiverBankAccountName,
                'receiverBankAccountNo' => $request->receiverBankAccountNo,
                'chequeNo' => $request->chequeNo,
                'chequeDate' => $request->chequeDate,

                'accountsHeadCode' => $datas->accountHeadCode,
                'accountsCode' => $headCode2,
                'type' => 2,
                'voucherAmount' => $datas->amount,
                'randId' => '0',

                'particular' => $request->particular,
                'day' => $day,
                'month' => $month,
                'year' => $year,
                'createBy' => Auth::user()->id,
                'created_at' => Carbon::now(),
              ]);
            }

            //   ===================================================
            //   ========================= receive payment statement
            //   ===================================================

            if(0){
            $last_inserted_voucher_id = voucherInformation::where('voucherUniqueId',$voucherUniqueId)->first()->id;




                if(ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                    ->where('type',$datas->amount)
                    ->orderBy('id','DESC')
                    ->exists())
                {
                    $last_amount = ReceivePaymentStatement::where('shopId',Auth::user()->shopId)
                                    ->where('type',$datas->amount)
                                    ->orderBy('id','DESC')
                                    ->first()->total;
                }
                else{
                    $last_amount = 0;
                }

                $last_rp_total = $last_amount+$request->voucherAmount;


                if($datas->type == 1){

                ReceivePaymentStatement::insert([
                    'shopId' => Auth::user()->shopId,
                    'branchId' => 0,

                    'voucherType' => $request->voucherType,
                    'voucherDate' => $request->voucherDate,
                    'voucherId' => $last_inserted_voucher_id,
                    'voucherUniqueId' => $voucherUniqueId,
                    'accountHeadCode' => $datas->accountHeadCode,
                    'accountCode' => $headCode1,
                    'type' => $datas->type,
                    'cash' => $datas->amount,
                    'total' => $last_rp_total,

                    'createBy' => Auth::user()->id,
                    'created_at' => Carbon::now(),
                ]);

                }else{

                    ReceivePaymentStatement::insert([
                        'shopId' => Auth::user()->shopId,
                        'branchId' => 0,

                        'voucherType' => $request->voucherType,
                        'voucherDate' => $request->voucherDate,
                        'voucherId' => $last_inserted_voucher_id,
                        'voucherUniqueId' => $voucherUniqueId,
                        'accountHeadCode' => $datas->accountHeadCode,
                        'accountCode' => $headCode2,
                        'type' => $datas->type,
                        'cash' => $datas->amount,
                        'total' => $last_rp_total,

                        'createBy' => Auth::user()->id,
                        'created_at' => Carbon::now(),
                    ]);

            }

            }






            //   ===================================================
            //   ========================= receive payment statement
            //   ===================================================

            } //    /foreach loop for opening voucher
        }  //      /voucher type condition


        }  //      /auth condition

    }


    public function getVoucherEntryInformationById($id){

        if(Auth::guard('admin')->check()){


        $voucherInformation = voucherInformation::where('shopId',Auth::user()->shopId)->where('id',$id)->first();
        $headCode0 = voucherInformation::where('shopId',Auth::user()->shopId)->where('id',$id)->first()->accountCodeDebit;
        $headCode = voucherInformation::where('shopId',Auth::user()->shopId)->where('id',$id)->first()->accountCodeCredit;
        $voucherUniqueId = voucherInformation::where('shopId',Auth::user()->shopId)->where('id',$id)->first()->voucherUniqueId;

        if(ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$headCode0)->exists()){
        $headName0 = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$headCode0)->first()->headName;
        }
        else{
            $headName0 = '';
        }

        if(ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$headCode)->exists()){
        $headName = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('headCode',$headCode)->first()->headName;
        }
        else{
            $headName = '';
        }


        $journalVoucherLists = voucherInformationReport::where('shopId',Auth::user()->shopId)
        ->where('voucherUniqueId',$voucherUniqueId)->get();

        }  //auth condition

        return [
            'journalVoucherLists' => $journalVoucherLists,
            'voucherInformation' => $voucherInformation,
            'headName0' => $headName0,
            'headName' => $headName,
        ];
    }



    public function getHeadSubCodeByHeadcodeForTrialBalance($id){

        if(Auth::guard('admin')->check()){


        $voucherInformation = ChartOfAccountRegister::whereIn('shopId',[0,Auth::user()->shopId])->where('pre_code','LIKE',$id.'%')->get('headCode');



        }  //auth condition

        return [
            'list' => $voucherInformation
        ];
    }

    public function getHeadSubCodeByHeadcode($id){

        if(Auth::guard('admin')->check()){


        $voucherInformation = voucherInformationReport::distinct()
            ->where('accountsCode','LIKE',$id.'%')->get('accountsCode');



        }  //auth condition

        return [
            'list' => $voucherInformation
        ];
    }


    public function voucherSearch(Request $request){


        if(Auth::guard('admin')->check()){


            $datas = voucherInformation::query();
            $datas = $datas->where('shopId',Auth::user()->shopId);

            if($request->voucherDate){
                $datas = $datas->where('voucherDate','LIKE',$request->voucherDate.'%');
            }

            if($request->mainHead){
                $datas = $datas->where('accountsHeadCode',$request->mainHead);
            }

            if($request->subHead){
                $datas = $datas->Where('accountCodeDebit','LIKE',$request->subHead.'%');
            }

            if($request->voucherNo){
                $datas = $datas->where('voucherNo',$request->voucherNo);
            }


            if($request->voucherType){
                $datas = $datas->where('voucherType',$request->voucherType);
            }

            $datas = $datas->orderBy('id','DESC');
            $datas = $datas->get();




            $totalPayment = voucherInformation::where('shopId',Auth::user()->shopId)->where('voucherDate','LIKE',$request->voucherDate.'%')->whereIn('voucherType',[1,3])->sum('voucherAmount');
            $totalReceive = voucherInformation::where('shopId',Auth::user()->shopId)->where('voucherDate','LIKE',$request->voucherDate.'%')->whereIn('voucherType',[2,4])->sum('voucherAmount');

            $total = $datas->sum('voucherAmount');

        } // auth condition


        return [
            'data' => $datas,
            'totalPayment' => $totalPayment,
            'totalReceive' => $totalReceive,
            'total' => $total,
            ];
    }


    public function receiveSummarySearch(Request $request){


        if(Auth::guard('admin')->check()){


            $datas = ReceivePaymentStatement::query();
            $datas = $datas->where('shopId',Auth::user()->shopId);
            $datas = $datas->where('type',$request->type);

            if($request->mainHead){
                $datas = $datas->where('accountHeadCode',$request->mainHead);
            }

            if($request->subHead){
                $datas = $datas->where('accountCode',$request->subHead);
            }

            if($request->cashBankType){
                if($request->cashBankType==1){
                    $datas = $datas->where('cash','>','0');
                }else{
                    $datas = $datas->where('bank','>','0');
                }

            }

            if($request->voucherDate){
                $datas = $datas->where('voucherDate','LIKE',$request->voucherDate.'%');
            }
            if($request->voucherType){
                $datas = $datas->where('voucherType',$request->voucherType);
            }
            $datas = $datas->get();

            $table_data = '';
            $i=1;
            $total=0;
            foreach($datas as $receiveSummary){

                $table_data .= '<tr>';
                $table_data .= '<td>';
                $table_data .= $i;
                $table_data .= '</td>';

                $table_data .= '<td>';
                $table_data .= date("d M Y", strtotime($receiveSummary['voucherDate']));
                $table_data .= '</td>';

                $table_data .= '<td>';
                $table_data .= chartOfAccount::where('headCode','=',$receiveSummary['accountHeadCode'])->first()->headName;
                $table_data .= '</td>';

                $table_data .= '<td>';
                $table_data .= chartOfAccountRegister::where('headCode',$receiveSummary['accountCode'])->first()->headName;
                $table_data .= '</td>';

                $table_data .= '<td>';
                $table_data .= $receiveSummary['cash'];
                $table_data .= '</td>';

                $table_data .= '<td>';
                $table_data .= $receiveSummary['bank'];
                $table_data .= '</td>';

                $table_data .= '<td>';
                $table_data .= $total += $receiveSummary['cash']+$receiveSummary['bank'];
                $table_data .= '</td>';

                $table_data .= '<td>';
                $table_data .= '<a
                href="viewVoucher'.$receiveSummary['voucherId'].'"
                class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"
              ><i class="fa fa-eye"></i> View </a>';
                $table_data .= '</td>';


                $table_data .= '</tr>';


            $i++;
            }

        $voucherTypeList = voucherType::get();
        $chartOfAccountList = ChartOfAccount::get();


   } // auth condition


        return [
            'receiveSummary' => $table_data,
            'voucherTypeList' => $voucherTypeList,
            'chartOfAccountList' => $chartOfAccountList,
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

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

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
