<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesInvoiceTempsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales_invoice_temps', function (Blueprint $table) {
            $table->bigIncrements('salesInvoiceId');
            $table->string('salesDate');
            $table->string('salesInvoiceNo',50);
            $table->integer('salesCustomerTypeId');
            $table->integer('salesCustomerId');
            $table->integer('totalQuantity');
            $table->string('totalBalance')->nullable();
            $table->string('discountPrice')->nullable();
            $table->string('totalVat');
            $table->string('vatCalculate')->nullable();
            $table->string('totalPayable');
            $table->string('previousDue')->nullable();
            $table->string('currentDue')->nullable();
            $table->string('currentTotalAmount')->nullable();
            $table->string('currentPaidAmount')->nullable();
            $table->string('mobileAmount')->nullable();
            $table->integer('paymentStatus')->default(0);
            $table->integer('paymentType')->nullable();
            $table->string('guestCustomerName',200)->nullable();
            $table->string('guestCustomerPhone',200)->nullable();
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
        Schema::dropIfExists('sales_invoice_temps');
    }
}
