(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["salesCustomerReport"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/dealer/report/salesCustomerReport.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/dealer/report/salesCustomerReport.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var datatables_net_buttons_js_dataTables_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net-buttons/js/dataTables.buttons.js */ "./node_modules/datatables.net-buttons/js/dataTables.buttons.js");
/* harmony import */ var datatables_net_buttons_js_dataTables_buttons_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_js_dataTables_buttons_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net_buttons_js_buttons_html5_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net-buttons/js/buttons.html5.js */ "./node_modules/datatables.net-buttons/js/buttons.html5.js");
/* harmony import */ var datatables_net_buttons_js_buttons_html5_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_js_buttons_html5_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net_buttons_js_buttons_print_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-buttons/js/buttons.print.js */ "./node_modules/datatables.net-buttons/js/buttons.print.js");
/* harmony import */ var datatables_net_buttons_js_buttons_print_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_js_buttons_print_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_buttons_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-buttons-bs4 */ "./node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.js");
/* harmony import */ var datatables_net_buttons_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var datatables_net_buttons_bs4_css_buttons_bootstrap4_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css */ "./node_modules/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css");
/* harmony import */ var datatables_net_buttons_bs4_css_buttons_bootstrap4_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_bs4_css_buttons_bootstrap4_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // below you should only import what you need
// Example: import buttons and plugins



 // import the rest for your specific theme





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      sId: '',
      gets: '',
      assetSupplierGetDatas: {},
      lists: {},
      companyName: '',
      productSupplierLists: [],
      salesCustomerLists: [],
      supplierInformationLists: [],
      newBrandLists: [],
      totalSale: '',
      totalPurchase: '',
      totalProfit: '',
      moment: moment__WEBPACK_IMPORTED_MODULE_10___default.a,
      loading: false,
      form: new Form({
        rendomNumber: new Date().getTime(),
        productSupplierId: '0',
        brandId: '0',
        productId: '',
        customerTypeId: '',
        customerId: 0,
        customerListId: '',
        srListId: '',
        srId: '',
        dsrListId: '',
        dsrId: '',
        // --------------- table variable
        t_productId: '',
        t_brandId: '',
        t_colorId: '',
        t_sizeId: '',
        t_tpRate: '',
        t_purchaseRate: '',
        t_unitId: '',
        t_unit: '',
        t_perPcsQuantity: '',
        t_carton: '',
        t_pcs: '',
        t_priceTypeId: '',
        t_totalPcs: '',
        t_totalPrice: '',
        // --------------- /table variable
        totalAmount: 0,
        OrderRequestDate: moment__WEBPACK_IMPORTED_MODULE_10___default()().format("YYYY-MM-DD")
      })
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_9___default.a
  },
  mounted: function mounted() {
    this.productSupplierList1();
    this.productBrnadList();
    this.customerTypeIdCatch();
    this.getInvoiceSetupInformation();
  },
  methods: {
    salesCustomerName: function salesCustomerName(_ref) {
      var customerName = _ref.customerName,
          customerPhone = _ref.customerPhone;
      return "".concat(customerName, " \u2014 ").concat(customerPhone);
    },
    customerTypeIdCatch: function customerTypeIdCatch() {
      var _this = this;

      axios.get("/allCustomerList/").then(function (res) {
        _this.salesCustomerLists = res.data.salesCustomerLists;
      });
    },
    customerIdCatch: function customerIdCatch(value) {
      this.form.customerId = value.salesCustomerEntryId;
    },
    viewProduct: function viewProduct(cid, sid, bid, searchId) {
      //alert(sid+'-'+bid+'-'+searchId);
      axios.get("/salesOrderCustomerSearch/" + cid + '/' + sid + '/' + bid + '/' + searchId).then(function (res) {
        // this.$router.push('/supplierReportView'+searchId);
        window.open('/customerReportView' + searchId, '_blank');
      });
    },
    searchData: function searchData() {
      this.getInformation(this.form.customerId, this.form.brandId, this.form.OrderRequestDate);
    },
    productSupplierList1: function productSupplierList1() {
      var _this2 = this;

      axios.get("/shopWishProductSupplier").then(function (res) {
        _this2.productSupplierLists = res.data.productSupplierList;
      });
    },
    productBrnadList: function productBrnadList() {
      var _this3 = this;

      axios.get("/productBrandListPurchase").then(function (res) {
        _this3.newBrandLists = res.data.shopProductBrandList;
      });
    },
    productSupplierId: function productSupplierId(value) {
      var _this4 = this;

      this.form.productSupplierId = value.productSupplierId;
      axios.get("/supplierWiseBrandList/" + value.productSupplierId).then(function (res) {
        _this4.newBrandLists = res.data.brandList;
        _this4.productNameLists = res.data.productList;
      });
    },
    selectBrandId: function selectBrandId(value) {
      var _this5 = this;

      this.form.brandId = value.productBrandEntryId;
      axios.get("/brandWiseProductList/" + this.form.productSupplierId + '/' + value.productBrandEntryId).then(function (res) {
        _this5.productNameLists = res.data.productList;
      });
    },
    getInvoiceSetupInformation: function getInvoiceSetupInformation() {
      var _this6 = this;

      var uri = "/getInvoiceSetupInformation/3";
      axios.get(uri).then(function (response) {
        _this6.gets = response.data.data;
        _this6.companyName = response.data.data.companyName;

        _this6.getInformation(_this6.form.customerId, _this6.form.brandId, _this6.form.OrderRequestDate);
      });
    },
    getInformation: function getInformation(productSupplierId, brandId, OrderRequestDate) {
      var _this7 = this;

      this.loading = true;
      var uri = '';

      if (OrderRequestDate) {
        uri = "/customerSalesReport/" + productSupplierId + '/' + OrderRequestDate;
      } else {
        uri = "/customerSalesReport/" + productSupplierId + '/0';
      }

      axios.get(uri).then(function (res) {
        _this7.supplierInformationLists = res.data.data;
        _this7.totalSale = res.data.totalSale;
        _this7.totalPurchase = res.data.totalPurchase;
        _this7.totalProfit = res.data.totalProfit;
        _this7.loading = false;
      });
    },
    statement: function statement(id) {
      this.$router.push('/supplierStatement' + id);
    },
    details: function details(id) {
      var _this8 = this;

      this.sId = id;
      axios.get("assetProductList/".concat(id)).then(function (res) {
        _this8.lists = res.data.list;
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
    window.statement = this.statement;
    window.details = this.details; // window.pdetails = this.pdetails;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/dealer/report/salesCustomerReport.vue?vue&type=template&id=a6733d12&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/dealer/report/salesCustomerReport.vue?vue&type=template&id=a6733d12& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
          {
            staticClass: "table table-hover table-striped table-bordered",
            staticStyle: { width: "100%" },
            attrs: { id: "example" }
          },
          [
            _c("thead", [
              _c("tr", [
                _c(
                  "th",
                  { staticClass: "text-center", attrs: { colspan: "12" } },
                  [
                    _c("center", [
                      _c("form", { attrs: { method: "" } }, [
                        _c("table", {}, [
                          _c("tr", [
                            _c(
                              "td",
                              [
                                _c("multiselect", {
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "customerListId"
                                    )
                                  },
                                  staticStyle: {
                                    padding: "0px !important",
                                    "padding-bottom": "3px !important"
                                  },
                                  attrs: {
                                    placeholder: "Select Customer",
                                    options: _vm.salesCustomerLists,
                                    "show-labels": false,
                                    "custom-label": _vm.salesCustomerName
                                  },
                                  on: { input: _vm.customerIdCatch },
                                  model: {
                                    value: _vm.form.customerListId,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "customerListId", $$v)
                                    },
                                    expression: "form.customerListId"
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: {
                                    form: _vm.form,
                                    field: "productSupplierId"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.OrderRequestDate,
                                      expression: "form.OrderRequestDate"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "OrderRequestDate"
                                    )
                                  },
                                  staticStyle: { width: "150px" },
                                  attrs: {
                                    type: "date",
                                    placeholder: "Select Date"
                                  },
                                  domProps: {
                                    value: _vm.form.OrderRequestDate
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "OrderRequestDate",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: {
                                    form: _vm.form,
                                    field: "OrderRequestDate"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "\n                            mt-3\n                            btn-pill btn-shadow \n                            fsize-1\n                            btn btn-primary float-right\n                          ",
                                  attrs: {
                                    type: "button",
                                    disabled: _vm.loading
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.searchData()
                                    }
                                  }
                                },
                                [
                                  _vm.loading
                                    ? _c("span", {
                                        staticClass:
                                          "spinner-border spinner-border-sm",
                                        attrs: {
                                          role: "status",
                                          "aria-hidden": "true"
                                        }
                                      })
                                    : _c(
                                        "span",
                                        { staticClass: "mr-2 opacity-7" },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-search"
                                          })
                                        ]
                                      ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "mr-1" }, [
                                    _vm._v(" Search ")
                                  ])
                                ]
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                )
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "table",
          {
            staticClass: "table table-hover table-striped table-bordered",
            attrs: { id: "sampleTable" }
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.supplierInformationLists, function(
                  supplierInformationList,
                  index
                ) {
                  return _c("tr", [
                    _c("td", [_vm._v(" " + _vm._s(++index))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(" " + _vm._s(supplierInformationList.customerName))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(" " + _vm._s(supplierInformationList.supplierName))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(" " + _vm._s(supplierInformationList.brandName))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(" " + _vm._s(supplierInformationList.sales))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(" " + _vm._s(supplierInformationList.purchase))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(" " + _vm._s(supplierInformationList.profit))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn-wide btn-pill btn btn-outline-primary btn-hover-shine",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.viewProduct(
                                supplierInformationList.customerId,
                                supplierInformationList.supplierId,
                                supplierInformationList.brandId,
                                supplierInformationList.searchId
                              )
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-eye" }),
                          _vm._v(" View ")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "btn-wide btn-pill btn btn-outline-primary btn-hover-shine",
                            attrs: {
                              target: "_blank",
                              to:
                                "/customerStatement" +
                                supplierInformationList.customerId
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-eye" }),
                            _vm._v(" Statement ")
                          ]
                        )
                      ],
                      1
                    )
                  ])
                }),
                _vm._v(" "),
                _c("tr", [
                  _c(
                    "th",
                    {
                      staticClass: "text-uppercase text-right",
                      attrs: { colspan: "4" }
                    },
                    [_vm._v(" Total ")]
                  ),
                  _vm._v(" "),
                  _c("th", [_vm._v(" " + _vm._s(_vm.totalSale) + " ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" " + _vm._s(_vm.totalPurchase) + " ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" " + _vm._s(_vm.totalProfit) + " ")]),
                  _vm._v(" "),
                  _c("th", {
                    staticClass: "text-right",
                    attrs: { colspan: "2" }
                  })
                ])
              ],
              2
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", [
        _c("i", {
          staticClass:
            "header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
        }),
        _vm._v(" Customer Report ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("SN")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-uppercase" }, [_vm._v("Customer Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-uppercase" }, [_vm._v("Company Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-uppercase" }, [_vm._v("Brand Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-uppercase" }, [_vm._v(" Sale Amount")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-uppercase" }, [
          _vm._v("Purchase Amount")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-uppercase" }, [_vm._v("Profit")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-uppercase" }, [_vm._v("View")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-uppercase" }, [_vm._v("Statement")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/dealer/report/salesCustomerReport.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/admin/page/dealer/report/salesCustomerReport.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _salesCustomerReport_vue_vue_type_template_id_a6733d12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salesCustomerReport.vue?vue&type=template&id=a6733d12& */ "./resources/js/admin/page/dealer/report/salesCustomerReport.vue?vue&type=template&id=a6733d12&");
/* harmony import */ var _salesCustomerReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salesCustomerReport.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/dealer/report/salesCustomerReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _salesCustomerReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _salesCustomerReport_vue_vue_type_template_id_a6733d12___WEBPACK_IMPORTED_MODULE_0__["render"],
  _salesCustomerReport_vue_vue_type_template_id_a6733d12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/dealer/report/salesCustomerReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/dealer/report/salesCustomerReport.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/admin/page/dealer/report/salesCustomerReport.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_salesCustomerReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./salesCustomerReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/dealer/report/salesCustomerReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_salesCustomerReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/dealer/report/salesCustomerReport.vue?vue&type=template&id=a6733d12&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/admin/page/dealer/report/salesCustomerReport.vue?vue&type=template&id=a6733d12& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salesCustomerReport_vue_vue_type_template_id_a6733d12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./salesCustomerReport.vue?vue&type=template&id=a6733d12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/dealer/report/salesCustomerReport.vue?vue&type=template&id=a6733d12&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salesCustomerReport_vue_vue_type_template_id_a6733d12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salesCustomerReport_vue_vue_type_template_id_a6733d12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);