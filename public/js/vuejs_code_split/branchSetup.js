(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["branchSetup"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopinformation/branchSetup.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/shopinformation/branchSetup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      addBranchInformation: false,
      submitBtn: 'Submit',
      branchInformations: [],
      authInfos: [],
      image: "",
      form: new Form({
        branchName: "",
        branchCode: "",
        branchMobileNo: "",
        branchRepresentativeName: "",
        branchRepresentativeMobileNo: "",
        branchAddress: ""
      }),
      qrCodeSetup: {},
      exit: false,
      mess: "",
      totalBranchPermission: "",
      totalBranchCreate: ""
    };
  },
  mounted: function mounted() {
    this.getAuthInfo();
    this.getTotalBranchCreate();
    this.getBranchCode();
    this.view();
  },
  methods: {
    getAuthInfo: function getAuthInfo() {
      var _this = this;

      var url = "getAuthInfo";
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this.authInfos = response.data;
      });
    },
    view: function view() {
      var _this2 = this;

      var url = "branchInformationByShop";
      axios.get(url).then(function (response) {
        _this2.branchInformations = response.data.data;
      });
    },
    getBranchCode: function getBranchCode() {
      var _this3 = this;

      axios.get("getBranchCode").then(function (res) {
        _this3.form.branchCode = res.data.branchCode;
      });
    },
    showAddInformation: function showAddInformation() {
      this.addBranchInformation = true;
    },
    getTotalBranchCreate: function getTotalBranchCreate() {
      var _this4 = this;

      var uri = "/getTotalBranchCreate";
      axios.get(uri).then(function (response) {
        _this4.totalBranchCreate = response.data.totalCreate;
      });
    },
    editBrach: function editBrach(id) {
      var _this5 = this;

      this.addBranchInformation = true;
      var uri = "getBranchInformationEdit/".concat(id);
      axios.get(uri).then(function (response) {
        // this.totalBranchPermission = response.data.data.branchName;
        _this5.form.branchName = response.data.data.branchName;
        _this5.form.branchCode = response.data.data.branchCode;
        _this5.form.branchMobileNo = response.data.data.branchMobileNo;
        _this5.form.branchRepresentativeName = response.data.data.branchRepresentativeName;
        _this5.form.branchRepresentativeMobileNo = response.data.data.branchRepresentativeMobileNo;
        _this5.form.branchAddress = response.data.data.branchAddress;
      });
    },
    addBranchInformationEntry: function addBranchInformationEntry() {
      var _this6 = this;

      this.form.post("BranchInformation").then(function (response) {
        Toast.fire({
          icon: "success",
          title: "Successfull."
        }), _this6.addBranchInformation = false;

        _this6.getTotalBranchCreate();

        _this6.getBranchCode();

        _this6.view();

        _this6.form.reset();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopinformation/branchSetup.vue?vue&type=template&id=47ad98d8&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/shopinformation/branchSetup.vue?vue&type=template&id=47ad98d8& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    _vm.addBranchInformation
      ? _c("div", { staticClass: "card  mb-5" }, [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addBranchInformationEntry($event)
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
                              "is-invalid": _vm.form.errors.has(
                                "branchMobileNo"
                              )
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
                            domProps: {
                              value: _vm.form.branchRepresentativeName
                            },
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
              _c(
                "div",
                {
                  staticClass: "d-block pt-3 pb-4 card-footer overflow-hidden"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12"
                    },
                    [
                      _vm._m(3),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right",
                          attrs: { type: "submit" }
                        },
                        [
                          _vm._m(4),
                          _vm._v(" "),
                          _c("span", { staticClass: "mr-1" }, [
                            _vm._v(" " + _vm._s(_vm.submitBtn) + " ")
                          ])
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _vm._m(5),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.addQrCodeInformation($event)
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "supplier-entry py-4 px-2 comm-form-back-img" },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color"
                  },
                  [
                    _c("div", { staticClass: "col-12" }, [
                      _c("h4", [
                        _vm._v(" You have \n              "),
                        _vm.authInfos.totalBranch
                          ? _c(
                              "span",
                              {
                                staticClass: "badge badge-danger rounded-circle"
                              },
                              [
                                _vm._v(
                                  " " + _vm._s(_vm.authInfos.totalBranch) + " "
                                )
                              ]
                            )
                          : _c(
                              "span",
                              {
                                staticClass: "badge badge-danger rounded-circle"
                              },
                              [_vm._v(" No ")]
                            ),
                        _vm._v("\n              branch.")
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _vm._l(_vm.branchInformations, function(
                          branchInformation
                        ) {
                          return _c("div", { staticClass: "col-lg-4" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col-lg-12 border rounded shadow p-4 mb-4 bg-white"
                              },
                              [
                                _c("h4", [
                                  _vm._v(
                                    " " +
                                      _vm._s(branchInformation.branchName) +
                                      " "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("h6", [
                                  _vm._v(
                                    " " +
                                      _vm._s(branchInformation.branchMobileNo) +
                                      " "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "badge badge-success rounded"
                                  },
                                  [
                                    _vm._v(
                                      " Branch Code : " +
                                        _vm._s(branchInformation.branchCode) +
                                        " "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("hr"),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-muted" }, [
                                  _vm._v(
                                    " " +
                                      _vm._s(branchInformation.branchAddress) +
                                      " "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-12" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "btn-wide btn-pill btn btn-outline-primary btn-hover-shine",
                                        attrs: {
                                          to:
                                            "/branchSetup@Edit" +
                                            branchInformation.id
                                        }
                                      },
                                      [
                                        _c("i", { staticClass: "fa fa-edit" }),
                                        _vm._v("Edit")
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ])
                        }),
                        _vm._v(" "),
                        _vm.authInfos.totalBranch > _vm.totalBranchCreate
                          ? _c(
                              "div",
                              { staticClass: "col-lg-4 cursor-pointer" },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "col-lg-12 border rounded shadow p-4 mb-4 bg-white"
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            return _vm.showAddInformation()
                                          }
                                        }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "img img-thumbnail",
                                          attrs: {
                                            src:
                                              "https://www.kindpng.com/picc/m/173-1737013_new-file-icon-png-transparent-png.png"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          : _vm._e()
                      ],
                      2
                    )
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _vm._m(6)
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
            _c("h4", [_vm._v(" View Branch Information ")])
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
        _c("div", {
          staticClass: "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12"
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/shopinformation/branchSetup.vue":
/*!************************************************************!*\
  !*** ./resources/js/admin/shopinformation/branchSetup.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _branchSetup_vue_vue_type_template_id_47ad98d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branchSetup.vue?vue&type=template&id=47ad98d8& */ "./resources/js/admin/shopinformation/branchSetup.vue?vue&type=template&id=47ad98d8&");
/* harmony import */ var _branchSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branchSetup.vue?vue&type=script&lang=js& */ "./resources/js/admin/shopinformation/branchSetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _branchSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _branchSetup_vue_vue_type_template_id_47ad98d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _branchSetup_vue_vue_type_template_id_47ad98d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/shopinformation/branchSetup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/shopinformation/branchSetup.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/admin/shopinformation/branchSetup.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./branchSetup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopinformation/branchSetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/shopinformation/branchSetup.vue?vue&type=template&id=47ad98d8&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/admin/shopinformation/branchSetup.vue?vue&type=template&id=47ad98d8& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSetup_vue_vue_type_template_id_47ad98d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./branchSetup.vue?vue&type=template&id=47ad98d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopinformation/branchSetup.vue?vue&type=template&id=47ad98d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSetup_vue_vue_type_template_id_47ad98d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSetup_vue_vue_type_template_id_47ad98d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);