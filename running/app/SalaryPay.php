<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SalaryPay extends Model
{
    public function employee(){
        return $this->belongsTo(ShopEmployeeEntry::class,'employeeId','shopEmployeeEntryId');
     }
    }