(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{823:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{myGuard:"",authInfos:[],shopTypelists:[],productBrandReportLists:{},productBrandReportLists1:{}}},mounted:function(){this.shopIncomeTypeReportList(),this.shopIncomeTypeReportList1(),this.getShopType(),this.getMyGuard(),this.getAuthInfo()},methods:{getAuthInfo:function(){var t=this;fetch("getAuthInfo").then((function(t){return t.json()})).then((function(e){t.authInfos=e.data}))},getShopType:function(){var t=this;fetch("shopTypeEntry").then((function(t){return t.json()})).then((function(e){t.shopTypelists=e.data}))},getMyGuard:function(){var t=this;axios.get("/getMyGuard").then((function(e){t.myGuard=e.data.myGuard}))},shopIncomeTypeReportList:function(){var t=this;axios.get("/shopProductBrandReportList/1").then((function(e){t.productBrandReportLists=e.data.owneProductBrandReport}))},shopIncomeTypeReportList1:function(){var t=this;axios.get("/shopProductBrandReportList/2").then((function(e){t.productBrandReportLists1=e.data.globalProductBrandReport}))}}},n=s(0),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("div",{staticClass:"app-page-title"},[s("div",{staticClass:"page-title-wrapper"},[t._m(0),t._v(" "),s("div",{staticClass:"page-title-actions"},[s("router-link",{staticClass:"btn-shadow mr-3 btn btn-warning",attrs:{to:"/productbrand@list",type:"button",title:"","data-placement":"bottom","data-toggle":"tooltip","data-original-title":"Refresh"}},[s("i",{staticClass:"fa fa-undo text-white"})]),t._v(" "),t._m(1)],1)])]),t._v(" "),s("div",{staticClass:"card main-card  element-block-example"},[t._m(2),t._v(" "),s("div",{staticClass:"card-body table-responsive bg-white"},[s("table",{staticClass:"table table-hover table-bordered bordered",staticStyle:{width:"100%"},attrs:{id:"example"}},t._l(t.shopTypelists,(function(e){return"web"==t.myGuard||"admin"==t.myGuard&&t.authInfos.shopTypeId==e.shopTypeEntryId?s("tbody",{key:e.shopTypeEntryId},[s("tr",[s("th",{staticClass:"text-center alert-success",attrs:{colspan:"12"}},[s("h4",[t._v(" "+t._s(e.shopTypeName)+"  ")])])]),t._v(" "),t._m(3,!0),t._v(" "),t._l(t.productBrandReportLists,(function(a,n){return a.shopTypeId==e.shopTypeEntryId?s("tr",{key:a.productBrandEntryId},[s("td",[t._v(" "+t._s(++n)+" ")]),t._v(" "),s("td",[t._v(" "+t._s(a.productBrandName)+" ")])]):t._e()})),t._v(" "),t._m(4,!0),t._v(" "),t._l(t.productBrandReportLists1,(function(a,n){return a.shopTypeId==e.shopTypeEntryId?s("tr",{key:a.productBrandEntryId},[s("td",[t._v(" "+t._s(++n)+" ")]),t._v(" "),s("td",[t._v(" "+t._s(a.productBrandName)+" ")])]):t._e()}))],2):t._e()})),0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-title-heading"},[e("div",{staticClass:"page-title-icon"},[e("i",{staticClass:"pe-7s-menu icon-gradient bg-mean-fruit"})]),this._v(" "),e("div",[this._v("\n            Product Brand Report\n            "),e("div",{staticClass:"page-title-subheading"},[this._v("\n             Product Brand Report\n            ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-inline-block dropdown"},[e("button",{staticClass:"btn-shadow btn btn-info",attrs:{type:"button",onclick:"window.history.back()"}},[e("span",{staticClass:"lnr lnr-arrow-left"}),this._v("\n              Back\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header-tab card-header alert-info"},[e("h4",[e("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-premium-dark"}),this._v("\n          Product Brand Report  ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"text-center alert-light",attrs:{colspan:"2"}},[e("span",{staticClass:"badge badge-success"},[this._v(" Owner ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"text-center alert-light",attrs:{colspan:"2"}},[e("span",{staticClass:"badge badge-success"},[this._v(" Global ")])])])}],!1,null,null,null);e.default=r.exports}}]);