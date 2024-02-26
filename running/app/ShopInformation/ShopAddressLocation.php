<?php

namespace App\ShopInformation;

use App\Country;
use App\District;
use App\Division;
use App\Union;
use App\Upazila;
use App\Ward;
use Illuminate\Database\Eloquent\Model;

class ShopAddressLocation extends Model
{
    protected $fillable = [
        'shopALId',
        'shopId',
        'branchId',
        'countryId',
        'divisionId',
        'distrinctId',
        'thanaId',
        'unionId',
        'wardId',
        'addressLine1',
        'addressLine2',
        'front',
        'back',
        'left',
        'right',
        'shopSize',
        'marketName',
        'shopNo',
        'areaKnownName',
        'status',
        'deleteStatus',
        'createBy',
      ];
      public function country(){
        return $this->hasOne(Country::class,'id','countryId');
    }
      public function district(){
        return $this->hasOne(District::class,'id','districtId');
    }
      public function union(){
        return $this->hasOne(Union::class,'id','unionId');
    }
      public function division(){
        return $this->hasOne(Division::class,'id','divisionId');
    }
      public function thana(){
        return $this->hasOne(Upazila::class,'id','thanaId');
    }
      public function ward(){
        return $this->hasOne(Ward::class,'id','wardId');
    }
  
}
