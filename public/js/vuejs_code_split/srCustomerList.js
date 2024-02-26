(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["srCustomerList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/srCustomerList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrmanagement/srCustomerList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      shopAssetEntryReports: {}
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  mounted: function mounted() {
    this.assetEntryList(); // this.getPaginateList();
  },
  methods: {
    assetEntryList: function assetEntryList() {
      var _this = this;

      axios.get('/srCustomerListReport/' + this.$route.params.id).then(function (res) {
        _this.shopAssetEntryReports = res.data.data;
      });
    } // getPaginateList(page = 1){
    //     axios.get('/shopAssetEntryReportDetails/'+this.$route.params.id+'?page=' + page).then(response => {
    //          this.shopAssetEntryReports = response.data.shopAssetEntryReports;
    //     });
    // }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/srCustomerList.vue?vue&type=template&id=e54cf1e6&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrmanagement/srCustomerList.vue?vue&type=template&id=e54cf1e6& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
          { staticClass: "table table-hover table-striped table-bordered" },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.shopAssetEntryReports, function(
                shopAssetEntryReport,
                index
              ) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(shopAssetEntryReport.type))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(shopAssetEntryReport.customerName))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(shopAssetEntryReport.customerPhone))
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(shopAssetEntryReport.due))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(shopAssetEntryReport.totalCollection))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(shopAssetEntryReport.thisMonthCollection))
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass:
                            "\n                  btn-wide btn-pill btn btn-outline-primary btn-hover-shine float-right\n                ",
                          attrs: {
                            to: "/customerStatement" + shopAssetEntryReport.id
                          }
                        },
                        [_vm._v(" Statement ")]
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
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-primary text-light" }, [
      _c("h3", [
        _c("i", {
          staticClass:
            "header-icon lnr-laptop-phone icon-gradient bg-heavy-rain"
        }),
        _vm._v("SR Customer List")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "alert-info" }, [
        _c("th", [_vm._v(" SN ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Customer Type ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Customer Name ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Customer Mobile No ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Due ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Total Collection  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" This Month Collection ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Statement ")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrmanagement/srCustomerList.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrmanagement/srCustomerList.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _srCustomerList_vue_vue_type_template_id_e54cf1e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./srCustomerList.vue?vue&type=template&id=e54cf1e6& */ "./resources/js/admin/page/hrmanagement/hrmanagement/srCustomerList.vue?vue&type=template&id=e54cf1e6&");
/* harmony import */ var _srCustomerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./srCustomerList.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/hrmanagement/hrmanagement/srCustomerList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _srCustomerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _srCustomerList_vue_vue_type_template_id_e54cf1e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _srCustomerList_vue_vue_type_template_id_e54cf1e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/hrmanagement/hrmanagement/srCustomerList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrmanagement/srCustomerList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrmanagement/srCustomerList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_srCustomerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./srCustomerList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/srCustomerList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_srCustomerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrmanagement/srCustomerList.vue?vue&type=template&id=e54cf1e6&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrmanagement/srCustomerList.vue?vue&type=template&id=e54cf1e6& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_srCustomerList_vue_vue_type_template_id_e54cf1e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./srCustomerList.vue?vue&type=template&id=e54cf1e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/srCustomerList.vue?vue&type=template&id=e54cf1e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_srCustomerList_vue_vue_type_template_id_e54cf1e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_srCustomerList_vue_vue_type_template_id_e54cf1e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);