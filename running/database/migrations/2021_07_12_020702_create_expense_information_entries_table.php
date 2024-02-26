<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpenseInformationEntriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expense_information_entries', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shopId');
            $table->integer('branchId')->nullable();
            $table->string('rendomNumber','12');
            $table->string('expenseType','255');
            $table->string('expenseHead','255');
            $table->string('expensePurpous','255');
            $table->integer('expenseCompanyId');
            $table->string('expenseTitle','255');
            $table->double('expenseAmount');
            $table->integer('paymentType');
            $table->double('cashAmount')->nullable();
            $table->string('personName','255')->nullable();
            $table->string('personMobileNo','255')->nullable();
            $table->double('bankAmount')->nullable();
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
        Schema::dropIfExists('expense_information_entries');
    }
}
