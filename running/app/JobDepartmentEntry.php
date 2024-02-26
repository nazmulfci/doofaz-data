<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class JobDepartmentEntry extends Model
{
    public function employeeTypeName(){
       return $this->belongsTo(ShopEmployeeType::class,'employeeTypeId','shopEmployeeTypeId');
    }
    public function employee(){
       return $this->belongsTo(ShopEmployeeEntry::class,'jobDepartmentEntryId','jobDepartmentId');
    }
}
