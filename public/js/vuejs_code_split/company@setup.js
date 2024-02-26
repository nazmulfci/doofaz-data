(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company@setup"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopInformation/company@setup.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/shopuser/shopInformation/company@setup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return {
      form: new Form((_ref = {
        refferType: '',
        shopTypeId: '',
        shopSirialId: '',
        shopSirialNo: '',
        shopName: '',
        email: '',
        refferUserId: ''
      }, _defineProperty(_ref, "refferUserId", ''), _defineProperty(_ref, "website", ''), _defineProperty(_ref, "facebook", ''), _defineProperty(_ref, "youtube", ''), _defineProperty(_ref, "shopLicenceTypeId", ''), _defineProperty(_ref, "authorizeShare", ''), _defineProperty(_ref, "perShareValue", ''), _defineProperty(_ref, "authorizeCapital", ''), _ref)),
      companyTypes: [{
        id: 1,
        name: 'One Person Company'
      }, {
        id: 2,
        name: 'Partnership Company'
      }, {
        id: 3,
        name: 'Private Limited Company'
      }, {
        id: 4,
        name: 'Public Limited Company'
      }],
      authInfo: [],
      shopTypeLists: [],
      employees: false,
      userNameExist: false,
      shops: false,
      loading: false,
      limitedCompanyInformation: false
    };
  },
  mounted: function mounted() {
    this.condition();
  },
  methods: {
    calculateCapital: function calculateCapital() {
      var share = parseFloat(this.form.authorizeShare);
      var value = parseFloat(this.form.perShareValue);
      if (share > 0) this.form.authorizeCapital = share * value;
    },
    changeCompanyType: function changeCompanyType() {
      if (this.form.shopLicenceTypeId > 2) {
        this.limitedCompanyInformation = true;
      } else {
        this.limitedCompanyInformation = false;
        this.form.authorizeShare = '';
        this.form.perShareValue = '';
        this.form.authorizeCapital = '';
      }
    },
    shop: function shop() {
      this.shops = true;
      this.employees = false;
      this.form.refferType = 1;
    },
    employee: function employee() {
      this.shops = false;
      this.employees = true;
      this.form.refferType = 2;
    },
    condition: function condition() {
      var _this = this;

      axios.get('/condition').then(function (res) {
        _this.authInfo = res.data.authInfo;

        _this.form.fill(res.data.authInfo);

        if (res.data.authInfo.shopLicenceTypeId > 2) {
          _this.limitedCompanyInformation = true;
        } else {
          _this.limitedCompanyInformation = false;
        }
      });
    },
    shopInformationUpdate: function shopInformationUpdate() {
      var _this2 = this;

      this.loading = true;
      this.form.post("shopInformationUpdate").then(function (response) {
        Toast.fire({
          icon: "success",
          //background: '#fcd8d8', red
          background: '#c9f4c9',
          //green
          title: "Information Update Successful."
        }), _this2.loading = false;
      })["catch"](function (res) {
        _this2.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopInformation/company@setup.vue?vue&type=template&id=41f857b1&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/shopuser/shopInformation/company@setup.vue?vue&type=template&id=41f857b1& ***!
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
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.shopInformationUpdate()
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
                    "col-lg-10 px-lg-5 col-sm-10 offset-sm-1 col-12 p-5 supplier-border comm-form-box-back-color"
                },
                [
                  _c("div", { staticClass: "row p-2" }, [
                    _c("div", { staticClass: "col-lg-6 col-12" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _vm._m(1),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.shopLicenceTypeId,
                                  expression: "form.shopLicenceTypeId"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has(
                                  "shopLicenceTypeId"
                                )
                              },
                              attrs: { name: "shopLicenceTypeId" },
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
                                      "shopLicenceTypeId",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    $event.preventDefault()
                                    return _vm.changeCompanyType()
                                  }
                                ]
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v(" ------ ")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.companyTypes, function(companyType) {
                                return _c(
                                  "option",
                                  {
                                    key: companyType.id,
                                    domProps: { value: companyType.id }
                                  },
                                  [
                                    _vm._v(
                                      " " + _vm._s(companyType.name) + "  "
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
                              field: "shopLicenceTypeId"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.limitedCompanyInformation
                        ? _c("div", [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _vm._m(2),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.authorizeShare,
                                      expression: "form.authorizeShare"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "authorizeShare"
                                    )
                                  },
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.form.authorizeShare },
                                  on: {
                                    keyup: function($event) {
                                      $event.preventDefault()
                                      return _vm.calculateCapital()
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "authorizeShare",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: {
                                    form: _vm.form,
                                    field: "authorizeShare"
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
                                _vm._m(3),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.perShareValue,
                                      expression: "form.perShareValue"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "perShareValue"
                                    )
                                  },
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.form.perShareValue },
                                  on: {
                                    keyup: function($event) {
                                      $event.preventDefault()
                                      return _vm.calculateCapital()
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "perShareValue",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: {
                                    form: _vm.form,
                                    field: "perShareValue"
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
                                _vm._m(4),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.authorizeCapital,
                                      expression: "form.authorizeCapital"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "perShareValue"
                                    )
                                  },
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.form.authorizeCapital
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "authorizeCapital",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: {
                                    form: _vm.form,
                                    field: "perShareValue"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _vm._m(5),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.shopSirialId,
                                expression: "form.shopSirialId"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("shopSirialId")
                            },
                            attrs: { type: "text", disabled: "" },
                            domProps: { value: _vm.form.shopSirialId },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "shopSirialId",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "shopSirialId" }
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
                          _vm._m(6),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.shopSirialNo,
                                expression: "form.shopSirialNo"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("shopSirialNo")
                            },
                            attrs: { type: "text", disabled: "" },
                            domProps: { value: _vm.form.shopSirialNo },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "shopSirialNo",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "shopSirialNo" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _vm._m(7),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.shopName,
                                expression: "form.shopName"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("shopName")
                            },
                            attrs: { type: "text" },
                            domProps: { value: _vm.form.shopName },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "shopName",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "shopName" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _vm._m(8),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.email,
                                expression: "form.email"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("email")
                            },
                            attrs: { type: "text", disabled: "" },
                            domProps: { value: _vm.form.email },
                            on: {
                              change: function($event) {
                                return _vm.checkUserName()
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "email", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "email" }
                          }),
                          _vm._v(" "),
                          _vm.userNameExist
                            ? _c("span", { staticClass: "text-danger" }, [
                                _vm._v(" This user name already exist. ")
                              ])
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-6 col-12" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v(" Shop Website Link\n     ")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.website,
                                expression: "form.website"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("website")
                            },
                            attrs: { type: "text" },
                            domProps: { value: _vm.form.website },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "website",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "website" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v(" Shop Facebook Link\n     ")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.facebook,
                                expression: "form.facebook"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("facebook")
                            },
                            attrs: { type: "text" },
                            domProps: { value: _vm.form.facebook },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "facebook",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "facebook" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v(" Shop Youtube Link\n     ")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.youtube,
                                expression: "form.youtube"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("youtube")
                            },
                            attrs: { type: "text" },
                            domProps: { value: _vm.form.youtube },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "youtube",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "youtube" }
                          })
                        ],
                        1
                      )
                    ])
                  ])
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
                  _vm._m(9),
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
                      _c("span", { staticClass: "mr-1" }, [_vm._v(" Update ")])
                    ]
                  )
                ]
              )
            ]
          )
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
            _c("h4", [_vm._v(" Company Setup ")])
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
      _vm._v(" Company Type\n     "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mandatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mandatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Authorize Share\n     "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mandatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mandatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Per Share Value\n     "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mandatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mandatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Total Authorize Capital\n     "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mandatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mandatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Shop ID\n     "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mandatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mandatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Shop ID\n     "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mandatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mandatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Shop Name\n     "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mandatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mandatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Shop User Name\n     "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mandatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mandatory Field"
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/shopuser/shopInformation/company@setup.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/shopuser/shopInformation/company@setup.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _company_setup_vue_vue_type_template_id_41f857b1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company@setup.vue?vue&type=template&id=41f857b1& */ "./resources/js/shopuser/shopInformation/company@setup.vue?vue&type=template&id=41f857b1&");
/* harmony import */ var _company_setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company@setup.vue?vue&type=script&lang=js& */ "./resources/js/shopuser/shopInformation/company@setup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _company_setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _company_setup_vue_vue_type_template_id_41f857b1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _company_setup_vue_vue_type_template_id_41f857b1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/shopuser/shopInformation/company@setup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/shopuser/shopInformation/company@setup.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/shopuser/shopInformation/company@setup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./company@setup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopInformation/company@setup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/shopuser/shopInformation/company@setup.vue?vue&type=template&id=41f857b1&":
/*!************************************************************************************************!*\
  !*** ./resources/js/shopuser/shopInformation/company@setup.vue?vue&type=template&id=41f857b1& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_company_setup_vue_vue_type_template_id_41f857b1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./company@setup.vue?vue&type=template&id=41f857b1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/shopuser/shopInformation/company@setup.vue?vue&type=template&id=41f857b1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_company_setup_vue_vue_type_template_id_41f857b1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_company_setup_vue_vue_type_template_id_41f857b1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);