(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expiredateoverproduct@report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/expiredateoverproduct@report.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@report/expiredateoverproduct@report.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {};
  },
  mounted: function mounted() {
    this.expireDateOverProductList();
  },
  methods: {
    expireDateOverProductList: function expireDateOverProductList() {
      function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }

      $(document).ready(function () {
        $("#sampleTable").DataTable({
          processing: true,
          serverSide: true,
          ajax: "/expireDateOverProductList",
          columns: [{
            data: "purchaseProductDetailsId"
          }, {
            data: "productName",
            name: "productName.productName"
          }, {
            data: "brand",
            name: "productPriceDetails.brandName.productBrandName"
          }, {
            data: "mfgDate"
          }, {
            data: "expiryDate"
          }, {
            data: "purchaseProductDetailsId",
            render: function render(data) {
              return '<button type="submit" class="mr-2 btn-pill btn-hover-shine btn btn-danger">' + 'Date Over</button>';
            }
          }]
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/expiredateoverproduct@report.vue?vue&type=template&id=7fdd4930&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@report/expiredateoverproduct@report.vue?vue&type=template&id=7fdd4930& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 col-md-2" }),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-8" }, [
          _c("div", { staticClass: "card " }, [
            _c(
              "div",
              {
                staticClass: "card-header",
                staticStyle: {
                  "background-color": "rgb(1, 176, 241)",
                  border: "1px solid rgba(0, 0, 0, 0.05)"
                }
              },
              [
                _c("h3", { staticStyle: { color: "black" } }, [
                  _vm._v("Expired Date Over Product Report")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "table-responsive bg-white p-3",
                staticStyle: { margin: "0 auto" }
              },
              [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-hover table-bordered table-striped",
                    attrs: { width: "880px", id: "sampleTable" }
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Id")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Product_Name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Brand")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Mfg_Date")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Exp_Date")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Expired_Date_Over")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody")
                  ]
                )
              ]
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/expiredateoverproduct@report.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/expiredateoverproduct@report.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _expiredateoverproduct_report_vue_vue_type_template_id_7fdd4930___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expiredateoverproduct@report.vue?vue&type=template&id=7fdd4930& */ "./resources/js/admin/page/inventory/inventory@report/expiredateoverproduct@report.vue?vue&type=template&id=7fdd4930&");
/* harmony import */ var _expiredateoverproduct_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expiredateoverproduct@report.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/inventory/inventory@report/expiredateoverproduct@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _expiredateoverproduct_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _expiredateoverproduct_report_vue_vue_type_template_id_7fdd4930___WEBPACK_IMPORTED_MODULE_0__["render"],
  _expiredateoverproduct_report_vue_vue_type_template_id_7fdd4930___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/inventory/inventory@report/expiredateoverproduct@report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/expiredateoverproduct@report.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/expiredateoverproduct@report.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_expiredateoverproduct_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./expiredateoverproduct@report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/expiredateoverproduct@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_expiredateoverproduct_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/expiredateoverproduct@report.vue?vue&type=template&id=7fdd4930&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/expiredateoverproduct@report.vue?vue&type=template&id=7fdd4930& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_expiredateoverproduct_report_vue_vue_type_template_id_7fdd4930___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./expiredateoverproduct@report.vue?vue&type=template&id=7fdd4930& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/expiredateoverproduct@report.vue?vue&type=template&id=7fdd4930&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_expiredateoverproduct_report_vue_vue_type_template_id_7fdd4930___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_expiredateoverproduct_report_vue_vue_type_template_id_7fdd4930___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);