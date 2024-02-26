(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{410:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{gets:[],image:"",form:new Form({purchaseType:"",status:""}),purchaseType:{},exit:!1,mess:""}},mounted:function(){this.view()},methods:{view:function(){var t=this;fetch("purchaseType").then((function(t){return t.json()})).then((function(e){t.gets=e.data}))},changeStatus:function(t){var e=this,s="purchaseStatusChange/".concat(t);axios.get(s).then((function(t){Toast.fire({icon:"success",title:"Status Change Successfully"}),e.view()}))},deletePost:function(t){var e=this,s="purchase/delete/".concat(t);axios.get(s).then((function(t){e.view()}))},onImageChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&this.createImage(e[0])},createImage:function(t){var e=new FileReader,s=this;e.onload=function(t){s.image=t.target.result},e.readAsDataURL(t)},addPurchaseType:function(){var t=this;this.form.post("purchaseType/create").then((function(e){e.data.changePurchaseType?(t.exit=!0,t.mess=e.data.changePurchaseType):(Toast.fire({icon:"success",title:"Admin Type Successfully"}),t.view(),t.form.reset())}))}}},r=s(0),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"supplier-entry py-4 px-2"},[s("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addPurchaseType(e)}}},[s("div",{staticClass:"form-group"},[s("label",[t._v(" Purchase Type :")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.purchaseType,expression:"form.purchaseType"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("purchaseType")},attrs:{type:"text",name:"purchaseType",placeholder:"Purchase Type"},domProps:{value:t.form.purchaseType},on:{input:function(e){e.target.composing||t.$set(t.form,"purchaseType",e.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"purchaseType"}})],1),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v(" Status :")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("status")},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"status",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Select Status")]),t._v(" "),s("option",{attrs:{value:"0"}},[t._v("Active")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("Inactive")])]),t._v(" "),s("has-error",{attrs:{form:t.form,field:"status"}})],1),t._v(" "),t._m(1)])])])]),t._v(" "),s("div",{staticClass:"card mt-5"},[t._m(2),t._v(" "),s("div",{staticClass:"supplier-entry py-4 px-2"},[s("div",{staticClass:"col-lg-12 col-12 supplier-border"},[s("table",{staticClass:"table table-hover"},[t._m(3),t._v(" "),s("tbody",t._l(t.gets,(function(e,a){return s("tr",{key:e.id},[s("td",[t._v(t._s(++a))]),t._v(" "),s("td",[t._v(t._s(e.purchaseType))]),t._v(" "),s("td",[0==e.status?s("div",[s("button",{staticClass:"btn btn-hover-shine btn-success",attrs:{type:"button"},on:{click:function(s){return t.changeStatus(e.id)}}},[t._v("\n                    Active\n                  ")])]):s("div",[s("button",{staticClass:"btn btn-hover-shine btn-danger",attrs:{type:"button"},on:{click:function(s){return t.changeStatus(e.id)}}},[t._v("\n                    Deactive\n                  ")])])]),t._v(" "),s("td",[s("router-link",{staticClass:"btn btn-hover-shine btn-primary",attrs:{to:"/purchasetype@Edit"+e.id}},[s("i",{staticClass:"fa fa-edit"}),t._v("Edit")])],1),t._v(" "),s("td")])})),0)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.2)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[e("h3",{staticStyle:{color:"black"}},[this._v("New Purchase Type")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-right pt-3"},[e("button",{staticClass:"mr-2 btn btn-pill btn-hover-shine btn-primary",attrs:{type:"submit"}},[this._v("\n              Submit\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.2)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[e("h3",{staticStyle:{color:"black"}},[this._v("Purchase Type Information")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("ID")]),this._v(" "),e("th",[this._v("Purchase Type")]),this._v(" "),e("th",[this._v("Status")]),this._v(" "),e("th",[this._v("Actions")])])])}],!1,null,null,null);e.default=i.exports}}]);