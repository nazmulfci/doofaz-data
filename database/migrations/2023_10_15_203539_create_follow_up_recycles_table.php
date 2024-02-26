<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFollowUpRecyclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('follow_up_recycles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shopInfoId');
            $table->text('note');
            $table->integer('status')->nullable();
            $table->integer('shopId');
            $table->integer('createBy')->nullable();
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
        Schema::dropIfExists('follow_up_recycles');
    }
}
