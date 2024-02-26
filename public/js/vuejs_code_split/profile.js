(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/generalpage/profile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/generalpage/profile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
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
        shopOwnerName: '',
        shopOwnerMobileNo: '',
        shopOwnerEmail: '',
        SRName: '',
        SRMobileNo: '',
        SREmail: ''
      }),
      authInfos: [],
      owners: '',
      representative: '',
      accountInfos: '',
      reg: '',
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a,
      ownerName: false,
      ownerMobile: false,
      ownerEmail: false,
      SRName: false,
      SRMobileNo: false,
      SREmail: false
    };
  },
  mounted: function mounted() {
    this.getAuthInfo();
    this.getAccountInfoById();
  },
  methods: {
    edit: function edit(id) {
      if (id == 1) {
        this.ownerName = true;
        this.SRMobileNo = false;
        this.ownerMobile = false;
        this.ownerEmail = false;
        this.SRName = false;
        this.SREmail = false;
        this.form.shopOwnerName = this.owners.shopOwnerName, this.form.shopOwnerMobileNo = '', this.form.shopOwnerEmail = '', this.form.SRName = '', this.form.SRMobileNo = '', this.form.SREmail = '';
      }

      if (id == 2) {
        this.ownerMobile = true;
        this.SRMobileNo = false;
        this.ownerName = false;
        this.ownerEmail = false;
        this.SRName = false;
        this.SREmail = false;
        this.form.shopOwnerMobileNo = this.owners.shopOwnerMobileNo, this.form.shopOwnerName = '', this.form.shopOwnerEmail = '', this.form.SRName = '', this.form.SRMobileNo = '', this.form.SREmail = '';
      }

      if (id == 3) {
        this.ownerEmail = true;
        this.SRMobileNo = false;
        this.ownerMobile = false;
        this.ownerName = false;
        this.SRName = false;
        this.SREmail = false;
        this.form.shopOwnerEmail = this.owners.shopOwnerEmail, this.form.shopOwnerName = '', this.form.shopOwnerMobileNo = '', this.form.SRName = '', this.form.SRMobileNo = '', this.form.SREmail = '';
      }

      if (id == 4) {
        this.SRName = true;
        this.SRMobileNo = false;
        this.ownerEmail = false;
        this.ownerMobile = false;
        this.ownerName = false;
        this.SREmail = false;
        this.form.SRName = this.representative.SRName, this.form.shopOwnerName = '', this.form.shopOwnerMobileNo = '', this.form.shopOwnerEmail = '', this.form.SRMobileNo = '', this.form.SREmail = '';
      }

      if (id == 5) {
        this.SRMobileNo = true;
        this.SRName = false;
        this.ownerEmail = false;
        this.ownerMobile = false;
        this.ownerName = false;
        this.SREmail = false;
        this.form.SRMobileNo = this.representative.SRMobileNo, this.form.shopOwnerName = '', this.form.shopOwnerMobileNo = '', this.form.shopOwnerEmail = '', this.form.SRName = '', this.form.SREmail = '';
      }

      if (id == 6) {
        this.SREmail = true;
        this.SRName = false;
        this.ownerEmail = false;
        this.ownerMobile = false;
        this.ownerName = false;
        this.SRMobileNo = false;
        this.form.SREmail = this.representative.SREmail, this.form.shopOwnerName = '', this.form.shopOwnerMobileNo = '', this.form.shopOwnerEmail = '', this.form.SRName = '', this.form.SRMobileNo = '';
      }
    },
    editInfo: function editInfo() {
      var _this = this;

      this.form.post('informationEdit').then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Successfully Updated'
        });
        $('#exampleModal').hide();

        _this.form.reset();

        _this.getAuthInfo();

        _this.getAccountInfoById();
      });
    },
    getAuthInfo: function getAuthInfo() {
      var _this2 = this;

      var url = "getAuthInfo";
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this2.authInfos = response.data;
        _this2.owners = response.owner;
        _this2.reg = response.reg;
        _this2.representative = response.representative;
        _this2.form.shopOwnerEmail = response.owner.shopOwnerEmail;
      });
    },
    getAccountInfoById: function getAccountInfoById() {
      var _this3 = this;

      var url = "getAccountInfoById";
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this3.accountInfos = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/generalpage/profile.vue?vue&type=style&index=0&media=screen&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/generalpage/profile.vue?vue&type=style&index=0&media=screen&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.profile-entry label{\n  font-size:17px;\n}\n.profile-img{\n  text-align:center\n}\n.profile-img img{\n  width: 130px;\n  height: 130px;\n}\n.profile-status ul{\n  list-style-type:none;\n  padding-left:0px;\n  margin-bottom:0px;\n}\n.profile-status ul li{\n  font-size:16px;\n}\n.profile-status ul li i{\n  width:20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/generalpage/profile.vue?vue&type=style&index=0&media=screen&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/generalpage/profile.vue?vue&type=style&index=0&media=screen&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=style&index=0&media=screen&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/generalpage/profile.vue?vue&type=style&index=0&media=screen&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/generalpage/profile.vue?vue&type=template&id=48c6497a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/generalpage/profile.vue?vue&type=template&id=48c6497a& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass:
          "card p-0 col-10 col-sm-8 col-md-6  offset-md-3 offset-sm-2 offset-1"
      },
      [
        _c("div", {
          staticClass: "card-header",
          staticStyle: {
            background: "rgba(221, 221, 221, 0.20)",
            border: "1px solid rgba(0, 0, 0, 0.05)"
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "profile-entry p-md-5 p-3" }, [
          _c("div", { staticClass: "profile-img" }, [
            _c("img", {
              staticClass: "rounded-circle",
              attrs: {
                src: "dashboard/assets/images/dropdown-header/profile.png",
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("h4", { staticClass: "mt-2" }, [
              _vm._v(
                _vm._s(_vm.authInfos.shopName) +
                  "(" +
                  _vm._s(_vm.authInfos.shopSirialId) +
                  ")"
              )
            ]),
            _vm._v(" "),
            _c("h5", [
              _vm._v(
                "  Registration Date:  " +
                  _vm._s(_vm.moment(_vm.reg.created_at).format("DD MMMM YYYY"))
              )
            ]),
            _vm._v(" "),
            _c("h5", [
              _vm._v(
                "  Billing Date:  " +
                  _vm._s(
                    _vm
                      .moment(_vm.accountInfos.billingDate)
                      .format("DD MMMM YYYY")
                  )
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "profile-status mt-2" }, [
            _c("ul", [
              _c("li", [
                _c("i", {
                  staticClass: "fa fa-user",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "profile-icon" }, [
                  _vm._v(
                    "\n                     Owner Name: " +
                      _vm._s(_vm.owners.shopOwnerName) +
                      "  "
                  ),
                  _c("i", {
                    staticClass: "fas fa-pencil-alt",
                    attrs: {
                      "data-toggle": "modal",
                      "data-target": "#exampleModal"
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.edit(1)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "float-right " }, [
                  _c("i", { staticClass: "fa fa-user" }),
                  _vm._v(" "),
                  _c("span", { staticClass: "profile-icon" }, [
                    _vm._v(
                      "\n                 Representative Name: " +
                        _vm._s(_vm.representative.SRName) +
                        " "
                    ),
                    _c("i", {
                      staticClass: "fas fa-pencil-alt",
                      attrs: {
                        "data-toggle": "modal",
                        "data-target": "#exampleModal"
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.edit(4)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "modal fade",
                    attrs: {
                      id: "exampleModal",
                      tabindex: "-1",
                      role: "dialog",
                      "aria-labelledby": "exampleModalLabel",
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
                          _vm._m(0),
                          _vm._v(" "),
                          _c(
                            "form",
                            {
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.editInfo()
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "modal-body" }, [
                                _vm.ownerName
                                  ? _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: { for: "exampleInputEmail1" }
                                        },
                                        [_vm._v("Owner Name")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.shopOwnerName,
                                            expression: "form.shopOwnerName"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "exampleInputEmail1",
                                          placeholder: "Owner Name"
                                        },
                                        domProps: {
                                          value: _vm.form.shopOwnerName
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "shopOwnerName",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.ownerMobile
                                  ? _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: { for: "exampleInputEmail1" }
                                        },
                                        [_vm._v("Owner Phone")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.shopOwnerMobileNo,
                                            expression: "form.shopOwnerMobileNo"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "exampleInputEmail1",
                                          placeholder: "Owner Mobile"
                                        },
                                        domProps: {
                                          value: _vm.form.shopOwnerMobileNo
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "shopOwnerMobileNo",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.ownerEmail
                                  ? _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: { for: "exampleInputEmail1" }
                                        },
                                        [_vm._v("Owner Email")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.shopOwnerEmail,
                                            expression: "form.shopOwnerEmail"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "email",
                                          id: "exampleInputEmail1",
                                          placeholder: "Owner Email"
                                        },
                                        domProps: {
                                          value: _vm.form.shopOwnerEmail
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "shopOwnerEmail",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.SRName
                                  ? _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: { for: "exampleInputEmail1" }
                                        },
                                        [_vm._v("Representative Name")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.SRName,
                                            expression: "form.SRName"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "exampleInputEmail1",
                                          placeholder: "Representative Name"
                                        },
                                        domProps: { value: _vm.form.SRName },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "SRName",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.SRMobileNo
                                  ? _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: { for: "exampleInputEmail1" }
                                        },
                                        [_vm._v("Representative Mobile")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.SRMobileNo,
                                            expression: "form.SRMobileNo"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "exampleInputEmail1",
                                          placeholder: "Representative Mobile"
                                        },
                                        domProps: {
                                          value: _vm.form.SRMobileNo
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "SRMobileNo",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.SREmail
                                  ? _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: { for: "exampleInputEmail1" }
                                        },
                                        [_vm._v("Representative Email")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.SREmail,
                                            expression: "form.SREmail"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "email",
                                          id: "exampleInputEmail1",
                                          placeholder: "Representative Email"
                                        },
                                        domProps: { value: _vm.form.SREmail },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "SREmail",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _vm._m(1)
                            ]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c("i", { staticClass: "fa fa-phone" }),
                _vm._v(" "),
                _c("span", { staticClass: "profile-icon" }, [
                  _vm._v(
                    "\n                 Owner Phone: " +
                      _vm._s(_vm.owners.shopOwnerMobileNo) +
                      " "
                  ),
                  _c("i", {
                    staticClass: "fas fa-pencil-alt",
                    attrs: {
                      "data-toggle": "modal",
                      "data-target": "#exampleModal"
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.edit(2)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "float-right " }, [
                  _c("i", { staticClass: "fa fa-phone" }),
                  _vm._v(" "),
                  _c("span", { staticClass: "profile-icon" }, [
                    _vm._v(
                      "\n                 Representative Phone: " +
                        _vm._s(_vm.representative.SRMobileNo) +
                        " "
                    ),
                    _c("i", {
                      staticClass: "fas fa-pencil-alt",
                      attrs: {
                        "data-toggle": "modal",
                        "data-target": "#exampleModal"
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.edit(5)
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("i", { staticClass: "fas fa-envelope" }),
                _vm._v(" "),
                _c("span", { staticClass: "profile-icon" }, [
                  _vm._v(
                    "\n                 Owner Email: " +
                      _vm._s(_vm.owners.shopOwnerEmail) +
                      " "
                  ),
                  _c("i", {
                    staticClass: "fas fa-pencil-alt",
                    attrs: {
                      "data-toggle": "modal",
                      "data-target": "#exampleModal"
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.edit(3)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "float-right " }, [
                  _c("i", { staticClass: "fas fa-envelope" }),
                  _vm._v(" "),
                  _c("span", { staticClass: "profile-icon" }, [
                    _vm._v(
                      "\n                 Representative Email: " +
                        _vm._s(_vm.representative.SREmail) +
                        " "
                    ),
                    _c("i", {
                      staticClass: "fas fa-pencil-alt",
                      attrs: {
                        "data-toggle": "modal",
                        "data-target": "#exampleModal"
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.edit(6)
                        }
                      }
                    })
                  ])
                ])
              ])
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Edit Info")]
      ),
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
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Save changes")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/generalpage/profile.vue":
/*!****************************************************!*\
  !*** ./resources/js/admin/generalpage/profile.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_vue_vue_type_template_id_48c6497a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.vue?vue&type=template&id=48c6497a& */ "./resources/js/admin/generalpage/profile.vue?vue&type=template&id=48c6497a&");
/* harmony import */ var _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.vue?vue&type=script&lang=js& */ "./resources/js/admin/generalpage/profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _profile_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.vue?vue&type=style&index=0&media=screen&lang=css& */ "./resources/js/admin/generalpage/profile.vue?vue&type=style&index=0&media=screen&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profile_vue_vue_type_template_id_48c6497a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profile_vue_vue_type_template_id_48c6497a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/generalpage/profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/generalpage/profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/generalpage/profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/generalpage/profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/generalpage/profile.vue?vue&type=style&index=0&media=screen&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/admin/generalpage/profile.vue?vue&type=style&index=0&media=screen&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=style&index=0&media=screen&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/generalpage/profile.vue?vue&type=style&index=0&media=screen&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/admin/generalpage/profile.vue?vue&type=template&id=48c6497a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/admin/generalpage/profile.vue?vue&type=template&id=48c6497a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_48c6497a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=template&id=48c6497a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/generalpage/profile.vue?vue&type=template&id=48c6497a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_48c6497a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_48c6497a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);