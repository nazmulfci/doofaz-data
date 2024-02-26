<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    public function productName(){
       return $this->belongsTo(ProductName::class,'productNameId','productNameId');
    }
    public function productPriceDetails(){
       return $this->belongsTo(ProductPriceSetupDetail::class,'productNameId','productNameId');
    }
    public function categoryName(){
       return $this->belongsTo(Category::class,'categoryId','categoryId');
    }
    public function pName(){
       return $this->belongsTo(SalesProductPriceEntry::class,'productNameId','productId');
    }
}
