<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductLowQuantitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_low_quantities', function (Blueprint $table) {
            $table->bigIncrements('id');           
            $table->integer('lowQuantity');           
            $table->integer('shopId');
            $table->integer('shopTypeId');
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
        Schema::dropIfExists('product_low_quantities');
    }
}
