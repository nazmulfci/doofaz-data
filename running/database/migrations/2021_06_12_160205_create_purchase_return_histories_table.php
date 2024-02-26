<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseReturnHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_return_histories', function (Blueprint $table) {
            $table->bigIncrements('purchaseProductId');
            $table->integer('purchaseInvoiceNo');
            $table->integer('productSupplierId');
            $table->string('purchaseDate',1000);
            $table->integer('productId');
            $table->integer('brandId');          
            $table->integer('preQuantity');
            $table->integer('newQuantity');
            $table->integer('unitId');
            $table->string('unitPrice');
            $table->string('percetage');
            $table->string('totalPrice');
            $table->integer('shopId');
            $table->integer('shopTypeId');
            $table->integer('productPriceEntryCompleteStatus')->default('0');
            $table->integer('createBy');
            $table->integer('updateBy')->nullable();
            $table->integer('priceSetupStatus')->default(0);
            $table->integer('discountStatus')->default(0);
            $table->integer('returnStatus')->default(0);
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
        Schema::dropIfExists('purchase_return_histories');
    }
}
