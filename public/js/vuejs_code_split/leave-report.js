(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leave-report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/leave@report.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/leave@report.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_month_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-month-picker */ "./node_modules/vue-month-picker/src/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
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



Vue.use(vue_month_picker__WEBPACK_IMPORTED_MODULE_0__["MonthPicker"]);
Vue.use(vue_month_picker__WEBPACK_IMPORTED_MODULE_0__["MonthPickerInput"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      employee: '',
      employeeNames: {},
      leaveEntryLists: {},
      leaveLists: {},
      currentDateMonth: {},
      date: {
        from: null,
        to: null,
        month: null,
        monthIndex: null,
        year: null
      },
      moment: moment__WEBPACK_IMPORTED_MODULE_1___default.a
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  components: {
    MonthPicker: vue_month_picker__WEBPACK_IMPORTED_MODULE_0__["MonthPicker"],
    MonthPickerInput: vue_month_picker__WEBPACK_IMPORTED_MODULE_0__["MonthPickerInput"]
  },
  mounted: function mounted() {
    this.employeeNameList();
    this.employeeLeaveEntryList();
  },
  methods: {
    parseDate: function parseDate(start, end) {
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(end, 'YYYY-MM-DD ').diff(moment__WEBPACK_IMPORTED_MODULE_1___default()(start, 'YYYY-MM-DD '), "days");
    },
    showDate: function showDate(date) {
      var _this = this;

      this.date = date;

      if (this.employee == '') {
        axios.get("/leaveReportMonth/0/".concat(this.date.monthIndex, "/").concat(this.date.year)).then(function (res) {
          _this.leaveEntryLists = res.data.leaveReportLists;
          _this.currentDateMonth = new Date().toLocaleString().split(',')[0];
        });
      } else {
        axios.get("/leaveReportMonth/".concat(this.employee, "/").concat(this.date.monthIndex, "/").concat(this.date.year)).then(function (res) {
          _this.leaveEntryLists = res.data.leaveReportLists;
          _this.currentDateMonth = new Date().toLocaleString().split(',')[0];
        });
      }
    },
    showEmployee: function showEmployee() {
      var _this2 = this;

      if (this.date.monthIndex == '') {
        axios.get("/leaveReportMonth/".concat(this.employee, "/0/0")).then(function (res) {
          _this2.leaveEntryLists = res.data.leaveReportLists;
          _this2.currentDateMonth = new Date().toLocaleString().split(',')[0];
        });
      } else {
        axios.get("/leaveReportMonth/".concat(this.employee, "/0/0")).then(function (res) {
          _this2.leaveEntryLists = res.data.leaveReportLists;
          _this2.currentDateMonth = new Date().toLocaleString().split(',')[0];
        });
      }
    },
    employeeNameList: function employeeNameList() {
      var _this3 = this;

      axios.get('/employeeName').then(function (res) {
        _this3.employeeNames = res.data.employeeName;
      });
    },
    employeeLeaveEntryList: function employeeLeaveEntryList() {
      var _this4 = this;

      axios.get('/leaveReport').then(function (res) {
        _this4.leaveEntryLists = res.data.leaveReportLists;
        _this4.leaveLists = res.data.leaveLists;
        _this4.currentDateMonth = new Date().toLocaleString().split(',')[0];
      });
    },
    getPaginateList: function getPaginateList() {
      var _this5 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('leaveReport?page=' + page).then(function (response) {
        _this5.leaveEntryLists = response.data.leaveReportLists;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/leave@report.vue?vue&type=template&id=159737fe&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/leave@report.vue?vue&type=template&id=159737fe& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card main-card  element-block-example" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("table", { staticClass: "table" }, [
        _c("tr", [
          _c("td", [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 col-md-4 col-xs-12" }),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-4 col-xs-12 m-2" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12 col-md-6 col-xs-12 " }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "exampleInputPassword1" } }, [
                        _vm._v("Select Employee")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.employee,
                              expression: "employee"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "exampleFormControlSelect1" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.showEmployee()
                            },
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.employee = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            }
                          }
                        },
                        [
                          _c("option", [_vm._v("Selecet One")]),
                          _vm._v(" "),
                          _vm._l(_vm.leaveLists, function(leaveList) {
                            return _c(
                              "option",
                              { domProps: { value: leaveList.employeEntryId } },
                              [
                                leaveList.employee_name
                                  ? _c("span", [
                                      _vm._v(
                                        _vm._s(leaveList.employee_name.userName)
                                      )
                                    ])
                                  : _vm._e()
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 col-md-6 col-xs-12" },
                    [
                      _c("label", [_vm._v(" Select Month")]),
                      _c("month-picker-input", {
                        attrs: { "no-default": true },
                        on: { change: _vm.showDate }
                      })
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-4 col-xs-12" })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive bg-white" }, [
        _c(
          "table",
          { staticClass: "table table-hover table-striped table-bordered " },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.leaveEntryLists.data, function(leaveEntryList, index) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [
                    leaveEntryList.employee_name
                      ? _c("span", [
                          _vm._v(_vm._s(leaveEntryList.employee_name.userName))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    leaveEntryList.employee_name
                      ? _c("span", [
                          _vm._v(
                            _vm._s(
                              leaveEntryList.employee_name.shop_employee_types
                                .shopEmployeeTypeName
                            )
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    leaveEntryList.employee_name
                      ? _c("span", [
                          _vm._v(
                            _vm._s(
                              leaveEntryList.employee_name.job_departments
                                .jobDepartmentName
                            )
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(leaveEntryList.startDate))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(leaveEntryList.endDate))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                 " +
                        _vm._s(
                          _vm.parseDate(
                            leaveEntryList.startDate,
                            leaveEntryList.endDate
                          ) + 1
                        ) +
                        " Days\n                  "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(
                        _vm._f("shortlength")(
                          leaveEntryList.commitment,
                          "110",
                          "..."
                        )
                      )
                    )
                  ])
                ])
              }),
              0
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "card_footer" },
        [
          _c(
            "pagination",
            {
              attrs: { data: _vm.leaveEntryLists, limit: _vm.limit },
              on: { "pagination-change-page": _vm.getPaginateList }
            },
            [
              _c("span", { attrs: { slot: "prev-nav" }, slot: "prev-nav" }, [
                _vm._v("< Previous")
              ]),
              _vm._v(" "),
              _c("span", { attrs: { slot: "next-nav" }, slot: "next-nav" }, [
                _vm._v("Next >")
              ])
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header alert-info" }, [
      _c("h3", [_vm._v("Employee Leave Report")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "alert-info" }, [
        _c("th", [_vm._v("SN")]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Employee"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Name")
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("Department")]),
        _vm._v(" "),
        _c("th", [_vm._v("Designation")]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Leave"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Start"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Date")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Leave"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("End"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Date")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Day"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Remain")
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("Commitment")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/leave@report.vue":
/*!************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/leave@report.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leave_report_vue_vue_type_template_id_159737fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave@report.vue?vue&type=template&id=159737fe& */ "./resources/js/admin/page/hrmanagement/hrreport/leave@report.vue?vue&type=template&id=159737fe&");
/* harmony import */ var _leave_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave@report.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/hrmanagement/hrreport/leave@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _leave_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _leave_report_vue_vue_type_template_id_159737fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _leave_report_vue_vue_type_template_id_159737fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/hrmanagement/hrreport/leave@report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/leave@report.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/leave@report.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_leave_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./leave@report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/leave@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_leave_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/leave@report.vue?vue&type=template&id=159737fe&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/leave@report.vue?vue&type=template&id=159737fe& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_leave_report_vue_vue_type_template_id_159737fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./leave@report.vue?vue&type=template&id=159737fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/leave@report.vue?vue&type=template&id=159737fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_leave_report_vue_vue_type_template_id_159737fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_leave_report_vue_vue_type_template_id_159737fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);