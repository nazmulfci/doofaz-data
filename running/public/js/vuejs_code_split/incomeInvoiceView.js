(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{854:function(t,i,s){"use strict";s.r(i);var e=s(1),a=s.n(e),o={data:function(){return{form:new Form({supplier_id:"",scanInformation:""}),moment:a.a,gets:"",invoiceInfo:"",invoiceProductLists:[],purchaseProductList:[],productBrandLists:[],purchaseTypes:[],unitLists:[],countryLists:[],supplierInfo:""}},mounted:function(){this.getInvoiceSetupInformation(),this.getInvoiceInformation(),this.getSupplyerInformation(),this.getProductList()},methods:{getInvoiceSetupInformation:function(){var t=this;axios.get("getInvoiceSetupInformation/3").then((function(i){t.gets=i.data.data}))},getInvoiceInformation:function(){var t=this,i="getIncomeInvoiceInformation/".concat(this.$route.params.id);axios.get(i).then((function(i){t.unitLists=i.data.unitList,t.countryLists=i.data.countryList,t.purchaseTypes=i.data.purchaseType,t.productBrandLists=i.data.productBrandList,t.supplier_id=i.data.data.productSupplierId,t.invoiceInfo=i.data.data,t.invoiceProductLists=i.data.invoiceProductLists,t.supplierInfo=i.data.supplierInfo,t.purchaseProductList=i.data.purchaseProductList,t.invoiceDetailsHave=i.invoiceDetailsHave}))}}},n=s(0),c=Object(n.a)(o,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("span",[s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"card-body"},[t._m(1),t._v(" "),s("div",{attrs:{id:"invoice"}},[s("div",{staticClass:"invoice overflow-auto"},[s("div",{staticStyle:{"min-width":"600px"}},[s("header",{staticStyle:{"margin-bottom":"5px!important"},style:"border-bottom-color:"+t.gets.themeColor},[t.gets.logo?s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("a",{attrs:{target:"_blank",href:"#"}},[s("img",{staticStyle:{"max-height":"105px","max-width":"100%"},attrs:{src:"images/invoice_logo/"+t.gets.logo}})])]),t._v(" "),s("div",{staticClass:"col company-details"},[s("div",[t._v("  "+t._s(t.gets.address)+" ")]),t._v(" "),s("div",[t._v(t._s(t.gets.mobileNo))]),t._v(" "),s("div",[t._v(" "+t._s(t.gets.email)+" ")]),t._v(" "),s("div",[t._v(" "+t._s(t.gets.website)+" ")])])]):s("div",{staticClass:"row"},[s("div",{staticClass:"col text-center"},[s("h3",{staticClass:"text-uppercase"},[s("b",[t._v(" "+t._s(t.gets.companyName)+" ")])]),t._v(" "),s("div",[t._v("  "+t._s(t.gets.address)+" ")]),t._v(" "),s("div",[t._v(t._s(t.gets.mobileNo))]),t._v(" "),s("div",[t._v(" "+t._s(t.gets.email)+" ")]),t._v(" "),s("div",[t._v(" "+t._s(t.gets.website)+" ")])])])]),t._v(" "),s("main",[s("div",{staticClass:"row contacts"},[s("div",{staticClass:"col invoice-to"},[s("h2",{staticClass:"to"},[t._v(" "+t._s(t.supplierInfo.companyName)+" ")]),t._v(" "),s("div",{staticClass:"address"},[t._v(t._s(t.supplierInfo.address))]),t._v(" "),s("div",{staticClass:"email"},[s("a",{style:"color:"+t.gets.themeColor,attrs:{href:"mailto:"+t.supplierInfo.email}},[t._v("\n                          "+t._s(t.supplierInfo.email))])]),t._v(" "),s("div",{staticClass:"address"},[t._v(" "+t._s(t.supplierInfo.mobileNo)+" ")])]),t._v(" "),s("div",{staticClass:"col invoice-details"},[s("h3",{staticClass:"invoice-id",style:"color:"+t.gets.themeColor},[t._v(" Invoice#"+t._s(t.invoiceInfo.id)+" ")]),t._v(" "),s("div",{staticClass:"date"},[t._v(" Invoice Date: "+t._s(t.moment(t.invoiceInfo.created_at).format("DD MMMM YYYY")))]),t._v(" "),s("div",{staticClass:"date"},[t._v(" Income Title: "+t._s(t.invoiceInfo.incomeTitle))])])]),t._v(" "),s("table",{staticClass:"table table-bordered"},[s("thead",[s("tr",[s("th",[t._v("#")]),t._v(" "),s("th",{staticClass:"text-left"},[t._v("  Item Name "+t._s(t.invoiceDetailsHave)+" ")]),t._v(" "),s("th",{staticClass:"text-right"},[t._v(" Item Amount ")])])]),t._v(" "),1==t.invoiceDetailsHave?s("tbody",t._l(t.invoiceProductLists,(function(i,e){return s("tr",[s("td",[t._v(t._s(++e))]),t._v(" "),s("td",{},[t._v(" "+t._s(i.item)+" ")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(" "+t._s(i.itemAmount)+" ")])])})),0):s("tbody",[s("tr",[s("td",[t._v(" 1 ")]),t._v(" "),s("td",[t._v(" "+t._s(t.invoiceInfo.incomeTitle)+" ")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(" "+t._s(t.invoiceInfo.incomeAmount)+" ")])])]),t._v(" "),s("tfoot",[s("tr",[s("td"),t._v(" "),s("td",{staticClass:"border-left-0"},[t._v("  Grand Total ")]),t._v(" "),s("td",[t._v(" "+t._s(t.invoiceInfo.incomeAmount)+" ")])]),t._v(" "),s("tr",[s("td",{attrs:{colspan:"2"}},[t._v(" \n                                Paid\n                                "),1==t.invoiceInfo.paymentType?s("span",[t._v(" (Cash) ")]):2==t.invoiceInfo.paymentType?s("span",[t._v(" (Bank) ")]):t._e()]),t._v(" "),s("td",[1==t.invoiceInfo.paymentType?s("span",[t._v(" "+t._s(t.invoiceInfo.cashAmount)+" ")]):2==t.invoiceInfo.paymentType?s("span",[t._v(" "+t._s(t.invoiceInfo.bankAmount)+" ")]):s("span",[t._v(" 0 ")])])]),t._v(" "),s("tr",[s("td",{attrs:{colspan:"2"}},[t._v("  Due ")]),t._v(" "),s("td",{staticClass:"bg-light"},[t._v(" "+t._s(t.invoiceInfo.dueAmount)+" ")])])])]),t._v(" "),s("div",{staticClass:"thanks"},[t._v("  "+t._s(t.gets.thankyou)+"  ")]),t._v(" "),s("div",{staticClass:"notices",style:"border-color:"+t.gets.themeColor},[s("div",[t._v(" "+t._s(t.gets.noticeTitle)+" ")]),t._v(" "),s("div",{staticClass:"notice"},[t._v(" "+t._s(t.gets.noticeDetails)+" ")])])]),t._v(" "),s("footer",{staticStyle:{border:"none!important"}},[s("div",{staticClass:"row mt-5 pt-5"},[s("div",{staticClass:"col"},[s("center",[s("span",{staticStyle:{"text-decoration":"overline"}},[t._v("         Sign       ")])])],1),t._v(" "),s("div",{staticClass:"col"}),t._v(" "),s("div",{staticClass:"col"},[s("center",[s("span",{staticStyle:{"text-decoration":"overline"}},[t._v("       Authorize Sign       ")])])],1)])])]),t._v(" "),s("div")])])])])])}),[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"card-header-tab card-header alert-info"},[i("h4",[i("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-premium-dark"}),this._v("\n          Income Invoice ")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"toolbar hidden-print"},[i("div",{staticClass:"text-right"},[i("button",{staticClass:"btn btn-info",attrs:{id:"printInvoice",onclick:"jQuery('#invoice').print()"}},[i("i",{staticClass:"fa fa-print"}),this._v(" Print")])])])}],!1,null,null,null);i.default=c.exports}}]);