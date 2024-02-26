<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AssetBrandEntry extends Model
{
    function brand(){
        return $this->belongsTo(ShopAssetEntry::Class,'assetBrandEntryId','assetBrandId')->select('assetBrandId');
     }
}
