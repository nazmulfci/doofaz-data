<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSupplierPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('supplier_payments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('purchaseInvoiceNo');
            $table->integer('shopId');      
            $table->integer('supplierId');
            $table->integer('cashAmount')->nullable();
            $table->integer('due')->nullable();
            $table->integer('returnAmount')->nullable();
            $table->integer('bankAmount')->nullable();
            $table->integer('receiverbankTypeEntryId')->nullable();
            $table->string('receiverBankName')->nullable();
            $table->string('receiverAcNo')->nullable();
            $table->string('receiverAcName')->nullable();
            $table->string('receiverBranchName')->nullable();
            $table->string('receiverMobileAcNo')->nullable();
            $table->string('receiverTrxNo')->nullable();
            $table->integer('senderBankTypeEntryId')->nullable();
            $table->integer('senderbankEntryId')->nullable();
            $table->string('senderbankAccountId')->nullable();
            $table->string('senderbranchName')->nullable();
            $table->string('senderAccNo')->nullable();
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
        Schema::dropIfExists('supplier_payments');
    }
}
