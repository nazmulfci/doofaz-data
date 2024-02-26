(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["balance@sheet"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/balance@sheet.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@report/balance@sheet.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        date: '',
        dateDue: '',
        employeeId: ''
      }),
      modalTitle: '',
      empLists: [],
      infos: [],
      banks: [],
      dues: [],
      totaldues: [],
      customerLists: [],
      emid: 0,
      shopOrEmployee: 0,
      searchStatus: false
    };
  },
  mounted: function mounted() {
    this.info();
    this.getShopOrEmployee();
    this.dueSale();
  },
  methods: {
    changeDate: function changeDate() {
      this.form.date = '';
    },
    showCustomerList: function showCustomerList(e) {
      var _this = this;

      //alert(e);
      var url = 'getCustomerListBSheet/' + e;

      if (this.form.date && this.form.employeeId) {
        url = 'getCustomerListBSheetDateEId/' + e + '/' + this.form.date + '/' + this.form.employeeId;
      } else if (this.form.date) {
        url = 'getCustomerListBSheetDate/' + e + '/' + this.form.date;
      } else if (this.form.employeeId) {
        url = 'getCustomerListBSheetEId/' + e + '/' + this.form.employeeId;
      }

      axios.get(url).then(function (res) {
        _this.customerLists = res.data.customerList;
        _this.modalTitle = res.data.customerTypeName;
      });
    },
    info: function info() {
      var _this2 = this;

      axios.get('salesBalanceSheetUser').then(function (res) {
        _this2.infos = res.data;
        _this2.banks = res.data.bank;
      });
      axios.get('employeeList').then(function (res) {
        _this2.empLists = res.data.employeeName;
      });
    },
    dueSale: function dueSale() {
      var _this3 = this;

      axios.get('dueSaleTodayUser').then(function (res) {
        _this3.dues = res.data.due;
        _this3.totaldues = res.data;
      });
    },
    getShopOrEmployee: function getShopOrEmployee() {
      var _this4 = this;

      axios.get('getShopOrEmployee').then(function (res) {
        _this4.shopOrEmployee = res.data.shopOrEmployee;

        if (res.data.shopOrEmployee == 3) {
          _this4.searchStatus = true;
        } else {
          _this4.searchStatus = false;
        }
      });
    },
    dateSearch: function dateSearch() {
      var _this5 = this;

      var url = '';
      var url1 = '';

      if (this.form.employeeId > 0) {
        this.emid = this.form.employeeId;
        url = 'salesBalanceSheetDateUserWithId/' + this.form.date + '/' + this.emid;
        url1 = 'salesBalanceSheetDateDueUserWithId/' + this.form.date + '/' + this.emid;
      } else {
        url = 'salesBalanceSheetDateUser/' + this.form.date;
        url1 = 'salesBalanceSheetDateDueUser/' + this.form.date;
      }

      axios.get(url).then(function (res) {
        _this5.infos = res.data;
        _this5.banks = res.data.bank;
      }), axios.get(url1).then(function (res) {
        _this5.dues = res.data.due;
        _this5.totaldues = res.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/balance@sheet.vue?vue&type=template&id=359ef5ae&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@report/balance@sheet.vue?vue&type=template&id=359ef5ae& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "table-responsive bg-white p-2" },
        [
          _c("center", [
            _c("div", { staticClass: "form-group col-md-2 col-sm-8 col-8" }, [
              _vm.searchStatus
                ? _c("table", { staticClass: "table table-bordered" }, [
                    _c("tr", [
                      _c("td", [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.employeeId,
                                expression: "form.employeeId"
                              }
                            ],
                            staticClass: "form-control",
                            staticStyle: { width: "150px" },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "employeeId",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  return _vm.changeDate()
                                }
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v(" Select Salesman ")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.empLists, function(empList) {
                              return _c(
                                "option",
                                { domProps: { value: empList.id } },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(empList.employeeName) +
                                      " (" +
                                      _vm._s(empList.job) +
                                      ") "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
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
                            change: function($event) {
                              $event.preventDefault()
                              return _vm.dateSearch()
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "date", $event.target.value)
                            }
                          }
                        })
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c(
            "table",
            { staticClass: "table table-hover table-bordered mb-0" },
            [
              _c("thead", [
                _c(
                  "tr",
                  { staticStyle: { background: "rgba(242, 242, 242, 0.47)" } },
                  [
                    _c(
                      "th",
                      { staticClass: "text-center", attrs: { colspan: "15" } },
                      [
                        _c("h5", [
                          _vm._v(
                            "Total Sale  \n                  " +
                              _vm._s(_vm.infos.totalSale) +
                              " "
                          )
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(1)
              ]),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v(_vm._s(_vm.infos.cashAmountStatement))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    _vm._l(_vm.banks, function(bank) {
                      return _c("span", { key: bank.id }, [
                        bank.bank
                          ? _c("span", [_vm._v(_vm._s(bank.bank.bankName))])
                          : _vm._e(),
                        _vm._v(
                          "\n                     = " +
                            _vm._s(bank.creditAmount)
                        ),
                        _c("br")
                      ])
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(
                        parseFloat(_vm.infos.cashAmountStatement) +
                          parseFloat(_vm.infos.bankAmountStatement)
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.infos.currentDue))])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "table",
            { staticClass: "table table-hover table-bordered mb-0" },
            [
              _c("thead", [
                _c(
                  "tr",
                  { staticStyle: { background: "rgba(242, 242, 242, 0.47)" } },
                  [
                    _c(
                      "th",
                      { staticClass: "text-center", attrs: { colspan: "15" } },
                      [
                        _c("h5", [
                          _vm._v(
                            "Due Sale Today  " +
                              _vm._s(_vm.totaldues.totaldue) +
                              "\n                  "
                          )
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(2)
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-4" }, [
              _c(
                "div",
                { staticClass: "list-group" },
                _vm._l(_vm.dues, function(due) {
                  return _c(
                    "a",
                    {
                      key: due.id,
                      staticClass:
                        "list-group-item list-group-item-action d-flex justify-content-between align-items-center",
                      attrs: {
                        href: "#",
                        "data-toggle": "modal",
                        "data-target": "#exampleModal"
                      },
                      on: {
                        click: function($event) {
                          return _vm.showCustomerList(
                            due.type.shopCustomerTypeEntryId
                          )
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(due.type.shopCustomerName) +
                          "\n                            "
                      ),
                      _c(
                        "span",
                        { staticClass: "badge badge-primary badge-pill" },
                        [_vm._v(_vm._s(due.currentDue))]
                      )
                    ]
                  )
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4" }),
            _vm._v(" "),
            _c("div", { staticClass: "col-4" })
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "exampleModal",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "h5",
                    {
                      staticClass: "modal-title",
                      attrs: { id: "exampleModalLabel" }
                    },
                    [_vm._v(_vm._s(_vm.modalTitle))]
                  ),
                  _vm._v(" "),
                  _vm._m(3)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c(
                    "table",
                    { staticClass: "table table-bordered" },
                    [
                      _vm._m(4),
                      _vm._v(" "),
                      _vm._l(_vm.customerLists, function(customerList, index) {
                        return _c("tr", [
                          _c("td", [_vm._v(" " + _vm._s(++index) + " ")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              " " + _vm._s(customerList.customerName) + " "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(" " + _vm._s(customerList.due) + " ")
                          ])
                        ])
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _vm._m(5)
              ])
            ]
          )
        ]
      )
    ])
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
          background: "rgba(221, 221, 221, 0.46)",
          border: "1px solid rgba(0, 0, 0, 0.12)"
        }
      },
      [
        _c("h3", { staticStyle: { color: "black" } }, [
          _vm._v(" Today Total Sales ")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "tr",
      { staticStyle: { background: "rgba(242, 242, 242, 0.47)" } },
      [
        _c("th", [_vm._v("Cash Receive")]),
        _vm._v(" "),
        _c("th", [_vm._v("Bank Receive")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Receive")]),
        _vm._v(" "),
        _c("th", [_vm._v("Due Sale")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "tr",
      { staticStyle: { background: "rgba(242, 242, 242, 0.47)" } },
      [_c("th", [_vm._v("Customer")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v(" SL ")]),
      _vm._v(" "),
      _c("th", [_vm._v(" Customer Name ")]),
      _vm._v(" "),
      _c("th", [_vm._v(" Due ")])
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
          staticClass: "btn btn-danger",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/balance@sheet.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/balance@sheet.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _balance_sheet_vue_vue_type_template_id_359ef5ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance@sheet.vue?vue&type=template&id=359ef5ae& */ "./resources/js/admin/page/sales/sales@report/balance@sheet.vue?vue&type=template&id=359ef5ae&");
/* harmony import */ var _balance_sheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./balance@sheet.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/sales/sales@report/balance@sheet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _balance_sheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _balance_sheet_vue_vue_type_template_id_359ef5ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _balance_sheet_vue_vue_type_template_id_359ef5ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/sales/sales@report/balance@sheet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/balance@sheet.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/balance@sheet.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_balance_sheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./balance@sheet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/balance@sheet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_balance_sheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/balance@sheet.vue?vue&type=template&id=359ef5ae&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/balance@sheet.vue?vue&type=template&id=359ef5ae& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_balance_sheet_vue_vue_type_template_id_359ef5ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./balance@sheet.vue?vue&type=template&id=359ef5ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/balance@sheet.vue?vue&type=template&id=359ef5ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_balance_sheet_vue_vue_type_template_id_359ef5ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_balance_sheet_vue_vue_type_template_id_359ef5ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);