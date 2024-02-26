(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loanProviderLoanList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/loanProviderLoanList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/view/loanProviderLoanList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _ref;

    return _ref = {
      companyName: '',
      monthlyDateStatus: 1,
      monthlyAmountStatus: 1,
      paidDateText: '',
      month: 0,
      mobile_bank_info: 0,
      agent_bank_info: 0,
      corporate_bank_info: 0,
      howMuchTimeStatus: false,
      loanPayTypeStatus: true,
      bankInformationStatus: 0,
      bankInformationAccountInfoStatus: 0,
      form: new Form({
        branchName: '',
        accNo: '',
        loanProviderTypeId: '',
        loanProviderId: '',
        interestType: '',
        loanPayType: '',
        howMuchTime: '',
        loanMainAmount: '',
        monthlyAmount: '',
        paidDate: '',
        paymentType: '',
        bankTypeEntryId: '',
        bankEntryId: '',
        bankAccountId: '',
        status: 1
      }),
      // showDataEntrys:[],
      getInterestTypeLists: [],
      getInterestTimeTypeLists: [],
      loanProviderTypeLists: [],
      loanProviderLists: [],
      loanProviderInfo: [],
      getLoanPayTypeLists: [],
      showBankNames: [],
      shopBankAllDatas: [],
      corporateBankAccountTypes: [],
      mobileBankAccountTypes: [],
      loanProviderListByIds: [],
      paymentTypeLists: [],
      showBankTypeDatas: []
    }, _defineProperty(_ref, "showBankNames", []), _defineProperty(_ref, "showBankAccounts", []), _defineProperty(_ref, "bankMoreInfo", []), _ref;
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
    this.showloanProviderInfo();
  },
  methods: {
    create: function create() {
      var _this = this;

      this.form.post('/addProviderLoanReceive').then(function (res) {
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
          _this.bankInformationAccountInfoStatus = 0;

          _this.form.reset();

          _this.getData();
        }
      });
    },
    getData: function getData() {
      var _this2 = this;

      axios.get("getLoanProviderLoanList/".concat(this.$route.params.id)).then(function (res) {
        _this2.shopBankAllDatas = res.data.data;
      });
    },
    showloanProviderType: function showloanProviderType() {
      var _this3 = this;

      axios.get('/getLoanProviderTypeList').then(function (res) {
        _this3.loanProviderTypeLists = res.data.data;
      });
    },
    getInterestTypeList: function getInterestTypeList() {
      var _this4 = this;

      axios.get('/getInterestTypeList/0').then(function (res) {
        _this4.getInterestTypeLists = res.data.data;
      });
    },
    getInterestTimeTypeList: function getInterestTimeTypeList() {
      var _this5 = this;

      axios.get("/getInterestTimeTypeList/").then(function (res) {
        _this5.getInterestTimeTypeLists = res.data.data;
      });
    },
    getLoanPayTypeList: function getLoanPayTypeList() {
      var _this6 = this;

      axios.get('/getLoanPayTypeList/0').then(function (res) {
        _this6.getLoanPayTypeLists = res.data.data;
      });
    },
    paymentTypeList: function paymentTypeList() {
      var _this7 = this;

      axios.get('/paymentTypeList').then(function (res) {
        _this7.paymentTypeLists = res.data.data;
      });
    },
    getBankMoreInfo: function getBankMoreInfo() {
      var _this8 = this;

      axios.get('/bankAccountMoreInfo/' + this.form.bankAccountId).then(function (res) {
        _this8.bankInformationAccountInfoStatus = 1;
        _this8.form.branchName = res.data.data.bankBranch;
        _this8.form.accNo = res.data.data.bankAccountNumber;
      });
    },
    paymentReceiveType: function paymentReceiveType() {
      if (this.form.paymentType == 2) {
        this.bankInformationStatus = 1;
      } else {
        this.bankInformationStatus = 0;
      }
    },
    showBankType: function showBankType() {
      var _this9 = this;

      axios.get('/bankTypeEntryList').then(function (res) {
        _this9.showBankTypeDatas = res.data.show;
      });
    },
    showloanProviderList: function showloanProviderList() {
      var _this10 = this;

      axios.get("addLoanProvider").then(function (res) {
        _this10.loanProviderLists = res.data.data;
      });
    },
    showloanProviderInfo: function showloanProviderInfo() {
      var _this11 = this;

      axios.get("getLoanProviderById/".concat(this.$route.params.id)).then(function (res) {
        _this11.loanProviderInfo = res.data.data;
      });
    },
    bankTypeIdCatch: function bankTypeIdCatch() {
      var _this12 = this;

      axios.get('/bankNameList/' + this.form.bankTypeEntryId).then(function (res) {
        _this12.showBankNames = res.data.show;
      });
    },
    bankAccountIdCatch: function bankAccountIdCatch() {
      var _this13 = this;

      axios.get('/bankAccountList/' + this.form.bankEntryId).then(function (res) {
        _this13.showBankAccounts = res.data.data;
      });
    },
    loanProviderTypeIdCatch: function loanProviderTypeIdCatch() {
      var _this14 = this;

      if (this.form.loanProviderTypeId > 1) {
        axios.get('/getInterestTypeList/1').then(function (res) {
          _this14.getInterestTypeLists = res.data.data;
        });
      } else {
        axios.get('/getInterestTypeList/0').then(function (res) {
          _this14.getInterestTypeLists = res.data.data;
        });
      }

      axios.get('/loanProviderListById/1/' + this.form.loanProviderTypeId).then(function (res) {
        //alert(this.form.loanProviderTypeId);
        _this14.loanProviderListByIds = res.data.data;
      });
    },
    interestType: function interestType() {
      var _this15 = this;

      if (this.form.loanProviderTypeId == 1) {
        if (this.form.interestType == 1) {
          this.loanPayTypeStatus = true;
        } else {
          this.loanPayTypeStatus = false;
        }
      } else {
        axios.get('/getLoanPayTypeList/1').then(function (res) {
          _this15.getLoanPayTypeLists = res.data.data;
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

      if (this.form.interestTimeType > 4) {
        this.monthlyDateStatus = 0;
        this.monthlyAmountStatus = 0;
      } else {
        this.monthlyDateStatus = 1;
        this.monthlyAmountStatus = 1;
      }
    },
    deleteBankEntry: function deleteBankEntry(bankId) {
      var _this16 = this;

      axios["delete"]('/addBank/' + bankId).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Shop BankEntry Deleted Successfully'
        });

        _this16.getData();
      });
    },
    changeStatus: function changeStatus(bankId) {
      var _this17 = this;

      axios.get('/addBank/' + bankId).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Shop Bank Status Changed Successfully'
        });

        _this17.getData();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/loanProviderLoanList.vue?vue&type=template&id=b909719e&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/view/loanProviderLoanList.vue?vue&type=template&id=b909719e& ***!
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
    _c("div", { staticClass: "card main-card  element-block-example mt-5" }, [
      _c(
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
            _vm._v(
              " Loan Information of " +
                _vm._s(_vm.loanProviderInfo.providerName) +
                " "
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive bg-white" }, [
        _c("table", { staticClass: "table table-hover table-bordered mb-0" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.shopBankAllDatas, function(shopBankAllData, index) {
              return _c("tr", [
                _c("td", [_vm._v(_vm._s(index + 1))]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _vm._l(_vm.loanProviderTypeLists, function(
                      loanProviderTypeList
                    ) {
                      return loanProviderTypeList.id ==
                        shopBankAllData.loanProviderTypeId
                        ? _c("span", [
                            _vm._v(
                              "\n                  " +
                                _vm._s(loanProviderTypeList.type) +
                                "\n                  "
                            )
                          ])
                        : _vm._e()
                    }),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _vm._l(_vm.loanProviderLists, function(loanProviderList) {
                      return loanProviderList.id ==
                        shopBankAllData.loanProviderId
                        ? _c("span", [
                            _vm._v(
                              "\n                       " +
                                _vm._s(loanProviderList.providerName) +
                                "\n                   "
                            )
                          ])
                        : _vm._e()
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _vm._l(_vm.getInterestTypeLists, function(
                      getInterestTypeList
                    ) {
                      return getInterestTypeList.id ==
                        shopBankAllData.interestType
                        ? _c("span", [
                            _vm._v(
                              "\n                      " +
                                _vm._s(getInterestTypeList.name) +
                                "\n                  "
                            )
                          ])
                        : _vm._e()
                    }),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _vm._l(_vm.getLoanPayTypeLists, function(
                      getLoanPayTypeList
                    ) {
                      return getLoanPayTypeList.id ==
                        shopBankAllData.loanPayType
                        ? _c("span", [
                            _vm._v(
                              "\n                  " +
                                _vm._s(getLoanPayTypeList.name) +
                                "\n                  "
                            )
                          ])
                        : _vm._e()
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "td",
                  _vm._l(_vm.getInterestTimeTypeLists, function(
                    getInterestTimeTypeList
                  ) {
                    return getInterestTimeTypeList.id ==
                      shopBankAllData.interestTimeType
                      ? _c("span", [
                          _vm._v(
                            "\n                          " +
                              _vm._s(getInterestTimeTypeList.name) +
                              "\n                      "
                          )
                        ])
                      : _vm._e()
                  }),
                  0
                ),
                _vm._v(" "),
                _c("td", [
                  _vm._v(" " + _vm._s(shopBankAllData.loanMainAmount))
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(" " + _vm._s(shopBankAllData.monthlyAmount) + " "),
                  _c("br"),
                  _vm._v(" " + _vm._s(shopBankAllData.paidDate) + "  ")
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(" " + _vm._s(shopBankAllData.paidAmount) + " ")
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(" " + _vm._s(shopBankAllData.dueAmount) + " ")
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-hover-shine  btn-primary",
                        attrs: {
                          to: "/loanProviderLoanStatement" + shopBankAllData.id
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "bi bi-list-ul",
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
                                  "M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                              }
                            })
                          ]
                        ),
                        _vm._v("\n                  Statement")
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-hover-shine  btn-primary",
                        attrs: {
                          to:
                            "/loanReceiveFromProviderEdit" + shopBankAllData.id
                        }
                      },
                      [_vm._v("\n                  Re-Loan ")]
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
    return _c("thead", [
      _c("tr", { staticStyle: { background: "rgba(242, 242, 242, 0.47)" } }, [
        _c("th", [_vm._v(" SN")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Provider ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Interest  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Loan Time ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Loan Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Installment ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Total Pay")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Total Due ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Statement ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Re-Loan ")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/accounting/view/loanProviderLoanList.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/loanProviderLoanList.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loanProviderLoanList_vue_vue_type_template_id_b909719e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loanProviderLoanList.vue?vue&type=template&id=b909719e& */ "./resources/js/admin/page/accounting/view/loanProviderLoanList.vue?vue&type=template&id=b909719e&");
/* harmony import */ var _loanProviderLoanList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loanProviderLoanList.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/accounting/view/loanProviderLoanList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _loanProviderLoanList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _loanProviderLoanList_vue_vue_type_template_id_b909719e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _loanProviderLoanList_vue_vue_type_template_id_b909719e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/accounting/view/loanProviderLoanList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/accounting/view/loanProviderLoanList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/loanProviderLoanList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loanProviderLoanList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./loanProviderLoanList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/loanProviderLoanList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loanProviderLoanList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/accounting/view/loanProviderLoanList.vue?vue&type=template&id=b909719e&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/loanProviderLoanList.vue?vue&type=template&id=b909719e& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loanProviderLoanList_vue_vue_type_template_id_b909719e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./loanProviderLoanList.vue?vue&type=template&id=b909719e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/loanProviderLoanList.vue?vue&type=template&id=b909719e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loanProviderLoanList_vue_vue_type_template_id_b909719e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loanProviderLoanList_vue_vue_type_template_id_b909719e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);