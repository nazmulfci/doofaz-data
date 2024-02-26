(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productbrand@list"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopreport/productbrand@reportList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/shopuser/shopreport/productbrand@reportList.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      myGuard: '',
      authInfos: [],
      shopTypelists: [],
      productBrandReportLists: {},
      productBrandReportLists1: {}
    };
  },
  mounted: function mounted() {
    this.shopIncomeTypeReportList();
    this.shopIncomeTypeReportList1();
    this.getShopType();
    this.getMyGuard();
    this.getAuthInfo();
  },
  methods: {
    getAuthInfo: function getAuthInfo() {
      var _this = this;

      var url = "getAuthInfo";
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this.authInfos = response.data;
      });
    },
    getShopType: function getShopType() {
      var _this2 = this;

      var url = "shopTypeEntry";
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this2.shopTypelists = response.data;
      });
    },
    getMyGuard: function getMyGuard() {
      var _this3 = this;

      axios.get('/getMyGuard').then(function (res) {
        _this3.myGuard = res.data.myGuard;
      });
    },
    shopIncomeTypeReportList: function shopIncomeTypeReportList() {
      var _this4 = this;

      axios.get('/shopProductBrandReportList/' + 1).then(function (res) {
        _this4.productBrandReportLists = res.data.owneProductBrandReport;
      });
    },
    shopIncomeTypeReportList1: function shopIncomeTypeReportList1() {
      var _this5 = this;

      axios.get('/shopProductBrandReportList/' + 2).then(function (res) {
        _this5.productBrandReportLists1 = res.data.globalProductBrandReport;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopreport/productbrand@reportList.vue?vue&type=template&id=349ec655&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/shopuser/shopreport/productbrand@reportList.vue?vue&type=template&id=349ec655& ***!
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
            staticClass: "table table-hover table-bordered bordered",
            staticStyle: { width: "100%" },
            attrs: { id: "example" }
          },
          _vm._l(_vm.shopTypelists, function(shopTypelist) {
            return _vm.myGuard == "web" ||
              (_vm.myGuard == "admin" &&
                _vm.authInfos.shopTypeId == shopTypelist.shopTypeEntryId)
              ? _c(
                  "tbody",
                  { key: shopTypelist.shopTypeEntryId },
                  [
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "text-center alert-success",
                          attrs: { colspan: "12" }
                        },
                        [
                          _c("h4", [
                            _vm._v(
                              " " + _vm._s(shopTypelist.shopTypeName) + "  "
                            )
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(3, true),
                    _vm._v(" "),
                    _vm._l(_vm.productBrandReportLists, function(
                      productBrandReportList,
                      index
                    ) {
                      return productBrandReportList.shopTypeId ==
                        shopTypelist.shopTypeEntryId
                        ? _c(
                            "tr",
                            { key: productBrandReportList.productBrandEntryId },
                            [
                              _c("td", [_vm._v(" " + _vm._s(++index) + " ")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      productBrandReportList.productBrandName
                                    ) +
                                    " "
                                )
                              ])
                            ]
                          )
                        : _vm._e()
                    }),
                    _vm._v(" "),
                    _vm._m(4, true),
                    _vm._v(" "),
                    _vm._l(_vm.productBrandReportLists1, function(
                      productBrandReportList1,
                      index
                    ) {
                      return productBrandReportList1.shopTypeId ==
                        shopTypelist.shopTypeEntryId
                        ? _c(
                            "tr",
                            {
                              key: productBrandReportList1.productBrandEntryId
                            },
                            [
                              _c("td", [_vm._v(" " + _vm._s(++index) + " ")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      productBrandReportList1.productBrandName
                                    ) +
                                    " "
                                )
                              ])
                            ]
                          )
                        : _vm._e()
                    })
                  ],
                  2
                )
              : _vm._e()
          }),
          0
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
          _vm._v("\n          Product Brand Report  ")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c(
        "td",
        { staticClass: "text-center alert-light", attrs: { colspan: "2" } },
        [
          _c("span", { staticClass: "badge badge-success" }, [
            _vm._v(" Owner ")
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c(
        "td",
        { staticClass: "text-center alert-light", attrs: { colspan: "2" } },
        [
          _c("span", { staticClass: "badge badge-success" }, [
            _vm._v(" Global ")
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/shopuser/shopreport/productbrand@reportList.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/shopuser/shopreport/productbrand@reportList.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productbrand_reportList_vue_vue_type_template_id_349ec655___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productbrand@reportList.vue?vue&type=template&id=349ec655& */ "./resources/js/shopuser/shopreport/productbrand@reportList.vue?vue&type=template&id=349ec655&");
/* harmony import */ var _productbrand_reportList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productbrand@reportList.vue?vue&type=script&lang=js& */ "./resources/js/shopuser/shopreport/productbrand@reportList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _productbrand_reportList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productbrand_reportList_vue_vue_type_template_id_349ec655___WEBPACK_IMPORTED_MODULE_0__["render"],
  _productbrand_reportList_vue_vue_type_template_id_349ec655___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/shopuser/shopreport/productbrand@reportList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/shopuser/shopreport/productbrand@reportList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/shopuser/shopreport/productbrand@reportList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productbrand_reportList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./productbrand@reportList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopreport/productbrand@reportList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productbrand_reportList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/shopuser/shopreport/productbrand@reportList.vue?vue&type=template&id=349ec655&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/shopuser/shopreport/productbrand@reportList.vue?vue&type=template&id=349ec655& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productbrand_reportList_vue_vue_type_template_id_349ec655___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./productbrand@reportList.vue?vue&type=template&id=349ec655& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopreport/productbrand@reportList.vue?vue&type=template&id=349ec655&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productbrand_reportList_vue_vue_type_template_id_349ec655___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productbrand_reportList_vue_vue_type_template_id_349ec655___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);