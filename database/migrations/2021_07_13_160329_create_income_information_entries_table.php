<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIncomeInformationEntriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('income_information_entries', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shopId');
            $table->integer('branchId')->nullable();
            $table->string('rendomNumber','12');
            $table->integer('incomeType');
            $table->integer('incomeHead');
            $table->integer('incomePurpous');
            $table->integer('incomeCompnayId');
            $table->string('incomeTitle','255');
            $table->double('incomeAmount');
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
        Schema::dropIfExists('income_information_entries');
    }
}
