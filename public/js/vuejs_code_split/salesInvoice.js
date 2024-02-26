(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["salesInvoice"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@invoice.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@invoice.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        date: moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD")
      }),
      bankInfoDetails: [],
      salesInvoiceLists: {},
      gets: {},
      lists: "",
      total: "",
      due: "",
      discount: "",
      customer: []
    };
  },
  mounted: function mounted() {
    this.view();
  },
  methods: {
    view: function view() {
      function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }

      $(document).ready(function () {
        $("#sampleTable").DataTable({
          processing: true,
          serverSide: true,
          ajax: "/salesInvoiceList",
          columns: [{
            data: "salesDate"
          }, {
            data: "salesInvoiceNo",
            render: function render(data, row) {
              var ok = '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" onclick="editModal(' + data + ')">' + data + "</button>";
              return ok;
            }
          }, {
            data: "customerName",
            name: "customerName.customerName"
          }, {
            data: "customerType",
            name: "customerType.shopCustomerName"
          }, {
            data: "totalBalance"
          }, {
            data: "discountPrice"
          }, {
            data: "totalPayable"
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
    search: function search() {
      var date = this.form.date;

      function removeHTML(str) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }

      $(document).ready(function () {
        $("#sampleTable").DataTable({
          processing: true,
          serverSide: true,
          bDestroy: true,
          ajax: "/salesInvoiceSearchList/" + date + "/0/0",
          columns: [{
            data: "salesDate"
          }, {
            data: "salesInvoiceNo",
            render: function render(data, row) {
              var ok = '<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" onclick="editModal(' + data + ')">' + data + "</button>";
              return ok;
            }
          }, {
            data: "customerName",
            name: "customerName.customerName"
          }, {
            data: "customerType",
            name: "customerType.shopCustomerName"
          }, {
            data: "totalBalance"
          }, {
            data: "discountPrice"
          }, {
            data: "totalPayable"
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
    bankDetails: function bankDetails(id) {
      var _this = this;

      var uri = 'getSalesBankDetails/' + id;
      axios.get(uri).then(function (response) {
        _this.bankInfoDetails = response.data.data;
      });
    },
    editModal: function editModal(id) {
      var _this2 = this;

      axios.get("salesInvoiceList/".concat(id)).then(function (res) {
        _this2.lists = res.data.lists;
        _this2.total = res.data.total;
        _this2.discount = res.data.discount;
        _this2.due = res.data.due;
        _this2.customer = res.data.customer;
      });

      if (this.due.mobileAmount > 0) {
        this.bankDetails(id);
      }

      $("#salesId").modal("show");
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
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@invoice.vue?vue&type=template&id=2bc40674&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/sales/sales@invoice.vue?vue&type=template&id=2bc40674& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "card-header-tab card-header alert-info" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "span",
            {
              staticStyle: {
                margin: "0px auto",
                "font-weight": "bold",
                "font-size": "30px"
              }
            },
            [
              _c("router-link", { attrs: { to: "/product@sales" } }, [
                _c("i", {
                  staticClass: "fa fa-balance-scale",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v("\n          Sales\n        ")
              ])
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body table-responsive bg-white" }, [
          _c("div", { staticClass: "row mb-4" }, [
            _c("div", { staticClass: "col" }),
            _vm._v(" "),
            _c("div", { staticClass: "col" }, [
              _c(
                "form",
                {
                  attrs: { action: "" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.search()
                    }
                  }
                },
                [
                  _c("table", { staticClass: "table-bordered" }, [
                    _c("tr", [
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.date,
                              expression: "form.date"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "date" },
                          domProps: { value: _vm.form.date },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "date", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm._m(1)
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col" })
          ]),
          _vm._v(" "),
          _vm._m(2),
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
                {
                  staticClass: "modal-dialog modal-lg",
                  attrs: { role: "document" }
                },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c("div", { staticClass: "card" }, [
                        _vm._m(4),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-body" }, [
                          _vm._m(5),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticStyle: { "padding-top": "0px !important" },
                              attrs: { id: "invoice" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "invoice overflow-auto" },
                                [
                                  _c(
                                    "div",
                                    { staticStyle: { "min-width": "600px" } },
                                    [
                                      _c("invoice"),
                                      _vm._v(" "),
                                      _c("main", [
                                        _c(
                                          "div",
                                          { staticClass: "row contacts" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "col invoice-to" },
                                              [
                                                _vm._m(6),
                                                _vm._v(" "),
                                                _vm._l(_vm.customer, function(
                                                  cus
                                                ) {
                                                  return _c(
                                                    "span",
                                                    { key: cus.id },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass: "address"
                                                        },
                                                        [
                                                          _vm._v(
                                                            " " +
                                                              _vm._s(
                                                                cus.customer
                                                                  .customerName
                                                              ) +
                                                              " "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass: "address"
                                                        },
                                                        [
                                                          _vm._v(
                                                            " " +
                                                              _vm._s(
                                                                cus.customer
                                                                  .customerPhone
                                                              ) +
                                                              " "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                })
                                              ],
                                              2
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "col invoice-details"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "date" },
                                                  [
                                                    _vm._v(
                                                      " Sales Invoice: " +
                                                        _vm._s(
                                                          _vm.due.salesInvoiceNo
                                                        )
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "date" },
                                                  [
                                                    _vm._v(
                                                      " Sales Date: " +
                                                        _vm._s(
                                                          _vm.due.salesDate
                                                        )
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "table",
                                          {
                                            staticClass:
                                              "table table-bordered border-0",
                                            attrs: {
                                              border: "0",
                                              cellspacing: "0",
                                              cellpadding: "0"
                                            }
                                          },
                                          [
                                            _vm._m(7),
                                            _vm._v(" "),
                                            _c(
                                              "tbody",
                                              _vm._l(_vm.lists, function(
                                                list,
                                                index
                                              ) {
                                                return _c(
                                                  "tr",
                                                  { key: list.id },
                                                  [
                                                    _c("td", [
                                                      _vm._v(_vm._s(++index))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass: "text-left"
                                                      },
                                                      [
                                                        _c("span", [
                                                          _vm._v(
                                                            " " +
                                                              _vm._s(
                                                                list.productName
                                                              ) +
                                                              " "
                                                          )
                                                        ])
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass: "text-left"
                                                      },
                                                      [
                                                        _c("span", [
                                                          _vm._v(
                                                            " " +
                                                              _vm._s(
                                                                list.brandName
                                                              ) +
                                                              " "
                                                          )
                                                        ])
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass: "text-left"
                                                      },
                                                      [
                                                        _c("span", [
                                                          _vm._v(
                                                            " " +
                                                              _vm._s(
                                                                list.unit_name
                                                              ) +
                                                              " "
                                                          )
                                                        ])
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass: "text-left"
                                                      },
                                                      [
                                                        _c("span", [
                                                          _vm._v(
                                                            " " +
                                                              _vm._s(
                                                                list.colorName
                                                              ) +
                                                              " "
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        list.sizeId
                                                          ? _c("span", [
                                                              _vm._v(
                                                                " " +
                                                                  _vm._s(
                                                                    list.sizeName
                                                                  ) +
                                                                  " "
                                                              )
                                                            ])
                                                          : _vm._e()
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", {}, [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            list.quantity
                                                          ) +
                                                          " "
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", {}, [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            list.unitPrice
                                                          ) +
                                                          " "
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", {}, [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            Math.abs(
                                                              list.quantity *
                                                                list.unitPrice
                                                            )
                                                          ) +
                                                          " "
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", {}, [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            list.totalDiscount
                                                          ) +
                                                          " "
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", {}, [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            list.totalPrice
                                                          ) +
                                                          " "
                                                      )
                                                    ])
                                                  ]
                                                )
                                              }),
                                              0
                                            ),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _vm._m(8),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { staticClass: "border-0" },
                                                [
                                                  _c("b", [
                                                    _vm._v(
                                                      " : " + _vm._s(_vm.total)
                                                    )
                                                  ])
                                                ]
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "row" }, [
                                          _c("div", { staticClass: "col" }),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "col" }),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "col" }, [
                                            _c(
                                              "table",
                                              {
                                                staticClass:
                                                  "table table-bordered"
                                              },
                                              [
                                                _c("tbody", [
                                                  _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-right"
                                                      },
                                                      [_vm._v("Discount")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass: "bg-light"
                                                      },
                                                      [
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(
                                                              _vm.due
                                                                .discountPrice
                                                            ) +
                                                            " "
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-right"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                      Total Product Cost\n                                    "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            _vm.due.totalPayable
                                                          ) +
                                                          " "
                                                      )
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-right"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                      Previous Due\n                                    "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            _vm.due.previousDue
                                                          ) +
                                                          " "
                                                      )
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-right"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                      Current Payable\n                                    "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass: "bg-light"
                                                      },
                                                      [
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(
                                                              _vm.due
                                                                .currentTotalAmount
                                                            ) +
                                                            " "
                                                        )
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _vm.due.currentPaidAmount > 0
                                                    ? _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "text-right"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                            Cash Payment\n                                          "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "bg-light"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                            " +
                                                                _vm._s(
                                                                  _vm.due
                                                                    .currentPaidAmount
                                                                ) +
                                                                "\n                                          "
                                                            )
                                                          ]
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.due.mobileAmount > 0
                                                    ? _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "text-right"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                            Bank Payment\n                                          "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "bg-light"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                            " +
                                                                _vm._s(
                                                                  _vm.due
                                                                    .mobileAmount
                                                                ) +
                                                                "\n                                          "
                                                            )
                                                          ]
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.due.mobileAmount > 0
                                                    ? _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "text-right"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                            Bank Name\n                                          "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "bg-light"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                            " +
                                                                _vm._s(
                                                                  _vm
                                                                    .bankInfoDetails
                                                                    .bankName
                                                                ) +
                                                                " (" +
                                                                _vm._s(
                                                                  _vm
                                                                    .bankInfoDetails
                                                                    .bankAccountType
                                                                ) +
                                                                ")\n                                          "
                                                            )
                                                          ]
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.due.mobileAmount > 0
                                                    ? _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "text-right"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                            Bank Account\n                                          "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "bg-light"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                            " +
                                                                _vm._s(
                                                                  _vm
                                                                    .bankInfoDetails
                                                                    .bankAccountNo
                                                                ) +
                                                                " \n                                            "
                                                            ),
                                                            _vm.bankInfoDetails
                                                              .branch
                                                              ? _c("span", [
                                                                  _vm._v(
                                                                    "(" +
                                                                      _vm._s(
                                                                        _vm
                                                                          .bankInfoDetails
                                                                          .branch
                                                                      ) +
                                                                      ")"
                                                                  )
                                                                ])
                                                              : _vm._e()
                                                          ]
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ])
                                              ]
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "row mt-5" }, [
                                          _c(
                                            "div",
                                            { staticClass: "col" },
                                            [
                                              _c("center", [
                                                _c(
                                                  "span",
                                                  {
                                                    staticStyle: {
                                                      "text-decoration":
                                                        "overline"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                        Supplier Sign  \n                                     "
                                                    )
                                                  ]
                                                )
                                              ])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "col" }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col" },
                                            [
                                              _c("center", [
                                                _c(
                                                  "span",
                                                  {
                                                    staticStyle: {
                                                      "text-decoration":
                                                        "overline"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                        Authorize Sign  \n                                     \n                                "
                                                    )
                                                  ]
                                                )
                                              ])
                                            ],
                                            1
                                          )
                                        ])
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div")
                                ]
                              )
                            ]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(9)
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
    return _c("h4", [
      _c("i", {
        staticClass:
          "header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
      }),
      _vm._v("\n        Sales Invoice\n      ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v(" Search ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "table",
      {
        staticClass: "table table-hover table-striped table-bordered",
        staticStyle: { width: "100%" },
        attrs: { id: "sampleTable" }
      },
      [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("Sales Date")]),
            _vm._v(" "),
            _c("th", [_vm._v("Invoice No")]),
            _vm._v(" "),
            _c("th", [_vm._v("Customer Name")]),
            _vm._v(" "),
            _c("th", [_vm._v("Customer Type")]),
            _vm._v(" "),
            _c("th", [_vm._v("Sales Amount")]),
            _vm._v(" "),
            _c("th", [_vm._v("Discount Price")]),
            _vm._v(" "),
            _c("th", [_vm._v("Total Amount")]),
            _vm._v(" "),
            _c("th", [_vm._v("Total Receivable")]),
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
        [_vm._v("\n                Product Details\n              ")]
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
      { staticClass: "card-header-tab card-header alert-info" },
      [
        _c("h4", [
          _c("i", {
            staticClass:
              "\n                        header-icon\n                        lnr-laptop-phone\n                        icon-gradient\n                        bg-premium-dark\n                      "
          }),
          _vm._v("\n                    Sales Invoice\n                  ")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "toolbar hidden-print" }, [
      _c("div", { staticClass: "text-right" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-info",
            attrs: { id: "printInvoice", onclick: "jQuery('#invoice').print()" }
          },
          [
            _c("i", { staticClass: "fa fa-print" }),
            _vm._v(" Print\n                      ")
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-gray-light" }, [
      _c("u", [_c("b", [_vm._v(" Customer Information :")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v("Product ")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v(" Brand")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v("UNIT")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v("Color/Size")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("UNIT PRICE")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("TOTAL PRICE")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("OFF")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("TOTAL")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      { staticClass: "text-right border-0", attrs: { colspan: "9" } },
      [_c("b", [_vm._v(" Grand Total ")])]
    )
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

/***/ "./resources/js/admin/page/sales/sales@invoice.vue":
/*!*********************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@invoice.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sales_invoice_vue_vue_type_template_id_2bc40674___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales@invoice.vue?vue&type=template&id=2bc40674& */ "./resources/js/admin/page/sales/sales@invoice.vue?vue&type=template&id=2bc40674&");
/* harmony import */ var _sales_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales@invoice.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/sales/sales@invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sales_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sales_invoice_vue_vue_type_template_id_2bc40674___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sales_invoice_vue_vue_type_template_id_2bc40674___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/sales/sales@invoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@invoice.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@invoice.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./sales@invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/sales/sales@invoice.vue?vue&type=template&id=2bc40674&":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/page/sales/sales@invoice.vue?vue&type=template&id=2bc40674& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_invoice_vue_vue_type_template_id_2bc40674___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./sales@invoice.vue?vue&type=template&id=2bc40674& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/sales/sales@invoice.vue?vue&type=template&id=2bc40674&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_invoice_vue_vue_type_template_id_2bc40674___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sales_invoice_vue_vue_type_template_id_2bc40674___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);