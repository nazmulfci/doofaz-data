(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{853:function(t,s,i){"use strict";i.r(s);var e=i(1),a=i.n(e),o={data:function(){return{form:new Form({supplier_id:"",scanInformation:""}),moment:a.a,gets:"",invoiceInfo:"",invoiceProductLists:[],purchaseProductList:[],productBrandLists:[],purchaseTypes:[],unitLists:[],countryLists:[],supplierInfo:""}},mounted:function(){this.getInvoiceSetupInformation(),this.getInvoiceInformation(),this.getSupplyerInformation(),this.getProductList()},methods:{getInvoiceSetupInformation:function(){var t=this;axios.get("getInvoiceSetupInformation/3").then((function(s){t.gets=s.data.data}))},getInvoiceInformation:function(){var t=this,s="getExpenseInvoiceInformation/".concat(this.$route.params.id);axios.get(s).then((function(s){t.unitLists=s.data.unitList,t.countryLists=s.data.countryList,t.purchaseTypes=s.data.purchaseType,t.productBrandLists=s.data.productBrandList,t.supplier_id=s.data.data.productSupplierId,t.invoiceInfo=s.data.data,t.invoiceProductLists=s.data.invoiceProductLists,t.supplierInfo=s.data.supplierInfo,t.purchaseProductList=s.data.purchaseProductList}))}}},n=i(0),c=Object(n.a)(o,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",[i("div",{staticClass:"card"},[t._m(0),t._v(" "),i("div",{staticClass:"card-body"},[t._m(1),t._v(" "),i("div",{attrs:{id:"invoice"}},[i("div",{staticClass:"invoice overflow-auto"},[i("div",{staticStyle:{"min-width":"600px"}},[i("header",{staticStyle:{"margin-bottom":"5px!important"},style:"border-bottom-color:"+t.gets.themeColor},[t.gets.logo?i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("a",{attrs:{target:"_blank",href:"#"}},[i("img",{staticStyle:{"max-height":"105px","max-width":"100%"},attrs:{src:"images/invoice_logo/"+t.gets.logo}})])]),t._v(" "),i("div",{staticClass:"col company-details"},[i("div",[t._v("  "+t._s(t.gets.address)+" ")]),t._v(" "),i("div",[t._v(t._s(t.gets.mobileNo))]),t._v(" "),i("div",[t._v(" "+t._s(t.gets.email)+" ")]),t._v(" "),i("div",[t._v(" "+t._s(t.gets.website)+" ")])])]):i("div",{staticClass:"row"},[i("div",{staticClass:"col text-center"},[i("h3",{staticClass:"text-uppercase"},[i("b",[t._v(" "+t._s(t.gets.companyName)+" ")])]),t._v(" "),i("div",[t._v("  "+t._s(t.gets.address)+" ")]),t._v(" "),i("div",[t._v(t._s(t.gets.mobileNo))]),t._v(" "),i("div",[t._v(" "+t._s(t.gets.email)+" ")]),t._v(" "),i("div",[t._v(" "+t._s(t.gets.website)+" ")])])])]),t._v(" "),i("main",[i("div",{staticClass:"row contacts"},[i("div",{staticClass:"col invoice-to"},[i("h2",{staticClass:"to"},[t._v(" "+t._s(t.supplierInfo.companyName)+" ")]),t._v(" "),i("div",{staticClass:"address"},[t._v(t._s(t.supplierInfo.address))]),t._v(" "),i("div",{staticClass:"email"},[i("a",{style:"color:"+t.gets.themeColor,attrs:{href:"mailto:"+t.supplierInfo.email}},[t._v("\n                          "+t._s(t.supplierInfo.email))])]),t._v(" "),i("div",{staticClass:"address"},[t._v(" "+t._s(t.supplierInfo.mobileNo)+" ")])]),t._v(" "),i("div",{staticClass:"col invoice-details"},[i("h3",{staticClass:"invoice-id",style:"color:"+t.gets.themeColor},[t._v(" Invoice#"+t._s(t.invoiceInfo.id)+" ")]),t._v(" "),i("div",{staticClass:"date"},[t._v(" Invoice Date: "+t._s(t.moment(t.invoiceInfo.created_at).format("DD MMMM YYYY")))]),t._v(" "),i("div",{staticClass:"date"},[t._v(" Expense Title: "+t._s(t.invoiceInfo.expenseTitle))])])]),t._v(" "),i("table",{staticClass:"table table-bordered"},[t._m(2),t._v(" "),t.have?i("tbody",t._l(t.invoiceProductLists,(function(s,e){return i("tr",[i("td",[t._v(t._s(++e))]),t._v(" "),i("td",{},[t._v(" "+t._s(s.item)+" ")]),t._v(" "),i("td",{},[t._v(" "+t._s(s.itemAmount)+" ")])])})),0):i("tbody",[i("tr",[i("td",[t._v(" 1 ")]),t._v(" "),i("td",[t._v(" "+t._s(t.invoiceInfo.expenseTitle)+" ")]),t._v(" "),i("td",{staticClass:"text-right"},[t._v(" "+t._s(t.invoiceInfo.expenseAmount)+" ")])])]),t._v(" "),i("tfoot",[i("tr",[i("td"),t._v(" "),i("td",[t._v(" Grand Total ")]),t._v(" "),i("td",[t._v(" "+t._s(t.invoiceInfo.expenseAmount)+" ")])]),t._v(" "),i("tr",[i("td",{attrs:{colspan:"2"}},[1==t.invoiceInfo.paymentType?i("span",[t._v(" Cash Pay ")]):2==t.invoiceInfo.paymentType?i("span",[t._v(" Bank Pay")]):t._e()]),t._v(" "),i("td",{},[1==t.invoiceInfo.paymentType?i("span",[t._v(" "+t._s(t.invoiceInfo.cashAmount)+" ")]):2==t.invoiceInfo.paymentType?i("span",[t._v(" "+t._s(t.invoiceInfo.bankAmount)+" ")]):t._e()])]),t._v(" "),i("tr",[i("td",{attrs:{colspan:"2"}},[t._v("  Due ")]),t._v(" "),i("td",[t._v(" "+t._s(t.invoiceInfo.dueAmount)+" ")])])])])]),t._v(" "),i("footer",{staticStyle:{border:"none!important"}},[i("div",{staticClass:"row mt-5 pt-5"},[i("div",{staticClass:"col"},[i("center",[i("span",{staticStyle:{"text-decoration":"overline"}},[t._v("         Sign       ")])])],1),t._v(" "),i("div",{staticClass:"col"}),t._v(" "),i("div",{staticClass:"col"},[i("center",[i("span",{staticStyle:{"text-decoration":"overline"}},[t._v("       Authorize Sign       ")])])],1)])])]),t._v(" "),i("div")])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-header-tab card-header alert-info"},[s("h4",[s("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-premium-dark"}),this._v("\n          Expense Invoice ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"toolbar hidden-print"},[s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-info",attrs:{id:"printInvoice",onclick:"jQuery('#invoice').print()"}},[s("i",{staticClass:"fa fa-print"}),this._v(" Print")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",[this._v("#")]),this._v(" "),s("th",{staticClass:"text-left"},[this._v("  Item Name")]),this._v(" "),s("th",{staticClass:"text-right"},[this._v(" Item Amount ")])])])}],!1,null,null,null);s.default=c.exports}}]);