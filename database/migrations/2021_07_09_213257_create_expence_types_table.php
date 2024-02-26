<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpenceTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expence_types', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shopId');
            $table->integer('branchId')->nullable();
            $table->integer('accountCodeSirial');
            $table->integer('accountHeadCode');
            $table->integer('accountCode');
            $table->integer('expenseType');
            $table->string('name','255');

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
        Schema::dropIfExists('expence_types');
    }
}
