(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[" salary-grade-entry"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/salarygrade@entry.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrmanagement/salarygrade@entry.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        gradeName: "",
        gradeAmount: "",
        gradeStatus: 1
      }),
      gradeLists: {},
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
    this.gradeList();
    this.getPaginateList();
  },
  methods: {
    gradeEntry: function gradeEntry() {
      var _this = this;

      this.loading = true;
      this.form.post("/salaryGradeEntry").then(function (res) {
        _this.loading = false;

        if (res.data.exists) {
          Toast.fire({
            icon: "error",
            title: "Grade Name Already Exists"
          });
        } else {
          Toast.fire({
            icon: "success",
            title: "Grade Entry Successfully"
          });

          _this.form.reset();

          _this.gradeList();
        }
      })["catch"](function (res) {
        _this.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something wrong"
        });
      });
    },
    gradeList: function gradeList() {
      var _this2 = this;

      axios.get("/salaryGradeEntry").then(function (res) {
        _this2.gradeLists = res.data.gradeLists;
      });
    },
    getPaginateList: function getPaginateList() {
      var _this3 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/salaryGradeEntry?page=" + page).then(function (response) {
        _this3.gradeLists = response.data.gradeLists;
      });
    },
    gAmount: function gAmount() {
      if (this.form.gradeAmount < 0) {
        alert("Negative Amount is Not Allowed");
        this.form.gradeAmount = 0;
      }
    },
    changeStatus: function changeStatus(gradeEntryId) {
      var _this4 = this;

      axios.get("/salaryGradeEntry/" + gradeEntryId).then(function (res) {
        Toast.fire({
          icon: "success",
          title: "Grade Entry Status Change Successfully"
        });

        _this4.gradeList();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/salarygrade@entry.vue?vue&type=template&id=1444e33d&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrmanagement/salarygrade@entry.vue?vue&type=template&id=1444e33d& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
                return _vm.gradeEntry()
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
                    _c("label", [_vm._v("Grade Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.gradeName,
                          expression: "form.gradeName"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("gradeName") },
                      attrs: {
                        type: "text",
                        name: "gradeName",
                        placeholder: "Grade Name"
                      },
                      domProps: { value: _vm.form.gradeName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "gradeName", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "gradeName" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Grade Amount")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.gradeAmount,
                          expression: "form.gradeAmount"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid": _vm.form.errors.has("gradeAmount")
                      },
                      attrs: {
                        type: "text",
                        name: "gradeAmount",
                        placeholder: "Grade Amount"
                      },
                      domProps: { value: _vm.form.gradeAmount },
                      on: {
                        keyup: function($event) {
                          return _vm.gAmount()
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "gradeAmount", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "gradeAmount" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Grade Status")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.gradeStatus,
                            expression: "form.gradeStatus"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("gradeStatus")
                        },
                        attrs: { name: "gradeStatus" },
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
                              "gradeStatus",
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
                      attrs: { form: _vm.form, field: "gradeStatus" }
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
                          "\n                btn-pill btn-shadow btn btn-primary btn-lg\n                float-right\n                btn-hover-shine\n              ",
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
              _vm._l(_vm.gradeLists.data, function(gradeList, index) {
                return _c("tr", { key: gradeList.vue }, [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(gradeList.gradeName))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(gradeList.gradeAmount))]),
                  _vm._v(" "),
                  _c("td", [
                    gradeList.gradeStatus == 1
                      ? _c("div", [
                          _c(
                            "span",
                            {
                              staticClass:
                                "badge btn-hover-shine badge-success",
                              on: {
                                click: function($event) {
                                  return _vm.changeStatus(
                                    gradeList.gradeEntryId
                                  )
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                  Published\n                "
                              )
                            ]
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
                                    gradeList.gradeEntryId
                                  )
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                  Unpublish\n                "
                              )
                            ]
                          )
                        ])
                  ]),
                  _vm._v(" "),
                  gradeList.glist == null
                    ? _c(
                        "td",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass:
                                "\n                  btn-wide btn-pill btn btn-outline-primary btn-hover-shine\n                ",
                              attrs: {
                                to: "/salarygrade@edit" + gradeList.gradeEntryId
                              }
                            },
                            [_c("i", { staticClass: "fa fa-edit" })]
                          )
                        ],
                        1
                      )
                    : _vm._e()
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
              attrs: { data: _vm.gradeLists, limit: _vm.limit },
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
      _c("h3", [_vm._v("Salary Grade Entry")])
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
      _c("h3", [_vm._v("Salary Grade List")])
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
          _vm._v("Grade"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Name")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Grade"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Amount")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Grade"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Status")
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrmanagement/salarygrade@entry.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrmanagement/salarygrade@entry.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _salarygrade_entry_vue_vue_type_template_id_1444e33d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salarygrade@entry.vue?vue&type=template&id=1444e33d& */ "./resources/js/admin/page/hrmanagement/hrmanagement/salarygrade@entry.vue?vue&type=template&id=1444e33d&");
/* harmony import */ var _salarygrade_entry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salarygrade@entry.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/hrmanagement/hrmanagement/salarygrade@entry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _salarygrade_entry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _salarygrade_entry_vue_vue_type_template_id_1444e33d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _salarygrade_entry_vue_vue_type_template_id_1444e33d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/hrmanagement/hrmanagement/salarygrade@entry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrmanagement/salarygrade@entry.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrmanagement/salarygrade@entry.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_salarygrade_entry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./salarygrade@entry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/salarygrade@entry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_salarygrade_entry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrmanagement/salarygrade@entry.vue?vue&type=template&id=1444e33d&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrmanagement/salarygrade@entry.vue?vue&type=template&id=1444e33d& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salarygrade_entry_vue_vue_type_template_id_1444e33d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./salarygrade@entry.vue?vue&type=template&id=1444e33d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/salarygrade@entry.vue?vue&type=template&id=1444e33d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salarygrade_entry_vue_vue_type_template_id_1444e33d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salarygrade_entry_vue_vue_type_template_id_1444e33d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);