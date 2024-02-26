<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class AssetCodeEntry extends Model
{
    function assetCategoryName(){
       return $this->belongsTo(ShopAssetCategory::Class,'assetCategoryId','assetCategoryId');
    }
    function product(){
       return $this->belongsTo(ShopAssetEntry::Class,'assetCodeEntryId','assetProductId')->where('shopId',Auth::user()->shopId)->select('assetProductId');
    }
}
