<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SalesPayment extends Model
{
    public function invoice(){
        return $this->belongsTo(SalesInvoice::class,'salesInvoiceNo','salesInvoiceId');
      }
    public function bank(){
        return $this->belongsTo(BankEntry::class,'receiverBankEntryId','bankEntryId')->select('bankEntryId','bankName');
      }
      function type()
      {
           return $this->belongsTo(ShopCustomerTypeEntry::class,'salesCustomerTypeId','shopCustomerTypeEntryId')->select('shopCustomerTypeEntryId','shopCustomerName');
      }
      public function name(){
        return $this->belongsTo(SalesCustomerEntry::class,'salesCustomerId','salesCustomerEntryId')->select('salesCustomerEntryId','customerName');
      }
}
