<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoadEntriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('road_entries', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('countryId');
            $table->integer('divisionId');
            $table->integer('districtId');
            $table->integer('thanaId');
            $table->integer('areaId');
            $table->integer('blockId');
            $table->string('roadNameNumber',255);
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
        Schema::dropIfExists('road_entries');
    }
}
