<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductName extends Model
{
    public function shopTypeName(){
      return $this->belongsTo(ShopTypeEntry::class,'shopTypeId','shopTypeEntryId');
    }
    public function productCategory(){
      return $this->hasMany(ProductCategory::class,'productNameId','productNameId');
    }
    public function categoryName(){
      return $this->hasMany(Category::class,'categoryId','categoryId');
    }
    public function product(){
      return $this->belongsTo(PurchaseProductEntry::class,'productNameId','productId')->select('productId');
    }
    public function openingproduct(){
      return $this->belongsTo(PurchaseProductEntry::class,'productNameId','productId')->select('productId','productSupplierId')->where('productSupplierId','!',0);
    }
}
