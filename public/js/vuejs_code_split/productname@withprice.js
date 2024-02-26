(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productname@withprice"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/productname@withprice.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@report/productname@withprice.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
      salesProductPriceReports: {},
      role: {},
      shopProductBrandLists: [],
      priceLists: [],
      colorLists: [],
      sizeLists: [],
      salesUnitListHistorys: [],
      unitNameShows: [],
      priceTypeLists: []
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  mounted: function mounted() {
    this.productPriceSetupList();
    this.getPaginateList();
    this.conditon();
    this.colorList();
    this.sizeList();
    this.unitNameShow();
    this.priceType();
  },
  methods: {
    salesUnitListHistory: function salesUnitListHistory(pId, bId, cId, sId) {
      var _this = this;

      axios.get('/ProductSalePriceInfo/' + pId + '/' + bId + '/' + cId + '/' + sId).then(function (res) {
        _this.salesUnitListHistorys = res.data.salesProductPrice;
      });
    },
    priceType: function priceType() {
      var _this2 = this;

      axios.get("/salesPriceType").then(function (res) {
        _this2.priceTypeLists = res.data.salesPriceTypes;
      });
    },
    unitNameShow: function unitNameShow() {
      var _this3 = this;

      axios.get("/unitNameShow").then(function (res) {
        _this3.unitNameShows = res.data.unitNameShow;
      });
    },
    colorList: function colorList() {
      var _this4 = this;

      axios.get("/colorListAll/").then(function (res) {
        _this4.colorLists = res.data.colorList;
      });
    },
    sizeList: function sizeList() {
      var _this5 = this;

      axios.get("/sizeListAll/").then(function (res) {
        _this5.sizeLists = res.data.sizeList;
      });
    },
    productPriceSetupList: function productPriceSetupList() {
      var _this6 = this;

      axios.get('/inventoryProductNameWithPrice').then(function (res) {
        _this6.salesProductPriceReports = res.data.salesProductPriceReports;
      });
    },
    getPaginateList: function getPaginateList() {
      var _this7 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/inventoryProductNameWithPrice?page=' + page).then(function (response) {
        _this7.salesProductPriceReports = response.data.salesProductPriceReports;
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
      axios.get('/stockSummaryProductDetails/' + purchaseProductId).then(function (res) {
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
    },
    history: function history(purchaseProductId) {
      var _this9 = this;

      axios.get('/priceUpdateHistory/' + purchaseProductId).then(function (res) {
        _this9.priceLists = res.data.historyGet;
      });
    },
    conditon: function conditon() {
      var _this10 = this;

      axios.get('/condition').then(function (res) {
        _this10.role = res.data.authInfo;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/productname@withprice.vue?vue&type=template&id=c32b22ea&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@report/productname@withprice.vue?vue&type=template&id=c32b22ea& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    _vm.role.role != 1 && _vm.role.role != 2
      ? _c("div", { staticClass: "card main-card  element-block-example" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive bg-white" }, [
            _c(
              "table",
              { staticClass: "table table-hover table-bordered table-striped" },
              [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.salesProductPriceReports.data, function(
                    salesProductPriceReport,
                    index
                  ) {
                    return _c("tr", [
                      _c("td", [_vm._v(_vm._s(index + 1))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            salesProductPriceReport.product_name.productName
                          ) +
                            " (" +
                            _vm._s(
                              salesProductPriceReport.product_name.productCode
                            ) +
                            ")"
                        )
                      ]),
                      _vm._v(" "),
                      salesProductPriceReport.brandname
                        ? _c("td", [
                            _vm._v(
                              _vm._s(
                                salesProductPriceReport.brandname
                                  .productBrandName
                              )
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "td",
                        _vm._l(_vm.colorLists, function(colorList) {
                          return colorList.id == salesProductPriceReport.colorId
                            ? _c("span", [_vm._v(_vm._s(colorList.colorName))])
                            : _vm._e()
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        _vm._l(_vm.sizeLists, function(sizeList) {
                          return sizeList.id == salesProductPriceReport.sizeId
                            ? _c("span", [
                                _vm._v("  " + _vm._s(sizeList.sizeName))
                              ])
                            : _vm._e()
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: {
                              type: "button",
                              "data-toggle": "modal",
                              "data-target": "#exampleModalUnit"
                            },
                            on: {
                              click: function($event) {
                                return _vm.salesUnitListHistory(
                                  salesProductPriceReport.productId,
                                  salesProductPriceReport.brandId,
                                  salesProductPriceReport.colorId,
                                  salesProductPriceReport.sizeId
                                )
                              }
                            }
                          },
                          [
                            _vm._v(
                              " " +
                                _vm._s(
                                  salesProductPriceReport.unit.uniteEntryName
                                ) +
                                " "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(salesProductPriceReport.mrpPrice))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(salesProductPriceReport.salesPrice))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(salesProductPriceReport.wholesalePrice))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(salesProductPriceReport.specialPrice))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(salesProductPriceReport.eCommercePrice))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(salesProductPriceReport.created_at))
                      ]),
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
                                salesProductPriceReport.purchaseProductId
                            },
                            on: {
                              click: function($event) {
                                return _vm.purchaseProductIdCatch(
                                  salesProductPriceReport.purchaseProductId
                                )
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: " fa fa-eye pr-2" }),
                            _vm._v(" Product Details\n                   ")
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "modal fade",
                          attrs: {
                            id:
                              "purchaseProductId" +
                              salesProductPriceReport.purchaseProductId,
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
                                _vm._m(2, true),
                                _vm._v(" "),
                                _c("div", { staticClass: "modal-body" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-12 pl-0 pt-2 border" },
                                    [
                                      _c("div", { staticClass: "row m-0" }, [
                                        _vm._m(3, true),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "col-6 p-0" },
                                          [
                                            _c("h6", [
                                              _vm._v(_vm._s(_vm.modelNo))
                                            ])
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-12 pl-0 pt-2 border" },
                                    [
                                      _c("div", { staticClass: "row m-0" }, [
                                        _vm._m(4, true),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "col-6 p-0" },
                                          [
                                            _c("h6", [
                                              _vm._v(_vm._s(_vm.batchNo))
                                            ])
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-12 pl-0 pt-2 border" },
                                    [
                                      _c("div", { staticClass: "row m-0" }, [
                                        _vm._m(5, true),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "col-6 p-0" },
                                          [
                                            _c("h6", [
                                              _vm._v(_vm._s(_vm.qrCode))
                                            ])
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-12 pl-0 pt-2 border" },
                                    [
                                      _c("div", { staticClass: "row m-0" }, [
                                        _vm._m(6, true),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "col-6 p-0" },
                                          [
                                            _c("h6", [
                                              _vm._v(_vm._s(_vm.mfgLicenseNO))
                                            ])
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-12 pl-0 pt-2 border" },
                                    [
                                      _c("div", { staticClass: "row m-0" }, [
                                        _vm._m(7, true),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "col-6 p-0" },
                                          [
                                            _c("h6", [
                                              _vm.selectMothOrYearWarranty == 1
                                                ? _c("span", [
                                                    _vm._v(
                                                      "\n                                           " +
                                                        _vm._s(
                                                          _vm.warranty * 1
                                                        ) +
                                                        " Day\n                                       "
                                                    )
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.selectMothOrYearWarranty == 2
                                                ? _c("span", [
                                                    _vm._v(
                                                      "\n                                           " +
                                                        _vm._s(
                                                          _vm.warranty * 30
                                                        ) +
                                                        " Day\n                                       "
                                                    )
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.selectMothOrYearWarranty == 3
                                                ? _c("span", [
                                                    _vm._v(
                                                      "\n                                           " +
                                                        _vm._s(
                                                          _vm.warranty * 12 * 30
                                                        ) +
                                                        " Day\n                                       "
                                                    )
                                                  ])
                                                : _vm._e()
                                            ])
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-12 pl-0 pt-2 border" },
                                    [
                                      _c("div", { staticClass: "row m-0" }, [
                                        _vm._m(8, true),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "col-6 p-0" },
                                          [
                                            _c("h6", [
                                              _vm.selectMothOrYearGuarantee == 1
                                                ? _c("span", [
                                                    _vm._v(
                                                      "\n                                           " +
                                                        _vm._s(
                                                          _vm.guarantee * 1
                                                        ) +
                                                        " Day\n                                       "
                                                    )
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.selectMothOrYearGuarantee == 2
                                                ? _c("span", [
                                                    _vm._v(
                                                      "\n                                           " +
                                                        _vm._s(
                                                          _vm.guarantee * 30
                                                        ) +
                                                        " Day\n                                       "
                                                    )
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.selectMothOrYearGuarantee == 3
                                                ? _c("span", [
                                                    _vm._v(
                                                      "\n                                           " +
                                                        _vm._s(
                                                          _vm.guarantee *
                                                            12 *
                                                            30
                                                        ) +
                                                        " Day\n                                       "
                                                    )
                                                  ])
                                                : _vm._e()
                                            ])
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-12 pl-0 pt-2 border" },
                                    [
                                      _c("div", { staticClass: "row m-0" }, [
                                        _vm._m(9, true),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "col-6 p-0" },
                                          [
                                            _c("h6", [
                                              _vm._v(_vm._s(_vm.mfgDate))
                                            ])
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-12 pl-0 pt-2 border" },
                                    [
                                      _c("div", { staticClass: "row m-0" }, [
                                        _vm._m(10, true),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "col-6 p-0" },
                                          [
                                            _c("h6", [
                                              _vm._v(_vm._s(_vm.expiryDate))
                                            ])
                                          ]
                                        )
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
                                        _c(
                                          "span",
                                          { staticClass: "col-6 p-0" },
                                          [_c("h6", [_vm._v(_vm._s(_vm.tax))])]
                                        )
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
                                        _c(
                                          "span",
                                          { staticClass: "col-6 p-0" },
                                          [
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
                                          ]
                                        )
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
                                        _c(
                                          "span",
                                          { staticClass: "col-6 p-0" },
                                          [
                                            _c("h6", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.quantityType == 1
                                                    ? "Low"
                                                    : ""
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
                                          ]
                                        )
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
                                        _c(
                                          "span",
                                          { staticClass: "col-6 p-0" },
                                          [
                                            _c("h6", [
                                              _vm._v(_vm._s(_vm.quantityNoti))
                                            ])
                                          ]
                                        )
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
                                        _c(
                                          "span",
                                          { staticClass: "col-8 p-0" },
                                          [
                                            _c("h6", [
                                              _vm._v(_vm._s(_vm.proDescription))
                                            ])
                                          ]
                                        )
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
                                        _c(
                                          "span",
                                          { staticClass: "col-8 p-0" },
                                          [
                                            _c("h6", [
                                              _vm._v(_vm._s(_vm.proAdvantage))
                                            ])
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _vm._m(17, true)
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
                              "purchaseProductId2" +
                              salesProductPriceReport.purchaseProductId,
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
                                _vm._m(18, true),
                                _vm._v(" "),
                                _c("div", { staticClass: "modal-boday" }, [
                                  _c("div", { staticClass: "card mt-5" }, [
                                    _vm._m(19, true),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "table-responsive bg-white"
                                      },
                                      [
                                        _c(
                                          "table",
                                          {
                                            staticClass:
                                              "table table-hover table-bordered table-striped"
                                          },
                                          [
                                            _vm._m(20, true),
                                            _vm._v(" "),
                                            _vm._l(_vm.priceLists, function(
                                              priceList,
                                              index
                                            ) {
                                              return _c(
                                                "tbody",
                                                { key: priceList.id },
                                                [
                                                  index == 0
                                                    ? _c(
                                                        "tr",
                                                        {
                                                          staticStyle: {
                                                            background:
                                                              "#beeeac"
                                                          }
                                                        },
                                                        [
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(index + 1)
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                priceList.mrpPrice
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                priceList.salesPrice
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                priceList.wholesalePrice
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                priceList.specialPrice
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                priceList.eCommercePrice
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                priceList.created_at
                                                              )
                                                            )
                                                          ])
                                                        ]
                                                      )
                                                    : _c("tr", [
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(index + 1)
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              priceList.mrpPrice
                                                            )
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              priceList.salesPrice
                                                            )
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              priceList.wholesalePrice
                                                            )
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              priceList.specialPrice
                                                            )
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              priceList.eCommercePrice
                                                            )
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              priceList.created_at
                                                            )
                                                          )
                                                        ])
                                                      ])
                                                ]
                                              )
                                            })
                                          ],
                                          2
                                        )
                                      ]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _vm._m(21, true)
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
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal fade",
              attrs: {
                id: "exampleModalUnit",
                tabindex: "-1",
                role: "dialog",
                "aria-labelledby": "exampleModalLabel",
                "aria-hidden": "true"
              }
            },
            [
              _c(
                "div",
                { staticClass: "modal-dialog", attrs: { role: "document" } },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _vm._m(22),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c("div", { staticClass: "table-responsive bg-white" }, [
                        _c(
                          "table",
                          {
                            staticClass:
                              "table table-hover table-bordered table-striped"
                          },
                          [
                            _vm._m(23),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.salesUnitListHistorys, function(
                                priceList
                              ) {
                                return _c(
                                  "tr",
                                  { style: "background:" + priceList.color },
                                  [
                                    _c(
                                      "td",
                                      _vm._l(_vm.priceTypeLists, function(
                                        priceTypeList
                                      ) {
                                        return priceTypeList.salesPriceTypeId ==
                                          priceList.priceTypeId
                                          ? _c("span", [
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    priceTypeList.salesPriceType
                                                  ) +
                                                  " "
                                              )
                                            ])
                                          : _vm._e()
                                      }),
                                      0
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      _vm._l(_vm.unitNameShows, function(
                                        unitNameShow
                                      ) {
                                        return unitNameShow.uniteEntryId ==
                                          priceList.unitId
                                          ? _c("span", [
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    unitNameShow.uniteEntryName
                                                  ) +
                                                  " "
                                              )
                                            ])
                                          : _vm._e()
                                      }),
                                      0
                                    ),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(priceList.salesUnitPrice))
                                    ])
                                  ]
                                )
                              }),
                              0
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(24)
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "card_footer" },
            [
              _c(
                "pagination",
                {
                  attrs: {
                    data: _vm.salesProductPriceReports,
                    limit: _vm.limit
                  },
                  on: { "pagination-change-page": _vm.getPaginateList }
                },
                [
                  _c(
                    "span",
                    { attrs: { slot: "prev-nav" }, slot: "prev-nav" },
                    [_vm._v("< Previous")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    { attrs: { slot: "next-nav" }, slot: "next-nav" },
                    [_vm._v("Next >")]
                  )
                ]
              )
            ],
            1
          )
        ])
      : _vm._e()
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
          _vm._v("Product Name With Price")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticStyle: { background: "rgba(242, 242, 242, 0.47)" } }, [
        _c("th", [_vm._v("SN")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product.Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Brand")]),
        _vm._v(" "),
        _c("th", [_vm._v("Color")]),
        _vm._v(" "),
        _c("th", [_vm._v("Size")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit")]),
        _vm._v(" "),
        _c("th", [_vm._v("MRP.Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Sales.Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Wholesale.Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Special.Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("E-Commerce.Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created.Date")]),
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
        [_vm._v("Product Detalis")]
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
      _c("h6", [_vm._v("Mdoel Name :")])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header bg-primary text-light" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLongTitle" } },
        [_vm._v("Product Price Setup History")]
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
          _vm._v("Sales Product Price Update History")
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
        _c("th", [_vm._v("MRP Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Sales Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Wholesale Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Special Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("E-Commerce Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Updated Date")])
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
        [_vm._v("Close")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Modal title")]
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Price Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit Price")])
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
          staticClass: "btn btn-danger",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v(" Close ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/productname@withprice.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/productname@withprice.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productname_withprice_vue_vue_type_template_id_c32b22ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productname@withprice.vue?vue&type=template&id=c32b22ea& */ "./resources/js/admin/page/inventory/inventory@report/productname@withprice.vue?vue&type=template&id=c32b22ea&");
/* harmony import */ var _productname_withprice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productname@withprice.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/inventory/inventory@report/productname@withprice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _productname_withprice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productname_withprice_vue_vue_type_template_id_c32b22ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _productname_withprice_vue_vue_type_template_id_c32b22ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/inventory/inventory@report/productname@withprice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/productname@withprice.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/productname@withprice.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productname_withprice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./productname@withprice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/productname@withprice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productname_withprice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/productname@withprice.vue?vue&type=template&id=c32b22ea&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/productname@withprice.vue?vue&type=template&id=c32b22ea& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productname_withprice_vue_vue_type_template_id_c32b22ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./productname@withprice.vue?vue&type=template&id=c32b22ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/productname@withprice.vue?vue&type=template&id=c32b22ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productname_withprice_vue_vue_type_template_id_c32b22ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productname_withprice_vue_vue_type_template_id_c32b22ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);