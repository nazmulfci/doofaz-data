<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class AddProductSupplierEntry extends Model
{
    public function product(){
        return $this->belongsTo(PurchaseProductEntry::class,'productSupplierId','productSupplierId')->select('productSupplierId');
      }
   
    public function statement(){
        return $this->hasMany(StatementInformation::class,'accountCode','accountCode')->select('creditAmount')->sum('creditAmount');
      }
   
}
