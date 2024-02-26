(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dataexpaired@notification"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/product@report/dataexpaired@notification.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/product@report/dataexpaired@notification.vue?vue&type=script&lang=js& ***!
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.expireDateSoonProductList();
  },
  methods: {
    expireDateSoonProductList: function expireDateSoonProductList() {
      function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }

      $(document).ready(function () {
        $("#sampleTable").DataTable({
          processing: true,
          serverSide: true,
          ajax: "/expireDateSoonProductList",
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
            data: "dayRemain",
            render: function render(data) {
              return '<button class="border py-1 px-2 btn-hover-shine btn-danger">' + data + '&nbsp;Day</button>';
            }
          }]
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/product@report/dataexpaired@notification.vue?vue&type=template&id=7f39f280&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/product@report/dataexpaired@notification.vue?vue&type=template&id=7f39f280& ***!
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
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 col-md-2" }),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-8" }, [
          _c(
            "div",
            {
              staticClass: "card main-card  element-block-example",
              staticStyle: { margin: "0 auto" }
            },
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
                    _vm._v("Expired Date Soon Product Report")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive bg-white p-2" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-hover table-bordered table-striped p-2",
                    attrs: { id: "sampleTable" }
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("SN")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Product Name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Brand")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Mfg Date")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Exp Date")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Expired Date Soon")])
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

/***/ "./resources/js/admin/page/sales/product@report/dataexpaired@notification.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/product@report/dataexpaired@notification.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataexpaired_notification_vue_vue_type_template_id_7f39f280___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataexpaired@notification.vue?vue&type=template&id=7f39f280& */ "./resources/js/admin/page/sales/product@report/dataexpaired@notification.vue?vue&type=template&id=7f39f280&");
/* harmony import */ var _dataexpaired_notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataexpaired@notification.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/sales/product@report/dataexpaired@notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dataexpaired_notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dataexpaired_notification_vue_vue_type_template_id_7f39f280___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dataexpaired_notification_vue_vue_type_template_id_7f39f280___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/sales/product@report/dataexpaired@notification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/sales/product@report/dataexpaired@notification.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/product@report/dataexpaired@notification.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataexpaired_notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./dataexpaired@notification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/product@report/dataexpaired@notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataexpaired_notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/sales/product@report/dataexpaired@notification.vue?vue&type=template&id=7f39f280&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/product@report/dataexpaired@notification.vue?vue&type=template&id=7f39f280& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dataexpaired_notification_vue_vue_type_template_id_7f39f280___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./dataexpaired@notification.vue?vue&type=template&id=7f39f280& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/product@report/dataexpaired@notification.vue?vue&type=template&id=7f39f280&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dataexpaired_notification_vue_vue_type_template_id_7f39f280___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dataexpaired_notification_vue_vue_type_template_id_7f39f280___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);