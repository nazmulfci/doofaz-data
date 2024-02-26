(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product@shortage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/product@report/product@shortage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/product@report/product@shortage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lowQuantityReports: {},
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
      proAdvantage: {}
    };
  },
  mounted: function mounted() {
    this.purchaseProductReport();
  },
  methods: {
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
          ajax: "/stockShortageProductReport",
          columns: [{
            data: "purchaseProductDetailsId"
          }, {
            data: "productName",
            name: "productName.productName"
          }, {
            data: "brand",
            name: "productPriceDetails.brandName.productBrandName"
          }, // {
          //    data: "unitPrice",name:"purchaseProductInfo.unitPrice"
          // },
          {
            data: "totalPrice",
            name: "purchaseProductInfo.totalPrice"
          }, {
            data: "quantityNoti",
            render: function render(data) {
              return '<button type="submit" class="mr-2 btn-pill btn-hover-shine btn btn-danger">' + data + '</button>';
            }
          }, {
            data: "quantity",
            render: function render(data) {
              return '<button type="submit" class="mr-2 btn-pill btn-hover-shine btn btn-danger">' + data + '</button>';
            }
          }, //  {
          //      data: "mrp",name:"productPriceDetails.mrpPrice"
          //   },
          //  {
          //      data: "sales",name:"productPriceDetails.salesPrice"
          //   },
          //  {
          //      data: "wholesale",name:"productPriceDetails.wholesalePrice"
          //   },
          //  {
          //      data: "special",name:"productPriceDetails.specialPrice"
          //   },
          //  {
          //      data: "ecom",name:"productPriceDetails.eCommercePrice"
          //   },
          {
            data: "purchaseProductId",
            render: function render(data) {
              var ok = '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"   onclick="purchaseProductIdCatch(' + data + ')">' + "Details</button>";
              return ok;
            }
          }]
        });
      });
    },
    purchaseProductIdCatch: function purchaseProductIdCatch(purchaseProductId) {
      var _this = this;

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
        _this.modelNo = res.data.purchaseProductDetails.modelNo;
        _this.batchNo = res.data.purchaseProductDetails.batchNo;
        _this.qrCode = res.data.purchaseProductDetails.qrCode;
        _this.mfgLicenseNO = res.data.purchaseProductDetails.mfgLicenseNO;
        _this.warranty = res.data.purchaseProductDetails.warranty;
        _this.selectMothOrYearWarranty = res.data.purchaseProductDetails.selectMothOrYearWarranty;
        _this.guarantee = res.data.purchaseProductDetails.guarantee;
        _this.selectMothOrYearGuarantee = res.data.purchaseProductDetails.selectMothOrYearGuarantee;
        _this.mfgDate = res.data.purchaseProductDetails.mfgDate;
        _this.expiryDate = res.data.purchaseProductDetails.expiryDate;
        _this.tax = res.data.purchaseProductDetails.tax;
        _this.taxAmount = res.data.purchaseProductDetails.taxAmount;
        _this.taxAmountType = res.data.purchaseProductDetails.taxAmountType;
        _this.quantityType = res.data.purchaseProductDetails.quantityType;
        _this.quantityNoti = res.data.purchaseProductDetails.quantityNoti;
        _this.proDescription = res.data.purchaseProductDetails.proDescription;
        _this.proAdvantage = res.data.purchaseProductDetails.proAdvantage;
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
    window.purchaseProductIdCatch = this.purchaseProductIdCatch;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/product@report/product@shortage.vue?vue&type=template&id=954d30ce&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/product@report/product@shortage.vue?vue&type=template&id=954d30ce& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass: "card main-card  element-block-example",
        staticStyle: { margin: "0 auto" }
      },
      [
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
                                        _vm._s(_vm.warranty * 12 * 30) +
                                        " Day\n                                     "
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
                                        _vm._s(_vm.guarantee * 12 * 30) +
                                        " Day\n                                     "
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
                                  _vm._s(
                                    _vm.quantityType == 2 ? "Medium" : ""
                                  ) +
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
          _vm._v("Stock Shortage Report")
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
        attrs: { id: "sampleTable", width: "1200px" }
      },
      [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("SN")]),
            _vm._v(" "),
            _c("th", [_vm._v("Product.Name")]),
            _vm._v(" "),
            _c("th", [_vm._v("Brand")]),
            _vm._v(" "),
            _c("th", [_vm._v("Total.Price")]),
            _vm._v(" "),
            _c("th", [_vm._v("Alert.Quantity")]),
            _vm._v(" "),
            _c("th", [_vm._v("Current.Quantity")]),
            _vm._v(" "),
            _c("th", [_vm._v("Action")])
          ])
        ]),
        _vm._v(" "),
        _c("tbody")
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/sales/product@report/product@shortage.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/admin/page/sales/product@report/product@shortage.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_shortage_vue_vue_type_template_id_954d30ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product@shortage.vue?vue&type=template&id=954d30ce& */ "./resources/js/admin/page/sales/product@report/product@shortage.vue?vue&type=template&id=954d30ce&");
/* harmony import */ var _product_shortage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product@shortage.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/sales/product@report/product@shortage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _product_shortage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_shortage_vue_vue_type_template_id_954d30ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_shortage_vue_vue_type_template_id_954d30ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/sales/product@report/product@shortage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/sales/product@report/product@shortage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/product@report/product@shortage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_shortage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./product@shortage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/product@report/product@shortage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_shortage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/sales/product@report/product@shortage.vue?vue&type=template&id=954d30ce&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/product@report/product@shortage.vue?vue&type=template&id=954d30ce& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_shortage_vue_vue_type_template_id_954d30ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./product@shortage.vue?vue&type=template&id=954d30ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/product@report/product@shortage.vue?vue&type=template&id=954d30ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_shortage_vue_vue_type_template_id_954d30ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_shortage_vue_vue_type_template_id_954d30ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);