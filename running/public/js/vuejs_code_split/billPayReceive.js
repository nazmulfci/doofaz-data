(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{866:function(t,e,a){"use strict";a.r(e);var s=a(5);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var o={data:function(){var t;return n(t={valid1:!1,loading:!1,expenseTypeLists:[],expenseHeadListByIds:[],expenseHeadLists:[],getCompanyByType:[],paidDateText:"",totalAmountText:"",available_balance_cash_status:!1,available_balance_cash_text:"",available_balance_text:"",available_balance_status:!1,submit_button_status:!0,available_button_status:!1,available_text:"",insufficent_cash_balance_text_status:!1,insufficent_bank_balance_text_status:!1,insufficent_balance_text_status:!1,insufficent_button:!1,submit_button:!0,totalAmountRowStatus:0,expenseCompanyLists:[],datas:[],chartOfAccounts:[],expensePurposeLists:[],expenseDetailsLists:[],subHeadStatus:0,bankInformationStatus:0,cashInformationStatus:0,bankInformationAccountInfoStatus:0,headOfAccountLists:[],subHeadOfAccountLists:[],form:new Form({rendomNumber:Math.random(1,1e3),voucherType:"",headOfAccounts:"",subHead:"",subHeadMulti:"",item:"",itemAmount:"",expenseHead:"",expenseType:"",expenseAmount:"",expenseCompany:"",expensePurpous:"",mobileNo:"",type:"",companyId:"",email:"",address:"",note:"",available_balance:"",lastBalance:"",cashAmount:"",bankAmount:"",dueAmount:"",branchName:"",accNo:"",paymentType:"",bankTypeEntryId:"",bankEntryId:"",bankAccountId:"",detailsTotalAmount:""}),companyLists:[],showBankNames:[],shopBankAllDatas:[],corporateBankAccountTypes:[],mobileBankAccountTypes:[],paymentTypeLists:[],showBankTypeDatas:[]},"showBankNames",[]),n(t,"showBankAccounts",[]),n(t,"bankMoreInfo",[]),t},components:{Multiselect:a.n(s).a},mounted:function(){this.getData(),this.expenseTypeList(),this.expenseCompanyList(),this.getexpenseHeadList(),this.chartOfAccount()},methods:{clearForm:function(){this.form.subHeadMulti="",this.available_balance_cash_status=!1},create:function(){var t=this;this.loading=!0,this.form.post("/billPaymentReceiveForAll").then((function(e){t.loading=!1,Toast.fire({icon:"success",title:"Entry Successfully"}),t.form.reset(),t.form.rendomNumber=Math.random(1,1e3),t.getData(),t.getExpenseDetailsList(0)})).catch((function(e){t.loading=!1,Toast.fire({icon:"error",title:"Something Missing"})}))},getVoucherCode:function(){var t=this;this.form.headOfCashBook="",this.form.headOfAccounts="",this.subHeadStatus=!1,this.form.subHead="",this.form.subHeadMulti="",this.headOfCashBookLists=[],this.headOfAccountLists=[];var e="getVoucherCode/"+this.form.voucherType;if(axios.get(e).then((function(e){t.form.voucherNo=e.data.code})),1==this.form.voucherType){this.paymentTo="Pay by",this.headOfCashBookTitle="Head Of Cash Book",this.paymentToStatus=!0,this.bankInfo=!1,this.subHeadStatus=!0;var a="getVoucherHeadCashbookCodeNew/"+this.form.voucherType;axios.get(a).then((function(e){t.headOfCashBookLists=e.data.headOfCashBookList,t.subHeadOfAccountLists=e.data.headOfAccountList}))}else if(2==this.form.voucherType){this.paymentTo="Receive by",this.headOfCashBookTitle="Head Of Cash Book",this.paymentToStatus=!0,this.bankInfo=!1,this.subHeadStatus=!0;var s="getVoucherHeadCashbookCodeNew/"+this.form.voucherType;axios.get(s).then((function(e){t.headOfCashBookLists=e.data.headOfCashBookList,t.subHeadOfAccountLists=e.data.headOfAccountList}))}else if(3==this.form.voucherType){this.paymentTo="Pay by",this.headOfCashBookTitle="Head Of Bank Book",this.paymentToStatus=!0,this.bankInfo=!0;var n="getVoucherHeadCashbookCode/"+this.form.voucherType;axios.get(n).then((function(e){t.headOfCashBookLists=e.data.headOfCashBookList,t.headOfAccountLists=e.data.headOfAccountList}))}else if(4==this.form.voucherType){this.paymentTo="Receive by",this.headOfCashBookTitle="Head Of Bank Book",this.paymentToStatus=!0,this.bankInfo=!0;var o="getVoucherHeadCashbookCode/"+this.form.voucherType;axios.get(o).then((function(e){t.headOfCashBookLists=e.data.headOfCashBookList,t.headOfAccountLists=e.data.headOfAccountList}))}else if(5==this.form.voucherType){this.paymentTo="Receive by",this.paymentToStatus=!1,this.bankInfo=!1;var i="getVoucherHeadCashbookCode/"+this.form.voucherType;axios.get(i).then((function(e){t.headOfCashBookLists=e.data.headOfCashBookList,t.headOfAccountLists=e.data.headOfAccountList}))}else if(6==this.form.voucherType){this.paymentTo="Receive by",this.paymentToStatus=!1,this.bankInfo=!1;var r="getVoucherHeadCashbookCode/"+this.form.voucherType;axios.get(r).then((function(e){t.headOfCashBookLists=e.data.headOfCashBookList,t.headOfAccountLists=e.data.headOfAccountList}))}},getSubHeadOfAccounts:function(){var t=this;this.form.subHead="";var e="getSubHeadOfAccounts/"+this.form.headOfAccounts;axios.get(e).then((function(e){t.subHeadStatus=!0,t.subHeadOfAccountLists=e.data.subHeadList}))},calculateAmount:function(t){this.form.dueAmount=this.form.expenseAmount-(this.form.cashAmount+this.form.bankAmount)},calculate:function(t){t.target.value.toString().match(/^\d*(\.\d{1,2})?$/)||""===this.form.amount?this.valid1=!1:(this.valid1=!0,this.form.amount="")},getCompanyByTypes:function(){var t=this;axios.get("getIncomeExpenseCompanyByIEType/"+this.form.type).then((function(e){t.companyLists=e.data.data}))},bankTypeIdCatch:function(){var t=this;axios.get("/bankNameList/"+this.form.bankTypeEntryId).then((function(e){t.showBankNames=e.data.show}))},bankAccountIdCatch:function(){var t=this;axios.get("/bankAccountListWithCard/"+this.form.bankEntryId+"/"+this.form.bankTypeEntryId).then((function(e){t.showBankAccounts=e.data.data}))},getBankMoreInfo:function(){var t=this;axios.get("/bankAccountMoreInfo/"+this.form.bankAccountId).then((function(e){if(t.bankInformationAccountInfoStatus=1,t.form.branchName=e.data.data.bankBranch,t.form.accNo=e.data.data.bankAccountNumber,1==t.form.voucherType){var a="checkBalance/"+e.data.data.accountCode;axios.get(a).then((function(e){t.available_balance_status=!0,t.available_balance_text=e.data.available_balance,t.form.available_balance=e.data.available_balance,t.calculate_available_balance(e.data.available_balance,2)})),t.form.amount>t.form.available_balance?(t.insufficent_bank_balance_text_status=!1,t.submit_button_status=!0,t.available_button_status=!1):t.insufficent_bank_balance_text_status=!1}}))},paymentReceiveType:function(){var t=this;this.insufficent_cash_balance_text_status=!1,this.insufficent_bank_balance_text_status=!1,this.available_balance_cash_status=!1,2==this.form.paymentType?(this.bankInformationStatus=1,this.cashInformationStatus=0):1==this.form.paymentType?(1==this.form.voucherType&&axios.get("/getCashRegister/1").then((function(e){var a="checkBalance/"+e.data.accCode;axios.get(a).then((function(e){t.available_balance_cash_status=!0,t.form.available_balance=e.data.available_balance,t.calculate_available_balance(e.data.available_balance,1)}))})),this.cashInformationStatus=1,this.bankInformationStatus=0):(this.available_balance_cash_status=!1,this.cashInformationStatus=0,this.bankInformationStatus=0)},calculate_available_balance:function(t,e){this.insufficent_cash_balance_text_status=!1,this.insufficent_bank_balance_text_status=!1,this.insufficent_button=!1,this.submit_button=!0,1==e&&(this.form.amount>t?(this.insufficent_cash_balance_text_status=!0,this.insufficent_button=!0,this.submit_button=!1):(this.insufficent_cash_balance_text_status=!1,this.insufficent_button=!1,this.submit_button=!0)),2==e&&(this.form.amount>t?(this.insufficent_bank_balance_text_status=!0,this.insufficent_button=!0,this.submit_button=!1):(this.insufficent_bank_balance_text_status=!1,this.insufficent_button=!1,this.submit_button=!0))},calculate_available_balance_from_amount:function(){this.insufficent_cash_balance_text_status=!1,this.insufficent_bank_balance_text_status=!1,this.insufficent_button=!1,this.submit_button=!0,this.form.amount>this.form.available_balance?(1==this.form.paymentType?(this.insufficent_cash_balance_text_status=!0,this.insufficent_bank_balance_text_status=!1):(this.insufficent_cash_balance_text_status=!1,this.insufficent_bank_balance_text_status=!0),this.insufficent_button=!0,this.submit_button=!1):(this.insufficent_cash_balance_text_status=!1,this.insufficent_bank_balance_text_status=!1,this.insufficent_button=!1,this.submit_button=!0)},expenseTypeList:function(){var t=this;axios.get("expenseTypeList").then((function(e){t.expenseTypeLists=e.data.data}))},getData:function(){var t=this;axios.get("/bankTypeEntryList").then((function(e){t.showBankTypeDatas=e.data.show})),axios.get("/paymentTypeList").then((function(e){t.paymentTypeLists=e.data.data})),axios.get("/addExpense").then((function(e){t.datas=e.data.data}))},expenseCompanyList:function(){var t=this;axios.get("/addIncomeExpenseCompany").then((function(e){t.expenseCompanyLists=e.data.data}))},expensePurposeList:function(){var t=this;axios.get("/getExpensePurposeListById/"+this.form.expenseHead).then((function(e){t.expensePurposeLists=e.data.data}))},getAmount:function(){this.form.lastBalance-this.form.amount>=0?this.form.dueAmount=this.form.lastBalance-this.form.amount:(this.form.dueAmount=0,this.form.amount=this.form.lastBalance),1==this.form.voucherType&&this.calculate_available_balance_from_amount()},getDetailsData:function(){this.getExpenseDetailsList(this.form.expensePurpous)},getExpenseDetailsList:function(t){var e=this;axios.get("/getExpenseDetailsListById/"+t).then((function(t){e.expenseDetailsLists=t.data.data,e.form.expenseAmount=t.data.totalAmount,e.form.dueAmount=t.data.totalAmount,e.totalAmountText=t.data.totalAmount,e.totalAmountRowStatus=t.data.totalAmount}))},expenseItemAdd:function(t){var e=this;this.form.item&&this.form.itemAmount?axios.get("/addExpenseDetailsItem/"+this.form.rendomNumber+"/"+this.form.expensePurpous+"/"+this.form.item+"/"+this.form.itemAmount).then((function(t){t.data.status?(Toast.fire({icon:"success",title:"Item Add Successfull"}),e.form.item="",e.form.itemAmount="",e.getExpenseDetailsList(e.form.expensePurpous)):Toast.fire({icon:"error",title:"Item Not Add"})})):1==t&&Toast.fire({icon:"error",title:"Please enter your item and value"})},deleteExpenseDetailItem:function(t){var e=this;axios.get("/deleteExpenseDetailsItem/"+t).then((function(t){t.data.status?(Toast.fire({icon:"success",title:"Item Delete Successfull"}),e.form.item="",e.form.itemAmount="",e.getExpenseDetailsList(e.form.expensePurpous)):Toast.fire({icon:"error",title:"Item Not Delete"})}))},chartOfAccount:function(){var t=this;axios.get("/chartOfAccount").then((function(e){t.chartOfAccounts=e.data.chartOfAccounts}))},getexpenseHead:function(){var t=this;axios.get("/getExpenseHeadList/"+this.form.expenseType).then((function(e){t.expenseHeadListByIds=e.data.data}))},getexpenseHeadList:function(){var t=this;axios.get("/addexpenseType/").then((function(e){t.expenseHeadLists=e.data.data}))},getLastBalance:function(t){var e=this;this.form.subHead=t.headCode,axios.get("getLastBalanceByAccCode/"+this.form.subHead).then((function(t){e.form.lastBalance=t.data.balance,e.headOfAccountLists=t.data.headAcc,e.form.headOfAccounts=t.data.precode}))},deleteData:function(t){var e=this;axios.delete("/addExpense/"+t).then((function(t){Toast.fire({icon:"success",title:"Delete Successfull"}),e.getData()}))}}},i=a(0),r=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.create()}}},[a("div",{staticClass:"supplier-entry py-4 px-2 comm-form-back-img"},[a("div",{staticClass:"col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color"},[a("div",{staticClass:"form-group"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.rendomNumber,expression:"form.rendomNumber"}],attrs:{type:"hidden"},domProps:{value:t.form.rendomNumber},on:{input:function(e){e.target.composing||t.$set(t.form,"rendomNumber",e.target.value)}}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.voucherType,expression:"form.voucherType"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("voucherType")},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"voucherType",e.target.multiple?a:a[0])},function(e){return t.getVoucherCode()}]}},[a("option",{attrs:{value:""}},[t._v(" Select  ")]),t._v(" "),a("option",{attrs:{value:"1"}},[t._v(" Bill Pay ")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v(" Bill Receive ")])]),t._v(" "),a("has-error",{attrs:{form:t.form,field:"voucherType"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[t._m(2),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.headOfAccounts,expression:"form.headOfAccounts"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("headOfAccounts")},attrs:{disabled:"",required:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"headOfAccounts",e.target.multiple?a:a[0])},function(e){return t.getSubHeadOfAccounts()}]}},[a("option",{attrs:{value:""}},[t._v(" ---------------- ")]),t._v(" "),t._l(t.headOfAccountLists,(function(e){return a("option",{domProps:{value:e.headCode}},[t._v(" "+t._s(e.headName)+" ")])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"headOfAccounts"}})],1),t._v(" "),t.subHeadStatus?a("div",{staticClass:"form-group"},[t._m(3),t._v(" "),a("multiselect",{staticClass:"form-control",class:{"is-invalid":t.form.errors.has("productSupplierId")},staticStyle:{padding:"0px !important","padding-bottom":"3px !important"},attrs:{label:"headName",placeholder:"-------",options:t.subHeadOfAccountLists,"show-labels":!1},on:{input:t.getLastBalance},model:{value:t.form.subHeadMulti,callback:function(e){t.$set(t.form,"subHeadMulti",e)},expression:"form.subHeadMulti"}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.subHead,expression:"form.subHead"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("subHead")},staticStyle:{display:"none"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"subHead",e.target.multiple?a:a[0])},function(e){return t.getLastBalance()}]}},t._l(t.subHeadOfAccountLists,(function(e){return a("option",{domProps:{value:e.headCode}},[t._v(" "+t._s(e.headName)+" ")])})),0),t._v(" "),a("has-error",{attrs:{form:t.form,field:"subHead"}})],1):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[t._m(4),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lastBalance,expression:"form.lastBalance"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("lastBalance")},attrs:{type:"text",readonly:"",name:"lastBalance"},domProps:{value:t.form.lastBalance},on:{input:function(e){e.target.composing||t.$set(t.form,"lastBalance",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"lastBalance"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[t._m(5),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.amount,expression:"form.amount"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("amount")},attrs:{type:"text",autocomplete:"off",name:"amount",min:"0"},domProps:{value:t.form.amount},on:{keyup:[function(e){return e.preventDefault(),t.getAmount()},t.calculate],input:function(e){e.target.composing||t.$set(t.form,"amount",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"amount"}}),t._v(" "),t.valid1?a("span",{staticStyle:{color:"red"}},[t._v("Negative and Character value Not Allowed")]):t._e()],1),t._v(" "),a("div",{staticClass:"form-group"},[t._m(6),t._v(" "),t.available_balance_cash_status?a("span",{staticClass:"badge badge-primary"},[t._v("\n                      "+t._s(t.form.available_balance)+"\n                    ")]):t._e(),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.paymentType,expression:"form.paymentType"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("paymentType")},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"paymentType",e.target.multiple?a:a[0])},function(e){return t.paymentReceiveType()}]}},[a("option",{attrs:{value:""}},[t._v(" Select Payment Type ")]),t._v(" "),t._l(t.paymentTypeLists,(function(e){return e.id<3?a("option",{domProps:{value:e.id}},[t._v(" "+t._s(e.paymentType))]):t._e()}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"paymentType"}}),t._v(" "),t.insufficent_cash_balance_text_status?a("small",{staticClass:"badge badge-danger"},[t._v("\n                      Insufficent Balance\n                    ")]):t._e()],1),t._v(" "),t.cashInformationStatus?a("div",[a("div",{staticClass:"form-group"},[a("label",[t._v(" Person Name ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.personName,expression:"form.personName"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("personName")},attrs:{type:"text",name:"personName"},domProps:{value:t.form.personName},on:{input:function(e){e.target.composing||t.$set(t.form,"personName",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"personName"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v(" Person Mobile No ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.personMobileNo,expression:"form.personMobileNo"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("personMobileNo")},attrs:{type:"text",name:"personMobileNo"},domProps:{value:t.form.personMobileNo},on:{input:function(e){e.target.composing||t.$set(t.form,"personMobileNo",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"personMobileNo"}})],1)]):t._e(),t._v(" "),t.bankInformationStatus?a("div",[a("div",{staticClass:"form-group"},[a("label",[t._v("Bank Type Name")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.bankTypeEntryId,expression:"form.bankTypeEntryId"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("bankTypeEntryId")},attrs:{name:"bankTypeEntryId"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"bankTypeEntryId",e.target.multiple?a:a[0])},function(e){return e.preventDefault(),t.bankTypeIdCatch()}]}},[a("option",{attrs:{value:""}},[t._v("Select One")]),t._v(" "),t._l(t.showBankTypeDatas,(function(e){return a("option",{domProps:{value:e.bankTypeEntryId}},[t._v(" \n                      "+t._s(e.bankTypeEntryName))])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"bankTypeEntryId"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v(" Bank Name ")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.bankEntryId,expression:"form.bankEntryId"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("bankEntryId")},attrs:{name:"bankEntryId"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"bankEntryId",e.target.multiple?a:a[0])},function(e){return e.preventDefault(),t.bankAccountIdCatch()}]}},[a("option",{attrs:{value:""}},[t._v("Select Bank Name")]),t._v(" "),t._l(t.showBankNames,(function(e){return a("option",{domProps:{value:e.bankEntryId}},[t._v(" "+t._s(e.bankName))])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"bankEntryId"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v(" Account No\n                   "),t.available_balance_status?a("span",{staticClass:"badge badge-primary"},[t._v("\n                     "+t._s(t.available_balance_text)+"\n                   ")]):t._e()]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.available_balance,expression:"form.available_balance"}],attrs:{type:"hidden"},domProps:{value:t.form.available_balance},on:{input:function(e){e.target.composing||t.$set(t.form,"available_balance",e.target.value)}}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.bankAccountId,expression:"form.bankAccountId"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("bankAccountId")},attrs:{name:"bankAccountId"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"bankAccountId",e.target.multiple?a:a[0])},function(e){return t.getBankMoreInfo()}]}},[a("option",{attrs:{value:""}},[t._v("Select Bank Account")]),t._v(" "),t._l(t.showBankAccounts,(function(e){return a("option",{domProps:{value:e.bankId}},[e.bankAccountName?a("span",[t._v("\n                       "+t._s(e.bankAccountName)+" ("+t._s(e.bankAccountNumber)+")")]):a("span",[t._v("\n                       "+t._s(e.bankAccountNumber)+" ")])])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"bankAccountId"}}),t._v(" "),t.insufficent_bank_balance_text_status?a("small",{staticClass:"badge badge-danger"},[t._v("\n                    Insufficient Balance\n                  ")]):t._e()],1),t._v(" "),t.bankInformationAccountInfoStatus?a("div",[a("div",{staticClass:"form-group"},[a("label",[t._v(" Branch Name ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.branchName,expression:"form.branchName"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.form.branchName},on:{input:function(e){e.target.composing||t.$set(t.form,"branchName",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v(" Account No ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.accNo,expression:"form.accNo"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.form.accNo},on:{input:function(e){e.target.composing||t.$set(t.form,"accNo",e.target.value)}}})])]):t._e()]):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v(" Due Amount ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.dueAmount,expression:"form.dueAmount"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("dueAmount")},attrs:{type:"number",readonly:"",name:"dueAmount"},domProps:{value:t.form.dueAmount},on:{input:function(e){e.target.composing||t.$set(t.form,"dueAmount",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"dueAmount"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v(" Note ")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.note,expression:"form.note"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("note")},attrs:{type:"text",name:"note"},domProps:{value:t.form.note},on:{input:function(e){e.target.composing||t.$set(t.form,"note",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"note"}})],1)])]),t._v(" "),a("div",{staticClass:"d-block pt-3 pb-4 card-footer overflow-hidden"},[a("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12"},[a("button",{staticClass:"btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left",attrs:{type:"reset"},on:{click:function(e){return t.clearForm()}}},[t._m(7),t._v(" "),a("span",{staticClass:"mr-1"},[t._v(" Clear ")])]),t._v(" "),t.submit_button?a("button",{staticClass:"btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right",attrs:{type:"submit",disabled:t.loading}},[t.loading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):a("span",{staticClass:"mr-2 opacity-7"},[a("i",{staticClass:"fa fa-paper-plane"})]),t._v("Submit")]):t._e(),t._v(" "),t.insufficent_button?a("button",{staticClass:"mr-2 btn-pill btn-hover-shine btn btn-danger",attrs:{type:"button"}},[t._v("Submit")]):t._e()])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header-tab card-header alert-info"},[e("div",{staticClass:"card-header-title font-size-lg text-capitalize font-weight-normal"},[e("i",{staticClass:"header-icon lnr-pencil icon-gradient bg-premium-dark"}),this._v(" "),e("h4",[this._v(" Bill Pay & Receive ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Type  "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Head Of Accounts "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Sub Head  "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Balance "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("  Amount "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Payment Type "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"mr-2 opacity-7"},[e("i",{staticClass:"fa fa-undo "})])}],!1,null,null,null);e.default=r.exports}}]);