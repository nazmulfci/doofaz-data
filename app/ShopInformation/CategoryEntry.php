<?php

namespace App\ShopInformation;

use Illuminate\Database\Eloquent\Model;
use Auth;

class CategoryEntry extends Model
{
    public function products(){
        return $this->belongsTo('App\ShopInformation\CategoryProduct', 'id', 'category_id')->whereIn('status',[1,2]);
    }

    //   public function products(){
    //     return $this->belongsTo('App\ShopInformation\CategoryProduct', 'id', 'category_id')->whereIn('status',[1,2])->where('createBy',Auth::user()->id);
    // }

}
