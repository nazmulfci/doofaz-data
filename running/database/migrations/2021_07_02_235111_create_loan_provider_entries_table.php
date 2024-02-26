<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoanProviderEntriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loan_provider_entries', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shopId');
            $table->integer('branchId')->nullable();
            $table->integer('tableType')->comment('1=Loan Provider, 2=Loan Reveiver');
            $table->integer('providerType');
            $table->integer('accountCodeSirial');
            $table->string('accountCode','255');
            $table->string('accountCodeExpense','255')->nullable();
            $table->string('providerName','255');
            $table->string('providerBranchName','255')->nullable();
            $table->string('providerContactPersonName','255')->nullable();
            $table->string('providerContactPersonMobileNo','255');
            $table->string('providerAddress','255');

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
        Schema::dropIfExists('loan_provider_entries');
    }
}
