<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalarySheetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('salary_sheets', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('employeeId');
            $table->integer('shopId');
            $table->integer('salaryGradeId');
            $table->integer('amount');
            $table->integer('deductAmount')->nullable();
            $table->integer('advanceAmount')->nullable();
            $table->integer('netAmount');
            $table->longText('reason')->nullable();
            $table->string('reasonDate')->nullable();
            $table->integer('salaryStartMonth');
            $table->integer('salaryStartYear');
            $table->string('salaryStartDate',100);
            $table->integer('paymentStatus')->default(0);
            $table->integer('status')->default(0);
            $table->integer('branchId')->nullable();
            $table->longText('overtimePayment')->nullable();
            $table->integer('tax')->nullable();
            $table->integer('providentFundAmount')->nullable();
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
        Schema::dropIfExists('salary_sheets');
    }
}
