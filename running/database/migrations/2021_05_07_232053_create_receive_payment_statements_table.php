<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReceivePaymentStatementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('receive_payment_statements', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shopId');
            $table->integer('branchId');
            $table->integer('type')->comment('1=Receive, 2=Payment');
            $table->integer('voucherType')->comment('CP,CR,BP,BR,CV,JV,OV');
            $table->integer('voucherId');
            $table->dateTime('voucherDate');
            $table->string('voucherUniqueId','50');
            $table->string('accountHeadCode','50')->nullable();
            $table->string('accountCode','50');
            $table->double('cash')->nullable();
            $table->double('bank')->nullable();
            $table->double('total');
            
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
        Schema::dropIfExists('receive_payment_statements');
    }
}
