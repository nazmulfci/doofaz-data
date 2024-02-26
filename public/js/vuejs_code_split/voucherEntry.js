(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["voucherEntry"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loading: false,
      voucherTypeLists: [],
      voucherInformationLists: [],
      paymentTo: 'Receiver Name',
      paymentToStatus: true,
      bankInfo: false,
      receiverBankAccountNameStatus: false,
      headOfCashBookTitle: 'Head Of Cash Book',
      available_balance_text: '',
      head_available_balance_text: '',
      bankSenderName: '',
      available_balance_status: false,
      head_available_balance_status: false,
      headOfCashBookLists: [],
      headOfAccountLists: [],
      subHeadOfAccountLists: [],
      subHeadStatus: false,
      invalid: false,
      moment: moment__WEBPACK_IMPORTED_MODULE_1___default.a,
      form: new Form({
        voucherDate: new Date().toISOString().slice(0, 10),
        voucherType: "",
        voucherNo: "",
        paymentTo: "",
        mobileNo: "",
        checkPaymentType: "",
        receiverBankAccountName: "",
        receiverBankAccountNo: "",
        chequeNo: "",
        chequeDate: new Date().toISOString().slice(0, 10),
        headOfCashBook: "",
        headOfAccounts: "",
        subHead: "",
        subHeadMulti: "",
        voucherAmount: "",
        available_balance: "",
        head_available_balance: "",
        particular: ""
      })
    };
  },
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  mounted: function mounted() {
    this.view();
  },
  methods: {
    clearForm: function clearForm() {
      this.subHeadStatus = false;
      this.available_balance_status = false;
      this.form.voucherType = '';
      this.form.voucherNo = '';
      this.form.paymentTo = '';
      this.form.mobileNo = '';
      this.form.checkPaymentType = '';
      this.form.receiverBankAccountName = '';
      this.form.receiverBankAccountNo = '';
      this.form.chequeNo = '';
      this.form.chequeDate = '';
      this.form.headOfCashBook = '';
      this.form.headOfAccounts = '';
      this.form.subHead = '';
      this.form.subHeadMulti = '';
      this.form.voucherAmount = '';
      this.form.particular = '';
    },
    view: function view() {
      var _this = this;

      var url = "voucherEntryInformation";
      axios.get(url).then(function (response) {
        _this.voucherInformationLists = response.data.voucherInformation;
        _this.voucherTypeLists = response.data.list;
      })["catch"](function (error) {
        if (error.response.status === 401) {
          Toast.fire({
            icon: "error",
            title: "Loging out......"
          }); //auth.logout();

          window.location.replace('');
        }
      });
    },
    emptyAfterSubmit: function emptyAfterSubmit() {
      this.available_balance_status = false;
      this.available_balance_text = '';
      this.form.available_balance = '';
      this.head_available_balance_status = false;
      this.head_available_balance_text = '';
      this.form.head_available_balance = '';
      this.subHeadStatus = false;
      this.form.voucherAmount = '';
    },
    calculate: function calculate(e) {
      var stringValue = e.target.value.toString();
      var regex = /^\d*(\.\d{1,2})?$/;

      if (!stringValue.match(regex) && this.form.voucherAmount !== "") {
        this.invalid = true;
        this.form.voucherAmount = '';
      } else {
        this.invalid = false;
      }
    },
    calculateAmount: function calculateAmount() {
      // this.form.voucherAmount = 1;
      var cash_avaialble = this.form.available_balance;
      var head_available = this.form.head_available_balance;
      var amount = 0; // -----------------

      if (this.form.voucherAmount < 0) {} //this.form.voucherAmount = 0;
      // -----------------


      if (cash_avaialble > head_available) {
        amount = head_available;
      } else if (cash_avaialble < head_available) {
        amount = cash_avaialble;
      } else {
        amount = cash_avaialble;
      }

      if (this.form.voucherType < 5) {
        if (this.form.voucherAmount > amount) {
          if (amount > 0) {
            this.form.voucherAmount = amount;
          } else {// this.form.voucherAmount = 0;
          }
        }
      } else {
        if (this.form.voucherAmount > cash_avaialble) {
          if (cash_avaialble > 0) {
            this.form.voucherAmount = cash_avaialble;
          } else {// this.form.voucherAmount = 0;
          }
        }
      }
    },
    checkBalance: function checkBalance() {
      var _this2 = this;

      this.form.headOfAccounts = '';
      this.form.subHead = '';
      var url = "checkBalance/" + this.form.headOfCashBook;
      axios.get(url).then(function (response) {
        _this2.available_balance_status = true;
        _this2.available_balance_text = response.data.available_balance;
        _this2.form.available_balance = response.data.available_balance;
      });
    },
    checkHeadBalance: function checkHeadBalance(value) {
      var _this3 = this;

      this.form.subHead = value.headCode;
      this.form.voucherAmount = '';
      var url = "checkBalance/" + this.form.subHead;
      axios.get(url).then(function (response) {
        _this3.headOfAccountLists = response.data.headAcc;
        _this3.form.headOfAccounts = response.data.precode; // alert(response.data.available_balance);

        _this3.head_available_balance_status = true;
        var abl = Math.abs(response.data.available_balance);

        if (response.data.available_balance >= 0) {
          _this3.head_available_balance_text = '<span class="badge badge-success">' + abl + '</span>';
        } else {
          _this3.head_available_balance_text = '<span class="badge badge-danger">' + abl + '</span>';
        }

        _this3.form.head_available_balance = abl;
      });
    },
    getVoucherCode: function getVoucherCode() {
      var _this4 = this;

      this.emptyAfterSubmit();
      this.form.headOfCashBook = '';
      this.form.headOfAccounts = '';
      this.subHeadStatus = false;
      this.form.subHead = '';
      this.headOfCashBookLists = [];
      this.headOfAccountLists = [];
      var url = "getVoucherCode/" + this.form.voucherType;
      axios.get(url).then(function (response) {
        _this4.form.voucherNo = response.data.code;
      });

      if (this.form.voucherType == 1) {
        this.paymentTo = 'Receiver Name';
        this.headOfCashBookTitle = 'Head Of Cash Book';
        this.paymentToStatus = true;
        this.bankInfo = false;
        this.subHeadStatus = true; // get voucher head code

        var _url = "getVoucherHeadCashbookCodeNew/" + this.form.voucherType;

        axios.get(_url).then(function (response) {
          _this4.headOfCashBookLists = response.data.headOfCashBookList;
          _this4.subHeadOfAccountLists = response.data.headOfAccountList;
        }); // get voucher head code
      } else if (this.form.voucherType == 2) {
        this.paymentTo = 'Sender Name';
        this.headOfCashBookTitle = 'Head Of Cash Book';
        this.paymentToStatus = true;
        this.bankInfo = false;
        this.subHeadStatus = true; // get voucher head code

        var _url2 = "getVoucherHeadCashbookCodeNew/" + this.form.voucherType;

        axios.get(_url2).then(function (response) {
          _this4.headOfCashBookLists = response.data.headOfCashBookList;
          _this4.subHeadOfAccountLists = response.data.headOfAccountList;
        }); // get voucher head code
      } else if (this.form.voucherType == 3) {
        this.paymentTo = 'Receiver Name';
        this.headOfCashBookTitle = 'Head Of Bank Book';
        this.paymentToStatus = true;
        this.bankInfo = true;
        this.bankSenderName = 'Receiver';
        this.subHeadStatus = true; // get voucher head code

        var _url3 = "getVoucherHeadCashbookCodeNew/" + this.form.voucherType;

        axios.get(_url3).then(function (response) {
          _this4.headOfCashBookLists = response.data.headOfCashBookList;
          _this4.subHeadOfAccountLists = response.data.headOfAccountList;
        }); // get voucher head code
      } else if (this.form.voucherType == 4) {
        this.paymentTo = 'Sender Name';
        this.headOfCashBookTitle = 'Head Of Bank Book';
        this.paymentToStatus = true;
        this.bankInfo = true;
        this.subHeadStatus = true;
        this.bankSenderName = 'Sender'; // get voucher head code

        var _url4 = "getVoucherHeadCashbookCodeNew/" + this.form.voucherType;

        axios.get(_url4).then(function (response) {
          _this4.headOfCashBookLists = response.data.headOfCashBookList;
          _this4.subHeadOfAccountLists = response.data.headOfAccountList;
        }); // get voucher head code
      } else if (this.form.voucherType == 5) {
        this.paymentTo = 'Receive by';
        this.paymentToStatus = false;
        this.bankInfo = false;
        this.subHeadStatus = true; // get voucher head code

        var _url5 = "getVoucherHeadCashbookCodeNew/" + this.form.voucherType;

        axios.get(_url5).then(function (response) {
          _this4.headOfCashBookLists = response.data.headOfCashBookList;
          _this4.subHeadOfAccountLists = response.data.headOfAccountList;
        }); // get voucher head code
      } else if (this.form.voucherType == 6) {
        this.paymentTo = 'Receive by';
        this.paymentToStatus = false;
        this.bankInfo = false;
        this.subHeadStatus = true; // get voucher head code

        var _url6 = "getVoucherHeadCashbookCodeNew/" + this.form.voucherType;

        axios.get(_url6).then(function (response) {
          _this4.headOfCashBookLists = response.data.headOfCashBookList;
          _this4.subHeadOfAccountLists = response.data.headOfAccountList;
        }); // get voucher head code
      }
    },
    getSubHeadOfAccounts: function getSubHeadOfAccounts() {
      var _this5 = this;

      this.form.subHead = ''; // get voucher head code

      var url = "getSubHeadOfAccountsForContraVoucher/" + this.form.voucherType + '/' + this.form.headOfCashBook + '/' + this.form.headOfAccounts;
      axios.get(url).then(function (response) {
        _this5.subHeadStatus = true;
        _this5.subHeadOfAccountLists = response.data.subHeadList;
      }); // get voucher head code
    },
    checkPaymentType: function checkPaymentType() {
      if (this.form.checkPaymentType == 2) {
        this.receiverBankAccountNameStatus = true;
      } else {
        this.receiverBankAccountNameStatus = false;
      }
    },
    deletePost: function deletePost(id) {
      var _this6 = this;

      var uri = "voucherEntryInformation/".concat(id);
      axios["delete"](uri).then(function (response) {
        Toast.fire({
          icon: 'success',
          title: 'Delete Successfull.'
        });

        _this6.view();
      });
    },
    addNewVoucherInformation: function addNewVoucherInformation() {
      var _this7 = this;

      this.loading = true;
      this.form.post("voucherEntryInformation").then(function (response) {
        _this7.loading = false;
        Toast.fire({
          icon: "success",
          //background: '#fcd8d8', red
          background: '#c9f4c9',
          //green
          title: "Voucher Entry Successfull."
        }), _this7.view();

        _this7.form.reset();

        _this7.emptyAfterSubmit();
      })["catch"](function (res) {
        _this7.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.tree{\r\n  width:1px;\r\n  height: 51px;\r\n  background: black;\r\n  position: relative;\r\n  float: left;\r\n  margin-right: 30px;\n}\n.tree1{\r\n  width: 30px;\r\n  height: 1px;\r\n  background: rgb(0, 0, 0);\r\n  margin-top: 25px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./voucherEntryNew.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=template&id=1ed2ff92&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=template&id=1ed2ff92& ***!
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
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.addNewVoucherInformation($event)
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
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _vm._m(1),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.voucherDate,
                                expression: "form.voucherDate"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("voucherDate")
                            },
                            attrs: { type: "date" },
                            domProps: { value: _vm.form.voucherDate },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "voucherDate",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "voucherDate" }
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
                                  value: _vm.form.voucherType,
                                  expression: "form.voucherType"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("voucherType")
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
                                      "voucherType",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.getVoucherCode()
                                  }
                                ]
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v(" Select Voucher Type ")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.voucherTypeLists, function(
                                voucherTypeList
                              ) {
                                return voucherTypeList.id < 6
                                  ? _c(
                                      "option",
                                      {
                                        domProps: { value: voucherTypeList.id }
                                      },
                                      [
                                        _vm._v(
                                          " " +
                                            _vm._s(voucherTypeList.name) +
                                            " "
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
                            attrs: { form: _vm.form, field: "voucherType" }
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
                                value: _vm.form.voucherNo,
                                expression: "form.voucherNo"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("voucherNo")
                            },
                            attrs: { type: "text", disabled: "" },
                            domProps: { value: _vm.form.voucherNo },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "voucherNo",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "voucherNo" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.paymentToStatus
                        ? _c("div", { staticClass: "downOfVoucherNo" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [
                                  _vm._v(" " + _vm._s(_vm.paymentTo) + " ")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.paymentTo,
                                      expression: "form.paymentTo"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "paymentTo"
                                    )
                                  },
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.form.paymentTo },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "paymentTo",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.form, field: "paymentTo" }
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
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "mobileNo"
                                    )
                                  },
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.form.mobileNo },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "mobileNo",
                                        $event.target.value
                                      )
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
                            _vm.bankInfo
                              ? _c("div", { staticClass: "bankInfo" }, [
                                  _c(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      _c("label", [
                                        _vm._v(" Check Payment Type ")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.checkPaymentType,
                                              expression:
                                                "form.checkPaymentType"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "checkPaymentType"
                                            )
                                          },
                                          on: {
                                            change: [
                                              function($event) {
                                                var $$selectedVal = Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function(o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function(o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                                _vm.$set(
                                                  _vm.form,
                                                  "checkPaymentType",
                                                  $event.target.multiple
                                                    ? $$selectedVal
                                                    : $$selectedVal[0]
                                                )
                                              },
                                              function($event) {
                                                return _vm.checkPaymentType()
                                              }
                                            ]
                                          }
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "" } },
                                            [_vm._v(" Select ")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "1" } },
                                            [_vm._v(" Cash Check ")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "2" } },
                                            [_vm._v(" Account Payable Check ")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("has-error", {
                                        attrs: {
                                          form: _vm.form,
                                          field: "checkPaymentType"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.receiverBankAccountNameStatus
                                    ? _c("div", [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c("label", [
                                              _vm._v(
                                                " " +
                                                  _vm._s(_vm.bankSenderName) +
                                                  " Bank Account Name "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.form
                                                      .receiverBankAccountName,
                                                  expression:
                                                    "form.receiverBankAccountName"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              class: {
                                                "is-invalid": _vm.form.errors.has(
                                                  "receiverBankAccountName"
                                                )
                                              },
                                              attrs: { type: "text" },
                                              domProps: {
                                                value:
                                                  _vm.form
                                                    .receiverBankAccountName
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.form,
                                                    "receiverBankAccountName",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("has-error", {
                                              attrs: {
                                                form: _vm.form,
                                                field: "receiverBankAccountName"
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
                                            _c("label", [
                                              _vm._v(
                                                " " +
                                                  _vm._s(_vm.bankSenderName) +
                                                  " Bank Account No "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.form
                                                      .receiverBankAccountNo,
                                                  expression:
                                                    "form.receiverBankAccountNo"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              class: {
                                                "is-invalid": _vm.form.errors.has(
                                                  "receiverBankAccountNo"
                                                )
                                              },
                                              attrs: { type: "text" },
                                              domProps: {
                                                value:
                                                  _vm.form.receiverBankAccountNo
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.form,
                                                    "receiverBankAccountNo",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("has-error", {
                                              attrs: {
                                                form: _vm.form,
                                                field: "receiverBankAccountNo"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      _c("label", [_vm._v(" Cheque No  ")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.chequeNo,
                                            expression: "form.chequeNo"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "chequeNo"
                                          )
                                        },
                                        attrs: { type: "text" },
                                        domProps: { value: _vm.form.chequeNo },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "chequeNo",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("has-error", {
                                        attrs: {
                                          form: _vm.form,
                                          field: "chequeNo"
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
                                      _c("label", [_vm._v(" Cheque Date  ")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.chequeDate,
                                            expression: "form.chequeDate"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "chequeDate"
                                          )
                                        },
                                        attrs: { type: "date" },
                                        domProps: {
                                          value: _vm.form.chequeDate
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "chequeDate",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("has-error", {
                                        attrs: {
                                          form: _vm.form,
                                          field: "chequeDate"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ])
                              : _vm._e()
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [
                            _vm._v(" " + _vm._s(_vm.headOfCashBookTitle) + " "),
                            _c("i", {
                              staticClass:
                                "fa fa-star text-danger text-10 cursor-pointer",
                              attrs: {
                                title: "Mandatory Field",
                                "data-placement": "top",
                                "data-toggle": "tooltip",
                                "data-original-title": "Mandatory Field"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _vm.available_balance_status
                            ? _c("span", [
                                _c(
                                  "span",
                                  { staticClass: "badge badge-primary" },
                                  [
                                    _vm._v(
                                      " " +
                                        _vm._s(_vm.available_balance_text) +
                                        " "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
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
                                  value: _vm.form.headOfCashBook,
                                  expression: "form.headOfCashBook"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has(
                                  "headOfCashBook"
                                )
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
                                      "headOfCashBook",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.checkBalance()
                                  }
                                ]
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v(" -------------- ")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.headOfCashBookLists, function(
                                headOfCashBookList
                              ) {
                                return _c(
                                  "option",
                                  {
                                    domProps: {
                                      value: headOfCashBookList.headCode
                                    }
                                  },
                                  [
                                    _vm._v(
                                      " " +
                                        _vm._s(headOfCashBookList.headName) +
                                        " "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "headOfCashBook" }
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
                                  value: _vm.form.headOfAccounts,
                                  expression: "form.headOfAccounts"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has(
                                  "headOfAccounts"
                                )
                              },
                              attrs: { disabled: "" },
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
                                      "headOfAccounts",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.getSubHeadOfAccounts()
                                  }
                                ]
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v(" ---------------- ")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.headOfAccountLists, function(
                                headOfAccountList
                              ) {
                                return _c(
                                  "option",
                                  {
                                    domProps: {
                                      value: headOfAccountList.headCode
                                    }
                                  },
                                  [
                                    _vm._v(
                                      " " +
                                        _vm._s(headOfAccountList.headName) +
                                        " "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "headOfAccounts" }
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
                              _vm._m(5),
                              _vm._v(" "),
                              _vm.head_available_balance_status
                                ? _c("span", {
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.head_available_balance_text
                                      )
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.head_available_balance,
                                    expression: "form.head_available_balance"
                                  }
                                ],
                                attrs: { type: "hidden" },
                                domProps: {
                                  value: _vm.form.head_available_balance
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "head_available_balance",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
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
                                  label: "headName",
                                  placeholder: "-------",
                                  options: _vm.subHeadOfAccountLists,
                                  "show-labels": false
                                },
                                on: { input: _vm.checkHeadBalance },
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
                                          "subHead",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                      function($event) {
                                        return _vm.checkHeadBalance()
                                      }
                                    ]
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
                                          _vm._s(
                                            subHeadOfAccountList.headName
                                          ) +
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
                              })
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
                                value: _vm.form.voucherAmount,
                                expression: "form.voucherAmount"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("voucherAmount")
                            },
                            attrs: { type: "text" },
                            domProps: { value: _vm.form.voucherAmount },
                            on: {
                              keyup: [
                                function($event) {
                                  $event.preventDefault()
                                  return _vm.calculateAmount()
                                },
                                _vm.calculate
                              ],
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "voucherAmount",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "voucherAmount" }
                          }),
                          _vm._v(" "),
                          _vm.invalid
                            ? _c("span", { staticStyle: { color: "red" } }, [
                                _vm._v(
                                  "Negative And Character Value Not Allowed"
                                )
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
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.particular,
                                expression: "form.particular"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("particular")
                            },
                            attrs: { rows: "5" },
                            domProps: { value: _vm.form.particular },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "particular",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "particular" }
                          })
                        ],
                        1
                      )
                    ])
                  ])
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
                      attrs: { type: "button" },
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
                  _c(
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
                      _vm._v(" "),
                      _c("span", { staticClass: "mr-1" }, [
                        _vm._v(" Add New Entry ")
                      ])
                    ]
                  )
                ]
              )
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card mt-5" }, [
      _vm._m(9),
      _vm._v(" "),
      _c("div", { staticClass: "supplier-entry py-4 px-2" }, [
        _c("div", { staticClass: "card-body table-responsive bg-white" }, [
          _c(
            "table",
            {
              staticClass: "table table-hover table-striped table-bordered",
              staticStyle: { width: "100%" },
              attrs: { id: "example" }
            },
            [
              _vm._m(10),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.voucherInformationLists, function(
                  voucherInformationList,
                  index
                ) {
                  return _c("tr", { key: voucherInformationList.id }, [
                    _c("td", [_vm._v(_vm._s(++index))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm
                              .moment(voucherInformationList.voucherDate)
                              .format("DD MMMM YYYY")
                          ) +
                          " "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(voucherInformationList.voucherNo))
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      _vm._l(_vm.voucherTypeLists, function(voucherTypeList) {
                        return voucherTypeList.id ==
                          voucherInformationList.voucherType
                          ? _c("span", [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(voucherTypeList.name) +
                                  "\n                  "
                              )
                            ])
                          : _vm._e()
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(voucherInformationList.voucherAmount))
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "btn-wide btn-pill btn btn-outline-primary btn-hover-shine",
                            attrs: {
                              to: "/viewVoucher" + voucherInformationList.id
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-eye" }),
                            _vm._v(" View ")
                          ]
                        )
                      ],
                      1
                    )
                  ])
                }),
                0
              )
            ]
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
            _c("h4", [_vm._v(" Voucher Entry ")])
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
      _vm._v(" Date "),
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
      _vm._v(" Voucher Type "),
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
      _vm._v(" Voucher No\n                  "),
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
      _vm._v(" Head Of Accounts "),
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
      _vm._v(" Sub Head  "),
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
      _vm._v(" Amount\n                  "),
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
      _vm._v(" Particular\n                  "),
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header-tab card-header alert-info" },
      [
        _c("h4", [
          _c("i", {
            staticClass:
              "header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          }),
          _vm._v("\n          View Information ")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("SL")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Voucher No ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Voucher Type ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Amount ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" View ")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/voucherEntryNew.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/voucherEntryNew.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _voucherEntryNew_vue_vue_type_template_id_1ed2ff92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucherEntryNew.vue?vue&type=template&id=1ed2ff92& */ "./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=template&id=1ed2ff92&");
/* harmony import */ var _voucherEntryNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voucherEntryNew.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _voucherEntryNew_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voucherEntryNew.vue?vue&type=style&index=0&lang=css& */ "./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _voucherEntryNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _voucherEntryNew_vue_vue_type_template_id_1ed2ff92___WEBPACK_IMPORTED_MODULE_0__["render"],
  _voucherEntryNew_vue_vue_type_template_id_1ed2ff92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/accounting/entry/voucherEntryNew.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_voucherEntryNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./voucherEntryNew.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_voucherEntryNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_voucherEntryNew_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./voucherEntryNew.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_voucherEntryNew_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_voucherEntryNew_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_voucherEntryNew_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_voucherEntryNew_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_voucherEntryNew_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=template&id=1ed2ff92&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=template&id=1ed2ff92& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_voucherEntryNew_vue_vue_type_template_id_1ed2ff92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./voucherEntryNew.vue?vue&type=template&id=1ed2ff92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/voucherEntryNew.vue?vue&type=template&id=1ed2ff92&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_voucherEntryNew_vue_vue_type_template_id_1ed2ff92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_voucherEntryNew_vue_vue_type_template_id_1ed2ff92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);