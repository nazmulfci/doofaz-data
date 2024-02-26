(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["holiday-report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/holiday@report.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/holiday@report.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      holidaySetupOWnerLists: {},
      holidaySetupGlobalLists: {},
      currentDateMonth: {},
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  mounted: function mounted() {
    this.holidaySetupReport();
    this.getPaginateList();
  },
  methods: {
    parseDate: function parseDate(start, end) {
      var dt = moment__WEBPACK_IMPORTED_MODULE_0___default()(end, 'YYYY-MM-DD ').diff(moment__WEBPACK_IMPORTED_MODULE_0___default()(start, 'YYYY-MM-DD '), "days");
      var futureDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(start).add(dt, 'days');
      var diff = moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(futureDate.diff(start));

      if ("".concat(diff.months()) == 0) {
        return "".concat(diff.days(), " Days");
      } else {
        return "".concat(diff.months(), " Months and ").concat(diff.days(), " Days");
      }
    },
    parseDateL: function parseDateL(start, end) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(end, 'YYYY-MM-DD ').diff(moment__WEBPACK_IMPORTED_MODULE_0___default()(start, 'YYYY-MM-DD '), "days");
    },
    holidaySetupReport: function holidaySetupReport() {
      var _this = this;

      axios.get('/holidaySetupReport').then(function (res) {
        _this.holidaySetupOWnerLists = res.data.holidaySetupOWnerList;
        _this.holidaySetupGlobalLists = res.data.holidaySetupGlobalList;
      });
      this.currentDateMonth = new Date().toLocaleString().split(',')[0];
    },
    getPaginateList: function getPaginateList() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/holidaySetupReport?page=' + page).then(function (response) {
        _this2.holidaySetupOWnerLists = response.data.holidaySetupOWnerList;
        _this2.holidaySetupGlobalLists = response.data.holidaySetupGlobalList;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/holiday@report.vue?vue&type=template&id=ed2abd06&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/holiday@report.vue?vue&type=template&id=ed2abd06& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
              _vm._l(_vm.holidaySetupOWnerLists.data, function(
                holidaySetupOWnerList,
                index
              ) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  holidaySetupOWnerList.admin_holiday_type_relation
                    ? _c("td", [
                        _vm._v(
                          _vm._s(
                            holidaySetupOWnerList.admin_holiday_type_relation
                              .holidayTypeName
                          )
                        )
                      ])
                    : _c("td"),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(holidaySetupOWnerList.holidayStartDate))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(holidaySetupOWnerList.holidayEndDate))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "     " +
                        _vm._s(
                          _vm.parseDateL(
                            holidaySetupOWnerList.holidayStartDate,
                            holidaySetupOWnerList.holidayEndDate
                          ) + 1
                        )
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                 \n           " +
                        _vm._s(
                          _vm.parseDate(
                            _vm.moment(new Date(), "YYYY-MM-DD"),
                            holidaySetupOWnerList.holidayStartDate
                          )
                        ) +
                        "\n               \n              \n\n              "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    holidaySetupOWnerList.holidaySetupStatus == 1
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
              attrs: { data: _vm.holidaySetupOWnerLists, limit: _vm.limit },
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
      _c("h3", [_vm._v("Holiday Setup Report ")])
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
          _vm._v("Holiday"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Type"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Name")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Holiday"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Start"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Date ")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Holiday"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("End"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Date ")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Day"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Remain")
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("Upcoming")]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Holiday"),
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

/***/ "./resources/js/admin/page/hrmanagement/hrreport/holiday@report.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/holiday@report.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _holiday_report_vue_vue_type_template_id_ed2abd06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./holiday@report.vue?vue&type=template&id=ed2abd06& */ "./resources/js/admin/page/hrmanagement/hrreport/holiday@report.vue?vue&type=template&id=ed2abd06&");
/* harmony import */ var _holiday_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./holiday@report.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/hrmanagement/hrreport/holiday@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _holiday_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _holiday_report_vue_vue_type_template_id_ed2abd06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _holiday_report_vue_vue_type_template_id_ed2abd06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/hrmanagement/hrreport/holiday@report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/holiday@report.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/holiday@report.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_holiday_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./holiday@report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/holiday@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_holiday_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/holiday@report.vue?vue&type=template&id=ed2abd06&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/holiday@report.vue?vue&type=template&id=ed2abd06& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_holiday_report_vue_vue_type_template_id_ed2abd06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./holiday@report.vue?vue&type=template&id=ed2abd06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/holiday@report.vue?vue&type=template&id=ed2abd06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_holiday_report_vue_vue_type_template_id_ed2abd06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_holiday_report_vue_vue_type_template_id_ed2abd06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);