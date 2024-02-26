<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBankCheckDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bank_check_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('bankCheckid');
            $table->integer('bank');
            $table->integer('bankAccountId');
            $table->longText('checkNo');       
            $table->longText('note')->nullable();       
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
        Schema::dropIfExists('bank_check_details');
    }
}
