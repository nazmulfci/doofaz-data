<?php

namespace App;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Auth;
class SalarySheet extends Model
{
    public function shopEmployeeName(){
        return $this->belongsTo(ShopEmployeeEntry::class,'employeeId','shopEmployeeEntryId');
     }
     public function gradeEntryList(){
        return $this->belongsTo(GradeEntry::class,'salaryGradeId','gradeEntryId');
     }
  
}
