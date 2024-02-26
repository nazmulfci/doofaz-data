<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDueLimitSetupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('due_limit_setups', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('customerTypeId');
            $table->integer('customerId');
            $table->integer('shopId');
            $table->integer('shopTypeId');
            $table->integer('limitDueAmmount');
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
        Schema::dropIfExists('due_limit_setups');
    }
}
