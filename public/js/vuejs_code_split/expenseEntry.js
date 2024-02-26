(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expenseEntry"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/expenseEntry.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/entry/expenseEntry.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      expenseTypeLists: [],
      expenseHeadListByIds: [],
      expenseHeadLists: [],
      paidDateText: '',
      totalAmountText: '',
      totalAmountRowStatus: 0,
      expenseCompanyLists: [],
      datas: [],
      chartOfAccounts: [],
      expensePurposeListsd: [],
      expenseDetailsLists: [],
      bankInformationStatus: 0,
      cashInformationStatus: 0,
      bankInformationAccountInfoStatus: 0,
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
        rendomNumber: Math.random(1, 1000),
        item: '',
        itemAmount: '',
        expenseHead: '',
        expenseType: '',
        expenseAmount: '',
        expenseCompany: '',
        expensePurpous: '',
        mobileNo: '',
        email: '',
        address: '',
        note: '',
        budget: '',
        cashAmount: '',
        bankAmount: '',
        dueAmount: '',
        branchName: '',
        accNo: '',
        paymentType: '',
        bankTypeEntryId: '',
        bankEntryId: '',
        bankAccountId: '',
        detailsTotalAmount: '',
        // for validation
        available_balance: '' // /for validation

      }),
      showBankNames: [],
      shopBankAllDatas: [],
      corporateBankAccountTypes: [],
      mobileBankAccountTypes: [],
      paymentTypeLists: [],
      showBankTypeDatas: []
    }, _defineProperty(_ref, "showBankNames", []), _defineProperty(_ref, "showBankAccounts", []), _defineProperty(_ref, "bankMoreInfo", []), _defineProperty(_ref, "expensePurposeListView1s", []), _defineProperty(_ref, "invalid", false), _ref;
  },
  mounted: function mounted() {
    this.getData();
    this.expenseTypeList();
    this.expenseCompanyList();
    this.getexpenseHeadListFunction();
    this.chartOfAccount();
    this.expensePurposeListViews();
    this.paymentTypeList();
    this.showBankType();
  },
  methods: {
    create: function create() {
      var _this = this;

      this.loading = true;
      this.form.post('/addExpense').then(function (res) {
        _this.loading = false;
        Toast.fire({
          icon: 'success',
          title: 'Entry Successfully'
        });

        _this.form.reset();

        _this.form.rendomNumber = Math.random(1, 1000);

        _this.getData();

        _this.getExpenseDetailsList(0);
      })["catch"](function (res) {
        _this.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    },
    calculateAmount: function calculateAmount(id) {
      this.form.dueAmount = this.form.expenseAmount - (this.form.cashAmount + this.form.bankAmount);
      this.calculate_available_balance_from_amount(id);
    },
    paymentTypeList: function paymentTypeList() {
      var _this2 = this;

      axios.get('/paymentTypeList').then(function (res) {
        _this2.paymentTypeLists = res.data.data;
      });
    },
    showBankType: function showBankType() {
      var _this3 = this;

      axios.get('/bankTypeEntryList').then(function (res) {
        _this3.showBankTypeDatas = res.data.show;
      });
    },
    bankTypeIdCatch: function bankTypeIdCatch() {
      var _this4 = this;

      axios.get('/bankNameList/' + this.form.bankTypeEntryId).then(function (res) {
        _this4.showBankNames = res.data.show;
      });
    },
    bankAccountIdCatch: function bankAccountIdCatch() {
      var _this5 = this;

      axios.get('/bankAccountListWithCard/' + this.form.bankEntryId + '/' + this.form.bankTypeEntryId).then(function (res) {
        _this5.showBankAccounts = res.data.data;
      });
    },
    getBankMoreInfo: function getBankMoreInfo() {
      var _this6 = this;

      axios.get('/bankAccountMoreInfo/' + this.form.bankAccountId).then(function (res) {
        _this6.bankInformationAccountInfoStatus = 1;
        _this6.form.branchName = res.data.data.bankBranch;
        _this6.form.accNo = res.data.data.bankAccountNumber; //======================== check balance 

        var url = "checkBalance/" + res.data.data.accountCode;
        axios.get(url).then(function (response) {
          _this6.available_balance_status = true;
          _this6.available_balance_text = response.data.available_balance;
          _this6.form.available_balance = response.data.available_balance;

          _this6.calculate_available_balance(response.data.available_balance, 2); // bank

        }); // ---------------

        if (_this6.form.bankAmount > _this6.form.available_balance) {
          // this.insufficent_balance_text_status=true
          _this6.insufficent_bank_balance_text_status = false;
          _this6.submit_button_status = true;
          _this6.available_button_status = false;
        } else {
          _this6.insufficent_bank_balance_text_status = false;
        } // ---------------
        //======================== /check balance 

      });
    },
    paymentReceiveType: function paymentReceiveType() {
      var _this7 = this;

      this.insufficent_cash_balance_text_status = false;
      this.insufficent_bank_balance_text_status = false;
      this.available_balance_cash_status = false;

      if (this.form.paymentType == 2) {
        this.bankInformationStatus = 1;
        this.cashInformationStatus = 0;
        this.form.cashAmount = '';
        this.form.bankAmount = this.form.expenseAmount;
      } else if (this.form.paymentType == 1) {
        //======================== check balance 
        axios.get('/getCashRegister/1').then(function (res) {
          var url = "checkBalance/" + res.data.accCode;
          axios.get(url).then(function (response) {
            _this7.available_balance_cash_status = true;
            _this7.form.available_balance = response.data.available_balance;

            _this7.calculate_available_balance(response.data.available_balance, 1); // cash

          });
        }); //======================== check balance 

        this.cashInformationStatus = 1;
        this.bankInformationStatus = 0;
        this.form.cashAmount = this.form.expenseAmount;
        this.form.bankAmount = '';
      } else if (this.form.paymentType == 3) {
        this.cashInformationStatus = 0;
        this.bankInformationStatus = 0;
        this.form.cashAmount = '';
        this.form.bankAmount = '';
        this.form.dueAmount = this.form.expenseAmount;
      }
    },
    calculate_available_balance: function calculate_available_balance(e, type) {
      this.insufficent_cash_balance_text_status = false;
      this.insufficent_bank_balance_text_status = false;
      this.insufficent_button = false;
      this.submit_button = true; // ------------- cash condition

      if (type == 1) {
        if (this.form.cashAmount > e) {
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
        if (this.form.bankAmount > e) {
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
    calculate_available_balance_from_amount: function calculate_available_balance_from_amount(type) {
      this.insufficent_cash_balance_text_status = false;
      this.insufficent_bank_balance_text_status = false;
      this.insufficent_button = false;
      this.submit_button = true; // ------------- cash condition

      if (type == 1) {
        if (this.form.cashAmount > this.form.available_balance) {
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


      if (type == 2) {
        if (this.form.bankAmount > this.form.available_balance) {
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
    expenseTypeList: function expenseTypeList() {
      var _this8 = this;

      var uri = "expenseTypeList";
      axios.get(uri).then(function (response) {
        _this8.expenseTypeLists = response.data.data;
        _this8.form.expenseType = response.data.expenseType;
        axios.get('/getExpenseHeadList/' + _this8.form.expenseType).then(function (res) {
          _this8.expenseHeadListByIds = res.data.data;
          _this8.form.expenseHead = res.data.id;

          _this8.expensePurposeList();
        });
      });
    },
    getData: function getData() {
      var _this9 = this;

      axios.get('/addExpense').then(function (res) {
        _this9.datas = res.data.data;
      }), this.expenseTypeList();
    },
    expenseCompanyList: function expenseCompanyList() {
      var _this10 = this;

      axios.get('/addIncomeExpenseCompany').then(function (res) {
        _this10.expenseCompanyLists = res.data.data;
      });
    },
    getExpenseBudget: function getExpenseBudget() {
      var _this11 = this;

      axios.get('/getIncomeExpenseBudget/1/' + this.form.expensePurpous).then(function (res) {
        _this11.form.budget = res.data.data;
      });
    },
    expensePurposeList: function expensePurposeList() {
      var _this12 = this;

      axios.get('/getExpensePurposeListById/' + this.form.expenseHead).then(function (res) {
        _this12.expensePurposeListsd = res.data.datas;
      });
    },
    expensePurposeListViews: function expensePurposeListViews() {
      var _this13 = this;

      axios.get('/addExpenseProvider/').then(function (res) {
        _this13.expensePurposeListView1s = res.data.data;
      });
    },
    calculate: function calculate(e) {
      var stringValue = e.target.value.toString();
      var regex = /^\d*(\.\d{1,2})?$/;

      if (!stringValue.match(regex) && this.form.expenseAmount !== "") {
        this.invalid = true;
        this.form.expenseAmount = '';
      } else {
        this.invalid = false;
      }
    },
    getAmount: function getAmount() {
      this.form.dueAmount = 0;
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
    getexpenseHeadListFunction: function getexpenseHeadListFunction() {
      var _this18 = this;

      axios.get('addExpenseType').then(function (res) {
        _this18.expenseHeadLists = res.data.data;
      });
    },
    deleteData: function deleteData(id) {
      var _this19 = this;

      axios["delete"]('/addExpense/' + id).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Delete Successfull'
        });

        _this19.getData();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/expenseEntry.vue?vue&type=template&id=dc882f22&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/entry/expenseEntry.vue?vue&type=template&id=dc882f22& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "card-header alert-info" }, [
        _c(
          "h3",
          [
            _c(
              "router-link",
              {
                staticClass:
                  "btn btn btn-outline-primary btn-shadow  btn-hover-shine",
                attrs: { to: "/incomeExpense" }
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
                )
              ]
            ),
            _vm._v("\n             Expense Entry ")
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "supplier-entry p-0 pt-3 comm-form-back-img" }, [
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
              {
                staticClass:
                  "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color"
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    staticStyle: { display: "none" }
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.rendomNumber,
                          expression: "form.rendomNumber"
                        }
                      ],
                      attrs: { type: "hidden" },
                      domProps: { value: _vm.form.rendomNumber },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "rendomNumber",
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
                            value: _vm.form.expenseType,
                            expression: "form.expenseType"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("expenseType")
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
                                "expenseType",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            function($event) {
                              return _vm.getexpenseHead()
                            }
                          ]
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v(" Select ")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.expenseTypeLists, function(expenseTypeList) {
                          return _c(
                            "option",
                            { domProps: { value: expenseTypeList.headCode } },
                            [
                              _vm._v(
                                " " + _vm._s(expenseTypeList.headName) + " "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "expenseType" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    staticStyle: { display: "none" }
                  },
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
                            value: _vm.form.expenseHead,
                            expression: "form.expenseHead"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("expenseHead")
                        },
                        attrs: { name: "expenseHead" },
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
                                "expenseHead",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            function($event) {
                              return _vm.expensePurposeList()
                            }
                          ]
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v(" Select One ")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.expenseHeadListByIds, function(
                          expenseHeadListById
                        ) {
                          return _c(
                            "option",
                            { domProps: { value: expenseHeadListById.id } },
                            [
                              _vm._v(
                                " \n                      " +
                                  _vm._s(expenseHeadListById.name) +
                                  " \n                      "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "expenseHead" }
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
                            value: _vm.form.expensePurpous,
                            expression: "form.expensePurpous"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("expensePurpous")
                        },
                        attrs: { type: "text", name: "expensePurpous" },
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
                                "expensePurpous",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            function($event) {
                              $event.preventDefault()
                              return _vm.getExpenseBudget()
                            }
                          ]
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select One")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.expensePurposeListsd, function(
                          expensePurposeList
                        ) {
                          return _c(
                            "option",
                            { domProps: { value: expensePurposeList.id } },
                            [
                              _vm._v(
                                " \n                      " +
                                  _vm._s(expensePurposeList.expensePurpous) +
                                  "\n                      "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "expensePurpous" }
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
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.expenseTitle,
                          expression: "form.expenseTitle"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid": _vm.form.errors.has("expenseTitle")
                      },
                      attrs: { type: "text", name: "expenseTitle" },
                      domProps: { value: _vm.form.expenseTitle },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "expenseTitle",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "expenseTitle" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v(" Budget Amount ")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.budget,
                          expression: "form.budget"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("address") },
                      attrs: { type: "text", readonly: "", name: "address" },
                      domProps: { value: _vm.form.budget },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "budget", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "address" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
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
                          value: _vm.form.expenseAmount,
                          expression: "form.expenseAmount"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid": _vm.form.errors.has("expenseAmount")
                      },
                      attrs: {
                        type: "text",
                        autocomplete: "off",
                        name: "expenseAmount"
                      },
                      domProps: { value: _vm.form.expenseAmount },
                      on: {
                        keyup: [
                          function($event) {
                            $event.preventDefault()
                            return _vm.getAmount()
                          },
                          _vm.calculate
                        ],
                        change: function($event) {
                          return _vm.getAmount()
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "expenseAmount",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "expenseAmount" }
                    }),
                    _vm._v(" "),
                    _vm.invalid
                      ? _c("span", { staticStyle: { color: "red" } }, [
                          _vm._v(
                            "\n                             Negative And Character Not Allowed\n                            "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: {
                        type: "button",
                        "data-toggle": "modal",
                        "data-target": "#exampleModal"
                      },
                      on: {
                        click: function($event) {
                          return _vm.getDetailsData()
                        }
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "bi bi-plus-lg",
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
                              d:
                                "M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" Add  Details\n")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "modal fade",
                      attrs: {
                        id: "exampleModal",
                        tabindex: "-1",
                        "aria-labelledby": "exampleModalLabel",
                        "aria-hidden": "true"
                      }
                    },
                    [
                      _c("div", { staticClass: "modal-dialog" }, [
                        _c("div", { staticClass: "modal-content" }, [
                          _vm._m(5),
                          _vm._v(" "),
                          _c("div", { staticClass: "modal-body" }, [
                            _c(
                              "table",
                              { staticClass: "table table-bordered" },
                              [
                                _c("tr", [
                                  _c("td"),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.item,
                                          expression: "form.item"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Item"
                                      },
                                      domProps: { value: _vm.form.item },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "item",
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
                                          value: _vm.form.itemAmount,
                                          expression: "form.itemAmount"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Amount"
                                      },
                                      domProps: { value: _vm.form.itemAmount },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "itemAmount",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c("input", {
                                      staticClass: "btn btn-primary",
                                      attrs: { type: "button", value: "Add" },
                                      on: {
                                        click: function($event) {
                                          return _vm.expenseItemAdd(1)
                                        }
                                      }
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _vm.totalAmountRowStatus
                                  ? _c("tr", [
                                      _c("td"),
                                      _vm._v(" "),
                                      _c("th", { staticClass: "text-right" }, [
                                        _vm._v(" Total")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", [
                                        _vm._v(_vm._s(_vm.totalAmountText))
                                      ]),
                                      _vm._v(" "),
                                      _c("td")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm._l(_vm.expenseDetailsLists, function(
                                  expenseDetailsList,
                                  index
                                ) {
                                  return _c("tr", [
                                    _c("td", [
                                      _vm._v(" " + _vm._s(index + 1) + " ")
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        " " +
                                          _vm._s(expenseDetailsList.item) +
                                          " "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            expenseDetailsList.itemAmount
                                          ) +
                                          " "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-danger",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              return _vm.deleteExpenseDetailItem(
                                                expenseDetailsList.id
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              staticClass: "bi bi-trash-fill",
                                              attrs: {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                width: "16",
                                                height: "16",
                                                fill: "currentColor",
                                                viewBox: "0 0 16 16"
                                              }
                                            },
                                            [
                                              _c("path", {
                                                attrs: {
                                                  d:
                                                    "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ])
                                })
                              ],
                              2
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "modal-footer" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-secondary",
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
                                staticClass: "btn btn-primary",
                                attrs: {
                                  type: "button",
                                  "data-dismiss": "modal"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.expenseItemAdd(2)
                                  }
                                }
                              },
                              [_vm._v("Save changes")]
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [
                      _vm._v(
                        " Payment  Type\n                        \n                    "
                      ),
                      _vm.available_balance_cash_status
                        ? _c("span", { staticClass: "badge badge-primary" }, [
                            _vm._v(
                              "\n                      " +
                                _vm._s(_vm.form.available_balance) +
                                "\n                    "
                            )
                          ])
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
                        _vm._l(_vm.paymentTypeLists, function(paymentTypeList) {
                          return _c(
                            "option",
                            { domProps: { value: paymentTypeList.id } },
                            [_vm._v(" " + _vm._s(paymentTypeList.paymentType))]
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
                            "\n                      Insufficient Balance\n                    "
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
                          _c("label", [_vm._v(" Cash Amount ")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.cashAmount,
                                expression: "form.cashAmount"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("cashAmount")
                            },
                            attrs: {
                              type: "number",
                              autocomplete: "off",
                              name: "cashAmount"
                            },
                            domProps: { value: _vm.form.cashAmount },
                            on: {
                              keyup: function($event) {
                                return _vm.calculateAmount(1)
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "cashAmount",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "cashAmount" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
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
                          _c("label", [_vm._v(" Bank Amount ")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.bankAmount,
                                expression: "form.bankAmount"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("bankAmount")
                            },
                            attrs: {
                              type: "number",
                              autocomplete: "off",
                              name: "bankAmount"
                            },
                            domProps: { value: _vm.form.bankAmount },
                            on: {
                              keyup: function($event) {
                                return _vm.calculateAmount(2)
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "bankAmount",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "bankAmount" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
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
                            attrs: { form: _vm.form, field: "bankTypeEntryId" }
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
                                "is-invalid": _vm.form.errors.has("bankEntryId")
                              },
                              attrs: { name: "bankEntryId" },
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
                              _vm._l(_vm.showBankNames, function(showBankName) {
                                return _c(
                                  "option",
                                  {
                                    domProps: {
                                      value: showBankName.bankEntryId
                                    }
                                  },
                                  [_vm._v(" " + _vm._s(showBankName.bankName))]
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
                            _vm._v("Bank Account\n\n                     "),
                            _vm.available_balance_status
                              ? _c(
                                  "span",
                                  { staticClass: "badge badge-primary" },
                                  [
                                    _vm._v(
                                      "\n                     " +
                                        _vm._s(_vm.available_balance_text) +
                                        "\n                   "
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
                                    domProps: { value: showBankAccount.bankId }
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
                                    "\n                    Insufficient Balance\n                  "
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
                    _c("label", [_vm._v(" Due Amount ")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.dueAmount,
                          expression: "form.dueAmount"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("dueAmount") },
                      attrs: {
                        type: "number",
                        readonly: "",
                        name: "dueAmount"
                      },
                      domProps: { value: _vm.form.dueAmount },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "dueAmount", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "dueAmount" }
                    })
                  ],
                  1
                ),
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
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "d-block p-0 pt-3 pb-4 card-footer overflow-hidden"
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12"
                  },
                  [
                    _vm._m(6),
                    _vm._v(" "),
                    _vm.submit_button
                      ? _c(
                          "button",
                          {
                            staticClass:
                              "btn-pill btn-shadow btn btn-primary btn-lg float-right btn-hover-shine",
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
                            _vm._v(" "),
                            _c("span", { staticClass: "mr-1" }, [
                              _vm._v(" Submit ")
                            ])
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.insufficent_button
                      ? _c(
                          "button",
                          {
                            staticClass:
                              "btn-pill btn-shadow btn btn-danger btn-lg float-right btn-hover-shine",
                            attrs: { type: "button" }
                          },
                          [
                            _vm._m(7),
                            _vm._v(" "),
                            _c("span", { staticClass: "mr-1" }, [
                              _vm._v(" Submit ")
                            ])
                          ]
                        )
                      : _vm._e()
                  ]
                )
              ]
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card main-card  element-block-example mt-5" }, [
      _vm._m(8),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive p-3" }, [
        _c("table", { staticClass: "table table-hover table-bordered mb-0" }, [
          _vm._m(9),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.datas, function(data, index) {
              return _c("tr", [
                _c("td", [_vm._v(_vm._s(index + 1))]),
                _vm._v(" "),
                _c(
                  "td",
                  _vm._l(_vm.expenseHeadLists, function(expenseHeadList) {
                    return data.expenseHead == expenseHeadList.id
                      ? _c("span", { attrs: { value: expenseHeadList.id } }, [
                          _vm._v(
                            " \n                      " +
                              _vm._s(expenseHeadList.name) +
                              " \n                  "
                          )
                        ])
                      : _vm._e()
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "td",
                  _vm._l(_vm.expenseCompanyLists, function(expenseCompanyList) {
                    return data.expenseCompanyId == expenseCompanyList.id
                      ? _c(
                          "span",
                          { attrs: { value: expenseCompanyList.id } },
                          [
                            _vm._v(
                              "\n                      " +
                                _vm._s(expenseCompanyList.companyName) +
                                " \n                      "
                            ),
                            _c("br"),
                            _vm._v(
                              "\n                      " +
                                _vm._s(expenseCompanyList.mobileNo) +
                                " \n                  "
                            )
                          ]
                        )
                      : _vm._e()
                  }),
                  0
                ),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(data.expenseTitle) + " ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(data.expenseAmount) + " ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(data.dueAmount) + " ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(data.note) + " ")]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "btn-wide btn-pill btn btn-outline-primary btn-hover-shine",
                        attrs: { to: "/expenseInvoiceView" + data.id }
                      },
                      [
                        _c("i", { staticClass: " fa fa-eye mr-1" }),
                        _vm._v(" View")
                      ]
                    )
                  ],
                  1
                )
              ])
            }),
            0
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Expense Type \n                    "),
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
      _vm._v(" Expense Head \n                    "),
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
      _vm._v(" Expense Purpose \n                    "),
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
      _vm._v(" Expense Title  "),
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
      _vm._v(" Expense Amount \n                    "),
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
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v(" Expense Details ")]
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
      "button",
      {
        staticClass:
          "btn-pill btn-shadow btn btn-outline-danger btn-lg float-left",
        attrs: { type: "reset" }
      },
      [
        _c("span", { staticClass: "mr-2 opacity-7" }, [
          _c("i", { staticClass: "fa fa-undo " })
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "mr-1" }, [_vm._v(" Clear ")])
      ]
    )
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
    return _c("div", { staticClass: "card-header alert-info" }, [
      _c("h4", [
        _c("i", {
          staticClass:
            "header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
        }),
        _vm._v("\n          Expense  List")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "alert-info" }, [
        _c("th", [_vm._v(" SN")]),
        _vm._v(" "),
        _c("th", [
          _vm._v("  Expense"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Purpose  ")
        ]),
        _vm._v(" "),
        _c("th", [_vm._v(" Person/Company")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Title ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Amount ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Due ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Note ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Delete ")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/expenseEntry.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/expenseEntry.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _expenseEntry_vue_vue_type_template_id_dc882f22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expenseEntry.vue?vue&type=template&id=dc882f22& */ "./resources/js/admin/page/accounting/entry/expenseEntry.vue?vue&type=template&id=dc882f22&");
/* harmony import */ var _expenseEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expenseEntry.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/accounting/entry/expenseEntry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _expenseEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _expenseEntry_vue_vue_type_template_id_dc882f22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _expenseEntry_vue_vue_type_template_id_dc882f22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/accounting/entry/expenseEntry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/expenseEntry.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/expenseEntry.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_expenseEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./expenseEntry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/expenseEntry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_expenseEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/expenseEntry.vue?vue&type=template&id=dc882f22&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/expenseEntry.vue?vue&type=template&id=dc882f22& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_expenseEntry_vue_vue_type_template_id_dc882f22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./expenseEntry.vue?vue&type=template&id=dc882f22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/expenseEntry.vue?vue&type=template&id=dc882f22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_expenseEntry_vue_vue_type_template_id_dc882f22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_expenseEntry_vue_vue_type_template_id_dc882f22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);