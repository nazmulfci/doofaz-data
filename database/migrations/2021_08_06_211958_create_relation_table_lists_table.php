<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRelationTableListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('relation_table_lists', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shopId');
            $table->integer('branchId');
            $table->integer('tableHeadId');
            $table->string('tableName','255');
            $table->string('className','255');
            $table->string('fieldName','255');
            $table->string('orderByType','5');
            $table->string('orderByFiedld','255');
            $table->string('orderByFiedName','255');
            $table->string('headNameField','255');

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
        Schema::dropIfExists('relation_table_lists');
    }
}
