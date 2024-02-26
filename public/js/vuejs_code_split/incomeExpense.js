(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["incomeExpense"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/incomeExpense.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/entry/incomeExpense.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      language: "",
      menuHide1: false,
      menu1: 1,
      menuIcon: '+',
      menuHide2: false,
      menu2: 1,
      menuIcon1: '+',
      form: new Form({// codes: "",
      })
    };
  },
  mounted: function mounted() {
    this.getAuthInfo();
  },
  methods: {
    getAuthInfo: function getAuthInfo() {
      var _this = this;

      var url = "getAuthInfo";
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this.language = response.data.language;
      });
    },
    menuHideShow: function menuHideShow(e) {
      if (e == 1) {
        if (this.menu1 == 1) {
          this.menuHide1 = true;
          this.menu1 = 0;
          this.menuIcon = '-';
        } else {
          this.menuHide1 = false;
          this.menu1 = 1;
          this.menuIcon = '+';
        }
      } else if (e == 2) {
        if (this.menu2 == 1) {
          this.menuHide2 = true;
          this.menu2 = 0;
          this.menuIcon1 = '-';
        } else {
          this.menuHide2 = false;
          this.menu2 = 1;
          this.menuIcon1 = '+';
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/incomeExpense.vue?vue&type=template&id=4674214a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/entry/incomeExpense.vue?vue&type=template&id=4674214a& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "card-header alert-info" }, [
        _c("h3", [
          _c(
            "button",
            {
              staticClass:
                "btn btn btn-outline-primary btn-shadow  btn-hover-shine",
              attrs: { type: "button", onclick: "window.history.back()" }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "bi bi-arrow-left",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      "fill-rule": "evenodd",
                      d:
                        "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    }
                  })
                ]
              )
            ]
          ),
          _vm._v(" "),
          _vm.language == 1
            ? _c("span", [_vm._v(" Income & Expense ")])
            : _vm._e(),
          _vm._v(" "),
          _vm.language == 2
            ? _c("span", [_vm._v(" আয়-ব্যয়ের হিসাব  ")])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "supplier-entry py-4 px-2" }, [
        _c(
          "div",
          {
            staticClass:
              "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border"
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 col-md-6 col-12" }, [
                _c(
                  "h5",
                  {
                    staticClass:
                      "alert-info p-2 border-primary border-bottom mb-0"
                  },
                  [
                    _vm.language == 1
                      ? _c("span", [_vm._v(" Income  ")])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.language == 2
                      ? _c("span", [_vm._v(" আয়  ")])
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticStyle: {
                          border: "1px solid #ccc",
                          cursor: "pointer",
                          float: "right",
                          width: "50px",
                          height: "30px",
                          background: "white",
                          "text-align": "center",
                          "border-radius": "5px"
                        },
                        on: {
                          click: function($event) {
                            return _vm.menuHideShow(1)
                          }
                        }
                      },
                      [_vm._v(" " + _vm._s(_vm.menuIcon) + " ")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("ul", { staticClass: "nav bg-light flex-column mb-4" }, [
                  _vm.menuHide1
                    ? _c(
                        "li",
                        {
                          staticClass: "nav-item border-primary border-bottom"
                        },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-link",
                              attrs: { to: "/incomeExpenseCompanyEntry" }
                            },
                            [
                              _c("i", {
                                staticClass: "nav-link-icon pe-7s-chat"
                              }),
                              _c("span", [
                                _vm.language == 1
                                  ? _c("span", [
                                      _vm._v(" Person / Company Entry ")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.language == 2
                                  ? _c("span", [
                                      _vm._v(
                                        "আয়ের জন্য ব্যক্তি অথবা প্রতিষ্ঠান "
                                      )
                                    ])
                                  : _vm._e()
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.menuHide1
                    ? _c(
                        "li",
                        {
                          staticClass: "nav-item border-primary border-bottom"
                        },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-link",
                              attrs: { to: "/incomeProviderEntry" }
                            },
                            [
                              _c("i", {
                                staticClass: "nav-link-icon pe-7s-chat"
                              }),
                              _c("span", [
                                _vm.language == 1
                                  ? _c("span", [
                                      _vm._v(" Income Purpus Entry ")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.language == 2
                                  ? _c("span", [_vm._v("আয়ের খাত এন্ট্রি   ")])
                                  : _vm._e()
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item border-primary border-bottom" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/incomeEntry" }
                        },
                        [
                          _c("i", { staticClass: "nav-link-icon pe-7s-chat" }),
                          _c("span", [
                            _vm.language == 1
                              ? _c("span", { staticClass: "btn btn-primary" }, [
                                  _vm._v(" Income Entry ")
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.language == 2
                              ? _c("span", { staticClass: "btn btn-primary" }, [
                                  _vm._v(" আয় এন্ট্রি  ")
                                ])
                              : _vm._e()
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6 col-md-6 col-12" }, [
                _c(
                  "h5",
                  {
                    staticClass:
                      "alert-info p-2 border-primary border-bottom mb-0"
                  },
                  [
                    _vm.language == 1
                      ? _c("span", [_vm._v(" Expense ")])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.language == 2
                      ? _c("span", [_vm._v(" ব্যয়  ")])
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticStyle: {
                          border: "1px solid #ccc",
                          cursor: "pointer",
                          float: "right",
                          width: "50px",
                          height: "30px",
                          background: "white",
                          "text-align": "center",
                          "border-radius": "5px"
                        },
                        on: {
                          click: function($event) {
                            return _vm.menuHideShow(2)
                          }
                        }
                      },
                      [_vm._v(" " + _vm._s(_vm.menuIcon1) + " ")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("ul", { staticClass: "nav bg-light flex-column mb-4" }, [
                  _vm.menuHide2
                    ? _c(
                        "li",
                        {
                          staticClass: "nav-item border-primary border-bottom"
                        },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-link",
                              attrs: { to: "/incomeExpenseCompanyEntry" }
                            },
                            [
                              _c("i", {
                                staticClass: "nav-link-icon pe-7s-chat"
                              }),
                              _c("span", [
                                _vm.language == 1
                                  ? _c("span", [
                                      _vm._v(" Person / Company Entry")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.language == 2
                                  ? _c("span", [
                                      _vm._v(
                                        " ব্যয়ের জন্য ব্যক্তি অথবা প্রতিষ্ঠান  "
                                      )
                                    ])
                                  : _vm._e()
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.menuHide2
                    ? _c(
                        "li",
                        {
                          staticClass: "nav-item border-primary border-bottom"
                        },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-link",
                              attrs: { to: "/expenseProviderEntry" }
                            },
                            [
                              _c("i", {
                                staticClass: "nav-link-icon pe-7s-chat"
                              }),
                              _c("span", [
                                _vm.language == 1
                                  ? _c("span", [
                                      _vm._v(" Expense Purpus Entry ")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.language == 2
                                  ? _c("span", [
                                      _vm._v(" ব্যয়ের খাত এন্ট্রি  ")
                                    ])
                                  : _vm._e()
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item border-primary border-bottom" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/expenseEntry" }
                        },
                        [
                          _c("span", [
                            _vm.language == 1
                              ? _c("span", { staticClass: "btn btn-success" }, [
                                  _vm._v(" Expense Entry ")
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.language == 2
                              ? _c("span", { staticClass: "btn btn-success" }, [
                                  _vm._v(" ব্যয় এন্ট্রি  ")
                                ])
                              : _vm._e()
                          ])
                        ]
                      )
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/incomeExpense.vue":
/*!********************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/incomeExpense.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _incomeExpense_vue_vue_type_template_id_4674214a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incomeExpense.vue?vue&type=template&id=4674214a& */ "./resources/js/admin/page/accounting/entry/incomeExpense.vue?vue&type=template&id=4674214a&");
/* harmony import */ var _incomeExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incomeExpense.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/accounting/entry/incomeExpense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _incomeExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _incomeExpense_vue_vue_type_template_id_4674214a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _incomeExpense_vue_vue_type_template_id_4674214a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/accounting/entry/incomeExpense.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/incomeExpense.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/incomeExpense.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_incomeExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./incomeExpense.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/incomeExpense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_incomeExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/incomeExpense.vue?vue&type=template&id=4674214a&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/incomeExpense.vue?vue&type=template&id=4674214a& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_incomeExpense_vue_vue_type_template_id_4674214a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./incomeExpense.vue?vue&type=template&id=4674214a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/incomeExpense.vue?vue&type=template&id=4674214a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_incomeExpense_vue_vue_type_template_id_4674214a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_incomeExpense_vue_vue_type_template_id_4674214a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);