<?php

use Illuminate\Http\Request;



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/shop/login', 'Auth\AdminLoginController@login')->name('admin.login.submit');
Route::post('/shop/demoLogin', 'Auth\AdminLoginController@demoLogin')->name('admin.login.submit');
Route::post('/shop/demoRequest', 'Auth\AdminLoginController@demoRequest');
Route::post('/admin/login', 'Auth\LoginController@login');

Route::get('/shop/login','Auth\AdminLoginController@showLoginForm')->name('admin.login');
Route::get('/shop/demoLogin/{id}','Auth\AdminLoginController@showDemoLoginForm');
Route::get('/shop/demoRequest','Auth\AdminLoginController@showDemoRequest');

Route::get('/login','Auth\AdminLoginController@showLoginForm')->name('login');
Route::get('/admin/login','Auth\LoginController@showLoginForm');
Route::get('/shop/logout', 'Auth\AdminLoginController@logout')->name('admin.logout');
Route::get('/admin/logout', 'Auth\LoginController@logout');
Route::get('/shop', 'Auth\AdminController@index')->name('shop');


Route::resource('paymentStatus','shopPaymentStatusController');

Route::get('/home', 'HomeController@index')->name('home');




Route::post('BranchInformationUpdate/{id}','ShopInformation\BranchInformation\BranchInformationController@update');
Route::get('getBranchInformationEdit/{id}','ShopInformation\BranchInformation\BranchInformationController@show');
Route::get('getTotalBranchCreate','ShopInformation\BranchInformation\BranchInformationController@getTotalBranchCreate');

Route::resource('BranchInformation','ShopInformation\BranchInformation\BranchInformationController');

Route::resource('/api/shopTypeEntry','ShopTypeEntryController');
Route::resource('/api/currencyList','currencyController');
Route::resource('/api/countryList','countryController');
Route::get('/api/countryListAll','countryController@countryListAll');
Route::resource('/api/divisionList','divisionController');

Route::get('/api/divisionListById/{id}','divisionController@divisionListById');
Route::get('divisionList','divisionController@divisionList');

Route::resource('/api/districtList','districtController');
Route::get('/api/districtListById/{id}','districtController@districtListById');
Route::get('districtList','districtController@districtList');

Route::resource('/api/upazilaList','upazillaController');
Route::get('/api/upazilaListById/{id}','upazillaController@upazilaListById');
Route::resource('/api/unionList','unionController');
Route::get('/api/unionListById/{id}','unionController@unionListById');
Route::resource('/api/wardList','wardController');
Route::get('/api/wardListById/{id}','wardController@wardListById');

Route::resource('/shopTypeEntry','ShopTypeEntryController');
Route::get('/api/getShopuserName/{id}','ShopTypeEntryController@getShopuserName');
Route::resource('currencyList','currencyController');
Route::resource('countryList','countryController');
Route::get('countryListAll','countryController@countryListAll');
Route::resource('colorListAll','productColorController');
Route::get('colorListById/{productId}/{brandId}','productColorController@colorListById');
Route::get('checkColorSizeHave/{pId}/{bId}','productColorController@checkColorSizeHave');
Route::get('colorListByBrandId/{pId}/{bId}','productColorController@colorListByBrandId');
Route::get('sizeListByBrandId/{pId}/{bId}','productSizeController@sizeListByBrandId');
Route::get('sizeListByColorId/{pId}/{bId}/{colorId}','productSizeController@sizeListByColorId');
Route::resource('sizeListAll','productSizeController');
Route::get('sizeListById/{productId}/{brandId}','productSizeController@sizeListById');
Route::resource('divisionList','divisionController');
Route::get('divisionListById/{id}','divisionController@divisionListById');
Route::resource('districtList','districtController');
Route::get('districtListById/{id}','districtController@districtListById');
Route::resource('upazilaList','upazillaController');
Route::get('upazilaListById/{id}','upazillaController@upazilaListById');
Route::resource('unionList','unionController');
Route::get('unionListById/{id}','unionController@unionListById');
Route::resource('wardList','wardController');
Route::get('wardListById/{id}','wardController@wardListById');

Route::resource('qrCodeSetup','QrCodeSetupController');
Route::get('/qrCodeSetup/changeStatus/{id}','QrCodeSetupController@changeStatus');




Route::get('checkDemoId','invoiceSetupController@checkDemoId');

Route::resource('addInvoiceSetup','invoiceSetupController');
Route::get('/getInvoiceDetailData/{for}/{type}','invoiceSetupController@getInvoiceDetailData');
Route::get('/invoiceTypeList','invoiceSetupController@invoiceTypeList');
Route::get('/invoiceForList','invoiceSetupController@invoiceForList');
Route::get('/invoiceSetup/changeStatus/{id}','invoiceSetupController@changeStatus');

Route::get('/purchaseType','PurchaseTypeController@index');
Route::post('/purchaseType/create','purchaseTypeController@store');
Route::get('/purchase/edit/{id}','purchaseTypeController@edit');
Route::get('/purchaseStatusChange/{id}','purchaseTypeController@statusChange');
Route::post('/purchase/update/{id}','purchaseTypeController@update');
Route::get('/purchase/delete/{id}','purchaseTypeController@delete');
Route::get('/purchase/edit/{id}','purchaseTypeController@edit');

Route::get('/vendors','VendorController@index');
Route::post('/vendor/create','VendorController@store');
Route::get('/vendor/edit/{id}','VendorController@edit');
Route::get('/vendor/delete/{id}','VendorController@delete');

Route::post('/basicInfo/create','BasicInfoController@store');


Route::get('admintemps', 'AdminTempController@getAllShop');
Route::get('admintemps/{id}', 'AdminTempController@getShopuser');
Route::get('shopInformation/{id}', 'AdminTempController@getShop');
Route::post('shopInformationCreate', 'AdminTempController@shopCreate');
Route::post('shopRefferInformation', 'AdminRefferTempController@shopCreate');
Route::post('shopOpenInformation', 'AdminOpenTempController@shopCreate');
Route::post('admintemps', 'AdminTempController@createShop');
Route::put('admintemps/{id}', 'AdminTempController@updateStudent');
Route::delete('admintemps/{id}','AdminTempController@deleteStudent');
Route::resource('adminrefferTemps','AdminRefferTempController');
Route::resource('adminOpenTemps','AdminOpenTempController');

 //////new////////////////////
 //////new////////////////////
 //////new////////////////////
 //////new////////////////////
 //////new////////////////////
 //////new////////////////////
 //////new////////////////////
 //////new////////////////////
 //////new////////////////////





//    -------------- Developer : Nazmul Huda - Doofaz IT Limited
Route::group([  'middleware' => 'auth:,admin'], function()
{

Route::get('totalSaleInfo','Accounting\dashboardController@totalSaleInfo');

Route::resource('addExpenseBudget','Accounting\expenseBudgetController');
Route::resource('addIncomeTarget','Accounting\incomeTargetController');
Route::get('changeStatusTarget/{id}','Accounting\incomeTargetController@changeStatusTarget');
Route::get('getIncomeTargetList','Accounting\incomeTargetController@getIncomeTargetList');
Route::get('getIncomeExpenseBudget/{type}/{id}','Accounting\incomeTargetController@getIncomeExpenseBudget');
Route::get('checkSecurityExpenseInStatement/{code}','Accounting\securityMoneyWithdrawOrAdjustmentController@checkSecurityExpenseInStatement');
Route::resource('addSecurityMoneyWithdraw','Accounting\securityMoneyWithdrawOrAdjustmentController');
Route::resource('addAdvancePayment','Accounting\advancePaymentController');
Route::get('getSecurityMoneyInfoById/{id}','Accounting\securityMoneyController@getSecurityMoneyInfoById');
Route::get('getSecurityMoneyListById/{id}','Accounting\securityMoneyController@getSecurityMoneyListById');
Route::resource('addSecurityMoney','Accounting\securityMoneyController');
Route::resource('addBillPaymentReceive','Accounting\incomeExpenseBillPaymentReceiveController');
Route::get('getCompanyOwnerByType/{id}','Accounting\incomeExpenseBillPaymentReceiveController@getCompanyOwnerByType');
Route::post('shareCapitalEntry','Accounting\billPaymentReceiveForAllController@shareCapitalEntry');
Route::resource('billPaymentReceiveForAll','Accounting\billPaymentReceiveForAllController');
Route::post('advancePayment','Accounting\billPaymentReceiveForAllController@advancePayment');
Route::get('getIncomeInvoiceInformation/{id}','Accounting\incomeController@getIncomeInvoiceInformation');
Route::get('getExpenseInvoiceInformation/{id}','Accounting\expenseController@getExpenseInvoiceInformation');
Route::resource('addIncome','Accounting\incomeController');
Route::resource('addExpense','Accounting\expenseController');
Route::get('getIncomeDetailsListById/{incomePurpousId}','Accounting\incomeController@getIncomeDetailsListById');
Route::get('getExpenseDetailsListById/{expensePurpousId}','Accounting\expenseController@getExpenseDetailsListById');
Route::get('deleteIncomeDetailsItem/{id}','Accounting\incomeController@deleteIncomeDetailsItem');
Route::get('deleteExpenseDetailsItem/{id}','Accounting\expenseController@deleteExpenseDetailsItem');
Route::get('addExpenseDetailsItem/{rendomNumber}/{expensePurpous}/{item}/{itemAmount}','Accounting\expenseController@addExpenseDetailsItem');
Route::get('addIncomeDetailsItem/{rendomNumber}/{incomePurpous}/{item}/{itemAmount}','Accounting\incomeController@addIncomeDetailsItem');
Route::get('getExpensePurposeListById/{id}','Accounting\expenseProviderController@getExpensePurposeListById');
Route::get('getExpensePurposeListByIdForSecurity/{id}','Accounting\expenseProviderController@getExpensePurposeListByIdForSecurity');
Route::get('getIncomePurposeListById/{id}','Accounting\incomeProviderController@getIncomePurposeListById');
Route::resource('addExpenseProvider','Accounting\expenseProviderController');
Route::get('incomePurposeListById/{id}','Accounting\incomeProviderController@incomePurposeListById');
Route::resource('addIncomeProvider','Accounting\incomeProviderController');
Route::get('getIncomeExpenseCompanyLastBalance/{id}','Accounting\incomeExpenseCompanyController@getIncomeExpenseCompanyLastBalance');
Route::get('getLastBalanceByAccCode/{id}','Accounting\incomeExpenseCompanyController@getLastBalanceByAccCode');
Route::get('getLastBalanceByAccCodePurchase/{id}','Accounting\incomeExpenseCompanyController@getLastBalanceByAccCodePurchase');
Route::get('getLastBalanceByAccCodeAdvPayment/{id}','Accounting\incomeExpenseCompanyController@getLastBalanceByAccCodeAdvPayment');
Route::get('getIncomeExpenseCompanyByIEType/{id}','Accounting\incomeExpenseCompanyController@getIncomeExpenseCompanyByIEType');
Route::get('getAssetSupplierStatementInformation/{id}','Accounting\incomeExpenseCompanyController@getAssetSupplierStatementInformation');
Route::get('getProductSupplierStatementInformation/{id}','Accounting\incomeExpenseCompanyController@getProductSupplierStatementInformation');
Route::get('getCustomerStatementInformation/{id}','Accounting\incomeExpenseCompanyController@getCustomerStatementInformation');
Route::get('getEmployeeStatementInformation/{id}','Accounting\incomeExpenseCompanyController@getEmployeeStatementInformation');
Route::get('getIncomeExpenseInvoiceInformation/{id}','Accounting\incomeExpenseCompanyController@getIncomeExpenseInvoiceInformation');
Route::get('getLoanProviderVoucherInformation/{id}','Accounting\incomeExpenseCompanyController@getLoanProviderVoucherInformation');
Route::get('getIncomeExpenseCompanyInformation/{id}','Accounting\incomeExpenseCompanyController@getIncomeExpenseCompanyInformation');
Route::get('getIncomeExpenseCompany/{id}','Accounting\incomeExpenseCompanyController@getIncomeExpenseCompany');
Route::get('getIncomeExpenseCompanyExpense/{id}','Accounting\incomeExpenseCompanyController@getIncomeExpenseCompanyExpense');
Route::get('getIncomeExpenseCompanyIncome/{id}','Accounting\incomeExpenseCompanyController@getIncomeExpenseCompanyIncome');
Route::get('getIncomeExpenseCompanyFrom/{id}','Accounting\incomeExpenseCompanyController@getIncomeExpenseCompanyFrom');
Route::post('searchIncomeExpenseCompany','Accounting\incomeExpenseCompanyController@searchIncomeExpenseCompany');
Route::post('searchDueRegister','Accounting\incomeExpenseCompanyController@searchDueRegister');
Route::resource('addIncomeExpenseCompany','Accounting\incomeExpenseCompanyController');
Route::resource('addIncomeType','Accounting\incomeEntryController');
Route::get('getIncomeHeadList/{id}','Accounting\incomeEntryController@getIncomeHeadList');
Route::get('incomeTypeList','Accounting\incomeEntryController@incomeTypeList');
Route::resource('addExpenseType','Accounting\expenseEntryController');
Route::get('expenseTypeList','Accounting\expenseEntryController@expenseTypeList');
Route::get('getExpenseHeadList/{id}','Accounting\expenseEntryController@getExpenseHeadList');
Route::resource('addMainAmountReceiver','Accounting\loanMainAmountReceiveController');
Route::resource('addInstallmentFromReceiver','Accounting\loanReveiverInstallmentHistoryController');
Route::resource('addInstallment','Accounting\loanProviderInstallmentHistoryController');
Route::resource('addLoanMainAmountPaid','Accounting\loanMainAmountPaidController');
Route::get('getLoanReceiverLoanList/{receiverId}','Accounting\receiverLoanPayController@getLoanReceiverLoanList');
Route::get('getLoanReceiverLoanPayInfo/{loanId}','Accounting\receiverLoanPayController@getLoanReceiverLoanPayInfo');
Route::resource('addReceiverLoanPay','Accounting\receiverLoanPayController');
Route::resource('addProviderLoanReceive','Accounting\providerLoanReceiveController');
Route::get('getLoanProviderLoanList/{providerId}','Accounting\providerLoanReceiveController@getLoanProviderLoanList');
Route::get('getLoanProviderLoanReceiveInfo/{loanId}','Accounting\loanReceiverEntryController@getLoanProviderLoanReceiveInfo');
Route::get('getLoanReceiverWithLoanNpadiAmount','Accounting\loanReceiverEntryController@getLoanReceiverWithLoanNpadiAmount');
Route::get('getLoanReceiverInformation/{id}','Accounting\loanReceiverEntryController@getLoanReceiverInformation');
Route::get('getLoanReceiverInfoLoanInfo/{id}','Accounting\loanReceiverEntryController@getLoanReceiverInfoLoanInfo');
Route::resource('addLoanReceiverEntry','Accounting\loanReceiverEntryController');
Route::resource('addLoanProvider','Accounting\loanProviderEntryController');
Route::get('getLoanProviderById/{id}','Accounting\loanProviderEntryController@getLoanProviderById');
Route::get('getLoanProviderInfoLoanInfo/{id}','Accounting\loanProviderEntryController@getLoanProviderInfoLoanInfo');
Route::get('getLoanProviderWithLoanNpadiAmount','Accounting\loanProviderEntryController@getLoanProviderWithLoanNpadiAmount');
Route::get('loanProviderListById/{tableId}/{id}','Accounting\loanProviderEntryController@loanProviderListById');
Route::get('getLoanProviderTypeList','Accounting\loanProviderEntryController@getLoanProviderTypeList');
Route::get('getLoanProviderInformation/{id}','Accounting\loanProviderEntryController@getLoanProviderInformation');
Route::get('getLoanProviderLoanInformation/{type}/{id}','Accounting\loanProviderEntryController@getLoanProviderLoanInformation');
Route::get('getLoanReceiverLoanInformation/{type}/{id}','Accounting\receiverLoanPayController@getLoanReceiverLoanInformation');
Route::get('getLoanProviderList','Accounting\loanProviderEntryController@getLoanProviderList');
Route::get('getInterestTypeList/{id}','Accounting\loanProviderEntryController@getInterestTypeList');
Route::get('getInterestTimeTypeList','Accounting\loanProviderEntryController@getInterestTimeTypeList');
Route::get('getLoanPayTypeList/{id}','Accounting\loanProviderEntryController@getLoanPayTypeList');
Route::get('paymentTypeList','Accounting\loanProviderEntryController@paymentTypeList');


Route::get('receiveSummaryList/{id}','Accounting\voucherEntryController@receiveSummaryList');
Route::get('getCodeDatabaseSeeds/{tableName}','databaseSeedCodeController@getCodeDatabaseSeeds');
Route::post('getGeneralLadgerSearch','Accounting\voucherEntryController@getGeneralLadgerSearch');
Route::post('getCashBankLadgerSearch','Accounting\voucherEntryController@getCashBankLadgerSearch');
Route::post('expenseSummarySearch','Accounting\voucherEntryController@expenseSummarySearch');
Route::post('incomeSummarySearch','Accounting\voucherEntryController@incomeSummarySearch');
Route::post('trialBalanceSearch','Accounting\voucherEntryController@trialBalanceSearch');
Route::get('getLoanReceiverGeneralLadger/{id}','Accounting\voucherEntryController@getLoanReceiverGeneralLadger');
Route::get('getCashBankGeneralLadger/{id}','Accounting\voucherEntryController@getCashBankGeneralLadger');
Route::get('getLoanProviderGeneralLadger/{id}','Accounting\voucherEntryController@getLoanProviderGeneralLadger');
Route::get('getCompanyGeneralLadger/{id}','Accounting\voucherEntryController@getCompanyGeneralLadger');
Route::get('getGeneralJournal','Accounting\voucherEntryController@getGeneralJournal');
Route::post('getGeneralJournalSearch','Accounting\voucherEntryController@getGeneralJournalSearch');
Route::get('getGeneralLadger','Accounting\voucherEntryController@getGeneralLadger');
Route::get('expenseSummary','Accounting\voucherEntryController@expenseSummary');
Route::get('getIncomeStatement','Accounting\voucherEntryController@getIncomeStatement');
Route::get('getBalanceSheetAsset','Accounting\voucherEntryController@getBalanceSheetAsset');
Route::get('getBalanceSheetLiability','Accounting\voucherEntryController@getBalanceSheetLiability');
Route::get('getChartOfAccountBalance','Accounting\voucherEntryController@getChartOfAccountBalance');
Route::get('getIncomeSummary','Accounting\voucherEntryController@incomeSummary');
Route::get('getCashAccountBalance','Accounting\voucherEntryController@getCashAccountBalance');
Route::get('getTrialBalance','Accounting\voucherEntryController@trialBalance');
Route::post('receiveSummarySearch','Accounting\voucherEntryController@receiveSummarySearch');
Route::post('voucherSearch','Accounting\voucherEntryController@voucherSearch');
Route::get('getVoucherEntryInformationById/{id}','Accounting\voucherEntryController@getVoucherEntryInformationById');
Route::get('getHeadSubCodeByHeadcode/{id}','Accounting\voucherEntryController@getHeadSubCodeByHeadcode');
Route::get('getHeadSubCodeByHeadcodeForTrialBalance/{id}','Accounting\voucherEntryController@getHeadSubCodeByHeadcodeForTrialBalance');
Route::get('getSubHeadOfAccounts/{accounts}','Accounting\voucherEntryController@getSubHeadOfAccounts');
Route::get('getSubHeadOfAccountsForContraVoucher/{vType}/{cashbook}/{accounts}','Accounting\voucherEntryController@getSubHeadOfAccountsForContraVoucher');
Route::get('getVoucherHeadCashbookCode/{id}','Accounting\voucherEntryController@getVoucherHeadCashbookCode');
Route::get('getVoucherHeadCashbookCodeNew/{id}','Accounting\voucherEntryController@getVoucherHeadCashbookCodeNew');
Route::get('supplierAccountList/{id}','Accounting\voucherEntryController@supplierAccountList');
Route::get('getVoucherCode/{id}','Accounting\voucherEntryController@getVoucherCode');
Route::get('checkAccountCodeInOpening/{id}','Accounting\voucherEntryController@checkAccountCodeInOpening');
Route::get('checkBalance/{id}','Accounting\voucherEntryController@checkBalance');
Route::get('getCashRegister/{id}','Accounting\voucherEntryController@getCashRegister');
Route::get('getMainHeadCode/{type}','Accounting\voucherEntryController@getMainHeadCode');
Route::get('getVoucherType','Accounting\voucherEntryController@getVoucherType');
Route::get('getMainHeadCodeForTrialBalance','Accounting\voucherEntryController@getMainHeadCodeForTrialBalance');
Route::get('getsubHeadCode','Accounting\voucherEntryController@getsubHeadCode');
Route::get('addTmpVoucher/{voucherNo}/{headCode}/{subhead}/{amount}/{type}/{date}','Accounting\voucherEntryController@addTmpVoucher');
Route::resource('/voucherEntryInformation','Accounting\voucherEntryController');
Route::get('/openingVoucherEntryInformation','Accounting\voucherEntryController@openingVoucherEntryInformation');
Route::get('/voucherEntryInformationUser','Accounting\voucherEntryController@voucherEntryInformationUser');

Route::get('/accountSetupHeadNameList/{id}','Accounting\accountSetupController@accountSetupHeadNameList');
Route::get('/placementTypeList','Accounting\accountSetupController@placementTypeList');
Route::resource('/accountSetupInfo','Accounting\accountSetupController');

Route::get('/getDownlinkInformation/{id}','Accounting\chartOfAccountController@getDownlinkInformation');
Route::get('/getUplinkInformation/{id}','Accounting\chartOfAccountController@getUplinkInformation');
Route::get('/accountGroupTypes','Accounting\chartOfAccountController@chartOfAccountGroupType');
Route::resource('/chartOfAccountRegister','Accounting\chartOfAccountRegisterController');
Route::resource('/chartOfAccount','Accounting\chartOfAccountController');
Route::get('/chartOfAccountWithRegister','Accounting\chartOfAccountController@chartOfAccountWithRegister');

Route::get('/getAccountGroup','Accounting\chartOfAccountController@getAccountGroup');
Route::get('/getPurchaseProductList','PurchaseController@getPurchaseProductList');
Route::get('/getInvoiceSetupInformation/{id}','PurchaseController@getInvoiceSetupInformation');
Route::get('/getInvoiceInformation/{id}','PurchaseController@getInvoiceInformation');
Route::get('/getInvoiceBankDetails/{id}','PurchaseController@getInvoiceBankDetails');
Route::get('/getSalesBankDetails/{id}','PurchaseController@getSalesBankDetails');
Route::get('/getOpeningInvoiceInformation/{id}','PurchaseController@getOpeningInvoiceInformation');
Route::get('/getInvoiceInfoPurchaseReturn/{id}','PurchaseController@getInvoiceInfoPurchaseReturn');
Route::get('/purchaseReturnInvoiceInfo/{id}','PurchaseController@purchaseReturnInvoiceInfo');
Route::get('/salesReturnInvoiceInfo/{id}','PurchaseController@salesReturnInvoiceInfo');
Route::get('/purchaseProductReturnEntry/{id}/{quantity}/{unitId}','PurchaseController@purchaseProductReturnEntry');
Route::get('/salesProductReturnEntry/{id}/{quantity}/{unitId}','PurchaseController@salesProductReturnEntry');
Route::get('/searchPurchaseInvoice/{id}','PurchaseController@searchPurchaseInvoice');
Route::get('/getSupllierInfo/{id}','PurchaseController@getSupllierInformation');


Route::get('getTotalBranchCreate','ShopInformation\ShopBranchController@getTotalBranchCreate');
Route::get('getShopOrEmployee','UserInfoController@getShopOrEmployee');
Route::get('getAuthInfo','UserInfoController@getAuthInfo');
Route::get('getAuthInfoByType/{type}','UserInfoController@getAuthInfoByType');
Route::post('informationEdit','UserInfoController@informationEdit');
Route::get('getAccountInfoById','ShopInformation\shopAccountIntormationController@getAccountInfoById');
Route::get('getAccountInfoByShopId/{id}','ShopInformation\shopAccountIntormationController@getAccountInfoByShopId');
Route::get('getCurrencyRate','ShopInformation\ShopInformationController@getCurrencyRate');
Route::get('getMyCurrency','ShopInformation\shopAccountIntormationController@getMyCurrency');

Route::get('shopBillDateExpired','ShopInformation\ShopInformationController@shopBillDateExpired');
Route::post('shopBillRequestEntry','ShopInformation\ShopInformationController@shopBillRequestEntry');
Route::get('shopBillRequestListAdmin','ShopInformation\ShopInformationController@shopBillRequestListAdmin');
Route::get('shopBillApproveListAdmin','ShopInformation\ShopInformationController@shopBillApproveListAdmin');
Route::get('shopBillCencelListAdmin','ShopInformation\ShopInformationController@shopBillCencelListAdmin');
Route::get('shopBillRequestList','ShopInformation\ShopInformationController@shopBillRequestList');
Route::get('shopBillRequestCancel/{id}','ShopInformation\ShopInformationController@shopBillRequestCancel');
Route::get('branchInformationByShop','ShopInformation\BranchInformation\BranchInformationController@branchInformationByShop');
Route::get('getBranchCode','ShopInformation\BranchInformation\BranchInformationController@getBranchCode');

// guest entry
Route::post('guestEntry','ShopInformation\ShopInformationController@GuestStore');
Route::post('guest/search','ShopInformation\ShopInformationController@GuestSearch');
Route::post('guestUpdate','ShopInformation\ShopInformationController@GuestUpdate');
// guest entry


/*status reason*/
Route::post('status/reason/store','ShopInformation\StatusInformationController@statusReasonStore');
Route::get('interested/list/{id}','ShopInformation\StatusInformationController@interested_list');
Route::get('status/type/show','ShopInformation\StatusInformationController@status_type_show');
Route::get('shop/lists','ShopInformation\StatusInformationController@shopList');
Route::get('timeline/show/{shop_id}','ShopInformation\StatusInformationController@TimelineShow');

/*status reason*/

/*note work*/
Route::post('note/store','ShopInformation\NoteInformationController@NoteStore');
/*note work*/

/*Priority Information*/
Route::get('priority/information/{shop_id}','ShopInformation\PriorityController@PriorityInformation');
Route::get('priority/view','ShopInformation\PriorityController@PriorityView');
Route::get('priority/view/delete','ShopInformation\PriorityController@PriorityViewDelete');
Route::post('delete/priority/information','ShopInformation\PriorityController@PriorityDelete');
Route::post('priority/search/with/employee','ShopInformation\PriorityController@PrioritySearch');
/*Priority Information*/

// dashboard
Route::get('count/info','ShopInformation\DashboardController@countInfo');
Route::get('get/today/data','ShopInformation\DashboardController@toDayEntryShow');
Route::post('search/info','ShopInformation\DashboardController@searchInfo');

/*metting work*/
  Route::post('metting/store','ShopInformation\MettingInformationController@MettingStore');
  Route::get('metting/list/show/{status}','ShopInformation\MettingInformationController@MettingListShow');
  Route::get('metting/edit/{id}','ShopInformation\MettingInformationController@MettingEdit');
  Route::get('metting/edit/history/{MettindId}/{shopInfoId}','ShopInformation\MettingInformationController@MettingEditHistory');
  Route::get('metting/success/status/{metting_id}/{shop_id}','ShopInformation\MettingInformationController@SuccessStatusChange');
  Route::get('metting/cancel/status/{metting_id}/{shop_id}','ShopInformation\MettingInformationController@CancelStatusChange');
  Route::post('update/metting/info','ShopInformation\MettingInformationController@MettingUpdate');
  Route::post('metting/info/store','ShopInformation\MettingInformationController@metting_info_store');
/*metting work*/

/*show phon number*/
Route::get('show/phone/number/{id}','ShopInformation\ShopInformationController@show_phone_number');
/*show phon number*/


Route::resource('shopInformation','ShopInformation\ShopInformationController');
Route::post('areaAssignEntry','ShopInformation\ShopInformationController@areaAssignEntry');
Route::post('updateAreaAssign','ShopMenuPermissionController@updateAreaAssign');

Route::post('dataInformationEntry','ShopInformation\ShopInformationController@dataInformationEntry');
Route::post('productTypeEntry','ShopInformation\ShopInformationController@productTypeEntry');
Route::get('productTypeView','ShopInformation\ShopInformationController@productTypeView');
Route::put('dataInformationEdit/{id}','ShopInformation\ShopInformationController@dataInformationEdit');
Route::get('dataInformationReport','ShopInformation\ShopInformationController@dataInformationReport');

Route::get('NewDataInformationView','ShopInformation\ShopInformationController@NewDataInformationView');
Route::get('AllDataInformationView','ShopInformation\ShopInformationController@AllDataInformationView');
Route::get('GuestDataInformationView','ShopInformation\ShopInformationController@GuestDataInformationView');
Route::get('followup/list','ShopInformation\ShopInformationController@followup_list');
Route::get('followup/recycle','ShopInformation\ShopInformationController@followup_recycle');
Route::get('AllListView','ShopInformation\ShopInformationController@AllListView');
Route::post('followup/recycle/store','ShopInformation\FollowUpRecycleController@followup_recycle_store');

Route::get('dataInformationViewById/{id}','ShopInformation\ShopInformationController@dataInformationViewById');
Route::get('getUserLocation','ShopInformation\ShopInformationController@getUserLocation');
//transfer
Route::post('/items/tranfer','ShopInformation\ShopInformationController@itemsTransfer');

Route::get('viewArea','ShopInformation\ShopInformationController@viewArea');
Route::get('data/entry/area/show','ShopInformation\ShopInformationController@data_entry_area_show');
Route::get('shop/gallery/show/{id}','ShopInformation\ShopInformationController@shop_gallery_show');
Route::get('default/message/show','ShopInformation\ShopInformationController@default_message_show');


Route::post('send/message/store','ShopInformation\SendMessageInformationController@send_message_store');




Route::get('viewAreaById/{id}','ShopInformation\ShopInformationController@viewAreaById');
Route::get('viewMultiAreaById/{id}','ShopInformation\ShopInformationController@viewMultiAreaById');
Route::get('deleteArea/{id}','ShopInformation\ShopInformationController@deleteArea');
Route::get('getSingleArea/{id}','ShopInformation\ShopInformationController@getSingleArea');
Route::get('assignList','ShopInformation\ShopInformationController@assignList');

Route::post('blockRoadEntry','ShopInformation\ShopInformationController@blockRoadEntry');
Route::get('blockRoadView','ShopInformation\ShopInformationController@blockRoadView');

// road entry
Route::post('roadEntry','ShopInformation\ShopInformationController@roadEntry');
Route::get('blockByRoad/{areaId}/{blockId}','ShopInformation\ShopInformationController@blockByRoad');
// road entry

Route::post('houseMarketEntry','ShopInformation\ShopInformationController@houseMarketEntry');
Route::get('blockRoadViewByArea/{id}','ShopInformation\ShopInformationController@blockRoadViewByArea');

// dashboard search
Route::get('blockShowByArea/{areaId}','ShopInformation\ShopInformationController@blockViewByArea');
Route::get('roadShowByAreaBlock/{areaId}/{blockId}','ShopInformation\ShopInformationController@roadShowByAreaBlock');
Route::get('houseShowByAreaBlockRoad/{areaId}/{blockId}/{roadId}','ShopInformation\ShopInformationController@houseShowByAreaBlockRoad');
Route::get('get/role','ShopInformation\ShopInformationController@getrole');
Route::get('get/employee/list','ShopInformation\ShopInformationController@getEmployee');
Route::get('get/category/list','ShopInformation\ShopInformationController@getCategory');
Route::get('dashboard/area/show','ShopInformation\ShopInformationController@dashboard_area_show');
// dashboard search

// Route::get('houseByRoad/{id}','ShopInformation\ShopInformationController@houseByRoad');
Route::get('houseByRoad/{areaId}/{blockRoadId}/{id}','ShopInformation\ShopInformationController@houseByRoad');

Route::get('getTotalFloor/{id}','ShopInformation\ShopInformationController@getTotalFloor');
Route::post('areaEntry','ShopInformation\ShopInformationController@areaEntry');
Route::post('areaUpdate','ShopInformation\ShopInformationController@areaUpdate');
Route::get('areaEdit/{id}','ShopInformation\ShopInformationController@areaEdit');

Route::post('shopOwnerEntry','ShopInformation\ShopInformationController@shopOwnerEntry');
Route::get('shopOwnerGet','ShopInformation\ShopInformationController@shopOwnerGet');
Route::get('shopOwnerDelete/{id}','ShopInformation\ShopInformationController@shopOwnerDelete');
Route::post('shopInformationUpdate','ShopInformation\ShopInformationController@shopInformationUpdate');

Route::get('/getMyGuard','ShopInformation\ShopInformationController@getMyGuard');
Route::get('/shopInformationSearch/{id}','ShopInformation\ShopInformationController@shopInformationSearch');
Route::get('/getShopId/{id}','ShopInformation\ShopInformationController@getShopId');
Route::get('/shopInformation/changeStatus/{id}','ShopInformation\ShopInformationController@changeStatus');
Route::post('topupBalance','ShopInformation\ShopInformationController@topupBalance');
Route::get('payBill/{id}','ShopInformation\ShopInformationController@payBill');

Route::get('/checkShopUserName/{userName}','ShopInformation\ShopInformationController@checkShopUserName');
Route::get('/search/items/{limitNumber}','ShopInformation\ShopInformationController@searchItemLimitNumber');
Route::get('/employee/search/items/{employeeId}','ShopInformation\ShopInformationController@searchItemByEmployeeId');
Route::get('/followup/employee/search/items/{employeeId}','ShopInformation\ShopInformationController@searchItemByEmployeeIdFollowUp');


Route::resource('shopStatus','shopStatusController');

Route::get('getTotalBranch','ShopInformation\ShopBranchController@getTotalBranch');

Route::post('BranchInformationUpdate/{id}','ShopInformation\BranchInformation\BranchInformationController@update');
Route::get('getBranchInformationEdit/{id}','ShopInformation\BranchInformation\BranchInformationController@show');


Route::resource('BranchInformation','ShopInformation\BranchInformation\BranchInformationController');
Route::resource('countryList','countryController');

//    -------------- Developer : Nazmul Huda - Doofaz IT Limited
















Route::resource('shopVerification','ShopVerification\ShopverificationController');
Route::post('shopVerificationPending/{id}','ShopVerification\ShopverificationController@shopVerificationPending');
Route::get('verifiedShop','ShopVerification\ShopverificationController@verifiedShop');
Route::get('pendingShop','ShopVerification\ShopverificationController@pendingShop');
Route::get('cancelShop','ShopVerification\ShopverificationController@cancelShop');
Route::post('cancelShopStatus/{id}','ShopVerification\ShopverificationController@cancelShopStatus');
Route::get('informationNeed','ShopVerification\ShopverificationController@informationNeed');
Route::get('informationNeedStatusup','ShopVerification\ShopverificationController@informationNeedStatusup');
Route::post('informationNeedStatus/{id}','ShopVerification\ShopverificationController@informationNeedStatus');
Route::get('deliveredShop','ShopVerification\ShopverificationController@deliveredShop');
Route::post('deliveredShopStatus/{id}','ShopVerification\ShopverificationController@deliveredShopStatus');
Route::post('informationneedBack/{id}','ShopVerification\ShopverificationController@informationneedBack');

Route::resource('billingShop','BillingAdmin\BillingAdminController');
Route::resource('graceDateEn','GraceDateEntryController');
Route::get('billingPending','BillingAdmin\BillingAdminController@billingPending');
Route::get('billingCancel','BillingAdmin\BillingAdminController@billingCancel');
Route::get('billingDelivered','BillingAdmin\BillingAdminController@billingDelivered');
Route::get('billingList','BillingAdmin\BillingAdminController@billingList');
Route::get('graceDateList','BillingAdmin\BillingAdminController@graceDateList');
Route::get('expiredDateList','BillingAdmin\BillingAdminController@expiredDateList');
Route::get('expiredDateListall','BillingAdmin\BillingAdminController@expiredDateListall');
Route::post('deliveredBillingStatus/{id}','BillingAdmin\BillingAdminController@deliveredBillingStatus');
Route::resource('training','CRMTraining\CRMTrainingController');
Route::post('trainerAssign/{id}','CRMTraining\CRMTrainingController@trainerAssign');
Route::get('trainerTSchedule','CRMTraining\CRMTrainingController@trainerTSchedule');
Route::get('successTraining','CRMTraining\CRMTrainingController@successTraining');
Route::resource('expireDateInfo','ExpireDateNotificationController');
Route::resource('salesPriceType','SalesPriceTypeController');
Route::get('updatePriceTypeConfigure/{id}','SalesPriceTypeController@updatePriceTypeConfigure');
Route::resource('activeShop','ActiveShopController');
Route::get('activeShopGet/{source}/{type}','ActiveShopController@activeShopGet');








// Route::get('/home', 'HomeController@index')->name('home');
/////////////////  Admin  configuration Route    //////////////////
//  AdminMenuTitle













Route::get('getUserInfoWtihShopType','UserInfoController@getUserInfoWtihShopType');
Route::resource('getUserInfo','UserInfoController');





// website information
Route::post('/website/create', 'websiteInfoController@store');
Route::get('/website/edit/{id}', 'websiteInfoController@edit');
Route::post('/website/update/{id}', 'websiteInfoController@update');
Route::delete('/website/delete/{id}', 'websiteInfoController@delete');
Route::resource('websiteInfo', 'websiteInfoController');




Route::resource('/adminMenuTitle','AdminMenuTitleController');

Route::get('/statusChangeEvent/{adminMenuTitleId}','AdminMenuTitleController@changeStatuas');
//  AdminMenu
Route::resource('/adminMenu','AdminMenuController');
Route::get('/statusChangeEventMenu/{id}','AdminMenuController@changeStatus');
Route::get('/adminMenulistById/{id}','AdminMenuController@adminMenulistById');
Route::get('/adminMenuTitlelist','AdminMenuController@adminMenuTitlelist');
Route::get('/adminMenuTitlePositionSelect/{adminMenuTitleId}','AdminMenuController@menuTitlePositionSelect');
//  AdminSubMenu
Route::resource('/adminSubMenu','AdminSubMenuController');
Route::get('/adminSubMenuePermission/{adminSubMenuId}','AdminSubMenuController@adminSubMenuePermission');
Route::get('/adminSubMenueStatus/{adminSubMenuId}','AdminSubMenuController@adminSubMenueStatus');
Route::get('/adminMenuPositionSelect/{adminMenuId}','AdminSubMenuController@menuPositionSelect');
//  AdminTypeName
Route::resource('/adminTypeName','AdminTypeNameController');
//  AdminEntry
Route::resource('/adminEntry','AdminEntryController');
Route::get('/adminEntryUserId','AdminEntryController@adminEntryUserId');
//  AdminSetup
Route::resource('/adminSetup','AdminSetupController');
Route::get('/admintypename','AdminSetupController@admintypename');
// AdminMenuPermission
Route::resource('/adminMenuPermission','AdminMenuPermissionController');
Route::get('/permissionmenushow','AdminMenuPermissionController@permissionmenushow');
Route::get('/adminTypeShow/{adminId}','AdminMenuPermissionController@adminTypeShow');
Route::get('/adminSubMenuShow','AdminMenuPermissionController@adminSubMenuShow');
Route::get('/adminMenuShow/{adminId}/{menuId}','AdminMenuPermissionController@adminMenuShow');
Route::get('/adminSingleSubMenuShow/{adminId}/{menuId}','AdminMenuPermissionController@adminSubMenuEditShow');
Route::get('/adminPermissionMenus/{adminId}/{adminType}','AdminMenuPermissionController@adminPermissionMenus');
Route::get('/adminPermissionSubMenus/{adminId}/{adminType}','AdminMenuPermissionController@adminPermissionSubMenus');
Route::get('/adminMenuPermissionChange/{adminId}/{adminType}/{menuId}','AdminMenuPermissionController@adminMenuPermissionChange');
Route::get('/adminSubMenuPermissionChange/{adminId}/{adminType}/{subMenuId}','AdminMenuPermissionController@adminSubMenuPermissionChange');
/////////////////   Admin  Configuration  Setup Route        //////////////////
Route::resource('/adminBussinessType','AdminBussinessTypeController');
Route::resource('/bankCheck','BankCheckController');
Route::resource('/chequePosting','ChequePostingController');
Route::get('/chequeInfo/{bank}/{account}','BankCheckController@chequeInfo');
Route::get('/chequeInfoGet/{bank}/{account}','BankCheckController@chequeInfoGet');
Route::get('/chequeType','BankCheckController@chequeType');
Route::resource('/uniteEntry','UniteEntryController');
Route::get('/discountTypeByShop','UniteEntryController@discountTypeByShop');
Route::post('/storeUnit','UniteEntryController@storeUnit');
Route::resource('/assetBrandEntry','AssetEntryController');
Route::resource('/shopCustomerTypeEntry','ShopCustomerTypeEntryController');
Route::resource('/shopTypeEntry','ShopTypeEntryController');
Route::resource('/bankTypeEntry','BankTypeEntryController');
Route::resource('/bankEntry','BankEntryController');
Route::resource('/adminHolidayType','AdminHolidayTypeController');
Route::resource('/commissionTypeEntry','CommissionTypeEntryController');
Route::resource('/productBrandEntry','ProductBrandEntryController');
Route::resource('/adminLicenceType','AdminlicenceTypeController');
Route::resource('/adminMetaKeyDescription','AdminMetaKeyDescriptionController');
Route::resource('/adminPurchaseType','AdminPurchaseTypeController');
Route::resource('/adminEducationEntry','AdminEducationController');
Route::resource('/priceTypeSetup','PriceTypeSetupController');

Route::get('/nameOfDegreeEditData/{nameOfDegreeId}','AdminEducationController@nameOfDegreeEdit');
Route::post('/nameOfDegreeUpdate','AdminEducationController@nameOfDegreeUpdate');

Route::get('/gradeEditData/{gradeId}','AdminEducationController@gradeEditData');
Route::post('/gradeUpdate','AdminEducationController@gradeUpdate');

Route::get('/skillGradeEditData/{skillGradeId}','AdminEducationController@skillGradeEditData');
Route::post('/skillGradeUpdate','AdminEducationController@skillGradeUpdate');

Route::get('/degreeChangeStatus/{nameOfDegreeId}','AdminEducationController@degreeChangeStatus');
Route::get('/gradeChangeStatus/{gradeId}','AdminEducationController@gradeChangeStatus');
Route::get('/skillGradeChangeStatus/{skillGradeId}','AdminEducationController@skillGradeChangeStatus');

Route::get('/degreeDistroy/{nameOfDegreeId}','AdminEducationController@degreeDistroy');
Route::get('/gradeDistroy/{gradeId}','AdminEducationController@gradeDistroy');
Route::get('/skillGradeDistroy/{skillGradeId}','AdminEducationController@skillGradeDistroy');

////////////////  Admin Shop Login Route    //////////////////
// Route::get('/shop/login','AdminShopInformationController@shoplogin');
Route::resource('/adminshopInformation','AdminShopInformationController');

/////////////////      Sales Route        //////////////////
// Sales
Route::get('/salesInvoiceEntryForAllUser','SalesInvoiceController@salesInvoiceEntryForAllUser');
Route::resource('/addWarehouseEntry','warehouseEntryController');
Route::resource('/salesInvoiceEntry','SalesInvoiceController');
Route::get('/salesPendingInvoiceAllUser','SalesInvoiceController@salesPendingInvoiceAllUser');
Route::post('/salesInvoicePendingEntry','SalesInvoiceController@salesInvoicePendingEntry');
Route::resource('/billingInformation','BillingInformationController');
Route::post('/billOffer','BillingInformationController@billOffer');
Route::get('/getBillOfferList','BillingInformationController@getBillOfferList');
Route::get('/deleteBillOffer/{id}','BillingInformationController@deleteBillOffer');
Route::resource('/billingDetails','BillingDetailsInfoController');
Route::post('/salesDueCollection','SalesInvoiceController@salesDueCollection');
Route::post('/salesInvoiceUpdate','SalesInvoiceController@salesInvoiceUpdate');

// ------------- dealer
Route::post('/saleOrderRequest','SalesInvoiceController@saleOrderRequest');
Route::post('/orderReceiveRequest','SalesInvoiceController@orderReceiveRequest');
Route::post('/saleOrderSubmit','SalesInvoiceController@saleOrderSubmit');
Route::get('/salesProductEntryDealerApprove/{id}','SalesProductController@salesProductEntryDealerApprove');
Route::post('/saleOrderReceiveSubmit','SalesInvoiceController@saleOrderReceiveSubmit');
Route::get('/saleOrderList','SalesInvoiceController@saleOrderList');
Route::get('/saleOrderRequestList','SalesInvoiceController@saleOrderRequestList');
Route::get('/saleOrderFinalList','SalesInvoiceController@saleOrderFinalList');
Route::get('/saleOrderListById/{id}','SalesInvoiceController@saleOrderListById');
Route::get('/saleOrderFinalListById/{id}','SalesInvoiceController@saleOrderFinalListById');
Route::get('/salesSupplierSearchDetails/{id}','SalesInvoiceController@salesSupplierSearchDetails');
Route::get('/supplierSalesReport/{supplierId}/{brandId}/{date}','SalesInvoiceController@supplierSalesReport');
Route::get('/customerSalesReport/{customerId}/{date}','SalesInvoiceController@customerSalesReport');
Route::get('/salesOrderSupplierSearch/{sid}/{bid}/{searchId}','SalesInvoiceController@salesOrderSupplierSearch');
Route::get('/salesOrderCustomerSearch/{cid}/{sid}/{bid}/{searchId}','SalesInvoiceController@salesOrderCustomerSearch');
// ---------------- /dealer

Route::resource('/salesProductEntry','SalesProductController');
Route::get('/shopPriceCustomerType','SalesProductController@shopPriceCustomerType');
Route::get('/salesInvoice/{id}','SalesInvoiceController@salesInvoice');
Route::get('/salesDueList','SalesInvoiceController@salesDueList');
Route::get('/salesDueListWithId/{id}','SalesInvoiceController@salesDueListWithId');
Route::get('/customerDuel/{id}','SalesInvoiceController@customerDuel');
Route::get('/salesReturnInvoicePay/{id}','SalesInvoiceController@salesReturnInvoicePay');
Route::get('/salesDueCustomerList','SalesInvoiceController@salesDueCustomerList');
Route::get('/salesDueCustomerListDashboard','SalesInvoiceController@salesDueCustomerListDashboard');
Route::get('/advanceSupplierListDashboard','SalesInvoiceController@advanceSupplierListDashboard');
Route::get('/advanceCustomerListDashboard','SalesInvoiceController@advanceCustomerListDashboard');
Route::get('/salesBalanceSheet','SalesInvoiceController@salesBalanceSheet');
Route::get('/salesBalanceSheetUser','SalesInvoiceController@salesBalanceSheetUser');
Route::get('/dueSaleToday','SalesInvoiceController@dueSaleToday');
Route::get('/dueSaleTodayUser','SalesInvoiceController@dueSaleTodayUser');
Route::get('/getCustomerListBSheet/{id}','SalesInvoiceController@getCustomerListBSheet');
Route::get('/getCustomerListBSheetDateEId/{id}/{date}/{eid}','SalesInvoiceController@getCustomerListBSheetDateEId');
Route::get('/getCustomerListBSheetDate/{id}/{date}','SalesInvoiceController@getCustomerListBSheetDate');
Route::get('/getCustomerListBSheetEId/{id}/{eid}','SalesInvoiceController@getCustomerListBSheetEId');
Route::get('/salesCustomerListTotalDue/{id}','SalesInvoiceController@salesCustomerListTotalDue');
Route::get('/dueSaleTotal','SalesInvoiceController@dueSaleTotal');
Route::get('/salesBalanceSheetDate/{date}','SalesInvoiceController@salesBalanceSheetDate');
Route::get('/salesBalanceSheetDateUser/{date}','SalesInvoiceController@salesBalanceSheetDateUser');
Route::get('/salesBalanceSheetDateUserWithId/{date}/{id}','SalesInvoiceController@salesBalanceSheetDateUserWithId');
Route::get('/salesBalanceSheetDateDue/{date}','SalesInvoiceController@salesBalanceSheetDateDue');
Route::get('/salesBalanceSheetDateDueUser/{date}','SalesInvoiceController@salesBalanceSheetDateDueUser');
Route::get('/salesBalanceSheetDateDueUserWithId/{date}/{id}','SalesInvoiceController@salesBalanceSheetDateDueUserWithId');
Route::get('/salesTodayDueList','SalesInvoiceController@salesTodayDueList');
Route::get('/salesInvoiceList','SalesInvoiceController@salesInvoiceList');
Route::get('/salesCashInvoiceList','SalesInvoiceController@salesCashInvoiceList');
Route::get('/salesDiscountInvoiceList','SalesInvoiceController@salesDiscountInvoiceList');
Route::get('/todayBankingSale/{type}/{bank}','SalesInvoiceController@todayBankingSale');
Route::get('/salesInvoiceList/{id}','SalesInvoiceController@salesInvoiceGet');
Route::get('/salesReturnInvoiceProductList/{id}','SalesInvoiceController@salesReturnInvoiceProductList');
Route::get('/salesInvoiceSearchList/{date}/{invoiceNo}/{customerId}','SalesInvoiceController@salesInvoiceSearchList');
Route::get('/salesReturnInvoiceList','SalesInvoiceController@salesReturnInvoiceList');
Route::get('/salesReturnInvoiceListApprove','SalesInvoiceController@salesReturnInvoiceListApprove');
Route::get('/salesDueListWithType/{id}','SalesInvoiceController@salesDueListWithType');
Route::get('/salesDueListWithCustomer/{id}','SalesInvoiceController@salesDueListWithCustomer');
Route::post('/salesInvoicePaid/{id}','SalesInvoiceController@salesInvoicePaid');
Route::get('/salesProductDelete/{id}','SalesProductController@salesProductDelete');
Route::get('/salesInvoiceDelete/{id}','SalesInvoiceController@salesInvoiceDelete');
Route::post('/customerInformationEntry','SalesProductController@customerInformationEntry');
Route::get('/salesStackProductWithPrice','SalesProductController@salesStackProductWithPrice');
Route::post('/salesProductQuantityUpdate','SalesProductController@salesProductQuantityUpdate');
Route::post('/salesProductQuantityReturn/{id}','SalesProductController@salesProductQuantityReturn');
Route::get('/customerTypeIdCatch/{customerTypeId}','SalesProductController@customerTypeIdCatch');
Route::get('/allCustomerList','SalesProductController@allCustomerList');
Route::get('/customerIdCatch/{customerId}','SalesProductController@customerIdCatch');
Route::get('/salesTotalBalanceWithInvoice/{salesInvoiceNo}','SalesProductController@salesTotalBalance');
Route::get('/purchaseProductIdCatch/{purchaseProductId}/{priceType}/{brandId}','SalesProductController@purchaseProductIdCatch');
Route::get('/purchaseProductIdCatchForSale/{purchaseProductId}/{priceType}/{brandId}/{colorId}/{sizeId}','SalesProductController@purchaseProductIdCatchForSale');
Route::get('/purchaseProductIdCatchForSaleUnit/{purchaseProductId}/{priceType}/{brandId}/{colorId}/{sizeId}/{unitId}','SalesProductController@purchaseProductIdCatchForSaleUnit');
Route::get('/purchaseProductIdCatchForSaleColor/{purchaseProductId}/{priceType}/{brandId}/{colorId}/{sizeId}','SalesProductController@purchaseProductIdCatchForSaleColor');
Route::get('/purchaseProductIdCatchForSaleSize/{purchaseProductId}/{priceType}/{brandId}/{colorId}/{sizeId}','SalesProductController@purchaseProductIdCatchForSaleSize');
Route::get('/purchaseProductInf/{purchaseProductId}/{brandId}','SalesProductController@purchaseProductInf');
Route::get('/purchaseProductInfForSale/{purchaseProductId}/{brandId}/{colorId}/{sizeId}','SalesProductController@purchaseProductInfForSale');
Route::get('/purchaseProductInfForSaleUnit/{purchaseProductId}/{brandId}/{colorId}/{sizeId}/{unitId}/{priceType}','SalesProductController@purchaseProductInfForSaleUnit');
Route::get('/purchaseProductInfForSaleColor/{purchaseProductId}/{brandId}/{colorId}/{sizeId}','SalesProductController@purchaseProductInfForSaleColor');
Route::get('/purchaseProductInfForSaleSize/{purchaseProductId}/{brandId}/{colorId}/{sizeId}','SalesProductController@purchaseProductInfForSaleSize');
Route::get('/brandIdCatch/{purchaseProductId}','SalesProductController@brandIdCatch');

// Product Price
Route::resource('/salesProductPriceEntry','SalesProductPriceEntryController');
Route::get('/salesProductNameShowOffer','SalesProductPriceEntryController@salesProductNameShowOffer');
Route::get('/salesProductNameShow','SalesProductPriceEntryController@salesProductNameShow');
Route::get('/salesProductPriceOfferId/{purchaseProductId}','SalesProductPriceEntryController@salesProductPriceOfferId');
Route::get('/salesProductPriceId/{purchaseProductId}','SalesProductPriceEntryController@salesProductPriceId');
Route::get('/salesProductPurchaseId/{purchaseProductId}','SalesProductPriceEntryController@salesProductPurchaseId');
Route::get('/salesProductListBrandWiseForOffer/{productId}/{brandId}','SalesProductPriceEntryController@salesProductListBrandWiseForOffer');
Route::get('/salesProductListBrandWise/{productId}/{brandId}','SalesProductPriceEntryController@salesProductListBrandWise');
Route::get('/purchaseProductListBrandWise/{productId}/{brandId}','SalesProductPriceEntryController@purchaseProductListBrandWise');
Route::get('/salesProductBrandShow/{productId}/{brandId}','SalesProductPriceEntryController@salesProductBrandShow');
Route::get('/salesProductBrandShowColor/{productId}/{brandId}/{color}','SalesProductPriceEntryController@salesProductBrandShow');
Route::get('/salesProductBrandShowSize/{productId}/{brandId}/{color}/{size}','SalesProductPriceEntryController@salesProductBrandShow');
Route::get('/salesProductBrandShowSizeWithoutColor/{productId}/{brandId}/{size}','SalesProductPriceEntryController@salesProductBrandShowSizeWithoutColor');
Route::get('/productUnitePrice/{id}','SalesProductPriceEntryController@productUnitePrice');
Route::get('/productUniteOfferEntry/{id}','SalesProductPriceEntryController@productUniteOfferEntry');
Route::get('/productUnitePrice1/{purchaseProductId}/{brandId}/{purchaseTypeId}','SalesProductPriceEntryController@productUnitePrice1');
// Product Discount
Route::resource('/salesProductDiscountPriceEntry','SalesProductDiscountPriceEntryController');
Route::get('/productPriceEntryInfoById/{id}','SalesProductDiscountPriceEntryController@productPriceEntryInfoById');
Route::get('/productPriceOfferInfo/{id}','SalesProductDiscountPriceEntryController@productPriceOfferInfo');
Route::get('/productPriceEntryInfo/{purchaseProductId}/{brandId}','SalesProductDiscountPriceEntryController@productPriceEntryInfo');
Route::get('/productPriceEntryInfoForPriceUpdate/{purchaseProductId}/{brandId}','SalesProductDiscountPriceEntryController@productPriceEntryInfoForPriceUpdate');
Route::get('/productPriceEntryInfoForPriceHistory/{pId}/{bId}/{cId}/{sId}','SalesProductDiscountPriceEntryController@productPriceEntryInfoForPriceHistory');
Route::get('/productPriceEntryUnitHistory/{pId}/{bId}/{cId}/{sId}','SalesProductDiscountPriceEntryController@productPriceEntryUnitHistory');
Route::get('/ProductSalePriceInfo/{pId}/{bId}/{cId}/{sId}','SalesProductDiscountPriceEntryController@ProductSalePriceInfo');
Route::get('/productPriceEntryInfoColor/{purchaseProductId}/{brandId}/{color}','SalesProductDiscountPriceEntryController@productPriceEntryInfoColor');
Route::get('/productPriceEntryInfoSize/{purchaseProductId}/{brandId}/{color}/{size}','SalesProductDiscountPriceEntryController@productPriceEntryInfoSize');
Route::get('/productDetailsInfo/{purchaseProductId}/{brandId}','SalesProductDiscountPriceEntryController@productDetailsInfo');

// Product Report
Route::get('/salesProductPriceReport','SalesProductReportController@salesProductPriceReport');
Route::get('/salesProductDiscountPriceReport','SalesProductReportController@salesProductDiscountPriceReport');
Route::get('/salesCustomerListReport','SalesProductReportController@salesCustomerListReport');
Route::get('/srCustomerListReport/{srId}','SalesProductReportController@srCustomerListReport');
Route::get('/salesCustomerListReportwithType/{id}','SalesProductReportController@salesCustomerListReportwithType');

Route::get('/salesCustomerTypeListReport','SalesProductReportController@salesCustomerTypeListReport');
Route::post('/dateWiseProductSearch','SalesProductReportController@dateWiseProductSearch');
Route::post('/dateWiseDetailsProductSearch','SalesProductReportController@dateWiseProductSearchDetails');
Route::get('/salesProductList','SalesProductReportController@salesProductList');
Route::post('/serchCustomerInfo','SalesProductReportController@serchCustomerInfo');


/////////////////      Purchase Route        //////////////////
//  Brand Entry
Route::resource('/purchaseBrandEntry','BrandEntryController');
Route::get('/purchaseBrandEntry/changeStatus/{id}','BrandEntryController@changeStatus');
//  Purchase Entry
Route::resource('/purchaseInvoice','PurchaseController');
Route::post('/repurchaseProductInfo','PurchaseController@repurchaseProductInfo');
Route::post('/repurchaseProductInfoUnit','PurchaseController@repurchaseProductInfoUnit');
Route::post('/repurchaseProductOpeningUnit','PurchaseController@repurchaseProductOpeningUnit');
Route::post('/purchaseInvoiceOpening','PurchaseController@purchaseInvoiceOpening');
Route::get('/openingInvoiceList','PurchaseController@openingInvoiceList');
Route::get('/purchaseInvoiceList','PurchaseController@purchaseInvoiceList');
Route::get('/purchaseInvoiceListToday','PurchaseController@purchaseInvoiceListToday');
Route::get('/rePurchaseInvoice','PurchaseController@rePurchaseInvoice');
Route::post('/oprningInvoice','PurchaseController@oprningInvoice');
Route::get('/shopWishProductSupplier','PurchaseController@shopWishProductSupplier');
Route::get('/shopWishProductSupplierId/{ProductSupplierId}','PurchaseController@shopWishProductSupplierId');
Route::get('/supplierWiseBrandList/{ProductSupplierId}','PurchaseController@supplierWiseBrandList');
Route::get('/supplierWiseDamageList/{ProductSupplierId}','PurchaseController@supplierWiseDamageList');
Route::get('/brandWiseProductList/{ProductSupplierId}/{brandId}','PurchaseController@brandWiseProductList');
Route::get('/brandWiseDamageList/{ProductSupplierId}/{brandId}','PurchaseController@brandWiseDamageList');
Route::get('/requisitionProductList/{reqId}','PurchaseController@requisitionProductList');
Route::get('/supplierBrandList/{sid}/{bid}/{date}','PurchaseController@supplierBrandList');
Route::get('/purchaseOpeningInvoice','PurchaseController@purchaseOpeningInvoice');
Route::get('/purchaseInvoiceShow','PurchaseController@purchaseInvoiceShow');
Route::get('/openingInvoiceShow','PurchaseController@openingInvoiceShow');
Route::get('/purchaseTypeShow','PurchaseController@purchaseTypeShow');
Route::get('/unitNameShow','PurchaseController@unitNameShow');
Route::get('/unitNameShowPurchase','PurchaseController@unitNameShowPurchase');
Route::get('/unitNameShowSales/{productId}/{brandId}/{priceType}','PurchaseController@unitNameShowSales');
Route::get('/productNameShow','PurchaseController@productNameShow');
Route::get('/productNameList','PurchaseController@productNameList');
Route::post('/productEntryOpening','PurchaseController@productEntryOpening');
Route::post('/productEntry','PurchaseController@productEntry');
Route::post('/openingProductEntry','PurchaseController@openingProductEntry');
Route::post('/reProductEntry','PurchaseController@reProductEntry');
Route::post('/productQuantityUpdate','PurchaseController@productQuantityUpdate');
Route::get('/productList','PurchaseController@purchaseProductList');
Route::get('/productListTmp','PurchaseController@purchaseProductListTmp');
Route::get('/productListOpening','PurchaseController@purchaseProductListOpening');
Route::get('/totalPurchaseValueOpening/{purchaseInvoiceNo}','PurchaseController@totalPurchaseValueOpening');
Route::get('/totalPurchaseValue/{purchaseInvoiceNo}','PurchaseController@totalPurchaseValue');
Route::get('/totalPurchaseValueTmp/{purchaseInvoiceNo}','PurchaseController@totalPurchaseValueTmp');
Route::post('/purchaseProductDetails','PurchaseController@purchaseProductDetails');
Route::get('/purchaseProductInfo/{purchaseProductId}','PurchaseController@purchaseProductInfo');
Route::get('/invoiceProductMoreDetails/{productId}/{invoiceNo}','PurchaseController@invoiceProductMoreDetails');
Route::get('/invoiceProductMoreDetailsInfo/{productId}/{supplierId}','PurchaseController@invoiceProductMoreDetailsInfo');
Route::get('/purchaseProductMoreFieldDelete/{id}','PurchaseController@purchaseProductMoreFieldDelete');
Route::post('/purchaseProductDetailsUpdate','PurchaseController@purchaseProductDetailsUpdate');
Route::post('/purchaseProductDetailsUpdateinfo/{id}','PurchaseController@purchaseProductDetailsUpdateinfo');
Route::resource('/addProductSupplier','ShopAddProductSupplierController');
Route::resource('/advanceUnitSetup','purchaseProductUnitInfoController');
Route::post('/getLastSalesQuantity','purchaseProductUnitInfoController@getLastSalesQuantity');
Route::get('/advanceUnitSetupDelete/{id}/{purchaseInvoiceNo}','purchaseProductUnitInfoController@advanceUnitSetupDelete');
Route::get('/advanceUnitSetupDeleteOpening/{id}/{purchaseInvoiceNo}','purchaseProductUnitInfoController@advanceUnitSetupDeleteOpening');
Route::get('/advanceUnitSalesPriceUpdate/{id}/{price}','purchaseProductUnitInfoController@advanceUnitSalesPriceUpdate');
Route::get('/advanceUnitSalesPriceUpdateType/{id}/{price}/{priceType}/{priceSetupId}','purchaseProductUnitInfoController@advanceUnitSalesPriceUpdateType');
Route::get('/advanceUnitSetupByPriceType/{id}/{priceType}/{priceSetupId}','purchaseProductUnitInfoController@advanceUnitSetupByPriceType');
Route::post('/advanceUnitSetupPurchasePrice','purchaseProductUnitInfoController@advanceUnitSetupPurchasePrice');
Route::post('/advanceUnitSetupSalesPrice','purchaseProductUnitInfoController@advanceUnitSetupSalesPrice');
Route::post('/advanceUnitSetupByProduct','purchaseProductUnitInfoController@advanceUnitSetupByProduct');
Route::post('/advUnitSetupByPurchase','purchaseProductUnitInfoController@advUnitSetupByPurchase');
Route::post('/advUnitSetupBySales','purchaseProductUnitInfoController@advUnitSetupBySales');
Route::get('/showUnitListModal/{id}','purchaseProductUnitInfoController@showUnitListModal');
Route::get('/advanceUnitSetupCheck/{id}','purchaseProductUnitInfoController@advanceUnitSetupCheck');
Route::resource('/addSREntry','SRInformationController');
Route::get('/srTypeList','SRInformationController@srTypeList');
Route::get('/selectSrDsrList/{id}','SRInformationController@selectSrDsrList');
Route::get('/getSrDsrList','SRInformationController@getSrDsrList');
Route::get('/addSREntryReport','SRInformationController@addSREntryReport');
Route::resource('/addDemoEmployee','DemoUserListController');
Route::get('/getCheckOpenningSupplier','ShopAddProductSupplierController@getCheckOpenningSupplier');
Route::resource('/returnPurchase','PurchaseReturnController');
Route::post('/returnSales','PurchaseReturnController@returnSales');
Route::get('/returnPurchaseProduct/{invoiceId}/{productId}','PurchaseReturnController@returnPurchaseProduct');
Route::get('/returnPurchaseInvoice/{invoiceId}','PurchaseReturnController@returnPurchaseInvoice');
Route::get('/returnPurchaseSupplierDue/{invoiceId}','PurchaseReturnController@returnPurchaseSupplierDue');
Route::post('/returnPurchaseUpdate/{invoiceId}/{productId}','PurchaseReturnController@returnPurchaseUpdate');
Route::get('/returnPList/{id}','PurchaseReturnController@returnPList');
Route::get('/supplierListGet/{productId}/{brandId}','PurchaseController@supplierListGet');
Route::get('/supplierListGetRepurchase/{productId}/{brandId}/{colorId}/{sizeId}','PurchaseController@supplierListGetRepurchase');
Route::get('/rePurchaseGet/{productId}/{brandId}/{supplierId}','PurchaseController@rePurchaseGet');
Route::get('/rePurchaseGetColor/{productId}/{brandId}/{supplierId}/{colorId}','PurchaseController@rePurchaseGetColor');
Route::get('/rePurchaseGetSize/{productId}/{brandId}/{supplierId}/{colorId}/{sizeId}','PurchaseController@rePurchaseGetSize');
Route::get('/rePurchaseDistroy/{id}','PurchaseReturnController@rePurchaseDistroy');


// Purchase Report
Route::get('/productSupplierReport','PurchaseReportController@productSupplierReport');
Route::get('/dueSupplierList','PurchaseReportController@dueSupplierList');
Route::get('/dueSupplierListDashboard','PurchaseReportController@dueSupplierListDashboard');
Route::get('/supplierInvoiceDetails/{productSupplierId}','PurchaseReportController@supplierInvoiceDetails');
Route::get('/supplierProductDetails/{productSupplierId}','PurchaseReportController@supplierProductDetails');
Route::get('/purchasePriceHistory/{productSupplierId}/{product}/{brand}','PurchaseReportController@purchasePriceHistory');
Route::get('/purchaseInvoiceReport','PurchaseReportController@purchaseInvoiceReport');
Route::get('/purchaseReturnInvoice','PurchaseReportController@purchaseReturnInvoice');
Route::get('/purchaseApprovedReturnInvoice','PurchaseReportController@purchaseReturnInvoiceApproved');
Route::get('/salesApprovedReturnInvoice','PurchaseReportController@salesApprovedReturnInvoice');
Route::post('/purchaseReturnInvoiceApprove','PurchaseReturnController@purchaseReturnApprove');
Route::post('/purchaseReturnBillReceive','PurchaseReturnController@purchaseReturnBillReceive');
Route::post('/salesReturnBillReceive','PurchaseReturnController@salesReturnBillReceive');
Route::get('/purchaseReturnCheckQuantity/{id}/{unitId}','PurchaseReturnController@purchaseReturnCheckQuantity');
Route::get('/salesReturnCheckQuantity/{id}/{unitId}','PurchaseReturnController@salesReturnCheckQuantity');
Route::get('/purchaseReturnInvoiceInfoPay/{id}','PurchaseReturnController@purchaseReturnInvoiceInfoPay');
Route::get('/purchaseReturnInvoiceDelete/{id}','PurchaseReturnController@purchaseReturnInvoiceDelete');
Route::get('/salesReturnInvoiceDelete/{id}','PurchaseReturnController@salesReturnInvoiceDelete');
Route::get('/purchaseReturnSupplierDue/{id}','PurchaseReturnController@purchaseReturnSupplierDue');
Route::get('/salesReturnCustomerDue/{id}','PurchaseReturnController@salesReturnCustomerDue');
Route::post('/salesReturnInvoiceApprove','PurchaseReturnController@salesReturnInvoiceApproveOld');
Route::get('/openingInvoiceReport','PurchaseReportController@openingInvoiceReport');
Route::get('/purchaseReturn','PurchaseReportController@purchaseReturn');
Route::get('/openingProductReport','PurchaseReportController@openingProductReport');
Route::get('/purchaseProductReport','PurchaseReportController@purchaseProductReport');
Route::get('/purchaseProductReportList/{purchaseProductId}','PurchaseReportController@purchaseProductReportList');
Route::get('/openingProductReportList/{purchaseProductId}','PurchaseReportController@openingProductReportList');
Route::get('/rePurchaseProductReportList','PurchaseReportController@rePurchaseProductReportList');
Route::get('/purchaseProductReportListInfo','PurchaseReportController@purchaseProductReportListInfo');
Route::get('/purchaseProductReportDetails/{purchaseProductId}','PurchaseReportController@purchaseProductReportDetails');
Route::get('/purchaseProductDetails/{purchaseProductId}','PurchaseReportController@purchaseProductDetails');


// category entry

Route::get('get/category/entry','ShopInformation\CategoryEntryController@index');
Route::get('get/list/category/entry','ShopInformation\CategoryEntryController@get_category_list');
Route::post('category/entry','ShopInformation\CategoryEntryController@store');
Route::get('category/entry/edit/{id}','ShopInformation\CategoryEntryController@edit');
Route::post('category/entry/update','ShopInformation\CategoryEntryController@update');
Route::get('category/entry/deactivate/status/{id}','ShopInformation\CategoryEntryController@statusDeactivate');
Route::get('category/entry/activate/status/{id}','ShopInformation\CategoryEntryController@statusActivate');

// category entry

// occupation entry
Route::get('get/occupation/list','ShopInformation\OccupationController@index');
Route::post('occupation/entry','ShopInformation\OccupationController@store');
Route::get('occupation/edit/{id}','ShopInformation\OccupationController@edit');
Route::post('occupation/update','ShopInformation\OccupationController@update');
Route::get('occupation/deactivate/status/{id}','ShopInformation\OccupationController@statusDeactivate');
Route::get('occupation/activate/status/{id}','ShopInformation\OccupationController@statusActivate');
Route::get('guest/occupation/show','ShopInformation\OccupationController@guestOccupationShow');
// occupation entry

// designation entry
Route::get('get/designation/list','ShopInformation\DesignationController@index');
Route::post('designation/entry','ShopInformation\DesignationController@store');
Route::get('designation/edit/{id}','ShopInformation\DesignationController@edit');
Route::post('designation/update','ShopInformation\DesignationController@update');
Route::get('designation/deactivate/status/{id}','ShopInformation\DesignationController@statusDeactivate');
Route::get('designation/activate/status/{id}','ShopInformation\DesignationController@statusActivate');
Route::get('guest/designation/show','ShopInformation\DesignationController@guestDesignationShow');
// designation entry


/*category product*/
Route::post('store/category/product','ShopInformation\CategoryProductController@store');
Route::get('engagement/list/{id}','ShopInformation\CategoryProductController@engagementList');
Route::post('change/category/status','ShopInformation\CategoryProductController@change_category_status');
Route::get('category/product/status/list/{status}','ShopInformation\CategoryProductController@category_product_status_list_by_status');
/*category product*/


/////////////////     Inventory Route        //////////////////
// Category Route
Route::resource('/category','CategoryController');
Route::get('/cateorySelectList','CategoryController@cateorySelectList');
Route::get('/categoryId/{categoryId}','CategoryController@categoryId');
Route::get('/subCategoryId/{subCategoryId}','CategoryController@subCategoryId');
Route::get('/thirdCategoryId/{thirdCategoryId}','CategoryController@thirdCategoryId');
Route::get('/fourCategoryId/{fourCategoryId}','CategoryController@fourCategoryId');
Route::get('/fiveCategoryId/{fiveCategoryId}','CategoryController@fiveCategoryId');
Route::get('/sixCategoryId/{sixCategoryId}','CategoryController@sixCategoryId');
Route::get('/sevenCategoryId/{sevenCategory}','CategoryController@sevenCategoryId');
Route::get('/adminShopTypeIdSelect/{shopTypeId}','CategoryController@adminShopTypeIdSelect');
Route::get('/categoryEdit/allCategory','CategoryController@categoryEditallCategory');

// Product Route
Route::resource('/productName','ProductNameController');
Route::get('/productNameListOwner','ProductNameController@productNameListOwner');
Route::get('/productCateorySelectList','ProductNameController@productCateorySelectList');
Route::get('/productCategoryId/{categoryId}','ProductNameController@productCategoryId');
Route::get('/productSubCategoryId/{subCategoryId}','ProductNameController@productSubCategoryId');
Route::get('/productThirdCategoryId/{thirdCategoryId}','ProductNameController@productThirdCategoryId');
Route::get('/productFourCategoryId/{fourCategoryId}','ProductNameController@productFourCategoryId');
Route::get('/productFiveCategoryId/{fiveCategoryId}','ProductNameController@productFiveCategoryId');
Route::get('/productSixCategoryId/{sixCategoryId}','ProductNameController@productSixCategoryId');

// Inventory Report Route
Route::get('/stockSummaryProductReport/{id}','InventoryReportController@stockSummaryProductReport');
Route::get('/stockSummaryProduct','InventoryReportController@stockSummaryProduct');
Route::get('/repurchase/{product}/{brand}','InventoryReportController@repurchase');
Route::get('/repurchaseHistory/{product}/{brand}','InventoryReportController@repurchaseHistory');
Route::get('/stockSummaryProductDetails/{purchaseProductId}','InventoryReportController@stockSummaryProductDetails');
Route::get('/stockSummaryProductDetailsInf/{productId}','InventoryReportController@stockSummaryProductDetails');
Route::get('/priceUpdateHistory/{purchaseProductId}','InventoryReportController@priceUpdateHistory');
Route::get('/stockShortageProductReport','InventoryReportController@stockShortageProductReport');
Route::get('/inventoryProductNameWithoutPrice','InventoryReportController@inventoryProductNameWithoutPrice');
Route::get('/inventoryProductNameWithPrice','InventoryReportController@inventoryProductNameWithPrice');
Route::get('/invetoryCategoryWithoutPriceList','InventoryReportController@invetoryCategoryWithoutPriceList');
Route::get('/invetoryCategoryWithPriceList','InventoryReportController@invetoryCategoryWithPriceList');
Route::get('/categoryList','InventoryReportController@categoryList');
Route::get('/categoryListInventory','InventoryReportController@categoryListInventory');
Route::get('/productShow/{id}','InventoryReportController@productShow');
Route::get('/lowQuantityProductList','InventoryReportController@lowQuantityProductList');
Route::get('/expireDateOverProductList','InventoryReportController@expireDateOverProductList');
Route::get('/expireDateOverProductListForDashboard','InventoryReportController@expireDateOverProductListForDashboard');
Route::get('/upcomingDateOverProductListForDashboard','InventoryReportController@upcomingDateOverProductListForDashboard');
Route::get('/expireDateSoonProductList','InventoryReportController@expireDateSoonProductList');
Route::resource('/alertNoti','AlertController');
Route::resource('/salesSt','SalessettingController');
Route::get('/changeLanguage/{id}/{shopId}','SalessettingController@changeLanguage');
Route::get('/alertsoonExpNoti/{id}','AlertController@alertsoonExpNoti');
Route::get('/alertshortageNoti/{id}','AlertController@alertshortageNoti');
Route::get('/alertstockZeroNoti/{id}','AlertController@alertstockZeroNoti');

// Inventory Shortage Route
Route::get('/brandWithProductShortage','InventoryShortageController@brandWithProductShortage');
Route::get('/brandWithProductList/{id}','InventoryShortageController@brandWithProductList');
Route::get('/categoryWithProductList/{id}','InventoryShortageController@categoryWithProductList');
Route::get('/supplierWithProductShortage','InventoryShortageController@supplierWithProductShortage');



/////////////////        HR Management Route         /////////////////
// HR Management Route
Route::resource('/salaryStartSetup','SalaryStartSetupController');
Route::get('/salaryGradeName/{employeEntryId}','SalaryStartSetupController@salaryGradeName');
Route::get('/salaryPaymentStatus/{salarySetupId}','SalaryStartSetupController@salaryPaymentStatus');
Route::resource('/jobDepartmentEntry','JobDepartmentEntryController');
Route::resource('/holidaySetup','HolidaySetupController');
Route::resource('/salaryGradeEntry','SalaryGradeEntryController');
Route::resource('/salaryGradeSetup','SalaryGradeSetupController');
Route::resource('/salarySheet','SalarySheetController');
Route::get('/salaryPayStuff/{id}/{month}/{year}','SalarySheetController@salaryPayStuff');
Route::resource('/salaryPay','SalaryPayController');
Route::get('/paidSalary/{month}/{year}','SalarySheetController@paidSalary');
Route::get('/pendingSalary/{month}/{year}','SalarySheetController@pendingSalary');
Route::get('/dueSalary/{month}/{year}','SalarySheetController@dueSalary');
Route::get('/fullSalary','SalarySheetController@fullSalary');
Route::get('/fullSalaryInfo/{month}/{year}','SalarySheetController@fullSalaryInfo');
Route::get('/yearlyFullSalary/{year}','SalarySheetController@yearlyFullSalary');
Route::get('/monthwiseSalarySheet/{month}/{year}','SalarySheetController@monthwiseSalarySheet');
Route::get('/salarySheetConfirm/{id}/{month}/{year}','SalarySheetController@salarySheetConfirm');
Route::post('/salaryDeduct','SalarySheetController@salaryDeduct');
Route::get('/employeeName','SalaryGradeSetupController@employeeName');
Route::get('/employeeList','SalaryGradeSetupController@employeeList');
Route::get('/salaryGradeList','SalaryGradeSetupController@salaryGradeList');
Route::post('/salaryGradeUpdate/{employeeId}/{gradeId}','SalaryGradeSetupController@salaryGradeUpdate');
Route::get('/salaryGradeAmount/{gradeEntryId}','SalaryGradeSetupController@salaryGradeAmount');
Route::get('/salaryInfo/{employee}','SalaryGradeSetupController@salaryInfo');
Route::resource('/employeeLeaveEntry','EmployeeLeaveEntryController');
Route::resource('/employeeAttendance','EmployeeAttendanceController');
Route::get('/clickForAttendanceLeave','EmployeeAttendanceController@clickForAttendanceLeave');
Route::get('/clickForAttendanceAbsent','EmployeeAttendanceController@clickForAttendanceAbsent');


// HR Report Route
Route::get('/employeeReport','HrReportController@employeeReport');
Route::get('/suspendList','HrReportController@suspendList');
Route::get('/closeList','HrReportController@closeList');
Route::get('/pushList','HrReportController@pushList');
Route::get('/employeeReportView/{employeeId}','HrReportController@employeeReportView');
Route::get('/salarySheetReport','HrReportController@salarySheetReport');
Route::post('/serchEmployeeSalary','HrReportController@serchEmployeeSalary');
Route::get('/salarySheetStatement/{employeEntryId}','HrReportController@salarySheetStatement');
Route::get('/salaryGradeReport','HrReportController@salaryGradeReport');
Route::get('/salaryGradeSetupReport','HrReportController@salaryGradeSetupReport');
Route::get('/jobDepartmentReport','HrReportController@jobDepartmentReport');
Route::get('/employeeTypeReports','HrReportController@employeeTypeReport');
Route::get('/holidaySetupReport','HrReportController@holidaySetupReport');
Route::post('/suspend/{shopEmployeeEntryId}','HrReportController@suspend');
Route::post('/unsuspend/{shopEmployeeEntryId}','HrReportController@unsuspend');
Route::post('/salarypush/{shopEmployeeEntryId}','HrReportController@salarypush');
Route::post('/salaryactive/{shopEmployeeEntryId}','HrReportController@salaryactive');
Route::post('/close/{shopEmployeeEntryId}','HrReportController@close');
Route::post('/rejoin/{shopEmployeeEntryId}','HrReportController@rejoin');
Route::get('/employeeAttendanceInfo/{id}','HrReportController@employeeAttendanceInfo');
Route::get('/employeeAttendanceReport','HrReportController@employeeAttendanceReport');
Route::get('/employeeAttendanceReportMonthly/{month}/{year}','HrReportController@employeeAttendanceReportMonthly');
Route::get('/salaryMonth/{month}/{year}','SalarySheetController@salaryMonth');
Route::get('/yearlyLeave/{month}/{year}','HrReportController@yearlyLeave');
Route::get('/leaveReport','HrReportController@leaveReport');
Route::get('/leaveReportMonth/{employee}/{month}/{year}','HrReportController@leaveReportMonth');



/////////////////        Shop User Route         //////////////////
// ShopUser Menu Permission
Route::resource('/shopEmployeeType','ShopEmployeeTypeController');
Route::resource('/shopEmployeeEntry','ShopEmployeeEntryController');
Route::get('checkShopEmployeeUserName/{id}','ShopEmployeeEntryController@checkShopEmployeeUserName');
Route::get('/showEmployee/{type}/{department}','ShopEmployeeEntryController@showEmployee');
Route::get('/employeeListAssign','ShopEmployeeEntryController@employeeListAssign');

Route::get('/employeeNameList','ShopEmployeeEntryController@employeeNameList');
Route::get('employee/deactivate/{shopEmployeeEntryId}','ShopEmployeeEntryController@employee_deactivate');
Route::get('employee/activate/{shopEmployeeEntryId}','ShopEmployeeEntryController@employee_activate');

Route::get('/bankTypeLists','ShopEmployeeEntryController@bankTypeList');
Route::get('/bankNameLists/{bankTypeId}','ShopEmployeeEntryController@bankNameList');
Route::get('/bankNameListGetInfo','ShopEmployeeEntryController@bankNameListGetInfo');
Route::get('/educationInformation','ShopEmployeeEntryController@educationInformation');
Route::post('/educationEntry','ShopEmployeeEntryController@educationEntry');
Route::post('/professionalEntry','ShopEmployeeEntryController@professionalEntry');
Route::post('/skillEntry','ShopEmployeeEntryController@skillEntry');
Route::post('/bankingEntry','ShopEmployeeEntryController@bankingEntry');

Route::resource('/shopMenuPermission','ShopMenuPermissionController');
Route::get('/shopEmployeeEntryLists','ShopMenuPermissionController@shopEmployeeEntryLists');
Route::get('/shopEmployeeTypeName/{shopEmployeeEntryId}','ShopMenuPermissionController@shopEmployeeTypeName');
Route::get('/shopMenuTittleShow','ShopMenuPermissionController@shopMenuTittleShow');
Route::get('/shopMenuShow','ShopMenuPermissionController@shopMenuShow');
Route::get('/shopSubMenuShow','ShopMenuPermissionController@shopSubMenuShow');

Route::get('/shopPermissionMenuShows/{employeeEntryId}/{employeeTypeId}','ShopMenuPermissionController@shopPermissionMenuShows');
Route::get('/shopPermissionAreaShows/{employeeId}','ShopMenuPermissionController@shopPermissionAreaShows');

Route::get('/shopPermissionSubMenuShows/{employeeEntryId}/{employeeTypeId}','ShopMenuPermissionController@shopPermissionSubMenuShows');
Route::get('/shopMenuPermissionChange/{employeeEntryId}/{employeeTypeId}/{menuId}','ShopMenuPermissionController@shopMenuPermissionChange');
Route::get('/shopSubMenuStatusDeactive/{employeeEntryId}/{employeeTypeId}/{subMenuId}','ShopMenuPermissionController@shopSubMenuStatusDeactive');
Route::get('/shopSubMenuStatusActiveFullAccess/{employeeEntryId}/{employeeTypeId}/{subMenuId}','ShopMenuPermissionController@shopSubMenuStatusActiveFullAccess');
Route::get('/shopSubMenuStatusActiveViewAccess/{employeeEntryId}/{employeeTypeId}/{subMenuId}','ShopMenuPermissionController@shopSubMenuStatusActiveViewAccess');
Route::get('/shopSubMenuStatusActiveAddAccess/{employeeEntryId}/{employeeTypeId}/{subMenuId}','ShopMenuPermissionController@shopSubMenuStatusActiveAddAccess');
Route::get('/shopSubMenuStatusActiveEditAccess/{employeeEntryId}/{employeeTypeId}/{subMenuId}','ShopMenuPermissionController@shopSubMenuStatusActiveEditAccess');
Route::resource('/shopproductBrandEntry','ShopProductBrandController');
Route::get('/productBrandListPurchase','ShopProductBrandController@productBrandListForPurchase');
Route::get('/productBrandList','ShopProductBrandController@productBrandList');
Route::get('/adminProductBrandPosition/{shopTypeId}','ShopProductBrandController@adminProductBrandPosition');
Route::get('/shopProductBrandPosition','ShopProductBrandController@shopProductBrandPosition');
Route::get('/shopProductBrandReport','ShopProductBrandController@productBrandReport');
Route::get('/shopProductBrandReportList/{uniqueId}','ShopProductBrandController@shopProductBrandReportList');
Route::get('/ownSubCategoryReportList/{ownGlobal}','ShopProductBrandController@ownSubCategoryReportList');
Route::get('/shopcategoryReportList/{uniqueId}','ShopProductBrandController@shopcategoryReportList');
Route::get('/shopProductBrandReportListForAdmin/{uniqueId}','ShopProductBrandController@shopProductBrandReportListForAdmin');
Route::resource('/shopAssetBrandEntry','ShopAssetBrandController');
Route::get('/shopAssetBrandReport','ShopAssetBrandController@shopAssetBrandReport');
Route::get('/shopAssetBrandReportAll','ShopAssetBrandController@shopAssetBrandReportAll');

////////////////////////////// Shop Admin Setting ////////////////////////////////////


Route::resource('/addAssetSupplier','ShopAddAssetSupplierController');

Route::get('/assetSupplierList','ShopAddAssetSupplierController@assetSupplierList');
Route::get('/assetProductList/{id}','ShopAddAssetSupplierController@assetProductList');

Route::resource('/shopAssetCategory','ShopAssetCategoryController');
Route::get('/shopAssetCategoryAll','ShopAssetCategoryController@shopAssetCategoryAll');
Route::get('/assetCateorySelectList','ShopAssetCategoryController@assetCateorySelectList');
Route::get('/assetCategoryId/{assetCategoryId}','ShopAssetCategoryController@assetCategoryId');
Route::get('/assetSubCategoryId/{assetSubCategoryId}','ShopAssetCategoryController@assetSubCategoryId');
Route::get('/assetThirdCategoryId/{assetThirdCategoryId}','ShopAssetCategoryController@assetThirdCategoryId');
Route::get('/assetFourCategoryId/{assetFourCategoryId}','ShopAssetCategoryController@assetFourCategoryId');
Route::get('/assetFiveCategoryId/{assetFiveCategoryId}','ShopAssetCategoryController@assetFiveCategoryId');
Route::get('/assetSixCategoryId/{assetSixCategoryId}','ShopAssetCategoryController@assetSixCategoryId');
Route::get('/assetSevenCategoryId/{assetSevenCategoryId}','ShopAssetCategoryController@assetSevenCategoryId');

Route::resource('/shopAssetEntry','ShopAssetEntryController');
Route::get('/viewAllProductById/{id}','ShopAssetEntryController@viewAllProductById');
Route::get('/viewAllProduct','ShopAssetEntryController@viewAllProduct');
Route::get('/viewProduct/{id}','ShopAssetEntryController@viewProduct');
Route::get('/shopAssetSupplierLastBalance/{id}','ShopAssetEntryController@shopAssetSupplierLastBalance');
Route::get('/assetEntryEdit/allCategoryShow','ShopAssetEntryController@allCategoryShow');
Route::resource('/assetCodeEntry','AssetCodeEntryController');
Route::get('/getAssetCodeEntryList','AssetCodeEntryController@getAssetCodeEntryList');
Route::get('/getAssetStatusInfo/{shopAssetEntryId}/{assetBrandId}/{price}','AssetStatusController@getAssetStatusInfo');
Route::resource('/assetStatus','AssetStatusController');
Route::get('/getAssetBrandList/{id}','AssetStatusController@getAssetBrandList');
Route::get('/getAssetPriceList/{id}/{brand}','AssetStatusController@getAssetPriceList');
Route::get('/getAssetQuantityForReceive/{send_receive}/{product_id}/{status}/{brand_id}/{price}','AssetStatusController@getAssetQuantityForReceive');
Route::resource('/lowQuantity','ProductLowQuantityController');
Route::resource('/expLimit','ExpireSoonDateController');
Route::resource('/vatEntry','VatSetupController');
Route::resource('/dueLimit','DueLimitController');






Route::get('/mobileBankAccountType','ShopAddBankController@mobileBankAccountType');
Route::get('/corporateBankAccountType','ShopAddBankController@corporateBankAccountType');
Route::get('/bankCardType','ShopAddBankController@bankCardType');
Route::get('/getBankListWithBalance','ShopAddBankController@getBankListWithBalance');
Route::resource('/addBank','ShopAddBankController');
Route::get('/getShopBillMonthListById/{id}','ShopAddBankController@getShopBillMonthListById');
Route::get('/getShopBillMonthList','ShopAddBankController@getShopBillMonthList');
Route::get('/bankTypeEntryList','ShopAddBankController@bankTypeEntryList');
Route::get('/companyBankNameList/{bankTypeId}','ShopAddBankController@companyBankNameList');
Route::get('/bankNameList/{bankTypeId}','ShopAddBankController@bankNameList');
Route::get('/bankNameListByShop/{bankTypeId}','ShopAddBankController@bankNameListByShop');
Route::get('/bankNameListGet','ShopAddBankController@bankNameListGet');
Route::get('/companyBankAccountList/{bankTypeId}','ShopAddBankController@companyBankAccountList');
Route::get('/bankAccountList/{bankTypeId}','ShopAddBankController@bankAccountList');
Route::get('/bankAccountListWithCard/{bankTypeId}/{bankTypeEntryId}','ShopAddBankController@bankAccountListWithCard');
Route::get('/bankAccountMoreInfo/{bankTypeId}','ShopAddBankController@bankAccountMoreInfo');
Route::get('/allBankNameList','ShopAddBankController@allBankNameList');


// Product Setup
Route::resource('/shopLoanProviderEntry','ShopLoanProviderEntryController');
Route::resource('/shopLoanEntry','ShopLoanEntryController');
Route::resource('/shopIncomeTypeEntry','ShopIncomeTypeEntryController');
Route::get('/shopIncomeTypeReport','ShopIncomeTypeEntryController@shopIncomeTypeReport');
Route::resource('/shopExpenceTypeEntry','ShopExpenceTypeEntryController');
Route::get('/shopExpenceTypeReport','ShopExpenceTypeEntryController@shopExpenceTypeReport');
Route::resource('/ShopEmployeeLoginTimeEntry','ShopEmployeeLoginTimeEntryController');
// Product Price Setup
Route::resource('/productPriceSetup','ProductPriceSetupController');
Route::get('/productCategoryLists','ProductPriceSetupController@productCategoryLists');
Route::get('/productCategoryIdCatch/{categoryId}','ProductPriceSetupController@productCategoryIdCatch');
Route::get('/productNameIdCatch/{productNameId}','ProductPriceSetupController@productNameIdCatch');

// Shop Report
Route::get('/shopTypeNameList','ShopReportController@shoptype');
Route::get('/categoryNameList','ShopReportController@categorydata');
Route::get('/categoryOwnerShow/{categoryLabel}','ShopReportController@categoryOwnerShow');
Route::get('/categoryGlobalShow/{categoryLabel}','ShopReportController@categoryGlobalShow');
Route::get('/condition','ShopReportController@condition');
Route::get('/shopTypeTable','ShopReportController@shopTypeTable');
Route::get('/adminCategoryListShow/{shopTypeId}/{labelId}','ShopReportController@adminCategoryListShow');
Route::get('/categoryGlobalCount','ShopReportController@categoryGlobalCount');
Route::get('/shopAssetCategoryReportOwner','ShopReportController@shopAssetCategoryReportOwner');
Route::get('/shopAssetCategoryReportOwnerShow/{labelId}','ShopReportController@shopAssetCategoryReportOwnerShow');
Route::get('/shopAssetCategoryReportGlobal','ShopReportController@shopAssetCategoryReportGlobal');
Route::get('/shopAssetCategoryReportGlobalShow/{labelId}','ShopReportController@shopAssetCategoryReportGlobalShow');
Route::get('/shopAssetEntryReport','ShopReportController@shopAssetEntryReport');
Route::get('/shopAssetEntryReportStatusHistory/{id}','ShopReportController@shopAssetEntryReportStatusHistory');
Route::get('/getAssetStatusList','ShopReportController@getAssetStatusList');

Route::get('/shopTotalAsset','ShopReportController@shopTotalAsset');
Route::get('/shopAssetEntryReportDetails/{id}','ShopReportController@shopAssetEntryReportDetails');
Route::get('/shopAssetDamageReport','ShopReportController@shopAssetDamageReport');
Route::get('/shopAssetWarantyReport','ShopReportController@shopAssetWarantyReport');
Route::get('/shopAssetGuranteeReport','ShopReportController@shopAssetGuranteeReport');
Route::get('/shopAssetUnusedReport','ShopReportController@shopAssetUnusedReport');
Route::get('/shopAssetTheftReport','ShopReportController@shopAssetTheftReport');
Route::resource('change-password', 'ChangePasswordController');
Route::resource('regiPhone', 'RegiPhoneController');
// Asset Code Report
Route::get('/assetCodeReport','ShopReportController@assetCodeReport');

/////////////////     Setting Route         //////////////////
//change Password
Route::resource('/changePassword','PasswordChangeController');
//profile setting
Route::resource('/settingsProfile','SettingsController');
Route::resource('companyInfo','CompanyInformationController');


Route::get('{anypath}','HomeController@index')->where( 'path', '([A-z\d-\/_.]+)? ');
});
