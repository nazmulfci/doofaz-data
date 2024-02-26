<?php

namespace App\ShopInformation;

use Illuminate\Database\Eloquent\Model;

class MettingInformation extends Model
{
    public function ShopName(){
        return $this->belongsTo('App\DataInformation','shop_id','id');
    }

    public function CreateByNameShow(){
        return $this->belongsTo('App\Models\Admin','createBy','id');
    }
}
