(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["branchSetup@Edit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopinformation/branchSetup@Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/shopinformation/branchSetup@Edit.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      form: new Form({
        branchName: "",
        branchCode: "",
        branchMobileNo: "",
        branchRepresentativeName: "",
        branchRepresentativeMobileNo: "",
        branchAddress: ""
      })
    };
  },
  created: function created() {
    var _this = this;

    var uri = "BranchInformation/".concat(this.$route.params.id, "/edit");
    axios.get(uri).then(function (response) {
      _this.form.fill(response.data);
    });
  },
  methods: {
    updateBranchInformation: function updateBranchInformation() {
      var _this2 = this;

      var uri = "BranchInformation/".concat(this.$route.params.id);
      axios.put(uri, this.form).then(function (response) {
        Toast.fire({
          icon: 'success',
          title: 'Update Successfull'
        }), _this2.$router.push('branchSetup');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopinformation/branchSetup@Edit.vue?vue&type=template&id=6de4ec86&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/shopinformation/branchSetup@Edit.vue?vue&type=template&id=6de4ec86& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
                  to: "/qrCodeSetup",
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
    _c("div", { staticClass: "card" }, [
      _vm._m(2),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.updateBranchInformation($event)
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "supplier-entry py-4 px-2 comm-form-back-img" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color"
                },
                [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v(" Branch Name ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.branchName,
                            expression: "form.branchName"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("branchName")
                        },
                        attrs: {
                          type: "text",
                          name: "branchName",
                          placeholder: "Branch Name"
                        },
                        domProps: { value: _vm.form.branchName },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "branchName",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "branchName" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v(" Branch Code ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.branchCode,
                            expression: "form.branchCode"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("branchCode")
                        },
                        attrs: {
                          type: "text",
                          readonly: "",
                          name: "branchCode",
                          placeholder: "Branch Code"
                        },
                        domProps: { value: _vm.form.branchCode },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "branchCode",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "branchCode" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v(" Branch Mobile No ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.branchMobileNo,
                            expression: "form.branchMobileNo"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("branchMobileNo")
                        },
                        attrs: {
                          type: "text",
                          name: "branchMobileNo",
                          placeholder: "Branch Mobile No"
                        },
                        domProps: { value: _vm.form.branchMobileNo },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "branchMobileNo",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "branchMobileNo" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v(" Representative Name ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.branchRepresentativeName,
                            expression: "form.branchRepresentativeName"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has(
                            "branchRepresentativeName"
                          )
                        },
                        attrs: {
                          type: "text",
                          name: "branchRepresentativeName",
                          placeholder: "Representive Name"
                        },
                        domProps: { value: _vm.form.branchRepresentativeName },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "branchRepresentativeName",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: {
                          form: _vm.form,
                          field: "branchRepresentativeName"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v(" Representative Mobile No ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.branchRepresentativeMobileNo,
                            expression: "form.branchRepresentativeMobileNo"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has(
                            "branchRepresentativeMobileNo"
                          )
                        },
                        attrs: {
                          type: "text",
                          name: "branchRepresentativeMobileNo",
                          placeholder: "Representive Mobile No"
                        },
                        domProps: {
                          value: _vm.form.branchRepresentativeMobileNo
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "branchRepresentativeMobileNo",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: {
                          form: _vm.form,
                          field: "branchRepresentativeMobileNo"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v(" Address ")]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.branchAddress,
                            expression: "form.branchAddress"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("branchAddress")
                        },
                        attrs: {
                          type: "text",
                          name: "branchAddress",
                          placeholder: "Branch Address"
                        },
                        domProps: { value: _vm.form.branchAddress },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "branchAddress",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "branchAddress" }
                      })
                    ],
                    1
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _vm._m(3)
        ]
      )
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
        _vm._v("\n            Branch Setup\n            "),
        _c("div", { staticClass: "page-title-subheading" }, [
          _vm._v("\n              Branch Setup\n            ")
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
        _c(
          "div",
          {
            staticClass:
              "card-header-title font-size-lg text-capitalize font-weight-normal"
          },
          [
            _c("i", {
              staticClass:
                "header-icon lnr-pencil icon-gradient bg-premium-dark"
            }),
            _vm._v(" "),
            _c("h4", [_vm._v(" Update Information ")])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-block pt-3 pb-4 card-footer overflow-hidden" },
      [
        _c(
          "div",
          { staticClass: "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12" },
          [
            _c(
              "button",
              {
                staticClass:
                  "btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left",
                attrs: { type: "reset" }
              },
              [
                _c("span", { staticClass: "mr-2 opacity-7" }, [
                  _c("i", { staticClass: "fa fa-undo " })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "mr-1" }, [_vm._v(" Clear ")])
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right",
                attrs: { type: "submit" }
              },
              [
                _c("span", { staticClass: "mr-2 opacity-7" }, [
                  _c("i", { staticClass: "fa fa-paper-plane" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "mr-1" }, [_vm._v(" Update ")])
              ]
            )
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/shopinformation/branchSetup@Edit.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/admin/shopinformation/branchSetup@Edit.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _branchSetup_Edit_vue_vue_type_template_id_6de4ec86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branchSetup@Edit.vue?vue&type=template&id=6de4ec86& */ "./resources/js/admin/shopinformation/branchSetup@Edit.vue?vue&type=template&id=6de4ec86&");
/* harmony import */ var _branchSetup_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branchSetup@Edit.vue?vue&type=script&lang=js& */ "./resources/js/admin/shopinformation/branchSetup@Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _branchSetup_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _branchSetup_Edit_vue_vue_type_template_id_6de4ec86___WEBPACK_IMPORTED_MODULE_0__["render"],
  _branchSetup_Edit_vue_vue_type_template_id_6de4ec86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/shopinformation/branchSetup@Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/shopinformation/branchSetup@Edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/admin/shopinformation/branchSetup@Edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSetup_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./branchSetup@Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopinformation/branchSetup@Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSetup_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/shopinformation/branchSetup@Edit.vue?vue&type=template&id=6de4ec86&":
/*!************************************************************************************************!*\
  !*** ./resources/js/admin/shopinformation/branchSetup@Edit.vue?vue&type=template&id=6de4ec86& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSetup_Edit_vue_vue_type_template_id_6de4ec86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./branchSetup@Edit.vue?vue&type=template&id=6de4ec86& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopinformation/branchSetup@Edit.vue?vue&type=template&id=6de4ec86&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSetup_Edit_vue_vue_type_template_id_6de4ec86___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSetup_Edit_vue_vue_type_template_id_6de4ec86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);