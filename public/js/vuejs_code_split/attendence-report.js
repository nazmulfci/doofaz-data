(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attendence-report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/attendance@report.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/attendance@report.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_month_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-month-picker */ "./node_modules/vue-month-picker/src/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



Vue.use(vue_month_picker__WEBPACK_IMPORTED_MODULE_1__["MonthPicker"]);
Vue.use(vue_month_picker__WEBPACK_IMPORTED_MODULE_1__["MonthPickerInput"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      employeeNames: {},
      currentDateMonth: {},
      totalAttendance: {},
      momentFormat: {},
      momentFormatMonth: {},
      momentFormatDate: {},
      workDay: '',
      number: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      date: {
        from: null,
        to: null,
        month: null,
        monthIndex: null,
        year: null
      }
    };
  },
  components: {
    MonthPicker: vue_month_picker__WEBPACK_IMPORTED_MODULE_1__["MonthPicker"],
    MonthPickerInput: vue_month_picker__WEBPACK_IMPORTED_MODULE_1__["MonthPickerInput"]
  },
  mounted: function mounted() {
    this.employeeLeaveEntryList();
    this.employeeLeaveEntryList();
    this.holidaySetupReport();
  },
  methods: {
    holidaySetupReport: function holidaySetupReport() {
      var _this = this;

      axios.get('/holidaySetupReport').then(function (res) {
        _this.workDay = res.data.dayRemain;
      });
      this.currentDateMonth = new Date().toLocaleString().split(',')[0];
    },
    showDate: function showDate(date) {
      var _this2 = this;

      this.date = date;
      axios.get("/employeeAttendanceReportMonthly/".concat(this.date.monthIndex, "/").concat(this.date.year)).then(function (res) {
        _this2.employeeNames = res.data.employeeNames;
        _this2.attendanceReports = res.data.attendanceReports;
        _this2.totalAttendances = res.data.totalAttendance;
        _this2.workDay = res.data.dayRemain;
        _this2.currentDateMonth = new Date().toLocaleString();
        _this2.momentFormat = moment__WEBPACK_IMPORTED_MODULE_0___default()(String(_this2.currentDateMonth)).format('MM/DD/YYYY');
        _this2.momentFormatMonth = _this2.momentFormat.split('/')[0];
        _this2.momentFormatDate = _this2.momentFormat.split('/')[1];
      });
    },
    employeeLeaveEntryList: function employeeLeaveEntryList() {
      var _this3 = this;

      axios.get('/employeeAttendanceReport').then(function (res) {
        _this3.employeeNames = res.data.employeeNames;
        _this3.attendanceReports = res.data.attendanceReports;
        _this3.totalAttendances = res.data.totalAttendance;
        _this3.currentDateMonth = new Date().toLocaleString();
        _this3.momentFormat = moment__WEBPACK_IMPORTED_MODULE_0___default()(String(_this3.currentDateMonth)).format('MM/DD/YYYY');
        _this3.momentFormatMonth = _this3.momentFormat.split('/')[0];
        _this3.momentFormatDate = _this3.momentFormat.split('/')[1];
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/attendance@report.vue?vue&type=template&id=06308c1a&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/attendance@report.vue?vue&type=template&id=06308c1a& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [
    _c(
      "div",
      { staticClass: "card main-card  element-block-example" },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "center",
          [
            _c("span", [_vm._v(" Select Month")]),
            _vm._v(" "),
            _c("month-picker-input", {
              attrs: { "no-default": true },
              on: { change: _vm.showDate }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive bg-white mt-3" }, [
          _c(
            "table",
            { staticClass: "table table-hover table-striped table-bordered " },
            [
              _c("thead", [
                _c(
                  "tr",
                  { staticClass: "alert-info" },
                  [
                    _c("th", [_vm._v("SN")]),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _c("th", [_vm._v("P")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("A")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("L")]),
                    _vm._v(" "),
                    _vm._l(_vm.number, function(num) {
                      return _c("th", [
                        _vm._v(
                          "\n                 " +
                            _vm._s(num) +
                            "\n              "
                        )
                      ])
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.employeeNames, function(employeeName, index) {
                  return _c(
                    "tr",
                    [
                      _c("td", [_vm._v(_vm._s(index + 1))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(employeeName.userName))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        _vm._l(_vm.totalAttendances, function(totalAtten) {
                          return totalAtten.employeEntryId ==
                            employeeName.shopEmployeeEntryId &&
                            totalAtten.attendanceStatus == "P"
                            ? _c("span", [_vm._v(_vm._s(totalAtten.total))])
                            : _vm._e()
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        _vm._l(_vm.totalAttendances, function(totalAtten) {
                          return totalAtten.employeEntryId ==
                            employeeName.shopEmployeeEntryId &&
                            totalAtten.attendanceStatus == "A"
                            ? _c("span", [_vm._v(_vm._s(totalAtten.total))])
                            : _vm._e()
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        _vm._l(_vm.totalAttendances, function(totalAtten) {
                          return totalAtten.employeEntryId ==
                            employeeName.shopEmployeeEntryId &&
                            totalAtten.attendanceStatus == "L"
                            ? _c("span", [_vm._v(_vm._s(totalAtten.total))])
                            : _vm._e()
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.number, function(num) {
                        return _c(
                          "td",
                          _vm._l(_vm.attendanceReports, function(
                            attendanceReport
                          ) {
                            return attendanceReport.employeEntryId ==
                              employeeName.shopEmployeeEntryId
                              ? _c(
                                  "span",
                                  {
                                    attrs: {
                                      title:
                                        "In Time :" +
                                        attendanceReport.employeeInTime +
                                        " Out Time :" +
                                        attendanceReport.employeeOutTime
                                    }
                                  },
                                  [
                                    attendanceReport.employeeInDate.split(
                                      "-"
                                    )[0] == num
                                      ? _c("span", [
                                          _vm._v(
                                            "\n                     " +
                                              _vm._s(
                                                attendanceReport.attendanceStatus
                                              ) +
                                              "\n                     "
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                )
                              : _vm._e()
                          }),
                          0
                        )
                      })
                    ],
                    2
                  )
                }),
                0
              )
            ]
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header alert-info" }, [
      _c("h3", [_vm._v("Employee Attendance Report")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [
      _vm._v("Employee"),
      _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
      _vm._v("Name")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/attendance@report.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/attendance@report.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attendance_report_vue_vue_type_template_id_06308c1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendance@report.vue?vue&type=template&id=06308c1a& */ "./resources/js/admin/page/hrmanagement/hrreport/attendance@report.vue?vue&type=template&id=06308c1a&");
/* harmony import */ var _attendance_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendance@report.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/hrmanagement/hrreport/attendance@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _attendance_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _attendance_report_vue_vue_type_template_id_06308c1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _attendance_report_vue_vue_type_template_id_06308c1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/hrmanagement/hrreport/attendance@report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/attendance@report.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/attendance@report.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./attendance@report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/attendance@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/attendance@report.vue?vue&type=template&id=06308c1a&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/attendance@report.vue?vue&type=template&id=06308c1a& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_report_vue_vue_type_template_id_06308c1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./attendance@report.vue?vue&type=template&id=06308c1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/attendance@report.vue?vue&type=template&id=06308c1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_report_vue_vue_type_template_id_06308c1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_report_vue_vue_type_template_id_06308c1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);