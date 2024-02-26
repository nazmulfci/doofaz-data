<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SalesProductEntry extends Model
{
    public function productName(){
      return $this->belongsTo(ProductName::class,'productId','productNameId')->select('productNameId','productName','productCode');
    }
    public function brandName(){
      return $this->belongsTo(ProductBrandEntry::class,'brandId','productBrandEntryId');
    }
    public function unitName(){
      return $this->belongsTo(UniteEntry::class,'unitId','uniteEntryId');
    }
    public function colorName(){
      return $this->belongsTo(ProductColor::class,'colorId','id');
    }
    public function sizeName(){
      return $this->belongsTo(ProductSize::class,'sizeId','id');
    }
}
