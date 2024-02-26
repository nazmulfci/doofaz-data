(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brand@entry"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/brand@entry.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase/brand@entry.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        brandName: '',
        brandStatus: ''
      }),
      showDataentry: {},
      loading: false
    };
  },
  mounted: function mounted() {
    this.ShowDataList();
  },
  methods: {
    create: function create() {
      var _this = this;

      this.form.post('/purchaseBrandEntry').then(function (res) {
        if (res.data.changedBrandName) {
          Toast.fire({
            icon: 'error',
            title: 'Changed Your Brand Name'
          });
        } else {
          Toast.fire({
            icon: 'success',
            title: 'Brand Entry successfully'
          });

          _this.form.reset();

          _this.ShowDataList();
        }
      });
    },
    ShowDataList: function ShowDataList() {
      var _this2 = this;

      axios.get('/purchaseBrandEntry').then(function (res) {
        _this2.showDataentry = res.data.showdata;
      });
    },
    changeStatus: function changeStatus(id) {
      var _this3 = this;

      var uri = "purchaseBrandEntry/changeStatus/".concat(id);
      axios.get(uri).then(function (response) {
        Toast.fire({
          icon: 'success',
          title: 'Status Change Successfully'
        });

        _this3.ShowDataList();
      });
    },
    deleteBrandProduct: function deleteBrandProduct($brandId) {
      var _this4 = this;

      axios["delete"]('/purchaseBrandEntry/' + $brandId).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Deleted BrandEntry successfully'
        });

        _this4.ShowDataList();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/brand@entry.vue?vue&type=template&id=2afd3ff7&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase/brand@entry.vue?vue&type=template&id=2afd3ff7& ***!
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
                  to: "/brand@entry",
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
              return _vm.create()
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
                      _vm._m(3),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.brandName,
                            expression: "form.brandName"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("brandName")
                        },
                        attrs: {
                          type: "text",
                          name: "brandName",
                          placeholder: "Brand Name"
                        },
                        domProps: { value: _vm.form.brandName },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "brandName", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "brandName" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _vm._m(4),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.brandStatus,
                              expression: "form.brandStatus"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("brandStatus")
                          },
                          attrs: { name: "brandStatus" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "brandStatus",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select One")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("Publish")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v("Unpublish")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "brandStatus" }
                      })
                    ],
                    1
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-block pt-3 pb-4 card-footer overflow-hidden" },
            [
              _c(
                "div",
                { staticClass: "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12" },
                [
                  _vm._m(5),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right",
                      attrs: { disabled: _vm.loading, type: "submit" }
                    },
                    [
                      _vm._m(6),
                      _vm._v(" "),
                      _c("span", { staticClass: "mr-1" }, [
                        _vm._v(" Add New Entry ")
                      ]),
                      _vm._v(" "),
                      _vm.loading == true
                        ? _c(
                            "div",
                            {
                              staticClass: "spinner-border",
                              attrs: { role: "status" }
                            },
                            [
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("Loading...")
                              ])
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ]
              )
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card mt-5" }, [
      _vm._m(7),
      _vm._v(" "),
      _c("div", { staticClass: "card-body table-responsive bg-white" }, [
        _c(
          "table",
          {
            staticClass: "table table-hover table-striped table-bordered",
            staticStyle: { width: "100%" },
            attrs: { id: "example" }
          },
          [
            _vm._m(8),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.showDataentry, function(showDatas, index) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(showDatas.brandName))]),
                  _vm._v(" "),
                  _c("td", [
                    showDatas.brandStatus == 1
                      ? _c("div", [
                          _c(
                            "span",
                            {
                              staticClass:
                                "badge badge-pill badge-success btn-hover-shine",
                              attrs: {
                                type: "button",
                                title: "Click for Unpublish",
                                "data-placement": "top",
                                "data-toggle": "tooltip",
                                "data-original-title": "Click for Unpublish"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.changeStatus(showDatas.brandId)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                      Publish\n                    "
                              )
                            ]
                          )
                        ])
                      : _c("div", [
                          _c(
                            "span",
                            {
                              staticClass:
                                "badge badge-pill badge-danger btn-hover-shine",
                              attrs: {
                                type: "button",
                                title: "Click for Publish",
                                "data-placement": "top",
                                "data-toggle": "tooltip",
                                "data-original-title": "Click for Publish"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.changeStatus(showDatas.brandId)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                      Unpublish\n                    "
                              )
                            ]
                          )
                        ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass:
                            "btn-wide btn-pill btn btn-outline-primary btn-hover-shine",
                          attrs: { to: "/brand@entryEdit" + showDatas.brandId }
                        },
                        [_c("i", { staticClass: "fa fa-edit" }), _vm._v("Edit")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn-wide btn-pill btn btn-outline-danger btn-hover-shine",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.deleteBrandProduct(showDatas.brandId)
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-trash" }),
                        _vm._v("Delete")
                      ]
                    )
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
    return _c("div", { staticClass: "page-title-heading" }, [
      _c("div", { staticClass: "page-title-icon" }, [
        _c("i", { staticClass: "pe-7s-menu icon-gradient bg-mean-fruit" })
      ]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n            Brand Entry\n            "),
        _c("div", { staticClass: "page-title-subheading" }, [
          _vm._v("\n              Brand Entry\n            ")
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
            _c("h4", [_vm._v(" Add Information ")])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Brand Name\n                     "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mendatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mendatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Brand Status\n                   "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mendatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mendatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
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
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "mr-2 opacity-7" }, [
      _c("i", { staticClass: "fa fa-paper-plane" })
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
          _vm._v("\n          View Information ")
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
        _c("th", [_vm._v("Brand Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Brand Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Edit")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Delete ")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase/brand@entry.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase/brand@entry.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _brand_entry_vue_vue_type_template_id_2afd3ff7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brand@entry.vue?vue&type=template&id=2afd3ff7& */ "./resources/js/admin/page/purchase/purchase/brand@entry.vue?vue&type=template&id=2afd3ff7&");
/* harmony import */ var _brand_entry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brand@entry.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/purchase/purchase/brand@entry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _brand_entry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _brand_entry_vue_vue_type_template_id_2afd3ff7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _brand_entry_vue_vue_type_template_id_2afd3ff7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/purchase/purchase/brand@entry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase/brand@entry.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase/brand@entry.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_brand_entry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./brand@entry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/brand@entry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_brand_entry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase/brand@entry.vue?vue&type=template&id=2afd3ff7&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase/brand@entry.vue?vue&type=template&id=2afd3ff7& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_brand_entry_vue_vue_type_template_id_2afd3ff7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./brand@entry.vue?vue&type=template&id=2afd3ff7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/brand@entry.vue?vue&type=template&id=2afd3ff7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_brand_entry_vue_vue_type_template_id_2afd3ff7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_brand_entry_vue_vue_type_template_id_2afd3ff7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);