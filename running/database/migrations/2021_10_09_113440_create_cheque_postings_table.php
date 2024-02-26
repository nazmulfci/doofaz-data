<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChequePostingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cheque_postings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('bank');
            $table->integer('bankAccountId');
            $table->integer('chequeNo');       
            $table->string('chequeType',200);       
            $table->longText('amount');       
            $table->string('cashDate',100);       
            $table->string('receiver',100)->nullable();       
            $table->string('accountName',100)->nullable();       
            $table->string('accountNumber',100)->nullable();       
            $table->string('issueDate',100);       
            $table->integer('shopId');
            $table->integer('status')->default(0);
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
        Schema::dropIfExists('cheque_postings');
    }
}
