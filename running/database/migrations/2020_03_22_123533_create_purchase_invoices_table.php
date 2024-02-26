<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_invoices', function (Blueprint $table) {
            $table->bigIncrements('purchaseInvoiceId');
            $table->string('purchaseDate');
            $table->integer('purchaseInvoiceNo');
            $table->string('purchaseType');
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
            $table->integer('shopId');
            $table->integer('shopTypeId');
            $table->integer('shopUserId');
            $table->integer('openingPurchaseRepurchase')->default(0)->comment('0=opening, 1=purchase, 2=repurchase');
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
        Schema::dropIfExists('purchase_invoices');
    }
}
