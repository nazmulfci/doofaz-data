<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReceiverLoanPaysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('receiver_loan_pays', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shopId');
            $table->integer('branchId')->nullable();
            $table->integer('loanProviderTypeId');
            $table->integer('loanProviderId');
            $table->integer('interestType');
            $table->integer('interestTimeType');
            $table->integer('loanPayType')->nullable();
            $table->integer('howMuchTime')->nullable();
            $table->double('loanMainAmount');
            $table->double('monthlyAmount')->default('0');
            $table->double('paidAmount')->default('0');
            $table->double('dueAmount')->default('0');
            $table->string('paidDate','255')->nullable();
            $table->integer('bankAccountId')->nullable();

            $table->boolean('receiveStatus')->default('0');
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
        Schema::dropIfExists('receiver_loan_pays');
    }
}
