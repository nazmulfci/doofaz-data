(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopaddproduct@brand"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopadminsetting/shopaddproduct@brand.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/shopuser/shopadminsetting/shopaddproduct@brand.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        value: '',
        productBrandName: '',
        productBrandStatus: 1,
        shopTypeId: '',
        productBrandPosition: ''
      }),
      adminProductBrandLists: {},
      shopProductBrandLists: {},
      shopTypeNames: {},
      authInfo: {},
      loading: false
    };
  },
  mounted: function mounted() {
    this.ShowDataLists();
    this.shopTypeNameShow();
    this.condition();
    this.productBrandPosition();
  },
  methods: {
    productBrandCreate: function productBrandCreate() {
      var _this = this;

      this.loading = true;
      this.form.post('/shopproductBrandEntry').then(function (res) {
        _this.loading = false;

        if (res.data.changeProductBrandName) {
          Toast.fire({
            icon: 'error',
            title: 'Change your Product Brand Name'
          });
        } else {
          _this.form.reset();

          Toast.fire({
            icon: 'success',
            title: 'Product Brand Entry Successfully'
          });

          _this.ShowDataLists();

          _this.productBrandPosition();
        }
      })["catch"](function (res) {
        _this.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something wrong"
        });
      });
    },
    ShowDataLists: function ShowDataLists() {
      var _this2 = this;

      axios.get('/shopproductBrandEntry').then(function (res) {
        _this2.adminProductBrandLists = res.data.adminProductBrandList;
        _this2.shopProductBrandLists = res.data.shopProductBrandList;
      });
    },
    shopTypeNameShow: function shopTypeNameShow() {
      var _this3 = this;

      axios.get('/category/create').then(function (res) {
        _this3.shopTypeNames = res.data.shopTypeNames;
      });
    },
    adminShopTypeIdSelect: function adminShopTypeIdSelect() {
      var _this4 = this;

      axios.get('/adminProductBrandPosition/' + this.form.shopTypeId).then(function (res) {
        _this4.form.productBrandPosition = res.data.productBrandIncrement;
      });
    },
    productBrandPosition: function productBrandPosition() {
      var _this5 = this;

      axios.get('/shopProductBrandPosition').then(function (res) {
        _this5.form.productBrandPosition = res.data.productBrandIncrement;
      });
    },
    changeStatus: function changeStatus(productBrandEntryId) {
      var _this6 = this;

      axios.get("/shopproductBrandEntry/" + productBrandEntryId).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Product Brand Status Change Successfully'
        });

        _this6.ShowDataLists();
      });
    },
    condition: function condition() {
      var _this7 = this;

      axios.get('/condition').then(function (res) {
        _this7.authInfo = res.data.authInfo;
      });
    },
    deleteProductBrand: function deleteProductBrand(productBrandEntryId) {
      var _this8 = this;

      axios["delete"]('/shopproductBrandEntry/' + productBrandEntryId).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Deleted Product BrandEntry successfully'
        });

        _this8.ShowDataLists();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopadminsetting/shopaddproduct@brand.vue?vue&type=template&id=72a044da&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/shopuser/shopadminsetting/shopaddproduct@brand.vue?vue&type=template&id=72a044da& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.productBrandCreate()
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
                    "col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 p-5 supplier-border comm-form-box-back-color"
                },
                [
                  _vm.authInfo.role == 1 || _vm.authInfo.role == 2
                    ? _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v("Select Shop Type ")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.shopTypeId,
                                  expression: "form.shopTypeId"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has(
                                  "productBrandStatus"
                                )
                              },
                              attrs: { name: "shopTypeId" },
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "shopTypeId",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    $event.preventDefault()
                                    return _vm.adminShopTypeIdSelect()
                                  }
                                ]
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Select One")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.shopTypeNames, function(shopTypeName) {
                                return _c(
                                  "option",
                                  {
                                    domProps: {
                                      value: shopTypeName.shopTypeEntryId
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(shopTypeName.shopTypeName) + " "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.form,
                              field: "productBrandStatus"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.productBrandName,
                            expression: "form.productBrandName"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("productBrandName")
                        },
                        attrs: {
                          type: "text",
                          name: "productBrandName",
                          placeholder: "Brand Name"
                        },
                        domProps: { value: _vm.form.productBrandName },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "productBrandName",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "productBrandName" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-group",
                      staticStyle: { display: "none" }
                    },
                    [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.productBrandPosition,
                            expression: "form.productBrandPosition"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has(
                            "productBrandPosition"
                          )
                        },
                        attrs: {
                          type: "text",
                          disabled: "",
                          name: "productBrandPosition",
                          placeholder: "Product Brand Position"
                        },
                        domProps: { value: _vm.form.productBrandPosition },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "productBrandPosition",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "productBrandPosition" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-group",
                      staticStyle: { display: "none" }
                    },
                    [
                      _vm._m(3),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.productBrandStatus,
                              expression: "form.productBrandStatus"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has(
                              "productBrandStatus"
                            )
                          },
                          attrs: { name: "productBrandStatus" },
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
                                "productBrandStatus",
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
                        attrs: { form: _vm.form, field: "productBrandStatus" }
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
                  _vm._m(4),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right",
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
                      _vm._v(" "),
                      _c("span", { staticClass: "mr-1" }, [
                        _vm._v(" Add New Entry ")
                      ])
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
      _vm._m(5),
      _vm._v(" "),
      _c("div", { staticClass: "supplier-entry py-1 px-1" }, [
        _c("div", { staticClass: "card-body table-responsive bg-white" }, [
          _c(
            "table",
            {
              staticClass: "table table-hover table-striped table-bordered",
              staticStyle: { width: "100%" },
              attrs: { id: "example" }
            },
            [
              _c("thead", [
                _c(
                  "tr",
                  { staticStyle: { background: "rgba(242, 242, 242, 0.47)" } },
                  [
                    _c("th", [_vm._v("SN")]),
                    _vm._v(" "),
                    _vm.authInfo.role == 1 || _vm.authInfo.role == 2
                      ? _c("th", [_vm._v("Shop Type Name")])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("th", [_vm._v("Product Brand Name")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Edit")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Delete")])
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.authInfo.role == 1 || _vm.authInfo.role == 2
                ? _c(
                    "tbody",
                    _vm._l(_vm.adminProductBrandLists, function(
                      adminProductBrandList,
                      index
                    ) {
                      return _c("tr", [
                        _c("td", [_vm._v(_vm._s(index + 1))]),
                        _vm._v(" "),
                        _c("td", [
                          adminProductBrandList.shop_type_name
                            ? _c("span", [
                                _vm._v(
                                  _vm._s(
                                    adminProductBrandList.shop_type_name
                                      .shopTypeName
                                  )
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(adminProductBrandList.productBrandName))
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          adminProductBrandList.productBrandStatus == 1
                            ? _c("div", [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-hover-shine btn-success",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.changeStatus(
                                          adminProductBrandList.productBrandEntryId
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("Published")]
                                )
                              ])
                            : _c("div", [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-hover-shine btn-danger",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.changeStatus(
                                          adminProductBrandList.productBrandEntryId
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("Unpublish")]
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
                                  "mr-2 btn-hover-shine btn btn-shadow btn-primary",
                                attrs: {
                                  to:
                                    "/shopproductbrand@entryEdit" +
                                    adminProductBrandList.productBrandEntryId
                                }
                              },
                              [
                                _c("i", { staticClass: " fa fa-edit" }),
                                _vm._v("Edit")
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    }),
                    0
                  )
                : _c(
                    "tbody",
                    _vm._l(_vm.shopProductBrandLists, function(
                      shopProductBrandList,
                      index
                    ) {
                      return _c("tr", [
                        _c("td", [_vm._v(_vm._s(index + 1))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(shopProductBrandList.productBrandName))
                        ]),
                        _vm._v(" "),
                        shopProductBrandList.brand == null
                          ? _c(
                              "td",
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass:
                                      "mr-2 btn-hover-shine btn btn-shadow btn-primary",
                                    attrs: {
                                      to:
                                        "/shopproductbrand@entryEdit" +
                                        shopProductBrandList.productBrandEntryId
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: " fa fa-edit" }),
                                    _vm._v("Edit")
                                  ]
                                )
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        shopProductBrandList.brand == null
                          ? _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "mr-2 btn-hover-shine btn btn-shadow btn-danger",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteProductBrand(
                                        shopProductBrandList.productBrandEntryId
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: " fa fa-trash" }),
                                  _vm._v("Delete")
                                ]
                              )
                            ])
                          : _vm._e()
                      ])
                    }),
                    0
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
            _c("h4", [_vm._v(" Add Product Brand ")])
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
      _vm._v("Product Brand Name\n                   "),
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
      _vm._v("Product Brand Position\n                   "),
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
      _vm._v("Product Brand Status\n                   "),
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
    return _c(
      "div",
      { staticClass: "card-header-tab card-header alert-info" },
      [
        _c("h4", [
          _c("i", {
            staticClass:
              "header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          }),
          _vm._v("Product Brand List")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/shopuser/shopadminsetting/shopaddproduct@brand.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/shopuser/shopadminsetting/shopaddproduct@brand.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shopaddproduct_brand_vue_vue_type_template_id_72a044da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopaddproduct@brand.vue?vue&type=template&id=72a044da& */ "./resources/js/shopuser/shopadminsetting/shopaddproduct@brand.vue?vue&type=template&id=72a044da&");
/* harmony import */ var _shopaddproduct_brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopaddproduct@brand.vue?vue&type=script&lang=js& */ "./resources/js/shopuser/shopadminsetting/shopaddproduct@brand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _shopaddproduct_brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _shopaddproduct_brand_vue_vue_type_template_id_72a044da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _shopaddproduct_brand_vue_vue_type_template_id_72a044da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/shopuser/shopadminsetting/shopaddproduct@brand.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/shopuser/shopadminsetting/shopaddproduct@brand.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/shopuser/shopadminsetting/shopaddproduct@brand.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shopaddproduct_brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./shopaddproduct@brand.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopadminsetting/shopaddproduct@brand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shopaddproduct_brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/shopuser/shopadminsetting/shopaddproduct@brand.vue?vue&type=template&id=72a044da&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/shopuser/shopadminsetting/shopaddproduct@brand.vue?vue&type=template&id=72a044da& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shopaddproduct_brand_vue_vue_type_template_id_72a044da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./shopaddproduct@brand.vue?vue&type=template&id=72a044da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopadminsetting/shopaddproduct@brand.vue?vue&type=template&id=72a044da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shopaddproduct_brand_vue_vue_type_template_id_72a044da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shopaddproduct_brand_vue_vue_type_template_id_72a044da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);