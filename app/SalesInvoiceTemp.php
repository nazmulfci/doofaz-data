<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SalesInvoiceTemp extends Model
{
    public function customerName(){
        return $this->belongsTo(SalesCustomerEntry::class,'salesCustomerId','salesCustomerEntryId')->select('salesCustomerEntryId','customerName');
      }
    public function customerType(){
        return $this->belongsTo(ShopCustomerTypeEntry::class,'salesCustomerTypeId','shopCustomerTypeEntryId')->select('shopCustomerTypeEntryId','shopCustomerName');
      }
    public function salesProductList(){
        return $this->hasMany(SalesProductEntry::class,'salesInvoiceNo','salesInvoiceNo');
      }
}
