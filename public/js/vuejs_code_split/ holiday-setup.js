(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[" holiday-setup"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/holiday@setup.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrmanagement/holiday@setup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        holidayTypeId: "",
        holidayStartDate: "",
        holidayEndDate: "",
        holidaySetupStatus: 1
      }),
      holidayTypeShows: {},
      holidaySetupShows: {},
      role: {},
      loading: false
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  mounted: function mounted() {
    this.holidayTypeShow();
    this.holidaySetupShow();
    this.getPaginateList();
    this.conditon();
  },
  methods: {
    holidaySetupCreate: function holidaySetupCreate() {
      var _this = this;

      this.loading = true;
      this.form.post("/holidaySetup").then(function (res) {
        _this.loading = false; // if (res.data.changeholidayTypeName){
        //     Toast.fire({
        //         icon: 'error',
        //         title: 'Change Your Holiday Type Name'
        //     })
        // }
        // else {}

        Toast.fire({
          icon: "success",
          title: "Holiday Setup Create Successfully"
        });

        _this.form.reset();

        _this.holidaySetupShow();
      })["catch"](function (res) {
        _this.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something wrong"
        });
      });
    },
    holidayTypeShow: function holidayTypeShow() {
      var _this2 = this;

      axios.get("/holidaySetup/create").then(function (res) {
        _this2.holidayTypeShows = res.data.AdminHolidayType;
      });
    },
    holidaySetupShow: function holidaySetupShow() {
      var _this3 = this;

      axios.get("/holidaySetup").then(function (res) {
        _this3.holidaySetupShows = res.data.adminHolidaySetup;
      });
    },
    getPaginateList: function getPaginateList() {
      var _this4 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/holidaySetup?page=" + page).then(function (response) {
        _this4.holidaySetupShows = response.data.adminHolidaySetup;
      });
    },
    changeStatus: function changeStatus(holidaySetupId) {
      var _this5 = this;

      axios.get("/holidaySetup/" + holidaySetupId).then(function (res) {
        Toast.fire({
          icon: "success",
          title: "Holiday Setup Status Change Successfully"
        });

        _this5.holidaySetupShow();
      });
    },
    distroy: function distroy(holidaySetupId) {
      var _this6 = this;

      axios["delete"]("/holidaySetup/" + holidaySetupId).then(function (res) {
        Toast.fire({
          icon: "success",
          title: "Holiday Setup Delete Successfully"
        });

        _this6.holidaySetupShow();
      });
    },
    conditon: function conditon() {
      var _this7 = this;

      axios.get("/condition").then(function (res) {
        _this7.role = res.data.authInfo;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/holiday@setup.vue?vue&type=template&id=16e60d13&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrmanagement/holiday@setup.vue?vue&type=template&id=16e60d13& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "supplier-entry p-0 pt-3 comm-form-back-img" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.holidaySetupCreate()
              }
            }
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "\n            col-lg-7\n            px-lg-5\n            col-sm-8\n            offset-sm-2\n            col-12\n            pb-2\n            pt-2\n            mb-3\n            supplier-border\n            comm-form-box-back-color\n          "
              },
              [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Holiday Type Name")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.holidayTypeId,
                            expression: "form.holidayTypeId"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("holidayTypeId")
                        },
                        attrs: { name: "holidayTypeId" },
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
                              "holidayTypeId",
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
                        _vm._l(_vm.holidayTypeShows, function(holidayTypeShow) {
                          return _c(
                            "option",
                            {
                              key: holidayTypeShow.id,
                              domProps: { value: holidayTypeShow.holidayTypeId }
                            },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(holidayTypeShow.holidayTypeName) +
                                  "\n              "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "holidayTypeId" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Holiday Start Date")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.holidayStartDate,
                          expression: "form.holidayStartDate"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid": _vm.form.errors.has("holidayStartDate")
                      },
                      attrs: { type: "date", name: "holidayStartDate" },
                      domProps: { value: _vm.form.holidayStartDate },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "holidayStartDate",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "holidayStartDate" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Holiday End Date")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.holidayEndDate,
                          expression: "form.holidayEndDate"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid": _vm.form.errors.has("holidayEndDate")
                      },
                      attrs: { type: "date", name: "holidayEndDate" },
                      domProps: { value: _vm.form.holidayEndDate },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "holidayEndDate",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "holidayEndDate" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Holiday Setup Status")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.holidaySetupStatus,
                            expression: "form.holidaySetupStatus"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has(
                            "holidaySetupStatus"
                          )
                        },
                        attrs: { name: "holidaySetupStatus" },
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
                              "holidaySetupStatus",
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
                      attrs: { form: _vm.form, field: "holidaySetupStatus" }
                    })
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "d-block p-0 pt-3 pb-4 card-footer overflow-hidden"
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12"
                  },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn-pill btn-shadow btn btn-primary btn-lg float-right",
                        attrs: { type: "submit", disabled: _vm.loading }
                      },
                      [
                        _vm.loading
                          ? _c("span", {
                              staticClass: "spinner-border spinner-border-sm",
                              attrs: { role: "status", "aria-hidden": "true" }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm._m(2),
                        _vm._v(" "),
                        _c("span", { staticClass: "mr-1" }, [
                          _vm._v(" Submit ")
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
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card main-card element-block-example mt-5" }, [
      _vm._m(3),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive bg-white p-3" }, [
        _c(
          "table",
          { staticClass: "table table-hover table-striped table-bordered" },
          [
            _vm._m(4),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.holidaySetupShows.data, function(
                holidaySetupShow,
                index
              ) {
                return _c("tr", { key: holidaySetupShow.id }, [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  holidaySetupShow.admin_holiday_type_relation
                    ? _c("td", [
                        _vm._v(
                          "\n              " +
                            _vm._s(
                              holidaySetupShow.admin_holiday_type_relation
                                .holidayTypeName
                            ) +
                            "\n            "
                        )
                      ])
                    : _c("td"),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(holidaySetupShow.holidayStartDate))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(holidaySetupShow.holidayEndDate))]),
                  _vm._v(" "),
                  _c("td", [
                    holidaySetupShow.holidaySetupStatus == 1
                      ? _c("div", [
                          _c(
                            "span",
                            {
                              staticClass:
                                "badge btn-hover-shine badge-success",
                              on: {
                                click: function($event) {
                                  return _vm.changeStatus(
                                    holidaySetupShow.holidaySetupId
                                  )
                                }
                              }
                            },
                            [_vm._v("Published")]
                          )
                        ])
                      : _c("div", [
                          _c(
                            "span",
                            {
                              staticClass: "badge btn-hover-shine badge-danger",
                              on: {
                                click: function($event) {
                                  return _vm.changeStatus(
                                    holidaySetupShow.holidaySetupId
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
                            "\n                  btn-wide btn-pill btn btn-outline-primary btn-hover-shine\n                ",
                          attrs: {
                            to:
                              "/holiday@setupedit" +
                              holidaySetupShow.holidaySetupId
                          }
                        },
                        [_c("i", { staticClass: "fa fa-edit" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "\n                  btn-wide btn-pill btn btn-outline-danger btn-hover-shine\n                ",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.distroy(
                                holidaySetupShow.holidaySetupId
                              )
                            }
                          }
                        },
                        [_c("i", { staticClass: "fa fa-trash" })]
                      )
                    ],
                    1
                  )
                ])
              }),
              0
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "card_footer" },
        [
          _c(
            "pagination",
            {
              attrs: { data: _vm.holidaySetupShows, limit: _vm.limit },
              on: { "pagination-change-page": _vm.getPaginateList }
            },
            [
              _c("span", { attrs: { slot: "prev-nav" }, slot: "prev-nav" }, [
                _vm._v("< Previous")
              ]),
              _vm._v(" "),
              _c("span", { attrs: { slot: "next-nav" }, slot: "next-nav" }, [
                _vm._v("Next >")
              ])
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header alert-info" }, [
      _c("h3", [_vm._v("Holiday Setup")])
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
          "\n                btn-pill btn-shadow btn btn-outline-danger btn-lg\n                float-left\n              ",
        attrs: { type: "reset" }
      },
      [
        _c("span", { staticClass: "mr-2 opacity-7" }, [
          _c("i", { staticClass: "fa fa-undo" })
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
    return _c("div", { staticClass: "card-header alert-info" }, [
      _c("h3", [_vm._v("Holiday Setup List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "alert-info" }, [
        _c("th", [_vm._v("SN")]),
        _vm._v(" "),
        _c("th", [
          _vm._v("\n              Holiday"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Type"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Name\n            ")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("\n              Holiday"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Start"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Date\n            ")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("\n              Holiday"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("End"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Date\n            ")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("\n              Holiday"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Setup"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Status\n            ")
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrmanagement/holiday@setup.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrmanagement/holiday@setup.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _holiday_setup_vue_vue_type_template_id_16e60d13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./holiday@setup.vue?vue&type=template&id=16e60d13& */ "./resources/js/admin/page/hrmanagement/hrmanagement/holiday@setup.vue?vue&type=template&id=16e60d13&");
/* harmony import */ var _holiday_setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./holiday@setup.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/hrmanagement/hrmanagement/holiday@setup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _holiday_setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _holiday_setup_vue_vue_type_template_id_16e60d13___WEBPACK_IMPORTED_MODULE_0__["render"],
  _holiday_setup_vue_vue_type_template_id_16e60d13___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/hrmanagement/hrmanagement/holiday@setup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrmanagement/holiday@setup.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrmanagement/holiday@setup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_holiday_setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./holiday@setup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/holiday@setup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_holiday_setup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrmanagement/holiday@setup.vue?vue&type=template&id=16e60d13&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrmanagement/holiday@setup.vue?vue&type=template&id=16e60d13& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_holiday_setup_vue_vue_type_template_id_16e60d13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./holiday@setup.vue?vue&type=template&id=16e60d13& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/holiday@setup.vue?vue&type=template&id=16e60d13&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_holiday_setup_vue_vue_type_template_id_16e60d13___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_holiday_setup_vue_vue_type_template_id_16e60d13___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);