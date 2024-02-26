(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{492:function(t,e,s){"use strict";s.r(e);var o={data:function(){return{form:new Form({countryId:"",title:"",month:"",discountAmount:"",discountText:" "}),currencyLists:[],showBankTypeDatas:{},showBankNames:{},infos:{}}},mounted:function(){this.getData(),this.view(),this.currencyList()},methods:{currencyList:function(){var t=this;axios.get("currencyList").then((function(e){t.currencyLists=e.data.currencyList}))},add:function(){var t=this;this.form.post("billOffer").then((function(e){t.view(),Toast.fire({icon:"success",title:"Successfully Insert."}),t.form.reset()}))},view:function(){var t=this;axios.get("/getBillOfferList").then((function(e){t.infos=e.data.data}))},getData:function(){var t=this;axios.get("/bankTypeEntryList").then((function(e){t.showBankTypeDatas=e.data.show})),axios.get("/paymentTypeList").then((function(e){t.paymentTypeLists=e.data.data})),axios.get("/addExpense").then((function(e){t.datas=e.data.data}))},senderBankTypeIdCatch:function(){var t=this;axios.get("/bankNameList/"+this.form.senderbankTypeEntryId).then((function(e){t.showBankNames=e.data.show})),1==this.form.bankTypeEntryId&&(this.bankAccount=!0,this.mobileAccount=!1),2==this.form.bankTypeEntryId&&(this.bankAccount=!1,this.mobileAccount=!0)},changeImage:function(t){var e=this,s=t.target.files[0],o=new FileReader;o.onload=function(t){e.form.image=t.target.result,console.log(t.target.result)},o.readAsDataURL(s)},deletePost:function(t){var e=this;axios.get("deleteBillOffer/"+t).then((function(t){e.view(),Toast.fire({icon:"success",title:"Successfully Deleted"})}))}}},n=s(0),r=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"supplier-entry py-4 px-2"},[s("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.add()}}},[s("div",[s("div",{staticClass:"form-group"},[t._m(1),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.countryId,expression:"form.countryId"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("countryId")},attrs:{name:"countryId"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"countryId",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v(" Select Currency  ")]),t._v(" "),t._l(t.currencyLists,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                "+t._s(e.country)+"\n              ")])}))],2),t._v(" "),s("has-error",{attrs:{form:t.form,field:"countryId"}})],1),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v(" Title ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("title")},attrs:{name:"title"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"title"}})],1),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v(" Month Amount")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.month,expression:"form.month"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("month")},attrs:{type:"number",name:"month"},domProps:{value:t.form.month},on:{input:function(e){e.target.composing||t.$set(t.form,"month",e.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"month"}})],1),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v(" Discount Amount ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.discountAmount,expression:"form.discountAmount"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("discountAmount")},attrs:{type:"number",name:"discountAmount"},domProps:{value:t.form.discountAmount},on:{input:function(e){e.target.composing||t.$set(t.form,"discountAmount",e.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"discountAmount"}})],1),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v(" Discount Text ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.discountText,expression:"form.discountText"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("discountText")},attrs:{name:"discountText"},domProps:{value:t.form.discountText},on:{input:function(e){e.target.composing||t.$set(t.form,"discountText",e.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"discountText"}})],1)]),t._v(" "),t._m(2)])])])]),t._v(" "),s("div",{staticClass:"card main-card  element-block-example mt-5"},[t._m(3),t._v(" "),s("div",{staticClass:"table-responsive bg-white"},[s("table",{staticClass:"table table-hover table-bordered mb-0"},[t._m(4),t._v(" "),s("tbody",t._l(t.infos,(function(e,o){return s("tr",{key:e.id},[s("td",[t._v(" "+t._s(o+1)+" ")]),t._v(" "),s("td",t._l(t.currencyLists,(function(o){return o.id==e.countryId?s("option",{domProps:{value:o.id}},[t._v("\n                "+t._s(o.country)+"\n              ")]):t._e()})),0),t._v(" "),s("td",[t._v(" "+t._s(e.title)+" ")]),t._v(" "),s("td",[t._v(" "+t._s(e.month)+" ")]),t._v(" "),s("td",[t._v(" "+t._s(e.discountAmount)+" ")]),t._v(" "),s("td",[t._v(" "+t._s(e.discountText)+" ")]),t._v(" "),s("td",[s("button",{staticClass:"btn btn-danger",on:{click:function(s){return s.preventDefault(),t.deletePost(e.id)}}},[s("i",{staticClass:" fa fa-trash"}),t._v("Delete")])])])})),0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.20)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[e("h3",{staticStyle:{color:"black"}},[this._v("Bill Offer Information")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Country \n               "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-right pt-3"},[e("button",{staticClass:"mr-2 btn btn-pill btn-hover-shine btn-primary",attrs:{type:"submit"}},[this._v(" Submit ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.20)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[e("h3",{staticStyle:{color:"black"}},[this._v(" Bill Offer Information ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",{staticStyle:{background:"rgba(242, 242, 242, 0.47)"}},[s("th",[t._v("SN")]),t._v(" "),s("th",[t._v("Country")]),t._v(" "),s("th",[t._v("Title")]),t._v(" "),s("th",[t._v("Month")]),t._v(" "),s("th",[t._v("Discount Amount ")]),t._v(" "),s("th",[t._v("Discount Text ")]),t._v(" "),s("th")])])}],!1,null,null,null);e.default=r.exports}}]);