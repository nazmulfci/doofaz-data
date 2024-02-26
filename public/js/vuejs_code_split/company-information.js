(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-information"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminconfigurationsetup/CompanyInformation.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/adminconfigurationsetup/CompanyInformation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        name: '',
        email: '',
        phone: '',
        address: ''
      })
    };
  },
  mounted: function mounted() {
    this.getData();
    this.getPaginateList();
  },
  methods: {
    add: function add() {
      var _this = this;

      this.form.post('companyInfo').then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Company Information Save Successfully'
        });

        _this.form.reset();
      });
    },
    adminMenuTitle: function adminMenuTitle() {
      var _this2 = this;

      axios.get('/companyInfo').then(function (res) {
        _this2.companyInfos = res.data.adminMenuTitle;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminconfigurationsetup/CompanyInformation.vue?vue&type=template&id=36c3b4b4&lang=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/adminconfigurationsetup/CompanyInformation.vue?vue&type=template&id=36c3b4b4&lang=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.add()
          }
        }
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "exampleInputEmail1" } }, [
            _vm._v(" Name")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.name,
                expression: "form.name"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              name: "name",
              id: "exampleInputEmail1",
              "aria-describedby": "emailHelp",
              placeholder: "Enter email"
            },
            domProps: { value: _vm.form.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "small",
            { staticClass: "form-text text-muted", attrs: { id: "emailHelp" } },
            [_vm._v("We'll never share your email with anyone else.")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "exampleInputEmail1" } }, [
            _vm._v("Email address")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.email,
                expression: "form.email"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "email",
              name: "email",
              id: "exampleInputEmail1",
              "aria-describedby": "emailHelp",
              placeholder: "Enter email"
            },
            domProps: { value: _vm.form.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "email", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "small",
            { staticClass: "form-text text-muted", attrs: { id: "emailHelp" } },
            [_vm._v("We'll never share your email with anyone else.")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "exampleInputEmail1" } }, [
            _vm._v("Phone")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.phone,
                expression: "form.phone"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              name: "phone",
              id: "exampleInputEmail1",
              "aria-describedby": "emailHelp",
              placeholder: "Enter email"
            },
            domProps: { value: _vm.form.phone },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "phone", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "small",
            { staticClass: "form-text text-muted", attrs: { id: "emailHelp" } },
            [_vm._v("We'll never share your email with anyone else.")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "exampleInputEmail1" } }, [
            _vm._v(" Address ")
          ]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.address,
                expression: "form.address"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              name: "address",
              id: "exampleInputEmail1",
              "aria-describedby": "emailHelp",
              placeholder: "Address"
            },
            domProps: { value: _vm.form.address },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "address", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "submit" } },
          [_vm._v("Submit")]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/adminconfigurationsetup/CompanyInformation.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/admin/adminconfigurationsetup/CompanyInformation.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyInformation_vue_vue_type_template_id_36c3b4b4_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyInformation.vue?vue&type=template&id=36c3b4b4&lang=true& */ "./resources/js/admin/adminconfigurationsetup/CompanyInformation.vue?vue&type=template&id=36c3b4b4&lang=true&");
/* harmony import */ var _CompanyInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyInformation.vue?vue&type=script&lang=js& */ "./resources/js/admin/adminconfigurationsetup/CompanyInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyInformation_vue_vue_type_template_id_36c3b4b4_lang_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyInformation_vue_vue_type_template_id_36c3b4b4_lang_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/adminconfigurationsetup/CompanyInformation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/adminconfigurationsetup/CompanyInformation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/admin/adminconfigurationsetup/CompanyInformation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyInformation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminconfigurationsetup/CompanyInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/adminconfigurationsetup/CompanyInformation.vue?vue&type=template&id=36c3b4b4&lang=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/admin/adminconfigurationsetup/CompanyInformation.vue?vue&type=template&id=36c3b4b4&lang=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInformation_vue_vue_type_template_id_36c3b4b4_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyInformation.vue?vue&type=template&id=36c3b4b4&lang=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminconfigurationsetup/CompanyInformation.vue?vue&type=template&id=36c3b4b4&lang=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInformation_vue_vue_type_template_id_36c3b4b4_lang_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInformation_vue_vue_type_template_id_36c3b4b4_lang_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);