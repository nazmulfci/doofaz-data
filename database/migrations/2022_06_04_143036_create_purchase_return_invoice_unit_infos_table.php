<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseReturnInvoiceUnitInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_return_invoice_unit_infos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('purchaseInvoiceNo');
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
            $table->double('returnQuantity')->default(0);
            $table->double('availableQuantity')->default(0);
            $table->integer('totalUnitId')->nullable();
            $table->double('purchaseUnitPrice')->nullable();
            $table->double('purchaseTotalPrice')->nullable();
            $table->double('salesUnitPrice')->nullable();
            $table->double('salesTotalPrice')->nullable();
            $table->integer('advanceStatus')->default(0);
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
        Schema::dropIfExists('purchase_return_invoice_unit_infos');
    }
}
