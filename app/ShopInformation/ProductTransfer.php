<?php

namespace App\ShopInformation;

use Illuminate\Database\Eloquent\Model;

class ProductTransfer extends Model
{
    public function ShopInfo(){
        return $this->belongsTo('App\DataInformation','shopInfoId','id');
    }
}
