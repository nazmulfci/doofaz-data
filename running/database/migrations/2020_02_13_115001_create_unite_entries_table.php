<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUniteEntriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('unite_entries', function (Blueprint $table) {
            $table->bigIncrements('uniteEntryId');
            $table->integer('shopId');
            $table->integer('branchId')->nullable();
            $table->integer('shopTypeId');
            $table->string('uniteEntryName',20);
            $table->integer('uniteEntryStatus');
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
        Schema::dropIfExists('unite_entries');
    }
}
