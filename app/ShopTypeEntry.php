<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ShopTypeEntry extends Model
{

   protected $fillable = ['shopTypeEntryId ','shopTypeName','shopTypeStatus','demoShopTypeCode','createBy','updateBy'];

   public function categorys(){
       return $this->hasMany(Category::class,'shopTypeId','shopTypeEntryId');
   }

}