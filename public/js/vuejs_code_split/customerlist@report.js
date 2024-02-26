(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customerlist@report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/customerlist@report.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@report/customerlist@report.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      form: new Form({}),
      customerType: '',
      customerTypeLists: []
    };
  },
  mounted: function mounted() {
    this.customerInfoListReport();
    this.customerInfoTypeListReport();
  },
  methods: {
    customerInfoListReport: function customerInfoListReport() {
      $("#table ").on("change", function () {
        // Get the value from the select box
        var value = $(this).val(); // Do what you need to do with value
        // Reset the select back to the first option

        $(this).val("default");
        $(document).ready(function () {
          $("#sampleTable").DataTable({
            processing: true,
            serverSide: true,
            bDestroy: true,
            ajax: "/salesCustomerListReportwithType/" + value,
            columns: [{
              data: "salesCustomerEntryId"
            }, {
              data: "shopCustomerTypeName",
              name: "shopCustomerTypeName.shopCustomerName"
            }, {
              data: "customerName"
            }, {
              data: "customerEmail"
            }, {
              data: "customerPhone"
            }, {
              data: "customerImoNumber"
            }, {
              data: "customerFacebookID"
            }, {
              data: "customerAddress"
            }, {
              data: "referenceName"
            }, {
              data: "referenceEmail"
            }, {
              data: "referencePhone"
            }, {
              data: "salesCustomerEntryId",
              render: function render(data, row) {
                var ok = '<button type="button" onclick="customerStatement(' + data + ')"     class="btn btn-hover-shine btn-outline-info"> Statement </button>';
                return ok;
              }
            }]
          });
        });
      });
      $(document).ready(function () {
        $("#sampleTable").DataTable({
          processing: true,
          serverSide: true,
          bDestroy: true,
          ajax: "/salesCustomerListReport",
          columns: [{
            data: "salesCustomerEntryId"
          }, {
            data: "shopCustomerTypeName",
            name: "shopCustomerTypeName.shopCustomerName"
          }, {
            data: "customerName"
          }, {
            data: "customerEmail"
          }, {
            data: "customerPhone"
          }, {
            data: "customerImoNumber"
          }, {
            data: "customerFacebookID"
          }, {
            data: "customerAddress"
          }, {
            data: "referenceName"
          }, {
            data: "referenceEmail"
          }, {
            data: "referencePhone"
          }, {
            data: "salesCustomerEntryId",
            render: function render(data, row) {
              var ok = '<button type="button" onclick="customerStatement(' + data + ')"     class="btn btn-hover-shine btn-outline-info"> Statement </button>';
              return ok;
            }
          }]
        });
      });
    },
    customerStatement: function customerStatement(id) {
      this.$router.push("/customerStatement" + id); // alert(id);
    },
    customerInfoTypeListReport: function customerInfoTypeListReport() {
      var _this = this;

      axios.get('/salesCustomerTypeListReport').then(function (res) {
        _this.customerTypeLists = res.data.customerTypeLists;
      });
    } // changeCustomerStatus(salesCustomerEntryId){
    //     axios.get('/salesProductEntry/'+salesCustomerEntryId).then(res => {
    //          this.customerInfoListReport();
    //     })
    // },

  },
  created: function created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
      }
    });
    window.customerStatement = this.customerStatement;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/customerlist@report.vue?vue&type=template&id=7dd3b0b4&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@report/customerlist@report.vue?vue&type=template&id=7dd3b0b4& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row", staticStyle: { "margin-top": "-2%" } }, [
      _c("div", { staticClass: "col-12 col-md-3 col-xs-12" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 col-md-4 col-xs-12" }, [
        _c("div", { staticClass: "form-group" }, [
          _c(
            "label",
            {
              staticStyle: { "margin-left": "27%" },
              attrs: { for: "exampleInputPassword1" }
            },
            [_vm._v("Select Customer Type")]
          ),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customerType,
                  expression: "customerType"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "table" },
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
                  _vm.customerType = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", [_vm._v("Selecet One")]),
              _vm._v(" "),
              _vm._l(_vm.customerTypeLists, function(customerTypeList) {
                return _c(
                  "option",
                  {
                    key: customerTypeList.id,
                    domProps: {
                      value: customerTypeList.shopCustomerTypeEntryId
                    }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(customerTypeList.shopCustomerName) +
                        "\n          "
                    )
                  ]
                )
              })
            ],
            2
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card main-card  element-block-example" }, [
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
            _vm._v("  Customer List Report")
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive bg-white p-2" }, [
        _c(
          "table",
          {
            staticClass: "table table-hover table-bordered table-striped",
            attrs: { id: "sampleTable" }
          },
          [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v("SN")]),
                _vm._v(" "),
                _c("th", [_vm._v("Customer Type Name")]),
                _vm._v(" "),
                _c("th", [_vm._v("Customer Name")]),
                _vm._v(" "),
                _c("th", [_vm._v("Customer Email")]),
                _vm._v(" "),
                _c("th", [_vm._v("Customer Phone")]),
                _vm._v(" "),
                _c("th", [_vm._v("Customer Imo Number")]),
                _vm._v(" "),
                _c("th", [_vm._v("Customer Facebook ID")]),
                _vm._v(" "),
                _c("th", [_vm._v("Customer Address")]),
                _vm._v(" "),
                _c("th", [_vm._v("Reference Name")]),
                _vm._v(" "),
                _c("th", [_vm._v("Reference Email")]),
                _vm._v(" "),
                _c("th", [_vm._v("Reference Phone")]),
                _vm._v(" "),
                _c("th", [_vm._v("Statement")])
              ])
            ]),
            _vm._v(" "),
            _c("tbody")
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/customerlist@report.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/customerlist@report.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customerlist_report_vue_vue_type_template_id_7dd3b0b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customerlist@report.vue?vue&type=template&id=7dd3b0b4& */ "./resources/js/admin/page/sales/sales@report/customerlist@report.vue?vue&type=template&id=7dd3b0b4&");
/* harmony import */ var _customerlist_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customerlist@report.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/sales/sales@report/customerlist@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _customerlist_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _customerlist_report_vue_vue_type_template_id_7dd3b0b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _customerlist_report_vue_vue_type_template_id_7dd3b0b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/sales/sales@report/customerlist@report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/customerlist@report.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/customerlist@report.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customerlist_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./customerlist@report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/customerlist@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customerlist_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/customerlist@report.vue?vue&type=template&id=7dd3b0b4&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/customerlist@report.vue?vue&type=template&id=7dd3b0b4& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customerlist_report_vue_vue_type_template_id_7dd3b0b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./customerlist@report.vue?vue&type=template&id=7dd3b0b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/customerlist@report.vue?vue&type=template&id=7dd3b0b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customerlist_report_vue_vue_type_template_id_7dd3b0b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customerlist_report_vue_vue_type_template_id_7dd3b0b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);