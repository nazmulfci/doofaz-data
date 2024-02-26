<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesProductDiscountDateInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales_product_discount_date_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('discountInfoId');
            $table->integer('purchaseProductId');
            $table->integer('productId');
            $table->integer('brandId');
            $table->integer('colorId')->default(0);
            $table->integer('sizeId')->default(0);
            $table->integer('discountType')->comment('1=mrp, 2=sales, 3=wholesale, 4=special, 5=e-commerce');
            $table->double('discountAmount')->nullable();
            $table->integer('discountAmountType')->nullable();
            $table->date('discountStartDate')->nullable();
            $table->date('discountExpiredDate')->nullable();
            $table->double('discountPrice')->nullable();
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
        Schema::dropIfExists('sales_product_discount_date_information');
    }
}
