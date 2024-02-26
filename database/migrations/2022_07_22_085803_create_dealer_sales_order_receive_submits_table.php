<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDealerSalesOrderReceiveSubmitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dealer_sales_order_receive_submits', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->integer('salesInvoiceNo')->nullable();
            $table->integer('requisitionNo')->nullable();
            $table->integer('approveNo')->nullable();
            $table->integer('deliveryNo')->nullable();

            $table->integer('salesRequestId');
            $table->string('rendomNumber',100);

            $table->integer('supplierId');
            $table->integer('brandId')->nullable();

            $table->double('totalSalesAmount');
            $table->double('todayDue')->nullable()->default(0);
            $table->double('pevDueCollection')->nullable()->default(0);
            $table->double('totalCollection')->nullable()->default(0);
            $table->double('netCollection')->nullable()->default(0);
            $table->dateTime('OrderReceiveDate');

            $table->integer('customerId')->nullable();
            $table->integer('srId')->nullable();
            $table->integer('dsrId')->nullable();


            // ==========================
            $table->string('salesDate');
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

            $table->integer('senderbankTypeEntryId')->nullable();
            $table->string('senderBankName')->nullable();
            $table->string('senderAcNo')->nullable();
            $table->string('senderAcName')->nullable();
            $table->string('senderBranchName')->nullable();
            $table->string('senderMobileAcNo')->nullable();
            $table->string('senderTrxNo')->nullable();
            $table->integer('receiverbankTypeEntryId')->nullable();
            $table->integer('receiverbankEntryId')->nullable();
            $table->string('receiverbankAccountId')->nullable();
            $table->string('receiverbranchName')->nullable();
            $table->string('receiverAccNo')->nullable();
            // ==========================

            $table->integer('status')->default(1)->comment('1=pending, 2=approve');
            $table->integer('shopId');
            $table->integer('shopTypeId');
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
        Schema::dropIfExists('dealer_sales_order_receive_submits');
    }
}
