<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminMenuTitleName1sTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin_menu_title_name1s', function (Blueprint $table) {
            $table->bigIncrements('adminMenuTitleId');
            $table->string('adminMenuTitleName');
            $table->string('adminMenuTitlePosition');
            $table->string('adminMenuTitleIcon')->nullable();
            $table->string('adminMenuTitleStatus');
            $table->integer('adminMenuTitlePermission');
            $table->integer('createBy');
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
        Schema::dropIfExists('admin_menu_title_name1s');
    }
}
