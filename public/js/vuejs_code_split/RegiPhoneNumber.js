(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["RegiPhoneNumber"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminpage/adminsetup/demoEmployee@Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/adminpage/adminsetup/demoEmployee@Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        email: '',
        status: ''
      }),
      loading: false,
      openningDivStatus: '',
      productSupplierAllDatas: {},
      salesProductDiscountPriceReports: {},
      employeeLists: [],
      historys: []
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
  },
  methods: {
    demoEmployeeUpdate: function demoEmployeeUpdate() {
      var _this = this;

      this.loading = true;
      this.form.put('/addDemoEmployee/' + this.$route.params.id).then(function (res) {
        _this.loading = false;
        Toast.fire({
          icon: 'success',
          title: 'Employee Update Successfully'
        });

        _this.$router.push('/demoEmployeeEntry');
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

      axios.get('/addDemoEmployee/' + this.$route.params.id + '/edit').then(function (res) {
        _this2.form.fill(res.data.data);

        _this2.historys = res.data.history;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminpage/adminsetup/demoEmployeeEntry.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/adminpage/adminsetup/demoEmployeeEntry.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        productSupplierName: '',
        productSupplierCode: '',
        productSupplierPhone: '',
        productSupplierHotLine: '',
        productSupplierMail: '',
        productSupplierWeb: '',
        productSupplierFb: '',
        productSupplierImo: '',
        productSupplierAddress: '',
        status: 1
      }),
      loading: false,
      openningDivStatus: '',
      productSupplierAllDatas: {},
      salesProductDiscountPriceReports: {},
      employeeLists: []
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
    this.autoIncrementCode();
    this.checkOpenningSupplier();
  },
  methods: {
    demoEmployeeEntry: function demoEmployeeEntry() {
      var _this = this;

      this.loading = true;
      this.form.post('/addDemoEmployee').then(function (res) {
        _this.loading = false;
        Toast.fire({
          icon: 'success',
          title: 'Employee Entry Successfully'
        });

        _this.form.reset();

        _this.getData();

        _this.autoIncrementCode();
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

      axios.get('/addDemoEmployee').then(function (res) {
        _this2.employeeLists = res.data.employeeList;
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
      axios.get('/addProductSupplier?page=' + page).then(function (response) {
        _this4.productSupplierAllDatas = response.data.productSupplierGetData;
      });
    },
    autoIncrementCode: function autoIncrementCode() {
      var _this5 = this;

      axios.get('/addProductSupplier/create').then(function (res) {
        _this5.form.productSupplierCode = res.data.autoIncrementCode;
      });
    },
    distroy: function distroy(productSupplierId) {
      var _this6 = this;

      axios["delete"]('/addDemoEmployee/' + productSupplierId).then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Data Delete Succuss'
        });

        _this6.getData();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/billing@information.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/billing@information.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        image: '',
        bankEntryId: "",
        senderbankTypeEntryId: ""
      }),
      showBankTypeDatas: {},
      showBankNames: {},
      infos: {}
    };
  },
  mounted: function mounted() {
    this.getData();
    this.view();
  },
  methods: {
    add: function add() {
      var _this = this;

      this.form.post('billingInformation').then(function (res) {
        _this.view();

        Toast.fire({
          icon: 'success',
          title: 'Successfully Uploaded'
        });
      });
    },
    view: function view() {
      var _this2 = this;

      axios.get('/billingInformation').then(function (res) {
        _this2.infos = res.data.data;
      });
    },
    getData: function getData() {
      var _this3 = this;

      axios.get("/bankTypeEntryList").then(function (res) {
        _this3.showBankTypeDatas = res.data.show;
      }), axios.get("/paymentTypeList").then(function (res) {
        _this3.paymentTypeLists = res.data.data;
      }), axios.get("/addExpense").then(function (res) {
        _this3.datas = res.data.data;
      });
    },
    senderBankTypeIdCatch: function senderBankTypeIdCatch() {
      var _this4 = this;

      axios.get("/bankNameList/" + this.form.senderbankTypeEntryId).then(function (res) {
        _this4.showBankNames = res.data.show;
      });

      if (this.form.bankTypeEntryId == 1) {
        this.bankAccount = true;
        this.mobileAccount = false;
      }

      if (this.form.bankTypeEntryId == 2) {
        this.bankAccount = false;
        this.mobileAccount = true;
      }
    },
    changeImage: function changeImage(event) {
      var _this5 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this5.form.image = event.target.result;
        console.log(event.target.result);
      };

      reader.readAsDataURL(file);
    },
    deletePost: function deletePost(id) {
      var _this6 = this;

      axios["delete"]('billingInformation/' + id).then(function (res) {
        _this6.view();

        Toast.fire({
          icon: 'success',
          title: 'Successfully Deleted'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/regi@phone@number.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/regi@phone@number.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
//
//
//
//
//
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
        phone: '',
        whatsApp: ''
      }),
      phones: ''
    };
  },
  mounted: function mounted() {
    this.view();
  },
  methods: {
    add: function add() {
      var _this = this;

      this.form.post('/regiPhone').then(function (res) {
        Toast.fire({
          icon: 'success',
          title: 'Successfully Created'
        });

        _this.form.reset();

        _this.view();
      });
    },
    view: function view() {
      var _this2 = this;

      axios.get('/regiPhone').then(function (res) {
        _this2.phones = res.data.get;
      });
    },
    deleteP: function deleteP(id) {
      var _this3 = this;

      axios["delete"]('/regiPhone/' + id).then(function (res) {
        _this3.view();

        Toast.fire({
          icon: 'success',
          title: 'Successfully deleted'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminpage/adminsetup/demoEmployee@Edit.vue?vue&type=template&id=495ba832&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/adminpage/adminsetup/demoEmployee@Edit.vue?vue&type=template&id=495ba832& ***!
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
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.demoEmployeeUpdate()
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
                            value: _vm.form.name,
                            expression: "form.name"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("name") },
                        attrs: {
                          type: "text",
                          name: "name",
                          placeholder: " Name"
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
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "name" }
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
                          "is-invalid": _vm.form.errors.has("mobileNo")
                        },
                        attrs: {
                          type: "text",
                          name: "mobileNo",
                          placeholder: " Phone Number"
                        },
                        domProps: { value: _vm.form.mobileNo },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "mobileNo", $event.target.value)
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
                            value: _vm.form.email,
                            expression: "form.email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "email",
                          placeholder: "Email..."
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
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "email" }
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
                              value: _vm.form.status,
                              expression: "form.status"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("status")
                          },
                          attrs: { name: "status" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "status",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v(" Select One ")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v(" Publish ")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v(" Unpublish ")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "status" }
                      })
                    ],
                    1
                  )
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
                  _vm._m(5),
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
                      _c("span", { staticClass: "mr-1" }, [_vm._v(" Submit ")])
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
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "exampleModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(6),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-hover table-striped table-bordered",
                    staticStyle: { width: "100%" },
                    attrs: { id: "example" }
                  },
                  [
                    _vm._m(7),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.historys, function(history, index) {
                        return _c("tr", [
                          _c("td", [_vm._v(" " + _vm._s(++index) + " ")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(" " + _vm._s(history.mobile) + " ")
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(" " + _vm._s(history.email) + " ")])
                        ])
                      }),
                      0
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._m(8)
            ])
          ]
        )
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
            _c("h4", [_vm._v(" Demo Employee Entry ")])
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
      _vm._v(" Employee Name\n                     "),
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
      _vm._v(" Phone Number\n                     "),
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
      _vm._v(" Email "),
      _c(
        "span",
        {
          staticClass: "badge badge-primary",
          attrs: { "data-toggle": "modal", "data-target": "#exampleModal" }
        },
        [_vm._v(" History ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Status\n                   "),
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
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v(" History ")]
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
    return _c("tr", [
      _c("th", [_vm._v(" SL ")]),
      _vm._v(" "),
      _c("th", [_vm._v(" Mobile ")]),
      _vm._v(" "),
      _c("th", [_vm._v(" Email ")])
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
          staticClass: "btn btn-danger",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminpage/adminsetup/demoEmployeeEntry.vue?vue&type=template&id=7c836462&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/adminpage/adminsetup/demoEmployeeEntry.vue?vue&type=template&id=7c836462& ***!
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
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.demoEmployeeEntry()
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
                            value: _vm.form.productSupplierName,
                            expression: "form.productSupplierName"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has(
                            "productSupplierName"
                          )
                        },
                        attrs: {
                          type: "text",
                          name: "productSupplierName",
                          placeholder: "Product Supplier Name"
                        },
                        domProps: { value: _vm.form.productSupplierName },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "productSupplierName",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "productSupplierName" }
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
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.productSupplierPhone,
                            expression: "form.productSupplierPhone"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has(
                            "productSupplierPhone"
                          )
                        },
                        attrs: {
                          type: "text",
                          name: "productSupplierPhone",
                          placeholder: " Phone Number"
                        },
                        domProps: { value: _vm.form.productSupplierPhone },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "productSupplierPhone",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "productSupplierPhone" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v(" Email")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.productSupplierMail,
                            expression: "form.productSupplierMail"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "productSupplierMail",
                          placeholder: "Email..."
                        },
                        domProps: { value: _vm.form.productSupplierMail },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "productSupplierMail",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "productSupplierMail" }
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
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.status,
                              expression: "form.status"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("status")
                          },
                          attrs: { name: "status" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "status",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v(" Select One ")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v(" Publish ")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v(" Unpublish ")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "status" }
                      })
                    ],
                    1
                  )
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
                  _vm._m(4),
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
                      _c("span", { staticClass: "mr-1" }, [_vm._v(" Submit ")])
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
    _c("div", { staticClass: "card main-card  element-block-example mt-5" }, [
      _vm._m(5),
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
              _vm._m(6),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.employeeLists, function(
                  productSupplierAllData,
                  index
                ) {
                  return _c("tr", [
                    _c("td", [_vm._v(_vm._s(index + 1))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(productSupplierAllData.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(productSupplierAllData.mobileNo))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(productSupplierAllData.email))]),
                    _vm._v(" "),
                    _c("td", [
                      productSupplierAllData.status
                        ? _c("span", { staticClass: "badge badge-success" }, [
                            _vm._v(
                              "\n                        Active\n                    "
                            )
                          ])
                        : _c("span", { staticClass: "badge badge-danger" }, [
                            _vm._v(
                              "\n                        Block\n                    "
                            )
                          ])
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
                              to:
                                "/demoEmployee@Edit" + productSupplierAllData.id
                            }
                          },
                          [
                            _c("i", { staticClass: " fa fa-edit" }),
                            _vm._v("Edit")
                          ]
                        ),
                        _vm._v(" "),
                        _c("span", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-hover-shine btn-danger",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.distroy(productSupplierAllData.id)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: " fa fa-trash" }),
                              _vm._v("Delete")
                            ]
                          )
                        ])
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
            _c("h4", [_vm._v(" Demo Employee Entry ")])
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
      _vm._v(" Employee Name\n                     "),
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
      _vm._v(" Phone Number\n                     "),
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
      _vm._v(" Status\n                   "),
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
          _vm._v(" Product Supplier List")
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
        _c("th", [_vm._v("  Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("  Mobile")]),
        _vm._v(" "),
        _c("th", [_vm._v("  Email")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Status")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/billing@information.vue?vue&type=template&id=dec9bb4e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/billing@information.vue?vue&type=template&id=dec9bb4e& ***!
  \***********************************************************************************************************************************************************************************************************/
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
                    return _vm.add()
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v(" Bank Type Name")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.senderbankTypeEntryId,
                            expression: "form.senderbankTypeEntryId"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("bankTypeEntryId")
                        },
                        attrs: { name: "bankTypeEntryId" },
                        on: {
                          change: [
                            function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "senderbankTypeEntryId",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            function($event) {
                              $event.preventDefault()
                              return _vm.senderBankTypeIdCatch()
                            }
                          ]
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select One")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.showBankTypeDatas, function(
                          showBankTypeData
                        ) {
                          return _c(
                            "option",
                            {
                              key: showBankTypeData.id,
                              domProps: {
                                value: showBankTypeData.bankTypeEntryId
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(showBankTypeData.bankTypeEntryName) +
                                  "\n                              "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "bankTypeEntryId" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v("Bank Name")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.bankEntryId,
                              expression: "form.bankEntryId"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("bankEntryId")
                          },
                          attrs: { name: "bankEntryId" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "bankEntryId",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select Bank Name")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.showBankNames, function(showBankName) {
                            return _c(
                              "option",
                              {
                                key: showBankName.id,
                                domProps: { value: showBankName.bankEntryId }
                              },
                              [
                                _vm._v(
                                  "\n                              " +
                                    _vm._s(showBankName.bankName) +
                                    "\n                            "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "bankEntryId" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleFormControlFile1" } }, [
                      _vm._v("Upload Instraction")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "form-control-file",
                      attrs: {
                        type: "file",
                        id: "exampleFormControlFile1",
                        name: "image"
                      },
                      on: {
                        change: function($event) {
                          return _vm.changeImage($event)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "img-responsive",
                      attrs: { src: _vm.form.image, height: "70", width: "90" }
                    })
                  ])
                ]),
                _vm._v(" "),
                _vm._m(1)
              ]
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card main-card  element-block-example mt-5" }, [
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive bg-white" }, [
        _c("table", { staticClass: "table table-hover table-bordered mb-0" }, [
          _vm._m(3),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.infos, function(info, index) {
              return _c("tr", { key: info.id }, [
                _c("td", [_vm._v(_vm._s(index + 1))]),
                _vm._v(" "),
                _c("td", [
                  info.bank
                    ? _c("span", [_vm._v(_vm._s(info.bank.bankName))])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("img", {
                    staticClass: "img-responsive",
                    attrs: {
                      src: "/images/" + info.image,
                      height: "70",
                      width: "90"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.deletePost(info.id)
                        }
                      }
                    },
                    [_c("i", { staticClass: " fa fa-trash" }), _vm._v("Delete")]
                  )
                ])
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
          _vm._v("Billing Information")
        ])
      ]
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
        [_vm._v("Submit")]
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
          background: "rgba(221, 221, 221, 0.20)",
          border: "1px solid rgba(0, 0, 0, 0.05)"
        }
      },
      [_c("h3", { staticStyle: { color: "black" } }, [_vm._v("Phone Number")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticStyle: { background: "rgba(242, 242, 242, 0.47)" } }, [
        _c("th", [_vm._v("SN")]),
        _vm._v(" "),
        _c("th", [_vm._v("Bank")]),
        _vm._v(" "),
        _c("th", [_vm._v("Image")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/regi@phone@number.vue?vue&type=template&id=2ec118d8&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/regi@phone@number.vue?vue&type=template&id=2ec118d8& ***!
  \*********************************************************************************************************************************************************************************************************/
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
                    return _vm.add()
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Phone Number")]),
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
                    attrs: { type: "text", placeholder: "Phone Number" },
                    domProps: { value: _vm.form.phone },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "phone", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("WhatsApp Number")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.whatsApp,
                        expression: "form.whatsApp"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "WhatsApp Number" },
                    domProps: { value: _vm.form.whatsApp },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "whatsApp", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm._m(1)
              ]
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card main-card  element-block-example mt-5" }, [
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive bg-white" }, [
        _c("table", { staticClass: "table table-hover table-bordered mb-0" }, [
          _vm._m(3),
          _vm._v(" "),
          _c("tbody", [
            _c("tr", [
              _c("td", [_vm._v(_vm._s(_vm.phones.phone))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm.phones.whatsApp))]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.deleteP(_vm.phones.id)
                      }
                    }
                  },
                  [_vm._v("\n                    Delete ")]
                )
              ])
            ])
          ])
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
          _vm._v("Registration Phone Number")
        ])
      ]
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
        [_vm._v("Submit")]
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
          background: "rgba(221, 221, 221, 0.20)",
          border: "1px solid rgba(0, 0, 0, 0.05)"
        }
      },
      [_c("h3", { staticStyle: { color: "black" } }, [_vm._v("Phone Number")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticStyle: { background: "rgba(242, 242, 242, 0.47)" } }, [
        _c("th", [_vm._v("Phone Number")]),
        _vm._v(" "),
        _c("th", [_vm._v("Whats App Number")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/adminpage/adminsetup/demoEmployee@Edit.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/admin/adminpage/adminsetup/demoEmployee@Edit.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _demoEmployee_Edit_vue_vue_type_template_id_495ba832___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demoEmployee@Edit.vue?vue&type=template&id=495ba832& */ "./resources/js/admin/adminpage/adminsetup/demoEmployee@Edit.vue?vue&type=template&id=495ba832&");
/* harmony import */ var _demoEmployee_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demoEmployee@Edit.vue?vue&type=script&lang=js& */ "./resources/js/admin/adminpage/adminsetup/demoEmployee@Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _demoEmployee_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _demoEmployee_Edit_vue_vue_type_template_id_495ba832___WEBPACK_IMPORTED_MODULE_0__["render"],
  _demoEmployee_Edit_vue_vue_type_template_id_495ba832___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/adminpage/adminsetup/demoEmployee@Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/adminpage/adminsetup/demoEmployee@Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/admin/adminpage/adminsetup/demoEmployee@Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demoEmployee_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./demoEmployee@Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminpage/adminsetup/demoEmployee@Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demoEmployee_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/adminpage/adminsetup/demoEmployee@Edit.vue?vue&type=template&id=495ba832&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/admin/adminpage/adminsetup/demoEmployee@Edit.vue?vue&type=template&id=495ba832& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_demoEmployee_Edit_vue_vue_type_template_id_495ba832___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./demoEmployee@Edit.vue?vue&type=template&id=495ba832& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminpage/adminsetup/demoEmployee@Edit.vue?vue&type=template&id=495ba832&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_demoEmployee_Edit_vue_vue_type_template_id_495ba832___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_demoEmployee_Edit_vue_vue_type_template_id_495ba832___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/adminpage/adminsetup/demoEmployeeEntry.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/admin/adminpage/adminsetup/demoEmployeeEntry.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _demoEmployeeEntry_vue_vue_type_template_id_7c836462___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demoEmployeeEntry.vue?vue&type=template&id=7c836462& */ "./resources/js/admin/adminpage/adminsetup/demoEmployeeEntry.vue?vue&type=template&id=7c836462&");
/* harmony import */ var _demoEmployeeEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demoEmployeeEntry.vue?vue&type=script&lang=js& */ "./resources/js/admin/adminpage/adminsetup/demoEmployeeEntry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _demoEmployeeEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _demoEmployeeEntry_vue_vue_type_template_id_7c836462___WEBPACK_IMPORTED_MODULE_0__["render"],
  _demoEmployeeEntry_vue_vue_type_template_id_7c836462___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/adminpage/adminsetup/demoEmployeeEntry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/adminpage/adminsetup/demoEmployeeEntry.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/admin/adminpage/adminsetup/demoEmployeeEntry.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demoEmployeeEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./demoEmployeeEntry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminpage/adminsetup/demoEmployeeEntry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demoEmployeeEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/adminpage/adminsetup/demoEmployeeEntry.vue?vue&type=template&id=7c836462&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/admin/adminpage/adminsetup/demoEmployeeEntry.vue?vue&type=template&id=7c836462& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_demoEmployeeEntry_vue_vue_type_template_id_7c836462___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./demoEmployeeEntry.vue?vue&type=template&id=7c836462& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminpage/adminsetup/demoEmployeeEntry.vue?vue&type=template&id=7c836462&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_demoEmployeeEntry_vue_vue_type_template_id_7c836462___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_demoEmployeeEntry_vue_vue_type_template_id_7c836462___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/adminpage/adminsetup/demoEmployeeList.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/admin/adminpage/adminsetup/demoEmployeeList.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "resources/js/admin/adminpage/adminsetup/demoEmployeeList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/billing@information.vue":
/*!**********************************************!*\
  !*** ./resources/js/billing@information.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _billing_information_vue_vue_type_template_id_dec9bb4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billing@information.vue?vue&type=template&id=dec9bb4e& */ "./resources/js/billing@information.vue?vue&type=template&id=dec9bb4e&");
/* harmony import */ var _billing_information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./billing@information.vue?vue&type=script&lang=js& */ "./resources/js/billing@information.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _billing_information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _billing_information_vue_vue_type_template_id_dec9bb4e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _billing_information_vue_vue_type_template_id_dec9bb4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/billing@information.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/billing@information.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/billing@information.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_billing_information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./billing@information.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/billing@information.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_billing_information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/billing@information.vue?vue&type=template&id=dec9bb4e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/billing@information.vue?vue&type=template&id=dec9bb4e& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_billing_information_vue_vue_type_template_id_dec9bb4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./billing@information.vue?vue&type=template&id=dec9bb4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/billing@information.vue?vue&type=template&id=dec9bb4e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_billing_information_vue_vue_type_template_id_dec9bb4e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_billing_information_vue_vue_type_template_id_dec9bb4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/regi@phone@number.vue":
/*!********************************************!*\
  !*** ./resources/js/regi@phone@number.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regi_phone_number_vue_vue_type_template_id_2ec118d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regi@phone@number.vue?vue&type=template&id=2ec118d8& */ "./resources/js/regi@phone@number.vue?vue&type=template&id=2ec118d8&");
/* harmony import */ var _regi_phone_number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regi@phone@number.vue?vue&type=script&lang=js& */ "./resources/js/regi@phone@number.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _regi_phone_number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _regi_phone_number_vue_vue_type_template_id_2ec118d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _regi_phone_number_vue_vue_type_template_id_2ec118d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/regi@phone@number.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/regi@phone@number.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/regi@phone@number.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_regi_phone_number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./regi@phone@number.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/regi@phone@number.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_regi_phone_number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/regi@phone@number.vue?vue&type=template&id=2ec118d8&":
/*!***************************************************************************!*\
  !*** ./resources/js/regi@phone@number.vue?vue&type=template&id=2ec118d8& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_regi_phone_number_vue_vue_type_template_id_2ec118d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./regi@phone@number.vue?vue&type=template&id=2ec118d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/regi@phone@number.vue?vue&type=template&id=2ec118d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_regi_phone_number_vue_vue_type_template_id_2ec118d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_regi_phone_number_vue_vue_type_template_id_2ec118d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);