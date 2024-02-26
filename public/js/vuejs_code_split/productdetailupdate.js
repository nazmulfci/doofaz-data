(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productdetailupdate"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loading: false,
      form: new Form({
        // Modal Form
        purchaseProductIdCatch: '',
        modelNo: '',
        batchNo: '',
        qrCode: '',
        mfgLicenseNO: '',
        warranty: '',
        selectMothOrYearWarranty: '',
        guarantee: '',
        selectMothOrYearGuarantee: '',
        mfgDate: '',
        expiryDate: '',
        tax: '',
        taxAmount: '',
        taxAmountType: '',
        quantityType: '',
        quantityNoti: '',
        proDescription: '',
        proAdvantage: '',
        // Add More Field
        fieldNameOne: '',
        fieldNameTwo: '',
        fieldNameThree: '',
        fieldNameFour: '',
        workOne: '',
        workTwo: '',
        workThree: '',
        workFour: '',
        //
        purchaseProductId: '',
        productNameId: '',
        productId: '',
        unitPrice: '',
        mrpPrice: '',
        salesPrice: '',
        wholesalePrice: '',
        specialPrice: '',
        eCommercePrice: '',
        inputCheck: '',
        mrpDiscountAmount: '',
        mrpDiscountType: '',
        mrpCheckInputValue: '',
        mrpStartDate: '',
        mrpExpiredDate: '',
        salesDiscountAmount: '',
        salesDiscountType: '',
        salesCheckInputValue: '',
        salesStartDate: '',
        salesExpiredDate: '',
        wholesaleDiscountAmount: '',
        wholesaleDiscountType: '',
        wholesaleCheckInputValue: '',
        wholesaleStartDate: '',
        wholesaleExpiredDate: '',
        specialDiscountAmount: '',
        specialDiscountType: '',
        specialCheckInputValue: '',
        specialStartDate: '',
        specialExpiredDate: '',
        eCommerceDiscountAmount: '',
        eCommerceDiscountType: '',
        eCommerceCheckInputValue: '',
        eCommerceStartDate: '',
        eCommerceExpiredDate: '',
        productBrandId: ''
      }),
      purchaseProductLists: {},
      salesProductDiscountPriceLists: {},
      productLists: [],
      info: [],
      brandinfo: [],
      brandLists: [],
      shopProductBrandLists: [],
      productBrandLists: [],
      mrpPriceBoxShow: false,
      salesPriceBoxShow: false,
      wholesalePriceBoxShow: false,
      specialPriceBoxShow: false,
      eCommercePriceBoxShow: false,
      productBrand: false,
      listShow: false
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_0__["VueEditor"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.salesProductNameList();
    this.ShowDataLists();
  },
  methods: {
    customFormatter: function customFormatter(date) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format('DD-MM-YYYY');
    },
    salesProductNameList: function salesProductNameList() {
      var _this = this;

      axios.get('/salesProductNameShow').then(function (res) {
        _this.purchaseProductLists = res.data.purchaseProductListinfo;
      });
    },
    ShowDataLists: function ShowDataLists() {
      var _this2 = this;

      axios.get('/shopproductBrandEntry').then(function (res) {
        _this2.shopProductBrandLists = res.data.shopProductBrandList;
      });
    },
    purchaseProductIdCatch: function purchaseProductIdCatch(purchaseProductId) {
      var _this3 = this;

      axios.get('/stockSummaryProductDetails/' + purchaseProductId).then(function (res) {
        _this3.form.fill(res.data.purchaseProductDetails);
      });
    },
    updateInfo: function updateInfo(id) {
      var _this4 = this;

      this.loading = true;
      axios.post("purchaseProductDetailsUpdateinfo/".concat(id), this.form).then(function (res) {
        _this4.loading = false;
        ;
        Toast.fire({
          icon: "success",
          title: "Successfully Updated"
        });

        _this4.salesProductNameList();

        _this4.ShowDataLists();

        _this4.listShow = false;
      })["catch"](function (res) {
        _this4.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    },
    showProductBrand: function showProductBrand() {
      var _this5 = this;

      // alert(this.form.purchaseProductId);
      axios.get('/productUnitePrice/' + this.form.purchaseProductId).then(function (res) {
        _this5.brandLists = res.data.brandListinfo;
        _this5.productBrandLists = res.data.productBrandList;
        _this5.productBrand = true;
      });
    },
    productIdCatch: function productIdCatch() {
      var _this6 = this;

      axios.get('/productDetailsInfo/' + this.form.purchaseProductId + '/' + this.form.productBrandId).then(function (res) {
        _this6.info = res.data.pname;
        _this6.brandinfo = res.data.brandget;
        _this6.listShow = true;
        _this6.productLists = res.data.pDetail;

        _this6.form.fill(res.data.pDetail);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=style&index=0&media=screen&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=style&index=0&media=screen&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.product-discount .input-group-text{\n    padding: 0px 20px;\n}\n.product-discount .form-check-input {\n  margin-left: -5px;\n}\n.product-discount input{\n    background-color: #fff;\n    border: 1px solid #ced4da;\n    border-radius: .25rem;\n    padding: 8px 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=style&index=0&media=screen&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=style&index=0&media=screen&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./product@details.vue?vue&type=style&index=0&media=screen&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=style&index=0&media=screen&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=template&id=e8868322&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=template&id=e8868322& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Product Name/Code")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.purchaseProductId,
                            expression: "form.purchaseProductId"
                          }
                        ],
                        staticClass: "form-control",
                        on: {
                          change: [
                            function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "purchaseProductId",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            function($event) {
                              $event.preventDefault()
                              return _vm.showProductBrand()
                            }
                          ]
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select One")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.purchaseProductLists, function(
                          purchaseProductList
                        ) {
                          return _c(
                            "option",
                            {
                              domProps: {
                                value:
                                  purchaseProductList.product_name.productNameId
                              }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(
                                    purchaseProductList.product_name.productName
                                  ) +
                                  " \n                            (" +
                                  _vm._s(
                                    purchaseProductList.product_name.productCode
                                  ) +
                                  ")"
                              )
                            ]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "purchaseProductId" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.productBrand
                  ? _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v(" Product Brand ")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.productBrandId,
                                expression: "form.productBrandId"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "productBrandId",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  $event.preventDefault()
                                  return _vm.productIdCatch()
                                }
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v(" Select One ")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.brandLists, function(brandList) {
                              return _c(
                                "option",
                                {
                                  key: brandList.brandId,
                                  domProps: { value: brandList.brandId }
                                },
                                _vm._l(_vm.productBrandLists, function(
                                  productBrandList
                                ) {
                                  return productBrandList.productBrandEntryId ==
                                    brandList.brandId
                                    ? _c(
                                        "span",
                                        {
                                          key:
                                            productBrandList.productBrandEntryId,
                                          attrs: {
                                            value:
                                              productBrandList.productBrandEntryId
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(
                                                productBrandList.productBrandName
                                              ) +
                                              "\n                             \n                              "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                }),
                                0
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "productBrandId" }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _vm.listShow
      ? _c("div", { staticClass: "card mt-5" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive bg-white" }, [
            _c(
              "table",
              { staticClass: "table table-hover table-bordered table-striped" },
              [
                _vm._m(2),
                _vm._v(" "),
                _c("tbody", [
                  _c("tr", [
                    _c("td", [_vm._v(_vm._s(_vm.info.productName) + " ")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm.brandinfo.productBrandName) + " ")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.productLists.modelNo))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.productLists.batchNo))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.productLists.qrCode))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.productLists.mfgLicenseNO))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.productLists.warranty))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.productLists.guarantee))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.productLists.mfgDate))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.productLists.expiryDate))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.productLists.tax))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.productLists.taxAmount))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.productLists.quantityType))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.productLists.quantityNoti))]),
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
                              _vm.productLists.purchaseProductId
                          },
                          on: {
                            click: function($event) {
                              return _vm.purchaseProductIdCatch(
                                _vm.productLists.purchaseProductId
                              )
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: " fa fa-eye pr-2" }),
                          _vm._v(" Update\n                   ")
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
                            _vm.productLists.purchaseProductId,
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
                              _vm._m(3),
                              _vm._v(" "),
                              _c("form", [
                                _c("div", { staticClass: "modal-body" }, [
                                  _c(
                                    "div",
                                    { staticClass: "purchase-entry py-4 px-2" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-12  supplier-border shadow-custom"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-row" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.form
                                                        .purchaseProductIdCatch,
                                                    expression:
                                                      "form.purchaseProductIdCatch"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "hidden",
                                                  name: "purchaseProductIdCatch"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.form
                                                      .purchaseProductIdCatch
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.form,
                                                      "purchaseProductIdCatch",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-group col-md-6"
                                                },
                                                [
                                                  _vm._m(4),
                                                  _vm._v(" "),
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: _vm.form.modelNo,
                                                        expression:
                                                          "form.modelNo"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      type: "text",
                                                      name: "modelNo",
                                                      placeholder: "Model No"
                                                    },
                                                    domProps: {
                                                      value: _vm.form.modelNo
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.form,
                                                          "modelNo",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-group col-md-6"
                                                },
                                                [
                                                  _vm._m(5),
                                                  _vm._v(" "),
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: _vm.form.batchNo,
                                                        expression:
                                                          "form.batchNo"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      type: "text",
                                                      name: "batchNo",
                                                      placeholder: "Batch No"
                                                    },
                                                    domProps: {
                                                      value: _vm.form.batchNo
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.form,
                                                          "batchNo",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "form-row" },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-group col-md-6"
                                                },
                                                [
                                                  _vm._m(6),
                                                  _vm._v(" "),
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: _vm.form.mfgDate,
                                                        expression:
                                                          "form.mfgDate"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      type: "date",
                                                      name: "mfgDate"
                                                    },
                                                    domProps: {
                                                      value: _vm.form.mfgDate
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.form,
                                                          "mfgDate",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-group col-md-6"
                                                },
                                                [
                                                  _vm._m(7),
                                                  _vm._v(" "),
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.form.expiryDate,
                                                        expression:
                                                          "form.expiryDate"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      type: "date",
                                                      name: "expiryDate"
                                                    },
                                                    domProps: {
                                                      value: _vm.form.expiryDate
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.form,
                                                          "expiryDate",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "form-row" },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-group col-md-6"
                                                },
                                                [
                                                  _vm._m(8),
                                                  _vm._v(" "),
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.form.mfgLicenseNO,
                                                        expression:
                                                          "form.mfgLicenseNO"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      type: "text",
                                                      name: "mfgLicenseNO",
                                                      placeholder:
                                                        "Mfg License No"
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.form.mfgLicenseNO
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.form,
                                                          "mfgLicenseNO",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-group col-md-6"
                                                },
                                                [
                                                  _vm._m(9),
                                                  _vm._v(" "),
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: _vm.form.qrCode,
                                                        expression:
                                                          "form.qrCode"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      type: "text",
                                                      name: "qrCode",
                                                      placeholder: "QR Code"
                                                    },
                                                    domProps: {
                                                      value: _vm.form.qrCode
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.form,
                                                          "qrCode",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "form-row" },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-group col-md-6"
                                                },
                                                [
                                                  _vm._m(10),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "form-row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6"
                                                        },
                                                        [
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.form
                                                                    .warranty,
                                                                expression:
                                                                  "form.warranty"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "number",
                                                              name: "warranty",
                                                              placeholder:
                                                                "Warranty"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.form
                                                                  .warranty
                                                            },
                                                            on: {
                                                              input: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.form,
                                                                  "warranty",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6"
                                                        },
                                                        [
                                                          _c(
                                                            "select",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.form
                                                                      .selectMothOrYearWarranty,
                                                                  expression:
                                                                    "form.selectMothOrYearWarranty"
                                                                }
                                                              ],
                                                              staticClass:
                                                                "form-control",
                                                              attrs: {
                                                                name:
                                                                  "selectMothOrYearWarranty"
                                                              },
                                                              on: {
                                                                change: function(
                                                                  $event
                                                                ) {
                                                                  var $$selectedVal = Array.prototype.filter
                                                                    .call(
                                                                      $event
                                                                        .target
                                                                        .options,
                                                                      function(
                                                                        o
                                                                      ) {
                                                                        return o.selected
                                                                      }
                                                                    )
                                                                    .map(
                                                                      function(
                                                                        o
                                                                      ) {
                                                                        var val =
                                                                          "_value" in
                                                                          o
                                                                            ? o._value
                                                                            : o.value
                                                                        return val
                                                                      }
                                                                    )
                                                                  _vm.$set(
                                                                    _vm.form,
                                                                    "selectMothOrYearWarranty",
                                                                    $event
                                                                      .target
                                                                      .multiple
                                                                      ? $$selectedVal
                                                                      : $$selectedVal[0]
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "option",
                                                                {
                                                                  attrs: {
                                                                    value: ""
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Select One"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "option",
                                                                {
                                                                  attrs: {
                                                                    value: "1"
                                                                  }
                                                                },
                                                                [_vm._v("Day")]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "option",
                                                                {
                                                                  attrs: {
                                                                    value: "2"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Month"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "option",
                                                                {
                                                                  attrs: {
                                                                    value: "3"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Years"
                                                                  )
                                                                ]
                                                              )
                                                            ]
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
                                                    "form-group col-md-6"
                                                },
                                                [
                                                  _vm._m(11),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "form-row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6"
                                                        },
                                                        [
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.form
                                                                    .guarantee,
                                                                expression:
                                                                  "form.guarantee"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "number",
                                                              name: "guarantee",
                                                              placeholder:
                                                                "Guarantee"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.form
                                                                  .guarantee
                                                            },
                                                            on: {
                                                              input: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.form,
                                                                  "guarantee",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6"
                                                        },
                                                        [
                                                          _c(
                                                            "select",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.form
                                                                      .selectMothOrYearGuarantee,
                                                                  expression:
                                                                    "form.selectMothOrYearGuarantee"
                                                                }
                                                              ],
                                                              staticClass:
                                                                "form-control",
                                                              attrs: {
                                                                name:
                                                                  "selectMothOrYearGuarantee"
                                                              },
                                                              on: {
                                                                change: function(
                                                                  $event
                                                                ) {
                                                                  var $$selectedVal = Array.prototype.filter
                                                                    .call(
                                                                      $event
                                                                        .target
                                                                        .options,
                                                                      function(
                                                                        o
                                                                      ) {
                                                                        return o.selected
                                                                      }
                                                                    )
                                                                    .map(
                                                                      function(
                                                                        o
                                                                      ) {
                                                                        var val =
                                                                          "_value" in
                                                                          o
                                                                            ? o._value
                                                                            : o.value
                                                                        return val
                                                                      }
                                                                    )
                                                                  _vm.$set(
                                                                    _vm.form,
                                                                    "selectMothOrYearGuarantee",
                                                                    $event
                                                                      .target
                                                                      .multiple
                                                                      ? $$selectedVal
                                                                      : $$selectedVal[0]
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "option",
                                                                {
                                                                  attrs: {
                                                                    value: ""
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Select One"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "option",
                                                                {
                                                                  attrs: {
                                                                    value: "1"
                                                                  }
                                                                },
                                                                [_vm._v("Day")]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "option",
                                                                {
                                                                  attrs: {
                                                                    value: "2"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Month"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "option",
                                                                {
                                                                  attrs: {
                                                                    value: "3"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Years"
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        ]
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
                                            { staticClass: "form-row" },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-group col-md-6"
                                                },
                                                [
                                                  _vm._m(12),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "custom-control custom-radio custom-control-inline"
                                                    },
                                                    [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value: _vm.form.tax,
                                                            expression:
                                                              "form.tax"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "custom-control-input",
                                                        attrs: {
                                                          type: "radio",
                                                          id:
                                                            "customRadioInline1",
                                                          name: "tax",
                                                          value: "1"
                                                        },
                                                        domProps: {
                                                          checked: _vm._q(
                                                            _vm.form.tax,
                                                            "1"
                                                          )
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              !$event.type.indexOf(
                                                                "key"
                                                              ) &&
                                                              _vm._k(
                                                                $event.keyCode,
                                                                "submit",
                                                                undefined,
                                                                $event.key,
                                                                undefined
                                                              )
                                                            ) {
                                                              return null
                                                            }
                                                            return _vm.taxYes()
                                                          },
                                                          change: function(
                                                            $event
                                                          ) {
                                                            return _vm.$set(
                                                              _vm.form,
                                                              "tax",
                                                              "1"
                                                            )
                                                          }
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "label",
                                                        {
                                                          staticClass:
                                                            "custom-control-label",
                                                          attrs: {
                                                            for:
                                                              "customRadioInline1"
                                                          }
                                                        },
                                                        [_vm._v("Yes")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "custom-control custom-radio custom-control-inline"
                                                    },
                                                    [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value: _vm.form.tax,
                                                            expression:
                                                              "form.tax"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "custom-control-input",
                                                        attrs: {
                                                          type: "radio",
                                                          id:
                                                            "customRadioInline2",
                                                          name: "tax",
                                                          value: "0"
                                                        },
                                                        domProps: {
                                                          checked: _vm._q(
                                                            _vm.form.tax,
                                                            "0"
                                                          )
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              !$event.type.indexOf(
                                                                "key"
                                                              ) &&
                                                              _vm._k(
                                                                $event.keyCode,
                                                                "submit",
                                                                undefined,
                                                                $event.key,
                                                                undefined
                                                              )
                                                            ) {
                                                              return null
                                                            }
                                                            return _vm.taxNo()
                                                          },
                                                          change: function(
                                                            $event
                                                          ) {
                                                            return _vm.$set(
                                                              _vm.form,
                                                              "tax",
                                                              "0"
                                                            )
                                                          }
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "label",
                                                        {
                                                          staticClass:
                                                            "custom-control-label",
                                                          attrs: {
                                                            for:
                                                              "customRadioInline2"
                                                          }
                                                        },
                                                        [_vm._v("No")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm.taxAmountTypeShow
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group mb-0 mt-3"
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "input-group"
                                                            },
                                                            [
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm.form
                                                                        .taxAmount,
                                                                    expression:
                                                                      "form.taxAmount"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                attrs: {
                                                                  type: "text",
                                                                  name:
                                                                    "taxAmount",
                                                                  placeholder:
                                                                    "Tax Amount"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.form
                                                                      .taxAmount
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.$set(
                                                                      _vm.form,
                                                                      "taxAmount",
                                                                      $event
                                                                        .target
                                                                        .value
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "input-group-prepend"
                                                                },
                                                                [
                                                                  _c(
                                                                    "select",
                                                                    {
                                                                      directives: [
                                                                        {
                                                                          name:
                                                                            "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            _vm
                                                                              .form
                                                                              .taxAmountType,
                                                                          expression:
                                                                            "form.taxAmountType"
                                                                        }
                                                                      ],
                                                                      staticClass:
                                                                        "input-group-text",
                                                                      attrs: {
                                                                        name:
                                                                          "taxAmountType"
                                                                      },
                                                                      on: {
                                                                        change: function(
                                                                          $event
                                                                        ) {
                                                                          var $$selectedVal = Array.prototype.filter
                                                                            .call(
                                                                              $event
                                                                                .target
                                                                                .options,
                                                                              function(
                                                                                o
                                                                              ) {
                                                                                return o.selected
                                                                              }
                                                                            )
                                                                            .map(
                                                                              function(
                                                                                o
                                                                              ) {
                                                                                var val =
                                                                                  "_value" in
                                                                                  o
                                                                                    ? o._value
                                                                                    : o.value
                                                                                return val
                                                                              }
                                                                            )
                                                                          _vm.$set(
                                                                            _vm.form,
                                                                            "taxAmountType",
                                                                            $event
                                                                              .target
                                                                              .multiple
                                                                              ? $$selectedVal
                                                                              : $$selectedVal[0]
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "option",
                                                                        {
                                                                          attrs: {
                                                                            value:
                                                                              ""
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "Select One"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "option",
                                                                        {
                                                                          attrs: {
                                                                            value:
                                                                              "1"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "Taka"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "option",
                                                                        {
                                                                          attrs: {
                                                                            value:
                                                                              "2"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "Percetage"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-group col-md-6"
                                                },
                                                [
                                                  _vm._m(13),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "custom-radio custom-control-inline p-0 m-0"
                                                    },
                                                    [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.form
                                                                .quantityType,
                                                            expression:
                                                              "form.quantityType"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "custom-control-input",
                                                        attrs: {
                                                          type: "radio",
                                                          id:
                                                            "customRadioInline3",
                                                          name: "quantityType",
                                                          value: "1"
                                                        },
                                                        domProps: {
                                                          checked: _vm._q(
                                                            _vm.form
                                                              .quantityType,
                                                            "1"
                                                          )
                                                        },
                                                        on: {
                                                          change: function(
                                                            $event
                                                          ) {
                                                            return _vm.$set(
                                                              _vm.form,
                                                              "quantityType",
                                                              "1"
                                                            )
                                                          }
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "label",
                                                        {
                                                          staticClass:
                                                            "custom-control-label",
                                                          attrs: {
                                                            for:
                                                              "customRadioInline3"
                                                          }
                                                        },
                                                        [_vm._v("Low")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "custom-radio custom-control-inline p-0 m-0"
                                                    },
                                                    [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.form
                                                                .quantityType,
                                                            expression:
                                                              "form.quantityType"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "custom-control-input",
                                                        attrs: {
                                                          type: "radio",
                                                          id:
                                                            "customRadioInline4",
                                                          name: "quantityType",
                                                          value: "2"
                                                        },
                                                        domProps: {
                                                          checked: _vm._q(
                                                            _vm.form
                                                              .quantityType,
                                                            "2"
                                                          )
                                                        },
                                                        on: {
                                                          change: function(
                                                            $event
                                                          ) {
                                                            return _vm.$set(
                                                              _vm.form,
                                                              "quantityType",
                                                              "2"
                                                            )
                                                          }
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "label",
                                                        {
                                                          staticClass:
                                                            "custom-control-label",
                                                          attrs: {
                                                            for:
                                                              "customRadioInline4"
                                                          }
                                                        },
                                                        [_vm._v("Medium")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "custom-radio custom-control-inline p-0 m-0"
                                                    },
                                                    [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.form
                                                                .quantityType,
                                                            expression:
                                                              "form.quantityType"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "custom-control-input",
                                                        attrs: {
                                                          type: "radio",
                                                          id:
                                                            "customRadioInline5",
                                                          name: "quantityType",
                                                          value: "3"
                                                        },
                                                        domProps: {
                                                          checked: _vm._q(
                                                            _vm.form
                                                              .quantityType,
                                                            "3"
                                                          )
                                                        },
                                                        on: {
                                                          change: function(
                                                            $event
                                                          ) {
                                                            return _vm.$set(
                                                              _vm.form,
                                                              "quantityType",
                                                              "3"
                                                            )
                                                          }
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "label",
                                                        {
                                                          staticClass:
                                                            "custom-control-label",
                                                          attrs: {
                                                            for:
                                                              "customRadioInline5"
                                                          }
                                                        },
                                                        [_vm._v("High")]
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
                                            { staticClass: "form-group" },
                                            [
                                              _vm._m(14),
                                              _vm._v(" "),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.form.quantityNoti,
                                                    expression:
                                                      "form.quantityNoti"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "number",
                                                  name: "quantityNoti",
                                                  placeholder:
                                                    "Quantity Notification"
                                                },
                                                domProps: {
                                                  value: _vm.form.quantityNoti
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.form,
                                                      "quantityNoti",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-hover-shine btn-primary",
                                                  attrs: {
                                                    type: "button",
                                                    name: "button"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      if (
                                                        !$event.type.indexOf(
                                                          "key"
                                                        ) &&
                                                        _vm._k(
                                                          $event.keyCode,
                                                          "submit",
                                                          undefined,
                                                          $event.key,
                                                          undefined
                                                        )
                                                      ) {
                                                        return null
                                                      }
                                                      return _vm.addMoreField()
                                                    }
                                                  }
                                                },
                                                [_vm._v("Add More Field")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "moreFieldForEdit" },
                                            [
                                              _vm.fieldNameOneShow
                                                ? _c(
                                                    "div",
                                                    { staticClass: "form-row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group col-md-5"
                                                        },
                                                        [
                                                          _c("label", [
                                                            _vm._v("Field Name")
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.form
                                                                    .fieldNameOne,
                                                                expression:
                                                                  "form.fieldNameOne"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              name:
                                                                "fieldNameOne",
                                                              placeholder:
                                                                "Enter Name"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.form
                                                                  .fieldNameOne
                                                            },
                                                            on: {
                                                              input: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.form,
                                                                  "fieldNameOne",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group col-md-5"
                                                        },
                                                        [
                                                          _c("label", [
                                                            _vm._v("Field Work")
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.form
                                                                    .workOne,
                                                                expression:
                                                                  "form.workOne"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              name: "workOne",
                                                              placeholder:
                                                                "Enter Work"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.form.workOne
                                                            },
                                                            on: {
                                                              input: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.form,
                                                                  "workOne",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group col-md-2"
                                                        },
                                                        [
                                                          _c("label", [
                                                            _vm._v("Delete")
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "btn btn-hover-shine btn-danger",
                                                              attrs: {
                                                                type: "button"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  if (
                                                                    !$event.type.indexOf(
                                                                      "key"
                                                                    ) &&
                                                                    _vm._k(
                                                                      $event.keyCode,
                                                                      "submit",
                                                                      undefined,
                                                                      $event.key,
                                                                      undefined
                                                                    )
                                                                  ) {
                                                                    return null
                                                                  }
                                                                  return _vm.oneFieldDelete(
                                                                    _vm.fieldNameOneShow
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "fa fa-times",
                                                                attrs: {
                                                                  "aria-hidden":
                                                                    "true"
                                                                }
                                                              })
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.fieldNameTwoShow
                                                ? _c(
                                                    "div",
                                                    { staticClass: "form-row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group col-md-5"
                                                        },
                                                        [
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.form
                                                                    .fieldNameTwo,
                                                                expression:
                                                                  "form.fieldNameTwo"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              name:
                                                                "fieldNameTwo",
                                                              placeholder:
                                                                "Enter Name"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.form
                                                                  .fieldNameTwo
                                                            },
                                                            on: {
                                                              input: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.form,
                                                                  "fieldNameTwo",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group col-md-5"
                                                        },
                                                        [
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.form
                                                                    .workTwo,
                                                                expression:
                                                                  "form.workTwo"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              name: "workTwo",
                                                              placeholder:
                                                                "Enter Work"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.form.workTwo
                                                            },
                                                            on: {
                                                              input: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.form,
                                                                  "workTwo",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group col-md-2"
                                                        },
                                                        [
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "btn btn-hover-shine btn-danger",
                                                              attrs: {
                                                                type: "button"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  if (
                                                                    !$event.type.indexOf(
                                                                      "key"
                                                                    ) &&
                                                                    _vm._k(
                                                                      $event.keyCode,
                                                                      "submit",
                                                                      undefined,
                                                                      $event.key,
                                                                      undefined
                                                                    )
                                                                  ) {
                                                                    return null
                                                                  }
                                                                  return _vm.twoFieldDelete(
                                                                    _vm.fieldNameTwoShow
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "fa fa-times",
                                                                attrs: {
                                                                  "aria-hidden":
                                                                    "true"
                                                                }
                                                              })
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.fieldNameThreeShow
                                                ? _c(
                                                    "div",
                                                    { staticClass: "form-row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group col-md-5"
                                                        },
                                                        [
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.form
                                                                    .fieldNameThree,
                                                                expression:
                                                                  "form.fieldNameThree"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              name:
                                                                "fieldNameThree",
                                                              placeholder:
                                                                "Enter Name"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.form
                                                                  .fieldNameThree
                                                            },
                                                            on: {
                                                              input: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.form,
                                                                  "fieldNameThree",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group col-md-5"
                                                        },
                                                        [
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.form
                                                                    .workThree,
                                                                expression:
                                                                  "form.workThree"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              name: "workThree",
                                                              placeholder:
                                                                "Enter Work"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.form
                                                                  .workThree
                                                            },
                                                            on: {
                                                              input: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.form,
                                                                  "workThree",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group col-md-2"
                                                        },
                                                        [
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "btn btn-hover-shine btn-danger",
                                                              attrs: {
                                                                type: "button"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  if (
                                                                    !$event.type.indexOf(
                                                                      "key"
                                                                    ) &&
                                                                    _vm._k(
                                                                      $event.keyCode,
                                                                      "submit",
                                                                      undefined,
                                                                      $event.key,
                                                                      undefined
                                                                    )
                                                                  ) {
                                                                    return null
                                                                  }
                                                                  return _vm.threeFieldDelete(
                                                                    _vm.fieldNameThreeShow
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "fa fa-times",
                                                                attrs: {
                                                                  "aria-hidden":
                                                                    "true"
                                                                }
                                                              })
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.fieldNameFourShow
                                                ? _c(
                                                    "div",
                                                    { staticClass: "form-row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group col-md-5"
                                                        },
                                                        [
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.form
                                                                    .fieldNameFour,
                                                                expression:
                                                                  "form.fieldNameFour"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              name:
                                                                "fieldNameFour",
                                                              placeholder:
                                                                "Enter Name"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.form
                                                                  .fieldNameFour
                                                            },
                                                            on: {
                                                              input: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.form,
                                                                  "fieldNameFour",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group col-md-5"
                                                        },
                                                        [
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.form
                                                                    .workFour,
                                                                expression:
                                                                  "form.workFour"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              name: "workFour",
                                                              placeholder:
                                                                "Enter Work"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.form
                                                                  .workFour
                                                            },
                                                            on: {
                                                              input: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.form,
                                                                  "workFour",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group col-md-2"
                                                        },
                                                        [
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "btn btn-hover-shine btn-danger",
                                                              attrs: {
                                                                type: "button"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  if (
                                                                    !$event.type.indexOf(
                                                                      "key"
                                                                    ) &&
                                                                    _vm._k(
                                                                      $event.keyCode,
                                                                      "submit",
                                                                      undefined,
                                                                      $event.key,
                                                                      undefined
                                                                    )
                                                                  ) {
                                                                    return null
                                                                  }
                                                                  return _vm.fourFieldDelete(
                                                                    _vm.fieldNameFourShow
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "fa fa-times",
                                                                attrs: {
                                                                  "aria-hidden":
                                                                    "true"
                                                                }
                                                              })
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "small",
                                                { staticClass: "text-danger" },
                                                [
                                                  _vm._v(
                                                    " Maximum field limit 4. "
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
                                            "col-12 supplier-border mt-5 shadow-custom"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _vm._m(15),
                                              _vm._v(" "),
                                              _c("vue-editor", {
                                                attrs: {
                                                  type: "text",
                                                  name: "proDescription",
                                                  placeholder:
                                                    "Product Description"
                                                },
                                                model: {
                                                  value:
                                                    _vm.form.proDescription,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.form,
                                                      "proDescription",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form.proDescription"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _vm._m(16),
                                              _vm._v(" "),
                                              _c("vue-editor", {
                                                attrs: {
                                                  type: "text",
                                                  name: "proAdvantage",
                                                  placeholder:
                                                    "Product Advantage"
                                                },
                                                model: {
                                                  value: _vm.form.proAdvantage,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.form,
                                                      "proAdvantage",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form.proAdvantage"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "modal-footer" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-hover-shine btn-danger",
                                      attrs: {
                                        type: "button",
                                        "data-dismiss": "modal"
                                      }
                                    },
                                    [_vm._v("Close")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-hover-shine btn-success",
                                      attrs: {
                                        "data-dismiss": "modal",
                                        disabled: _vm.loading
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.updateInfo(
                                            _vm.productLists.purchaseProductId
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm.loading
                                        ? _c("span", {
                                            staticClass:
                                              "spinner-border spinner-border-sm",
                                            attrs: {
                                              role: "status",
                                              "aria-hidden": "true"
                                            }
                                          })
                                        : _c(
                                            "span",
                                            { staticClass: "mr-2 opacity-7" },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-paper-plane"
                                              })
                                            ]
                                          ),
                                      _vm._v("\nUpdate")
                                    ]
                                  )
                                ])
                              ])
                            ])
                          ]
                        )
                      ]
                    )
                  ])
                ])
              ]
            )
          ])
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
          background: "rgba(221, 221, 221, 0.20)",
          border: "1px solid rgba(0, 0, 0, 0.05)"
        }
      },
      [
        _c("h3", { staticStyle: { color: "black" } }, [
          _vm._v("Sales Product  Details ")
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
      [
        _c("h3", { staticStyle: { color: "black" } }, [
          _vm._v("Product Details")
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
        _c("th", [_vm._v("Product.Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Brand")]),
        _vm._v(" "),
        _c("th", [_vm._v("Mdoel.Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Batch.Name ")]),
        _vm._v(" "),
        _c("th", [_vm._v("QR.Code")]),
        _vm._v(" "),
        _c("th", [_vm._v("Mfg.License.NO ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Warranty ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Guarantee")]),
        _vm._v(" "),
        _c("th", [_vm._v("Mfg.Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Expiry.Date ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tax ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tax.Amount ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity.Type ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity.Notification ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
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
        [_vm._v("Product  Detalis Update")]
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
    return _c("label", [_c("b", [_vm._v("Model No ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("b", [_vm._v("Batch No ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("b", [_vm._v("Mfg Date ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("b", [_vm._v("Expiry Date ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("b", [_vm._v("Mfg License No ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("b", [_vm._v("QR Code ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("b", [_vm._v("Warranty ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("b", [_vm._v("Guarantee ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("b", [_vm._v("Tax  ")]), _vm._v(" "), _c("hr")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _c("b", [_vm._v("Quality Type")]),
      _vm._v(" "),
      _c("hr")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("b", [_vm._v("Quantity Notification ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("b", [_vm._v(" Product Description ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("b", [_vm._v(" Product Advantage ")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase/product@details.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase/product@details.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_details_vue_vue_type_template_id_e8868322___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product@details.vue?vue&type=template&id=e8868322& */ "./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=template&id=e8868322&");
/* harmony import */ var _product_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product@details.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _product_details_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product@details.vue?vue&type=style&index=0&media=screen&lang=css& */ "./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=style&index=0&media=screen&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _product_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_details_vue_vue_type_template_id_e8868322___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_details_vue_vue_type_template_id_e8868322___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/purchase/purchase/product@details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./product@details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=style&index=0&media=screen&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=style&index=0&media=screen&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_details_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./product@details.vue?vue&type=style&index=0&media=screen&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=style&index=0&media=screen&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_details_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_details_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_details_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_details_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_details_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=template&id=e8868322&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=template&id=e8868322& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_details_vue_vue_type_template_id_e8868322___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./product@details.vue?vue&type=template&id=e8868322& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/product@details.vue?vue&type=template&id=e8868322&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_details_vue_vue_type_template_id_e8868322___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_details_vue_vue_type_template_id_e8868322___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);