(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["companyBillPayReceive"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/companyBillPayReceive.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/entry/companyBillPayReceive.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _ref;

    return _ref = {
      expenseTypeLists: [],
      loading: false,
      expenseHeadListByIds: [],
      expenseHeadLists: [],
      getCompanyByType: [],
      paidDateText: '',
      totalAmountText: '',
      totalAmountRowStatus: 0,
      expenseCompanyLists: [],
      datas: [],
      chartOfAccounts: [],
      expensePurposeLists: [],
      expenseDetailsLists: [],
      bankInformationStatus: 0,
      cashInformationStatus: 0,
      bankInformationAccountInfoStatus: 0,
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
        type: '',
        companyId: '',
        email: '',
        address: '',
        note: '',
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
      companyLists: [],
      showBankNames: [],
      shopBankAllDatas: [],
      corporateBankAccountTypes: [],
      mobileBankAccountTypes: [],
      paymentTypeLists: [],
      showBankTypeDatas: []
    }, _defineProperty(_ref, "showBankNames", []), _defineProperty(_ref, "showBankAccounts", []), _defineProperty(_ref, "bankMoreInfo", []), _defineProperty(_ref, "expensePurposeListViews", []), _defineProperty(_ref, "invalid", false), _ref;
  },
  mounted: function mounted() {
    this.getData();
    this.expenseTypeList();
    this.expenseCompanyList();
    this.getexpenseHeadList();
    this.chartOfAccount();
    this.expensePurposeListViews();
  },
  methods: {
    create: function create() {
      var _this = this;

      this.loading = true;
      this.form.post('/addBillPaymentReceive').then(function (res) {
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
    calculate: function calculate(e) {
      var stringValue = e.target.value.toString();
      var regex = /^\d*(\.\d{1,2})?$/;

      if (!stringValue.match(regex) && this.form.amount !== "") {
        this.invalid = true;
        this.form.amount = '';
      } else {
        this.invalid = false;
      }
    },
    calculateAmount: function calculateAmount(id) {
      this.form.dueAmount = this.form.expenseAmount - (this.form.cashAmount + this.form.bankAmount);
    },
    getCompanyByTypes: function getCompanyByTypes() {
      var _this2 = this;

      axios.get('getIncomeExpenseCompanyByIEType/' + this.form.type).then(function (res) {
        _this2.companyLists = res.data.data;
      });
    },
    bankTypeIdCatch: function bankTypeIdCatch() {
      var _this3 = this;

      axios.get('/bankNameList/' + this.form.bankTypeEntryId).then(function (res) {
        _this3.showBankNames = res.data.show;
      });
    },
    bankAccountIdCatch: function bankAccountIdCatch() {
      var _this4 = this;

      axios.get('/bankAccountList/' + this.form.bankEntryId).then(function (res) {
        _this4.showBankAccounts = res.data.data;
      });
    },
    getBankMoreInfo: function getBankMoreInfo() {
      var _this5 = this;

      axios.get('/bankAccountMoreInfo/' + this.form.bankAccountId).then(function (res) {
        _this5.bankInformationAccountInfoStatus = 1;
        _this5.form.branchName = res.data.data.bankBranch;
        _this5.form.accNo = res.data.data.bankAccountNumber;
      });
    },
    paymentReceiveType: function paymentReceiveType() {
      if (this.form.paymentType == 2) {
        this.bankInformationStatus = 1;
        this.cashInformationStatus = 0;
      } else if (this.form.paymentType == 1) {
        this.cashInformationStatus = 1;
        this.bankInformationStatus = 0;
      } else {
        this.cashInformationStatus = 0;
        this.bankInformationStatus = 0;
      }
    },
    expenseTypeList: function expenseTypeList() {
      var _this6 = this;

      var uri = "expenseTypeList";
      axios.get(uri).then(function (response) {
        _this6.expenseTypeLists = response.data.data;
      });
    },
    getData: function getData() {
      var _this7 = this;

      axios.get('/bankTypeEntryList').then(function (res) {
        _this7.showBankTypeDatas = res.data.show;
      }), axios.get('/paymentTypeList').then(function (res) {
        _this7.paymentTypeLists = res.data.data;
      }), axios.get('/addExpense').then(function (res) {
        _this7.datas = res.data.data;
      });
    },
    expenseCompanyList: function expenseCompanyList() {
      var _this8 = this;

      axios.get('/addIncomeExpenseCompany').then(function (res) {
        _this8.expenseCompanyLists = res.data.data;
      });
    },
    expensePurposeList: function expensePurposeList() {
      var _this9 = this;

      axios.get('/getExpensePurposeListById/' + this.form.expenseHead).then(function (res) {
        _this9.expensePurposeLists = res.data.data;
      });
    },
    expensePurposeListViews: function expensePurposeListViews() {
      var _this10 = this;

      axios.get('/addExpenseProvider/').then(function (res) {
        _this10.expensePurposeListViews = res.data.data;
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

    },
    getDetailsData: function getDetailsData() {
      this.getExpenseDetailsList(this.form.expensePurpous);
    },
    getExpenseDetailsList: function getExpenseDetailsList(id) {
      var _this11 = this;

      axios.get('/getExpenseDetailsListById/' + id).then(function (res) {
        _this11.expenseDetailsLists = res.data.data;
        _this11.form.expenseAmount = res.data.totalAmount;
        _this11.form.dueAmount = res.data.totalAmount;
        _this11.totalAmountText = res.data.totalAmount;
        _this11.totalAmountRowStatus = res.data.totalAmount;
      });
    },
    expenseItemAdd: function expenseItemAdd(id) {
      var _this12 = this;

      if (this.form.item && this.form.itemAmount) {
        axios.get('/addExpenseDetailsItem/' + this.form.rendomNumber + '/' + this.form.expensePurpous + '/' + this.form.item + '/' + this.form.itemAmount).then(function (res) {
          if (res.data.status) {
            Toast.fire({
              icon: 'success',
              title: 'Item Add Successfull'
            });
            _this12.form.item = '', _this12.form.itemAmount = '';

            _this12.getExpenseDetailsList(_this12.form.expensePurpous);
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
      var _this13 = this;

      axios.get('/deleteExpenseDetailsItem/' + id).then(function (res) {
        if (res.data.status) {
          Toast.fire({
            icon: 'success',
            title: 'Item Delete Successfull'
          });
          _this13.form.item = '', _this13.form.itemAmount = '';

          _this13.getExpenseDetailsList(_this13.form.expensePurpous);
        } else {
          Toast.fire({
            icon: 'error',
            title: 'Item Not Delete'
          });
        }
      });
    },
    chartOfAccount: function chartOfAccount() {
      var _this14 = this;

      axios.get('/chartOfAccount').then(function (res) {
        _this14.chartOfAccounts = res.data.chartOfAccounts;
      });
    },
    getexpenseHead: function getexpenseHead() {
      var _this15 = this;

      axios.get('/getExpenseHeadList/' + this.form.expenseType).then(function (res) {
        _this15.expenseHeadListByIds = res.data.data;
      });
    },
    getexpenseHeadList: function getexpenseHeadList() {
      var _this16 = this;

      axios.get('/addexpenseType/').then(function (res) {
        _this16.expenseHeadLists = res.data.data;
      });
    },
    getIncomeExpenseCompanyInfo: function getIncomeExpenseCompanyInfo() {
      var _this17 = this;

      axios.get('getIncomeExpenseCompanyFrom/' + this.form.companyId).then(function (res) {
        _this17.form.mobileNo = res.data.data.mobileNo;
        _this17.form.email = res.data.data.email;
        _this17.form.address = res.data.data.address;
      });
      axios.get('getIncomeExpenseCompanyLastBalance/' + this.form.companyId).then(function (res) {
        _this17.form.lastBalance = res.data.balance;
      });
    },
    deleteData: function deleteData(id) {
      var _this18 = this;

      axios["delete"]('/addExpense/' + id).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Delete Successfull'
        });

        _this18.getData();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/companyBillPayReceive.vue?vue&type=template&id=7587923a&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/entry/companyBillPayReceive.vue?vue&type=template&id=7587923a& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "supplier-entry py-4 px-2" }, [
        _c(
          "div",
          {
            staticClass:
              "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border"
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
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v(" Type  ")]),
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
                            value: _vm.form.type,
                            expression: "form.type"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("type") },
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
                                "type",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            function($event) {
                              return _vm.getCompanyByTypes()
                            }
                          ]
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v(" Select ")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v(" Bill Pay ")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v(" Bill Receive ")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "type" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v(" From ")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.companyId,
                            expression: "form.companyId"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("companyId")
                        },
                        attrs: { type: "text", name: "companyId" },
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
                                "companyId",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            function($event) {
                              return _vm.getIncomeExpenseCompanyInfo()
                            }
                          ]
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select One")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.companyLists, function(companyList) {
                          return _c(
                            "option",
                            { domProps: { value: companyList.id } },
                            [
                              _vm._v(
                                " \n                     " +
                                  _vm._s(companyList.companyName) +
                                  " \n\n                     "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "companyId" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v(" Mobile No ")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.mobileNo,
                          expression: "form.mobileNo"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("mobileNo") },
                      attrs: { type: "text", readonly: "", name: "mobileNo" },
                      domProps: { value: _vm.form.mobileNo },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "mobileNo", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "mobileNo" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v(" Email ")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.email,
                          expression: "form.email"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("email") },
                      attrs: { type: "text", readonly: "", name: "email" },
                      domProps: { value: _vm.form.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "email", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "email" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v(" Address ")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.address,
                          expression: "form.address"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("address") },
                      attrs: { type: "text", readonly: "", name: "address" },
                      domProps: { value: _vm.form.address },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "address", $event.target.value)
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
                    _c("label", [_vm._v(" Balance ")]),
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
                        "is-invalid": _vm.form.errors.has("lastBalance")
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
                          _vm.$set(_vm.form, "lastBalance", $event.target.value)
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
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("  Amount ")]),
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
                      attrs: { type: "text", name: "amount", min: "0" },
                      domProps: { value: _vm.form.amount },
                      on: {
                        change: function($event) {
                          return _vm.getAmount()
                        },
                        keyup: _vm.calculate,
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
                    _vm.invalid
                      ? _c("span", { staticStyle: { color: "red" } }, [
                          _vm._v("Negative And Character Value Not Allowed")
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
                    _c("label", [_vm._v(" Payment  Type ")]),
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
                    })
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
                          _c("label", [_vm._v(" Account No")]),
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
                                    showBankAccount.bankAccountName
                                      ? _c("span", [
                                          _vm._v(
                                            "\n                      " +
                                              _vm._s(
                                                showBankAccount.bankAccountName
                                              ) +
                                              " "
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
                          })
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
                ),
                _vm._v(" "),
                _c("div", { staticClass: "text-right pt-3" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "mr-2 btn-pill btn-hover-shine btn btn-primary",
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
                ])
              ]
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card main-card  element-block-example mt-5" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive bg-white" }, [
        _c("table", { staticClass: "table table-hover table-bordered mb-0" }, [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.datas, function(data, index) {
              return _c("tr", [
                _c("td", [_vm._v(_vm._s(index + 1))]),
                _vm._v(" "),
                _c(
                  "td",
                  _vm._l(_vm.expensePurposeListViews, function(
                    expensePurposeListView
                  ) {
                    return data.expenseHead == expensePurposeListView.type
                      ? _c(
                          "span",
                          { attrs: { value: expensePurposeListView.id } },
                          [
                            _vm._v(
                              " \n                     " +
                                _vm._s(expensePurposeListView.expensePurpous) +
                                " \n                 "
                            )
                          ]
                        )
                      : _vm._e()
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "td",
                  _vm._l(_vm.expenseCompanyLists, function(expenseCompanyList) {
                    return data.expensePurpous == expenseCompanyList.type
                      ? _c(
                          "span",
                          { attrs: { value: expenseCompanyList.id } },
                          [
                            _vm._v(
                              "\n                     " +
                                _vm._s(expenseCompanyList.companyName) +
                                " \n                     "
                            ),
                            _c("br"),
                            _vm._v(
                              "\n                     " +
                                _vm._s(expenseCompanyList.mobileNo) +
                                " \n                 "
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
          _vm._v(" Bill Pay & Receive ")
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
      [_c("h3", { staticStyle: { color: "black" } }, [_vm._v("Expense List")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticStyle: { background: "rgba(242, 242, 242, 0.47)" } }, [
        _c("th", [_vm._v(" SN")]),
        _vm._v(" "),
        _c("th", [_vm._v("  Expense Purpose  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Person / Company")]),
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

/***/ "./resources/js/admin/page/accounting/entry/companyBillPayReceive.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/companyBillPayReceive.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _companyBillPayReceive_vue_vue_type_template_id_7587923a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./companyBillPayReceive.vue?vue&type=template&id=7587923a& */ "./resources/js/admin/page/accounting/entry/companyBillPayReceive.vue?vue&type=template&id=7587923a&");
/* harmony import */ var _companyBillPayReceive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./companyBillPayReceive.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/accounting/entry/companyBillPayReceive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _companyBillPayReceive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _companyBillPayReceive_vue_vue_type_template_id_7587923a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _companyBillPayReceive_vue_vue_type_template_id_7587923a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/accounting/entry/companyBillPayReceive.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/companyBillPayReceive.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/companyBillPayReceive.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companyBillPayReceive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./companyBillPayReceive.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/companyBillPayReceive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companyBillPayReceive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/companyBillPayReceive.vue?vue&type=template&id=7587923a&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/companyBillPayReceive.vue?vue&type=template&id=7587923a& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_companyBillPayReceive_vue_vue_type_template_id_7587923a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./companyBillPayReceive.vue?vue&type=template&id=7587923a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/companyBillPayReceive.vue?vue&type=template&id=7587923a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_companyBillPayReceive_vue_vue_type_template_id_7587923a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_companyBillPayReceive_vue_vue_type_template_id_7587923a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);