(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{447:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{form:new Form({metaKey:"",metaDescription:"",metaStatus:""}),showDataentry:{}}},props:{limit:{type:Number,default:2}},mounted:function(){this.showDataList(),this.getPaginateList()},methods:{metaKeyCreate:function(){var t=this;this.form.post("/adminMetaKeyDescription").then((function(e){e.data.changeMetakey?Toast.fire({icon:"error",title:"Please Change MetaKey Description"}):(Toast.fire({icon:"success",title:"MetaKey Description Entry Successfully"}),t.form.reset(),t.showDataList())}))},showDataList:function(){var t=this;axios.get("/adminMetaKeyDescription").then((function(e){t.showDataentry=e.data.show}))},getPaginateList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("/adminMetaKeyDescription?page="+e).then((function(e){t.showDataentry=e.data.show}))},changeStatus:function(t){var e=this;axios.get("adminMetaKeyDescription/"+t).then((function(t){Toast.fire({icon:"success",title:"Meta Status Change Successfully"}),e.showDataList()}))},deleteMetaDescription:function(t){var e=this;axios.delete("/adminMetaKeyDescription/"+t).then((function(t){Toast.fire({icon:"success",title:"Deleted MetaDescription successfully"}),e.showDataList()}))}}},i=a(0),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"supplier-entry py-4 px-2"},[a("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.metaKeyCreate()}}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Meta Key")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.metaKey,expression:"form.metaKey"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("metaKey")},attrs:{type:"text",name:"metaKey",placeholder:"Enter Meta key"},domProps:{value:t.form.metaKey},on:{input:function(e){e.target.composing||t.$set(t.form,"metaKey",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"metaKey"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Meta  Description")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.metaDescription,expression:"form.metaDescription"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("metaDescription")},attrs:{rows:"3",placeholder:"Enter Meta Description"},domProps:{value:t.form.metaDescription},on:{input:function(e){e.target.composing||t.$set(t.form,"metaDescription",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"metaDescription"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Meta Status")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.metaStatus,expression:"form.metaStatus"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("metaStatus")},attrs:{name:"metaStatus"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"metaStatus",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("Select One")]),t._v(" "),a("option",{attrs:{value:"1"}},[t._v("Publish")]),t._v(" "),a("option",{attrs:{value:"0"}},[t._v("Unpublish")])]),t._v(" "),a("has-error",{attrs:{form:t.form,field:"metaStatus"}})],1),t._v(" "),t._m(1)])])])]),t._v(" "),a("div",{staticClass:"card main-card  element-block-example mt-5"},[t._m(2),t._v(" "),a("div",{staticClass:"table-responsive bg-white"},[a("table",{staticClass:"table table-hover table-bordered mb-0"},[t._m(3),t._v(" "),a("tbody",t._l(t.showDataentry.data,(function(e,s){return a("tr",[a("td",[t._v(t._s(s+1))]),t._v(" "),a("td",[t._v(t._s(e.metaKey))]),t._v(" "),a("td",[t._v(t._s(e.metaDescription))]),t._v(" "),a("td",[1==e.metaStatus?a("div",[a("button",{staticClass:"btn btn-hover-shine btn-success",attrs:{type:"button"},on:{click:function(a){return t.changeStatus(e.metaKeyId)}}},[t._v("Published")])]):a("div",[a("button",{staticClass:"btn btn-hover-shine btn-danger",attrs:{type:"button"},on:{click:function(a){return t.changeStatus(e.metaKeyId)}}},[t._v("Unpublish")])])]),t._v(" "),a("td",[a("router-link",{staticClass:"mr-2 btn-hover-shine btn btn-shadow btn-primary",attrs:{to:"/metakeydescription@entryEdit"+e.metaKeyId}},[a("i",{staticClass:" fa fa-edit"}),t._v("Edit")])],1)])})),0)])]),t._v(" "),a("span",{staticClass:"card_footer"},[a("pagination",{attrs:{data:t.showDataentry,limit:t.limit},on:{"pagination-change-page":t.getPaginateList}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("< Previous")]),t._v(" "),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next >")])])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.20)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[e("h3",{staticStyle:{color:"black"}},[this._v("Meta Key Entry")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-right pt-3"},[e("button",{staticClass:"mr-2 btn-pill btn-hover-shine btn btn-primary",attrs:{type:"submit"}},[this._v("Submit")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.20)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[e("h3",{staticStyle:{color:"black"}},[this._v("Meta Key List")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticStyle:{background:"rgba(242, 242, 242, 0.47)"}},[a("th",[t._v("SN")]),t._v(" "),a("th",[t._v("Meta Key")]),t._v(" "),a("th",[t._v("Meta  Description")]),t._v(" "),a("th",[t._v("Meta Status")]),t._v(" "),a("th",[t._v("Action")])])])}],!1,null,null,null);e.default=r.exports}}]);