(window.webpackJsonp=window.webpackJsonp||[]).push([[413],{885:function(e,t,n){"use strict";n.r(t);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={data:function(){var e;return o(e={expenseTypeLists:[],loading:!1,expenseHeadListByIds:[],expenseHeadLists:[],paidDateText:"",receiveAmountText:"",totalAmountText:"",payment_type_status:1,minimumAmount:0,expenseTitleStatus:0,securityAmountForShow:0,withdrawAdjustmentStatus:0,expenseCompanyLists:[],datas:[],chartOfAccounts:[],expensePurposeLists:[],expenseDetailsLists:[],bankInformationStatus:0,cashInformationStatus:0,bankInformationAccountInfoStatus:0,form:new Form({rendomNumber:Math.random(1,1e3),returnType:"",item:"",itemAmount:"",expenseHead:"",expenseType:"",expenseAmount:"",expenseCompany:"",expensePurpous:"",expenseTitle:"",expenseCode:"",expenseTargetAmount:"",mobileNo:"",email:"",address:"",note:"",cashAmount:"",bankAmount:"",dueAmount:"",branchName:"",accNo:"",paymentType:"",bankTypeEntryId:"",bankEntryId:"",bankAccountId:"",detailsTotalAmount:""}),showBankNames:[],shopBankAllDatas:[],corporateBankAccountTypes:[],mobileBankAccountTypes:[],paymentTypeLists:[],showBankTypeDatas:[]},"showBankNames",[]),o(e,"showBankAccounts",[]),o(e,"bankMoreInfo",[]),o(e,"expensePurposeListViews",[]),o(e,"expenseHaveStatus",0),e},mounted:function(){this.getData(),this.expenseTypeList(),this.expenseCompanyList(),this.getexpenseHeadList(),this.chartOfAccount(),this.expensePurposeListView(),this.paymentTypeList(),this.showBankType()},methods:{create:function(){var e=this;this.loading=!0,this.form.post("/addSecurityMoneyWithdraw").then((function(t){e.loading=!1,Toast.fire({icon:"success",title:"Entry Successfully"}),e.withdrawAdjustmentStatus=0,e.form.reset(),e.getData(),e.getExpenseDetailsList(0)})).catch((function(t){e.loading=!1,Toast.fire({icon:"error",title:"Something Missing"})}))},calculateAmount:function(e){this.form.dueAmount=this.form.expenseAmount-(this.form.cashAmount+this.form.bankAmount)},paymentTypeList:function(){},showBankType:function(){},bankTypeIdCatch:function(){var e=this;axios.get("/bankNameList/"+this.form.bankTypeEntryId).then((function(t){e.showBankNames=t.data.show}))},bankAccountIdCatch:function(){var e=this;axios.get("/bankAccountList/"+this.form.bankEntryId).then((function(t){e.showBankAccounts=t.data.data}))},getBankMoreInfo:function(){var e=this;axios.get("/bankAccountMoreInfo/"+this.form.bankAccountId).then((function(t){e.bankInformationAccountInfoStatus=1,e.form.branchName=t.data.data.bankBranch,e.form.accNo=t.data.data.bankAccountNumber}))},paymentReceiveType:function(){var e=this;axios.get("/bankTypeEntryList").then((function(t){e.showBankTypeDatas=t.data.show})),2==this.form.paymentType?(this.form.bankAmount=this.form.expenseAmount,this.form.cashAmount="",this.bankInformationStatus=1,this.cashInformationStatus=0):1==this.form.paymentType?(this.cashInformationStatus=1,this.bankInformationStatus=0,this.form.bankAmount="",this.form.cashAmount=this.form.expenseAmount):(this.cashInformationStatus=0,this.bankInformationStatus=0,this.form.bankAmount="",this.form.cashAmount="")},expenseTypeList:function(){var e=this;axios.get("expenseTypeList").then((function(t){e.expenseTypeLists=t.data.data}))},getData:function(){var e=this;axios.get("getSecurityMoneyInfoById/"+this.$route.params.id).then((function(t){e.datas=t.data.data,e.securityAmountForShow=t.data.balance,e.form.expenseAmount=t.data.balance,e.form.expenseType=t.data.data.expenseType,e.form.expenseHead=t.data.data.expenseHead,e.form.expensePurpous=t.data.data.expensePurpous,e.form.expenseTitle=t.data.data.expenseTitle,e.form.expenseCode=t.data.expenseCode})),axios.get("/addExpenseProvider/").then((function(t){e.expensePurposeListViews=t.data.data}))},expenseCompanyList:function(){var e=this;axios.get("/addIncomeExpenseCompany").then((function(t){e.expenseCompanyLists=t.data.data}))},expensePurposeList:function(){var e=this;axios.get("/getExpensePurposeListById/"+this.form.expenseHead).then((function(t){e.expensePurposeLists=t.data.data}))},expensePurposeListView:function(){},getAmount:function(){this.form.receiveAmount>this.form.expenseTargetAmount?this.form.receiveAmount=this.form.expenseTargetAmount:this.form.receiveAmount>this.form.expenseAmount?this.form.receiveAmount=this.form.expenseAmount:this.form.receiveAmount=this.form.receiveAmount},getDetailsData:function(){this.getExpenseDetailsList(this.form.expensePurpous)},getExpenseDetailsList:function(e){var t=this;axios.get("/getExpenseDetailsListById/"+e).then((function(e){t.expenseDetailsLists=e.data.data,t.form.expenseAmount=e.data.totalAmount,t.form.dueAmount=e.data.totalAmount,t.totalAmountText=e.data.totalAmount,t.totalAmountRowStatus=e.data.totalAmount}))},expenseItemAdd:function(e){var t=this;this.form.item&&this.form.itemAmount?axios.get("/addExpenseDetailsItem/"+this.form.rendomNumber+"/"+this.form.expensePurpous+"/"+this.form.item+"/"+this.form.itemAmount).then((function(e){e.data.status?(Toast.fire({icon:"success",title:"Item Add Successfull"}),t.form.item="",t.form.itemAmount="",t.getExpenseDetailsList(t.form.expensePurpous)):Toast.fire({icon:"error",title:"Item Not Add"})})):1==e&&Toast.fire({icon:"error",title:"Please enter your item and value"})},deleteExpenseDetailItem:function(e){var t=this;axios.get("/deleteExpenseDetailsItem/"+e).then((function(e){e.data.status?(Toast.fire({icon:"success",title:"Item Delete Successfull"}),t.form.item="",t.form.itemAmount="",t.getExpenseDetailsList(t.form.expensePurpous)):Toast.fire({icon:"error",title:"Item Not Delete"})}))},chartOfAccount:function(){var e=this;axios.get("/chartOfAccount").then((function(t){e.chartOfAccounts=t.data.chartOfAccounts})),axios.get("/paymentTypeList").then((function(t){e.paymentTypeLists=t.data.data}))},withdrawAdjustment:function(){var e=this;2==this.form.returnType?axios.get("/checkSecurityExpenseInStatement/"+this.form.expensePurpous).then((function(t){1==t.data.status?(e.withdrawAdjustmentStatus=1,e.form.expenseAmount=e.securityAmountForShow,axios.get("/checkBalance/"+e.form.expenseCode).then((function(t){e.form.expenseTargetAmount=Math.abs(t.data.available_balance)})),e.minimumAmount=e.securityAmountForShow,e.payment_type_status=0,e.expenseTitleStatus=1,e.form.expenseTitle="",e.receiveAmountText="Adjustment"):(e.withdrawAdjustmentStatus=0,Toast.fire({icon:"error",title:"Please expense entry for security adjust."}))})):1==this.form.returnType?(this.withdrawAdjustmentStatus=1,this.form.expenseAmount=this.securityAmountForShow,this.form.expenseTargetAmount=this.securityAmountForShow,this.minimumAmount=this.securityAmountForShow,this.payment_type_status=1,this.expenseTitleStatus=0,this.form.expenseTitle=this.datas.expenseTitle,this.receiveAmountText="Withdraw"):this.withdrawAdjustmentStatus=0},getexpenseHeadList:function(){var e=this;axios.get("/addexpenseType/").then((function(t){e.expenseHeadLists=t.data.data}))},getIncomeExpenseCompanyInfo:function(){var e=this;axios.get("/getIncomeExpenseCompany/"+this.form.expensePurpous).then((function(t){e.form.mobileNo=t.data.data.mobileNo,e.form.email=t.data.data.email,e.form.address=t.data.data.address}))},deleteData:function(e){var t=this;axios.delete("/addExpense/"+e).then((function(e){Toast.fire({icon:"success",title:"Delete Successfull"}),t.getData()}))}}},s=n(0),r=Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("div",{staticClass:"card"},[e._m(0),e._v(" "),n("div",{staticClass:"supplier-entry py-4 px-2"},[n("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border"},[n("table",{staticClass:"table table-bordered"},[n("tr",[n("th",[e._v("\n                       Purpose\n                   ")]),e._v(" "),n("td",e._l(e.expensePurposeListViews,(function(t){return e.datas.expensePurpous==t.accountCodeSecurityDeposit?n("span",{attrs:{value:t.id}},[e._v(" \n                     "+e._s(t.expensePurpous)+" \n                 ")]):e._e()})),0)]),e._v(" "),n("tr",[n("th",[e._v("\n                       Person / Company\n                   ")]),e._v(" "),n("td",e._l(e.expenseCompanyLists,(function(t){return e.datas.expenseCompany==t.id?n("span",{attrs:{value:t.id}},[e._v("\n                     "+e._s(t.companyName)+" \n                     "),n("br"),e._v("\n                     "+e._s(t.mobileNo)+" \n                 ")]):e._e()})),0)]),e._v(" "),n("tr",[n("th",[e._v("\n                       Title\n                   ")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.expenseType,expression:"form.expenseType"}],attrs:{type:"hidden"},domProps:{value:e.form.expenseType},on:{input:function(t){t.target.composing||e.$set(e.form,"expenseType",t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.expenseHead,expression:"form.expenseHead"}],attrs:{type:"hidden"},domProps:{value:e.form.expenseHead},on:{input:function(t){t.target.composing||e.$set(e.form,"expenseHead",t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.expensePurpous,expression:"form.expensePurpous"}],attrs:{type:"hidden"},domProps:{value:e.form.expensePurpous},on:{input:function(t){t.target.composing||e.$set(e.form,"expensePurpous",t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.expenseTitle,expression:"form.expenseTitle"}],attrs:{type:"hidden"},domProps:{value:e.form.expenseTitle},on:{input:function(t){t.target.composing||e.$set(e.form,"expenseTitle",t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.expenseCode,expression:"form.expenseCode"}],attrs:{type:"hidden"},domProps:{value:e.form.expenseCode},on:{input:function(t){t.target.composing||e.$set(e.form,"expenseCode",t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.expenseTargetAmount,expression:"form.expenseTargetAmount"}],attrs:{type:"hidden"},domProps:{value:e.form.expenseTargetAmount},on:{input:function(t){t.target.composing||e.$set(e.form,"expenseTargetAmount",t.target.value)}}}),e._v("\n                       \n\n                        "+e._s(e.datas.expenseTitle)+" ")])]),e._v(" "),n("tr",[n("th",[e._v("\n                       Security Amount\n                   ")]),e._v(" "),n("td",[e._v(" "+e._s(e.datas.mainSecurityAmount)+" ")])])]),e._v(" "),n("form",{staticClass:"mt-3",on:{submit:function(t){return t.preventDefault(),e.create()}}},[n("div",{staticClass:"form-group"},[n("label",[e._v(" Return Type  ")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.form.returnType,expression:"form.returnType"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("returnType")},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"returnType",t.target.multiple?n:n[0])},function(t){return e.withdrawAdjustment()}]}},[n("option",{attrs:{value:""}},[e._v(" Select ")]),e._v(" "),n("option",{attrs:{value:"1"}},[e._v(" Withdraw ")]),e._v(" "),n("option",{attrs:{value:"2"}},[e._v(" Adjustment ")])]),e._v(" "),n("has-error",{attrs:{form:e.form,field:"returnType"}})],1),e._v(" "),e.withdrawAdjustmentStatus?n("div",[n("div",{staticClass:"form-group"},[n("label",[e._v(" Security Amount ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.expenseAmount,expression:"form.expenseAmount"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("expenseAmount")},attrs:{type:"number",readonly:"",name:"expenseAmount"},domProps:{value:e.form.expenseAmount},on:{input:function(t){t.target.composing||e.$set(e.form,"expenseAmount",t.target.value)}}}),e._v(" "),n("has-error",{attrs:{form:e.form,field:"expenseAmount"}})],1),e._v(" "),e.expenseTitleStatus?n("div",{staticClass:"form-group"},[n("label",[e._v(" Expense Title ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.expenseTitle,expression:"form.expenseTitle"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("expenseTitle")},attrs:{type:"text"},domProps:{value:e.form.expenseTitle},on:{input:function(t){t.target.composing||e.$set(e.form,"expenseTitle",t.target.value)}}}),e._v(" "),n("has-error",{attrs:{form:e.form,field:"expenseTitle"}})],1):e._e(),e._v(" "),n("div",{staticClass:"form-group"},[n("label",[e._v(" "+e._s(e.receiveAmountText)+" Amount ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.receiveAmount,expression:"form.receiveAmount"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("receiveAmount")},attrs:{type:"number",name:"receiveAmount",min:"1",max:e.securityAmountForShow},domProps:{value:e.form.receiveAmount},on:{keyup:function(t){return t.preventDefault(),e.getAmount()},input:function(t){t.target.composing||e.$set(e.form,"receiveAmount",t.target.value)}}}),e._v(" "),n("has-error",{attrs:{form:e.form,field:"receiveAmount"}})],1),e._v(" "),e.payment_type_status?n("div",{staticClass:"form-group"},[n("label",[e._v(" Payment Type ")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.form.paymentType,expression:"form.paymentType"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("paymentType")},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"paymentType",t.target.multiple?n:n[0])},function(t){return e.paymentReceiveType()}]}},[n("option",{attrs:{value:""}},[e._v(" Select Payment Type ")]),e._v(" "),e._l(e.paymentTypeLists,(function(t){return n("option",{domProps:{value:t.id}},[e._v(" "+e._s(t.paymentType))])}))],2),e._v(" "),n("has-error",{attrs:{form:e.form,field:"paymentType"}})],1):e._e(),e._v(" "),e.cashInformationStatus?n("div",[n("div",{staticClass:"form-group"},[n("label",[e._v(" Person Name ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.personName,expression:"form.personName"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("personName")},attrs:{type:"text",name:"personName"},domProps:{value:e.form.personName},on:{input:function(t){t.target.composing||e.$set(e.form,"personName",t.target.value)}}}),e._v(" "),n("has-error",{attrs:{form:e.form,field:"personName"}})],1),e._v(" "),n("div",{staticClass:"form-group"},[n("label",[e._v(" Person Mobile No")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.personMobileNo,expression:"form.personMobileNo"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("personMobileNo")},attrs:{type:"text",name:"personMobileNo"},domProps:{value:e.form.personMobileNo},on:{input:function(t){t.target.composing||e.$set(e.form,"personMobileNo",t.target.value)}}}),e._v(" "),n("has-error",{attrs:{form:e.form,field:"personMobileNo"}})],1)]):e._e(),e._v(" "),e.bankInformationStatus?n("div",[n("div",{staticClass:"form-group"},[n("label",[e._v("Bank Type Name")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.form.bankTypeEntryId,expression:"form.bankTypeEntryId"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("bankTypeEntryId")},attrs:{name:"bankTypeEntryId"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"bankTypeEntryId",t.target.multiple?n:n[0])},function(t){return t.preventDefault(),e.bankTypeIdCatch()}]}},[n("option",{attrs:{value:""}},[e._v("Select One")]),e._v(" "),e._l(e.showBankTypeDatas,(function(t){return n("option",{domProps:{value:t.bankTypeEntryId}},[e._v(" "+e._s(t.bankTypeEntryName))])}))],2),e._v(" "),n("has-error",{attrs:{form:e.form,field:"bankTypeEntryId"}})],1),e._v(" "),n("div",{staticClass:"form-group"},[n("label",[e._v("Bank Name")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.form.bankEntryId,expression:"form.bankEntryId"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("bankEntryId")},attrs:{name:"bankEntryId"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"bankEntryId",t.target.multiple?n:n[0])},function(t){return t.preventDefault(),e.bankAccountIdCatch()}]}},[n("option",{attrs:{value:""}},[e._v("Select Bank Name")]),e._v(" "),e._l(e.showBankNames,(function(t){return n("option",{domProps:{value:t.bankEntryId}},[e._v(" "+e._s(t.bankName))])}))],2),e._v(" "),n("has-error",{attrs:{form:e.form,field:"bankEntryId"}})],1),e._v(" "),n("div",{staticClass:"form-group"},[n("label",[e._v("Bank Account")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.form.bankAccountId,expression:"form.bankAccountId"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("bankAccountId")},attrs:{name:"bankAccountId"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"bankAccountId",t.target.multiple?n:n[0])},function(t){return e.getBankMoreInfo()}]}},[n("option",{attrs:{value:""}},[e._v("Select Bank Account")]),e._v(" "),e._l(e.showBankAccounts,(function(t){return n("option",{domProps:{value:t.bankId}},[e._v(" \n                         "+e._s(t.bankAccountNumber))])}))],2),e._v(" "),n("has-error",{attrs:{form:e.form,field:"bankAccountId"}})],1),e._v(" "),e.bankInformationAccountInfoStatus?n("div",[n("div",{staticClass:"form-group"},[n("label",[e._v(" Branch Name ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.branchName,expression:"form.branchName"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:e.form.branchName},on:{input:function(t){t.target.composing||e.$set(e.form,"branchName",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",[e._v(" Account No ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.accNo,expression:"form.accNo"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:e.form.accNo},on:{input:function(t){t.target.composing||e.$set(e.form,"accNo",t.target.value)}}})])]):e._e()]):e._e(),e._v(" "),n("div",{staticClass:"form-group"},[n("label",[e._v(" Note ")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.note,expression:"form.note"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("note")},attrs:{type:"text",name:"note"},domProps:{value:e.form.note},on:{input:function(t){t.target.composing||e.$set(e.form,"note",t.target.value)}}}),e._v(" "),n("has-error",{attrs:{form:e.form,field:"note"}})],1),e._v(" "),n("div",{staticClass:"text-right pt-3"},[n("button",{staticClass:"mr-2 btn-pill btn-hover-shine btn btn-primary",attrs:{type:"submit",disabled:e.loading}},[e.loading?n("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):n("span",{staticClass:"mr-2 opacity-7"},[n("i",{staticClass:"fa fa-paper-plane"})]),e._v("Submit")])])]):e._e()])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.20)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[t("h3",{staticStyle:{color:"black"}},[this._v(" Security Money Withdraw/Adjustment ")])])}],!1,null,null,null);t.default=r.exports}}]);