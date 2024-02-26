(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["final-salary-sheet"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_month_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-month-picker */ "./node_modules/vue-month-picker/src/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



Vue.use(vue_month_picker__WEBPACK_IMPORTED_MODULE_1__["MonthPicker"]);
Vue.use(vue_month_picker__WEBPACK_IMPORTED_MODULE_1__["MonthPickerInput"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        cashAmount: "",
        bankAmount: "",
        employeeId: "",
        bankTypeEntryId: "",
        monthlyPayment: "",
        bankEntryId: "",
        bankAccountId: "",
        branchName: "",
        note: "",
        payDate: new Date().toISOString().slice(0, 10),
        paymentType: "",
        accNo: "",
        payable: "",
        payAmount: "",
        dueAmount: "",
        receiverBankName: "",
        receiverAcNo: "",
        receiverAcName: "",
        receiverBranchName: "",
        receiverMobileAcNo: "",
        receiverName: "",
        receiverMobile: "",
        month: "",
        year: "",
        monthInfo: '',
        from: null,
        to: null,
        monthIndex: null,
        // for validation
        available_balance: '' // /for validation

      }),
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
      bankInformationStatus: 0,
      cashInformationStatus: 0,
      bankInformationAccountInfoStatus: 0,
      employeeNames: {},
      salarySheetReports: {},
      paymentTypeLists: {},
      showBankNames: [],
      showBankAccounts: [],
      recode: true,
      gets: "",
      workDay: "",
      date: {
        from: null,
        to: null,
        month: null,
        monthIndex: null,
        year: null
      },
      present: "",
      noRecode: false,
      bankAccount: false,
      bankCardAccount: false,
      mobileAccount: false,
      loading: false,
      invalid: false
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  components: {
    MonthPicker: vue_month_picker__WEBPACK_IMPORTED_MODULE_1__["MonthPicker"],
    MonthPickerInput: vue_month_picker__WEBPACK_IMPORTED_MODULE_1__["MonthPickerInput"]
  },
  mounted: function mounted() {
    this.salarySheetReport();
    this.getPaginateReport();
    this.getData();
    this.getInvoiceSetupInformation();
  },
  methods: {
    getInvoiceSetupInformation: function getInvoiceSetupInformation() {
      var _this = this;

      var uri = "getInvoiceSetupInformation/2";
      axios.get(uri).then(function (response) {
        _this.gets = response.data.data;
      });
    },
    showDt: function showDt(date) {
      this.form.year = date.year, this.form.monthIndex = date.monthIndex;
      this.form.monthInfo = date.year + '-' + date.monthIndex + '-' + '01';
    },
    paySalary: function paySalary(id) {
      var _this2 = this;

      this.form.year = this.date.year, this.form.month = this.date.monthIndex, this.loading = true;
      this.form.post("salaryPay").then(function (res) {
        _this2.loading = false;
        $('#pay' + id).modal("hide");
        Toast.fire({
          icon: "success",
          title: "Successfully Salary Paid"
        });

        _this2.form.reset();

        if (_this2.date.monthIndex == "") {
          _this2.salarySheetReport();
        } else {
          axios.get("pendingSalary/".concat(_this2.date.monthIndex, "/").concat(_this2.date.year)).then(function (res) {
            _this2.salarySheetReports = res.data.salarySheetReports;
          });
        }
      })["catch"](function (res) {
        _this2.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something wrong"
        });
      });
    },
    showDate: function showDate(date) {
      var _this3 = this;

      this.form.year = date.year, this.form.monthIndex = date.monthIndex;
      this.form.monthInfo = date.year + '-' + date.monthIndex + '-' + '01';
      this.date = date;
      axios.get("/salaryMonth/".concat(this.date.monthIndex, "/").concat(this.date.year)).then(function (res) {
        _this3.salarySheetReports = res.data.salarySheetReports;
      });
    },
    employeeInfo: function employeeInfo(id) {
      var _this4 = this;

      if (this.date.monthIndex == "") {
        axios.get("salaryPayStuff/".concat(id, "/0/0")).then(function (res) {
          _this4.form.payable = res.data.payable.netAmount;
          _this4.form.employeeId = id;
        });
      } else {
        axios.get("salaryPayStuff/".concat(id, "/").concat(this.date.monthIndex, "/").concat(this.date.year)).then(function (res) {
          _this4.form.payable = res.data.payable.netAmount;
          _this4.form.employeeId = id;
        });
      }
    },
    pendingSalary: function pendingSalary() {
      var _this5 = this;

      if (this.date.monthIndex == "") {
        axios.get("pendingSalary/0/0").then(function (res) {
          _this5.salarySheetReports = res.data.salarySheetReports;
        });
      } else {
        axios.get("pendingSalary/".concat(this.date.monthIndex, "/").concat(this.date.year)).then(function (res) {
          _this5.salarySheetReports = res.data.salarySheetReports;
        });
      }
    },
    paidSalary: function paidSalary() {
      var _this6 = this;

      if (this.date.monthIndex == "") {
        axios.get("paidSalary/0/0").then(function (res) {
          _this6.salarySheetReports = res.data.salarySheetReports;
        });
      } else {
        axios.get("paidSalary/".concat(this.date.monthIndex, "/").concat(this.date.year)).then(function (res) {
          _this6.salarySheetReports = res.data.salarySheetReports;
        });
      }
    },
    dueSalary: function dueSalary() {
      var _this7 = this;

      if (this.date.monthIndex == "") {
        axios.get("dueSalary/0/0").then(function (res) {
          _this7.salarySheetReports = res.data.salarySheetReports;
        });
      } else {
        axios.get("dueSalary/".concat(this.date.monthIndex, "/").concat(this.date.year)).then(function (res) {
          _this7.salarySheetReports = res.data.salarySheetReports;
        });
      }
    },
    paymentReceiveType: function paymentReceiveType() {
      var _this8 = this;

      this.insufficent_cash_balance_text_status = false;
      this.insufficent_bank_balance_text_status = false;
      this.available_balance_cash_status = false;

      if (this.form.paymentType == 2) {
        this.bankInformationStatus = 1;
        this.cashInformationStatus = 0;
      } else if (this.form.paymentType == 1) {
        //======================== check balance 
        axios.get('/getCashRegister/1').then(function (res) {
          var url = "checkBalance/" + res.data.accCode;
          axios.get(url).then(function (response) {
            _this8.available_balance_cash_status = true;
            _this8.form.available_balance = response.data.available_balance;

            _this8.calculate_available_balance(response.data.available_balance, 1); // cash

          });
        }); //======================== check balance 

        this.cashInformationStatus = 1;
        this.bankInformationStatus = 0;
      } else {
        this.cashInformationStatus = 0;
        this.bankInformationStatus = 0;
      }
    },
    calculate_available_balance: function calculate_available_balance(e, type) {
      this.insufficent_cash_balance_text_status = false;
      this.insufficent_bank_balance_text_status = false;
      this.insufficent_button = false;
      this.submit_button = true; // ------------- cash condition

      if (type == 1) {
        if (this.form.payAmount > e) {
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
        if (this.form.payAmount > e) {
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
    calculate_available_balance_from_amount: function calculate_available_balance_from_amount() {
      this.insufficent_cash_balance_text_status = false;
      this.insufficent_bank_balance_text_status = false;
      this.insufficent_button = false;
      this.submit_button = true; // ------------- cash condition

      if (this.form.paymentType == 1) {
        if (this.form.payAmount > this.form.available_balance) {
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


      if (this.form.paymentType == 2) {
        if (this.form.payAmount > this.form.available_balance) {
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
    getData: function getData() {
      var _this9 = this;

      axios.get("/bankTypeEntryList").then(function (res) {
        _this9.showBankTypeDatas = res.data.show;
      }), axios.get("/paymentTypeList").then(function (res) {
        _this9.paymentTypeLists = res.data.data;
      }), axios.get("/addExpense").then(function (res) {
        _this9.datas = res.data.data;
      });
    },
    calculate: function calculate(e) {
      var stringValue = e.target.value.toString();
      var regex = /^\d*(\.\d{1,2})?$/;

      if (!stringValue.match(regex) && this.form.payAmount !== "") {
        this.invalid = true;
        this.form.payAmount = '';
      } else {
        this.invalid = false;
      }
    },
    payCalculate: function payCalculate() {
      if (this.form.payAmount > this.form.payable) {
        this.form.payAmount = this.form.payable;
        alert("Salary Limit Over");
      }

      if (this.form.payAmount < 0) {
        this.form.payAmount = this.form.payable;
        this.invalid = true;
        this.form.payAmount = '';
      } else {
        if (this.form.paymentType == 1) {
          this.form.cashAmount = this.form.payAmount;
          this.form.bankAmount = "";
        } else if (this.form.paymentType == 2) {
          this.form.bankAmount = this.form.payAmount;
          this.form.cashAmount = "";
        }

        this.form.dueAmount = this.form.payable - this.form.payAmount;
      }

      this.calculate_available_balance_from_amount();
    },
    bankTypeIdCatch: function bankTypeIdCatch() {
      var _this10 = this;

      axios.get("/bankNameList/" + this.form.bankTypeEntryId).then(function (res) {
        _this10.showBankNames = res.data.show;
      });

      if (this.form.bankTypeEntryId == 1) {
        this.bankAccount = true;
        this.mobileAccount = false;
        this.bankCardAccount = false;
      } else if (this.form.bankTypeEntryId == 2) {
        this.bankAccount = false;
        this.bankCardAccount = false;
        this.mobileAccount = true;
      } else if (this.form.bankTypeEntryId == 3) {
        this.bankAccount = false;
        this.bankCardAccount = true;
        this.mobileAccount = false;
      }
    },
    bankAccountIdCatch: function bankAccountIdCatch() {
      var _this11 = this;

      axios.get("/bankAccountListWithCard/" + this.form.bankEntryId + '/' + this.form.bankTypeEntryId).then(function (res) {
        _this11.showBankAccounts = res.data.data;
      });
    },
    getAmount: function getAmount() {
      this.calculate_available_balance_from_amount();
    },
    getBankMoreInfo: function getBankMoreInfo() {
      var _this12 = this;

      axios.get("/bankAccountMoreInfo/" + this.form.bankAccountId).then(function (res) {
        _this12.bankInformationAccountInfoStatus = 1;
        _this12.form.branchName = res.data.data.bankBranch;
        _this12.form.accNo = res.data.data.bankAccountNumber; //======================== check balance 

        var url = "checkBalance/" + res.data.data.accountCode;
        axios.get(url).then(function (response) {
          _this12.available_balance_status = true;
          _this12.available_balance_text = response.data.available_balance;
          _this12.form.available_balance = response.data.available_balance;

          _this12.calculate_available_balance(response.data.available_balance, 2); // bank

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
    },
    salarySheetReport: function salarySheetReport() {
      var _this13 = this;

      axios.get("/salarySheet/create").then(function (res) {
        _this13.salarySheetReports = res.data.salarySheetReports;
      });
    },
    getPaginateReport: function getPaginateReport() {
      var _this14 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/salarySheet/create?page=" + page).then(function (response) {
        _this14.salarySheetReports = response.data.salarySheetReports;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.month-picker__container{\n  z-index:1;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./final@salarysheet.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=template&id=af60c88c&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=template&id=af60c88c& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card main-card element-block-example" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticStyle: { margin: "auto", padding: "22px" } },
        [
          _c("span", [_vm._v("Select Month")]),
          _vm._v(" "),
          _c("month-picker-input", {
            attrs: { "no-default": true },
            on: { change: _vm.showDate }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 col-md-5 col-xs-12" }),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-4 col-xs-12" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-hover-shine btn-primary",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.pendingSalary()
                }
              }
            },
            [_vm._v("\n          Pending\n        ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-hover-shine btn-danger",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.dueSalary()
                }
              }
            },
            [_vm._v("\n          Due\n        ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-hover-shine btn-success",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.paidSalary()
                }
              }
            },
            [_vm._v("\n          Paid\n        ")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-3 col-xs-12" })
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "table-responsive bg-white p-2",
          attrs: { id: "finalSalarySheet" }
        },
        [
          _c(
            "header",
            {
              staticStyle: { "margin-bottom": "5px !important" },
              style: "border-bottom-color:" + _vm.gets.themeColor
            },
            [
              _vm.gets.logo
                ? _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col" }, [
                      _c("a", { attrs: { target: "_blank", href: "#" } }, [
                        _c("img", {
                          staticStyle: {
                            "max-height": "105px",
                            "max-width": "100%"
                          },
                          attrs: { src: "images/invoice_logo/" + _vm.gets.logo }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col company-details" }, [
                      _c("div", [_vm._v(_vm._s(_vm.gets.address))]),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(_vm.gets.mobileNo))]),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(_vm.gets.email))]),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(_vm.gets.website))])
                    ])
                  ])
                : _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col text-center" }, [
                      _c("h3", { staticClass: "text-uppercase" }, [
                        _c("b", [
                          _vm._v(" " + _vm._s(_vm.gets.companyName) + " ")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(_vm.gets.address))]),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(_vm.gets.mobileNo))]),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(_vm.gets.email))]),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(_vm.gets.website))])
                    ])
                  ])
            ]
          ),
          _vm._v(" "),
          _c(
            "table",
            { staticClass: "table table-hover table-bordered mb-0" },
            [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.salarySheetReports.data, function(
                    salarySheetReport,
                    index
                  ) {
                    return _c("tr", { key: salarySheetReport.id }, [
                      _c("td", [_vm._v(_vm._s(index + 1))]),
                      _vm._v(" "),
                      _c("td", [
                        salarySheetReport.salaryStartMonth == 1
                          ? _c("span", [_vm._v("January")])
                          : _vm._e(),
                        _vm._v(" "),
                        salarySheetReport.salaryStartMonth == 2
                          ? _c("span", [_vm._v("February")])
                          : _vm._e(),
                        _vm._v(" "),
                        salarySheetReport.salaryStartMonth == 3
                          ? _c("span", [_vm._v("March")])
                          : _vm._e(),
                        _vm._v(" "),
                        salarySheetReport.salaryStartMonth == 4
                          ? _c("span", [_vm._v("April")])
                          : _vm._e(),
                        _vm._v(" "),
                        salarySheetReport.salaryStartMonth == 5
                          ? _c("span", [_vm._v("May")])
                          : _vm._e(),
                        _vm._v(" "),
                        salarySheetReport.salaryStartMonth == 6
                          ? _c("span", [_vm._v("June")])
                          : _vm._e(),
                        _vm._v(" "),
                        salarySheetReport.salaryStartMonth == 7
                          ? _c("span", [_vm._v("July")])
                          : _vm._e(),
                        _vm._v(" "),
                        salarySheetReport.salaryStartMonth == 8
                          ? _c("span", [_vm._v("August")])
                          : _vm._e(),
                        _vm._v(" "),
                        salarySheetReport.salaryStartMonth == 9
                          ? _c("span", [_vm._v("Sptember")])
                          : _vm._e(),
                        _vm._v(" "),
                        salarySheetReport.salaryStartMonth == 10
                          ? _c("span", [_vm._v("October")])
                          : _vm._e(),
                        _vm._v(" "),
                        salarySheetReport.salaryStartMonth == 11
                          ? _c("span", [_vm._v("November")])
                          : _vm._e(),
                        _vm._v(" "),
                        salarySheetReport.salaryStartMonth == 12
                          ? _c("span", [_vm._v("December")])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(salarySheetReport.shop_employee_name.userName)
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            salarySheetReport.shop_employee_name.job_departments
                              .jobDepartmentName
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        salarySheetReport.shop_employee_name.shop_employee_types
                          ? _c("span", [
                              _vm._v(
                                _vm._s(
                                  salarySheetReport.shop_employee_name
                                    .shop_employee_types.shopEmployeeTypeName
                                )
                              )
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(salarySheetReport.shop_employee_name.fullName)
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(salarySheetReport.grade_entry_list.gradeName)
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(salarySheetReport.amount))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(salarySheetReport.deductAmount))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n              " +
                            _vm._s(
                              salarySheetReport.amount -
                                salarySheetReport.netAmount
                            ) +
                            "\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(salarySheetReport.netAmount))]),
                      _vm._v(" "),
                      _c("td", [
                        salarySheetReport.paymentStatus == 0
                          ? _c("span", [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "badge btn-hover-shine badge-info"
                                },
                                [_vm._v("Pending")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        salarySheetReport.paymentStatus == 2
                          ? _c("span", [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "badge btn-hover-shine badge-danger"
                                },
                                [_vm._v("Due")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        salarySheetReport.paymentStatus == 1
                          ? _c("span", [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "badge btn-hover-shine badge-success"
                                },
                                [_vm._v("Paid")]
                              )
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        salarySheetReport.shop_employee_name.salaryStatus ==
                          1 && salarySheetReport.paymentStatus != 1
                          ? _c("span", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-hover-shine btn-warning",
                                  attrs: {
                                    "data-toggle": "modal",
                                    "data-target":
                                      "#" + "pay" + salarySheetReport.employeeId
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.employeeInfo(
                                        salarySheetReport.employeeId
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v("\n                  Pay"),
                                  _c(
                                    "span",
                                    { staticClass: "textTransparent" },
                                    [_vm._v("_")]
                                  ),
                                  _vm._v("Now\n                ")
                                ]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        salarySheetReport.shop_employee_name.salaryStatus == 2
                          ? _c("span", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-hover-shine btn-warning",
                                  attrs: {
                                    disabled: "",
                                    "data-toggle": "modal",
                                    "data-target":
                                      "#" + "pay" + salarySheetReport.employeeId
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.employeeInfo(
                                        salarySheetReport.employeeId
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v("\n                  Pay"),
                                  _c(
                                    "span",
                                    { staticClass: "textTransparent" },
                                    [_vm._v("_")]
                                  ),
                                  _vm._v("Now\n                ")
                                ]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "modal fade",
                            attrs: {
                              id: "pay" + salarySheetReport.employeeId,
                              tabindex: "-1",
                              role: "dialog",
                              "aria-labelledby":
                                "deduct" + salarySheetReport.employeeId,
                              "aria-hidden": "true"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "modal-dialog",
                                attrs: { role: "document" }
                              },
                              [
                                _c("div", { staticClass: "modal-content" }, [
                                  _vm._m(3, true),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "modal-body" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "form-group",
                                        staticStyle: { display: "none" }
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            attrs: { for: "exampleInputEmail1" }
                                          },
                                          [_vm._v("Name")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.employeeId,
                                              expression: "form.employeeId"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            disabled: "",
                                            type: "text",
                                            id: "exampleInputEmail1",
                                            "aria-describedby": "emailHelp"
                                          },
                                          domProps: {
                                            value: _vm.form.employeeId
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "employeeId",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: { for: "exampleInputEmail1" }
                                        },
                                        [_vm._v("Name")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          disabled: "",
                                          type: "text",
                                          id: "exampleInputEmail1",
                                          "aria-describedby": "emailHelp"
                                        },
                                        domProps: {
                                          value:
                                            salarySheetReport.shop_employee_name
                                              .userName
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: { for: "exampleInputEmail1" }
                                        },
                                        [_vm._v("Mobile")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          disabled: "",
                                          id: "exampleInputEmail1",
                                          "aria-describedby": "emailHelp",
                                          placeholder: "Enter Amount"
                                        },
                                        domProps: {
                                          value:
                                            salarySheetReport.shop_employee_name
                                              .phoneNumber
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: { for: "exampleInputEmail1" }
                                        },
                                        [_vm._v("Department")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          disabled: "",
                                          id: "exampleInputEmail1",
                                          "aria-describedby": "emailHelp",
                                          placeholder: "Enter Amount"
                                        },
                                        domProps: {
                                          value:
                                            salarySheetReport.shop_employee_name
                                              .job_departments.jobDepartmentName
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        _c("label", [
                                          _vm._v(
                                            " Payment Type \n\n                          "
                                          ),
                                          _vm.available_balance_cash_status
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge badge-primary"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                            " +
                                                      _vm._s(
                                                        _vm.form
                                                          .available_balance
                                                      ) +
                                                      "\n                          "
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
                                                value: _vm.form.paymentType,
                                                expression: "form.paymentType"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            class: {
                                              "is-invalid": _vm.form.errors.has(
                                                "paymentType"
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
                                            _c(
                                              "option",
                                              { attrs: { value: "" } },
                                              [_vm._v("Select Payment Type")]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(
                                              _vm.paymentTypeLists,
                                              function(paymentTypeList) {
                                                return _c(
                                                  "option",
                                                  {
                                                    key: paymentTypeList.id,
                                                    domProps: {
                                                      value: paymentTypeList.id
                                                    }
                                                  },
                                                  [
                                                    paymentTypeList.id < 3
                                                      ? _c("span", [
                                                          _vm._v(
                                                            "\n                              " +
                                                              _vm._s(
                                                                paymentTypeList.paymentType
                                                              ) +
                                                              "\n                            "
                                                          )
                                                        ])
                                                      : _vm._e()
                                                  ]
                                                )
                                              }
                                            )
                                          ],
                                          2
                                        ),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "paymentType"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.insufficent_cash_balance_text_status
                                          ? _c(
                                              "small",
                                              {
                                                staticClass:
                                                  "badge badge-danger"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                    Insufficent Balance\n                  "
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _vm.bankInformationStatus
                                      ? _c("div", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c("label", [
                                                _vm._v("Bank Type Name")
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "select",
                                                {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        _vm.form
                                                          .bankTypeEntryId,
                                                      expression:
                                                        "form.bankTypeEntryId"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  class: {
                                                    "is-invalid": _vm.form.errors.has(
                                                      "bankTypeEntryId"
                                                    )
                                                  },
                                                  attrs: {
                                                    name: "bankTypeEntryId"
                                                  },
                                                  on: {
                                                    change: [
                                                      function($event) {
                                                        var $$selectedVal = Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
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
                                                  _c(
                                                    "option",
                                                    { attrs: { value: "" } },
                                                    [_vm._v("Select One")]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    _vm.showBankTypeDatas,
                                                    function(showBankTypeData) {
                                                      return _c(
                                                        "option",
                                                        {
                                                          key:
                                                            showBankTypeData.id,
                                                          domProps: {
                                                            value:
                                                              showBankTypeData.bankTypeEntryId
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                              " +
                                                              _vm._s(
                                                                showBankTypeData.bankTypeEntryName
                                                              ) +
                                                              "\n                            "
                                                          )
                                                        ]
                                                      )
                                                    }
                                                  )
                                                ],
                                                2
                                              ),
                                              _vm._v(" "),
                                              _c("has-error", {
                                                attrs: {
                                                  form: _vm.form,
                                                  field: "bankTypeEntryId"
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
                                                _vm._v("Bank Name")
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "select",
                                                {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        _vm.form.bankEntryId,
                                                      expression:
                                                        "form.bankEntryId"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  class: {
                                                    "is-invalid": _vm.form.errors.has(
                                                      "bankEntryId"
                                                    )
                                                  },
                                                  attrs: {
                                                    name: "bankEntryId"
                                                  },
                                                  on: {
                                                    change: [
                                                      function($event) {
                                                        var $$selectedVal = Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
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
                                                  _c(
                                                    "option",
                                                    { attrs: { value: "" } },
                                                    [_vm._v("Select Bank Name")]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    _vm.showBankNames,
                                                    function(showBankName) {
                                                      return _c(
                                                        "option",
                                                        {
                                                          key: showBankName.id,
                                                          domProps: {
                                                            value:
                                                              showBankName.bankEntryId
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                              " +
                                                              _vm._s(
                                                                showBankName.bankName
                                                              ) +
                                                              "\n                            "
                                                          )
                                                        ]
                                                      )
                                                    }
                                                  )
                                                ],
                                                2
                                              ),
                                              _vm._v(" "),
                                              _c("has-error", {
                                                attrs: {
                                                  form: _vm.form,
                                                  field: "bankEntryId"
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
                                                  " Account No\n\n                             "
                                                ),
                                                _vm.available_balance_status
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-primary"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                " +
                                                            _vm._s(
                                                              _vm.available_balance_text
                                                            ) +
                                                            "\n                              "
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
                                                      value:
                                                        _vm.form.bankAccountId,
                                                      expression:
                                                        "form.bankAccountId"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  class: {
                                                    "is-invalid": _vm.form.errors.has(
                                                      "bankAccountId"
                                                    )
                                                  },
                                                  attrs: {
                                                    name: "bankAccountId"
                                                  },
                                                  on: {
                                                    change: [
                                                      function($event) {
                                                        var $$selectedVal = Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
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
                                                  _c(
                                                    "option",
                                                    { attrs: { value: "" } },
                                                    [
                                                      _vm._v(
                                                        "Select Bank Account"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    _vm.showBankAccounts,
                                                    function(showBankAccount) {
                                                      return _c(
                                                        "option",
                                                        {
                                                          key:
                                                            showBankAccount.id,
                                                          domProps: {
                                                            value:
                                                              showBankAccount.bankId
                                                          }
                                                        },
                                                        [
                                                          showBankAccount.bankAccountName
                                                            ? _c("span", [
                                                                _vm._v(
                                                                  "\n                                " +
                                                                    _vm._s(
                                                                      showBankAccount.bankAccountName
                                                                    ) +
                                                                    "\n                              "
                                                                )
                                                              ])
                                                            : _c("span", [
                                                                _vm._v(
                                                                  "\n                                " +
                                                                    _vm._s(
                                                                      showBankAccount.bankAccountNumber
                                                                    ) +
                                                                    "\n                              "
                                                                )
                                                              ])
                                                        ]
                                                      )
                                                    }
                                                  )
                                                ],
                                                2
                                              ),
                                              _vm._v(" "),
                                              _c("has-error", {
                                                attrs: {
                                                  form: _vm.form,
                                                  field: "bankAccountId"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.form
                                                        .available_balance,
                                                    expression:
                                                      "form.available_balance"
                                                  }
                                                ],
                                                attrs: { type: "hidden" },
                                                domProps: {
                                                  value:
                                                    _vm.form.available_balance
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
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
                                                    {
                                                      staticClass:
                                                        "badge badge-danger"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                Insufficient Balance\n                              "
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
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c("label", [
                                                      _vm._v(" Branch Name ")
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form.branchName,
                                                          expression:
                                                            "form.branchName"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        type: "text",
                                                        readonly: ""
                                                      },
                                                      domProps: {
                                                        value:
                                                          _vm.form.branchName
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
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
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c("label", [
                                                      _vm._v(" Account No ")
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: _vm.form.accNo,
                                                          expression:
                                                            "form.accNo"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        type: "text",
                                                        readonly: ""
                                                      },
                                                      domProps: {
                                                        value: _vm.form.accNo
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
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
                                                  ]
                                                )
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.bankAccount
                                            ? _c("div", [
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c("label", [
                                                      _vm._v(
                                                        " Receiver Bank Name "
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
                                                              .receiverBankName,
                                                          expression:
                                                            "form.receiverBankName"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: { type: "text" },
                                                      domProps: {
                                                        value:
                                                          _vm.form
                                                            .receiverBankName
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.form,
                                                            "receiverBankName",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c("label", [
                                                      _vm._v(
                                                        " Receiver A/C No "
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
                                                              .receiverAcNo,
                                                          expression:
                                                            "form.receiverAcNo"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: { type: "text" },
                                                      domProps: {
                                                        value:
                                                          _vm.form.receiverAcNo
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.form,
                                                            "receiverAcNo",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c("label", [
                                                      _vm._v(
                                                        " Receiver A/C Name "
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
                                                              .receiverAcName,
                                                          expression:
                                                            "form.receiverAcName"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: { type: "text" },
                                                      domProps: {
                                                        value:
                                                          _vm.form
                                                            .receiverAcName
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.form,
                                                            "receiverAcName",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c("label", [
                                                      _vm._v(" Branch ")
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form
                                                              .receiverBranchName,
                                                          expression:
                                                            "form.receiverBranchName"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: { type: "text" },
                                                      domProps: {
                                                        value:
                                                          _vm.form
                                                            .receiverBranchName
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.form,
                                                            "receiverBranchName",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                )
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.bankAccount
                                            ? _c("div", [
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c("label", [
                                                      _vm._v(
                                                        " Receiver Bank Name "
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
                                                              .receiverBankName,
                                                          expression:
                                                            "form.receiverBankName"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: { type: "text" },
                                                      domProps: {
                                                        value:
                                                          _vm.form
                                                            .receiverBankName
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.form,
                                                            "receiverBankName",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c("label", [
                                                      _vm._v(
                                                        " Receiver A/C No "
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
                                                              .receiverAcNo,
                                                          expression:
                                                            "form.receiverAcNo"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: { type: "text" },
                                                      domProps: {
                                                        value:
                                                          _vm.form.receiverAcNo
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.form,
                                                            "receiverAcNo",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c("label", [
                                                      _vm._v(
                                                        " Receiver  A/C Name "
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
                                                              .receiverAcName,
                                                          expression:
                                                            "form.receiverAcName"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: { type: "text" },
                                                      domProps: {
                                                        value:
                                                          _vm.form
                                                            .receiverAcName
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.form,
                                                            "receiverAcName",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                )
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.mobileAccount
                                            ? _c("div", [
                                                _c(
                                                  "div",
                                                  { staticClass: "form-group" },
                                                  [
                                                    _c("label", [
                                                      _vm._v(
                                                        " Receiver Mobile A/C No "
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
                                                              .receiverMobileAcNo,
                                                          expression:
                                                            "form.receiverMobileAcNo"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: { type: "text" },
                                                      domProps: {
                                                        value:
                                                          _vm.form
                                                            .receiverMobileAcNo
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.form,
                                                            "receiverMobileAcNo",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                )
                                              ])
                                            : _vm._e()
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: { for: "exampleInputEmail1" }
                                        },
                                        [_vm._v("Receiver Name")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.receiverName,
                                            expression: "form.receiverName"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "exampleInputEmail1",
                                          "aria-describedby": "emailHelp"
                                        },
                                        domProps: {
                                          value: _vm.form.receiverName
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "receiverName",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: { for: "exampleInputEmail1" }
                                        },
                                        [_vm._v("Receiver Phone")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.receiverMobile,
                                            expression: "form.receiverMobile"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "exampleInputEmail1",
                                          "aria-describedby": "emailHelp"
                                        },
                                        domProps: {
                                          value: _vm.form.receiverMobile
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "receiverMobile",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: { for: "exampleInputEmail1" }
                                        },
                                        [_vm._v("Payable Amount")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.payable,
                                            expression: "form.payable"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          disabled: "",
                                          type: "text",
                                          id: "exampleInputEmail1",
                                          "aria-describedby": "emailHelp"
                                        },
                                        domProps: { value: _vm.form.payable },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "payable",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            attrs: { for: "exampleInputEmail1" }
                                          },
                                          [_vm._v("Pay Amount")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.payAmount,
                                              expression: "form.payAmount"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "payAmount"
                                            )
                                          },
                                          attrs: {
                                            type: "text",
                                            id: "exampleInputEmail1",
                                            "aria-describedby": "emailHelp"
                                          },
                                          domProps: {
                                            value: _vm.form.payAmount
                                          },
                                          on: {
                                            keyup: [
                                              function($event) {
                                                $event.preventDefault()
                                                return _vm.payCalculate()
                                              },
                                              _vm.calculate
                                            ],
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "payAmount",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "payAmount"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.invalid
                                          ? _c(
                                              "span",
                                              { staticStyle: { color: "red" } },
                                              [
                                                _vm._v(
                                                  "Negative And Character VAlue Not Allowed "
                                                )
                                              ]
                                            )
                                          : _vm._e(),
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
                                          attrs: { type: "hidden" },
                                          domProps: {
                                            value: _vm.form.cashAmount
                                          },
                                          on: {
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
                                          attrs: { type: "hidden" },
                                          domProps: {
                                            value: _vm.form.bankAmount
                                          },
                                          on: {
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
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: { for: "exampleInputEmail1" }
                                        },
                                        [_vm._v("Due Amount")]
                                      ),
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
                                        attrs: {
                                          disabled: "",
                                          type: "text",
                                          id: "exampleInputEmail1",
                                          "aria-describedby": "emailHelp"
                                        },
                                        domProps: { value: _vm.form.dueAmount },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "dueAmount",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: {
                                            for: "exampleFormControlTextarea1"
                                          }
                                        },
                                        [_vm._v("Note")]
                                      ),
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
                                        attrs: {
                                          id: "exampleFormControlTextarea1",
                                          rows: "3"
                                        },
                                        domProps: { value: _vm.form.note },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "note",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", [_vm._v(" Date")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.payDate,
                                            expression: "form.payDate"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "date" },
                                        domProps: { value: _vm.form.payDate },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "payDate",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
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
                                      [
                                        _vm._v(
                                          "\n                        Close\n                      "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.submit_button
                                      ? _c(
                                          "button",
                                          {
                                            staticClass: "btn btn-primary",
                                            attrs: {
                                              type: "button",
                                              disabled: _vm.loading
                                            },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.paySalary(
                                                  salarySheetReport.employeeId
                                                )
                                              }
                                            }
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
                                              : _vm._e(),
                                            _vm._v(
                                              "\n                        Save changes\n                      "
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.insufficent_button
                                      ? _c(
                                          "button",
                                          {
                                            staticClass: "btn btn-danger",
                                            attrs: { type: "button" }
                                          },
                                          [
                                            _vm._v(
                                              "\n                        Save changes\n                      "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ])
                              ]
                            )
                          ]
                        )
                      ])
                    ])
                  }),
                  _vm._v(" "),
                  _vm.noRecode
                    ? _c("tr", { staticClass: "text-center" }, [
                        _c("td", { attrs: { colspan: "8" } }, [
                          _vm._v("No Record Available")
                        ])
                      ])
                    : _vm._e()
                ],
                2
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.recode
        ? _c(
            "span",
            { staticClass: "card_footer" },
            [
              _c(
                "pagination",
                {
                  attrs: { data: _vm.salarySheetReports, limit: _vm.limit },
                  on: { "pagination-change-page": _vm.getPaginateReport }
                },
                [
                  _c(
                    "span",
                    { attrs: { slot: "prev-nav" }, slot: "prev-nav" },
                    [_vm._v("< Previous")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    { attrs: { slot: "next-nav" }, slot: "next-nav" },
                    [_vm._v("Next >")]
                  )
                ]
              )
            ],
            1
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header alert-info" }, [
      _c("h3", [_vm._v("Basic Salary Sheet")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "button",
        {
          staticClass: "btn btn-info ml-3",
          attrs: {
            type: "button",
            onclick: "jQuery('#finalSalarySheet').print()"
          }
        },
        [_c("i", { staticClass: "fa fa-print" }), _vm._v(" Print\n        ")]
      )
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
        _c("th", [_vm._v("Month")]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Employee"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Name")
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("Department")]),
        _vm._v(" "),
        _c("th", [_vm._v("Designation")]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Employee"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Name")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("\n              Salary"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Grade"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Name\n            ")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("\n              Salary"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Grade"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Amount\n            ")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Deduct"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Amount")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Paid"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Amount")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("Net"),
          _c("span", { staticClass: "textTransparent" }, [_vm._v("_")]),
          _vm._v("Amount")
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
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
        [_vm._v("\n                        Salary Pay\n                      ")]
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _final_salarysheet_vue_vue_type_template_id_af60c88c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./final@salarysheet.vue?vue&type=template&id=af60c88c& */ "./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=template&id=af60c88c&");
/* harmony import */ var _final_salarysheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./final@salarysheet.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _final_salarysheet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./final@salarysheet.vue?vue&type=style&index=0&lang=css& */ "./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _final_salarysheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _final_salarysheet_vue_vue_type_template_id_af60c88c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _final_salarysheet_vue_vue_type_template_id_af60c88c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_final_salarysheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./final@salarysheet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_final_salarysheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_final_salarysheet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./final@salarysheet.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_final_salarysheet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_final_salarysheet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_final_salarysheet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_final_salarysheet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_final_salarysheet_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=template&id=af60c88c&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=template&id=af60c88c& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_final_salarysheet_vue_vue_type_template_id_af60c88c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./final@salarysheet.vue?vue&type=template&id=af60c88c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/final@salarysheet.vue?vue&type=template&id=af60c88c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_final_salarysheet_vue_vue_type_template_id_af60c88c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_final_salarysheet_vue_vue_type_template_id_af60c88c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);