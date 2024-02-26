(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["salary-grade-setup-report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/salarygradesetup@report.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/salarygradesetup@report.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      salaryGradeSetupLists: {},
      employeeTypeLists: {},
      jobDepartmentLists: {}
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  mounted: function mounted() {
    this.salaryGradeSetupList();
    this.getPaginateList();
  },
  methods: {
    salaryGradeSetupList: function salaryGradeSetupList() {
      var _this = this;

      axios.get('/salaryGradeSetupReport').then(function (res) {
        _this.employeeTypeLists = res.data.employeeTypeList;
        _this.jobDepartmentLists = res.data.jobDepartmentList;
        _this.salaryGradeSetupLists = res.data.salaryGradeSetupList;
      });
    },
    getPaginateList: function getPaginateList() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/salaryGradeSetupReport?page=' + page).then(function (response) {
        _this2.salaryGradeSetupLists = response.data.salaryGradeSetupList;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/salarygradesetup@report.vue?vue&type=template&id=9d4ca5da&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/salarygradesetup@report.vue?vue&type=template&id=9d4ca5da& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card main-card  element-block-example" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive bg-white p-3" }, [
        _c(
          "table",
          { staticClass: "table table-hover table-striped table-bordered " },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.salaryGradeSetupLists.data, function(
                salaryGradeSetupList,
                index
              ) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  salaryGradeSetupList.shop_employee_list
                    ? _c(
                        "td",
                        _vm._l(_vm.employeeTypeLists, function(
                          employeeTypeList
                        ) {
                          return employeeTypeList.shopEmployeeTypeId ==
                            salaryGradeSetupList.shop_employee_list
                              .employeeTypeId
                            ? _c("span", [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(
                                      employeeTypeList.shopEmployeeTypeName
                                    ) +
                                    "\n                 "
                                )
                              ])
                            : _vm._e()
                        }),
                        0
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  salaryGradeSetupList.shop_employee_list
                    ? _c(
                        "td",
                        _vm._l(_vm.jobDepartmentLists, function(
                          jobDepartmentList
                        ) {
                          return jobDepartmentList.jobDepartmentEntryId ==
                            salaryGradeSetupList.shop_employee_list
                              .jobDepartmentId
                            ? _c("span", [
                                _vm._v(
                                  "\n                   " +
                                    _vm._s(
                                      jobDepartmentList.jobDepartmentName
                                    ) +
                                    "\n                 "
                                )
                              ])
                            : _vm._e()
                        }),
                        0
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  salaryGradeSetupList.shop_employee_list
                    ? _c("td", [
                        _vm._v(
                          _vm._s(
                            salaryGradeSetupList.shop_employee_list.userName
                          )
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  salaryGradeSetupList.shop_employee_list
                    ? _c("td", [
                        _vm._v(
                          _vm._s(
                            salaryGradeSetupList.shop_employee_list.nidNumber
                          )
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  salaryGradeSetupList.shop_employee_list
                    ? _c("td", [
                        _vm._v(
                          _vm._s(
                            salaryGradeSetupList.shop_employee_list
                              .presentAddress
                          )
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  salaryGradeSetupList.grade_list
                    ? _c("td", [
                        _vm._v(
                          _vm._s(salaryGradeSetupList.grade_list.gradeName)
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  salaryGradeSetupList.grade_list
                    ? _c("td", [
                        _vm._v(
                          _vm._s(salaryGradeSetupList.grade_list.gradeAmount)
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("td", [
                    salaryGradeSetupList.salaryGradeSetupStatus == 1
                      ? _c("div", [
                          _c(
                            "span",
                            {
                              staticClass: "badge btn-hover-shine badge-success"
                            },
                            [_vm._v("Published")]
                          )
                        ])
                      : _c("div", [
                          _c(
                            "span",
                            {
                              staticClass: "badge btn-hover-shine badge-danger"
                            },
                            [_vm._v("Unpublish")]
                          )
                        ])
                  ])
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
              attrs: { data: _vm.salaryGradeSetupLists, limit: _vm.limit },
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
      _c("h3", [_vm._v("Salary Grade Setup Report ")])
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
          _vm._v("Employee"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Type"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Name")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Job"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Department")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Employee"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Name")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("NID"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Number")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Present"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Address")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Salary"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Grade"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Name")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Salary"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Grade"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Amount")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Salary"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Grade"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Setup"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Status")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/salarygradesetup@report.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/salarygradesetup@report.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _salarygradesetup_report_vue_vue_type_template_id_9d4ca5da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salarygradesetup@report.vue?vue&type=template&id=9d4ca5da& */ "./resources/js/admin/page/hrmanagement/hrreport/salarygradesetup@report.vue?vue&type=template&id=9d4ca5da&");
/* harmony import */ var _salarygradesetup_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salarygradesetup@report.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/hrmanagement/hrreport/salarygradesetup@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _salarygradesetup_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _salarygradesetup_report_vue_vue_type_template_id_9d4ca5da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _salarygradesetup_report_vue_vue_type_template_id_9d4ca5da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/hrmanagement/hrreport/salarygradesetup@report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/salarygradesetup@report.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/salarygradesetup@report.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_salarygradesetup_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./salarygradesetup@report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/salarygradesetup@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_salarygradesetup_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/salarygradesetup@report.vue?vue&type=template&id=9d4ca5da&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/salarygradesetup@report.vue?vue&type=template&id=9d4ca5da& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salarygradesetup_report_vue_vue_type_template_id_9d4ca5da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./salarygradesetup@report.vue?vue&type=template&id=9d4ca5da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/salarygradesetup@report.vue?vue&type=template&id=9d4ca5da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salarygradesetup_report_vue_vue_type_template_id_9d4ca5da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salarygradesetup_report_vue_vue_type_template_id_9d4ca5da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);