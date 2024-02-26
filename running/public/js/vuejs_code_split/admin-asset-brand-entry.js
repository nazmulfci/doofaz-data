(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{430:function(t,a,s){"use strict";s.r(a);var e={data:function(){return{form:new Form({assetBrandName:"",assetBrandStatus:""}),assetBrandData:{}}},props:{limit:{type:Number,default:2}},mounted:function(){this.getData(),this.getPaginateList()},methods:{assetBrandCreate:function(){var t=this;this.form.post("/assetBrandEntry").then((function(a){a.data.changeAssetBrandName?Toast.fire({icon:"error",title:"Change Your Asset Brand Name"}):(Toast.fire({icon:"success",title:"Asset Brand Entry Successfully"}),t.form.reset()),t.getData()}))},getData:function(){var t=this;axios.get("/assetBrandEntry").then((function(a){t.assetBrandData=a.data.data}))},getPaginateList:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("/assetBrandEntry?page="+a).then((function(a){t.assetBrandData=a.data.data}))},changeStatus:function(t){var a=this;axios.get("assetBrandEntry/"+t).then((function(t){Toast.fire({icon:"success",title:"Status Change Successfully"}),a.getData()}))},distroy:function(t){var a=this;axios.delete("assetBrandEntry/"+t).then((function(t){Toast.fire({icon:"success",title:"Delete Successfully"}),a.getData()}))}}},n=s(0),r=Object(n.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",[s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"supplier-entry py-4 px-2"},[s("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border"},[s("form",{on:{submit:function(a){return a.preventDefault(),t.assetBrandCreate()}}},[s("div",{staticClass:"form-group"},[s("label",[t._v(" Brand Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.assetBrandName,expression:"form.assetBrandName"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("assetBrandName")},attrs:{type:"text",name:"uniteEntryName",placeholder:"Asset Brand Name"},domProps:{value:t.form.assetBrandName},on:{input:function(a){a.target.composing||t.$set(t.form,"assetBrandName",a.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"assetBrandName"}})],1),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Asset Brand Status")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.assetBrandStatus,expression:"form.assetBrandStatus"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("assetBrandStatus")},attrs:{name:"assetBrandStatus"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"assetBrandStatus",a.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Select One")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("Publish")]),t._v(" "),s("option",{attrs:{value:"0"}},[t._v("Unpublish")])]),t._v(" "),s("has-error",{attrs:{form:t.form,field:"assetBrandStatus"}})],1),t._v(" "),t._m(1)])])])]),t._v(" "),s("div",{staticClass:"card main-card  element-block-example mt-5"},[t._m(2),t._v(" "),s("div",{staticClass:"table-responsive bg-white"},[s("table",{staticClass:"table table-hover table-bordered mb-0"},[t._m(3),t._v(" "),s("tbody",t._l(t.assetBrandData.data,(function(a,e){return s("tr",[s("td",[t._v(t._s(e+1))]),t._v(" "),s("td",[t._v(t._s(a.assetBrandName))]),t._v(" "),s("td",[1==a.assetBrandStatus?s("div",[s("button",{staticClass:"btn btn-hover-shine btn-success",attrs:{type:"button"},on:{click:function(s){return t.changeStatus(a.assetBrandEntryId)}}},[t._v("Published")])]):s("div",[s("button",{staticClass:"btn btn-hover-shine btn-danger",attrs:{type:"button"},on:{click:function(s){return t.changeStatus(a.assetBrandEntryId)}}},[t._v("Unpublish")])])]),t._v(" "),s("td",[s("router-link",{staticClass:"btn btn-hover-shine  btn-primary",attrs:{to:"/adminAssetBrand@entryEdit"+a.assetBrandEntryId}},[s("i",{staticClass:" fa fa-edit"}),t._v("Edit")]),t._v(" "),s("button",{staticClass:"btn btn-hover-shine btn-danger",attrs:{type:"button"},on:{click:function(s){return t.distroy(a.assetBrandEntryId)}}},[s("i",{staticClass:" fa fa-trash"}),t._v("Delete")])],1)])})),0)])]),t._v(" "),s("span",{staticClass:"card_footer"},[s("pagination",{attrs:{data:t.assetBrandData},on:{"pagination-change-page":t.getPaginateList}},[s("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("< Previous")]),t._v(" "),s("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next >")])])],1)])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.20)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[a("h3",{staticStyle:{color:"black"}},[this._v("Asset Brand Entry")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"text-right pt-3"},[a("button",{staticClass:"mr-2 btn-pill btn-hover-shine btn btn-primary",attrs:{type:"submit"}},[this._v("Submit")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.20)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[a("h3",{staticStyle:{color:"black"}},[this._v("Asset Brand Name")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",{staticStyle:{background:"rgba(242, 242, 242, 0.47)"}},[a("th",[this._v("SN")]),this._v(" "),a("th",[this._v("Asset Brand Name")]),this._v(" "),a("th",[this._v("Asset Brand Status")]),this._v(" "),a("th",[this._v("Action")])])])}],!1,null,null,null);a.default=r.exports}}]);