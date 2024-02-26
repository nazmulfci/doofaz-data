(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asset-category-report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/asset/asset@report/assetcategory@report.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/asset/asset@report/assetcategory@report.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      category: {},
      subcategory: {},
      thirdCategory: {},
      foreCategory: {},
      fiveCategory: {},
      sixCategory: {},
      sevenCategory: {},
      eightCategory: {},
      nineCategory: {},
      tenCategory: {},
      globalCategoryCount: {},
      globalSubcategoryCount: {},
      globalThirdCategoryCount: {},
      globalForeCategoryCount: {},
      globalFiveCategoryCount: {},
      globalSixCategoryCount: {},
      globalSevenCategoryCount: {},
      globalEightCategoryCount: {},
      globalNineCategoryCount: {},
      globalTenCategoryCount: {}
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  mounted: function mounted() {
    this.assetCategoryListShow();
  },
  methods: {
    assetCategoryListShow: function assetCategoryListShow() {
      var _this = this;

      axios.get('/shopAssetCategoryReportOwner').then(function (res) {
        _this.category = res.data.category;
        _this.subcategory = res.data.subcategory;
        _this.thirdCategory = res.data.thirdCategory;
        _this.foreCategory = res.data.foreCategory;
        _this.fiveCategory = res.data.fiveCategory;
        _this.sixCategory = res.data.sixCategory;
        _this.sevenCategory = res.data.sevenCategory;
        _this.eightCategory = res.data.eightCategory;
        _this.nineCategory = res.data.nineCategory;
        _this.tenCategory = res.data.tenCategory;
      });
      axios.get('/shopAssetCategoryReportGlobal').then(function (res) {
        _this.globalCategoryCount = res.data.globalCategoryCount;
        _this.globalSubcategoryCount = res.data.globalSubcategoryCount;
        _this.globalThirdCategoryCount = res.data.globalThirdCategoryCount;
        _this.globalForeCategoryCount = res.data.globalForeCategoryCount;
        _this.globalFiveCategoryCount = res.data.globalFiveCategoryCount;
        _this.globalSixCategoryCount = res.data.globalSixCategoryCount;
        _this.globalSevenCategoryCount = res.data.globalSevenCategoryCount;
        _this.globalEightCategoryCount = res.data.globalEightCategoryCount;
        _this.globalNineCategoryCount = res.data.globalNineCategoryCount;
        _this.globalTenCategoryCount = res.data.globalTenCategoryCount;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/asset/asset@report/assetcategory@report.vue?vue&type=template&id=762a2050&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/asset/asset@report/assetcategory@report.vue?vue&type=template&id=762a2050& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "table-responsive bg-white p-3" }, [
        _c(
          "table",
          { staticClass: "table table-hover table-striped table-bordered" },
          [
            _vm._m(1),
            _vm._v(" "),
            _c("tbody", [
              _c("tr", [
                _c("td", [_vm._v("Owner")]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "div",
                    { staticClass: "mr-1 float-left display-inline-css" },
                    [
                      _vm.category != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@ownerreport" + 1 }
                            },
                            [_vm._v("Category (" + _vm._s(_vm.category) + ")")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.subcategory != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@ownerreport" + 2 }
                            },
                            [
                              _vm._v(
                                "Sub Category (" + _vm._s(_vm.subcategory) + ")"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.thirdCategory != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@ownerreport" + 3 }
                            },
                            [
                              _vm._v(
                                "Third Category (" +
                                  _vm._s(_vm.thirdCategory) +
                                  ")"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.foreCategory != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@ownerreport" + 4 }
                            },
                            [
                              _vm._v(
                                "Four Category (" +
                                  _vm._s(_vm.foreCategory) +
                                  ")"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.fiveCategory != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@ownerreport" + 5 }
                            },
                            [
                              _vm._v(
                                "Five Category (" +
                                  _vm._s(_vm.fiveCategory) +
                                  ")"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.sixCategory != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@ownerreport" + 6 }
                            },
                            [
                              _vm._v(
                                "Six Category (" + _vm._s(_vm.sixCategory) + ")"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.sevenCategory != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@ownerreport" + 7 }
                            },
                            [
                              _vm._v(
                                "Seven Category (" +
                                  _vm._s(_vm.sevenCategory) +
                                  ")"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.eightCategory != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@ownerreport" + 8 }
                            },
                            [
                              _vm._v(
                                "Eight Category (" +
                                  _vm._s(_vm.eightCategory) +
                                  ")"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.nineCategory != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@ownerreport" + 9 }
                            },
                            [
                              _vm._v(
                                "Nine Category (" +
                                  _vm._s(_vm.nineCategory) +
                                  ")"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.tenCategory != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@ownerreport" + 10 }
                            },
                            [
                              _vm._v(
                                "Ten Category (" + _vm._s(_vm.tenCategory) + ")"
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Global")]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "div",
                    { staticClass: "mr-1 float-left display-inline-css" },
                    [
                      _vm.globalCategoryCount != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@globalreport" + 1 }
                            },
                            [
                              _vm._v(
                                "Category (" +
                                  _vm._s(_vm.globalCategoryCount) +
                                  ")"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.globalSubcategoryCount != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@globalreport" + 2 }
                            },
                            [
                              _vm._v(
                                "Sub Category (" +
                                  _vm._s(_vm.globalSubcategoryCount) +
                                  ")"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.globalThirdCategoryCount != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@globalreport" + 3 }
                            },
                            [
                              _vm._v(
                                "Third Category (" +
                                  _vm._s(_vm.globalThirdCategoryCount) +
                                  ")"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.globalForeCategoryCount != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@globalreport" + 4 }
                            },
                            [
                              _vm._v(
                                "Four Category (" +
                                  _vm._s(_vm.globalForeCategoryCount) +
                                  ")"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.globalFiveCategoryCount != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@globalreport" + 5 }
                            },
                            [
                              _vm._v(
                                "Five Category (" +
                                  _vm._s(_vm.globalFiveCategoryCount) +
                                  ")"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.globalSixCategoryCount != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@globalreport" + 6 }
                            },
                            [
                              _vm._v(
                                "Six Category (" +
                                  _vm._s(_vm.globalSixCategoryCount) +
                                  ")"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.globalSevenCategoryCount != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@globalreport" + 7 }
                            },
                            [
                              _vm._v(
                                "Seven Category (" +
                                  _vm._s(_vm.globalSevenCategoryCount) +
                                  ")"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.globalEightCategoryCount != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@globalreport" + 8 }
                            },
                            [
                              _vm._v(
                                "Eight Category (" +
                                  _vm._s(_vm.globalEightCategoryCount) +
                                  ")"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.globalNineCategoryCount != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@globalreport" + 9 }
                            },
                            [
                              _vm._v(
                                "Nine Category (" +
                                  _vm._s(_vm.globalNineCategoryCount) +
                                  ")"
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.globalTenCategoryCount != 0
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn-hover-shine btn-success",
                              attrs: { to: "/assetcategory@globalreport" + 10 }
                            },
                            [
                              _vm._v(
                                "Ten Category (" +
                                  _vm._s(_vm.globalTenCategoryCount) +
                                  ")"
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ])
              ])
            ])
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", [
        _c("i", {
          staticClass:
            "header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
        }),
        _vm._v("Asset Category Report")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "alert-info" }, [
        _c("th", [_vm._v("Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Asset Category")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/asset/asset@report/assetcategory@report.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/page/asset/asset@report/assetcategory@report.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assetcategory_report_vue_vue_type_template_id_762a2050___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assetcategory@report.vue?vue&type=template&id=762a2050& */ "./resources/js/admin/page/asset/asset@report/assetcategory@report.vue?vue&type=template&id=762a2050&");
/* harmony import */ var _assetcategory_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assetcategory@report.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/asset/asset@report/assetcategory@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _assetcategory_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _assetcategory_report_vue_vue_type_template_id_762a2050___WEBPACK_IMPORTED_MODULE_0__["render"],
  _assetcategory_report_vue_vue_type_template_id_762a2050___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/asset/asset@report/assetcategory@report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/asset/asset@report/assetcategory@report.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/admin/page/asset/asset@report/assetcategory@report.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assetcategory_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./assetcategory@report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/asset/asset@report/assetcategory@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assetcategory_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/asset/asset@report/assetcategory@report.vue?vue&type=template&id=762a2050&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/admin/page/asset/asset@report/assetcategory@report.vue?vue&type=template&id=762a2050& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assetcategory_report_vue_vue_type_template_id_762a2050___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./assetcategory@report.vue?vue&type=template&id=762a2050& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/asset/asset@report/assetcategory@report.vue?vue&type=template&id=762a2050&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assetcategory_report_vue_vue_type_template_id_762a2050___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assetcategory_report_vue_vue_type_template_id_762a2050___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);