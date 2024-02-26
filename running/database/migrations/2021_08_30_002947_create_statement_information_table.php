<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStatementInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('statement_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shopId');
            $table->integer('banchId')->nullable();
            $table->string('rendomNumber','12')->nullable();
            $table->string('referance','50')->nullable();
            $table->integer('type')->comment('1=pay, 2=receive');
            $table->string('accountHeadCode','255');
            $table->string('accountCode','255');
            $table->string('title','255');
            $table->integer('paymentType');
            $table->double('cashAmount')->nullable();
            $table->string('personName','255')->nullable();
            $table->string('personMobileNo','255')->nullable();
            $table->double('bankAmount')->nullable();
            $table->integer('bankTypeEntryId')->nullable();
            $table->integer('bankEntryId')->nullable();
            $table->integer('bankAccountId')->nullable();
            $table->double('dueAmount');
            $table->double('debitAmount')->nullable();
            $table->double('creditAmount')->nullable();
            $table->double('balanceAmount');
            $table->string('note','255')->nullable(); 

            $table->boolean('advanceSecurityDepositPrepayment')->default('0');
            $table->boolean('status')->default('1');
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
        Schema::dropIfExists('statement_information');
    }
}
