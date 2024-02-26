<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DueLimitSetup extends Model
{
    public function customerType(){
        return $this->belongsTo(ShopCustomerTypeEntry::class,'customerTypeId','shopCustomerTypeEntryId');
     }
    public function customer(){
        return $this->belongsTo(SalesCustomerEntry::class,'customerId','salesCustomerEntryId')->select('salesCustomerEntryId','customerName');
 }

}