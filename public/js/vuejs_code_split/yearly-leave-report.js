(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yearly-leave-report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/yearlyleave@calendar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/yearlyleave@calendar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_month_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-month-picker */ "./node_modules/vue-month-picker/src/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



Vue.use(vue_month_picker__WEBPACK_IMPORTED_MODULE_1__["MonthPicker"]);
Vue.use(vue_month_picker__WEBPACK_IMPORTED_MODULE_1__["MonthPickerInput"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      employeeNames: {},
      holidaySetupOWnerLists: {},
      currentDateMonth: {},
      momentFormat: {},
      momentFormatMonth: {},
      momentFormatDate: {},
      yearly: true,
      number: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      date: {
        from: null,
        to: null,
        month: null,
        monthIndex: null,
        year: null
      }
    };
  },
  components: {
    MonthPicker: vue_month_picker__WEBPACK_IMPORTED_MODULE_1__["MonthPicker"],
    MonthPickerInput: vue_month_picker__WEBPACK_IMPORTED_MODULE_1__["MonthPickerInput"]
  },
  mounted: function mounted() {
    this.holidaySetupReport();
  },
  methods: {
    showDate: function showDate(date) {
      var _this = this;

      this.date = date;
      this.yearly = false;
      axios.get("/yearlyLeave/".concat(this.date.monthIndex, "/").concat(this.date.year)).then(function (res) {
        _this.holidaySetupOWnerLists = res.data.holidaySetupOWnerListPagi;
        _this.holidaySetupGlobalLists = res.data.holidaySetupGlobalList;
      });
    },
    holidaySetupReport: function holidaySetupReport() {
      var _this2 = this;

      axios.get('/holidaySetupReport').then(function (res) {
        _this2.holidaySetupOWnerLists = res.data.holidaySetupOWnerListPagi;
        _this2.holidaySetupGlobalLists = res.data.holidaySetupGlobalList;
      });
      this.currentDateMonth = new Date().toLocaleString();
      this.momentFormat = moment__WEBPACK_IMPORTED_MODULE_0___default()(String(this.currentDateMonth)).format('MM/DD/YYYY');
      this.momentFormatMonth = this.momentFormat.split('/')[0];
      this.momentFormatDate = this.momentFormat.split('/')[1];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/yearlyleave@calendar.vue?vue&type=template&id=dae2945c&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/yearlyleave@calendar.vue?vue&type=template&id=dae2945c& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
      { staticClass: "card main-card  element-block-example" },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "center",
          [
            _c("span", [_vm._v(" Select Month")]),
            _c("month-picker-input", {
              attrs: { "no-default": true },
              on: { change: _vm.showDate }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm.yearly == true
          ? _c("div", { staticClass: "table-responsive bg-white mt-3" }, [
              _c(
                "table",
                {
                  staticClass: "table table-hover table-striped table-bordered "
                },
                [
                  _c("thead", [
                    _c(
                      "tr",
                      { staticClass: "alert-info" },
                      _vm._l(31, function(num) {
                        return _c("th", [
                          _vm._v(
                            "\n                 " +
                              _vm._s(num) +
                              "\n              "
                          )
                        ])
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c(
                      "tr",
                      _vm._l(_vm.number, function(num, index) {
                        return _c(
                          "td",
                          _vm._l(_vm.holidaySetupOWnerLists, function(list) {
                            return _c(
                              "span",
                              {
                                attrs: {
                                  title:
                                    list.admin_holiday_type_relation
                                      .holidayTypeName
                                }
                              },
                              _vm._l(
                                parseFloat(list.holidayEndDate.split("-")[2]) -
                                  parseFloat(
                                    list.holidayStartDate.split("-")[2]
                                  ) +
                                  1,
                                function(i) {
                                  return _c("span", [
                                    parseFloat(
                                      list.holidayStartDate.split("-")[2]
                                    ) +
                                      i -
                                      1 ==
                                      num &&
                                    _vm.momentFormatMonth ==
                                      list.holidayStartDate.split("-")[1]
                                      ? _c(
                                          "span",
                                          { staticStyle: { color: "red" } },
                                          [_vm._v(" Holiday")]
                                        )
                                      : _vm._e()
                                  ])
                                }
                              ),
                              0
                            )
                          }),
                          0
                        )
                      }),
                      0
                    )
                  ])
                ]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.yearly == false
          ? _c("div", { staticClass: "table-responsive bg-white mt-3" }, [
              _c(
                "table",
                {
                  staticClass: "table table-hover table-striped table-bordered "
                },
                [
                  _c("thead", [
                    _c(
                      "tr",
                      { staticClass: "alert-info" },
                      _vm._l(31, function(num) {
                        return _c("th", [
                          _vm._v(
                            "\n                 " +
                              _vm._s(num) +
                              "\n              "
                          )
                        ])
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c(
                      "tr",
                      _vm._l(_vm.number, function(num, index) {
                        return _c(
                          "td",
                          _vm._l(_vm.holidaySetupOWnerLists, function(list) {
                            return _c(
                              "span",
                              {
                                attrs: {
                                  title:
                                    list.admin_holiday_type_relation
                                      .holidayTypeName
                                }
                              },
                              _vm._l(
                                parseFloat(list.holidayEndDate.split("-")[2]) -
                                  parseFloat(
                                    list.holidayStartDate.split("-")[2]
                                  ) +
                                  1,
                                function(i) {
                                  return _c("span", [
                                    parseFloat(
                                      list.holidayStartDate.split("-")[2]
                                    ) +
                                      i -
                                      1 ==
                                    num
                                      ? _c(
                                          "span",
                                          { staticStyle: { color: "red" } },
                                          [_vm._v(" Holiday")]
                                        )
                                      : _vm._e()
                                  ])
                                }
                              ),
                              0
                            )
                          }),
                          0
                        )
                      }),
                      0
                    )
                  ])
                ]
              )
            ])
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header alert-info" }, [
      _c("h3", [_vm._v("Yearly Leave")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/yearlyleave@calendar.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/yearlyleave@calendar.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yearlyleave_calendar_vue_vue_type_template_id_dae2945c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yearlyleave@calendar.vue?vue&type=template&id=dae2945c& */ "./resources/js/admin/page/hrmanagement/hrreport/yearlyleave@calendar.vue?vue&type=template&id=dae2945c&");
/* harmony import */ var _yearlyleave_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yearlyleave@calendar.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/hrmanagement/hrreport/yearlyleave@calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _yearlyleave_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _yearlyleave_calendar_vue_vue_type_template_id_dae2945c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _yearlyleave_calendar_vue_vue_type_template_id_dae2945c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/hrmanagement/hrreport/yearlyleave@calendar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/yearlyleave@calendar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/yearlyleave@calendar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yearlyleave_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./yearlyleave@calendar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/yearlyleave@calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yearlyleave_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/yearlyleave@calendar.vue?vue&type=template&id=dae2945c&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/yearlyleave@calendar.vue?vue&type=template&id=dae2945c& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_yearlyleave_calendar_vue_vue_type_template_id_dae2945c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./yearlyleave@calendar.vue?vue&type=template&id=dae2945c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/yearlyleave@calendar.vue?vue&type=template&id=dae2945c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_yearlyleave_calendar_vue_vue_type_template_id_dae2945c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_yearlyleave_calendar_vue_vue_type_template_id_dae2945c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);