<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDealerSalesOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dealer_sales_orders', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('rendomNumber',100);

            $table->integer('salesInvoiceNo')->nullable();
            $table->integer('orderRequestId')->nullable();
            $table->integer('supplierId');
            $table->integer('productId');
            $table->integer('brandId');
            $table->integer('sizeId');
            $table->integer('colorId');
            $table->integer('priceType');
            $table->double('unitPrice');
            $table->double('purchaseUnitPrice');

            $table->double('perCartonQuantity');
            $table->integer('unitId')->comment('perCartonUnitId');
            $table->string('perCartonUnitName',20);

            $table->integer('requisitionNo')->nullable();
            $table->integer('approveNo')->nullable();
            $table->integer('deliveryNo')->nullable();

            $table->double('cartonRequest');
            $table->double('cartonApprove')->default(0);
            $table->double('cartonDelivery')->default(0);

            $table->double('pieceRequest');
            $table->double('pieceApprove')->default(0);
            $table->double('pieceDelivery')->default(0);

            $table->double('totalPieceRequest');
            $table->double('totalPieceApprove')->default(0);
            $table->double('totalPieceDelivery')->default(0);
            $table->double('totalPieceGood')->default(0);
            $table->double('totalPieceDamage')->default(0);
            $table->double('totalPieceReturn')->default(0);
            $table->double('quantity')->default(0);

            $table->double('totalPriceRequest');
            $table->double('totalPriceApprove')->default(0);
            $table->double('totalPriceDelivery')->default(0);
            $table->double('totalPriceReturn')->default(0);
            $table->double('totalPriceDamage')->default(0);
            $table->double('totalPrice')->default(0)->comment('salesTotalPrice');
            $table->double('purchaseTotalPrice')->default(0);
            $table->double('totalProfit')->default(0);

            $table->integer('customerId')->nullable();
            $table->integer('srId')->nullable();
            $table->integer('dsrId')->nullable();

            $table->dateTime('OrderRequestDate');
            $table->dateTime('OrderApproveDate')->nullable();
            $table->dateTime('OrderDeliveryDate')->nullable();

            $table->integer('status')->default(0)->comment('1=request, 2=approve, 3=delivery');
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
        Schema::dropIfExists('dealer_sales_orders');
    }
}
