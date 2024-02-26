(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[" employee-details"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      singleEmployeeInfo: {},
      singleEmployeeEducations: {},
      singleEmployeeProfessionals: {},
      singleEmployeeSkills: {},
      singleEmployeeBankings: {}
    };
  },
  mounted: function mounted() {
    this.employeeInfo();
  },
  methods: {
    employeeInfo: function employeeInfo() {
      var _this = this;

      axios.get('/employeeReportView/' + this.$route.params.employeeId).then(function (res) {
        _this.singleEmployeeInfo = res.data.singleEmployeeInfo;
        _this.singleEmployeeEducations = res.data.singleEmployeeEducation;
        _this.singleEmployeeProfessionals = res.data.singleEmployeeProfessional;
        _this.singleEmployeeSkills = res.data.singleEmployeeSkill;
        _this.singleEmployeeBankings = res.data.singleEmployeeBanking;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=style&index=0&media=screen&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=style&index=0&media=screen&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.employeeDetail{\n    margin: 20px 0px;\n}\n.employeeDetail .form-row{\n  margin:0px\n}\n.employeeDetail .col-md-6.col-12 {\n    padding: 10px;\n    border: 1px solid #ddd;\n}\n.employeeDetail .col-md-6.col-12 {\n   padding: 10px;\n   border: 1px solid #ddd;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=style&index=0&media=screen&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=style&index=0&media=screen&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./employee@detail.vue?vue&type=style&index=0&media=screen&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=style&index=0&media=screen&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=template&id=0340ee21&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=template&id=0340ee21& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card main-card  element-block-example" }, [
      _c("div", { staticClass: "card-header text-center alert-info" }, [
        _c("h3", { staticStyle: { color: "black" } }, [
          _vm._v(_vm._s(_vm.singleEmployeeInfo.fullName) + " ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row m-0" }, [
        _c("div", { staticClass: "employeeDetail  bg-white col-sm-12" }, [
          _c("div", { staticClass: "form-row" }, [
            _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
              _vm._m(0),
              _vm._v(" "),
              _vm.singleEmployeeInfo.shop_employee_types
                ? _c("span", [
                    _vm._v(
                      _vm._s(
                        _vm.singleEmployeeInfo.shop_employee_types
                          .shopEmployeeTypeName
                      )
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
              _vm._m(1),
              _vm._v(" "),
              _vm.singleEmployeeInfo.job_departments
                ? _c("span", [
                    _vm._v(
                      _vm._s(
                        _vm.singleEmployeeInfo.job_departments.jobDepartmentName
                      )
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.singleEmployeeInfo.userName))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.singleEmployeeInfo.fullName))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
              _vm._m(4),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.singleEmployeeInfo.fatherName))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
              _vm._m(5),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.singleEmployeeInfo.motherName))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
              _vm._m(6),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.singleEmployeeInfo.dateOfBirth))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
              _vm._m(7),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.singleEmployeeInfo.phoneNumber))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
              _vm._m(8),
              _vm._v(" "),
              _c("span", [
                _vm.singleEmployeeInfo.religion == 1
                  ? _c("span", [
                      _vm._v("\n                    Islam\n                  ")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.singleEmployeeInfo.religion == 2
                  ? _c("span", [
                      _vm._v("\n                    Hindu\n                  ")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.singleEmployeeInfo.religion == 3
                  ? _c("span", [
                      _vm._v("\n                    Ohter\n                  ")
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _vm._m(9),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
              _vm._m(10),
              _vm._v(" "),
              _c("span", [
                _vm.singleEmployeeInfo.maritalStatus == 1
                  ? _c("span", [
                      _vm._v("\n                    Single\n                  ")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.singleEmployeeInfo.maritalStatus == 2
                  ? _c("span", [
                      _vm._v(
                        "\n                    Married\n                  "
                      )
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
              _vm._m(11),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.singleEmployeeInfo.nidNumber))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
              _vm._m(12),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.singleEmployeeInfo.nationality))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
              _vm._m(13),
              _vm._v(" "),
              _c("span", [
                _vm._v(_vm._s(_vm.singleEmployeeInfo.presentAddress))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
              _vm._m(14),
              _vm._v(" "),
              _c("span", [
                _vm._v(_vm._s(_vm.singleEmployeeInfo.permanentAddress))
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "employeeDetail bg-white col-12" },
          [
            _vm._m(15),
            _vm._v(" "),
            _vm._l(_vm.singleEmployeeEducations, function(
              singleEmployeeEducation,
              index
            ) {
              return index % 2 == 0
                ? _c("span", [
                    _c("div", { staticClass: "form-row" }, [
                      _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
                        _vm._m(16, true),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            _vm._s(singleEmployeeEducation.nameOfInstituteId)
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
                        _vm._m(17, true),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(singleEmployeeEducation.nameOfDegreeId))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
                        _vm._m(18, true),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(singleEmployeeEducation.gradeId))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("hr")
                  ])
                : _vm._e()
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "employeeDetail bg-white col-sm-12" },
          [
            _vm._m(19),
            _vm._v(" "),
            _vm._l(_vm.singleEmployeeProfessionals, function(
              singleEmployeeProfessional
            ) {
              return _c("span", [
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
                    _vm._m(20, true),
                    _vm._v(" "),
                    singleEmployeeProfessional !== null
                      ? _c("span", [
                          _vm._v(
                            _vm._s(singleEmployeeProfessional.organizationName)
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
                    _vm._m(21, true),
                    _vm._v(" "),
                    singleEmployeeProfessional !== null
                      ? _c("span", [
                          _vm._v(_vm._s(singleEmployeeProfessional.designation))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
                    _vm._m(22, true),
                    _vm._v(" "),
                    singleEmployeeProfessional !== null
                      ? _c("span", [
                          _vm._v(
                            _vm._s(singleEmployeeProfessional.yearOfExprience)
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
                    _vm._m(23, true),
                    _vm._v(" "),
                    singleEmployeeProfessional !== null
                      ? _c("span", [
                          _vm._v(_vm._s(singleEmployeeProfessional.address))
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("hr")
              ])
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "employeeDetail bg-white col-sm-12" },
          [
            _vm._m(24),
            _vm._v(" "),
            _vm._l(_vm.singleEmployeeSkills, function(singleEmployeeSkill) {
              return _c("span", [
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
                    _vm._m(25, true),
                    _vm._v(" "),
                    singleEmployeeSkill !== null
                      ? _c("span", [
                          _vm._v(_vm._s(singleEmployeeSkill.skillType))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
                    _vm._m(26, true),
                    _vm._v(" "),
                    singleEmployeeSkill !== null
                      ? _c("span", [
                          _vm._v(_vm._s(singleEmployeeSkill.nameOfInstitute))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
                    _vm._m(27, true),
                    _vm._v(" "),
                    singleEmployeeSkill !== null
                      ? _c("span", [
                          _vm._v(_vm._s(singleEmployeeSkill.durationOfSkill))
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("hr")
              ])
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "employeeDetail bg-white col-sm-12" },
          [
            _vm._m(28),
            _vm._v(" "),
            _vm._l(_vm.singleEmployeeBankings, function(singleEmployeeBanking) {
              return _c("span", [
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
                    _vm._m(29, true),
                    _vm._v(" "),
                    singleEmployeeBanking !== null &&
                    singleEmployeeBanking.bank_type_entry
                      ? _c("span", [
                          _vm._v(
                            _vm._s(
                              singleEmployeeBanking.bank_type_entry
                                .bankTypeEntryName
                            )
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
                    _vm._m(30, true),
                    _vm._v(" "),
                    singleEmployeeBanking !== null &&
                    singleEmployeeBanking.bank_entry
                      ? _c("span", [
                          _vm._v(
                            _vm._s(singleEmployeeBanking.bank_entry.bankName)
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
                    _vm._m(31, true),
                    _vm._v(" "),
                    singleEmployeeBanking !== null
                      ? _c("span", [
                          _vm._v(_vm._s(singleEmployeeBanking.accountName))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
                    _vm._m(32, true),
                    _vm._v(" "),
                    singleEmployeeBanking !== null
                      ? _c("span", [
                          _vm._v(_vm._s(singleEmployeeBanking.accountNumber))
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("hr")
              ])
            })
          ],
          2
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
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v("Employee Type")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" Job Department")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" User Name")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v("Full Name ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v("Father Name ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v("Mother Name ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v("Date Of Birth ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v("Phone Number ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" Religion ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4 col-12 mb-3" }, [
      _c("div", [
        _c("b", { staticClass: "text-success" }, [_vm._v(" Gender ")])
      ]),
      _vm._v(" "),
      _c("span", [_vm._v(" Male ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" Marital Status ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" NID Number ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" Nationality ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" Present Address ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" Permanent Address ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header alert-info mb-3" }, [
      _c("h4", [_vm._v("Education Information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" Name Of Institute ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" Name Of Degree ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" Grade ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header alert-info mb-3" }, [
      _c("h4", [_vm._v("Professional Information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" Organization Name ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [
        _vm._v(" Professional Designation ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [
        _vm._v(" Professional Year Of Exprience ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [
        _vm._v(" Professional Address ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header alert-info mb-3" }, [
      _c("h4", [_vm._v("Skill Information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" Skill Type ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" Name Of Institute ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" Duration Of Skill ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header alert-info mb-3" }, [
      _c("h4", [_vm._v("Banking Information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" Bank Type ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" Bank Name ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" Account Name ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticClass: "text-success" }, [_vm._v(" Account Number ")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employee_detail_vue_vue_type_template_id_0340ee21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee@detail.vue?vue&type=template&id=0340ee21& */ "./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=template&id=0340ee21&");
/* harmony import */ var _employee_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee@detail.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _employee_detail_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee@detail.vue?vue&type=style&index=0&media=screen&lang=css& */ "./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=style&index=0&media=screen&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _employee_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _employee_detail_vue_vue_type_template_id_0340ee21___WEBPACK_IMPORTED_MODULE_0__["render"],
  _employee_detail_vue_vue_type_template_id_0340ee21___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employee_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./employee@detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employee_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=style&index=0&media=screen&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=style&index=0&media=screen&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_employee_detail_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./employee@detail.vue?vue&type=style&index=0&media=screen&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=style&index=0&media=screen&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_employee_detail_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_employee_detail_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_employee_detail_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_employee_detail_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_employee_detail_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=template&id=0340ee21&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=template&id=0340ee21& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employee_detail_vue_vue_type_template_id_0340ee21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./employee@detail.vue?vue&type=template&id=0340ee21& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/hrmanagement/hrmanagement/employee@detail.vue?vue&type=template&id=0340ee21&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employee_detail_vue_vue_type_template_id_0340ee21___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_employee_detail_vue_vue_type_template_id_0340ee21___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);