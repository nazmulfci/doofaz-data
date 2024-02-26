(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productcategory@withprice"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/productcategory@withprice.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@report/productcategory@withprice.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      productPriceSetupCategorys: {},
      purchaseBrandLists: {},
      purchaseProductLists: {},
      role: {},
      brandId: '',
      listShow: false,
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
      shopProductBrandLists: [],
      purchaseProductReports: {},
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
    this.showProduct();
    this.categoryList(); //  this.conditon();
  },
  methods: {
    categoryList: function categoryList() {
      var _this = this;

      axios.get('/categoryListInventory').then(function (res) {
        _this.productPriceSetupCategorys = res.data.productPriceSetupCategory; //  this.getcats = res.data.productCategory;
        //  this.productPriceSetupProducts = res.data.productPriceSetupProduct;
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
    showProduct: function showProduct() {
      $("#table ").on("change", function () {
        // Get the value from the select box
        var value = $(this).val(); // Do what you need to do with value
        // Reset the select back to the first option

        $(this).val("default");
        $(document).ready(function () {
          $.fn.dataTable.ext.errMode = 'none';
          $("#sampleTable ").DataTable({
            processing: true,
            serverSide: true,
            bDestroy: true,
            ajax: "/categoryWithProductList/" + value,
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
              data: "quantity",
              render: function render(data, type, row) {
                var ok = '<button type="button" onclick="showUnitList(' + row.id + ')"     class="btn btn-hover-shine btn-outline-info">' + data + ' </button>';
                return ok;
              }
            }, {
              data: "totalPrice"
            } // {
            //   data: "brandId",
            //    render: function (data, row) {
            //     var ok =
            //       '<button type="button" onclick="repurchase(' +
            //       data +
            //       ')"     class="btn btn-hover-shine btn-outline-info"><i class="fa fa-info" aria-hidden="true"></i>&nbsp;Re-Purchase </button>';
            //     return ok;
            //   },
            // },
            ]
          });
        });
      });
    },
    //  },
    //           showProduct(){
    //              axios.get(`brandWithProductList/${this.brandId}`).then(res =>{
    //                  this.purchaseProductLists = res.data.purchaseProductLists;
    //                  this.listShow=true
    //               })
    //           },
    purchaseProductIdCatch: function purchaseProductIdCatch(purchaseProductId) {
      var _this3 = this;

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
        _this3.modelNo = res.data.purchaseProductDetails.modelNo;
        _this3.batchNo = res.data.purchaseProductDetails.batchNo;
        _this3.qrCode = res.data.purchaseProductDetails.qrCode;
        _this3.mfgLicenseNO = res.data.purchaseProductDetails.mfgLicenseNO;
        _this3.warranty = res.data.purchaseProductDetails.warranty;
        _this3.selectMothOrYearWarranty = res.data.purchaseProductDetails.selectMothOrYearWarranty;
        _this3.guarantee = res.data.purchaseProductDetails.guarantee;
        _this3.selectMothOrYearGuarantee = res.data.purchaseProductDetails.selectMothOrYearGuarantee;
        _this3.mfgDate = res.data.purchaseProductDetails.mfgDate;
        _this3.expiryDate = res.data.purchaseProductDetails.expiryDate;
        _this3.tax = res.data.purchaseProductDetails.tax;
        _this3.taxAmount = res.data.purchaseProductDetails.taxAmount;
        _this3.taxAmountType = res.data.purchaseProductDetails.taxAmountType;
        _this3.quantityType = res.data.purchaseProductDetails.quantityType;
        _this3.quantityNoti = res.data.purchaseProductDetails.quantityNoti;
        _this3.proDescription = res.data.purchaseProductDetails.proDescription;
        _this3.proAdvantage = res.data.purchaseProductDetails.proAdvantage;
      });
    },
    conditon: function conditon() {
      var _this4 = this;

      axios.get('/condition').then(function (res) {
        _this4.role = res.data.authInfo;
      });
    }
  },
  created: function created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
      }
    });
    window.showUnitList = this.showUnitList;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/productcategory@withprice.vue?vue&type=template&id=628d513e&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@report/productcategory@withprice.vue?vue&type=template&id=628d513e& ***!
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
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.productDiscountPriceEntry()
            }
          }
        },
        [
          _c("div", { staticClass: "product-discount py-4 px-2" }, [
            _c(
              "div",
              {
                staticClass:
                  "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border"
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Select Category")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.brandId,
                          expression: "brandId"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "table" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.brandId = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Select One")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.productPriceSetupCategorys, function(
                        productPriceSetupCategory,
                        index
                      ) {
                        return productPriceSetupCategory.category_name
                          ? _c(
                              "option",
                              {
                                domProps: {
                                  value: productPriceSetupCategory.categoryId
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      productPriceSetupCategory.category_name
                                        .categoryName
                                    )
                                )
                              ]
                            )
                          : _vm._e()
                      })
                    ],
                    2
                  )
                ])
              ]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card mt-5" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive bg-white p-2" }, [
        _vm._m(2),
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
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "table-responsive" }, [
                      _c("table", { staticClass: "table table-bordered" }, [
                        _vm._m(4),
                        _vm._v(" "),
                        _c("tbody", {
                          domProps: { innerHTML: _vm._s(_vm.inward) }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(5)
                ])
              ]
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
          background: "rgba(221, 221, 221, 0.20)",
          border: "1px solid rgba(0, 0, 0, 0.05)"
        }
      },
      [
        _c("h3", { staticStyle: { color: "black" } }, [
          _vm._v("Product List By Category  ")
        ])
      ]
    )
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
      [_c("h3", { staticStyle: { color: "black" } }, [_vm._v("Product  List")])]
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
        attrs: { width: "1300px", id: "sampleTable" }
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
            _c("th", [_vm._v("Color")]),
            _vm._v(" "),
            _c("th", [_vm._v("Size")]),
            _vm._v(" "),
            _c("th", [_vm._v("Quantity")]),
            _vm._v(" "),
            _c("th", [_vm._v("Total Price")])
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

/***/ "./resources/js/admin/page/inventory/inventory@report/productcategory@withprice.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/productcategory@withprice.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productcategory_withprice_vue_vue_type_template_id_628d513e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productcategory@withprice.vue?vue&type=template&id=628d513e& */ "./resources/js/admin/page/inventory/inventory@report/productcategory@withprice.vue?vue&type=template&id=628d513e&");
/* harmony import */ var _productcategory_withprice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productcategory@withprice.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/inventory/inventory@report/productcategory@withprice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _productcategory_withprice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productcategory_withprice_vue_vue_type_template_id_628d513e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _productcategory_withprice_vue_vue_type_template_id_628d513e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/inventory/inventory@report/productcategory@withprice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/productcategory@withprice.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/productcategory@withprice.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productcategory_withprice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./productcategory@withprice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/productcategory@withprice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productcategory_withprice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@report/productcategory@withprice.vue?vue&type=template&id=628d513e&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@report/productcategory@withprice.vue?vue&type=template&id=628d513e& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productcategory_withprice_vue_vue_type_template_id_628d513e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./productcategory@withprice.vue?vue&type=template&id=628d513e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@report/productcategory@withprice.vue?vue&type=template&id=628d513e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productcategory_withprice_vue_vue_type_template_id_628d513e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productcategory_withprice_vue_vue_type_template_id_628d513e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);