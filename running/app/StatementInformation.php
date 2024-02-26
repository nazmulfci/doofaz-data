<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Auth;
class StatementInformation extends Model
{
    public function supplier(){
        return $this->belongsTo(AddProductSupplierEntry::class,'accountCode','accountCode')->where('shopId',Auth::user()->shopId);
     }
    public function assetSupplier(){
        return $this->belongsTo(ShopAddAssetSupplierEntry::class,'accountCode','accountCode')->where('shopId',Auth::user()->shopId);
     }
    public function customer(){
        return $this->belongsTo(SalesCustomerEntry::class,'accountCode','accountCode')->where('shopId',Auth::user()->shopId);
     }
     public function bank(){
        return $this->belongsTo(BankEntry::class,'bankEntryId','bankEntryId')->select('bankEntryId','bankName');
      }
      function type()
      {
           return $this->belongsTo(ShopCustomerTypeEntry::class,'accountHeadCode','accountCode')->select('accountCode','shopCustomerName');
      }
}
