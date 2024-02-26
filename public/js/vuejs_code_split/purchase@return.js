(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["purchase@return"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/purchase@return.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase@report/purchase@return.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        purchaseReturnDate: '',
        purchaseInvoiceNo: '',
        purchaseSupplier: '',
        grandTotal: '',
        invoiceDiscount: '',
        supplierPayable: '',
        totalProductCost: '',
        currentPayable: ''
      }),
      invoiceNo: '',
      formStatus: false,
      invoiceYesStatus: false,
      invoiceNoStatus: false,
      invoiceLoadingStatus: false,
      purchaseInvoiceReports: {},
      gets: "",
      invoiceInfo: "",
      allProductBrandLists: [],
      invoiceProductLists: [],
      purchaseProductList: [],
      productBrandLists: [],
      purchaseTypes: [],
      unitLists: [],
      countryLists: [],
      supplierInfo: "",
      colorLists: {},
      sizeLists: {}
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  mounted: function mounted() {
    // this.productSupplierList();
    this.colorList();
    this.sizeList();
    this.getInvoiceSetupInformation();
    this.productBrandList();
  },
  methods: {
    returnSubmit: function returnSubmit() {
      var _this = this;

      $('.sbtnd').show();
      $('.sbtn').hide();
      this.form.post("/returnPurchase").then(function (res) {
        if (res.data.data) {
          _this.invoiceNo = '';
          _this.invoiceYesStatus = false;
          _this.invoiceNoStatus = false;
          _this.invoiceLoadingStatus = false;
          Toast.fire({
            icon: "success",
            title: "Return Invoice Create Successful."
          });
        } else {
          Toast.fire({
            icon: "error",
            title: "Something Missing."
          });
          $('.sbtnd').hide();
          $('.sbtn').show();
        }
      })["catch"](function (res) {
        Toast.fire({
          icon: "error",
          title: "Something wrong"
        });
        $('.sbtnd').hide();
        $('.sbtn').show();
      });
    },
    checkStock: function checkStock(id) {
      var unitId = parseFloat($('#unitId-' + id).val());
      $('#newQuantity-' + id).attr('placeholder', 'stock=0');
      axios.get("/purchaseReturnCheckQuantity/" + id + '/' + unitId).then(function (res) {
        $('#newQuantity-' + id).attr('placeholder', 'stock=' + res.data.stock);
        $('#newQuantity1-' + id).val(res.data.stock);
      });
    },
    productReturn: function productReturn(id) {
      var _this2 = this;

      $('#btnd-' + id).show();
      $('#btn-' + id).hide();
      var quantity = parseFloat($('#newQuantity-' + id).val());
      var unitId = parseFloat($('#unitId-' + id).val());
      var returnable = parseFloat($('#newQuantity1-' + id).val());

      if (quantity > returnable) {
        Toast.fire({
          icon: "error",
          title: "Invalid Return Quantity."
        });
        $('#btnd-' + id).hide();
        $('#btn-' + id).show();
      } else {
        if (quantity > 0) {
          axios.get("/purchaseProductReturnEntry/" + id + '/' + quantity + '/' + unitId).then(function (res) {
            if (res.data.status == 1) {
              $('#td-' + id).html(quantity + ' ' + res.data.unitName);
              $('#unitPrice-' + id).html(res.data.unitPrice);
              $('#totalPrice-' + id).html(res.data.totalPrice);
              $('#discountAmount-' + id).html(res.data.discountAmount);
              $('#totalWithDiscount-' + id).html(res.data.totalWithDiscount);
              $('#grandTotal').html(res.data.grandTotal);
              $('#invoiceDiscount').html(res.data.invoiceDiscount);
              $('#totalProductCost').html(res.data.totalProductCost);
              $('#supplierPayable').html(res.data.supplierPayable);
              $('#currentPayable').html(res.data.currentPayable);
              _this2.form.purchaseReturnDate = res.data.purchaseReturnDate;
              _this2.form.purchaseInvoiceNo = res.data.purchaseInvoiceNo;
              _this2.form.grandTotal = res.data.grandTotal;
              _this2.form.invoiceDiscount = res.data.invoiceDiscount;
              _this2.form.supplierPayable = res.data.supplierPayable;
              _this2.form.totalProductCost = res.data.totalProductCost;
              _this2.form.currentPayable = res.data.currentPayable;
              _this2.formStatus = true;
            } else {}
          })["catch"](function (res) {
            _this2.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something wrong"
            });
            $('#btnd-' + id).hide();
            $('#btn-' + id).show();
          });
        } else {
          Toast.fire({
            icon: "error",
            title: "Invalid Return Quantity."
          });
          $('#btnd-' + id).hide();
          $('#btn-' + id).show();
        }
      }
    },
    colorList: function colorList() {
      var _this3 = this;

      axios.get("/colorListAll").then(function (res) {
        _this3.colorLists = res.data.colorList;
      });
    },
    sizeList: function sizeList() {
      var _this4 = this;

      axios.get("/sizeListAll").then(function (res) {
        _this4.sizeLists = res.data.sizeList;
      });
    },
    productSupplierList: function productSupplierList() {
      var _this5 = this;

      axios.get("/purchaseInvoiceReport").then(function (res) {
        _this5.purchaseInvoiceReports = res.data.purchaseInvoiceReports;
      });
    },
    productBrandList: function productBrandList() {
      var _this6 = this;

      axios.get("/productBrandList").then(function (res) {
        _this6.allProductBrandLists = res.data.productBrandList;
      });
    },
    getInvoiceSetupInformation: function getInvoiceSetupInformation() {
      var _this7 = this;

      var uri = "getInvoiceSetupInformation/2";
      axios.get(uri).then(function (response) {
        _this7.gets = response.data.data;
      });
    },
    searchInvoice: function searchInvoice() {
      var _this8 = this;

      $('.unitId').val('');
      $('.newQuantity').attr('placeholder', '');
      $('.searchBtn').hide();
      $('.searchBtnLoading').show();
      $('.newQuantity').val('');
      var uri = "searchPurchaseInvoice/" + this.invoiceNo;
      axios.get(uri).then(function (response) {
        if (response.data.invoiceId > 0) {
          _this8.invoiceYesStatus = false;
          _this8.invoiceNoStatus = false;
          _this8.invoiceLoadingStatus = true;

          _this8.viewInvoiceInfo(response.data.invoiceId);
        } else {
          _this8.invoiceLoadingStatus = false;
          _this8.invoiceYesStatus = false;
          _this8.invoiceNoStatus = true;
          $('.searchBtn').show();
          $('.searchBtnLoading').hide();
        }
      });
    },
    viewInvoiceInfo: function viewInvoiceInfo(id) {
      var _this9 = this;

      var uri = 'getInvoiceInfoPurchaseReturn/' + id;
      axios.get(uri).then(function (response) {
        _this9.unitLists = response.data.unitList;
        _this9.countryLists = response.data.countryList;
        _this9.purchaseTypes = response.data.purchaseType;
        _this9.productBrandLists = response.data.productBrandList;
        _this9.supplier_id = response.data.data.productSupplierId;
        _this9.form.purchaseSupplier = response.data.data.productSupplierId;
        _this9.invoiceInfo = response.data.data;
        _this9.invoiceProductLists = response.data.invoiceProductLists;

        if (response.data.supplierInfo) {
          _this9.supplierInfo = response.data.supplierInfo;
        }

        _this9.purchaseProductList = response.data.purchaseProductList;
        _this9.invoiceLoadingStatus = false;
        _this9.invoiceYesStatus = true;
      });
      $('.searchBtn').show();
      $('.searchBtnLoading').hide();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/purchase@return.vue?vue&type=template&id=0e9a7e92&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase@report/purchase@return.vue?vue&type=template&id=0e9a7e92& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card main-card element-block-example" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "supplier-entry py-1 px-1" }, [
        _c("div", { staticClass: "card-body table-responsive bg-white" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col" }),
            _vm._v(" "),
            _c("div", { staticClass: "col" }, [
              _c("table", { staticClass: "table table-bordered" }, [
                _c("tr", [
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.invoiceNo,
                          expression: "invoiceNo"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Invoice No" },
                      domProps: { value: _vm.invoiceNo },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.invoiceNo = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger searchBtnLoading",
                        staticStyle: { display: "none" },
                        attrs: { type: "button" }
                      },
                      [_vm._v(" Search ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary searchBtn",
                        attrs: {
                          type: "button",
                          "data-toggle": "modal",
                          "data-target": "#purchaseId"
                        },
                        on: {
                          click: function($event) {
                            return _vm.searchInvoice()
                          }
                        }
                      },
                      [_vm._v(" Search ")]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col" })
          ]),
          _vm._v(" "),
          _vm.invoiceLoadingStatus
            ? _c("h1", { staticClass: "text-center text-danger" }, [
                _c("span", {
                  staticClass: "spinner-border spinner-border-sm",
                  attrs: { role: "status", "aria-hidden": "true" }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.invoiceNoStatus
            ? _c("h4", { staticClass: "text-center text-danger" }, [
                _vm._v(" Result Not Found ")
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.invoiceYesStatus
            ? _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body p-0" }, [
                    _c(
                      "div",
                      {
                        staticStyle: {
                          "padding-left": "0px !important",
                          "padding-right": "0px !important",
                          "padding-top": "0px !important"
                        },
                        attrs: { id: "invoice" }
                      },
                      [
                        _c("div", { staticClass: "invoice overflow-auto" }, [
                          _c("div", { staticStyle: { "min-width": "600px" } }, [
                            _c("main", [
                              _c("div", { staticClass: "row contacts" }, [
                                _c("div", { staticClass: "col invoice-to" }, [
                                  _vm._m(1),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "address" }, [
                                    _vm._v(
                                      "\n                                      " +
                                        _vm._s(
                                          _vm.supplierInfo.productSupplierName
                                        ) +
                                        "\n                                    "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "address" }, [
                                    _vm._v(
                                      "\n                                      " +
                                        _vm._s(
                                          _vm.supplierInfo
                                            .productSupplierAddress
                                        ) +
                                        "\n                                    "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "email" }, [
                                    _c(
                                      "a",
                                      {
                                        style: "color:" + _vm.gets.themeColor,
                                        attrs: {
                                          href:
                                            "mailto:" +
                                            _vm.supplierInfo.productSupplierMail
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.supplierInfo
                                                .productSupplierMail
                                            )
                                        )
                                      ]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col invoice-details" },
                                  [
                                    _c(
                                      "h4",
                                      {
                                        staticClass: "text-center invoice-id",
                                        style: "color:" + _vm.gets.themeColor
                                      },
                                      [
                                        _c("u", [
                                          _vm._v(
                                            " " + _vm._s(_vm.gets.toText) + " "
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col invoice-details" },
                                  [
                                    _c("div", { staticClass: "date" }, [
                                      _vm._v(
                                        "\n                                      " +
                                          _vm._s(_vm.gets.toText) +
                                          ":\n                                      " +
                                          _vm._s(
                                            _vm.invoiceInfo.purchaseInvoiceNo
                                          ) +
                                          "\n                                    "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "date" }, [
                                      _vm._v(
                                        "\n                                      Purchase Date:\n                                      " +
                                          _vm._s(_vm.invoiceInfo.purchaseDate) +
                                          "\n                                    "
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "table",
                                {
                                  staticClass: "table table-bordered border-0",
                                  attrs: {
                                    border: "0",
                                    cellspacing: "0",
                                    cellpadding: "0"
                                  }
                                },
                                [
                                  _vm._m(2),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    _vm._l(_vm.invoiceProductLists, function(
                                      invoiceProductList,
                                      index
                                    ) {
                                      return _c("tr", [
                                        _c("td", [_vm._v(_vm._s(++index))]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-left" },
                                          _vm._l(
                                            _vm.purchaseProductList,
                                            function(purchaseProductLists) {
                                              return purchaseProductLists.productNameId ==
                                                invoiceProductList.productId
                                                ? _c("span", [
                                                    _vm._v(
                                                      "\n                                          " +
                                                        _vm._s(
                                                          purchaseProductLists.productName
                                                        ) +
                                                        "\n                                        "
                                                    )
                                                  ])
                                                : _vm._e()
                                            }
                                          ),
                                          0
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          _vm._l(
                                            _vm.allProductBrandLists,
                                            function(allProductBrandList) {
                                              return allProductBrandList.productBrandEntryId ==
                                                invoiceProductList.brandId
                                                ? _c("span", [
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(
                                                          allProductBrandList.productBrandName
                                                        ) +
                                                        "\n                                        "
                                                    )
                                                  ])
                                                : _vm._e()
                                            }
                                          ),
                                          0
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _vm._l(_vm.purchaseTypes, function(
                                              purchaseType
                                            ) {
                                              return purchaseType.id ==
                                                invoiceProductList.purchaseType
                                                ? _c(
                                                    "span",
                                                    { key: purchaseType.id },
                                                    [
                                                      _vm._v(
                                                        "\n                                          " +
                                                          _vm._s(
                                                            purchaseType.purchaseType
                                                          ) +
                                                          "\n                                        "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            }),
                                            _vm._v(" "),
                                            _vm._l(_vm.countryLists, function(
                                              countryList
                                            ) {
                                              return countryList.id ==
                                                invoiceProductList.countryId
                                                ? _c(
                                                    "span",
                                                    { key: countryList.id },
                                                    [
                                                      _c("br"),
                                                      _vm._v(
                                                        "\n                                          (" +
                                                          _vm._s(
                                                            countryList.name
                                                          ) +
                                                          ")\n                                        "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            })
                                          ],
                                          2
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _vm._l(_vm.colorLists, function(
                                              colorList
                                            ) {
                                              return colorList.id ==
                                                invoiceProductList.colorId
                                                ? _c("span", [
                                                    _vm._v(
                                                      _vm._s(
                                                        colorList.colorName
                                                      )
                                                    )
                                                  ])
                                                : _vm._e()
                                            }),
                                            _vm._v(" "),
                                            _vm._l(_vm.sizeLists, function(
                                              sizeList
                                            ) {
                                              return sizeList.id ==
                                                invoiceProductList.sizeId
                                                ? _c("span", [
                                                    _vm._v(
                                                      "/ " +
                                                        _vm._s(
                                                          sizeList.sizeName
                                                        )
                                                    )
                                                  ])
                                                : _vm._e()
                                            })
                                          ],
                                          2
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          {},
                                          [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(
                                                  invoiceProductList.quantity
                                                ) +
                                                " \n                                         "
                                            ),
                                            _vm._l(_vm.unitLists, function(
                                              unitList
                                            ) {
                                              return unitList.uniteEntryId ==
                                                invoiceProductList.unitId
                                                ? _c(
                                                    "span",
                                                    {
                                                      key: unitList.uniteEntryId
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                          " +
                                                          _vm._s(
                                                            unitList.uniteEntryName
                                                          ) +
                                                          "\n                                        "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            }),
                                            _vm._v(" "),
                                            _c("input", {
                                              attrs: {
                                                type: "hidden",
                                                id:
                                                  "quantity-" +
                                                  invoiceProductList.id
                                              },
                                              domProps: {
                                                value:
                                                  invoiceProductList.quantity
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("input", {
                                              attrs: {
                                                type: "hidden",
                                                id:
                                                  "stock-" +
                                                  invoiceProductList.id
                                              },
                                              domProps: {
                                                value: invoiceProductList.stock
                                              }
                                            })
                                          ],
                                          2
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          {
                                            attrs: {
                                              id: "td-" + invoiceProductList.id
                                            }
                                          },
                                          [
                                            _c("table", [
                                              _c("tr", [
                                                _c("td", [
                                                  _c(
                                                    "select",
                                                    {
                                                      staticClass:
                                                        "form-control unitId",
                                                      attrs: {
                                                        id:
                                                          "unitId-" +
                                                          invoiceProductList.id
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          return _vm.checkStock(
                                                            invoiceProductList.id
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "option",
                                                        {
                                                          attrs: { value: "" }
                                                        },
                                                        [_vm._v(" ----- ")]
                                                      ),
                                                      _vm._v(" "),
                                                      _vm._l(
                                                        invoiceProductList.singleUnitList,
                                                        function(singleList) {
                                                          return _c(
                                                            "option",
                                                            {
                                                              domProps: {
                                                                value:
                                                                  singleList.unitId
                                                              }
                                                            },
                                                            _vm._l(
                                                              _vm.unitLists,
                                                              function(
                                                                unitList
                                                              ) {
                                                                return unitList.uniteEntryId ==
                                                                  singleList.unitId
                                                                  ? _c("span", [
                                                                      _vm._v(
                                                                        " " +
                                                                          _vm._s(
                                                                            unitList.uniteEntryName
                                                                          )
                                                                      )
                                                                    ])
                                                                  : _vm._e()
                                                              }
                                                            ),
                                                            0
                                                          )
                                                        }
                                                      )
                                                    ],
                                                    2
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _c("input", {
                                                    attrs: {
                                                      type: "hidden",
                                                      id:
                                                        "newQuantity1-" +
                                                        invoiceProductList.id
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("input", {
                                                    staticClass:
                                                      "form-control newQuantity",
                                                    attrs: {
                                                      type: "number",
                                                      id:
                                                        "newQuantity-" +
                                                        invoiceProductList.id,
                                                      min: "1",
                                                      step: "0.01"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("input", {
                                                    attrs: {
                                                      type: "hidden",
                                                      id:
                                                        "returnable-" +
                                                        invoiceProductList.id
                                                    },
                                                    domProps: {
                                                      value:
                                                        invoiceProductList.returnable
                                                    }
                                                  })
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-danger",
                                                      staticStyle: {
                                                        display: "none"
                                                      },
                                                      attrs: {
                                                        id:
                                                          "btnd-" +
                                                          invoiceProductList.id
                                                      }
                                                    },
                                                    [
                                                      _c("span", {
                                                        staticClass:
                                                          "spinner-border spinner-border-sm",
                                                        attrs: {
                                                          role: "status",
                                                          "aria-hidden": "true"
                                                        }
                                                      })
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-primary",
                                                      attrs: {
                                                        id:
                                                          "btn-" +
                                                          invoiceProductList.id
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.productReturn(
                                                            invoiceProductList.id
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v(" Return ")]
                                                  )
                                                ])
                                              ])
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("td", {}, [
                                          _c(
                                            "span",
                                            {
                                              attrs: {
                                                id:
                                                  "unitPrice-" +
                                                  invoiceProductList.id
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        " +
                                                  _vm._s(
                                                    invoiceProductList.unitPrice
                                                  ) +
                                                  "\n                                        "
                                              ),
                                              _c("input", {
                                                attrs: {
                                                  type: "hidden",
                                                  id:
                                                    "unit-" +
                                                    invoiceProductList.id
                                                },
                                                domProps: {
                                                  value:
                                                    invoiceProductList.unitPrice
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", {}, [
                                          _c(
                                            "span",
                                            {
                                              attrs: {
                                                id:
                                                  "totalPrice-" +
                                                  invoiceProductList.id
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  invoiceProductList.totalPrice
                                                ) + " "
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", {}, [
                                          _c(
                                            "span",
                                            {
                                              attrs: {
                                                id:
                                                  "discountAmount-" +
                                                  invoiceProductList.id
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  invoiceProductList.discount
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(
                                            "% \n                                      "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", {}, [
                                          _c(
                                            "span",
                                            {
                                              attrs: {
                                                id:
                                                  "totalWithDiscount-" +
                                                  invoiceProductList.id
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  invoiceProductList.totalWithDiscount
                                                ) + " "
                                              )
                                            ]
                                          )
                                        ])
                                      ])
                                    }),
                                    0
                                  ),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _vm._m(3),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "border-0" }, [
                                      _c("b", { attrs: { id: "grandTotal" } }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm.invoiceInfo.totalPurchaseValue
                                          )
                                        )
                                      ])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col" }),
                                _vm._v(" "),
                                _c("div", { staticClass: "col" }),
                                _vm._v(" "),
                                _c("div", { staticClass: "col" }, [
                                  _c(
                                    "table",
                                    { staticClass: "table table-bordered" },
                                    [
                                      _c("tbody", [
                                        _c("tr", [
                                          _c(
                                            "td",
                                            { staticClass: "text-right" },
                                            [_vm._v("Discount")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass: "bg-light",
                                              attrs: { id: "invoiceDiscount" }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(
                                                    _vm.invoiceInfo.discount
                                                  ) +
                                                  "\n                                          "
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c(
                                            "td",
                                            { staticClass: "text-right" },
                                            [
                                              _vm._v(
                                                "\n                                            Supplier Payable\n                                          "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass: "bg-light",
                                              attrs: { id: "supplierPayable" }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(
                                                    _vm.invoiceInfo
                                                      .supplierPayable
                                                  ) +
                                                  "\n                                          "
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c(
                                            "td",
                                            { staticClass: "text-right" },
                                            [
                                              _vm._v(
                                                "\n                                            Total Product Cost\n                                          "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              attrs: { id: "totalProductCost" }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(
                                                    _vm.invoiceInfo
                                                      .totalProductCost
                                                  ) +
                                                  "\n                                          "
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("tr"),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c(
                                            "td",
                                            { staticClass: "text-right" },
                                            [
                                              _vm._v(
                                                "\n                                            Current Payable\n                                          "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass: "bg-light",
                                              attrs: { id: "currentPayable" }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(
                                                    _vm.invoiceInfo
                                                      .currentPayable
                                                  ) +
                                                  "\n                                          "
                                              )
                                            ]
                                          )
                                        ])
                                      ])
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _vm.formStatus
                                ? _c(
                                    "form",
                                    {
                                      attrs: { action: "" },
                                      on: {
                                        submit: function($event) {
                                          $event.preventDefault()
                                          return _vm.returnSubmit()
                                        }
                                      }
                                    },
                                    [
                                      _vm._m(4),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-primary float-right sbtn",
                                          attrs: { type: "submit" }
                                        },
                                        [_vm._v(" Submit ")]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div")
                        ])
                      ]
                    )
                  ])
                ])
              ])
            : _vm._e()
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
        _c(
          "div",
          {
            staticClass:
              "card-header-title font-size-lg text-capitalize font-weight-normal"
          },
          [
            _c("i", {
              staticClass:
                "header-icon lnr-pencil icon-gradient bg-premium-dark"
            }),
            _vm._v(" "),
            _c("h4", [_vm._v(" Purchase Return ")])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-gray-light" }, [
      _c("u", [_c("b", [_vm._v(" Supplier Information :")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v(" Brand")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v(" Type")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v("Color/Size")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v("Return Qnt")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("UNIT PRICE")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("TOTAL PRICE")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("OFF")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("TOTAL")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      { staticClass: "text-right border-0", attrs: { colspan: "10" } },
      [_c("b", [_vm._v(" Grand Total : ")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-danger float-right sbtnd",
        staticStyle: { display: "none" },
        attrs: { type: "button" }
      },
      [
        _c("span", {
          staticClass: "spinner-border spinner-border-sm",
          attrs: { role: "status", "aria-hidden": "true" }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase@report/purchase@return.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase@report/purchase@return.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _purchase_return_vue_vue_type_template_id_0e9a7e92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase@return.vue?vue&type=template&id=0e9a7e92& */ "./resources/js/admin/page/purchase/purchase@report/purchase@return.vue?vue&type=template&id=0e9a7e92&");
/* harmony import */ var _purchase_return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase@return.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/purchase/purchase@report/purchase@return.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _purchase_return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _purchase_return_vue_vue_type_template_id_0e9a7e92___WEBPACK_IMPORTED_MODULE_0__["render"],
  _purchase_return_vue_vue_type_template_id_0e9a7e92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/purchase/purchase@report/purchase@return.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase@report/purchase@return.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase@report/purchase@return.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./purchase@return.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/purchase@return.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase@report/purchase@return.vue?vue&type=template&id=0e9a7e92&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase@report/purchase@return.vue?vue&type=template&id=0e9a7e92& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_return_vue_vue_type_template_id_0e9a7e92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./purchase@return.vue?vue&type=template&id=0e9a7e92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/purchase@return.vue?vue&type=template&id=0e9a7e92&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_return_vue_vue_type_template_id_0e9a7e92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_return_vue_vue_type_template_id_0e9a7e92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);