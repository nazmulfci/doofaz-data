(window.webpackJsonp=window.webpackJsonp||[]).push([[489],{544:function(t,a,e){"use strict";e.r(a);e(4);var s={data:function(){return{salesInvoiceLists:{},lists:""}},mounted:function(){this.view()},methods:{view:function(){$(document).ready((function(){$("#sampleTable").DataTable({processing:!0,serverSide:!0,ajax:"/salesCashInvoiceList",columns:[{data:"salesInvoiceId"},{data:"salesDate"},{data:"salesInvoiceNo",render:function(t,a){return'<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"   onclick="editModal('+t+')">'+t+"</button>"}},{data:"customerName",name:"customerName.customerName"},{data:"customerType",name:"customerType.shopCustomerName"},{data:"totalQuantity"},{data:"discountPrice"},{data:"currentTotalAmount"},{data:"currentPaidAmount"},{data:"mobileAmount"},{data:"currentDue"}]})}))},editModal:function(t){var a=this;axios.get("salesInvoiceList/".concat(t)).then((function(t){a.lists=t.data.lists})),$("#salesId").modal("show")}},created:function(){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),window.deleteExpense=this.deleteExpense,window.editModal=this.editModal}},i=e(0),n=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("div",{staticClass:"card main-card element-block-example mt-0",staticStyle:{width:"91%",margin:"0 auto"}},[t._m(0),t._v(" "),e("div",{staticClass:"card-body table-responsive bg-white"},[t._m(1),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"salesId",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"card main-card element-block-example"},[t._m(3),t._v(" "),e("div",{staticClass:"table-responsive bg-white"},[e("table",{staticClass:"table table-hover table-bordered table-striped"},[t._m(4),t._v(" "),e("tbody",t._l(t.lists,(function(a,s){return e("tr",[e("td",[t._v(t._s(s+1))]),t._v(" "),e("td",[t._v(t._s(a.created_at))]),t._v(" "),e("td",[t._v(t._s(a.product_name.productName))]),t._v(" "),e("td",[t._v(t._s(a.brand_name.productBrandName))]),t._v(" "),e("td",[t._v(t._s(a.quantity))]),t._v(" "),e("td",[t._v(t._s(a.unitId))]),t._v(" "),e("td",[t._v(t._s(a.unitPrice))]),t._v(" "),e("td"),t._v(" "),e("td",[t._v(t._s(a.totalPrice))])])})),0)])])])]),t._v(" "),t._m(5)])])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header-tab card-header alert-info"},[a("h4",[a("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-premium-dark"}),this._v("\n      Today Cash Sales\n      ")]),this._v(" "),a("span",{staticStyle:{margin:"0px auto","font-weight":"bold","font-size":"30px"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",{staticClass:"table table-hover table-striped table-bordered",staticStyle:{width:"100%"},attrs:{id:"sampleTable"}},[e("thead",[e("tr",[e("th",[t._v("SN")]),t._v(" "),e("th",[t._v("Sales Date")]),t._v(" "),e("th",[t._v("Invoice No")]),t._v(" "),e("th",[t._v("Customer Name")]),t._v(" "),e("th",[t._v("Customer Type")]),t._v(" "),e("th",[t._v("Total Quantity")]),t._v(" "),e("th",[t._v("Discount Price")]),t._v(" "),e("th",[t._v("Total Amount")]),t._v(" "),e("th",[t._v("Paid Cash")]),t._v(" "),e("th",[t._v("Paid Bank")]),t._v(" "),e("th",[t._v("Due Amount")])])]),t._v(" "),e("tbody")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header bg-primary text-light"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[this._v("\n                Product Detalis\n              ")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header",staticStyle:{"background-color":"rgb(1, 176, 241)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[a("h3",{staticStyle:{color:"black"}},[this._v("Sales Product List")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("SN")]),t._v(" "),e("th",[t._v("Sales.Date")]),t._v(" "),e("th",[t._v("Product.Name")]),t._v(" "),e("th",[t._v("Brand")]),t._v(" "),e("th",[t._v("Quantity")]),t._v(" "),e("th",[t._v("Unit")]),t._v(" "),e("th",[t._v("Unit.Price")]),t._v(" "),e("th",[t._v("Discount")]),t._v(" "),e("th",[t._v("Total.Price")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-hover-shine btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[this._v("\n                Close\n              ")])])}],!1,null,null,null);a.default=n.exports}}]);