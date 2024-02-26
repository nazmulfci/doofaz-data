<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalaryPaysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('salary_pays', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('employeeId');
            $table->integer('shopId');
            $table->integer('bankTypeEntryId')->nullable();
            $table->integer('bankEntryId')->nullable();
            $table->integer('bankAccountId')->nullable();
            $table->string('branchName',200)->nullable();
            $table->integer('paymentType')->nullable();
            $table->string('accNo',100)->nullable();
            $table->longText('receiverBankName')->nullable();
            $table->string('receiverAcNo',200)->nullable();
            $table->string('receiverAcName',200)->nullable();
            $table->longText('receiverBranchName')->nullable();
            $table->integer('receiverMobileAcNo')->nullable();
            $table->string('receiverName',100)->nullable();
            $table->longText('receiverMobile')->nullable();
            $table->integer('payAmount');
            $table->integer('dueAmount')->nullable();
            $table->longText('note')->nullable();
            $table->longText('payDate')->nullable();
            $table->longText('payMonth')->nullable();
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
        Schema::dropIfExists('salary_pays');
    }
}
