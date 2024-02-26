<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIncomeExpenseBillPaymentReceivesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('income_expense_bill_payment_receives', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('type');
            $table->integer('companyId');
            $table->double('lastBalance');
            $table->double('amount');
            $table->integer('paymentType');
            $table->string('personName','255')->nullable();
            $table->string('personMobileNo','255')->nullable();
            $table->integer('bankTypeEntryId')->nullable();
            $table->integer('bankEntryId')->nullable();
            $table->integer('bankAccountId')->nullable();
            $table->double('dueAmount'); 
            $table->string('note','255')->nullable(); 

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
        Schema::dropIfExists('income_expense_bill_payment_receives');
    }
}
