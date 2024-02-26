(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["share capital"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/share@capital.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/entry/share@capital.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      valid1: false,
      loading: false,
      expenseTypeLists: [],
      expenseHeadListByIds: [],
      expenseHeadLists: [],
      getCompanyByType: [],
      paidDateText: '',
      totalAmountText: '',
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
      totalAmountRowStatus: 0,
      expenseCompanyLists: [],
      datas: [],
      chartOfAccounts: [],
      expensePurposeLists: [],
      expenseDetailsLists: [],
      subHeadStatus: 0,
      bankInformationStatus: 0,
      cashInformationStatus: 0,
      bankInformationAccountInfoStatus: 0,
      headOfAccountLists: [],
      subHeadOfAccountLists: [],
      form: new Form({
        rendomNumber: Math.random(1, 1000),
        authorizeShare: '',
        perShareValue: '',
        authorizeCapital: '',
        shareUse: '',
        totalShare: '',
        ownerTypeId: '',
        voucherType: '',
        headOfAccounts: '',
        subHead: '',
        subHeadMulti: '',
        item: '',
        itemAmount: '',
        expenseHead: '',
        expenseType: '',
        expenseAmount: '',
        expenseCompany: '',
        expensePurpous: '',
        mobileNo: '',
        type: '',
        companyId: '',
        email: '',
        address: '',
        note: '',
        // for validation
        available_balance: '',
        // /for validation
        lastBalance: '',
        cashAmount: '',
        bankAmount: '',
        dueAmount: '',
        branchName: '',
        accNo: '',
        paymentType: '',
        bankTypeEntryId: '',
        bankEntryId: '',
        bankAccountId: '',
        detailsTotalAmount: ''
      }),
      companyTypes: [{
        id: 1,
        name: 'Owner'
      }],
      //  { id: 2, name: 'Investor' }
      companyLists: [],
      ownerLists: [],
      showBankNames: [],
      shopBankAllDatas: [],
      corporateBankAccountTypes: [],
      mobileBankAccountTypes: [],
      paymentTypeLists: [],
      showBankTypeDatas: []
    }, _defineProperty(_ref, "showBankNames", []), _defineProperty(_ref, "showBankAccounts", []), _defineProperty(_ref, "bankMoreInfo", []), _defineProperty(_ref, "authInfo", []), _defineProperty(_ref, "limitedCompanyInformation", false), _ref;
  },
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  mounted: function mounted() {
    this.getData();
    this.expenseTypeList();
    this.expenseCompanyList();
    this.getexpenseHeadList();
    this.chartOfAccount();
    this.condition();
  },
  methods: {
    toatlShareCalculation: function toatlShareCalculation() {
      var useShare = parseFloat(this.form.shareUse);
      var totalshare = parseFloat(this.form.totalShare);
      var availableShare = totalshare - useShare;
      var shareAmount = parseFloat(this.form.authorizeShare);
      var valueAmount = parseFloat(this.form.perShareValue);
      var useableAmount = availableShare - shareAmount; //alert(useableAmount);

      if (useableAmount >= 0) {
        if (shareAmount > 0) {
          this.form.authorizeCapital = shareAmount * valueAmount;
          this.form.amount = shareAmount * valueAmount;
        }
      } else {
        this.form.authorizeShare = availableShare;
        this.form.authorizeCapital = availableShare * valueAmount;
        this.form.amount = availableShare * valueAmount;
      }
    },
    condition: function condition() {
      var _this = this;

      axios.get('/condition').then(function (res) {
        _this.authInfo = res.data.authInfo;
        _this.form.perShareValue = res.data.authInfo.perShareValue;
        _this.form.shareUse = res.data.authInfo.shareUse;
        _this.form.totalShare = res.data.authInfo.authorizeShare;

        if (res.data.authInfo.shopLicenceTypeId > 2) {
          _this.limitedCompanyInformation = true;
        } else {
          _this.limitedCompanyInformation = false;
        }
      });
    },
    clearForm: function clearForm() {
      this.form.subHeadMulti = '';
      this.available_balance_cash_status = false;
    },
    create: function create() {
      var _this2 = this;

      this.loading = true;
      this.form.post('/shareCapitalEntry').then(function (res) {
        _this2.loading = false;
        Toast.fire({
          icon: 'success',
          title: 'Entry Successfully'
        });

        _this2.form.reset();

        _this2.form.rendomNumber = Math.random(1, 1000);

        _this2.getData();

        _this2.getExpenseDetailsList(0);
      })["catch"](function (res) {
        _this2.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    },
    changeCompanyType: function changeCompanyType() {
      var _this3 = this;

      axios.get('getCompanyOwnerByType/' + this.form.ownerTypeId).then(function (response) {
        _this3.subHeadStatus = true;
        _this3.subHeadOfAccountLists = response.data.data;
      });
    },
    getSubHeadOfAccounts: function getSubHeadOfAccounts() {
      var _this4 = this;

      this.form.subHead = ''; // get voucher head code

      var url = "getSubHeadOfAccounts/" + this.form.headOfAccounts;
      axios.get(url).then(function (response) {
        _this4.subHeadStatus = true;
        _this4.subHeadOfAccountLists = response.data.subHeadList;
      }); // get voucher head code
    },
    calculateAmount: function calculateAmount(id) {
      this.form.dueAmount = this.form.expenseAmount - (this.form.cashAmount + this.form.bankAmount);
    },
    calculate: function calculate(e) {
      var stringValue = e.target.value.toString();
      var regex = /^\d*(\.\d{1,2})?$/;

      if (!stringValue.match(regex) && this.form.amount !== "") {
        this.valid1 = true;
        this.form.amount = '';
      } else {
        this.valid1 = false;
      }
    },
    getCompanyByTypes: function getCompanyByTypes() {
      var _this5 = this;

      axios.get('getIncomeExpenseCompanyByIEType/' + this.form.type).then(function (res) {
        _this5.companyLists = res.data.data;
      });
    },
    bankTypeIdCatch: function bankTypeIdCatch() {
      var _this6 = this;

      axios.get('/bankNameList/' + this.form.bankTypeEntryId).then(function (res) {
        _this6.showBankNames = res.data.show;
      });
    },
    bankAccountIdCatch: function bankAccountIdCatch() {
      var _this7 = this;

      axios.get('/bankAccountListWithCard/' + this.form.bankEntryId + '/' + this.form.bankTypeEntryId).then(function (res) {
        _this7.showBankAccounts = res.data.data;
      });
    },
    getBankMoreInfo: function getBankMoreInfo() {
      var _this8 = this;

      axios.get('/bankAccountMoreInfo/' + this.form.bankAccountId).then(function (res) {
        _this8.bankInformationAccountInfoStatus = 1;
        _this8.form.branchName = res.data.data.bankBranch;
        _this8.form.accNo = res.data.data.bankAccountNumber; //======================== check balance 

        if (_this8.form.voucherType == 1) {
          var url = "checkBalance/" + res.data.data.accountCode;
          axios.get(url).then(function (response) {
            _this8.available_balance_status = true;
            _this8.available_balance_text = response.data.available_balance;
            _this8.form.available_balance = response.data.available_balance;

            _this8.calculate_available_balance(response.data.available_balance, 2); // bank

          }); // ---------------

          if (_this8.form.amount > _this8.form.available_balance) {
            // this.insufficent_balance_text_status=true
            _this8.insufficent_bank_balance_text_status = false;
            _this8.submit_button_status = true;
            _this8.available_button_status = false;
          } else {
            _this8.insufficent_bank_balance_text_status = false;
          } // ---------------

        } //======================== /check balance 

      });
    },
    paymentReceiveType: function paymentReceiveType() {
      var _this9 = this;

      this.insufficent_cash_balance_text_status = false;
      this.insufficent_bank_balance_text_status = false;
      this.available_balance_cash_status = false;

      if (this.form.paymentType == 2) {
        this.bankInformationStatus = 1;
        this.cashInformationStatus = 0;
      } else if (this.form.paymentType == 1) {
        //======================== check balance 
        if (this.form.voucherType == 1) {
          axios.get('/getCashRegister/1').then(function (res) {
            var url = "checkBalance/" + res.data.accCode;
            axios.get(url).then(function (response) {
              _this9.available_balance_cash_status = true;
              _this9.form.available_balance = response.data.available_balance;

              _this9.calculate_available_balance(response.data.available_balance, 1); // cash

            });
          });
        } //======================== check balance 


        this.cashInformationStatus = 1;
        this.bankInformationStatus = 0;
      } else {
        this.available_balance_cash_status = false;
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
        if (this.form.amount > e) {
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
        if (this.form.amount > e) {
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

      if (this.form.amount > this.form.available_balance) {
        if (this.form.paymentType == 1) {
          this.insufficent_cash_balance_text_status = true;
          this.insufficent_bank_balance_text_status = false;
        } else {
          this.insufficent_cash_balance_text_status = false;
          this.insufficent_bank_balance_text_status = true;
        }

        this.insufficent_button = true;
        this.submit_button = false;
      } else {
        this.insufficent_cash_balance_text_status = false;
        this.insufficent_bank_balance_text_status = false;
        this.insufficent_button = false;
        this.submit_button = true;
      } // ------------- cash condition

    },
    expenseTypeList: function expenseTypeList() {
      var _this10 = this;

      var uri = "expenseTypeList";
      axios.get(uri).then(function (response) {
        _this10.expenseTypeLists = response.data.data;
      });
    },
    getData: function getData() {
      var _this11 = this;

      axios.get('/bankTypeEntryList').then(function (res) {
        _this11.showBankTypeDatas = res.data.show;
      }), axios.get('/paymentTypeList').then(function (res) {
        _this11.paymentTypeLists = res.data.data;
      }), axios.get('/addExpense').then(function (res) {
        _this11.datas = res.data.data;
      });
    },
    expenseCompanyList: function expenseCompanyList() {
      var _this12 = this;

      axios.get('/addIncomeExpenseCompany').then(function (res) {
        _this12.expenseCompanyLists = res.data.data;
      });
    },
    expensePurposeList: function expensePurposeList() {
      var _this13 = this;

      axios.get('/getExpensePurposeListById/' + this.form.expenseHead).then(function (res) {
        _this13.expensePurposeLists = res.data.data;
      });
    },
    getAmount: function getAmount() {
      var enterAmount = this.form.lastBalance - this.form.amount; // alert(enterAmount);
      // if(this.form.type==2){

      if (enterAmount >= 0) {
        this.form.dueAmount = this.form.lastBalance - this.form.amount;
      } else {
        this.form.dueAmount = 0;
        this.form.amount = this.form.lastBalance;
      } // }


      chec;

      if (this.form.voucherType == 1) {
        this.calculate_available_balance_from_amount();
      }
    },
    getDetailsData: function getDetailsData() {
      this.getExpenseDetailsList(this.form.expensePurpous);
    },
    getExpenseDetailsList: function getExpenseDetailsList(id) {
      var _this14 = this;

      axios.get('/getExpenseDetailsListById/' + id).then(function (res) {
        _this14.expenseDetailsLists = res.data.data;
        _this14.form.expenseAmount = res.data.totalAmount;
        _this14.form.dueAmount = res.data.totalAmount;
        _this14.totalAmountText = res.data.totalAmount;
        _this14.totalAmountRowStatus = res.data.totalAmount;
      });
    },
    expenseItemAdd: function expenseItemAdd(id) {
      var _this15 = this;

      if (this.form.item && this.form.itemAmount) {
        axios.get('/addExpenseDetailsItem/' + this.form.rendomNumber + '/' + this.form.expensePurpous + '/' + this.form.item + '/' + this.form.itemAmount).then(function (res) {
          if (res.data.status) {
            Toast.fire({
              icon: 'success',
              title: 'Item Add Successfull'
            });
            _this15.form.item = '', _this15.form.itemAmount = '';

            _this15.getExpenseDetailsList(_this15.form.expensePurpous);
          } else {
            Toast.fire({
              icon: 'error',
              title: 'Item Not Add'
            });
          }
        });
      } else {
        if (id == 1) {
          Toast.fire({
            icon: 'error',
            title: 'Please enter your item and value'
          });
        }
      }
    },
    deleteExpenseDetailItem: function deleteExpenseDetailItem(id) {
      var _this16 = this;

      axios.get('/deleteExpenseDetailsItem/' + id).then(function (res) {
        if (res.data.status) {
          Toast.fire({
            icon: 'success',
            title: 'Item Delete Successfull'
          });
          _this16.form.item = '', _this16.form.itemAmount = '';

          _this16.getExpenseDetailsList(_this16.form.expensePurpous);
        } else {
          Toast.fire({
            icon: 'error',
            title: 'Item Not Delete'
          });
        }
      });
    },
    chartOfAccount: function chartOfAccount() {
      var _this17 = this;

      axios.get('/chartOfAccount').then(function (res) {
        _this17.chartOfAccounts = res.data.chartOfAccounts;
      });
    },
    getexpenseHead: function getexpenseHead() {
      var _this18 = this;

      axios.get('/getExpenseHeadList/' + this.form.expenseType).then(function (res) {
        _this18.expenseHeadListByIds = res.data.data;
      });
    },
    getexpenseHeadList: function getexpenseHeadList() {
      var _this19 = this;

      axios.get('/addexpenseType/').then(function (res) {
        _this19.expenseHeadLists = res.data.data;
      });
    },
    getLastBalance: function getLastBalance(value) {
      var _this20 = this;

      // alert(value.headCode); 
      this.form.subHead = value.headCode;
      this.condition();
      axios.get('getLastBalanceByAccCode/' + this.form.subHead).then(function (res) {
        _this20.form.lastBalance = res.data.balance;
        _this20.headOfAccountLists = res.data.headAcc;
        _this20.form.headOfAccounts = res.data.precode;
      });
    },
    deleteData: function deleteData(id) {
      var _this21 = this;

      axios["delete"]('/addExpense/' + id).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Delete Successfull'
        });

        _this21.getData();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/share@capital.vue?vue&type=template&id=78db5e3c&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/entry/share@capital.vue?vue&type=template&id=78db5e3c& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
              return _vm.create()
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "supplier-entry py-4 px-2 comm-form-back-img" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color"
                },
                [
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
                              value: _vm.form.ownerTypeId,
                              expression: "form.ownerTypeId"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("ownerTypeId")
                          },
                          attrs: { name: "ownerTypeId" },
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
                                  "ownerTypeId",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                $event.preventDefault()
                                return _vm.changeCompanyType()
                              }
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v(" ------ ")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.companyTypes, function(companyType) {
                            return _c(
                              "option",
                              {
                                key: companyType.id,
                                domProps: { value: companyType.id }
                              },
                              [_vm._v(" " + _vm._s(companyType.name) + "  ")]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "ownerTypeId" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.subHeadStatus
                    ? _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _vm._m(2),
                          _vm._v(" "),
                          _c("multiselect", {
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has(
                                "productSupplierId"
                              )
                            },
                            staticStyle: {
                              padding: "0px !important",
                              "padding-bottom": "3px !important"
                            },
                            attrs: {
                              label: "shopOwnerName",
                              placeholder: "-------",
                              options: _vm.subHeadOfAccountLists,
                              "show-labels": false
                            },
                            on: { input: _vm.getLastBalance },
                            model: {
                              value: _vm.form.subHeadMulti,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "subHeadMulti", $$v)
                              },
                              expression: "form.subHeadMulti"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.subHead,
                                  expression: "form.subHead"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("subHead")
                              },
                              staticStyle: { display: "none" },
                              on: {
                                change: function($event) {
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
                                    "subHead",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            _vm._l(_vm.subHeadOfAccountLists, function(
                              subHeadOfAccountList
                            ) {
                              return _c(
                                "option",
                                {
                                  domProps: {
                                    value: subHeadOfAccountList.headCode
                                  }
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(subHeadOfAccountList.headName) +
                                      " "
                                  )
                                ]
                              )
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "subHead" }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _vm._m(3),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.lastBalance,
                                    expression: "form.lastBalance"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "lastBalance"
                                  )
                                },
                                attrs: {
                                  type: "text",
                                  readonly: "",
                                  name: "lastBalance"
                                },
                                domProps: { value: _vm.form.lastBalance },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "lastBalance",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "lastBalance" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.limitedCompanyInformation
                            ? _c("div", [
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _vm._m(4),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.shareUse,
                                          expression: "form.shareUse"
                                        }
                                      ],
                                      attrs: { type: "hidden" },
                                      domProps: { value: _vm.form.shareUse },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "shareUse",
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
                                          value: _vm.form.totalShare,
                                          expression: "form.totalShare"
                                        }
                                      ],
                                      attrs: { type: "hidden" },
                                      domProps: { value: _vm.form.totalShare },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "totalShare",
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
                                          value: _vm.form.authorizeShare,
                                          expression: "form.authorizeShare"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "authorizeShare"
                                        )
                                      },
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.form.authorizeShare
                                      },
                                      on: {
                                        keyup: function($event) {
                                          return _vm.toatlShareCalculation()
                                        },
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "authorizeShare",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "authorizeShare"
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
                                    _vm._m(5),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.perShareValue,
                                          expression: "form.perShareValue"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "perShareValue"
                                        )
                                      },
                                      attrs: { type: "text", disabled: "" },
                                      domProps: {
                                        value: _vm.form.perShareValue
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "perShareValue",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "perShareValue"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            : _vm._e()
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
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
                            value: _vm.form.amount,
                            expression: "form.amount"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("amount") },
                        attrs: {
                          type: "text",
                          autocomplete: "off",
                          name: "amount",
                          min: "0"
                        },
                        domProps: { value: _vm.form.amount },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "amount", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "amount" }
                      }),
                      _vm._v(" "),
                      _vm.valid1
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
                    { staticClass: "form-group" },
                    [
                      _vm._m(7),
                      _vm._v(" "),
                      _vm.available_balance_cash_status
                        ? _c("span", { staticClass: "badge badge-primary" }, [
                            _vm._v(
                              "\n                     " +
                                _vm._s(_vm.form.available_balance) +
                                "\n                   "
                            )
                          ])
                        : _vm._e(),
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
                                    var val = "_value" in o ? o._value : o.value
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
                            return paymentTypeList.id < 3
                              ? _c(
                                  "option",
                                  { domProps: { value: paymentTypeList.id } },
                                  [
                                    _vm._v(
                                      " " + _vm._s(paymentTypeList.paymentType)
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
                        attrs: { form: _vm.form, field: "paymentType" }
                      }),
                      _vm._v(" "),
                      _vm.insufficent_cash_balance_text_status
                        ? _c("small", { staticClass: "badge badge-danger" }, [
                            _vm._v(
                              "\n                     Insufficent Balance\n                   "
                            )
                          ])
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.cashInformationStatus
                    ? _c("div", [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v(" Person Name ")]),
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
                            _c("label", [_vm._v(" Person Mobile No ")]),
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
                                        " \n                     " +
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
                            _c("label", [_vm._v(" Bank Name ")]),
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
                              _vm._v(" Account No\n                  "),
                              _vm.available_balance_status
                                ? _c(
                                    "span",
                                    { staticClass: "badge badge-primary" },
                                    [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(_vm.available_balance_text) +
                                          "\n                  "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]),
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
                                      showBankAccount.bankAccountName
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                      " +
                                                _vm._s(
                                                  showBankAccount.bankAccountName
                                                ) +
                                                " (" +
                                                _vm._s(
                                                  showBankAccount.bankAccountNumber
                                                ) +
                                                ")"
                                            )
                                          ])
                                        : _c("span", [
                                            _vm._v(
                                              "\n                      " +
                                                _vm._s(
                                                  showBankAccount.bankAccountNumber
                                                ) +
                                                " "
                                            )
                                          ])
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
                            _vm.insufficent_bank_balance_text_status
                              ? _c(
                                  "small",
                                  { staticClass: "badge badge-danger" },
                                  [
                                    _vm._v(
                                      "\n                   Insufficient Balance\n                 "
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
                      _c("label", [_vm._v(" Note ")]),
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
                        attrs: { type: "text", name: "note" },
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
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-block pt-3 pb-4 card-footer overflow-hidden" },
            [
              _c(
                "div",
                { staticClass: "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12" },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left",
                      attrs: { type: "reset" },
                      on: {
                        click: function($event) {
                          return _vm.clearForm()
                        }
                      }
                    },
                    [
                      _vm._m(8),
                      _vm._v(" "),
                      _c("span", { staticClass: "mr-1" }, [_vm._v(" Clear ")])
                    ]
                  ),
                  _vm._v(" "),
                  _vm.submit_button
                    ? _c(
                        "button",
                        {
                          staticClass:
                            "btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right",
                          attrs: { type: "submit", disabled: _vm.loading }
                        },
                        [
                          _vm.loading
                            ? _c("span", {
                                staticClass: "spinner-border spinner-border-sm",
                                attrs: { role: "status", "aria-hidden": "true" }
                              })
                            : _c("span", { staticClass: "mr-2 opacity-7" }, [
                                _c("i", { staticClass: "fa fa-paper-plane" })
                              ]),
                          _vm._v("Submit")
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
                        [_vm._v("Submit")]
                      )
                    : _vm._e()
                ]
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
    return _c(
      "div",
      { staticClass: "card-header-tab card-header alert-info" },
      [
        _c(
          "div",
          {
            staticClass:
              "card-header-title font-size-lg text-capitalize font-weight-normal"
          },
          [
            _c("i", {
              staticClass:
                "header-icon lnr-pencil icon-gradient bg-premium-dark"
            }),
            _vm._v(" "),
            _c("h4", [_vm._v(" Share Capital ")])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Owner Type\n              "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mandatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mandatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Owner Name "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mandatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mandatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Capital  "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mandatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mandatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("  Share\n                  "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mandatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mandatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Per Share Value\n                  "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mandatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mandatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Amount "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mandatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mandatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Payment Type "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mandatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mandatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "mr-2 opacity-7" }, [
      _c("i", { staticClass: "fa fa-undo " })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/share@capital.vue":
/*!********************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/share@capital.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _share_capital_vue_vue_type_template_id_78db5e3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share@capital.vue?vue&type=template&id=78db5e3c& */ "./resources/js/admin/page/accounting/entry/share@capital.vue?vue&type=template&id=78db5e3c&");
/* harmony import */ var _share_capital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share@capital.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/accounting/entry/share@capital.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _share_capital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _share_capital_vue_vue_type_template_id_78db5e3c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _share_capital_vue_vue_type_template_id_78db5e3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/accounting/entry/share@capital.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/share@capital.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/share@capital.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_share_capital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./share@capital.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/share@capital.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_share_capital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/share@capital.vue?vue&type=template&id=78db5e3c&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/share@capital.vue?vue&type=template&id=78db5e3c& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_share_capital_vue_vue_type_template_id_78db5e3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./share@capital.vue?vue&type=template&id=78db5e3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/share@capital.vue?vue&type=template&id=78db5e3c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_share_capital_vue_vue_type_template_id_78db5e3c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_share_capital_vue_vue_type_template_id_78db5e3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);