(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{841:function(t,e,a){"use strict";a.r(e);var o=a(1),n=a.n(o);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var i={data:function(){var t;return r(t={paidDateText:"",loading:!1,month:0,mobile_bank_info:0,agent_bank_info:0,corporate_bank_info:0,howMuchTimeStatus:!1,loanPayTypeStatus:!0,bankInformationStatus:0,cashInformationStatus:0,bankInformationAccountInfoStatus:0,moment:n.a,form:new Form({branchName:"",accNo:"",loanProviderTypeId:"",loanProviderId:"",interestType:"",loanPayType:"",loanPayTypeId:"",howMuchTime:"",loanMainAmount:"",loanPaidAmount:"",installmentAmount:"",paidDate:"",paymentType:"",bankTypeEntryId:"",bankEntryId:"",bankAccountId:"",loanProviderLoanId:"",status:1}),getInterestTypeLists:[],getInterestTimeTypeLists:[],loanProviderTypeLists:[],loanProviderLists:[],getLoanPayTypeLists:[],showBankNames:[],shopBankAllDatas:[],corporateBankAccountTypes:[],mobileBankAccountTypes:[],loanProviderListByIds:[],loanProviderLoanListByIds:[],paymentTypeLists:[],showBankTypeDatas:[]},"showBankNames",[]),r(t,"showBankAccounts",[]),r(t,"bankMoreInfo",[]),r(t,"invalid",!1),t},mounted:function(){this.getData(),this.paymentTypeList(),this.showloanProviderType(),this.getInterestTypeList(),this.getInterestTimeTypeList(),this.getLoanPayTypeList(),this.showBankType()},methods:{create:function(){var t=this;this.loading=!0,this.form.post("/addInstallmentFromReceiver").then((function(e){t.loading=!1,e.data.changebankName?Toast.fire({icon:"error",title:"Change Your Bank Name"}):(Toast.fire({icon:"success",title:"Loan Receive Successfully"}),t.howMuchTimeStatus=!1,t.loanPayTypeStatus=!0,t.bankInformationStatus=0,t.cashInformationStatus=0,t.bankInformationAccountInfoStatus=0,t.form.reset(),t.getData())})).catch((function(e){t.loading=!1,Toast.fire({icon:"error",title:"Something Missing"})}))},calculate:function(t){t.target.value.toString().match(/^\d*(\.\d{1,2})?$/)||""===this.form.installmentAmount?this.invalid=!1:(this.invalid=!0,this.form.installmentAmount="")},getData:function(){var t=this;axios.get("/addProviderLoanReceive").then((function(e){t.shopBankAllDatas=e.data.data}))},getProviderInformation:function(){var t=this;axios.get("/getLoanReceiverInformation/"+this.form.loanProviderLoanId).then((function(e){t.form.interestType=e.data.interestType,t.form.loanPayType=e.data.loanPayType,t.form.loanPayTypeId=e.data.loanPayTypeId,t.form.interestTimeType=e.data.interestTimeType,t.form.howMuchTime=e.data.howMuchTime,t.form.loanMainAmount=e.data.loanMainAmount,t.form.installmentAmount=e.data.monthlyAmount,t.form.loanDueAmount=e.data.loanDueAmount,t.form.loanPaidAmount=e.data.loanPaidAmount,t.form.paidDate=e.data.paidDate,t.form.bankAccountId=e.data.bankAccountId}))},getProviderLoanInformation:function(){var t=this;axios.get("/getLoanReceiverLoanInformation/1/"+this.form.loanProviderId).then((function(e){t.loanProviderLoanListByIds=e.data.data}))},showloanProviderType:function(){var t=this;axios.get("/getLoanProviderTypeList").then((function(e){t.loanProviderTypeLists=e.data.data}))},getInterestTypeList:function(){var t=this;axios.get("/getInterestTypeList/0").then((function(e){t.getInterestTypeLists=e.data.data}))},getInterestTimeTypeList:function(){var t=this;axios.get("/getInterestTimeTypeList").then((function(e){t.getInterestTimeTypeLists=e.data.data}))},getLoanPayTypeList:function(){var t=this;axios.get("/getLoanPayTypeList/0").then((function(e){t.getLoanPayTypeLists=e.data.data}))},paymentTypeList:function(){var t=this;axios.get("/paymentTypeList").then((function(e){t.paymentTypeLists=e.data.data}))},getBankMoreInfo:function(){var t=this;axios.get("/bankAccountMoreInfo/"+this.form.bankAccountId).then((function(e){t.bankInformationAccountInfoStatus=1,t.form.branchName=e.data.data.bankBranch,t.form.accNo=e.data.data.bankAccountNumber}))},paymentReceiveType:function(){2==this.form.paymentType?(this.bankInformationStatus=1,this.cashInformationStatus=0):1==this.form.paymentType?(this.cashInformationStatus=1,this.bankInformationStatus=0):(this.cashInformationStatus=0,this.bankInformationStatus=0)},showBankType:function(){var t=this;axios.get("/bankTypeEntryList").then((function(e){t.showBankTypeDatas=e.data.show}))},showloanProviderList:function(){var t=this;axios.get("/getLoanProviderList").then((function(e){t.loanProviderLists=e.data.data}))},bankTypeIdCatch:function(){var t=this;axios.get("/bankNameList/"+this.form.bankTypeEntryId).then((function(e){t.showBankNames=e.data.show}))},bankAccountIdCatch:function(){var t=this;axios.get("/bankAccountListWithCard/"+this.form.bankEntryId+"/"+this.form.bankTypeEntryId).then((function(e){t.showBankAccounts=e.data.data}))},loanProviderTypeIdCatch:function(){var t=this;this.form.loanProviderTypeId>1?axios.get("/getInterestTypeList/1").then((function(e){t.getInterestTypeLists=e.data.data})):axios.get("/getInterestTypeList/0").then((function(e){t.getInterestTypeLists=e.data.data})),axios.get("/loanProviderListById/2/"+this.form.loanProviderTypeId).then((function(e){t.loanProviderListByIds=e.data.data}))},interestType:function(){var t=this;1==this.form.loanProviderTypeId?1==this.form.interestType?this.loanPayTypeStatus=!0:this.loanPayTypeStatus=!1:(axios.get("/getLoanPayTypeList/1").then((function(e){t.getLoanPayTypeLists=e.data.data})),this.loanPayTypeStatus=!0)},interestTime:function(){this.month=this.form.interestTimeType,1==this.form.interestTimeType?this.paidDateText="Paid Date":2==this.form.interestTimeType?this.paidDateText="Weekly Day Name":3==this.form.interestTimeType?this.paidDateText="Paid Date":3==this.form.interestTimeType&&(this.paidDateText="Month Name"),1==this.form.loanPayType&&1==this.form.loanPayType?this.howMuchTimeStatus=!0:this.howMuchTimeStatus=!1},deleteBankEntry:function(t){var e=this;axios.delete("/addBank/"+t).then((function(t){Toast.fire({icon:"success",title:"Shop BankEntry Deleted Successfully"}),e.getData()}))},changeStatus:function(t){var e=this;axios.get("/addBank/"+t).then((function(t){Toast.fire({icon:"success",title:"Shop Bank Status Changed Successfully"}),e.getData()}))}}},s=a(0),l=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"supplier-entry py-4 px-2 comm-form-back-img"},[a("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.create()}}},[a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/loanManagement"}},[a("svg",{staticClass:"bi bi-arrow-left",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}})]),t._v("\n              Back ")]),t._v(" "),a("div",{staticClass:"form-group"},[t._m(1),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.loanProviderTypeId,expression:"form.loanProviderTypeId"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("loanProviderTypeId")},attrs:{name:"loanProviderTypeId"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"loanProviderTypeId",e.target.multiple?a:a[0])},function(e){return e.preventDefault(),t.loanProviderTypeIdCatch()}]}},[a("option",{attrs:{value:""}},[t._v("Select One")]),t._v(" "),t._l(t.loanProviderTypeLists,(function(e){return 1==e.id?a("option",{domProps:{value:e.id}},[t._v(" "+t._s(e.type)+"/Company")]):t._e()}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"loanProviderTypeId"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[t._m(2),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.loanProviderId,expression:"form.loanProviderId"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("loanProviderId")},attrs:{name:"loanProviderId"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"loanProviderId",e.target.multiple?a:a[0])},function(e){return t.getProviderLoanInformation()}]}},[a("option",{attrs:{value:""}},[t._v("Select One")]),t._v(" "),t._l(t.loanProviderListByIds,(function(e){return a("option",{domProps:{value:e.id}},[t._v(" \n                    "+t._s(e.providerName)+"\n                    "),e.providerBranchName?a("span",[t._v("\n                         ("+t._s(e.providerBranchName)+")\n                    ")]):t._e()])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"loanProviderId"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[t._m(3),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.loanProviderLoanId,expression:"form.loanProviderLoanId"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("loanProviderLoanId")},attrs:{name:"loanProviderLoanId"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"loanProviderLoanId",e.target.multiple?a:a[0])},function(e){return t.getProviderInformation()}]}},[a("option",{attrs:{value:""}},[t._v("Select One")]),t._v(" "),t._l(t.loanProviderLoanListByIds,(function(e){return a("option",{domProps:{value:e.id}},[t._v(" \n                    "+t._s(e.loanMainAmount)+"\n                    \n                      ("+t._s(t.moment(e.created_at).format("DD MMMM YYYY"))+")\n                    \n                    ")])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"loanProviderLoanId"}})],1),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"form-group col-md-12"},[a("label",[t._v(" Interest Type ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.interestType,expression:"form.interestType"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("interestType")},attrs:{type:"text",readonly:"",name:"interestType"},domProps:{value:t.form.interestType},on:{input:function(e){e.target.composing||t.$set(t.form,"interestType",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"interestType"}})],1),t._v(" "),a("div",{staticClass:"form-group col-12"},[a("label",[t._v(" Loan Pay Type ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.loanPayTypeId,expression:"form.loanPayTypeId"}],attrs:{type:"hidden"},domProps:{value:t.form.loanPayTypeId},on:{input:function(e){e.target.composing||t.$set(t.form,"loanPayTypeId",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.loanPayType,expression:"form.loanPayType"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("loanPayType")},attrs:{type:"text",readonly:"",name:"loanPayType"},domProps:{value:t.form.loanPayType},on:{input:function(e){e.target.composing||t.$set(t.form,"loanPayType",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"loanPayType"}})],1),t._v(" "),a("div",{staticClass:"form-group col-12"},[a("label",[t._v(" Interest Time Type ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.interestTimeType,expression:"form.interestTimeType"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("interestTimeType")},attrs:{type:"text",readonly:"",name:"interestTimeType"},domProps:{value:t.form.interestTimeType},on:{input:function(e){e.target.composing||t.$set(t.form,"interestTimeType",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"interestTimeType"}})],1),t._v(" "),a("div",{staticClass:"form-group col-12"},[a("label",[t._v(" How much time ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.howMuchTime,expression:"form.howMuchTime"}],staticClass:"form-control",attrs:{type:"text",readonly:"",name:"howMuchTime"},domProps:{value:t.form.howMuchTime},on:{input:function(e){e.target.composing||t.$set(t.form,"howMuchTime",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-12"},[t._m(4),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.loanMainAmount,expression:"form.loanMainAmount"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("loanMainAmount")},attrs:{type:"text",readonly:"",name:"loanMainAmount"},domProps:{value:t.form.loanMainAmount},on:{input:function(e){e.target.composing||t.$set(t.form,"loanMainAmount",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"loanMainAmount"}})],1),t._v(" "),a("div",{staticClass:"form-group col-12"},[a("label",[t._v(" Receive  Amount ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.loanPaidAmount,expression:"form.loanPaidAmount"}],staticClass:"form-control",attrs:{type:"text",readonly:"",name:"paidDate"},domProps:{value:t.form.loanPaidAmount},on:{input:function(e){e.target.composing||t.$set(t.form,"loanPaidAmount",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-12"},[a("label",[t._v(" Due Amount ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.loanDueAmount,expression:"form.loanDueAmount"}],staticClass:"form-control",attrs:{type:"text",readonly:"",name:"paidDate"},domProps:{value:t.form.loanDueAmount},on:{input:function(e){e.target.composing||t.$set(t.form,"loanDueAmount",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-12"},[a("label",[t._v(" "+t._s(t.paidDateText)+" ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.paidDate,expression:"form.paidDate"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("paidDate")},attrs:{type:"date",readonly:"",name:"paidDate"},domProps:{value:t.form.paidDate},on:{input:function(e){e.target.composing||t.$set(t.form,"paidDate",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"paidDate"}})],1),t._v(" "),a("div",{staticClass:"form-group col-12"},[t._m(5),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.installmentAmount,expression:"form.installmentAmount"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("installmentAmount")},attrs:{type:"text",name:"installmentAmount"},domProps:{value:t.form.installmentAmount},on:{keyup:t.calculate,input:function(e){e.target.composing||t.$set(t.form,"installmentAmount",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"installmentAmount"}}),t._v(" "),t.invalid?a("span",{staticStyle:{color:"red"}},[t._v("Negative And Character Value Not Allowed")]):t._e()],1),t._v(" "),a("div",{staticClass:"form-group col-md-12"},[t._m(6),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.paymentType,expression:"form.paymentType"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("paymentType")},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"paymentType",e.target.multiple?a:a[0])},function(e){return t.paymentReceiveType()}]}},[a("option",{attrs:{value:""}},[t._v(" Select Payment Type ")]),t._v(" "),t._l(t.paymentTypeLists,(function(e){return a("option",{domProps:{value:e.id}},[t._v(" "+t._s(e.paymentType))])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"paymentType"}})],1)]),t._v(" "),t.cashInformationStatus?a("div",[a("div",{staticClass:"form-group"},[a("label",[t._v(" Person Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.personName,expression:"form.personName"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("personName")},attrs:{type:"text",name:"personName"},domProps:{value:t.form.personName},on:{input:function(e){e.target.composing||t.$set(t.form,"personName",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"personName"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v(" Person Mobile No")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.personMobileNo,expression:"form.personMobileNo"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("personMobileNo")},attrs:{type:"text",name:"personMobileNo"},domProps:{value:t.form.personMobileNo},on:{input:function(e){e.target.composing||t.$set(t.form,"personMobileNo",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"personMobileNo"}})],1)]):t._e(),t._v(" "),t.bankInformationStatus?a("div",[a("div",{staticClass:"form-group"},[a("label",[t._v("Bank Type Name")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.bankTypeEntryId,expression:"form.bankTypeEntryId"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("bankTypeEntryId")},attrs:{name:"bankTypeEntryId"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"bankTypeEntryId",e.target.multiple?a:a[0])},function(e){return e.preventDefault(),t.bankTypeIdCatch()}]}},[a("option",{attrs:{value:""}},[t._v("Select One")]),t._v(" "),t._l(t.showBankTypeDatas,(function(e){return a("option",{domProps:{value:e.bankTypeEntryId}},[t._v(" "+t._s(e.bankTypeEntryName))])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"bankTypeEntryId"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Bank Name")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.bankEntryId,expression:"form.bankEntryId"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("bankEntryId")},attrs:{name:"bankEntryId"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"bankEntryId",e.target.multiple?a:a[0])},function(e){return e.preventDefault(),t.bankAccountIdCatch()}]}},[a("option",{attrs:{value:""}},[t._v("Select Bank Name")]),t._v(" "),t._l(t.showBankNames,(function(e){return a("option",{domProps:{value:e.bankEntryId}},[t._v(" "+t._s(e.bankName))])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"bankEntryId"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Bank Account")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.bankAccountId,expression:"form.bankAccountId"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("bankAccountId")},attrs:{name:"bankAccountId"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"bankAccountId",e.target.multiple?a:a[0])},function(e){return t.getBankMoreInfo()}]}},[a("option",{attrs:{value:""}},[t._v("Select Bank Account")]),t._v(" "),t._l(t.showBankAccounts,(function(e){return a("option",{domProps:{value:e.bankId}},[t._v(" "+t._s(e.bankAccountName))])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"bankAccountId"}})],1),t._v(" "),t.bankInformationAccountInfoStatus?a("div",[a("div",{staticClass:"form-group"},[a("label",[t._v(" Branch Name ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.branchName,expression:"form.branchName"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.form.branchName},on:{input:function(e){e.target.composing||t.$set(t.form,"branchName",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v(" Account No ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.accNo,expression:"form.accNo"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.form.accNo},on:{input:function(e){e.target.composing||t.$set(t.form,"accNo",e.target.value)}}})])]):t._e()]):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[t._m(7),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.note,expression:"form.note"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("note")},attrs:{name:"note"},domProps:{value:t.form.note},on:{input:function(e){e.target.composing||t.$set(t.form,"note",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"note"}})],1),t._v(" "),a("div",{staticClass:"text-right pt-3"},[a("button",{staticClass:"mr-2 btn-pill btn-hover-shine btn btn-primary",attrs:{type:"submit",disabled:t.loading}},[t.loading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):a("span",{staticClass:"mr-2 opacity-7"},[a("i",{staticClass:"fa fa-paper-plane"})]),t._v("Submit")])])],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header alert-info"},[e("h3",[this._v(" Loan Installment Receive ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Loan Receiver Type "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Loan Receiver "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Loan  "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Loan Amount "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("   \n                   Installment\n                    Amount "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Payment  Type "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Note "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])}],!1,null,null,null);e.default=l.exports}}]);