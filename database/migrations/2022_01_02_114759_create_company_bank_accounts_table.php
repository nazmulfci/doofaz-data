<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanyBankAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_bank_accounts', function (Blueprint $table) {
            $table->bigIncrements('bankEntryId');
            $table->string('bankName');
            $table->integer('bankTypeEntryId');
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
        Schema::dropIfExists('company_bank_accounts');
    }
}
