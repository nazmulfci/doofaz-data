(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{359:function(t,e,a){"use strict";var s=a(83);a.n(s).a},360:function(t,e,a){(t.exports=a(2)(!1)).push([t.i,"\n.tree{\r\n  width:1px;\r\n  height: 70px;\r\n  background: black;\r\n  position: relative;\r\n  float: left;\r\n  margin-right: 20px;\n}\n.tree1{\r\n  width: 20px;\r\n  height: 1px;\r\n  background: rgb(0, 0, 0);\r\n  margin-top: 28px;\n}\r\n",""])},83:function(t,e,a){var s=a(360);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(3)(s,i);s.locals&&(t.exports=s.locals)},830:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{placementTypeLists:[],loading:!1,accountSetups:[],accountSetupHeadNameLists:[],viewAccountSetupHeadNameLists:[],image:"",form:new Form({placementType:"",headCode:"",headName:""}),exit:!1}},mounted:function(){this.view(),this.placementTypeList()},methods:{view:function(){var t=this;axios.get("accountSetupInfo").then((function(e){t.accountSetups=e.data.accountSetup,t.viewAccountSetupHeadNameLists=e.data.viewAccountSetupHeadNameList}))},placementTypeList:function(){var t=this;axios.get("placementTypeList").then((function(e){t.placementTypeLists=e.data.placementTypeList}))},accountSetupHeadNameList:function(){var t=this,e="accountSetupHeadNameList/"+this.form.placementType;axios.get(e).then((function(e){t.accountSetupHeadNameLists=e.data.accountSetupHeadNameList}))},deletePost:function(t){var e=this,a="accountSetupInfo/".concat(t);axios.delete(a).then((function(t){Toast.fire({icon:"success",title:"Delete Successfull."}),e.view()}))},addAccountsSetup:function(){var t=this;this.loading=!0,this.form.post("accountSetupInfo").then((function(e){t.loading=!1,Toast.fire({icon:"success",background:"#c9f4c9",title:"Account Setup add Successfull."}),t.form.reset(),t.view()})).catch((function(e){t.loading=!1,Toast.fire({icon:"error",title:"Something Missing"})}))}}},i=(a(359),a(0)),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.addAccountsSetup(e)}}},[a("div",{staticClass:"supplier-entry py-4 px-2 comm-form-back-img"},[a("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color"},[a("div",{staticClass:"form-group"},[t._m(1),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.placementType,expression:"form.placementType"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("placementType")},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"placementType",e.target.multiple?a:a[0])},function(e){return t.accountSetupHeadNameList()}]}},[a("option",{attrs:{value:"0"}},[t._v(" Select ")]),t._v(" "),t._l(t.placementTypeLists,(function(e){return a("option",{domProps:{value:e.id}},[t._v(" "+t._s(e.id)+". "+t._s(e.name)+" ")])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"placementType"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[t._m(2),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.headName,expression:"form.headName"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("headName")},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"headName",e.target.multiple?a:a[0])}}},[t._v(">\n                "),a("option",{attrs:{value:""}},[t._v(" Select ")]),t._v(" "),t._l(t.accountSetupHeadNameLists,(function(e){return a("option",{domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"headName"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[t._m(3),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.headCode,expression:"form.headCode"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("headCode")},attrs:{type:"text"},domProps:{value:t.form.headCode},on:{input:function(e){e.target.composing||t.$set(t.form,"headCode",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"headCode"}})],1)])]),t._v(" "),a("div",{staticClass:"d-block pt-3 pb-4 card-footer overflow-hidden"},[a("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12"},[t._m(4),t._v(" "),a("button",{staticClass:"btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right",attrs:{type:"submit",disabled:t.loading}},[t.loading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):a("span",{staticClass:"mr-2 opacity-7"},[a("i",{staticClass:"fa fa-paper-plane"})]),t._v(" "),a("span",{staticClass:"mr-1"},[t._v(" Add New Entry ")])])])])])]),t._v(" "),a("div",{staticClass:"card mt-5"},[t._m(5),t._v(" "),a("div",{staticClass:"supplier-entry py-4 px-2"},[a("div",{staticClass:"card-body table-responsive bg-white"},[a("table",{staticClass:"table table-hover table-striped table-bordered",staticStyle:{width:"100%"},attrs:{id:"example"}},[a("thead",[a("tr",[a("th",[t._v(" SL ")]),t._v(" "),a("th",[t._v(" Placement Type ")]),t._v(" "),a("th",[t._v("Head Name")]),t._v(" "),a("th",[t._v("Head Code")]),t._v(" "),a("th",[t._v("Edit")]),t._v(" "),t._e()])]),t._v(" "),a("tbody",t._l(t.accountSetups,(function(e,s){return a("tr",{key:e.id},[a("td",[t._v(t._s(++s))]),t._v(" "),a("td",t._l(t.placementTypeLists,(function(s){return s.id==e.placementType?a("span",[t._v("\n                  "+t._s(s.id)+", \n                  "+t._s(s.name)+"\n                  ")]):t._e()})),0),t._v(" "),a("td",t._l(t.viewAccountSetupHeadNameLists,(function(s){return s.id==e.headName?a("span",[t._v("\n                  "+t._s(s.id)+", \n                  "+t._s(s.name)+"\n                  ")]):t._e()})),0),t._v(" "),a("td",[t._v(t._s(e.headCode))]),t._v(" "),a("td",[a("router-link",{staticClass:"btn-wide btn-pill btn btn-outline-primary btn-hover-shine",attrs:{to:"/accountSetupEdit"+e.id}},[a("i",{staticClass:"fa fa-edit"})])],1),t._v(" "),t._e()])})),0)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header-tab card-header alert-info"},[e("div",{staticClass:"card-header-title font-size-lg text-capitalize font-weight-normal"},[e("i",{staticClass:"header-icon lnr-pencil icon-gradient bg-premium-dark"}),this._v(" "),e("h4",[this._v(" Accounts Setup ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("  Placement Type  "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Head Name "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Head Code \n                "),e("span",{staticClass:"badge badge-primary"},[this._v("ladger")]),this._v(" "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left",attrs:{type:"reset"}},[e("span",{staticClass:"mr-2 opacity-7"},[e("i",{staticClass:"fa fa-undo "})]),this._v(" "),e("span",{staticClass:"mr-1"},[this._v(" Clear ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header-tab card-header alert-info"},[e("h4",[e("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-premium-dark"}),this._v("\n          View Information ")])])}],!1,null,null,null);e.default=n.exports}}]);