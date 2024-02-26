<?php

namespace App\Http\Controllers;
use App\AdminOpenTemps;
use App\ShopBillingAmount;
use App\Models\Admin;
use App\RegiPhone;
use App\ShopAccountIntormation;
use App\ShopInformation\ShopAddressLocation;
use App\ShopInformation\ShopContactPersonInformation;
use App\ShopInformation\ShopOwnerInformation;
use App\ShopInformation\ShopRepresentativeInformation;
use App\ShopTypeEntry;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class AdminOpenTempController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $shops = AdminOpenTemps::get()->toJson(JSON_PRETTY_PRINT);
        return response($shops, 200);
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
            'shopName' => 'required',
            'email' => 'required | unique:admins',
            'shopTypeId' => 'required',
            'shopOwnerName' => 'required',
            'shopOwnerMobileNo' => 'required',
            'currencyId' => 'required',
          
        ]);

        if (Admin::where('shopTypeId', $request->get('shopTypeId'))->exists()) {
            $select = Admin::where('shopTypeId', $request->get('shopTypeId'))->orderBy('shopSirialNo', 'DESC')->first();
            $new_code = $select->shopSirialNo;
            $new_code = ++$new_code;
            $shopSirialNo =  $new_code;
        } else {
            $shopSirialNo=1;
        }

      
        $ShopInformation = new AdminOpenTemps();

        $shopTypeId = $request->get('shopTypeId');
        $shopSirialId = $request->get('shopSirialId');
        $shopName = $request->get('shopName');
        $email = $request->get('email');
        // $refferUserId = $request->get('refferUserId');
        $haveBranch = $request->get('haveBranch');
        $totalBranch = $request->get('totalBranch');
        $countryId = $request->get('countryId');
        $currencyId = $request->get('currencyId');
        $refferStatus = 1;
        $ShopInformation->shopTypeId = $shopTypeId;
        $ShopInformation->shopSirialId = $shopSirialId;
        $ShopInformation->shopSirialNo = $shopSirialNo;
        $ShopInformation->refferStatus = 0;
        $ShopInformation->shopName = $shopName;
        $ShopInformation->userName = $email;
        $ShopInformation->email = $email;
        $ShopInformation->refferUserId = 0;
        $ShopInformation->refferTypeId = 0;
        $ShopInformation->haveBranch = $haveBranch;
        $ShopInformation->totalBranch = $totalBranch;
        $ShopInformation->countryId = $countryId;
        $ShopInformation->currencyId = $currencyId;
        $ShopInformation->password = Hash::make($request->get('password'));
        $shopOwnerName = $request->get('shopOwnerName');
        $shopOwnerMobileNo = $request->get('shopOwnerMobileNo');
        $shopOwnerEmail = $request->get('shopOwnerEmail');
        $shopOwnerAddress = $request->get('shopOwnerAddress');
        $shopOwnerPhoneNo = $request->get('shopOwnerPhoneNo');

        $ShopInformation->shopOwnerName = $shopOwnerName;
        $ShopInformation->shopOwnerMobileNo = $shopOwnerMobileNo;
        $ShopInformation->shopOwnerEmail = $shopOwnerEmail;
        $ShopInformation->shopOwnerAddress = $shopOwnerAddress;
        $ShopInformation->shopOwnerPhoneNo = $shopOwnerPhoneNo;     

        $CPName = $request->get('CPName');
        $CPMobileNo = $request->get('CPMobileNo');
        $CPEmail = $request->get('CPEmail');
        $CPAddress = $request->get('CPAddress');
        $CPPhoneNo = $request->get('CPPhoneNo');

        $ShopInformation->CPName = $CPName;
        $ShopInformation->CPMobileNo = $CPMobileNo;
        $ShopInformation->CPEmail = $CPEmail;
        $ShopInformation->CPAddress = $CPAddress;
        $ShopInformation->CPPhoneNo = $CPPhoneNo;
        $SRName = $request->get('SRName');
        $SRMobileNo = $request->get('SRMobileNo');
        $SREmail = $request->get('SREmail');
        $SRAddress = $request->get('SRAddress');
        $SRPhoneNo = $request->get('SRPhoneNo');

     
        $ShopInformation->SRName = $SRName;
        $ShopInformation->SRMobileNo = $SRMobileNo;
        $ShopInformation->SREmail = $SREmail;
        $ShopInformation->SRAddress = $SRAddress;
        $ShopInformation->SRPhoneNo = $SRPhoneNo;
        

        $countryId = $request->get('countryId');
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

     
        $ShopInformation->branchId = '1';
        $ShopInformation->countryId = $countryId;
        $ShopInformation->divisionId = $divisionId;
        $ShopInformation->districtId = $districtId;
        $ShopInformation->thanaId = $thanaId;
        $ShopInformation->unionId = $unionId;
        $ShopInformation->wardId = $wardId;
        $ShopInformation->addressLine1 = $addressLine1;
        $ShopInformation->addressLine2 = $addressLine2;
        $ShopInformation->front = $front;
        $ShopInformation->back = $back;
        $ShopInformation->left = $left;
        $ShopInformation->right = $right;
        $ShopInformation->shopSize = $shopSize;
        $ShopInformation->marketName = $marketName;
        $ShopInformation->shopNo = $shopNo;
        $ShopInformation->areaKnownName = $areaKnownName;
     
        $ShopInformation = $ShopInformation->save();
        $con=RegiPhone::orderby('id','desc')->first();
        if(empty($con)){
            $phn=0;
        }
        else{
         $phn=$con->phone;     
        }
        $args = http_build_query(array(
            'api_key' => '44516031325763141603132576',
            'contacts'  => $phn,
            'senderid'    => '8801844532643',
            'msg'  => 'New Shop Registred From Open Registration.Shop Name='.$shopName.',Mobile='.$request->get('shopOwnerMobileNo')));
    
        $url = "http://sms.doofazit.com/api/v1/send?";
    
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS,$args);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);   
      
        $response = curl_exec($ch);
        $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
       
    
        return response()->json([
            "message" => "Shop record created"
        ], 201);
    }



    public function shopCreate(Request $request) {
        $this->validate(
          $request,
          [
              'shopTypeId' => 'required',
              'shopName' => 'required',
              // 'email' => 'required',
              'email' => 'required | unique:admins',
             
              'shopOwnerName' => 'required',
              'shopOwnerMobileNo' => 'required',

            

              'CPName' => 'required',
              'CPMobileNo' => 'required',

              'countryId' => 'required',
              'divisionId' => 'required',
              'districtId' => 'required',
              'thanaId' => 'required',

              'addressLine1' => 'required',
          ],
       
      );


      // $getShopBillAmount = 0;
      $getBranchBillAmount = 0;

      $getShopBillAmount = ShopBillingAmount::where('billType', 1)->first()->billAmount;
      // $getBranchBillAmount = ShopBillingAmount::where('billType', 1)->first()->billAmount;

      $ShopInformation = new Admin();

      $shopTypeId = $request->get('shopTypeId');
      $shopSirialId = $request->get('shopSirialId');
      $shopSirialNo = $request->get('shopSirialNo');
      $shopName = $request->get('shopName');
      $email = $request->get('email');
      $refferUserId = $request->get('refferUserId');
      $haveBranch = $request->get('haveBranch');
      $totalBranch = $request->get('totalBranch');
      $countryId = $request->get('countryId');
      $countryId = $request->get('countryId');
      $currencyId = $request->get('currencyId');
      $refferStatus = $request->get('refferStatus');
      $refferTypeId = $request->get('refferTypeId');

      $ShopInformation->shopTypeId = $shopTypeId;
      $ShopInformation->shopSirialId = $shopSirialId;
      $ShopInformation->shopSirialNo = $shopSirialNo;
      $ShopInformation->shopName = $shopName;
      $ShopInformation->userName = $email;
      $ShopInformation->email = $email;
      $ShopInformation->refferUserId = $refferUserId;
      $ShopInformation->refferStatus = $refferStatus;
      $ShopInformation->refferType = $refferTypeId;
      $ShopInformation->registredForm = 3;
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
      $totalBill = $getShopBillAmount;

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

      $countryId = $request->get('countryId');
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

      $ShopAddressLocation->save();


  AdminOpenTemps::where('userName', $email )->delete();
        return response()->json([
            "message" => "Shop record created"
        ], 201);
      }
      public function getShopuser($id) {
        if (Admin::where('userName', $id)->exists()) {
          $shop = Admin::where('userName', $id)->get()->toJson(JSON_PRETTY_PRINT);
          return response($shop, 200);
        } else {
          return response()->json([
            "NotFound"
          ], 404);
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
      $show=AdminOpenTemps::where('id',$id)->first();
      return response()->json($show);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $select_shop_type = ShopTypeEntry::where('shopTypeEntryId', "$id")->first();
        $code = $select_shop_type->shopTypeCode;

        if (Admin::where('shopTypeId', "$id")->exists()) {
            $select = Admin::where('shopTypeId', "$id")->orderBy('shopSirialNo', 'DESC')->first();
            $new_code = $select->shopSirialNo;
            $new_code = ++$new_code;
            $no =  $new_code;
            $sirial_id = $id.'-'.$new_code;
        } else {
            $no=1;
            $sirial_id = $code . '-1';
        }
      return response()->json($sirial_id) ;
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