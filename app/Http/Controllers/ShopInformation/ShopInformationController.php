<?php

namespace App\Http\Controllers\ShopInformation;

use App\BillingDetailsInfo;
use App\GraceDateEntry;
use App\ChartOfAccount;
use App\ChartOfAccountRegister;
use App\StatementInformation;
use App\voucherInformationReport;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use App\ShopInformation\ShopInformation;
use App\ShopInformation\StatusInformation;
use App\ShopInformation\ProductTransfer;
use App\ShopInformation\DefaultMessageInformation;
use App\ShopEmployeeEntry;
use App\Models\Admin;
use App\ShopTypeEntry;
use App\User;
use Carbon\Carbon;
use App\Currencie;
use App\Area;
use App\BlockRoad;
use App\HouseMarket;
use App\DataInformation;
use App\AreaAssign;
use App\ProductType;
use Image;
use App\TimelineInformation;
use App\RoadEntry;

use App\ShopInformation\ShopOwnerInformation;
use App\ShopInformation\ShopContactPersonInformation;
use App\ShopInformation\ShopRepresentativeInformation;
use App\ShopInformation\ShopAddressLocation;
use App\ShopBillingAmount;
use App\ShopBillingRequest;
use App\ShopAccountIntormation;
use App\ShopBillingGraceInformation;
use App\Http\Resources\ShopInformation\Admin as ShopInformationResource;
use Illuminate\Support\Facades\Auth;
use App\ShopInformation\CategoryEntry;
use App\ShopInformation\StatusTypeInformation;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;
use App\SmsApiInfo;


class ShopInformationController extends Controller
{


    public function __construct()
    {
        $this->middleware('auth:,admin');
    }

    public function searchItemLimitNumber($limitNumber){
        $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','CreateByNameShow','CategoryInformation','RoadInformation','ProductTypeInformation','AreaInformation')
                                ->where('shopId',Auth::user()->shopId)
                                ->limit($limitNumber)
                                ->get();
        return ['data' => $data];
    }

    public function searchItemByEmployeeId($employeeId){
        $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','CreateByNameShow','CategoryInformation','RoadInformation')
                                ->where('shopId',Auth::user()->shopId)
                                ->where('createBy',$employeeId)
                                ->get();
        return ['data' => $data];
    }

    public function GuestSearch(Request $request){

        if($request->limit && $request->employeeId){
            $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','CreateByNameShow','CategoryInformation','RoadInformation')
            ->where('shopId',Auth::user()->shopId)
            ->where('createBy',$request->employeeId)
            ->where('shopOrOffice',3)
            ->limit($request->limit)
            ->get();
        }
       else if($request->limit){
            $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','CreateByNameShow','CategoryInformation','RoadInformation')
            ->where('shopId',Auth::user()->shopId)
            ->where('shopOrOffice',3)
            ->limit($request->limit)
            ->get();
        }
        else if($request->employeeId>0){
        $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','CreateByNameShow','CategoryInformation','RoadInformation')
                                ->where('shopId',Auth::user()->shopId)
                                ->where('createBy',$request->employeeId)
                                ->where('shopOrOffice',3)
                                ->get();
        }
        return ['data' => $data];
    }

    public function GuestSearchById($id){
 
        if(Auth::user()->role==4){
            $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','CreateByNameShow','CategoryInformation','RoadInformation')
            ->where('shopId',Auth::user()->shopId)
            ->where('createBy',Auth::user()->id)
            ->where('shopOrOffice',3)
            ->orderBy('id','DESC')
            ->limit($id)
            ->get();
        }else {
            $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','CreateByNameShow','CategoryInformation','RoadInformation')
            ->where('shopId',Auth::user()->shopId)
            ->where('shopOrOffice',3)
            ->orderBy('id','DESC')
            ->limit($id)
            ->get();
        }
        
        return ['data' => $data];
    }

    public function searchItemByEmployeeIdFollowUp($employeeId){

         $data = ProductTransfer::with('ShopInfo','ShopInfo.BlockRoad','ShopInfo.HouseMarket','ShopInfo.StatusTypeInformation','ShopInfo.CreateByNameShow','ShopInfo.CategoryInformation','ShopInfo.RoadInformation')
                                ->where('shopId',Auth::user()->shopId)
                                ->where('employeeToId',$employeeId)
                                ->where('status',5)
                                ->latest()
                                ->get();

        return ['data' => $data];
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return  ShopInformationResource::collection(Admin::orderBy('id', 'DESC')->where('status', 1)->where('employeeId', NULL)->get());
    }


    public function getCurrencyRate()
    {

        $shopId = Auth::user()->shopId;
        $myCurrencyId = Auth::user()->currencyId;
        $myCurrency = Currencie::where('id', $myCurrencyId)->first()->code;
        $shopBill = shopAccountIntormation::where('shopId', $shopId)->first()->billAmount;


        // $apikey = '21eba4f4ff74e127cda2';
        // $from_Currency = $myCurrency;
        // $to_Currency = 'BDT';
        // $query =  "{$from_Currency}_{$to_Currency}";

        // // // change to the free URL if you're using the free version
        // $json = file_get_contents("https://free.currconv.com/api/v7/convert?q={$query}&compact=ultra&apiKey={$apikey}");
        // $obj = json_decode($json, true);

        // $val = floatval($obj["$query"]);
        // $bill = number_format((float)($shopBill / $val), 2, '.', '');

        return ['data' => $shopBill];
    }


    public function getShopId($id)
    {

        $select_shop_type = ShopTypeEntry::where('shopTypeEntryId', "$id")->first();
        $code = $select_shop_type->shopTypeCode;

        if (Admin::where('shopTypeId', "$id")->exists()) {
            $select = Admin::where('shopTypeId', "$id")->orderBy('shopSirialNo', 'DESC')->first();
            $new_code = $select->shopSirialNo;
            $new_code = ++$new_code;
            $no=  $new_code;
            $sirial_id = $id.'-'.$new_code;
        } else {
            $no=1;
            $sirial_id = $code . '-1';
        }

        return ['data' => "$sirial_id",'no'=>$no];
    }

    public function checkemail($userName)
    {

        $exist = Admin::where('email', "$userName")->exists();
        if ($exist) {
            return ['exist' => "Allready exist."];
        } else {
            return ['exist' => "Available."];
        }
    }

    public function shopBillRequestEntry(Request $request){
        $this->validate(
            $request,
            [
                'totalMonth' => 'required',
                'amount' => 'required',
                'bankTypeEntryId' => 'required',
                'bankAccountId' => 'required',
            ],
            [
                'totalMonth.required' => "Select Month.",
                'amount.required' => "Select Amount.",
                'bankTypeEntryId.required' => "Select Bank Type.",
                'bankAccountId.required' => "Select Bank Bame.",
            ]
        );

            if(ShopBillingRequest::where('shopId',Auth::user()->shopId)->where('status','0')->exists()){
                return ['ok'=> 0];
            }
            else{
                $name = '';
                if($request->paySlip==''){
                }else{
                $strpos = strpos($request->paySlip,';');
                    $sub = substr($request->paySlip,0,$strpos);
                    $ex = explode('/',$sub)[1];
                    $name = time().".".$ex;
                    $img = Image::make($request->paySlip);
                    $upload_path = public_path()."/images/bill_payment/";
                    $img->save($upload_path.$name);
                }


        ShopBillingRequest::insert([
            'totalMonth' => $request->totalMonth,
            'amount' => $request->amount,
            'bankTypeEntryId' => $request->bankTypeEntryId,
            'bankAccountId' => $request->bankAccountId,
            'bankDetils' => $request->bankDetils,
            'mbAccountNo' => $request->mbAccountNo,
            'mbTrNo' => $request->mbTrNo,
            'bankName' => $request->bankName,
            'accountName' => $request->accountName,
            'accountNumber' => $request->accountNumber,
            'branchName' => $request->branchName,
            'lastBillDate' => $request->lastBillDate,
            'paySlip' => "images/bill_payment/".$name,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);
        return ['ok'=> 1];
    }



    }

    public function shopBillRequestList(){
       $data = ShopBillingRequest::where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->get();
       return ['data' => $data];
    }
    public function shopBillRequestCancel($id){
       $data = ShopBillingRequest::where('id',$id)->update([
           'status' => '3',
           'updateBy' => Auth::user()->id,
           'updated_at' => Carbon::now(),
       ]);
    }

    public function shopBillRequestListAdmin(){
       $datas = ShopBillingRequest::where('status',0)->orderBy('id','DESC')->get();
       $msg2 = array();
       foreach($datas as $data){
        $shopId = $data->shopId;

        $shopInfo = Admin::where('id',$shopId)->first();
         $shopAccountInfo= ShopAccountIntormation::where('shopId',$shopId)->first();

         $shopBillDate = date("d M Y", strtotime($shopAccountInfo->billingDate));
         $submitDate = substr($data->created_at,0,10);
        $msg2[] = array(
            "id" => $data->id,
            "totalMonth" => $data->totalMonth,
            "amount" => $data->amount,
            "bankDetils" => $data->bankDetils,
            "bankTypeEntryId" => $data->bankTypeEntryId,
            "bankName" => $data->bankName,
            "accountName" => $data->accountName,
            "accountNumber" => $data->accountNumber,
            "branchName" => $data->branchName,
            "mbAccountNo" => $data->mbAccountNo,
            "mbTrNo" => $data->mbTrNo,
            "paySlip" => $data->paySlip,
            "shopSNo" => $shopInfo->shopSirialId,
            "ShopUserName" => $shopInfo->userName,
            "ShopBillAmount" => $shopAccountInfo->billAmount,
            "ShopBillDate" => $shopBillDate,
            "submitTime" => $data->created_at->diffForHumans(),
            "submitDate" => $submitDate,
            );

        }

       return ['data' => $msg2];
    }

    public function shopBillApproveListAdmin(){
       $datas = ShopBillingRequest::where('status',2)->orderBy('id','DESC')->get();
       $msg2 = array();
       foreach($datas as $data){
        $shopId = $data->shopId;

        $shopInfo = Admin::where('id',$shopId)->first();
         $shopAccountInfo= ShopAccountIntormation::where('shopId',$shopId)->first();

         $shopBillDate = date("d M Y", strtotime($shopAccountInfo->billingDate));
         $submitDate = substr($data->created_at,0,10);
        $msg2[] = array(
            "id" => $data->id,
            "totalMonth" => $data->totalMonth,
            "amount" => $data->amount,
            "bankDetils" => $data->bankDetils,
            "bankTypeEntryId" => $data->bankTypeEntryId,
            "bankName" => $data->bankName,
            "accountName" => $data->accountName,
            "accountNumber" => $data->accountNumber,
            "branchName" => $data->branchName,
            "paySlip" => $data->paySlip,
            "mbAccountNo" => $data->mbAccountNo,
            "mbTrNo" => $data->mbTrNo,
            "shopSNo" => $shopInfo->shopSirialId,
            "ShopUserName" => $shopInfo->userName,
            "ShopBillAmount" => $shopAccountInfo->billAmount,
            "ShopBillDate" => $shopBillDate,
            "submitTime" => $data->created_at->diffForHumans(),
            "submitDate" => $submitDate,
            );

        }

       return ['data' => $msg2];
    }
    public function shopBillCencelListAdmin(){
       $datas = ShopBillingRequest::where('status',3)->orderBy('id','DESC')->get();
       $msg2 = array();
       foreach($datas as $data){
        $shopId = $data->shopId;

        $shopInfo = Admin::where('id',$shopId)->first();
         $shopAccountInfo= ShopAccountIntormation::where('shopId',$shopId)->first();

         $shopBillDate = date("d M Y", strtotime($shopAccountInfo->billingDate));
         $submitDate = substr($data->created_at,0,10);
        $msg2[] = array(
            "id" => $data->id,
            "totalMonth" => $data->totalMonth,
            "amount" => $data->amount,
            "bankDetils" => $data->bankDetils,
            "bankTypeEntryId" => $data->bankTypeEntryId,
            "bankName" => $data->bankName,
            "accountName" => $data->accountName,
            "accountNumber" => $data->accountNumber,
            "branchName" => $data->branchName,
            "paySlip" => $data->paySlip,
            "mbAccountNo" => $data->mbAccountNo,
            "mbTrNo" => $data->mbTrNo,
            "shopSNo" => $shopInfo->shopSirialId,
            "ShopUserName" => $shopInfo->userName,
            "ShopBillAmount" => $shopAccountInfo->billAmount,
            "ShopBillDate" => $shopBillDate,
            "submitTime" => $data->created_at->diffForHumans(),
            "submitDate" => $submitDate,
            );

        }

       return ['data' => $msg2];
    }


    public function shopBillDateExpired()
    {

        $shopId = Auth::user()->shopId;
        $selectAccountInfo = shopAccountIntormation::where('shopId', "$shopId")->first();
        $billingDate = $selectAccountInfo->billingDate;
        $billingGraceDate = $selectAccountInfo->billingGraceDate;
        $today = date('Y-m-d H:i:s');
        if ($billingGraceDate) {
            if ($today > $billingGraceDate) {
                Admin::where('id', $shopId)->update([
                    'paymentStatus' => 1,
                    'status' => 50,
                ]);

                return ['data' => "Expired"];
            } else {
                return ['data' => "Not Expired"];
            }
        } else {
            if ($today > $billingDate) {
                Admin::where('id', $shopId)->update([
                    'paymentStatus' => 1,
                    'd' => 50,
                ]);

                return ['data' => "Expired"];
            } else {
                return ['data' => "Not Expired"];
            }
        }
    }


    public function getMyGuard()
    {
        if (Auth::getDefaultDriver() == 'web') {
            $myGuard = 'web';
        } else {
            $myGuard = 'admin';
        }
        return ['myGuard' => $myGuard];
    }

    public function changeStatus($id)
    {
        $select = Admin::where('id', $id)->first();
        $last_status = $select->status;

        if ($last_status == 0) {
            Admin::where('id', $id)->update([
                'paymentStatus' => 2,
                'status' => 1,
            ]);


            $today = date('Y-m-d H:i:s');
            $billingDate =  date('Y-m-d H:i:s', strtotime("$today +1 Months"));

            ShopAccountIntormation::where('shopId', $id)->update([
                'billingDate' => $billingDate,
            ]);
            $smsStatus = 1;
        } else {
            Admin::where('id', $id)->update([
                'status' => 0,
            ]);
            $smsStatus = 0;
        }

        $shop_information =  Admin::where('id', $id)->first();
        $shop_owner_information =  ShopOwnerInformation::where('shopId', $id)->first();

        $email = $shop_information->email;
        $pass = $shop_information->pass;
        $mobileNo = $shop_owner_information->mobileNo;

        return [
            'smsStatus' => "$smsStatus",
            'mobileNo' => "$mobileNo",
            'email' => "$email",
            'password' => "$pass",
        ];
    }


    public function shopInformationSearch($id)
    {
        $data = Admin::where('shopName', 'like', '%' . $id . '%')
            ->orWhere('shopSirialId', 'like', '%' . $id . '%')
            ->orWhere('email', 'like', '%' . $id . '%')
            ->get();
        return ['data' => $data];
    }

    public function areaEntry(Request $request)
    {

        $this->validate(
            $request,
            [
                'countryId' => 'required',
                'divisionId' => 'required',
                'districtId' => 'required',
                'thanaId' => 'required',
                'areaName' => 'required',
            ],
            [


                'countryId.required' => "Select Country.",
                'divisionId.required' => "Select Division.",
                'districtId.required' => "Select District.",
                'thanaId.required' => "Select Upazila.",
                'areaName.required' => "Enter Area Name.",
            ]
        );


        $data = Area::insert([
            'countryId' => $request->countryId,
            'divisionId' => $request->divisionId,
            'districtId' => $request->districtId,
            'thanaId' => $request->thanaId,
            'areaName' => $request->areaName,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);



    }

    public function areaEdit($id){
        $data = Area::findOrFail($id);
        return ['data'=>$data];
    }

     public function areaUpdate(Request $request)
    {

        $this->validate(
            $request,
            [
                'countryId' => 'required',
                'divisionId' => 'required',
                'districtId' => 'required',
                'thanaId' => 'required',
                'areaName' => 'required',
            ],
            [


                'countryId.required' => "Select Country.",
                'divisionId.required' => "Select Division.",
                'districtId.required' => "Select District.",
                'thanaId.required' => "Select Upazila.",
                'areaName.required' => "Enter Area Name.",
            ]
        );


        $data = Area::where('id',$request->areaId)->update([
            'countryId' => $request->countryId,
            'divisionId' => $request->divisionId,
            'districtId' => $request->districtId,
            'thanaId' => $request->thanaId,
            'areaName' => $request->areaName,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);



    }

    public function areaAssignEntry(Request $request)
    {
   
        // dd($request->countryId);

        $this->validate(
            $request,
            [
               
                'areaId' => 'required',
                'employeeId' => 'required',
            ],
            [

               
                'areaId.required' => "Select Area Name.",
                'employeeId.required' => "Select Employee.",
            ]
        );

        if(AreaAssign::
            where('countryId', $request->countryId)
            ->where('divisionId', $request->divisionId)
            ->where('districtId', $request->districtId)
            ->where('thanaId', $request->thanaId)
            ->where('areaId', $request->areaId)
            ->where('employeeId', $request->employeeId)
            ->where('shopId', Auth::user()->shopId)->exists()){

        return['exists' => 1];
    }
    else{



        $areaIds = $request->areaId;

        foreach($areaIds as $key=>$areaInfo){
            $info = new AreaAssign();
            $info->countryId = $request->countryId;
            $info->divisionId = $request->divisionId;
            $info->districtId = $request->districtId;
            $info->thanaId = $request->thanaId;
            $info->areaId = $request->areaId[$key];
            $info->employeeId = $request->employeeId;
            $info->shopId =Auth::user()->shopId;
            $info->createBy = Auth::user()->id;
            $info->created_at = Carbon::now();
            $info->save();
        }


        // $data = AreaAssign::insert([
        //     'countryId' => $request->countryId,
        //     'divisionId' => $request->divisionId,
        //     'districtId' => $request->districtId,
        //     'thanaId' => $request->thanaId,
        //     'areaId' => $request->areaId,
        //     'employeeId' => $request->employeEntryId,
        //     'shopId' => Auth::user()->shopId,
        //     'createBy' => Auth::user()->id,
        //     'created_at' => Carbon::now(),
        // ]);

         return['exists' => 0];

      
    }

    }

    public function blockRoadEntry(Request $request)
    {

        $this->validate(
            $request,
            [
                'countryId' => 'required',
                'divisionId' => 'required',
                'districtId' => 'required',
                'thanaId' => 'required',
                'areaId' => 'required',
                'blockRoadNameNumber' => 'required',
            ],
            [


                'countryId.required' => "Select Country.",
                'divisionId.required' => "Select Division.",
                'districtId.required' => "Select District.",
                'thanaId.required' => "Select Upazila.",
                'areaId.required' => "Select Area.",
                'blockRoadNameNumber.required' => "Enter Name/No.",
            ]
        );


        $data = BlockRoad::insert([
            'countryId' => $request->countryId,
            'divisionId' => $request->divisionId,
            'districtId' => $request->districtId,
            'thanaId' => $request->thanaId,
            'areaId' => $request->areaId,
            'blockRoadNameNumber' => $request->blockRoadNameNumber,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);



    }

    public function blockRoadView()
    {

        $data = BlockRoad::where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data];



    }

    // road
    public function roadEntry(Request $request)
    {

        $this->validate(
            $request,
            [
                'countryId' => 'required',
                'divisionId' => 'required',
                'districtId' => 'required',
                'thanaId' => 'required',
                'areaId' => 'required',
                'roadNameNumber' => 'required',
            ],
            [


                'countryId.required' => "Select Country.",
                'divisionId.required' => "Select Division.",
                'districtId.required' => "Select District.",
                'thanaId.required' => "Select Upazila.",
                'areaId.required' => "Select Area.",
                'roadNameNumber.required' => "Enter Name/No.",
            ]
        );


        $data = RoadEntry::insert([
            'countryId' => $request->countryId,
            'divisionId' => $request->divisionId,
            'districtId' => $request->districtId,
            'thanaId' => $request->thanaId,
            'areaId' => $request->areaId,
            'blockId' => $request->blockRoadId,
            'roadNameNumber' => $request->roadNameNumber,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);



    }
    // road

    public function houseMarketEntry(Request $request)
    {

        $this->validate(
            $request,
            [
                'countryId' => 'required',
                'divisionId' => 'required',
                'districtId' => 'required',
                'thanaId' => 'required',
                'areaId' => 'required',
                'blockRoadId' => 'required',
            ],
            [


                'countryId.required' => "Select Country.",
                'divisionId.required' => "Select Division.",
                'districtId.required' => "Select District.",
                'thanaId.required' => "Select Upazila.",
                'areaId.required' => "Select Area.",
                'blockRoadId.required' => "Enter Block/Road.",
            ]
        );


        // $data = HouseMarket::insert([
        //     'countryId' => $request->countryId,
        //     'divisionId' => $request->divisionId,
        //     'districtId' => $request->districtId,
        //     'thanaId' => $request->thanaId,
        //     'areaId' => $request->areaId,
        //     'blockRoadId' => $request->blockRoadId,
        //     'houseMarketName' => $request->houseMarketName,
        //     'houseMarketNumber' => $request->houseMarketNumber,
        //     'howMuchFloor' => $request->howMuchFloor,
        //     'shopId' => Auth::user()->shopId,
        //     'createBy' => Auth::user()->id,
        //     'created_at' => Carbon::now(),
        // ]);


        $info = new HouseMarket();
        $info->countryId = $request->countryId;
        $info->divisionId = $request->divisionId;
        $info->districtId = $request->districtId;
        $info->thanaId = $request->thanaId;
        $info->areaId = $request->areaId;
        $info->blockRoadId = $request->blockRoadId;
        if($request->roadId){
            $info->roadId = $request->roadId;
        }else{
            $info->roadId ='0';
        }

        $info->houseMarketName = $request->houseMarketName;
        $info->houseMarketNumber = $request->houseMarketNumber;
        $info->howMuchFloor = $request->howMuchFloor;
        $info->shopId = Auth::user()->shopId;
        $info->createBy = Auth::user()->id;
        $info->created_at = Carbon::now();
        $info->save();

    }

    //search dashboard
    public function getrole(){
        $role = Auth::user()->role;
        return ['data' => $role];
    }

    public function dashboard_area_show(){
        $role = Auth::user()->role;
        $msg=array();
        $area = Area::where('shopId',Auth::user()->shopId)->get();
        $areaAssign = AreaAssign::with('Area')->where('employeeId',Auth::user()->id)
                                   ->where('shopId',Auth::user()->shopId)
                                   ->get();


        // $areaIds = AreaAssign::where('employeeId',Auth::user()->id)
        // ->where('shopId',Auth::user()->shopId)
        // ->get();

        // $msg=array();
        // foreach($areaIds as $info){

        //     if($role==3){
        //         $data = Area::where('shopId',Auth::user()->shopId)->first();
        //        }

        //     if($role==4){
        //         $data = Area::where('shopId',Auth::user()->shopId)->where('id',$info->areaId)->get();
        //     }

        //      $msg[]=array(
        //         "AreaName"=>$data,
        //      );
        // }



        // $data = Admin::where('shopId',Auth::user()->shopId)->where('role',4)->get();
        return ['area' => $area,'areaAssign'=>$areaAssign,'role'=>$role];
    }

    public function getEmployee(){
        // $data = ShopEmployeeEntry::where('shopId',Auth::user()->shopId)->get();
        $data = Admin::where('shopId',Auth::user()->shopId)->where('role',4)->get();
        return ['data' => $data];
    }

    public function getCategory(){
        $data = CategoryEntry::where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data];
    }

    public function blockViewByArea($areaId){
        $data = BlockRoad::where('areaId',$areaId)->where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data];
    }
    public function roadShowByAreaBlock($areaId,$blockId){
        $data = RoadEntry::where('areaId',$areaId)->where('blockId',$blockId)->where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data];
    }
    public function allRoadList(){
        $data = RoadEntry::where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data];
    }

    public function houseShowByAreaBlockRoad($areaId,$blockId,$roadId){
        $data = HouseMarket::where('areaId',$areaId)
                            ->where('blockRoadId',$blockId);
                            if($roadId){
                                $data = $data->where('roadId',$roadId);
                            }
                            $data = $data->where('shopId',Auth::user()->shopId)
                            ->get();
        return ['data' => $data];
    }
    //search dashboard

    public function blockRoadViewByArea($id)
    {
        $data = BlockRoad::where('areaId',$id)->where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data];
    }

    public function blockByRoad($areaId,$blockId)
    {
        $data = RoadEntry::where('areaId',$areaId)->where('blockId',$blockId)->where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data];
    }

    public function houseByRoad($areaId,$blockRoadId,$id)
    {
        // $data = HouseMarket::where('blockRoadId',$id)->where('shopId',Auth::user()->shopId)->get();
        $data = HouseMarket::where('areaId',$areaId)->where('blockRoadId',$blockRoadId)->where('roadId',$id)->where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data];

    }

    public function getTotalFloor($id)
    {
        $data = 0;
        if(HouseMarket::where('id',$id)->exists()){
            $data = (int)HouseMarket::where('id',$id)->first()->howMuchFloor;
        }
        return ['totalFloor' => $data];

    }

    public function viewArea()
    {
        $authId = Auth::user()->id;
        $data = Area::where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data,'authId'=>$authId];
    }

    // public function data_entry_area_show()
    // {
    //     $role = Auth::user()->role;
    //     $authId = Auth::user()->id;
    //     $areaIds = DB::table('area_assigns')
    //                     ->select('areaId')
    //                     // ->where('employeeId',$authId)
    //                     ->where('shopId',Auth::user()->shopId)
    //                     ->distinct()
    //                     ->get();


    //     $msg=array();
    //     foreach($areaIds as $information){
    //         $areaInfo = Area::where('id',$information->areaId)->first();
    //         $msg[]=array(
    //             "areaId"=>$areaInfo->id,
    //             "areaName"=>$areaInfo->areaName,
    //         );
    //     }
    //     return ['data' => $msg];
    // }

    public function data_entry_area_show()
    {
        $role = Auth::user()->role;
        $authId = Auth::user()->id;
        $data = AreaAssign::with('Area')->where('employeeId',$authId)->where('shopId',Auth::user()->shopId)->get();
        $adminArea = Area::where('shopId',Auth::user()->shopId)->get();
        return ['areaLists' => $data,'adminArea'=>$adminArea];
    }

    public function shop_gallery_show($id){
        $data = DataInformation::where('id',$id)->first();
        return ['data'=>$data];
    }

    public function viewAreaById($id)
    {
        $data = Area::where('thanaId',$id)->where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data];
    }

    public function viewMultiAreaById($id)
    {
        $ids = AreaAssign::distinct()->where('employeeId',Auth::user()->id)->get('thanaId');
        $data = Area::whereIn('thanaId',$ids)->where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data];
    }

    public function deleteArea($id)
    {
        $data = Area::where('id',$id)->where('shopId',Auth::user()->shopId)->delete();
        return ['data' => $data];
    }

    public function getSingleArea($id)
    {
        $data = Area::where('id',$id)->where('shopId',Auth::user()->shopId)->first();
        return ['data' => $data];
    }

    public function assignList()
    {
        $data = AreaAssign::with('Area')->where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data];
    }

    public function getUserLocation()
    {
        $data = AreaAssign::where('employeeId',Auth::user()->id)->where('shopId',Auth::user()->shopId)->first();
        return ['data' => $data];
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
    public function dataInformationReport()
    {
        $date = date('Y-m-d');
        if(Auth::user()->role==4){
            $data = DataInformation::where('created_at','LIKE',"$date%")->where('createBy',Auth::user()->id)->get();
        }
        else if(Auth::user()->role==3){
            $data = DataInformation::where('created_at','LIKE',"$date%")->where('shopId',Auth::user()->shopId)->get();
        }
        return ['data' => $data];
    }

    public function NewDataInformationView()
    {
        $role = Auth::user()->role;

          if($role==4){
             $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','RoadInformation','CategoryInformation','ProductTypeInformation','AreaInformation')
                                ->where('shopId',Auth::user()->shopId)
                                ->where('createBy',Auth::user()->id)
                                // ->whereNull('status_type_id')
                                ->where('category_status',1)
                                ->where('shopOrOffice','!=',3)
                                ->orderBy('id','DESC')
                                ->get();
        }

        if($role==3){
            $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','CreateByNameShow','RoadInformation','CategoryInformation','ProductTypeInformation','AreaInformation')
                                ->where('shopId',Auth::user()->shopId)
                                // ->whereNull('status_type_id')
                                ->where('category_status',1)
                                ->where('shopOrOffice','!=',3)
                                ->orderBy('id','DESC')
                                ->get();
        }

        // $data = DataInformation::with('HouseMarket','BlockRoad')
        //                         ->whereNull('status_type_id')
        //                         ->where('createBy',Auth::user()->id)
        //                         ->get();
        return ['data' => $data,'role'=>$role];
    }

    public function AllDataInformationView()
    {
        // $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation')->where('createBy',Auth::user()->id)->get();

        $role = Auth::user()->role;

        if($role==4){
             $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','CategoryInformation','RoadInformation','ProductTypeInformation','AreaInformation')
                                ->where('shopId',Auth::user()->shopId)
                                ->where('createBy',Auth::user()->id)
                                ->where('category_status','!=',5)
                                ->where('shopOrOffice','!=',3)
                                ->latest()
                                ->get();
        }

        if($role==3){
            $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','CreateByNameShow','CategoryInformation','RoadInformation','ProductTypeInformation','AreaInformation')
                                ->where('shopId',Auth::user()->shopId)
                                ->where('category_status','!=',5)
                                ->where('shopOrOffice','!=',3)
                                ->latest()
                                ->get();
        }

         return ['data' => $data,'role'=>$role];
    }

    public function GuestDataInformationView()
    {
        // $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation')->where('createBy',Auth::user()->id)->get();

        $role = Auth::user()->role;

        if($role==4){
             $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','CategoryInformation','RoadInformation','ProductTypeInformation','AreaInformation')
                                ->where('shopId',Auth::user()->shopId)
                                ->where('createBy',Auth::user()->id)
                                ->where('shopOrOffice',3)
                                ->where('category_status',5)
                                ->latest()
                                ->get();
        }

        if($role==3){
            $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','CreateByNameShow','CategoryInformation','RoadInformation','ProductTypeInformation','AreaInformation')
                                ->where('shopId',Auth::user()->shopId)
                                ->where('shopOrOffice',3)
                                ->where('category_status',5)
                                ->latest()
                                ->get();
        }

         return ['data' => $data,'role'=>$role];
    }

    public function followup_list()
    {
        // $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation')->where('createBy',Auth::user()->id)->get();

        $role = Auth::user()->role;

        if($role==4){
             $data = ProductTransfer::with('ShopInfo','ShopInfo.BlockRoad','ShopInfo.HouseMarket','ShopInfo.StatusTypeInformation','ShopInfo.CreateByNameShow','ShopInfo.CategoryInformation','ShopInfo.RoadInformation')
                                ->where('shopId',Auth::user()->shopId)
                                ->where('employeeToId',Auth::user()->id)
                                ->where('status',5)
                                ->latest()
                                ->get();
        }

        if($role==3){
            $data = ProductTransfer::with('ShopInfo','ShopInfo.BlockRoad','ShopInfo.HouseMarket','ShopInfo.StatusTypeInformation','ShopInfo.CreateByNameShow','ShopInfo.CategoryInformation','ShopInfo.RoadInformation')
                                ->where('shopId',Auth::user()->shopId)
                                ->where('status',5)
                                ->latest()
                                ->get();
        }

         return ['data' => $data,'role'=>$role];
    }

    public function followup_recycle()
    {
        // $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation')->where('createBy',Auth::user()->id)->get();

        $role = Auth::user()->role;

        if($role==4){
             $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','CategoryInformation','RoadInformation')
                                ->where('shopId',Auth::user()->shopId)
                                ->where('createBy',Auth::user()->id)
                                ->where('category_status',6)
                                ->latest()
                                ->get();
        }

        if($role==3){
            $data = DataInformation::with('HouseMarket','BlockRoad','StatusTypeInformation','CreateByNameShow','CategoryInformation','RoadInformation')
                                ->where('shopId',Auth::user()->shopId)
                                ->where('category_status',6)
                                ->latest()
                                ->get();
        }

         return ['data' => $data,'role'=>$role];
    }

    public function AllListView()
    {
        // $data = DataInformation::whereNotNull('status_type_id')->where('createBy',Auth::user()->id)->get();
        $data = DataInformation::where('createBy',Auth::user()->id)->get();
        return ['data' => $data];
    }

    public function dataInformationViewById($id)
    {
        $data = DataInformation::where('id',$id)->first();
        return ['data' => $data];
    }
    public function show_phone_number($id)
    {
        $data = DataInformation::where('id',$id)->first('mobileNo');
        return ['data' => $data];
    }

    public function default_message_show()
    {
        $data = DefaultMessageInformation::all();
        return ['data' => $data];
    }


    public function itemsTransfer(Request $request){
        $arrayData =$request->shop_id;
        foreach($arrayData as $data){
            if(DataInformation::where('createBy',$request->employeeId)->where('id',$data)->exists()){
                DataInformation::where('createBy',$request->employeeId)->where('id',$data)->update(['category_status'=>5]);
            }else{
                $info =  DataInformation::whereIn('id',$arrayData)->get();
                foreach($info as $newData){

                    DataInformation::where('id',$data)->update(['category_status'=>5]);

                    // $dataId= DataInformation::insertGetId([
                    //     'countryId' => $newData->countryId,
                    //     'divisionId' => $newData->divisionId,
                    //     'districtId' => $newData->districtId,
                    //     'thanaId' => $newData->thanaId,
                    //     'areaId' => $newData->areaId,
                    //     'blockRoadId' => $newData->blockRoadId,
                    //     'roadId' => $newData->roadId,
                    //     'houseMarketId' => $newData->houseMarketId,
                    //     'floorId' => $newData->floorId,
                    //     'shopOrOffice' => $newData->shopOrOffice,
                    //     'shopOfficeName' => $newData->shopOfficeName,
                    //     'shopOfficeNo' => $newData->shopOfficeNo,
                    //     'shopOfficeSize' => $newData->shopOfficeSize,
                    //     'mobileNo' => $newData->mobileNo,
                    //     'email' => $newData->email,
                    //     'facebook' => $newData->facebook,
                    //     'youtube' => $newData->youtube,
                    //     'intarest' => $newData->intarest,
                    //     'doYouUseSoftware' => $newData->doYouUseSoftware,
                    //     'usedSoftwareName' => $newData->usedSoftwareName,
                    //     'whyDisagree' => $newData->whyDisagree,
                    //     'productTypeId' => $newData->productTypeId,
                    //     'whatsapp' => $newData->whatsapp,
                    //     'contactNo' => $newData->contactNo,
                    //     'officerOrManager' => $newData->officerOrManager,
                    //     'owner_name' => $newData->owner_name,
                    //     'owner_phone' => $newData->owner_phone,
                    //     'manager_name' => $newData->manager_name,
                    //     'manager_phone' => $newData->manager_phone,
                    //     'haveComputer' => $newData->haveComputer,
                    //     'aboutSoftwareComment' => $newData->aboutSoftwareComment,
                    //     'expertPerson' => $newData->expertPerson,
                    //     'signboardImage' => $newData->signboardImage,
                    //     'visitingCardImage' => $newData->visitingCardImage,
                    //     'shopId' => $newData->shopId,
                    //     'category_status' => 5,
                    //     'time_distance' => date('Y-m-d H:i:s'),
                    //     'createBy' => $request->employeeId,
                    //     'created_at' => Carbon::now(),
                    // ]);

                    $transfer = new ProductTransfer();
                    $transfer->shopInfoId = $newData->id;
                    $transfer->employeeFromId = $newData->createBy;
                    $transfer->employeeToId = $request->employeeId;
                    $transfer->transfer_date = date('Y-m-d H:i:s');
                    $transfer->status = 5;
                    $transfer->shopId = $newData->shopId;
                    $transfer->save();
                    $referenceId = $transfer->id;

                    $newMessage = 'Welcome to '. $newData->shopOfficeName . " (" . $newData->shopOfficeNo.")  contact No :+88".$newData->mobileNo;

                    $title = 'Welcome to '. $newData->shopOfficeName;

                    TimelineInformation::insert([
                        'shopId' => $newData->shopId,
                        'shopInfoId' => $newData->id,
                        'referanceTypeId' => 1,
                        'referanceId' => $referenceId,
                        'title' =>$title,
                        'description' => $newMessage,
                        'date' => date('Y-m-d'),
                        'time' => date('H:i:s'),
                        'createBy' => $request->employeeId,
                        'created_at' => date('Y-m-d H:i:s'),
                    ]);

                }
            }

        }
    }

    public function GuestStore(Request $request){

        $this->validate($request,[
            'shopOfficeName' => 'required',
            'mobileNo' => 'required',
        ],
        [
           'shopOfficeName.required' => "Enter Name.",
           'mobileNo.required' => "Enter Mobile No.",
        ]
    );


    DB::beginTransaction();
    try {


     $dataId = DataInformation::insertGetId([
           'countryId' => 19,
           'divisionId' => 3,
           'districtId' =>1,
           'thanaId' =>528,
           'areaId' => 0,
           'blockRoadId' => 0,
           'roadId' => 0,
           'houseMarketId' => 0,
           'floorId' =>  0,
           'shopOrOffice' =>3,
           'shopOfficeName' => $request->shopOfficeName,
           'shopOfficeNo' =>  0,
           'shopOfficeSize' => 0,
           'mobileNo' => $request->mobileNo,
           'email' => $request->email,
           'facebook' => $request->facebook,
           'youtube' =>  0,
           'intarest' => 0,
           'doYouUseSoftware' => 0,
           'usedSoftwareName' => 0,
           'whyDisagree' => 0,
           'productTypeId' => 0,
           'whatsapp' => $request->whatsapp,
           'contactNo' => 0,
           'officerOrManager' => 0,
           'owner_name' =>  0,
           'owner_phone' =>  0,
           'manager_name' =>  0,
           'manager_phone' =>  0,
           'haveComputer' =>  0,
           'aboutSoftwareComment' => $request->aboutSoftwareComment,
           'expertPerson' => 0,
           'signboardImage' =>  0,
           'visitingCardImage' =>  0,
           'shopId' => Auth::user()->shopId,
           'createBy' => Auth::user()->id,
           'created_at' => Carbon::now(),
       ]);

        $newMessage ='Welcome to '. $request->shopOfficeName;

        $title = 'Welcome to '. $request->shopOfficeName;

      TimelineInformation::insert([
          'shopId' => Auth::user()->shopId,
          'shopInfoId' => $dataId,
          'referanceTypeId' => 1,
          'referanceId' => $dataId,
          'title' =>$title,
          'description' => $newMessage,
          'date' => date('Y-m-d'),
          'time' => date('H:i:s'),
          'createBy' => Auth::user()->id,
          'created_at' => date('Y-m-d H:i:s'),
      ]);


      $empInfo = ShopEmployeeEntry::where('shopEmployeeEntryId',Auth::user()->employeeId)->first();
      $empFullName = $empInfo->fullName;
      $empMobileNo = $empInfo->phoneNumber;

      $recipients = [$request->mobileNo];

        $customerMessage = "আপনার প্রতিষ্ঠানের জন্য POS Software, Accounting, Inventory, E-commerce & Website তৈরী করার জন্য Doofaz IT Limited এর দক্ষ টিম প্রস্তুত আছে। ";
        $customerMessage .= "\n$empFullName ($empMobileNo)";
        $customerMessage .= "\nHotline: 018-333-03-296 \n(call, Whatsapp)";

        $messages = [$customerMessage];

        // Send SMS
       //  $smsApiResponse = $this->sendSms($to, $message);

        // Send SMS to multiple recipients
        foreach ($recipients as $key => $recipient) {
            $smsApiResponse = $this->sendSms($recipient, $messages[$key]);

            // Check if the SMS request was successful for each recipient
            if (!$smsApiResponse['success']) {
                // If SMS operation fails, throw an exception to roll back the transaction
                throw new \Exception('Failed to send SMS to ' . $recipient);
            }
        } 
        

        // Check if the SMS request was successful
        if ($smsApiResponse['success']) {
            // If both database and SMS operations are successful, commit the transaction
            DB::commit();

            return response()->json(['success' => true, 'inserted_id' => $dataId]);
        } else {
            // If SMS operation fails, throw an exception to roll back the transaction
            throw new \Exception('Failed to send SMS');
        }
    } catch (\Exception $e) {
        // If an exception occurs within the transaction, it will be caught here
        // The transaction will be rolled back automatically
        // You can log the error or handle it as needed
        return response()->json(['error' => $e->getMessage()], 500);
    }


   }


   
   private function sendSms($to, $message)
   {
       $smsInfo = SmsApiInfo::where('OparetorId',2)->where('smsTypeId',1)->orderBy('id','DESC')->first();
       
       $username = $smsInfo->userName;
       $password = $smsInfo->password;
       $from = $smsInfo->from;
       

       // Build the API endpoint URL
       $apiUrl = $smsInfo->smsLinkUrl;

       // Build the cURL headers
       $headers = [
           'Content-Type' => 'application/x-www-form-urlencoded',
       ];

       // Build the cURL data
       $data = [
           'Username' => $username,
           'Password' => $password,
           'From' => $from,
           'To' => $to,
           'Message' => $message,
       ];

       // Create a new Guzzle client
       $client = new Client();

       // Make the cURL request
       $response = $client->post($apiUrl, [
           'headers' => $headers,
           'form_params' => $data,
       ]);

       // Check if the SMS request was successful
       if ($response->getStatusCode() == 200) {
           // Process the SMS API response if needed
           $apiResponse = json_decode($response->getBody(), true);

           return ['success' => true, 'api_response' => $apiResponse];
       } else {
           // If the SMS request was not successful, handle the error
           $errorResponse = json_decode($response->getBody(), true);

           return ['success' => false, 'error_response' => $errorResponse];
       }

   }

    public function shopNameShow()
    {
        $data = 
            DataInformation::with('HouseMarketName','AreaName')->select('id','areaId','houseMarketId','shopOfficeName')->
            where('createBy',Auth::user()->id)->orderBy('id','desc')
                                ->get();
        return ['data' => $data];
    }

    public function dataInformationEntry(Request $request)
    {

        // dd($request->all());
        // die();

        $this->validate(
            $request,
            [
                'countryId' => 'required',
                'divisionId' => 'required',
                'districtId' => 'required',
                'thanaId' => 'required',
                'areaId' => 'required',
                'blockRoadId' => 'required',
                'houseMarketId' => 'required',
                'floorId' => 'required',
                'shopOrOffice' => 'required',
                'shopOfficeName' => 'required',
                'mobileNo' => 'required|min:11',
                'intarest' => 'required',
                'doYouUseSoftware' => 'required',
                'productTypeId' => 'required',
                'officerOrManager' => 'required',
                'haveComputer' => 'required',
                'expertPerson' => 'required',
            ],
            [
                'countryId.required' => "Select Country.",
                'divisionId.required' => "Select Division.",
                'districtId.required' => "Select District.",
                'thanaId.required' => "Select Upazila.",
                'areaId.required' => "Select area.",
                'blockRoadId.required' => "Select blockRoadId.",
                'houseMarketId.required' => "Select houseMarketId.",
                'floorId.required' => "Select floorId.",
                'shopOrOffice.required' => "Select Shop Or Office.",
                'shopOfficeName.required' => "Enter Shop Or Office Name.",
                'mobileNo.required' => "Enter Mobile Number.",
                'intarest.required' => "select Intarest.",
                'doYouUseSoftware.required' => "select doYouUseSoftware.",
                'productTypeId.required' => "select Product Type.",
                'officerOrManager.required' => "select Officer Or Manager.",
                'haveComputer.required' => "select Have Computer.",
                'expertPerson.required' => "select Have Expert Person.",
            ]
        );

        
       DB::beginTransaction();
       try {

        $userLastData = DataInformation::where('createBy',Auth::user()->id)->orderBy('id','desc')->first();
        $lastEntryTime = $userLastData->created_at;


        if($lastEntryTime){
            $todayDateTime = date('Y-m-d H:i:s');
            $startTime = Carbon::parse($lastEntryTime);
            $finishTime = Carbon::parse($todayDateTime);
            $totalDuration = $startTime->diff($todayDateTime)->format('%H h %I m %S s');
        }else{
            $totalDuration = date('Y-m-d H:i:s');
            // $totalDuration = Carbon::parse($todayDateTime);
        }

        if(strpos($request->logo,';')){
            $strpos = strpos($request->logo,';');
            $sub = substr($request->logo,0,$strpos);
            $ex = explode('/',$sub)[1];
            $name = time().".".$ex;
            $img = Image::make($request->logo)->resize('300', null, function ($constraint) {
                $constraint->aspectRatio();
            });
            $upload_path = public_path()."/images/invoice_logo/";
            $img->save($upload_path.$name);
        }
        else{
            $name = '';
        }


        if(strpos($request->logo1,';')){
            $strpos1 = strpos($request->logo1,';');
            $sub1 = substr($request->logo1,0,$strpos1);
            $ex1 = explode('/',$sub1)[1];
            $name1 = time()."-1.".$ex1;
            $img1 = Image::make($request->logo1)->resize('300', null, function ($constraint) {
                $constraint->aspectRatio();
            });
            $upload_path1 = public_path()."/images/invoice_logo/";
            $img1->save($upload_path1.$name1);
        }
        else{
            $name1 = '';
        }


            $dataId = DataInformation::insertGetId([
            'countryId' => $request->countryId,
            'divisionId' => $request->divisionId,
            'districtId' => $request->districtId,
            'thanaId' => $request->thanaId,
            'areaId' => $request->areaId,
            'blockRoadId' => $request->blockRoadId,
            'roadId' => $request->roadId,
            'houseMarketId' => $request->houseMarketId,
            'floorId' => $request->floorId,
            'shopOrOffice' => $request->shopOrOffice,
            'shopOfficeName' => $request->shopOfficeName,
            'occupation' => $request->occupation,
            'designation' => $request->designation,
            'refer_by' => $request->refer_by,
            'address' => $request->address,
            'introduce_place' => $request->introduce_place,
            'shopOfficeNo' => $request->shopOfficeNo,
            'shopOfficeSize' => $request->shopOfficeSize,
            'mobileNo' => $request->mobileNo,
            'email' => $request->email,
            'facebook' => $request->facebook,
            'youtube' => $request->youtube,
            'intarest' => $request->intarest,
            'doYouUseSoftware' => $request->doYouUseSoftware,
            'usedSoftwareName' => $request->usedSoftwareName,
            'whyDisagree' => $request->whyDisagree,
            'productTypeId' => $request->productTypeId,
            'whatsapp' => $request->whatsapp,
            'contactNo' => $request->contactNo,
            'officerOrManager' => $request->officerOrManager,
            'owner_name' => $request->owner_name,
            'owner_phone' => $request->owner_phone,
            'manager_name' => $request->manager_name,
            'manager_phone' => $request->manager_phone,
            'haveComputer' => $request->haveComputer,
            'aboutSoftwareComment' => $request->aboutSoftwareComment,
            'expertPerson' => $request->expertPerson,
            'signboardImage' => $name,
            'visitingCardImage' => $name1,
            'shopId' => Auth::user()->shopId,
            'time_distance' => $totalDuration,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);

       $newMessage = 'Welcome to '. $request->shopOfficeName . " (" . $request->shopOfficeNo.")  contact No :+88".$request->mobileNo;

       $title = 'Welcome to '. $request->shopOfficeName;

       TimelineInformation::insert([
           'shopId' => Auth::user()->shopId,
           'shopInfoId' => $dataId,
           'referanceTypeId' => 1,
           'referanceId' => $dataId,
           'title' =>$title,
           'description' => $newMessage,
           'date' => date('Y-m-d'),
           'time' => date('H:i:s'),
           'createBy' => Auth::user()->id,
           'created_at' => date('Y-m-d H:i:s'),
       ]);



         
       $empInfo = ShopEmployeeEntry::where('shopEmployeeEntryId',Auth::user()->employeeId)->first();
       $empFullName = $empInfo->fullName;
       $empMobileNo = $empInfo->phoneNumber;
 
       $recipients = [$request->mobileNo];
 
         $customerMessage = "আপনার প্রতিষ্ঠানের জন্য POS Software, Accounting, Inventory, E-commerce & Website তৈরী করার জন্য Doofaz IT Limited এর দক্ষ টিম প্রস্তুত আছে। ";
         $customerMessage .= "\n$empFullName ($empMobileNo)";
         $customerMessage .= "\nHotline: 018-333-03-296 \n(call, Whatsapp)";
 
         $messages = [$customerMessage];
 
         // Send SMS
         // $smsApiResponse = $this->sendSms($to, $message);
 
         // Send SMS to multiple recipients
         foreach ($recipients as $key => $recipient) {
             $smsApiResponse = $this->sendSms($recipient, $messages[$key]);
 
             // Check if the SMS request was successful for each recipient
             if (!$smsApiResponse['success']) {
                 // If SMS operation fails, throw an exception to roll back the transaction
                 throw new \Exception('Failed to send SMS to ' . $recipient);
             }
         }
         
 
         // Check if the SMS request was successful
         if ($smsApiResponse['success']) {
             // If both database and SMS operations are successful, commit the transaction
             DB::commit();
 
             return response()->json(['success' => true, 'inserted_id' => $dataId]);
         } else {
             // If SMS operation fails, throw an exception to roll back the transaction
             throw new \Exception('Failed to send SMS');
         }
     } catch (\Exception $e) {
         // If an exception occurs within the transaction, it will be caught here
         // The transaction will be rolled back automatically
         // You can log the error or handle it as needed
         return response()->json(['error' => $e->getMessage()], 500);
     }

    }

    public function productTypeEntry(Request $request)
    {

        $this->validate(
            $request,
            [
                'productType' => 'required',
            ],
            [
                'productType.required' => "Enter Product Type.",
            ]
        );


        ProductType::insert([
            'productType' => $request->productType,
            'shopId' => Auth::user()->shopId,
            'createBy' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);

    }

    public function productTypeView()
    {
        $data = ProductType::where('shopId',Auth::user()->shopId)->get();
        return ['data' => $data];
    }

    public function GuestUpdate(){
        
    }

    public function dataInformationEdit(Request $request, $id)
    {

        $this->validate(
            $request,
            [
                'countryId' => 'required',
                'divisionId' => 'required',
                'districtId' => 'required',
                'thanaId' => 'required',
                'areaId' => 'required',
                'blockRoadId' => 'required',
                'houseMarketId' => 'required',
                'floorId' => 'required',
                'shopOrOffice' => 'required',
                'shopOfficeName' => 'required',
                'mobileNo' => 'required',
                'intarest' => 'required',
                'doYouUseSoftware' => 'required',
                'productTypeId' => 'required',
                'officerOrManager' => 'required',
                'haveComputer' => 'required',
                'expertPerson' => 'required',
            ],
            [

                'countryId.required' => "Select Country.",
                'divisionId.required' => "Select Division.",
                'districtId.required' => "Select District.",
                'thanaId.required' => "Select Upazila.",
                'areaId.required' => "Select area.",
                'blockRoadId.required' => "Select blockRoadId.",
                'houseMarketId.required' => "Select houseMarketId.",
                'floorId.required' => "Select floorId.",
                'shopOrOffice.required' => "Select Shop Or Office.",
                'shopOfficeName.required' => "Enter Shop Or Office Name.",
                'mobileNo.required' => "Enter Mobile Number.",
                'intarest.required' => "select Intarest.",
                'doYouUseSoftware.required' => "select doYouUseSoftware.",
                'productTypeId.required' => "select Product Type.",
                'officerOrManager.required' => "select Officer Or Manager.",
                'haveComputer.required' => "select Have Computer.",
                'expertPerson.required' => "select Have Expert Person.",
            ]
        );
        if(strpos($request->logo,';')){
            $strpos = strpos($request->logo,';');
            $sub = substr($request->logo,0,$strpos);
            $ex = explode('/',$sub)[1];
            $name = time().".".$ex;
            $img = Image::make($request->logo)->resize('300', null, function ($constraint) {
                $constraint->aspectRatio();
            });
            $upload_path = public_path()."/images/invoice_logo/";
            $img->save($upload_path.$name);
        }
        else{
            $name = '';
        }


        if(strpos($request->logo1,';')){
            $strpos1 = strpos($request->logo1,';');
            $sub1 = substr($request->logo1,0,$strpos1);
            $ex1 = explode('/',$sub1)[1];
            $name1 = time()."-1.".$ex1;
            $img1 = Image::make($request->logo1)->resize('300', null, function ($constraint) {
                $constraint->aspectRatio();
            });
            $upload_path1 = public_path()."/images/invoice_logo/";
            $img1->save($upload_path1.$name1);
        }
        else{
            $name1 = '';
        }



        DataInformation::where('id',$id)->update([
            'countryId' => $request->countryId,
            'divisionId' => $request->divisionId,
            'districtId' => $request->districtId,
            'thanaId' => $request->thanaId,
            'areaId' => $request->areaId,
            'blockRoadId' => $request->blockRoadId,
            'houseMarketId' => $request->houseMarketId,
            'floorId' => $request->floorId,
            'shopOrOffice' => $request->shopOrOffice,
            'shopOfficeName' => $request->shopOfficeName,
            'shopOfficeNo' => $request->shopOfficeNo,
            'shopOfficeSize' => $request->shopOfficeSize,
            'mobileNo' => $request->mobileNo,
            'email' => $request->email,
            'facebook' => $request->facebook,
            'youtube' => $request->youtube,
            'intarest' => $request->intarest,
            'doYouUseSoftware' => $request->doYouUseSoftware,
            'usedSoftwareName' => $request->usedSoftwareName,
            'whyDisagree' => $request->whyDisagree,
            'productTypeId' => $request->productTypeId,
            'whatsapp' => $request->whatsapp,
            'contactNo' => $request->contactNo,
            'officerOrManager' => $request->officerOrManager,
            'owner_name' => $request->owner_name,
            'owner_phone' => $request->owner_phone,
            'manager_name' => $request->manager_name,
            'manager_phone' => $request->manager_phone,
            'haveComputer' => $request->haveComputer,
            'aboutSoftwareComment' => $request->aboutSoftwareComment,
            'expertPerson' => $request->expertPerson,
            'signboardImage' =>$name,
            'visitingCardImage' => $name1,
            'shopId' => Auth::user()->shopId,
            'updateBy' => Auth::user()->id,
            'updated_at' => Carbon::now(),
        ]);




    }

    public function store(Request $request)
    {

        $this->validate(
            $request,
            [
                'shopTypeId' => 'required',
                'shopSirialId' => 'required',
                'shopName' => 'required',
                // 'email' => 'required',
                'email' => 'required | unique:admins',


                'shopOwnerName' => 'required',
                'shopOwnerMobileNo' => 'required',

                'SRName' => 'required',
                'SRMobileNo' => 'required',

                'CPName' => 'required',
                'CPMobileNo' => 'required',

                'countryId' => 'required',
                'divisionId' => 'required',
                'districtId' => 'required',
                'thanaId' => 'required',
                'currencyId' => 'required',

                'addressLine1' => 'required',
            ],
            [
                'shopTypeId.required' => "Enter shop type.",
                'shopSirialId.required' => "Enter shop serial id.",
                'shopName.required' => "Enter shop name.",
                'email.required' => "Enter shop user name.",
                'refferUserId.required' => "Enter refer user name.",
                'haveBranch.required' => "Select have branch.",

                'shopOwnerName.required' => "Enter owner name.",
                'shopOwnerMobileNo.required' => "Enter owner mobile no.",

                'SRName.required' => "Enter representative name.",
                'SRMobileNo.required' => "Enter representative mobile no.",

                'CPName.required' => "Enter contact person name.",
                'CPMobileNo.required' => "Enter contact person mobile no.",

                'countryId.required' => "Select Country.",
                'divisionId.required' => "Select Division.",
                'districtId.required' => "Select District.",
                'thanaId.required' => "Select Upazila.",
                'currencyId.required' => "Select Currency.",

                'addressLine1.required' => "Enter Address Line 1.",
            ]
        );



        $getShopBillAmount = ShopBillingAmount::where('billType', 1)->where('countryId',$request->get('countryId'))->first()->billAmount;
        // $getBranchBillAmount = ShopBillingAmount::where('billType', 2)->where('countryId',$request->get('countryId'))->first()->billAmount;
        // $getShopBillAmount = 0;
        $getBranchBillAmount = 0;

        $ShopInformation = new Admin();

        $shopTypeId = $request->get('shopTypeId');
        // $shopSirialId = $request->get('shopSirialId');
        $shopSirialId = '-1';
        $shopSirialNo = $request->get('shopSirialNo');
        $shopName = $request->get('shopName');

        $email = $request->get('email');
        $refferUserId = $request->get('refferUserId');
        $refferType = $request->get('refferType');
        $haveBranch = $request->get('haveBranch');
        $totalBranch = $request->get('totalBranch');
        $countryId = $request->get('countryId');
        $currencyId = $request->get('currencyId');
        $ShopInformation->shopTypeId = $shopTypeId;
        $ShopInformation->shopSirialId = $shopSirialId;
        $ShopInformation->shopSirialNo = $shopSirialNo;
        $ShopInformation->shopName = $shopName;
        $ShopInformation->userName = $email;
        $ShopInformation->email = $email;
        $ShopInformation->refferUserId = $refferUserId;
        $ShopInformation->refferType = $refferType;
        $ShopInformation->haveBranch = $haveBranch;
        $ShopInformation->totalBranch = $totalBranch;
        $ShopInformation->countryId = $countryId;
        $ShopInformation->currencyId = $currencyId;
        $ShopInformation->password = Hash::make('123');
        $ShopInformation->pass = '123';
        $ShopInformation->role = 3;
        $ShopInformation->lastLoginIp = '1';

        $ShopInformation->shopLicenceTypeId = '0';
        $ShopInformation->status = '1';
        $ShopInformation->deleteStatus = '0';
        $ShopInformation->createBy = '1';

        $ShopInformation->save();


        $shopId = $ShopInformation->id;
        Admin::where('id', $shopId)->update([
            'shopId' => $shopId
        ]);


        $ShopAccountInformation = new ShopAccountIntormation();

        // $branchBill = $getBranchBillAmount * $totalBranch;
        $branchBill = 0;
        $totalBill = $getShopBillAmount + $branchBill;

        $ShopAccountInformation->shopId = $shopId;
        $ShopAccountInformation->billAmount = $totalBill;

        $infoAccount = $ShopAccountInformation->save();







        $ShopOwnerInformation = new ShopOwnerInformation();

        $shopOwnerName = $request->get('shopOwnerName');
        $shopOwnerMobileNo = $request->get('shopOwnerMobileNo');
        $shopOwnerEmail = $request->get('shopOwnerEmail');
        $shopOwnerAddress = $request->get('shopOwnerAddress');
        $shopOwnerPhoneNo = $request->get('shopOwnerPhoneNo');

        $ShopOwnerInformation->shopId = $shopId;
        $ShopOwnerInformation->ownerTypeId = 1;
        $ShopOwnerInformation->sirialNo = 1;
        $ShopOwnerInformation->headCode = 0;
        $ShopOwnerInformation->shopOwnerName = $shopOwnerName;
        $ShopOwnerInformation->shopOwnerMobileNo = $shopOwnerMobileNo;
        $ShopOwnerInformation->shopOwnerEmail = $shopOwnerEmail;
        $ShopOwnerInformation->shopOwnerAddress = $shopOwnerAddress;
        $ShopOwnerInformation->shopOwnerPhoneNo = $shopOwnerPhoneNo;
        $ShopOwnerInformation->status = '1';
        $ShopOwnerInformation->deleteStatus = '1';
        $ShopOwnerInformation->createBy = '1';

        $infoOwner = $ShopOwnerInformation->save();


        $ShopContactPersonInformation = new ShopContactPersonInformation();

        $CPName = $request->get('CPName');
        $CPMobileNo = $request->get('CPMobileNo');
        $CPEmail = $request->get('CPEmail');
        $CPAddress = $request->get('CPAddress');
        $CPPhoneNo = $request->get('CPPhoneNo');

        $ShopContactPersonInformation->shopId = $shopId;
        $ShopContactPersonInformation->CPName = $CPName;
        $ShopContactPersonInformation->CPMobileNo = $CPMobileNo;
        $ShopContactPersonInformation->CPEmail = $CPEmail;
        $ShopContactPersonInformation->CPAddress = $CPAddress;
        $ShopContactPersonInformation->CPPhoneNo = $CPPhoneNo;
        $ShopContactPersonInformation->status = '1';
        $ShopContactPersonInformation->deleteStatus = '1';
        $ShopContactPersonInformation->createBy = '1';

        $infoContactPerson = $ShopContactPersonInformation->save();


        $ShopRepresentativeInformation = new ShopRepresentativeInformation();

        $SRName = $request->get('SRName');
        $SRMobileNo = $request->get('SRMobileNo');
        $SREmail = $request->get('SREmail');
        $SRAddress = $request->get('SRAddress');
        $SRPhoneNo = $request->get('SRPhoneNo');

        $ShopRepresentativeInformation->shopId = $shopId;
        $ShopRepresentativeInformation->SRName = $SRName;
        $ShopRepresentativeInformation->SRMobileNo = $SRMobileNo;
        $ShopRepresentativeInformation->SREmail = $SREmail;
        $ShopRepresentativeInformation->SRAddress = $SRAddress;
        $ShopRepresentativeInformation->SRPhoneNo = $SRPhoneNo;
        $ShopRepresentativeInformation->status = '1';
        $ShopRepresentativeInformation->deleteStatus = '1';
        $ShopRepresentativeInformation->createBy = '1';

        $infoContactPerson = $ShopRepresentativeInformation->save();


        $ShopAddressLocation = new ShopAddressLocation();


        $districtId = $request->get('districtId');
        $unionId = $request->get('unionId');
        $addressLine1 = $request->get('addressLine1');
        $front = $request->get('front');
        $left = $request->get('left');
        $shopSize = $request->get('shopSize');
        $shopNo = $request->get('shopNo');
        $divisionId = $request->get('divisionId');
        $thanaId = $request->get('thanaId');
        $wardId = $request->get('wardId');
        $addressLine2 = $request->get('addressLine2');
        $back = $request->get('back');
        $right = $request->get('right');
        $marketName = $request->get('marketName');
        $areaKnownName = $request->get('areaKnownName');

        $ShopAddressLocation->shopId = $shopId;
        $ShopAddressLocation->branchId = '1';
        $ShopAddressLocation->countryId = $countryId;
        $ShopAddressLocation->divisionId = $divisionId;
        $ShopAddressLocation->districtId = $districtId;
        $ShopAddressLocation->thanaId = $thanaId;
        $ShopAddressLocation->unionId = $unionId;
        $ShopAddressLocation->wardId = $wardId;
        $ShopAddressLocation->addressLine1 = $addressLine1;
        $ShopAddressLocation->addressLine2 = $addressLine2;
        $ShopAddressLocation->front = $front;
        $ShopAddressLocation->back = $back;
        $ShopAddressLocation->left = $left;
        $ShopAddressLocation->right = $right;
        $ShopAddressLocation->shopSize = $shopSize;
        $ShopAddressLocation->marketName = $marketName;
        $ShopAddressLocation->shopNo = $shopNo;
        $ShopAddressLocation->areaKnownName = $areaKnownName;
        $ShopAddressLocation->status = '1';
        $ShopAddressLocation->deleteStatus = '1';
        $ShopAddressLocation->createBy = '1';

        $infoContactPerson = $ShopAddressLocation->save();

            //   ================================
            $to = "$shopOwnerEmail,sales@cashbook.com.bd";

            $subject = 'Registration welcome mail';

            $headers = "From: Cashbook.com.bd <" . strip_tags('sales@cashbook.com.bd') . ">\r\n";
            $headers .= "Reply-To: ". strip_tags('sales@cashbook.com.bd') . "\r\n";
            //$headers .= "CC: doofazinfo@gmail.com\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


            $message = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
            <head>
                <!--[if gte mso 9]>
                <xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="format-detection" content="date=no" />
                <meta name="format-detection" content="address=no" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="x-apple-disable-message-reformatting" />
                <!--[if !mso]><!-->
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i" rel="stylesheet" />

                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">
                <link rel="preconnect" href="https://fonts.googleapis.com">

                <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Josefin+Sans&display=swap" rel="stylesheet"> <!--<![endif]-->
                <title>Cashbook.com.bd</title>
                <!--[if gte mso 9]>
                <style type="text/css" media="all">
                    sup { font-size: 100% !important; }
                </style>
                <![endif]-->


                <style type="text/css" media="screen">
                    /* Linked Styles */
                    body { padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#c5c1ff; -webkit-text-size-adjust:none }
                    a { color:#66c7ff; text-decoration:none }
                    p { padding:0 !important; margin:0 !important }
                    img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
                    .mcnPreviewText { display: none !important; }


                    /* Mobile styles */
                    @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
                        .mobile-shell { width: 100% !important; min-width: 100% !important; }
                        .bg { background-size: 100% auto !important; -webkit-background-size: 100% auto !important; }

                        .text-header,
                        .m-center { text-align: center !important; }

                        .center { margin: 0 auto !important; }
                        .container { padding: 20px 10px !important }

                        .td { width: 100% !important; min-width: 100% !important; }

                        .m-br-15 { height: 15px !important; }
                        .p30-15 { padding: 30px 15px !important; }
                        .p40 { padding: 20px !important; }

                        .m-td,
                        .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }

                        .m-block { display: block !important; }

                        .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }

                        .column,
                        .column-top,
                        .column-empty,
                        .column-empty2,
                        .column-dir-top { float: left !important; width: 100% !important; display: block !important; }
                        .column-empty { padding-bottom: 10px !important; }
                        .column-empty2 { padding-bottom: 20px !important; }
                        .content-spacing { width: 15px !important; }
                    }
                </style>
            </head>
            <body class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#f4f4f4; -webkit-text-size-adjust:none;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#c5c1ff">
                    <tr>
                        <td align="center" valign="top">
                            <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                                <tr>
                                    <td class="td container" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; margin:0; font-weight:normal; padding:55px 0px;">
                                        <!-- Header -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="padding-bottom: 20px;">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td class="p30-15" style="padding: 25px 30px 25px 30px;" bgcolor="#ffffff">
                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th class="column-top" width="145" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                <tr>
                                                                                    <td class="img m-center" style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                        <a href="https://cashbook.com.bd" target="_blank">
                                                                                            <img src="https://cashbook.com.bd/public/assets/logo/logo.png" width="167" height="45" editable="true" border="0" alt="" />
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </th>
                                                                        <th class="column-empty" width="1" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;"></th>
                                                                        <th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                <tr>
                                                                                    <td class="text-header" style="color:#999999; font-family:Noto Sans, Arial,sans-serif; font-size:12px; line-height:16px; text-align:right; text-transform:uppercase;"><multiline><webversion class="link2" style="color:#999999; text-decoration:none;">
                                                                                    <b><u style="color:rgb(0, 0, 0);">Hotline</u></b>

                                                                                    <span style="color:rgb(0, 0, 0);font-size:17px;">+880 1921-0000-11</span> <br>
                                                                                    <b><u style="color:rgb(9, 177, 37);">Whatsapp</u></b>

                                                                                    <span style="color:rgb(9, 177, 37);font-size:17px;">+880 1921-0000-11</span>
                                                                                 </webversion></multiline></td>
                                                                                </tr>
                                                                            </table>
                                                                        </th>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END Header -->

                                        <repeater>
                                            <!-- Intro -->
                                            <layout label="Intro">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td style="padding-bottom: 20px;">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                <tr>
                                                                    <td background="https://www.damcogroup.com/wp-content/themes/DamcoNew/images/img-edit/img-edit-banner.jpg" bgcolor="#114490" valign="top" height="366" class="bg" style="background-size:cover !important; -webkit-background-size:cover !important; background-repeat:none;">
                                                                        <!--[if gte mso 9]>
                                                                        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:650px; height: 366px">
                                                                            <v:fill type="frame" src="images/t8_bg.jpg" color="#114490" />
                                                                            <v:textbox inset="0,0,0,0">
                                                                        <![endif]-->
                                                                        <div>
                                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                <tr>
                                                                                    <td class="content-spacing" width="30" height="366" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                                    <td style="padding: 30px 0px;">
                                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                            <tr>
                                                                                                <td class="h1 center pb25" style="color:#ffffff; font-family: Dancing Script, cursive; font-size:40px; line-height:46px; text-align:center; padding-bottom:25px;">
                                                                                                    <small style="float:left;font-size: 50px;margin-bottom: 20px;">Hi, '. $shopName.'</small>

                                                                                                 </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="text-center" style="color:#ffffff; font-family:Noto Sans, Arial,sans-serif; font-size:16px; line-height:30px; text-align:center;">
                                                                                                    <multiline>Congratulation for Registration.';


                                                                                                    $message .= '<p>'.$shopOwnerName.'</p>';
                                                                                                    $message .= '<p>'. $shopOwnerMobileNo .'</p>';
                                                                                                    $message .= 'within short time our team receive your request & soon contact with you via phone/whatsapp. </multiline></td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                    <td class="content-spacing" width="30" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                        <!--[if gte mso 9]>
                                                                            </v:textbox>
                                                                            </v:rect>
                                                                        <![endif]-->
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="mp15" style="padding: 20px 30px;"  align="center">
                                                                        <table border="0" cellspacing="0" cellpadding="0">
                                                                            <tr>
                                                                                <th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                        <tr>
                                                                                            <td class="h5 white" style="font-family:Noto Sans, Arial,sans-serif; font-size:16px; line-height:22px; text-align:left; font-weight:bold; color:#ffffff;"><multiline>
                                                                                            <center>
                                                                                                    <a href="https://cashbook.com.bd/about" target="_blank" class="link-white"  style="background:url(https://livedemo00.template-help.com/wt_55108/images/banner/background-03-1920x310.jpg);background-size:100% 100%; color:#ffffff; font-family:Noto Sans, Arial,sans-serif; font-size:14px; line-height:18px; padding:12px 20px; text-align:center; border-radius:6px;color:white;">
                                                                                                        <span class="link-white" style="color:#ffffff; text-decoration:none;"> About Cashbook </span>
                                                                                                    </a>
                                                                                                </center> </multiline></td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </th>

                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </layout>
                                            <!-- END Intro -->


                                        </repeater>

                                        <!-- Footer -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td class="p30-15" style="padding: 50px 30px;" bgcolor="#ffffff">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td align="center" style="padding-bottom: 30px;">
                                                                <table border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <td class="img" width="55" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank">
                                                                            <div style="width:38px;height:38px;">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                                                                                </div>
                                                                             </a></td>
                                                                        <td class="img" width="55" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank">
                                                                            <div style="width:38px;height:38px;">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                                                                                </div>
                                                                             </a></td>
                                                                        <td class="img" width="55" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank">
                                                                            <div style="width:38px;height:38px;">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                                                                </div>
                                                                             </a></td>
                                                                        <td class="img" width="38" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank">
                                                                            <div style="width:38px;height:38px;color:red;">
                                                                                <svg style="color: red;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path style="color: red;" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                                                                                </div>
                                                                             </a></td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer1 pb10" style="color:#777; font-family:Noto Sans, Arial,sans-serif; font-size:16px; line-height:20px; text-align:center; padding-bottom:10px;"><multiline>Cashbook.com.bd</multiline></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb10" style="color:#777; font-family:Noto Sans, Arial,sans-serif; font-size:12px; line-height:26px; text-align:center;"><multiline>Call : +880 1921 00 00 11 </multiline></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb10" style="color:#777; font-family:Noto Sans, Arial,sans-serif; font-size:12px; line-height:26px; text-align:center;"><multiline>Whats App : +880 1921 00 00 11 </multiline></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb30" style="color:#777; font-family:Noto Sans, Arial,sans-serif; font-size:12px; line-height:26px; text-align:center; padding-bottom:30px;"><multiline>H#20 (D1), Block-G, Main Road, Banasree, Dhaka-1219</multiline></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb10" style="color:#777; font-family:Noto Sans, Arial,sans-serif; font-size:12px; line-height:26px; text-align:center;"><multiline>Web : https://cashbook.com.bd | E-mail : sales@cashbook.com.bd </multiline></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb10" style="color:#777; font-family:Noto Sans, Arial,sans-serif; font-size:12px; line-height:26px; text-align:center;"><multiline> FB Page : https://web.facebook.com/cashbook.com.bd </multiline></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb10" style="color:#777; font-family:Noto Sans, Arial,sans-serif; font-size:12px; line-height:26px; text-align:center;"><multiline> FB Group : https://web.facebook.com/groups/cashbook.com.bd </multiline></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb10" style="color:#777; font-family:Noto Sans, Arial,sans-serif; font-size:12px; line-height:26px; text-align:center;"><multiline> Linked IN : https://www.linkedin.com/company/cashbookbd/ </multiline></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb10" style="color:#777; font-family:Noto Sans, Arial,sans-serif; font-size:12px; line-height:26px; text-align:center;"><multiline> Youtube : https://www.youtube.com/channel/UC7MXjOcKNWrFpE9_rd_oekg </multiline></td>
                                                        </tr>

                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END Footer -->
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            </html>';

            //mail($to, $subject, $message, $headers);

        return ['data' => "$infoContactPerson"];
    }
    public function shopInformationUpdate(Request $request)
    {

        $this->validate(
            $request,
            [
                'shopLicenceTypeId' => 'required',
            ],
            [
                'shopLicenceTypeId.required' => "Enter company type.",
            ]
        );




        Admin::where('role',3)->where('shopId',Auth::user()->shopId)->update([
            'shopName' => $request->shopName,
            'shopLicenceTypeId' => $request->shopLicenceTypeId,
            'authorizeShare' => $request->authorizeShare,
            'perShareValue' => $request->perShareValue,
            'authorizeCapital' => $request->authorizeCapital,
            'website' => $request->website,
            'facebook' => $request->facebook,
            'youtube' => $request->youtube,
            'updateBy' => Auth::user()->id,
            'updated_at' => Carbon::now(),
        ]);


        return ['data' => 1];
    }


    public function shopOwnerGet()
    {
        $info = ShopOwnerInformation::where('shopId',Auth::user()->shopId)->get();

        $msg2 = array();
        foreach($info as $data){

            $shareAmount = 0;
            $expense2 = 0;
            $expense12 = 0;

            if(voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode',$data->headCode)->exists()){
                $expense2 = voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode',$data->headCode)->sum('voucherAmount');

                $expense12 -= $expense2;
               }
                if(voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode',$data->headCode)->exists()){
                $expense2 = voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode',$data->headCode)->sum('voucherAmount');

                $expense12 += $expense2;
               }

               $shareAmount = $expense12;

            $msg2[] = array(
                "shopOwnerInfoId" => $data->shopOwnerInfoId,
                "ownerTypeId" => $data->ownerTypeId,
                "headCode" => $data->headCode,
                "shopOwnerName" => $data->shopOwnerName,
                "shopOwnerMobileNo" => $data->shopOwnerMobileNo,
                "shopOwnerEmail" => $data->shopOwnerEmail,
                "shopOwnerAddress" => $data->shopOwnerAddress,
                "shareAmount" => $shareAmount,
                );

            }

        return ['data' => $msg2];
    }
    public function shopOwnerDelete($id)
    {

        $info = ShopOwnerInformation::where('shopOwnerInfoId',$id)->where('shopId',Auth::user()->shopId)->first();
        $headCode = $info->headCode;
        $data = ShopOwnerInformation::where('shopOwnerInfoId',$id)->where('shopId',Auth::user()->shopId)->delete();
        if($data){
            ChartOfAccountRegister::where('shopId',Auth::user()->shopId)->where('headCode',$headCode)->delete();
        }
        return ['data' => $data];
    }


    public function shopOwnerEntry(Request $request)
    {

        $this->validate(
            $request,
            [
                'ownerTypeId' => 'required',
                'shopOwnerName' => 'required',
                'shopOwnerMobileNo' => 'required',
            ],
            [
                'ownerTypeId.required' => "Select owner Type.",
                'shopOwnerName.required' => "Enter owner name.",
                'shopOwnerMobileNo.required' => "Enter owner mobile no.",
            ]
        );








        $ShopOwnerInformation = new ShopOwnerInformation();

        $ownerTypeId = $request->get('ownerTypeId');
        $shopOwnerName = $request->get('shopOwnerName');
        $shopOwnerMobileNo = $request->get('shopOwnerMobileNo');
        $shopOwnerEmail = $request->get('shopOwnerEmail');
        $shopOwnerAddress = $request->get('shopOwnerAddress');
        $shopOwnerPhoneNo = $request->get('shopOwnerPhoneNo');

        $ShopOwnerInformation->shopId = Auth::user()->shopId;
        $ShopOwnerInformation->ownerTypeId = $ownerTypeId;
        $ShopOwnerInformation->sirialNo = 1;
        $ShopOwnerInformation->headCode = 0;
        $ShopOwnerInformation->shopOwnerName = $shopOwnerName;
        $ShopOwnerInformation->shopOwnerMobileNo = $shopOwnerMobileNo;
        $ShopOwnerInformation->shopOwnerEmail = $shopOwnerEmail;
        $ShopOwnerInformation->shopOwnerAddress = $shopOwnerAddress;
        $ShopOwnerInformation->shopOwnerPhoneNo = $shopOwnerPhoneNo;
        $ShopOwnerInformation->status = '1';
        $ShopOwnerInformation->deleteStatus = '1';
        $ShopOwnerInformation->createBy = Auth::user()->id;

        $infoOwner = $ShopOwnerInformation->save();


        return ['data' => "$infoOwner"];
    }

    public function topupBalance(Request $request)
    {

        $shopId = Auth::user()->shopId;
        $select_amount = ShopAccountIntormation::where('shopId', $shopId)->first();
        $current_amount = $select_amount->topupCurrentBalance;
        $amount = $request->get('amount') + $current_amount;

        $ShopAccount =  ShopAccountIntormation::where('shopId', $shopId)->update([
            'topupCurrentBalance' => $amount,
        ]);

        return ['data' => "$ShopAccount"];
    }

    public function payBill($id)
    {

        $billRequest = ShopBillingRequest::where('id',$id)->first();
        $shopId = $billRequest->shopId;
        $select_amount = ShopAccountIntormation::where('shopId', $shopId)->first();
        $today = $select_amount->billingDate;
        $billingDate =  date('Y-m-d H:i:s', strtotime("$today +$billRequest->totalMonth Months"));

        $current_amount = $select_amount->topupCurrentBalance;
        $amount = $billRequest->amount;

        $ShopAccount =  ShopAccountIntormation::where('shopId', $shopId)->update([
            'topupCurrentBalance' => $amount,
            'billingDate' => $billingDate,
            'billingGraceDate' => '',
        ]);

        $Shop =  Admin::where('shopId', $shopId)->update([
            'paymentStatus' => 2,
            'status' => 13,
        ]);
        BillingDetailsInfo::where('shopId',$shopId)->delete();
        ShopBillingRequest::where('id',$id)->update([
            'status' => '2'
        ]);

        $ShopOwnerInformation =  ShopOwnerInformation::where('shopId', $shopId)->first();



// mail configareation


$to = $ShopOwnerInformation->shopOwnerEmail;
if(!empty($to)){
$subject = 'Cashbook Bill Approve';

$headers = "From: Cashbook.com.bd <" . strip_tags('sales@cashbook.com.bd') . ">\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$message = '<html><body>';
$message .= "<h4> Dear Customer </h4>";
$message .= "<p>Your bill approved by cashbook billing department. you pay $billRequest->totalMonth bill $amount tk.
 your validity until $billingDate.  </p>";



 $message .= "<p>Call : 01921-0000-11</p>";
 $message .= "<p>Whats App : 01921-0000-11</p>";
 $message .= "<p>Mail : sales@cashbook.com.bd</p>";
 $message .= "<p> <a href='https://web.facebook.com/cashbook.com.bd' target='_blank'>Facebook Page</a></p>";
 $message .= "<p> <a href='https://web.facebook.com/groups/cashbook.com.bd' target='_blank'>Facebook Group</a></p>";
 $message .= "<p> <a href='https://www.linkedin.com/company/cashbookbd/' target='_blank'>Linked IN</a></p>";
 $message .= "<p> <a href='https://www.youtube.com/channel/UC7MXjOcKNWrFpE9_rd_oekg' target='_blank'>Youtube</a></p>";
 $message .= "<p><a href='https://cashbook.com.bd' target='_blank'>visit Website</a>  </p>";
 $message .= "</body></html>";

mail($to, $subject, $message, $headers);
}


        return ['data' => "$ShopAccount"];
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

        // $data = DB::table('admins')
        //     ->select('admins.*', 'shop_owner_information.*', 'shop_contact_person_information.*', 'shop_representative_information.*', 'shop_address_locations.*')
        //     ->join('shop_contact_person_information', 'shop_contact_person_information.shopId', '=', 'admins.id')
        //     ->join('shop_owner_information', 'shop_owner_information.shopId', '=', 'shop_contact_person_information.shopId')
        //     ->join('shop_representative_information', 'shop_representative_information.shopId', '=', 'shop_owner_information.shopId')
        //     ->join('shop_address_locations', 'shop_address_locations.shopId', '=', 'shop_representative_information.shopId')
        //     ->where('admins.id', '=', $id)
        //     ->first();
       $data=ShopAccountIntormation::where('id',$id)->first();

        return response()->json($data);
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

        if ($request->get('billingDate')) {
            $getDate = ShopAccountIntormation::where('id', $id)->first();
            $to =Carbon::createFromFormat('Y-m-d H:s:i',  $getDate->billingDate);
            $from = $request->get('billingDate');
            $diff_in_days = $to->diffInDays($from);
            $get = GraceDateEntry::first();
            if ($diff_in_days < $get->dayLimit) {
                $updateDate = $request->get('billingDate');
                $message = $request->get('message');

                // update
                $ShopAccount =  Admin::where('shopId', $getDate->shopId)->update([
                    'paymentStatus' => 3
                ]);
                // update
                $ShopAccount =  ShopAccountIntormation::where('id', $id)->update([
                    'billingGraceDate' => $updateDate
                ]);

                // update


                // insert
                $graceInfo = new ShopBillingGraceInformation();
                $graceInfo->shopId = $id;
                $graceInfo->date = $updateDate;
                $graceInfo->message = $message;
                $graceInfo->create_by = Auth::user()->id;
                $graceInfo->update_by = Auth::user()->id;
                $graceInfo->save();
                // insert

                return ['data' => '1'];
            } else {
                return ['msg' => 'error'];
            }
        } else if ($request->get('shopOwnerName')) {

            $this->validate(
                $request,
                [
                    'shopTypeId' => 'required',
                    'shopSirialId' => 'required',
                    'shopName' => 'required',
                    // 'email' => 'required',
                    // 'email' => 'required | unique:admins',
                    'refferUserId' => 'required',
                    'haveBranch' => 'required',
                    'totalBranch' => 'required',

                    'shopOwnerName' => 'required',
                    'shopOwnerMobileNo' => 'required',

                    'SRName' => 'required',
                    'SRMobileNo' => 'required',

                    'CPName' => 'required',
                    'CPMobileNo' => 'required',

                    'countryId' => 'required',
                    'divisionId' => 'required',
                    'districtId' => 'required',
                    'thanaId' => 'required',
                    'unionId' => 'required',
                    'wardId' => 'required',
                    'addressLine1' => 'required',
                ],
                [
                    'shopTypeId.required' => "Enter shop type.",
                    'shopSirialId.required' => "Enter shop sirial id.",
                    'shopName.required' => "Enter shop name.",
                    // 'email.required' => "Enter shop user name.",
                    'refferUserId.required' => "Enter refer user name.",
                    'haveBranch.required' => "Select have branch.",

                    'shopOwnerName.required' => "Enter owner name.",
                    'shopOwnerMobileNo.required' => "Enter owner moibile no.",

                    'SRName.required' => "Enter representative name.",
                    'SRMobileNo.required' => "Enter representative moibile no.",

                    'CPName.required' => "Enter contact person name.",
                    'CPMobileNo.required' => "Enter contact person moibile no.",

                    'countryId.required' => "Select Country.",
                    'divisionId.required' => "Select Division.",
                    'districtId.required' => "Select District.",
                    'thanaId.required' => "Select Upazial.",
                    'unionId.required' => "Select Union.",
                    'wardId.required' => "Select Ward.",
                    'addressLine1.required' => "Enter Address Line 1.",
                ]
            );





            $ShopInformation =  Admin::find($id);

            $shopTypeId = $request->get('shopTypeId');
            $shopSirialId = $request->get('shopSirialId');
            $shopName = $request->get('shopName');
            $email = $request->get('email');
            $refferUserId = $request->get('refferUserId');
            $haveBranch = $request->get('haveBranch');
            $totalBranch = $request->get('totalBranch');




            $ShopInformation->shopTypeId = $shopTypeId;
            $ShopInformation->shopSirialId = $shopSirialId;
            $ShopInformation->shopName = $shopName;
            $ShopInformation->email = $email;
            $ShopInformation->refferUserId = $refferUserId;
            $ShopInformation->haveBranch = $haveBranch;
            $ShopInformation->totalBranch = $totalBranch;
            $ShopInformation->password = Hash::make('123');
            $ShopInformation->pass = '123';
            $ShopInformation->lastLoginIp = '1';

            $ShopInformation->shopLicenceTypeId = '0';
            $ShopInformation->deleteStatus = '0';
            $ShopInformation->createBy = '1';

            $ShopInformation->update();


            $ShopOwnerInformation =  ShopOwnerInformation::where('shopId', $id)->update([
                'shopOwnerName' => $request->get('shopOwnerName'),
                'shopOwnerMobileNo' => $request->get('shopOwnerMobileNo'),
                'shopOwnerEmail' => $request->get('shopOwnerEmail'),
                'shopOwnerAddress' => $request->get('shopOwnerAddress'),
                'shopOwnerPhoneNo' => $request->get('shopOwnerPhoneNo')

            ]);



            $ShopContactPersonInformation = ShopContactPersonInformation::where('shopId', $id)->update([
                'CPMobileNo' => $request->get('CPMobileNo'),
                'CPEmail' => $request->get('CPEmail'),
                'CPAddress' => $request->get('CPAddress'),
                'CPPhoneNo' => $request->get('CPPhoneNo')
            ]);



            $ShopRepresentativeInformation = ShopRepresentativeInformation::where('shopId', $id)->update([
                'SRName' => $request->get('SRName'),
                'SRMobileNo' => $request->get('SRMobileNo'),
                'SREmail' => $request->get('SREmail'),
                'SRAddress' => $request->get('SRAddress'),
                'SRPhoneNo' => $request->get('SRPhoneNo')
            ]);


            $ShopAddressLocation = ShopAddressLocation::where('shopId', $id)->update([

                'countryId' => $request->get('countryId'),
                'districtId' => $request->get('districtId'),
                'unionId' => $request->get('unionId'),
                'addressLine1' => $request->get('addressLine1'),
                'front' => $request->get('front'),
                'left' => $request->get('left'),
                'shopSize' => $request->get('shopSize'),
                'shopNo' => $request->get('shopNo'),
                'divisionId' => $request->get('divisionId'),
                'thanaId' => $request->get('thanaId'),
                'wardId' => $request->get('wardId'),
                'addressLine2' => $request->get('addressLine2'),
                'back' => $request->get('back'),
                'right' => $request->get('right'),
                'marketName' => $request->get('marketName'),
                'areaKnownName' => $request->get('areaKnownName')
            ]);




            return ['data' => "$ShopAddressLocation"];
        } else {

            $shopBillingInfo = ShopBillingAmount::where('billType', 2)->first();
            $branchAmount = $shopBillingInfo->billAmount;

            $select = Admin::where('id', $id)->first();
            $selectAccount = ShopAccountIntormation::where('shopId', $id)->first();

            $shopBillingDate = $selectAccount->billingDate;
            $getCurrentHaveBranch = $select->haveBranch;
            $getCurrentTotalBranch = $select->totalBranch;
            $shopCurrentBill = $selectAccount->billAmount;

            $new_branch =  $request->get('totalBranch') - $getCurrentTotalBranch;



            if (($getCurrentHaveBranch == 1) && ($request->get('haveBranch') != 1)) {
                return ['haveBranchMess' => 1];
            } else if ($new_branch > 0) {

                $new_branch_bill = $new_branch * $branchAmount;


                $today = date('Y-m-d H:i:s');
                $start = strtotime($today);
                $end = strtotime($shopBillingDate);

                $days_between = ceil(abs($end - $start) / 86400);

                $per_day_bill = $branchAmount / 30;

                $perBranchBill = $days_between * $per_day_bill;

                $shopNewBill = $new_branch * $perBranchBill;
                $shopBill = $shopCurrentBill + $shopNewBill;

                // update
                $ShopAccount =  ShopAccountIntormation::where('shopId', $id)->update([
                    'billAmount' => $shopBill
                ]);
                // update


                // update
                $ShopInformation =  Admin::find($id);

                $haveBranch = $request->get('haveBranch');
                $totalBranch = $request->get('totalBranch');

                $ShopInformation->haveBranch = $haveBranch;
                $ShopInformation->totalBranch = $totalBranch;

                $ShopInformation->update();
                // update

                return ['data' => 1];
            } else {
                return ['totalBranchMess' => $getCurrentTotalBranch];
            }



            // if(($getCurrentHaveBranch == 1) && ($request->get('haveBranch') !=1)){
            //     return ['haveBranchMess' => 1];
            // }
            // else if($request->get('totalBranch') >= $getCurrentTotalBranch){

            // $ShopInformation =  Admin::find($id);


            // $haveBranch = $request->get('haveBranch');
            // $totalBranch = $request->get('totalBranch');

            // $ShopInformation->haveBranch = $haveBranch;
            // $ShopInformation->totalBranch = $totalBranch;

            // $ShopInformation->update();
            // return ['data' => 1];
            // }
            // else{
            //     return ['totalBranchMess' => $getCurrentTotalBranch];
            // }

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
        //
    }
}