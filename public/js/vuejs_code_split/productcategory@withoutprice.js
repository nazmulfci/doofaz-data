(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productcategory@withoutprice"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/productcategory@withoutprice.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@report/productcategory@withoutprice.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      productPriceSetupCategorys: {},
      productPriceSetupCategoryProducts: {},
      productPriceSetupProducts: {},
      productNames: {},
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

      axios.get('/invetoryCategoryWithoutPriceList').then(function (res) {
        _this.productPriceSetupCategorys = res.data.productPriceSetupCategory;
        _this.productPriceSetupCategoryProducts = res.data.productPriceSetupCategoryProduct;
        _this.productPriceSetupProducts = res.data.productPriceSetupProduct;
        _this.productNames = res.data.productName;
      });
    },
    getPaginateList: function getPaginateList() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/invetoryCategoryWithoutPriceList?page=' + page).then(function (response) {
        _this2.productPriceSetupCategorys = response.data.productPriceSetupCategory;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/productcategory@withoutprice.vue?vue&type=template&id=a20d4654&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@report/productcategory@withoutprice.vue?vue&type=template&id=a20d4654& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
              { staticClass: "table table-hover table-bordered mb-0" },
              [
                _c(
                  "tbody",
                  _vm._l(_vm.productPriceSetupCategorys.data, function(
                    productPriceSetupCategory,
                    index
                  ) {
                    return _c("tr", [
                      productPriceSetupCategory.category_name
                        ? _c(
                            "th",
                            { staticClass: "text-center px-0 " },
                            [
                              _c("h5", [
                                _vm._v(
                                  _vm._s(
                                    productPriceSetupCategory.category_name
                                      .categoryName
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _vm._l(
                                _vm.productPriceSetupCategoryProducts,
                                function(productPriceSetupCategoryProduct) {
                                  return productPriceSetupCategory.categoryId ==
                                    productPriceSetupCategoryProduct.categoryId
                                    ? _c("tr", [
                                        _c(
                                          "th",
                                          _vm._l(_vm.productNames, function(
                                            productName
                                          ) {
                                            return productPriceSetupCategoryProduct.productNameId ==
                                              productName.productNameId
                                              ? _c("tr", [
                                                  productPriceSetupCategoryProduct.productNameId !=
                                                  productName.productNameId
                                                    ? _c("td", [
                                                        _vm._v(
                                                          "\n                              " +
                                                            _vm._s(
                                                              productName.productName
                                                            ) +
                                                            "\n                            "
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ])
                                              : _vm._e()
                                          }),
                                          0
                                        )
                                      ])
                                    : _vm._e()
                                }
                              )
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
                  attrs: {
                    data: _vm.productPriceSetupCategorys,
                    limit: _vm.limit
                  },
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
          background: "rgba(221, 221, 221, 0.46)",
          border: "1px solid rgba(0, 0, 0, 0.12)"
        }
      },
      [
        _c("h3", { staticStyle: { color: "black" } }, [
          _vm._v("Product Category Without Price")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/productcategory@withoutprice.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/productcategory@withoutprice.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productcategory_withoutprice_vue_vue_type_template_id_a20d4654___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productcategory@withoutprice.vue?vue&type=template&id=a20d4654& */ "./resources/js/admin/page/inventory/inventory@report/productcategory@withoutprice.vue?vue&type=template&id=a20d4654&");
/* harmony import */ var _productcategory_withoutprice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productcategory@withoutprice.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/inventory/inventory@report/productcategory@withoutprice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _productcategory_withoutprice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productcategory_withoutprice_vue_vue_type_template_id_a20d4654___WEBPACK_IMPORTED_MODULE_0__["render"],
  _productcategory_withoutprice_vue_vue_type_template_id_a20d4654___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/inventory/inventory@report/productcategory@withoutprice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/productcategory@withoutprice.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/productcategory@withoutprice.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productcategory_withoutprice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./productcategory@withoutprice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/productcategory@withoutprice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productcategory_withoutprice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/productcategory@withoutprice.vue?vue&type=template&id=a20d4654&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/productcategory@withoutprice.vue?vue&type=template&id=a20d4654& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productcategory_withoutprice_vue_vue_type_template_id_a20d4654___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./productcategory@withoutprice.vue?vue&type=template&id=a20d4654& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/productcategory@withoutprice.vue?vue&type=template&id=a20d4654&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productcategory_withoutprice_vue_vue_type_template_id_a20d4654___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productcategory_withoutprice_vue_vue_type_template_id_a20d4654___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);