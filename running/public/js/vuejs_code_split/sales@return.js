(window.webpackJsonp=window.webpackJsonp||[]).push([[397],{583:function(t,a,e){"use strict";e.r(a);e(4);var s=e(5),i=e.n(s),n=e(1),r=e.n(n),o={components:{Multiselect:i.a},data:function(){return{form:new Form({date:r()().format("YYYY-MM-DD"),purchaseReturnDate:"",purchaseInvoiceNo:"",purchaseSupplier:"",grandTotal:"",invoiceDiscount:"",supplierPayable:"",totalProductCost:"",currentPayable:"",invoiceNoSearch:"",salesCustomerEntryId:"",customerId:""}),salesInvoiceLists:{},gets:{},invoiceNo:"",lists:"",total:"",due:"",discount:"",customer:[],salesCustomerLists:[],unitLists:[]}},mounted:function(){this.view(),this.customerTypeIdCatch(),this.unitNameShow()},methods:{checkStock:function(t){var a=parseFloat($("#unitId-"+t).val());$("#newQuantity-"+t).attr("placeholder","stock=0"),axios.get("/salesReturnCheckQuantity/"+t+"/"+a).then((function(a){$("#newQuantity-"+t).attr("placeholder","stock="+a.data.stock),$("#newQuantity1-"+t).val(a.data.stock)}))},unitNameShow:function(){var t=this;axios.get("/unitNameShowPurchase").then((function(a){t.unitLists=a.data.unitNameShow}))},selectCustomer:function(t){this.form.customerId=t.salesCustomerEntryId},salesCustomerName:function(t){var a=t.customerName,e=t.customerPhone;return"".concat(a," [").concat(e,"]")},customerTypeIdCatch:function(){var t=this;axios.get("/salesCustomerListReport").then((function(a){t.salesCustomerLists=a.data.data}))},returnSubmit:function(){var t=this;$(".sbtnd").show(),$(".sbtn").hide(),this.form.post("/returnSales").then((function(a){a.data.data?(t.invoiceNo="",t.invoiceYesStatus=!1,t.invoiceNoStatus=!1,t.invoiceLoadingStatus=!1,Toast.fire({icon:"success",title:"Return Invoice Create Successful."}),$("#salesId").modal("hide")):(Toast.fire({icon:"error",title:"Something Missing."}),$(".sbtnd").hide(),$(".sbtn").show())})).catch((function(t){Toast.fire({icon:"error",title:"Something wrong"}),$(".sbtnd").hide(),$(".sbtn").show()}))},productReturn:function(t){var a=this;$("#btnd-"+t).show(),$("#btn-"+t).hide();var e=parseFloat($("#newQuantity-"+t).val()),s=parseFloat($("#unitId-"+t).val()),i=parseFloat($("#newQuantity1-"+t).val());e>i?(Toast.fire({icon:"error",title:"Invalid Return Quantity."}),$("#btnd-"+t).hide(),$("#btn-"+t).show()):e>0?axios.get("/salesProductReturnEntry/"+t+"/"+e+"/"+s).then((function(s){1==s.data.status&&($(".formStatus").show(),$("#td-"+t).html(e+" "+s.data.unitName),$("#unitPrice-"+t).html(s.data.unitPrice),$("#totalPrice-"+t).html(s.data.totalPrice),$("#discountAmount-"+t).html(s.data.discountAmount),$("#totalWithDiscount-"+t).html(s.data.totalWithDiscount),$("#grandTotal").html(s.data.grandTotal),$("#invoiceDiscount").html(s.data.invoiceDiscount),$("#totalProductCost").html(s.data.totalProductCost),$("#supplierPayable").html(s.data.supplierPayable),$("#currentPayable").html(s.data.currentPayable),a.form.purchaseReturnDate=s.data.purchaseReturnDate,a.form.purchaseInvoiceNo=s.data.purchaseInvoiceNo,a.form.purchaseSupplier=s.data.purchaseSupplier,a.form.grandTotal=s.data.grandTotal,a.form.invoiceDiscount=s.data.invoiceDiscount,a.form.supplierPayable=s.data.supplierPayable,a.form.totalProductCost=s.data.totalProductCost,a.form.currentPayable=s.data.currentPayable)})).catch((function(e){a.loading=!1,Toast.fire({icon:"error",title:"Something wrong"}),$("#btnd-"+t).hide(),$("#btn-"+t).show()})):(Toast.fire({icon:"error",title:"Invalid Return Quantity."}),$("#btnd-"+t).hide(),$("#btn-"+t).show())},view:function(){$(document).ready((function(){$("#sampleTable").DataTable({processing:!0,serverSide:!0,ajax:"/salesInvoiceList",columns:[{data:"salesDate"},{data:"salesInvoiceNo",render:function(t,a){return'<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" onclick="editModal('+t+')">'+t+"</button>"}},{data:"customerName",name:"customerName.customerName"},{data:"customerType",name:"customerType.shopCustomerName"},{data:"totalBalance"},{data:"discountPrice"},{data:"totalPayable"},{data:"currentTotalAmount"},{data:"currentPaidAmount"},{data:"mobileAmount"},{data:"currentDue"}]})}))},search:function(){var t=this.form.date;if(this.form.invoiceNoSearch)var a=this.form.invoiceNoSearch;else a=0;if(null==this.form.salesCustomerEntryId)var e=0;else if(this.form.customerId)e=this.form.customerId;else e=0;$(document).ready((function(){$("#sampleTable").DataTable({processing:!0,serverSide:!0,bDestroy:!0,ajax:"/salesInvoiceSearchList/"+t+"/"+a+"/"+e,columns:[{data:"salesDate"},{data:"salesInvoiceNo",render:function(t,a){return'<button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" onclick="editModal('+t+')">'+t+"</button>"}},{data:"customerName",name:"customerName.customerName"},{data:"customerType",name:"customerType.shopCustomerName"},{data:"totalBalance"},{data:"discountPrice"},{data:"totalPayable"},{data:"currentTotalAmount"},{data:"currentPaidAmount"},{data:"mobileAmount"},{data:"currentDue"}]})}))},editModal:function(t){var a=this;axios.get("salesInvoiceList/".concat(t)).then((function(t){a.lists=t.data.lists,a.total=t.data.total,a.discount=t.data.discount,a.due=t.data.due,a.customer=t.data.customer})),$("#salesId").modal("show")}},created:function(){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),window.deleteExpense=this.deleteExpense,window.editModal=this.editModal}},l=e(0),c=Object(l.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("div",{staticClass:"card main-card element-block-example mt-0",staticStyle:{width:"91%",margin:"0 auto"}},[t._m(0),t._v(" "),e("div",{staticClass:"card-body table-responsive bg-white"},[e("div",{staticClass:"row mb-4"},[e("div",{staticClass:"col"}),t._v(" "),e("div",{staticClass:"col"},[e("form",{attrs:{action:""},on:{submit:function(a){return a.preventDefault(),t.search()}}},[e("table",{staticClass:"table-bordered"},[e("tr",[e("td",[e("multiselect",{staticStyle:{width:"200px",padding:"0px!important","padding-bottom":"3px!important"},attrs:{name:"salesCustomerEntryId","custom-label":t.salesCustomerName,options:t.salesCustomerLists,placeholder:"Select one","show-labels":!1},on:{input:t.selectCustomer},model:{value:t.form.salesCustomerEntryId,callback:function(a){t.$set(t.form,"salesCustomerEntryId",a)},expression:"form.salesCustomerEntryId"}},[e("span",{attrs:{slot:"noResult"},slot:"noResult"},[t._v(" Oops! Customer Name Not Found ")])]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.customerId,expression:"form.customerId"}],staticClass:"form-control",staticStyle:{display:"none"},attrs:{placeholder:"Select one"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"customerId",a.target.multiple?e:e[0])}}},t._l(t.salesCustomerLists,(function(a){return e("option",{domProps:{value:a.salesCustomerEntryId}},[t._v(" "+t._s(a.customerName)+" ")])})),0)],1),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.invoiceNoSearch,expression:"form.invoiceNoSearch"}],staticClass:"form-control",staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"Invoice No"},domProps:{value:t.form.invoiceNoSearch},on:{input:function(a){a.target.composing||t.$set(t.form,"invoiceNoSearch",a.target.value)}}})]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.date,expression:"form.date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.form.date},on:{input:function(a){a.target.composing||t.$set(t.form,"date",a.target.value)}}})]),t._v(" "),t._m(1)])])])]),t._v(" "),e("div",{staticClass:"col"})]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"salesId",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"card"},[t._m(4),t._v(" "),e("div",{staticClass:"card-body"},[t._m(5),t._v(" "),e("div",{staticStyle:{"padding-top":"0px !important"},attrs:{id:"invoice"}},[e("div",{staticClass:"invoice overflow-auto"},[e("div",{staticStyle:{"min-width":"600px"}},[e("invoice"),t._v(" "),e("main",[e("div",{staticClass:"row contacts"},[e("div",{staticClass:"col invoice-to"},[t._m(6),t._v(" "),t._l(t.customer,(function(a){return e("span",{key:a.id},[e("div",{staticClass:"address"},[t._v(" "+t._s(a.customer.customerName)+" ")]),t._v(" "),e("div",{staticClass:"address"},[t._v(" "+t._s(a.customer.customerPhone)+" ")])])}))],2),t._v(" "),e("div",{staticClass:"col invoice-details"},[e("div",{staticClass:"date"},[t._v(" Sales Invoice: "+t._s(t.due.salesInvoiceNo))]),t._v(" "),e("div",{staticClass:"date"},[t._v(" Sales Date: "+t._s(t.due.salesDate))])])]),t._v(" "),e("table",{staticClass:"table table-bordered border-0",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[t._m(7),t._v(" "),e("tbody",t._l(t.lists,(function(a,s){return e("tr",{key:a.salesProductEntryId},[e("td",[t._v(t._s(++s))]),t._v(" "),e("td",{staticClass:"text-left"},[e("span",[t._v(" "+t._s(a.productName)+" ")])]),t._v(" "),e("td",[e("span",[t._v(t._s(a.brandName))])]),t._v(" "),e("td",{},[a.colorId?e("span",[t._v("\n                             "+t._s(a.colorName)+"\n                             "),a.sizeId?e("span",[t._v("/\n                             "+t._s(a.sizeName))]):t._e()]):t._e()]),t._v(" "),e("td",{},[t._v(" "+t._s(a.quantity)+" "+t._s(a.unit_name))]),t._v(" "),a.returnable?e("td",{attrs:{id:"td-"+a.salesProductEntryId}},[a.returnQuantity?e("small",{staticClass:"text-danger"},[t._v("Previous Return : "+t._s(a.returnQuantity)+" ")]):t._e(),t._v(" "),e("table",[e("tr",[e("td",[e("select",{staticClass:"form-control",staticStyle:{width:"100px"},attrs:{id:"unitId-"+a.salesProductEntryId},on:{change:function(e){return t.checkStock(a.salesProductEntryId)}}},[e("option",{attrs:{value:""}},[t._v(" ----- ")]),t._v(" "),t._l(a.singleUnitList,(function(a){return e("option",{domProps:{value:a.unitId}},t._l(t.unitLists,(function(s){return s.uniteEntryId==a.unitId?e("span",[t._v(" "+t._s(s.uniteEntryName))]):t._e()})),0)}))],2)]),t._v(" "),e("td",[e("input",{attrs:{type:"hidden",id:"newQuantity1-"+a.salesProductEntryId}}),t._v(" "),e("input",{staticClass:"form-control newQuantity",staticStyle:{width:"200px"},attrs:{type:"number",id:"newQuantity-"+a.salesProductEntryId,min:"1",max:a.quantity,step:"0.01"}}),t._v(" "),e("input",{attrs:{type:"hidden",id:"returnable-"+a.salesProductEntryId},domProps:{value:a.returnable}})]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-danger float-right",staticStyle:{display:"none"},attrs:{id:"btnd-"+a.salesProductEntryId}},[e("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}})]),t._v(" "),e("button",{staticClass:"btn btn-primary float-right",attrs:{id:"btn-"+a.salesProductEntryId},on:{click:function(e){return t.productReturn(a.salesProductEntryId)}}},[t._v(" Return ")])])])])]):e("td",[t._v(" "+t._s(a.quantity)+" ")]),t._v(" "),e("td",{attrs:{id:"unitPrice-"+a.salesProductEntryId}},[t._v(" "+t._s(a.unitPrice)+" ")]),t._v(" "),e("td",{},[e("span",{attrs:{id:"totalPrice-"+a.salesProductEntryId}},[t._v(t._s(a.unitPrice*a.quantity)+" ")])]),t._v(" "),e("td",{},[e("span",{attrs:{id:"discountAmount-"+a.salesProductEntryId}},[t._v(t._s(a.totalDiscount))])]),t._v(" "),e("td",{},[e("span",{attrs:{id:"totalWithDiscount-"+a.salesProductEntryId}},[t._v(t._s(a.totalPrice)+" ")])])])})),0),t._v(" "),e("tr",[t._m(8),t._v(" "),e("td",{staticClass:"border-0"},[e("b",{attrs:{id:"grandTotal"}},[t._v(t._s(t.total))])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"}),t._v(" "),e("div",{staticClass:"col"}),t._v(" "),e("div",{staticClass:"col"},[e("table",{staticClass:"table table-bordered"},[e("tbody",[e("tr",[e("td",{staticClass:"text-right"},[t._v("Discount")]),t._v(" "),e("td",{staticClass:"bg-light",attrs:{id:"invoiceDiscount"}},[t._v("\n                                            "+t._s(t.due.discountPrice)+"\n                                          ")])]),t._v(" "),e("tr",[e("td",{staticClass:"text-right"},[t._v("\n                                            Previous Due\n                                          ")]),t._v(" "),e("td",{staticClass:"bg-light",attrs:{id:"supplierPayable"}},[t._v("\n                                            "+t._s(t.due.previousDue)+"\n                                          ")])]),t._v(" "),e("tr",[e("td",{staticClass:"text-right"},[t._v("\n                                            Total Invoice Amount\n                                          ")]),t._v(" "),e("td",{attrs:{id:"totalProductCost"}},[t._v("\n                                            "+t._s(t.due.totalPayable)+"\n                                          ")])]),t._v(" "),e("tr"),t._v(" "),e("tr",[e("td",{staticClass:"text-right"},[t._v("\n                                            Current Receivable\n                                          ")]),t._v(" "),e("td",{staticClass:"bg-light",attrs:{id:"currentPayable"}},[t._v("\n                                            "+t._s(t.due.currentTotalAmount)+"\n                                          ")])])])])])]),t._v(" "),e("form",{staticClass:"formStatus",staticStyle:{display:"none"},attrs:{action:""},on:{submit:function(a){return a.preventDefault(),t.returnSubmit()}}},[t._m(9),t._v(" "),e("button",{staticClass:"btn btn-primary float-right sbtn",attrs:{type:"submit"}},[t._v(" Submit ")])]),t._v(" "),e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col"},[e("center",[e("span",{staticStyle:{"text-decoration":"overline"}},[t._v("\n                                        Supplier Sign  \n                                     ")])])],1),t._v(" "),e("div",{staticClass:"col"}),t._v(" "),e("div",{staticClass:"col"},[e("center",[e("span",{staticStyle:{"text-decoration":"overline"}},[t._v("\n                                        Authorize Sign  \n                                     \n                                ")])])],1)])])],1),t._v(" "),e("div")])])])])]),t._v(" "),t._m(10)])])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header-tab card-header alert-info"},[a("h4",[a("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-premium-dark"}),this._v("\n        Sales Return \n      ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v(" Search ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",{staticClass:"table table-hover table-striped table-bordered",staticStyle:{width:"100%"},attrs:{id:"sampleTable"}},[e("thead",[e("tr",[e("th",[t._v("Sales Date")]),t._v(" "),e("th",[t._v("Invoice No")]),t._v(" "),e("th",[t._v("Customer Name")]),t._v(" "),e("th",[t._v("Customer Type")]),t._v(" "),e("th",[t._v("Sales Amount")]),t._v(" "),e("th",[t._v("Discount Price")]),t._v(" "),e("th",[t._v("Total Amount")]),t._v(" "),e("th",[t._v("Total Receivable")]),t._v(" "),e("th",[t._v("Paid Cash")]),t._v(" "),e("th",[t._v("Paid Bank")]),t._v(" "),e("th",[t._v("Due Amount")])])]),t._v(" "),e("tbody")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header bg-primary text-light"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[this._v("\n                Product Details\n              ")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header-tab card-header alert-info"},[a("h4",[a("i",{staticClass:"\n                        header-icon\n                        lnr-laptop-phone\n                        icon-gradient\n                        bg-premium-dark\n                      "}),this._v("\n                    Sales Invoice\n                  ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"toolbar hidden-print"},[a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-info",attrs:{id:"printInvoice",onclick:"jQuery('#invoice').print()"}},[a("i",{staticClass:"fa fa-print"}),this._v(" Print\n                      ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"text-gray-light"},[a("u",[a("b",[this._v(" Customer Information :")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("#")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("Product ")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v(" Brand")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("Color/Size")]),t._v(" "),e("th",{staticClass:"text-right"},[t._v("Quantity")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("Return Qnt")]),t._v(" "),e("th",{staticClass:"text-right"},[t._v("UNIT PRICE")]),t._v(" "),e("th",{staticClass:"text-right"},[t._v("TOTAL PRICE")]),t._v(" "),e("th",{staticClass:"text-right"},[t._v("OFF")]),t._v(" "),e("th",{staticClass:"text-right"},[t._v("TOTAL")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",{staticClass:"text-right border-0",attrs:{colspan:"9"}},[a("b",[this._v(" Grand Total : ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn btn-danger float-right sbtnd",staticStyle:{display:"none"},attrs:{type:"button"}},[a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-hover-shine btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[this._v("\n                Close\n              ")])])}],!1,null,null,null);a.default=c.exports}}]);