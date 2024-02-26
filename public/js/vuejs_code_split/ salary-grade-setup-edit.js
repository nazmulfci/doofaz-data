(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[" salary-grade-setup-edit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/edit/salarygradesetup@edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrmanagement/edit/salarygradesetup@edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        employeEntryId: '',
        gradeEntryId: '',
        salaryGradeAmount: '',
        salaryGradeSetupStatus: ''
      }),
      employeeNames: {},
      salaryGradeLists: {}
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  mounted: function mounted() {
    this.employeeNameList();
    this.salaryGradeList();
    this.salaryGradeSetupData();
  },
  methods: {
    employeeNameList: function employeeNameList() {
      var _this = this;

      axios.get('/employeeName').then(function (res) {
        _this.employeeNames = res.data.employeeSetupName;
      });
    },
    salaryGradeList: function salaryGradeList() {
      var _this2 = this;

      axios.get('/salaryGradeList').then(function (res) {
        _this2.salaryGradeLists = res.data.salaryGradeList;
      });
    },
    salaryGradeAmount: function salaryGradeAmount() {
      var _this3 = this;

      axios.get('/salaryGradeAmount/' + this.form.gradeEntryId).then(function (res) {
        _this3.form.salaryGradeAmount = res.data.salaryGradeAmount;
      });
    },
    salaryGradeSetupData: function salaryGradeSetupData() {
      var _this4 = this;

      axios.get('/salaryGradeSetup/' + this.$route.params.salaryGradeSetupId + '/edit').then(function (res) {
        _this4.form.fill(res.data.salaryGradeSetupData);

        _this4.form.salaryGradeAmount = res.data.gradeAmount;
      });
    },
    salaryGradeSetupUpdate: function salaryGradeSetupUpdate() {
      var _this5 = this;

      this.form.put('/salaryGradeSetup/' + this.$route.params.salaryGradeSetupId).then(function (res) {
        if (res.data.changeName) {
          Toast.fire({
            icon: 'error',
            title: 'Already Salary Grade Setup'
          });
        } else {
          Toast.fire({
            icon: 'success',
            title: 'Salary Grade Setup Update Successfully'
          });

          _this5.$router.push('/salarygrade@setup');
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/edit/salarygradesetup@edit.vue?vue&type=template&id=c2bd1db2&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrmanagement/edit/salarygradesetup@edit.vue?vue&type=template&id=c2bd1db2& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
                return _vm.salaryGradeSetupUpdate()
              }
            }
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color"
              },
              [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Employee Name")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.employeEntryId,
                            expression: "form.employeEntryId"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("employeEntryId")
                        },
                        attrs: { name: "employeEntryId" },
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
                              "employeEntryId",
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
                        _vm._l(_vm.employeeNames, function(employeeName) {
                          return _c(
                            "option",
                            {
                              domProps: {
                                value: employeeName.shopEmployeeEntryId
                              }
                            },
                            [_vm._v(_vm._s(employeeName.userName))]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "employeEntryId" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Salary Grade Name")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.gradeEntryId,
                            expression: "form.gradeEntryId"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("gradeEntryId")
                        },
                        attrs: { name: "gradeEntryId" },
                        on: {
                          change: [
                            function($event) {
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
                                "gradeEntryId",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            function($event) {
                              $event.preventDefault()
                              return _vm.salaryGradeAmount()
                            }
                          ]
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select One")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.salaryGradeLists, function(salaryGradeList) {
                          return _c(
                            "option",
                            {
                              domProps: { value: salaryGradeList.gradeEntryId }
                            },
                            [
                              _vm._v(
                                _vm._s(salaryGradeList.gradeName) +
                                  " (" +
                                  _vm._s(salaryGradeList.gradeAmount) +
                                  ")"
                              )
                            ]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "gradeEntryId" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Salary Grade Amount")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.salaryGradeAmount,
                          expression: "form.salaryGradeAmount"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid": _vm.form.errors.has("salaryGradeAmount")
                      },
                      attrs: {
                        type: "text",
                        disabled: "",
                        name: "salaryGradeAmount",
                        placeholder: "Salary Grade Amount"
                      },
                      domProps: { value: _vm.form.salaryGradeAmount },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "salaryGradeAmount",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "salaryGradeAmount" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Salary Grade Setup Status")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.salaryGradeSetupStatus,
                            expression: "form.salaryGradeSetupStatus"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has(
                            "salaryGradeSetupStatus"
                          )
                        },
                        attrs: { name: "salaryGradeSetupStatus" },
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
                              "salaryGradeSetupStatus",
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
                      attrs: { form: _vm.form, field: "salaryGradeSetupStatus" }
                    })
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _vm._m(1)
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
    return _c("div", { staticClass: "card-header alert-info" }, [
      _c("h3", [_vm._v("Update Salary Grade Setup")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-block p-0 pt-3 pb-4 card-footer overflow-hidden" },
      [
        _c(
          "div",
          { staticClass: "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12" },
          [
            _c(
              "button",
              {
                staticClass:
                  "btn-pill btn-shadow btn btn-outline-danger btn-lg float-left",
                attrs: { type: "reset", onclick: "window.history.back()" }
              },
              [
                _c("span", { staticClass: "mr-2 opacity-7" }, [
                  _c("i", { staticClass: "fa fa-undo " })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "mr-1" }, [_vm._v(" Back ")])
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "btn-pill btn-shadow btn btn-primary btn-lg float-right btn-hover-shine",
                attrs: { type: "submit" }
              },
              [
                _c("span", { staticClass: "mr-2 opacity-7" }, [
                  _c("i", { staticClass: "fa fa-paper-plane" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "mr-1" }, [_vm._v(" Submit ")])
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

/***/ "./resources/js/admin/page/hrmanagement/hrmanagement/edit/salarygradesetup@edit.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrmanagement/edit/salarygradesetup@edit.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _salarygradesetup_edit_vue_vue_type_template_id_c2bd1db2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salarygradesetup@edit.vue?vue&type=template&id=c2bd1db2& */ "./resources/js/admin/page/hrmanagement/hrmanagement/edit/salarygradesetup@edit.vue?vue&type=template&id=c2bd1db2&");
/* harmony import */ var _salarygradesetup_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salarygradesetup@edit.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/hrmanagement/hrmanagement/edit/salarygradesetup@edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _salarygradesetup_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _salarygradesetup_edit_vue_vue_type_template_id_c2bd1db2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _salarygradesetup_edit_vue_vue_type_template_id_c2bd1db2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/hrmanagement/hrmanagement/edit/salarygradesetup@edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrmanagement/edit/salarygradesetup@edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrmanagement/edit/salarygradesetup@edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_salarygradesetup_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./salarygradesetup@edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/edit/salarygradesetup@edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_salarygradesetup_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrmanagement/edit/salarygradesetup@edit.vue?vue&type=template&id=c2bd1db2&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrmanagement/edit/salarygradesetup@edit.vue?vue&type=template&id=c2bd1db2& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salarygradesetup_edit_vue_vue_type_template_id_c2bd1db2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./salarygradesetup@edit.vue?vue&type=template&id=c2bd1db2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/edit/salarygradesetup@edit.vue?vue&type=template&id=c2bd1db2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salarygradesetup_edit_vue_vue_type_template_id_c2bd1db2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salarygradesetup_edit_vue_vue_type_template_id_c2bd1db2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);