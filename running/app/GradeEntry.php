<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GradeEntry extends Model
{
    public function glist(){
        return $this->belongsTo(SalaryGradeSetup::class,'gradeEntryId','gradeEntryId');
      }
}
