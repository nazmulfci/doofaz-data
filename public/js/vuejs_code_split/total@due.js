(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["total@due"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/total@due.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@report/total@due.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        date: '',
        dateDue: ''
      }),
      customerType: '',
      customerTypeLists: [],
      dues: [],
      totaldues: []
    };
  },
  mounted: function mounted() {
    this.dueSale();
    this.customerInfoListReport();
  },
  methods: {
    dueSale: function dueSale() {
      var _this = this;

      axios.get('dueSaleTotal').then(function (res) {
        _this.dues = res.data;
        _this.totaldues = res.data.due;
      });
    },
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
            ajax: "/salesCustomerListTotalDue/" + value,
            columns: [{
              data: "salesCustomerEntryId"
            }, {
              data: "customer" // name: "customerName.customerName",

            }, // {
            //   data: "customerPhone",
            //   // name: "customerPhone.customerPhone",
            // },
            {
              data: "debitAmount"
            }, {
              data: "creditAmount"
            }, {
              data: "balanceAmount"
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
    },
    customerStatement: function customerStatement(id) {
      this.$router.push("/customerStatement" + id); // alert(id);
    },
    customerInfoTypeListReport: function customerInfoTypeListReport() {
      var _this2 = this;

      axios.get('/salesCustomerTypeListReport').then(function (res) {
        _this2.customerTypeLists = res.data.customerTypeLists;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/total@due.vue?vue&type=template&id=623011a6&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@report/total@due.vue?vue&type=template&id=623011a6& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        {
          staticClass: "card-header ",
          staticStyle: {
            background: "rgba(221, 221, 221, 0.46)",
            border: "1px solid rgba(0, 0, 0, 0.12)"
          }
        },
        [
          _c("h3", { staticStyle: { color: "black", margin: "0 auto" } }, [
            _vm._v("Total Due   " + _vm._s(_vm.dues.totaldue))
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive bg-white ml-5" }, [
        _c(
          "div",
          {},
          [
            _c("center", [
              _c("div", { staticClass: "form-group col-12 col-md-4  " }, [
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
                    _vm._l(_vm.totaldues, function(totaldue) {
                      return _c(
                        "option",
                        {
                          key: totaldue.id,
                          domProps: { value: totaldue.accountHeadCode }
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(totaldue.type.shopCustomerName) +
                              " (" +
                              _vm._s(totaldue.currentDue) +
                              ")\n          "
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(0)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "table",
      {
        staticClass: "table table-hover table-bordered table-striped",
        staticStyle: { width: "1350px" },
        attrs: { id: "sampleTable" }
      },
      [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("SN")]),
            _vm._v(" "),
            _c("th", [_vm._v("Customer Name")]),
            _vm._v(" "),
            _c("th", [_vm._v("Total Sales")]),
            _vm._v(" "),
            _c("th", [_vm._v("Total Paid")]),
            _vm._v(" "),
            _c("th", [_vm._v("Total Due")]),
            _vm._v(" "),
            _c("th", [_vm._v("Statement")])
          ])
        ]),
        _vm._v(" "),
        _c("tbody")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/total@due.vue":
/*!******************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/total@due.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _total_due_vue_vue_type_template_id_623011a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./total@due.vue?vue&type=template&id=623011a6& */ "./resources/js/admin/page/sales/sales@report/total@due.vue?vue&type=template&id=623011a6&");
/* harmony import */ var _total_due_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./total@due.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/sales/sales@report/total@due.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _total_due_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _total_due_vue_vue_type_template_id_623011a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _total_due_vue_vue_type_template_id_623011a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/sales/sales@report/total@due.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/total@due.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/total@due.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_total_due_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./total@due.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/total@due.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_total_due_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/total@due.vue?vue&type=template&id=623011a6&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/total@due.vue?vue&type=template&id=623011a6& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_total_due_vue_vue_type_template_id_623011a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./total@due.vue?vue&type=template&id=623011a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/total@due.vue?vue&type=template&id=623011a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_total_due_vue_vue_type_template_id_623011a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_total_due_vue_vue_type_template_id_623011a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);