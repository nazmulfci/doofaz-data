(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newBillApproveList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/billingAdmin/newBillApproveList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/billingAdmin/newBillApproveList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
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
        paySlip: ''
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

      axios.get('/shopBillApproveListAdmin/').then(function (res) {
        _this.billRequestLists = res.data.data;
      });
    },
    billApprove: function billApprove(e) {
      var _this2 = this;

      this.form.get("payBill/" + e).then(function (response) {
        axios.put('https://portal.safejob.net/api/newshopMonthly/' + _this2.authInfos.userName).then(function (response) {});
      });
      this.view();
      Toast.fire({
        icon: "success",
        title: "Bill Request Approve."
      });
    },
    billCencle: function billCencle(e) {
      var _this3 = this;

      axios.get('/shopBillRequestCancel/' + e).then(function (res) {
        _this3.view();
      });
    },
    billRequest: function billRequest() {
      var _this4 = this;

      this.form.post("shopBillRequestEntry").then(function (response) {
        Toast.fire({
          icon: "success",
          //background: '#fcd8d8', red
          //background: "#c9f4c9", //green
          title: "Bill Request Successfull."
        }), _this4.form.reset();
      });
    },
    getCurrencyRate: function getCurrencyRate() {
      var _this5 = this;

      var url = 'getCurrencyRate';
      axios.get(url).then(function (response) {
        _this5.currencyRate = response.data.data;
        _this5.form.amount = response.data.data;
      });
    },
    getAuthInfo: function getAuthInfo() {
      var _this6 = this;

      var url = "getAuthInfo";
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this6.authInfos = response.data;
        _this6.userName = response.userName;
      });
    },
    changeImage: function changeImage(event) {
      var _this7 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this7.form.paySlip = event.target.result;
        console.log(event.target.result);
      };

      reader.readAsDataURL(file);
    },
    getAccountInfoById: function getAccountInfoById() {
      var _this8 = this;

      var url = "getAccountInfoById";
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this8.accountInfos = response.data;
      });
    },
    calculateBillAmount: function calculateBillAmount() {
      var _this9 = this;

      axios.get('/getShopBillMonthListById/' + this.form.totalMonth).then(function (res) {
        _this9.form.amount = _this9.currencyRate * _this9.form.totalMonth - res.data.data.discountAmount;
      });
    },
    shopBillMonthList: function shopBillMonthList() {
      var _this10 = this;

      axios.get('/getShopBillMonthList').then(function (res) {
        _this10.showMonthLists = res.data.data;
      });
    },
    showBankType: function showBankType() {
      var _this11 = this;

      axios.get('/bankTypeEntryList').then(function (res) {
        _this11.showBankTypeDatas = res.data.show;
      });
    },
    bankTypeIdCatch: function bankTypeIdCatch() {
      var _this12 = this;

      axios.get('/companyBankNameList/' + this.form.bankTypeEntryId).then(function (res) {
        _this12.showBankNames = res.data.show;

        if (_this12.form.bankTypeEntryId == 1) {
          _this12.mobileBankInfoStatus = 0;
          _this12.bankInfoStatus = 1;
        } else {
          _this12.mobileBankInfoStatus = 1;
          _this12.bankInfoStatus = 0;
        }
      });
    },
    bankAccountIdCatch: function bankAccountIdCatch() {
      var _this13 = this;

      axios.get('/companyBankAccountList/' + this.form.bankAccountId).then(function (res) {
        if (_this13.form.bankTypeEntryId == 1) {
          _this13.form.bankDetils = 'A/C Name : ' + res.data.data.accountName + '<br>' + 'A/C Number : ' + res.data.data.accountNumber + '<br>' + 'Branch Name : ' + res.data.data.brunchName;
        } else {
          _this13.form.bankDetils = 'A/C Type : ' + res.data.data.accountType + '<br>' + 'A/C Number : ' + res.data.data.accountNumber;
        }
      });
    },
    getBankMoreInfo: function getBankMoreInfo() {
      var _this14 = this;

      axios.get('/bankAccountMoreInfo/' + this.form.bankAccountId).then(function (res) {
        _this14.bankInformationAccountInfoStatus = 1;
        _this14.form.branchName = res.data.data.bankBranch;
        _this14.form.accNo = res.data.data.bankAccountNumber; //======================== check balance 

        var url = "checkBalance/" + res.data.data.accountCode;
        axios.get(url).then(function (response) {
          _this14.available_balance_status = true;
          _this14.available_balance_text = response.data.available_balance;
          _this14.form.available_balance = response.data.available_balance;
        }); // ---------------

        if (_this14.form.bankAmount > _this14.form.available_balance) {
          // this.insufficent_balance_text_status=true
          _this14.insufficent_bank_balance_text_status = false;
          _this14.submit_button_status = true;
          _this14.available_button_status = false;
        } else {
          _this14.insufficent_bank_balance_text_status = false;
        } // ---------------
        //======================== /check balance 

      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/billingAdmin/newBillApproveList.vue?vue&type=template&id=6392cfd1&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/billingAdmin/newBillApproveList.vue?vue&type=template&id=6392cfd1& ***!
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
    _c("div", { staticClass: "card main-card element-block-example mt-5" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive bg-white p-3" }, [
        _c(
          "table",
          { staticClass: "table table-hover table-striped table-bordered" },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.billRequestLists, function(billRequestList, index) {
                return _c("tr", { key: billRequestList.id }, [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                " +
                        _vm._s(billRequestList.shopSNo) +
                        "\n                "
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                " +
                        _vm._s(billRequestList.ShopUserName) +
                        "\n                 "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                " +
                        _vm._s(billRequestList.ShopBillAmount) +
                        "\n                "
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                " +
                        _vm._s(billRequestList.ShopBillDate) +
                        "\n                 "
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
                            "\n                Bank Name : " +
                              _vm._s(billRequestList.bankName) +
                              " "
                          ),
                          _c("br"),
                          _vm._v(
                            "\n                A/C Name : " +
                              _vm._s(billRequestList.accountName)
                          ),
                          _c("br"),
                          _vm._v(
                            "\n                A/C Number : " +
                              _vm._s(billRequestList.accountNumber)
                          ),
                          _c("br"),
                          _vm._v(
                            "\n                Branch Name : " +
                              _vm._s(billRequestList.branchName)
                          ),
                          _c("br"),
                          _vm._v("\n                 Pay Slip : "),
                          _c(
                            "a",
                            {
                              attrs: {
                                href: billRequestList.paySlip,
                                target: "_blank"
                              }
                            },
                            [
                              _c("img", {
                                staticStyle: { width: "100px" },
                                attrs: { src: billRequestList.paySlip }
                              })
                            ]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    billRequestList.bankTypeEntryId == 2
                      ? _c("span", [
                          _vm._v(
                            "\n                A/C Number : " +
                              _vm._s(billRequestList.mbAccountNo) +
                              " "
                          ),
                          _c("br"),
                          _vm._v(
                            "\n                TRX. Number : " +
                              _vm._s(billRequestList.mbTrNo) +
                              "\n              "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      " \n                " +
                        _vm._s(billRequestList.submitTime) +
                        " "
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                " +
                        _vm._s(billRequestList.submitDate) +
                        "\n                 "
                    )
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
    return _c("div", { staticClass: "card-header alert-info" }, [
      _c("h3", [_vm._v("Bill Approve List")])
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
        _c("th", [_vm._v("Shop Info")]),
        _vm._v(" "),
        _c("th", [_vm._v("Billing Info")]),
        _vm._v(" "),
        _c("th", [_vm._v("Month")]),
        _vm._v(" "),
        _c("th", [_vm._v("Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Reciver")]),
        _vm._v(" "),
        _c("th", [_vm._v("Sender")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/billingAdmin/newBillApproveList.vue":
/*!****************************************************************!*\
  !*** ./resources/js/admin/billingAdmin/newBillApproveList.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newBillApproveList_vue_vue_type_template_id_6392cfd1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newBillApproveList.vue?vue&type=template&id=6392cfd1& */ "./resources/js/admin/billingAdmin/newBillApproveList.vue?vue&type=template&id=6392cfd1&");
/* harmony import */ var _newBillApproveList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newBillApproveList.vue?vue&type=script&lang=js& */ "./resources/js/admin/billingAdmin/newBillApproveList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _newBillApproveList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _newBillApproveList_vue_vue_type_template_id_6392cfd1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _newBillApproveList_vue_vue_type_template_id_6392cfd1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/billingAdmin/newBillApproveList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/billingAdmin/newBillApproveList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/admin/billingAdmin/newBillApproveList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newBillApproveList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./newBillApproveList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/billingAdmin/newBillApproveList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newBillApproveList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/billingAdmin/newBillApproveList.vue?vue&type=template&id=6392cfd1&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/admin/billingAdmin/newBillApproveList.vue?vue&type=template&id=6392cfd1& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newBillApproveList_vue_vue_type_template_id_6392cfd1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./newBillApproveList.vue?vue&type=template&id=6392cfd1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/billingAdmin/newBillApproveList.vue?vue&type=template&id=6392cfd1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newBillApproveList_vue_vue_type_template_id_6392cfd1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newBillApproveList_vue_vue_type_template_id_6392cfd1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);