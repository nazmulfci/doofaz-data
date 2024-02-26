<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BankCheckDetails extends Model
{
    public function banks(){
        return $this->belongsTo('App\BankEntry','bank','bankEntryId');
    }
    public function account(){
        return $this->belongsTo('App\ShopAddBankEntry','bankAccountId','bankId');
    }
    public function statuss(){
        return $this->belongsTo('App\ChequeStatus','status','id');
    }
    public function posting(){
       
        return $this->belongsTo('App\ChequePosting','bank','bank');
    }
    
}
