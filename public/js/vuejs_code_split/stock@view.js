(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock@view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/stock@view.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@report/stock@view.vue?vue&type=script&lang=js& ***!
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
      qtys: {},
      rePurchases: {},
      product: '',
      brand: '',
      adv_sales_priceLists: [],
      unitNameShows: [],
      inward: ''
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  mounted: function mounted() {
    this.purchaseProductReport('/stockSummaryProductReport/' + this.$route.params.purchaseProductId);
    this.getpagilist();
    this.unitNameShow();
  },
  methods: {
    unitNameShow: function unitNameShow() {
      var _this = this;

      axios.get("/unitNameShow").then(function (res) {
        _this.unitNameShows = res.data.unitNameShow;
      });
    },
    purchaseProductReport: function purchaseProductReport(url1) {
      var url = url1;
      $(document).ready(function () {
        $.fn.dataTable.ext.errMode = 'none';
        $("#sampleTable ").DataTable({
          processing: true,
          serverSide: true,
          bDestroy: true,
          ajax: url,
          columns: [{
            data: "id"
          }, {
            data: "product",
            name: "product.productName"
          }, {
            data: "brand",
            name: "brand.productBrandName"
          }, {
            data: "color.colorName"
          }, {
            data: "size.sizeName"
          }, {
            data: "quantity"
          }, {
            data: "unit.uniteEntryName",
            render: function render(data, type, row) {
              var ok = '<button type="button" onclick="showUnitList(' + row.id + ')"     class="btn btn-hover-shine btn-outline-info">' + data + ' </button>';
              return ok;
            }
          }, {
            data: "totalPrice"
          }, {
            data: "id",
            render: function render(data, type, row) {
              var ok = '<button type="button" onclick="repurchase(' + data + ')"     class="btn btn-hover-shine btn-outline-info"><i class="fa fa-info" aria-hidden="true"></i>&nbsp;Purchase History </button>';
              return ok;
            }
          }]
        });
      });
    },
    showUnitList: function showUnitList(e) {
      var _this2 = this;

      this.adv_sales_priceLists = [];
      axios.get('showUnitListModal/' + e).then(function (res) {
        _this2.adv_sales_priceLists = res.data.data;
        _this2.inward = res.data.inward;
      });
      $("#unitListModal").modal("show");
    },
    repurchase: function repurchase(id) {
      var _this3 = this;

      axios.get("/repurchaseHistory/".concat(this.$route.params.purchaseProductId, "/").concat(id)).then(function (res) {
        if (res.data.purchaseProduct) {
          _this3.rePurchases = res.data.purchaseProduct;
        }
      });
      $("#reper").modal("show");
    },
    purchaseProductIdC: function purchaseProductIdC(product, brand) {
      var _this4 = this;

      axios.get("/repurchase/".concat(product, "/").concat(brand)).then(function (res) {
        if (res.data.purchaseProduct) {
          _this4.rePurchases = res.data.purchaseProduct;
        }
      });
      this.product = product;
      this.brand = brand;
    },
    getpagilist: function getpagilist() {
      var _this5 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/repurchase/' + this.product + this.brand + '?page=' + page).then(function (res) {
        if (res.data.purchaseProduct) {
          _this5.rePurchases = res.data.purchaseProduct;
        }
      });
    },
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
      axios.get('/stockSummaryProductDetails/' + purchaseProductId).then(function (res) {
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
  },
  created: function created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
      }
    });
    window.deleteExpense = this.deleteExpense;
    window.repurchase = this.repurchase;
    window.showUnitList = this.showUnitList;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/stock@view.vue?vue&type=template&id=f57b691e&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@report/stock@view.vue?vue&type=template&id=f57b691e& ***!
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
              id: "reper",
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
                    _c("div", { staticClass: "table-responsive bg-white" }, [
                      _c(
                        "table",
                        {
                          staticClass:
                            "table table-hover table-bordered  table-striped"
                        },
                        [
                          _vm._m(3),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.rePurchases.data, function(re, index) {
                              return _c("tr", [
                                _c("td", [_vm._v(_vm._s(index + 1))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(re.created_at))]),
                                _vm._v(" "),
                                re.product_name
                                  ? _c("td", [
                                      _vm._v(
                                        _vm._s(re.product_name.productName) +
                                          " (" +
                                          _vm._s(re.product_name.productCode) +
                                          ")"
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                re.unit_name
                                  ? _c("td", [
                                      _vm._v(
                                        _vm._s(re.unit_name.uniteEntryName)
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(re.quantity))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(re.unitPrice))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(re.percetage) + " %")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(re.totalPrice))])
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
                            attrs: { data: _vm.rePurchases, limit: _vm.limit },
                            on: { "pagination-change-page": _vm.getpagilist }
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
                  ]),
                  _vm._v(" "),
                  _vm._m(4)
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
              _vm._m(5),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c("table", { staticClass: "table table-bordered" }, [
                    _vm._m(6),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      { domProps: { innerHTML: _vm._s(_vm.inward) } },
                      [_vm._v(" -->\n                         ")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm._m(7)
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
          _vm._v("Stock Summary Report")
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
        attrs: { width: "1250px", id: "sampleTable" }
      },
      [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("SN")]),
            _vm._v(" "),
            _c("th", [_vm._v("Product.Name")]),
            _vm._v(" "),
            _c("th", [_vm._v("Brand.Name")]),
            _vm._v(" "),
            _c("th", [_vm._v("Color")]),
            _vm._v(" "),
            _c("th", [_vm._v("Size")]),
            _vm._v(" "),
            _c("th", [_vm._v("Quantity")]),
            _vm._v(" "),
            _c("th", [_vm._v("Unit")]),
            _vm._v(" "),
            _c("th", [_vm._v("Total Price")]),
            _vm._v(" "),
            _c("th", [_vm._v("View")])
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
        _c("th", [_vm._v("SN")]),
        _vm._v(" "),
        _c("th", [_vm._v("Purchase Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Discount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Price")])
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

/***/ "./resources/js/admin/page/inventory/inventory@report/stock@view.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/stock@view.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stock_view_vue_vue_type_template_id_f57b691e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock@view.vue?vue&type=template&id=f57b691e& */ "./resources/js/admin/page/inventory/inventory@report/stock@view.vue?vue&type=template&id=f57b691e&");
/* harmony import */ var _stock_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock@view.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/inventory/inventory@report/stock@view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _stock_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _stock_view_vue_vue_type_template_id_f57b691e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _stock_view_vue_vue_type_template_id_f57b691e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/inventory/inventory@report/stock@view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/stock@view.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/stock@view.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stock_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./stock@view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/stock@view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stock_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/stock@view.vue?vue&type=template&id=f57b691e&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/stock@view.vue?vue&type=template&id=f57b691e& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stock_view_vue_vue_type_template_id_f57b691e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./stock@view.vue?vue&type=template&id=f57b691e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/stock@view.vue?vue&type=template&id=f57b691e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stock_view_vue_vue_type_template_id_f57b691e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stock_view_vue_vue_type_template_id_f57b691e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);