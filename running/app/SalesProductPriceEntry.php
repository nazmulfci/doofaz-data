<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SalesProductPriceEntry extends Model
{
    function productName(){
      return $this->belongsTo(ProductName::Class,'productId','productNameId')->select('productNameId','productName','productCode');
    }
    
    function brand(){
      return $this->belongsTo(PurchaseProductEntry::Class,'purchaseProductId','purchaseProductId');
    }
    
    function brandname(){
      return $this->belongsTo(ProductBrandEntry::Class,'brandId','productBrandEntryId');
    }
    
    function unit(){
      return $this->belongsTo(UniteEntry::Class,'unitId','uniteEntryId')->select('uniteEntryId','uniteEntryName');
    }
    
    function color(){
      return $this->belongsTo(ProductColor::Class,'colorId','id')->select('id','colorName');
    }
    
    function size(){
      return $this->belongsTo(ProductSize::Class,'sizeId','id')->select('id','sizeName');
    }
    
}
