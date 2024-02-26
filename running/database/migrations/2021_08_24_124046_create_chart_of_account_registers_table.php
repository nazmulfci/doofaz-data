<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChartOfAccountRegistersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chart_of_account_registers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shopId');
            $table->integer('branchId')->nullable();
            $table->integer('headLavel');
            $table->string('headName','255');
            $table->string('headCode','255');
            $table->string('pre_code','255');
            $table->integer('dr_cr');
            $table->integer('headGroupId');
            $table->integer('headGroupType');
            $table->integer('lastCode');
            $table->integer('status');
            $table->integer('position');
            $table->integer('autoCreate');
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
        Schema::dropIfExists('chart_of_account_registers');
    }
}
