<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTimelineInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('timeline_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shopInfoId');
            $table->integer('referanceTypeId')->comment('1=new shop entry,2=edit,3=status change(3.1-3.2-3.3....),4=meeting setup,5=note,6=message');
            $table->integer('referanceId');
            $table->string('title',50);
            $table->text('description');
            $table->date('date');
            $table->time('time');
            $table->string('from')->nullable();
            $table->string('to')->nullable();
            $table->text('note')->nullable();

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
        Schema::dropIfExists('timeline_information');
    }
}
