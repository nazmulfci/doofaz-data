(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adminCategory@list"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopreport/admincategory@list.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/shopuser/shopreport/admincategory@list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
      adminCategoryLists: {}
    };
  },
  mounted: function mounted() {
    this.adminCategoryListShow();
  },
  methods: {
    adminCategoryListShow: function adminCategoryListShow() {
      var _this = this;

      axios.get('/adminCategoryListShow/' + this.$route.params.shopType + "/" + this.$route.params.labelId).then(function (res) {
        _this.adminCategoryLists = res.data.adminCategoryList;
        console.log(res.data);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopreport/admincategory@list.vue?vue&type=template&id=85bda734&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/shopuser/shopreport/admincategory@list.vue?vue&type=template&id=85bda734&scoped=true& ***!
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
    _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
      _c("ol", { staticClass: "breadcrumb" }, [
        _c(
          "li",
          { staticClass: "breadcrumb-item" },
          [
            _c("router-link", { attrs: { to: "/category@report" } }, [
              _vm._v("Category Report")
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
      _c("div", { staticClass: "table-responsive bg-white" }, [
        _c("table", { staticClass: "table table-hover table-bordered mb-0 " }, [
          _c("thead", [
            _c(
              "tr",
              { staticStyle: { background: "rgba(242, 242, 242, 0.47)" } },
              [
                _c("th", [_vm._v("SN")]),
                _vm._v(" "),
                this.$route.params.labelId == 1
                  ? _c("th", [_vm._v("Category")])
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.labelId == 2
                  ? _c("th", [_vm._v("Sub Category")])
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.labelId == 3
                  ? _c("th", [_vm._v("Third Category")])
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.labelId == 4
                  ? _c("th", [_vm._v("Fore Category")])
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.labelId == 5
                  ? _c("th", [_vm._v("Five Category")])
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.labelId == 6
                  ? _c("th", [_vm._v("Six Category")])
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.labelId == 7
                  ? _c("th", [_vm._v("Seven Category")])
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.labelId == 8
                  ? _c("th", [_vm._v("Eight Category")])
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.labelId == 9
                  ? _c("th", [_vm._v("Nine Category")])
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.labelId == 10
                  ? _c("th", [_vm._v("Ten Category")])
                  : _vm._e()
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.adminCategoryLists, function(adminCategoryList, index) {
              return _c("tr", [
                _c("td", [_vm._v(_vm._s(index + 1))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(adminCategoryList.categoryName))])
              ])
            }),
            0
          )
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
      {
        staticClass: "card-header",
        staticStyle: {
          background: "rgba(221, 221, 221, 0.20)",
          border: "1px solid rgba(0, 0, 0, 0.05)"
        }
      },
      [
        _c("h3", { staticStyle: { color: "black" } }, [
          _vm._v("Category List ")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/shopuser/shopreport/admincategory@list.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/shopuser/shopreport/admincategory@list.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admincategory_list_vue_vue_type_template_id_85bda734_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admincategory@list.vue?vue&type=template&id=85bda734&scoped=true& */ "./resources/js/shopuser/shopreport/admincategory@list.vue?vue&type=template&id=85bda734&scoped=true&");
/* harmony import */ var _admincategory_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admincategory@list.vue?vue&type=script&lang=js& */ "./resources/js/shopuser/shopreport/admincategory@list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _admincategory_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _admincategory_list_vue_vue_type_template_id_85bda734_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _admincategory_list_vue_vue_type_template_id_85bda734_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "85bda734",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/shopuser/shopreport/admincategory@list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/shopuser/shopreport/admincategory@list.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/shopuser/shopreport/admincategory@list.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admincategory_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./admincategory@list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopreport/admincategory@list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admincategory_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/shopuser/shopreport/admincategory@list.vue?vue&type=template&id=85bda734&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/shopuser/shopreport/admincategory@list.vue?vue&type=template&id=85bda734&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admincategory_list_vue_vue_type_template_id_85bda734_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./admincategory@list.vue?vue&type=template&id=85bda734&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopreport/admincategory@list.vue?vue&type=template&id=85bda734&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admincategory_list_vue_vue_type_template_id_85bda734_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admincategory_list_vue_vue_type_template_id_85bda734_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);