(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["salesDue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@due.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@due.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
document.addEventListener("wheel", function (event) {
  if (document.activeElement.type === "number" && document.activeElement.classList.contains("noscroll")) {
    document.activeElement.blur();
  }
});

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        customerName: "",
        customerEmail: "",
        customerPhone: "",
        customerTypeId: 1,
        priceTypeId: 1,
        customerTypeId1: "",
        customerImoNumber: "",
        customerFacebookID: "",
        customerAddress: "",
        referenceName: "",
        referenceEmail: "",
        referencePhone: "",
        mobileAmount: "",
        guestCustomerName: "",
        guestCustomerPhone: "",
        paymentType: "",
        //
        salesDate: new Date().toISOString().slice(0, 10),
        priceType: "",
        salesInvoiceNo: "",
        salesCustomerEntryId: "",
        purchaseProductId: "",
        unitId: "",
        brandId: "",
        quantity: "",
        unitPrice: "",
        discountPriceHidden: 0,
        hiddenPrice: 0,
        totalPrice: "",
        //  footer Form
        totalQuantity: "",
        totalBalance: "",
        discountPrice: "",
        totalVat: 0,
        vatCalculate: "",
        totalPayable: "",
        previousDue: '',
        currentTotalAmount: "",
        currentPaidAmount: '',
        currentDue: "",
        totalDis: "",
        //bank info sender
        senderbankTypeEntryId: "",
        senderBankName: "",
        senderAcNo: "",
        senderAcName: "",
        senderBranchName: "",
        senderMobileAcNo: "",
        senderTrxNo: "",
        //receiver bank info
        receiverbankTypeEntryId: "",
        receiverbankEntryId: "",
        receiverbankAccountId: "",
        receiverbranchName: "",
        receiverAccNo: ""
      }),
      customerType: "",
      customerTypeLists: [],
      lists: [],
      paynow: true,
      paynow1: true,
      negative: false,
      invalid: false,
      avil: false,
      fromshow: false,
      guestInfo: true,
      //bank Inf0
      pendingCount: "",
      paymentTypeLists: {},
      showBankNames: [],
      showBankAccounts: [],
      showBankTypeDatas: [],
      bankInformationAccountInfoStatus: [],
      mobileAccount: false,
      bankAccount: false,
      morepay: false,
      close: false
    };
  },
  mounted: function mounted() {
    this.view();
    this.getData();
  },
  methods: {
    view: function view() {
      function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }

      $(document).ready(function () {
        $("#sampleTable ").DataTable({
          processing: true,
          serverSide: true,
          bDestroy: true,
          ajax: "/salesDueCustomerList",
          columns: [{
            data: "salesCustomerEntryId"
          }, {
            data: "customer" // name: "customerName.customerName",

          }, // {
          //   data: "customerPhone",
          //   // name: "customerPhone.customerPhone",
          // },
          {
            data: "debitAmount"
          }, {
            data: "creditAmount"
          }, {
            data: "balanceAmount"
          }, {
            data: "salesCustomerEntryId",
            render: function render(data, row) {
              var ok = '<button type="button" onclick="customerStatement(' + data + ')"     class="btn btn-hover-shine btn-outline-info"><i class="fa fa-info" aria-hidden="true"></i>&nbsp;Statement </button>';
              var ok1 = '<button type="button" onclick="invoice(' + data + ')"     class="btn btn-hover-shine btn-outline-info"> <i class="fas fa-file-invoice"></i>&nbsp;View More </button>';
              var ok2 = '<button type="button" onclick="collection(' + data + ')"     class="btn btn-hover-shine btn-outline-info"> <i class="fas fa-money-check"></i>&nbsp;Collection</button>';
              return ok + ok1 + ok2;
            }
          }]
        });
      });
    },
    customerStatement: function customerStatement(id) {
      this.$router.push("/customerStatement" + id);
    },
    invoice: function invoice(id) {
      this.$router.push("/sales@due@customer" + id);
    },
    collection: function collection(id) {
      var _this = this;

      this.morepay = false;
      this.close = false;
      this.form.senderBankName = '';
      this.form.senderAcName = '';
      this.form.senderAcNo = '';
      this.form.senderBankName = '';
      this.form.senderAcNo = '';
      this.form.senderAcName = '';
      this.form.senderMobileAcNo = '';
      this.form.senderTrxNo = '';
      this.form.receiverbankEntryId = '';
      this.form.receiverbankAccountId = '';
      this.form.receiverbranchName = '';
      this.form.receiverAccNo = '';
      this.form.mobileAmount = '';
      this.form.currentPaidAmount = '';
      this.form.mobileAmount = '';
      this.form.currentDue = '';
      axios.get('customerDuel/' + id).then(function (res) {
        _this.form.currentTotalAmount = res.data.info.balanceAmount;
        _this.form.salesCustomerEntryId = id;
      });
      $("#pay").modal("show");
    },
    salesInvoiceEntry: function salesInvoiceEntry() {
      var _this2 = this;

      axios.post("/salesDueCollection", {
        currentDue: this.form.currentDue,
        previousDue: this.form.previousDue,
        mobileAmount: this.form.mobileAmount,
        salesCustomerId: this.form.salesCustomerEntryId,
        currentPaidAmount: this.form.currentPaidAmount,
        senderbankTypeEntryId: this.form.senderbankTypeEntryId,
        senderBankName: this.form.senderBankName,
        senderAcNo: this.form.senderAcNo,
        senderAcName: this.form.senderAcName,
        senderBranchName: this.form.senderBranchName,
        senderMobileAcNo: this.form.senderMobileAcNo,
        senderTrxNo: this.form.senderTrxNo,
        receiverbankTypeEntryId: this.form.receiverbankTypeEntryId,
        receiverbankEntryId: this.form.receiverbankEntryId,
        receiverbankAccountId: this.form.receiverbankAccountId,
        receiverbranchName: this.form.receiverbranchName,
        receiverAccNo: this.form.receiverAccNo
      }).then(function (res) {
        Toast.fire({
          icon: "success",
          title: "Sales Invoice Entry Successfully"
        });
        $("#pay").modal("hide");

        _this2.view();

        _this2.form.reset();

        _this2.guestInfo = true;
        $("#total").html("");
        $("#blanceDue").text("");
      })["catch"](function (error) {
        Toast.fire({
          icon: "error",
          title: "Something Worng"
        });
      });
    },
    getData: function getData() {
      var _this3 = this;

      axios.get("/bankTypeEntryList").then(function (res) {
        _this3.showBankTypeDatas = res.data.show;
      }), axios.get("/paymentTypeList").then(function (res) {
        _this3.paymentTypeLists = res.data.data;
      }), axios.get("/addExpense").then(function (res) {
        _this3.datas = res.data.data;
      });
    },
    senderBankTypeIdCatch: function senderBankTypeIdCatch() {
      var _this4 = this;

      this.form.senderBankName = '';
      this.form.senderAcName = '';
      this.form.senderAcNo = '';
      this.form.senderBankName = '';
      this.form.senderAcNo = '';
      this.form.senderAcName = '';
      this.form.senderMobileAcNo = '';
      this.form.senderTrxNo = '';
      this.form.receiverbankEntryId = '';
      this.form.receiverbankAccountId = '';
      this.form.receiverbranchName = '';
      this.form.receiverAccNo = '';
      this.form.mobileAmount = '';
      this.form.currentDue = this.form.currentTotalAmount - this.form.currentPaidAmount;
      axios.get("/bankNameList/" + this.form.senderbankTypeEntryId).then(function (res) {
        _this4.showBankNames = res.data.show;
        _this4.fromshow = true;
      });

      if (this.form.senderbankTypeEntryId == 1) {
        this.form.receiverbankTypeEntryId = 1;
        this.bankAccount = true;
        this.mobileAccount = false;
      }

      if (this.form.senderbankTypeEntryId == 2) {
        this.form.receiverbankTypeEntryId = 2;
        this.bankAccount = false;
        this.mobileAccount = true;
      }
    },
    bankTypeIdCatch: function bankTypeIdCatch() {
      var _this5 = this;

      axios.get("/bankNameList/" + this.form.receiverbankTypeEntryId).then(function (res) {
        _this5.showBankNames = res.data.show;
      });

      if (this.form.receiverbankTypeEntryId == 1) {
        this.bankAccount = true;
        this.mobileAccount = false;
      }

      if (this.form.receiverbankTypeEntryId == 2) {
        this.bankAccount = false;
        this.mobileAccount = true;
      }
    },
    bankAccountIdCatch: function bankAccountIdCatch() {
      var _this6 = this;

      axios.get("/bankAccountList/" + this.form.receiverbankEntryId).then(function (res) {
        _this6.showBankAccounts = res.data.data;
      });
    },
    getBankMoreInfo: function getBankMoreInfo() {
      var _this7 = this;

      axios.get("/bankAccountMoreInfo/" + this.form.receiverbankAccountId).then(function (res) {
        _this7.form.receiverbranchName = res.data.data.bankBranch;
        _this7.form.receiverAccNo = res.data.data.bankAccountNumber;
        _this7.bankInformationAccountInfoStatus = 1;
      });
    },
    totalCalculate: function totalCalculate(e) {
      if (this.form.currentPaidAmount > this.form.currentTotalAmount) {
        // alert('boro');
        this.form.currentPaidAmount = this.form.currentTotalAmount - this.form.mobileAmount;
        this.negative = true;
      } else {
        if (this.form.mobileAmount == "") {
          this.totalcal = 0 + parseFloat(this.form.currentPaidAmount);
        } else {
          this.totalcal = parseFloat(this.form.currentPaidAmount) + parseFloat(this.form.mobileAmount);

          if (this.totalcal > this.form.currentTotalAmount) {
            this.totalcal = this.form.currentTotalAmount;
            this.form.currentPaidAmount = parseFloat(this.form.currentTotalAmount) - parseFloat(this.form.mobileAmount);
          }
        }

        if (this.form.currentPaidAmount == "") {
          this.totalcal = parseFloat(this.form.mobileAmount) + 0;
        }

        if (this.form.currentPaidAmount < 0) {
          this.form.currentPaidAmount = parseFloat(this.form.currentTotalAmount) - parseFloat(this.form.mobileAmount); // alert('ss');

          this.negative = true;
        } else {
          if (this.form.currentPaidAmount <= 0) {
            this.form.currentPaidAmount = parseFloat(this.form.currentTotalAmount) - parseFloat(this.form.mobileAmount);
            this.negative = true; // alert('mm');
          }

          if (this.form.currentPaidAmount > this.form.currentTotalAmount) {
            this.form.currentPaidAmount = this.form.currentTotalAmount;
            this.form.currentDue = 0; // this.negative = true;
            // alert('mm');
          } else {
            this.negative = false;

            if (this.form.currentPaidAmount > this.form.currentTotalAmount) {
              this.negative = true;
              this.form.currentPaidAmount = this.form.currentTotalAmount;
              this.form.currentDue = this.form.currentTotalAmount - this.form.currentPaidAmount;
            } else {
              this.negative = false;
            }

            if (this.form.customerTypeId == 1 & this.form.currentDue > 0) {//this.paynow1 = false;
            } else {//this.paynow1 = true;
              }
          }

          this.form.currentDue = this.form.currentTotalAmount - this.totalcal;

          if (this.form.currentDue == 0) {//this.paynow1 = true;
          }
        }
      }
    },
    mobileAmountCalculate: function mobileAmountCalculate(e) {
      if (this.form.currentPaidAmount == "") {
        this.totalcal = 0 + parseFloat(this.form.mobileAmount);
      } else {
        this.totalcal = parseFloat(this.form.currentPaidAmount) + parseFloat(this.form.mobileAmount);
      }

      if (this.form.mobileAmount == "") {
        this.totalcal = parseFloat(this.form.currentPaidAmount) + 0;
      } else if (this.form.mobileAmount < 0) {
        this.totalcal = parseFloat(this.form.currentPaidAmount) + 0;
      }

      this.form.currentDue = this.form.currentTotalAmount - this.totalcal;
      var currentDue1 = this.form.currentTotalAmount - this.form.currentPaidAmount;

      if (this.form.mobileAmount > currentDue1) {
        this.form.mobileAmount = currentDue1;
        this.form.currentDue = 0;
        this.negative = true;
      } else if (this.form.mobileAmount < 0) {
        this.form.mobileAmount = 0;
        this.form.currentDue = currentDue1;
        this.negative = true; // alert('feni');
      } else {
        var stringValue = e.target.value.toString();
        var regex = /^\d*(\.\d{1,2})?$/;

        if (!stringValue.match(regex) && this.form.mobileAmount !== "") {
          this.form.mobileAmount = 0;
          this.negative = true;
        } else {
          this.negative = false;

          if (this.form.mobileAmount > this.form.currentTotalAmount) {
            this.negative = true;
            this.form.mobileAmount = this.form.currentTotalAmount;
            this.form.currentDue = this.form.currentTotalAmount - this.form.currentPaidAmount;
          } else {
            this.negative = false;
          }

          if (this.form.customerTypeId == 1 & this.form.currentDue > 0) {//this.paynow1 = false;
          } else {//this.paynow1 = true;
            }
        }
      }
    },
    open: function open() {
      this.morepay = true;
      this.close = true;
    },
    closeForm: function closeForm() {
      this.morepay = false;
      this.close = false;
    }
  },
  created: function created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
      }
    });
    window.deleteExpense = this.deleteExpense;
    window.customerTypeget = this.customerTypeget;
    window.customerStatement = this.customerStatement;
    window.invoice = this.invoice;
    window.collection = this.collection;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@due@customer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@due@customer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      customerType: "",
      customerTypeLists: [],
      lists: [],
      customer: [],
      total: "",
      due: "",
      discount: ""
    };
  },
  mounted: function mounted() {
    this.view("/salesDueListWithId/" + this.$route.params.id);
    this.customerTypeList();
  },
  methods: {
    view: function view(url1) {
      var url = url1;

      function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }

      $(document).ready(function () {
        $("#sampleTable ").DataTable({
          processing: true,
          serverSide: true,
          bDestroy: true,
          ajax: url,
          columns: [{
            data: "salesDate"
          }, {
            data: "customerType",
            name: "customerType.shopCustomerName"
          }, {
            data: "customerName",
            name: "customerName.customerName"
          }, {
            data: "salesInvoiceNo",
            render: function render(data, row) {
              var ok = '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"   onclick="editModal(' + data + ')">' + data + "</button>";
              return ok;
            }
          }, {
            data: "currentTotalAmount"
          }, {
            data: "currentPaidAmount"
          }, {
            data: "mobileAmount"
          }, {
            data: "currentDue"
          }]
        });
      });
    },
    customerTypeget: function customerTypeget() {
      this.view("salesDueListWithType");
    },
    editModal: function editModal(id) {
      var _this = this;

      axios.get("salesInvoiceList/".concat(id)).then(function (res) {
        _this.lists = res.data.lists;
        _this.total = res.data.total;
        _this.discount = res.data.discount;
        _this.due = res.data.due;
        _this.customer = res.data.customer;
      });
      $("#salesId").modal("show");
    },
    customerTypeList: function customerTypeList() {
      var _this2 = this;

      axios.get("/salesProductEntry/create").then(function (res) {
        _this2.customerTypeLists = res.data.customerTypeLists;
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
    window.editModal = this.editModal;
    window.customerTypeget = this.customerTypeget;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@due.vue?vue&type=template&id=11af7d3b&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@due.vue?vue&type=template&id=11af7d3b& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        staticClass: "card main-card element-block-example mt-0",
        staticStyle: { width: "91%", margin: "0 auto" }
      },
      [
        _c("div", { staticClass: "card-header-tab card-header alert-info" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "span",
            {
              staticStyle: {
                margin: "0px auto",
                "font-weight": "bold",
                "font-size": "30px"
              }
            },
            [
              _c("router-link", { attrs: { to: "/product@sales" } }, [
                _c("i", {
                  staticClass: "fa fa-balance-scale",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v("\n          Sales\n        ")
              ])
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body table-responsive bg-white" }, [
          _vm._m(1),
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
                { staticClass: "modal-dialog", attrs: { role: "document" } },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "modal-body" },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-6 col-xs-12" },
                            [
                              _c(
                                "div",
                                { staticClass: "form-group m-0 row mt-2" },
                                [
                                  _vm._m(3),
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
                                            rawName: "v-model",
                                            value: _vm.form.currentTotalAmount,
                                            expression:
                                              "form.currentTotalAmount"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          disabled: "",
                                          placeholder: "Cash Amount"
                                        },
                                        domProps: {
                                          value: _vm.form.currentTotalAmount
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "currentTotalAmount",
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
                                { staticClass: "form-group m-0 row mt-2" },
                                [
                                  _vm._m(4),
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
                                            rawName: "v-model",
                                            value: _vm.form.currentPaidAmount,
                                            expression: "form.currentPaidAmount"
                                          }
                                        ],
                                        staticClass: "form-control noscroll",
                                        attrs: {
                                          type: "number",
                                          step: "0.01",
                                          min: "0.01",
                                          placeholder: "Cash Amount"
                                        },
                                        domProps: {
                                          value: _vm.form.currentPaidAmount
                                        },
                                        on: {
                                          keyup: _vm.totalCalculate,
                                          change: _vm.totalCalculate,
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "currentPaidAmount",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.negative == true
                                        ? _c(
                                            "span",
                                            { staticStyle: { color: "red" } },
                                            [
                                              _vm._v(
                                                "Negative Ammount Not Allowed"
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
                                { staticClass: "form-group m-0 row mt-2" },
                                [
                                  _vm._m(5),
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
                                            rawName: "v-model",
                                            value: _vm.form.currentDue,
                                            expression: "form.currentDue"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          disabled: "",
                                          placeholder: "Cash Amount"
                                        },
                                        domProps: {
                                          value: _vm.form.currentDue
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "currentDue",
                                              $event.target.value
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
                            { staticClass: "col-12 col-md-6 col-xs-12" },
                            [
                              _vm.morepay == false
                                ? _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-info",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.open()
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-plus",
                                        attrs: { "aria-hidden": "true" }
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
                                      staticClass: "btn btn-danger",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.closeForm()
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-minus",
                                        attrs: { "aria-hidden": "true" }
                                      }),
                                      _vm._v(
                                        "\n                          Close "
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.morepay
                                ? _c("div", [
                                    _c(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        _c("label", [
                                          _vm._v("Sender Bank Type Name")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.form
                                                    .senderbankTypeEntryId,
                                                expression:
                                                  "form.senderbankTypeEntryId"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            class: {
                                              "is-invalid": _vm.form.errors.has(
                                                "bankTypeEntryId"
                                              )
                                            },
                                            attrs: { name: "bankTypeEntryId" },
                                            on: {
                                              change: [
                                                function($event) {
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
                                                    "senderbankTypeEntryId",
                                                    $event.target.multiple
                                                      ? $$selectedVal
                                                      : $$selectedVal[0]
                                                  )
                                                },
                                                function($event) {
                                                  $event.preventDefault()
                                                  return _vm.senderBankTypeIdCatch()
                                                }
                                              ]
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              { attrs: { value: "" } },
                                              [_vm._v("Select One")]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(
                                              _vm.showBankTypeDatas,
                                              function(showBankTypeData) {
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
                                                      "\n                                " +
                                                        _vm._s(
                                                          showBankTypeData.bankTypeEntryName
                                                        ) +
                                                        "\n                              "
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
                                            field: "bankTypeEntryId"
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
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c("label", [
                                                      _vm._v(
                                                        " Sender Bank Name "
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form
                                                              .senderBankName,
                                                          expression:
                                                            "form.senderBankName"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: { type: "text" },
                                                      domProps: {
                                                        value:
                                                          _vm.form
                                                            .senderBankName
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
                                                            "senderBankName",
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
                                                    _c("label", [
                                                      _vm._v(" Sender A/C No ")
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form.senderAcNo,
                                                          expression:
                                                            "form.senderAcNo"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: { type: "text" },
                                                      domProps: {
                                                        value:
                                                          _vm.form.senderAcNo
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
                                                            "senderAcNo",
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
                                                    _c("label", [
                                                      _vm._v(
                                                        " Sender A/C Name "
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form
                                                              .senderAcName,
                                                          expression:
                                                            "form.senderAcName"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: { type: "text" },
                                                      domProps: {
                                                        value:
                                                          _vm.form.senderAcName
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
                                                            "senderAcName",
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
                                                    _c("label", [
                                                      _vm._v(" Branch ")
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form
                                                              .senderBranchName,
                                                          expression:
                                                            "form.senderBranchName"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: { type: "text" },
                                                      domProps: {
                                                        value:
                                                          _vm.form
                                                            .senderBranchName
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
                                                            "senderBranchName",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                )
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.mobileAccount
                                            ? _c("div", [
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _vm._m(6),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form
                                                              .senderMobileAcNo,
                                                          expression:
                                                            "form.senderMobileAcNo"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: { type: "text" },
                                                      domProps: {
                                                        value:
                                                          _vm.form
                                                            .senderMobileAcNo
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
                                                            "senderMobileAcNo",
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
                                                    _c("label", [
                                                      _vm._v(" Trx No ")
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form
                                                              .senderTrxNo,
                                                          expression:
                                                            "form.senderTrxNo"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: { type: "text" },
                                                      domProps: {
                                                        value:
                                                          _vm.form.senderTrxNo
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
                                                            "senderTrxNo",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                )
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
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
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        _vm.form
                                                          .receiverbankTypeEntryId,
                                                      expression:
                                                        "form.receiverbankTypeEntryId"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  class: {
                                                    "is-invalid": _vm.form.errors.has(
                                                      "bankTypeEntryId"
                                                    )
                                                  },
                                                  attrs: {
                                                    disabled: "",
                                                    name: "bankTypeEntryId"
                                                  },
                                                  on: {
                                                    change: [
                                                      function($event) {
                                                        var $$selectedVal = Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
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
                                                          "receiverbankTypeEntryId",
                                                          $event.target.multiple
                                                            ? $$selectedVal
                                                            : $$selectedVal[0]
                                                        )
                                                      },
                                                      function($event) {
                                                        $event.preventDefault()
                                                        return _vm.bankTypeIdCatch()
                                                      }
                                                    ]
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "option",
                                                    { attrs: { value: "" } },
                                                    [_vm._v("Select One")]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    _vm.showBankTypeDatas,
                                                    function(showBankTypeData) {
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
                                                  field: "bankTypeEntryId"
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
                                                _vm._v("Receiver Bank Name")
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "select",
                                                {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        _vm.form
                                                          .receiverbankEntryId,
                                                      expression:
                                                        "form.receiverbankEntryId"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  class: {
                                                    "is-invalid": _vm.form.errors.has(
                                                      "bankEntryId"
                                                    )
                                                  },
                                                  attrs: {
                                                    name: "bankEntryId"
                                                  },
                                                  on: {
                                                    change: [
                                                      function($event) {
                                                        var $$selectedVal = Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
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
                                                          "receiverbankEntryId",
                                                          $event.target.multiple
                                                            ? $$selectedVal
                                                            : $$selectedVal[0]
                                                        )
                                                      },
                                                      function($event) {
                                                        $event.preventDefault()
                                                        return _vm.bankAccountIdCatch()
                                                      }
                                                    ]
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "option",
                                                    { attrs: { value: "" } },
                                                    [_vm._v("Select Bank Name")]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    _vm.showBankNames,
                                                    function(showBankName) {
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
                                                            "\n                                  " +
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
                                              _c("has-error", {
                                                attrs: {
                                                  form: _vm.form,
                                                  field: "bankEntryId"
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
                                                _vm._v("Receiver Account No")
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "select",
                                                {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        _vm.form
                                                          .receiverbankAccountId,
                                                      expression:
                                                        "form.receiverbankAccountId"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  class: {
                                                    "is-invalid": _vm.form.errors.has(
                                                      "bankAccountId"
                                                    )
                                                  },
                                                  attrs: {
                                                    name: "bankAccountId"
                                                  },
                                                  on: {
                                                    change: [
                                                      function($event) {
                                                        var $$selectedVal = Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
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
                                                          "receiverbankAccountId",
                                                          $event.target.multiple
                                                            ? $$selectedVal
                                                            : $$selectedVal[0]
                                                        )
                                                      },
                                                      function($event) {
                                                        return _vm.getBankMoreInfo()
                                                      }
                                                    ]
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "option",
                                                    { attrs: { value: "" } },
                                                    [
                                                      _vm._v(
                                                        "Select Bank Account"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    _vm.showBankAccounts,
                                                    function(showBankAccount) {
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
                                                            ? _c("span", [
                                                                _vm._v(
                                                                  "\n                                    " +
                                                                    _vm._s(
                                                                      showBankAccount.bankAccountName
                                                                    ) +
                                                                    "\n                                  "
                                                                )
                                                              ])
                                                            : _c("span", [
                                                                _vm._v(
                                                                  "\n                                    " +
                                                                    _vm._s(
                                                                      showBankAccount.bankAccountNumber
                                                                    ) +
                                                                    "\n                                  "
                                                                )
                                                              ])
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
                                                  field: "bankAccountId"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _vm.bankInformationAccountInfoStatus
                                            ? _c("div", [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "form-group",
                                                    staticStyle: {
                                                      display: "none"
                                                    }
                                                  },
                                                  [
                                                    _c("label", [
                                                      _vm._v(
                                                        "Receiver Branch Name "
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form
                                                              .receiverbranchName,
                                                          expression:
                                                            "form.receiverbranchName"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        type: "text",
                                                        readonly: ""
                                                      },
                                                      domProps: {
                                                        value:
                                                          _vm.form
                                                            .receiverbranchName
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
                                                            "receiverbranchName",
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
                                                    _c("label", [
                                                      _vm._v(
                                                        " Receiver Account No "
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form
                                                              .receiverAccNo,
                                                          expression:
                                                            "form.receiverAccNo"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        type: "text",
                                                        readonly: ""
                                                      },
                                                      domProps: {
                                                        value:
                                                          _vm.form.receiverAccNo
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
                                                            "receiverAccNo",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
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
                                              _vm._m(7),
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
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.form.mobileAmount,
                                                        expression:
                                                          "form.mobileAmount"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "form-control noscroll",
                                                    attrs: {
                                                      type: "number",
                                                      oninput:
                                                        "validity.valid||(value='0');",
                                                      placeholder: "Bank Amount"
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.form.mobileAmount
                                                    },
                                                    on: {
                                                      keyup:
                                                        _vm.mobileAmountCalculate,
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.form,
                                                          "mobileAmount",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _vm.negative == true
                                                    ? _c(
                                                        "span",
                                                        {
                                                          staticStyle: {
                                                            color: "red"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Negative Amount Not Allowed"
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
                                              _vm._m(8),
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
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.form.currentDue,
                                                        expression:
                                                          "form.currentDue"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      type: "text",
                                                      disabled: "",
                                                      placeholder: "Due"
                                                    },
                                                    domProps: {
                                                      value: _vm.form.currentDue
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
                                                          "currentDue",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
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
                          _vm.paynow1 == false
                            ? _c("span", [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "\n                            mt-3\n                            btn-pill btn-shadow btn-wide\n                            fsize-1\n                            btn btn-warning btn-lg\n                          ",
                                    attrs: { type: "button", disabled: "" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.salesInvoiceEntry()
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "mr-2 opacity-7" },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-paper-plane"
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "mr-1" }, [
                                      _vm._v(" Pay Now 2")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c("span", { staticStyle: { color: "red" } }, [
                                  _vm._v(
                                    "General Customer Due Not Allow\n                        "
                                  )
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.paynow1 == true
                            ? _c("span", [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "\n                            mt-3\n                            btn-pill btn-shadow btn-wide\n                            fsize-1\n                            btn btn-warning btn-lg\n                          ",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.salesInvoiceEntry()
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "mr-2 opacity-7" },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-paper-plane"
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "mr-1" }, [
                                      _vm._v(" Pay Now 3")
                                    ])
                                  ]
                                )
                              ])
                            : _vm._e()
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(9)
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
    return _c("h4", [
      _c("i", {
        staticClass:
          "header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
      }),
      _vm._v("\n        Sales Due Customer\n      ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "table",
      {
        staticClass: "table table-hover table-striped table-bordered",
        staticStyle: { width: "1200px" },
        attrs: { id: "sampleTable" }
      },
      [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("SN")]),
            _vm._v(" "),
            _c("th", [_vm._v("Customer Name")]),
            _vm._v(" "),
            _c("th", [_vm._v("Total Purchase")]),
            _vm._v(" "),
            _c("th", [_vm._v("Total Paid")]),
            _vm._v(" "),
            _c("th", [_vm._v("Total Due")]),
            _vm._v(" "),
            _c("th", [_vm._v("Statement")])
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
        [_vm._v(" Pay Now 1")]
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
      [_c("label", [_vm._v("Cash ")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-4 col-md-6 col-sm-4 col-12 pl-0" },
      [_c("label", [_vm._v(" Due: ")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(
        "\n                                  Sender Mobile A/C No\n                                  "
      ),
      _c("i", {
        staticClass:
          "\n                                      fa fa-star\n                                      text-danger text-10\n                                      cursor-pointer\n                                    ",
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
    return _c(
      "div",
      { staticClass: "col-lg-4 col-md-6 col-sm-4 col-12 pl-0" },
      [_c("label", [_vm._v("Due ")])]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@due@customer.vue?vue&type=template&id=e46f9f1a&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@due@customer.vue?vue&type=template&id=e46f9f1a& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
        staticClass: "card main-card element-block-example mt-0",
        staticStyle: { width: "91%", margin: "0 auto" }
      },
      [
        _c("div", { staticClass: "card-header-tab card-header alert-info" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "span",
            {
              staticStyle: {
                margin: "0px auto",
                "font-weight": "bold",
                "font-size": "30px"
              }
            },
            [
              _c("router-link", { attrs: { to: "/product@sales" } }, [
                _c("i", {
                  staticClass: "fa fa-balance-scale",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v("\n          Sales\n        ")
              ])
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body table-responsive bg-white" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal fade",
              attrs: {
                id: "salesId",
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
                  staticClass: "modal-dialog modal-lg",
                  attrs: { role: "document" }
                },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c("div", { staticClass: "card" }, [
                        _vm._m(3),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-body" }, [
                          _vm._m(4),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticStyle: { "padding-top": "0px !important" },
                              attrs: { id: "invoice" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "invoice overflow-auto" },
                                [
                                  _c(
                                    "div",
                                    { staticStyle: { "min-width": "600px" } },
                                    [
                                      _c("invoice"),
                                      _vm._v(" "),
                                      _c("main", [
                                        _c(
                                          "div",
                                          { staticClass: "row contacts" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "col invoice-to" },
                                              [
                                                _vm._m(5),
                                                _vm._v(" "),
                                                _vm._l(_vm.customer, function(
                                                  cus
                                                ) {
                                                  return _c(
                                                    "span",
                                                    { key: cus.id },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass: "address"
                                                        },
                                                        [
                                                          _vm._v(
                                                            " " +
                                                              _vm._s(
                                                                cus.customer
                                                                  .customerName
                                                              ) +
                                                              " "
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
                                                            " " +
                                                              _vm._s(
                                                                cus.customer
                                                                  .customerPhone
                                                              ) +
                                                              " "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                })
                                              ],
                                              2
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
                                                      " Sales Invoice: " +
                                                        _vm._s(
                                                          _vm.due.salesInvoiceNo
                                                        )
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "date" },
                                                  [
                                                    _vm._v(
                                                      " Sales Date: " +
                                                        _vm._s(
                                                          _vm.due.salesDate
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
                                            _vm._m(6),
                                            _vm._v(" "),
                                            _c(
                                              "tbody",
                                              _vm._l(_vm.lists, function(
                                                list,
                                                index
                                              ) {
                                                return _c(
                                                  "tr",
                                                  { key: list.id },
                                                  [
                                                    _c("td", [
                                                      _vm._v(_vm._s(++index))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass: "text-left"
                                                      },
                                                      [
                                                        list.product_name
                                                          ? _c("span", [
                                                              _vm._v(
                                                                "\n                            " +
                                                                  _vm._s(
                                                                    list
                                                                      .product_name
                                                                      .productName
                                                                  ) +
                                                                  " "
                                                              )
                                                            ])
                                                          : _vm._e()
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      list.brand_name
                                                        ? _c("span", [
                                                            _vm._v(
                                                              _vm._s(
                                                                list.brand_name
                                                                  .productBrandName
                                                              )
                                                            )
                                                          ])
                                                        : _vm._e()
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", {}, [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            list.unit_name
                                                              .uniteEntryName
                                                          ) +
                                                          " "
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", {}, [
                                                      list.colorId
                                                        ? _c("span", [
                                                            _vm._v(
                                                              "\n                             " +
                                                                _vm._s(
                                                                  list
                                                                    .color_name
                                                                    .colorName
                                                                ) +
                                                                "\n                             "
                                                            ),
                                                            list.size_name.id
                                                              ? _c("span", [
                                                                  _vm._v(
                                                                    "/\n                             " +
                                                                      _vm._s(
                                                                        list
                                                                          .size_name
                                                                          .sizeName
                                                                      )
                                                                  )
                                                                ])
                                                              : _vm._e()
                                                          ])
                                                        : _vm._e()
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", {}, [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            list.quantity
                                                          ) +
                                                          " "
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", {}, [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            list.unitPrice
                                                          ) +
                                                          " "
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", {}, [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            Math.abs(
                                                              list.quantity *
                                                                list.unitPrice
                                                            )
                                                          ) +
                                                          " "
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", {}, [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            list.totalDiscount
                                                          ) +
                                                          " "
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", {}, [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            list.totalPrice
                                                          ) +
                                                          " "
                                                      )
                                                    ])
                                                  ]
                                                )
                                              }),
                                              0
                                            ),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _vm._m(7),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { staticClass: "border-0" },
                                                [
                                                  _c("b", [
                                                    _vm._v(
                                                      " : " + _vm._s(_vm.total)
                                                    )
                                                  ])
                                                ]
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "row" }, [
                                          _c("div", { staticClass: "col" }),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "col" }),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "col" }, [
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
                                                      [_vm._v("Discount")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass: "bg-light"
                                                      },
                                                      [
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(
                                                              _vm.due
                                                                .discountPrice
                                                            ) +
                                                            " "
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
                                                          "\n                                      Total Product Cost\n                                    "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            _vm.due.totalPayable
                                                          ) +
                                                          " "
                                                      )
                                                    ])
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
                                                          "\n                                      Previous Due\n                                    "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            _vm.due.previousDue
                                                          ) +
                                                          " "
                                                      )
                                                    ])
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
                                                          "\n                                      Current Payable\n                                    "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass: "bg-light"
                                                      },
                                                      [
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(
                                                              _vm.due
                                                                .currentTotalAmount
                                                            ) +
                                                            " "
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                ])
                                              ]
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "row mt-5" }, [
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
                                                      "\n                                        Supplier Sign  \n                                     "
                                                    )
                                                  ]
                                                )
                                              ])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "col" }),
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
                                                      "\n                                        Authorize Sign  \n                                     \n                                "
                                                    )
                                                  ]
                                                )
                                              ])
                                            ],
                                            1
                                          )
                                        ])
                                      ])
                                    ],
                                    1
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
                    _vm._m(8)
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
    return _c("h4", [
      _c("i", {
        staticClass:
          "header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
      }),
      _vm._v("\n        Sales Due\n      ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "table",
      {
        staticClass: "table table-hover table-striped table-bordered",
        staticStyle: { width: "110%" },
        attrs: { id: "sampleTable" }
      },
      [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("Sales Date")]),
            _vm._v(" "),
            _c("th", [_vm._v("C.Type")]),
            _vm._v(" "),
            _c("th", [_vm._v("C.Name")]),
            _vm._v(" "),
            _c("th", [_vm._v("Invoice")]),
            _vm._v(" "),
            _c("th", [_vm._v("Invoice Amount")]),
            _vm._v(" "),
            _c("th", [_vm._v("Paid Cash")]),
            _vm._v(" "),
            _c("th", [_vm._v("Paid Bank")]),
            _vm._v(" "),
            _c("th", [_vm._v("Due Amount")])
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
        [_vm._v("\n                Product Details\n              ")]
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
              "\n                        header-icon\n                        lnr-laptop-phone\n                        icon-gradient\n                        bg-premium-dark\n                      "
          }),
          _vm._v("\n                    Sales Invoice\n                  ")
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
            _vm._v(" Print\n                      ")
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
      _c("u", [_c("b", [_vm._v(" Customer Information :")])])
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
        _c("th", { staticClass: "text-left" }, [_vm._v("Product ")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v(" Brand")]),
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
        [_vm._v("\n                Close\n              ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/sales/sales@due.vue":
/*!*****************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@due.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sales_due_vue_vue_type_template_id_11af7d3b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales@due.vue?vue&type=template&id=11af7d3b& */ "./resources/js/admin/page/sales/sales@due.vue?vue&type=template&id=11af7d3b&");
/* harmony import */ var _sales_due_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales@due.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/sales/sales@due.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sales_due_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sales_due_vue_vue_type_template_id_11af7d3b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sales_due_vue_vue_type_template_id_11af7d3b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/sales/sales@due.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@due.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@due.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_due_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./sales@due.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@due.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_due_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@due.vue?vue&type=template&id=11af7d3b&":
/*!************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@due.vue?vue&type=template&id=11af7d3b& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_due_vue_vue_type_template_id_11af7d3b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./sales@due.vue?vue&type=template&id=11af7d3b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@due.vue?vue&type=template&id=11af7d3b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_due_vue_vue_type_template_id_11af7d3b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_due_vue_vue_type_template_id_11af7d3b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/page/sales/sales@due@customer.vue":
/*!**************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@due@customer.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sales_due_customer_vue_vue_type_template_id_e46f9f1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales@due@customer.vue?vue&type=template&id=e46f9f1a& */ "./resources/js/admin/page/sales/sales@due@customer.vue?vue&type=template&id=e46f9f1a&");
/* harmony import */ var _sales_due_customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales@due@customer.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/sales/sales@due@customer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sales_due_customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sales_due_customer_vue_vue_type_template_id_e46f9f1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sales_due_customer_vue_vue_type_template_id_e46f9f1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/sales/sales@due@customer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@due@customer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@due@customer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_due_customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./sales@due@customer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@due@customer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_due_customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@due@customer.vue?vue&type=template&id=e46f9f1a&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@due@customer.vue?vue&type=template&id=e46f9f1a& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_due_customer_vue_vue_type_template_id_e46f9f1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./sales@due@customer.vue?vue&type=template&id=e46f9f1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@due@customer.vue?vue&type=template&id=e46f9f1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_due_customer_vue_vue_type_template_id_e46f9f1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_due_customer_vue_vue_type_template_id_e46f9f1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);