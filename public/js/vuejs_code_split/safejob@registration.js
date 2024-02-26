(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["safejob@registration"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopInformation/safejob@registration.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/shopInformation/safejob@registration.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      shopLists: [],
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a
    };
  },
  mounted: function mounted() {
    this.view();
  },
  methods: {
    view: function view() {
      var _this = this;

      var url = "admintemps";
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this.shopLists = response;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopInformation/safejob@registration.vue?vue&type=template&id=0521c680&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/shopInformation/safejob@registration.vue?vue&type=template&id=0521c680& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card mt-5" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "supplier-entry py-4 px-2" }, [
        _c("div", { staticClass: "card-body table-responsive bg-white" }, [
          _c(
            "table",
            {
              staticClass: "table table-hover table-striped table-bordered",
              staticStyle: { width: "100%" }
            },
            [
              _c(
                "tbody",
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _vm._l(_vm.shopLists, function(shopList, index) {
                    return _c("tr", { key: shopList.id }, [
                      _c("td", [_vm._v(" " + _vm._s(++index) + " ")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(shopList.shopName))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm.moment(shopList.created_at).format("DD-MM-YYYY")
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(shopList.userName))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(shopList.shopOwnerMobileNo))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass:
                                "btn-wide btn-pill btn btn-outline-primary btn-hover-shine",
                              attrs: { to: "/safejob@shop" + shopList.id }
                            },
                            [
                              _c("i", { staticClass: "fa fa-edit" }),
                              _vm._v(" View ")
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  })
                ],
                2
              )
            ]
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
    return _c("div", { staticClass: "app-page-title" }, [
      _c("div", { staticClass: "page-title-wrapper" }, [
        _c("div", { staticClass: "page-title-heading" }, [
          _c("div", { staticClass: "page-title-icon" }, [
            _c("i", { staticClass: "pe-7s-menu icon-gradient bg-mean-fruit" })
          ]),
          _vm._v(" "),
          _c("div", [
            _vm._v("\n            Shop Report\n            "),
            _c("div", { staticClass: "page-title-subheading" }, [
              _vm._v("\n               Shop Report\n            ")
            ])
          ])
        ])
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
          _vm._v("\n          Shop Report ")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v(" SL ")]),
      _vm._v(" "),
      _c("th", [_vm._v(" Shop Name ")]),
      _vm._v(" "),
      _c("th", [_vm._v(" Registration Date ")]),
      _vm._v(" "),
      _c("th", [_vm._v(" User Name ")]),
      _vm._v(" "),
      _c("th", [_vm._v(" Shop Phone ")]),
      _vm._v(" "),
      _c("th", [_vm._v(" Action ")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/shopInformation/safejob@registration.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/admin/shopInformation/safejob@registration.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _safejob_registration_vue_vue_type_template_id_0521c680___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safejob@registration.vue?vue&type=template&id=0521c680& */ "./resources/js/admin/shopInformation/safejob@registration.vue?vue&type=template&id=0521c680&");
/* harmony import */ var _safejob_registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safejob@registration.vue?vue&type=script&lang=js& */ "./resources/js/admin/shopInformation/safejob@registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _safejob_registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _safejob_registration_vue_vue_type_template_id_0521c680___WEBPACK_IMPORTED_MODULE_0__["render"],
  _safejob_registration_vue_vue_type_template_id_0521c680___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/shopInformation/safejob@registration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/shopInformation/safejob@registration.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/admin/shopInformation/safejob@registration.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_safejob_registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./safejob@registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopInformation/safejob@registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_safejob_registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/shopInformation/safejob@registration.vue?vue&type=template&id=0521c680&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/admin/shopInformation/safejob@registration.vue?vue&type=template&id=0521c680& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_safejob_registration_vue_vue_type_template_id_0521c680___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./safejob@registration.vue?vue&type=template&id=0521c680& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopInformation/safejob@registration.vue?vue&type=template&id=0521c680&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_safejob_registration_vue_vue_type_template_id_0521c680___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_safejob_registration_vue_vue_type_template_id_0521c680___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);