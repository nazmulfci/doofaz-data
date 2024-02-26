<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChartOfAccountBalance extends Model
{
    public function bank(){
        return $this->belongsTo(ShopAddBankEntry::class,'accountCode','accountCode');
      }
}
