<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpenseInformationEntryLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expense_information_entry_logs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shopId');
            $table->integer('branchId')->nullable();
            
            $table->string('rendomNumber','12');
            $table->integer('expenseType');
            $table->integer('expenseHead');
            $table->integer('expensePurpous');
            $table->integer('expenseCompanyId');
            $table->string('expenseTitle','255');
            $table->double('expenseAmount');
            $table->integer('paymentType');
            $table->double('cashAmount')->nullable();
            $table->string('personName','255')->nullable();
            $table->string('personMobileNo','255')->nullable();
            $table->double('bankAmount')->nullable();
            $table->integer('bankTypeEntryId')->nullable();
            $table->integer('bankEntryId')->nullable();
            $table->integer('bankAccountId')->nullable();
            $table->double('dueAmount'); 
            $table->string('note','255')->nullable(); 

            // income expense statement information
            $table->integer('type');
            $table->double('debitAmount')->nullable();
            $table->double('creditAmount')->nullable();
            $table->double('balanceAmount');

            $table->boolean('advanceSecurityDepositPrepayment')->default('0');
            $table->integer('expenseDetailStatus');

            // voucher information
            $table->dateTime('voucherDate');
            $table->integer('voucherType');
            $table->integer('voucherSource')->default('0');
            $table->string('voucherNo','50');
            $table->string('voucherUniqueId','100');
            $table->string('paymentTo','100')->nullable();
            $table->string('mobileNo','100')->nullable();
            $table->integer('checkPaymentType')->nullable();
            $table->string('receiverBankAccountName','255')->nullable();
            $table->string('chequeNo','100')->nullable();
            $table->dateTime('chequeDate')->nullable();

            $table->string('accountsHeadCode','100')->nullable();
            $table->string('accountCodeDebit','100');
            $table->string('accountCodeCredit','100');

            $table->double('voucherAmount');
            $table->string('particular','255');
            $table->integer('day');
            $table->integer('month');
            $table->integer('year');
            $table->integer('openingVoucher')->default('0');

            // voucher information report

            $table->string('accountsHeadCodeVR','100')->nullable();

            $table->string('accountsCodeVR','100');
            $table->integer('typeVR');
            $table->string('accountsCodeVR1','100');
            $table->integer('typeVR1');


            $table->integer('randId');
 
            // Expense detail item
            $table->integer('statusEDI');
 

            // Receive Payment Statement

            $table->integer('typeRPS');
            $table->integer('voucherId');
            $table->string('accountHeadCode','50')->nullable();
            $table->string('accountCode','50');
            $table->double('cash')->nullable();
            $table->double('bank')->nullable();
            $table->double('total');

            $table->boolean('status')->default('1');
            $table->boolean('deleteStatus')->nullable();
            $table->integer('createBy');
            $table->integer('updateBy')->nullable();
            $table->integer('deleteBy')->nullable();
            $table->timestamps();
            $table->dateTime('delete_at')->nullable();
        });

        // DB::unprepared('
        // CREATE TRIGGER `Insert Expense Information` AFTER INSERT ON
        //  `expense_provider_entry_logs` FOR EACH ROW 
        //  BEGIN 
        //         INSERT INTO expense_information_entries 
        //         (rendomNumber,expenseType,expenseHead,expensePurpous,
        //         expenseCompanyId,expenseTitle,expenseAmount,paymentType,
        //         cashAmount,personName,personMobileNo,bankAmount,
        //         bankTypeEntryId,bankEntryId,bankAccountId,dueAmount,
        //         note,createBy,created_at) VALUES(NEW.rendomNumber,NEW.expenseType,
        //         NEW.expenseHead,NEW.expensePurpous, NEW.expenseCompanyId,NEW.expenseTitle,
        //         NEW.expenseAmount,NEW.paymentType, NEW.cashAmount,NEW.personName,
        //         NEW.personMobileNo,NEW.bankAmount, NEW.bankTypeEntryId,NEW.bankEntryId,
        //         NEW.bankAccountId,NEW.dueAmount, NEW.note,NEW.createBy,NEW.created_at);
        //  END
        //  ');

        // DB::unprepared('
        // CREATE TRIGGER `Insert Income Expense Statement Information` AFTER INSERT ON
        //  `expense_provider_entry_logs` FOR EACH ROW 
        //  BEGIN 
        //         INSERT INTO income_expense_statement_information 
        //         (rendomNumber,type,incomeExpenseType,incomeExpenseHead,incomeExpensePurpous,
        //         incomeExpenseCompanyId,incomeExpenseTitle,incomeExpenseAmount,paymentType,
        //         cashAmount,personName,personMobileNo,bankAmount,
        //         bankTypeEntryId,bankEntryId,bankAccountId,dueAmount,
        //         debitAmount,balanceAmount,note,createBy,created_at)
        //         VALUES(NEW.rendomNumber,NEW.type,NEW.incomeExpenseType,NEW.incomeExpenseHead,NEW.incomeExpensePurpous,
        //         NEW.incomeExpenseCompanyId,NEW.incomeExpenseTitle,NEW.incomeExpenseAmount,NEW.paymentType,
        //         NEW.cashAmount,NEW.personName,NEW.personMobileNo,NEW.bankAmount,
        //         NEW.bankTypeEntryId,NEW.bankEntryId,NEW.bankAccountId,NEW.dueAmount,
        //         NEW.debitAmount,NEW.balanceAmount,NEW.note,NEW.createBy,NEW.created_at);
        //  END
        //  ');

        // DB::unprepared('
        // CREATE TRIGGER `Insert voucher information` AFTER INSERT ON
        //  `expense_provider_entry_logs` FOR EACH ROW 
        //  BEGIN 
        //  INSERT INTO 
        //  `voucher_information` (
        //  `shopId`,
        //  `branchId`,
        //  `voucherDate`,
        //  `voucherType`,
        //  `voucherSource`,
        //  `voucherNo`,
        //  `voucherUniqueId`,
        //  `paymentTo`,
        //  `mobileNo`,
        //  `checkPaymentType`,
        //  `receiverBankAccountName`,
        //  `chequeNo`,
        //  `chequeDate`,
        //  `accountsHeadCode`,
        //  `accountCodeDebit`,
        //  `accountCodeCredit`,
        //  `debitAmount`,
        //  `creditAmount`,
        //  `voucherAmount`,
        //  `particular`,
        //  `day`,
        //  `month`,
        //  `year`,
        //  `openingVoucher`,
        //  `status`,
        //  `createBy`,
        //  `created_at`
        //      ) VALUES (
         
        //  NEW.shopId,
        //  NEW.branchId,
        //  NEW.voucherDate,
        //  NEW.voucherType,
        //  NEW.voucherSource,
        //  NEW.voucherNo,
        //  NEW.voucherUniqueId,
        //  NEW.paymentTo,
        //  NEW.mobileNo,
        //  NEW.checkPaymentType,
        //  NEW.receiverBankAccountName,
        //  NEW.chequeNo,
        //  NEW.chequeDate,
        //  NEW.accountsHeadCode,
        //  NEW.accountCodeDebit,
        //  NEW.accountCodeCredit,
        //  NEW.debitAmount,
        //  NEW.creditAmount,
        //  NEW.voucherAmount,
        //  NEW.particular,
        //  NEW.day,
        //  NEW.month,
        //  NEW.year,
        //  NEW.openingVoucher,
        //  NEW.status,
        //  NEW.createBy,
        //  NEW.created_at);
        //  END
        //  ');

        // DB::unprepared('
        // CREATE TRIGGER `Insert voucher information report` AFTER INSERT ON
        //  `expense_provider_entry_logs` FOR EACH ROW 
        //  BEGIN 
        //  INSERT INTO 
        //     `voucher_information_reports` (
        //     `shopId`,
        //     `branchId`,
        //     `voucherDate`,
        //     `voucherType`,
        //     `voucherSource`,
        //     `voucherNo`,
        //     `voucherUniqueId`,
        //     `paymentTo`,
        //     `mobileNo`,
        //     `checkPaymentType`,
        //     `receiverBankAccountName`,
        //     `chequeNo`,
        //     `chequeDate`,
        //     `accountsHeadCode`,
        //     `accountsCode`,
        //     `type`,
        //     `voucherAmount`,
        //     `randId`,
        //     `particular`,
        //     `day`,
        //     `month`,
        //     `year`,
        //     `openingVoucher`,
        //     `status`,
        //     `createBy`,
        //     `created_at`)

        //     VALUES (
        //     NEW.shopId,
        //     NEW.branchId,
        //     NEW.voucherDate,
        //     NEW.voucherType,
        //     NEW.voucherSource,
        //     NEW.voucherNo,
        //     NEW.voucherUniqueId,
        //     NEW.paymentTo,
        //     NEW.mobileNo,
        //     NEW.checkPaymentType,
        //     NEW.receiverBankAccountName,
        //     NEW.chequeNo,
        //     NEW.chequeDate,
        //     NEW.accountsHeadCodeVR,
        //     NEW.accountsCodeVR,
        //     NEW.typeVR,
        //     NEW.voucherAmount,
        //     NEW.randId,
        //     NEW.particular,
        //     NEW.day,
        //     NEW.month,
        //     NEW.year,
        //     NEW.openingVoucher,
        //     NEW.status,
        //     NEW.createBy,
        //     NEW.created_at)
        //  END
        //  ');

        // DB::unprepared('
        // CREATE TRIGGER `Insert voucher information report 1` AFTER INSERT ON
        //  `expense_provider_entry_logs` FOR EACH ROW 
        //  BEGIN 
        //  INSERT INTO 
        //     `voucher_information_reports` (
        //     `shopId`,
        //     `branchId`,
        //     `voucherDate`,
        //     `voucherType`,
        //     `voucherSource`,
        //     `voucherNo`,
        //     `voucherUniqueId`,
        //     `paymentTo`,
        //     `mobileNo`,
        //     `checkPaymentType`,
        //     `receiverBankAccountName`,
        //     `chequeNo`,
        //     `chequeDate`,
        //     `accountsHeadCode`,
        //     `accountsCode`,
        //     `type`,
        //     `voucherAmount`,
        //     `randId`,
        //     `particular`,
        //     `day`,
        //     `month`,
        //     `year`,
        //     `openingVoucher`,
        //     `status`,
        //     `createBy`,
        //     `created_at`)

        //     VALUES (
        //     NEW.shopId,
        //     NEW.branchId,
        //     NEW.voucherDate,
        //     NEW.voucherType,
        //     NEW.voucherSource,
        //     NEW.voucherNo,
        //     NEW.voucherUniqueId,
        //     NEW.paymentTo,
        //     NEW.mobileNo,
        //     NEW.checkPaymentType,
        //     NEW.receiverBankAccountName,
        //     NEW.chequeNo,
        //     NEW.chequeDate,
        //     NEW.accountsHeadCodeVR,
        //     NEW.accountsCodeVR1,
        //     NEW.typeVR1,
        //     NEW.voucherAmount,
        //     NEW.randId,
        //     NEW.particular,
        //     NEW.day,
        //     NEW.month,
        //     NEW.year,
        //     NEW.openingVoucher,
        //     NEW.status,
        //     NEW.createBy,
        //     NEW.created_at)
        //  END
        //  ');

        // DB::unprepared('
        // CREATE TRIGGER `Update Expense Details Item` AFTER INSERT ON
        //  `expense_provider_entry_logs` FOR EACH ROW 
        //  BEGIN 
        //     UPDATE expense_details_items SET
        //     status = NEW.statusEDI,
        //     createBy = NEW.createBy,
        //     created_at = NEW.created_at
        //     WHERE rendomNumber = NEW.rendomNumber
        //  END
        //  ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('expense_information_entry_logs');
    }
}
