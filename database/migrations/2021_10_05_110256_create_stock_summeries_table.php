<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStockSummeriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stock_summeries', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('purchaseInvoiceNo');
            $table->integer('productSupplierId');
            $table->integer('productId');
            $table->string('productBarcode',255)->nullable();
            $table->integer('brandId');
            $table->integer('purchaseType');
            $table->integer('countryId')->nullable();
            $table->integer('quantity');
            $table->integer('unitId');
            $table->integer('colorId')->default(0);
            $table->integer('sizeId')->default(0);
            $table->string('unitPrice');
            $table->string('percetage')->default(0);
            $table->string('totalPrice');
            $table->integer('shopId');
            $table->integer('shopTypeId');
            $table->integer('productPriceEntryCompleteStatus')->default('0');
            $table->integer('createBy');
            $table->integer('updateBy')->nullable();
            $table->integer('priceSetupStatus')->default(0);
            $table->integer('discountStatus')->default(0);
            $table->integer('returnStatus')->default(0);
            $table->integer('rePurchaseStatus')->default(0);
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
        Schema::dropIfExists('stock_summeries');
    }
}
