(window.webpackJsonp=window.webpackJsonp||[]).push([[517],{349:function(e,t,a){"use strict";var o=a(78);a.n(o).a},350:function(e,t,a){(e.exports=a(2)(!1)).push([e.i,"\n.tree{\r\n  width:1px;\r\n  height: 51px;\r\n  background: black;\r\n  position: relative;\r\n  float: left;\r\n  margin-right: 30px;\n}\n.tree1{\r\n  width: 30px;\r\n  height: 1px;\r\n  background: rgb(0, 0, 0);\r\n  margin-top: 25px;\n}\r\n",""])},78:function(e,t,a){var o=a(350);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(3)(o,r);o.locals&&(e.exports=o.locals)},824:function(e,t,a){"use strict";a.r(t);var o=a(5),r=a.n(o),s=a(1),i=a.n(s),n={data:function(){return{loading:!1,voucherTypeLists:[],voucherInformationLists:[],paymentTo:"Receiver Name",paymentToStatus:!0,bankInfo:!1,receiverBankAccountNameStatus:!1,headOfCashBookTitle:"Head Of Cash Book",available_balance_text:"",head_available_balance_text:"",bankSenderName:"",available_balance_status:!1,head_available_balance_status:!1,headOfCashBookLists:[],headOfAccountLists:[],subHeadOfAccountLists:[],subHeadStatus:!1,invalid:!1,moment:i.a,form:new Form({voucherDate:(new Date).toISOString().slice(0,10),voucherType:"",voucherNo:"",paymentTo:"",mobileNo:"",checkPaymentType:"",receiverBankAccountName:"",receiverBankAccountNo:"",chequeNo:"",chequeDate:(new Date).toISOString().slice(0,10),headOfCashBook:"",headOfAccounts:"",subHead:"",subHeadMulti:"",voucherAmount:"",available_balance:"",head_available_balance:"",particular:""})}},components:{Multiselect:r.a},mounted:function(){this.view()},methods:{clearForm:function(){this.subHeadStatus=!1,this.available_balance_status=!1,this.form.voucherType="",this.form.voucherNo="",this.form.paymentTo="",this.form.mobileNo="",this.form.checkPaymentType="",this.form.receiverBankAccountName="",this.form.receiverBankAccountNo="",this.form.chequeNo="",this.form.chequeDate="",this.form.headOfCashBook="",this.form.headOfAccounts="",this.form.subHead="",this.form.subHeadMulti="",this.form.voucherAmount="",this.form.particular=""},view:function(){var e=this;axios.get("voucherEntryInformation").then((function(t){e.voucherInformationLists=t.data.voucherInformation,e.voucherTypeLists=t.data.list})).catch((function(e){401===e.response.status&&(Toast.fire({icon:"error",title:"Loging out......"}),window.location.replace(""))}))},emptyAfterSubmit:function(){this.available_balance_status=!1,this.available_balance_text="",this.form.available_balance="",this.head_available_balance_status=!1,this.head_available_balance_text="",this.form.head_available_balance="",this.subHeadStatus=!1,this.form.voucherAmount=""},calculate:function(e){e.target.value.toString().match(/^\d*(\.\d{1,2})?$/)||""===this.form.voucherAmount?this.invalid=!1:(this.invalid=!0,this.form.voucherAmount="")},calculateAmount:function(){var e=this.form.available_balance,t=this.form.head_available_balance,a=0;this.form.voucherAmount,a=e>t?t:e,this.form.voucherType<5?this.form.voucherAmount>a&&a>0&&(this.form.voucherAmount=a):this.form.voucherAmount>e&&e>0&&(this.form.voucherAmount=e)},checkBalance:function(){var e=this;this.form.headOfAccounts="",this.form.subHead="";var t="checkBalance/"+this.form.headOfCashBook;axios.get(t).then((function(t){e.available_balance_status=!0,e.available_balance_text=t.data.available_balance,e.form.available_balance=t.data.available_balance}))},checkHeadBalance:function(e){var t=this;this.form.subHead=e.headCode,this.form.voucherAmount="";var a="checkBalance/"+this.form.subHead;axios.get(a).then((function(e){t.headOfAccountLists=e.data.headAcc,t.form.headOfAccounts=e.data.precode,t.head_available_balance_status=!0;var a=Math.abs(e.data.available_balance);e.data.available_balance>=0?t.head_available_balance_text='<span class="badge badge-success">'+a+"</span>":t.head_available_balance_text='<span class="badge badge-danger">'+a+"</span>",t.form.head_available_balance=a}))},getVoucherCode:function(){var e=this;this.emptyAfterSubmit(),this.form.headOfCashBook="",this.form.headOfAccounts="",this.subHeadStatus=!1,this.form.subHead="",this.headOfCashBookLists=[],this.headOfAccountLists=[];var t="getVoucherCode/"+this.form.voucherType;if(axios.get(t).then((function(t){e.form.voucherNo=t.data.code})),1==this.form.voucherType){this.paymentTo="Receiver Name",this.headOfCashBookTitle="Head Of Cash Book",this.paymentToStatus=!0,this.bankInfo=!1,this.subHeadStatus=!0;var a="getVoucherHeadCashbookCodeNew/"+this.form.voucherType;axios.get(a).then((function(t){e.headOfCashBookLists=t.data.headOfCashBookList,e.subHeadOfAccountLists=t.data.headOfAccountList}))}else if(2==this.form.voucherType){this.paymentTo="Sender Name",this.headOfCashBookTitle="Head Of Cash Book",this.paymentToStatus=!0,this.bankInfo=!1,this.subHeadStatus=!0;var o="getVoucherHeadCashbookCodeNew/"+this.form.voucherType;axios.get(o).then((function(t){e.headOfCashBookLists=t.data.headOfCashBookList,e.subHeadOfAccountLists=t.data.headOfAccountList}))}else if(3==this.form.voucherType){this.paymentTo="Receiver Name",this.headOfCashBookTitle="Head Of Bank Book",this.paymentToStatus=!0,this.bankInfo=!0,this.bankSenderName="Receiver",this.subHeadStatus=!0;var r="getVoucherHeadCashbookCodeNew/"+this.form.voucherType;axios.get(r).then((function(t){e.headOfCashBookLists=t.data.headOfCashBookList,e.subHeadOfAccountLists=t.data.headOfAccountList}))}else if(4==this.form.voucherType){this.paymentTo="Sender Name",this.headOfCashBookTitle="Head Of Bank Book",this.paymentToStatus=!0,this.bankInfo=!0,this.subHeadStatus=!0,this.bankSenderName="Sender";var s="getVoucherHeadCashbookCodeNew/"+this.form.voucherType;axios.get(s).then((function(t){e.headOfCashBookLists=t.data.headOfCashBookList,e.subHeadOfAccountLists=t.data.headOfAccountList}))}else if(5==this.form.voucherType){this.paymentTo="Receive by",this.paymentToStatus=!1,this.bankInfo=!1,this.subHeadStatus=!0;var i="getVoucherHeadCashbookCodeNew/"+this.form.voucherType;axios.get(i).then((function(t){e.headOfCashBookLists=t.data.headOfCashBookList,e.subHeadOfAccountLists=t.data.headOfAccountList}))}else if(6==this.form.voucherType){this.paymentTo="Receive by",this.paymentToStatus=!1,this.bankInfo=!1,this.subHeadStatus=!0;var n="getVoucherHeadCashbookCodeNew/"+this.form.voucherType;axios.get(n).then((function(t){e.headOfCashBookLists=t.data.headOfCashBookList,e.subHeadOfAccountLists=t.data.headOfAccountList}))}},getSubHeadOfAccounts:function(){var e=this;this.form.subHead="";var t="getSubHeadOfAccountsForContraVoucher/"+this.form.voucherType+"/"+this.form.headOfCashBook+"/"+this.form.headOfAccounts;axios.get(t).then((function(t){e.subHeadStatus=!0,e.subHeadOfAccountLists=t.data.subHeadList}))},checkPaymentType:function(){2==this.form.checkPaymentType?this.receiverBankAccountNameStatus=!0:this.receiverBankAccountNameStatus=!1},deletePost:function(e){var t=this,a="voucherEntryInformation/".concat(e);axios.delete(a).then((function(e){Toast.fire({icon:"success",title:"Delete Successfull."}),t.view()}))},addNewVoucherInformation:function(){var e=this;this.loading=!0,this.form.post("voucherEntryInformation").then((function(t){e.loading=!1,Toast.fire({icon:"success",background:"#c9f4c9",title:"Voucher Entry Successfull."}),e.view(),e.form.reset(),e.emptyAfterSubmit()})).catch((function(t){e.loading=!1,Toast.fire({icon:"error",title:"Something Missing"})}))}}},c=(a(349),a(0)),l=Object(c.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("div",{staticClass:"card"},[e._m(0),e._v(" "),a("form",{on:{submit:function(t){return t.preventDefault(),e.addNewVoucherInformation(t)}}},[a("div",{staticClass:"supplier-entry py-4 px-2 comm-form-back-img"},[a("div",{staticClass:"col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[e._m(1),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.voucherDate,expression:"form.voucherDate"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("voucherDate")},attrs:{type:"date"},domProps:{value:e.form.voucherDate},on:{input:function(t){t.target.composing||e.$set(e.form,"voucherDate",t.target.value)}}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"voucherDate"}})],1),e._v(" "),a("div",{staticClass:"form-group"},[e._m(2),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.voucherType,expression:"form.voucherType"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("voucherType")},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"voucherType",t.target.multiple?a:a[0])},function(t){return e.getVoucherCode()}]}},[a("option",{attrs:{value:""}},[e._v(" Select Voucher Type ")]),e._v(" "),e._l(e.voucherTypeLists,(function(t){return t.id<6?a("option",{domProps:{value:t.id}},[e._v(" "+e._s(t.name)+" ")]):e._e()}))],2),e._v(" "),a("has-error",{attrs:{form:e.form,field:"voucherType"}})],1),e._v(" "),a("div",{staticClass:"form-group"},[e._m(3),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.voucherNo,expression:"form.voucherNo"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("voucherNo")},attrs:{type:"text",disabled:""},domProps:{value:e.form.voucherNo},on:{input:function(t){t.target.composing||e.$set(e.form,"voucherNo",t.target.value)}}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"voucherNo"}})],1),e._v(" "),e.paymentToStatus?a("div",{staticClass:"downOfVoucherNo"},[a("div",{staticClass:"form-group"},[a("label",[e._v(" "+e._s(e.paymentTo)+" ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.paymentTo,expression:"form.paymentTo"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("paymentTo")},attrs:{type:"text"},domProps:{value:e.form.paymentTo},on:{input:function(t){t.target.composing||e.$set(e.form,"paymentTo",t.target.value)}}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"paymentTo"}})],1),e._v(" "),a("div",{staticClass:"form-group"},[a("label",[e._v(" Mobile No ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.mobileNo,expression:"form.mobileNo"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("mobileNo")},attrs:{type:"text"},domProps:{value:e.form.mobileNo},on:{input:function(t){t.target.composing||e.$set(e.form,"mobileNo",t.target.value)}}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"mobileNo"}})],1),e._v(" "),e.bankInfo?a("div",{staticClass:"bankInfo"},[a("div",{staticClass:"form-group"},[a("label",[e._v(" Check Payment Type ")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.checkPaymentType,expression:"form.checkPaymentType"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("checkPaymentType")},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"checkPaymentType",t.target.multiple?a:a[0])},function(t){return e.checkPaymentType()}]}},[a("option",{attrs:{value:""}},[e._v(" Select ")]),e._v(" "),a("option",{attrs:{value:"1"}},[e._v(" Cash Check ")]),e._v(" "),a("option",{attrs:{value:"2"}},[e._v(" Account Payable Check ")])]),e._v(" "),a("has-error",{attrs:{form:e.form,field:"checkPaymentType"}})],1),e._v(" "),e.receiverBankAccountNameStatus?a("div",[a("div",{staticClass:"form-group"},[a("label",[e._v(" "+e._s(e.bankSenderName)+" Bank Account Name ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.receiverBankAccountName,expression:"form.receiverBankAccountName"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("receiverBankAccountName")},attrs:{type:"text"},domProps:{value:e.form.receiverBankAccountName},on:{input:function(t){t.target.composing||e.$set(e.form,"receiverBankAccountName",t.target.value)}}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"receiverBankAccountName"}})],1),e._v(" "),a("div",{staticClass:"form-group"},[a("label",[e._v(" "+e._s(e.bankSenderName)+" Bank Account No ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.receiverBankAccountNo,expression:"form.receiverBankAccountNo"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("receiverBankAccountNo")},attrs:{type:"text"},domProps:{value:e.form.receiverBankAccountNo},on:{input:function(t){t.target.composing||e.$set(e.form,"receiverBankAccountNo",t.target.value)}}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"receiverBankAccountNo"}})],1)]):e._e(),e._v(" "),a("div",{staticClass:"form-group"},[a("label",[e._v(" Cheque No  ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.chequeNo,expression:"form.chequeNo"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("chequeNo")},attrs:{type:"text"},domProps:{value:e.form.chequeNo},on:{input:function(t){t.target.composing||e.$set(e.form,"chequeNo",t.target.value)}}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"chequeNo"}})],1),e._v(" "),a("div",{staticClass:"form-group"},[a("label",[e._v(" Cheque Date  ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.chequeDate,expression:"form.chequeDate"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("chequeDate")},attrs:{type:"date"},domProps:{value:e.form.chequeDate},on:{input:function(t){t.target.composing||e.$set(e.form,"chequeDate",t.target.value)}}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"chequeDate"}})],1)]):e._e()]):e._e()]),e._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v(" "+e._s(e.headOfCashBookTitle)+" "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mandatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mandatory Field"}})]),e._v(" "),e.available_balance_status?a("span",[a("span",{staticClass:"badge badge-primary"},[e._v(" "+e._s(e.available_balance_text)+" ")])]):e._e(),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.available_balance,expression:"form.available_balance"}],attrs:{type:"hidden"},domProps:{value:e.form.available_balance},on:{input:function(t){t.target.composing||e.$set(e.form,"available_balance",t.target.value)}}}),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.headOfCashBook,expression:"form.headOfCashBook"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("headOfCashBook")},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"headOfCashBook",t.target.multiple?a:a[0])},function(t){return e.checkBalance()}]}},[a("option",{attrs:{value:""}},[e._v(" -------------- ")]),e._v(" "),e._l(e.headOfCashBookLists,(function(t){return a("option",{domProps:{value:t.headCode}},[e._v(" "+e._s(t.headName)+" ")])}))],2),e._v(" "),a("has-error",{attrs:{form:e.form,field:"headOfCashBook"}})],1),e._v(" "),a("div",{staticClass:"form-group"},[e._m(4),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.headOfAccounts,expression:"form.headOfAccounts"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("headOfAccounts")},attrs:{disabled:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"headOfAccounts",t.target.multiple?a:a[0])},function(t){return e.getSubHeadOfAccounts()}]}},[a("option",{attrs:{value:""}},[e._v(" ---------------- ")]),e._v(" "),e._l(e.headOfAccountLists,(function(t){return a("option",{domProps:{value:t.headCode}},[e._v(" "+e._s(t.headName)+" ")])}))],2),e._v(" "),a("has-error",{attrs:{form:e.form,field:"headOfAccounts"}})],1),e._v(" "),e.subHeadStatus?a("div",{staticClass:"form-group"},[e._m(5),e._v(" "),e.head_available_balance_status?a("span",{domProps:{innerHTML:e._s(e.head_available_balance_text)}}):e._e(),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.head_available_balance,expression:"form.head_available_balance"}],attrs:{type:"hidden"},domProps:{value:e.form.head_available_balance},on:{input:function(t){t.target.composing||e.$set(e.form,"head_available_balance",t.target.value)}}}),e._v(" "),a("multiselect",{staticClass:"form-control",class:{"is-invalid":e.form.errors.has("productSupplierId")},staticStyle:{padding:"0px !important","padding-bottom":"3px !important"},attrs:{label:"headName",placeholder:"-------",options:e.subHeadOfAccountLists,"show-labels":!1},on:{input:e.checkHeadBalance},model:{value:e.form.subHeadMulti,callback:function(t){e.$set(e.form,"subHeadMulti",t)},expression:"form.subHeadMulti"}}),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.subHead,expression:"form.subHead"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("subHead")},staticStyle:{display:"none"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"subHead",t.target.multiple?a:a[0])},function(t){return e.checkHeadBalance()}]}},e._l(e.subHeadOfAccountLists,(function(t){return a("option",{domProps:{value:t.headCode}},[e._v(" "+e._s(t.headName)+" ")])})),0),e._v(" "),a("has-error",{attrs:{form:e.form,field:"subHead"}})],1):e._e(),e._v(" "),a("div",{staticClass:"form-group"},[e._m(6),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.voucherAmount,expression:"form.voucherAmount"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("voucherAmount")},attrs:{type:"text"},domProps:{value:e.form.voucherAmount},on:{keyup:[function(t){return t.preventDefault(),e.calculateAmount()},e.calculate],input:function(t){t.target.composing||e.$set(e.form,"voucherAmount",t.target.value)}}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"voucherAmount"}}),e._v(" "),e.invalid?a("span",{staticStyle:{color:"red"}},[e._v("Negative And Character Value Not Allowed")]):e._e()],1),e._v(" "),a("div",{staticClass:"form-group"},[e._m(7),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.particular,expression:"form.particular"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("particular")},attrs:{rows:"5"},domProps:{value:e.form.particular},on:{input:function(t){t.target.composing||e.$set(e.form,"particular",t.target.value)}}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"particular"}})],1)])])])]),e._v(" "),a("div",{staticClass:"d-block pt-3 pb-4 card-footer overflow-hidden"},[a("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12"},[a("button",{staticClass:"btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left",attrs:{type:"button"},on:{click:function(t){return e.clearForm()}}},[e._m(8),e._v(" "),a("span",{staticClass:"mr-1"},[e._v(" Clear ")])]),e._v(" "),a("button",{staticClass:"btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right",attrs:{type:"submit",disabled:e.loading}},[e.loading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):a("span",{staticClass:"mr-2 opacity-7"},[a("i",{staticClass:"fa fa-paper-plane"})]),e._v(" "),a("span",{staticClass:"mr-1"},[e._v(" Add New Entry ")])])])])])]),e._v(" "),a("div",{staticClass:"card mt-5"},[e._m(9),e._v(" "),a("div",{staticClass:"supplier-entry py-4 px-2"},[a("div",{staticClass:"card-body table-responsive bg-white"},[a("table",{staticClass:"table table-hover table-striped table-bordered",staticStyle:{width:"100%"},attrs:{id:"example"}},[e._m(10),e._v(" "),a("tbody",e._l(e.voucherInformationLists,(function(t,o){return a("tr",{key:t.id},[a("td",[e._v(e._s(++o))]),e._v(" "),a("td",[e._v(" "+e._s(e.moment(t.voucherDate).format("DD MMMM YYYY"))+" ")]),e._v(" "),a("td",[e._v(e._s(t.voucherNo))]),e._v(" "),a("td",e._l(e.voucherTypeLists,(function(o){return o.id==t.voucherType?a("span",[e._v("\n                    "+e._s(o.name)+"\n                  ")]):e._e()})),0),e._v(" "),a("td",[e._v(e._s(t.voucherAmount))]),e._v(" "),a("td",[a("router-link",{staticClass:"btn-wide btn-pill btn btn-outline-primary btn-hover-shine",attrs:{to:"/viewVoucher"+t.id}},[a("i",{staticClass:"fa fa-eye"}),e._v(" View ")])],1)])})),0)])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header-tab card-header alert-info"},[t("div",{staticClass:"card-header-title font-size-lg text-capitalize font-weight-normal"},[t("i",{staticClass:"header-icon lnr-pencil icon-gradient bg-premium-dark"}),this._v(" "),t("h4",[this._v(" Voucher Entry ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v(" Date "),t("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mandatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mandatory Field"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v(" Voucher Type "),t("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mandatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mandatory Field"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v(" Voucher No\n                  "),t("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mandatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mandatory Field"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v(" Head Of Accounts "),t("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mandatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mandatory Field"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v(" Sub Head  "),t("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mandatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mandatory Field"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v(" Amount\n                  "),t("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mandatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mandatory Field"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v(" Particular\n                  "),t("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mandatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mandatory Field"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"mr-2 opacity-7"},[t("i",{staticClass:"fa fa-undo "})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header-tab card-header alert-info"},[t("h4",[t("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-premium-dark"}),this._v("\n          View Information ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("SL")]),e._v(" "),a("th",[e._v("Date")]),e._v(" "),a("th",[e._v("Voucher No ")]),e._v(" "),a("th",[e._v("Voucher Type ")]),e._v(" "),a("th",[e._v(" Amount ")]),e._v(" "),a("th",[e._v(" View ")])])])}],!1,null,null,null);t.default=l.exports}}]);