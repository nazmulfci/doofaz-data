<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountSetupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('account_setups', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('placementType');
            $table->string('headName','255');
            $table->string('headCode','255');

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
        Schema::dropIfExists('account_setups');
    }
}
