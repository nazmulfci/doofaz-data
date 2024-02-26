(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todaydue@sales"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/todaydue@sales.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@report/todaydue@sales.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      customerType: "",
      customerTypeLists: [],
      lists: []
    };
  },
  mounted: function mounted() {
    this.view("/salesTodayDueList");
    this.customerTypeList();
  },
  methods: {
    view: function view(url1) {
      var url = url1;

      function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }

      $(document).ready(function () {
        $("#sampleTable ").DataTable({
          processing: true,
          serverSide: true,
          bDestroy: true,
          ajax: url,
          columns: [{
            data: "salesInvoiceId"
          }, {
            data: "salesDate"
          }, {
            data: "salesInvoiceNo",
            render: function render(data, row) {
              var ok = '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"   onclick="editModal(' + data + ')">' + data + "</button>";
              return ok;
            }
          }, {
            data: "customerName",
            name: "customerName.customerName"
          }, {
            data: "customerType",
            name: "customerType.shopCustomerName"
          }, {
            data: "currentTotalAmount"
          }, {
            data: "currentPaidAmount"
          }, {
            data: "mobileAmount"
          }, {
            data: "currentDue"
          }]
        });
      });
    },
    customerTypeget: function customerTypeget() {
      this.view("salesDueListWithType");
    },
    editModal: function editModal(id) {
      var _this = this;

      axios.get("salesInvoiceList/".concat(id)).then(function (res) {
        _this.lists = res.data.lists;
      });
      $("#salesId").modal("show");
    },
    customerTypeList: function customerTypeList() {
      var _this2 = this;

      axios.get("/salesProductEntry/create").then(function (res) {
        _this2.customerTypeLists = res.data.customerTypeLists;
      });
    }
  },
  created: function created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
      }
    });
    window.deleteExpense = this.deleteExpense;
    window.editModal = this.editModal;
    window.customerTypeget = this.customerTypeget;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/todaydue@sales.vue?vue&type=template&id=04392e61&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@report/todaydue@sales.vue?vue&type=template&id=04392e61& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass: "card main-card element-block-example mt-0",
        staticStyle: { width: "91%", margin: "0 auto" }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body table-responsive bg-white" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal fade",
              attrs: {
                id: "salesId",
                tabindex: "-1",
                role: "dialog",
                "aria-labelledby": "exampleModalLongTitle",
                "aria-hidden": "true"
              }
            },
            [
              _c(
                "div",
                { staticClass: "modal-dialog", attrs: { role: "document" } },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c(
                        "div",
                        { staticClass: "card main-card element-block-example" },
                        [
                          _vm._m(3),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "table-responsive bg-white" },
                            [
                              _c(
                                "table",
                                {
                                  staticClass:
                                    "table table-hover table-bordered table-striped"
                                },
                                [
                                  _vm._m(4),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    _vm._l(_vm.lists, function(getInfo, index) {
                                      return _c("tr", [
                                        _c("td", [_vm._v(_vm._s(index + 1))]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(getInfo.created_at))
                                        ]),
                                        _vm._v(" "),
                                        getInfo.product_name
                                          ? _c("td", [
                                              _vm._v(
                                                "\n                          " +
                                                  _vm._s(
                                                    getInfo.product_name
                                                      .productName
                                                  ) +
                                                  "\n                        "
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        getInfo.brand_name
                                          ? _c("td", [
                                              _vm._v(
                                                "\n                          " +
                                                  _vm._s(
                                                    getInfo.brand_name
                                                      .productBrandName
                                                  ) +
                                                  "\n                        "
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        getInfo
                                          ? _c("td", [
                                              _vm._v(_vm._s(getInfo.quantity))
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        getInfo
                                          ? _c("td", [
                                              _vm._v(_vm._s(getInfo.unitPrice))
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        getInfo
                                          ? _c("td", [
                                              _vm._v(
                                                _vm._s(getInfo.totalDiscount)
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        getInfo
                                          ? _c("td", [
                                              _vm._v(_vm._s(getInfo.totalPrice))
                                            ])
                                          : _vm._e()
                                      ])
                                    }),
                                    0
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(5)
                  ])
                ]
              )
            ]
          )
        ])
      ]
    )
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
          _vm._v("\n       Today Sales Due\n      ")
        ]),
        _vm._v(" "),
        _c("span", {
          staticStyle: {
            margin: "0px auto",
            "font-weight": "bold",
            "font-size": "30px"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "table",
      {
        staticClass: "table table-hover table-striped table-bordered",
        staticStyle: { width: "110%" },
        attrs: { id: "sampleTable" }
      },
      [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("SN")]),
            _vm._v(" "),
            _c("th", [_vm._v("Sales Date")]),
            _vm._v(" "),
            _c("th", [_vm._v("C.Type")]),
            _vm._v(" "),
            _c("th", [_vm._v("C.Name")]),
            _vm._v(" "),
            _c("th", [_vm._v("Invoice")]),
            _vm._v(" "),
            _c("th", [_vm._v("Invoice Amount")]),
            _vm._v(" "),
            _c("th", [_vm._v("Paid Cash")]),
            _vm._v(" "),
            _c("th", [_vm._v("Paid Bank")]),
            _vm._v(" "),
            _c("th", [_vm._v("Due Amount")])
          ])
        ]),
        _vm._v(" "),
        _c("tbody")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header bg-primary text-light" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLongTitle" } },
        [_vm._v("\n                Product Detalis\n              ")]
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "card-header",
        staticStyle: {
          "background-color": "rgb(1, 176, 241)",
          border: "1px solid rgba(0, 0, 0, 0.05)"
        }
      },
      [
        _c("h3", { staticStyle: { color: "black" } }, [
          _vm._v("Sales Product List")
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
        _c("th", [_vm._v("Sales.Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product.Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Brand")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit.Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Discount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total.Price")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-hover-shine btn-danger",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("\n                Close\n              ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/todaydue@sales.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/todaydue@sales.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todaydue_sales_vue_vue_type_template_id_04392e61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todaydue@sales.vue?vue&type=template&id=04392e61& */ "./resources/js/admin/page/sales/sales@report/todaydue@sales.vue?vue&type=template&id=04392e61&");
/* harmony import */ var _todaydue_sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todaydue@sales.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/sales/sales@report/todaydue@sales.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _todaydue_sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _todaydue_sales_vue_vue_type_template_id_04392e61___WEBPACK_IMPORTED_MODULE_0__["render"],
  _todaydue_sales_vue_vue_type_template_id_04392e61___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/sales/sales@report/todaydue@sales.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/todaydue@sales.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/todaydue@sales.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_todaydue_sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./todaydue@sales.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/todaydue@sales.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_todaydue_sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@report/todaydue@sales.vue?vue&type=template&id=04392e61&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@report/todaydue@sales.vue?vue&type=template&id=04392e61& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_todaydue_sales_vue_vue_type_template_id_04392e61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./todaydue@sales.vue?vue&type=template&id=04392e61& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@report/todaydue@sales.vue?vue&type=template&id=04392e61&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_todaydue_sales_vue_vue_type_template_id_04392e61___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_todaydue_sales_vue_vue_type_template_id_04392e61___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);