(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{556:function(t,e,a){"use strict";a.r(e);var s=a(1),o=a.n(s),r={data:function(){return{productDetailsLists:[],chartOfAccountLists:[],chartOfAccountRegisterLists:[],mainHeadLists:[],subHeadLists:[],voucherTypeLists:[],IncomeExpenseCompanyList:[],voucherInformationLists:"",totalProfit:0,resultNotFound:!0,moment:o.a,form:new Form({mainHead:"",subHead:"",voucherType:"",dateFrom:"",dateTo:o()().format("YYYY-MM-DD"),voucherNo:"",productIdClick:""})}},mounted:function(){this.view(),this.salesProductList()},methods:{view:function(){this.form.mainHead="",this.form.subHead="",this.form.voucherType="",this.form.voucherDate="",this.form.voucherNo=""},productSearch:function(){var t=this;this.form.post("dateWiseProductSearch").then((function(e){""==e.data.data?t.resultNotFound=!0:t.resultNotFound=!1,t.voucherInformationLists=e.data.productList,t.totalProfit=e.data.toatlProfit}))},showDetails:function(t){var e=this;this.form.productIdClick=t;this.form.post("dateWiseDetailsProductSearch").then((function(t){e.productDetailsLists=t.data.product}))},salesProductList:function(){var t=this;this.form.get("salesProductList").then((function(e){t.voucherTypeLists=e.data.data}))}}},i=a(0),c=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"supplier-entry py-4 px-2"},[a("div",{staticClass:"card-body table-responsive bg-white"},[a("table",{staticClass:"table table-hover table-striped table-bordered",staticStyle:{width:"100%"},attrs:{id:"example"}},[a("thead",[a("tr",[a("th",{staticClass:"text-center",attrs:{colspan:"15"}},[a("center",[a("form",{attrs:{method:""},on:{submit:function(e){return e.preventDefault(),t.productSearch()}}},[a("table",{},[a("tr",[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.dateFrom,expression:"form.dateFrom"}],staticClass:"form-control",staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"Select Date"},domProps:{value:t.form.dateFrom},on:{input:function(e){e.target.composing||t.$set(t.form,"dateFrom",e.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.dateTo,expression:"form.dateTo"}],staticClass:"form-control",staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"Select Date"},domProps:{value:t.form.dateTo},on:{input:function(e){e.target.composing||t.$set(t.form,"dateTo",e.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.productIdClick,expression:"form.productIdClick"}],attrs:{type:"hidden"},domProps:{value:t.form.productIdClick},on:{input:function(e){e.target.composing||t.$set(t.form,"productIdClick",e.target.value)}}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.productId,expression:"form.productId"}],staticClass:"form-control",staticStyle:{width:"180px"},attrs:{type:"text",placeholder:"Select Voucher Type"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"productId",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v(" Select Product ")]),t._v(" "),t._l(t.voucherTypeLists,(function(e){return a("option",{domProps:{value:e.productNameId}},[t._v(" "+t._s(e.productName)+" ")])}))],2)]),t._v(" "),a("td",[a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Search"}})]),t._v(" "),a("td",[a("input",{staticClass:"btn btn-danger",attrs:{type:"reset"}})])])])])])],1)])]),t._v(" "),a("thead",[a("tr",[a("th",{staticClass:"text-center",attrs:{colspan:"15"}},[a("button",{staticClass:"btn btn-success"},[a("b",{staticStyle:{"font-size":"17px"}},[t._v("Total Profit : "+t._s(t.totalProfit)+" ")])])])])]),t._v(" "),t._m(1),t._v(" "),a("tbody",[t._l(t.voucherInformationLists,(function(e,s){return a("tr",[a("td",[t._v(" "+t._s(s+1)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(t.moment(e.created_at).format("DD-MMMM-YYYY"))+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.productId)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.quantity)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.returnQuantity)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.unitPrice)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.sales)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.wholesale)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.special)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.ecommerce)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.totalPrice)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.totalReturn)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.totalProfit)+" ")]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#exampleModalCenter"},on:{click:function(a){return t.showDetails(e.product)}}},[t._v(" Show  ")])])])})),t._v(" "),t.resultNotFound?a("tr",[a("td",{attrs:{colspan:"16"}},[a("center",[t._v(" Result Not Found. ")])],1)]):t._e()],2)]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),a("div",{staticClass:"modal-body table-responsive"},[a("table",{staticClass:"table table-bordered"},[t._m(3),t._v(" "),a("tbody",t._l(t.productDetailsLists,(function(e,s){return a("tr",[a("td",[t._v(" "+t._s(s+1)+" ")]),t._v(" "),a("td",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(t.moment(e.created_at).format("DD-MMMM-YYYY"))+" ")]),t._v(" "),a("td",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(e.salesCustomerType)+" ")]),t._v(" "),a("td",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(e.salesCustomerName)+" ")]),t._v(" "),a("td",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(e.productId)+" ")]),t._v(" "),a("td",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(e.brandId)+" ")]),t._v(" "),a("td",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(e.size)+" ")]),t._v(" "),a("td",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(e.color)+" ")]),t._v(" "),a("td",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(e.quantity)+" ")]),t._v(" "),a("td",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(e.unitPrice)+" ")]),t._v(" "),a("td",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(e.sales)+" ")]),t._v(" "),a("td",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(e.wholesale)+" ")]),t._v(" "),a("td",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(e.special)+" ")]),t._v(" "),a("td",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(e.ecommerce)+" ")]),t._v(" "),a("td",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(e.totalDiscount)+" ")]),t._v(" "),a("td",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(e.totalPrice)+" ")])])})),0)])]),t._v(" "),t._m(4)])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header-tab card-header alert-info"},[e("h4",[e("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-premium-dark"}),this._v("\n          Date Wise Product Sale ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v(" SL ")]),t._v(" "),a("th",[t._v(" Date ")]),t._v(" "),a("th",[t._v(" Product Name ")]),t._v(" "),a("th",[t._v(" Quantity ")]),t._v(" "),a("th",[t._v(" Return Quantity ")]),t._v(" "),a("th",[t._v(" MRP ")]),t._v(" "),a("th",[t._v(" Sales  ")]),t._v(" "),a("th",[t._v(" Wholesale  ")]),t._v(" "),a("th",[t._v(" Special  ")]),t._v(" "),a("th",[t._v(" E-Commerce  ")]),t._v(" "),a("th",[t._v(" Total Sale  ")]),t._v(" "),a("th",[t._v(" Total Return  ")]),t._v(" "),a("th",[t._v(" Profit  ")]),t._v(" "),a("th",[t._v(" View  ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[this._v("Product Details")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v(" SL ")]),t._v(" "),a("th",[t._v(" Date")]),t._v(" "),a("th",[t._v(" Customer Type ")]),t._v(" "),a("th",[t._v(" Customer Name ")]),t._v(" "),a("th",[t._v(" Product Name ")]),t._v(" "),a("th",[t._v(" Brand ")]),t._v(" "),a("th",[t._v(" Size ")]),t._v(" "),a("th",[t._v(" Color ")]),t._v(" "),a("th",[t._v(" Quantity ")]),t._v(" "),a("th",[t._v(" MRP ")]),t._v(" "),a("th",[t._v(" Sales  ")]),t._v(" "),a("th",[t._v(" Wholesale  ")]),t._v(" "),a("th",[t._v(" Special  ")]),t._v(" "),a("th",[t._v(" E-Commerce  ")]),t._v(" "),a("th",[t._v(" Discount ")]),t._v(" "),a("th",[t._v(" Total Sale  ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[this._v(" Close ")])])}],!1,null,null,null);e.default=c.exports}}]);