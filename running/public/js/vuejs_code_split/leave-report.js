(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{654:function(e,t,a){"use strict";a.r(t);var s=a(6),n=a(1),o=a.n(n);Vue.use(s.a),Vue.use(s.b);var l={data:function(){return{employee:"",employeeNames:{},leaveEntryLists:{},leaveLists:{},currentDateMonth:{},date:{from:null,to:null,month:null,monthIndex:null,year:null},moment:o.a}},props:{limit:{type:Number,default:2}},components:{MonthPicker:s.a,MonthPickerInput:s.b},mounted:function(){this.employeeNameList(),this.employeeLeaveEntryList()},methods:{parseDate:function(e,t){return o()(t,"YYYY-MM-DD ").diff(o()(e,"YYYY-MM-DD "),"days")},showDate:function(e){var t=this;this.date=e,""==this.employee?axios.get("/leaveReportMonth/0/".concat(this.date.monthIndex,"/").concat(this.date.year)).then((function(e){t.leaveEntryLists=e.data.leaveReportLists,t.currentDateMonth=(new Date).toLocaleString().split(",")[0]})):axios.get("/leaveReportMonth/".concat(this.employee,"/").concat(this.date.monthIndex,"/").concat(this.date.year)).then((function(e){t.leaveEntryLists=e.data.leaveReportLists,t.currentDateMonth=(new Date).toLocaleString().split(",")[0]}))},showEmployee:function(){var e=this;this.date.monthIndex,axios.get("/leaveReportMonth/".concat(this.employee,"/0/0")).then((function(t){e.leaveEntryLists=t.data.leaveReportLists,e.currentDateMonth=(new Date).toLocaleString().split(",")[0]}))},employeeNameList:function(){var e=this;axios.get("/employeeName").then((function(t){e.employeeNames=t.data.employeeName}))},employeeLeaveEntryList:function(){var e=this;axios.get("/leaveReport").then((function(t){e.leaveEntryLists=t.data.leaveReportLists,e.leaveLists=t.data.leaveLists,e.currentDateMonth=(new Date).toLocaleString().split(",")[0]}))},getPaginateList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("leaveReport?page="+t).then((function(t){e.leaveEntryLists=t.data.leaveReportLists}))}}},i=a(0),r=Object(i.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("div",{staticClass:"card main-card  element-block-example"},[e._m(0),e._v(" "),a("table",{staticClass:"table"},[a("tr",[a("td",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 col-xs-12"}),e._v(" "),a("div",{staticClass:"col-12 col-md-4 col-xs-12 m-2"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 col-xs-12 "},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[e._v("Select Employee")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.employee,expression:"employee"}],staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"},on:{click:function(t){return t.preventDefault(),e.showEmployee()},change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.employee=t.target.multiple?a:a[0]}}},[a("option",[e._v("Selecet One")]),e._v(" "),e._l(e.leaveLists,(function(t){return a("option",{domProps:{value:t.employeEntryId}},[t.employee_name?a("span",[e._v(e._s(t.employee_name.userName))]):e._e()])}))],2)])]),e._v(" "),a("div",{staticClass:"col-12 col-md-6 col-xs-12"},[a("label",[e._v(" Select Month")]),a("month-picker-input",{attrs:{"no-default":!0},on:{change:e.showDate}})],1)])]),e._v(" "),a("div",{staticClass:"col-12 col-md-4 col-xs-12"})])])])]),e._v(" "),a("div",{staticClass:"table-responsive bg-white"},[a("table",{staticClass:"table table-hover table-striped table-bordered "},[e._m(1),e._v(" "),a("tbody",e._l(e.leaveEntryLists.data,(function(t,s){return a("tr",[a("td",[e._v(e._s(s+1))]),e._v(" "),a("td",[t.employee_name?a("span",[e._v(e._s(t.employee_name.userName))]):e._e()]),e._v(" "),a("td",[t.employee_name?a("span",[e._v(e._s(t.employee_name.shop_employee_types.shopEmployeeTypeName))]):e._e()]),e._v(" "),a("td",[t.employee_name?a("span",[e._v(e._s(t.employee_name.job_departments.jobDepartmentName))]):e._e()]),e._v(" "),a("td",[e._v(e._s(t.startDate))]),e._v(" "),a("td",[e._v(e._s(t.endDate))]),e._v(" "),a("td",[e._v("\n                 "+e._s(e.parseDate(t.startDate,t.endDate)+1)+" Days\n                  ")]),e._v(" "),a("td",[e._v(e._s(e._f("shortlength")(t.commitment,"110","...")))])])})),0)])]),e._v(" "),a("span",{staticClass:"card_footer"},[a("pagination",{attrs:{data:e.leaveEntryLists,limit:e.limit},on:{"pagination-change-page":e.getPaginateList}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[e._v("< Previous")]),e._v(" "),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[e._v("Next >")])])],1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header alert-info"},[t("h3",[this._v("Employee Leave Report")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",{staticClass:"alert-info"},[a("th",[e._v("SN")]),e._v(" "),a("th",[e._v("Employee"),a("span",{staticClass:"textTransparent"},[e._v("_")]),e._v("Name")]),e._v(" "),a("th",[e._v("Department")]),e._v(" "),a("th",[e._v("Designation")]),e._v(" "),a("th",[e._v("Leave"),a("span",{staticClass:"textTransparent"},[e._v("_")]),e._v("Start"),a("span",{staticClass:"textTransparent"},[e._v("_")]),e._v("Date")]),e._v(" "),a("th",[e._v("Leave"),a("span",{staticClass:"textTransparent"},[e._v("_")]),e._v("End"),a("span",{staticClass:"textTransparent"},[e._v("_")]),e._v("Date")]),e._v(" "),a("th",[e._v("Day"),a("span",{staticClass:"textTransparent"},[e._v("_")]),e._v("Remain")]),e._v(" "),a("th",[e._v("Commitment")])])])}],!1,null,null,null);t.default=r.exports}}]);