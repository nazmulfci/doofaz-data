<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PurchaseProductDetails extends Model
{
     function purchaseProductInfo(){
        return $this->belongsto(PurchaseProductEntry::Class,'purchaseProductId','purchaseProductId');
     }
     function productName(){
        return $this->belongsto(ProductName::Class,'productId','productNameId');
     }
      public function productPriceDetails(){
      return $this->belongsTo(SalesProductPriceEntry::class,'purchaseProductId','purchaseProductId');
    }
      public function total(){
      return $this->belongsTo(StockSummery::class,'productId','productId')->select('productId',DB::raw('sum(quantity)as quantity'))->groupby('productId')->having('quantity','<>','purchase_product_details.quantityNoti');
    }
      
}
