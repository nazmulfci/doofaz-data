(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["openinginvoice@report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/openinginvoice@report.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase@report/openinginvoice@report.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
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
    this.productSupplierList();
    this.getPaginateList();
    this.colorList();
    this.sizeList();
    this.getInvoiceSetupInformation();
    this.productBrandList();
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
    productSupplierList: function productSupplierList() {
      var _this3 = this;

      axios.get("/openingInvoiceReport").then(function (res) {
        _this3.purchaseInvoiceReports = res.data.purchaseInvoiceReports;
      });
    },
    productBrandList: function productBrandList() {
      var _this4 = this;

      axios.get("/productBrandList").then(function (res) {
        _this4.allProductBrandLists = res.data.productBrandList;
      });
    },
    getPaginateList: function getPaginateList() {
      var _this5 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/openingInvoiceReport?page=" + page).then(function (response) {
        _this5.purchaseInvoiceReports = response.data.purchaseInvoiceReports;
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

      var uri = 'getOpeningInvoiceInformation/' + id;
      axios.get(uri).then(function (response) {
        _this7.unitLists = response.data.unitList;
        _this7.countryLists = response.data.countryList;
        _this7.purchaseTypes = response.data.purchaseType;
        _this7.productBrandLists = response.data.productBrandList;
        _this7.supplier_id = response.data.data.productSupplierId;
        _this7.invoiceInfo = response.data.data;
        _this7.invoiceProductLists = response.data.invoiceProductLists;

        if (response.data.supplierInfo) {
          _this7.supplierInfo = response.data.supplierInfo;
        }

        _this7.purchaseProductList = response.data.purchaseProductList;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/openinginvoice@report.vue?vue&type=template&id=3f69d867&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase@report/openinginvoice@report.vue?vue&type=template&id=3f69d867& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
          _c(
            "table",
            {
              staticClass: "table table-hover table-striped table-bordered",
              staticStyle: { width: "100%" },
              attrs: { id: "example" }
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.purchaseInvoiceReports.data, function(
                  purchaseInvoiceReport,
                  index
                ) {
                  return _c("tr", [
                    _c("td", [_vm._v(_vm._s(index + 1))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(purchaseInvoiceReport.purchaseDate))
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
                            "data-target": "#purchaseId"
                          },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.viewInvoiceInfo(
                                purchaseInvoiceReport.purchaseInvoiceId
                              )
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(purchaseInvoiceReport.purchaseInvoiceNo) +
                              "\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(purchaseInvoiceReport.totalPurchaseValue))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(purchaseInvoiceReport.totalProductCost))
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
                                  _c("div", { staticClass: "card-body" }, [
                                    _vm._m(3, true),
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
                                                          {
                                                            staticClass: "row"
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "col"
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
                                                                          _vm
                                                                            .gets
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
                                                          {
                                                            staticClass: "row"
                                                          },
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
                                                      staticClass:
                                                        "row contacts"
                                                    },
                                                    [
                                                      _vm._m(4, true),
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
                                                                  " Opening Invoice "
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
                                                              staticClass:
                                                                "date"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                      Opening Invoice:\n                                      " +
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
                                                              staticClass:
                                                                "date"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                       Date:\n                                      " +
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
                                                      _vm._m(5, true),
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
                                                                  _vm._s(
                                                                    ++index
                                                                  )
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
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("td", {}, [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      invoiceProductList.discount
                                                                    ) +
                                                                    "% "
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("td", {}, [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      invoiceProductList.totalWithDiscount
                                                                    ) +
                                                                    " "
                                                                )
                                                              ])
                                                            ])
                                                          }
                                                        ),
                                                        0
                                                      ),
                                                      _vm._v(" "),
                                                      _c("tr", [
                                                        _vm._m(6, true),
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
                              _vm._m(7, true)
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
      ]),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "card_footer" },
        [
          _c(
            "pagination",
            {
              attrs: { data: _vm.purchaseInvoiceReports, limit: _vm.limit },
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
            _c("h4", [_vm._v(" Opening Invoice Report ")])
          ]
        )
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
        _c("th", [_vm._v("Invoice.No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total.Cost")])
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
            "\n                      Opening Details\n                    "
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
    return _c("div", { staticClass: "col invoice-to" }, [
      _c("div", { staticClass: "text-gray-light" }, [_c("u")]),
      _vm._v(" "),
      _c("div", { staticClass: "address" }),
      _vm._v(" "),
      _c("div", { staticClass: "address" }),
      _vm._v(" "),
      _c("div", { staticClass: "email" })
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
        _c("th", { staticClass: "text-left" }, [_vm._v("UNIT")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v("Color/Size")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Quantity")]),
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
      { staticClass: "text-right border-0", attrs: { colspan: "9" } },
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase@report/openinginvoice@report.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase@report/openinginvoice@report.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _openinginvoice_report_vue_vue_type_template_id_3f69d867___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openinginvoice@report.vue?vue&type=template&id=3f69d867& */ "./resources/js/admin/page/purchase/purchase@report/openinginvoice@report.vue?vue&type=template&id=3f69d867&");
/* harmony import */ var _openinginvoice_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openinginvoice@report.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/purchase/purchase@report/openinginvoice@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _openinginvoice_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _openinginvoice_report_vue_vue_type_template_id_3f69d867___WEBPACK_IMPORTED_MODULE_0__["render"],
  _openinginvoice_report_vue_vue_type_template_id_3f69d867___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/purchase/purchase@report/openinginvoice@report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase@report/openinginvoice@report.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase@report/openinginvoice@report.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_openinginvoice_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./openinginvoice@report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/openinginvoice@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_openinginvoice_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase@report/openinginvoice@report.vue?vue&type=template&id=3f69d867&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase@report/openinginvoice@report.vue?vue&type=template&id=3f69d867& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_openinginvoice_report_vue_vue_type_template_id_3f69d867___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./openinginvoice@report.vue?vue&type=template&id=3f69d867& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/openinginvoice@report.vue?vue&type=template&id=3f69d867&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_openinginvoice_report_vue_vue_type_template_id_3f69d867___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_openinginvoice_report_vue_vue_type_template_id_3f69d867___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);