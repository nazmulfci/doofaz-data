<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStockInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stock_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('productId');

            $table->integer('brandId');
            $table->integer('purchaseType');
            $table->integer('countryId')->nullable();
            $table->integer('colorId')->default(0);
            $table->integer('sizeId')->default(0);

            $table->integer('priceTypeId');
            $table->double('quantity');
            $table->integer('unitId');
            $table->double('totalQuantity')->nullable();
            $table->double('finalQuantity')->nullable();
            $table->integer('totalUnitId')->nullable();
            $table->double('purchaseUnitPrice')->nullable();
            $table->double('purchaseTotalPrice')->nullable();
            $table->double('averageUnitPrice')->nullable();
            $table->double('averageTotalPrice')->nullable();
            $table->double('salesUnitPrice')->nullable();
            $table->double('salesTotalPrice')->nullable();
            $table->integer('advanceStatus')->default(0);
            $table->integer('singleStatus')->default(1)->nullable();
            $table->integer('openingStatus')->default(0);
            $table->integer('status')->default(1);
            $table->integer('shopId');
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
        Schema::dropIfExists('stock_information');
    }
}
