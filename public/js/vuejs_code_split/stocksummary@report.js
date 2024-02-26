(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stocksummary@report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/stocksummary@report.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@report/stocksummary@report.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      purchaseProductReports: {},
      modelNo: {},
      batchNo: {},
      qrCode: {},
      mfgLicenseNO: {},
      warranty: {},
      selectMothOrYearWarranty: {},
      guarantee: {},
      selectMothOrYearGuarantee: {},
      mfgDate: {},
      expiryDate: {},
      tax: {},
      taxAmount: {},
      taxAmountType: {},
      quantityType: {},
      quantityNoti: {},
      proDescription: {},
      proAdvantage: {},
      qtys: {}
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  mounted: function mounted() {
    this.purchaseProductReport();
    this.getPaginateList();
  },
  methods: {
    purchaseProductReport: function purchaseProductReport() {
      $(document).ready(function () {
        $("#sampleTable ").DataTable({
          processing: true,
          serverSide: true,
          bDestroy: true,
          ajax: "/stockSummaryProduct",
          columns: [{
            data: "productId"
          }, {
            data: "product",
            name: "product. "
          }, {
            data: "quantity"
          }, {
            data: "totalPrice"
          }, {
            data: "productId",
            render: function render(data, row) {
              var ok = '<button type="button" onclick="stock(' + data + ')"     class="btn btn-hover-shine btn-outline-info"><i class="fa fa-info" aria-hidden="true"></i>&nbsp;Stock Visit </button>';
              return ok;
            }
          }]
        });
      });
    },
    stock: function stock(id) {
      this.$router.push("/stock@view" + id);
    }
  },
  created: function created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
      }
    });
    window.deleteExpense = this.deleteExpense;
    window.customerTypeget = this.customerTypeget;
    window.stock = this.stock;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/stocksummary@report.vue?vue&type=template&id=12a3fcb2&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@report/stocksummary@report.vue?vue&type=template&id=12a3fcb2& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "card main-card  element-block-example" }, [
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
              _vm._v("Stock Summary Report")
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive bg-white p-2" }, [
          _c(
            "table",
            {
              staticClass: "table table-hover table-bordered table-striped",
              attrs: { width: "1300px", id: "sampleTable" }
            },
            [
              _c("thead", [
                _c("tr", [
                  _c("th", [_vm._v("SN")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Product Name")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Quantity")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Stock Amount")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Action")])
                ])
              ]),
              _vm._v(" "),
              _c("tbody", [_c("tr")])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/stocksummary@report.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/stocksummary@report.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stocksummary_report_vue_vue_type_template_id_12a3fcb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stocksummary@report.vue?vue&type=template&id=12a3fcb2& */ "./resources/js/admin/page/inventory/inventory@report/stocksummary@report.vue?vue&type=template&id=12a3fcb2&");
/* harmony import */ var _stocksummary_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stocksummary@report.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/inventory/inventory@report/stocksummary@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _stocksummary_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _stocksummary_report_vue_vue_type_template_id_12a3fcb2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _stocksummary_report_vue_vue_type_template_id_12a3fcb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/inventory/inventory@report/stocksummary@report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/stocksummary@report.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/stocksummary@report.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stocksummary_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./stocksummary@report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/stocksummary@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stocksummary_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/stocksummary@report.vue?vue&type=template&id=12a3fcb2&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/stocksummary@report.vue?vue&type=template&id=12a3fcb2& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stocksummary_report_vue_vue_type_template_id_12a3fcb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./stocksummary@report.vue?vue&type=template&id=12a3fcb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/stocksummary@report.vue?vue&type=template&id=12a3fcb2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stocksummary_report_vue_vue_type_template_id_12a3fcb2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stocksummary_report_vue_vue_type_template_id_12a3fcb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);