<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PurchaseInvoice extends Model
{
    public function productSupplierName(){
      return $this->belongsTo(AddProductSupplierEntry::class,'productSupplierId','productSupplierId')->select('productSupplierId','productSupplierName');
    }
    
    public function purchaseType(){
      return $this->belongsTo(PurchaseType::class,'purchaseTypeId','id');
    }
    public function purchaseProduct(){
      return $this->hasMany(PurchaseProductEntry::class,'purchaseInvoiceNo','purchaseInvoiceNo')->where('shopId',Auth::user()->shopId);
    }
    
    public function product(){
      return $this->hasMany(PurchaseProductEntry::class,'purchaseInvoiceNo','purchaseInvoiceNo')->where('shopId',Auth::user()->shopId)->select('purchaseInvoiceNo','productId',DB::raw('sum(totalPrice) as totalPrice'),DB::raw('sum(quantity) as total'))->groupby('purchaseInvoiceNo','productId');
    }
    

}
