(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["warehouseStock"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@shortage/warehouseStock.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@shortage/warehouseStock.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      form: new Form({
        warehouseName: '',
        location: '',
        fullAddress: ''
      }),
      warehouseLists: {}
    };
  },
  mounted: function mounted() {
    this.ShowDataLists();
  },
  methods: {
    warehouseCreate: function warehouseCreate() {
      var _this = this;

      this.loading = true;
      this.form.post('/addWarehouseEntry').then(function (res) {
        _this.loading = false;

        _this.form.reset();

        Toast.fire({
          icon: 'success',
          title: 'Warehouse Setup Successfully'
        });

        _this.ShowDataLists();
      })["catch"](function (res) {
        _this.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    },
    ShowDataLists: function ShowDataLists() {
      var _this2 = this;

      axios.get('/addWarehouseEntry').then(function (res) {
        _this2.warehouseLists = res.data.data;
      });
    },
    deleteWarehouse: function deleteWarehouse(id) {
      var _this3 = this;

      var uri = "addWarehouseEntry/".concat(id);
      axios["delete"](uri).then(function (response) {
        Toast.fire({
          icon: 'success',
          title: 'Delete Successfull.'
        });

        _this3.ShowDataLists();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@shortage/warehouseStock.vue?vue&type=template&id=65709306&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/inventory/inventory@shortage/warehouseStock.vue?vue&type=template&id=65709306& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card mt-5" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive bg-white" }, [
        _c("table", { staticClass: "table table-hover table-bordered mb-0" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.warehouseLists, function(warehouseList, index) {
              return _c("tr", [
                _c("td", [_vm._v(" " + _vm._s(++index) + " ")]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(" " + _vm._s(warehouseList.warehouseName) + " ")
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(warehouseList.location) + " ")]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(" " + _vm._s(warehouseList.fullAddress) + " ")
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "mr-2 btn-hover-shine btn btn-shadow btn-primary",
                        attrs: { to: "/warehouseEdit" + warehouseList.id }
                      },
                      [_c("i", { staticClass: " fa fa-edit" }), _vm._v("Edit")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn-hover-shine btn btn-shadow btn btn-danger",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.deleteWarehouse(warehouseList.id)
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: " fa fa-trash" }),
                        _vm._v("Delete")
                      ]
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
          _vm._v("Warehouse List")
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
        _c("th", [_vm._v(" SN ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Warehouse Name ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Location ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Full Address ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Stock Amount ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Stock Visit")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@shortage/warehouseStock.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@shortage/warehouseStock.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _warehouseStock_vue_vue_type_template_id_65709306___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warehouseStock.vue?vue&type=template&id=65709306& */ "./resources/js/admin/page/inventory/inventory@shortage/warehouseStock.vue?vue&type=template&id=65709306&");
/* harmony import */ var _warehouseStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouseStock.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/inventory/inventory@shortage/warehouseStock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _warehouseStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _warehouseStock_vue_vue_type_template_id_65709306___WEBPACK_IMPORTED_MODULE_0__["render"],
  _warehouseStock_vue_vue_type_template_id_65709306___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/inventory/inventory@shortage/warehouseStock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@shortage/warehouseStock.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@shortage/warehouseStock.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_warehouseStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./warehouseStock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@shortage/warehouseStock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_warehouseStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/inventory/inventory@shortage/warehouseStock.vue?vue&type=template&id=65709306&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/admin/page/inventory/inventory@shortage/warehouseStock.vue?vue&type=template&id=65709306& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_warehouseStock_vue_vue_type_template_id_65709306___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./warehouseStock.vue?vue&type=template&id=65709306& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/inventory/inventory@shortage/warehouseStock.vue?vue&type=template&id=65709306&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_warehouseStock_vue_vue_type_template_id_65709306___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_warehouseStock_vue_vue_type_template_id_65709306___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);