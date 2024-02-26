(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["supplierwise@shortage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@shortage/supplierwise@shortage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@shortage/supplierwise@shortage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      purchaseSupplierLists: {},
      purchaseProductLists: {},
      role: {}
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  mounted: function mounted() {
    this.categoryList();
    this.getPaginateList();
    this.conditon();
  },
  methods: {
    categoryList: function categoryList() {
      var _this = this;

      axios.get('/supplierWithProductShortage').then(function (res) {
        _this.purchaseSupplierLists = res.data.purchaseSupplierLists;
        _this.purchaseProductLists = res.data.purchaseProductLists;
      });
    },
    getPaginateList: function getPaginateList() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/supplierWithProductShortage?page=' + page).then(function (response) {
        _this2.purchaseBrandLists = response.data.purchaseBrandLists;
      });
    },
    conditon: function conditon() {
      var _this3 = this;

      axios.get('/condition').then(function (res) {
        _this3.role = res.data.authInfo;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@shortage/supplierwise@shortage.vue?vue&type=template&id=07b2a4a0&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@shortage/supplierwise@shortage.vue?vue&type=template&id=07b2a4a0& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    _vm.role.role != 1 && _vm.role.role != 2
      ? _c("div", { staticClass: "card main-card  element-block-example" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive bg-white" }, [
            _c(
              "table",
              { staticClass: "table table-hover table-bordered table-striped" },
              [
                _c(
                  "tbody",
                  _vm._l(_vm.purchaseSupplierLists.data, function(
                    purchaseSupplierList,
                    index
                  ) {
                    return _c("tr", [
                      purchaseSupplierList.product_supplier_name
                        ? _c(
                            "th",
                            { staticClass: "text-center px-0 " },
                            [
                              _c("h5", [
                                _vm._v(
                                  _vm._s(
                                    purchaseSupplierList.product_supplier_name
                                      .productSupplierName
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _vm._m(1, true),
                              _vm._v(" "),
                              _vm._l(_vm.purchaseProductLists, function(
                                purchaseProductList,
                                index
                              ) {
                                return purchaseProductList.productSupplierId ==
                                  purchaseSupplierList.productSupplierId
                                  ? _c("tr", [
                                      _c("td", [_vm._v(_vm._s(index + 1))]),
                                      _vm._v(" "),
                                      purchaseProductList.product_name
                                        ? _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                purchaseProductList.product_name
                                                  .productName
                                              ) +
                                                " (" +
                                                _vm._s(
                                                  purchaseProductList
                                                    .product_name.productCode
                                                ) +
                                                ")"
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      purchaseProductList.unit_name
                                        ? _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                purchaseProductList.unit_name
                                                  .uniteEntryName
                                              )
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(purchaseProductList.quantity)
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(purchaseProductList.totalPrice)
                                        )
                                      ])
                                    ])
                                  : _vm._e()
                              })
                            ],
                            2
                          )
                        : _vm._e()
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
                  attrs: { data: _vm.purchaseBrandLists, limit: _vm.limit },
                  on: { "pagination-change-page": _vm.getPaginateList }
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
        ])
      : _vm._e()
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
          _vm._v("Supplier With Product Shortage")
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
        _c("th", { staticStyle: { width: "330px" } }, [_vm._v("SN")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "330px" } }, [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "330px" } }, [_vm._v("Unit")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "330px" } }, [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "330px" } }, [_vm._v("Total Price")])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@shortage/supplierwise@shortage.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@shortage/supplierwise@shortage.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _supplierwise_shortage_vue_vue_type_template_id_07b2a4a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplierwise@shortage.vue?vue&type=template&id=07b2a4a0& */ "./resources/js/admin/page/inventory/inventory@shortage/supplierwise@shortage.vue?vue&type=template&id=07b2a4a0&");
/* harmony import */ var _supplierwise_shortage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplierwise@shortage.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/inventory/inventory@shortage/supplierwise@shortage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _supplierwise_shortage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _supplierwise_shortage_vue_vue_type_template_id_07b2a4a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _supplierwise_shortage_vue_vue_type_template_id_07b2a4a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/inventory/inventory@shortage/supplierwise@shortage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@shortage/supplierwise@shortage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@shortage/supplierwise@shortage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supplierwise_shortage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./supplierwise@shortage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@shortage/supplierwise@shortage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supplierwise_shortage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@shortage/supplierwise@shortage.vue?vue&type=template&id=07b2a4a0&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@shortage/supplierwise@shortage.vue?vue&type=template&id=07b2a4a0& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_supplierwise_shortage_vue_vue_type_template_id_07b2a4a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./supplierwise@shortage.vue?vue&type=template&id=07b2a4a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@shortage/supplierwise@shortage.vue?vue&type=template&id=07b2a4a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_supplierwise_shortage_vue_vue_type_template_id_07b2a4a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_supplierwise_shortage_vue_vue_type_template_id_07b2a4a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);