(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{652:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{salaryGradeSetupLists:{},employeeTypeLists:{},jobDepartmentLists:{}}},props:{limit:{type:Number,default:2}},mounted:function(){this.salaryGradeSetupList(),this.getPaginateList()},methods:{salaryGradeSetupList:function(){var t=this;axios.get("/salaryGradeSetupReport").then((function(e){t.employeeTypeLists=e.data.employeeTypeList,t.jobDepartmentLists=e.data.jobDepartmentList,t.salaryGradeSetupLists=e.data.salaryGradeSetupList}))},getPaginateList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("/salaryGradeSetupReport?page="+e).then((function(e){t.salaryGradeSetupLists=e.data.salaryGradeSetupList}))}}},n=a(0),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"card main-card  element-block-example"},[t._m(0),t._v(" "),a("div",{staticClass:"table-responsive bg-white p-3"},[a("table",{staticClass:"table table-hover table-striped table-bordered "},[t._m(1),t._v(" "),a("tbody",t._l(t.salaryGradeSetupLists.data,(function(e,s){return a("tr",[a("td",[t._v(t._s(s+1))]),t._v(" "),e.shop_employee_list?a("td",t._l(t.employeeTypeLists,(function(s){return s.shopEmployeeTypeId==e.shop_employee_list.employeeTypeId?a("span",[t._v("\n                    "+t._s(s.shopEmployeeTypeName)+"\n                 ")]):t._e()})),0):t._e(),t._v(" "),e.shop_employee_list?a("td",t._l(t.jobDepartmentLists,(function(s){return s.jobDepartmentEntryId==e.shop_employee_list.jobDepartmentId?a("span",[t._v("\n                   "+t._s(s.jobDepartmentName)+"\n                 ")]):t._e()})),0):t._e(),t._v(" "),e.shop_employee_list?a("td",[t._v(t._s(e.shop_employee_list.userName))]):t._e(),t._v(" "),e.shop_employee_list?a("td",[t._v(t._s(e.shop_employee_list.nidNumber))]):t._e(),t._v(" "),e.shop_employee_list?a("td",[t._v(t._s(e.shop_employee_list.presentAddress))]):t._e(),t._v(" "),e.grade_list?a("td",[t._v(t._s(e.grade_list.gradeName))]):t._e(),t._v(" "),e.grade_list?a("td",[t._v(t._s(e.grade_list.gradeAmount))]):t._e(),t._v(" "),a("td",[1==e.salaryGradeSetupStatus?a("div",[a("span",{staticClass:"badge btn-hover-shine badge-success"},[t._v("Published")])]):a("div",[a("span",{staticClass:"badge btn-hover-shine badge-danger"},[t._v("Unpublish")])])])])})),0)])]),t._v(" "),a("span",{staticClass:"card_footer"},[a("pagination",{attrs:{data:t.salaryGradeSetupLists,limit:t.limit},on:{"pagination-change-page":t.getPaginateList}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("< Previous")]),t._v(" "),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next >")])])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header alert-info"},[e("h3",[this._v("Salary Grade Setup Report ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"alert-info"},[a("th",[t._v("SN")]),t._v(" "),a("th",[t._v("Employee"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("Type"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("Name")]),t._v(" "),a("th",[t._v("Job"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("Department")]),t._v(" "),a("th",[t._v("Employee"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("Name")]),t._v(" "),a("th",[t._v("NID"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("Number")]),t._v(" "),a("th",[t._v("Present"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("Address")]),t._v(" "),a("th",[t._v("Salary"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("Grade"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("Name")]),t._v(" "),a("th",[t._v("Salary"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("Grade"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("Amount")]),t._v(" "),a("th",[t._v("Salary"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("Grade"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("Setup"),a("span",{staticClass:"textTransparent"},[t._v("_")]),t._v("Status")])])])}],!1,null,null,null);e.default=r.exports}}]);