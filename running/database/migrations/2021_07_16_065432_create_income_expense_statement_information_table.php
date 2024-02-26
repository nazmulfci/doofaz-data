<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIncomeExpenseStatementInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('income_expense_statement_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shopId');
            $table->integer('branchId')->nullable();
            $table->string('rendomNumber','12')->nullable();
            $table->integer('type');
            $table->integer('incomeExpenseType');
            $table->integer('incomeExpenseHead');
            $table->integer('incomeExpensePurpous');
            $table->integer('incomeExpenseCompanyId');
            $table->string('incomeExpenseTitle','255');
            $table->double('incomeExpenseAmount');
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
        Schema::dropIfExists('income_expense_statement_information');
    }
}
