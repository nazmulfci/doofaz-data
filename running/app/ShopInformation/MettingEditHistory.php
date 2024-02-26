<?php

namespace App\ShopInformation;

use Illuminate\Database\Eloquent\Model;

class MettingEditHistory extends Model
{
    public function MettingInfo(){
        return $this->belongsTo('App\ShopInformation\MettingInformation','metting_id','id');
    }
}
