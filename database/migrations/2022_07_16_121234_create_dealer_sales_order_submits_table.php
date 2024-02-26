<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDealerSalesOrderSubmitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dealer_sales_order_submits', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->integer('requisitionNo')->nullable();
            $table->integer('approveNo')->nullable();
            $table->integer('deliveryNo')->nullable();
            
            $table->string('rendomNumber',100);

            $table->integer('supplierId');
            $table->integer('brandId')->nullable();


            $table->double('totalPriceRequest');
            $table->dateTime('OrderRequestDate');

            $table->integer('customerId')->nullable();
            $table->integer('srId')->nullable();
            $table->integer('dsrId')->nullable();

            $table->integer('status')->default(1)->comment('1=request, 2=receive');
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
        Schema::dropIfExists('dealer_sales_order_submits');
    }
}
