(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["advancePaymentList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/advancePaymentList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/view/advancePaymentList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _ref;

    return _ref = {
      incomeTypeLists: [],
      incomeHeadListByIds: [],
      incomeHeadLists: [],
      paidDateText: '',
      totalAmountText: '',
      totalAmountRowStatus: 0,
      incomeCompanyLists: [],
      datas: [],
      chartOfAccounts: [],
      incomePurposeLists: [],
      incomeDetailsLists: [],
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
      advanceSupplierLists: [],
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
  },
  methods: {
    create: function create() {
      var _this = this;

      this.form.post('/addAdvancePayment').then(function (res) {
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
    paymentTypeList: function paymentTypeList() {},
    showBankType: function showBankType() {
      var _this2 = this;

      axios.get('/bankTypeEntryList').then(function (res) {
        _this2.showBankTypeDatas = res.data.show;
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
        this.form.cashAmount = '';
        this.form.bankAmount = this.form.incomeAmount;
      } else if (this.form.paymentType == 1) {
        this.cashInformationStatus = 1;
        this.bankInformationStatus = 0;
        this.form.bankAmount = '';
        this.form.cashAmount = this.form.incomeAmount;
      } else {
        this.cashInformationStatus = 0;
        this.bankInformationStatus = 0;
        this.form.bankAmount = '';
        this.form.cashAmount = '';
      }
    },
    incomeTypeList: function incomeTypeList() {
      var _this6 = this;

      var uri = "incomeTypeList";
      axios.get(uri).then(function (response) {
        _this6.incomeTypeLists = response.data.data;
      });
    },
    getData: function getData() {
      var _this7 = this;

      var url = "advanceSupplierListDashboard";
      axios.get(url).then(function (response) {
        _this7.advanceSupplierLists = response.data.data;
        _this7.advanceSupplierTotal = response.data.totalDue;
      });
    },
    incomeCompanyList: function incomeCompanyList() {
      var _this8 = this;

      axios.get('/addIncomeExpenseCompany').then(function (res) {
        _this8.incomeCompanyLists = res.data.data;
      });
    },
    incomePurposeList: function incomePurposeList() {
      var _this9 = this;

      axios.get('/getIncomePurposeListById/' + this.form.incomeHead).then(function (res) {
        _this9.incomePurposeLists = res.data.data;
      });
    },
    incomePurposeListViews: function incomePurposeListViews() {},
    getAmount: function getAmount() {
      this.form.dueAmount = this.form.incomeAmount;
    },
    getDetailsData: function getDetailsData() {
      this.getincomeDetailsList(this.form.incomePurpous);
    },
    getincomeDetailsList: function getincomeDetailsList(id) {
      var _this10 = this;

      axios.get('/getIncomeDetailsListById/' + id).then(function (res) {
        _this10.incomeDetailsLists = res.data.data;
        _this10.form.incomeAmount = res.data.totalAmount;
        _this10.form.dueAmount = res.data.totalAmount;
        _this10.totalAmountText = res.data.totalAmount;
        _this10.totalAmountRowStatus = res.data.totalAmount;
      });
    },
    incomeItemAdd: function incomeItemAdd(id) {
      var _this11 = this;

      if (this.form.item && this.form.itemAmount) {
        axios.get('/addIncomeDetailsItem/' + this.form.rendomNumber + '/' + this.form.incomePurpous + '/' + this.form.item + '/' + this.form.itemAmount).then(function (res) {
          if (res.data.status) {
            Toast.fire({
              icon: 'success',
              title: 'Item Add Successfull'
            });
            _this11.form.item = '', _this11.form.itemAmount = '';

            _this11.getincomeDetailsList(_this11.form.incomePurpous);
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
      var _this12 = this;

      axios.get('/deleteIncomeDetailsItem/' + id).then(function (res) {
        if (res.data.status) {
          Toast.fire({
            icon: 'success',
            title: 'Item Delete Successfull'
          });
          _this12.form.item = '', _this12.form.itemAmount = '';

          _this12.getincomeDetailsList(_this12.form.incomePurpous);
        } else {
          Toast.fire({
            icon: 'error',
            title: 'Item Not Delete'
          });
        }
      });
    },
    chartOfAccount: function chartOfAccount() {
      var _this13 = this;

      axios.get('/chartOfAccount').then(function (res) {
        _this13.chartOfAccounts = res.data.chartOfAccounts;
      }), axios.get('/paymentTypeList').then(function (res) {
        _this13.paymentTypeLists = res.data.data;
      }), axios.get('/addIncomeProvider/').then(function (res) {
        _this13.incomePurposeListViews = res.data.data;
      });
    },
    getincomeHead: function getincomeHead() {
      var _this14 = this;

      axios.get('/getIncomeHeadList/' + this.form.incomeType).then(function (res) {
        _this14.incomeHeadListByIds = res.data.data;
      });
    },
    getincomeHeadList: function getincomeHeadList() {
      var _this15 = this;

      axios.get('/addIncomeType/').then(function (res) {
        _this15.incomeHeadLists = res.data.data;
      });
    },
    getIncomeExpenseCompanyInfo: function getIncomeExpenseCompanyInfo() {
      var _this16 = this;

      axios.get('/getIncomeExpenseCompanyIncome/' + this.form.incomePurpous).then(function (res) {
        _this16.form.mobileNo = res.data.data.mobileNo;
        _this16.form.email = res.data.data.email;
        _this16.form.address = res.data.data.address;
      });
    },
    deleteData: function deleteData(id) {
      var _this17 = this;

      axios["delete"]('/addAdvancePayment/' + id).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Delete Successfull'
        });

        _this17.getData();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/advancePaymentList.vue?vue&type=template&id=599a6a44&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/view/advancePaymentList.vue?vue&type=template&id=599a6a44& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
            _vm._l(_vm.advanceSupplierLists, function(
              advanceSupplierList,
              index
            ) {
              return _c("tr", [
                _c("td", [_vm._v(" " + _vm._s(++index) + " ")]),
                _vm._v(" "),
                _c("td", [
                  _vm._v("  " + _vm._s(advanceSupplierList.name) + " ")
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v("  " + _vm._s(advanceSupplierList.mobile) + " ")
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    " " +
                      _vm._s(
                        parseFloat(advanceSupplierList.currentDue).toFixed(2)
                      ) +
                      " "
                  )
                ])
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c("tfoot", [
            _c("tr", [
              _c("th", { staticClass: "text-right", attrs: { colspan: "3" } }, [
                _vm._v(" Total ")
              ]),
              _vm._v(" "),
              _c("th", [
                _vm._v(_vm._s(parseFloat(_vm.advanceSupplierTotal).toFixed(2)))
              ])
            ])
          ])
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
          _vm._v("Advance Payment List")
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
        _c("th", [_vm._v(" Supplier Name  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Mobile No  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Amount ")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/accounting/view/advancePaymentList.vue":
/*!************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/advancePaymentList.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _advancePaymentList_vue_vue_type_template_id_599a6a44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advancePaymentList.vue?vue&type=template&id=599a6a44& */ "./resources/js/admin/page/accounting/view/advancePaymentList.vue?vue&type=template&id=599a6a44&");
/* harmony import */ var _advancePaymentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advancePaymentList.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/accounting/view/advancePaymentList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _advancePaymentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _advancePaymentList_vue_vue_type_template_id_599a6a44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _advancePaymentList_vue_vue_type_template_id_599a6a44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/accounting/view/advancePaymentList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/accounting/view/advancePaymentList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/advancePaymentList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_advancePaymentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./advancePaymentList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/advancePaymentList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_advancePaymentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/accounting/view/advancePaymentList.vue?vue&type=template&id=599a6a44&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/advancePaymentList.vue?vue&type=template&id=599a6a44& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_advancePaymentList_vue_vue_type_template_id_599a6a44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./advancePaymentList.vue?vue&type=template&id=599a6a44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/advancePaymentList.vue?vue&type=template&id=599a6a44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_advancePaymentList_vue_vue_type_template_id_599a6a44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_advancePaymentList_vue_vue_type_template_id_599a6a44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);