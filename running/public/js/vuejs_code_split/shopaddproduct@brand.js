(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{783:function(t,a,r){"use strict";r.r(a);var e={data:function(){return{form:new Form({value:"",productBrandName:"",productBrandStatus:1,shopTypeId:"",productBrandPosition:""}),adminProductBrandLists:{},shopProductBrandLists:{},shopTypeNames:{},authInfo:{},loading:!1}},mounted:function(){this.ShowDataLists(),this.shopTypeNameShow(),this.condition(),this.productBrandPosition()},methods:{productBrandCreate:function(){var t=this;this.loading=!0,this.form.post("/shopproductBrandEntry").then((function(a){t.loading=!1,a.data.changeProductBrandName?Toast.fire({icon:"error",title:"Change your Product Brand Name"}):(t.form.reset(),Toast.fire({icon:"success",title:"Product Brand Entry Successfully"}),t.ShowDataLists(),t.productBrandPosition())})).catch((function(a){t.loading=!1,Toast.fire({icon:"error",title:"Something wrong"})}))},ShowDataLists:function(){var t=this;axios.get("/shopproductBrandEntry").then((function(a){t.adminProductBrandLists=a.data.adminProductBrandList,t.shopProductBrandLists=a.data.shopProductBrandList}))},shopTypeNameShow:function(){var t=this;axios.get("/category/create").then((function(a){t.shopTypeNames=a.data.shopTypeNames}))},adminShopTypeIdSelect:function(){var t=this;axios.get("/adminProductBrandPosition/"+this.form.shopTypeId).then((function(a){t.form.productBrandPosition=a.data.productBrandIncrement}))},productBrandPosition:function(){var t=this;axios.get("/shopProductBrandPosition").then((function(a){t.form.productBrandPosition=a.data.productBrandIncrement}))},changeStatus:function(t){var a=this;axios.get("/shopproductBrandEntry/"+t).then((function(t){Toast.fire({icon:"success",title:"Product Brand Status Change Successfully"}),a.ShowDataLists()}))},condition:function(){var t=this;axios.get("/condition").then((function(a){t.authInfo=a.data.authInfo}))},deleteProductBrand:function(t){var a=this;axios.delete("/shopproductBrandEntry/"+t).then((function(t){Toast.fire({icon:"success",title:"Deleted Product BrandEntry successfully"}),a.ShowDataLists()}))}}},o=r(0),n=Object(o.a)(e,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("span",[r("div",{staticClass:"card"},[t._m(0),t._v(" "),r("form",{on:{submit:function(a){return a.preventDefault(),t.productBrandCreate()}}},[r("div",{staticClass:"supplier-entry py-4 px-2 comm-form-back-img"},[r("div",{staticClass:"col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 p-5 supplier-border comm-form-box-back-color"},[1==t.authInfo.role||2==t.authInfo.role?r("div",{staticClass:"form-group"},[r("label",[t._v("Select Shop Type ")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.shopTypeId,expression:"form.shopTypeId"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("productBrandStatus")},attrs:{name:"shopTypeId"},on:{change:[function(a){var r=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"shopTypeId",a.target.multiple?r:r[0])},function(a){return a.preventDefault(),t.adminShopTypeIdSelect()}]}},[r("option",{attrs:{value:""}},[t._v("Select One")]),t._v(" "),t._l(t.shopTypeNames,(function(a){return r("option",{domProps:{value:a.shopTypeEntryId}},[t._v(t._s(a.shopTypeName)+" ")])}))],2),t._v(" "),r("has-error",{attrs:{form:t.form,field:"productBrandStatus"}})],1):t._e(),t._v(" "),r("div",{staticClass:"form-group"},[t._m(1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.productBrandName,expression:"form.productBrandName"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("productBrandName")},attrs:{type:"text",name:"productBrandName",placeholder:"Brand Name"},domProps:{value:t.form.productBrandName},on:{input:function(a){a.target.composing||t.$set(t.form,"productBrandName",a.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"productBrandName"}})],1),t._v(" "),r("div",{staticClass:"form-group",staticStyle:{display:"none"}},[t._m(2),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.productBrandPosition,expression:"form.productBrandPosition"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("productBrandPosition")},attrs:{type:"text",disabled:"",name:"productBrandPosition",placeholder:"Product Brand Position"},domProps:{value:t.form.productBrandPosition},on:{input:function(a){a.target.composing||t.$set(t.form,"productBrandPosition",a.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"productBrandPosition"}})],1),t._v(" "),r("div",{staticClass:"form-group",staticStyle:{display:"none"}},[t._m(3),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.productBrandStatus,expression:"form.productBrandStatus"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("productBrandStatus")},attrs:{name:"productBrandStatus"},on:{change:function(a){var r=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"productBrandStatus",a.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[t._v("Select One")]),t._v(" "),r("option",{attrs:{value:"1"}},[t._v("Publish")]),t._v(" "),r("option",{attrs:{value:"0"}},[t._v("Unpublish")])]),t._v(" "),r("has-error",{attrs:{form:t.form,field:"productBrandStatus"}})],1)])]),t._v(" "),r("div",{staticClass:"d-block pt-3 pb-4 card-footer overflow-hidden"},[r("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12"},[t._m(4),t._v(" "),r("button",{staticClass:"btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right",attrs:{type:"submit",disabled:t.loading}},[t.loading?r("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):r("span",{staticClass:"mr-2 opacity-7"},[r("i",{staticClass:"fa fa-paper-plane"})]),t._v(" "),r("span",{staticClass:"mr-1"},[t._v(" Add New Entry ")])])])])])]),t._v(" "),r("div",{staticClass:"card mt-5"},[t._m(5),t._v(" "),r("div",{staticClass:"supplier-entry py-1 px-1"},[r("div",{staticClass:"card-body table-responsive bg-white"},[r("table",{staticClass:"table table-hover table-striped table-bordered",staticStyle:{width:"100%"},attrs:{id:"example"}},[r("thead",[r("tr",{staticStyle:{background:"rgba(242, 242, 242, 0.47)"}},[r("th",[t._v("SN")]),t._v(" "),1==t.authInfo.role||2==t.authInfo.role?r("th",[t._v("Shop Type Name")]):t._e(),t._v(" "),r("th",[t._v("Product Brand Name")]),t._v(" "),r("th",[t._v("Edit")]),t._v(" "),r("th",[t._v("Delete")])])]),t._v(" "),1==t.authInfo.role||2==t.authInfo.role?r("tbody",t._l(t.adminProductBrandLists,(function(a,e){return r("tr",[r("td",[t._v(t._s(e+1))]),t._v(" "),r("td",[a.shop_type_name?r("span",[t._v(t._s(a.shop_type_name.shopTypeName))]):t._e()]),t._v(" "),r("td",[t._v(t._s(a.productBrandName))]),t._v(" "),r("td",[1==a.productBrandStatus?r("div",[r("button",{staticClass:"btn btn-hover-shine btn-success",attrs:{type:"button"},on:{click:function(r){return t.changeStatus(a.productBrandEntryId)}}},[t._v("Published")])]):r("div",[r("button",{staticClass:"btn btn-hover-shine btn-danger",attrs:{type:"button"},on:{click:function(r){return t.changeStatus(a.productBrandEntryId)}}},[t._v("Unpublish")])])]),t._v(" "),r("td",[r("router-link",{staticClass:"mr-2 btn-hover-shine btn btn-shadow btn-primary",attrs:{to:"/shopproductbrand@entryEdit"+a.productBrandEntryId}},[r("i",{staticClass:" fa fa-edit"}),t._v("Edit")])],1)])})),0):r("tbody",t._l(t.shopProductBrandLists,(function(a,e){return r("tr",[r("td",[t._v(t._s(e+1))]),t._v(" "),r("td",[t._v(t._s(a.productBrandName))]),t._v(" "),null==a.brand?r("td",[r("router-link",{staticClass:"mr-2 btn-hover-shine btn btn-shadow btn-primary",attrs:{to:"/shopproductbrand@entryEdit"+a.productBrandEntryId}},[r("i",{staticClass:" fa fa-edit"}),t._v("Edit")])],1):t._e(),t._v(" "),null==a.brand?r("td",[r("button",{staticClass:"mr-2 btn-hover-shine btn btn-shadow btn-danger",attrs:{type:"button"},on:{click:function(r){return t.deleteProductBrand(a.productBrandEntryId)}}},[r("i",{staticClass:" fa fa-trash"}),t._v("Delete")])]):t._e()])})),0)])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header-tab card-header alert-info"},[a("div",{staticClass:"card-header-title font-size-lg text-capitalize font-weight-normal"},[a("i",{staticClass:"header-icon lnr-pencil icon-gradient bg-premium-dark"}),this._v(" "),a("h4",[this._v(" Add Product Brand ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v("Product Brand Name\n                   "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v("Product Brand Position\n                   "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v("Product Brand Status\n                   "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left",attrs:{type:"reset"}},[a("span",{staticClass:"mr-2 opacity-7"},[a("i",{staticClass:"fa fa-undo "})]),this._v(" "),a("span",{staticClass:"mr-1"},[this._v(" Clear ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header-tab card-header alert-info"},[a("h4",[a("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-premium-dark"}),this._v("Product Brand List")])])}],!1,null,null,null);a.default=n.exports}}]);