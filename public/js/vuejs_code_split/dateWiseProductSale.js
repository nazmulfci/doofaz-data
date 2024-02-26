(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dateWiseProductSale"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/dateWiseProductSale.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@report/dateWiseProductSale.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      productDetailsLists: [],
      chartOfAccountLists: [],
      chartOfAccountRegisterLists: [],
      mainHeadLists: [],
      subHeadLists: [],
      voucherTypeLists: [],
      IncomeExpenseCompanyList: [],
      voucherInformationLists: '',
      totalProfit: 0,
      resultNotFound: true,
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a,
      form: new Form({
        mainHead: '',
        subHead: '',
        voucherType: '',
        dateFrom: '',
        dateTo: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"),
        voucherNo: '',
        productIdClick: ''
      })
    };
  },
  mounted: function mounted() {
    this.view();
    this.salesProductList();
  },
  methods: {
    view: function view() {
      this.form.mainHead = '';
      this.form.subHead = '';
      this.form.voucherType = '';
      this.form.voucherDate = '';
      this.form.voucherNo = '';
    },
    productSearch: function productSearch() {
      var _this = this;

      var url = 'dateWiseProductSearch';
      this.form.post(url).then(function (response) {
        if (response.data.data == '') {
          _this.resultNotFound = true;
        } else {
          _this.resultNotFound = false;
        }

        _this.voucherInformationLists = response.data.productList;
        _this.totalProfit = response.data.toatlProfit;
      });
    },
    showDetails: function showDetails(e) {
      var _this2 = this;

      // alert(e);
      this.form.productIdClick = e;
      var url = 'dateWiseDetailsProductSearch';
      this.form.post(url).then(function (response) {
        _this2.productDetailsLists = response.data.product;
      });
    },
    salesProductList: function salesProductList() {
      var _this3 = this;

      var url = 'salesProductList';
      this.form.get(url).then(function (response) {
        _this3.voucherTypeLists = response.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/dateWiseProductSale.vue?vue&type=template&id=041de232&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@report/dateWiseProductSale.vue?vue&type=template&id=041de232& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
                    { staticClass: "text-center", attrs: { colspan: "15" } },
                    [
                      _c("center", [
                        _c(
                          "form",
                          {
                            attrs: { method: "" },
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.productSearch()
                              }
                            }
                          },
                          [
                            _c("table", {}, [
                              _c("tr", [
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.dateFrom,
                                        expression: "form.dateFrom"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    staticStyle: { width: "150px" },
                                    attrs: {
                                      type: "date",
                                      placeholder: "Select Date"
                                    },
                                    domProps: { value: _vm.form.dateFrom },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "dateFrom",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.dateTo,
                                        expression: "form.dateTo"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    staticStyle: { width: "150px" },
                                    attrs: {
                                      type: "date",
                                      placeholder: "Select Date"
                                    },
                                    domProps: { value: _vm.form.dateTo },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "dateTo",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.productIdClick,
                                        expression: "form.productIdClick"
                                      }
                                    ],
                                    attrs: { type: "hidden" },
                                    domProps: {
                                      value: _vm.form.productIdClick
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "productIdClick",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.productId,
                                          expression: "form.productId"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      staticStyle: { width: "180px" },
                                      attrs: {
                                        type: "text",
                                        placeholder: "Select Voucher Type"
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.form,
                                            "productId",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("option", { attrs: { value: "" } }, [
                                        _vm._v(" Select Product ")
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(_vm.voucherTypeLists, function(
                                        voucherTypeList
                                      ) {
                                        return _c(
                                          "option",
                                          {
                                            domProps: {
                                              value:
                                                voucherTypeList.productNameId
                                            }
                                          },
                                          [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  voucherTypeList.productName
                                                ) +
                                                " "
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    staticClass: "btn btn-primary",
                                    attrs: { type: "submit", value: "Search" }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    staticClass: "btn btn-danger",
                                    attrs: { type: "reset" }
                                  })
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
              ]),
              _vm._v(" "),
              _c("thead", [
                _c("tr", [
                  _c(
                    "th",
                    { staticClass: "text-center", attrs: { colspan: "15" } },
                    [
                      _c("button", { staticClass: "btn btn-success" }, [
                        _c("b", { staticStyle: { "font-size": "17px" } }, [
                          _vm._v(
                            "Total Profit : " + _vm._s(_vm.totalProfit) + " "
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.voucherInformationLists, function(
                    voucherInformationList,
                    index
                  ) {
                    return _c("tr", [
                      _c("td", [_vm._v(" " + _vm._s(index + 1) + " ")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " +
                            _vm._s(
                              _vm
                                .moment(voucherInformationList.created_at)
                                .format("DD-MMMM-YYYY")
                            ) +
                            " "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " + _vm._s(voucherInformationList.productId) + " "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " + _vm._s(voucherInformationList.quantity) + " "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " +
                            _vm._s(voucherInformationList.returnQuantity) +
                            " "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " + _vm._s(voucherInformationList.unitPrice) + " "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(" " + _vm._s(voucherInformationList.sales) + " ")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " + _vm._s(voucherInformationList.wholesale) + " "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " + _vm._s(voucherInformationList.special) + " "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " + _vm._s(voucherInformationList.ecommerce) + " "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " + _vm._s(voucherInformationList.totalPrice) + " "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " + _vm._s(voucherInformationList.totalReturn) + " "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " + _vm._s(voucherInformationList.totalProfit) + " "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: {
                              type: "button",
                              "data-toggle": "modal",
                              "data-target": "#exampleModalCenter"
                            },
                            on: {
                              click: function($event) {
                                return _vm.showDetails(
                                  voucherInformationList.product
                                )
                              }
                            }
                          },
                          [_vm._v(" Show  ")]
                        )
                      ])
                    ])
                  }),
                  _vm._v(" "),
                  _vm.resultNotFound
                    ? _c("tr", [
                        _c(
                          "td",
                          { attrs: { colspan: "16" } },
                          [_c("center", [_vm._v(" Result Not Found. ")])],
                          1
                        )
                      ])
                    : _vm._e()
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal fade",
              attrs: {
                id: "exampleModalCenter",
                tabindex: "-1",
                role: "dialog",
                "aria-labelledby": "exampleModalCenterTitle",
                "aria-hidden": "true"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "modal-dialog modal-dialog-centered",
                  attrs: { role: "document" }
                },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body table-responsive" }, [
                      _c("table", { staticClass: "table table-bordered" }, [
                        _vm._m(3),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.productDetailsLists, function(
                            productDetailsList,
                            index
                          ) {
                            return _c("tr", [
                              _c("td", [_vm._v(" " + _vm._s(index + 1) + " ")]),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticStyle: { "white-space": "nowrap" } },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm
                                          .moment(productDetailsList.created_at)
                                          .format("DD-MMMM-YYYY")
                                      ) +
                                      " "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticStyle: { "white-space": "nowrap" } },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        productDetailsList.salesCustomerType
                                      ) +
                                      " "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticStyle: { "white-space": "nowrap" } },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        productDetailsList.salesCustomerName
                                      ) +
                                      " "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticStyle: { "white-space": "nowrap" } },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(productDetailsList.productId) +
                                      " "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticStyle: { "white-space": "nowrap" } },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(productDetailsList.brandId) +
                                      " "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticStyle: { "white-space": "nowrap" } },
                                [
                                  _vm._v(
                                    " " + _vm._s(productDetailsList.size) + " "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticStyle: { "white-space": "nowrap" } },
                                [
                                  _vm._v(
                                    " " + _vm._s(productDetailsList.color) + " "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticStyle: { "white-space": "nowrap" } },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(productDetailsList.quantity) +
                                      " "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticStyle: { "white-space": "nowrap" } },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(productDetailsList.unitPrice) +
                                      " "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticStyle: { "white-space": "nowrap" } },
                                [
                                  _vm._v(
                                    " " + _vm._s(productDetailsList.sales) + " "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticStyle: { "white-space": "nowrap" } },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(productDetailsList.wholesale) +
                                      " "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticStyle: { "white-space": "nowrap" } },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(productDetailsList.special) +
                                      " "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticStyle: { "white-space": "nowrap" } },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(productDetailsList.ecommerce) +
                                      " "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticStyle: { "white-space": "nowrap" } },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(productDetailsList.totalDiscount) +
                                      " "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticStyle: { "white-space": "nowrap" } },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(productDetailsList.totalPrice) +
                                      " "
                                  )
                                ]
                              )
                            ])
                          }),
                          0
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(4)
                  ])
                ]
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
          _vm._v("\n          Date Wise Product Sale ")
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
        _c("th", [_vm._v(" SL ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Date ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Product Name ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Quantity ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Return Quantity ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" MRP ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Sales  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Wholesale  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Special  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" E-Commerce  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Total Sale  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Total Return  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Profit  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" View  ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLongTitle" } },
        [_vm._v("Product Details")]
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
        _c("th", [_vm._v(" SL ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Date")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Customer Type ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Customer Name ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Product Name ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Brand ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Size ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Color ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Quantity ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" MRP ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Sales  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Wholesale  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Special  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" E-Commerce  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Discount ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Total Sale  ")])
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

/***/ "./resources/js/admin/page/sales/sales@report/dateWiseProductSale.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/dateWiseProductSale.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dateWiseProductSale_vue_vue_type_template_id_041de232___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateWiseProductSale.vue?vue&type=template&id=041de232& */ "./resources/js/admin/page/sales/sales@report/dateWiseProductSale.vue?vue&type=template&id=041de232&");
/* harmony import */ var _dateWiseProductSale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateWiseProductSale.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/sales/sales@report/dateWiseProductSale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dateWiseProductSale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dateWiseProductSale_vue_vue_type_template_id_041de232___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dateWiseProductSale_vue_vue_type_template_id_041de232___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/sales/sales@report/dateWiseProductSale.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/dateWiseProductSale.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/dateWiseProductSale.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dateWiseProductSale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./dateWiseProductSale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/dateWiseProductSale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dateWiseProductSale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/dateWiseProductSale.vue?vue&type=template&id=041de232&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/dateWiseProductSale.vue?vue&type=template&id=041de232& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dateWiseProductSale_vue_vue_type_template_id_041de232___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./dateWiseProductSale.vue?vue&type=template&id=041de232& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/dateWiseProductSale.vue?vue&type=template&id=041de232&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dateWiseProductSale_vue_vue_type_template_id_041de232___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dateWiseProductSale_vue_vue_type_template_id_041de232___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);