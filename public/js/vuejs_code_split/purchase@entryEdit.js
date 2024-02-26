(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["purchase@entryEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/edit/purchase@entryEdit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase/edit/purchase@entryEdit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      form: new Form({
        purchaseDate: '',
        purchaseInvoiceNo: '',
        productSupplierId: '',
        moblieNo: '',
        address: '',
        // Product Field
        purchaseTypeId: [],
        productId: '',
        quantity: '',
        unitId: '',
        unitPrice: '',
        percetage: '',
        totalPrice: '',
        percetagePrice: '',
        // Total calculation
        totalPurchaseValue: '',
        carriageInward: '',
        totalAmount: '',
        discount: '',
        supplierPayable: '',
        otherCost: '',
        damageAndWarranty: '',
        totalProductCost: '',
        totalDiscount: '',
        previousPayable: '',
        currentPayable: '',
        // payable : '',
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
        workFour: ''
      }),
      productSupplierLists: {},
      purchaseTypes: {},
      unitNameShows: {},
      productNameLists: {},
      purchaseProductLists: {},
      purchaseInvoiceNumber: {},
      cusPurchaseInvoice: {},
      cusPreviousPayable: {},
      purchaseInvoiceLists: {},
      adminPurchaseTypeLists: {},
      purchaseTypeIdCatch: {},
      purchaseProductMoredetails: {},
      taxAmountTypeShow: false,
      fieldNameOneShow: false,
      fieldNameTwoShow: false,
      fieldNameThreeShow: false,
      fieldNameFourShow: false,
      updateDetails: true,
      addDetails: true // fieldLoopShow:false,

    };
  },
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_0__["VueEditor"]
  },
  mounted: function mounted() {
    this.productSupplierList();
    this.purchaseTypeShow();
    this.unitNameShow();
    this.productNameShow();
    this.productList(); // Edit

    this.purchaseInfo();
  },
  methods: {
    addMoreField: function addMoreField() {
      this.fieldNameOneShow = true;

      if (this.form.fieldNameOne != "" && this.form.workOne != "") {
        this.fieldNameTwoShow = true;
      }

      if (this.form.fieldNameTwo != "" && this.form.workTwo != "") {
        this.fieldNameThreeShow = true;
      }

      if (this.form.fieldNameThree != "" && this.form.workThree != "") {
        this.fieldNameFourShow = true;
      }
    },
    oneFieldDelete: function oneFieldDelete() {
      this.fieldNameOneShow = false;

      if (this.form.fieldNameOne != null) {
        this.form.fieldNameOne = [];
        this.form.workOne = [];
      }
    },
    twoFieldDelete: function twoFieldDelete() {
      this.fieldNameTwoShow = false;

      if (this.form.fieldNameTwo != null) {
        this.form.fieldNameTwo = [];
        this.form.workTwo = [];
      }
    },
    threeFieldDelete: function threeFieldDelete() {
      this.fieldNameThreeShow = false;

      if (this.form.fieldNameThree != null) {
        this.form.fieldNameThree = [];
        this.form.workThree = [];
      }
    },
    fourFieldDelete: function fourFieldDelete() {
      this.fieldNameFourShow = false;

      if (this.form.fieldNameFour != null) {
        this.form.fieldNameFour = [];
        this.form.workFour = [];
      }
    },
    purchaseInfo: function purchaseInfo() {
      var _this = this;

      axios.get('/purchaseInvoice/' + this.$route.params.purchaseInvoiceId + '/edit').then(function (res) {
        _this.form.fill(res.data.purchaseInfor);

        _this.purchaseTypeIdCatch = res.data.purchaseInfor.purchaseTypeId;

        _this.totalPurchaseValue();
      });
    },
    addProduct: function addProduct() {
      var _this2 = this;

      if (this.form.productSupplierId != "") {
        this.form.post('/productEntry').then(function (res) {
          if (res.data.alreadyEntry) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Already Product Entry!',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Product Quantity Update'
            }).then(function (res) {
              _this2.form.post('/productQuantityUpdate').then(function (res) {
                Swal.fire('Successfully!', 'Product Quantity has been Updated');

                _this2.productList();

                _this2.form.productId = '';
                _this2.form.brandId = '';
                _this2.form.quantity = '';
                _this2.form.unitId = '';
                _this2.form.unitPrice = '';
                _this2.form.totalPrice = '';
              });
            });
          } else {
            Toast.fire({
              icon: 'success',
              title: 'Product Entry Successfully'
            });
            _this2.form.productId = '';
            _this2.form.brandId = '';
            _this2.form.quantity = '';
            _this2.form.unitId = '';
            _this2.form.unitPrice = '';
            _this2.form.totalPrice = '';

            _this2.productList();
          }
        });
      } else {
        Toast.fire({
          icon: 'error',
          title: 'Select Product Supplier Name'
        });
      }
    },
    productList: function productList() {
      var _this3 = this;

      axios.get('/purchaseInvoice/' + this.$route.params.purchaseInvoiceId).then(function (res) {
        _this3.purchaseProductLists = res.data.purchaseProductList;
      });
    },
    updatePurchaseInvoice: function updatePurchaseInvoice() {
      var _this4 = this;

      this.form.put('/purchaseInvoice/' + this.$route.params.purchaseInvoiceId).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Purchase Invoice Update Successfully'
        });

        _this4.$router.push('/purchase@entry');
      });
    },
    purchaseProductIdCatch: function purchaseProductIdCatch(productId) {
      this.form.purchaseProductIdCatch = productId;
      this.purchaseProductInfo();
    },
    purchaseProductInfo: function purchaseProductInfo() {
      var _this5 = this;

      this.form.modelNo = '';
      this.form.batchNo = '';
      this.form.qrCode = '';
      this.form.mfgLicenseNO = '';
      this.form.warranty = '';
      this.form.selectMothOrYearWarranty = '';
      this.form.guarantee = '';
      this.form.selectMothOrYearGuarantee = '';
      this.form.mfgDate = '';
      this.form.expiryDate = '';
      this.form.tax = '';
      this.form.taxAmount = '';
      this.form.taxAmountType = '';
      ;
      this.form.quantityType = '';
      this.form.quantityNoti = '';
      this.form.proDescription = '';
      this.form.proAdvantage = '';
      axios.get('/purchaseProductInfo/' + this.form.purchaseProductIdCatch).then(function (res) {
        if (res.data.purchaseProductdetail == null) {
          _this5.updateDetails = false;
          _this5.addDetails = true;
        } else {
          _this5.updateDetails = true;
          _this5.addDetails = false;
        }

        _this5.form.modelNo = res.data.purchaseProductdetail.modelNo;
        _this5.form.batchNo = res.data.purchaseProductdetail.batchNo;
        _this5.form.qrCode = res.data.purchaseProductdetail.qrCode;
        _this5.form.mfgLicenseNO = res.data.purchaseProductdetail.mfgLicenseNO;
        _this5.form.warranty = res.data.purchaseProductdetail.warranty;
        _this5.form.selectMothOrYearWarranty = res.data.purchaseProductdetail.selectMothOrYearWarranty;
        _this5.form.guarantee = res.data.purchaseProductdetail.guarantee;
        _this5.form.selectMothOrYearGuarantee = res.data.purchaseProductdetail.selectMothOrYearGuarantee;
        _this5.form.mfgDate = res.data.purchaseProductdetail.mfgDate;
        _this5.form.expiryDate = res.data.purchaseProductdetail.expiryDate;
        _this5.form.tax = res.data.purchaseProductdetail.tax;

        if (res.data.purchaseProductdetail.taxAmount != null) {
          _this5.taxAmountTypeShow = true;
        } else {
          _this5.taxAmountTypeShow = false;
        }

        _this5.form.taxAmount = res.data.purchaseProductdetail.taxAmount;
        _this5.form.taxAmountType = res.data.purchaseProductdetail.taxAmountType;
        _this5.form.quantityType = res.data.purchaseProductdetail.quantityType;
        _this5.form.quantityNoti = res.data.purchaseProductdetail.quantityNoti;
        _this5.form.proDescription = res.data.purchaseProductdetail.proDescription;
        _this5.form.proAdvantage = res.data.purchaseProductdetail.proAdvantage;
      });
    },
    purchaseProductDetailsAdd: function purchaseProductDetailsAdd() {
      var _this6 = this;

      this.form.post('/purchaseProductDetails').then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Product Details Entry Successfully'
        });
        _this6.form.modelNo = '';
        _this6.form.batchNo = '';
        _this6.form.qrCode = '';
        _this6.form.mfgLicenseNO = '';
        _this6.form.warranty = '';
        _this6.form.selectMothOrYearWarranty = '';
        _this6.form.guarantee = '';
        _this6.form.selectMothOrYearGuarantee = '';
        _this6.form.mfgDate = '';
        _this6.form.expiryDate = '';
        _this6.form.tax = '';
        _this6.form.taxAmount = '';
        _this6.form.taxAmountType = '';
        ;
        _this6.form.quantityType = '';
        _this6.form.quantityNoti = '';
        _this6.form.proDescription = '';
        _this6.form.proAdvantage = '';
      });
    },
    purchaseProductDetailsUpdate: function purchaseProductDetailsUpdate() {
      this.form.post('/purchaseProductDetailsUpdate').then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Product Details Update Successfully'
        });
      });
    },
    productSupplierList: function productSupplierList() {
      var _this7 = this;

      axios.get('/shopWishProductSupplier').then(function (res) {
        _this7.productSupplierLists = res.data.productSupplierList;
      });
    },
    productSupplierId: function productSupplierId() {
      var _this8 = this;

      axios.get('/shopWishProductSupplierId/' + this.form.productSupplierId).then(function (res) {
        _this8.form.moblieNo = res.data.productSupplierPhone;
        _this8.form.address = res.data.productSupplierAddress;

        if (res.data.previousBill != '') {
          _this8.form.previousPayable = res.data.previousBill;
          _this8.cusPreviousPayable = res.data.previousBill;
        }
      });
    },
    purchaseTypeShow: function purchaseTypeShow() {
      var _this9 = this;

      axios.get('/purchaseTypeShow').then(function (res) {
        _this9.purchaseTypes = res.data.purchaseType;
      });
    },
    unitNameShow: function unitNameShow() {
      var _this10 = this;

      axios.get('/unitNameShow').then(function (res) {
        _this10.unitNameShows = res.data.unitNameShow;
        _this10.brandLists = res.data.brandLists;
      });
    },
    productNameShow: function productNameShow() {
      var _this11 = this;

      axios.get('/productNameShow').then(function (res) {
        _this11.productNameLists = res.data.productNameList;
      });
    },
    unitPrice: function unitPrice() {
      var quantity = this.form.quantity;
      var unitPrice = this.form.unitPrice;
      var totalPrice = quantity * unitPrice;
      this.form.totalPrice = totalPrice;
      this.form.percetagePrice = totalPrice;
    },
    percetage: function percetage() {
      if (this.form.percetage != '') {
        var discountDiv = parseFloat(this.form.percetage) * parseFloat(this.form.percetagePrice) / parseFloat(100);
        var discount = parseFloat(this.form.percetagePrice) - parseFloat(discountDiv);
        this.form.totalPrice = discount;
      } else {
        this.unitPrice();
      }
    },
    totalPurchaseValue: function totalPurchaseValue() {
      var _this12 = this;

      axios.get('/purchaseInvoice/' + this.$route.params.purchaseInvoiceId).then(function (res) {
        var sum = 0;
        res.data.purchaseProductList.forEach(function (productPrice) {
          sum += parseFloat(productPrice.totalPrice);
        });
        _this12.form.totalPurchaseValue = sum;
        _this12.form.totalAmount = sum;
        _this12.form.supplierPayable = sum;
        _this12.form.totalProductCost = sum;
        _this12.form.totalDiscount = sum;
        _this12.form.currentPayable = sum;

        if (_this12.cusPreviousPayable > 0) {
          var totalcurrant = _this12.cusPreviousPayable + parseFloat(_this12.form.currentPayable);
          _this12.form.currentPayable = totalcurrant;
        }
      });
    },
    carriageInward: function carriageInward() {
      if (this.form.carriageInward == "") {
        this.totalPurchaseValue();
      } else {
        var totalAmount = parseFloat(this.form.carriageInward) + parseFloat(this.form.totalPurchaseValue);
        this.form.totalAmount = totalAmount;
        this.form.supplierPayable = totalAmount;
        this.form.totalProductCost = totalAmount;
        this.form.totalDiscount = totalAmount;
        this.form.currentPayable = totalAmount;

        if (this.cusPreviousPayable > 0) {
          var totalcurrant = parseFloat(this.cusPreviousPayable) + parseFloat(this.form.currentPayable);
          this.form.currentPayable = totalcurrant;
        }
      }
    },
    discount: function discount() {
      if (this.form.discount == "") {
        this.carriageInward();
      } else {
        var discount = parseFloat(this.form.totalAmount) - parseFloat(this.form.discount);
        this.form.supplierPayable = discount;
        this.form.totalProductCost = discount;
        this.form.totalDiscount = discount;
        this.form.currentPayable = discount;

        if (this.cusPreviousPayable > 0) {
          var totalcurrant = parseFloat(this.cusPreviousPayable) + parseFloat(this.form.currentPayable);
          this.form.currentPayable = totalcurrant;
        }
      }
    },
    otherCosts: function otherCosts() {
      if (this.form.otherCost == "") {
        if (this.form.otherCost == "" && this.form.damageAndWarranty == "") {
          this.discount();
        }
      } else {
        var otherCost = parseFloat(this.form.totalDiscount) + parseFloat(this.form.otherCost);
        this.form.totalProductCost = otherCost;
        this.form.currentPayable = otherCost;

        if (this.cusPreviousPayable > 0) {
          var totalcurrant = parseFloat(this.cusPreviousPayable) + parseFloat(this.form.currentPayable);
          this.form.currentPayable = totalcurrant;
        }
      }
    },
    damageAndWarrantys: function damageAndWarrantys() {
      if (this.form.damageAndWarranty == "") {
        if (this.form.otherCost == "" && this.form.damageAndWarranty == "") {
          this.discount();
        }
      } else {
        var damageAndWarranty = parseFloat(this.form.totalDiscount) + parseFloat(this.form.damageAndWarranty);
        var otherCost = parseFloat(damageAndWarranty) + parseFloat(this.form.otherCost);
        this.form.totalProductCost = otherCost;
        this.form.currentPayable = otherCost;

        if (this.cusPreviousPayable > 0) {
          var totalcurrant = parseFloat(this.cusPreviousPayable) + parseFloat(this.form.currentPayable);
          this.form.currentPayable = totalcurrant;
        }
      }
    },
    distroy: function distroy(purchaseProductId) {
      var _this13 = this;

      axios["delete"]('/purchaseInvoice/' + purchaseProductId).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Product Delete Successfully'
        });

        _this13.productList();

        _this13.totalPurchaseValue();
      });
    },
    taxYes: function taxYes() {
      this.taxAmountTypeShow = true;
    },
    taxNo: function taxNo() {
      this.taxAmountTypeShow = false;
      this.form.taxAmountType = [];
      this.form.taxAmount = [];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/edit/purchase@entryEdit.vue?vue&type=template&id=09309540&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase/edit/purchase@entryEdit.vue?vue&type=template&id=09309540& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "form",
        {
          attrs: { action: "" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.updatePurchaseInvoice()
            }
          }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "purchase-entery purchase-border p-3 " }, [
            _c("div", { staticClass: "row m-0" }, [
              _c(
                "div",
                { staticClass: "col-auto pl-lg-auto purcha-border p-3" },
                [
                  _c("div", { staticClass: "table-responsive bg-white" }, [
                    _c("table", { staticClass: " table-hover  mb-0" }, [
                      _c("tr", [
                        _c("td", { staticClass: "title-name" }, [
                          _vm._v("Purchase Date")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("div", { staticClass: "input-group" }, [
                            _vm._m(1),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.purchaseDate,
                                  expression: "form.purchaseDate"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                disabled: "",
                                name: "purchaseDate",
                                "data-toggle": "datepicker-icon",
                                placeholder: "Data"
                              },
                              domProps: { value: _vm.form.purchaseDate },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "purchaseDate",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { staticClass: "title-name" }, [
                          _vm._v("Purchase Invoice No")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("div", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.purchaseInvoiceNo,
                                  expression: "form.purchaseInvoiceNo"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                disabled: "",
                                type: "text",
                                name: "purchaseInvoiceNo",
                                placeholder: "Invoice No"
                              },
                              domProps: { value: _vm.form.purchaseInvoiceNo },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "purchaseInvoiceNo",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { staticClass: "title-name" }, [
                          _vm._v("Product Supplier Name")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "div",
                            [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.productSupplierId,
                                      expression: "form.productSupplierId"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "productSupplierId"
                                    )
                                  },
                                  attrs: { name: "productSupplierId" },
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.form,
                                          "productSupplierId",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                      function($event) {
                                        $event.preventDefault()
                                        return _vm.productSupplierId()
                                      }
                                    ]
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "" } }, [
                                    _vm._v("Select One")
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.productSupplierLists, function(
                                    productSupplierList
                                  ) {
                                    return _c(
                                      "option",
                                      {
                                        domProps: {
                                          value:
                                            productSupplierList.productSupplierId
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            productSupplierList.productSupplierName
                                          )
                                        )
                                      ]
                                    )
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.form,
                                  field: "productSupplierId"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { staticClass: "title-name" }, [
                          _vm._v("Moblie No")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("div", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.moblieNo,
                                  expression: "form.moblieNo"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                disabled: "",
                                type: "text",
                                name: "moblieNo",
                                placeholder: "Moblie No"
                              },
                              domProps: { value: _vm.form.moblieNo },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "moblieNo",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { staticClass: "title-name" }, [
                          _vm._v("Address")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("div", [
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.address,
                                  expression: "form.address"
                                }
                              ],
                              staticClass: "form-control",
                              staticStyle: { height: "80px" },
                              attrs: {
                                disabled: "",
                                name: "address",
                                placeholder: "Address"
                              },
                              domProps: { value: _vm.form.address },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "address",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { staticClass: "title-name" }, [
                          _vm._v("Purchase Type")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm._l(_vm.purchaseTypes, function(purchaseType) {
                              return _c(
                                "div",
                                {
                                  staticStyle: {
                                    float: "left",
                                    "margin-right": "10px"
                                  }
                                },
                                [
                                  (_vm.purchaseTypeIdCatch ==
                                  purchaseType.purchaseTypeId
                                  ? "checked"
                                  : "")
                                    ? _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.purchaseTypeId,
                                            expression: "form.purchaseTypeId"
                                          }
                                        ],
                                        attrs: {
                                          type: "checkbox",
                                          name: "purchaseTypeId"
                                        },
                                        domProps: {
                                          value: purchaseType.purchaseTypeId,
                                          checked: Array.isArray(
                                            _vm.form.purchaseTypeId
                                          )
                                            ? _vm._i(
                                                _vm.form.purchaseTypeId,
                                                purchaseType.purchaseTypeId
                                              ) > -1
                                            : _vm.form.purchaseTypeId
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$a = _vm.form.purchaseTypeId,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v =
                                                  purchaseType.purchaseTypeId,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  _vm.$set(
                                                    _vm.form,
                                                    "purchaseTypeId",
                                                    $$a.concat([$$v])
                                                  )
                                              } else {
                                                $$i > -1 &&
                                                  _vm.$set(
                                                    _vm.form,
                                                    "purchaseTypeId",
                                                    $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      )
                                                  )
                                              }
                                            } else {
                                              _vm.$set(
                                                _vm.form,
                                                "purchaseTypeId",
                                                $$c
                                              )
                                            }
                                          }
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(purchaseType.purchaseTypeName) +
                                      "\n                      "
                                  )
                                ]
                              )
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "purchaseTypeId" }
                            })
                          ],
                          2
                        )
                      ])
                    ])
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "product-page px-3 purcha-border",
              staticStyle: { background: "#E7F1E8" }
            },
            [
              _c(
                "form",
                {
                  attrs: { action: "" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.addProduct()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-row" }, [
                    _c(
                      "div",
                      {
                        staticClass: "form-group mb-0 col-md-2 col-sm-4 col-6"
                      },
                      [
                        _c("label", [_vm._v("Product Name")]),
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
                            attrs: { name: "productId" },
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
                              _vm._v("Select One")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.productNameLists, function(
                              productNameList
                            ) {
                              return _c(
                                "option",
                                {
                                  domProps: {
                                    value: productNameList.productNameId
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                          " +
                                      _vm._s(productNameList.productName) +
                                      "  (" +
                                      _vm._s(productNameList.productCode) +
                                      ")\n                      "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group  col-sm-2  col-3" }, [
                      _c("label", [_vm._v("Brand Name")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.brandId,
                              expression: "form.brandId"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "brandId" },
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
                              _vm.$set(
                                _vm.form,
                                "brandId",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select One")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.brandLists, function(brandList) {
                            return _c(
                              "option",
                              { domProps: { value: brandList.brandId } },
                              [
                                _vm._v(
                                  "\n                          " +
                                    _vm._s(brandList.brandName) +
                                    "\n                      "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-sm-2 col-6" }, [
                      _c("label", [_vm._v("Unit")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.unitId,
                              expression: "form.unitId"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "unitId" },
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
                              _vm.$set(
                                _vm.form,
                                "unitId",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select One")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.unitNameShows, function(unitNameShow) {
                            return _c(
                              "option",
                              {
                                domProps: { value: unitNameShow.uniteEntryId }
                              },
                              [_vm._v(_vm._s(unitNameShow.uniteEntryName))]
                            )
                          })
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-sm-1 col-6" }, [
                      _c("label", [_vm._v("Quantity")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.quantity,
                            expression: "form.quantity"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "quantity",
                          placeholder: "Quantity"
                        },
                        domProps: { value: _vm.form.quantity },
                        on: {
                          keyup: function($event) {
                            $event.preventDefault()
                            return _vm.unitPrice()
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "quantity", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-sm-1 col-6" }, [
                      _c("label", [_vm._v("Unit Price")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.unitPrice,
                            expression: "form.unitPrice"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "unitPrice",
                          placeholder: "Unit Price"
                        },
                        domProps: { value: _vm.form.unitPrice },
                        on: {
                          keyup: function($event) {
                            $event.preventDefault()
                            return _vm.unitPrice()
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "unitPrice", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-sm-1 col-6" }, [
                      _c("label", [_vm._v("Discount")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.percetage,
                            expression: "form.percetage"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "percetage",
                          placeholder: "Percetage"
                        },
                        domProps: { value: _vm.form.percetage },
                        on: {
                          keyup: function($event) {
                            $event.preventDefault()
                            return _vm.percetage()
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "percetage", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-sm-2 col-6" }, [
                      _c("label", [_vm._v("Total Price")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.totalPrice,
                            expression: "form.totalPrice"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          disabled: "",
                          name: "totalPrice",
                          placeholder: "Total Price"
                        },
                        domProps: { value: _vm.form.totalPrice },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "totalPrice",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.percetagePrice,
                          expression: "form.percetagePrice"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "hidden",
                        disabled: "",
                        name: "percetagePrice"
                      },
                      domProps: { value: _vm.form.percetagePrice },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "percetagePrice",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(2)
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive bg-white" }, [
            _c(
              "table",
              { staticClass: "table table-hover table-bordered mb-0" },
              [
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.purchaseProductLists, function(
                    purchaseProductList,
                    index
                  ) {
                    return _c("tr", [
                      _c("td", [_vm._v(_vm._s(index + 1))]),
                      _vm._v(" "),
                      purchaseProductList.product_name
                        ? _c("td", [
                            _vm._v(
                              _vm._s(
                                purchaseProductList.product_name.productName
                              ) +
                                " (" +
                                _vm._s(
                                  purchaseProductList.product_name.productCode
                                ) +
                                ")"
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      purchaseProductList.brand_name
                        ? _c("td", [
                            _vm._v(
                              _vm._s(purchaseProductList.brand_name.brandName)
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      purchaseProductList.unit_name
                        ? _c("td", [
                            _vm._v(
                              _vm._s(
                                purchaseProductList.unit_name.uniteEntryName
                              )
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(purchaseProductList.quantity))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(purchaseProductList.unitPrice))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(purchaseProductList.totalPrice))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-hover-shine btn-danger",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.distroy(
                                  purchaseProductList.purchaseProductId
                                )
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: " fa fa-trash" }),
                            _vm._v("Delete")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-hover-shine  btn-success",
                            attrs: {
                              type: "button",
                              "data-toggle": "modal",
                              "data-target":
                                "#productId" +
                                purchaseProductList.purchaseProductId
                            },
                            on: {
                              click: function($event) {
                                return _vm.purchaseProductIdCatch(
                                  purchaseProductList.purchaseProductId
                                )
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                       Update  Details\n                    "
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
                            id:
                              "productId" +
                              purchaseProductList.purchaseProductId,
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
                                _vm._m(4, true),
                                _vm._v(" "),
                                _c("form", [
                                  _c("div", { staticClass: "modal-body" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "purchase-entry py-4 px-2"
                                      },
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
                                                    name:
                                                      "purchaseProductIdCatch"
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
                                                    _c("label", [
                                                      _vm._v("Model No")
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form.modelNo,
                                                          expression:
                                                            "form.modelNo"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        type: "text",
                                                        name: "modelNo",
                                                        placeholder: "Model No"
                                                      },
                                                      domProps: {
                                                        value: _vm.form.modelNo
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
                                                    _c("label", [
                                                      _vm._v("Batch No")
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form.batchNo,
                                                          expression:
                                                            "form.batchNo"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        type: "text",
                                                        name: "batchNo",
                                                        placeholder: "Batch No"
                                                      },
                                                      domProps: {
                                                        value: _vm.form.batchNo
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
                                                    _c("label", [
                                                      _vm._v("QR Code")
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form.qrCode,
                                                          expression:
                                                            "form.qrCode"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        type: "text",
                                                        name: "qrCode",
                                                        placeholder: "QR Code"
                                                      },
                                                      domProps: {
                                                        value: _vm.form.qrCode
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
                                                            "qrCode",
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
                                                    _c("label", [
                                                      _vm._v("Mfg License No")
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form
                                                              .mfgLicenseNO,
                                                          expression:
                                                            "form.mfgLicenseNO"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
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
                                                            "mfgLicenseNO",
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
                                                    _c("label", [
                                                      _vm._v("Warranty")
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "form-row"
                                                      },
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
                                                                name:
                                                                  "warranty",
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
                                                                    $event
                                                                      .target
                                                                      .composing
                                                                  ) {
                                                                    return
                                                                  }
                                                                  _vm.$set(
                                                                    _vm.form,
                                                                    "warranty",
                                                                    $event
                                                                      .target
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
                                                                    name:
                                                                      "model",
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
                                                                  [
                                                                    _vm._v(
                                                                      "Day"
                                                                    )
                                                                  ]
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
                                                    _c("label", [
                                                      _vm._v("Guarantee")
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "form-row"
                                                      },
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
                                                                name:
                                                                  "guarantee",
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
                                                                    $event
                                                                      .target
                                                                      .composing
                                                                  ) {
                                                                    return
                                                                  }
                                                                  _vm.$set(
                                                                    _vm.form,
                                                                    "guarantee",
                                                                    $event
                                                                      .target
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
                                                                    name:
                                                                      "model",
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
                                                                  [
                                                                    _vm._v(
                                                                      "Day"
                                                                    )
                                                                  ]
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
                                                    _c("label", [
                                                      _vm._v("Mfg Date")
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form.mfgDate,
                                                          expression:
                                                            "form.mfgDate"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        type: "date",
                                                        name: "mfgDate"
                                                      },
                                                      domProps: {
                                                        value: _vm.form.mfgDate
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
                                                    _c("label", [
                                                      _vm._v("Expiry Date")
                                                    ]),
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
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        type: "date",
                                                        name: "expiryDate"
                                                      },
                                                      domProps: {
                                                        value:
                                                          _vm.form.expiryDate
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
                                                    _c("label", [
                                                      _vm._v("Tax ")
                                                    ]),
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
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.form.tax,
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
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.form.tax,
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
                                                                    type:
                                                                      "text",
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
                                                    _c("label", [
                                                      _vm._v("Quantity Type")
                                                    ]),
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
                                                              rawName:
                                                                "v-model",
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
                                                            name:
                                                              "quantityType",
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
                                                          "custom-control custom-radio custom-control-inline"
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
                                                            name:
                                                              "quantityType",
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
                                                          "custom-control custom-radio custom-control-inline"
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
                                                            name:
                                                              "quantityType",
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
                                                _c("label", [
                                                  _vm._v(
                                                    "Quantity Notification"
                                                  )
                                                ]),
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
                                                                return _vm.oneFieldDelete()
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
                                                                return _vm.twoFieldDelete()
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
                                                              _vm.form.workThree
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
                                                                return _vm.threeFieldDelete()
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
                                                              _vm.form.workFour
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
                                                                return _vm.fourFieldDelete()
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
                                              : _vm._e()
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
                                                _c("label", [
                                                  _vm._v("Product Description")
                                                ]),
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
                                                _c("label", [
                                                  _vm._v("Product Advantage")
                                                ]),
                                                _vm._v(" "),
                                                _c("vue-editor", {
                                                  attrs: {
                                                    type: "text",
                                                    name: "proAdvantage",
                                                    placeholder:
                                                      "Product Advantage"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.form.proAdvantage,
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
                                    _vm.updateDetails
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-hover-shine btn-success",
                                            attrs: { "data-dismiss": "modal" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.purchaseProductDetailsUpdate()
                                              }
                                            }
                                          },
                                          [_vm._v("Update Detalis")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.addDetails
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-hover-shine btn-success",
                                            attrs: { "data-dismiss": "modal" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.purchaseProductDetailsAdd()
                                              }
                                            }
                                          },
                                          [_vm._v("Add Detalis")]
                                        )
                                      : _vm._e()
                                  ])
                                ])
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
          _c("div", { staticClass: "purchase-entery purchase-border p-3" }, [
            _c("div", { staticClass: "row m-0" }, [
              _c("div", { staticClass: "col-auto ml-auto purcha-border p-3" }, [
                _c("div", { staticClass: "table-responsive bg-white" }, [
                  _c("table", { staticClass: " table-hover  mb-0" }, [
                    _c("tr", [
                      _c("td", { staticClass: "title-name" }, [
                        _vm._v("Total Purchase Value")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.totalPurchaseValue,
                                expression: "form.totalPurchaseValue"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              disabled: "",
                              name: "totalPurchaseValue",
                              placeholder: "Total Purchase Value"
                            },
                            domProps: { value: _vm.form.totalPurchaseValue },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "totalPurchaseValue",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "title-name" }, [
                        _vm._v("Carriage Inward")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.carriageInward,
                                expression: "form.carriageInward"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "carriageInward",
                              placeholder: "Carriage Inward"
                            },
                            domProps: { value: _vm.form.carriageInward },
                            on: {
                              keyup: function($event) {
                                $event.preventDefault()
                                return _vm.carriageInward()
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "carriageInward",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "title-name" }, [
                        _vm._v("Total Amount")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.totalAmount,
                                expression: "form.totalAmount"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              disabled: "",
                              name: "totalAmount",
                              placeholder: "Total Amount"
                            },
                            domProps: { value: _vm.form.totalAmount },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "totalAmount",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "title-name" }, [
                        _vm._v("Discount ")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.discount,
                                expression: "form.discount"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "discount",
                              placeholder: "Discount"
                            },
                            domProps: { value: _vm.form.discount },
                            on: {
                              keyup: function($event) {
                                $event.preventDefault()
                                return _vm.discount()
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "discount",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "title-name" }, [
                        _vm._v("Supplier Payable ")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.supplierPayable,
                                expression: "form.supplierPayable"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              disabled: "",
                              name: "supplierPayable",
                              placeholder: "Supplier Payable"
                            },
                            domProps: { value: _vm.form.supplierPayable },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "supplierPayable",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "title-name" }, [
                        _vm._v("Other Cost ")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.otherCost,
                                expression: "form.otherCost"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "otherCost",
                              placeholder: "Other Cost"
                            },
                            domProps: { value: _vm.form.otherCost },
                            on: {
                              keyup: function($event) {
                                $event.preventDefault()
                                return _vm.otherCosts()
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "otherCost",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "title-name" }, [
                        _vm._v("Damage & Warranty")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.damageAndWarranty,
                                expression: "form.damageAndWarranty"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "damageAndWarranty",
                              placeholder: "Damage And Warranty"
                            },
                            domProps: { value: _vm.form.damageAndWarranty },
                            on: {
                              keyup: function($event) {
                                $event.preventDefault()
                                return _vm.damageAndWarrantys()
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "damageAndWarranty",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "title-name" }, [
                        _vm._v("Total Product Cost")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.totalProductCost,
                                expression: "form.totalProductCost"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              disabled: "",
                              name: "totalProductCost",
                              placeholder: "Total Product Cost"
                            },
                            domProps: { value: _vm.form.totalProductCost },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "totalProductCost",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.totalDiscount,
                              expression: "form.totalDiscount"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "hidden",
                            disabled: "",
                            name: "totalDiscount",
                            placeholder: "Total Product Cost"
                          },
                          domProps: { value: _vm.form.totalDiscount },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "totalDiscount",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "title-name" }, [
                        _vm._v("Previous Payable")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.previousPayable,
                                expression: "form.previousPayable"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              disabled: "",
                              name: "previousPayable",
                              placeholder: "Previous Payable"
                            },
                            domProps: { value: _vm.form.previousPayable },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "previousPayable",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "title-name" }, [
                        _vm._v("Current Payable ")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.currentPayable,
                                expression: "form.currentPayable"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              disabled: "",
                              name: "currentPayable",
                              placeholder: "Current Payable"
                            },
                            domProps: { value: _vm.form.currentPayable },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "currentPayable",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(5)
                  ])
                ])
              ])
            ])
          ])
        ]
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
          background: "rgba(221, 221, 221, 0.20)",
          border: "1px solid rgba(0, 0, 0, 0.05)"
        }
      },
      [
        _c("h3", { staticStyle: { color: "black" } }, [
          _vm._v("New Purchase Entry")
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
      { staticClass: "input-group-prepend datepicker-trigger" },
      [
        _c("div", { staticClass: "input-group-text" }, [
          _c("i", { staticClass: "fa fa-calendar-alt" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "btn-mr" }, [
      _c("label"),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-info btn-padding", attrs: { type: "submit" } },
        [_vm._v("Add")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticStyle: { background: "rgba(242, 242, 242, 0.47)" } }, [
        _c("th", [_vm._v("SN")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Brand Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit Price")]),
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
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLongTitle" } },
        [_vm._v("Update Product More Detalis")]
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
    return _c("tr", [
      _c("td"),
      _vm._v(" "),
      _c("td", [
        _c(
          "button",
          {
            staticClass: "mt-3 mr-2 btn-pill btn-hover-shine btn btn-primary",
            attrs: { type: "submit" }
          },
          [_vm._v("Update")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase/edit/purchase@entryEdit.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase/edit/purchase@entryEdit.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _purchase_entryEdit_vue_vue_type_template_id_09309540___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase@entryEdit.vue?vue&type=template&id=09309540& */ "./resources/js/admin/page/purchase/purchase/edit/purchase@entryEdit.vue?vue&type=template&id=09309540&");
/* harmony import */ var _purchase_entryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase@entryEdit.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/purchase/purchase/edit/purchase@entryEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _purchase_entryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _purchase_entryEdit_vue_vue_type_template_id_09309540___WEBPACK_IMPORTED_MODULE_0__["render"],
  _purchase_entryEdit_vue_vue_type_template_id_09309540___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/purchase/purchase/edit/purchase@entryEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase/edit/purchase@entryEdit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase/edit/purchase@entryEdit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_entryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./purchase@entryEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/edit/purchase@entryEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_entryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase/edit/purchase@entryEdit.vue?vue&type=template&id=09309540&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase/edit/purchase@entryEdit.vue?vue&type=template&id=09309540& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_entryEdit_vue_vue_type_template_id_09309540___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./purchase@entryEdit.vue?vue&type=template&id=09309540& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/edit/purchase@entryEdit.vue?vue&type=template&id=09309540&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_entryEdit_vue_vue_type_template_id_09309540___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_entryEdit_vue_vue_type_template_id_09309540___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);