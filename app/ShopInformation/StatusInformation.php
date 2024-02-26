<?php

namespace App\ShopInformation;

use Illuminate\Database\Eloquent\Model;

class StatusInformation extends Model
{
    public function ShopOfficeName(){
        return $this->belongsTo('App\DataInformation','shop_id','id');
    }
}
