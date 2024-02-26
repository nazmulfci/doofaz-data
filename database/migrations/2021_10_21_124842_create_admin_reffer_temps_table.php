<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminRefferTempsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin_reffer_temps', function (Blueprint $table) {
            $table->bigIncrements('id');
                 
            $table->integer('role')->default(2);
            $table->string('shopName','100')->nullable();
            $table->string('userName','100')->nullable();            
            $table->text('shopSirialId')->nullable();
            $table->string('email','100')->nullable();
            $table->string('password','255');
            $table->string('pass','255')->nullable();
            $table->string('lastLoginIp','255')->nullable();
            $table->integer('refferTypeId')->nullable();
            $table->integer('refferUserId')->nullable(); 
            $table->integer('refferStatus')->default(0);        
            $table->integer('shopLicenceTypeId')->nullable();
            $table->string('website')->nullable();
            $table->string('facebook')->nullable();
            $table->string('youtube')->nullable();
            $table->integer('haveBranch')->nullable();
            $table->integer('totalBranch')->nullable();
            $table->integer('currencyId')->nullable();
            $table->integer('shopId')->nullable();
            $table->integer('shopTypeId')->nullable();       
            $table->boolean('deleteStatus')->nullable();
            $table->longText('reason')->nullable();      
            $table->string('shopOwnerName','100')->nullable();
            $table->string('shopOwnerMobileNo','50')->nullable();
            $table->string('shopOwnerEmail','100')->nullable();
            $table->string('shopOwnerAddress')->nullable();
            $table->string('shopOwnerPhoneNo','50')->nullable();       
            $table->string('CPName','100')->nullable();
            $table->string('CPMobileNo','50')->nullable();
            $table->string('CPEmail','100')->nullable();
            $table->string('CPAddress')->nullable();
            $table->string('CPPhoneNo','50')->nullable();

            $table->string('SRName','100')->nullable();
            $table->string('SRMobileNo','50')->nullable();
            $table->string('SREmail','100')->nullable();
            $table->string('SRAddress')->nullable();
            $table->string('SRPhoneNo','50')->nullable();
          $table->integer('branchId')->nullable();
            $table->integer('countryId')->nullable();
            $table->integer('divisionId')->nullable();
            $table->integer('districtId')->nullable();
            $table->integer('thanaId')->nullable();
            $table->integer('unionId')->nullable();
            $table->integer('wardId')->nullable();
            $table->string('addressLine1')->nullable();
            $table->string('addressLine2')->nullable();
            $table->string('front','255')->nullable();
            $table->string('back','255')->nullable();
            $table->string('left','255')->nullable();
            $table->string('right','255')->nullable();
            $table->string('shopSize','255')->nullable();
            $table->string('marketName','255')->nullable();
            $table->string('shopNo','255')->nullable();
            $table->string('areaKnownName','255')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admin_reffer_temps');
    }
}
