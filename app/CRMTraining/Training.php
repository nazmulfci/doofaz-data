<?php

namespace App\CRMTraining;

use Illuminate\Database\Eloquent\Model;
use App\User;
class Training extends Model
{
    public function trainer(){
        return $this->hasOne(User::class,'id','trainerId');
    }
}
