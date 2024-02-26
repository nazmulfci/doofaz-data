(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales@order"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/dealer/sales@order.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/dealer/sales@order.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      srStatus: 0,
      dsrStatus: 0,
      salesCustomerLists: [],
      requisitionInformations: [],
      srLists: [],
      dsrLists: [],
      moment: moment__WEBPACK_IMPORTED_MODULE_1___default.a,
      loading: false,
      form: new Form({
        rendomNumber: new Date().getTime(),
        productSupplierId: '',
        brandId: '',
        productId: '',
        customerTypeId: '',
        customerId: '',
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
        OrderRequestDate: moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD")
      })
    };
  },
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  mounted: function mounted() {
    this.view();
    this.productSupplierList();
    this.getSrDsrList();
    this.customerType();
  },
  methods: {
    totalCalculate: function totalCalculate(id) {
      var productId = parseFloat($('#productId-' + id).val());
      var brandId = parseFloat($('#brandId-' + id).val());
      var colorId = parseFloat($('#colorId-' + id).val());
      var sizeId = parseFloat($('#sizeId-' + id).val());
      var unitId = parseFloat($('#unitId-' + id).val());
      var priceTypeId = parseFloat($('#priceTypeId-' + id).val());
      var tpRate = $('#tpRate-' + id).val();
      var purchaseRate = $('#purchaseRate-' + id).val();
      var fixedPcs = parseFloat($('#pcsQuantity-' + id).val());
      var carton1 = parseFloat($('#carton-' + id).val());
      var pcs = parseFloat($('#pcs-' + id).val());
      var availableStock = parseFloat($('#availableStock-' + id).val());
      var unit = $('#unit-' + id).val();
      var pcs1 = 0;
      var totalPcs = 0;
      var totalPrice = 0;

      if (pcs > 0) {
        pcs1 = pcs;
      }

      if (carton1 > 0) {
        var carton = carton1;
      } else {
        var carton = 0;
      }

      this.form.t_productId = productId;
      this.form.t_brandId = brandId;
      this.form.t_colorId = colorId;
      this.form.t_sizeId = sizeId;
      this.form.t_tpRate = tpRate;
      this.form.t_purchaseRate = purchaseRate;
      this.form.t_priceTypeId = priceTypeId;
      this.form.t_unitId = unitId;
      this.form.t_unit = unit;
      this.form.t_perPcsQuantity = fixedPcs;
      this.form.t_carton = carton;
      this.form.t_pcs = pcs1;
      var total = fixedPcs * carton + pcs1; // alert(availableStock);

      if (total > availableStock) {
        Toast.fire({
          icon: "error",
          title: "Invalid Stock. available stock " + availableStock + ' ' + unit
        });
        $('#carton-' + id).val('');
        $('#total-' + id).val('');
        $('#totalText-' + id).html('');
        $('#totalPriceText-' + id).html('');
        $('#totalPrice-' + id).val('');
      } else {
        totalPrice = parseFloat(total * tpRate).toFixed(2);
        totalPcs = total;
        $('#total-' + id).val(total);
        $('#totalText-' + id).html(total + ' ' + unit);
        $('#totalPriceText-' + id).html(totalPrice);
        $('#totalPrice-' + id).val(totalPrice);
      }

      this.form.t_totalPcs = totalPcs;
      this.form.t_totalPrice = totalPrice;
      this.changeData();
    },
    totalCalculate1: function totalCalculate1(id) {
      var productId = parseFloat($('#productId-' + id).val());
      var brandId = parseFloat($('#brandId-' + id).val());
      var colorId = parseFloat($('#colorId-' + id).val());
      var sizeId = parseFloat($('#sizeId-' + id).val());
      var unitId = parseFloat($('#unitId-' + id).val());
      var priceTypeId = parseFloat($('#priceTypeId-' + id).val());
      var tpRate = parseFloat($('#tpRate-' + id).val());
      var purchaseRate = parseFloat($('#purchaseRate-' + id).val());
      var fixedPcs = parseFloat($('#pcsQuantity-' + id).val());
      var carton1 = parseFloat($('#carton-' + id).val());
      var pcs = parseFloat($('#pcs-' + id).val());
      var availableStock = parseFloat($('#availableStock-' + id).val());
      var unit = $('#unit-' + id).val();

      if (carton1 > 0) {
        var carton = carton1;
      } else {
        var carton = 0;
      }

      this.form.t_productId = productId;
      this.form.t_brandId = brandId;
      this.form.t_colorId = colorId;
      this.form.t_sizeId = sizeId;
      this.form.t_tpRate = tpRate;
      this.form.t_purchaseRate = purchaseRate;
      this.form.t_unitId = unitId;
      this.form.t_priceTypeId = priceTypeId;
      this.form.t_unit = unit;
      this.form.t_perPcsQuantity = fixedPcs;
      this.form.t_carton = carton;
      this.form.t_pcs = pcs;

      if (carton > 0) {
        var total = fixedPcs * carton;
      } else {
        var total = 0;
      }

      var total1 = total + pcs;

      if (total1 > availableStock) {
        var totalPcs = 0;
        var totalPrice = 0;
        Toast.fire({
          icon: "error",
          title: "Invalid Stock. available stock " + availableStock + ' ' + unit
        }); //this.changeData();

        $('#carton-' + id).val('');
        $('#pcs-' + id).val('');
        $('#total-' + id).val('');
        $('#totalText-' + id).html('');
        $('#totalPriceText-' + id).html('');
        $('#totalPrice-' + id).val('');
      } else {
        if (fixedPcs > pcs) {
          var totalPcs = total1;
          var totalPrice = parseFloat(total1 * tpRate).toFixed(2);
          $('#total-' + id).val(total1);
          $('#totalText-' + id).html(total1 + ' ' + unit);
          $('#totalPriceText-' + id).html(totalPrice);
          $('#totalPrice-' + id).val(totalPrice);
        } else {
          var totalPcs = total;
          var totalPrice = parseFloat(total * tpRate).toFixed(2);
          $('#pcs-' + id).val('');
          $('#total-' + id).val(total);
          $('#totalText-' + id).html(total + ' ' + unit);
          $('#totalPriceText-' + id).html(totalPrice);
          $('#totalPrice-' + id).val(totalPrice); // Toast.fire({
          //         icon: "error",
          //         title: "Sorry...",
          //       });
        }
      }

      this.form.t_totalPcs = totalPcs;
      this.form.t_totalPrice = totalPrice;
      this.changeData();
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
      var _this = this;

      axios.get("/shopPriceCustomerType").then(function (res) {
        _this.form.customerTypeId = res.data.customerType;

        _this.customerTypeIdCatch();
      });
    },
    customerTypeIdCatch: function customerTypeIdCatch() {
      var _this2 = this;

      axios.get("/customerTypeIdCatch/" + this.form.customerTypeId).then(function (res) {
        _this2.salesCustomerLists = res.data.salesCustomerLists;
      });
    },
    view: function view() {
      var _this3 = this;

      axios.get("/saleOrderRequestList").then(function (res) {
        _this3.requisitionInformations = res.data.data;
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
      var _this4 = this;

      axios.get("/productName").then(function (res) {
        _this4.productNameLists = res.data.productNameList;
      });
    },
    ShowDataLists: function ShowDataLists() {
      var _this5 = this;

      axios.get("/productBrandListPurchase").then(function (res) {
        _this5.newBrandLists = res.data.shopProductBrandList;
      });
    },
    productSupplierList: function productSupplierList() {
      var _this6 = this;

      axios.get("/shopWishProductSupplier").then(function (res) {
        _this6.productSupplierLists = res.data.productSupplierList;
      });
    },
    productSupplierId: function productSupplierId(value) {
      var _this7 = this;

      this.form.productSupplierId = value.productSupplierId;
      axios.get("/supplierWiseBrandList/" + value.productSupplierId).then(function (res) {
        _this7.newBrandLists = res.data.brandList;
        _this7.productNameLists = res.data.productList;
      });
    },
    selectBrandId: function selectBrandId(value) {
      var _this8 = this;

      this.form.brandId = value.productBrandEntryId;
      axios.get("/brandWiseProductList/" + this.form.productSupplierId + '/' + value.productBrandEntryId).then(function (res) {
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

      // $(".carton").prop('disabled', true);
      // $(".pcs").prop('disabled', true);
      this.loading = true;
      var url = 'saleOrderRequest';
      this.form.post(url).then(function (response) {
        // $(".carton").prop('disabled', false);
        // $(".pcs").prop('disabled', false);
        _this10.loading = false;
        _this10.form.totalAmount = response.data.total;
      })["catch"](function (error) {
        // $(".carton").prop('disabled', false);
        // $(".pcs").prop('disabled', false);
        _this10.loading = false;
      });
    },
    orderSubmit: function orderSubmit() {
      var _this11 = this;

      this.loading = true;
      var url = 'saleOrderSubmit';
      this.form.post(url).then(function (res) {
        Toast.fire({
          icon: "success",
          title: "Order Submit Successful."
        });
        _this11.form.productSupplierListId = '';
        _this11.form.brandListId = '';
        _this11.productNameLists = [];

        _this11.view();

        _this11.form.reset();

        _this11.form.rendomNumber = new Date().getTime(), _this11.form.OrderRequestDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD"), _this11.loading = false;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/dealer/sales@order.vue?vue&type=template&id=60fd5156&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/dealer/sales@order.vue?vue&type=template&id=60fd5156& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "card-body table-responsive bg-white" }, [
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
                        _c(
                          "form",
                          {
                            attrs: { method: "" },
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.changeData()
                              }
                            }
                          },
                          [
                            _c("table", {}, [
                              _c("tr", [
                                _c(
                                  "td",
                                  [
                                    _c("multiselect", {
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "productSupplierId"
                                        )
                                      },
                                      staticStyle: {
                                        padding: "0px !important",
                                        "padding-bottom": "3px !important"
                                      },
                                      attrs: {
                                        label: "productSupplierName",
                                        placeholder: "Select Supplier",
                                        options: _vm.productSupplierLists,
                                        "show-labels": false
                                      },
                                      on: { input: _vm.productSupplierId },
                                      model: {
                                        value: _vm.form.productSupplierListId,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "productSupplierListId",
                                            $$v
                                          )
                                        },
                                        expression: "form.productSupplierListId"
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
                                    _c("multiselect", {
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "brandId"
                                        )
                                      },
                                      staticStyle: {
                                        padding: "0px !important",
                                        "padding-bottom": "3px !important"
                                      },
                                      attrs: {
                                        label: "productBrandName",
                                        placeholder: "Brand",
                                        options: _vm.newBrandLists,
                                        "show-labels": false
                                      },
                                      on: { input: _vm.selectBrandId },
                                      model: {
                                        value: _vm.form.brandListId,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "brandListId", $$v)
                                        },
                                        expression: "form.brandListId"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ])
                          ]
                        )
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
            { staticClass: "table table-bordered table-striped table-hover" },
            [
              _vm._m(1),
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
                              parseFloat(productNameList.tpRate).toFixed(3)
                            ) +
                            "\n              "
                        ),
                        _c("input", {
                          attrs: {
                            id: "tpRate-" + productNameList.productSerialId,
                            type: "hidden"
                          },
                          domProps: { value: productNameList.tpRate }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            id:
                              "purchaseRate-" + productNameList.productSerialId,
                            type: "hidden"
                          },
                          domProps: { value: productNameList.purchaseRate }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            id: "productId-" + productNameList.productSerialId,
                            type: "hidden"
                          },
                          domProps: { value: productNameList.productNameId }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            id: "brandId-" + productNameList.productSerialId,
                            type: "hidden"
                          },
                          domProps: { value: productNameList.brandId }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            id: "colorId-" + productNameList.productSerialId,
                            type: "hidden"
                          },
                          domProps: { value: productNameList.colorId }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            id: "sizeId-" + productNameList.productSerialId,
                            type: "hidden"
                          },
                          domProps: { value: productNameList.sizeId }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            id:
                              "priceTypeId-" + productNameList.productSerialId,
                            type: "hidden"
                          },
                          domProps: { value: productNameList.priceTypeId }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            id:
                              "availableStock-" +
                              productNameList.productSerialId,
                            type: "hidden"
                          },
                          domProps: { value: productNameList.availableStock }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            id:
                              "availableCarton-" +
                              productNameList.productSerialId,
                            type: "hidden"
                          },
                          domProps: { value: productNameList.availableCarton }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            id: "disabled-" + productNameList.productSerialId,
                            type: "hidden"
                          },
                          domProps: { value: productNameList.disabled }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        productNameList.disabled
                          ? _c("span", [_vm._v("1")])
                          : _c("span", [
                              _vm._v(_vm._s(productNameList.carton))
                            ]),
                        _vm._v(
                          "\n               " +
                            _vm._s(productNameList.unit) +
                            " \n              "
                        ),
                        _c("input", {
                          attrs: {
                            id:
                              "pcsQuantity-" + productNameList.productSerialId,
                            type: "hidden"
                          },
                          domProps: { value: productNameList.carton }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            id: "unitId-" + productNameList.productSerialId,
                            type: "hidden"
                          },
                          domProps: { value: productNameList.unitId }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            id: "unit-" + productNameList.productSerialId,
                            type: "hidden"
                          },
                          domProps: { value: productNameList.unit }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          staticClass: "form-control carton",
                          staticStyle: { width: "100px" },
                          attrs: {
                            id: "carton-" + productNameList.productSerialId,
                            placeholder: productNameList.availableCarton,
                            disabled: productNameList.disabled
                              ? ""
                              : _vm.disabled,
                            onkeyup:
                              "value=value.replace(/[^0-9^\\.]+/g,'').replace('.','$#$').replace(/\\./g,'').replace('$#$','.').replace(/^0+/, '')",
                            type: "text"
                          },
                          on: {
                            keyup: function($event) {
                              return _vm.totalCalculate(
                                productNameList.productSerialId
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          staticClass: "form-control pcs",
                          staticStyle: { width: "100px" },
                          attrs: {
                            id: "pcs-" + productNameList.productSerialId,
                            placeholder: productNameList.availableStock,
                            onkeyup:
                              "value=value.replace(/[^0-9^\\.]+/g,'').replace('.','$#$').replace(/\\./g,'').replace('$#$','.').replace(/^0+/, '')",
                            type: "text"
                          },
                          on: {
                            keyup: function($event) {
                              return _vm.totalCalculate1(
                                productNameList.productSerialId
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("span", {
                          attrs: {
                            id: "totalText-" + productNameList.productSerialId
                          }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          staticStyle: { width: "100px" },
                          attrs: {
                            id: "total-" + productNameList.productSerialId,
                            type: "hidden"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c("td", [
                        _c("span", {
                          attrs: {
                            id:
                              "totalPriceText-" +
                              productNameList.productSerialId
                          }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          staticStyle: { width: "100px" },
                          attrs: {
                            id: "totalPrice-" + productNameList.productSerialId,
                            type: "hidden"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td")
                    ])
                  }),
                  _vm._v(" "),
                  _c("tr", [
                    _c(
                      "td",
                      { staticClass: "text-right", attrs: { colspan: "10" } },
                      [_vm._v("  Total")]
                    ),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "  " +
                          _vm._s(parseFloat(_vm.form.totalAmount).toFixed(3))
                      )
                    ]),
                    _vm._v(" "),
                    _c("td")
                  ])
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
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
                        _c(
                          "form",
                          {
                            attrs: { method: "" },
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.orderSubmit()
                              }
                            }
                          },
                          [
                            _c("table", {}, [
                              _c("tr", [
                                _c(
                                  "td",
                                  [
                                    _vm.customerStatus
                                      ? _c("multiselect", {
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
                                            "custom-label":
                                              _vm.salesCustomerName
                                          },
                                          on: { input: _vm.customerIdCatch },
                                          model: {
                                            value: _vm.form.customerListId,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "customerListId",
                                                $$v
                                              )
                                            },
                                            expression: "form.customerListId"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "customerListId"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _vm.srStatus
                                      ? _c("multiselect", {
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "srListId"
                                            )
                                          },
                                          staticStyle: {
                                            padding: "0px !important",
                                            "padding-bottom": "3px !important"
                                          },
                                          attrs: {
                                            placeholder: "Select SR",
                                            options: _vm.srLists,
                                            "show-labels": false,
                                            "custom-label": _vm.customLabelSr
                                          },
                                          on: { input: _vm.selectSr },
                                          model: {
                                            value: _vm.form.srListId,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "srListId",
                                                $$v
                                              )
                                            },
                                            expression: "form.srListId"
                                          }
                                        })
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _vm.dsrStatus
                                      ? _c("multiselect", {
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "dsrListId"
                                            )
                                          },
                                          staticStyle: {
                                            padding: "0px !important",
                                            "padding-bottom": "3px !important"
                                          },
                                          attrs: {
                                            label: "fullName",
                                            placeholder: "Select DSR",
                                            options: _vm.dsrLists,
                                            "show-labels": false,
                                            "custom-label": _vm.customLabel
                                          },
                                          on: { input: _vm.selectDsr },
                                          model: {
                                            value: _vm.form.dsrListId,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "dsrListId",
                                                $$v
                                              )
                                            },
                                            expression: "form.dsrListId"
                                          }
                                        })
                                      : _vm._e()
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
                                        "\n                              mt-3\n                              btn-pill btn-shadow \n                              fsize-1\n                              btn btn-primary float-right\n                            ",
                                      attrs: {
                                        type: "button",
                                        disabled: _vm.loading
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.orderSubmit()
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
                                                staticClass: "fa fa-paper-plane"
                                              })
                                            ]
                                          ),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "mr-1" }, [
                                        _vm._v(" Submit ")
                                      ])
                                    ]
                                  )
                                ])
                              ])
                            ])
                          ]
                        )
                      ])
                    ],
                    1
                  )
                ])
              ])
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card mt-5" }, [
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "supplier-entry py-4 px-2" }, [
        _c("div", { staticClass: "card-body table-responsive bg-white" }, [
          _c(
            "table",
            {
              staticClass: "table table-hover table-striped table-bordered",
              staticStyle: { width: "100%" },
              attrs: { id: "example" }
            },
            [
              _vm._m(3),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.requisitionInformations, function(info, index) {
                  return _c("tr", { key: info.id }, [
                    _c("td", [_vm._v(_vm._s(++index))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm
                              .moment(info.OrderRequestDate)
                              .format("DD MMMM YYYY")
                          ) +
                          " "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      info.supplier
                        ? _c("span", [
                            _vm._v(_vm._s(info.supplier.productSupplierName))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      info.customer
                        ? _c("span", [
                            _vm._v(_vm._s(info.customer.customerName))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(info.totalPriceRequest))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "btn-wide btn-pill btn btn-outline-primary btn-hover-shine",
                            attrs: { to: "/viewSalesOrder" + info.id }
                          },
                          [
                            _c("i", { staticClass: "fa fa-eye" }),
                            _vm._v(" View ")
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "btn-wide btn-pill btn btn-outline-primary btn-hover-shine",
                            attrs: { to: "/receiveSalesOrder" + info.id }
                          },
                          [
                            _c("i", { staticClass: "fa fa-eye" }),
                            _vm._v(" Edit ")
                          ]
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
          _vm._v("\n          Sales Order ")
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
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("SL")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("T.P Rate")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v(" Carton or Cais ")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { colspan: "3" } }, [
          _vm._v(" Receive ")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { colspan: "3" } }, [
          _vm._v(" Return ")
        ]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v(" Sales Price ")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v(" Total Sale ")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", [_vm._v("Carton")]),
        _vm._v(" "),
        _c("th", [_vm._v("PCs")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total")]),
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
    return _c(
      "div",
      { staticClass: "card-header-tab card-header alert-info" },
      [
        _c("h4", [
          _c("i", {
            staticClass:
              "header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          }),
          _vm._v("\n          View Information ")
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
        _c("th", [_vm._v("SL")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Company")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Customer ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Amount ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" View ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Edit ")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/dealer/sales@order.vue":
/*!********************************************************!*\
  !*** ./resources/js/admin/page/dealer/sales@order.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sales_order_vue_vue_type_template_id_60fd5156___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales@order.vue?vue&type=template&id=60fd5156& */ "./resources/js/admin/page/dealer/sales@order.vue?vue&type=template&id=60fd5156&");
/* harmony import */ var _sales_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales@order.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/dealer/sales@order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sales_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sales_order_vue_vue_type_template_id_60fd5156___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sales_order_vue_vue_type_template_id_60fd5156___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/dealer/sales@order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/dealer/sales@order.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/admin/page/dealer/sales@order.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./sales@order.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/dealer/sales@order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/dealer/sales@order.vue?vue&type=template&id=60fd5156&":
/*!***************************************************************************************!*\
  !*** ./resources/js/admin/page/dealer/sales@order.vue?vue&type=template&id=60fd5156& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_order_vue_vue_type_template_id_60fd5156___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./sales@order.vue?vue&type=template&id=60fd5156& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/dealer/sales@order.vue?vue&type=template&id=60fd5156&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_order_vue_vue_type_template_id_60fd5156___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_order_vue_vue_type_template_id_60fd5156___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);