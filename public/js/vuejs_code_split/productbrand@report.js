(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productbrand@report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopreport/productbrand@report.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/shopuser/shopreport/productbrand@report.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      productBrandReportLists: {},
      productBrandReportLists1: {},
      userInfos: {},
      shopInfos: {}
    };
  },
  mounted: function mounted() {
    this.shopIncomeTypeReportList();
    this.shopIncomeTypeReportList1();
    this.getUserInfo();
    this.getShopInfo();
  },
  methods: {
    shopIncomeTypeReportList: function shopIncomeTypeReportList() {
      var _this = this;

      axios.get('/shopProductBrandReportListForAdmin/' + 1).then(function (res) {
        _this.productBrandReportLists = res.data.owneProductBrandReport;
      });
    },
    shopIncomeTypeReportList1: function shopIncomeTypeReportList1() {
      var _this2 = this;

      axios.get('/shopProductBrandReportListForAdmin/' + 2).then(function (res) {
        _this2.productBrandReportLists1 = res.data.globalProductBrandReport;
      });
    },
    getUserInfo: function getUserInfo() {
      var _this3 = this;

      // alert(productBrandReportLists1.createBy);
      axios.get('getUserInfo/').then(function (res) {
        _this3.userInfos = res.data.data;
      });
    },
    getShopInfo: function getShopInfo() {
      var _this4 = this;

      // alert(productBrandReportLists1.createBy);
      axios.get('getUserInfoWtihShopType/').then(function (res) {
        _this4.shopInfos = res.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopreport/productbrand@report.vue?vue&type=template&id=5e6c0817&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/shopuser/shopreport/productbrand@report.vue?vue&type=template&id=5e6c0817& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "app-page-title" }, [
      _c("div", { staticClass: "page-title-wrapper" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "page-title-actions" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn-shadow mr-3 btn btn-warning",
                attrs: {
                  to: "/productbrand@list",
                  type: "button",
                  title: "",
                  "data-placement": "bottom",
                  "data-toggle": "tooltip",
                  "data-original-title": "Refresh"
                }
              },
              [_c("i", { staticClass: "fa fa-undo text-white" })]
            ),
            _vm._v(" "),
            _vm._m(1)
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card main-card  element-block-example" }, [
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "card-body table-responsive bg-white" }, [
        _c(
          "table",
          {
            staticClass: "table table-hover table-striped table-bordered",
            staticStyle: { width: "100%" },
            attrs: { id: "example" }
          },
          [
            _vm._m(3),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.productBrandReportLists, function(
                productBrandReportList,
                index
              ) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(productBrandReportList.productBrandName))
                  ])
                ])
              }),
              0
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card main-card  element-block-example mt-5" }, [
      _vm._m(4),
      _vm._v(" "),
      _c("div", { staticClass: "card-body table-responsive bg-white" }, [
        _c(
          "table",
          {
            staticClass: "table table-hover table-striped table-bordered",
            staticStyle: { width: "100%" },
            attrs: { id: "example" }
          },
          [
            _vm._m(5),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.productBrandReportLists1, function(
                productBrandReportList1,
                index1
              ) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(index1 + 1))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(productBrandReportList1.productBrandName))
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _vm._l(_vm.userInfos, function(userInfo) {
                        return userInfo.id == productBrandReportList1.createBy
                          ? _c("span", { key: userInfo.id }, [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(userInfo.name) +
                                  "\n                    "
                              ),
                              _c("br")
                            ])
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.shopInfos, function(shopInfo) {
                        return shopInfo.shopInfoId ==
                          productBrandReportList1.createBy
                          ? _c(
                              "span",
                              { key: shopInfo.shopInfoId },
                              [
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "font",
                                  {
                                    staticClass:
                                      "badge badge-outline-pill badge-success btn-hover-shine"
                                  },
                                  [
                                    _vm._v(
                                      " " + _vm._s(shopInfo.shopTypeName) + " "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      })
                    ],
                    2
                  )
                ])
              }),
              0
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-title-heading" }, [
      _c("div", { staticClass: "page-title-icon" }, [
        _c("i", { staticClass: "pe-7s-menu icon-gradient bg-mean-fruit" })
      ]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n            Product Brand Report\n            "),
        _c("div", { staticClass: "page-title-subheading" }, [
          _vm._v("\n             Product Brand Report\n            ")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-inline-block dropdown" }, [
      _c(
        "button",
        {
          staticClass: "btn-shadow btn btn-info",
          attrs: { type: "button", onclick: "window.history.back()" }
        },
        [
          _c("span", { staticClass: "lnr lnr-arrow-left" }),
          _vm._v("\n              Back\n            ")
        ]
      )
    ])
  },
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
          _vm._v("\n          Product Brand Report (Owner)   ")
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
        _c("th", [_vm._v("SN ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product Brand")])
      ])
    ])
  },
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
          _vm._v("\n          Product Brand Report (Global)   ")
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
        _c("th", [_vm._v("SN ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product Brand")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Shop Name  ")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/shopuser/shopreport/productbrand@report.vue":
/*!******************************************************************!*\
  !*** ./resources/js/shopuser/shopreport/productbrand@report.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productbrand_report_vue_vue_type_template_id_5e6c0817___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productbrand@report.vue?vue&type=template&id=5e6c0817& */ "./resources/js/shopuser/shopreport/productbrand@report.vue?vue&type=template&id=5e6c0817&");
/* harmony import */ var _productbrand_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productbrand@report.vue?vue&type=script&lang=js& */ "./resources/js/shopuser/shopreport/productbrand@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _productbrand_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productbrand_report_vue_vue_type_template_id_5e6c0817___WEBPACK_IMPORTED_MODULE_0__["render"],
  _productbrand_report_vue_vue_type_template_id_5e6c0817___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/shopuser/shopreport/productbrand@report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/shopuser/shopreport/productbrand@report.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/shopuser/shopreport/productbrand@report.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productbrand_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./productbrand@report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopreport/productbrand@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productbrand_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/shopuser/shopreport/productbrand@report.vue?vue&type=template&id=5e6c0817&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/shopuser/shopreport/productbrand@report.vue?vue&type=template&id=5e6c0817& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productbrand_report_vue_vue_type_template_id_5e6c0817___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./productbrand@report.vue?vue&type=template&id=5e6c0817& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopreport/productbrand@report.vue?vue&type=template&id=5e6c0817&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productbrand_report_vue_vue_type_template_id_5e6c0817___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productbrand_report_vue_vue_type_template_id_5e6c0817___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);