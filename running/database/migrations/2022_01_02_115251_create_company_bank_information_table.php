<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanyBankInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_bank_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('bankAccountId');
            $table->string('accountType',255);
            $table->string('accountNumber',255);
            $table->string('accountName',255);
            $table->string('brunchName',255);
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
        Schema::dropIfExists('company_bank_information');
    }
}
