<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStartSalarySetupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('start_salary_setups', function (Blueprint $table) {
              $table->bigIncrements('salarySetupId');
              $table->integer('employeEntryId');
              $table->integer('jobDepartmentId');
              $table->integer('accountCodeSirial');
              $table->string('accountCode','255');
              $table->integer('gradeEntryId');
              $table->string('salaryStartYear','100');
              $table->string('salaryMonthYear','100');
              $table->string('salaryStartDate','100');
              $table->boolean('salarySetupStatus');
              $table->integer('salaryStatus')->default(1)->comment('1=Active, 2=Inactive, 3=Salary Push');
              $table->integer('paymentStatus')->default(0);
              $table->integer('shopId');
              $table->integer('shopTypeId');
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
        Schema::dropIfExists('start_salary_setups');
    }
}
