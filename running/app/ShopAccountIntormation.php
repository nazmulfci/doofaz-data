<?php

namespace App;

use App\Models\Admin;
use Illuminate\Database\Eloquent\Model;

class ShopAccountIntormation extends Model
{
    protected $fillable = [
        'id',
        'shopId',
        'billingDate',
        'billAmount',
        'totalMonth',
        'totalPaid',
        'currentDue',
        'topupCurrentBalance',
        'topupTotalBalance'
    ];
    public function admin(){
        return $this->hasOne(Admin::class,'id','shopId');
    }
    
}
