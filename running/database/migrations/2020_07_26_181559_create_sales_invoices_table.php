<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales_invoices', function (Blueprint $table) {
            $table->bigIncrements('salesInvoiceId');
            $table->string('salesDate');
            $table->string('salesInvoiceNo',50);
            $table->integer('salesCustomerTypeId');
            $table->integer('salesCustomerId');
            $table->double('totalQuantity');
            $table->double('totalBalance')->nullable();
            $table->double('discountPrice')->nullable();
            $table->double('totalVat');
            $table->double('vatCalculate')->nullable();
            $table->double('totalPayable');
            $table->double('previousDue')->nullable();
            $table->double('currentDue')->nullable();
            $table->double('currentTotalAmount')->nullable();
            $table->double('currentPaidAmount')->nullable();
            $table->double('mobileAmount')->nullable();
            $table->integer('paymentStatus')->default(0);
            $table->integer('paymentType')->nullable();
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
        Schema::dropIfExists('sales_invoices');
    }
}
