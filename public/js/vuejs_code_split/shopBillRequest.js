(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopBillRequest"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopinformation/shopBillRequest.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/shopinformation/shopBillRequest.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a,
      currencyRate: '',
      authInfos: [],
      userName: '',
      accountInfos: [],
      howManyBranch: true,
      billRequestLists: [],
      mobileBankInfoStatus: 0,
      bankInfoStatus: 0,
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
      shopBankAllDatas: [],
      corporateBankAccountTypes: [],
      mobileBankAccountTypes: [],
      paymentTypeLists: [],
      showBankTypeDatas: [],
      showBankNames: [],
      showBankAccounts: [],
      bankMoreInfo: [],
      showMonthLists: [],
      form: new Form({
        paymetMethod: '',
        amount: '',
        totalMonth: '1',
        bankDetils: '',
        paySlip: '',
        lastBillDate: ''
      })
    };
  },
  mounted: function mounted() {
    this.getAccountInfoById();
    this.getAuthInfo();
    this.getCurrencyRate();
    this.view();
    this.showBankType();
    this.shopBillMonthList();
  },
  methods: {
    view: function view() {
      var _this = this;

      axios.get('/shopBillRequestList/').then(function (res) {
        _this.billRequestLists = res.data.data;
      });
    },
    billRequest: function billRequest() {
      var _this2 = this;

      this.form.post("shopBillRequestEntry").then(function (response) {
        if (response.data.ok == 0) {
          Toast.fire({
            icon: "error",
            //background: '#fcd8d8', red
            //background: "#c9f4c9", //green
            title: "Your allready send request."
          });
        } else {
          Toast.fire({
            icon: "success",
            //background: '#fcd8d8', red
            //background: "#c9f4c9", //green
            title: "Bill Request Successfull."
          }), _this2.form.reset();

          _this2.view();
        }
      });
    },
    getCurrencyRate: function getCurrencyRate() {
      var _this3 = this;

      var url = 'getCurrencyRate';
      axios.get(url).then(function (response) {
        _this3.currencyRate = response.data.data;
        _this3.form.amount = response.data.data;
      });
    },
    getAuthInfo: function getAuthInfo() {
      var _this4 = this;

      var url = "getAuthInfo";
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this4.authInfos = response.data;
        _this4.userName = response.userName;
      });
    },
    changeImage: function changeImage(event) {
      var _this5 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this5.form.paySlip = event.target.result;
        console.log(event.target.result);
      };

      reader.readAsDataURL(file);
    },
    getAccountInfoById: function getAccountInfoById() {
      var _this6 = this;

      var url = "getAccountInfoById";
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this6.accountInfos = response.data;
        _this6.form.lastBillDate = response.data.billingDate;
      });
    },
    calculateBillAmount: function calculateBillAmount() {
      var _this7 = this;

      axios.get('/getShopBillMonthListById/' + this.form.totalMonth).then(function (res) {
        _this7.form.amount = _this7.currencyRate * _this7.form.totalMonth - res.data.data.discountAmount;
      });
    },
    shopBillMonthList: function shopBillMonthList() {
      var _this8 = this;

      axios.get('/getShopBillMonthList').then(function (res) {
        _this8.showMonthLists = res.data.data;
      });
    },
    showBankType: function showBankType() {
      var _this9 = this;

      axios.get('/bankTypeEntryList').then(function (res) {
        _this9.showBankTypeDatas = res.data.show;
      });
    },
    bankTypeIdCatch: function bankTypeIdCatch() {
      var _this10 = this;

      axios.get('/companyBankNameList/' + this.form.bankTypeEntryId).then(function (res) {
        _this10.showBankNames = res.data.show;

        if (_this10.form.bankTypeEntryId == 1) {
          _this10.mobileBankInfoStatus = 0;
          _this10.bankInfoStatus = 1;
        } else {
          _this10.mobileBankInfoStatus = 1;
          _this10.bankInfoStatus = 0;
        }
      });
    },
    bankAccountIdCatch: function bankAccountIdCatch() {
      var _this11 = this;

      axios.get('/companyBankAccountList/' + this.form.bankAccountId).then(function (res) {
        if (_this11.form.bankTypeEntryId == 1) {
          _this11.form.bankDetils = 'A/C Name : ' + res.data.data.accountName + '<br>' + 'A/C Number : ' + res.data.data.accountNumber + '<br>' + 'Branch Name : ' + res.data.data.brunchName;
        } else {
          _this11.form.bankDetils = 'A/C Type : ' + res.data.data.accountType + '<br>' + 'A/C Number : ' + res.data.data.accountNumber;
        }
      });
    },
    getBankMoreInfo: function getBankMoreInfo() {
      var _this12 = this;

      axios.get('/bankAccountMoreInfo/' + this.form.bankAccountId).then(function (res) {
        _this12.bankInformationAccountInfoStatus = 1;
        _this12.form.branchName = res.data.data.bankBranch;
        _this12.form.accNo = res.data.data.bankAccountNumber; //======================== check balance 

        var url = "checkBalance/" + res.data.data.accountCode;
        axios.get(url).then(function (response) {
          _this12.available_balance_status = true;
          _this12.available_balance_text = response.data.available_balance;
          _this12.form.available_balance = response.data.available_balance;
        }); // ---------------

        if (_this12.form.bankAmount > _this12.form.available_balance) {
          // this.insufficent_balance_text_status=true
          _this12.insufficent_bank_balance_text_status = false;
          _this12.submit_button_status = true;
          _this12.available_button_status = false;
        } else {
          _this12.insufficent_bank_balance_text_status = false;
        } // ---------------
        //======================== /check balance 

      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopinformation/shopBillRequest.vue?vue&type=template&id=3dbc954b&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/shopinformation/shopBillRequest.vue?vue&type=template&id=3dbc954b& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
                    return _vm.billRequest()
                  }
                }
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
                            value: _vm.form.totalMonth,
                            expression: "form.totalMonth"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("totalMonth")
                        },
                        attrs: { name: "totalMonth" },
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
                                "totalMonth",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            function($event) {
                              $event.preventDefault()
                              return _vm.calculateBillAmount()
                            }
                          ]
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select Month")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.showMonthLists, function(showMonthList) {
                          return _c(
                            "option",
                            { domProps: { value: showMonthList.month } },
                            [
                              _vm._v(
                                " " +
                                  _vm._s(showMonthList.title) +
                                  "  \n                      "
                              ),
                              showMonthList.discountAmount
                                ? _c("span", [
                                    _vm._v(
                                      "\n                        (" +
                                        _vm._s(showMonthList.discountText) +
                                        ")"
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
                      attrs: { form: _vm.form, field: "totalMonth" }
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
                      attrs: { type: "text", disabled: "" },
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
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.lastBillDate,
                          expression: "form.lastBillDate"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid": _vm.form.errors.has("lastBillDate")
                      },
                      attrs: { type: "hidden", disabled: "" },
                      domProps: { value: _vm.form.lastBillDate },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "lastBillDate",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "amount" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", [
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
                              value: _vm.form.bankTypeEntryId,
                              expression: "form.bankTypeEntryId"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("bankTypeEntryId")
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
                                    var val = "_value" in o ? o._value : o.value
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
                            _vm._v("Select Bank Type ")
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
                                    _vm._s(showBankTypeData.bankTypeEntryName)
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
                      _vm._m(4),
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
                            "is-invalid": _vm.form.errors.has("bankAccountId")
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
                                    var val = "_value" in o ? o._value : o.value
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
                                $event.preventDefault()
                                return _vm.bankAccountIdCatch()
                              }
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v(" Select Bank Name ")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.showBankNames, function(showBankName) {
                            return _c(
                              "option",
                              { domProps: { value: showBankName.bankEntryId } },
                              [_vm._v(" " + _vm._s(showBankName.bankName))]
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
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(5),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.bankDetils,
                          expression: "form.bankDetils"
                        }
                      ],
                      staticClass: "form-control border bg-light",
                      staticStyle: { height: "auto" },
                      attrs: { type: "hidden" },
                      domProps: { value: _vm.form.bankDetils },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "bankDetils", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", {
                      staticClass: "form-control border bg-light pb-2",
                      staticStyle: { height: "auto" },
                      domProps: { innerHTML: _vm._s(_vm.form.bankDetils) }
                    })
                  ]),
                  _vm._v(" "),
                  _vm.mobileBankInfoStatus
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
                                  value: _vm.form.mbAccountNo,
                                  expression: "form.mbAccountNo"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("mbAccountNo")
                              },
                              attrs: { type: "text" },
                              domProps: { value: _vm.form.mbAccountNo },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "mbAccountNo",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "mbAccountNo" }
                            })
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
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.mbTrNo,
                                  expression: "form.mbTrNo"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("mbTrNo")
                              },
                              attrs: { type: "text" },
                              domProps: { value: _vm.form.mbTrNo },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "mbTrNo",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "mbTrNo" }
                            })
                          ],
                          1
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.bankInfoStatus
                    ? _c("div", [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _vm._m(8),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.bankName,
                                  expression: "form.bankName"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("bankName")
                              },
                              attrs: { type: "text" },
                              domProps: { value: _vm.form.bankName },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "bankName",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "bankName" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _vm._m(9),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.accountName,
                                  expression: "form.accountName"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("accountName")
                              },
                              attrs: { type: "text" },
                              domProps: { value: _vm.form.accountName },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "accountName",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "accountName" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _vm._m(10),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.accountNumber,
                                  expression: "form.accountNumber"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has(
                                  "accountNumber"
                                )
                              },
                              attrs: { type: "text" },
                              domProps: { value: _vm.form.accountNumber },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "accountNumber",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "accountNumber" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _vm._m(11),
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
                              class: {
                                "is-invalid": _vm.form.errors.has("branchName")
                              },
                              attrs: { type: "text" },
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
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "branchName" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _vm._m(12),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "img img-responsive",
                              staticStyle: {
                                "max-height": "100px",
                                "max-width": "200px"
                              },
                              attrs: { src: _vm.form.paySlip }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "file", id: "paySlip" },
                              on: {
                                change: function($event) {
                                  return _vm.changeImage($event)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("small", { staticClass: "text-danger" }, [
                              _vm._v(
                                " Supported image formet only jpg, jpeg, png "
                              )
                            ]),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "paySlip" }
                            })
                          ],
                          1
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _vm._m(13)
              ]
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card main-card element-block-example mt-5" }, [
      _vm._m(14),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive bg-white p-3" }, [
        _c(
          "table",
          { staticClass: "table table-hover table-striped table-bordered" },
          [
            _vm._m(15),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.billRequestLists, function(billRequestList, index) {
                return _c("tr", { key: billRequestList.id }, [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(
                        _vm
                          .moment(billRequestList.lastBillDate)
                          .format("DD MMMM YYYY")
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(billRequestList.totalMonth) + " Month")
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(billRequestList.amount))]),
                  _vm._v(" "),
                  _c("td", {
                    domProps: { innerHTML: _vm._s(billRequestList.bankDetils) }
                  }),
                  _vm._v(" "),
                  _c("td", [
                    billRequestList.bankTypeEntryId == 1
                      ? _c("span", [
                          _vm._v(
                            "\n                 Bank Name : " +
                              _vm._s(billRequestList.bankName) +
                              " "
                          ),
                          _c("br"),
                          _vm._v(
                            "\n                 A/C Name : " +
                              _vm._s(billRequestList.accountName)
                          ),
                          _c("br"),
                          _vm._v(
                            "\n                 A/C Number : " +
                              _vm._s(billRequestList.accountNumber)
                          ),
                          _c("br"),
                          _vm._v(
                            "\n                 Branch Name : " +
                              _vm._s(billRequestList.branchName)
                          ),
                          _c("br"),
                          _vm._v("\n                 Pay Slip : "),
                          billRequestList.paySlip
                            ? _c("img", {
                                staticStyle: { width: "100px" },
                                attrs: { src: billRequestList.paySlip }
                              })
                            : _vm._e()
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    billRequestList.bankTypeEntryId == 2
                      ? _c("span", [
                          _vm._v(
                            "\n                 A/C Number : " +
                              _vm._s(billRequestList.mbAccountNo) +
                              " "
                          ),
                          _c("br"),
                          _vm._v(
                            "\n                 TRX. Number : " +
                              _vm._s(billRequestList.mbTrNo) +
                              "\n               "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm
                            .moment(billRequestList.created_at)
                            .format("DD MMMM YYYY")
                        ) +
                        " "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    billRequestList.status == 0
                      ? _c("span", [_vm._v(" Pending... ")])
                      : _vm._e(),
                    _vm._v(" "),
                    billRequestList.status == 1
                      ? _c("span", [_vm._v(" Waiting... ")])
                      : _vm._e(),
                    _vm._v(" "),
                    billRequestList.status == 2
                      ? _c("span", [_vm._v(" Apporved ")])
                      : _vm._e(),
                    _vm._v(" "),
                    billRequestList.status == 3
                      ? _c("span", [_vm._v(" Cancel ")])
                      : _vm._e()
                  ])
                ])
              }),
              0
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
          _vm._v(" Bill Request ")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Month \n                  "),
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
      _vm._v(" Bill "),
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
      _vm._v(" Bank Type  "),
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
      _vm._v("Bank Name "),
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
      _vm._v(" Company Account Details "),
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
      _vm._v(" Sender Account Number "),
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
      _vm._v(" Transaction Number "),
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
      _vm._v(" Sender Bank Name "),
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
      _vm._v(" Sender Account Name "),
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
      _vm._v(" Sender Account Number "),
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
      _vm._v(" Sender Branch Name "),
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
    return _c("label", { attrs: { for: "paySlip" } }, [
      _vm._v(" Pay Slip "),
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
    return _c("div", { staticClass: "text-right pt-3" }, [
      _c(
        "button",
        {
          staticClass: "mr-2 btn btn-pill btn-hover-shine  btn-primary",
          attrs: { type: "submit" }
        },
        [_vm._v(" Submit ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header alert-info" }, [
      _c("h3", [_vm._v("Bill Request List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "alert-info" }, [
        _c("th", [_vm._v("SN")]),
        _vm._v(" "),
        _c("th", [_vm._v("Last Bill Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Month")]),
        _vm._v(" "),
        _c("th", [_vm._v("Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Reciver")]),
        _vm._v(" "),
        _c("th", [_vm._v("Sender")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/shopinformation/shopBillRequest.vue":
/*!****************************************************************!*\
  !*** ./resources/js/admin/shopinformation/shopBillRequest.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shopBillRequest_vue_vue_type_template_id_3dbc954b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopBillRequest.vue?vue&type=template&id=3dbc954b& */ "./resources/js/admin/shopinformation/shopBillRequest.vue?vue&type=template&id=3dbc954b&");
/* harmony import */ var _shopBillRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopBillRequest.vue?vue&type=script&lang=js& */ "./resources/js/admin/shopinformation/shopBillRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _shopBillRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _shopBillRequest_vue_vue_type_template_id_3dbc954b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _shopBillRequest_vue_vue_type_template_id_3dbc954b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/shopinformation/shopBillRequest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/shopinformation/shopBillRequest.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/admin/shopinformation/shopBillRequest.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shopBillRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./shopBillRequest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopinformation/shopBillRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shopBillRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/shopinformation/shopBillRequest.vue?vue&type=template&id=3dbc954b&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/admin/shopinformation/shopBillRequest.vue?vue&type=template&id=3dbc954b& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shopBillRequest_vue_vue_type_template_id_3dbc954b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./shopBillRequest.vue?vue&type=template&id=3dbc954b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopinformation/shopBillRequest.vue?vue&type=template&id=3dbc954b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shopBillRequest_vue_vue_type_template_id_3dbc954b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shopBillRequest_vue_vue_type_template_id_3dbc954b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);