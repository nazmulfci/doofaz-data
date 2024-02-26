<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssetStatusHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('asset_status_histories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shopId');
            $table->integer('shopTypeId');
            $table->integer('branchId')->nullable();

            $table->integer('assetInfoId');
            $table->integer('assetCategoryId');
            $table->integer('assetProductId');
            $table->integer('assetSupplierId');
            $table->integer('assetBrandId');
            $table->integer('fromStatus');
            $table->integer('toStatus');
            $table->integer('currentPayable');
            $table->integer('productCost');
            $table->integer('totalProductCost');
            $table->double('productQuantity');

            
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
        Schema::dropIfExists('asset_status_histories');
    }
}
