(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loanInstalmentEntry"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/loanInstalmentEntry.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/entry/loanInstalmentEntry.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return _ref = {
      loading: false,
      paidDateText: '',
      month: 0,
      mobile_bank_info: 0,
      agent_bank_info: 0,
      corporate_bank_info: 0,
      howMuchTimeStatus: false,
      loanPayTypeStatus: true,
      bankInformationStatus: 0,
      cashInformationStatus: 0,
      bankInformationAccountInfoStatus: 0,
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a,
      // for validation
      available_balance_cash_status: false,
      available_balance_cash_text: '',
      available_balance_text: '',
      available_balance_status: false,
      submit_button_status: true,
      available_button_status: false,
      available_text: '',
      insufficent_cash_balance_text_status: false,
      insufficent_bank_balance_text_status: false,
      insufficent_balance_text_status: false,
      insufficent_button: false,
      submit_button: true,
      // /for validation
      form: new Form({
        branchName: '',
        accNo: '',
        loanProviderTypeId: '',
        loanProviderId: '',
        interestType: '',
        loanPayTypeId: '',
        loanPayType: '',
        howMuchTime: '',
        loanMainAmount: '',
        installmentAmount: '',
        paidDate: '',
        paymentType: '',
        bankTypeEntryId: '',
        bankEntryId: '',
        bankAccountId: '',
        loanProviderLoanId: '',
        loanPaidAmount: '',
        status: 1,
        // for validation
        available_balance: '' // /for validation

      }),
      // showDataEntrys:[],
      getInterestTypeLists: [],
      getInterestTimeTypeLists: [],
      loanProviderTypeLists: [],
      loanProviderLists: [],
      getLoanPayTypeLists: [],
      showBankNames: [],
      shopBankAllDatas: [],
      corporateBankAccountTypes: [],
      mobileBankAccountTypes: [],
      loanProviderListByIds: [],
      loanProviderLoanListByIds: [],
      paymentTypeLists: [],
      showBankTypeDatas: []
    }, _defineProperty(_ref, "showBankNames", []), _defineProperty(_ref, "showBankAccounts", []), _defineProperty(_ref, "bankMoreInfo", []), _defineProperty(_ref, "invalid", false), _ref;
  },
  mounted: function mounted() {
    this.getData();
    this.paymentTypeList();
    this.showloanProviderType();
    this.getInterestTypeList();
    this.getInterestTimeTypeList();
    this.getLoanPayTypeList();
    this.showBankType();
    this.showloanProviderList();
  },
  methods: {
    create: function create() {
      var _this = this;

      this.loading = true;
      this.form.post('/addInstallment').then(function (res) {
        _this.loading = false;

        if (res.data.changebankName) {
          Toast.fire({
            icon: 'error',
            title: 'Change Your Bank Name'
          });
        } else {
          Toast.fire({
            icon: 'success',
            title: 'Loan Receive Successfully'
          });
          _this.howMuchTimeStatus = false;
          _this.loanPayTypeStatus = true;
          _this.bankInformationStatus = 0;
          _this.cashInformationStatus = 0;
          _this.bankInformationAccountInfoStatus = 0;

          _this.form.reset();

          _this.getData();
        }
      })["catch"](function (res) {
        _this.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    },
    calculate: function calculate(e) {
      var stringValue = e.target.value.toString();
      var regex = /^\d*(\.\d{1,2})?$/;

      if (!stringValue.match(regex) && this.form.installmentAmount !== "") {
        this.invalid = true;
        this.form.installmentAmount = '';
      } else {
        this.invalid = false;
      }
    },
    getData: function getData() {
      var _this2 = this;

      axios.get('/addInstallment').then(function (res) {
        _this2.shopBankAllDatas = res.data.data;
      });
    },
    getProviderInformation: function getProviderInformation() {
      var _this3 = this;

      axios.get('/getLoanProviderInformation/' + this.form.loanProviderLoanId).then(function (res) {
        _this3.form.interestType = res.data.interestType;
        _this3.form.loanPayTypeId = res.data.loanPayTypeId;
        _this3.form.loanPayType = res.data.loanPayType;
        _this3.form.interestTimeType = res.data.interestTimeType;
        _this3.form.howMuchTime = res.data.howMuchTime;
        _this3.form.loanMainAmount = res.data.loanMainAmount;
        _this3.form.installmentAmount = res.data.monthlyAmount;
        _this3.form.loanPaidAmount = res.data.loanPaidAmount;
        _this3.form.loanDueAmount = res.data.loanDueAmount;
        _this3.form.paidDate = res.data.paidDate;
        _this3.form.bankAccountId = res.data.bankAccountId;
      });
    },
    getProviderLoanInformation: function getProviderLoanInformation() {
      var _this4 = this;

      axios.get('/getLoanProviderLoanInformation/1/' + this.form.loanProviderId).then(function (res) {
        _this4.loanProviderLoanListByIds = res.data.data;
      });
    },
    showloanProviderType: function showloanProviderType() {
      var _this5 = this;

      axios.get('/getLoanProviderTypeList').then(function (res) {
        _this5.loanProviderTypeLists = res.data.data;
      });
    },
    getInterestTypeList: function getInterestTypeList() {
      var _this6 = this;

      axios.get('/getInterestTypeList/0').then(function (res) {
        _this6.getInterestTypeLists = res.data.data;
      });
    },
    getInterestTimeTypeList: function getInterestTimeTypeList() {
      var _this7 = this;

      axios.get('/getInterestTimeTypeList').then(function (res) {
        _this7.getInterestTimeTypeLists = res.data.data;
      });
    },
    getLoanPayTypeList: function getLoanPayTypeList() {
      var _this8 = this;

      axios.get('/getLoanPayTypeList/0').then(function (res) {
        _this8.getLoanPayTypeLists = res.data.data;
      });
    },
    paymentTypeList: function paymentTypeList() {
      var _this9 = this;

      axios.get('/paymentTypeList').then(function (res) {
        _this9.paymentTypeLists = res.data.data;
      });
    },
    getAmount: function getAmount() {
      if (this.form.installmentAmount > this.form.loanDueAmount) {
        this.form.installmentAmount = this.form.loanDueAmount;
      }

      this.calculate_available_balance_from_amount();
    },
    getBankMoreInfo: function getBankMoreInfo() {
      var _this10 = this;

      axios.get('/bankAccountMoreInfo/' + this.form.bankAccountId).then(function (res) {
        _this10.bankInformationAccountInfoStatus = 1;
        _this10.form.branchName = res.data.data.bankBranch;
        _this10.form.accNo = res.data.data.bankAccountNumber; //======================== check balance 

        var url = "checkBalance/" + res.data.data.accountCode;
        axios.get(url).then(function (response) {
          _this10.available_balance_status = true;
          _this10.available_balance_text = response.data.available_balance;
          _this10.form.available_balance = response.data.available_balance;

          _this10.calculate_available_balance(response.data.available_balance, 2); // bank

        }); // ---------------

        if (_this10.form.bankAmount > _this10.form.available_balance) {
          // this.insufficent_balance_text_status=true
          _this10.insufficent_bank_balance_text_status = false;
          _this10.submit_button_status = true;
          _this10.available_button_status = false;
        } else {
          _this10.insufficent_bank_balance_text_status = false;
        } // ---------------
        //======================== /check balance 

      });
    },
    paymentReceiveType: function paymentReceiveType() {
      var _this11 = this;

      this.insufficent_cash_balance_text_status = false;
      this.insufficent_bank_balance_text_status = false;
      this.available_balance_cash_status = false;

      if (this.form.paymentType == 2) {
        this.bankInformationStatus = 1;
        this.cashInformationStatus = 0;
      } else if (this.form.paymentType == 1) {
        //======================== check balance 
        axios.get('/getCashRegister/1').then(function (res) {
          var url = "checkBalance/" + res.data.accCode;
          axios.get(url).then(function (response) {
            _this11.available_balance_cash_status = true;
            _this11.form.available_balance = response.data.available_balance;

            _this11.calculate_available_balance(response.data.available_balance, 1); // cash

          });
        }); //======================== check balance 

        this.cashInformationStatus = 1;
        this.bankInformationStatus = 0;
      } else {
        this.cashInformationStatus = 0;
        this.bankInformationStatus = 0;
      }
    },
    calculate_available_balance: function calculate_available_balance(e, type) {
      this.insufficent_cash_balance_text_status = false;
      this.insufficent_bank_balance_text_status = false;
      this.insufficent_button = false;
      this.submit_button = true; // ------------- cash condition

      if (type == 1) {
        if (this.form.installmentAmount > e) {
          this.insufficent_cash_balance_text_status = true;
          this.insufficent_button = true;
          this.submit_button = false;
        } else {
          this.insufficent_cash_balance_text_status = false;
          this.insufficent_button = false;
          this.submit_button = true;
        }
      } // ------------- cash condition
      // ------------- Bank condition


      if (type == 2) {
        if (this.form.installmentAmount > e) {
          this.insufficent_bank_balance_text_status = true;
          this.insufficent_button = true;
          this.submit_button = false;
        } else {
          this.insufficent_bank_balance_text_status = false;
          this.insufficent_button = false;
          this.submit_button = true;
        }
      } // ------------- /Bank condition

    },
    calculate_available_balance_from_amount: function calculate_available_balance_from_amount() {
      this.insufficent_cash_balance_text_status = false;
      this.insufficent_bank_balance_text_status = false;
      this.insufficent_button = false;
      this.submit_button = true; // ------------- cash condition

      if (this.form.paymentType == 1) {
        if (this.form.installmentAmount > this.form.available_balance) {
          this.insufficent_cash_balance_text_status = true;
          this.insufficent_bank_balance_text_status = false;
          this.insufficent_button = true;
          this.submit_button = false;
        } else {
          this.insufficent_cash_balance_text_status = false;
          this.insufficent_bank_balance_text_status = false;
          this.insufficent_button = false;
          this.submit_button = true;
        }
      } // ------------- cash condition
      // ------------- bank condition


      if (this.form.paymentType == 2) {
        if (this.form.installmentAmount > this.form.available_balance) {
          this.insufficent_cash_balance_text_status = false;
          this.insufficent_bank_balance_text_status = true;
          this.insufficent_button = true;
          this.submit_button = false;
        } else {
          this.insufficent_cash_balance_text_status = false;
          this.insufficent_bank_balance_text_status = false;
          this.insufficent_button = false;
          this.submit_button = true;
        }
      } // ------------- /bank condition

    },
    showBankType: function showBankType() {
      var _this12 = this;

      axios.get('/bankTypeEntryList').then(function (res) {
        _this12.showBankTypeDatas = res.data.show;
      });
    },
    showloanProviderList: function showloanProviderList() {
      var _this13 = this;

      axios.get('/addLoanProvider').then(function (res) {
        _this13.loanProviderLists = res.data.data;
      });
    },
    bankTypeIdCatch: function bankTypeIdCatch() {
      var _this14 = this;

      axios.get('/bankNameList/' + this.form.bankTypeEntryId).then(function (res) {
        _this14.showBankNames = res.data.show;
      });
    },
    bankAccountIdCatch: function bankAccountIdCatch() {
      var _this15 = this;

      axios.get('/bankAccountListWithCard/' + this.form.bankEntryId + '/' + this.form.bankTypeEntryId).then(function (res) {
        _this15.showBankAccounts = res.data.data;
      });
    },
    loanProviderTypeIdCatch: function loanProviderTypeIdCatch() {
      var _this16 = this;

      if (this.form.loanProviderTypeId > 1) {
        axios.get('/getInterestTypeList/1').then(function (res) {
          _this16.getInterestTypeLists = res.data.data;
        });
      } else {
        axios.get('/getInterestTypeList/0').then(function (res) {
          _this16.getInterestTypeLists = res.data.data;
        });
      }

      axios.get('/loanProviderListById/1/' + this.form.loanProviderTypeId).then(function (res) {
        //alert(this.form.loanProviderTypeId);
        _this16.loanProviderListByIds = res.data.data;
      });
    },
    interestType: function interestType() {
      var _this17 = this;

      if (this.form.loanProviderTypeId == 1) {
        if (this.form.interestType == 1) {
          this.loanPayTypeStatus = true;
        } else {
          this.loanPayTypeStatus = false;
        }
      } else {
        axios.get('/getLoanPayTypeList/1').then(function (res) {
          _this17.getLoanPayTypeLists = res.data.data;
        });
        this.loanPayTypeStatus = true;
      }
    },
    interestTime: function interestTime() {
      this.month = this.form.interestTimeType;

      if (this.form.interestTimeType == 1) {
        this.paidDateText = 'Paid Date';
      } else if (this.form.interestTimeType == 2) {
        this.paidDateText = 'Weekly Day Name';
      } else if (this.form.interestTimeType == 3) {
        this.paidDateText = 'Paid Date';
      } else if (this.form.interestTimeType == 3) {
        this.paidDateText = 'Month Name';
      }

      if (this.form.loanPayType == 1) {
        if (this.form.loanPayType == 1) {
          this.howMuchTimeStatus = true;
        } else {
          this.howMuchTimeStatus = false;
        }
      } else {
        this.howMuchTimeStatus = false;
      }
    },
    deleteBankEntry: function deleteBankEntry(bankId) {
      var _this18 = this;

      axios["delete"]('/addBank/' + bankId).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Shop BankEntry Deleted Successfully'
        });

        _this18.getData();
      });
    },
    changeStatus: function changeStatus(bankId) {
      var _this19 = this;

      axios.get('/addBank/' + bankId).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Shop Bank Status Changed Successfully'
        });

        _this19.getData();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/loanInstalmentEntry.vue?vue&type=template&id=32f39b6e&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/entry/loanInstalmentEntry.vue?vue&type=template&id=32f39b6e& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
        "div",
        { staticClass: "supplier-entry py-4 px-2  comm-form-back-img" },
        [
          _c(
            "div",
            {
              staticClass:
                "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color"
            },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.create()
                    }
                  }
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { to: "/loanManagement" }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "bi bi-arrow-left",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            fill: "currentColor",
                            viewBox: "0 0 16 16"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              d:
                                "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                            }
                          })
                        ]
                      ),
                      _vm._v("\n              Back ")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.loanProviderTypeId,
                              expression: "form.loanProviderTypeId"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has(
                              "loanProviderTypeId"
                            )
                          },
                          attrs: { name: "loanProviderTypeId" },
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
                                  "loanProviderTypeId",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                $event.preventDefault()
                                return _vm.loanProviderTypeIdCatch()
                              }
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select One")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.loanProviderTypeLists, function(
                            loanProviderTypeList
                          ) {
                            return _c(
                              "option",
                              { domProps: { value: loanProviderTypeList.id } },
                              [_vm._v(" " + _vm._s(loanProviderTypeList.type))]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "loanProviderTypeId" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.loanProviderId,
                              expression: "form.loanProviderId"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("loanProviderId")
                          },
                          attrs: { name: "loanProviderId" },
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
                                  "loanProviderId",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                return _vm.getProviderLoanInformation()
                              }
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select One")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.loanProviderListByIds, function(
                            loanProviderListById
                          ) {
                            return _c(
                              "option",
                              { domProps: { value: loanProviderListById.id } },
                              [
                                _vm._v(
                                  " \n                    " +
                                    _vm._s(loanProviderListById.providerName) +
                                    "\n                    "
                                ),
                                loanProviderListById.providerBranchName
                                  ? _c("span", [
                                      _vm._v(
                                        "\n                         (" +
                                          _vm._s(
                                            loanProviderListById.providerBranchName
                                          ) +
                                          ")\n                    "
                                      )
                                    ])
                                  : _vm._e()
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "loanProviderId" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _vm._m(3),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.loanProviderLoanId,
                              expression: "form.loanProviderLoanId"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has(
                              "loanProviderLoanId"
                            )
                          },
                          attrs: { name: "loanProviderLoanId" },
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
                                  "loanProviderLoanId",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                return _vm.getProviderInformation()
                              }
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select One")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.loanProviderLoanListByIds, function(
                            loanProviderLoanListById
                          ) {
                            return _c(
                              "option",
                              {
                                domProps: { value: loanProviderLoanListById.id }
                              },
                              [
                                _vm._v(
                                  " \n                    " +
                                    _vm._s(
                                      loanProviderLoanListById.loanMainAmount
                                    ) +
                                    "\n                    \n                      (" +
                                    _vm._s(
                                      _vm
                                        .moment(
                                          loanProviderLoanListById.created_at
                                        )
                                        .format("DD MMMM YYYY")
                                    ) +
                                    ")\n                    \n                    "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "loanProviderLoanId" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "form-group col-md-12" },
                      [
                        _c("label", [_vm._v(" Interest Type ")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.interestType,
                              expression: "form.interestType"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("interestType")
                          },
                          attrs: {
                            type: "text",
                            readonly: "",
                            name: "interestType"
                          },
                          domProps: { value: _vm.form.interestType },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "interestType",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "interestType" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group col-12" },
                      [
                        _c("label", [_vm._v(" Loan Pay Type ")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.loanPayTypeId,
                              expression: "form.loanPayTypeId"
                            }
                          ],
                          attrs: { type: "hidden" },
                          domProps: { value: _vm.form.loanPayTypeId },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "loanPayTypeId",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.loanPayType,
                              expression: "form.loanPayType"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("loanPayType")
                          },
                          attrs: {
                            type: "text",
                            readonly: "",
                            name: "loanPayType"
                          },
                          domProps: { value: _vm.form.loanPayType },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "loanPayType",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "loanPayType" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group col-12" },
                      [
                        _c("label", [_vm._v(" Interest Time Type ")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.interestTimeType,
                              expression: "form.interestTimeType"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has(
                              "interestTimeType"
                            )
                          },
                          attrs: {
                            type: "text",
                            readonly: "",
                            name: "interestTimeType"
                          },
                          domProps: { value: _vm.form.interestTimeType },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "interestTimeType",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "interestTimeType" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-12" }, [
                      _c("label", [_vm._v(" How much time ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.howMuchTime,
                            expression: "form.howMuchTime"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          readonly: "",
                          name: "howMuchTime"
                        },
                        domProps: { value: _vm.form.howMuchTime },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "howMuchTime",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group col-12" },
                      [
                        _vm._m(4),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.loanMainAmount,
                              expression: "form.loanMainAmount"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("loanMainAmount")
                          },
                          attrs: {
                            type: "text",
                            readonly: "",
                            name: "loanMainAmount"
                          },
                          domProps: { value: _vm.form.loanMainAmount },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "loanMainAmount",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "loanMainAmount" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-12" }, [
                      _c("label", [_vm._v(" Paid Amount ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.loanPaidAmount,
                            expression: "form.loanPaidAmount"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", readonly: "", name: "paidDate" },
                        domProps: { value: _vm.form.loanPaidAmount },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "loanPaidAmount",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-12" }, [
                      _c("label", [_vm._v(" Due Amount ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.loanDueAmount,
                            expression: "form.loanDueAmount"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", readonly: "", name: "paidDate" },
                        domProps: { value: _vm.form.loanDueAmount },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "loanDueAmount",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group col-12" },
                      [
                        _c("label", [
                          _vm._v(" " + _vm._s(_vm.paidDateText) + " ")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.paidDate,
                              expression: "form.paidDate"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("paidDate")
                          },
                          attrs: {
                            type: "date",
                            readonly: "",
                            name: "paidDate"
                          },
                          domProps: { value: _vm.form.paidDate },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "paidDate",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "paidDate" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group col-12" },
                      [
                        _vm._m(5),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.installmentAmount,
                              expression: "form.installmentAmount"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has(
                              "installmentAmount"
                            )
                          },
                          attrs: {
                            type: "text",
                            name: "installmentAmount",
                            autocomplete: "off"
                          },
                          domProps: { value: _vm.form.installmentAmount },
                          on: {
                            keyup: [
                              function($event) {
                                $event.preventDefault()
                                return _vm.getAmount()
                              },
                              _vm.calculate
                            ],
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "installmentAmount",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "installmentAmount" }
                        }),
                        _vm._v(" "),
                        _vm.invalid
                          ? _c("span", { staticStyle: { color: "red" } }, [
                              _vm._v("Negative and Character value Not Allowed")
                            ])
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group col-md-12" },
                      [
                        _c("label", [
                          _vm._v(" Payment  Type \n                    "),
                          _vm.available_balance_cash_status
                            ? _c(
                                "span",
                                { staticClass: "badge badge-primary" },
                                [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(_vm.form.available_balance) +
                                      "\n                  "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("i", {
                            staticClass:
                              "fa fa-star text-danger text-10 cursor-pointer",
                            attrs: {
                              title: "Mendatory Field",
                              "data-placement": "top",
                              "data-toggle": "tooltip",
                              "data-original-title": "Mendatory Field"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.paymentType,
                                expression: "form.paymentType"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("paymentType")
                            },
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
                                    "paymentType",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  return _vm.paymentReceiveType()
                                }
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v(" Select Payment Type ")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.paymentTypeLists, function(
                              paymentTypeList
                            ) {
                              return _c(
                                "option",
                                { domProps: { value: paymentTypeList.id } },
                                [
                                  _vm._v(
                                    " " + _vm._s(paymentTypeList.paymentType)
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "paymentType" }
                        }),
                        _vm._v(" "),
                        _vm.insufficent_cash_balance_text_status
                          ? _c("small", { staticClass: "badge badge-danger" }, [
                              _vm._v(
                                "\n                    Insufficient Balance\n                  "
                              )
                            ])
                          : _vm._e()
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _vm.cashInformationStatus
                    ? _c("div", [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v(" Person Name")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.personName,
                                  expression: "form.personName"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("personName")
                              },
                              attrs: { type: "text", name: "personName" },
                              domProps: { value: _vm.form.personName },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "personName",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "personName" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v(" Person Mobile No")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.personMobileNo,
                                  expression: "form.personMobileNo"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has(
                                  "personMobileNo"
                                )
                              },
                              attrs: { type: "text", name: "personMobileNo" },
                              domProps: { value: _vm.form.personMobileNo },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "personMobileNo",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "personMobileNo" }
                            })
                          ],
                          1
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.bankInformationStatus
                    ? _c("div", [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v("Bank Type Name")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.bankTypeEntryId,
                                    expression: "form.bankTypeEntryId"
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
                                        "bankTypeEntryId",
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
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Select One")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.showBankTypeDatas, function(
                                  showBankTypeData
                                ) {
                                  return _c(
                                    "option",
                                    {
                                      domProps: {
                                        value: showBankTypeData.bankTypeEntryId
                                      }
                                    },
                                    [
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            showBankTypeData.bankTypeEntryName
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
                            _c("label", [_vm._v("Bank Name")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.bankEntryId,
                                    expression: "form.bankEntryId"
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
                                        "bankEntryId",
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
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Select Bank Name")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.showBankNames, function(
                                  showBankName
                                ) {
                                  return _c(
                                    "option",
                                    {
                                      domProps: {
                                        value: showBankName.bankEntryId
                                      }
                                    },
                                    [
                                      _vm._v(
                                        " " + _vm._s(showBankName.bankName)
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "bankEntryId" }
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
                              _vm._v("Bank Account\n                   "),
                              _vm.available_balance_status
                                ? _c(
                                    "span",
                                    { staticClass: "badge badge-primary" },
                                    [
                                      _vm._v(
                                        "\n                   " +
                                          _vm._s(_vm.available_balance_text) +
                                          "\n                 "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.bankAccountId,
                                    expression: "form.bankAccountId"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "bankAccountId"
                                  )
                                },
                                attrs: { name: "bankAccountId" },
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
                                        "bankAccountId",
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
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Select Bank Account")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.showBankAccounts, function(
                                  showBankAccount
                                ) {
                                  return _c(
                                    "option",
                                    {
                                      domProps: {
                                        value: showBankAccount.bankId
                                      }
                                    },
                                    [
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            showBankAccount.bankAccountNumber
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
                              attrs: { form: _vm.form, field: "bankAccountId" }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.available_balance,
                                  expression: "form.available_balance"
                                }
                              ],
                              attrs: { type: "hidden" },
                              domProps: { value: _vm.form.available_balance },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "available_balance",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.insufficent_bank_balance_text_status
                              ? _c(
                                  "small",
                                  { staticClass: "badge badge-danger" },
                                  [
                                    _vm._v(
                                      "\n                  Insufficient Balance\n                "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.bankInformationAccountInfoStatus
                          ? _c("div", [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", [_vm._v(" Branch Name ")]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.branchName,
                                      expression: "form.branchName"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", readonly: "" },
                                  domProps: { value: _vm.form.branchName },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "branchName",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", [_vm._v(" Account No ")]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.accNo,
                                      expression: "form.accNo"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", readonly: "" },
                                  domProps: { value: _vm.form.accNo },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "accNo",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ])
                          : _vm._e()
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _vm._m(6),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.note,
                            expression: "form.note"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("note") },
                        attrs: { name: "note" },
                        domProps: { value: _vm.form.note },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "note", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "note" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-right pt-3" }, [
                    _vm.submit_button
                      ? _c(
                          "button",
                          {
                            staticClass:
                              "mr-2 btn-pill btn-hover-shine btn btn-primary",
                            attrs: { type: "submit", disabled: _vm.loading }
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
                              : _c("span", { staticClass: "mr-2 opacity-7" }, [
                                  _c("i", { staticClass: "fa fa-paper-plane" })
                                ]),
                            _vm._v("\n              Submit")
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.insufficent_button
                      ? _c(
                          "button",
                          {
                            staticClass:
                              "mr-2 btn-pill btn-hover-shine btn btn-danger",
                            attrs: { type: "button" }
                          },
                          [_vm._v("\n              Submit")]
                        )
                      : _vm._e()
                  ])
                ],
                1
              )
            ]
          )
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
    return _c("div", { staticClass: "card-header alert-info" }, [
      _c("h3", { staticStyle: { color: "black" } }, [
        _vm._v(" Loan Instalment Pay ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Loan Provider Type "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
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
    return _c("label", [
      _vm._v(" Loan Provider "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
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
    return _c("label", [
      _vm._v(" Loan  "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
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
    return _c("label", [
      _vm._v(" Loan Amount "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
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
    return _c("label", [
      _vm._v("   \n                   Installment Amount "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
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
    return _c("label", [
      _vm._v(" Note "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mendatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mendatory Field"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/loanInstalmentEntry.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/loanInstalmentEntry.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loanInstalmentEntry_vue_vue_type_template_id_32f39b6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loanInstalmentEntry.vue?vue&type=template&id=32f39b6e& */ "./resources/js/admin/page/accounting/entry/loanInstalmentEntry.vue?vue&type=template&id=32f39b6e&");
/* harmony import */ var _loanInstalmentEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loanInstalmentEntry.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/accounting/entry/loanInstalmentEntry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _loanInstalmentEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _loanInstalmentEntry_vue_vue_type_template_id_32f39b6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _loanInstalmentEntry_vue_vue_type_template_id_32f39b6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/accounting/entry/loanInstalmentEntry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/loanInstalmentEntry.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/loanInstalmentEntry.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loanInstalmentEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./loanInstalmentEntry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/loanInstalmentEntry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loanInstalmentEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/loanInstalmentEntry.vue?vue&type=template&id=32f39b6e&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/loanInstalmentEntry.vue?vue&type=template&id=32f39b6e& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loanInstalmentEntry_vue_vue_type_template_id_32f39b6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./loanInstalmentEntry.vue?vue&type=template&id=32f39b6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/loanInstalmentEntry.vue?vue&type=template&id=32f39b6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loanInstalmentEntry_vue_vue_type_template_id_32f39b6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loanInstalmentEntry_vue_vue_type_template_id_32f39b6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);