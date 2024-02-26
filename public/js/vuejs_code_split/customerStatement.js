(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customerStatement"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/customerStatement.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@report/customerStatement.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a,
      form: new Form({
        supplier_id: "",
        scanInformation: ""
      }),
      gets: '',
      invoiceInfo: '',
      companyInformation: [],
      companyStatementLists: [],
      invoiceProductLists: [],
      purchaseProductList: [],
      productBrandLists: [],
      purchaseTypes: [],
      unitLists: [],
      countryLists: [],
      supplierInfo: '',
      totalBl: 0,
      totalDr: 0,
      totalCr: 0
    };
  },
  mounted: function mounted() {
    this.getInvoiceSetupInformation();
    this.getInvoiceInformation();
  },
  methods: {
    getInvoiceSetupInformation: function getInvoiceSetupInformation() {
      var _this = this;

      var uri = "getInvoiceSetupInformation/3";
      axios.get(uri).then(function (response) {
        _this.gets = response.data.data;
      });
    },
    getInvoiceInformation: function getInvoiceInformation() {
      var _this2 = this;

      var uri = "getCustomerStatementInformation/".concat(this.$route.params.id);
      axios.get(uri).then(function (response) {
        _this2.companyInformation = response.data.supplier;
        _this2.companyStatementLists = response.data.statementList;
        _this2.totalDr = response.data.totalDr;
        _this2.totalCr = response.data.totalCr;
        _this2.totalBl = response.data.totalBl;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/customerStatement.vue?vue&type=template&id=d4593942&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@report/customerStatement.vue?vue&type=template&id=d4593942& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "card-header-tab card-header alert-info" }, [
        _c("h4", [
          _c("i", {
            staticClass:
              "header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          }),
          _vm._v(
            "\n          Statement of " +
              _vm._s(_vm.companyInformation.customerName) +
              " "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { attrs: { id: "invoice" } }, [
          _c("div", { staticClass: "invoice overflow-auto" }, [
            _c("div", { staticStyle: { "min-width": "600px" } }, [
              _c(
                "header",
                {
                  staticStyle: { "margin-bottom": "5px!important" },
                  style: "border-bottom-color:" + _vm.gets.themeColor
                },
                [
                  _vm.gets.logo
                    ? _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col" }, [
                          _c("a", { attrs: { target: "_blank", href: "#" } }, [
                            _c("img", {
                              staticStyle: {
                                "max-height": "105px",
                                "max-width": "100%"
                              },
                              attrs: {
                                src: "images/invoice_logo/" + _vm.gets.logo
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col company-details" }, [
                          _c("div", [
                            _vm._v("  " + _vm._s(_vm.gets.address) + " ")
                          ]),
                          _vm._v(" "),
                          _c("div", [_vm._v(_vm._s(_vm.gets.mobileNo))]),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v(" " + _vm._s(_vm.gets.email) + " ")
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v(" " + _vm._s(_vm.gets.website) + " ")
                          ])
                        ])
                      ])
                    : _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col text-center" }, [
                          _c("h3", { staticClass: "text-uppercase" }, [
                            _c("b", [
                              _vm._v(" " + _vm._s(_vm.gets.companyName) + " ")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v("  " + _vm._s(_vm.gets.address) + " ")
                          ]),
                          _vm._v(" "),
                          _c("div", [_vm._v(_vm._s(_vm.gets.mobileNo))]),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v(" " + _vm._s(_vm.gets.email) + " ")
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v(" " + _vm._s(_vm.gets.website) + " ")
                          ])
                        ])
                      ])
                ]
              ),
              _vm._v(" "),
              _c("main", [
                _c("div", { staticClass: "row contacts" }, [
                  _c("div", { staticClass: "col invoice-to" }, [
                    _c("div", { staticClass: "text-gray-light" }, [
                      _vm._v("    ")
                    ]),
                    _vm._v(" "),
                    _c("h2", { staticClass: "to" }, [
                      _vm._v(
                        " " + _vm._s(_vm.companyInformation.customerName) + " "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "address" }, [
                      _vm._v(
                        " " + _vm._s(_vm.companyInformation.customerPhone) + " "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "address" }, [
                      _vm._v(_vm._s(_vm.companyInformation.customerAddress))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "email" }, [
                      _c(
                        "a",
                        {
                          style: "color:" + _vm.gets.themeColor,
                          attrs: {
                            href:
                              "mailto:" + _vm.companyInformation.customerEmail
                          }
                        },
                        [
                          _vm._v(
                            "\n                          " +
                              _vm._s(_vm.companyInformation.customerEmail)
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col invoice-details" })
                ]),
                _vm._v(" "),
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.companyStatementLists, function(
                        statementList,
                        index
                      ) {
                        return _c("tr", [
                          _c("td", [_vm._v(_vm._s(++index))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              " " +
                                _vm._s(
                                  _vm
                                    .moment(statementList.created_at)
                                    .format("DD MMMM YYYY")
                                )
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(" " + _vm._s(statementList.title) + " ")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            statementList.debitAmount
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(
                                      parseFloat(
                                        statementList.debitAmount
                                      ).toFixed(2)
                                    )
                                  )
                                ])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            statementList.creditAmount
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(
                                      parseFloat(
                                        statementList.creditAmount
                                      ).toFixed(2)
                                    )
                                  )
                                ])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            statementList.balanceAmount >= 0
                              ? _c(
                                  "span",
                                  { staticClass: "badge badge-success" },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          parseFloat(
                                            statementList.balanceAmount
                                          ).toFixed(2)
                                        ) +
                                        "\n                              "
                                    )
                                  ]
                                )
                              : statementList.balanceAmount < 0
                              ? _c(
                                  "span",
                                  { staticClass: "badge badge-danger" },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          parseFloat(
                                            Math.abs(
                                              statementList.balanceAmount
                                            )
                                          ).toFixed(2)
                                        ) +
                                        "\n                              "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ])
                        ])
                      }),
                      _vm._v(" "),
                      _c("tr", [
                        _c(
                          "th",
                          {
                            staticClass: "text-right text-uppercase",
                            attrs: { colspan: "3" }
                          },
                          [_vm._v("Total")]
                        ),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-right" }, [
                          _vm.totalDr
                            ? _c("span", [
                                _vm._v(
                                  _vm._s(parseFloat(_vm.totalDr).toFixed(2))
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-right" }, [
                          _vm.totalCr
                            ? _c("span", [
                                _vm._v(
                                  _vm._s(parseFloat(_vm.totalCr).toFixed(2))
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-right" }, [
                          _vm.totalBl
                            ? _c("span", [
                                _vm._v(
                                  _vm._s(parseFloat(_vm.totalBl).toFixed(2))
                                )
                              ])
                            : _vm._e()
                        ])
                      ])
                    ],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c("footer", [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.gets.generatedFrom) +
                    "  \n                 \n                        "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div")
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "toolbar hidden-print" }, [
      _c("div", { staticClass: "text-right" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-info",
            attrs: { id: "printInvoice", onclick: "jQuery('#invoice').print()" }
          },
          [_c("i", { staticClass: "fa fa-print" }), _vm._v(" Print")]
        )
      ]),
      _vm._v(" "),
      _c("hr")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-uppercase " }, [_vm._v("SN")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-uppercase text-left" }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-uppercase text-left" }, [
          _vm._v("Narration")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-uppercase text-right" }, [
          _vm._v("Debit")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-uppercase text-right" }, [
          _vm._v("Credit")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-uppercase text-right" }, [
          _vm._v("Balance")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/customerStatement.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/customerStatement.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customerStatement_vue_vue_type_template_id_d4593942___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customerStatement.vue?vue&type=template&id=d4593942& */ "./resources/js/admin/page/sales/sales@report/customerStatement.vue?vue&type=template&id=d4593942&");
/* harmony import */ var _customerStatement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customerStatement.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/sales/sales@report/customerStatement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _customerStatement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _customerStatement_vue_vue_type_template_id_d4593942___WEBPACK_IMPORTED_MODULE_0__["render"],
  _customerStatement_vue_vue_type_template_id_d4593942___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/sales/sales@report/customerStatement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/customerStatement.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/customerStatement.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customerStatement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./customerStatement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/customerStatement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customerStatement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/customerStatement.vue?vue&type=template&id=d4593942&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/customerStatement.vue?vue&type=template&id=d4593942& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customerStatement_vue_vue_type_template_id_d4593942___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./customerStatement.vue?vue&type=template&id=d4593942& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/customerStatement.vue?vue&type=template&id=d4593942&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customerStatement_vue_vue_type_template_id_d4593942___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customerStatement_vue_vue_type_template_id_d4593942___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);