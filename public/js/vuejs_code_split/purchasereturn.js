(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["purchasereturn"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/purchase@return.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase/purchase@return.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      invoices: {},
      form: new Form({
        purchaseDate: '',
        purchaseInvoiceNo: '',
        productSupplierId: '',
        moblieNo: '',
        address: '',
        // Product Field
        purchaseTypeId: [],
        productId: '',
        brandId: '',
        unitId: '',
        quantity: '',
        quantty: '',
        unitPrice: '',
        percetage: '',
        totalPrice: '',
        percetagePrice: '',
        // Total calculation
        totalProductQuantity: '',
        totalPurchaseValue: '',
        carriageInward: 0,
        totalAmount: '',
        discount: 0,
        supplierPayable: '',
        otherCost: 0,
        damageAndWarranty: 0,
        totalProductCost: '',
        totalDiscount: '',
        previousPayable: '',
        currentPayable: '',
        preQun: '',
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
        workFour: '',
        //bank info sender
        receiverbankTypeEntryId: "",
        receiverBankName: "",
        receiverAcNo: "",
        receiverAcName: "",
        receiverBranchName: "",
        receiverMobileAcNo: "",
        receiverTrxNo: "",
        //receiver bank info
        senderbankTypeEntryId: "",
        senderbankEntryId: "",
        senderbankAccountId: "",
        senderbranchName: "",
        senderAccNo: "",
        currentPaidAmount: 0,
        currentDue: "",
        bankAmount: 0
      }),
      countryLists: {},
      purchaseTypeLists: {},
      productSupplierLists: {},
      purchaseTypes: {},
      brandLists: {},
      unitNameShows: {},
      productNameLists: {},
      purchaseProductLists: {},
      purchaseProductListgets: {},
      productBrandList: {},
      purchaseInvoiceNumber: {},
      cusPurchaseInvoice: {},
      cusPreviousPayable: {},
      purchaseInvoiceLists: {},
      adminPurchaseTypeLists: {},
      invoiceProductMoreDetailss: {},
      invoiceProductMoreField1: [],
      invoiceProductMoreField2: [],
      invoiceProductMoreField3: [],
      invoiceProductMoreField4: [],
      taxAmountTypeShow: false,
      fieldNameOneShow: false,
      fieldNameTwoShow: false,
      fieldNameThreeShow: false,
      fieldNameFourShow: false,
      showCal: false,
      showTotal: false,
      negative: false,
      negative1: false,
      negative2: false,
      negative3: false,
      negative4: false,
      negative5: false,
      negative6: false,
      negative7: false,
      fromshow: false,
      negativepay: false,
      negativepaybank: false,
      guestInfo: true,
      invoiceN: '',
      productN: '',
      returnP: "",
      Inward: '',
      pendingCount: "",
      paymentTypeLists: {},
      showBankNames: [],
      showBankAccounts: [],
      showBankTypeDatas: [],
      bankInformationAccountInfoStatus: [],
      mobileAccount: false,
      bankAccount: false,
      alert: false,
      alert1: false,
      paybutton: false,
      morepay: false,
      close: false,
      loading: false,
      loadingPay: false,
      avilable_balance: '',
      avilable_bal: ''
    };
  },
  mounted: function mounted() {
    this.invoiceList();
    this.productSupplierList();
    this.getData();
  },
  methods: {
    currentDue: function currentDue() {
      this.form.currentDue = this.form.currentPayable;
    },
    open: function open() {
      this.morepay = true;
      this.close = true;
    },
    closeForm: function closeForm() {
      this.morepay = false;
      this.close = false;
    },
    invoiceList: function invoiceList() {
      var _this = this;

      axios.get('/returnPurchase').then(function (res) {
        _this.invoices = res.data.getInvoice;
      });
    },
    quantity: function quantity(e) {
      this.form.quantity = this.form.preQun - this.form.quantty;
      var stringValue = e.target.value.toString();
      var regex = /^\d*(\.\d{1,2})?$/;

      if (!stringValue.match(regex) && this.form.quantity !== "") {
        this.negative = true;
        this.form.quantity = 1;
      } else {
        if (this.form.quantity < 0) {
          this.negative = true;
          this.form.quantity = 1;
        } else {
          this.negative = false;
        }

        this.negative = false;
      }
    },
    unit: function unit(e) {
      var stringValue = e.target.value.toString();
      var regex = /^\d*(\.\d{1,2})?$/;

      if (!stringValue.match(regex) && this.form.unitPrice !== "") {
        this.negative1 = true;
        this.form.unitPrice = 1;
      } else {
        if (this.form.unitPrice < 0) {
          this.negative1 = true;
          this.form.unitPrice = 1;
        } else {
          this.negative1 = false;
        }

        this.negative1 = false;
      }
    },
    disnt: function disnt(e) {
      var stringValue = e.target.value.toString();
      var regex = /^\d*(\.\d{1,2})?$/;

      if (!stringValue.match(regex) && this.form.percetage !== "") {
        this.negative2 = true;
        this.form.percetage = 1;
      } else {
        if (this.form.percetage < 0) {
          this.negative2 = true;
          this.form.percetage = 1;
        } else {
          this.negative2 = false;
        }

        this.negative2 = false;
      }
    },
    inward1: function inward1(e) {
      var stringValue = e.target.value.toString();
      var regex = /^\d*(\.\d{1,2})?$/;

      if (!stringValue.match(regex) && this.form.carriageInward !== "") {
        this.negative3 = true;
        this.form.carriageInward = 0;
      } else {
        if (this.form.carriageInward < 0) {
          this.negative3 = true;
          this.form.carriageInward = 0;
        } else {
          this.negative3 = false;
        }

        this.negative3 = false;
      }
    },
    dis: function dis(e) {
      var stringValue = e.target.value.toString();
      var regex = /^\d*(\.\d{1,2})?$/;

      if (!stringValue.match(regex) && this.form.discount !== "") {
        this.negative4 = true;
        this.form.discount = 0;
      } else {
        if (this.form.discount < 0) {
          this.negative4 = true;
          this.form.discount = 0;
        } else {
          this.negative4 = false;
        }

        this.negative4 = false;
      }
    },
    other: function other(e) {
      var stringValue = e.target.value.toString();
      var regex = /^\d*(\.\d{1,2})?$/;

      if (!stringValue.match(regex) && this.form.otherCost !== "") {
        this.negative5 = true;
        this.form.otherCost = 0;
      } else {
        if (this.form.otherCost < 0) {
          this.negative5 = true;
          this.form.otherCost = 0;
        } else {
          this.negative5 = false;
        }

        this.negative5 = false;
      }
    },
    damage: function damage(e) {
      var stringValue = e.target.value.toString();
      var regex = /^\d*(\.\d{1,2})?$/;

      if (!stringValue.match(regex) && this.form.damageAndWarranty !== "") {
        this.negative6 = true;
        this.form.damageAndWarranty = 0;
      } else {
        if (this.form.damageAndWarranty < 0) {
          this.negative6 = true;
          this.form.damageAndWarranty = 0;
        } else {
          this.negative6 = false;
        }

        this.negative6 = false;
      }
    },
    productSupplierList: function productSupplierList() {
      var _this2 = this;

      axios.get('/shopWishProductSupplier').then(function (res) {
        _this2.productSupplierLists = res.data.productSupplierList;
      });
    },
    showProduct: function showProduct() {
      var _this3 = this;

      axios.get("/returnPurchase/".concat(this.invoiceN, "/edit")).then(function (res) {
        _this3.form.fill(res.data);

        _this3.form.moblieNo = res.data.product_supplier_name.productSupplierPhone;
        _this3.form.address = res.data.product_supplier_name.productSupplierAddress;
        axios.get("getLastBalanceByAccCode/" + res.data.product_supplier_name.accountCode).then(function (res) {
          _this3.form.previousPayable = res.data.balance;
          _this3.cusPreviousPayable = res.data.balance;
          var totalcurrant = parseFloat(_this3.cusPreviousPayable) - parseFloat(_this3.form.totalProductCost);
          _this3.form.currentPayable = totalcurrant;

          _this3.currentDue();
        });
      });
      axios.get("/returnPurchase/".concat(this.invoiceN)).then(function (res) {
        _this3.purchaseProductLists = res.data.getProduct;
        _this3.form.totalPurchaseValue = res.data.getTotalPrice;
      });
      axios.get("/returnPList/".concat(this.invoiceN)).then(function (res) {
        _this3.purchaseProductListgets = res.data.getData;
      });
      axios.get("/returnPurchaseInvoice/".concat(this.invoiceN)).then(function (response) {
        // this.form.totalPurchaseValue=response.data.totalPurchaseValue;
        _this3.form.carriageInward = parseFloat(response.data.carriageInward);
        _this3.form.discount = parseFloat(response.data.discount);
        _this3.form.otherCost = parseFloat(response.data.otherCost);
        _this3.form.damageAndWarranty = parseFloat(response.data.damageAndWarranty);
        _this3.form.totalAmount = parseFloat(response.data.carriageInward) + parseFloat(_this3.form.totalPurchaseValue);
        _this3.form.supplierPayable = parseFloat(_this3.form.totalAmount) - parseFloat(_this3.form.discount);
        _this3.form.totalProductCost = parseFloat(_this3.form.supplierPayable) - parseFloat(_this3.form.otherCost) + parseFloat(_this3.form.damageAndWarranty); //  this.form.totalDiscount = totalAmount;
        // this.form.currentPayable = this.form.totalProductCost;
      });
    },
    showInfo: function showInfo() {
      var _this4 = this;

      axios.get("/returnPurchaseProduct/".concat(this.invoiceN, "/").concat(this.productN)).then(function (res) {
        _this4.showCal = true;

        _this4.form.fill(res.data);

        _this4.form.preQun = res.data.quantity;
        _this4.returnP = res.data;
        _this4.form.moblieNo = res.data.product_supplier_name.productSupplierPhone;
        _this4.form.address = res.data.product_supplier_name.productSupplierAddress;
        axios.get("/returnPurchaseInvoice/".concat(_this4.invoiceN)).then(function (response) {
          _this4.form.totalPurchaseValue = response.data.totalPurchaseValue;
          _this4.form.carriageInward = response.data.carriageInward;

          _this4.currentDue();
        });
      });
    },
    unitPrice: function unitPrice() {
      var quantity = this.form.quantity;
      var unitPrice = this.form.unitPrice;
      var totalPrice = quantity * unitPrice;
      this.form.totalPrice = totalPrice;
      this.form.percetagePrice = totalPrice; // this.form.totalPurchaseValue=this.form.totalPrice;

      this.percetage();
    },
    percetage: function percetage() {
      if (this.form.percetage != '') {
        var discountDiv = parseFloat(this.form.percetage) * parseFloat(this.form.percetagePrice) / parseFloat(100);
        var discount = parseFloat(this.form.percetagePrice) - parseFloat(discountDiv);
        this.form.totalPrice = discount; // this.form.totalPurchaseValue=discount;
      } else {
        this.unitPrice();
      }
    },
    carriageInward: function carriageInward() {
      if (this.form.carriageInward == "") {
        var totalAmount = 0 + parseFloat(this.form.totalPurchaseValue);
        this.form.totalAmount = totalAmount;
        this.form.supplierPayable = parseFloat(totalAmount) - parseFloat(this.form.discount);
        this.form.totalProductCost = parseFloat(this.form.supplierPayable) - parseFloat(this.form.otherCost) + parseFloat(this.form.damageAndWarranty); //  this.form.totalDiscount = totalAmount;

        this.form.currentPayable = this.form.totalProductCost;
        this.form.currentPayable = totalAmount;

        if (this.cusPreviousPayable > 0) {
          var totalcurrant = parseFloat(this.cusPreviousPayable) + parseFloat(this.form.currentPayable);
          this.form.currentPayable = totalcurrant;
        }
      } else {
        var _totalAmount = parseFloat(this.form.carriageInward) + parseFloat(this.form.totalPurchaseValue);

        this.form.totalAmount = _totalAmount;
        this.form.supplierPayable = parseFloat(_totalAmount) - parseFloat(this.form.discount);
        this.form.totalProductCost = parseFloat(this.form.supplierPayable) + parseFloat(this.form.otherCost) + parseFloat(this.form.damageAndWarranty); //  this.form.totalDiscount = totalAmount;

        this.form.currentPayable = this.form.totalProductCost;

        if (this.cusPreviousPayable > 0) {
          var _totalcurrant = parseFloat(this.cusPreviousPayable) + parseFloat(this.form.currentPayable);

          this.form.currentPayable = _totalcurrant;
        }
      }
    },
    discount: function discount() {
      if (this.form.discount == "") {
        this.carriageInward();
      } else {
        var discount = parseFloat(this.form.totalAmount) - parseFloat(this.form.discount);
        this.form.supplierPayable = discount;
        this.form.totalProductCost = parseFloat(this.form.supplierPayable) - parseFloat(this.form.otherCost) + parseFloat(this.form.damageAndWarranty); //  this.form.totalDiscount = totalAmount;

        this.form.currentPayable = this.form.totalProductCost;

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
        var otherCost = parseFloat(this.form.supplierPayable) - parseFloat(this.form.otherCost) + parseFloat(this.form.damageAndWarranty);
        this.form.totalProductCost = otherCost;
        this.form.currentPayable = this.form.totalProductCost;

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
        var otherCost = parseFloat(this.form.supplierPayable) - parseFloat(this.form.otherCost) + parseFloat(this.form.damageAndWarranty);
        ;
        this.form.totalProductCost = otherCost;
        this.form.currentPayable = otherCost;

        if (this.cusPreviousPayable > 0) {
          var totalcurrant = parseFloat(this.cusPreviousPayable) + parseFloat(this.form.currentPayable);
          this.form.currentPayable = totalcurrant;
        }
      }
    },
    returnProduct: function returnProduct() {
      var _this5 = this;

      if (this.form.quantity > this.returnP.quantity) {
        this.form.totalPurchaseValue = ''.Toast.fire({
          icon: 'error',
          title: 'Purchase Product Quantity dcrease'
        });
      } else {
        this.form.totalPurchaseValue = '';
        this.showCal = false;
        this.showTotal = true;
        this.loading = true;
        this.form.post("returnPurchaseUpdate/".concat(this.invoiceN, "/").concat(this.productN)).then(function (res) {
          _this5.loading = false;

          _this5.showProduct();

          axios.get("/returnPurchase/".concat(_this5.invoiceN)).then(function (res) {
            _this5.form.totalPurchaseValue = res.data.getTotalPrice;
          });
          axios.get("/returnPList/".concat(_this5.invoiceN)).then(function (res) {
            _this5.purchaseProductListgets = res.data.getData;
          });
          Toast.fire({
            icon: 'success',
            title: 'Purchase Return Successfully'
          });
        })["catch"](function (res) {
          _this5.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong"
          });
        });
      }
    },
    purchaseReturn: function purchaseReturn() {
      var _this6 = this;

      this.loadingPay = true;
      this.form.put('/returnPurchase/' + this.invoiceN).then(function (res) {
        _this6.loadingPay = false;

        _this6.showProduct();

        _this6.invoiceList();

        _this6.productSupplierList();

        Toast.fire({
          icon: 'success',
          title: 'Purchase Return Successfully'
        });
        $("#pay").modal("hide");
        _this6.showTotal = false;
        _this6.showCal = false;
        _this6.invoiceN = '', _this6.previousPayable = '', _this6.currentPayable = '', _this6.$router.push('purchasereturn');
      })["catch"](function (res) {
        _this6.loadingPay = false;
        Toast.fire({
          icon: "error",
          title: "Something wrong"
        });
      });
    },
    getData: function getData() {
      var _this7 = this;

      axios.get("/bankTypeEntryList").then(function (res) {
        _this7.showBankTypeDatas = res.data.show;
      }), axios.get("/paymentTypeList").then(function (res) {
        _this7.paymentTypeLists = res.data.data;
      }), axios.get("/addExpense").then(function (res) {
        _this7.datas = res.data.data;
      });
    },
    receiverBankTypeIdCatch: function receiverBankTypeIdCatch() {
      var _this8 = this;

      axios.get("/bankNameList/" + this.form.receiverbankTypeEntryId).then(function (res) {
        _this8.showBankNames = res.data.show;
        _this8.fromshow = true;
      });

      if (this.form.receiverbankTypeEntryId == 1) {
        this.form.senderbankTypeEntryId = 1;
        this.bankAccount = true;
        this.mobileAccount = false;
      }

      if (this.form.receiverbankTypeEntryId == 2) {
        this.form.senderbankTypeEntryId = 2;
        this.bankAccount = false;
        this.mobileAccount = true;
      }
    },
    bankTypeIdCatch: function bankTypeIdCatch() {
      var _this9 = this;

      axios.get("/bankNameList/" + this.form.senderbankTypeEntryId).then(function (res) {
        _this9.showBankNames = res.data.show;
      });

      if (this.form.senderbankTypeEntryId == 1) {
        this.bankAccount = true;
        this.mobileAccount = false;
      }

      if (this.form.senderbankTypeEntryId == 2) {
        this.bankAccount = false;
        this.mobileAccount = true;
      }
    },
    bankAccountIdCatch: function bankAccountIdCatch() {
      var _this10 = this;

      axios.get("/bankAccountList/" + this.form.senderbankEntryId).then(function (res) {
        _this10.showBankAccounts = res.data.data;
      });
    },
    distroyRepurchase: function distroyRepurchase(id) {
      var _this11 = this;

      axios.get('/rePurchaseDistroy/' + id).then(function (res) {
        _this11.showProduct();

        Toast.fire({
          icon: 'success',
          title: 'successfullt deleted!!'
        });
      });
    },
    getBankMoreInfo: function getBankMoreInfo() {
      var _this12 = this;

      axios.get("/bankAccountMoreInfo/" + this.form.senderbankAccountId).then(function (res) {
        _this12.form.senderbranchName = res.data.data.bankBranch;
        _this12.form.senderAccNo = res.data.data.bankAccountNumber;
        _this12.bankInformationAccountInfoStatus = 1;
        var url = "checkBalance/" + res.data.data.accountCode;
        axios.get(url).then(function (response) {
          _this12.avilable_bal = response.data.available_balance;
        });
      });
    },
    totalAmountCalculate: function totalAmountCalculate(e) {
      var _this13 = this;

      //======================== check balance
      axios.get("/getCashRegister/1").then(function (res) {
        var url = "checkBalance/" + res.data.accCode;
        axios.get(url).then(function (response) {
          // this.available_balance_cash_status = true;
          _this13.avilable_balance = response.data.available_balance; // this.calculate_available_balance(response.data.available_balance,1); // cash
        });
      }); //======================== check balance

      if (parseFloat(this.form.currentPaidAmount) > parseFloat(this.avilable_balance)) {
        this.alert = true;
        this.aler1t = false;
        this.form.currentPaidAmount = 0;
        this.form.currentDue = this.form.currentPayable;
        this.paybutton = true;
      } else {
        this.paybutton = false;
        this.alert = false;
        this.alert1 = false;

        if (this.form.bankAmount == null) {
          this.totalcal = 0 + parseFloat(this.form.currentPaidAmount);
        } else {
          this.totalcal = parseFloat(this.form.currentPaidAmount) + parseFloat(this.form.bankAmount);
        }

        if (this.form.currentPaidAmount == null) {
          this.totalcal = parseFloat(this.form.bankAmount) + 0;
        }

        this.form.currentDue = parseFloat(this.form.currentPayable) - parseFloat(this.totalcal);

        if (this.form.currentPaidAmount < 0) {
          this.form.currentPaidAmount = 0;
          this.negativepay = true;
          this.paybutton = true;
        } else {
          this.paybutton = false;
          var stringValue = e.target.value.toString();
          var regex = /^\d*(\.\d{1,2})?$/;

          if (!stringValue.match(regex) && this.form.currentPaidAmount !== "") {
            this.form.currentPaidAmount = 0;
            this.negativepay = true;
            this.paybutton = true;
          } else {
            this.negativepay = false;
            this.paybutton = false;

            if (this.form.bankAmount != null) {
              if (parseFloat(this.form.bankAmount) + parseFloat(this.form.currentPaidAmount) > this.form.currentPayable) {
                this.negativepay = true;
                this.paybutton = true;
                this.form.currentPaidAmount = 0;
                this.form.currentDue = parseFloat(this.form.currentPayable) - parseFloat(this.form.bankAmount);
              } else {
                this.negativepay = false;
                this.paybutton = false;
              }
            } else {
              if (parseFloat(this.form.currentPaidAmount) > this.form.currentPayable) {
                this.negativepay = true;
                this.paybutton = true;
                this.form.currentPaidAmount = 0;
                this.form.currentDue = parseFloat(this.form.currentPayable) - parseFloat(this.form.currentPaidAmount);
              } else {
                this.negativepay = false;
                this.paybutton = false;
              }
            }
          }
        }
      }
    },
    bankAmountCalculate: function bankAmountCalculate(e) {
      if (this.form.bankAmount > this.avilable_bal) {
        this.alert1 = true;
        this.alert = false;
        this.form.bankAmount = 0;
        this.paybutton = true;
        this.form.currentDue = parseFloat(this.form.currentPayable) - parseFloat(this.form.currentPaidAmount) + parseFloat(this.form.bankAmount);
      } else {
        this.paybutton = false;
        this.alert1 = false;
        this.alert = false;

        if (this.form.currentPaidAmount == null) {
          this.totalcal = 0 + parseFloat(this.form.bankAmount);
        } else {
          this.totalcal = parseFloat(this.form.currentPaidAmount) + parseFloat(this.form.bankAmount);
        }

        if (this.form.bankAmount == null) {
          this.totalcal = parseFloat(this.form.currentPaidAmount) + 0;
        }

        this.form.currentDue = parseFloat(this.form.currentPayable) - parseFloat(this.totalcal);

        if (this.form.bankAmount < 0) {
          this.form.bankAmount = 0;
          this.negativepaybank = true;
        } else {
          var stringValue = e.target.value.toString();
          var regex = /^\d*(\.\d{1,2})?$/;

          if (!stringValue.match(regex) && this.form.bankAmount !== "") {
            this.form.bankAmount = "";
            this.negativepaybank = true;
          } else {
            this.negativepaybank = false;

            if (this.form.currentPaidAmount != '') {
              if (parseFloat(this.form.bankAmount) + parseFloat(this.form.currentPaidAmount) > this.form.currentPayable) {
                this.negativepaybank = true;
                this.form.bankAmount = 0;
                this.form.currentDue = parseFloat(this.form.currentPayable) - parseFloat(this.form.currentPaidAmount);
              } else {
                this.negativepaybank = false;
              }
            } else {
              if (parseFloat(this.form.bankAmount) > this.form.currentPayable) {
                this.negativepaybank = true;
                this.form.bankAmount = 0;
                this.form.currentDue = parseFloat(this.form.currentPayable) - parseFloat(this.form.bankAmount);
              } else {
                this.negativepaybank = false;
              }
            }
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/purchase@return.vue?vue&type=template&id=73a24666&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/purchase/purchase/purchase@return.vue?vue&type=template&id=73a24666& ***!
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
              return _vm.invoice()
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
                  _c("label", [_vm._v("Select Invoice")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.invoiceN,
                          expression: "invoiceN"
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
                            _vm.invoiceN = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                          function($event) {
                            $event.preventDefault()
                            return _vm.showProduct()
                          }
                        ]
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Select One")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.invoices, function(invoice) {
                        return _c(
                          "option",
                          {
                            key: invoice.invoiceNo,
                            domProps: { value: invoice.purchaseInvoiceNo }
                          },
                          [
                            _vm._v(
                              "\n                         Invoice No#" +
                                _vm._s(invoice.purchaseInvoiceNo)
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Select Product")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.productN,
                          expression: "productN"
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
                            _vm.productN = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                          function($event) {
                            $event.preventDefault()
                            return _vm.showInfo()
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
                        purchaseProductList,
                        index
                      ) {
                        return purchaseProductList.product_name
                          ? _c(
                              "option",
                              {
                                domProps: {
                                  value: purchaseProductList.purchaseProductId
                                }
                              },
                              [
                                _vm._v(
                                  "\n                           " +
                                    _vm._s(
                                      purchaseProductList.product_name
                                        .productName
                                    ) +
                                    " (" +
                                    _vm._s(
                                      purchaseProductList.brand_name
                                        .productBrandName
                                    ) +
                                    ")"
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
    _c("div", { staticClass: "card" }, [
      _c(
        "form",
        {
          attrs: { action: "" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.addPurchaseInvoice()
            }
          }
        },
        [
          _vm._m(1),
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
                                  attrs: {
                                    name: "productSupplierId",
                                    disabled: ""
                                  },
                                  on: {
                                    change: function($event) {
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
                                    }
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
                                    return productSupplierList.productSupplierId ==
                                      _vm.form.productSupplierId
                                      ? _c(
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
                                      : _vm._e()
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
                          _vm._v("Mobile No")
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
                      ])
                    ])
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _vm.showCal
            ? _c("div", { staticClass: "table-responsive bg-white" }, [
                _c(
                  "table",
                  { staticClass: "table table-hover table-bordered mb-0" },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("1")]),
                        _vm._v(" "),
                        _vm.returnP.product_name
                          ? _c("td", [
                              _vm._v(
                                _vm._s(_vm.returnP.product_name.productName) +
                                  " (" +
                                  _vm._s(_vm.returnP.product_name.productCode) +
                                  ")"
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.returnP.brandname
                          ? _c("td", [
                              _vm._v(
                                " \n                   " +
                                  _vm._s(_vm.returnP.brandname.productBrandName)
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("td", [
                          _vm.returnP.unit_name
                            ? _c("span", [
                                _vm._v(
                                  _vm._s(_vm.returnP.unit_name.uniteEntryName)
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm.negative
                            ? _c("span", { staticStyle: { color: "red" } }, [
                                _vm._v("Negative Value Not Allowed")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.preQun,
                                expression: "form.preQun"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              disabled: "",
                              name: "quantity",
                              placeholder: "Quantity"
                            },
                            domProps: { value: _vm.form.preQun },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "preQun",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm.negative
                            ? _c("span", { staticStyle: { color: "red" } }, [
                                _vm._v("Negative Value Not Allowed")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.quantty,
                                expression: "form.quantty"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "quantity",
                              placeholder: "Quantity"
                            },
                            domProps: { value: _vm.form.quantty },
                            on: {
                              keyup: [
                                _vm.quantity,
                                function($event) {
                                  $event.preventDefault()
                                  return _vm.unitPrice()
                                }
                              ],
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "quantty",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.returnP.unitPrice))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm.negative1
                            ? _c("span", { staticStyle: { color: "red" } }, [
                                _vm._v("Negative Value Not Allowed")
                              ])
                            : _vm._e(),
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
                              keyup: [
                                _vm.disnt,
                                function($event) {
                                  $event.preventDefault()
                                  return _vm.percetage()
                                }
                              ],
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "percetage",
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
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-hover-shine  btn-success",
                              attrs: { disabled: _vm.loading, type: "button" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.returnProduct()
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
                                : _vm._e(),
                              _vm._v(" "),
                              _vm._m(3),
                              _vm._v(
                                "\n                         Return\n                      "
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive bg-white" }, [
            _c(
              "table",
              { staticClass: "table table-hover table-bordered mb-0" },
              [
                _vm._m(4),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.purchaseProductListgets, function(
                    purchaseProductList,
                    index
                  ) {
                    return _c("tr", { key: purchaseProductList.id }, [
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
                      purchaseProductList.brandname
                        ? _c("td", [
                            _vm._v(
                              " \n                   " +
                                _vm._s(
                                  purchaseProductList.brandname.productBrandName
                                )
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("td", [
                        purchaseProductList.unit_name
                          ? _c("span", [
                              _vm._v(
                                _vm._s(
                                  purchaseProductList.unit_name.uniteEntryName
                                )
                              )
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            purchaseProductList.preQun -
                              purchaseProductList.quantity
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(purchaseProductList.unitPrice))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            (purchaseProductList.preQun -
                              purchaseProductList.quantity) *
                              purchaseProductList.unitPrice
                          )
                        )
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
                                return _vm.distroyRepurchase(
                                  purchaseProductList.purchaseProductId
                                )
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-trash" }),
                            _vm._v("Delete\n                  ")
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
          _vm.showTotal
            ? _c(
                "div",
                { staticClass: "purchase-entery purchase-border p-3" },
                [
                  _c("div", { staticClass: "row m-0" }, [
                    _c(
                      "div",
                      { staticClass: "col-auto ml-auto purcha-border p-3" },
                      [
                        _c(
                          "div",
                          { staticClass: "table-responsive bg-white" },
                          [
                            _c("table", { staticClass: " table-hover  mb-0" }, [
                              _c("tr", { staticStyle: { display: "none" } }, [
                                _c("td", { staticClass: "title-name" }, [
                                  _vm._v("Total Purchase Value ")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.totalProductQuantity,
                                        expression: "form.totalProductQuantity"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "hidden",
                                      disabled: "",
                                      name: "totalProductQuantity",
                                      placeholder: "Total Product Quantity"
                                    },
                                    domProps: {
                                      value: _vm.form.totalProductQuantity
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "totalProductQuantity",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
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
                                      domProps: {
                                        value: _vm.form.totalPurchaseValue
                                      },
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
                              _c("tr", { staticStyle: { display: "none" } }, [
                                _c("td", { staticClass: "title-name" }, [
                                  _vm._v("Carriage Inward")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("div", [
                                    _vm.negative3
                                      ? _c(
                                          "span",
                                          { staticStyle: { color: "red" } },
                                          [_vm._v("Negative Value Not Allowed")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
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
                                      domProps: {
                                        value: _vm.form.carriageInward
                                      },
                                      on: {
                                        keyup: [
                                          _vm.inward1,
                                          function($event) {
                                            $event.preventDefault()
                                            return _vm.carriageInward()
                                          }
                                        ],
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
                              _vm._m(5),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "title-name" }, [
                                  _vm._v("Discount ")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("div", [
                                    _vm.negative4
                                      ? _c(
                                          "span",
                                          { staticStyle: { color: "red" } },
                                          [_vm._v("Negative Value Not Allowed")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
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
                                        keyup: [
                                          _vm.dis,
                                          function($event) {
                                            $event.preventDefault()
                                            return _vm.discount()
                                          }
                                        ],
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
                                      domProps: {
                                        value: _vm.form.supplierPayable
                                      },
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
                              _vm._m(6),
                              _vm._v(" "),
                              _c("tr", { staticStyle: { display: "none" } }, [
                                _c("td", { staticClass: "title-name" }, [
                                  _vm._v("Other Cost ")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("div", [
                                    _vm.negative5
                                      ? _c(
                                          "span",
                                          { staticStyle: { color: "red" } },
                                          [_vm._v("Negative Value Not Allowed")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
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
                                        keyup: [
                                          _vm.other,
                                          function($event) {
                                            $event.preventDefault()
                                            return _vm.otherCosts()
                                          }
                                        ],
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
                              _c("tr", { staticStyle: { display: "none" } }, [
                                _c("td", { staticClass: "title-name" }, [
                                  _vm._v("Damage & Warranty")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("div", [
                                    _vm.negative6
                                      ? _c(
                                          "span",
                                          { staticStyle: { color: "red" } },
                                          [_vm._v("Negative Value Not Allowed")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
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
                                      domProps: {
                                        value: _vm.form.damageAndWarranty
                                      },
                                      on: {
                                        keyup: [
                                          _vm.damage,
                                          function($event) {
                                            $event.preventDefault()
                                            return _vm.damageAndWarrantys()
                                          }
                                        ],
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
                              _vm._m(7),
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
                                      domProps: {
                                        value: _vm.form.totalProductCost
                                      },
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
                                      domProps: {
                                        value: _vm.form.previousPayable
                                      },
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
                                      domProps: {
                                        value: _vm.form.currentPayable
                                      },
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
                              _c("tr", [
                                _c("td"),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "mt-3 ml-2 btn btn-warning",
                                      attrs: {
                                        type: "button",
                                        "data-toggle": "modal",
                                        "data-target": "#pay"
                                      }
                                    },
                                    [
                                      _vm._m(8),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "mr-1" }, [
                                        _vm._v(" Pay Now ")
                                      ])
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "modal fade",
                                attrs: {
                                  id: "pay",
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
                                    _c(
                                      "div",
                                      { staticClass: "modal-content" },
                                      [
                                        _vm._m(9),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "modal-body" },
                                          [
                                            _c("div", { staticClass: "row" }, [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-12 col-md-6 col-xs-12"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "form-group m-0 row mt-2"
                                                    },
                                                    [
                                                      _vm._m(10),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-lg-7 col-md-6 col-sm-8 col-12 pl-0"
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
                                                                    .currentPayable,
                                                                expression:
                                                                  "form.currentPayable"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              disabled: "",
                                                              placeholder:
                                                                "Cash Amount"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.form
                                                                  .currentPayable
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
                                                                  "currentPayable",
                                                                  $event.target
                                                                    .value
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
                                                    {
                                                      staticClass:
                                                        "form-group m-0 row mt-2"
                                                    },
                                                    [
                                                      _vm._m(11),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-lg-7 col-md-6 col-sm-8 col-12 pl-0"
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
                                                                    .currentPaidAmount,
                                                                expression:
                                                                  "form.currentPaidAmount"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              placeholder:
                                                                "Cash Amount"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.form
                                                                  .currentPaidAmount
                                                            },
                                                            on: {
                                                              keyup:
                                                                _vm.totalAmountCalculate,
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
                                                                  "currentPaidAmount",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              }
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _vm.negativepay ==
                                                          true
                                                            ? _c(
                                                                "span",
                                                                {
                                                                  staticStyle: {
                                                                    color: "red"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Negative Ammount Not Allowed"
                                                                  )
                                                                ]
                                                              )
                                                            : _vm._e(),
                                                          _c("br"),
                                                          _vm._v(" "),
                                                          _vm.alert == true
                                                            ? _c(
                                                                "span",
                                                                {
                                                                  staticStyle: {
                                                                    color: "red"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Insufficient Balance Avil Balance Is " +
                                                                      _vm._s(
                                                                        this
                                                                          .avilable_balance
                                                                      )
                                                                  )
                                                                ]
                                                              )
                                                            : _vm._e()
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "form-group m-0 row mt-2"
                                                    },
                                                    [
                                                      _vm._m(12),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-lg-7 col-md-6 col-sm-8 col-12 pl-0"
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
                                                                    .currentDue,
                                                                expression:
                                                                  "form.currentDue"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              disabled: "",
                                                              placeholder:
                                                                "Cash Amount"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.form
                                                                  .currentDue
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
                                                                  "currentDue",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              }
                                                            }
                                                          })
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
                                                    "col-12 col-md-6 col-xs-12"
                                                },
                                                [
                                                  _vm.morepay == false
                                                    ? _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-info",
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.preventDefault()
                                                              return _vm.open()
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fa fa-plus",
                                                            attrs: {
                                                              "aria-hidden":
                                                                "true"
                                                            }
                                                          }),
                                                          _vm._v(" More pay ")
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.close == true
                                                    ? _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-danger",
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.preventDefault()
                                                              return _vm.closeForm()
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fa fa-minus",
                                                            attrs: {
                                                              "aria-hidden":
                                                                "true"
                                                            }
                                                          }),
                                                          _vm._v("\n Close ")
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.morepay
                                                    ? _c("div", [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "form-group"
                                                          },
                                                          [
                                                            _c("label", [
                                                              _vm._v(
                                                                "Receiver Bank Type Name"
                                                              )
                                                            ]),
                                                            _vm._v(" "),
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
                                                                        .receiverbankTypeEntryId,
                                                                    expression:
                                                                      "form.receiverbankTypeEntryId"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                class: {
                                                                  "is-invalid": _vm.form.errors.has(
                                                                    "bankTypeEntryId"
                                                                  )
                                                                },
                                                                attrs: {
                                                                  name:
                                                                    "bankTypeEntryId"
                                                                },
                                                                on: {
                                                                  change: [
                                                                    function(
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
                                                                        "receiverbankTypeEntryId",
                                                                        $event
                                                                          .target
                                                                          .multiple
                                                                          ? $$selectedVal
                                                                          : $$selectedVal[0]
                                                                      )
                                                                    },
                                                                    function(
                                                                      $event
                                                                    ) {
                                                                      $event.preventDefault()
                                                                      return _vm.receiverBankTypeIdCatch()
                                                                    }
                                                                  ]
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
                                                                _vm._l(
                                                                  _vm.showBankTypeDatas,
                                                                  function(
                                                                    showBankTypeData
                                                                  ) {
                                                                    return _c(
                                                                      "option",
                                                                      {
                                                                        domProps: {
                                                                          value:
                                                                            showBankTypeData.bankTypeEntryId
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "\n                                  " +
                                                                            _vm._s(
                                                                              showBankTypeData.bankTypeEntryName
                                                                            ) +
                                                                            "\n                                "
                                                                        )
                                                                      ]
                                                                    )
                                                                  }
                                                                )
                                                              ],
                                                              2
                                                            ),
                                                            _vm._v(" "),
                                                            _c("has-error", {
                                                              attrs: {
                                                                form: _vm.form,
                                                                field:
                                                                  "bankTypeEntryId"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _vm.fromshow
                                                          ? _c("div", [
                                                              _vm.bankAccount
                                                                ? _c("div", [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "label",
                                                                          [
                                                                            _vm._v(
                                                                              " Receiver Bank Name "
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "input",
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
                                                                                    .receiverBankName,
                                                                                expression:
                                                                                  "form.receiverBankName"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control",
                                                                            attrs: {
                                                                              type:
                                                                                "text"
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                _vm
                                                                                  .form
                                                                                  .receiverBankName
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
                                                                                  "receiverBankName",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "label",
                                                                          [
                                                                            _vm._v(
                                                                              " Receiver A/C No "
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "input",
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
                                                                                    .receiverAcNo,
                                                                                expression:
                                                                                  "form.receiverAcNo"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control",
                                                                            attrs: {
                                                                              type:
                                                                                "text"
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                _vm
                                                                                  .form
                                                                                  .receiverAcNo
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
                                                                                  "receiverAcNo",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "label",
                                                                          [
                                                                            _vm._v(
                                                                              " Receiver A/C Name "
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "input",
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
                                                                                    .receiverAcName,
                                                                                expression:
                                                                                  "form.receiverAcName"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control",
                                                                            attrs: {
                                                                              type:
                                                                                "text"
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                _vm
                                                                                  .form
                                                                                  .receiverAcName
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
                                                                                  "receiverAcName",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "label",
                                                                          [
                                                                            _vm._v(
                                                                              " Branch "
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "input",
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
                                                                                    .receiverBranchName,
                                                                                expression:
                                                                                  "form.receiverBranchName"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control",
                                                                            attrs: {
                                                                              type:
                                                                                "text"
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                _vm
                                                                                  .form
                                                                                  .receiverBranchName
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
                                                                                  "receiverBranchName",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    )
                                                                  ])
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              _vm.mobileAccount
                                                                ? _c("div", [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group"
                                                                      },
                                                                      [
                                                                        _vm._m(
                                                                          13
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "input",
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
                                                                                    .receiverMobileAcNo,
                                                                                expression:
                                                                                  "form.receiverMobileAcNo"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control",
                                                                            attrs: {
                                                                              type:
                                                                                "text"
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                _vm
                                                                                  .form
                                                                                  .receiverMobileAcNo
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
                                                                                  "receiverMobileAcNo",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "label",
                                                                          [
                                                                            _vm._v(
                                                                              " Trx No "
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "input",
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
                                                                                    .receiverTrxNo,
                                                                                expression:
                                                                                  "form.receiverTrxNo"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control",
                                                                            attrs: {
                                                                              type:
                                                                                "text"
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                _vm
                                                                                  .form
                                                                                  .receiverTrxNo
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
                                                                                  "receiverTrxNo",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    )
                                                                  ])
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "form-group"
                                                                },
                                                                [
                                                                  _c("label", [
                                                                    _vm._v(
                                                                      "Sender Bank Type Name"
                                                                    )
                                                                  ]),
                                                                  _vm._v(" "),
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
                                                                              .senderbankTypeEntryId,
                                                                          expression:
                                                                            "form.senderbankTypeEntryId"
                                                                        }
                                                                      ],
                                                                      staticClass:
                                                                        "form-control",
                                                                      class: {
                                                                        "is-invalid": _vm.form.errors.has(
                                                                          "bankTypeEntryId"
                                                                        )
                                                                      },
                                                                      attrs: {
                                                                        disabled:
                                                                          "",
                                                                        name:
                                                                          "bankTypeEntryId"
                                                                      },
                                                                      on: {
                                                                        change: [
                                                                          function(
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
                                                                              "senderbankTypeEntryId",
                                                                              $event
                                                                                .target
                                                                                .multiple
                                                                                ? $$selectedVal
                                                                                : $$selectedVal[0]
                                                                            )
                                                                          },
                                                                          function(
                                                                            $event
                                                                          ) {
                                                                            $event.preventDefault()
                                                                            return _vm.bankTypeIdCatch()
                                                                          }
                                                                        ]
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
                                                                      _vm._l(
                                                                        _vm.showBankTypeDatas,
                                                                        function(
                                                                          showBankTypeData
                                                                        ) {
                                                                          return _c(
                                                                            "option",
                                                                            {
                                                                              domProps: {
                                                                                value:
                                                                                  showBankTypeData.bankTypeEntryId
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "\n                                    " +
                                                                                  _vm._s(
                                                                                    showBankTypeData.bankTypeEntryName
                                                                                  ) +
                                                                                  "\n                                  "
                                                                              )
                                                                            ]
                                                                          )
                                                                        }
                                                                      )
                                                                    ],
                                                                    2
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "has-error",
                                                                    {
                                                                      attrs: {
                                                                        form:
                                                                          _vm.form,
                                                                        field:
                                                                          "bankTypeEntryId"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "form-group"
                                                                },
                                                                [
                                                                  _c("label", [
                                                                    _vm._v(
                                                                      "Sender Bank Name"
                                                                    )
                                                                  ]),
                                                                  _vm._v(" "),
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
                                                                              .senderbankEntryId,
                                                                          expression:
                                                                            "form.senderbankEntryId"
                                                                        }
                                                                      ],
                                                                      staticClass:
                                                                        "form-control",
                                                                      class: {
                                                                        "is-invalid": _vm.form.errors.has(
                                                                          "bankEntryId"
                                                                        )
                                                                      },
                                                                      attrs: {
                                                                        name:
                                                                          "bankEntryId"
                                                                      },
                                                                      on: {
                                                                        change: [
                                                                          function(
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
                                                                              "senderbankEntryId",
                                                                              $event
                                                                                .target
                                                                                .multiple
                                                                                ? $$selectedVal
                                                                                : $$selectedVal[0]
                                                                            )
                                                                          },
                                                                          function(
                                                                            $event
                                                                          ) {
                                                                            $event.preventDefault()
                                                                            return _vm.bankAccountIdCatch()
                                                                          }
                                                                        ]
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
                                                                            "Select Bank Name"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _vm._l(
                                                                        _vm.showBankNames,
                                                                        function(
                                                                          showBankName
                                                                        ) {
                                                                          return _c(
                                                                            "option",
                                                                            {
                                                                              domProps: {
                                                                                value:
                                                                                  showBankName.bankEntryId
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "\n                                    " +
                                                                                  _vm._s(
                                                                                    showBankName.bankName
                                                                                  ) +
                                                                                  "\n                                  "
                                                                              )
                                                                            ]
                                                                          )
                                                                        }
                                                                      )
                                                                    ],
                                                                    2
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "has-error",
                                                                    {
                                                                      attrs: {
                                                                        form:
                                                                          _vm.form,
                                                                        field:
                                                                          "bankEntryId"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "form-group"
                                                                },
                                                                [
                                                                  _c("label", [
                                                                    _vm._v(
                                                                      "Sender Account No"
                                                                    )
                                                                  ]),
                                                                  _vm._v(" "),
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
                                                                              .senderbankAccountId,
                                                                          expression:
                                                                            "form.senderbankAccountId"
                                                                        }
                                                                      ],
                                                                      staticClass:
                                                                        "form-control",
                                                                      class: {
                                                                        "is-invalid": _vm.form.errors.has(
                                                                          "bankAccountId"
                                                                        )
                                                                      },
                                                                      attrs: {
                                                                        name:
                                                                          "bankAccountId"
                                                                      },
                                                                      on: {
                                                                        change: [
                                                                          function(
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
                                                                              "senderbankAccountId",
                                                                              $event
                                                                                .target
                                                                                .multiple
                                                                                ? $$selectedVal
                                                                                : $$selectedVal[0]
                                                                            )
                                                                          },
                                                                          function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.getBankMoreInfo()
                                                                          }
                                                                        ]
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
                                                                            "Select Bank Account"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _vm._l(
                                                                        _vm.showBankAccounts,
                                                                        function(
                                                                          showBankAccount
                                                                        ) {
                                                                          return _c(
                                                                            "option",
                                                                            {
                                                                              domProps: {
                                                                                value:
                                                                                  showBankAccount.bankId
                                                                              }
                                                                            },
                                                                            [
                                                                              showBankAccount.bankAccountName
                                                                                ? _c(
                                                                                    "span",
                                                                                    [
                                                                                      _vm._v(
                                                                                        "\n                                      " +
                                                                                          _vm._s(
                                                                                            showBankAccount.bankAccountName
                                                                                          ) +
                                                                                          "\n                                    "
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                : _c(
                                                                                    "span",
                                                                                    [
                                                                                      _vm._v(
                                                                                        "\n                                      " +
                                                                                          _vm._s(
                                                                                            showBankAccount.bankAccountNumber
                                                                                          ) +
                                                                                          "\n                                    "
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                            ]
                                                                          )
                                                                        }
                                                                      )
                                                                    ],
                                                                    2
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "has-error",
                                                                    {
                                                                      attrs: {
                                                                        form:
                                                                          _vm.form,
                                                                        field:
                                                                          "bankAccountId"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _vm.bankInformationAccountInfoStatus
                                                                ? _c("div", [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group",
                                                                        staticStyle: {
                                                                          display:
                                                                            "none"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "label",
                                                                          [
                                                                            _vm._v(
                                                                              "Sender Branch Name "
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "input",
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
                                                                                    .senderbranchName,
                                                                                expression:
                                                                                  "form.senderbranchName"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control",
                                                                            attrs: {
                                                                              type:
                                                                                "text",
                                                                              readonly:
                                                                                ""
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                _vm
                                                                                  .form
                                                                                  .senderbranchName
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
                                                                                  "senderbranchName",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "form-group"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "label",
                                                                          [
                                                                            _vm._v(
                                                                              " Sender Account No"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "input",
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
                                                                                    .senderAccNo,
                                                                                expression:
                                                                                  "form.senderAccNo"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "form-control",
                                                                            attrs: {
                                                                              type:
                                                                                "text",
                                                                              readonly:
                                                                                ""
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                _vm
                                                                                  .form
                                                                                  .senderAccNo
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
                                                                                  "senderAccNo",
                                                                                  $event
                                                                                    .target
                                                                                    .value
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    )
                                                                  ])
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "form-group m-0 row mt-2"
                                                                },
                                                                [
                                                                  _vm._m(14),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "col-lg-7 col-md-6 col-sm-8 col-12 pl-0"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "input",
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
                                                                                  .bankAmount,
                                                                              expression:
                                                                                "form.bankAmount"
                                                                            }
                                                                          ],
                                                                          staticClass:
                                                                            "form-control",
                                                                          attrs: {
                                                                            type:
                                                                              "text",
                                                                            placeholder:
                                                                              "Bank Amount"
                                                                          },
                                                                          domProps: {
                                                                            value:
                                                                              _vm
                                                                                .form
                                                                                .bankAmount
                                                                          },
                                                                          on: {
                                                                            keyup:
                                                                              _vm.bankAmountCalculate,
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
                                                                                "bankAmount",
                                                                                $event
                                                                                  .target
                                                                                  .value
                                                                              )
                                                                            }
                                                                          }
                                                                        }
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _vm.negativepaybank ==
                                                                      true
                                                                        ? _c(
                                                                            "span",
                                                                            {
                                                                              staticStyle: {
                                                                                color:
                                                                                  "red"
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "Negative Ammount Not Allowed"
                                                                              )
                                                                            ]
                                                                          )
                                                                        : _vm._e(),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _vm.alert1 ==
                                                                      true
                                                                        ? _c(
                                                                            "span",
                                                                            {
                                                                              staticStyle: {
                                                                                color:
                                                                                  "red"
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "Insufficient Balance Avil Balance Is " +
                                                                                  _vm._s(
                                                                                    this
                                                                                      .avilable_bal
                                                                                  )
                                                                              )
                                                                            ]
                                                                          )
                                                                        : _vm._e()
                                                                    ]
                                                                  )
                                                                ]
                                                              )
                                                            ])
                                                          : _vm._e()
                                                      ])
                                                    : _vm._e()
                                                ]
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("center", [
                                              _vm.paybutton == false
                                                ? _c("span", [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "\n                                mt-3\n                                btn-pill btn-shadow btn-wide\n                                fsize-1\n                                btn btn-warning btn-lg\n                              ",
                                                        attrs: {
                                                          type: "submit",
                                                          disabled:
                                                            _vm.loadingPay
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.purchaseReturn()
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm.loadingPay
                                                          ? _c("span", {
                                                              staticClass:
                                                                "spinner-border spinner-border-sm",
                                                              attrs: {
                                                                role: "status",
                                                                "aria-hidden":
                                                                  "true"
                                                              }
                                                            })
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "mr-2 opacity-7"
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "fa fa-paper-plane"
                                                            })
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass: "mr-1"
                                                          },
                                                          [_vm._v(" Pay Now ")]
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.paybutton
                                                ? _c("span", [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "\n                              mt-3\n                              btn-pill btn-shadow btn-wide\n                              fsize-1\n                              btn btn-warning btn-lg\n                            ",
                                                        attrs: {
                                                          disabled: "",
                                                          type: "submit"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.purchaseReturn()
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "mr-2 opacity-7"
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "fa fa-paper-plane"
                                                            })
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass: "mr-1"
                                                          },
                                                          [_vm._v(" Pay Now ")]
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                : _vm._e()
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _vm._m(15)
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
                  ])
                ]
              )
            : _vm._e()
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
          _vm._v("Purchase Return ss")
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
    return _c("thead", [
      _c("tr", { staticStyle: { background: "rgba(242, 242, 242, 0.47)" } }, [
        _c("th", [_vm._v("SN")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product.Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Brand ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit")]),
        _vm._v(" "),
        _c("th", [_vm._v("Pre Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("New Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit.Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Discount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total.Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "mr-2 opacity-7" }, [
      _c("i", { staticClass: "fa fa-plus" })
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
        _c("th", [_vm._v("Brand ")]),
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
    return _c("tr", [_c("td", { attrs: { colspan: "2" } }, [_c("hr")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticStyle: { display: "none" } }, [
      _c("td", { attrs: { colspan: "2" } }, [_c("hr")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [_c("td", { attrs: { colspan: "2" } }, [_c("hr")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "mr-2 opacity-7" }, [
      _c("i", { staticClass: "fa fa-paper-plane" })
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
        [_vm._v("\n                        Pay Now\n                      ")]
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
      { staticClass: "col-lg-4 col-md-6 col-sm-4 col-12 pl-0" },
      [_c("label", [_vm._v("Total : ")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-4 col-md-6 col-sm-4 col-12 pl-0" },
      [_c("label", [_vm._v(" Cash ")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-4 col-md-6 col-sm-4 col-12 pl-0" },
      [_c("label", [_vm._v("Due: ")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(
        "\n                                    Receiver Mobile A/C No\n                                    "
      ),
      _c("i", {
        staticClass:
          "\n                                        fa fa-star\n                                        text-danger text-10\n                                        cursor-pointer\n                                      ",
        attrs: {
          title: "Mendatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mendatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-4 col-md-6 col-sm-4 col-12 pl-0" },
      [_c("label", [_vm._v("Amount ")])]
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
        [_vm._v("\n                        Close\n                      ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase/purchase@return.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase/purchase@return.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _purchase_return_vue_vue_type_template_id_73a24666___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase@return.vue?vue&type=template&id=73a24666& */ "./resources/js/admin/page/purchase/purchase/purchase@return.vue?vue&type=template&id=73a24666&");
/* harmony import */ var _purchase_return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase@return.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/purchase/purchase/purchase@return.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _purchase_return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _purchase_return_vue_vue_type_template_id_73a24666___WEBPACK_IMPORTED_MODULE_0__["render"],
  _purchase_return_vue_vue_type_template_id_73a24666___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/purchase/purchase/purchase@return.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase/purchase@return.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase/purchase@return.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./purchase@return.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/purchase@return.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/purchase/purchase/purchase@return.vue?vue&type=template&id=73a24666&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/admin/page/purchase/purchase/purchase@return.vue?vue&type=template&id=73a24666& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_return_vue_vue_type_template_id_73a24666___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./purchase@return.vue?vue&type=template&id=73a24666& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/purchase/purchase/purchase@return.vue?vue&type=template&id=73a24666&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_return_vue_vue_type_template_id_73a24666___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_return_vue_vue_type_template_id_73a24666___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);