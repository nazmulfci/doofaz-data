<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DealerSalesOrderSubmit extends Model
{
    public function customer(){
        return $this->belongsTo(SalesCustomerEntry::class,'customerId','salesCustomerEntryId')->select('salesCustomerEntryId','customerName','customerPhone','customerTypeId');
    }
    public function supplier(){
        return $this->belongsTo(AddProductSupplierEntry::class,'supplierId','productSupplierId')->select('productSupplierId','productSupplierName','productSupplierPhone');
    }
}
