<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSmsTemplateTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sms_template_types', function (Blueprint $table) {
            $table->bigIncrements('id');
        $table->integer('smsType');
        $table->string('smsBody',);
        
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
        Schema::dropIfExists('sms_template_types');
    }
}
