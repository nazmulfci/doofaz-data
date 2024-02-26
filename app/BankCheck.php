<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BankCheck extends Model
{
    protected $table = 'bank_checks';
    public function bk(){
   
        return $this->belongsTo(BankEntry::class,'bank ','bankEntryId ');
     }
    public function account(){
        return $this->belongsTo(ShopAddBankEntry::class,'bankId ','bankAccountId ');
     }
}
