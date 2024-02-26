<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DataInformation extends Model
{
    public function HouseMarket(){
        return $this->belongsTo('App\HouseMarket','houseMarketId','id');
    }
    public function HouseMarketName(){
        return $this->belongsTo('App\HouseMarket','houseMarketId','id')->select('id','houseMarketName');
    }

    public function BlockRoad(){
        return $this->belongsTo('App\BlockRoad','blockRoadId','id');
    }

   public function StatusTypeInformation(){
    return $this->belongsTo('App\ShopInformation\StatusTypeInformation','status_type_id','id');
   }

   public function CreateByNameShow(){
    return $this->belongsTo('App\Models\Admin','createBy','id');
   }

   public function CategoryInformation(){
      return $this->belongsTo('App\ShopInformation\CategoryEntry','category_id','id');
   }

   public function RoadInformation(){
      return $this->belongsTo('App\RoadEntry','roadId','id');
   }

   public function AreaInformation(){
      return $this->belongsTo('App\Area','areaId','id');
   }
   public function AreaName(){
      return $this->belongsTo('App\Area','areaId','id')->select('id','areaName');
   }

   public function ProductTypeInformation(){
      return $this->belongsTo('App\ProductType','productTypeId','id');
   }

}
