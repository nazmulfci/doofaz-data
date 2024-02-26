<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminSubMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin_sub_menus', function (Blueprint $table) {
            $table->bigIncrements('adminSubMenuId');
            $table->integer('adminMenuId');
            $table->string('adminSubMenuName');
            $table->string('adminSubMenuNameBn');
            $table->string('adminSubMenuUrl');
            $table->integer('adminSubMenuePosition');
            $table->integer('adminSubMenueStatus');
            $table->integer('adminSubMenuePermission')->default(1)->comment("0=inactive, 1=active");
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
        Schema::dropIfExists('admin_sub_menus');
    }
}
