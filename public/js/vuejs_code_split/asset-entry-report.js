(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asset-entry-report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/asset/asset@report/assetentry@details.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/asset/asset@report/assetentry@details.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var datatables_net_buttons_js_dataTables_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net-buttons/js/dataTables.buttons.js */ "./node_modules/datatables.net-buttons/js/dataTables.buttons.js");
/* harmony import */ var datatables_net_buttons_js_dataTables_buttons_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_js_dataTables_buttons_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net_buttons_js_buttons_html5_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net-buttons/js/buttons.html5.js */ "./node_modules/datatables.net-buttons/js/buttons.html5.js");
/* harmony import */ var datatables_net_buttons_js_buttons_html5_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_js_buttons_html5_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net_buttons_js_buttons_print_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-buttons/js/buttons.print.js */ "./node_modules/datatables.net-buttons/js/buttons.print.js");
/* harmony import */ var datatables_net_buttons_js_buttons_print_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_js_buttons_print_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_buttons_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-buttons-bs4 */ "./node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.js");
/* harmony import */ var datatables_net_buttons_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var datatables_net_buttons_bs4_css_buttons_bootstrap4_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css */ "./node_modules/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css");
/* harmony import */ var datatables_net_buttons_bs4_css_buttons_bootstrap4_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_bs4_css_buttons_bootstrap4_min_css__WEBPACK_IMPORTED_MODULE_8__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // below you should only import what you need
// Example: import buttons and plugins



 // import the rest for your specific theme



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      gets: '',
      companyName: ''
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  mounted: function mounted() {
    this.getInvoiceSetupInformation();
  },
  methods: {
    getInvoiceSetupInformation: function getInvoiceSetupInformation() {
      var _this = this;

      var uri = "getInvoiceSetupInformation/3";
      axios.get(uri).then(function (response) {
        _this.gets = response.data.data;
        _this.companyName = response.data.data.companyName;

        _this.productSupplierList(_this.$route.params.id);
      });
    },
    productSupplierList: function productSupplierList(e) {
      // axios.get('/assetSupplierList').then(res =>{
      //     this.assetSupplierGetDatas = res.data.assetSupplierGetData;
      // })
      var companyName = this.gets.companyName;
      var address = this.gets.address;
      var contact = this.gets.mobileNo + ', ' + this.gets.email + ', ' + this.gets.website;
      var pageTitle = 'Asset List Details';
      $(document).ready(function () {
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default.a.pdfMake.vfs;
        window.pdfMake = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default.a;
        window.JSZip = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
        var table = $("#sampleTable").DataTable({
          lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
          processing: true,
          language: {
            "processing": "<div style='color:white;position:fixed;top:35%;left:8%;width:90%;min-height:150px;max-height:80%;background:url(/dashboard/assets/images/pre-loader.gif),rgba(0,0,0,.2);background-repeat:no-repeat;background-position:center top;z-index:10;'>Processing..</div>"
          },
          serverSide: true,
          columnDefs: [{
            orderable: false,
            targets: [18]
          }],
          dom: "<'row'<'col-sm-6 col-md-4 text-left'l> <'col-sm-6 col-md-4 text-center'B> <'col-sm-12 col-md-4 text-right'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
          buttons: [{
            extend: 'excelHtml5',
            text: '<i class="fa fa-file-excel-o"></i> Excel',
            title: companyName,
            filename: pageTitle,
            selectorOpts: {
              filter: 'applied',
              order: 'current'
            },
            createEmptyCells: true,
            sheetName: pageTitle,
            messageTop: pageTitle,
            exportOptions: {
              columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
            },
            customize: function customize(xlsx) {//my code
            }
          }, {
            extend: "pdf",
            className: "btn export-pdf",
            text: '<i class="fa fa-file-pdf-o"></i> PDF',
            titleAttr: 'PDF',
            customize: function customize(doc) {
              doc.defaultStyle.alignment = 'center';
              doc.styles.tableHeader.alignment = 'center';
            },
            title: companyName,
            messageTop: address + ', Contact:- ' + contact,
            fileName: pageTitle + ".pdf",
            exportOptions: {
              columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
            }
          }, {
            extend: "print",
            className: "btn btn-primary",
            text: '<i class="fa fa-print"></i> Print',
            titleAttr: 'Print',
            title: '',
            messageTop: '<h3 class="text-center">' + companyName + '</h3><h5 class="text-center">' + address + '</h5><h5 class="text-center border-bottom">' + contact + '</h5><center><span class="badge badge-light border border border-secondary">' + pageTitle + '</span></center>',
            exportOptions: {
              columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
            }
          }],
          ajax: '/shopAssetEntryReportDetails/' + e,
          columns: [{
            "title": "SN",
            render: function render(data, type, row, meta) {
              return meta.row + meta.settings._iDisplayStart + 1;
            }
          }, {
            data: "asset_category_name"
          }, {
            data: "asset_code_name"
          }, {
            data: "asset_brand_name"
          }, {
            data: "supplier_name"
          }, {
            data: "productQuantity"
          }, {
            data: "productCost"
          }, {
            data: "totalProductCost"
          }, {
            data: "purchasedate"
          }, {
            data: "mfgDate"
          }, {
            data: "expiryDate"
          }, {
            data: "invoiceNo"
          }, {
            data: "modelNo"
          }, {
            data: "depreciation"
          }, {
            data: "warranty"
          }, {
            data: "guarantee"
          }, {
            data: "color"
          }, {
            data: "size "
          }, {
            data: "description"
          }, {
            data: "shopAssetEntryId",
            render: function render(data, row) {
              var ok = '<button type="button" class="btn-pill btn-shadow btn btn-outline-primary mr-2"   onclick="details(' + data + ')"><i class=" fa fa-eye"></i> History </button>';
              return ok;
            }
          }]
        });
        $(table.table().container()).removeClass('form-inline');
        $('.col-xs-12').addClass('col-12').removeClass('col-xs-12');
        $.fn.dataTable.ext.errMode = 'none';
      });
    },
    details: function details(id) {
      this.$router.push('/assetentry@statusHistory' + id);
    }
  },
  created: function created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
      }
    });
    window.details = this.details;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/asset/asset@report/assetentry@report.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/asset/asset@report/assetentry@report.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var datatables_net_buttons_js_dataTables_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net-buttons/js/dataTables.buttons.js */ "./node_modules/datatables.net-buttons/js/dataTables.buttons.js");
/* harmony import */ var datatables_net_buttons_js_dataTables_buttons_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_js_dataTables_buttons_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net_buttons_js_buttons_html5_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net-buttons/js/buttons.html5.js */ "./node_modules/datatables.net-buttons/js/buttons.html5.js");
/* harmony import */ var datatables_net_buttons_js_buttons_html5_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_js_buttons_html5_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net_buttons_js_buttons_print_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-buttons/js/buttons.print.js */ "./node_modules/datatables.net-buttons/js/buttons.print.js");
/* harmony import */ var datatables_net_buttons_js_buttons_print_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_js_buttons_print_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_buttons_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-buttons-bs4 */ "./node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.js");
/* harmony import */ var datatables_net_buttons_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var datatables_net_buttons_bs4_css_buttons_bootstrap4_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css */ "./node_modules/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css");
/* harmony import */ var datatables_net_buttons_bs4_css_buttons_bootstrap4_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_bs4_css_buttons_bootstrap4_min_css__WEBPACK_IMPORTED_MODULE_8__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // below you should only import what you need
// Example: import buttons and plugins



 // import the rest for your specific theme



/* harmony default export */ __webpack_exports__["default"] = (_defineProperty({
  data: function data() {
    return {
      sId: '',
      gets: '',
      assetSupplierGetDatas: {},
      lists: {},
      companyName: ''
    };
  },
  props: {
    limit: {
      type: Number,
      "default": 2
    }
  },
  created: function created() {},
  mounted: function mounted() {
    this.getInvoiceSetupInformation();
    this.getPaginateList();
  },
  methods: {
    getInvoiceSetupInformation: function getInvoiceSetupInformation() {
      var _this = this;

      var uri = "getInvoiceSetupInformation/3";
      axios.get(uri).then(function (response) {
        _this.gets = response.data.data;
        _this.companyName = response.data.data.companyName;

        _this.productSupplierList();
      });
    },
    productSupplierList: function productSupplierList() {
      // axios.get('/assetSupplierList').then(res =>{
      //     this.assetSupplierGetDatas = res.data.assetSupplierGetData;
      // })
      var companyName = this.gets.companyName;
      var address = this.gets.address;
      var contact = this.gets.mobileNo + ', ' + this.gets.email + ', ' + this.gets.website;
      var pageTitle = 'Asset List';
      $(document).ready(function () {
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default.a.pdfMake.vfs;
        window.pdfMake = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default.a;
        window.JSZip = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
        var table = $("#sampleTable").DataTable({
          lengthMenu: [[10, 25, 50, 100, 200, 500, -1], [10, 25, 50, 100, 200, 500, "All"]],
          processing: true,
          language: {
            "processing": "<div style='color:white;position:fixed;top:35%;left:8%;width:90%;min-height:150px;max-height:80%;background:url(/dashboard/assets/images/pre-loader.gif),rgba(0,0,0,.2);background-repeat:no-repeat;background-position:center top;z-index:10;'>Processing..</div>"
          },
          serverSide: true,
          columnDefs: [{
            orderable: false,
            targets: [4]
          }],
          dom: "<'row'<'col-sm-6 col-md-4 text-left'l> <'col-sm-6 col-md-4 text-center'B> <'col-sm-12 col-md-4 text-right'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
          buttons: [{
            extend: 'excelHtml5',
            text: '<i class="fa fa-file-excel-o"></i> Excel',
            title: companyName,
            filename: pageTitle,
            selectorOpts: {
              filter: 'applied',
              order: 'current'
            },
            createEmptyCells: true,
            sheetName: pageTitle,
            messageTop: pageTitle,
            exportOptions: {
              columns: [0, 1, 2, 3]
            },
            customize: function customize(xlsx) {//my code
            }
          }, {
            extend: "pdf",
            className: "btn export-pdf",
            text: '<i class="fa fa-file-pdf-o"></i> PDF',
            titleAttr: 'PDF',
            customize: function customize(doc) {
              doc.defaultStyle.alignment = 'center';
              doc.styles.tableHeader.alignment = 'center';
            },
            title: companyName,
            messageTop: address + ', Contact:- ' + contact,
            fileName: pageTitle + ".pdf",
            exportOptions: {
              columns: [0, 1, 2, 3]
            }
          }, {
            extend: "print",
            className: "btn btn-primary",
            text: '<i class="fa fa-print"></i> Print',
            titleAttr: 'Print',
            title: '',
            messageTop: '<h3 class="text-center">' + companyName + '</h3><h5 class="text-center">' + address + '</h5><h5 class="text-center border-bottom">' + contact + '</h5><center><span class="badge badge-light border border border-secondary">' + pageTitle + '</span></center>',
            exportOptions: {
              columns: [0, 1, 2, 3]
            }
          }],
          ajax: "/shopAssetEntryReport",
          columns: [{
            "title": "SN",
            render: function render(data, type, row, meta) {
              return meta.row + meta.settings._iDisplayStart + 1;
            }
          }, {
            data: "assetName"
          }, {
            data: "productQuantity"
          }, {
            data: "totalCost"
          }, {
            data: "assetProductId",
            render: function render(data, row) {
              var ok = '<button type="button" class="btn-pill btn-shadow btn btn-outline-primary mr-2"   onclick="details(' + data + ')"><i class=" fa fa-eye"></i> Details</button>';
              return ok;
            }
          }]
        });
        $(table.table().container()).removeClass('form-inline');
        $('.col-xs-12').addClass('col-12').removeClass('col-xs-12');
      });
    },
    details: function details(id) {
      this.$router.push('/assetentry@details' + id);
    }
  }
}, "created", function created() {
  $.ajaxSetup({
    headers: {
      "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    }
  });
  window.details = this.details;
}));

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/asset/asset@report/assetentry@details.vue?vue&type=template&id=5d2edb8e&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/asset/asset@report/assetentry@details.vue?vue&type=template&id=5d2edb8e& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("div", { staticClass: "card main-card  element-block-example" }, [
        _c("div", { staticClass: "card-header" }, [
          _c("h3", [
            _c("i", {
              staticClass:
                "header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
            }),
            _vm._v(" Asset List Details  ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive bg-white p-3" }, [
          _c(
            "table",
            {
              staticClass: "table table-hover table-striped table-bordered",
              attrs: { id: "sampleTable" }
            },
            [
              _c("thead", [
                _c("tr"),
                _c("tr", [
                  _c("th", [_vm._v("SN")]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v("Asset"),
                    _c("span", { staticClass: "textTransparent" }, [
                      _vm._v("_")
                    ]),
                    _vm._v("Category"),
                    _c("span", { staticClass: "textTransparent" }, [
                      _vm._v("_")
                    ]),
                    _vm._v("Name ")
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v("Asset"),
                    _c("span", { staticClass: "textTransparent" }, [
                      _vm._v("_")
                    ]),
                    _vm._v("Product"),
                    _c("span", { staticClass: "textTransparent" }, [
                      _vm._v("_")
                    ]),
                    _vm._v("Name ")
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v("Asset"),
                    _c("span", { staticClass: "textTransparent" }, [
                      _vm._v("_")
                    ]),
                    _vm._v("Brand"),
                    _c("span", { staticClass: "textTransparent" }, [
                      _vm._v("_")
                    ]),
                    _vm._v("Name")
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v("Asset"),
                    _c("span", { staticClass: "textTransparent" }, [
                      _vm._v("_")
                    ]),
                    _vm._v("Supplier"),
                    _c("span", { staticClass: "textTransparent" }, [
                      _vm._v("_")
                    ]),
                    _vm._v("Name")
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Quantity")]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v("Unit"),
                    _c("span", { staticClass: "textTransparent" }, [
                      _vm._v("_")
                    ]),
                    _vm._v("Price")
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v("Total"),
                    _c("span", { staticClass: "textTransparent" }, [
                      _vm._v("_")
                    ]),
                    _vm._v("Cost")
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v("Purchase"),
                    _c("span", { staticClass: "textTransparent" }, [
                      _vm._v("_")
                    ]),
                    _vm._v("Date")
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v("Mfg"),
                    _c("span", { staticClass: "textTransparent" }, [
                      _vm._v("_")
                    ]),
                    _vm._v("Date")
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v("Expiry"),
                    _c("span", { staticClass: "textTransparent" }, [
                      _vm._v("_")
                    ]),
                    _vm._v("Date")
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v("Invoice"),
                    _c("span", { staticClass: "textTransparent" }, [
                      _vm._v("_")
                    ]),
                    _vm._v("No")
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v("Model"),
                    _c("span", { staticClass: "textTransparent" }, [
                      _vm._v("_")
                    ]),
                    _vm._v("No")
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Depreciation")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Warranty")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Guarantee")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Color")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Size")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Description")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("History")])
                ])
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/asset/asset@report/assetentry@report.vue?vue&type=template&id=40295f98&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/page/asset/asset@report/assetentry@report.vue?vue&type=template&id=40295f98& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("div", { staticClass: "card main-card  element-block-example" }, [
        _c("div", { staticClass: "card-header" }, [
          _c("h3", [
            _c("i", {
              staticClass:
                "header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
            }),
            _vm._v(" Asset Report ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive bg-white p-3" }, [
          _c(
            "table",
            {
              staticClass: "table table-hover table-striped table-bordered",
              attrs: { id: "sampleTable" }
            },
            [
              _c("thead", [
                _c("tr", { staticClass: "alert-info" }),
                _c("tr", [
                  _c("th", [_vm._v("SN")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Asset Name")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Total Quantity")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Total Cost")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Details")])
                ])
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/page/asset/asset@report/assetentry@details.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/admin/page/asset/asset@report/assetentry@details.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assetentry_details_vue_vue_type_template_id_5d2edb8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assetentry@details.vue?vue&type=template&id=5d2edb8e& */ "./resources/js/admin/page/asset/asset@report/assetentry@details.vue?vue&type=template&id=5d2edb8e&");
/* harmony import */ var _assetentry_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assetentry@details.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/asset/asset@report/assetentry@details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _assetentry_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _assetentry_details_vue_vue_type_template_id_5d2edb8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _assetentry_details_vue_vue_type_template_id_5d2edb8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/asset/asset@report/assetentry@details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/asset/asset@report/assetentry@details.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/admin/page/asset/asset@report/assetentry@details.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assetentry_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./assetentry@details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/asset/asset@report/assetentry@details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assetentry_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/asset/asset@report/assetentry@details.vue?vue&type=template&id=5d2edb8e&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/admin/page/asset/asset@report/assetentry@details.vue?vue&type=template&id=5d2edb8e& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assetentry_details_vue_vue_type_template_id_5d2edb8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./assetentry@details.vue?vue&type=template&id=5d2edb8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/asset/asset@report/assetentry@details.vue?vue&type=template&id=5d2edb8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assetentry_details_vue_vue_type_template_id_5d2edb8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assetentry_details_vue_vue_type_template_id_5d2edb8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/page/asset/asset@report/assetentry@report.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/admin/page/asset/asset@report/assetentry@report.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assetentry_report_vue_vue_type_template_id_40295f98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assetentry@report.vue?vue&type=template&id=40295f98& */ "./resources/js/admin/page/asset/asset@report/assetentry@report.vue?vue&type=template&id=40295f98&");
/* harmony import */ var _assetentry_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assetentry@report.vue?vue&type=script&lang=js& */ "./resources/js/admin/page/asset/asset@report/assetentry@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _assetentry_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _assetentry_report_vue_vue_type_template_id_40295f98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _assetentry_report_vue_vue_type_template_id_40295f98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/page/asset/asset@report/assetentry@report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/page/asset/asset@report/assetentry@report.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/admin/page/asset/asset@report/assetentry@report.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assetentry_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./assetentry@report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/asset/asset@report/assetentry@report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assetentry_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/page/asset/asset@report/assetentry@report.vue?vue&type=template&id=40295f98&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/admin/page/asset/asset@report/assetentry@report.vue?vue&type=template&id=40295f98& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assetentry_report_vue_vue_type_template_id_40295f98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./assetentry@report.vue?vue&type=template&id=40295f98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/page/asset/asset@report/assetentry@report.vue?vue&type=template&id=40295f98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assetentry_report_vue_vue_type_template_id_40295f98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assetentry_report_vue_vue_type_template_id_40295f98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);