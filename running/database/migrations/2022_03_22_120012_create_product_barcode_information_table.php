<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductBarcodeInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_barcode_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('productId');
            $table->string('productBarcode',255);
            $table->integer('shopId');
            $table->integer('status')->default('1')->comment('1=Active, 2=Inactive');
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
        Schema::dropIfExists('product_barcode_information');
    }
}
