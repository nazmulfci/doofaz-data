<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales_payments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('salesInvoiceId');
            $table->integer('shopId');
            $table->integer('salesCustomerTypeId');
            $table->integer('salesCustomerId');
            $table->integer('cashAmount')->nullable();
            $table->integer('currentDue')->nullable();
            $table->integer('bankAmount')->nullable();
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
            
            $table->boolean('deleteStatus')->nullable();
            $table->integer('createBy');
            $table->integer('updateBy')->nullable();
            $table->integer('deleteBy')->nullable();
            $table->timestamps();
            $table->dateTime('delete_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales_payments');
    }
}
