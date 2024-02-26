<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductBrandEntry extends Model
{
    public function shopTypeName(){
      return $this->belongsTo(ShopTypeEntry::class,'shopTypeId','shopTypeEntryId');
    }
    public function brand(){
      return $this->belongsTo(PurchaseProductEntry::class,'productBrandEntryId','brandId');
    }
}
