<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHouseMarketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('house_markets', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('countryId');
            $table->integer('divisionId');
            $table->integer('districtId');
            $table->integer('thanaId');
            $table->integer('areaId');
            $table->integer('blockRoadId');
            $table->integer('roadId')->nullable();
            $table->string('houseMarketName',255);
            $table->string('houseMarketNumber',255)->nullable();
            $table->string('howMuchFloor',255)->nullable();
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
        Schema::dropIfExists('house_markets');
    }
}
