<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BillingInformation extends Model
{
    public function bank(){
        return $this->belongsTo(BankEntry::class,'bankId','bankEntryId');
      }
}
