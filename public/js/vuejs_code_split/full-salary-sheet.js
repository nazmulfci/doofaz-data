(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["full-salary-sheet"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/full@salary.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/full@salary.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      yr: "",
      info: [],
      infoGet: [],
      vews: [],
      pays: [],
      gts: []
    };
  },
  mounted: function mounted() {
    this.data();
  },
  methods: {
    yearly: function yearly() {
      var _this = this;

      axios.get('yearlyFullSalary/' + this.yr).then(function (res) {
        _this.info = res.data.items;
        _this.pays = res.data.data;
      });
    },
    data: function data() {
      var _this2 = this;

      axios.get('fullSalary').then(function (res) {
        _this2.info = res.data.items;
        _this2.pays = res.data.data;
        _this2.infoGet = res.data.infoGet;
      });
    },
    stock: function stock(id) {
      this.$router.push("/stock@view" + id);
    },
    view: function view(month, year) {
      var _this3 = this;

      axios.get('fullSalaryInfo/' + month + '/' + year).then(function (res) {
        _this3.vews = res.data.views;
        _this3.gts = res.data.get;
      });
    }
  },
  created: function created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
      }
    });
    window.deleteExpense = this.deleteExpense;
    window.customerTypeget = this.customerTypeget;
    window.stock = this.stock;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/full@salary.vue?vue&type=template&id=58c55f8a&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/full@salary.vue?vue&type=template&id=58c55f8a& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
        _c("center", [
          _c("div", { staticClass: "form-group col-3 col-md-3" }, [
            _c("label", { attrs: { for: "exampleFormControlSelect1" } }, [
              _vm._v("select Year")
            ]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.yr,
                    expression: "yr"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "exampleFormControlSelect1" },
                on: {
                  change: [
                    function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.yr = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    function($event) {
                      $event.preventDefault()
                      return _vm.yearly()
                    }
                  ]
                }
              },
              [
                _c("option", [_vm._v("Select Year")]),
                _vm._v(" "),
                _vm._l(_vm.infoGet, function(int) {
                  return _c(
                    "option",
                    { key: int.id, domProps: { value: int.year } },
                    [_vm._v(_vm._s(int.year))]
                  )
                })
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive bg-white p-2" }, [
          _c(
            "table",
            {
              staticClass: "table table-hover table-bordered table-striped",
              attrs: { width: "1250px", id: "sampleTable" }
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.info, function(ins) {
                  return _c("tr", { key: ins.id }, [
                    _c("td", [
                      ins.month == 1
                        ? _c("span", [_vm._v("January," + _vm._s(ins.year))])
                        : _vm._e(),
                      _vm._v(" "),
                      ins.month == 2
                        ? _c("span", [_vm._v("February," + _vm._s(ins.year))])
                        : _vm._e(),
                      _vm._v(" "),
                      ins.month == 3
                        ? _c("span", [_vm._v("March," + _vm._s(ins.year))])
                        : _vm._e(),
                      _vm._v(" "),
                      ins.month == 4
                        ? _c("span", [_vm._v("April," + _vm._s(ins.year))])
                        : _vm._e(),
                      _vm._v(" "),
                      ins.month == 5
                        ? _c("span", [_vm._v("May," + _vm._s(ins.year))])
                        : _vm._e(),
                      _vm._v(" "),
                      ins.month == 6
                        ? _c("span", [_vm._v("Jun," + _vm._s(ins.year))])
                        : _vm._e(),
                      _vm._v(" "),
                      ins.month == 7
                        ? _c("span", [_vm._v("July," + _vm._s(ins.year))])
                        : _vm._e(),
                      _vm._v(" "),
                      ins.month == 8
                        ? _c("span", [_vm._v("August," + _vm._s(ins.year))])
                        : _vm._e(),
                      _vm._v(" "),
                      ins.month == 9
                        ? _c("span", [_vm._v("September," + _vm._s(ins.year))])
                        : _vm._e(),
                      _vm._v(" "),
                      ins.month == 10
                        ? _c("span", [_vm._v("October," + _vm._s(ins.year))])
                        : _vm._e(),
                      _vm._v(" "),
                      ins.month == 11
                        ? _c("span", [_vm._v("November," + _vm._s(ins.year))])
                        : _vm._e(),
                      _vm._v(" "),
                      ins.month == 12
                        ? _c("span", [_vm._v("December," + _vm._s(ins.year))])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      _vm._l(_vm.pays, function(pay) {
                        return ins.month == pay.month && ins.year == pay.year
                          ? _c("span", { key: pay.id }, [
                              _vm._v(_vm._s(pay.totalAmount))
                            ])
                          : _vm._e()
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(ins.payAmount))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      _vm._l(_vm.pays, function(pay) {
                        return ins.month == pay.month && ins.year == pay.year
                          ? _c("span", { key: pay.id }, [
                              _vm._v(
                                _vm._s(
                                  parseFloat(pay.totalAmount) -
                                    parseFloat(ins.payAmount)
                                )
                              )
                            ])
                          : _vm._e()
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "mr-2 btn-hover-shine btn btn-shadow btn-primary",
                          attrs: {
                            type: "button",
                            "data-toggle": "modal",
                            "data-target": "#view"
                          },
                          on: {
                            click: function($event) {
                              return _vm.view(ins.month, ins.year)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: " fa fa-eye pr-2" }),
                          _vm._v(" View\n                 ")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "modal fade",
                          attrs: {
                            id: "view",
                            tabindex: "-1",
                            role: "dialog",
                            "aria-labelledby": "exampleModalLongTitle",
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
                                    "div",
                                    {
                                      staticClass:
                                        "card main-card element-block-example"
                                    },
                                    [
                                      _vm._m(3, true),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "table-responsive bg-white"
                                        },
                                        [
                                          _c(
                                            "table",
                                            {
                                              staticClass:
                                                "\n                            table table-hover table-bordered table-striped\n                          "
                                            },
                                            [
                                              _vm._m(4, true),
                                              _vm._v(" "),
                                              _c(
                                                "tbody",
                                                _vm._l(_vm.vews, function(
                                                  vs,
                                                  index
                                                ) {
                                                  return _c(
                                                    "tr",
                                                    { key: vs.id },
                                                    [
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(index + 1)
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        vs.employee
                                                          ? _c("span", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  vs.employee
                                                                    .userName
                                                                )
                                                              )
                                                            ])
                                                          : _vm._e()
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        vs.employee
                                                          .job_departments
                                                          ? _c("span", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  vs.employee
                                                                    .job_departments
                                                                    .jobDepartmentName
                                                                )
                                                              )
                                                            ])
                                                          : _vm._e()
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        vs.employee
                                                          .shop_employee_types
                                                          ? _c("span", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  vs.employee
                                                                    .shop_employee_types
                                                                    .shopEmployeeTypeName
                                                                )
                                                              )
                                                            ])
                                                          : _vm._e()
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        _vm._l(
                                                          _vm.gts,
                                                          function(gt) {
                                                            return gt.employeeId ==
                                                              vs.employeeId
                                                              ? _c(
                                                                  "span",
                                                                  {
                                                                    key: gt.id
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        gt.amount
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              : _vm._e()
                                                          }
                                                        ),
                                                        0
                                                      ),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(vs.payAmount)
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        _vm._l(
                                                          _vm.gts,
                                                          function(gt) {
                                                            return gt.employeeId ==
                                                              vs.employeeId
                                                              ? _c(
                                                                  "span",
                                                                  {
                                                                    key: gt.id
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        parseFloat(
                                                                          gt.amount
                                                                        ) -
                                                                          parseFloat(
                                                                            vs.payAmount
                                                                          )
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              : _vm._e()
                                                          }
                                                        ),
                                                        0
                                                      )
                                                    ]
                                                  )
                                                }),
                                                0
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _vm._m(5, true)
                              ])
                            ]
                          )
                        ]
                      )
                    ])
                  ])
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
    return _c(
      "div",
      {
        staticClass: "card-header",
        staticStyle: {
          "background-color": "rgb(1, 176, 241)",
          border: "1px solid rgba(0, 0, 0, 0.05)"
        }
      },
      [
        _c("h3", { staticStyle: { color: "black" } }, [
          _vm._v("Full salary Report")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Month")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Salary")]),
        _vm._v(" "),
        _c("th", [_vm._v("Paid")]),
        _vm._v(" "),
        _c("th", [_vm._v("Due")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header bg-primary text-light" }, [
      _c("h5", {
        staticClass: "modal-title",
        attrs: { id: "exampleModalLongTitle" }
      }),
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "card-header",
        staticStyle: {
          "background-color": "rgb(1, 176, 241)",
          border: "1px solid rgba(0, 0, 0, 0.05)"
        }
      },
      [_c("h3", { staticStyle: { color: "black" } }, [_vm._v("Salary List")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("SN")]),
        _vm._v(" "),
        _c("th", [_vm._v("Employee")]),
        _vm._v(" "),
        _c("th", [_vm._v("Department")]),
        _vm._v(" "),
        _c("th", [_vm._v("Designation")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Salary")]),
        _vm._v(" "),
        _c("th", [_vm._v("Paid")]),
        _vm._v(" "),
        _c("th", [_vm._v("Due")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-hover-shine btn-danger",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("\n                      Close\n                    ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/full@salary.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/full@salary.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _full_salary_vue_vue_type_template_id_58c55f8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full@salary.vue?vue&type=template&id=58c55f8a& */ "./resources/js/admin/page/hrmanagement/hrreport/full@salary.vue?vue&type=template&id=58c55f8a&");
/* harmony import */ var _full_salary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./full@salary.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/hrmanagement/hrreport/full@salary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _full_salary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _full_salary_vue_vue_type_template_id_58c55f8a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _full_salary_vue_vue_type_template_id_58c55f8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/hrmanagement/hrreport/full@salary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/full@salary.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/full@salary.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_full_salary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./full@salary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/full@salary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_full_salary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/full@salary.vue?vue&type=template&id=58c55f8a&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/full@salary.vue?vue&type=template&id=58c55f8a& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_full_salary_vue_vue_type_template_id_58c55f8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./full@salary.vue?vue&type=template&id=58c55f8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/full@salary.vue?vue&type=template&id=58c55f8a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_full_salary_vue_vue_type_template_id_58c55f8a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_full_salary_vue_vue_type_template_id_58c55f8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);