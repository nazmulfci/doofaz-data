<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PurchaseProductEntryTmp extends Model
{
    public function productName(){
        return $this->belongsTo(ProductName::class,'productId','productNameId')->select('productNameId','productName','productCode');
      }
      public function brandName(){
        return $this->belongsTo(ProductBrandEntry::class,'brandId','productBrandEntryId');
      }
      public function unitName(){
        return $this->belongsTo(UniteEntry::class,'unitId','uniteEntryId')->select('uniteEntryId','uniteEntryName');
      }
      public function productSupplierName(){
        return $this->belongsTo(AddProductSupplierEntry::class,'productSupplierId','productSupplierId');
      }
      public function productPriceDetails(){
        return $this->belongsTo(SalesProductPriceEntry::class,'purchaseProductId','purchaseProductId');
      }
      public function productDetails(){
        return $this->belongsTo(PurchaseProductDetails::class,'purchaseProductId','purchaseProductId');
      }
      public function productDetail(){
        return $this->belongsTo(PurchaseProductDetails::class,'productId','productId');
      }
      public function invoice(){
        return $this->belongsTo(PurchaseInvoice::class,'purchaseInvoiceNo','purchaseInvoiceNo');
      }
      public function total(){
        return $this->belongsTo(PurchaseProductTotalPrice::class,'productId','productId');
      }
}
