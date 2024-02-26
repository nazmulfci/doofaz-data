(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["salesproduct@price"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/product@report/salesproduct@price.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/product@report/salesproduct@price.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      salesProductPriceReports: {}
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  mounted: function mounted() {
    this.salesProductPriceReport();
  },
  methods: {
    salesProductPriceReport: function salesProductPriceReport() {
      function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }

      $(document).ready(function () {
        $.fn.dataTable.ext.errMode = 'none';
        $("#sampleTable").DataTable({
          processing: true,
          serverSide: true,
          ajax: "/salesProductPriceReport",
          columns: [{
            data: "salesProductPriceEntryId"
          }, {
            data: "productName",
            name: "productName.productName"
          }, {
            data: "brandname",
            name: "brandname.brandname"
          }, {
            data: "color.colorName"
          }, {
            data: "size.sizeName"
          }, {
            data: "mrpPrice"
          }, {
            data: "salesPrice"
          }, {
            data: "wholesalePrice"
          }, {
            data: "specialPrice"
          }, {
            data: "eCommercePrice"
          }, {
            data: "created_at"
          }]
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/product@report/salesproduct@price.vue?vue&type=template&id=4749ca51&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/product@report/salesproduct@price.vue?vue&type=template&id=4749ca51& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c(
            "div",
            { staticClass: "card ", staticStyle: { margin: "0 auto" } },
            [
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
                    _vm._v("Sales Product Price Report")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive bg-white p-2" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-hover table-bordered table-striped",
                    attrs: { id: "sampleTable" }
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("SN")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Product Name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Brand Name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Color")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Size")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("MRP Price")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Sales Price")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Wholesale Price")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Special Price")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("E-Commerce Price")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Created Date")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody")
                  ]
                )
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/sales/product@report/salesproduct@price.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/page/sales/product@report/salesproduct@price.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _salesproduct_price_vue_vue_type_template_id_4749ca51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salesproduct@price.vue?vue&type=template&id=4749ca51& */ "./resources/js/admin/page/sales/product@report/salesproduct@price.vue?vue&type=template&id=4749ca51&");
/* harmony import */ var _salesproduct_price_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salesproduct@price.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/sales/product@report/salesproduct@price.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _salesproduct_price_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _salesproduct_price_vue_vue_type_template_id_4749ca51___WEBPACK_IMPORTED_MODULE_0__["render"],
  _salesproduct_price_vue_vue_type_template_id_4749ca51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/sales/product@report/salesproduct@price.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/sales/product@report/salesproduct@price.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/product@report/salesproduct@price.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_salesproduct_price_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./salesproduct@price.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/product@report/salesproduct@price.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_salesproduct_price_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/sales/product@report/salesproduct@price.vue?vue&type=template&id=4749ca51&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/product@report/salesproduct@price.vue?vue&type=template&id=4749ca51& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salesproduct_price_vue_vue_type_template_id_4749ca51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./salesproduct@price.vue?vue&type=template&id=4749ca51& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/product@report/salesproduct@price.vue?vue&type=template&id=4749ca51&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salesproduct_price_vue_vue_type_template_id_4749ca51___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salesproduct_price_vue_vue_type_template_id_4749ca51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);