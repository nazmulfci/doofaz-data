(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["incomeTargetList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/incomeTargetList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/view/incomeTargetList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _ref;

    return _ref = {
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a,
      incomeTypeLists: [],
      incomeHeadListByIds: [],
      incomeHeadLists: [],
      paidDateText: '',
      totalAmountText: '',
      totalTarget: 0,
      targetMonthStatus: 0,
      targetDateStatus: 0,
      totalAmountRowStatus: 0,
      incomeCompanyLists: [],
      datas: [],
      chartOfAccounts: [],
      chartOfAccountRegisters: [],
      incomePurposeLists: [],
      incomeDetailsLists: [],
      getInterestTimeTypeLists: [],
      bankInformationStatus: 0,
      cashInformationStatus: 0,
      bankInformationAccountInfoStatus: 0,
      form: new Form({
        rendomNumber: Math.random(1, 1000),
        item: '',
        itemAmount: '',
        incomeHead: '',
        incomeType: '',
        incomeAmount: '',
        incomeCompany: '',
        incomePurpous: '',
        interestTimeType: '',
        mobileNo: '',
        email: '',
        address: '',
        note: '',
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
      showBankNames: [],
      shopBankAllDatas: [],
      corporateBankAccountTypes: [],
      mobileBankAccountTypes: [],
      paymentTypeLists: [],
      showBankTypeDatas: []
    }, _defineProperty(_ref, "showBankNames", []), _defineProperty(_ref, "showBankAccounts", []), _defineProperty(_ref, "bankMoreInfo", []), _defineProperty(_ref, "incomePurposeListViews", []), _ref;
  },
  mounted: function mounted() {
    this.getData();
    this.incomeTypeList();
    this.incomeCompanyList();
    this.getincomeHeadList();
    this.chartOfAccount();
    this.incomePurposeListViews();
    this.paymentTypeList();
    this.showBankType();
    this.getInterestTimeTypeList();
  },
  methods: {
    create: function create() {
      var _this = this;

      this.form.post('/addIncomeTarget').then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Entry Successfully'
        });

        _this.form.reset();

        _this.form.rendomNumber = Math.random(1, 1000);

        _this.getData();

        _this.getincomeDetailsList(0);
      });
    },
    calculateAmount: function calculateAmount(id) {
      if (id == 1) {
        var dueAmount = this.form.incomeAmount - this.form.cashAmount;

        if (dueAmount >= 0) {
          this.form.dueAmount = this.form.incomeAmount - this.form.cashAmount;
        } else {
          this.form.dueAmount = 0;
          this.form.cashAmount = this.form.incomeAmount;
        }
      } else if (id == 2) {
        var _dueAmount = this.form.incomeAmount - this.form.bankAmount;

        if (_dueAmount >= 0) {
          this.form.dueAmount = this.form.incomeAmount - this.form.bankAmount;
        } else {
          this.form.dueAmount = 0;
          this.form.bankAmount = this.form.incomeAmount;
        }
      }
    },
    interestTime: function interestTime() {
      if (this.form.interestTimeType == 3) {
        this.targetMonthStatus = 1;
        this.targetDateStatus = 0;
      } else if (this.form.interestTimeType == 5) {
        this.targetMonthStatus = 0;
        this.targetDateStatus = 1;
      } else {
        this.targetMonthStatus = 0;
        this.targetDateStatus = 0;
      }
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

      axios.get('/bankAccountList/' + this.form.bankEntryId).then(function (res) {
        _this5.showBankAccounts = res.data.data;
      });
    },
    getBankMoreInfo: function getBankMoreInfo() {
      var _this6 = this;

      axios.get('/bankAccountMoreInfo/' + this.form.bankAccountId).then(function (res) {
        _this6.bankInformationAccountInfoStatus = 1;
        _this6.form.branchName = res.data.data.bankBranch;
        _this6.form.accNo = res.data.data.bankAccountNumber;
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
    incomeTypeList: function incomeTypeList() {
      var _this7 = this;

      var uri = "incomeTypeList";
      axios.get(uri).then(function (response) {
        _this7.incomeTypeLists = response.data.data;
      });
    },
    getData: function getData() {
      var _this8 = this;

      axios.get('/getIncomeTargetList').then(function (res) {
        _this8.datas = res.data.data;
        _this8.totalTarget = res.data.totalTarget;
      });
    },
    incomeCompanyList: function incomeCompanyList() {
      var _this9 = this;

      axios.get('/addIncomeExpenseCompany').then(function (res) {
        _this9.incomeCompanyLists = res.data.data;
      });
    },
    incomePurposeList: function incomePurposeList() {
      var _this10 = this;

      axios.get('/getIncomePurposeListById/' + this.form.incomeHead).then(function (res) {
        _this10.incomePurposeLists = res.data.data;
      });
    },
    getAmount: function getAmount() {
      this.form.dueAmount = this.form.incomeAmount;
    },
    getDetailsData: function getDetailsData() {
      this.getincomeDetailsList(this.form.incomePurpous);
    },
    getincomeDetailsList: function getincomeDetailsList(id) {
      var _this11 = this;

      axios.get('/getIncomeDetailsListById/' + id).then(function (res) {
        _this11.incomeDetailsLists = res.data.data;
        _this11.form.incomeAmount = res.data.totalAmount;
        _this11.form.dueAmount = res.data.totalAmount;
        _this11.totalAmountText = res.data.totalAmount;
        _this11.totalAmountRowStatus = res.data.totalAmount;
      });
    },
    incomeItemAdd: function incomeItemAdd(id) {
      var _this12 = this;

      if (this.form.item && this.form.itemAmount) {
        axios.get('/addIncomeDetailsItem/' + this.form.rendomNumber + '/' + this.form.incomePurpous + '/' + this.form.item + '/' + this.form.itemAmount).then(function (res) {
          if (res.data.status) {
            Toast.fire({
              icon: 'success',
              title: 'Item Add Successfull'
            });
            _this12.form.item = '', _this12.form.itemAmount = '';

            _this12.getincomeDetailsList(_this12.form.incomePurpous);
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
    deleteIncomeDetailItem: function deleteIncomeDetailItem(id) {
      var _this13 = this;

      axios.get('/deleteIncomeDetailsItem/' + id).then(function (res) {
        if (res.data.status) {
          Toast.fire({
            icon: 'success',
            title: 'Item Delete Successfull'
          });
          _this13.form.item = '', _this13.form.itemAmount = '';

          _this13.getincomeDetailsList(_this13.form.incomePurpous);
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
      }), axios.get('/chartOfAccountRegister').then(function (res) {
        _this14.chartOfAccountRegisters = res.data.chartOfAccounts;
      }), axios.get('/getInterestTimeTypeList').then(function (res) {
        _this14.getInterestTimeTypeLists = res.data.data;
      }), axios.get('/addIncomeProvider/').then(function (res) {
        _this14.incomePurposeListViews = res.data.data;
      });
    },
    getincomeHead: function getincomeHead() {
      var _this15 = this;

      axios.get('/getIncomeHeadList/' + this.form.incomeType).then(function (res) {
        _this15.incomeHeadListByIds = res.data.data;
      });
    },
    getincomeHeadList: function getincomeHeadList() {
      var _this16 = this;

      axios.get('/addIncomeType/').then(function (res) {
        _this16.incomeHeadLists = res.data.data;
      });
    },
    getIncomeExpenseCompanyInfo: function getIncomeExpenseCompanyInfo() {
      var _this17 = this;

      axios.get('/getIncomeExpenseCompanyIncome/' + this.form.incomePurpous).then(function (res) {
        _this17.form.mobileNo = res.data.data.mobileNo;
        _this17.form.email = res.data.data.email;
        _this17.form.address = res.data.data.address;
      });
    },
    deleteData: function deleteData(id) {
      var _this18 = this;

      axios["delete"]('/addIncomeTarget/' + id).then(function (res) {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/incomeTargetList.vue?vue&type=template&id=51c99f8c&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/view/incomeTargetList.vue?vue&type=template&id=51c99f8c& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive bg-white" }, [
        _c("table", { staticClass: "table table-hover table-bordered mb-0" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm._l(_vm.datas, function(data, index) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    _vm._l(_vm.chartOfAccountRegisters, function(
                      chartOfAccountRegister
                    ) {
                      return data.subHead == chartOfAccountRegister.headCode
                        ? _c("span", [
                            _vm._v(
                              " \n                    " +
                                _vm._s(chartOfAccountRegister.headName) +
                                " \n                "
                            )
                          ])
                        : _vm._e()
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    _vm._l(_vm.getInterestTimeTypeLists, function(
                      getInterestTimeTypeList
                    ) {
                      return data.incomeTargetType == getInterestTimeTypeList.id
                        ? _c(
                            "span",
                            { attrs: { value: getInterestTimeTypeList.id } },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(getInterestTimeTypeList.name) +
                                  " \n                "
                              )
                            ]
                          )
                        : _vm._e()
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm.moment(data.fromDate).format("DD MMMM YYYY")
                        ) +
                        " \n                  "
                    ),
                    data.toDate
                      ? _c("span", [
                          _c("br"),
                          _vm._v(" to "),
                          _c("br"),
                          _vm._v(
                            " " +
                              _vm._s(
                                _vm.moment(data.toDate).format("DD MMMM YYYY")
                              ) +
                              " "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(" " + _vm._s(data.incomeAmount) + " ")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(" " + _vm._s(data.note) + " ")])
                ])
              }),
              _vm._v(" "),
              _c("tr", [
                _vm._m(2),
                _vm._v(" "),
                _c("th", [_vm._v(" " + _vm._s(_vm.totalTarget) + " ")]),
                _vm._v(" "),
                _c("td")
              ])
            ],
            2
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
          _vm._v(" Target Or Budget List")
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
        _c("th", [_vm._v(" SN")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Target Or Budget  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Target Type ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Date ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Target Amount ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Note ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { attrs: { colspan: "4" } }, [
      _c("span", { staticClass: "float-right" }, [_vm._v(" Total ")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/accounting/view/incomeTargetList.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/incomeTargetList.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _incomeTargetList_vue_vue_type_template_id_51c99f8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incomeTargetList.vue?vue&type=template&id=51c99f8c& */ "./resources/js/admin/page/accounting/view/incomeTargetList.vue?vue&type=template&id=51c99f8c&");
/* harmony import */ var _incomeTargetList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incomeTargetList.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/accounting/view/incomeTargetList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _incomeTargetList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _incomeTargetList_vue_vue_type_template_id_51c99f8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _incomeTargetList_vue_vue_type_template_id_51c99f8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/accounting/view/incomeTargetList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/accounting/view/incomeTargetList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/incomeTargetList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_incomeTargetList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./incomeTargetList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/incomeTargetList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_incomeTargetList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/accounting/view/incomeTargetList.vue?vue&type=template&id=51c99f8c&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/incomeTargetList.vue?vue&type=template&id=51c99f8c& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_incomeTargetList_vue_vue_type_template_id_51c99f8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./incomeTargetList.vue?vue&type=template&id=51c99f8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/incomeTargetList.vue?vue&type=template&id=51c99f8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_incomeTargetList_vue_vue_type_template_id_51c99f8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_incomeTargetList_vue_vue_type_template_id_51c99f8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);