(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{319:function(e,t,n){"use strict";var a=n(63);n.n(a).a},320:function(e,t,n){(e.exports=n(2)(!1)).push([e.i,'\n#employeeAttend input[type="checkbox"] {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  padding: 20px;\r\n  width: 30px;\r\n  height: 18px;\r\n  padding-right: 20px;\n}\n#employeeAttend .form-check-label {\r\n  margin-left: 38px;\r\n  font-size: 15px;\n}\r\n',""])},63:function(e,t,n){var a=n(320);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(a,o);a.locals&&(e.exports=a.locals)},644:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r={data:function(){return{form:new Form({employeEntryId:"",employeeInTime:"",employeeOutTime:""}),employeeNames:{},attendanceLists:{},employeeInDate:{},currentDateMonth:{},momentFormat:{},attendance:!1,notAttendance:!0,employeeLeave:!1,hideCheckbox:!0,buttonShow:!0,formShow:!1,loading:!1}},props:{limit:{type:Number,default:2}},mounted:function(){this.employeeNameList(),this.attendanceList(),this.getPaginateList()},methods:{employeeNameList:function(){var e=this;axios.get("/employeeAttendance/create").then((function(t){e.employeeNames=t.data.employeeNames}))},employeeAttendanceEntry:function(){var e=this;this.loading=!0,this.form.post("/employeeAttendance").then((function(t){e.loading=!1,t.data.inTime&&(Toast.fire({icon:"success",title:"Employee In Time Entry Successfully"}),e.form.reset(),e.attendance=!1,e.notAttendance=!0),t.data.outTime&&(Toast.fire({icon:"success",title:"Employee Out Time Entry Successfully"}),e.form.reset(),e.attendance=!1,e.notAttendance=!0),t.data.error&&(Toast.fire({icon:"error",title:"Select Employee Name and In Time Or Out Time"}),e.form.reset()),e.attendanceList()})).catch((function(t){e.loading=!1,Toast.fire({icon:"error",title:"Something wrong"})}))},employeEntryIdCatch:function(){var e=this;axios.get("/employeeAttendance/"+this.form.employeEntryId).then((function(t){t.data.employeeLeave?(e.employeeLeave=!0,e.hideCheckbox=!1):(e.employeeLeave=!1,e.hideCheckbox=!0,e.attendance=!1,e.notAttendance=!0,t.data.attendanceTime&&(e.attendance=!0,e.notAttendance=!1,e.employeeLeave=!1,e.hideCheckbox=!0),t.data.inTimeAndOutTime&&(e.attendance=!0,e.notAttendance=!0,e.employeeLeave=!1,e.hideCheckbox=!0),t.data.noEntry&&(e.attendance=!1,e.notAttendance=!0,e.employeeLeave=!1,e.hideCheckbox=!0))}))},attendanceList:function(){var e=this;axios.get("/employeeAttendance").then((function(t){e.attendanceLists=t.data.attendanceLists,e.employeeInDate=t.data.employeeInDate.employeeInDate,e.currentDateMonth=(new Date).toLocaleString(),e.momentFormat=o()(String(e.currentDateMonth)).format("DD-MM-YYYY"),console.log(e.employeeInDate),console.log(e.momentFormat),e.employeeInDate>=e.momentFormat?(e.buttonShow=!1,e.formShow=!0):(e.buttonShow=!0,e.formShow=!1)}))},getPaginateList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("employeeAttendance?page="+t).then((function(t){e.attendanceLists=t.data.attendanceLists}))},clickForAttendance:function(){var e=this;axios.get("/clickForAttendanceLeave").then((function(t){e.attendanceList()})),axios.get("/clickForAttendanceAbsent").then((function(t){e.attendanceList()}))}}},i=(n(319),n(0)),s=Object(i.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("div",{staticClass:"card"},[e._m(0),e._v(" "),n("div",{staticClass:"supplier-entry py-4 px-2"},[n("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border",attrs:{id:"employeeAttend"}},[e.buttonShow?n("div",[n("button",{staticClass:"mr-2 btn-pill btn-hover-shine btn btn-success",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.clickForAttendance()}}},[e._v("\n            Please Click For Attendance\n          ")])]):e._e(),e._v(" "),e.formShow?n("form",{on:{submit:function(t){return t.preventDefault(),e.employeeAttendanceEntry()}}},[n("div",{staticClass:"form-group"},[n("label",[e._v("Employee Name")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.form.employeEntryId,expression:"form.employeEntryId"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("employeEntryId")},attrs:{name:"employeEntryId"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"employeEntryId",t.target.multiple?n:n[0])},function(t){return t.preventDefault(),e.employeEntryIdCatch()}]}},[n("option",{attrs:{value:""}},[e._v("Select One ")]),e._v(" "),e._l(e.employeeNames,(function(t){return n("option",{key:t.id,domProps:{value:t.shopEmployeeEntryId}},[n("span",[n("span",[e._v("\n                    "+e._s(t.userName))])])])}))],2),e._v(" "),n("has-error",{attrs:{form:e.form,field:"employeEntryId"}})],1),e._v(" "),e.hideCheckbox?n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.employeeInTime,expression:"form.employeeInTime"}],staticClass:"form-check-input",class:{"is-invalid":e.form.errors.has("employeeInTime")},attrs:{type:"checkbox",disabled:!!e.attendance,name:"employeeInTime",value:"1"},domProps:{checked:Array.isArray(e.form.employeeInTime)?e._i(e.form.employeeInTime,"1")>-1:e.form.employeeInTime},on:{change:function(t){var n=e.form.employeeInTime,a=t.target,o=!!a.checked;if(Array.isArray(n)){var r=e._i(n,"1");a.checked?r<0&&e.$set(e.form,"employeeInTime",n.concat(["1"])):r>-1&&e.$set(e.form,"employeeInTime",n.slice(0,r).concat(n.slice(r+1)))}else e.$set(e.form,"employeeInTime",o)}}}),e._v(" "),n("label",{staticClass:"form-check-label"},[e._v("Employee In Time")]),e._v(" "),n("has-error",{attrs:{form:e.form,field:"employeeInTime"}})],1):e._e(),e._v(" "),e.hideCheckbox?n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.employeeOutTime,expression:"form.employeeOutTime"}],staticClass:"form-check-input",class:{"is-invalid":e.form.errors.has("employeeOutTime")},attrs:{type:"checkbox",disabled:!!e.notAttendance,name:"employeeOutTime",value:"1"},domProps:{checked:Array.isArray(e.form.employeeOutTime)?e._i(e.form.employeeOutTime,"1")>-1:e.form.employeeOutTime},on:{change:function(t){var n=e.form.employeeOutTime,a=t.target,o=!!a.checked;if(Array.isArray(n)){var r=e._i(n,"1");a.checked?r<0&&e.$set(e.form,"employeeOutTime",n.concat(["1"])):r>-1&&e.$set(e.form,"employeeOutTime",n.slice(0,r).concat(n.slice(r+1)))}else e.$set(e.form,"employeeOutTime",o)}}}),e._v(" "),n("label",{staticClass:"form-check-label"},[e._v("Employee Out Time")]),e._v(" "),n("has-error",{attrs:{form:e.form,field:"employeeOutTime"}})],1):e._e(),e._v(" "),e.employeeLeave?n("div",{staticClass:"form-group"},[e._v("\n            The Employee is on Leave\n          ")]):e._e(),e._v(" "),n("div",{staticClass:"text-right pt-3"},[n("button",{staticClass:"mr-2 btn-pill btn-hover-shine btn btn-primary",attrs:{type:"submit",disabled:e.loading}},[e.loading?n("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):e._e(),e._v(" "),e._m(1),e._v(" "),n("span",{staticClass:"mr-1"},[e._v(" Submit ")])])])]):e._e()])])]),e._v(" "),n("div",{staticClass:"card main-card element-block-example mt-5"},[e._m(2),e._v(" "),n("div",{staticClass:"table-responsive bg-white"},[n("table",{staticClass:"table table-hover table-bordered table-striped"},[e._m(3),e._v(" "),n("tbody",e._l(e.attendanceLists.data,(function(t,a){return n("tr",{key:t.id},[n("td",[e._v(e._s(a+1))]),e._v(" "),t.employee_name?n("td",[e._v("\n              "+e._s(t.employee_name.userName)+"\n            ")]):e._e(),e._v(" "),t.employeeInDate&&"L"!=t.attendanceStatus?n("td",[e._v("\n              "+e._s(t.employeeInDate)+"\n            ")]):n("td",[e._v("00")]),e._v(" "),t.employeeInTime?n("td",[e._v("\n              "+e._s(t.employeeInTime)+"\n            ")]):n("td"),e._v(" "),t.employeeOutDate?n("td",[e._v("\n              "+e._s(t.employeeOutDate)+"\n            ")]):n("td"),e._v(" "),t.employeeOutTime?n("td",[e._v("\n              "+e._s(t.employeeOutTime)+"\n            ")]):n("td"),e._v(" "),t.attendanceStatus?n("td",[e._v("\n              "+e._s(t.attendanceStatus)+"\n            ")]):e._e()])})),0)])]),e._v(" "),n("span",{staticClass:"card_footer"},[n("pagination",{attrs:{data:e.attendanceLists,limit:e.limit},on:{"pagination-change-page":e.getPaginateList}},[n("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[e._v("< Previous")]),e._v(" "),n("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[e._v("Next >")])])],1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.2)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[t("h3",{staticStyle:{color:"black"}},[this._v("Employee Attendance")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"mr-2 opacity-7"},[t("i",{staticClass:"fa fa-paper-plane"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header",staticStyle:{"background-color":"rgb(1, 176, 241)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[t("h3",{staticStyle:{color:"black"}},[this._v("Employee Attendance List")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("SN")]),e._v(" "),n("th",[e._v("Employee Name")]),e._v(" "),n("th",[e._v("Employee In Date")]),e._v(" "),n("th",[e._v("Employee In Time")]),e._v(" "),n("th",[e._v("Employee Out Date")]),e._v(" "),n("th",[e._v("Employee Out Time")]),e._v(" "),n("th",[e._v("Attendance Status")])])])}],!1,null,null,null);t.default=s.exports}}]);