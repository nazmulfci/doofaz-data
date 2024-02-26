(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loanReceiverList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/loanReceiverList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/view/loanReceiverList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
      personal: 0,
      ngo: 0,
      bank: 0,
      form: new Form({
        loanProviderTypeId: '',
        personName: '',
        mobileNumber: '',
        address: '',
        branchName: '',
        contactPersonName: '',
        status: 1
      }),
      // showDataEntrys:[],
      loanProviderTypeLists: [],
      showBankNames: [],
      shopBankAllDatas: [],
      corporateBankAccountTypes: [],
      mobileBankAccountTypes: []
    };
  },
  mounted: function mounted() {
    this.getData();
    this.showloanProviderType();
    this.corporateBankAccountType();
    this.mobileBankAccountType();
  },
  methods: {
    create: function create() {
      var _this = this;

      this.form.post('/addLoanProvider').then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Loan Provider Entry Successfully'
        });
        _this.personal = 0, _this.ngo = 0, _this.bank = 0, _this.form.reset();

        _this.getData();
      });
    },
    getData: function getData() {
      var _this2 = this;

      // addLoanProvider
      axios.get('/getLoanReceiverWithLoanNpadiAmount').then(function (res) {
        _this2.shopBankAllDatas = res.data.data;
      });
    },
    corporateBankAccountType: function corporateBankAccountType() {
      var _this3 = this;

      axios.get('/corporateBankAccountType').then(function (res) {
        _this3.corporateBankAccountTypes = res.data.data;
      });
    },
    mobileBankAccountType: function mobileBankAccountType() {
      var _this4 = this;

      axios.get('/mobileBankAccountType').then(function (res) {
        _this4.mobileBankAccountTypes = res.data.data;
      });
    },
    showloanProviderType: function showloanProviderType() {
      var _this5 = this;

      axios.get('/getLoanProviderTypeList').then(function (res) {
        _this5.loanProviderTypeLists = res.data.data;
      });
    },
    bankTypeIdCatch: function bankTypeIdCatch() {
      var _this6 = this;

      if (this.form.loanProviderTypeId == 1) {
        this.personal = 1;
        this.ngo = 0;
        this.bank = 0;
      } else if (this.form.loanProviderTypeId == 2) {
        this.personal = 0;
        this.ngo = 1;
        this.bank = 0;
      } else if (this.form.loanProviderTypeId == 3) {
        this.personal = 0;
        this.ngo = 0;
        this.bank = 1;
      } else {
        this.personal = 0;
        this.ngo = 0;
        this.bank = 0;
      }

      axios.get('/bankNameList/' + this.form.loanProviderTypeId).then(function (res) {
        _this6.showBankNames = res.data.show;
      });
    },
    deleteBankEntry: function deleteBankEntry(bankId) {
      var _this7 = this;

      axios["delete"]('/addBank/' + bankId).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Shop BankEntry Deleted Successfully'
        });

        _this7.getData();
      });
    },
    changeStatus: function changeStatus(bankId) {
      var _this8 = this;

      axios.get('/addBank/' + bankId).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Shop Bank Status Changed Successfully'
        });

        _this8.getData();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/loanReceiverList.vue?vue&type=template&id=0db67cc2&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/view/loanReceiverList.vue?vue&type=template&id=0db67cc2& ***!
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
            _vm._l(_vm.shopBankAllDatas, function(shopBankAllData, index) {
              return _c("tr", [
                _c("td", [_vm._v(_vm._s(index + 1))]),
                _vm._v(" "),
                _c(
                  "td",
                  _vm._l(_vm.loanProviderTypeLists, function(
                    loanProviderTypeList
                  ) {
                    return loanProviderTypeList.id ==
                      shopBankAllData.providerType
                      ? _c("span", [
                          _vm._v(
                            "\n                  " +
                              _vm._s(loanProviderTypeList.type) +
                              "\n                  "
                          )
                        ])
                      : _vm._e()
                  }),
                  0
                ),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(shopBankAllData.providerName) +
                      "\n\n                  "
                  ),
                  shopBankAllData.providerType > 1
                    ? _c("span", [
                        _vm._v(
                          "\n                      (" +
                            _vm._s(shopBankAllData.providerBranchName) +
                            ")\n                  "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(shopBankAllData.providerContactPersonMobileNo))
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(shopBankAllData.providerAddress))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(shopBankAllData.totalLoan))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(shopBankAllData.totalPaid))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(shopBankAllData.totalDue))]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-hover-shine  btn-primary",
                        attrs: {
                          to: "/loanReceiverGeneralLadger" + shopBankAllData.id
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
                        _vm._v("\n                  Ladger ")
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
                          to: "loanReceiverVoucherList" + shopBankAllData.id
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
                        _vm._v("\n                  Voucher ")
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
                          to: "/loanReceiverLoanList" + shopBankAllData.id
                        }
                      },
                      [_c("i", { staticClass: " fa fa-eye" }), _vm._v(" View ")]
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
          _vm._v(" Loan Reciever List")
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
        _c("th", [_vm._v(" Type")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Name")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Mobile Number")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Address")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Loan Amount ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Paid Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Due Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Ladger")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Voucher ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" View")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/accounting/view/loanReceiverList.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/loanReceiverList.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loanReceiverList_vue_vue_type_template_id_0db67cc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loanReceiverList.vue?vue&type=template&id=0db67cc2& */ "./resources/js/admin/page/accounting/view/loanReceiverList.vue?vue&type=template&id=0db67cc2&");
/* harmony import */ var _loanReceiverList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loanReceiverList.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/accounting/view/loanReceiverList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _loanReceiverList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _loanReceiverList_vue_vue_type_template_id_0db67cc2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _loanReceiverList_vue_vue_type_template_id_0db67cc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/accounting/view/loanReceiverList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/accounting/view/loanReceiverList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/loanReceiverList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loanReceiverList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./loanReceiverList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/loanReceiverList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loanReceiverList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/accounting/view/loanReceiverList.vue?vue&type=template&id=0db67cc2&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/loanReceiverList.vue?vue&type=template&id=0db67cc2& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loanReceiverList_vue_vue_type_template_id_0db67cc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./loanReceiverList.vue?vue&type=template&id=0db67cc2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/loanReceiverList.vue?vue&type=template&id=0db67cc2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loanReceiverList_vue_vue_type_template_id_0db67cc2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loanReceiverList_vue_vue_type_template_id_0db67cc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);