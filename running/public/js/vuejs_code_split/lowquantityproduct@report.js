(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{620:function(t,a,s){"use strict";s.r(a);s(4);var e={data:function(){return{lowQuantityProductLists:{},role:{},purchaseProductReports:{},modelNo:{},batchNo:{},qrCode:{},mfgLicenseNO:{},warranty:{},selectMothOrYearWarranty:{},guarantee:{},selectMothOrYearGuarantee:{},mfgDate:{},expiryDate:{},tax:{},taxAmount:{},taxAmountType:{},quantityType:{},quantityNoti:{},proDescription:{},proAdvantage:{},inward:""}},mounted:function(){this.purchaseProductReport()},methods:{showUnitList:function(t){var a=this;this.adv_sales_priceLists=[],axios.get("showUnitListModal/"+t).then((function(t){a.adv_sales_priceLists=t.data.data,a.inward=t.data.inward})),$("#unitListModal").modal("show")},purchaseProductReport:function(){$(document).ready((function(){$("#sampleTable").DataTable({processing:!0,serverSide:!0,ajax:"/lowQuantityProductList",columns:[{data:"productId"},{data:"product",name:"product.productName"},{data:"brand",name:"brandName.productBrandName"},{data:"color"},{data:"size"},{data:"quantity",render:function(t,a,s){return'<button type="button" onclick="showUnitList('+s.id+')"     class="mr-2 btn-pill btn-hover-shine btn btn-danger">'+t+" </button>"}},{data:"productId",render:function(t){return'<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"   onclick="purchaseProductIdCatch('+t+')">Details</button>'}}]})}))},purchaseProductIdCatch:function(t){var a=this;this.modelNo="",this.batchNo="",this.qrCode="",this.mfgLicenseNO="",this.warranty="",this.selectMothOrYearWarranty="",this.guarantee="",this.selectMothOrYearGuarantee="",this.mfgDate="",this.expiryDate="",this.tax="",this.taxAmount="",this.taxAmountType="",this.quantityType="",this.quantityNoti="",this.proDescription="",this.proAdvantage="",axios.get("/stockSummaryProductDetailsInf/"+t).then((function(t){a.modelNo=t.data.purchaseProductDetails.modelNo,a.batchNo=t.data.purchaseProductDetails.batchNo,a.qrCode=t.data.purchaseProductDetails.qrCode,a.mfgLicenseNO=t.data.purchaseProductDetails.mfgLicenseNO,a.warranty=t.data.purchaseProductDetails.warranty,a.selectMothOrYearWarranty=t.data.purchaseProductDetails.selectMothOrYearWarranty,a.guarantee=t.data.purchaseProductDetails.guarantee,a.selectMothOrYearGuarantee=t.data.purchaseProductDetails.selectMothOrYearGuarantee,a.mfgDate=t.data.purchaseProductDetails.mfgDate,a.expiryDate=t.data.purchaseProductDetails.expiryDate,a.tax=t.data.purchaseProductDetails.tax,a.taxAmount=t.data.purchaseProductDetails.taxAmount,a.taxAmountType=t.data.purchaseProductDetails.taxAmountType,a.quantityType=t.data.purchaseProductDetails.quantityType,a.quantityNoti=t.data.purchaseProductDetails.quantityNoti,a.proDescription=t.data.purchaseProductDetails.proDescription,a.proAdvantage=t.data.purchaseProductDetails.proAdvantage})),$("#purchaseProductId").modal("show")}},created:function(){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),window.deleteExpense=this.deleteExpense,window.showUnitList=this.showUnitList,window.purchaseProductIdCatch=this.purchaseProductIdCatch}},i=s(0),r=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",[s("div",{staticClass:"card main-card  element-block-example"},[t._m(0),t._v(" "),s("div",{staticClass:"table-responsive bg-white p-2"},[t._m(1),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"purchaseProductId",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(3),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(t.modelNo))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(4),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(t.batchNo))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(5),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(t.qrCode))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(6),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(t.mfgLicenseNO))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(7),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[1==t.selectMothOrYearWarranty?s("span",[t._v("\n                                           "+t._s(1*t.warranty)+" Day\n                                       ")]):t._e(),t._v(" "),2==t.selectMothOrYearWarranty?s("span",[t._v("\n                                           "+t._s(30*t.warranty)+" Day\n                                       ")]):t._e(),t._v(" "),3==t.selectMothOrYearWarranty?s("span",[t._v("\n                                           "+t._s(12*t.warranty*30)+" Day\n                                       ")]):t._e()])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(8),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[1==t.selectMothOrYearGuarantee?s("span",[t._v("\n                                           "+t._s(1*t.guarantee)+" Day\n                                       ")]):t._e(),t._v(" "),2==t.selectMothOrYearGuarantee?s("span",[t._v("\n                                           "+t._s(30*t.guarantee)+" Day\n                                       ")]):t._e(),t._v(" "),3==t.selectMothOrYearGuarantee?s("span",[t._v("\n                                           "+t._s(12*t.guarantee*30)+" Day\n                                       ")]):t._e()])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(9),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(t.mfgDate))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(10),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(t.expiryDate))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(11),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(t.tax))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(12),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(t.taxAmount)+" "+t._s(1==t.taxAmountType?"Taka":"")+" "+t._s(2==t.taxAmountType?"Percetage":""))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(13),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(1==t.quantityType?"Low":"")+" "+t._s(2==t.quantityType?"Medium":"")+" "+t._s(3==t.quantityType?"High":""))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(14),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(t.quantityNoti))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(15),t._v(" "),s("span",{staticClass:"col-8 p-0"},[s("h6",[t._v(t._s(t.proDescription))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(16),t._v(" "),s("span",{staticClass:"col-8 p-0"},[s("h6",[t._v(t._s(t.proAdvantage))])])])])]),t._v(" "),t._m(17)])])])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"unitListModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(18),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-bordered"},[t._m(19),t._v(" "),s("tbody",{domProps:{innerHTML:t._s(t.inward)}})])])]),t._v(" "),t._m(20)])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header",staticStyle:{"background-color":"rgb(1, 176, 241)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[a("h3",{staticStyle:{color:"black"}},[this._v("Low Quantity Product Report ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",{staticClass:"table table-hover table-bordered table-striped",attrs:{id:"sampleTable",width:"1300px"}},[s("thead",[s("tr",[s("th",[t._v("SN")]),t._v(" "),s("th",[t._v("Product")]),t._v(" "),s("th",[t._v("Brand")]),t._v(" "),s("th",[t._v("Color")]),t._v(" "),s("th",[t._v("Size")]),t._v(" "),s("th",[t._v("Quantity")]),t._v(" "),s("th",[t._v("Action")])])]),t._v(" "),s("tbody",[s("tr")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header bg-primary text-light"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[this._v("Product Detalis")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Mdoel Name :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Batch Name :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("QR Code :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Mfg License NO :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Warranty :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Guarantee :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Mfg Date :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Expiry Date :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Tax :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Tax Amount :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Quantity Type :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Quantity Notification :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Product Description :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Product Advantage :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-hover-shine btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[this._v("Unit List ")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",{staticClass:"bg-info"},[a("th",[this._v(" Quantity  ")]),this._v(" "),a("th",[this._v(" Total Quantity  ")]),this._v(" "),a("th",[this._v(" Unit Price  ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])}],!1,null,null,null);a.default=r.exports}}]);