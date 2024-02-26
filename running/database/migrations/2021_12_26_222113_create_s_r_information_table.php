<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSRInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('s_r_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name',255);
            $table->string('mobileNo',50);
            $table->string('phoneNo',50)->nullable();
            $table->string('email',100)->nullable();
            $table->string('address',255);
            $table->string('area',100)->nullable();
            $table->integer('shopId');
            $table->integer('status')->default('1')->comment('1=active, 2=Inactive');
            $table->integer('createBy');
            $table->integer('updateBy')->nullable();
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
        Schema::dropIfExists('s_r_information');
    }
}
