(window.webpackJsonp=window.webpackJsonp||[]).push([[476],{859:function(t,s,a){"use strict";a.r(s);var e=a(1),i=a.n(e),n={data:function(){return{moment:i.a,form:new Form({supplier_id:"",scanInformation:""}),gets:"",invoiceInfo:"",companyInformation:[],companyStatementLists:[],invoiceProductLists:[],purchaseProductList:[],productBrandLists:[],purchaseTypes:[],unitLists:[],countryLists:[],supplierInfo:""}},mounted:function(){this.getInvoiceSetupInformation(),this.getInvoiceInformation()},methods:{getInvoiceSetupInformation:function(){var t=this;axios.get("getInvoiceSetupInformation/3").then((function(s){t.gets=s.data.data}))},getInvoiceInformation:function(){var t=this,s="getAssetSupplierStatementInformation/".concat(this.$route.params.id);axios.get(s).then((function(s){t.companyInformation=s.data.supplier,t.companyStatementLists=s.data.statementList}))}}},o=a(0),c=Object(o.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header-tab card-header alert-info"},[a("h4",[a("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-premium-dark"}),t._v("\n          Statement of "+t._s(t.companyInformation.assetSupplierName)+" ")])]),t._v(" "),a("div",{staticClass:"card-body"},[t._m(0),t._v(" "),a("div",{attrs:{id:"invoice"}},[a("div",{staticClass:"invoice overflow-auto"},[a("div",{staticStyle:{"min-width":"600px"}},[a("header",{staticStyle:{"margin-bottom":"5px!important"},style:"border-bottom-color:"+t.gets.themeColor},[t.gets.logo?a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("a",{attrs:{target:"_blank",href:"#"}},[a("img",{staticStyle:{"max-height":"105px","max-width":"100%"},attrs:{src:"images/invoice_logo/"+t.gets.logo}})])]),t._v(" "),a("div",{staticClass:"col company-details"},[a("div",[t._v("  "+t._s(t.gets.address)+" ")]),t._v(" "),a("div",[t._v(t._s(t.gets.mobileNo))]),t._v(" "),a("div",[t._v(" "+t._s(t.gets.email)+" ")]),t._v(" "),a("div",[t._v(" "+t._s(t.gets.website)+" ")])])]):a("div",{staticClass:"row"},[a("div",{staticClass:"col text-center"},[a("h3",{staticClass:"text-uppercase"},[a("b",[t._v(" "+t._s(t.gets.companyName)+" ")])]),t._v(" "),a("div",[t._v("  "+t._s(t.gets.address)+" ")]),t._v(" "),a("div",[t._v(t._s(t.gets.mobileNo))]),t._v(" "),a("div",[t._v(" "+t._s(t.gets.email)+" ")]),t._v(" "),a("div",[t._v(" "+t._s(t.gets.website)+" ")])])])]),t._v(" "),a("main",[a("div",{staticClass:"row contacts"},[a("div",{staticClass:"col invoice-to"},[a("div",{staticClass:"text-gray-light"},[t._v("    ")]),t._v(" "),a("h2",{staticClass:"to"},[t._v(" "+t._s(t.companyInformation.assetSupplierName)+" ")]),t._v(" "),a("div",{staticClass:"address"},[t._v(" "+t._s(t.companyInformation.assetSupplierPhone)+" ")]),t._v(" "),a("div",{staticClass:"address"},[t._v(t._s(t.companyInformation.assetSupplierAddress))]),t._v(" "),a("div",{staticClass:"email"},[a("a",{style:"color:"+t.gets.themeColor,attrs:{href:"mailto:"+t.companyInformation.assetSupplierMail}},[t._v("\n                          "+t._s(t.companyInformation.assetSupplierMail))])])]),t._v(" "),a("div",{staticClass:"col invoice-details"})]),t._v(" "),a("table",{staticClass:"table table-bordered"},[t._m(1),t._v(" "),a("tbody",t._l(t.companyStatementLists,(function(s,e){return a("tr",[a("td",[t._v(t._s(++e))]),t._v(" "),a("td",[t._v(" "+t._s(t.moment(s.created_at).format("DD MMMM YYYY")))]),t._v(" "),a("td",[t._v(" "+t._s(s.title)+" ")]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(" "+t._s(s.debitAmount)+" ")]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(" "+t._s(s.creditAmount)+" ")]),t._v(" "),a("td",{staticClass:"text-right"},[s.balanceAmount>=0?a("span",{staticClass:"badge badge-success"},[t._v("\n                                "+t._s(s.balanceAmount)+"\n                              ")]):s.balanceAmount<0?a("span",{staticClass:"badge badge-danger"},[t._v("\n                                "+t._s(Math.abs(s.balanceAmount))+"\n                              ")]):t._e()])])})),0)]),t._v(" "),a("div",{staticClass:"row mt-5 pt-5"},[a("div",{staticClass:"col"},[a("center",[a("span",{staticStyle:{"text-decoration":"overline"}},[t._v("         Sign       ")])])],1),t._v(" "),a("div",{staticClass:"col"}),t._v(" "),a("div",{staticClass:"col"},[a("center",[a("span",{staticStyle:{"text-decoration":"overline"}},[t._v("       Authorize Sign       ")])])],1)])]),t._v(" "),a("footer",[t._v("\n                "+t._s(t.gets.generatedFrom)+"  \n                 \n                        ")])]),t._v(" "),a("div")])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"toolbar hidden-print"},[s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-info",attrs:{id:"printInvoice",onclick:"jQuery('#invoice').print()"}},[s("i",{staticClass:"fa fa-print"}),this._v(" Print")])]),this._v(" "),s("hr")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",[t._v("Invoice #")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Date")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Narration")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Debit")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Credit")]),t._v(" "),a("th",{staticClass:"text-right"},[t._v("Balance")])])])}],!1,null,null,null);s.default=c.exports}}]);