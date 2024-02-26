<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->bigIncrements('id');
            
            $table->integer('role')->default(2);
            $table->string('shopName','100')->nullable();
            $table->string('userName','100')->nullable();
            $table->integer('employeeId')->nullable();
            $table->string('shopSirialId','15')->nullable();
            $table->integer('shopSirialNo')->nullable();
            $table->string('email','100')->nullable();
            $table->string('password','255');
            $table->string('pass','255')->nullable();
            $table->string('lastLoginIp','255')->nullable();
            $table->integer('refferType')->nullable();
            $table->integer('refferUserId')->nullable();
            $table->integer('refferStatus')->default(0);           
            $table->integer('registredForm')->default(0);           
            $table->integer('shopLicenceTypeId')->nullable();
            $table->string('website')->nullable();
            $table->string('facebook')->nullable();
            $table->string('youtube')->nullable();
            $table->integer('haveBranch')->nullable();
            $table->integer('totalBranch')->nullable();
            $table->integer('currencyId')->nullable();
            $table->integer('shopId')->nullable();
            $table->integer('shopTypeId')->nullable();
            $table->boolean('paymentStatus')->default(1);
            $table->integer('language')->default(1)->comment('1=english, 2=bangla');
            $table->boolean('status')->default(1);
            $table->integer('informationNeedStatus')->default(0);
            $table->boolean('deleteStatus')->nullable();
            $table->longText('reason')->nullable();
            $table->integer('createBy')->nullable();
            $table->integer('updateBy')->nullable();
            $table->integer('deleteBy')->nullable();
            $table->text('existingUrl')->nullable();
            $table->text('refferUrl')->nullable();
            $table->timestamps();
            $table->dateTime('delete_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admins');
    }
}
