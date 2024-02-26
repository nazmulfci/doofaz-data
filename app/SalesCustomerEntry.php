<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SalesCustomerEntry extends Model
{
     function shopCustomerTypeName()
     {
          return $this->belongsTo(ShopCustomerTypeEntry::Class,'customerTypeId','shopCustomerTypeEntryId')->select('shopCustomerTypeEntryId','shopCustomerName');
     }
     public function statement(){
          return $this->hasMany(StatementInformation::class,'accountCode','accountCode');
        }
}
