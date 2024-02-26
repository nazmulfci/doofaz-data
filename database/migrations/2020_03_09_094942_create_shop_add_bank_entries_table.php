<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShopAddBankEntriesTable extends Migration
{
    /**
     * Run the migrations.
     *


     * @return void
     */
    public function up()
    {
        Schema::create('shop_add_bank_entries', function (Blueprint $table) {
            $table->bigIncrements('bankId');
            $table->integer('shopId');
            $table->integer('bankTypeEntryId');
            $table->integer('bankEntryId');
            $table->string('accountCodeSirial');
            $table->string('accountCode');
            $table->integer('bankAccountType')->default(0);
            $table->string('bankBranch')->nullable();
            $table->string('bankAccountName')->nullable();
            $table->string('bankAccountNumber');
            $table->integer('status');
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
        Schema::dropIfExists('shop_add_bank_entries');
    }
}
