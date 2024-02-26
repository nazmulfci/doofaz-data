<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesProductEntryTmpsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales_product_entry_tmps', function (Blueprint $table) {
            $table->bigIncrements('salesProductEntryId');
            $table->integer('salesInvoiceNo');
            $table->string('salesDate');
            $table->integer('salesCustomerId');
            $table->integer('purchaseProductId');
            $table->integer('productId');
            $table->integer('brandId');
            $table->integer('unitId');
            $table->integer('colorId')->default(0);
            $table->integer('sizeId')->default(0);
            $table->double('quantity');
            $table->double('unitPrice');
            $table->double('purchaseUnitPrice');
            $table->double('purchaseTotalPrice');
            $table->double('totalPrice');
            $table->double('preTotalPrice')->nullable();
            $table->double('totalDiscount')->nullable();
            $table->double('discountPrice')->nullable();
            $table->integer('priceType');
            $table->integer('shopId');
            $table->integer('shopTypeId');
            $table->integer('createBy');
            $table->integer('status')->default(0);
            $table->integer('purchaseInvoiceNo')->nullable();
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
        Schema::dropIfExists('sales_product_entry_tmps');
    }
}
