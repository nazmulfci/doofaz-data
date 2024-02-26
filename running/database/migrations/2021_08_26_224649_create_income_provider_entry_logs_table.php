<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIncomeProviderEntryLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('income_provider_entry_logs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shopId');
            $table->integer('branchId')->nullable();
            
            //Expense Provider Entry
            $table->integer('accountCodeSirial');
            $table->string('accountCode','255');
            $table->string('accountCodeAdvancePayment','255');
            $table->integer('incomeType');
            $table->integer('incomeHead');
            $table->string('incomePurpous','255');
            $table->integer('incomeProviderId');
            $table->text('note')->nullable();
            
            // income expense company
            $table->integer('incomeAccountCode')->nullable();

            // chart of accounts
            $table->integer('headLavel');
            $table->string('headName','255');
            $table->string('headCode','255');
            $table->string('pre_code','255');
            $table->integer('dr_cr');
            $table->integer('headGroupId');
            $table->integer('headGroupType');
            $table->integer('lastCode');
            $table->integer('position');
            $table->integer('autoCreate');

            // chart of accounts
            $table->integer('headLavel1');
            $table->string('headName1','255');
            $table->string('headCode1','255');
            $table->string('pre_code1','255');
            $table->integer('dr_cr1');
            $table->integer('headGroupId1');
            $table->integer('headGroupType1');
            $table->integer('lastCode1');
            $table->integer('position1');
            $table->integer('autoCreate1');

            $table->boolean('status')->default('1');
            $table->boolean('deleteStatus')->nullable();
            $table->integer('createBy');
            $table->integer('updateBy')->nullable();
            $table->integer('deleteBy')->nullable();
            $table->dateTime('delete_at')->nullable();
            $table->timestamps();
        });


        DB::unprepared('
        CREATE TRIGGER `Insert COA Register` AFTER INSERT ON
         `income_provider_entry_logs` FOR EACH ROW 
         BEGIN 
            INSERT INTO chart_of_account_registers 
            (shopId,headLavel,headName,headCode,pre_code,dr_cr,
            headGroupId, headGroupType,lastCode,position,
            autoCreate,status, createBy,created_at) 
            VALUES(NEW.shopId,NEW.headLavel,NEW.headName,NEW.headCode,
            NEW.pre_code,NEW.dr_cr,NEW.headGroupId, NEW.headGroupType,
            NEW.lastCode,NEW.position, NEW.autoCreate,NEW.status,
            NEW.createBy,NEW.created_at);
         END
         ');

        DB::unprepared('
        CREATE TRIGGER `Insert COA Register 1` AFTER INSERT ON
         `income_provider_entry_logs` FOR EACH ROW 
         BEGIN
            INSERT INTO chart_of_account_registers 
            (shopId,headLavel,headName,headCode,pre_code,dr_cr,
            headGroupId, headGroupType,lastCode,position,
            autoCreate,status, createBy,created_at) 
            VALUES(NEW.shopId,NEW.headLavel1,NEW.headName1,NEW.headCode1,
            NEW.pre_code1,NEW.dr_cr1,NEW.headGroupId1, NEW.headGroupType1,
            NEW.lastCode1,NEW.position1, NEW.autoCreate1,NEW.status,
            NEW.createBy,NEW.created_at);
         END
         ');

        DB::unprepared('
        CREATE TRIGGER `Insert Income Provider` AFTER INSERT ON
         `income_provider_entry_logs` FOR EACH ROW 
         BEGIN
            INSERT INTO income_provider_entries 
            (shopId,accountCodeSirial,accountCode,accountCodeAdvancePayment,
            incomeType,incomeHead,incomePurpous,incomeProviderId,
            note,status, createBy,created_at) 
            VALUES(NEW.shopId,NEW.accountCodeSirial,NEW.accountCode,
            NEW.accountCodeAdvancePayment,
            NEW.incomeType,NEW.incomeHead,NEW.incomePurpous,
            NEW.incomeProviderId,
            NEW.note,NEW.status,
            NEW.createBy,NEW.created_at);
         END
         ');

        DB::unprepared('
        CREATE TRIGGER `Update Income Expense Company` AFTER INSERT ON
         `income_provider_entry_logs` FOR EACH ROW 
         BEGIN 
            UPDATE income_expense_companies SET 
            shopId = NEW.shopId,
            incomeAccountCode = NEW.headCode,
            updateBy = NEW.createBy,
            updated_at = NEW.created_at
            WHERE id=NEW.incomeProviderId;
         END
         ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('income_provider_entry_logs');
    }
}
