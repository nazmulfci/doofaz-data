(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["low@quan"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopadminsetting/low@quan@setup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/shopuser/shopadminsetting/low@quan@setup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
      loading: false,
      form: new Form({
        lowQuantity: ''
      }),
      lowQuantity: '',
      qty: {},
      quan: ""
    };
  },
  mounted: function mounted() {
    this.ShowDataLists();
  },
  methods: {
    add: function add() {
      var _this = this;

      this.loading = true;
      this.form.post('/lowQuantity').then(function (res) {
        _this.loading = false;

        _this.ShowDataLists();

        _this.form.lowQuantity = '';
        Toast.fire({
          icon: 'success',
          title: 'Low Quantity Setup Successfully'
        });
      })["catch"](function (res) {
        _this.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    },
    ShowDataLists: function ShowDataLists() {
      var _this2 = this;

      axios.get('/lowQuantity').then(function (res) {
        _this2.qty = res.data.quan;
        _this2.lowQuantity = _this2.qty.lowQuantity;
      });
    },
    update: function update(id) {
      var _this3 = this;

      this.loading = true;
      axios.put("/lowQuantity/".concat(id), {
        lowQuantity: this.lowQuantity
      }).then(function (res) {
        _this3.loading = false;

        _this3.ShowDataLists();

        _this3.$router.push('/low@quan');

        Toast.fire({
          icon: 'success',
          title: 'Successfully Updated'
        });
      })["catch"](function (res) {
        _this3.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopadminsetting/low@quan@setup.vue?vue&type=template&id=0aa3e862&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/shopuser/shopadminsetting/low@quan@setup.vue?vue&type=template&id=0aa3e862& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.add()
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Low Quantity ")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.lowQuantity,
                        expression: "form.lowQuantity"
                      }
                    ],
                    attrs: {
                      type: "text",
                      name: "lowQuantity",
                      placeholder: "Low Quantity Limit"
                    },
                    domProps: { value: _vm.form.lowQuantity },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "lowQuantity", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-right pt-3" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "mr-2 btn-pill btn-hover-shine btn btn-primary",
                      attrs: { type: "submit", disabled: _vm.loading }
                    },
                    [
                      _vm.loading
                        ? _c("span", {
                            staticClass: "spinner-border spinner-border-sm",
                            attrs: { role: "status", "aria-hidden": "true" }
                          })
                        : _c("span", { staticClass: "mr-2 opacity-7" }, [
                            _c("i", { staticClass: "fa fa-paper-plane" })
                          ]),
                      _vm._v("Submit")
                    ]
                  )
                ])
              ]
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _vm.qty.lowQuantity
      ? _c("div", { staticClass: "card mt-5" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive bg-white" }, [
            _c(
              "table",
              { staticClass: "table table-hover table-bordered mb-0" },
              [
                _vm._m(2),
                _vm._v(" "),
                _c("tbody", [
                  _c("tr", [
                    _c("td", [_vm._v("1")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.qty.lowQuantity))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "mr-2 btn-hover-shine btn btn-shadow btn-primary",
                          attrs: {
                            type: "button",
                            "data-toggle": "modal",
                            "data-target": "#quantity" + _vm.qty.id
                          }
                        },
                        [
                          _c("i", { staticClass: " fa fa-edit pr-2" }),
                          _vm._v(" Edit\n                 ")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "modal fade",
                        attrs: {
                          id: "quantity" + _vm.qty.id,
                          tabindex: "-1",
                          role: "dialog",
                          "aria-labelledby": "exampleModalLongTitle",
                          "aria-hidden": "true"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "modal-dialog",
                            attrs: { role: "document" }
                          },
                          [
                            _c("div", { staticClass: "modal-content" }, [
                              _vm._m(3),
                              _vm._v(" "),
                              _c("div", { staticClass: "modal-body" }, [
                                _c("div", { staticClass: "card" }, [
                                  _vm._m(4),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "supplier-entry py-4 px-2" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c("label", [
                                                _vm._v("Low Quantity ")
                                              ]),
                                              _vm._v(" "),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.lowQuantity,
                                                    expression: "lowQuantity"
                                                  }
                                                ],
                                                attrs: {
                                                  type: "text",
                                                  name: "lowQuantity",
                                                  placeholder:
                                                    "Low Quantity Limit"
                                                },
                                                domProps: {
                                                  value: _vm.lowQuantity
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.lowQuantity =
                                                      $event.target.value
                                                  }
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "text-right pt-3" },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "mr-2 btn-pill btn-hover-shine btn btn-primary",
                                                  attrs: {
                                                    type: "submit",
                                                    disabled: _vm.loading
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      $event.preventDefault()
                                                      return _vm.update(
                                                        _vm.qty.id
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm.loading
                                                    ? _c("span", {
                                                        staticClass:
                                                          "spinner-border spinner-border-sm",
                                                        attrs: {
                                                          role: "status",
                                                          "aria-hidden": "true"
                                                        }
                                                      })
                                                    : _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "mr-2 opacity-7"
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fa fa-paper-plane"
                                                          })
                                                        ]
                                                      ),
                                                  _vm._v("Update")
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _vm._m(5)
                            ])
                          ]
                        )
                      ]
                    )
                  ])
                ])
              ]
            )
          ])
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
          background: "rgba(221, 221, 221, 0.20)",
          border: "1px solid rgba(0, 0, 0, 0.05)"
        }
      },
      [
        _c("h3", { staticStyle: { color: "black" } }, [
          _vm._v("Add Low Quantity Limit")
        ])
      ]
    )
  },
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
          _vm._v("Low Quantity Limit")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticStyle: { background: "rgba(242, 242, 242, 0.47)" } }, [
        _c("th", [_vm._v("SN")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header bg-primary text-light" }, [
      _c("h5", {
        staticClass: "modal-title",
        attrs: { id: "exampleModalLongTitle" }
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
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
          _vm._v("Update Low Quantity Limit")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-hover-shine btn-danger",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/shopuser/shopadminsetting/low@quan@setup.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/shopuser/shopadminsetting/low@quan@setup.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _low_quan_setup_vue_vue_type_template_id_0aa3e862___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./low@quan@setup.vue?vue&type=template&id=0aa3e862& */ "./resources/js/shopuser/shopadminsetting/low@quan@setup.vue?vue&type=template&id=0aa3e862&");
/* harmony import */ var _low_quan_setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./low@quan@setup.vue?vue&type=script&lang=js& */ "./resources/js/shopuser/shopadminsetting/low@quan@setup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _low_quan_setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _low_quan_setup_vue_vue_type_template_id_0aa3e862___WEBPACK_IMPORTED_MODULE_0__["render"],
  _low_quan_setup_vue_vue_type_template_id_0aa3e862___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/shopuser/shopadminsetting/low@quan@setup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/shopuser/shopadminsetting/low@quan@setup.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/shopuser/shopadminsetting/low@quan@setup.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_low_quan_setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./low@quan@setup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopadminsetting/low@quan@setup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_low_quan_setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/shopuser/shopadminsetting/low@quan@setup.vue?vue&type=template&id=0aa3e862&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/shopuser/shopadminsetting/low@quan@setup.vue?vue&type=template&id=0aa3e862& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_low_quan_setup_vue_vue_type_template_id_0aa3e862___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./low@quan@setup.vue?vue&type=template&id=0aa3e862& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopadminsetting/low@quan@setup.vue?vue&type=template&id=0aa3e862&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_low_quan_setup_vue_vue_type_template_id_0aa3e862___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_low_quan_setup_vue_vue_type_template_id_0aa3e862___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);