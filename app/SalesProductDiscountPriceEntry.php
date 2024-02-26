<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class SalesProductDiscountPriceEntry extends Model
{
    function productName(){
      return $this->belongsTo(ProductName::Class,'productId','productNameId')->select('productNameId','productName','productCode');
    }
    function color(){
      return $this->belongsTo(ProductColor::Class,'colorId','id')->select('id','colorName');
    }
    function size(){
      return $this->belongsTo(ProductSize::Class,'sizeId','id')->select('id','sizeName');
    }
    function productNames(){
      return $this->belongsTo(ProductName::Class,'productId','productNameId')->select('productNameId','productName','productCode')->where('shopId',Auth::User()->shopId);
    }
    function brandget(){
      return $this->belongsTo(PurchaseProductEntry::Class,'purchaseProductId','purchaseProductId');
    }
    function brandgets(){
      return $this->belongsTo(PurchaseProductEntry::Class,'purchaseProductId','purchaseProductId')->where('shopId',Auth::User()->shopId);
    }
}
