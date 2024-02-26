(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loanReceiverLoanStatement"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/loanReceiverLoanStatement.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/view/loanReceiverLoanStatement.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
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
      providerLoanReceiveEntrys: [],
      loanInfo: [],
      loanInfo1: [],
      singleData: [],
      providerInfo: [],
      companyInformation: [],
      companyStatementLists: [],
      companyStatementList1s: [],
      invoiceProductLists: [],
      purchaseProductList: [],
      productBrandLists: [],
      purchaseTypes: [],
      unitLists: [],
      countryLists: [],
      supplierInfo: '',
      totalInstallment: ''
    };
  },
  mounted: function mounted() {
    this.getInvoiceSetupInformation();
    this.getInvoiceInformation();
    this.getProviderLoanReceiveEntry();
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

      var uri = "getLoanReceiverInfoLoanInfo/".concat(this.$route.params.id);
      axios.get(uri).then(function (response) {
        _this2.loanInfo = response.data.loanInfo;
        _this2.providerInfo = response.data.providerInfo;
      });
    },
    getProviderLoanReceiveEntry: function getProviderLoanReceiveEntry() {
      var _this3 = this;

      var uri = "getLoanReceiverLoanPayInfo/".concat(this.$route.params.id);
      axios.get(uri).then(function (response) {
        _this3.companyStatementLists = response.data.loanInfo;
        _this3.companyStatementList1s = response.data.loanInfo1;
        _this3.singleData = response.data.singleData;
        _this3.totalInstallment = response.data.totalInstallment;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/loanReceiverLoanStatement.vue?vue&type=template&id=46eca62e&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/view/loanReceiverLoanStatement.vue?vue&type=template&id=46eca62e& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
          _vm._v("\n          Statement of "),
          _vm.providerInfo.providerType > 1
            ? _c("span", [
                _vm._v(
                  "\n                                    " +
                    _vm._s(_vm.providerInfo.providerName) +
                    "\n                                    (" +
                    _vm._s(_vm.providerInfo.providerBranchName) +
                    ")\n                                "
                )
              ])
            : _c("span", [
                _vm._v(
                  "\n                                    " +
                    _vm._s(_vm.providerInfo.providerName) +
                    " \n                                "
                )
              ])
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
                      _vm.providerInfo.providerType > 1
                        ? _c("span", [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.providerInfo.providerName) +
                                "\n                                    (" +
                                _vm._s(_vm.providerInfo.providerBranchName) +
                                ")\n                                "
                            )
                          ])
                        : _c("span", [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.providerInfo.providerName) +
                                " \n                                "
                            )
                          ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "address" }, [
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm.providerInfo.providerContactPersonMobileNo
                          ) +
                          " "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "address" }, [
                      _vm._v(_vm._s(_vm.providerInfo.providerAddress))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col invoice-details" }, [
                    _c("div", { staticClass: "date" }, [
                      _vm._v(
                        " Loan Amount: " + _vm._s(_vm.loanInfo.loanMainAmount)
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "date" }, [
                      _vm._v(
                        " Issue Date: " +
                          _vm._s(
                            _vm
                              .moment(_vm.loanInfo.created_at)
                              .format("DD MMMM YYYY")
                          ) +
                          " "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.companyStatementList1s, function(
                        statementList1,
                        index1
                      ) {
                        return _c("tr", [
                          _c("td", [_vm._v(_vm._s(++index1))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              " " +
                                _vm._s(
                                  _vm
                                    .moment(statementList1.created_at)
                                    .format("DD MMMM YYYY")
                                )
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            statementList1.debitAmount == 0
                              ? _c("span", [_vm._v(" Loan Receive ")])
                              : _vm._e(),
                            _vm._v(" "),
                            statementList1.creditAmount == 0
                              ? _c("span", [_vm._v(" Loan Pay ")])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v(
                              " " + _vm._s(statementList1.debitAmount) + " "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v(
                              " " + _vm._s(statementList1.creditAmount) + " "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            statementList1.balanceAmount >= 0
                              ? _c(
                                  "span",
                                  { staticClass: "badge badge-success" },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(statementList1.balanceAmount) +
                                        "\n                              "
                                    )
                                  ]
                                )
                              : statementList1.balanceAmount < 0
                              ? _c(
                                  "span",
                                  { staticClass: "badge badge-danger" },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          Math.abs(statementList1.balanceAmount)
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
                      _vm.singleData.loanPayType == 2
                        ? _c("tr", [
                            _c("th"),
                            _vm._v(" "),
                            _c("th"),
                            _vm._v(" "),
                            _vm._m(2),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-right" }, [
                              _c("b", [_vm._v(_vm._s(_vm.totalInstallment))])
                            ]),
                            _vm._v(" "),
                            _c("th"),
                            _vm._v(" "),
                            _c("th")
                          ])
                        : _vm._e()
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
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v("Narration")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Debit")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Credit")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Balance")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticClass: "text-right" }, [
      _c("b", [_vm._v("Total :")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/accounting/view/loanReceiverLoanStatement.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/loanReceiverLoanStatement.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loanReceiverLoanStatement_vue_vue_type_template_id_46eca62e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loanReceiverLoanStatement.vue?vue&type=template&id=46eca62e& */ "./resources/js/admin/page/accounting/view/loanReceiverLoanStatement.vue?vue&type=template&id=46eca62e&");
/* harmony import */ var _loanReceiverLoanStatement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loanReceiverLoanStatement.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/accounting/view/loanReceiverLoanStatement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _loanReceiverLoanStatement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _loanReceiverLoanStatement_vue_vue_type_template_id_46eca62e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _loanReceiverLoanStatement_vue_vue_type_template_id_46eca62e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/accounting/view/loanReceiverLoanStatement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/accounting/view/loanReceiverLoanStatement.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/loanReceiverLoanStatement.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loanReceiverLoanStatement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./loanReceiverLoanStatement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/loanReceiverLoanStatement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loanReceiverLoanStatement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/accounting/view/loanReceiverLoanStatement.vue?vue&type=template&id=46eca62e&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/loanReceiverLoanStatement.vue?vue&type=template&id=46eca62e& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loanReceiverLoanStatement_vue_vue_type_template_id_46eca62e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./loanReceiverLoanStatement.vue?vue&type=template&id=46eca62e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/loanReceiverLoanStatement.vue?vue&type=template&id=46eca62e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loanReceiverLoanStatement_vue_vue_type_template_id_46eca62e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loanReceiverLoanStatement_vue_vue_type_template_id_46eca62e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);