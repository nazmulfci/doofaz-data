<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSimOperatorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sim_operators', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('operatorName',255);
            $table->string('shortCode',255);
            $table->string('logo',255)->nullable();
            
            $table->integer('status')->default(0);
            $table->integer('shopId');
            $table->integer('createBy');
            $table->integer('updateBy')->nullable();
            $table->integer('deleteBy')->nullable();
            $table->timestamps();
            $table->dateTime('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sim_operators');
    }
}
