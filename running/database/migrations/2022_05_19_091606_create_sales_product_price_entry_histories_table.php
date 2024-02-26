<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesProductPriceEntryHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales_product_price_entry_histories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('purchaseProductId');
            $table->integer('productId');
            $table->integer('brandId');
            $table->integer('unitId');
            $table->integer('colorId')->default(0);
            $table->integer('sizeId')->default(0);
            $table->string('mrpPrice')->nullable();
            $table->string('salesPrice')->nullable();
            $table->string('wholesalePrice')->nullable();
            $table->string('specialPrice')->nullable();
            $table->string('eCommercePrice')->nullable();
            $table->integer('quantity');
            $table->integer('alertQuantity')->nullable();
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
        Schema::dropIfExists('sales_product_price_entry_histories');
    }
}
