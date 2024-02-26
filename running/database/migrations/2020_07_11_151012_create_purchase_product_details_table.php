<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseProductDetailsTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */

    public function up()
    {
        Schema::create('purchase_product_details', function (Blueprint $table) {
            $table->bigIncrements('purchaseProductDetailsId');
            $table->unsignedBigInteger('purchaseInvoiceNo')->nullable();
            $table->unsignedBigInteger('productSupplierId')->nullable();
            $table->unsignedBigInteger('purchaseProductId')->nullable();
            $table->integer('productId')->nullable();
            $table->string('productBarcode',255)->nullable();
            $table->integer('brandId')->nullable();
            $table->string('modelNo')->nullable();
            $table->string('batchNo')->nullable();
            $table->string('qrCode')->nullable();
            $table->string('mfgLicenseNO')->nullable();
            $table->integer('warranty')->nullable();
            $table->integer('selectMothOrYearWarranty')->nullable();
            $table->integer('guarantee')->nullable();
            $table->integer('selectMothOrYearGuarantee')->nullable();
            $table->string('mfgDate')->nullable();
            $table->string('expiryDate')->nullable();
            $table->integer('tax')->nullable();
            $table->double('taxAmount')->nullable();
            $table->integer('taxAmountType')->nullable();
            $table->integer('quantityType')->nullable();
            $table->integer('quantityNoti')->nullable();
            $table->longText('proDescription')->nullable();
            $table->longText('proAdvantage')->nullable();
            $table->integer('shopId');
            $table->integer('shopTypeId')->nullable();
            $table->integer('dateOverStatus')->default(0);
            $table->integer('dateOverSoonStatus')->default(0);
            $table->integer('shortageStatus')->default(0);
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
        Schema::dropIfExists('purchase_product_details');
    }
}
