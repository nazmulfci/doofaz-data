<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSmsApiInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sms_api_infos', function (Blueprint $table) {
            $table->bigIncrements('id');
        $table->integer('OparetorId');
        $table->integer('smsTypeId');
        $table->string('smsLinkUrl',255);
        $table->string('userName',255);
        $table->string('password',255);
        $table->string('from',255);
        
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
        Schema::dropIfExists('sms_api_infos');
    }
}
