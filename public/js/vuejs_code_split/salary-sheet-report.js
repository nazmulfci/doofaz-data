(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["salary-sheet-report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/salarysheet@report.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/salarysheet@report.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
      form: new Form({
        employeEntryId: '',
        paymentStatus: '',
        monthlyPayment: '',
        reason: '',
        date: '',
        deduct: ''
      }),
      employeeNames: {},
      salarySheetReports: {},
      recode: true,
      workDay: '',
      date: {
        from: null,
        to: null,
        month: null,
        monthIndex: null,
        year: null
      },
      present: '',
      noRecode: false
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  components: {
    MonthPicker: vue_month_picker__WEBPACK_IMPORTED_MODULE_1__["MonthPicker"],
    MonthPickerInput: vue_month_picker__WEBPACK_IMPORTED_MODULE_1__["MonthPickerInput"]
  },
  mounted: function mounted() {
    this.employeeNameList();
    this.salarySheetReport();
    this.getPaginateReport();
    this.holidaySetupReport();
  },
  methods: {
    showDate: function showDate(date) {
      var _this = this;

      this.date = date, axios.get("monthwiseSalarySheet/".concat(this.date.monthIndex, "/").concat(this.date.year)).then(function (response) {
        _this.salarySheetReports = response.data.salarySheetReports;
      });
    },
    clickForSalarySheet: function clickForSalarySheet() {
      var _this2 = this;

      axios.post('salarySheet', {
        monthIndex: this.date.monthIndex,
        year: this.date.year,
        monthInfo: this.date.month + ',' + this.date.year,
        mt: this.date.year + '-' + this.date.monthIndex + '-' + '01'
      }).then(function (res) {
        if (res.data.alreadyExit) {
          Toast.fire({
            icon: 'error',
            title: 'This Month Salary Sheet Already Open'
          });
        } else {
          if (res.data.count) {
            Toast.fire({
              icon: 'error',
              title: 'No more Employee'
            });
          } else {
            axios.get("monthwiseSalarySheet/".concat(_this2.date.monthIndex, "/").concat(_this2.date.year)).then(function (response) {
              _this2.salarySheetReports = response.data.salarySheetReports;
            });
            Toast.fire({
              icon: 'success',
              title: 'Successfully Open Salary Sheet'
            });
          }
        }
      });
    },
    employeeNameList: function employeeNameList() {
      var _this3 = this;

      axios.get('/employeeName').then(function (res) {
        _this3.employeeNames = res.data.employeeName;
      });
    },
    holidaySetupReport: function holidaySetupReport() {
      var _this4 = this;

      axios.get('/holidaySetupReport').then(function (res) {
        _this4.workDay = res.data.workingDay;
      });
      this.currentDateMonth = new Date().toLocaleString().split(',')[0];
    },
    employeeAttendenceInfo: function employeeAttendenceInfo(id) {
      var _this5 = this;

      axios.get("/employeeAttendanceInfo/".concat(id)).then(function (res) {
        _this5.present = res.data.present;
      });
    },
    deductSalary: function deductSalary(id) {
      var _this6 = this;

      axios.post('/salaryDeduct', {
        id: id,
        month: this.date.monthIndex,
        year: this.date.year,
        reason: this.form.reason,
        date: this.form.date,
        deduct: this.form.deduct,
        netamount: this.form.netamount
      }).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Change Successfully'
        });

        if (_this6.date.monthIndex == '') {
          _this6.salarySheetReport();
        } else {
          axios.get("monthwiseSalarySheet/".concat(_this6.date.monthIndex, "/").concat(_this6.date.year)).then(function (response) {
            _this6.salarySheetReports = response.data.salarySheetReports;
          });
        }
      });
    },
    confirm: function confirm(id) {
      var _this7 = this;

      if (this.date.monthIndex == '') {
        axios.get("/salarySheetConfirm/".concat(id, "/0/0")).then(function (res) {
          Toast.fire({
            icon: 'success',
            title: 'Status Change Successfully'
          });

          _this7.salarySheetReport();
        });
      } else {
        axios.get("/salarySheetConfirm/".concat(id, "/").concat(this.date.monthIndex, "/").concat(this.date.year)).then(function (res) {
          Toast.fire({
            icon: 'success',
            title: 'Status Change Successfully'
          });
          axios.get("monthwiseSalarySheet/".concat(_this7.date.monthIndex, "/").concat(_this7.date.year)).then(function (response) {
            _this7.salarySheetReports = response.data.salarySheetReports;
          });
        });
      }
    },
    salarySheetReport: function salarySheetReport() {
      var _this8 = this;

      axios.get('/salarySheet').then(function (res) {
        _this8.salarySheetReports = res.data.salarySheetReports;
      });
    },
    getPaginateReport: function getPaginateReport() {
      var _this9 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/salarySheet?page=' + page).then(function (response) {
        _this9.salarySheetReports = response.data.salarySheetReports;
      });
    },
    paymentStatus: function paymentStatus(salarySetupId) {
      var _this10 = this;

      axios.get('/salaryPaymentStatus/' + salarySetupId).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Salary Payment Status Change Successfully'
        });

        _this10.salarySheetReport();
      });
    },
    serchEmployeeSalary: function serchEmployeeSalary() {
      var _this11 = this;

      this.form.post('/serchEmployeeSalary').then(function (res) {
        if (res.data.all) {
          _this11.recode = true;
          _this11.noRecode = false;

          _this11.salarySheetReport();
        } else if (res.data.noRecode) {
          _this11.recode = false;
          _this11.noRecode = true;
        } else if (res.data.salarySheetReports) {
          _this11.recode = true;
          _this11.noRecode = false;
          _this11.salarySheetReports = res.data.salarySheetReports;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/salarysheet@report.vue?vue&type=template&id=54f83b60&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/salarysheet@report.vue?vue&type=template&id=54f83b60& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "card-header alert-info" }, [
        _c("h3", [
          _c(
            "button",
            {
              staticClass:
                "btn btn btn-outline-primary btn-shadow  btn-hover-shine",
              attrs: { onclick: "window.history.back()" }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "bi bi-arrow-left",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      "fill-rule": "evenodd",
                      d:
                        "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    }
                  })
                ]
              )
            ]
          ),
          _vm._v(" Basic Salary Sheet ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticStyle: { margin: "auto", padding: "22px" } }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-lg-6 col-12" },
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
          _c("div", { staticClass: "col-lg-6 col-12" }, [
            _c("span", [_vm._v("   ")]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "mr-2 btn-wide btn-pill btn btn-hover-shine  btn-primary",
                attrs: { type: "submit" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.clickForSalarySheet()
                  }
                }
              },
              [_vm._v("Open salary Sheet")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive bg-white p-3" }, [
        _c(
          "table",
          { staticClass: "table table-hover table-bordered table-striped" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.salarySheetReports.data, function(
                  salarySheetReport,
                  index
                ) {
                  return _c("tr", [
                    _c("td", [_vm._v(_vm._s(index + 1))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(salarySheetReport.shop_employee_name.userName)
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      salarySheetReport.shop_employee_name.job_departments
                        ? _c("span", [
                            _vm._v(
                              _vm._s(
                                salarySheetReport.shop_employee_name
                                  .job_departments.jobDepartmentName
                              )
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      salarySheetReport.shop_employee_name.shop_employee_types
                        ? _c("span", [
                            _vm._v(
                              _vm._s(
                                salarySheetReport.shop_employee_name
                                  .shop_employee_types.shopEmployeeTypeName
                              )
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(salarySheetReport.grade_entry_list.gradeName)
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(salarySheetReport.amount))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(salarySheetReport.deductAmount))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(salarySheetReport.netAmount))]),
                    _vm._v(" "),
                    _c("td", [
                      _c("div", { staticClass: "dropdown" }, [
                        _vm._m(1, true),
                        _vm._v(" "),
                        _c("div", { staticClass: "dropdown-content" }, [
                          _c(
                            "a",
                            {
                              attrs: {
                                href: "#",
                                "data-toggle": "modal",
                                "data-target":
                                  "#" + "deduct" + salarySheetReport.employeeId
                              },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.employeeAttendenceInfo(
                                    salarySheetReport.employeeId
                                  )
                                }
                              }
                            },
                            [_vm._v("Salary Deduct")]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.confirm(
                                    salarySheetReport.employeeId
                                  )
                                }
                              }
                            },
                            [_vm._v(" Confirm ")]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "modal fade",
                            attrs: {
                              id: "deduct" + salarySheetReport.employeeId,
                              tabindex: "-1",
                              role: "dialog",
                              "aria-labelledby":
                                "deduct" + salarySheetReport.employeeId,
                              "aria-hidden": "true"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "modal-dialog",
                                attrs: { role: "document" }
                              },
                              [
                                _c("div", { staticClass: "modal-content" }, [
                                  _vm._m(2, true),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "modal-body" }, [
                                    _c(
                                      "span",
                                      { staticStyle: { color: "red" } },
                                      [
                                        _vm._v(
                                          "Working Day: " +
                                            _vm._s(30 - _vm.workDay)
                                        )
                                      ]
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticStyle: { color: "red" } },
                                      [
                                        _vm._v(
                                          "Present: " + _vm._s(_vm.present)
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: { for: "exampleInputEmail1" }
                                        },
                                        [_vm._v("Deduct Amount")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.deduct,
                                            expression: "form.deduct"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "exampleInputEmail1",
                                          "aria-describedby": "emailHelp",
                                          placeholder: "Enter Amount"
                                        },
                                        domProps: { value: _vm.form.deduct },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "deduct",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: {
                                            for: "exampleFormControlTextarea1"
                                          }
                                        },
                                        [_vm._v("Reason")]
                                      ),
                                      _vm._v(" "),
                                      _c("textarea", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.reason,
                                            expression: "form.reason"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          id: "exampleFormControlTextarea1",
                                          rows: "3"
                                        },
                                        domProps: { value: _vm.form.reason },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "reason",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", [_vm._v(" Date")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.date,
                                            expression: "form.date"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "date" },
                                        domProps: { value: _vm.form.date },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "date",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "modal-footer" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-secondary",
                                        attrs: {
                                          type: "button",
                                          "data-dismiss": "modal"
                                        }
                                      },
                                      [_vm._v("Close")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary",
                                        attrs: {
                                          type: "button",
                                          "data-dismiss": "modal"
                                        },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.deductSalary(
                                              salarySheetReport.employeeId
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Save changes")]
                                    )
                                  ])
                                ])
                              ]
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                }),
                _vm._v(" "),
                _vm.noRecode
                  ? _c("tr", { staticClass: "text-center" }, [
                      _c("td", { attrs: { colspan: "8" } }, [
                        _vm._v(" No Record Available ")
                      ])
                    ])
                  : _vm._e()
              ],
              2
            )
          ]
        )
      ]),
      _vm._v(" "),
      _vm.recode
        ? _c(
            "span",
            { staticClass: "card_footer" },
            [
              _c(
                "pagination",
                {
                  attrs: { data: _vm.salarySheetReports, limit: _vm.limit },
                  on: { "pagination-change-page": _vm.getPaginateReport }
                },
                [
                  _c(
                    "span",
                    { attrs: { slot: "prev-nav" }, slot: "prev-nav" },
                    [_vm._v("< Previous")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    { attrs: { slot: "next-nav" }, slot: "next-nav" },
                    [_vm._v("Next >")]
                  )
                ]
              )
            ],
            1
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
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
          _vm._v("Salary"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Grade"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Name")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Salary"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Grade"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Amount")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Deduct"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Amount")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Net"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Amount")
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "dropbtn" }, [
      _c("i", { staticClass: "fa fa-cogs", attrs: { "aria-hidden": "true" } }),
      _vm._v("\nSelect Operation")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Salary Deduct")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/salarysheet@report.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/salarysheet@report.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _salarysheet_report_vue_vue_type_template_id_54f83b60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salarysheet@report.vue?vue&type=template&id=54f83b60& */ "./resources/js/admin/page/hrmanagement/hrreport/salarysheet@report.vue?vue&type=template&id=54f83b60&");
/* harmony import */ var _salarysheet_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salarysheet@report.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/hrmanagement/hrreport/salarysheet@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _salarysheet_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _salarysheet_report_vue_vue_type_template_id_54f83b60___WEBPACK_IMPORTED_MODULE_0__["render"],
  _salarysheet_report_vue_vue_type_template_id_54f83b60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/hrmanagement/hrreport/salarysheet@report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/salarysheet@report.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/salarysheet@report.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_salarysheet_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./salarysheet@report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/salarysheet@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_salarysheet_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/salarysheet@report.vue?vue&type=template&id=54f83b60&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/salarysheet@report.vue?vue&type=template&id=54f83b60& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salarysheet_report_vue_vue_type_template_id_54f83b60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./salarysheet@report.vue?vue&type=template&id=54f83b60& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/salarysheet@report.vue?vue&type=template&id=54f83b60&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salarysheet_report_vue_vue_type_template_id_54f83b60___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salarysheet_report_vue_vue_type_template_id_54f83b60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);