(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["openingVoucher"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tmpHeadEntrys: '',
      voucherTypeLists: [],
      voucherInformationLists: [],
      paymentTo: 'Pay by',
      thisCodeAllreadyHave: false,
      submit_have: true,
      invalid_have: false,
      paymentToStatus: true,
      bankInfo: false,
      receiverBankAccountNameStatus: false,
      headOfCashBookTitle: 'Head Of Cash Book',
      headOfCashBookBox: false,
      headOfCashBookLists: [],
      headOfAccountLists: [],
      subHeadOfAccountLists: [],
      subHeadStatus: false,
      invalid: false,
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a,
      loading: false,
      submitButton: false,
      form: new Form({
        voucherDate: new Date().toISOString().slice(0, 10),
        voucherType: "",
        drcr_type: 1,
        voucherNo: "",
        voucherNo1: '',
        paymentTo: "",
        mobileNo: "",
        checkPaymentType: "",
        receiverBankAccountName: "",
        chequeNo: "",
        chequeDate: "",
        headOfCashBook: "1010",
        headOfAccounts: "",
        subHead: "",
        subHeadMulti: "",
        voucherAmount: "",
        particular: ""
      })
    };
  },
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  mounted: function mounted() {
    this.view();
  },
  methods: {
    view: function view() {
      var _this = this;

      var url = "openingVoucherEntryInformation";
      axios.get(url).then(function (response) {
        _this.voucherInformationLists = response.data.voucherInformation;
        _this.voucherTypeLists = response.data.list;
      });
    },
    checkHaveOpening: function checkHaveOpening(value) {
      var _this2 = this;

      this.form.subHead = value.headCode;
      var url = "checkAccountCodeInOpening/" + this.form.subHead;
      axios.get(url).then(function (response) {
        if (response.data.have == 1) {
          _this2.thisCodeAllreadyHave = true;
          _this2.submit_have = false;
          _this2.invalid_have = true;
        } else {
          _this2.thisCodeAllreadyHave = false;
          _this2.submit_have = true;
          _this2.invalid_have = false;
        }
      });
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
    getVoucherCode: function getVoucherCode() {
      var _this3 = this;

      this.form.headOfCashBook = '';
      this.form.headOfAccounts = '';
      this.subHeadStatus = false;
      this.form.subHead = '';
      this.headOfCashBookLists = [];
      this.headOfAccountLists = [];
      var url = "getVoucherCode/" + this.form.voucherType;
      axios.get(url).then(function (response) {
        _this3.form.voucherNo = response.data.code;
        _this3.form.voucherNo1 = response.data.code1;
      });

      if (this.form.voucherType == 1) {
        this.paymentTo = 'Pay by';
        this.headOfCashBookTitle = 'Head Of Cash Book';
        this.paymentToStatus = true;
        this.bankInfo = false; // get voucher head code

        var _url = "getVoucherHeadCashbookCode/" + this.form.voucherType;

        axios.get(_url).then(function (response) {
          _this3.headOfCashBookLists = response.data.headOfCashBookList;
          _this3.headOfAccountLists = response.data.headOfAccountList;
        }); // get voucher head code
      } else if (this.form.voucherType == 2) {
        this.paymentTo = 'Receive by';
        this.headOfCashBookTitle = 'Head Of Cash Book';
        this.paymentToStatus = true;
        this.bankInfo = false; // get voucher head code

        var _url2 = "getVoucherHeadCashbookCode/" + this.form.voucherType;

        axios.get(_url2).then(function (response) {
          _this3.headOfCashBookLists = response.data.headOfCashBookList;
          _this3.headOfAccountLists = response.data.headOfAccountList;
        }); // get voucher head code
      } else if (this.form.voucherType == 3) {
        this.paymentTo = 'Pay by';
        this.headOfCashBookTitle = 'Head Of Bank Book';
        this.paymentToStatus = true;
        this.bankInfo = true; // get voucher head code

        var _url3 = "getVoucherHeadCashbookCode/" + this.form.voucherType;

        axios.get(_url3).then(function (response) {
          _this3.headOfCashBookLists = response.data.headOfCashBookList;
          _this3.headOfAccountLists = response.data.headOfAccountList;
        }); // get voucher head code
      } else if (this.form.voucherType == 4) {
        this.paymentTo = 'Receive by';
        this.headOfCashBookTitle = 'Head Of Bank Book';
        this.paymentToStatus = true;
        this.bankInfo = true; // get voucher head code

        var _url4 = "getVoucherHeadCashbookCode/" + this.form.voucherType;

        axios.get(_url4).then(function (response) {
          _this3.headOfCashBookLists = response.data.headOfCashBookList;
          _this3.headOfAccountLists = response.data.headOfAccountList;
        }); // get voucher head code
      } else if (this.form.voucherType == 5) {
        this.paymentTo = 'Receive by';
        this.paymentToStatus = false;
        this.bankInfo = false; // get voucher head code

        var _url5 = "getVoucherHeadCashbookCode/" + this.form.voucherType;

        axios.get(_url5).then(function (response) {
          _this3.headOfCashBookLists = response.data.headOfCashBookList;
          _this3.headOfAccountLists = response.data.headOfAccountList;
        }); // get voucher head code
      } else if (this.form.voucherType == 6) {
        this.paymentTo = 'Receive by';
        this.paymentToStatus = false;
        this.bankInfo = false; // get voucher head code

        var _url6 = "getVoucherHeadCashbookCode/" + this.form.voucherType;

        axios.get(_url6).then(function (response) {
          _this3.headOfCashBookLists = response.data.headOfCashBookList;
          _this3.headOfAccountLists = response.data.headOfAccountList;
        }); // get voucher head code
      } else if (this.form.voucherType == 7) {
        this.paymentTo = 'Receive by';
        this.paymentToStatus = false;
        this.bankInfo = false; // get voucher head code

        var _url7 = "getVoucherHeadCashbookCode/" + this.form.voucherType;

        axios.get(_url7).then(function (response) {
          _this3.headOfCashBookLists = response.data.headOfCashBookList;
          _this3.headOfAccountLists = response.data.headOfAccountList;
        }); // get voucher head code
      }
    },
    getSubHeadOfAccounts: function getSubHeadOfAccounts() {
      var _this4 = this;

      // get voucher head code
      var url = "getSubHeadOfAccounts/" + this.form.headOfAccounts;
      axios.get(url).then(function (response) {
        _this4.subHeadStatus = true;
        _this4.subHeadOfAccountLists = response.data.subHeadList;
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
      var _this5 = this;

      var uri = "voucherEntryInformation/".concat(id);
      axios["delete"](uri).then(function (response) {
        Toast.fire({
          icon: 'success',
          title: 'Delete Successfull.'
        });

        _this5.view();
      });
    },
    addTmpVoucher: function addTmpVoucher() {
      var _this6 = this;

      this.invalid_have = true;
      this.submit_have = false;
      var url = "addTmpVoucher/" + this.form.voucherNo1 + "/" + this.form.headOfAccounts + "/" + this.form.subHead + "/" + this.form.voucherAmount + "/" + this.form.drcr_type + "/" + this.form.voucherDate;
      axios.get(url).then(function (response) {
        // this.subHeadStatus = true;
        _this6.tmpHeadEntrys = response.data.data;
        _this6.form.voucherAmount = '';
        _this6.form.subHead = '';
        _this6.form.subHeadMulti = '';
        _this6.form.headOfAccounts = '';
        _this6.submitButton = true;
        _this6.invalid_have = false;
        _this6.submit_have = true;
      })["catch"](function (res) {
        _this6.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
        _this6.invalid_have = false;
        _this6.submit_have = true;
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
          title: "Voucher Entry Successful."
        }), _this7.submitButton = false;
        _this7.tmpHeadEntrys = '';

        _this7.view();

        _this7.form.reset();
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.tree{\r\n  width:1px;\r\n  height: 51px;\r\n  background: black;\r\n  position: relative;\r\n  float: left;\r\n  margin-right: 30px;\n}\n.tree1{\r\n  width: 30px;\r\n  height: 1px;\r\n  background: rgb(0, 0, 0);\r\n  margin-top: 25px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./openingVoucher.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=template&id=4105832a&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=template&id=4105832a& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
                                _vm._v("Select Voucher Type")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.voucherTypeLists, function(
                                voucherTypeList
                              ) {
                                return voucherTypeList.shortName == "OV"
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
                                value: _vm.form.voucherNo1,
                                expression: "form.voucherNo1"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("voucherNo1")
                            },
                            attrs: { type: "hidden", disabled: "" },
                            domProps: { value: _vm.form.voucherNo1 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "voucherNo1",
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
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-6" }, [
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
                                on: { input: _vm.checkHaveOpening },
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
                                        return _vm.checkHaveOpening()
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
                              }),
                              _vm._v(" "),
                              _vm.thisCodeAllreadyHave
                                ? _c(
                                    "span",
                                    { staticClass: "badge badge-danger" },
                                    [
                                      _vm._v(
                                        "\n                This Code Allready have in Openning.\n              "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _vm._m(6),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-6" },
                            [
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
                                  "is-invalid": _vm.form.errors.has(
                                    "voucherAmount"
                                  )
                                },
                                attrs: { type: "text" },
                                domProps: { value: _vm.form.voucherAmount },
                                on: {
                                  keyup: _vm.calculate,
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
                                attrs: {
                                  form: _vm.form,
                                  field: "voucherAmount"
                                }
                              }),
                              _vm._v(" "),
                              _vm.invalid
                                ? _c(
                                    "span",
                                    { staticStyle: { color: "red" } },
                                    [
                                      _vm._v(
                                        "Negative And Character Value Not Allowed"
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-6" },
                            [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.drcr_type,
                                      expression: "form.drcr_type"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "drcr_type"
                                    )
                                  },
                                  on: {
                                    change: function($event) {
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
                                        "drcr_type",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "1" } }, [
                                    _vm._v(" Debit ")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "2" } }, [
                                    _vm._v(" Credit ")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "drcr_type" }
                              })
                            ],
                            1
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _vm.submit_have
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-primary float-right mb-3",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.addTmpVoucher()
                                  }
                                }
                              },
                              [_vm._v(" Add ")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.invalid_have
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-danger float-right mb-3",
                                attrs: { type: "button" }
                              },
                              [_vm._v(" Add ")]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "table",
                          { staticClass: "table table-bordered mt-3" },
                          [
                            _vm._m(7),
                            _vm._v(" "),
                            _c("tbody", {
                              domProps: { innerHTML: _vm._s(_vm.tmpHeadEntrys) }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _vm._m(8),
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
                  _vm._m(9),
                  _vm._v(" "),
                  _vm.submitButton
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
                          _vm._v(" "),
                          _c("span", { staticClass: "mr-1" }, [
                            _vm._v(" Add New Entry ")
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
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card mt-5" }, [
      _vm._m(10),
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
              _vm._m(11),
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
            _c("h4", [_vm._v(" Opening Voucher Entry ")])
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
      _vm._v(" Voucher Type "),
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
      _vm._v(" Voucher No\n                  "),
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
      _vm._v(" Head Of Accounts "),
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
      _vm._v(" Sub Head  "),
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6" }, [
        _c("label", [
          _vm._v(" Amount\n                  "),
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
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c("label", [
          _vm._v(" Dr. / Cr.\n                  "),
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
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "bg-light" }, [
      _c("th", [_vm._v(" Head Name ")]),
      _vm._v(" "),
      _c("th", [_vm._v(" Dr ")]),
      _vm._v(" "),
      _c("th", [_vm._v(" Cr ")])
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
    return _c(
      "button",
      {
        staticClass:
          "btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left",
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

/***/ "./resources/js/admin/page/accounting/entry/openingVoucher.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/openingVoucher.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _openingVoucher_vue_vue_type_template_id_4105832a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openingVoucher.vue?vue&type=template&id=4105832a& */ "./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=template&id=4105832a&");
/* harmony import */ var _openingVoucher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openingVoucher.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _openingVoucher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openingVoucher.vue?vue&type=style&index=0&lang=css& */ "./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _openingVoucher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _openingVoucher_vue_vue_type_template_id_4105832a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _openingVoucher_vue_vue_type_template_id_4105832a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/accounting/entry/openingVoucher.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_openingVoucher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./openingVoucher.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_openingVoucher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_openingVoucher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./openingVoucher.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_openingVoucher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_openingVoucher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_openingVoucher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_openingVoucher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_openingVoucher_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=template&id=4105832a&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=template&id=4105832a& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_openingVoucher_vue_vue_type_template_id_4105832a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./openingVoucher.vue?vue&type=template&id=4105832a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/entry/openingVoucher.vue?vue&type=template&id=4105832a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_openingVoucher_vue_vue_type_template_id_4105832a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_openingVoucher_vue_vue_type_template_id_4105832a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);