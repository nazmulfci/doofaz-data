<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PriceTypeSetup extends Model
{
    public function customertype(){
        return $this->belongsTo(ShopCustomerTypeEntry::class,'customerType','shopCustomerTypeEntryId');
     }
    public function pricetype(){
        return $this->belongsTo(SalesPriceType::class,'priceType','salesPriceTypeId');
     }
   
}
