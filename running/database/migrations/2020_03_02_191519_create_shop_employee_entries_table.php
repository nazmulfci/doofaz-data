<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShopEmployeeEntriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shop_employee_entries', function (Blueprint $table) {
            $table->bigIncrements('shopEmployeeEntryId');
            $table->integer('jobDepartmentId');
            $table->integer('employeeTypeId');
            $table->string('userName');
            $table->string('password');
            $table->string('fullName')->nullable();
            $table->string('fatherName')->nullable();
            $table->string('motherName')->nullable();
            $table->string('dateOfBirth')->nullable();
            $table->string('phoneNumber')->nullable();
            $table->integer('religion')->nullable();
            $table->integer('sex')->nullable();
            $table->integer('maritalStatus')->nullable();
            $table->integer('nidNumber')->nullable();
            $table->string('nationality')->nullable();
            $table->text('presentAddress')->nullable();
            $table->text('permanentAddress')->nullable();
            $table->integer('shopId')->nullable();
            $table->integer('shopTypeId')->nullable();
            $table->boolean('status')->default(1);
            $table->integer('salaryStatus')->default(1);
            $table->longText('reason')->nullable();
            $table->longText('statusUpdateDate')->nullable();
            $table->integer('setupStatus')->default(0);
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
        Schema::dropIfExists('shop_employee_entries');
    }
}
