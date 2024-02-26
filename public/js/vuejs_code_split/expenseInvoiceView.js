(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expenseInvoiceView"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/expenseInvoiceView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/view/expenseInvoiceView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
        supplier_id: "",
        scanInformation: ""
      }),
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a,
      gets: '',
      invoiceInfo: '',
      invoiceProductLists: [],
      purchaseProductList: [],
      productBrandLists: [],
      purchaseTypes: [],
      unitLists: [],
      countryLists: [],
      supplierInfo: ''
    };
  },
  mounted: function mounted() {
    this.getInvoiceSetupInformation();
    this.getInvoiceInformation();
    this.getSupplyerInformation();
    this.getProductList();
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

      var uri = "getExpenseInvoiceInformation/".concat(this.$route.params.id);
      axios.get(uri).then(function (response) {
        _this2.unitLists = response.data.unitList;
        _this2.countryLists = response.data.countryList;
        _this2.purchaseTypes = response.data.purchaseType;
        _this2.productBrandLists = response.data.productBrandList;
        _this2.supplier_id = response.data.data.productSupplierId;
        _this2.invoiceInfo = response.data.data;
        _this2.invoiceProductLists = response.data.invoiceProductLists;
        _this2.supplierInfo = response.data.supplierInfo;
        _this2.purchaseProductList = response.data.purchaseProductList;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/expenseInvoiceView.vue?vue&type=template&id=b48de748&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/view/expenseInvoiceView.vue?vue&type=template&id=b48de748& ***!
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
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _vm._m(1),
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
                    _c("h2", { staticClass: "to" }, [
                      _vm._v(" " + _vm._s(_vm.supplierInfo.companyName) + " ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "address" }, [
                      _vm._v(_vm._s(_vm.supplierInfo.address))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "email" }, [
                      _c(
                        "a",
                        {
                          style: "color:" + _vm.gets.themeColor,
                          attrs: { href: "mailto:" + _vm.supplierInfo.email }
                        },
                        [
                          _vm._v(
                            "\n                          " +
                              _vm._s(_vm.supplierInfo.email)
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "address" }, [
                      _vm._v(" " + _vm._s(_vm.supplierInfo.mobileNo) + " ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col invoice-details" }, [
                    _c(
                      "h3",
                      {
                        staticClass: "invoice-id",
                        style: "color:" + _vm.gets.themeColor
                      },
                      [_vm._v(" Invoice#" + _vm._s(_vm.invoiceInfo.id) + " ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "date" }, [
                      _vm._v(
                        " Invoice Date: " +
                          _vm._s(
                            _vm
                              .moment(_vm.invoiceInfo.created_at)
                              .format("DD MMMM YYYY")
                          )
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "date" }, [
                      _vm._v(
                        " Expense Title: " +
                          _vm._s(_vm.invoiceInfo.expenseTitle)
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _vm.have
                    ? _c(
                        "tbody",
                        _vm._l(_vm.invoiceProductLists, function(
                          invoiceProductList,
                          index
                        ) {
                          return _c("tr", [
                            _c("td", [_vm._v(_vm._s(++index))]),
                            _vm._v(" "),
                            _c("td", {}, [
                              _vm._v(
                                " " + _vm._s(invoiceProductList.item) + " "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", {}, [
                              _vm._v(
                                " " +
                                  _vm._s(invoiceProductList.itemAmount) +
                                  " "
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    : _c("tbody", [
                        _c("tr", [
                          _c("td", [_vm._v(" 1 ")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              " " + _vm._s(_vm.invoiceInfo.expenseTitle) + " "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v(
                              " " + _vm._s(_vm.invoiceInfo.expenseAmount) + " "
                            )
                          ])
                        ])
                      ]),
                  _vm._v(" "),
                  _c("tfoot", [
                    _c("tr", [
                      _c("td"),
                      _vm._v(" "),
                      _c("td", [_vm._v(" Grand Total ")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " + _vm._s(_vm.invoiceInfo.expenseAmount) + " "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { attrs: { colspan: "2" } }, [
                        _vm.invoiceInfo.paymentType == 1
                          ? _c("span", [_vm._v(" Cash Pay ")])
                          : _vm.invoiceInfo.paymentType == 2
                          ? _c("span", [_vm._v(" Bank Pay")])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("td", {}, [
                        _vm.invoiceInfo.paymentType == 1
                          ? _c("span", [
                              _vm._v(
                                " " + _vm._s(_vm.invoiceInfo.cashAmount) + " "
                              )
                            ])
                          : _vm.invoiceInfo.paymentType == 2
                          ? _c("span", [
                              _vm._v(
                                " " + _vm._s(_vm.invoiceInfo.bankAmount) + " "
                              )
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { attrs: { colspan: "2" } }, [_vm._v("  Due ")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(" " + _vm._s(_vm.invoiceInfo.dueAmount) + " ")
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("footer", { staticStyle: { border: "none!important" } }, [
                _c("div", { staticClass: "row mt-5 pt-5" }, [
                  _c(
                    "div",
                    { staticClass: "col" },
                    [
                      _c("center", [
                        _c(
                          "span",
                          { staticStyle: { "text-decoration": "overline" } },
                          [_vm._v("         Sign       ")]
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col" },
                    [
                      _c("center", [
                        _c(
                          "span",
                          { staticStyle: { "text-decoration": "overline" } },
                          [_vm._v("       Authorize Sign       ")]
                        )
                      ])
                    ],
                    1
                  )
                ])
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
    return _c(
      "div",
      { staticClass: "card-header-tab card-header alert-info" },
      [
        _c("h4", [
          _c("i", {
            staticClass:
              "header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          }),
          _vm._v("\n          Expense Invoice ")
        ])
      ]
    )
  },
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
      ])
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
        _c("th", { staticClass: "text-left" }, [_vm._v("  Item Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v(" Item Amount ")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/accounting/view/expenseInvoiceView.vue":
/*!************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/expenseInvoiceView.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _expenseInvoiceView_vue_vue_type_template_id_b48de748___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expenseInvoiceView.vue?vue&type=template&id=b48de748& */ "./resources/js/admin/page/accounting/view/expenseInvoiceView.vue?vue&type=template&id=b48de748&");
/* harmony import */ var _expenseInvoiceView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expenseInvoiceView.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/accounting/view/expenseInvoiceView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _expenseInvoiceView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _expenseInvoiceView_vue_vue_type_template_id_b48de748___WEBPACK_IMPORTED_MODULE_0__["render"],
  _expenseInvoiceView_vue_vue_type_template_id_b48de748___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/accounting/view/expenseInvoiceView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/accounting/view/expenseInvoiceView.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/expenseInvoiceView.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_expenseInvoiceView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./expenseInvoiceView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/expenseInvoiceView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_expenseInvoiceView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/accounting/view/expenseInvoiceView.vue?vue&type=template&id=b48de748&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/expenseInvoiceView.vue?vue&type=template&id=b48de748& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_expenseInvoiceView_vue_vue_type_template_id_b48de748___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./expenseInvoiceView.vue?vue&type=template&id=b48de748& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/expenseInvoiceView.vue?vue&type=template&id=b48de748&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_expenseInvoiceView_vue_vue_type_template_id_b48de748___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_expenseInvoiceView_vue_vue_type_template_id_b48de748___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);