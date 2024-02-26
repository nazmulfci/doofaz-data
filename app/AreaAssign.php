<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AreaAssign extends Model
{
    public function Area(){
        return $this->belongsTo('App\Area','areaId','id');
    }
}
