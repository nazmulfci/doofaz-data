<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DealerSalesOrderReceiveSubmit extends Model
{
    public function customer(){
        return $this->belongsTo(SalesCustomerEntry::class,'customerId','salesCustomerEntryId')->select('salesCustomerEntryId','customerName','customerPhone');
    }
    public function supplier(){
        return $this->belongsTo(AddProductSupplierEntry::class,'supplierId','productSupplierId')->select('productSupplierId','productSupplierName','productSupplierPhone');
    }
}
