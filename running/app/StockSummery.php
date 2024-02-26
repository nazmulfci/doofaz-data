<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StockSummery extends Model
{
    public function product(){
        return $this->belongsTo(ProductName::class,'productId','productNameId')->select('productNameId','productName','productCode');
      }
      public function brand(){
        return $this->belongsTo(ProductBrandEntry::class,'brandId','productBrandEntryId')->select('productBrandEntryId','productBrandName');
      }
      public function color(){
        return $this->belongsTo(ProductColor::class,'colorId','id')->select('id','colorName');
      }
      public function size(){
        return $this->belongsTo(ProductSize::class,'sizeId','id')->select('id','sizeName');
      }
      public function unit(){
        return $this->belongsTo(UniteEntry::class,'unitId','uniteEntryId')->select('uniteEntryId','uniteEntryName');
      }
}
