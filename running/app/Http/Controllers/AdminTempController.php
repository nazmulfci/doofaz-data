<?php

namespace App\Http\Controllers;

use App\AdminTemp;
use App\Models\Admin;
use App\ShopInformation\ShopOwnerInformation;
use App\ShopInformation\ShopContactPersonInformation;
use App\ShopInformation\ShopRepresentativeInformation;
use App\ShopInformation\ShopAddressLocation;
use App\ShopBillingAmount;
use App\ShopAccountIntormation;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
class AdminTempController extends Controller
{
    public function getAllShop() {
      $shops = AdminTemp::get()->toJson(JSON_PRETTY_PRINT);
      return response($shops, 200);
      }
  
      public function createShop(Request $request) {
        $ShopInformation = new AdminTemp();

        $shopTypeId = $request->get('shopTypeId');
        $shopSirialId = $request->get('shopSirialId');
        $shopName = $request->get('shopName');
        $email = $request->get('email');
        $refferUserId = $request->get('refferUserId');
        $haveBranch = $request->get('haveBranch');
        $totalBranch = $request->get('totalBranch');
        $countryId = $request->get('countryId');
        $currencyId = $request->get('currencyId');
        $ShopInformation->shopTypeId = $shopTypeId;
        $ShopInformation->shopSirialId = $shopSirialId;
        $ShopInformation->shopName = $shopName;
        $ShopInformation->userName = $shopName;
        $ShopInformation->email = $email;
        $ShopInformation->refferTypeId = 2;
        $ShopInformation->refferUserId = $refferUserId;
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

              'SRName' => 'required',
              'SRMobileNo' => 'required',

              'CPName' => 'required',
              'CPMobileNo' => 'required',

              'countryId' => 'required',
              'divisionId' => 'required',
              'districtId' => 'required',
              'thanaId' => 'required',

              'addressLine1' => 'required',
          ],
          [
              'shopTypeId.required' => "Enter shop type.",
            
              'shopName.required' => "Enter shop name.",
              'email.required' => "Enter shop user name.",
           
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

              'addressLine1.required' => "Enter Address Line 1.",
          ]
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
      $currencyId = $request->get('currencyId');




      $ShopInformation->shopTypeId = $shopTypeId;
      $ShopInformation->shopSirialId = $shopSirialId;
      $ShopInformation->shopSirialNo = $shopSirialNo;
      $ShopInformation->shopName = $shopName;
      $ShopInformation->userName = $shopName;
      $ShopInformation->email = $email;
      $ShopInformation->refferUserId = $refferUserId;
      $ShopInformation->haveBranch = $haveBranch;
      $ShopInformation->totalBranch = $totalBranch;
      $ShopInformation->countryId = $countryId;
      $ShopInformation->currencyId = $currencyId;
      $ShopInformation->password = Hash::make('123');
      $ShopInformation->pass = '123';
      $ShopInformation->role = 3;
      $ShopInformation->lastLoginIp = '1';
      $ShopInformation->refferType = '0';
      $ShopInformation->shopLicenceTypeId = '0';
      $ShopInformation->status = '1';
      $ShopInformation->deleteStatus = '0';
      $ShopInformation->createBy = '1';
      
      $ShopInformation->registredForm = '1';

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


    AdminTemp::where('userName', $shopName )->delete();
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
      public function getShop($id) {
       
          $shop = AdminTemp::where('id', $id)->first();
      
          return response()->json($shop, 200);
        
      }
  
      public function updateStudent(Request $request, $id) {
        // logic to update a student record goes here
      }
  
      public function deleteStudent ($id) {
        // logic to delete a student record goes here
      }
}
