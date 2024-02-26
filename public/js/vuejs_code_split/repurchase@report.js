(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["repurchase@report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/repurchase@report.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase@report/repurchase@report.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      allProductBrandLists: [],
      shopProductBrandLists: [],
      rePurchaseProductReports: {},
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
      purchaseInvoiceReports: {},
      gets: "",
      invoiceInfo: "",
      invoiceProductLists: [],
      purchaseProductList: [],
      productBrandLists: [],
      purchaseTypes: [],
      unitLists: [],
      countryLists: [],
      colorLists: {},
      sizeLists: {},
      supplierInfo: ""
    };
  },
  mounted: function mounted() {
    this.productSupplierList();
    this.shopproductBrandEntry();
    this.getInvoiceSetupInformation();
    this.productBrandList();
    this.colorList();
    this.sizeList();
  },
  methods: {
    colorList: function colorList() {
      var _this = this;

      axios.get("/colorListAll").then(function (res) {
        _this.colorLists = res.data.colorList;
      });
    },
    sizeList: function sizeList() {
      var _this2 = this;

      axios.get("/sizeListAll").then(function (res) {
        _this2.sizeLists = res.data.sizeList;
      });
    },
    shopproductBrandEntry: function shopproductBrandEntry() {
      var _this3 = this;

      axios.get('/shopproductBrandEntry').then(function (res) {
        _this3.shopProductBrandLists = res.data.shopProductBrandList;
      });
    },
    productBrandList: function productBrandList() {
      var _this4 = this;

      axios.get("/productBrandList").then(function (res) {
        _this4.allProductBrandLists = res.data.productBrandList;
      });
    },
    productSupplierList: function productSupplierList() {
      var _this5 = this;

      axios.get('/rePurchaseProductReportList').then(function (res) {
        _this5.rePurchaseProductReports = res.data.rePurchaseProductReports;
      });
    },
    getInvoiceSetupInformation: function getInvoiceSetupInformation() {
      var _this6 = this;

      var uri = "getInvoiceSetupInformation/2";
      axios.get(uri).then(function (response) {
        _this6.gets = response.data.data;
      });
    },
    viewInvoiceInfo: function viewInvoiceInfo(id) {
      var _this7 = this;

      var uri = 'getInvoiceInformation/' + id;
      axios.get(uri).then(function (response) {
        _this7.unitLists = response.data.unitList;
        _this7.countryLists = response.data.countryList;
        _this7.purchaseTypes = response.data.purchaseType;
        _this7.productBrandLists = response.data.productBrandList;
        _this7.supplier_id = response.data.data.productSupplierId;
        _this7.invoiceInfo = response.data.data;
        _this7.invoiceProductLists = response.data.invoiceProductLists;
        _this7.supplierInfo = response.data.supplierInfo;
        _this7.purchaseProductList = response.data.purchaseProductList;
      });
    },
    purchaseProductIdCatch: function purchaseProductIdCatch(purchaseProductId) {
      var _this8 = this;

      this.modelNo = '';
      this.batchNo = '';
      this.qrCode = '';
      this.mfgLicenseNO = '';
      this.warranty = '';
      this.selectMothOrYearWarranty = '';
      this.guarantee = '';
      this.selectMothOrYearGuarantee = '';
      this.mfgDate = '';
      this.expiryDate = '';
      this.tax = '';
      this.taxAmount = '';
      this.taxAmountType = '';
      this.quantityType = '';
      this.quantityNoti = '';
      this.proDescription = '';
      this.proAdvantage = '';
      axios.get('/purchaseProductReportDetails/' + purchaseProductId).then(function (res) {
        _this8.modelNo = res.data.purchaseProductDetails.modelNo;
        _this8.batchNo = res.data.purchaseProductDetails.batchNo;
        _this8.qrCode = res.data.purchaseProductDetails.qrCode;
        _this8.mfgLicenseNO = res.data.purchaseProductDetails.mfgLicenseNO;
        _this8.warranty = res.data.purchaseProductDetails.warranty;
        _this8.selectMothOrYearWarranty = res.data.purchaseProductDetails.selectMothOrYearWarranty;
        _this8.guarantee = res.data.purchaseProductDetails.guarantee;
        _this8.selectMothOrYearGuarantee = res.data.purchaseProductDetails.selectMothOrYearGuarantee;
        _this8.mfgDate = res.data.purchaseProductDetails.mfgDate;
        _this8.expiryDate = res.data.purchaseProductDetails.expiryDate;
        _this8.tax = res.data.purchaseProductDetails.tax;
        _this8.taxAmount = res.data.purchaseProductDetails.taxAmount;
        _this8.taxAmountType = res.data.purchaseProductDetails.taxAmountType;
        _this8.quantityType = res.data.purchaseProductDetails.quantityType;
        _this8.quantityNoti = res.data.purchaseProductDetails.quantityNoti;
        _this8.proDescription = res.data.purchaseProductDetails.proDescription;
        _this8.proAdvantage = res.data.purchaseProductDetails.proAdvantage;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/repurchase@report.vue?vue&type=template&id=3a0749a8&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase@report/repurchase@report.vue?vue&type=template&id=3a0749a8& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "table-responsive bg-white" }, [
        _c(
          "table",
          { staticClass: "table table-hover table-bordered  table-striped" },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.rePurchaseProductReports, function(
                purchaseProductReport,
                index
              ) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(purchaseProductReport.created_at))]),
                  _vm._v(" "),
                  purchaseProductReport.product_name
                    ? _c("td", [
                        _vm._v(
                          _vm._s(
                            purchaseProductReport.product_name.productName
                          ) +
                            " (" +
                            _vm._s(
                              purchaseProductReport.product_name.productCode
                            ) +
                            ")"
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "td",
                    _vm._l(_vm.allProductBrandLists, function(
                      allProductBrandList
                    ) {
                      return allProductBrandList.productBrandEntryId ==
                        purchaseProductReport.brandId
                        ? _c("span", [
                            _vm._v(
                              "\n                    " +
                                _vm._s(allProductBrandList.productBrandName) +
                                "\n                "
                            )
                          ])
                        : _vm._e()
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _vm._l(_vm.colorLists, function(colorList) {
                        return colorList.id == purchaseProductReport.colorId
                          ? _c("span", [_vm._v(_vm._s(colorList.colorName))])
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.sizeLists, function(sizeList) {
                        return sizeList.id == purchaseProductReport.sizeId
                          ? _c("span", [
                              _vm._v("/ " + _vm._s(sizeList.sizeName))
                            ])
                          : _vm._e()
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "mr-2 btn-hover-shine btn btn-shadow btn-primary",
                        attrs: {
                          type: "button",
                          "data-toggle": "modal",
                          "data-target": "#purchaseId"
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.viewInvoiceInfo(
                              purchaseProductReport.purchaseInvoiceNo
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "  " + _vm._s(purchaseProductReport.purchaseInvoiceNo)
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  purchaseProductReport.unit_name
                    ? _c("td", [
                        _vm._v(
                          _vm._s(purchaseProductReport.unit_name.uniteEntryName)
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(purchaseProductReport.quantity))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(purchaseProductReport.unitPrice))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(purchaseProductReport.percetage) + " %")
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(purchaseProductReport.totalPrice))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "mr-2 btn-hover-shine btn btn-shadow btn-primary",
                        attrs: {
                          type: "button",
                          "data-toggle": "modal",
                          "data-target":
                            "#purchaseProductId" +
                            purchaseProductReport.purchaseProductId
                        },
                        on: {
                          click: function($event) {
                            return _vm.purchaseProductIdCatch(
                              purchaseProductReport.purchaseProductId
                            )
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: " fa fa-eye pr-2" }),
                        _vm._v(" Product Details\n                 ")
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "modal fade",
                      attrs: {
                        id: "purchaseId",
                        tabindex: "-1",
                        role: "dialog",
                        "aria-labelledby": "exampleModalLongTitle",
                        "aria-hidden": "true"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "modal-dialog  modal-lg",
                          attrs: { role: "document" }
                        },
                        [
                          _c("div", { staticClass: "modal-content" }, [
                            _vm._m(2, true),
                            _vm._v(" "),
                            _c("div", { staticClass: "modal-body" }, [
                              _c("div", { staticClass: "card" }, [
                                _vm._m(3, true),
                                _vm._v(" "),
                                _c("div", { staticClass: "card-body" }, [
                                  _vm._m(4, true),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        "padding-top": "0px !important"
                                      },
                                      attrs: { id: "invoice" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "invoice overflow-auto"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticStyle: {
                                                "min-width": "600px"
                                              }
                                            },
                                            [
                                              _c(
                                                "header",
                                                {
                                                  staticStyle: {
                                                    "margin-bottom":
                                                      "5px !important"
                                                  },
                                                  style:
                                                    "border-bottom-color:" +
                                                    _vm.gets.themeColor
                                                },
                                                [
                                                  _vm.gets.logo
                                                    ? _c(
                                                        "div",
                                                        { staticClass: "row" },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass: "col"
                                                            },
                                                            [
                                                              _c(
                                                                "a",
                                                                {
                                                                  attrs: {
                                                                    target:
                                                                      "_blank",
                                                                    href: "#"
                                                                  }
                                                                },
                                                                [
                                                                  _c("img", {
                                                                    staticStyle: {
                                                                      "max-height":
                                                                        "105px",
                                                                      "max-width":
                                                                        "100%"
                                                                    },
                                                                    attrs: {
                                                                      src:
                                                                        "images/invoice_logo/" +
                                                                        _vm.gets
                                                                          .logo
                                                                    }
                                                                  })
                                                                ]
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col company-details"
                                                            },
                                                            [
                                                              _c("div", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.gets
                                                                      .address
                                                                  )
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("div", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.gets
                                                                      .mobileNo
                                                                  )
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("div", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.gets
                                                                      .email
                                                                  )
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("div", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.gets
                                                                      .website
                                                                  )
                                                                )
                                                              ])
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    : _c(
                                                        "div",
                                                        { staticClass: "row" },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col text-center"
                                                            },
                                                            [
                                                              _c(
                                                                "h3",
                                                                {
                                                                  staticClass:
                                                                    "text-uppercase"
                                                                },
                                                                [
                                                                  _c("b", [
                                                                    _vm._v(
                                                                      " " +
                                                                        _vm._s(
                                                                          _vm
                                                                            .gets
                                                                            .companyName
                                                                        ) +
                                                                        " "
                                                                    )
                                                                  ])
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("div", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.gets
                                                                      .address
                                                                  )
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("div", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.gets
                                                                      .mobileNo
                                                                  )
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("div", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.gets
                                                                      .email
                                                                  )
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("div", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.gets
                                                                      .website
                                                                  )
                                                                )
                                                              ])
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("main", [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "row contacts"
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "col invoice-to"
                                                      },
                                                      [
                                                        _vm._m(5, true),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "address"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                      " +
                                                                _vm._s(
                                                                  _vm
                                                                    .supplierInfo
                                                                    .productSupplierName
                                                                ) +
                                                                "\n                                    "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "address"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                      " +
                                                                _vm._s(
                                                                  _vm
                                                                    .supplierInfo
                                                                    .productSupplierAddress
                                                                ) +
                                                                "\n                                    "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass: "email"
                                                          },
                                                          [
                                                            _c(
                                                              "a",
                                                              {
                                                                style:
                                                                  "color:" +
                                                                  _vm.gets
                                                                    .themeColor,
                                                                attrs: {
                                                                  href:
                                                                    "mailto:" +
                                                                    _vm
                                                                      .supplierInfo
                                                                      .productSupplierMail
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                        " +
                                                                    _vm._s(
                                                                      _vm
                                                                        .supplierInfo
                                                                        .productSupplierMail
                                                                    )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "col invoice-details"
                                                      },
                                                      [
                                                        _c(
                                                          "h4",
                                                          {
                                                            staticClass:
                                                              "text-center invoice-id",
                                                            style:
                                                              "color:" +
                                                              _vm.gets
                                                                .themeColor
                                                          },
                                                          [
                                                            _c("u", [
                                                              _vm._v(
                                                                " " +
                                                                  _vm._s(
                                                                    _vm.gets
                                                                      .toText
                                                                  ) +
                                                                  " "
                                                              )
                                                            ])
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "col invoice-details"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass: "date"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                      " +
                                                                _vm._s(
                                                                  _vm.gets
                                                                    .toText
                                                                ) +
                                                                ":\n                                      " +
                                                                _vm._s(
                                                                  _vm
                                                                    .invoiceInfo
                                                                    .purchaseInvoiceNo
                                                                ) +
                                                                "\n                                    "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass: "date"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                      Purchase Date:\n                                      " +
                                                                _vm._s(
                                                                  _vm
                                                                    .invoiceInfo
                                                                    .purchaseDate
                                                                ) +
                                                                "\n                                    "
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "table",
                                                  {
                                                    staticClass:
                                                      "table table-bordered border-0",
                                                    attrs: {
                                                      border: "0",
                                                      cellspacing: "0",
                                                      cellpadding: "0"
                                                    }
                                                  },
                                                  [
                                                    _vm._m(6, true),
                                                    _vm._v(" "),
                                                    _c(
                                                      "tbody",
                                                      _vm._l(
                                                        _vm.invoiceProductLists,
                                                        function(
                                                          invoiceProductList,
                                                          index
                                                        ) {
                                                          return _c("tr", [
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(++index)
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c(
                                                              "td",
                                                              {
                                                                staticClass:
                                                                  "text-left"
                                                              },
                                                              _vm._l(
                                                                _vm.purchaseProductList,
                                                                function(
                                                                  purchaseProductLists
                                                                ) {
                                                                  return purchaseProductLists.productNameId ==
                                                                    invoiceProductList.productId
                                                                    ? _c(
                                                                        "span",
                                                                        [
                                                                          _vm._v(
                                                                            "\n                                          " +
                                                                              _vm._s(
                                                                                purchaseProductLists.productName
                                                                              ) +
                                                                              "\n                                        "
                                                                          )
                                                                        ]
                                                                      )
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
                                                                function(
                                                                  allProductBrandList
                                                                ) {
                                                                  return allProductBrandList.productBrandEntryId ==
                                                                    invoiceProductList.brandId
                                                                    ? _c(
                                                                        "span",
                                                                        [
                                                                          _vm._v(
                                                                            "\n                                            " +
                                                                              _vm._s(
                                                                                allProductBrandList.productBrandName
                                                                              ) +
                                                                              "\n                                        "
                                                                          )
                                                                        ]
                                                                      )
                                                                    : _vm._e()
                                                                }
                                                              ),
                                                              0
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "td",
                                                              [
                                                                _vm._l(
                                                                  _vm.purchaseTypes,
                                                                  function(
                                                                    purchaseType
                                                                  ) {
                                                                    return purchaseType.id ==
                                                                      invoiceProductList.purchaseType
                                                                      ? _c(
                                                                          "span",
                                                                          {
                                                                            key:
                                                                              purchaseType.id
                                                                          },
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
                                                                  }
                                                                ),
                                                                _vm._v(" "),
                                                                _vm._l(
                                                                  _vm.countryLists,
                                                                  function(
                                                                    countryList
                                                                  ) {
                                                                    return countryList.id ==
                                                                      invoiceProductList.countryId
                                                                      ? _c(
                                                                          "span",
                                                                          {
                                                                            key:
                                                                              countryList.id
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "br"
                                                                            ),
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
                                                                  }
                                                                )
                                                              ],
                                                              2
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "td",
                                                              [
                                                                _vm._l(
                                                                  _vm.colorLists,
                                                                  function(
                                                                    colorList
                                                                  ) {
                                                                    return colorList.id ==
                                                                      invoiceProductList.colorId
                                                                      ? _c(
                                                                          "span",
                                                                          [
                                                                            _vm._v(
                                                                              _vm._s(
                                                                                colorList.colorName
                                                                              )
                                                                            )
                                                                          ]
                                                                        )
                                                                      : _vm._e()
                                                                  }
                                                                ),
                                                                _vm._v(" "),
                                                                _vm._l(
                                                                  _vm.sizeLists,
                                                                  function(
                                                                    sizeList
                                                                  ) {
                                                                    return sizeList.id ==
                                                                      invoiceProductList.sizeId
                                                                      ? _c(
                                                                          "span",
                                                                          [
                                                                            _vm._v(
                                                                              "/ " +
                                                                                _vm._s(
                                                                                  sizeList.sizeName
                                                                                )
                                                                            )
                                                                          ]
                                                                        )
                                                                      : _vm._e()
                                                                  }
                                                                )
                                                              ],
                                                              2
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "td",
                                                              _vm._l(
                                                                _vm.unitLists,
                                                                function(
                                                                  unitList
                                                                ) {
                                                                  return unitList.uniteEntryId ==
                                                                    invoiceProductList.unitId
                                                                    ? _c(
                                                                        "span",
                                                                        {
                                                                          key:
                                                                            unitList.uniteEntryId
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
                                                                }
                                                              ),
                                                              0
                                                            ),
                                                            _vm._v(" "),
                                                            _c("td", {}, [
                                                              _vm._v(
                                                                "\n                                        " +
                                                                  _vm._s(
                                                                    invoiceProductList.quantity
                                                                  ) +
                                                                  "\n                                      "
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", {}, [
                                                              _vm._v(
                                                                "\n                                        " +
                                                                  _vm._s(
                                                                    invoiceProductList.unitPrice
                                                                  ) +
                                                                  "\n                                      "
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", {}, [
                                                              _vm._v(
                                                                "\n                                        " +
                                                                  _vm._s(
                                                                    invoiceProductList.totalPrice
                                                                  ) +
                                                                  "\n                                      "
                                                              )
                                                            ])
                                                          ])
                                                        }
                                                      ),
                                                      0
                                                    ),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _vm._m(7, true),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        {
                                                          staticClass:
                                                            "border-0"
                                                        },
                                                        [
                                                          _c("b", [
                                                            _vm._v(
                                                              "\n                                        :\n                                        " +
                                                                _vm._s(
                                                                  _vm
                                                                    .invoiceInfo
                                                                    .totalPurchaseValue
                                                                )
                                                            )
                                                          ])
                                                        ]
                                                      )
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "row" },
                                                  [
                                                    _c("div", {
                                                      staticClass: "col"
                                                    }),
                                                    _vm._v(" "),
                                                    _c("div", {
                                                      staticClass: "col"
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      { staticClass: "col" },
                                                      [
                                                        _c(
                                                          "table",
                                                          {
                                                            staticClass:
                                                              "table table-bordered"
                                                          },
                                                          [
                                                            _c("tbody", [
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "text-right"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Discount"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "bg-light"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                            " +
                                                                        _vm._s(
                                                                          _vm
                                                                            .invoiceInfo
                                                                            .discount
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
                                                                  {
                                                                    staticClass:
                                                                      "text-right"
                                                                  },
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
                                                                    staticClass:
                                                                      "bg-light"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                            " +
                                                                        _vm._s(
                                                                          _vm
                                                                            .invoiceInfo
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
                                                                  {
                                                                    staticClass:
                                                                      "text-right"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                            Total Product Cost\n                                          "
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    "\n                                            " +
                                                                      _vm._s(
                                                                        _vm
                                                                          .invoiceInfo
                                                                          .totalProductCost
                                                                      ) +
                                                                      "\n                                          "
                                                                  )
                                                                ])
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr"),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "text-right"
                                                                  },
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
                                                                    staticClass:
                                                                      "bg-light"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                            " +
                                                                        _vm._s(
                                                                          _vm
                                                                            .invoiceInfo
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
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "row mt-5" },
                                                  [
                                                    _c(
                                                      "div",
                                                      { staticClass: "col" },
                                                      [
                                                        _c("center", [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticStyle: {
                                                                "text-decoration":
                                                                  "overline"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                              Supplier Sign\n                                             "
                                                              )
                                                            ]
                                                          )
                                                        ])
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c("div", {
                                                      staticClass: "col"
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      { staticClass: "col" },
                                                      [
                                                        _c("center", [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticStyle: {
                                                                "text-decoration":
                                                                  "overline"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                              Authorize Sign\n                                             \n                                      "
                                                              )
                                                            ]
                                                          )
                                                        ])
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("div")
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _vm._m(8, true)
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "modal fade",
                      attrs: {
                        id:
                          "purchaseProductId" +
                          purchaseProductReport.purchaseProductId,
                        tabindex: "-1",
                        role: "dialog",
                        "aria-labelledby": "exampleModalLongTitle",
                        "aria-hidden": "true"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "modal-dialog",
                          attrs: { role: "document" }
                        },
                        [
                          _c("div", { staticClass: "modal-content" }, [
                            _vm._m(9, true),
                            _vm._v(" "),
                            _c("div", { staticClass: "modal-body" }, [
                              _c(
                                "div",
                                { staticClass: "col-12 pl-0 pt-2 border" },
                                [
                                  _c("div", { staticClass: "row m-0" }, [
                                    _vm._m(10, true),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "col-6 p-0" }, [
                                      _c("h6", [_vm._v(_vm._s(_vm.modelNo))])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-12 pl-0 pt-2 border" },
                                [
                                  _c("div", { staticClass: "row m-0" }, [
                                    _vm._m(11, true),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "col-6 p-0" }, [
                                      _c("h6", [_vm._v(_vm._s(_vm.batchNo))])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-12 pl-0 pt-2 border" },
                                [
                                  _c("div", { staticClass: "row m-0" }, [
                                    _vm._m(12, true),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "col-6 p-0" }, [
                                      _c("h6", [_vm._v(_vm._s(_vm.qrCode))])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-12 pl-0 pt-2 border" },
                                [
                                  _c("div", { staticClass: "row m-0" }, [
                                    _vm._m(13, true),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "col-6 p-0" }, [
                                      _c("h6", [
                                        _vm._v(_vm._s(_vm.mfgLicenseNO))
                                      ])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-12 pl-0 pt-2 border" },
                                [
                                  _c("div", { staticClass: "row m-0" }, [
                                    _vm._m(14, true),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "col-6 p-0" }, [
                                      _c("h6", [
                                        _vm.selectMothOrYearWarranty == 1
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                                         " +
                                                  _vm._s(_vm.warranty * 1) +
                                                  " Day\n                                     "
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.selectMothOrYearWarranty == 2
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                                         " +
                                                  _vm._s(_vm.warranty * 30) +
                                                  " Day\n                                     "
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.selectMothOrYearWarranty == 3
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                                         " +
                                                  _vm._s(
                                                    _vm.warranty * 12 * 30
                                                  ) +
                                                  " Day\n                                     "
                                              )
                                            ])
                                          : _vm._e()
                                      ])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-12 pl-0 pt-2 border" },
                                [
                                  _c("div", { staticClass: "row m-0" }, [
                                    _vm._m(15, true),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "col-6 p-0" }, [
                                      _c("h6", [
                                        _vm.selectMothOrYearGuarantee == 1
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                                         " +
                                                  _vm._s(_vm.guarantee * 1) +
                                                  " Day\n                                     "
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.selectMothOrYearGuarantee == 2
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                                         " +
                                                  _vm._s(_vm.guarantee * 30) +
                                                  " Day\n                                     "
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.selectMothOrYearGuarantee == 3
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                                         " +
                                                  _vm._s(
                                                    _vm.guarantee * 12 * 30
                                                  ) +
                                                  " Day\n                                     "
                                              )
                                            ])
                                          : _vm._e()
                                      ])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-12 pl-0 pt-2 border" },
                                [
                                  _c("div", { staticClass: "row m-0" }, [
                                    _vm._m(16, true),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "col-6 p-0" }, [
                                      _c("h6", [_vm._v(_vm._s(_vm.mfgDate))])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-12 pl-0 pt-2 border" },
                                [
                                  _c("div", { staticClass: "row m-0" }, [
                                    _vm._m(17, true),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "col-6 p-0" }, [
                                      _c("h6", [_vm._v(_vm._s(_vm.expiryDate))])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-12 pl-0 pt-2 border" },
                                [
                                  _c("div", { staticClass: "row m-0" }, [
                                    _vm._m(18, true),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "col-6 p-0" }, [
                                      _c("h6", [_vm._v(_vm._s(_vm.tax))])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-12 pl-0 pt-2 border" },
                                [
                                  _c("div", { staticClass: "row m-0" }, [
                                    _vm._m(19, true),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "col-6 p-0" }, [
                                      _c("h6", [
                                        _vm._v(
                                          _vm._s(_vm.taxAmount) +
                                            " " +
                                            _vm._s(
                                              _vm.taxAmountType == 1
                                                ? "Taka"
                                                : ""
                                            ) +
                                            " " +
                                            _vm._s(
                                              _vm.taxAmountType == 2
                                                ? "Percetage"
                                                : ""
                                            )
                                        )
                                      ])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-12 pl-0 pt-2 border" },
                                [
                                  _c("div", { staticClass: "row m-0" }, [
                                    _vm._m(20, true),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "col-6 p-0" }, [
                                      _c("h6", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.quantityType == 1 ? "Low" : ""
                                          ) +
                                            " " +
                                            _vm._s(
                                              _vm.quantityType == 2
                                                ? "Medium"
                                                : ""
                                            ) +
                                            " " +
                                            _vm._s(
                                              _vm.quantityType == 3
                                                ? "High"
                                                : ""
                                            )
                                        )
                                      ])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-12 pl-0 pt-2 border" },
                                [
                                  _c("div", { staticClass: "row m-0" }, [
                                    _vm._m(21, true),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "col-6 p-0" }, [
                                      _c("h6", [
                                        _vm._v(_vm._s(_vm.quantityNoti))
                                      ])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-12 pl-0 pt-2 border" },
                                [
                                  _c("div", { staticClass: "row m-0" }, [
                                    _vm._m(22, true),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "col-8 p-0" }, [
                                      _c("h6", [
                                        _vm._v(_vm._s(_vm.proDescription))
                                      ])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-12 pl-0 pt-2 border" },
                                [
                                  _c("div", { staticClass: "row m-0" }, [
                                    _vm._m(23, true),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "col-8 p-0" }, [
                                      _c("h6", [
                                        _vm._v(_vm._s(_vm.proAdvantage))
                                      ])
                                    ])
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(24, true)
                          ])
                        ]
                      )
                    ]
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
}
var staticRenderFns = [
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
          _vm._v("Purchase Product List")
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
        _c("th", [_vm._v("Purchase Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Brand")]),
        _vm._v(" "),
        _c("th", [_vm._v("Color/Size")]),
        _vm._v(" "),
        _c("th", [_vm._v("Invoice")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Discount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header bg-primary text-light" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLongTitle" } },
        [
          _vm._v(
            "\n                      Product Detalis\n                    "
          )
        ]
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
      { staticClass: "card-header-tab card-header alert-info" },
      [
        _c("h4", [
          _c("i", {
            staticClass:
              "\n                              header-icon\n                              lnr-laptop-phone\n                              icon-gradient\n                              bg-premium-dark\n                            "
          }),
          _vm._v(
            "\n                          Purchase Invoice\n                        "
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "toolbar hidden-print" }, [
      _c("div", { staticClass: "text-right" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-info",
            attrs: { id: "printInvoice", onclick: "jQuery('#invoice').print()" }
          },
          [
            _c("i", { staticClass: "fa fa-print" }),
            _vm._v(" Print\n                            ")
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-gray-light" }, [
      _c("u", [_c("b", [_vm._v(" Supplier Informatioin :")])])
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
        _c("th", { staticClass: "text-left" }, [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v("Product Brand")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v("Purchase Type")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v("Size/Size")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v("UNIT")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("UNIT PRICE")]),
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
      { staticClass: "text-right border-0", attrs: { colspan: "7" } },
      [_c("b", [_vm._v(" Grand Total ")])]
    )
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
        [_vm._v("\n                      Close\n                    ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header bg-primary text-light" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLongTitle" } },
        [_vm._v(" Detalis")]
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
    return _c("span", { staticClass: "col-3 pr-0" }, [
      _c("h6", [_vm._v("Model Name :")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "col-3 pr-0" }, [
      _c("h6", [_vm._v("Batch Name :")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "col-3 pr-0" }, [
      _c("h6", [_vm._v("QR Code :")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "col-3 pr-0" }, [
      _c("h6", [_vm._v("Mfg License NO :")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "col-3 pr-0" }, [
      _c("h6", [_vm._v("Warranty :")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "col-3 pr-0" }, [
      _c("h6", [_vm._v("Guarantee :")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "col-3 pr-0" }, [
      _c("h6", [_vm._v("Mfg Date :")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "col-3 pr-0" }, [
      _c("h6", [_vm._v("Expiry Date :")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "col-3 pr-0" }, [
      _c("h6", [_vm._v("Tax :")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "col-3 pr-0" }, [
      _c("h6", [_vm._v("Tax Amount :")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "col-3 pr-0" }, [
      _c("h6", [_vm._v("Quantity Type :")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "col-3 pr-0" }, [
      _c("h6", [_vm._v("Quantity Notification :")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "col-3 pr-0" }, [
      _c("h6", [_vm._v("Product Description :")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "col-3 pr-0" }, [
      _c("h6", [_vm._v("Product Advantage :")])
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
        [_vm._v("Close")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase@report/repurchase@report.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase@report/repurchase@report.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repurchase_report_vue_vue_type_template_id_3a0749a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repurchase@report.vue?vue&type=template&id=3a0749a8& */ "./resources/js/admin/page/purchase/purchase@report/repurchase@report.vue?vue&type=template&id=3a0749a8&");
/* harmony import */ var _repurchase_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repurchase@report.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/purchase/purchase@report/repurchase@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _repurchase_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _repurchase_report_vue_vue_type_template_id_3a0749a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _repurchase_report_vue_vue_type_template_id_3a0749a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/purchase/purchase@report/repurchase@report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase@report/repurchase@report.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase@report/repurchase@report.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_repurchase_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./repurchase@report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/repurchase@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_repurchase_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase@report/repurchase@report.vue?vue&type=template&id=3a0749a8&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase@report/repurchase@report.vue?vue&type=template&id=3a0749a8& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repurchase_report_vue_vue_type_template_id_3a0749a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./repurchase@report.vue?vue&type=template&id=3a0749a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/repurchase@report.vue?vue&type=template&id=3a0749a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repurchase_report_vue_vue_type_template_id_3a0749a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repurchase_report_vue_vue_type_template_id_3a0749a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);