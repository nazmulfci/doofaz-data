(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["today@banking@sale"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/today@banking@sale.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@report/today@banking@sale.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      receiverbankTypeEntryId: "",
      receiverbankEntryId: "",
      showBankTypeDatas: {},
      showBankNames: {},
      lists: {}
    };
  },
  mounted: function mounted() {
    this.view();
    this.getData();
  },
  methods: {
    view: function view() {
      function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }

      $("#table1 ").on("change", function () {
        var value1 = $(this).val();
        localStorage.setItem('value1', JSON.stringify(value1));
      });
      $("#table ").on("change", function () {
        // Get the value from the select box
        var value = $(this).val();
        var v = localStorage.getItem('value1'); // Do what you need to do with value
        // Reset the select back to the first option

        $(this).val("default");
        $(document).ready(function () {
          $("#sampleTable ").DataTable({
            processing: true,
            serverSide: true,
            bDestroy: true,
            ajax: "/todayBankingSale/" + JSON.parse(v) + "/" + value,
            columns: [{
              data: "salesInvoiceNo"
            }, {
              data: "salesDate",
              name: "invoice.salesDate"
            }, {
              data: "salesInvoiceNo",
              name: "invoice.salesInvoiceNo",
              render: function render(data, row) {
                var ok = '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"   onclick="editModal(' + data + ')">' + data + "</button>";
                return ok;
              }
            }, {
              data: "customerName",
              name: "invoice.customerName.customerName"
            }, {
              data: "customerType",
              name: "invoice.customerType.shopCustomerName"
            }, {
              data: "totalQuantity",
              name: "invoice.totalQuantity"
            }, {
              data: "discountPrice",
              name: "invoice.discountPrice"
            }, {
              data: "currentTotalAmount",
              name: "invoice.currentTotalAmount"
            }, {
              data: "currentPaidAmount",
              name: "invoice.currentPaidAmount"
            }, {
              data: "mobileAmount",
              name: "invoice.mobileAmount"
            }, {
              data: "currentDue",
              name: "invoice.currentDue"
            }]
          });
        });
      });
    },
    bankTypeIdCatch: function bankTypeIdCatch() {
      var _this = this;

      axios.get("/bankNameList/" + this.receiverbankTypeEntryId).then(function (res) {
        _this.showBankNames = res.data.show;
      });
    },
    getData: function getData() {
      var _this2 = this;

      axios.get("/bankTypeEntryList").then(function (res) {
        _this2.showBankTypeDatas = res.data.show;
      });
    },
    editModal: function editModal(id) {
      var _this3 = this;

      axios.get("salesInvoiceList/".concat(id)).then(function (res) {
        _this3.lists = res.data.lists;
      });
      $("#salesId").modal("show");
    }
  },
  created: function created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
      }
    });
    window.deleteExpense = this.deleteExpense;
    window.editModal = this.editModal;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/today@banking@sale.vue?vue&type=template&id=5c912bfc&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@report/today@banking@sale.vue?vue&type=template&id=5c912bfc& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-12 col-md-4" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 col-md-3" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticStyle: { "margin-left": "27%" } }, [
            _vm._v("Bank Type ")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.receiverbankTypeEntryId,
                  expression: "receiverbankTypeEntryId"
                }
              ],
              staticClass: "form-control",
              attrs: { name: "bankTypeEntryId", id: "table1" },
              on: {
                change: [
                  function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.receiverbankTypeEntryId = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  function($event) {
                    $event.preventDefault()
                    return _vm.bankTypeIdCatch()
                  }
                ]
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("Select One")]),
              _vm._v(" "),
              _vm._l(_vm.showBankTypeDatas, function(showBankTypeData) {
                return _c(
                  "option",
                  {
                    key: showBankTypeData.id,
                    domProps: { value: showBankTypeData.bankTypeEntryId }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(showBankTypeData.bankTypeEntryName) +
                        "\n          "
                    )
                  ]
                )
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticStyle: { "margin-left": "27%" } }, [
            _vm._v(" Bank Name")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.receiverbankEntryId,
                  expression: "receiverbankEntryId"
                }
              ],
              staticClass: "form-control",
              attrs: { name: "bankEntryId", id: "table" },
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
                  _vm.receiverbankEntryId = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [
                _vm._v("Select Bank Name")
              ]),
              _vm._v(" "),
              _vm._l(_vm.showBankNames, function(showBankName) {
                return _c(
                  "option",
                  {
                    key: showBankName.id,
                    domProps: { value: showBankName.bankEntryId }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(showBankName.bankName) +
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
    _c(
      "div",
      {
        staticClass: "card main-card element-block-example mt-0",
        staticStyle: { width: "91%", margin: "0 auto" }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body table-responsive bg-white" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal fade",
              attrs: {
                id: "salesId",
                tabindex: "-1",
                role: "dialog",
                "aria-labelledby": "exampleModalLongTitle",
                "aria-hidden": "true"
              }
            },
            [
              _c(
                "div",
                { staticClass: "modal-dialog", attrs: { role: "document" } },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c(
                        "div",
                        { staticClass: "card main-card element-block-example" },
                        [
                          _vm._m(3),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "table-responsive bg-white" },
                            [
                              _c(
                                "table",
                                {
                                  staticClass:
                                    "table table-hover table-bordered table-striped"
                                },
                                [
                                  _vm._m(4),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    _vm._l(_vm.lists, function(list, index) {
                                      return _c("tr", [
                                        _c("td", [_vm._v(_vm._s(index + 1))]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(list.created_at))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              list.product_name.productName
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              list.brand_name.productBrandName
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(list.quantity))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v(_vm._s(list.unitId))]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(list.unitPrice))
                                        ]),
                                        _vm._v(" "),
                                        _c("td"),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(list.totalPrice))
                                        ])
                                      ])
                                    }),
                                    0
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(5)
                  ])
                ]
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header-tab card-header alert-info" },
      [
        _c("h4", [
          _c("i", {
            staticClass:
              "header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          }),
          _vm._v("\n        Today Banking Sales\n      ")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "table",
      {
        staticClass: "table table-hover table-striped table-bordered",
        staticStyle: { width: "100%" },
        attrs: { id: "sampleTable" }
      },
      [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("SN")]),
            _vm._v(" "),
            _c("th", [_vm._v("Sales Date")]),
            _vm._v(" "),
            _c("th", [_vm._v("Invoice No")]),
            _vm._v(" "),
            _c("th", [_vm._v("Customer Name")]),
            _vm._v(" "),
            _c("th", [_vm._v("Customer Type")]),
            _vm._v(" "),
            _c("th", [_vm._v("Total Quantity")]),
            _vm._v(" "),
            _c("th", [_vm._v("Discount Price")]),
            _vm._v(" "),
            _c("th", [_vm._v("Total Amount")]),
            _vm._v(" "),
            _c("th", [_vm._v("Paid Cash")]),
            _vm._v(" "),
            _c("th", [_vm._v("Paid Bank")]),
            _vm._v(" "),
            _c("th", [_vm._v("Due Amount")])
          ])
        ]),
        _vm._v(" "),
        _c("tbody")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header bg-primary text-light" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLongTitle" } },
        [_vm._v("\n                Product Detalis\n              ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
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
          _vm._v("Sales Product List")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("SN")]),
        _vm._v(" "),
        _c("th", [_vm._v("Sales.Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product.Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Brand")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit.Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Discount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total.Price")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-hover-shine btn-danger",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("\n                Close\n              ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/today@banking@sale.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/today@banking@sale.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _today_banking_sale_vue_vue_type_template_id_5c912bfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today@banking@sale.vue?vue&type=template&id=5c912bfc& */ "./resources/js/admin/page/sales/sales@report/today@banking@sale.vue?vue&type=template&id=5c912bfc&");
/* harmony import */ var _today_banking_sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today@banking@sale.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/sales/sales@report/today@banking@sale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _today_banking_sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _today_banking_sale_vue_vue_type_template_id_5c912bfc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _today_banking_sale_vue_vue_type_template_id_5c912bfc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/sales/sales@report/today@banking@sale.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/today@banking@sale.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/today@banking@sale.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_today_banking_sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./today@banking@sale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/today@banking@sale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_today_banking_sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/today@banking@sale.vue?vue&type=template&id=5c912bfc&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/today@banking@sale.vue?vue&type=template&id=5c912bfc& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_today_banking_sale_vue_vue_type_template_id_5c912bfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./today@banking@sale.vue?vue&type=template&id=5c912bfc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/today@banking@sale.vue?vue&type=template&id=5c912bfc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_today_banking_sale_vue_vue_type_template_id_5c912bfc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_today_banking_sale_vue_vue_type_template_id_5c912bfc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);