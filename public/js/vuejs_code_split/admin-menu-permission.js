(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-menu-permission"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminmenucreate/adminmenu@permission.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/adminmenucreate/adminmenu@permission.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      adminId: '',
      adminNameShows: [],
      adminTypeShows: [],
      adminMenuTitleShows: [],
      adminMenuListShows: [],
      adminSubMenuShows: [],
      // Value Catch
      adminTypeId: [],
      adminMenuId: [],
      fullAccess: [],
      viewAccess: [],
      addAccess: [],
      editAccess: [],
      // Menu Submenu Status Variable
      menuPermissionids: [],
      subMenuPermissionids: []
    };
  },
  mounted: function mounted() {
    this.adminSetupNameShow();
    this.adminTitleNameShow();
    this.adminMenulistShow();
    this.adminSubMenuShow();
  },
  methods: {
    adminSetupNameShow: function adminSetupNameShow() {
      var _this = this;

      axios.get('/adminMenuPermission').then(function (res) {
        _this.adminNameShows = res.data.adminSetup;
      });
    },
    adminTypeShow: function adminTypeShow() {
      var _this2 = this;

      axios.get('/adminTypeShow/' + this.adminId).then(function (res) {
        _this2.adminTypeShows = res.data.adminTypeName;
      });
    },
    adminTitleNameShow: function adminTitleNameShow() {
      var _this3 = this;

      axios.get('/adminMenuTitle').then(function (res) {
        _this3.adminMenuTitleShows = res.data.adminMenuTitle;
      });
    },
    adminMenulistShow: function adminMenulistShow() {
      var _this4 = this;

      axios.get('/adminSubMenu/create').then(function (res) {
        _this4.adminMenuListShows = res.data.adminmenulist;
      });
    },
    adminSubMenuShow: function adminSubMenuShow() {
      var _this5 = this;

      axios.get('/adminSubMenuShow').then(function (res) {
        _this5.adminSubMenuShows = res.data.subMenuList;
      });
    },
    adminMenuPermissionCreate: function adminMenuPermissionCreate() {
      var _this6 = this;

      axios.post('/adminMenuPermission', {
        adminId: this.adminId,
        adminTypeId: this.adminTypeId,
        adminMenuId: this.adminMenuId,
        fullAccess: this.fullAccess,
        viewAccess: this.viewAccess,
        addAccess: this.addAccess,
        editAccess: this.editAccess
      }).then(function (res) {
        _this6.adminId = [], _this6.adminTypeId = [], _this6.adminMenuId = [], _this6.fullAccess = [], _this6.viewAccess = [], _this6.addAccess = [], _this6.editAccess = [], Toast.fire({
          icon: 'success',
          title: 'Menu Permission Successfully'
        });
      })["catch"](function (error) {
        Toast.fire({
          icon: 'error',
          title: 'Something Worng'
        });
      });
    },
    permissionMenuSubMenuStatus: function permissionMenuSubMenuStatus() {
      var _this7 = this;

      axios.get('/adminPermissionMenus/' + this.adminId + '/' + this.adminTypeId).then(function (res) {
        _this7.menuPermissionids = res.data.menuPermissionid;
      });
      axios.get('/adminPermissionSubMenus/' + this.adminId + '/' + this.adminTypeId).then(function (res) {
        _this7.subMenuPermissionids = res.data.subMenuPermissionid;
      });
    },
    adminMenuStatusChange: function adminMenuStatusChange(adminMenuStatusId) {
      axios.get('/adminMenuPermissionChange/' + this.adminId + '/' + this.adminTypeId + '/' + adminMenuStatusId).then(function (res) {
        if (res.data.Unactive) {
          Toast.fire({
            icon: 'success',
            title: 'Menu Permission Unactive'
          });
        } else {
          Toast.fire({
            icon: 'success',
            title: 'Menu Permission Active'
          });
        }
      });
      this.permissionMenuSubMenuStatus();
    },
    adminSubMenuStatusChange: function adminSubMenuStatusChange(adminSubMenuStatusId) {
      axios.get('/adminSubMenuPermissionChange/' + this.adminId + '/' + this.adminTypeId + '/' + adminSubMenuStatusId).then(function (res) {
        if (res.data.Unactive) {
          Toast.fire({
            icon: 'success',
            title: 'SubMenu Permission Unactive'
          });
        } else {
          Toast.fire({
            icon: 'success',
            title: 'SubMenu Permission Active'
          });
        }
      });
      this.permissionMenuSubMenuStatus();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminmenucreate/adminmenu@permission.vue?vue&type=template&id=102b7a24&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/adminmenucreate/adminmenu@permission.vue?vue&type=template&id=102b7a24& ***!
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
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Admin Name")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.adminId,
                      expression: "adminId"
                    }
                  ],
                  staticClass: "form_control",
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
                        _vm.adminId = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      function($event) {
                        $event.preventDefault()
                        return _vm.adminTypeShow()
                      }
                    ]
                  }
                },
                [
                  _c("option", { attrs: { value: "" } }, [
                    _vm._v("Select One")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.adminNameShows, function(adminNameShow) {
                    return adminNameShow.admin_entry_relation
                      ? _c(
                          "option",
                          { domProps: { value: adminNameShow.adminId } },
                          [
                            _vm._v(
                              "\n                       " +
                                _vm._s(
                                  adminNameShow.admin_entry_relation.name
                                ) +
                                "\n                     "
                            )
                          ]
                        )
                      : _vm._e()
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Admin Type")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.adminTypeId,
                      expression: "adminTypeId"
                    }
                  ],
                  staticClass: "form_control",
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
                        _vm.adminTypeId = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      function($event) {
                        $event.preventDefault()
                        return _vm.permissionMenuSubMenuStatus()
                      }
                    ]
                  }
                },
                [
                  _c("option", { attrs: { value: "" } }, [
                    _vm._v("Select One")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.adminTypeShows, function(adminTypeShow) {
                    return adminTypeShow.admin_type_relation
                      ? _c(
                          "option",
                          { domProps: { value: adminTypeShow.adminTypeId } },
                          [
                            _vm._v(
                              "\n                       " +
                                _vm._s(
                                  adminTypeShow.admin_type_relation
                                    .adminTypeName
                                ) +
                                "\n                     "
                            )
                          ]
                        )
                      : _vm._e()
                  })
                ],
                2
              )
            ])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "accordion", attrs: { id: "accordionExample" } },
        _vm._l(_vm.adminMenuTitleShows, function(adminMenuTitleShow) {
          return _c(
            "div",
            { staticClass: "card" },
            [
              _c(
                "div",
                {
                  staticClass: "card-header collapsed",
                  attrs: {
                    "data-toggle": "collapse",
                    "data-target":
                      "#collapseOne" + adminMenuTitleShow.adminMenuTitleId,
                    "aria-expanded": "false"
                  }
                },
                [
                  _c("span", { staticClass: "title" }, [
                    _vm._v(_vm._s(adminMenuTitleShow.adminMenuTitleName))
                  ]),
                  _vm._v(" "),
                  _vm._m(1, true)
                ]
              ),
              _vm._v(" "),
              _vm._l(_vm.adminMenuListShows, function(
                adminMenuListShow,
                index
              ) {
                return adminMenuListShow.adminMenuTitleId ==
                  adminMenuTitleShow.adminMenuTitleId
                  ? _c(
                      "div",
                      {
                        staticClass: "collapse",
                        attrs: {
                          id:
                            "collapseOne" + adminMenuListShow.adminMenuTitleId,
                          "data-parent": "#accordionExample"
                        }
                      },
                      [
                        _c("div", { staticClass: "permission-card-body" }, [
                          adminMenuListShow.adminSubMenuStatus == 1
                            ? _c(
                                "div",
                                {
                                  staticClass: "accordion",
                                  attrs: { id: "accordionSecond" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "menuCollapsed collapsed ",
                                      attrs: {
                                        "data-toggle": "collapse",
                                        "data-target":
                                          "#collapseTwo" +
                                          adminMenuListShow.adminMenuId,
                                        "aria-expanded": "false"
                                      }
                                    },
                                    [
                                      _c("h6", { staticClass: "title" }, [
                                        _vm._v(
                                          _vm._s(
                                            adminMenuListShow.adminMenuName
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _vm._m(2, true)
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "table-responsive" },
                                    [
                                      _c(
                                        "table",
                                        {
                                          staticClass:
                                            "table table-hover table-bordered mb-0"
                                        },
                                        _vm._l(_vm.adminSubMenuShows, function(
                                          adminSubMenuShow,
                                          index
                                        ) {
                                          return adminSubMenuShow.adminMenuId ==
                                            adminMenuListShow.adminMenuId
                                            ? _c(
                                                "tr",
                                                {
                                                  staticClass: "collapse p-0",
                                                  attrs: {
                                                    colspan: "3",
                                                    id:
                                                      "collapseTwo" +
                                                      adminSubMenuShow.adminMenuId,
                                                    "data-parent":
                                                      "#accordionSecond"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "td",
                                                    { staticClass: "p-0" },
                                                    [
                                                      _c(
                                                        "table",
                                                        {
                                                          staticClass:
                                                            "table table-hover table-bordered mb-0"
                                                        },
                                                        [
                                                          index + 1 == 1
                                                            ? _c("tr", [
                                                                _c("th", [
                                                                  _vm._v(
                                                                    " Module "
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("th", [
                                                                  _vm._v(
                                                                    " Full Access "
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("th", [
                                                                  _vm._v(
                                                                    " View "
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("th", [
                                                                  _vm._v(
                                                                    " Add "
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("th", [
                                                                  _vm._v(
                                                                    " Edit "
                                                                  )
                                                                ])
                                                              ])
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          _c(
                                                            "tr",
                                                            {
                                                              attrs: {
                                                                id: "width"
                                                              }
                                                            },
                                                            [
                                                              _c("td", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    adminSubMenuShow.adminSubMenuName
                                                                  )
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
                                                                [
                                                                  _c("input", {
                                                                    directives: [
                                                                      {
                                                                        name:
                                                                          "model",
                                                                        rawName:
                                                                          "v-model",
                                                                        value:
                                                                          _vm.fullAccess,
                                                                        expression:
                                                                          "fullAccess"
                                                                      }
                                                                    ],
                                                                    attrs: {
                                                                      type:
                                                                        "checkbox"
                                                                    },
                                                                    domProps: {
                                                                      value:
                                                                        adminSubMenuShow.adminSubMenuId,
                                                                      checked: Array.isArray(
                                                                        _vm.fullAccess
                                                                      )
                                                                        ? _vm._i(
                                                                            _vm.fullAccess,
                                                                            adminSubMenuShow.adminSubMenuId
                                                                          ) > -1
                                                                        : _vm.fullAccess
                                                                    },
                                                                    on: {
                                                                      change: function(
                                                                        $event
                                                                      ) {
                                                                        var $$a =
                                                                            _vm.fullAccess,
                                                                          $$el =
                                                                            $event.target,
                                                                          $$c = $$el.checked
                                                                            ? true
                                                                            : false
                                                                        if (
                                                                          Array.isArray(
                                                                            $$a
                                                                          )
                                                                        ) {
                                                                          var $$v =
                                                                              adminSubMenuShow.adminSubMenuId,
                                                                            $$i = _vm._i(
                                                                              $$a,
                                                                              $$v
                                                                            )
                                                                          if (
                                                                            $$el.checked
                                                                          ) {
                                                                            $$i <
                                                                              0 &&
                                                                              (_vm.fullAccess = $$a.concat(
                                                                                [
                                                                                  $$v
                                                                                ]
                                                                              ))
                                                                          } else {
                                                                            $$i >
                                                                              -1 &&
                                                                              (_vm.fullAccess = $$a
                                                                                .slice(
                                                                                  0,
                                                                                  $$i
                                                                                )
                                                                                .concat(
                                                                                  $$a.slice(
                                                                                    $$i +
                                                                                      1
                                                                                  )
                                                                                ))
                                                                          }
                                                                        } else {
                                                                          _vm.fullAccess = $$c
                                                                        }
                                                                      }
                                                                    }
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _vm._l(
                                                                    _vm.subMenuPermissionids,
                                                                    function(
                                                                      subMenuPermissionid
                                                                    ) {
                                                                      return subMenuPermissionid.subMenuId ==
                                                                        adminSubMenuShow.adminSubMenuId
                                                                        ? _c(
                                                                            "span",
                                                                            [
                                                                              subMenuPermissionid.fullAccess ==
                                                                              1
                                                                                ? _c(
                                                                                    "span",
                                                                                    {
                                                                                      staticClass:
                                                                                        "badge badge-primary btn-hover-shine subMenuActive",
                                                                                      on: {
                                                                                        click: function(
                                                                                          $event
                                                                                        ) {
                                                                                          $event.preventDefault()
                                                                                          return _vm.adminSubMenuStatusChange(
                                                                                            adminSubMenuShow.adminSubMenuId
                                                                                          )
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        " Active "
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                : _vm._e(),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              subMenuPermissionid.fullAccess ==
                                                                              0
                                                                                ? _c(
                                                                                    "span",
                                                                                    {
                                                                                      staticClass:
                                                                                        "badge badge-danger btn-hover-shine menuActive",
                                                                                      on: {
                                                                                        click: function(
                                                                                          $event
                                                                                        ) {
                                                                                          $event.preventDefault()
                                                                                          return _vm.adminSubMenuStatusChange(
                                                                                            adminSubMenuShow.adminSubMenuId
                                                                                          )
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        " Deactive "
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                : _vm._e()
                                                                            ]
                                                                          )
                                                                        : _vm._e()
                                                                    }
                                                                  )
                                                                ],
                                                                2
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
                                                                [
                                                                  _c("input", {
                                                                    directives: [
                                                                      {
                                                                        name:
                                                                          "model",
                                                                        rawName:
                                                                          "v-model",
                                                                        value:
                                                                          _vm.viewAccess,
                                                                        expression:
                                                                          "viewAccess"
                                                                      }
                                                                    ],
                                                                    attrs: {
                                                                      type:
                                                                        "checkbox"
                                                                    },
                                                                    domProps: {
                                                                      value:
                                                                        adminSubMenuShow.adminSubMenuId,
                                                                      checked: Array.isArray(
                                                                        _vm.viewAccess
                                                                      )
                                                                        ? _vm._i(
                                                                            _vm.viewAccess,
                                                                            adminSubMenuShow.adminSubMenuId
                                                                          ) > -1
                                                                        : _vm.viewAccess
                                                                    },
                                                                    on: {
                                                                      change: function(
                                                                        $event
                                                                      ) {
                                                                        var $$a =
                                                                            _vm.viewAccess,
                                                                          $$el =
                                                                            $event.target,
                                                                          $$c = $$el.checked
                                                                            ? true
                                                                            : false
                                                                        if (
                                                                          Array.isArray(
                                                                            $$a
                                                                          )
                                                                        ) {
                                                                          var $$v =
                                                                              adminSubMenuShow.adminSubMenuId,
                                                                            $$i = _vm._i(
                                                                              $$a,
                                                                              $$v
                                                                            )
                                                                          if (
                                                                            $$el.checked
                                                                          ) {
                                                                            $$i <
                                                                              0 &&
                                                                              (_vm.viewAccess = $$a.concat(
                                                                                [
                                                                                  $$v
                                                                                ]
                                                                              ))
                                                                          } else {
                                                                            $$i >
                                                                              -1 &&
                                                                              (_vm.viewAccess = $$a
                                                                                .slice(
                                                                                  0,
                                                                                  $$i
                                                                                )
                                                                                .concat(
                                                                                  $$a.slice(
                                                                                    $$i +
                                                                                      1
                                                                                  )
                                                                                ))
                                                                          }
                                                                        } else {
                                                                          _vm.viewAccess = $$c
                                                                        }
                                                                      }
                                                                    }
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _vm._l(
                                                                    _vm.subMenuPermissionids,
                                                                    function(
                                                                      subMenuPermissionid
                                                                    ) {
                                                                      return subMenuPermissionid.subMenuId ==
                                                                        adminSubMenuShow.adminSubMenuId
                                                                        ? _c(
                                                                            "span",
                                                                            [
                                                                              subMenuPermissionid.viewAccess ==
                                                                              1
                                                                                ? _c(
                                                                                    "span",
                                                                                    {
                                                                                      staticClass:
                                                                                        "badge badge-primary btn-hover-shine subMenuActive",
                                                                                      on: {
                                                                                        click: function(
                                                                                          $event
                                                                                        ) {
                                                                                          $event.preventDefault()
                                                                                          return _vm.adminSubMenuStatusChange(
                                                                                            adminSubMenuShow.adminSubMenuId
                                                                                          )
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        " Active "
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                : _vm._e(),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              subMenuPermissionid.viewAccess ==
                                                                              0
                                                                                ? _c(
                                                                                    "span",
                                                                                    {
                                                                                      staticClass:
                                                                                        "badge badge-danger btn-hover-shine menuActive",
                                                                                      on: {
                                                                                        click: function(
                                                                                          $event
                                                                                        ) {
                                                                                          $event.preventDefault()
                                                                                          return _vm.adminSubMenuStatusChange(
                                                                                            adminSubMenuShow.adminSubMenuId
                                                                                          )
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        " Deactive "
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                : _vm._e()
                                                                            ]
                                                                          )
                                                                        : _vm._e()
                                                                    }
                                                                  )
                                                                ],
                                                                2
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
                                                                [
                                                                  _c("input", {
                                                                    directives: [
                                                                      {
                                                                        name:
                                                                          "model",
                                                                        rawName:
                                                                          "v-model",
                                                                        value:
                                                                          _vm.addAccess,
                                                                        expression:
                                                                          "addAccess"
                                                                      }
                                                                    ],
                                                                    attrs: {
                                                                      type:
                                                                        "checkbox"
                                                                    },
                                                                    domProps: {
                                                                      value:
                                                                        adminSubMenuShow.adminSubMenuId,
                                                                      checked: Array.isArray(
                                                                        _vm.addAccess
                                                                      )
                                                                        ? _vm._i(
                                                                            _vm.addAccess,
                                                                            adminSubMenuShow.adminSubMenuId
                                                                          ) > -1
                                                                        : _vm.addAccess
                                                                    },
                                                                    on: {
                                                                      change: function(
                                                                        $event
                                                                      ) {
                                                                        var $$a =
                                                                            _vm.addAccess,
                                                                          $$el =
                                                                            $event.target,
                                                                          $$c = $$el.checked
                                                                            ? true
                                                                            : false
                                                                        if (
                                                                          Array.isArray(
                                                                            $$a
                                                                          )
                                                                        ) {
                                                                          var $$v =
                                                                              adminSubMenuShow.adminSubMenuId,
                                                                            $$i = _vm._i(
                                                                              $$a,
                                                                              $$v
                                                                            )
                                                                          if (
                                                                            $$el.checked
                                                                          ) {
                                                                            $$i <
                                                                              0 &&
                                                                              (_vm.addAccess = $$a.concat(
                                                                                [
                                                                                  $$v
                                                                                ]
                                                                              ))
                                                                          } else {
                                                                            $$i >
                                                                              -1 &&
                                                                              (_vm.addAccess = $$a
                                                                                .slice(
                                                                                  0,
                                                                                  $$i
                                                                                )
                                                                                .concat(
                                                                                  $$a.slice(
                                                                                    $$i +
                                                                                      1
                                                                                  )
                                                                                ))
                                                                          }
                                                                        } else {
                                                                          _vm.addAccess = $$c
                                                                        }
                                                                      }
                                                                    }
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _vm._l(
                                                                    _vm.subMenuPermissionids,
                                                                    function(
                                                                      subMenuPermissionid
                                                                    ) {
                                                                      return subMenuPermissionid.subMenuId ==
                                                                        adminSubMenuShow.adminSubMenuId
                                                                        ? _c(
                                                                            "span",
                                                                            [
                                                                              subMenuPermissionid.addAccess ==
                                                                              1
                                                                                ? _c(
                                                                                    "span",
                                                                                    {
                                                                                      staticClass:
                                                                                        "badge badge-primary btn-hover-shine subMenuActive",
                                                                                      on: {
                                                                                        click: function(
                                                                                          $event
                                                                                        ) {
                                                                                          $event.preventDefault()
                                                                                          return _vm.adminSubMenuStatusChange(
                                                                                            adminSubMenuShow.adminSubMenuId
                                                                                          )
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        " Active "
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                : _vm._e(),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              subMenuPermissionid.addAccess ==
                                                                              0
                                                                                ? _c(
                                                                                    "span",
                                                                                    {
                                                                                      staticClass:
                                                                                        "badge badge-danger btn-hover-shine menuActive",
                                                                                      on: {
                                                                                        click: function(
                                                                                          $event
                                                                                        ) {
                                                                                          $event.preventDefault()
                                                                                          return _vm.adminSubMenuStatusChange(
                                                                                            adminSubMenuShow.adminSubMenuId
                                                                                          )
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        " Deactive "
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                : _vm._e()
                                                                            ]
                                                                          )
                                                                        : _vm._e()
                                                                    }
                                                                  )
                                                                ],
                                                                2
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
                                                                [
                                                                  _c("input", {
                                                                    directives: [
                                                                      {
                                                                        name:
                                                                          "model",
                                                                        rawName:
                                                                          "v-model",
                                                                        value:
                                                                          _vm.editAccess,
                                                                        expression:
                                                                          "editAccess"
                                                                      }
                                                                    ],
                                                                    attrs: {
                                                                      type:
                                                                        "checkbox"
                                                                    },
                                                                    domProps: {
                                                                      value:
                                                                        adminSubMenuShow.adminSubMenuId,
                                                                      checked: Array.isArray(
                                                                        _vm.editAccess
                                                                      )
                                                                        ? _vm._i(
                                                                            _vm.editAccess,
                                                                            adminSubMenuShow.adminSubMenuId
                                                                          ) > -1
                                                                        : _vm.editAccess
                                                                    },
                                                                    on: {
                                                                      change: function(
                                                                        $event
                                                                      ) {
                                                                        var $$a =
                                                                            _vm.editAccess,
                                                                          $$el =
                                                                            $event.target,
                                                                          $$c = $$el.checked
                                                                            ? true
                                                                            : false
                                                                        if (
                                                                          Array.isArray(
                                                                            $$a
                                                                          )
                                                                        ) {
                                                                          var $$v =
                                                                              adminSubMenuShow.adminSubMenuId,
                                                                            $$i = _vm._i(
                                                                              $$a,
                                                                              $$v
                                                                            )
                                                                          if (
                                                                            $$el.checked
                                                                          ) {
                                                                            $$i <
                                                                              0 &&
                                                                              (_vm.editAccess = $$a.concat(
                                                                                [
                                                                                  $$v
                                                                                ]
                                                                              ))
                                                                          } else {
                                                                            $$i >
                                                                              -1 &&
                                                                              (_vm.editAccess = $$a
                                                                                .slice(
                                                                                  0,
                                                                                  $$i
                                                                                )
                                                                                .concat(
                                                                                  $$a.slice(
                                                                                    $$i +
                                                                                      1
                                                                                  )
                                                                                ))
                                                                          }
                                                                        } else {
                                                                          _vm.editAccess = $$c
                                                                        }
                                                                      }
                                                                    }
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _vm._l(
                                                                    _vm.subMenuPermissionids,
                                                                    function(
                                                                      subMenuPermissionid
                                                                    ) {
                                                                      return subMenuPermissionid.subMenuId ==
                                                                        adminSubMenuShow.adminSubMenuId
                                                                        ? _c(
                                                                            "span",
                                                                            [
                                                                              subMenuPermissionid.editAccess ==
                                                                              1
                                                                                ? _c(
                                                                                    "span",
                                                                                    {
                                                                                      staticClass:
                                                                                        "badge badge-primary btn-hover-shine subMenuActive",
                                                                                      on: {
                                                                                        click: function(
                                                                                          $event
                                                                                        ) {
                                                                                          $event.preventDefault()
                                                                                          return _vm.adminSubMenuStatusChange(
                                                                                            adminSubMenuShow.adminSubMenuId
                                                                                          )
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        " Active "
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                : _vm._e(),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              subMenuPermissionid.editAccess ==
                                                                              0
                                                                                ? _c(
                                                                                    "span",
                                                                                    {
                                                                                      staticClass:
                                                                                        "badge badge-danger btn-hover-shine menuActive",
                                                                                      on: {
                                                                                        click: function(
                                                                                          $event
                                                                                        ) {
                                                                                          $event.preventDefault()
                                                                                          return _vm.adminSubMenuStatusChange(
                                                                                            adminSubMenuShow.adminSubMenuId
                                                                                          )
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        " Deactive "
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                : _vm._e()
                                                                            ]
                                                                          )
                                                                        : _vm._e()
                                                                    }
                                                                  )
                                                                ],
                                                                2
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        }),
                                        0
                                      )
                                    ]
                                  )
                                ]
                              )
                            : _c("div", [
                                _c(
                                  "table",
                                  {
                                    staticClass:
                                      "table table-hover table-bordered mb-0"
                                  },
                                  [
                                    _c("tr", { attrs: { id: "width" } }, [
                                      _c("td", { attrs: { colspan: "5" } }, [
                                        _c("h6", { staticClass: "title ml" }, [
                                          _vm._v(
                                            _vm._s(
                                              adminMenuListShow.adminMenuName
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.adminMenuId,
                                                expression: "adminMenuId"
                                              }
                                            ],
                                            attrs: { type: "checkbox" },
                                            domProps: {
                                              value:
                                                adminMenuListShow.adminMenuId,
                                              checked: Array.isArray(
                                                _vm.adminMenuId
                                              )
                                                ? _vm._i(
                                                    _vm.adminMenuId,
                                                    adminMenuListShow.adminMenuId
                                                  ) > -1
                                                : _vm.adminMenuId
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a = _vm.adminMenuId,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v =
                                                      adminMenuListShow.adminMenuId,
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      (_vm.adminMenuId = $$a.concat(
                                                        [$$v]
                                                      ))
                                                  } else {
                                                    $$i > -1 &&
                                                      (_vm.adminMenuId = $$a
                                                        .slice(0, $$i)
                                                        .concat(
                                                          $$a.slice($$i + 1)
                                                        ))
                                                  }
                                                } else {
                                                  _vm.adminMenuId = $$c
                                                }
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm._l(
                                            _vm.menuPermissionids,
                                            function(menuPermissionid) {
                                              return menuPermissionid.menuId ==
                                                adminMenuListShow.adminMenuId
                                                ? _c("span", [
                                                    menuPermissionid.permissionStatus ==
                                                    1
                                                      ? _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "badge badge-primary btn-hover-shine menuActive",
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                $event.preventDefault()
                                                                return _vm.adminMenuStatusChange(
                                                                  adminMenuListShow.adminMenuId
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [_vm._v(" Active ")]
                                                        )
                                                      : _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "badge badge-danger btn-hover-shine menuActive",
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                $event.preventDefault()
                                                                return _vm.adminMenuStatusChange(
                                                                  adminMenuListShow.adminMenuId
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [_vm._v(" Deactive ")]
                                                        )
                                                  ])
                                                : _vm._e()
                                            }
                                          )
                                        ],
                                        2
                                      )
                                    ])
                                  ]
                                )
                              ])
                        ])
                      ]
                    )
                  : _vm._e()
              })
            ],
            2
          )
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "p-3" }, [
        _c(
          "button",
          {
            staticClass: "mr-2 btn-pill btn-hover-shine btn btn-primary",
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.adminMenuPermissionCreate()
              }
            }
          },
          [_vm._v("Submit")]
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
      [
        _c("h3", { staticStyle: { color: "black" } }, [
          _vm._v("Menu Permission")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "accicon" }, [
      _c("i", { staticClass: "fas fa-angle-down rotate-icon" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "accicon" }, [
      _c("i", { staticClass: "fas fa-angle-down rotate-icon" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/adminmenucreate/adminmenu@permission.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/admin/adminmenucreate/adminmenu@permission.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adminmenu_permission_vue_vue_type_template_id_102b7a24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminmenu@permission.vue?vue&type=template&id=102b7a24& */ "./resources/js/admin/adminmenucreate/adminmenu@permission.vue?vue&type=template&id=102b7a24&");
/* harmony import */ var _adminmenu_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminmenu@permission.vue?vue&type=script&lang=js& */ "./resources/js/admin/adminmenucreate/adminmenu@permission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _adminmenu_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _adminmenu_permission_vue_vue_type_template_id_102b7a24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _adminmenu_permission_vue_vue_type_template_id_102b7a24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/adminmenucreate/adminmenu@permission.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/adminmenucreate/adminmenu@permission.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/admin/adminmenucreate/adminmenu@permission.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminmenu_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./adminmenu@permission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminmenucreate/adminmenu@permission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminmenu_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/adminmenucreate/adminmenu@permission.vue?vue&type=template&id=102b7a24&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/admin/adminmenucreate/adminmenu@permission.vue?vue&type=template&id=102b7a24& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminmenu_permission_vue_vue_type_template_id_102b7a24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./adminmenu@permission.vue?vue&type=template&id=102b7a24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminmenucreate/adminmenu@permission.vue?vue&type=template&id=102b7a24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminmenu_permission_vue_vue_type_template_id_102b7a24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminmenu_permission_vue_vue_type_template_id_102b7a24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);