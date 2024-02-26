<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoiceSetupDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoice_setup_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shopId');
            $table->integer('branchId')->nullable(true);
            $table->integer('invoiceForId');
            $table->integer('invoiceTypeId');
            $table->integer('invoiceFormetId');
            $table->string('logo','255')->nullable(true);
            $table->string('companyName','255')->nullable(true);
            $table->string('address','255')->nullable(true);
            $table->string('mobileNo','255')->nullable(true);
            $table->string('email','255')->nullable(true);
            $table->string('website','255')->nullable(true);
            $table->string('toText','255')->nullable(true);
            $table->string('titleText','255')->nullable(true);
            $table->string('themeColor','100')->nullable(true);
            $table->string('subTotal','100')->nullable(true);
            $table->string('vat','100')->nullable(true);
            $table->string('discount','100')->nullable(true);
            $table->string('grandTotal','100')->nullable(true);
            $table->string('noticeTitle','100')->nullable(true);
            $table->string('noticeDetails')->nullable(true);
            $table->string('generatedFrom')->nullable(true);
            $table->string('thankyou')->nullable(true);
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
        Schema::dropIfExists('invoice_setup_details');
    }
}
