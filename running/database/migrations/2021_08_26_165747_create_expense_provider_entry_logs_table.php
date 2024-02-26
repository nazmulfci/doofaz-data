<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpenseProviderEntryLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expense_provider_entry_logs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shopId');
            $table->integer('branchId')->nullable();
            
            //Expense Provider Entry
            $table->integer('accountCodeSirial');
            $table->string('accountCode','255');
            $table->string('accountCodeSecurityDeposit','255');
            $table->integer('expenseType');
            $table->integer('expenseHead');
            $table->string('expensePurpous','255');
            $table->integer('expenseProviderId');
            $table->text('note')->nullable();
            
            // income expense company
            $table->integer('expenseAccountCode')->nullable();

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
        CREATE TRIGGER `Insert COA Register from expense provider` AFTER INSERT ON
         `expense_provider_entry_logs` FOR EACH ROW 
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
        CREATE TRIGGER `Insert COA Register  from expense provider 1` AFTER INSERT ON
         `expense_provider_entry_logs` FOR EACH ROW 
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
        CREATE TRIGGER `Insert Expense Provider  from expense provider` AFTER INSERT ON
         `expense_provider_entry_logs` FOR EACH ROW 
         BEGIN
            INSERT INTO expense_provider_entries 
            (shopId,accountCodeSirial,accountCode,accountCodeSecurityDeposit,
            expenseType,expenseHead,expensePurpous,expenseProviderId,
            note,status, createBy,created_at) 
            VALUES(NEW.shopId,NEW.accountCodeSirial,NEW.accountCode,
            NEW.accountCodeSecurityDeposit,
            NEW.expenseType,NEW.expenseHead,NEW.expensePurpous,
            NEW.expenseProviderId,
            NEW.note,NEW.status,
            NEW.createBy,NEW.created_at);
         END
         ');

        DB::unprepared('
        CREATE TRIGGER `Update Income Expense Company  from expense provider` AFTER INSERT ON
         `expense_provider_entry_logs` FOR EACH ROW 
         BEGIN 
            UPDATE income_expense_companies SET 
            shopId = NEW.shopId,
            expenseAccountCode = NEW.headCode,
            updateBy = NEW.createBy,
            updated_at = NEW.created_at
            WHERE id=NEW.expenseProviderId;
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
        Schema::dropIfExists('expense_provider_entry_logs');
    }
}
