<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSecurityMoneyWithdrawOrAdjustmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('security_money_withdraw_or_adjustments', function (Blueprint $table) {
            $table->bigIncrements('id');
                        $table->integer('shopId');
            $table->integer('branchId')->nullable();
            $table->integer('expenseType');
            $table->integer('expenseHead');
            $table->integer('expensePurpous');
            $table->integer('expenseCompany');
            $table->string('expenseTitle','255');
            $table->integer('returnType');
            $table->double('securityAmount');
            $table->double('receiveAmount');
            $table->double('dueAmount');
            $table->integer('paymentType')->nullable();
            $table->double('cashAmount')->nullable();
            $table->string('personName','255')->nullable();
            $table->string('personMobileNo','255')->nullable();
            $table->double('bankAmount')->nullable();
            $table->integer('bankTypeEntryId')->nullable();
            $table->integer('bankEntryId')->nullable();
            $table->integer('bankAccountId')->nullable();
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
        Schema::dropIfExists('security_money_withdraw_or_adjustments');
    }
}
