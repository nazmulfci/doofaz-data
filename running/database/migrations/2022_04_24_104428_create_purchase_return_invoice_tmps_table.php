<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseReturnInvoiceTmpsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_return_invoice_tmps', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('returnDate');
            $table->integer('purchaseInvoiceNo');
            $table->integer('returnInvoiceNo');
            $table->string('purchaseTypeId');
            $table->integer('productSupplierId');
            $table->double('totalPurchaseValue');
            $table->double('carriageInward')->default(0);
            $table->double('totalAmount');
            $table->double('discount')->default(0);
            $table->double('supplierPayable');
            $table->double('otherCost')->default(0);
            $table->double('damageAndWarranty')->default(0);
            $table->double('totalProductCost');
            $table->double('previousPayableDue')->default(0);
            $table->double('currentDue')->default(0);
            $table->double('currentPayable');
            $table->double('cash')->nullable();
            $table->double('bank')->nullable();
            $table->integer('status')->default(0);
            $table->integer('shopId');
            $table->integer('shopTypeId');
            $table->integer('shopUserId');
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
        Schema::dropIfExists('purchase_return_invoice_tmps');
    }
}
