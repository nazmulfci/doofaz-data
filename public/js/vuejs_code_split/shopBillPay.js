(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopBillPay"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopinformation/shopBillPay.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/shopinformation/shopBillPay.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      currencyRate: '',
      authInfos: [],
      userName: '',
      accountInfos: [],
      howManyBranch: true,
      form: new Form({
        paymetMethod: '',
        amount: '',
        bill: ''
      })
    };
  },
  mounted: function mounted() {
    this.getAccountInfoById();
    this.getAuthInfo();
    this.getCurrencyRate();
  },
  methods: {
    getCurrencyRate: function getCurrencyRate() {
      var _this = this;

      var url = 'getCurrencyRate';
      axios.get(url).then(function (response) {
        _this.currencyRate = response.data.data;
        _this.form.bill = response.data.data;
      });
    },
    getAuthInfo: function getAuthInfo() {
      var _this2 = this;

      var url = "getAuthInfo";
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this2.authInfos = response.data;
        _this2.userName = response.userName;
      });
    },
    getAccountInfoById: function getAccountInfoById() {
      var _this3 = this;

      var url = "getAccountInfoById";
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this3.accountInfos = response.data;
      });
    },
    payBill: function payBill() {
      var _this4 = this;

      this.form.post("payBill").then(function (response) {
        axios.put('https://portal.safejob.net/api/newshopMonthly/' + _this4.userName).then(function (response) {
          Toast.fire({
            icon: "success",
            title: "Successfull."
          }), _this4.form.reset(); // this.$router.push('shop');

          window.location.href = '/shop';
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopinformation/shopBillPay.vue?vue&type=template&id=c37bde38&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/shopinformation/shopBillPay.vue?vue&type=template&id=c37bde38& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
                    return _vm.payBill()
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [
                    _vm._v(
                      " Your Total Bill : " +
                        _vm._s(_vm.currencyRate) +
                        " " +
                        _vm._s(_vm.authInfos.code) +
                        " "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v(" Bill \n               ")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.bill,
                          expression: "form.bill"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("bill") },
                      attrs: { type: "text", disabled: "" },
                      domProps: { value: _vm.form.bill },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "bill", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "bill" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(1)
              ]
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
      [_c("h3", { staticStyle: { color: "black" } }, [_vm._v(" Bill Pay ")])]
    )
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
        [_vm._v(" Pay Now ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/shopinformation/shopBillPay.vue":
/*!************************************************************!*\
  !*** ./resources/js/admin/shopinformation/shopBillPay.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shopBillPay_vue_vue_type_template_id_c37bde38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopBillPay.vue?vue&type=template&id=c37bde38& */ "./resources/js/admin/shopinformation/shopBillPay.vue?vue&type=template&id=c37bde38&");
/* harmony import */ var _shopBillPay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopBillPay.vue?vue&type=script&lang=js& */ "./resources/js/admin/shopinformation/shopBillPay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _shopBillPay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _shopBillPay_vue_vue_type_template_id_c37bde38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _shopBillPay_vue_vue_type_template_id_c37bde38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/shopinformation/shopBillPay.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/shopinformation/shopBillPay.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/admin/shopinformation/shopBillPay.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shopBillPay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./shopBillPay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopinformation/shopBillPay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shopBillPay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/shopinformation/shopBillPay.vue?vue&type=template&id=c37bde38&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/admin/shopinformation/shopBillPay.vue?vue&type=template&id=c37bde38& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shopBillPay_vue_vue_type_template_id_c37bde38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./shopBillPay.vue?vue&type=template&id=c37bde38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/shopinformation/shopBillPay.vue?vue&type=template&id=c37bde38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shopBillPay_vue_vue_type_template_id_c37bde38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shopBillPay_vue_vue_type_template_id_c37bde38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);