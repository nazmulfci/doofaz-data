<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class SalesInvoice extends Model
{
  
      public function customerName(){
        return $this->belongsTo(SalesCustomerEntry::class,'salesCustomerId','salesCustomerEntryId')->select('salesCustomerEntryId','customerName');
      }
      public function customer(){
        return $this->belongsTo(SalesCustomerEntry::class,'salesCustomerId','salesCustomerEntryId')->where('shopId',Auth::user()->shopId);
      }
     public function customerType(){
        return $this->belongsTo(ShopCustomerTypeEntry::class,'salesCustomerTypeId','shopCustomerTypeEntryId')->select('shopCustomerTypeEntryId','shopCustomerName');
      }
     public function salesProductList(){
        return $this->hasMany(SalesProductEntry::class,'salesInvoiceNo','salesInvoiceNo')->where('shopId',Auth::user()->shopId);
      }
      public function pay(){
        return $this->belongsTo(SalesPayment::class,'salesInvoiceId','salesInvoiceId')->orderby('salesInvoiceId','asc');
      }
  
    }