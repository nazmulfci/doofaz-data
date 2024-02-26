(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shareholderList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/shareholderList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/view/shareholderList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
      form: new Form({
        ownerTypeId: '',
        shopOwnerName: '',
        shopOwnerMobileNo: '',
        shopOwnerEmail: '',
        shopOwnerAddress: '',
        shopOwnerPhoneNo: ''
      }),
      companyTypes: [{
        id: 1,
        name: 'Owner'
      }],
      // , { id: 2, name: 'Investor' }
      lists: [],
      loading: false
    };
  },
  mounted: function mounted() {
    this.view();
  },
  methods: {
    view: function view() {
      var _this = this;

      axios.get('/shopOwnerGet').then(function (res) {
        _this.lists = res.data.data;
      });
    },
    addCompanyOwner: function addCompanyOwner() {
      var _this2 = this;

      this.loading = true;
      this.form.post("shopOwnerEntry").then(function (response) {
        Toast.fire({
          icon: "success",
          //background: '#fcd8d8', red
          background: '#c9f4c9',
          //green
          title: "Owner Add Successful."
        }), _this2.view();

        _this2.form.reset();

        _this2.loading = false;
      })["catch"](function (res) {
        _this2.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/shareholderList.vue?vue&type=template&id=6b9fb117&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/accounting/view/shareholderList.vue?vue&type=template&id=6b9fb117& ***!
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "supplier-entry py-1 px-1" }, [
      _c("div", { staticClass: "card-body table-responsive bg-white" }, [
        _c(
          "table",
          {
            staticClass: "table table-hover table-striped table-bordered",
            staticStyle: { width: "100%" },
            attrs: { id: "example" }
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.lists, function(list, index) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(" " + _vm._s(list.shopOwnerName) + " ")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(" " + _vm._s(list.shareAmount) + " ")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                " +
                        _vm._s(list.shopOwnerMobileNo) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(list.shopOwnerEmail) + "\n                "),
                    _c("br"),
                    _vm._v(
                      "\n                " +
                        _vm._s(list.shopOwnerPhoneNo) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(list.shopOwnerAddress))])
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
      { staticClass: "card main-card  element-block-example mt-5" },
      [
        _c("div", { staticClass: "card-header" }, [
          _c("h3", { staticStyle: { color: "black" } }, [_vm._v("Owner List")])
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
        _c("th", [_vm._v("SN")]),
        _vm._v(" "),
        _c("th", [_vm._v("Owner Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Share Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Owner Mobile")]),
        _vm._v(" "),
        _c("th", [_vm._v("Owner Email ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Owner Address")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/accounting/view/shareholderList.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/shareholderList.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shareholderList_vue_vue_type_template_id_6b9fb117___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shareholderList.vue?vue&type=template&id=6b9fb117& */ "./resources/js/admin/page/accounting/view/shareholderList.vue?vue&type=template&id=6b9fb117&");
/* harmony import */ var _shareholderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shareholderList.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/accounting/view/shareholderList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _shareholderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _shareholderList_vue_vue_type_template_id_6b9fb117___WEBPACK_IMPORTED_MODULE_0__["render"],
  _shareholderList_vue_vue_type_template_id_6b9fb117___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/accounting/view/shareholderList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/accounting/view/shareholderList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/shareholderList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shareholderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./shareholderList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/shareholderList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shareholderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/accounting/view/shareholderList.vue?vue&type=template&id=6b9fb117&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/admin/page/accounting/view/shareholderList.vue?vue&type=template&id=6b9fb117& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shareholderList_vue_vue_type_template_id_6b9fb117___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./shareholderList.vue?vue&type=template&id=6b9fb117& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/accounting/view/shareholderList.vue?vue&type=template&id=6b9fb117&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shareholderList_vue_vue_type_template_id_6b9fb117___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shareholderList_vue_vue_type_template_id_6b9fb117___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);