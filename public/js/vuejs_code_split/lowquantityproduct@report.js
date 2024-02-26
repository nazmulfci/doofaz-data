(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lowquantityproduct@report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/lowquantityproduct@report.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@report/lowquantityproduct@report.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      lowQuantityProductLists: {},
      role: {},
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
      inward: ''
    };
  },
  mounted: function mounted() {
    this.purchaseProductReport();
  },
  methods: {
    showUnitList: function showUnitList(e) {
      var _this = this;

      this.adv_sales_priceLists = [];
      axios.get('showUnitListModal/' + e).then(function (res) {
        _this.adv_sales_priceLists = res.data.data;
        _this.inward = res.data.inward;
      });
      $("#unitListModal").modal("show");
    },
    purchaseProductReport: function purchaseProductReport() {
      function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }

      $(document).ready(function () {
        $("#sampleTable").DataTable({
          processing: true,
          serverSide: true,
          ajax: "/lowQuantityProductList",
          columns: [{
            data: "productId"
          }, {
            data: "product",
            name: "product.productName"
          }, {
            data: "brand",
            name: "brandName.productBrandName"
          }, {
            data: "color"
          }, {
            data: "size"
          }, {
            data: "quantity",
            render: function render(data, type, row) {
              var ok = '<button type="button" onclick="showUnitList(' + row.id + ')"     class="mr-2 btn-pill btn-hover-shine btn btn-danger">' + data + ' </button>';
              return ok;
            }
          }, {
            data: "productId",
            render: function render(data) {
              var ok = '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"   onclick="purchaseProductIdCatch(' + data + ')">' + "Details</button>";
              return ok;
            }
          }]
        });
      });
    },
    purchaseProductIdCatch: function purchaseProductIdCatch(productId) {
      var _this2 = this;

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
      axios.get('/stockSummaryProductDetailsInf/' + productId).then(function (res) {
        _this2.modelNo = res.data.purchaseProductDetails.modelNo;
        _this2.batchNo = res.data.purchaseProductDetails.batchNo;
        _this2.qrCode = res.data.purchaseProductDetails.qrCode;
        _this2.mfgLicenseNO = res.data.purchaseProductDetails.mfgLicenseNO;
        _this2.warranty = res.data.purchaseProductDetails.warranty;
        _this2.selectMothOrYearWarranty = res.data.purchaseProductDetails.selectMothOrYearWarranty;
        _this2.guarantee = res.data.purchaseProductDetails.guarantee;
        _this2.selectMothOrYearGuarantee = res.data.purchaseProductDetails.selectMothOrYearGuarantee;
        _this2.mfgDate = res.data.purchaseProductDetails.mfgDate;
        _this2.expiryDate = res.data.purchaseProductDetails.expiryDate;
        _this2.tax = res.data.purchaseProductDetails.tax;
        _this2.taxAmount = res.data.purchaseProductDetails.taxAmount;
        _this2.taxAmountType = res.data.purchaseProductDetails.taxAmountType;
        _this2.quantityType = res.data.purchaseProductDetails.quantityType;
        _this2.quantityNoti = res.data.purchaseProductDetails.quantityNoti;
        _this2.proDescription = res.data.purchaseProductDetails.proDescription;
        _this2.proAdvantage = res.data.purchaseProductDetails.proAdvantage;
      });
      $("#purchaseProductId").modal("show");
    }
  },
  created: function created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
      }
    });
    window.deleteExpense = this.deleteExpense;
    window.showUnitList = this.showUnitList;
    window.purchaseProductIdCatch = this.purchaseProductIdCatch;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/lowquantityproduct@report.vue?vue&type=template&id=3f7a6bd2&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@report/lowquantityproduct@report.vue?vue&type=template&id=3f7a6bd2& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "table-responsive bg-white p-2" }, [
        _vm._m(1),
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
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "col-12 pl-0 pt-2 border" }, [
                      _c("div", { staticClass: "row m-0" }, [
                        _vm._m(3),
                        _vm._v(" "),
                        _c("span", { staticClass: "col-6 p-0" }, [
                          _c("h6", [_vm._v(_vm._s(_vm.modelNo))])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 pl-0 pt-2 border" }, [
                      _c("div", { staticClass: "row m-0" }, [
                        _vm._m(4),
                        _vm._v(" "),
                        _c("span", { staticClass: "col-6 p-0" }, [
                          _c("h6", [_vm._v(_vm._s(_vm.batchNo))])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 pl-0 pt-2 border" }, [
                      _c("div", { staticClass: "row m-0" }, [
                        _vm._m(5),
                        _vm._v(" "),
                        _c("span", { staticClass: "col-6 p-0" }, [
                          _c("h6", [_vm._v(_vm._s(_vm.qrCode))])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 pl-0 pt-2 border" }, [
                      _c("div", { staticClass: "row m-0" }, [
                        _vm._m(6),
                        _vm._v(" "),
                        _c("span", { staticClass: "col-6 p-0" }, [
                          _c("h6", [_vm._v(_vm._s(_vm.mfgLicenseNO))])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 pl-0 pt-2 border" }, [
                      _c("div", { staticClass: "row m-0" }, [
                        _vm._m(7),
                        _vm._v(" "),
                        _c("span", { staticClass: "col-6 p-0" }, [
                          _c("h6", [
                            _vm.selectMothOrYearWarranty == 1
                              ? _c("span", [
                                  _vm._v(
                                    "\n                                           " +
                                      _vm._s(_vm.warranty * 1) +
                                      " Day\n                                       "
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.selectMothOrYearWarranty == 2
                              ? _c("span", [
                                  _vm._v(
                                    "\n                                           " +
                                      _vm._s(_vm.warranty * 30) +
                                      " Day\n                                       "
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.selectMothOrYearWarranty == 3
                              ? _c("span", [
                                  _vm._v(
                                    "\n                                           " +
                                      _vm._s(_vm.warranty * 12 * 30) +
                                      " Day\n                                       "
                                  )
                                ])
                              : _vm._e()
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 pl-0 pt-2 border" }, [
                      _c("div", { staticClass: "row m-0" }, [
                        _vm._m(8),
                        _vm._v(" "),
                        _c("span", { staticClass: "col-6 p-0" }, [
                          _c("h6", [
                            _vm.selectMothOrYearGuarantee == 1
                              ? _c("span", [
                                  _vm._v(
                                    "\n                                           " +
                                      _vm._s(_vm.guarantee * 1) +
                                      " Day\n                                       "
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.selectMothOrYearGuarantee == 2
                              ? _c("span", [
                                  _vm._v(
                                    "\n                                           " +
                                      _vm._s(_vm.guarantee * 30) +
                                      " Day\n                                       "
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.selectMothOrYearGuarantee == 3
                              ? _c("span", [
                                  _vm._v(
                                    "\n                                           " +
                                      _vm._s(_vm.guarantee * 12 * 30) +
                                      " Day\n                                       "
                                  )
                                ])
                              : _vm._e()
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 pl-0 pt-2 border" }, [
                      _c("div", { staticClass: "row m-0" }, [
                        _vm._m(9),
                        _vm._v(" "),
                        _c("span", { staticClass: "col-6 p-0" }, [
                          _c("h6", [_vm._v(_vm._s(_vm.mfgDate))])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 pl-0 pt-2 border" }, [
                      _c("div", { staticClass: "row m-0" }, [
                        _vm._m(10),
                        _vm._v(" "),
                        _c("span", { staticClass: "col-6 p-0" }, [
                          _c("h6", [_vm._v(_vm._s(_vm.expiryDate))])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 pl-0 pt-2 border" }, [
                      _c("div", { staticClass: "row m-0" }, [
                        _vm._m(11),
                        _vm._v(" "),
                        _c("span", { staticClass: "col-6 p-0" }, [
                          _c("h6", [_vm._v(_vm._s(_vm.tax))])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 pl-0 pt-2 border" }, [
                      _c("div", { staticClass: "row m-0" }, [
                        _vm._m(12),
                        _vm._v(" "),
                        _c("span", { staticClass: "col-6 p-0" }, [
                          _c("h6", [
                            _vm._v(
                              _vm._s(_vm.taxAmount) +
                                " " +
                                _vm._s(_vm.taxAmountType == 1 ? "Taka" : "") +
                                " " +
                                _vm._s(
                                  _vm.taxAmountType == 2 ? "Percetage" : ""
                                )
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 pl-0 pt-2 border" }, [
                      _c("div", { staticClass: "row m-0" }, [
                        _vm._m(13),
                        _vm._v(" "),
                        _c("span", { staticClass: "col-6 p-0" }, [
                          _c("h6", [
                            _vm._v(
                              _vm._s(_vm.quantityType == 1 ? "Low" : "") +
                                " " +
                                _vm._s(_vm.quantityType == 2 ? "Medium" : "") +
                                " " +
                                _vm._s(_vm.quantityType == 3 ? "High" : "")
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 pl-0 pt-2 border" }, [
                      _c("div", { staticClass: "row m-0" }, [
                        _vm._m(14),
                        _vm._v(" "),
                        _c("span", { staticClass: "col-6 p-0" }, [
                          _c("h6", [_vm._v(_vm._s(_vm.quantityNoti))])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 pl-0 pt-2 border" }, [
                      _c("div", { staticClass: "row m-0" }, [
                        _vm._m(15),
                        _vm._v(" "),
                        _c("span", { staticClass: "col-8 p-0" }, [
                          _c("h6", [_vm._v(_vm._s(_vm.proDescription))])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 pl-0 pt-2 border" }, [
                      _c("div", { staticClass: "row m-0" }, [
                        _vm._m(16),
                        _vm._v(" "),
                        _c("span", { staticClass: "col-8 p-0" }, [
                          _c("h6", [_vm._v(_vm._s(_vm.proAdvantage))])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(17)
                ])
              ]
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "unitListModal",
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
              _vm._m(18),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c("table", { staticClass: "table table-bordered" }, [
                    _vm._m(19),
                    _vm._v(" "),
                    _c("tbody", { domProps: { innerHTML: _vm._s(_vm.inward) } })
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm._m(20)
            ])
          ]
        )
      ]
    )
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
          _vm._v("Low Quantity Product Report ")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "table",
      {
        staticClass: "table table-hover table-bordered table-striped",
        attrs: { id: "sampleTable", width: "1300px" }
      },
      [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("SN")]),
            _vm._v(" "),
            _c("th", [_vm._v("Product")]),
            _vm._v(" "),
            _c("th", [_vm._v("Brand")]),
            _vm._v(" "),
            _c("th", [_vm._v("Color")]),
            _vm._v(" "),
            _c("th", [_vm._v("Size")]),
            _vm._v(" "),
            _c("th", [_vm._v("Quantity")]),
            _vm._v(" "),
            _c("th", [_vm._v("Action")])
          ])
        ]),
        _vm._v(" "),
        _c("tbody", [_c("tr")])
      ]
    )
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
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Unit List ")]
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
    return _c("tr", { staticClass: "bg-info" }, [
      _c("th", [_vm._v(" Quantity  ")]),
      _vm._v(" "),
      _c("th", [_vm._v(" Total Quantity  ")]),
      _vm._v(" "),
      _c("th", [_vm._v(" Unit Price  ")])
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
        [_vm._v("Close")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/lowquantityproduct@report.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/lowquantityproduct@report.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lowquantityproduct_report_vue_vue_type_template_id_3f7a6bd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lowquantityproduct@report.vue?vue&type=template&id=3f7a6bd2& */ "./resources/js/admin/page/inventory/inventory@report/lowquantityproduct@report.vue?vue&type=template&id=3f7a6bd2&");
/* harmony import */ var _lowquantityproduct_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lowquantityproduct@report.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/inventory/inventory@report/lowquantityproduct@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _lowquantityproduct_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _lowquantityproduct_report_vue_vue_type_template_id_3f7a6bd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lowquantityproduct_report_vue_vue_type_template_id_3f7a6bd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/inventory/inventory@report/lowquantityproduct@report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/lowquantityproduct@report.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/lowquantityproduct@report.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lowquantityproduct_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./lowquantityproduct@report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/lowquantityproduct@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lowquantityproduct_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/lowquantityproduct@report.vue?vue&type=template&id=3f7a6bd2&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/lowquantityproduct@report.vue?vue&type=template&id=3f7a6bd2& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lowquantityproduct_report_vue_vue_type_template_id_3f7a6bd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./lowquantityproduct@report.vue?vue&type=template&id=3f7a6bd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/lowquantityproduct@report.vue?vue&type=template&id=3f7a6bd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lowquantityproduct_report_vue_vue_type_template_id_3f7a6bd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lowquantityproduct_report_vue_vue_type_template_id_3f7a6bd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);