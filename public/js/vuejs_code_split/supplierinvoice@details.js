(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["supplierinvoice@details"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/supplier@product@details.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase@report/supplier@product@details.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lists: [],
      infos: [],
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
    this.view();
    this.getPaginateList();
    this.colorList();
    this.sizeList();
  },
  methods: {
    view: function view() {
      var _this = this;

      axios.get("/supplierProductDetails/" + this.$route.params.productSupplierId).then(function (res) {
        _this.lists = res.data.lists;
      });
    },
    colorList: function colorList() {
      var _this2 = this;

      axios.get("/colorListAll").then(function (res) {
        _this2.colorLists = res.data.colorList;
      });
    },
    sizeList: function sizeList() {
      var _this3 = this;

      axios.get("/sizeListAll").then(function (res) {
        _this3.sizeLists = res.data.sizeList;
      });
    },
    getPaginateList: function getPaginateList() {
      var _this4 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/supplierProductDetails/' + this.$route.params.productSupplierId + '?page=' + page).then(function (response) {
        _this4.lists = response.data.lists;
      });
    },
    details: function details(pid, bid) {
      var _this5 = this;

      axios.get('/purchasePriceHistory/' + this.$route.params.productSupplierId + '/' + pid + '/' + bid).then(function (res) {
        _this5.infos = res.data.lists;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/supplierinvoice@details.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase@report/supplierinvoice@details.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return _ref = {
      purchaseInvoiceReports: {}
    }, _defineProperty(_ref, "purchaseInvoiceReports", {}), _defineProperty(_ref, "gets", ""), _defineProperty(_ref, "invoiceInfo", ""), _defineProperty(_ref, "invoiceProductLists", []), _defineProperty(_ref, "purchaseProductList", []), _defineProperty(_ref, "productBrandLists", []), _defineProperty(_ref, "purchaseTypes", []), _defineProperty(_ref, "unitLists", []), _defineProperty(_ref, "bankInfoDetails", []), _defineProperty(_ref, "countryLists", []), _defineProperty(_ref, "colorLists", {}), _defineProperty(_ref, "sizeLists", {}), _defineProperty(_ref, "supplierInfo", ""), _ref;
  },
  mounted: function mounted() {
    this.productSupplierList();
    this.getInvoiceSetupInformation();
    this.colorList();
    this.sizeList();
  },
  methods: {
    Statement: function Statement() {
      this.$router.push('/productSupplierStatement' + this.$route.params.productSupplierId);
    },
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
    productSupplierList: function productSupplierList() {
      var _this3 = this;

      axios.get('/supplierInvoiceDetails/' + this.$route.params.productSupplierId).then(function (res) {
        _this3.purchaseInvoiceReports = res.data.purchaseInvoiceReports;
      });
    },
    getInvoiceSetupInformation: function getInvoiceSetupInformation() {
      var _this4 = this;

      var uri = "getInvoiceSetupInformation/2";
      axios.get(uri).then(function (response) {
        _this4.gets = response.data.data;
      });
    },
    bankDetails: function bankDetails(id) {
      var _this5 = this;

      var uri = 'getInvoiceBankDetails/' + id;
      axios.get(uri).then(function (response) {
        _this5.bankInfoDetails = response.data.data;
      });
    },
    viewInvoiceInfo: function viewInvoiceInfo(id) {
      var _this6 = this;

      var uri = 'getInvoiceInformation/' + id;
      axios.get(uri).then(function (response) {
        _this6.unitLists = response.data.unitList;
        _this6.countryLists = response.data.countryList;
        _this6.purchaseTypes = response.data.purchaseType;
        _this6.productBrandLists = response.data.productBrandList;
        _this6.supplier_id = response.data.data.productSupplierId;
        _this6.invoiceInfo = response.data.data;
        _this6.invoiceProductLists = response.data.invoiceProductLists;

        if (response.data.supplierInfo) {
          _this6.supplierInfo = response.data.supplierInfo;
        }

        _this6.purchaseProductList = response.data.purchaseProductList;

        if (_this6.invoiceInfo.bank > 0) {
          _this6.bankDetails(id);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/supplier@product@details.vue?vue&type=template&id=50e23f45&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase@report/supplier@product@details.vue?vue&type=template&id=50e23f45& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
            staticClass: "table table-hover table-bordered mb-0",
            staticStyle: { width: "1231px" },
            attrs: { id: "sampleTable" }
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.lists.data, function(list, index) {
                return _c("tr", { key: list.id }, [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(list.product_name.productName))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(list.brand_name.productBrandName))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(list.quantity))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(list.totalPrice))]),
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
                          "data-target": "#purchaseProductId"
                        },
                        on: {
                          click: function($event) {
                            return _vm.details(list.productId, list.brandId)
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: " fa fa-eye pr-2" }),
                        _vm._v(" Price History\n                 ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "modal fade",
                        attrs: {
                          id: "purchaseProductId",
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
                                      "card main-card element-block-example"
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
                                            _c(
                                              "tbody",
                                              _vm._l(_vm.infos, function(
                                                info,
                                                index
                                              ) {
                                                return _c(
                                                  "tr",
                                                  { key: info.id },
                                                  [
                                                    _c("td", [
                                                      _vm._v(_vm._s(index + 1))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(info.created_at)
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          info.product_name
                                                            .productName
                                                        )
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          info.brand_name
                                                            .productBrandName
                                                        )
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      [
                                                        _vm._l(
                                                          _vm.colorLists,
                                                          function(colorList) {
                                                            return colorList.id ==
                                                              info.colorId
                                                              ? _c("span", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      colorList.colorName
                                                                    )
                                                                  )
                                                                ])
                                                              : _vm._e()
                                                          }
                                                        ),
                                                        _vm._v(" "),
                                                        _vm._l(
                                                          _vm.sizeLists,
                                                          function(sizeList) {
                                                            return sizeList.id ==
                                                              info.sizeId
                                                              ? _c("span", [
                                                                  _vm._v(
                                                                    "/ " +
                                                                      _vm._s(
                                                                        sizeList.sizeName
                                                                      )
                                                                  )
                                                                ])
                                                              : _vm._e()
                                                          }
                                                        )
                                                      ],
                                                      2
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          info.purchaseInvoiceNo
                                                        )
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(info.unitPrice)
                                                      )
                                                    ])
                                                  ]
                                                )
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
                              _vm._m(5, true)
                            ])
                          ]
                        )
                      ]
                    )
                  ])
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
              attrs: { data: _vm.lists, limit: _vm.limit },
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
          _vm._v("Product Supplier Report")
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
        _c("th", [_vm._v(" SN ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Product")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Brand")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Total_Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Total.Price")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Action")])
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
        [_vm._v("\n                Price History\n              ")]
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
          _vm._v(" Product List ")
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
        _c("th", [_vm._v("Product.Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Brand")]),
        _vm._v(" "),
        _c("th", [_vm._v("Color/Size")]),
        _vm._v(" "),
        _c("th", [_vm._v("Invoice.No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit.Price")])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/supplierinvoice@details.vue?vue&type=template&id=c3a6d36a&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase@report/supplierinvoice@details.vue?vue&type=template&id=c3a6d36a& ***!
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
    _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
      _c("ol", { staticClass: "breadcrumb" }, [
        _c(
          "li",
          { staticClass: "breadcrumb-item" },
          [
            _c("router-link", { attrs: { to: "/productsupplier@report" } }, [
              _vm._v("Product Supplier Report")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-hover-shine  btn-primary",
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.Statement()
              }
            }
          },
          [_vm._v("\n                  Statment ")]
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
          { staticClass: "table table-hover table-bordered table-striped" },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.purchaseInvoiceReports, function(
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
                          "  " + _vm._s(purchaseInvoiceReport.purchaseInvoiceNo)
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(purchaseInvoiceReport.totalPurchaseValue))
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(purchaseInvoiceReport.discount))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(purchaseInvoiceReport.currentPayable))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    purchaseInvoiceReport.bank == null
                      ? _c("span", [
                          _vm._v(
                            "\n                 " +
                              _vm._s(parseFloat(purchaseInvoiceReport.cash)) +
                              "\n                "
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    purchaseInvoiceReport.cash == null
                      ? _c("span", [
                          _vm._v(
                            "\n                 " +
                              _vm._s(parseFloat(purchaseInvoiceReport.bank)) +
                              "\n                "
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    purchaseInvoiceReport.bank != null &&
                    purchaseInvoiceReport.cash != null
                      ? _c("span", [
                          _vm._v(
                            "\n                 " +
                              _vm._s(
                                parseFloat(purchaseInvoiceReport.cash) +
                                  parseFloat(purchaseInvoiceReport.bank)
                              ) +
                              "\n                "
                          )
                        ])
                      : _vm._e()
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
                                      attrs: { id: "" }
                                    },
                                    [
                                      _c("div", { staticClass: "invoice" }, [
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
                                                                  _vm.gets.email
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
                                                                        _vm.gets
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
                                                                  _vm.gets.email
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
                                                { staticClass: "row contacts" },
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
                                                          staticClass: "address"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                      " +
                                                              _vm._s(
                                                                _vm.supplierInfo
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
                                                          staticClass: "address"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                      " +
                                                              _vm._s(
                                                                _vm.supplierInfo
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
                                                            _vm.gets.themeColor
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
                                                        { staticClass: "date" },
                                                        [
                                                          _vm._v(
                                                            "\n                                      " +
                                                              _vm._s(
                                                                _vm.gets.toText
                                                              ) +
                                                              ":\n                                      " +
                                                              _vm._s(
                                                                _vm.invoiceInfo
                                                                  .purchaseInvoiceNo
                                                              ) +
                                                              "\n                                    "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        { staticClass: "date" },
                                                        [
                                                          _vm._v(
                                                            "\n                                      Purchase Date:\n                                      " +
                                                              _vm._s(
                                                                _vm.invoiceInfo
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
                                                              _vm.productBrandLists,
                                                              function(
                                                                productBrandList
                                                              ) {
                                                                return productBrandList.productBrandEntryId ==
                                                                  invoiceProductList.brandId
                                                                  ? _c(
                                                                      "span",
                                                                      {
                                                                        key:
                                                                          productBrandList.productBrandEntryId
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            productBrandList.productBrandName
                                                                          )
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
                                                              " " +
                                                                _vm._s(
                                                                  invoiceProductList.totalPrice
                                                                ) +
                                                                " "
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
                                                    _vm._m(7, true),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass: "border-0"
                                                      },
                                                      [
                                                        _c("b", [
                                                          _vm._v(
                                                            "\n                                        :\n                                        " +
                                                              _vm._s(
                                                                _vm.invoiceInfo
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
                                                            ]),
                                                            _vm._v(" "),
                                                            _vm.invoiceInfo
                                                              .cash > 0
                                                              ? _c("tr", [
                                                                  _c(
                                                                    "td",
                                                                    {
                                                                      staticClass:
                                                                        "text-right"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                            Cash Payment\n                                          "
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
                                                                              .cash
                                                                          ) +
                                                                          "\n                                          "
                                                                      )
                                                                    ]
                                                                  )
                                                                ])
                                                              : _vm._e(),
                                                            _vm._v(" "),
                                                            _vm.invoiceInfo
                                                              .bank > 0
                                                              ? _c("tr", [
                                                                  _c(
                                                                    "td",
                                                                    {
                                                                      staticClass:
                                                                        "text-right"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                            Bank Payment\n                                          "
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
                                                                              .bank
                                                                          ) +
                                                                          "\n                                          "
                                                                      )
                                                                    ]
                                                                  )
                                                                ])
                                                              : _vm._e(),
                                                            _vm._v(" "),
                                                            _vm.invoiceInfo
                                                              .bank > 0
                                                              ? _c("tr", [
                                                                  _c(
                                                                    "td",
                                                                    {
                                                                      staticClass:
                                                                        "text-right"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                            Bank Name\n                                          "
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
                                                                              .bankInfoDetails
                                                                              .bankName
                                                                          ) +
                                                                          " (" +
                                                                          _vm._s(
                                                                            _vm
                                                                              .bankInfoDetails
                                                                              .bankAccountType
                                                                          ) +
                                                                          ")\n                                          "
                                                                      )
                                                                    ]
                                                                  )
                                                                ])
                                                              : _vm._e(),
                                                            _vm._v(" "),
                                                            _vm.invoiceInfo
                                                              .bank > 0
                                                              ? _c("tr", [
                                                                  _c(
                                                                    "td",
                                                                    {
                                                                      staticClass:
                                                                        "text-right"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                            Bank Account\n                                          "
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
                                                                              .bankInfoDetails
                                                                              .bankAccountNo
                                                                          ) +
                                                                          " \n                                            "
                                                                      ),
                                                                      _vm
                                                                        .bankInfoDetails
                                                                        .branch
                                                                        ? _c(
                                                                            "span",
                                                                            [
                                                                              _vm._v(
                                                                                "(" +
                                                                                  _vm._s(
                                                                                    _vm
                                                                                      .bankInfoDetails
                                                                                      .branch
                                                                                  ) +
                                                                                  ")"
                                                                              )
                                                                            ]
                                                                          )
                                                                        : _vm._e()
                                                                    ]
                                                                  )
                                                                ])
                                                              : _vm._e()
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
                                      ])
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
          _vm._v("Purchase Invoice List")
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
        _c("th", [_vm._v("Purchase Invoice No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Purchase Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Discount Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Purchase Cost")]),
        _vm._v(" "),
        _c("th", [_vm._v("Paid")])
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
            "\n                      Product Details\n                    "
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
      { staticClass: "text-right border-0", attrs: { colspan: "10" } },
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

/***/ "./resources/js/admin/page/purchase/purchase@report/supplier@product@details.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase@report/supplier@product@details.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _supplier_product_details_vue_vue_type_template_id_50e23f45___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier@product@details.vue?vue&type=template&id=50e23f45& */ "./resources/js/admin/page/purchase/purchase@report/supplier@product@details.vue?vue&type=template&id=50e23f45&");
/* harmony import */ var _supplier_product_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier@product@details.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/purchase/purchase@report/supplier@product@details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _supplier_product_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _supplier_product_details_vue_vue_type_template_id_50e23f45___WEBPACK_IMPORTED_MODULE_0__["render"],
  _supplier_product_details_vue_vue_type_template_id_50e23f45___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/purchase/purchase@report/supplier@product@details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase@report/supplier@product@details.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase@report/supplier@product@details.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_product_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./supplier@product@details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/supplier@product@details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_product_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase@report/supplier@product@details.vue?vue&type=template&id=50e23f45&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase@report/supplier@product@details.vue?vue&type=template&id=50e23f45& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_product_details_vue_vue_type_template_id_50e23f45___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./supplier@product@details.vue?vue&type=template&id=50e23f45& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/supplier@product@details.vue?vue&type=template&id=50e23f45&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_product_details_vue_vue_type_template_id_50e23f45___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_product_details_vue_vue_type_template_id_50e23f45___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase@report/supplierinvoice@details.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase@report/supplierinvoice@details.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _supplierinvoice_details_vue_vue_type_template_id_c3a6d36a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplierinvoice@details.vue?vue&type=template&id=c3a6d36a& */ "./resources/js/admin/page/purchase/purchase@report/supplierinvoice@details.vue?vue&type=template&id=c3a6d36a&");
/* harmony import */ var _supplierinvoice_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplierinvoice@details.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/purchase/purchase@report/supplierinvoice@details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _supplierinvoice_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _supplierinvoice_details_vue_vue_type_template_id_c3a6d36a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _supplierinvoice_details_vue_vue_type_template_id_c3a6d36a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/purchase/purchase@report/supplierinvoice@details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase@report/supplierinvoice@details.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase@report/supplierinvoice@details.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supplierinvoice_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./supplierinvoice@details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/supplierinvoice@details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supplierinvoice_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase@report/supplierinvoice@details.vue?vue&type=template&id=c3a6d36a&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase@report/supplierinvoice@details.vue?vue&type=template&id=c3a6d36a& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_supplierinvoice_details_vue_vue_type_template_id_c3a6d36a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./supplierinvoice@details.vue?vue&type=template&id=c3a6d36a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase@report/supplierinvoice@details.vue?vue&type=template&id=c3a6d36a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_supplierinvoice_details_vue_vue_type_template_id_c3a6d36a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_supplierinvoice_details_vue_vue_type_template_id_c3a6d36a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);