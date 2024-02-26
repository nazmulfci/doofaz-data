<?php
namespace App\Models;

use App\BillingDetailsInfo;
use App\ShopAccountIntormation;
use App\ShopInformation\ShopContactPersonInformation;
use App\ShopInformation\ShopOwnerInformation;
use App\ShopInformation\ShopRepresentativeInformation;
use App\ShopTypeEntry;
use App\User;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
class Admin extends Authenticatable implements JWTSubject
{
    use Notifiable;
    protected $guard = 'admin';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'shopInfoId',

        'role',
        'shopName',
        'shopSirialId',
        'email',
        'password',
        'pass',
        'lastLoginIp',
        'refferTypeId',
        'refferUserId',
        'shopTypeId',
        'shopLicenceTypeId',
        'website',
        'facebook',
        'youtube',
        'haveBranch',
        'totalBranch',
        'currencyId',
        'paymentStatus',
        'status',
        'deleteStatus'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    public function shoptype(){
        return $this->hasOne(ShopTypeEntry::class,'shopTypeEntryId','shopTypeId');
    }
    public function shopownerinfo(){
        return $this->hasOne(ShopOwnerInformation::class,'shopId','shopId');
    }
    public function refferuser(){
        return $this->hasOne(User::class,'id','refferUserId');
    }
    public function account(){
        return $this->belongsTo(ShopAccountIntormation::class,'shopId','shopId');
    }
    public function billinginfo(){
        return $this->belongsTo(BillingDetailsInfo::class,'shopId','shopId');
    }
    public function shopcontactpersion(){
        return $this->hasOne(ShopContactPersonInformation::class,'shopId','id');
    }
    public function shoprepresentative(){
        return $this->hasOne(ShopRepresentativeInformation::class,'shopId','id');
    }
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
  
  
   }