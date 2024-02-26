(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["srList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/srList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/srList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        name: '',
        mobileNo: '',
        phoneNo: '',
        email: '',
        address: '',
        area: '',
        status: '1'
      }),
      loading: false,
      openningDivStatus: '',
      productSupplierAllDatas: {},
      salesProductDiscountPriceReports: {}
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  mounted: function mounted() {
    this.getData();
    this.getPaginateList();
    this.checkOpenningSupplier();
  },
  methods: {
    addProductSupplierCreate: function addProductSupplierCreate() {
      var _this = this;

      this.loading = true;
      this.form.post('/addSREntry').then(function (res) {
        _this.loading = false;
        Toast.fire({
          icon: 'success',
          title: 'SR Entry Successfully'
        });

        _this.form.reset();

        _this.getData();
      })["catch"](function (res) {
        _this.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    },
    getData: function getData() {
      var _this2 = this;

      axios.get('/addSREntryReport').then(function (res) {
        _this2.productSupplierAllDatas = res.data.data;
      });
    },
    checkOpenningSupplier: function checkOpenningSupplier() {
      var _this3 = this;

      axios.get('/getCheckOpenningSupplier').then(function (res) {
        _this3.openningDivStatus = res.data.status;
      });
    },
    getPaginateList: function getPaginateList() {
      var _this4 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/addSREntryReport?page=' + page).then(function (response) {
        _this4.productSupplierAllDatas = response.data.data;
      });
    },
    distroy: function distroy(id) {
      var _this5 = this;

      axios["delete"]('/addSREntry/' + id).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Data Delete Succuss'
        });

        _this5.getData();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/srList.vue?vue&type=template&id=3d33537e&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrreport/srList.vue?vue&type=template&id=3d33537e& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
                _vm._l(_vm.productSupplierAllDatas, function(
                  productSupplierAllData,
                  index
                ) {
                  return _c("tr", [
                    _c("td", [_vm._v(_vm._s(index + 1))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(productSupplierAllData.name) + " ")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(productSupplierAllData.mobileNo))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(productSupplierAllData.area))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(productSupplierAllData.customer))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(productSupplierAllData.customerDue))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(productSupplierAllData.totalCollection))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(productSupplierAllData.thisMonthCollection))
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-hover-shine  btn-primary",
                            attrs: {
                              to: "/srCustomerList" + productSupplierAllData.id
                            }
                          },
                          [
                            _c("i", { staticClass: " fa fa-eye" }),
                            _vm._v("View")
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
        ]),
        _vm._v(" "),
        _c(
          "span",
          { staticClass: "card_footer" },
          [
            _c(
              "pagination",
              {
                attrs: { data: _vm.productSupplierAllDatas, limit: _vm.limit },
                on: { "pagination-change-page": _vm.getPaginateList }
              },
              [
                _c("span", { attrs: { slot: "prev-nav" }, slot: "prev-nav" }, [
                  _vm._v("< Previous")
                ]),
                _vm._v(" "),
                _c("span", { attrs: { slot: "next-nav" }, slot: "next-nav" }, [
                  _vm._v("Next >")
                ])
              ]
            )
          ],
          1
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
      { staticClass: "card-header-tab card-header alert-info" },
      [
        _c("h4", [
          _c("i", {
            staticClass:
              "header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          }),
          _vm._v(" SR List ")
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
        _c("th", [_vm._v(" Name")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Mobile ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Area ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Total Customer ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Customer Due ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Total Collection ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" This Month Collection ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Customer List ")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/srList.vue":
/*!******************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/srList.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _srList_vue_vue_type_template_id_3d33537e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./srList.vue?vue&type=template&id=3d33537e& */ "./resources/js/admin/page/hrmanagement/hrreport/srList.vue?vue&type=template&id=3d33537e&");
/* harmony import */ var _srList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./srList.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/hrmanagement/hrreport/srList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _srList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _srList_vue_vue_type_template_id_3d33537e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _srList_vue_vue_type_template_id_3d33537e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/hrmanagement/hrreport/srList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/srList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/srList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_srList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./srList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/srList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_srList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrreport/srList.vue?vue&type=template&id=3d33537e&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrreport/srList.vue?vue&type=template&id=3d33537e& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_srList_vue_vue_type_template_id_3d33537e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./srList.vue?vue&type=template&id=3d33537e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrreport/srList.vue?vue&type=template&id=3d33537e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_srList_vue_vue_type_template_id_3d33537e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_srList_vue_vue_type_template_id_3d33537e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);