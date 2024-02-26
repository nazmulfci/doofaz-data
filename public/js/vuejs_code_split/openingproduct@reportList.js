(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["openingproduct@reportList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/openingproduct@reportdetails.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase@report/openingproduct@reportdetails.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      allProductBrandLists: [],
      shopProductBrandLists: [],
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
    this.productSupplierList();
    this.shopproductBrandEntry();
    this.getPaginateList();
    this.productBrandList();
    this.colorList();
    this.sizeList();
  },
  methods: {
    colorList: function colorList() {
      var _this = this;

      axios.get("/colorListAll/").then(function (res) {
        _this.colorLists = res.data.colorList;
      });
    },
    sizeList: function sizeList() {
      var _this2 = this;

      axios.get("/sizeListAll/").then(function (res) {
        _this2.sizeLists = res.data.sizeList;
      });
    },
    shopproductBrandEntry: function shopproductBrandEntry() {
      var _this3 = this;

      axios.get('/shopproductBrandEntry').then(function (res) {
        _this3.shopProductBrandLists = res.data.shopProductBrandList;
      });
    },
    productSupplierList: function productSupplierList() {
      var _this4 = this;

      axios.get('/openingProductReportList/' + this.$route.params.purchaseProductId).then(function (res) {
        _this4.purchaseProductReports = res.data.purchaseProductReports;
      });
    },
    productBrandList: function productBrandList() {
      var _this5 = this;

      axios.get("/productBrandList").then(function (res) {
        _this5.allProductBrandLists = res.data.productBrandList;
      });
    },
    //      getPaginateList(page = 1){
    //     axios.get('/purchaseProductReportList/'+this.$route.params.purchaseProductId+'?page=' + page).then(response => {
    //       this.purchaseProductReports = response.data.purchaseProductReports;
    //     });
    // },
    purchaseProductIdCatch: function purchaseProductIdCatch(purchaseProductId) {
      var _this6 = this;

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
        _this6.modelNo = res.data.purchaseProductDetails.modelNo;
        _this6.batchNo = res.data.purchaseProductDetails.batchNo;
        _this6.qrCode = res.data.purchaseProductDetails.qrCode;
        _this6.mfgLicenseNO = res.data.purchaseProductDetails.mfgLicenseNO;
        _this6.warranty = res.data.purchaseProductDetails.warranty;
        _this6.selectMothOrYearWarranty = res.data.purchaseProductDetails.selectMothOrYearWarranty;
        _this6.guarantee = res.data.purchaseProductDetails.guarantee;
        _this6.selectMothOrYearGuarantee = res.data.purchaseProductDetails.selectMothOrYearGuarantee;
        _this6.mfgDate = res.data.purchaseProductDetails.mfgDate;
        _this6.expiryDate = res.data.purchaseProductDetails.expiryDate;
        _this6.tax = res.data.purchaseProductDetails.tax;
        _this6.taxAmount = res.data.purchaseProductDetails.taxAmount;
        _this6.taxAmountType = res.data.purchaseProductDetails.taxAmountType;
        _this6.quantityType = res.data.purchaseProductDetails.quantityType;
        _this6.quantityNoti = res.data.purchaseProductDetails.quantityNoti;
        _this6.proDescription = res.data.purchaseProductDetails.proDescription;
        _this6.proAdvantage = res.data.purchaseProductDetails.proAdvantage;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/openingproduct@reportdetails.vue?vue&type=template&id=3dead726&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase@report/openingproduct@reportdetails.vue?vue&type=template&id=3dead726& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
    _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
      _c("ol", { staticClass: "breadcrumb" }, [
        _c(
          "li",
          { staticClass: "breadcrumb-item" },
          [
            _c("router-link", { attrs: { to: "/openingproduct@report" } }, [
              _vm._v("Opening Product Report")
            ])
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
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
              _vm._l(_vm.purchaseProductReports.data, function(
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
                            "#purchaseId" +
                            purchaseProductReport.purchaseProductId
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
                        id:
                          "purchaseId" +
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
                            _vm._m(2, true),
                            _vm._v(" "),
                            _c("div", { staticClass: "modal-body" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "card main-card  element-block-example"
                                },
                                [
                                  _vm._m(3, true),
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
                                          _vm._m(4, true),
                                          _vm._v(" "),
                                          _c("tbody", [
                                            purchaseProductReport.invoice
                                              ? _c("tr", [
                                                  _c("td", [
                                                    _vm._v(_vm._s(index + 1))
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        purchaseProductReport
                                                          .invoice.purchaseDate
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        purchaseProductReport
                                                          .invoice
                                                          .totalPurchaseValue
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    purchaseProductReport
                                                      .invoice.discount
                                                      ? _c("span", [
                                                          _vm._v(
                                                            "\n                     " +
                                                              _vm._s(
                                                                purchaseProductReport
                                                                  .invoice
                                                                  .discount
                                                              ) +
                                                              "\n                  "
                                                          )
                                                        ])
                                                      : _c("span", [
                                                          _vm._v("---")
                                                        ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        purchaseProductReport
                                                          .invoice
                                                          .supplierPayable
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        purchaseProductReport
                                                          .invoice
                                                          .totalProductCost
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    purchaseProductReport
                                                      .invoice
                                                      .previousPayableDue
                                                      ? _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              purchaseProductReport
                                                                .invoice
                                                                .previousPayableDue
                                                            )
                                                          )
                                                        ])
                                                      : _c("span", [
                                                          _vm._v("---")
                                                        ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        purchaseProductReport
                                                          .invoice
                                                          .currentPayable
                                                      )
                                                    )
                                                  ])
                                                ])
                                              : _vm._e()
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(5, true)
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
                            _vm._m(6, true),
                            _vm._v(" "),
                            _c("div", { staticClass: "modal-body" }, [
                              _c(
                                "div",
                                { staticClass: "col-12 pl-0 pt-2 border" },
                                [
                                  _c("div", { staticClass: "row m-0" }, [
                                    _vm._m(7, true),
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
                                    _vm._m(8, true),
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
                                    _vm._m(9, true),
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
                                    _vm._m(10, true),
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
                                    _vm._m(11, true),
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
                                    _vm._m(12, true),
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
                                    _vm._m(13, true),
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
                                    _vm._m(14, true),
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
                                    _vm._m(15, true),
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
                                    _vm._m(16, true),
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
                                    _vm._m(17, true),
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
                                    _vm._m(18, true),
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
                                    _vm._m(19, true),
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
                                    _vm._m(20, true),
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
        "span",
        { staticClass: "card_footer" },
        [
          _c(
            "pagination",
            {
              attrs: { data: _vm.purchaseProductReports, limit: _vm.limit },
              on: { "pagination-change-page": _vm.getPaginateList }
            },
            [
              _c("span", { attrs: { slot: "prev-nav" }, slot: "prev-nav" }, [
                _vm._v("< Previous")
              ]),
              _vm._v(" "),
              _c("span", { attrs: { slot: "next-nav" }, slot: "next-nav" }, [
                _vm._v("Next >")
              ])
            ]
          )
        ],
        1
      )
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
          _vm._v("Opening Product List")
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
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Brand")]),
        _vm._v(" "),
        _c("th", [_vm._v("Invoice")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit")]),
        _vm._v(" "),
        _c("th", [_vm._v("Color/Size")]),
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
        [_vm._v(" Details")]
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
          _vm._v("Opening Invoice Report")
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
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total")]),
        _vm._v(" "),
        _c("th", [_vm._v("Discount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Payable")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total.Cost")]),
        _vm._v(" "),
        _c("th", [_vm._v("Previous.Due")]),
        _vm._v(" "),
        _c("th", [_vm._v("Current.Payable")])
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

/***/ "./resources/js/admin/page/purchase/purchase@report/openingproduct@reportdetails.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase@report/openingproduct@reportdetails.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _openingproduct_reportdetails_vue_vue_type_template_id_3dead726___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openingproduct@reportdetails.vue?vue&type=template&id=3dead726& */ "./resources/js/admin/page/purchase/purchase@report/openingproduct@reportdetails.vue?vue&type=template&id=3dead726&");
/* harmony import */ var _openingproduct_reportdetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openingproduct@reportdetails.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/purchase/purchase@report/openingproduct@reportdetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _openingproduct_reportdetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _openingproduct_reportdetails_vue_vue_type_template_id_3dead726___WEBPACK_IMPORTED_MODULE_0__["render"],
  _openingproduct_reportdetails_vue_vue_type_template_id_3dead726___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/purchase/purchase@report/openingproduct@reportdetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase@report/openingproduct@reportdetails.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase@report/openingproduct@reportdetails.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_openingproduct_reportdetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./openingproduct@reportdetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/openingproduct@reportdetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_openingproduct_reportdetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase@report/openingproduct@reportdetails.vue?vue&type=template&id=3dead726&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase@report/openingproduct@reportdetails.vue?vue&type=template&id=3dead726& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_openingproduct_reportdetails_vue_vue_type_template_id_3dead726___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./openingproduct@reportdetails.vue?vue&type=template&id=3dead726& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/openingproduct@reportdetails.vue?vue&type=template&id=3dead726&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_openingproduct_reportdetails_vue_vue_type_template_id_3dead726___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_openingproduct_reportdetails_vue_vue_type_template_id_3dead726___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);