<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDealerSalesSupplierSearchInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dealer_sales_supplier_search_infos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('customerId')->nullable();
            $table->integer('supplierId')->nullable();
            $table->integer('brandId')->nullable();
            $table->date('dateTime')->nullable();
            $table->integer('shopId');
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
        Schema::dropIfExists('dealer_sales_supplier_search_infos');
    }
}
