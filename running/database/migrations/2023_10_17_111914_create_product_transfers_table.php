<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductTransfersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_transfers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shopInfoId');
            $table->integer('employeeFromId');
            $table->integer('employeeToId');
            $table->dateTime('transfer_date');
            $table->integer('status')->comment('5=transfer,6=followup recycle');
            $table->integer('shopId');
            $table->integer('createBy')->nullable();
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
        Schema::dropIfExists('product_transfers');
    }
}
