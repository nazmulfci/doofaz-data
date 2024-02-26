<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesReturnInvoiceTmpsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales_return_invoice_tmps', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('returnDate');
            $table->integer('salesInvoiceNo');
            $table->string('priceType');
            $table->integer('customerId');
            $table->double('totalPurchaseValue');
            $table->double('discount')->default(0);
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
        Schema::dropIfExists('sales_return_invoice_tmps');
    }
}
