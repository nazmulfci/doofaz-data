(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{861:function(t,e,a){"use strict";a.r(e);var s=a(1),n=a.n(s),i={data:function(){return{leaveEntryLists:{},currentDateMonth:{},loading:!1,moment:n.a}},props:{limit:{type:Number,default:2}},mounted:function(){this.employeeLeaveList()},methods:{parseDate:function(t,e){return n()(e,"YYYY-MM-DD ").diff(n()(t,"YYYY-MM-DD "),"days")},employeeLeaveList:function(){var t=this;axios.get("/employeeLeaveEntry/"+this.$route.params.id).then((function(e){t.leaveEntryLists=e.data.leaveEntryLists}))},getPaginateList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("employeeLeaveEntry/"+this.$route.params.id+"?page="+e).then((function(e){t.leaveEntryLists=e.data.leaveEntryLists}))}}},r=a(0),v=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"card main-card element-block-example mt-5"},[t._m(0),t._v(" "),a("div",{staticClass:"table-responsive bg-white p-3"},[a("table",{staticClass:"table table-hover table-striped table-bordered"},[t._m(1),t._v(" "),a("tbody",t._l(t.leaveEntryLists.data,(function(e,s){return a("tr",{key:e.vue},[a("td",[t._v(t._s(s+1))]),t._v(" "),a("td",[e.employee_name?a("span",[t._v(t._s(e.employee_name.userName)+"\n              ")]):t._e()]),t._v(" "),a("td",[t._v(t._s(e.startDate))]),t._v(" "),a("td",[t._v(t._s(e.endDate))]),t._v(" "),a("td",[t._v("\n               "+t._s(t.parseDate(e.startDate,e.endDate)+1)+" Days\n              ")]),t._v(" "),a("td",[t._v("\n              "+t._s(t._f("shortlength")(e.commitment,"80","..."))+"\n            ")])])})),0)])]),t._v(" "),a("span",{staticClass:"card_footer"},[a("pagination",{attrs:{data:t.leaveEntryLists,limit:t.limit},on:{"pagination-change-page":t.getPaginateList}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("< Previous")]),t._v(" "),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next >")])])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header alert-info"},[e("h3",[this._v("Employee Leave List")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"alert-info"},[a("th",[t._v("SN")]),t._v(" "),a("th",[t._v("Employee"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("Name")]),t._v(" "),a("th",[t._v("\n              Leave"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("Start"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("Date\n            ")]),t._v(" "),a("th",[t._v("\n              Leave"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("End"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("Date\n            ")]),t._v(" "),a("th",[t._v("Day"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("Remain")]),t._v(" "),a("th",[t._v("Commitment")])])])}],!1,null,null,null);e.default=v.exports}}]);