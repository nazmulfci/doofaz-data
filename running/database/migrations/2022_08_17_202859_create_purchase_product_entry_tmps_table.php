<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseProductEntryTmpsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_product_entry_tmps', function (Blueprint $table) {
            $table->bigIncrements('purchaseProductId');
            $table->integer('purchaseInvoiceNo');
            $table->integer('productSupplierId');
            $table->integer('productId');
            $table->string('productBarcode',255)->nullable();
            $table->integer('brandId');
            $table->integer('purchaseType');
            $table->integer('countryId')->nullable();
            $table->double('quantity');
            $table->double('preQun')->nullable();
            $table->integer('adv_entry_status');
            $table->integer('unitId');
            $table->integer('colorId')->default(0);
            $table->integer('sizeId')->default(0);
            $table->integer('priceTypeId');
            $table->double('salePrice');
            $table->double('unitPrice');
            $table->double('totalPrice');
            $table->double('totalSalesPrice');
            $table->string('discountType')->default(1)->comment('1=percentage, 2=amount');
            $table->double('discount')->default(0);
            $table->double('totalWithDiscount');
            $table->integer('shopId');
            $table->integer('shopTypeId');
            $table->integer('productPriceEntryCompleteStatus')->default('0');
            $table->integer('createBy');
            $table->integer('updateBy')->nullable();
            $table->integer('openingStatus')->default(0);
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
        Schema::dropIfExists('purchase_product_entry_tmps');
    }
}
