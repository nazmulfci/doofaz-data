<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DealerSalesSupplierSearchInfo extends Model
{
    public function supplier(){
        return $this->belongsTo(AddProductSupplierEntry::class,'supplierId','productSupplierId')->select('productSupplierId','productSupplierName','productSupplierPhone');
    }
    public function brand(){
        return $this->belongsTo(ProductBrandEntry::class,'brandId','productBrandEntryId')->select('productBrandEntryId','productBrandName');
    }
    public function customer(){
        return $this->belongsTo(SalesCustomerEntry::class,'customerId','salesCustomerEntryId')->select('salesCustomerEntryId','customerName','customerPhone','customerTypeId');
    }
}
