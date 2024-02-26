<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShopBillMonthListsTable extends Migration
{
   
   
    /**
     * Run the migrations.
     *
     * @return void
     */


    public function up()
    {
        Schema::create('shop_bill_month_lists', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title',100);
            $table->integer('month');
            $table->double('discountAmount')->default('0');
            $table->string('discountText',100)->nullable();
            $table->integer('countryId');
            $table->integer('shopId');
            $table->integer('status')->default('1')->comment('1=Active, 2=Inactive');
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
        Schema::dropIfExists('shop_bill_month_lists');
    }
}
