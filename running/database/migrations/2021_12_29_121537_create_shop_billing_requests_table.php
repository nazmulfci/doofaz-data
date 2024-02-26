<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShopBillingRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shop_billing_requests', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('totalMonth');
            $table->double('amount');
            $table->integer('bankTypeEntryId');
            $table->integer('bankAccountId');
            $table->string('bankDetils',255);
            $table->string('mbAccountNo',255)->nullable(); 
            $table->string('mbTrNo',255)->nullable(); 
            $table->string('bankName',255)->nullable();
            $table->string('accountName',255)->nullable();
            $table->string('accountNumber',255)->nullable();
            $table->string('branchName',255)->nullable();
            $table->string('paySlip',255)->nullable();
            $table->string('lastBillDate',255)->nullable();
            $table->integer('shopId');
            $table->integer('status')->default('0')->comment('0=pending, 1=waiting, 2=approved, 3=cancel');
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
        Schema::dropIfExists('shop_billing_requests');
    }
}
