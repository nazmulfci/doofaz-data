(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{474:function(t,a,e){"use strict";e.r(a);var n=e(1),o=e.n(n),r={data:function(){return{moment:o.a,currencyRate:"",authInfos:[],userName:"",accountInfos:[],howManyBranch:!0,billRequestLists:[],mobileBankInfoStatus:0,bankInfoStatus:0,bankInformationAccountInfoStatus:0,available_balance_cash_status:!1,available_balance_cash_text:"",available_balance_text:"",available_balance_status:!1,submit_button_status:!0,available_button_status:!1,available_text:"",insufficent_cash_balance_text_status:!1,insufficent_bank_balance_text_status:!1,insufficent_balance_text_status:!1,insufficent_button:!1,submit_button:!0,shopBankAllDatas:[],corporateBankAccountTypes:[],mobileBankAccountTypes:[],paymentTypeLists:[],showBankTypeDatas:[],showBankNames:[],showBankAccounts:[],bankMoreInfo:[],showMonthLists:[],form:new Form({paymetMethod:"",amount:"",totalMonth:"1",bankDetils:"",paySlip:"",lastBillDate:""})}},mounted:function(){this.getAccountInfoById(),this.getAuthInfo(),this.getCurrencyRate(),this.view(),this.showBankType(),this.shopBillMonthList()},methods:{view:function(){var t=this;axios.get("/shopBillRequestList/").then((function(a){t.billRequestLists=a.data.data}))},billRequest:function(){var t=this;this.form.post("shopBillRequestEntry").then((function(a){0==a.data.ok?Toast.fire({icon:"error",title:"Your allready send request."}):(Toast.fire({icon:"success",title:"Bill Request Successfull."}),t.form.reset(),t.view())}))},getCurrencyRate:function(){var t=this;axios.get("getCurrencyRate").then((function(a){t.currencyRate=a.data.data,t.form.amount=a.data.data}))},getAuthInfo:function(){var t=this;fetch("getAuthInfo").then((function(t){return t.json()})).then((function(a){t.authInfos=a.data,t.userName=a.userName}))},changeImage:function(t){var a=this,e=t.target.files[0],n=new FileReader;n.onload=function(t){a.form.paySlip=t.target.result,console.log(t.target.result)},n.readAsDataURL(e)},getAccountInfoById:function(){var t=this;fetch("getAccountInfoById").then((function(t){return t.json()})).then((function(a){t.accountInfos=a.data,t.form.lastBillDate=a.data.billingDate}))},calculateBillAmount:function(){var t=this;axios.get("/getShopBillMonthListById/"+this.form.totalMonth).then((function(a){t.form.amount=t.currencyRate*t.form.totalMonth-a.data.data.discountAmount}))},shopBillMonthList:function(){var t=this;axios.get("/getShopBillMonthList").then((function(a){t.showMonthLists=a.data.data}))},showBankType:function(){var t=this;axios.get("/bankTypeEntryList").then((function(a){t.showBankTypeDatas=a.data.show}))},bankTypeIdCatch:function(){var t=this;axios.get("/companyBankNameList/"+this.form.bankTypeEntryId).then((function(a){t.showBankNames=a.data.show,1==t.form.bankTypeEntryId?(t.mobileBankInfoStatus=0,t.bankInfoStatus=1):(t.mobileBankInfoStatus=1,t.bankInfoStatus=0)}))},bankAccountIdCatch:function(){var t=this;axios.get("/companyBankAccountList/"+this.form.bankAccountId).then((function(a){1==t.form.bankTypeEntryId?t.form.bankDetils="A/C Name : "+a.data.data.accountName+"<br>A/C Number : "+a.data.data.accountNumber+"<br>Branch Name : "+a.data.data.brunchName:t.form.bankDetils="A/C Type : "+a.data.data.accountType+"<br>A/C Number : "+a.data.data.accountNumber}))},getBankMoreInfo:function(){var t=this;axios.get("/bankAccountMoreInfo/"+this.form.bankAccountId).then((function(a){t.bankInformationAccountInfoStatus=1,t.form.branchName=a.data.data.bankBranch,t.form.accNo=a.data.data.bankAccountNumber;var e="checkBalance/"+a.data.data.accountCode;axios.get(e).then((function(a){t.available_balance_status=!0,t.available_balance_text=a.data.available_balance,t.form.available_balance=a.data.available_balance})),t.form.bankAmount>t.form.available_balance?(t.insufficent_bank_balance_text_status=!1,t.submit_button_status=!0,t.available_button_status=!1):t.insufficent_bank_balance_text_status=!1}))}}},s=e(0),i=Object(s.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("div",{staticClass:"supplier-entry py-4 px-2"},[e("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.billRequest()}}},[e("div",{staticClass:"form-group"},[t._m(1),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.totalMonth,expression:"form.totalMonth"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("totalMonth")},attrs:{name:"totalMonth"},on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"totalMonth",a.target.multiple?e:e[0])},function(a){return a.preventDefault(),t.calculateBillAmount()}]}},[e("option",{attrs:{value:""}},[t._v("Select Month")]),t._v(" "),t._l(t.showMonthLists,(function(a){return e("option",{domProps:{value:a.month}},[t._v(" "+t._s(a.title)+"  \n                      "),a.discountAmount?e("span",[t._v("\n                        ("+t._s(a.discountText)+")")]):t._e()])}))],2),t._v(" "),e("has-error",{attrs:{form:t.form,field:"totalMonth"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[t._m(2),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.amount,expression:"form.amount"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("amount")},attrs:{type:"text",disabled:""},domProps:{value:t.form.amount},on:{input:function(a){a.target.composing||t.$set(t.form,"amount",a.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lastBillDate,expression:"form.lastBillDate"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("lastBillDate")},attrs:{type:"hidden",disabled:""},domProps:{value:t.form.lastBillDate},on:{input:function(a){a.target.composing||t.$set(t.form,"lastBillDate",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"amount"}})],1),t._v(" "),e("div",[e("div",{staticClass:"form-group"},[t._m(3),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.bankTypeEntryId,expression:"form.bankTypeEntryId"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("bankTypeEntryId")},attrs:{name:"bankTypeEntryId"},on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"bankTypeEntryId",a.target.multiple?e:e[0])},function(a){return a.preventDefault(),t.bankTypeIdCatch()}]}},[e("option",{attrs:{value:""}},[t._v("Select Bank Type ")]),t._v(" "),t._l(t.showBankTypeDatas,(function(a){return e("option",{domProps:{value:a.bankTypeEntryId}},[t._v(" "+t._s(a.bankTypeEntryName))])}))],2),t._v(" "),e("has-error",{attrs:{form:t.form,field:"bankTypeEntryId"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[t._m(4),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.bankAccountId,expression:"form.bankAccountId"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("bankAccountId")},attrs:{name:"bankAccountId"},on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"bankAccountId",a.target.multiple?e:e[0])},function(a){return a.preventDefault(),t.bankAccountIdCatch()}]}},[e("option",{attrs:{value:""}},[t._v(" Select Bank Name ")]),t._v(" "),t._l(t.showBankNames,(function(a){return e("option",{domProps:{value:a.bankEntryId}},[t._v(" "+t._s(a.bankName))])}))],2),t._v(" "),e("has-error",{attrs:{form:t.form,field:"bankAccountId"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[t._m(5),t._v(" "),e("br"),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.bankDetils,expression:"form.bankDetils"}],staticClass:"form-control border bg-light",staticStyle:{height:"auto"},attrs:{type:"hidden"},domProps:{value:t.form.bankDetils},on:{input:function(a){a.target.composing||t.$set(t.form,"bankDetils",a.target.value)}}}),t._v(" "),e("span",{staticClass:"form-control border bg-light pb-2",staticStyle:{height:"auto"},domProps:{innerHTML:t._s(t.form.bankDetils)}})]),t._v(" "),t.mobileBankInfoStatus?e("div",[e("div",{staticClass:"form-group"},[t._m(6),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mbAccountNo,expression:"form.mbAccountNo"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("mbAccountNo")},attrs:{type:"text"},domProps:{value:t.form.mbAccountNo},on:{input:function(a){a.target.composing||t.$set(t.form,"mbAccountNo",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"mbAccountNo"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[t._m(7),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mbTrNo,expression:"form.mbTrNo"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("mbTrNo")},attrs:{type:"text"},domProps:{value:t.form.mbTrNo},on:{input:function(a){a.target.composing||t.$set(t.form,"mbTrNo",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"mbTrNo"}})],1)]):t._e(),t._v(" "),t.bankInfoStatus?e("div",[e("div",{staticClass:"form-group"},[t._m(8),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.bankName,expression:"form.bankName"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("bankName")},attrs:{type:"text"},domProps:{value:t.form.bankName},on:{input:function(a){a.target.composing||t.$set(t.form,"bankName",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"bankName"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[t._m(9),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.accountName,expression:"form.accountName"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("accountName")},attrs:{type:"text"},domProps:{value:t.form.accountName},on:{input:function(a){a.target.composing||t.$set(t.form,"accountName",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"accountName"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[t._m(10),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.accountNumber,expression:"form.accountNumber"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("accountNumber")},attrs:{type:"text"},domProps:{value:t.form.accountNumber},on:{input:function(a){a.target.composing||t.$set(t.form,"accountNumber",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"accountNumber"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[t._m(11),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.branchName,expression:"form.branchName"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("branchName")},attrs:{type:"text"},domProps:{value:t.form.branchName},on:{input:function(a){a.target.composing||t.$set(t.form,"branchName",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"branchName"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[t._m(12),t._v(" "),e("img",{staticClass:"img img-responsive",staticStyle:{"max-height":"100px","max-width":"200px"},attrs:{src:t.form.paySlip}}),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"file",id:"paySlip"},on:{change:function(a){return t.changeImage(a)}}}),t._v(" "),e("small",{staticClass:"text-danger"},[t._v(" Supported image formet only jpg, jpeg, png ")]),t._v(" "),e("has-error",{attrs:{form:t.form,field:"paySlip"}})],1)]):t._e()]),t._v(" "),t._m(13)])])])]),t._v(" "),e("div",{staticClass:"card main-card element-block-example mt-5"},[t._m(14),t._v(" "),e("div",{staticClass:"table-responsive bg-white p-3"},[e("table",{staticClass:"table table-hover table-striped table-bordered"},[t._m(15),t._v(" "),e("tbody",t._l(t.billRequestLists,(function(a,n){return e("tr",{key:a.id},[e("td",[t._v(t._s(n+1))]),t._v(" "),e("td",[t._v(t._s(t.moment(a.lastBillDate).format("DD MMMM YYYY")))]),t._v(" "),e("td",[t._v(t._s(a.totalMonth)+" Month")]),t._v(" "),e("td",[t._v(t._s(a.amount))]),t._v(" "),e("td",{domProps:{innerHTML:t._s(a.bankDetils)}}),t._v(" "),e("td",[1==a.bankTypeEntryId?e("span",[t._v("\n                 Bank Name : "+t._s(a.bankName)+" "),e("br"),t._v("\n                 A/C Name : "+t._s(a.accountName)),e("br"),t._v("\n                 A/C Number : "+t._s(a.accountNumber)),e("br"),t._v("\n                 Branch Name : "+t._s(a.branchName)),e("br"),t._v("\n                 Pay Slip : "),a.paySlip?e("img",{staticStyle:{width:"100px"},attrs:{src:a.paySlip}}):t._e()]):t._e(),t._v(" "),2==a.bankTypeEntryId?e("span",[t._v("\n                 A/C Number : "+t._s(a.mbAccountNo)+" "),e("br"),t._v("\n                 TRX. Number : "+t._s(a.mbTrNo)+"\n               ")]):t._e()]),t._v(" "),e("td",[t._v(" "+t._s(t.moment(a.created_at).format("DD MMMM YYYY"))+" ")]),t._v(" "),e("td",[0==a.status?e("span",[t._v(" Pending... ")]):t._e(),t._v(" "),1==a.status?e("span",[t._v(" Waiting... ")]):t._e(),t._v(" "),2==a.status?e("span",[t._v(" Apporved ")]):t._e(),t._v(" "),3==a.status?e("span",[t._v(" Cancel ")]):t._e()])])})),0)])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.20)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[a("h3",{staticStyle:{color:"black"}},[this._v(" Bill Request ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Month \n                  "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Bill "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Bank Type  "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v("Bank Name "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Company Account Details "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Sender Account Number "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Transaction Number "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Sender Bank Name "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Sender Account Name "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Sender Account Number "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Sender Branch Name "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",{attrs:{for:"paySlip"}},[this._v(" Pay Slip "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"text-right pt-3"},[a("button",{staticClass:"mr-2 btn btn-pill btn-hover-shine  btn-primary",attrs:{type:"submit"}},[this._v(" Submit ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header alert-info"},[a("h3",[this._v("Bill Request List")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{staticClass:"alert-info"},[e("th",[t._v("SN")]),t._v(" "),e("th",[t._v("Last Bill Date")]),t._v(" "),e("th",[t._v("Month")]),t._v(" "),e("th",[t._v("Amount")]),t._v(" "),e("th",[t._v("Reciver")]),t._v(" "),e("th",[t._v("Sender")]),t._v(" "),e("th",[t._v("Date")]),t._v(" "),e("th",[t._v("Status")])])])}],!1,null,null,null);a.default=i.exports}}]);