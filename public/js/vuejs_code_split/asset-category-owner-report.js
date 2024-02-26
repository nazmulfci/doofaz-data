(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asset-category-owner-report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/asset/asset@report/assetcategory@ownerreport.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/asset/asset@report/assetcategory@ownerreport.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      assetCategoryListShows: {}
    };
  },
  mounted: function mounted() {
    this.assetCategoryList();
  },
  methods: {
    assetCategoryList: function assetCategoryList() {
      var _this = this;

      axios.get('/shopAssetCategoryReportOwnerShow/' + this.$route.params.assetCategorylabelId).then(function (res) {
        _this.assetCategoryListShows = res.data.assetCategoryList;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/asset/asset@report/assetcategory@ownerreport.vue?vue&type=template&id=03d9dcbb&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/asset/asset@report/assetcategory@ownerreport.vue?vue&type=template&id=03d9dcbb&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
    _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
      _c("ol", { staticClass: "breadcrumb" }, [
        _c(
          "li",
          { staticClass: "breadcrumb-item" },
          [
            _c("router-link", { attrs: { to: "/assetcategory@report" } }, [
              _vm._v("Asset Category Report")
            ])
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card main-card  element-block-example" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive bg-white p-3" }, [
        _c(
          "table",
          { staticClass: "table table-hover table-striped table-bordered" },
          [
            _c("thead", [
              _c("tr", { staticClass: "alert-info" }, [
                _c("th", [_vm._v("SN")]),
                _vm._v(" "),
                this.$route.params.assetCategorylabelId == 1
                  ? _c("th", [_vm._v("Category")])
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.assetCategorylabelId == 2
                  ? _c("th", [_vm._v("Sub Category")])
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.assetCategorylabelId == 3
                  ? _c("th", [_vm._v("Third Category")])
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.assetCategorylabelId == 4
                  ? _c("th", [_vm._v("Fore Category")])
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.assetCategorylabelId == 5
                  ? _c("th", [_vm._v("Five Category")])
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.assetCategorylabelId == 6
                  ? _c("th", [_vm._v("Six Category")])
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.assetCategorylabelId == 7
                  ? _c("th", [_vm._v("Seven Category")])
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.assetCategorylabelId == 8
                  ? _c("th", [_vm._v("Eight Category")])
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.assetCategorylabelId == 9
                  ? _c("th", [_vm._v("Nine Category")])
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.assetCategorylabelId == 10
                  ? _c("th", [_vm._v("Ten Category")])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.assetCategoryListShows, function(
                assetCategoryListShow,
                index
              ) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(assetCategoryListShow.assetCategoryName))
                  ])
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
    return _c("div", { staticClass: "card-header alert-info" }, [
      _c("h3", [_vm._v("Asset Category Owner List")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/asset/asset@report/assetcategory@ownerreport.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/admin/page/asset/asset@report/assetcategory@ownerreport.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assetcategory_ownerreport_vue_vue_type_template_id_03d9dcbb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assetcategory@ownerreport.vue?vue&type=template&id=03d9dcbb&scoped=true& */ "./resources/js/admin/page/asset/asset@report/assetcategory@ownerreport.vue?vue&type=template&id=03d9dcbb&scoped=true&");
/* harmony import */ var _assetcategory_ownerreport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assetcategory@ownerreport.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/asset/asset@report/assetcategory@ownerreport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _assetcategory_ownerreport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _assetcategory_ownerreport_vue_vue_type_template_id_03d9dcbb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _assetcategory_ownerreport_vue_vue_type_template_id_03d9dcbb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "03d9dcbb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/asset/asset@report/assetcategory@ownerreport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/asset/asset@report/assetcategory@ownerreport.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/admin/page/asset/asset@report/assetcategory@ownerreport.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assetcategory_ownerreport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./assetcategory@ownerreport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/asset/asset@report/assetcategory@ownerreport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assetcategory_ownerreport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/asset/asset@report/assetcategory@ownerreport.vue?vue&type=template&id=03d9dcbb&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/admin/page/asset/asset@report/assetcategory@ownerreport.vue?vue&type=template&id=03d9dcbb&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assetcategory_ownerreport_vue_vue_type_template_id_03d9dcbb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./assetcategory@ownerreport.vue?vue&type=template&id=03d9dcbb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/asset/asset@report/assetcategory@ownerreport.vue?vue&type=template&id=03d9dcbb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assetcategory_ownerreport_vue_vue_type_template_id_03d9dcbb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assetcategory_ownerreport_vue_vue_type_template_id_03d9dcbb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);