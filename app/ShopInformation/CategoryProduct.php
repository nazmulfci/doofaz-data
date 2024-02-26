<?php

namespace App\ShopInformation;

use Illuminate\Database\Eloquent\Model;

class CategoryProduct extends Model
{
    public function ShopInfo(){
        return $this->belongsTo('App\DataInformation','shop_id','id');
    }

  public function CategoryInfo(){
        return $this->belongsTo('App\ShopInformation\CategoryEntry','category_id','id');
    }



}
