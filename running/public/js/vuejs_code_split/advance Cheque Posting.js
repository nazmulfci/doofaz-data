(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{882:function(t,e,a){"use strict";a.r(e);var o={data:function(){return{form:new Form({branchName:"",accNo:"",bankTypeEntryId:"",bankEntryId:"",bankAccountId:"",firstPage:"",lastPage:"",chequeNo:"",chequeType:"",receiver:"",amount:"",cashDate:"",issueDate:"",accountName:"",accountNumber:""}),account:!1,loading:!1,datas:[],types:[],banks:[],accounts:[],accs:[],infos:[],showBankNames:[]}},mounted:function(){this.view(),this.chequeType()},methods:{create:function(){var t=this;this.loading=!0,this.form.post("/chequePosting").then((function(e){t.loading=!1,t.form.reset(),Toast.fire({icon:"success",title:" Successfull Posting"})})).catch((function(e){t.loading=!1,Toast.fire({icon:"error",title:"Something Missing"})}))},cType:function(){1==this.form.chequeType?this.account=!1:this.account=!0},view:function(){var t=this;axios.get("/bankCheck/create").then((function(e){t.showBankNames=e.data.data,t.accounts=e.data.account,t.banks=e.data.bank}))},bankAccountIdCatch:function(){var t=this;axios.get("/bankCheck/"+this.form.bankEntryId).then((function(e){t.accs=e.data.account}))},showInfo:function(){var t=this;axios.get("/chequeInfoGet/"+this.form.bankEntryId+"/"+this.form.bankAccountId).then((function(e){t.infos=e.data.info}))},chequeType:function(){var t=this;axios.get("/chequeType").then((function(e){t.types=e.data.type}))}}},r=a(0),n=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"card main-card  element-block-example mt-5"},[t._m(0),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.create()}}},[a("div",{staticClass:"supplier-entry py-4 px-2 comm-form-back-img"},[a("div",{staticClass:"col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-12 col-xs-12"}),t._v(" "),a("div",{staticClass:"col-12 col-md-12 col-xs-12"},[a("div",{staticClass:"form-group"},[t._m(1),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.bankEntryId,expression:"form.bankEntryId"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("bankEntryId")},attrs:{name:"bankEntryId"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"bankEntryId",e.target.multiple?a:a[0])},function(e){return e.preventDefault(),t.bankAccountIdCatch()}]}},[a("option",{attrs:{value:""}},[t._v("Select Bank Name")]),t._v(" "),t._l(t.showBankNames,(function(e){return a("option",{key:e.id,domProps:{value:e.bank}},t._l(t.banks,(function(o){return e.bank==o.bankEntryId?a("span",[t._v("\n                          "+t._s(o.bankName)+"\n                          ")]):t._e()})),0)}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"bankEntryId"}})],1)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-12 col-xs-12"}),t._v(" "),a("div",{staticClass:"col-12 col-md-12 col-xs-12"},[a("div",{staticClass:"form-group"},[t._m(2),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.bankAccountId,expression:"form.bankAccountId"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("bankAccountId")},attrs:{name:"bankEntryId"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"bankAccountId",e.target.multiple?a:a[0])},function(e){return e.preventDefault(),t.showInfo()}]}},[a("option",{attrs:{value:""}},[t._v("Select Account Name")]),t._v(" "),t._l(t.accs,(function(e){return a("option",{key:e.id,domProps:{value:e.bankAccountId}},t._l(t.accounts,(function(o){return o.bankId==e.bankAccountId?a("span",[t._v("\n                          "+t._s(o.bankAccountName)+" ("+t._s(o.bankBranch)+" / "+t._s(o.bankAccountNumber)+")\n                          ")]):t._e()})),0)}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"bankAccountId"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[t._m(3),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.chequeNo,expression:"form.chequeNo"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("chequeNo")},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"chequeNo",e.target.multiple?a:a[0])}}},[a("option",[t._v("Select Cheque No")]),t._v(" "),t._l(t.infos,(function(e){return a("option",{key:e.id},[t._v(" \n                     \n                          "+t._s(e.checkNo)+"\n                \n                          ")])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"chequeNo"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[t._m(4),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.chequeType,expression:"form.chequeType"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("chequeType")},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"chequeType",e.target.multiple?a:a[0])},function(e){return e.preventDefault(),t.cType()}]}},[a("option",[t._v("Select Cheque No")]),t._v(" "),t._l(t.types,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(" \n                     \n                          "+t._s(e.chequeType)+"\n                \n                          ")])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"chequeType"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v(" Receiver Name ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.receiver,expression:"form.receiver"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.receiver},on:{input:function(e){e.target.composing||t.$set(t.form,"receiver",e.target.value)}}})]),t._v(" "),t.account?a("span",[a("div",{staticClass:"form-group"},[a("label",[t._v(" Account Name ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.accountName,expression:"form.accountName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.accountName},on:{input:function(e){e.target.composing||t.$set(t.form,"accountName",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v(" Account Number")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.accountNumber,expression:"form.accountNumber"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.accountNumber},on:{input:function(e){e.target.composing||t.$set(t.form,"accountNumber",e.target.value)}}})])]):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[t._m(5),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.amount,expression:"form.amount"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("amount")},attrs:{type:"text"},domProps:{value:t.form.amount},on:{input:function(e){e.target.composing||t.$set(t.form,"amount",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"amount"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[t._m(6),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.cashDate,expression:"form.cashDate"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("cashDate")},attrs:{type:"date"},domProps:{value:t.form.cashDate},on:{input:function(e){e.target.composing||t.$set(t.form,"cashDate",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"cashDate"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[t._m(7),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.issueDate,expression:"form.issueDate"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("issueDate")},attrs:{type:"date"},domProps:{value:t.form.issueDate},on:{input:function(e){e.target.composing||t.$set(t.form,"issueDate",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"issueDate"}})],1)])])])]),t._v(" "),a("div",{staticClass:"d-block pt-3 pb-4 card-footer overflow-hidden"},[a("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12"},[t._m(8),t._v(" "),a("button",{staticClass:"btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right",attrs:{type:"submit",disabled:t.loading}},[t.loading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):a("span",{staticClass:"mr-2 opacity-7"},[a("i",{staticClass:"fa fa-paper-plane"})]),t._v(" "),a("span",{staticClass:"mr-1"},[t._v(" Submit ")])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header-tab card-header alert-info"},[e("div",{staticClass:"card-header-title font-size-lg text-capitalize font-weight-normal"},[e("i",{staticClass:"header-icon lnr-pencil icon-gradient bg-premium-dark"}),this._v(" "),e("h4",[this._v(" Advance Cheque Posting ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("Select Bank Name "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("Select Account Name "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("Select Cheque No "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("Select Cheque Type "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Amount "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Cheque Delivery Date "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Cheque Cash Date "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left",attrs:{type:"reset"}},[e("span",{staticClass:"mr-2 opacity-7"},[e("i",{staticClass:"fa fa-undo "})]),this._v(" "),e("span",{staticClass:"mr-1"},[this._v(" Clear ")])])}],!1,null,null,null);e.default=n.exports}}]);