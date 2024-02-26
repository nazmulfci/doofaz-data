(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["languageSetup"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopadminsetting/languageSetup.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/shopuser/shopadminsetting/languageSetup.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      shopId: '',
      // form: new Form({
      //     vat: '',
      // }),
      infos: {}
    };
  },
  mounted: function mounted() {
    this.getAuthInfo();
  },
  methods: {
    change: function change(id) {
      var _this = this;

      axios.get('/changeLanguage/' + id + '/' + this.shopId).then(function (res) {
        _this.getAuthInfo();

        Toast.fire({
          icon: 'success',
          title: 'Language Change Successfully'
        });
        window.location.replace('');
      })["catch"](function (res) {
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    },
    getAuthInfo: function getAuthInfo() {
      var _this2 = this;

      var url = "getAuthInfo";
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this2.infos = response.info;
        _this2.shopId = response.info.id;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopadminsetting/languageSetup.vue?vue&type=template&id=7be2d6e6&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/shopuser/shopadminsetting/languageSetup.vue?vue&type=template&id=7be2d6e6& ***!
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
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "supplier-entry py-4 px-2" }, [
        _c(
          "div",
          {
            staticClass:
              "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border"
          },
          [
            _vm.infos.language == 1
              ? _c("div", { staticClass: "btn-group" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn border btn-primary",
                      attrs: { type: "button" }
                    },
                    [_vm._v(" English ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn border btn-default",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.change(2)
                        }
                      }
                    },
                    [_vm._v(" বাংলা ")]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.infos.language == 2
              ? _c("div", { staticClass: "btn-group" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn border btn-default",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.change(1)
                        }
                      }
                    },
                    [_vm._v(" English ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn border btn-primary",
                      attrs: { type: "button" }
                    },
                    [_vm._v(" বাংলা ")]
                  )
                ])
              : _vm._e()
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
          _vm._v("Language Setup")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/shopuser/shopadminsetting/languageSetup.vue":
/*!******************************************************************!*\
  !*** ./resources/js/shopuser/shopadminsetting/languageSetup.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _languageSetup_vue_vue_type_template_id_7be2d6e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languageSetup.vue?vue&type=template&id=7be2d6e6& */ "./resources/js/shopuser/shopadminsetting/languageSetup.vue?vue&type=template&id=7be2d6e6&");
/* harmony import */ var _languageSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languageSetup.vue?vue&type=script&lang=js& */ "./resources/js/shopuser/shopadminsetting/languageSetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _languageSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _languageSetup_vue_vue_type_template_id_7be2d6e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _languageSetup_vue_vue_type_template_id_7be2d6e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/shopuser/shopadminsetting/languageSetup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/shopuser/shopadminsetting/languageSetup.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/shopuser/shopadminsetting/languageSetup.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_languageSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./languageSetup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopadminsetting/languageSetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_languageSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/shopuser/shopadminsetting/languageSetup.vue?vue&type=template&id=7be2d6e6&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/shopuser/shopadminsetting/languageSetup.vue?vue&type=template&id=7be2d6e6& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_languageSetup_vue_vue_type_template_id_7be2d6e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./languageSetup.vue?vue&type=template&id=7be2d6e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopadminsetting/languageSetup.vue?vue&type=template&id=7be2d6e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_languageSetup_vue_vue_type_template_id_7be2d6e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_languageSetup_vue_vue_type_template_id_7be2d6e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);