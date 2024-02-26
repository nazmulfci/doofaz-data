(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["opening@inventory@report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/opening@inventory@report.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@report/opening@inventory@report.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
      purchaseProductReports: {}
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  mounted: function mounted() {
    this.productSupplierList();
    this.getPaginateList();
  },
  methods: {
    productSupplierList: function productSupplierList() {
      var _this = this;

      axios.get('/openingProductReport').then(function (res) {
        _this.purchaseProductReports = res.data.purchaseProductReports;
      });
    },
    getPaginateList: function getPaginateList() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/openingProductReport?page=' + page).then(function (response) {
        _this2.purchaseProductReports = response.data.purchaseProductReports;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/opening@inventory@report.vue?vue&type=template&id=64383262&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@report/opening@inventory@report.vue?vue&type=template&id=64383262& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "table-responsive bg-white" }, [
        _c(
          "table",
          { staticClass: "table table-hover table-bordered  table-striped" },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.purchaseProductReports.data, function(
                purchaseProductReport,
                index
              ) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  purchaseProductReport.product_name
                    ? _c("td", [
                        _vm._v(
                          _vm._s(
                            purchaseProductReport.product_name.productName
                          ) +
                            " (" +
                            _vm._s(
                              purchaseProductReport.product_name.productCode
                            ) +
                            ")"
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(purchaseProductReport.quantity))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(purchaseProductReport.totalPrice))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass:
                            "mr-2 btn-hover-shine btn btn-shadow btn-primary",
                          attrs: {
                            to:
                              "/purchaseproduct@reportList" +
                              purchaseProductReport.productId
                          }
                        },
                        [
                          _c("i", { staticClass: " fa fa-eye pr-2" }),
                          _vm._v("View Details")
                        ]
                      )
                    ],
                    1
                  )
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
              attrs: { data: _vm.purchaseProductReports, limit: _vm.limit },
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
          _vm._v("Opening Product Report")
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
        _c("th", [_vm._v("SN")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/opening@inventory@report.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/opening@inventory@report.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _opening_inventory_report_vue_vue_type_template_id_64383262___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./opening@inventory@report.vue?vue&type=template&id=64383262& */ "./resources/js/admin/page/inventory/inventory@report/opening@inventory@report.vue?vue&type=template&id=64383262&");
/* harmony import */ var _opening_inventory_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opening@inventory@report.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/inventory/inventory@report/opening@inventory@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _opening_inventory_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _opening_inventory_report_vue_vue_type_template_id_64383262___WEBPACK_IMPORTED_MODULE_0__["render"],
  _opening_inventory_report_vue_vue_type_template_id_64383262___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/inventory/inventory@report/opening@inventory@report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/opening@inventory@report.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/opening@inventory@report.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_inventory_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./opening@inventory@report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/opening@inventory@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_inventory_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/opening@inventory@report.vue?vue&type=template&id=64383262&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/opening@inventory@report.vue?vue&type=template&id=64383262& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_inventory_report_vue_vue_type_template_id_64383262___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./opening@inventory@report.vue?vue&type=template&id=64383262& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/opening@inventory@report.vue?vue&type=template&id=64383262&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_inventory_report_vue_vue_type_template_id_64383262___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_inventory_report_vue_vue_type_template_id_64383262___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);