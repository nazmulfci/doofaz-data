(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["salesPending"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@pending.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@pending.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        previousDue: 10,
        currentTotalAmount: "",
        currentPaidAmount: "",
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
      lists: {},
      loading: false,
      negative: false,
      fromshow: false,
      paynow1: true,
      dueSt: true,
      //bank Inf0
      invoice: "",
      paymentTypeLists: {},
      showBankNames: [],
      showBankAccounts: [],
      showBankTypeDatas: [],
      bankInformationAccountInfoStatus: [],
      mobileAccount: false,
      bankAccount: false,
      bankCardAccount: false,
      morepay: false,
      close: false,
      predue: ""
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  mounted: function mounted() {
    this.salesInvoiceList();
    this.getData();
  },
  methods: {
    open: function open() {
      this.morepay = true;
      this.close = true;
    },
    closeForm: function closeForm() {
      this.morepay = false;
      this.close = false;
    },
    salesInvoiceList: function salesInvoiceList() {
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
          ajax: "/salesInvoiceEntry/create",
          columns: [{
            data: "salesInvoiceId"
          }, {
            data: "salesDate"
          }, {
            data: "salesInvoiceNo",
            render: function render(data, row) {
              var ok = '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" data-toggle="modal"   onclick="editModal(' + data + ')">' + data + "</button>";
              return ok;
            }
          }, {
            data: "customerName",
            name: "customerName.customerName"
          }, {
            data: "customerType",
            name: "customerType.shopCustomerName"
          }, {
            data: "totalQuantity"
          }, {
            data: "discountPrice"
          }, {
            data: "currentTotalAmount"
          }, {
            data: "currentPaidAmount"
          }, {
            data: "currentDue"
          }, {
            data: "salesInvoiceNo",
            render: function render(data, row) {
              var invoice = '<button type="button"  data-toggle="modal"    onclick="showInvoice(' + data + ')"   class="btn btn-warning ">' + '  <span class="mr-2 opacity-7"><i class="fa fa-paper-plane"></i></span><span class="mr-1"> Pay Now </span>' + "</button>";
              var cancel = '<div class="btn-group text-light product-delete" ><a herf="#" onclick="salesProductDelete(' + data + ')"><i class="fa fa-times" aria-hidden="true"></i></a></div>';
              return invoice + cancel;
            }
          }]
        });
      });
    },
    salesInvoiceEntry: function salesInvoiceEntry() {
      var _this = this;

      this.loading = true;
      axios.post("salesInvoicePaid/".concat(this.invoice), {
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
        receiverAccNo: this.form.receiverAccNo,
        currentDue: this.form.currentDue,
        currentPaidAmount: this.form.currentPaidAmount,
        mobileAmount: this.form.mobileAmount,
        paymentType: this.form.paymentType
      }).then(function (res) {
        $("#pay" + _this.form.salesInvoiceNo).modal("hide");

        _this.salesInvoiceList();

        Toast.fire({
          icon: "success",
          title: " Successfully Paid"
        });
        _this.loading = false;
      });
    },
    totalCalculate: function totalCalculate(e) {
      if (this.form.mobileAmount == "") {
        this.totalcal = 0 + parseFloat(this.form.currentPaidAmount);
      } else {
        this.totalcal = parseFloat(this.form.currentPaidAmount) + parseFloat(this.form.mobileAmount);
      }

      if (this.form.currentPaidAmount == "") {
        this.totalcal = parseFloat(this.form.mobileAmount) + 0;
      }

      this.form.currentDue = this.form.currentTotalAmount - this.totalcal;

      if (this.form.currentPaidAmount < 0) {
        this.form.currentPaidAmount = 0;
        this.negative = true;
      } else {
        var stringValue = e.target.value.toString();
        var regex = /^\d*(\.\d{1,2})?$/;

        if (!stringValue.match(regex) && this.form.currentPaidAmount !== "") {
          this.form.currentPaidAmount = 0;
          this.negative = true;
        } else {
          this.negative = false;

          if (this.form.currentDue < 0) {
            this.negative = true;
            this.paynow1 = false;
            this.dueSt = false;
            this.form.currentPaidAmount = '';
            this.form.mobileAmount = '';
            this.form.currentDue = this.form.currentTotalAmount;
          } else {
            this.negative = false;
          } // if (this.form.currentDue > this.lmt.limitDueAmmount) {
          //   this.paynow = false;
          // } else {
          //   this.paynow = true;
          // }


          if (this.form.salesCustomerTypeId == 1 & this.form.currentDue > 0) {
            this.paynow1 = false;
          } else {
            this.paynow1 = true;
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
      }

      this.form.currentDue = this.form.currentTotalAmount - this.totalcal;

      if (this.form.mobileAmount < 0) {
        this.form.mobileAmount = 0;
        this.negative = true;
      } else {
        var stringValue = e.target.value.toString();
        var regex = /^\d*(\.\d{1,2})?$/;

        if (!stringValue.match(regex) && this.form.mobileAmount !== "") {
          this.form.mobileAmount = 0;
          this.negative = true;
        } else {
          this.negative = false;

          if (this.form.currentDue < 0) {
            this.negative = true;
            this.paynow1 = false;
            this.dueSt = false;
            this.form.currentPaidAmount = '';
            this.form.mobileAmount = '';
            this.form.currentDue = this.form.currentTotalAmount;
          } else {
            this.negative = false;
          } // if (this.form.currentDue > this.lmt.limitDueAmmount) {
          //   this.paynow = false;
          // } else {
          //   this.paynow = true;
          // }


          if (this.form.salesCustomerTypeId == 1 & this.form.currentDue > 0) {
            this.paynow1 = false;
          } else {
            this.paynow1 = true;
          }
        }
      }
    },
    showInvoice: function showInvoice(id) {
      var _this2 = this;

      this.invoice = id;
      $("#pay").modal("show");
      axios.get("salesInvoice/".concat(id)).then(function (res) {
        _this2.form.currentTotalAmount = res.data.data.currentTotalAmount;
        _this2.form.salesCustomerTypeId = res.data.data.salesCustomerTypeId;
        _this2.form.currentDue = _this2.form.currentTotalAmount;
      });
    },
    editModal: function editModal(id) {
      var _this3 = this;

      axios.get("salesInvoiceList/".concat(id)).then(function (res) {
        _this3.lists = res.data.lists;
      });
      $("#salesId").modal("show");
    },
    salesProductDelete: function salesProductDelete(id) {
      var _this4 = this;

      axios.get("salesInvoiceDelete/".concat(id)).then(function (res) {
        _this4.salesInvoiceList();

        Toast.fire({
          icon: "success",
          title: "sucessfully Deleted"
        });
      });
    },
    getData: function getData() {
      var _this5 = this;

      axios.get("/bankTypeEntryList").then(function (res) {
        _this5.showBankTypeDatas = res.data.show;
      }), axios.get("/paymentTypeList").then(function (res) {
        _this5.paymentTypeLists = res.data.data;
      }), axios.get("/addExpense").then(function (res) {
        _this5.datas = res.data.data;
      });
    },
    senderBankTypeIdCatch: function senderBankTypeIdCatch() {
      var _this6 = this;

      axios.get("/bankNameList/" + this.form.senderbankTypeEntryId).then(function (res) {
        _this6.showBankNames = res.data.show;
        _this6.fromshow = true;
      });

      if (this.form.senderbankTypeEntryId == 1) {
        this.form.receiverbankTypeEntryId = 1;
        this.bankAccount = true;
        this.mobileAccount = false;
        this.bankCardAccount = false;
      } else if (this.form.senderbankTypeEntryId == 2) {
        this.form.receiverbankTypeEntryId = 2;
        this.bankAccount = false;
        this.bankCardAccount = false;
        this.mobileAccount = true;
      } else if (this.form.senderbankTypeEntryId == 3) {
        this.form.receiverbankTypeEntryId = 3;
        this.bankAccount = false;
        this.mobileAccount = false;
        this.bankCardAccount = true;
      }
    },
    bankTypeIdCatch: function bankTypeIdCatch() {
      var _this7 = this;

      axios.get("/bankNameList/" + this.form.receiverbankTypeEntryId).then(function (res) {
        _this7.showBankNames = res.data.show;
      });

      if (this.form.receiverbankTypeEntryId == 1) {
        this.bankAccount = true;
        this.mobileAccount = false;
        this.bankCardAccount = false;
      } else if (this.form.receiverbankTypeEntryId == 2) {
        this.bankAccount = false;
        this.bankCardAccount = false;
        this.mobileAccount = true;
      } else if (this.form.receiverbankTypeEntryId == 3) {
        this.bankAccount = false;
        this.bankCardAccount = true;
        this.mobileAccount = false;
      }
    },
    bankAccountIdCatch: function bankAccountIdCatch() {
      var _this8 = this;

      axios.get("/bankAccountListWithCard/" + this.form.receiverbankEntryId + '/' + this.form.receiverbankTypeEntryId).then(function (res) {
        _this8.showBankAccounts = res.data.data;
      });
    },
    getBankMoreInfo: function getBankMoreInfo() {
      var _this9 = this;

      axios.get("/bankAccountMoreInfo/" + this.form.receiverbankAccountId).then(function (res) {
        _this9.form.receiverbranchName = res.data.data.bankBranch;
        _this9.form.receiverAccNo = res.data.data.bankAccountNumber;
        _this9.bankInformationAccountInfoStatus = 1;
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
    window.showInvoice = this.showInvoice;
    window.editModal = this.editModal;
    window.salesProductDelete = this.salesProductDelete;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@pending.vue?vue&type=template&id=bcfdf044&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@pending.vue?vue&type=template&id=bcfdf044& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card main-card element-block-example mt-0" }, [
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
              _vm._v("\n           Sales\n         ")
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
              id: "pay" + this.form.salesInvoiceNo,
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
                                          expression: "form.currentTotalAmount"
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
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Cash Amount"
                                      },
                                      domProps: {
                                        value: _vm.form.currentPaidAmount
                                      },
                                      on: {
                                        keyup: _vm.totalCalculate,
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
                                      domProps: { value: _vm.form.currentDue },
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
                                    _vm._v("\nClose ")
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
                                                _vm.form.senderbankTypeEntryId,
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
                                                    "\n                                 " +
                                                      _vm._s(
                                                        showBankTypeData.bankTypeEntryName
                                                      ) +
                                                      "\n                               "
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
                                                    _vm._v(" Sender Bank Name ")
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
                                                    staticClass: "form-control",
                                                    attrs: { type: "text" },
                                                    domProps: {
                                                      value:
                                                        _vm.form.senderBankName
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
                                                    staticClass: "form-control",
                                                    attrs: { type: "text" },
                                                    domProps: {
                                                      value: _vm.form.senderAcNo
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
                                                    _vm._v(" Sender A/C Name ")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.form.senderAcName,
                                                        expression:
                                                          "form.senderAcName"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: { type: "text" },
                                                    domProps: {
                                                      value:
                                                        _vm.form.senderAcName
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
                                                    staticClass: "form-control",
                                                    attrs: { type: "text" },
                                                    domProps: {
                                                      value:
                                                        _vm.form
                                                          .senderBranchName
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
                                        _vm.bankCardAccount
                                          ? _c("div", [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("label", [
                                                    _vm._v(" Sender Bank Name ")
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
                                                    staticClass: "form-control",
                                                    attrs: { type: "text" },
                                                    domProps: {
                                                      value:
                                                        _vm.form.senderBankName
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
                                                    _vm._v(" Sender Card No ")
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
                                                    staticClass: "form-control",
                                                    attrs: { type: "text" },
                                                    domProps: {
                                                      value: _vm.form.senderAcNo
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
                                                      " Sender Cardholder Name "
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.form.senderAcName,
                                                        expression:
                                                          "form.senderAcName"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: { type: "text" },
                                                    domProps: {
                                                      value:
                                                        _vm.form.senderAcName
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
                                                          "senderAcName",
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
                                                    staticClass: "form-control",
                                                    attrs: { type: "text" },
                                                    domProps: {
                                                      value:
                                                        _vm.form
                                                          .senderMobileAcNo
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
                                                          _vm.form.senderTrxNo,
                                                        expression:
                                                          "form.senderTrxNo"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: { type: "text" },
                                                    domProps: {
                                                      value:
                                                        _vm.form.senderTrxNo
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
                                              _vm._v("Receiver Bank Type Name")
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
                                                          "\n                                   " +
                                                            _vm._s(
                                                              showBankTypeData.bankTypeEntryName
                                                            ) +
                                                            "\n                                 "
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
                                                attrs: { name: "bankEntryId" },
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
                                                          "\n                                   " +
                                                            _vm._s(
                                                              showBankName.bankName
                                                            ) +
                                                            "\n                                   "
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
                                                                "\n                                     " +
                                                                  _vm._s(
                                                                    showBankAccount.bankAccountName
                                                                  ) +
                                                                  "\n                                   "
                                                              )
                                                            ])
                                                          : _c("span", [
                                                              _vm._v(
                                                                "\n                                     " +
                                                                  _vm._s(
                                                                    showBankAccount.bankAccountNumber
                                                                  ) +
                                                                  "\n                                   "
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
                                                    staticClass: "form-control",
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
                                                      input: function($event) {
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
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      type: "text",
                                                      readonly: ""
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.form.receiverAccNo
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
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    type: "text",
                                                    placeholder: "Bank Amount"
                                                  },
                                                  domProps: {
                                                    value: _vm.form.mobileAmount
                                                  },
                                                  on: {
                                                    keyup:
                                                      _vm.mobileAmountCalculate,
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
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
                                                          "Negative Ammount Not Allowed"
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
                        _vm.paynow1 == false
                          ? _c("span", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "\n                             mt-3\n                             btn-pill btn-shadow btn-wide\n                             fsize-1\n                             btn btn-warning btn-lg\n                           ",
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
                                    _vm._v(" Pay Now ")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _vm.dueSt
                                ? _c(
                                    "span",
                                    { staticStyle: { color: "red" } },
                                    [
                                      _vm._v(
                                        "General Customer Due Not Allow\n                         "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.paynow1 == true
                          ? _c("span", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "\n                             mt-3\n                             btn-pill btn-shadow btn-wide\n                             fsize-1\n                             btn btn-warning btn-lg\n                           ",
                                  attrs: {
                                    type: "button",
                                    disabled: _vm.loading
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.salesInvoiceEntry()
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
                                  _vm._v(" "),
                                  _c("span", { staticClass: "mr-1" }, [
                                    _vm._v(" Pay Now ")
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
                  _vm._m(8)
                ])
              ]
            )
          ]
        ),
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
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(9),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c(
                      "div",
                      { staticClass: "card main-card element-block-example" },
                      [
                        _vm._m(10),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "table-responsive bg-white" },
                          [
                            _c(
                              "table",
                              {
                                staticClass:
                                  "table table-hover table-bordered table-striped"
                              },
                              [
                                _vm._m(11),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.lists, function(getInfo, index) {
                                    return _c("tr", [
                                      _c("td", [_vm._v(_vm._s(index + 1))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(getInfo.created_at))
                                      ]),
                                      _vm._v(" "),
                                      getInfo.product_name
                                        ? _c("td", [
                                            _vm._v(
                                              "\n                           " +
                                                _vm._s(
                                                  getInfo.product_name
                                                    .productName
                                                ) +
                                                "\n                         "
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      getInfo.brand_name
                                        ? _c("td", [
                                            _vm._v(
                                              "\n                           " +
                                                _vm._s(
                                                  getInfo.brand_name
                                                    .productBrandName
                                                ) +
                                                "\n                         "
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("td", {}, [
                                        getInfo.colorId
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                              " +
                                                  _vm._s(
                                                    getInfo.color_name.colorName
                                                  ) +
                                                  "\n                              "
                                              ),
                                              getInfo.size_name.id
                                                ? _c("span", [
                                                    _vm._v(
                                                      "/\n                              " +
                                                        _vm._s(
                                                          getInfo.size_name
                                                            .sizeName
                                                        )
                                                    )
                                                  ])
                                                : _vm._e()
                                            ])
                                          : _vm._e()
                                      ]),
                                      _vm._v(" "),
                                      getInfo
                                        ? _c("td", [
                                            _vm._v(_vm._s(getInfo.quantity))
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      getInfo.unit_name
                                        ? _c("td", [
                                            _vm._v(
                                              "\n                           " +
                                                _vm._s(
                                                  getInfo.unit_name
                                                    .uniteEntryName
                                                ) +
                                                "\n                         "
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      getInfo
                                        ? _c("td", [
                                            _vm._v(_vm._s(getInfo.unitPrice))
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      getInfo
                                        ? _c("td", [
                                            _vm._v(
                                              _vm._s(getInfo.totalDiscount)
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      getInfo
                                        ? _c("td", [
                                            _vm._v(_vm._s(getInfo.totalPrice))
                                          ])
                                        : _vm._e()
                                    ])
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
                  _vm._m(12)
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
    return _c("h4", [
      _c("i", {
        staticClass:
          "header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
      }),
      _vm._v("\n         sales Pending\n       ")
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
        staticStyle: { width: "100%" },
        attrs: { id: "sampleTable" }
      },
      [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("SN")]),
            _vm._v(" "),
            _c("th", [_vm._v("Sales Date")]),
            _vm._v(" "),
            _c("th", [_vm._v("Invoice No")]),
            _vm._v(" "),
            _c("th", [_vm._v("Customer Name")]),
            _vm._v(" "),
            _c("th", [_vm._v("Customer Type")]),
            _vm._v(" "),
            _c("th", [_vm._v("Total Quantity")]),
            _vm._v(" "),
            _c("th", [_vm._v("Discount Price")]),
            _vm._v(" "),
            _c("th", [_vm._v("Total Amount")]),
            _vm._v(" "),
            _c("th", [_vm._v("Paid Amount")]),
            _vm._v(" "),
            _c("th", [_vm._v("Due Amount")]),
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
        [_vm._v("\n                       Pay Now\n                     ")]
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
      [_c("label", [_vm._v("Due: ")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(
        "\n                                   Sender Mobile A/C No\n                                   "
      ),
      _c("i", {
        staticClass:
          "\n                                       fa fa-star\n                                       text-danger text-10\n                                       cursor-pointer\n                                     ",
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
        [_vm._v("\n                       Close\n                     ")]
      )
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
        [_vm._v("\n                 Product Detalis\n               ")]
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
          _vm._v("Sales Product List")
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
        _c("th", [_vm._v("Sales.Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product.Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Brand")]),
        _vm._v(" "),
        _c("th", [_vm._v("Color/Size")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit.Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Discount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total.Price")])
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
        [_vm._v("\n                 Close\n               ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/sales/sales@pending.vue":
/*!*********************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@pending.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sales_pending_vue_vue_type_template_id_bcfdf044___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales@pending.vue?vue&type=template&id=bcfdf044& */ "./resources/js/admin/page/sales/sales@pending.vue?vue&type=template&id=bcfdf044&");
/* harmony import */ var _sales_pending_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales@pending.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/sales/sales@pending.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sales_pending_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sales_pending_vue_vue_type_template_id_bcfdf044___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sales_pending_vue_vue_type_template_id_bcfdf044___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/sales/sales@pending.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@pending.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@pending.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_pending_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./sales@pending.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@pending.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_pending_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@pending.vue?vue&type=template&id=bcfdf044&":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@pending.vue?vue&type=template&id=bcfdf044& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_pending_vue_vue_type_template_id_bcfdf044___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./sales@pending.vue?vue&type=template&id=bcfdf044& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@pending.vue?vue&type=template&id=bcfdf044&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_pending_vue_vue_type_template_id_bcfdf044___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_pending_vue_vue_type_template_id_bcfdf044___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);