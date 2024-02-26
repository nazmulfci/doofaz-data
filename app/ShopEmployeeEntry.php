<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ShopEmployeeEntry extends Model
{
    protected $primaryKey = 'shopEmployeeEntryId';
    
    public function shopEmployeeTypes(){
        return $this->belongsTo(ShopEmployeeType::class,'employeeTypeId','shopEmployeeTypeId');
     }
     public function JobDepartments(){
        return $this->belongsTo(JobDepartmentEntry::class,'jobDepartmentId','jobDepartmentEntryId');
     }
   
     public function grade(){
        return $this->belongsTo(SalaryGradeSetup::class,'shopEmployeeEntryId','employeEntryId');
     }
   
     public function start(){
        return $this->belongsTo(StartSalarySetup::class,'shopEmployeeEntryId','employeEntryId');
     }
   
}
