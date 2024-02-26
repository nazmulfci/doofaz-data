<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ShopAddAssetSupplierEntry extends Model
{
    function asset(){
        return $this->belongsTo(ShopAssetEntry::Class,'assetSupplierId','assetSupplierId');
      }
}
