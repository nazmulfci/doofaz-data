(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{657:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{employeeTypeOwnerLists:{},employeeTypeGlobalLists:{}}},props:{limit:{type:Number,default:2}},mounted:function(){this.employeeTypeReport()},methods:{employeeTypeReport:function(){var t=this;axios.get("/employeeTypeReports").then((function(e){t.employeeTypeOwnerLists=e.data.employeeTypeOwnerList,t.employeeTypeGlobalLists=e.data.employeeTypeGlobalList}))},getPaginateList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("employeeTypeReport?page="+e).then((function(e){t.employeeTypeOwnerLists=e.data.employeeTypeOwnerList,t.employeeTypeGlobalLists=e.data.employeeTypeGlobalList}))}}},i=a(0),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"card main-card  element-block-example"},[t._m(0),t._v(" "),a("div",{staticClass:"table-responsive bg-white p-2"},[a("table",{staticClass:"table table-hover table-bordered table-striped"},[t._m(1),t._v(" "),a("tbody",t._l(t.employeeTypeOwnerLists.data,(function(e,s){return a("tr",[a("td",[t._v(t._s(s+1))]),t._v(" "),a("td",[t._v(t._s(e.shopEmployeeTypeName))])])})),0)])]),t._v(" "),a("span",{staticClass:"card_footer"},[a("pagination",{attrs:{data:t.employeeTypeOwnerLists,limit:t.limit},on:{"pagination-change-page":t.getPaginateList}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("< Previous")]),t._v(" "),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next >")])])],1)]),t._v(" "),a("div",{staticClass:"card main-card  element-block-example mt-5"},[t._m(2),t._v(" "),a("div",{staticClass:"table-responsive bg-white p-2"},[a("table",{staticClass:"table table-hover table-bordered mb-0"},[t._m(3),t._v(" "),a("tbody",t._l(t.employeeTypeGlobalLists.data,(function(e,s){return a("tr",[a("td",[t._v(t._s(s+1))]),t._v(" "),a("td",[t._v(t._s(e.shopEmployeeTypeName))])])})),0)])]),t._v(" "),a("span",{staticClass:"card_footer"},[a("pagination",{attrs:{data:t.employeeTypeGlobalLists,limit:t.limit},on:{"pagination-change-page":t.getPaginateList}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("< Previous")]),t._v(" "),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next >")])])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header alert-info"},[e("h3",[this._v("Employee Type Report (Owner)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",{staticClass:"alert-info"},[e("th",[this._v("SN")]),this._v(" "),e("th",[this._v("Job"),e("span",{staticClass:"textTransparent"},[this._v("_")]),this._v("Department"),e("span",{staticClass:"textTransparent"},[this._v("_")]),this._v("Name")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header alert-info"},[e("h3",[this._v("Employee Type Report (Global)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",{staticClass:"alert-info"},[e("th",[this._v("SN")]),this._v(" "),e("th",[this._v("Job"),e("span",{staticClass:"textTransparent"},[this._v("_")]),this._v("Department"),e("span",{staticClass:"textTransparent"},[this._v("_")]),this._v("Name")])])])}],!1,null,null,null);e.default=n.exports}}]);