(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewSalesFinalOrder"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/dealer/report/viewSalesFinalOrder.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/dealer/report/viewSalesFinalOrder.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      productSupplierLists: [],
      newBrandLists: [],
      productNameLists: [],
      resultNotFound: false,
      customerStatus: 1,
      srStatus: 1,
      dsrStatus: 1,
      salesCustomerLists: [],
      requisitionInformation: [],
      srLists: [],
      dsrLists: [],
      gets: [],
      moment: moment__WEBPACK_IMPORTED_MODULE_1___default.a,
      loading: false,
      form: new Form({
        OrderApproveDate: moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD"),
        salesRequestId: ''
      })
    };
  },
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  mounted: function mounted() {
    this.getInvoiceSetupInformation();
    this.getDataForShow();
    this.getSrDsrList();
    this.customerType();
  },
  methods: {
    getInvoiceSetupInformation: function getInvoiceSetupInformation() {
      var _this = this;

      var uri = "getInvoiceSetupInformation/3";
      axios.get(uri).then(function (response) {
        _this.gets = response.data.data;
      });
    },
    getDataForShow: function getDataForShow() {
      var _this2 = this;

      this.form.salesRequestId = this.$route.params.id;
      axios.get('/saleOrderFinalListById/' + this.$route.params.id).then(function (res) {
        _this2.requisitionInformation = res.data.data;
        _this2.form.productSupplierId = res.data.data.supplierId;
        _this2.form.customerId = res.data.data.customerId;

        _this2.reqProductList(res.data.data.rendomNumber);
      });
    },
    totalCalculate: function totalCalculate(id) {
      var rendomNumber = $('#rendomNumber-' + id).val();
      var productId = parseFloat($('#productId-' + id).val());
      var brandId = parseFloat($('#brandId-' + id).val());
      var unitId = parseFloat($('#unitId-' + id).val());
      var tpRate = parseFloat($('#tpRate-' + id).val());
      var reqQnt = parseFloat($('#reqQnt-' + id).val());
      var reqPrice = parseFloat($('#reqPrice-' + id).val());
      var carton = parseFloat($('#carton-' + id).val());
      var pcs = parseFloat($('#pcs-' + id).val());
      var unit = $('#unit-' + id).val();
      var pcs1 = 0;
      var totalPcs = 0;
      var totalPrice = 0;

      if (pcs > 0) {
        pcs1 = pcs;
      }

      if (carton > 0) {
        carton = carton;
      } else {
        carton = 0;
      } // this.form.t_productId = productId;
      // this.form.t_brandId = brandId;
      // this.form.t_tpRate = tpRate;
      // this.form.t_unitId = unitId;
      // this.form.t_unit = unit;
      // this.form.t_perPcsQuantity = fixedPcs;


      if (carton > 0) {
        var total = carton + pcs1;
        totalPcs = total;
        var totalSale = reqQnt - totalPcs;
        var totalSalePrice = parseFloat(tpRate * totalSale).toFixed(2);
        $('#total-' + id).val(total);
        $('#totalText-' + id).html(total + ' ' + unit);
        $('#totalSaleText-' + id).html(totalSale);
        $('#totalSale-' + id).val(totalSale);
        $('#totalSalePriceText-' + id).html(totalSalePrice);
        $('#totalSalePrice-' + id).val(totalSalePrice);
      } else {
        $('#total-' + id).val('');
        $('#totalText-' + id).html('');
        $('#totalPriceText-' + id).html('');
        $('#totalPrice-' + id).val('');
      }

      this.form.t_id = id;
      this.form.rendomNumber = rendomNumber;
      this.form.t_carton = carton;
      this.form.t_pcs = pcs1;
      this.form.t_returnQuantity = totalPcs;
      this.form.t_saleQuantity = totalSale;
      this.form.t_totalPrice = totalSalePrice;
      this.form.totalSalesAmount = totalSalePrice;
    },
    totalCalculate1: function totalCalculate1(id) {
      // $(".carton").prop('disabled', true);
      // $(".pcs").prop('disabled', true);
      var rendomNumber = $('#rendomNumber-' + id).val();
      var productId = parseFloat($('#productId-' + id).val());
      var brandId = parseFloat($('#brandId-' + id).val());
      var unitId = parseFloat($('#unitId-' + id).val());
      var tpRate = parseFloat($('#tpRate-' + id).val());
      var reqQnt = parseFloat($('#reqQnt-' + id).val());
      var reqPrice = parseFloat($('#reqPrice-' + id).val());
      var carton = parseFloat($('#carton-' + id).val());
      var pcs = parseFloat($('#pcs-' + id).val());
      var unit = $('#unit-' + id).val(); // this.form.t_productId = productId;
      // this.form.t_brandId = brandId;
      // this.form.t_tpRate = tpRate;
      // this.form.t_unitId = unitId;
      // this.form.t_unit = unit;
      // this.form.t_perPcsQuantity = fixedPcs;
      // this.form.t_carton = carton;
      // this.form.t_pcs = pcs;

      if (pcs > 0) {
        var total = carton;
        var total1 = total + pcs;
        var totalPcs = total1;
        var totalSale = reqQnt - totalPcs;
        var totalSalePrice = parseFloat(tpRate * totalSale).toFixed(2);
        $('#total-' + id).val(total1);
        $('#totalText-' + id).html(total1 + ' ' + unit);
        $('#totalSaleText-' + id).html(totalSale);
        $('#totalSale-' + id).val(totalSale);
        $('#totalSalePriceText-' + id).html(totalSalePrice);
        $('#totalSalePrice-' + id).val(totalSalePrice);
      } else {
        var total = fixedPcs * carton;
        var totalPrice = parseFloat(total * tpRate).toFixed(2);
        var totalPcs = total;
        $('#total-' + id).val(total);
        $('#totalText-' + id).html(total + ' ' + unit);
        $('#totalPriceText-' + id).html(totalPrice);
        $('#totalPrice-' + id).val(totalPrice);
      }

      this.form.t_id = id;
      this.form.rendomNumber = rendomNumber;
      this.form.t_carton = carton;
      this.form.t_pcs = pcs;
      this.form.t_returnQuantity = totalPcs;
      this.form.t_saleQuantity = totalSale;
      this.form.t_totalPrice = totalSalePrice;
      this.form.totalSalesAmount = totalSalePrice; // this.changeData();
    },
    customerIdCatch: function customerIdCatch(value) {
      this.form.customerId = value.salesCustomerEntryId;
    },
    selectSr: function selectSr(value) {
      this.form.srId = value.shopEmployeeEntryId;
    },
    selectDsr: function selectDsr(value) {
      this.form.dsrId = value.shopEmployeeEntryId;
    },
    customerType: function customerType() {
      var _this3 = this;

      axios.get("/shopPriceCustomerType").then(function (res) {
        _this3.form.customerTypeId = res.data.customerType;

        _this3.customerTypeIdCatch();
      });
    },
    customerTypeIdCatch: function customerTypeIdCatch() {
      var _this4 = this;

      axios.get("/customerTypeIdCatch/" + this.form.customerTypeId).then(function (res) {
        _this4.salesCustomerLists = res.data.salesCustomerLists;
      });
    },
    salesCustomerName: function salesCustomerName(_ref) {
      var customerName = _ref.customerName,
          customerPhone = _ref.customerPhone;
      return "".concat(customerName, " \u2014 ").concat(customerPhone);
    },
    customLabelSr: function customLabelSr(_ref2) {
      var fullName = _ref2.fullName,
          phoneNumber = _ref2.phoneNumber;
      return "".concat(fullName, " \u2014 ").concat(phoneNumber);
    },
    customLabel: function customLabel(_ref3) {
      var fullName = _ref3.fullName,
          phoneNumber = _ref3.phoneNumber;
      return "".concat(fullName, " \u2014 ").concat(phoneNumber);
    },
    productListShows: function productListShows() {
      var _this5 = this;

      axios.get("/productName").then(function (res) {
        _this5.productNameLists = res.data.productNameList;
      });
    },
    ShowDataLists: function ShowDataLists() {
      var _this6 = this;

      axios.get("/productBrandListPurchase").then(function (res) {
        _this6.newBrandLists = res.data.shopProductBrandList;
      });
    },
    productSupplierList: function productSupplierList() {
      var _this7 = this;

      axios.get("/shopWishProductSupplier").then(function (res) {
        _this7.productSupplierLists = res.data.productSupplierList;
      });
    },
    reqProductList: function reqProductList(value) {
      var _this8 = this;

      axios.get("/requisitionProductList/" + value).then(function (res) {
        _this8.productNameLists = res.data.productList;
      });
    },
    getSrDsrList: function getSrDsrList() {
      var _this9 = this;

      axios.get("/getSrDsrList").then(function (res) {
        _this9.srLists = res.data.srList;
        _this9.dsrLists = res.data.dsrList;
      });
    },
    changeData: function changeData() {
      var _this10 = this;

      $(".carton").prop('disabled', true);
      $(".pcs").prop('disabled', true);
      var url = 'orderReceiveRequest';
      this.form.post(url).then(function (response) {
        _this10.form.totalSalesAmount = response.data.total;
        $(".carton").prop('disabled', false);
        $(".pcs").prop('disabled', false);
      })["catch"](function (error) {
        $(".carton").prop('disabled', false);
        $(".pcs").prop('disabled', false);
      });
    },
    orderSubmit: function orderSubmit() {
      var _this11 = this;

      this.loading = true;
      var url = 'salesProductEntryDealerApprove/' + this.form.salesRequestId;
      axios.get(url).then(function (res) {
        Toast.fire({
          icon: "success",
          title: "Order Submit Successful."
        });

        _this11.$router.push('/order@final@list'); // this.form.productSupplierListId = '';
        // this.form.brandListId = '';
        // this.productNameLists = [];
        // this.view();
        // this.form.reset();
        // this.form.rendomNumber = '',
        // this.form.OrderRequestDate = moment().format("YYYY-MM-DD"),


        _this11.loading = false;
      })["catch"](function (res) {
        _this11.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/dealer/report/viewSalesFinalOrder.vue?vue&type=template&id=7f5d6a58&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/dealer/report/viewSalesFinalOrder.vue?vue&type=template&id=7f5d6a58& ***!
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
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "supplier-entry py-4 px-2" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "card-body table-responsive bg-white",
            attrs: { id: "salesReport" }
          },
          [
            _c(
              "table",
              {
                staticClass: "table table-hover table-striped table-bordered",
                staticStyle: { width: "100%" },
                attrs: { id: "example" }
              },
              [
                _c("tr", [
                  _c(
                    "th",
                    { staticClass: "text-center", attrs: { colspan: "3" } },
                    [_vm._v(" " + _vm._s(_vm.gets.companyName) + " ")]
                  )
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", { staticStyle: { width: "325px" } }, [
                    _vm._v(" DSR : "),
                    _vm.requisitionInformation.customer
                      ? _c("span", [
                          _vm._v(
                            _vm._s(
                              _vm.requisitionInformation.customer.customerName
                            )
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass: "text-center",
                      staticStyle: { width: "400px" }
                    },
                    [
                      _vm.requisitionInformation.supplier
                        ? _c("span", [
                            _vm._v(
                              " " +
                                _vm._s(
                                  _vm.requisitionInformation.supplier
                                    .productSupplierName
                                )
                            )
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("td", { staticStyle: { width: "150px" } }, [
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm
                            .moment(_vm.requisitionInformation.OrderRequestDate)
                            .format("DD MMMM YYYY")
                        ) +
                        " "
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(2)
              ]
            ),
            _vm._v(" "),
            _c(
              "table",
              { staticClass: "table table-bordered table-striped table-hover" },
              [
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.productNameLists, function(
                      productNameList,
                      index
                    ) {
                      return _c("tr", [
                        _c("td", [_vm._v(_vm._s(++index))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(productNameList.productName) + "  ")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            " " +
                              _vm._s(
                                parseFloat(productNameList.tpRate).toFixed(2)
                              ) +
                              " "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(productNameList.perCarton) +
                              "  " +
                              _vm._s(productNameList.perCartonUnitName) +
                              "  "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(productNameList.cartonRequest) + " ")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(productNameList.pieceRequest) + " ")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(productNameList.totalPieceRequest) +
                              "  " +
                              _vm._s(productNameList.perCartonUnitName) +
                              " "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(productNameList.totalPriceRequest) + " Tk "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(productNameList.totalPieceGood) + "  ")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(productNameList.totalPieceDamage) + "  "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(productNameList.totalPieceReturn) + "  "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(productNameList.totalPieceSale) + "  ")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(productNameList.totalPriceSale) + "  ")
                        ])
                      ])
                    }),
                    _vm._v(" "),
                    _vm._m(4),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        { staticClass: "text-right", attrs: { colspan: "12" } },
                        [_vm._v(" Total Sale Amount ")]
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " +
                            _vm._s(
                              _vm.requisitionInformation.totalSalesAmount
                            ) +
                            " "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        { staticClass: "text-right", attrs: { colspan: "12" } },
                        [_vm._v(" Pev. Due ")]
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " +
                            _vm._s(_vm.requisitionInformation.previousDue) +
                            " "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        { staticClass: "text-right", attrs: { colspan: "12" } },
                        [_vm._v(" Sub Total ")]
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " +
                            _vm._s(
                              _vm.requisitionInformation.currentTotalAmount
                            ) +
                            " "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        { staticClass: "text-right", attrs: { colspan: "12" } },
                        [_vm._v(" Cash Collection ")]
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " +
                            _vm._s(
                              _vm.requisitionInformation.currentPaidAmount
                            ) +
                            " "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        { staticClass: "text-right", attrs: { colspan: "12" } },
                        [_vm._v(" Bank Collection ")]
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " +
                            _vm._s(_vm.requisitionInformation.mobileAmount) +
                            " \n                "
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.requisitionInformation.receiverAccNo) +
                            "\n                 "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        { staticClass: "text-right", attrs: { colspan: "12" } },
                        [_vm._v(" Total Collection ")]
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " +
                            _vm._s(
                              _vm.requisitionInformation.currentPaidAmount +
                                _vm.requisitionInformation.mobileAmount
                            ) +
                            " "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        { staticClass: "text-right", attrs: { colspan: "12" } },
                        [_vm._v("Customer Due ")]
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " +
                            _vm._s(_vm.requisitionInformation.currentDue) +
                            " "
                        )
                      ])
                    ])
                  ],
                  2
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.orderSubmit()
                  }
                }
              },
              [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary float-right",
                    attrs: { disabled: _vm.loading, type: "submit" }
                  },
                  [
                    _vm.loading
                      ? _c("span", {
                          staticClass: "spinner-border spinner-border-sm",
                          attrs: { role: "status", "aria-hidden": "true" }
                        })
                      : _c("span", { staticClass: "mr-2 opacity-7" }, [
                          _c("i", { staticClass: "fa fa-paper-plane" })
                        ]),
                    _vm._v("\n                              Approve ")
                  ]
                )
              ]
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
    return _c(
      "div",
      { staticClass: "card-header-tab card-header alert-info" },
      [
        _c("h4", [
          _c("i", {
            staticClass:
              "header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          }),
          _vm._v("\n          Sales Order view")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-info float-right mr-2",
        attrs: { id: "printInvoice", onclick: "jQuery('#salesReport').print()" }
      },
      [
        _c("i", { staticClass: "fa fa-print" }),
        _vm._v(" Print\n                              ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "3" } }, [_vm._v(" Market: ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("SL")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("T.P Rate")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v(" Carton or Cais ")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { colspan: "4" } }, [
          _vm._v(" Receive ")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { colspan: "3" } }, [
          _vm._v(" Return ")
        ]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v(" Total Sale  ")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v(" Sales Price ")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", [_vm._v("Carton")]),
        _vm._v(" "),
        _c("th", [_vm._v("PCs")]),
        _vm._v(" "),
        _c("th", [_vm._v("T.Qnt")]),
        _vm._v(" "),
        _c("th", [_vm._v("T.Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Good")]),
        _vm._v(" "),
        _c("th", [_vm._v("Damaged")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [_c("td", { attrs: { colspan: "13" } }, [_vm._v("   ")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/dealer/report/viewSalesFinalOrder.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/admin/page/dealer/report/viewSalesFinalOrder.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewSalesFinalOrder_vue_vue_type_template_id_7f5d6a58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewSalesFinalOrder.vue?vue&type=template&id=7f5d6a58& */ "./resources/js/admin/page/dealer/report/viewSalesFinalOrder.vue?vue&type=template&id=7f5d6a58&");
/* harmony import */ var _viewSalesFinalOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewSalesFinalOrder.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/dealer/report/viewSalesFinalOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _viewSalesFinalOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _viewSalesFinalOrder_vue_vue_type_template_id_7f5d6a58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _viewSalesFinalOrder_vue_vue_type_template_id_7f5d6a58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/dealer/report/viewSalesFinalOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/dealer/report/viewSalesFinalOrder.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/admin/page/dealer/report/viewSalesFinalOrder.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSalesFinalOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewSalesFinalOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/dealer/report/viewSalesFinalOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSalesFinalOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/dealer/report/viewSalesFinalOrder.vue?vue&type=template&id=7f5d6a58&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/admin/page/dealer/report/viewSalesFinalOrder.vue?vue&type=template&id=7f5d6a58& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSalesFinalOrder_vue_vue_type_template_id_7f5d6a58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewSalesFinalOrder.vue?vue&type=template&id=7f5d6a58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/dealer/report/viewSalesFinalOrder.vue?vue&type=template&id=7f5d6a58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSalesFinalOrder_vue_vue_type_template_id_7f5d6a58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSalesFinalOrder_vue_vue_type_template_id_7f5d6a58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);