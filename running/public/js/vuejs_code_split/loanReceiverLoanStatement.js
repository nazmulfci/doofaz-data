(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{879:function(t,a,e){"use strict";e.r(a);var s=e(1),i=e.n(s),n={data:function(){return{moment:i.a,form:new Form({supplier_id:"",scanInformation:""}),gets:"",invoiceInfo:"",providerLoanReceiveEntrys:[],loanInfo:[],loanInfo1:[],singleData:[],providerInfo:[],companyInformation:[],companyStatementLists:[],companyStatementList1s:[],invoiceProductLists:[],purchaseProductList:[],productBrandLists:[],purchaseTypes:[],unitLists:[],countryLists:[],supplierInfo:"",totalInstallment:""}},mounted:function(){this.getInvoiceSetupInformation(),this.getInvoiceInformation(),this.getProviderLoanReceiveEntry()},methods:{getInvoiceSetupInformation:function(){var t=this;axios.get("getInvoiceSetupInformation/3").then((function(a){t.gets=a.data.data}))},getInvoiceInformation:function(){var t=this,a="getLoanReceiverInfoLoanInfo/".concat(this.$route.params.id);axios.get(a).then((function(a){t.loanInfo=a.data.loanInfo,t.providerInfo=a.data.providerInfo}))},getProviderLoanReceiveEntry:function(){var t=this,a="getLoanReceiverLoanPayInfo/".concat(this.$route.params.id);axios.get(a).then((function(a){t.companyStatementLists=a.data.loanInfo,t.companyStatementList1s=a.data.loanInfo1,t.singleData=a.data.singleData,t.totalInstallment=a.data.totalInstallment}))}}},o=e(0),r=Object(o.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header-tab card-header alert-info"},[e("h4",[e("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-premium-dark"}),t._v("\n          Statement of "),t.providerInfo.providerType>1?e("span",[t._v("\n                                    "+t._s(t.providerInfo.providerName)+"\n                                    ("+t._s(t.providerInfo.providerBranchName)+")\n                                ")]):e("span",[t._v("\n                                    "+t._s(t.providerInfo.providerName)+" \n                                ")])])]),t._v(" "),e("div",{staticClass:"card-body"},[t._m(0),t._v(" "),e("div",{attrs:{id:"invoice"}},[e("div",{staticClass:"invoice overflow-auto"},[e("div",{staticStyle:{"min-width":"600px"}},[e("header",{staticStyle:{"margin-bottom":"5px!important"},style:"border-bottom-color:"+t.gets.themeColor},[t.gets.logo?e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("a",{attrs:{target:"_blank",href:"#"}},[e("img",{staticStyle:{"max-height":"105px","max-width":"100%"},attrs:{src:"images/invoice_logo/"+t.gets.logo}})])]),t._v(" "),e("div",{staticClass:"col company-details"},[e("div",[t._v("  "+t._s(t.gets.address)+" ")]),t._v(" "),e("div",[t._v(t._s(t.gets.mobileNo))]),t._v(" "),e("div",[t._v(" "+t._s(t.gets.email)+" ")]),t._v(" "),e("div",[t._v(" "+t._s(t.gets.website)+" ")])])]):e("div",{staticClass:"row"},[e("div",{staticClass:"col text-center"},[e("h3",{staticClass:"text-uppercase"},[e("b",[t._v(" "+t._s(t.gets.companyName)+" ")])]),t._v(" "),e("div",[t._v("  "+t._s(t.gets.address)+" ")]),t._v(" "),e("div",[t._v(t._s(t.gets.mobileNo))]),t._v(" "),e("div",[t._v(" "+t._s(t.gets.email)+" ")]),t._v(" "),e("div",[t._v(" "+t._s(t.gets.website)+" ")])])])]),t._v(" "),e("main",[e("div",{staticClass:"row contacts"},[e("div",{staticClass:"col invoice-to"},[e("div",{staticClass:"text-gray-light"},[t._v("    ")]),t._v(" "),e("h2",{staticClass:"to"},[t.providerInfo.providerType>1?e("span",[t._v("\n                                    "+t._s(t.providerInfo.providerName)+"\n                                    ("+t._s(t.providerInfo.providerBranchName)+")\n                                ")]):e("span",[t._v("\n                                    "+t._s(t.providerInfo.providerName)+" \n                                ")])]),t._v(" "),e("div",{staticClass:"address"},[t._v(" "+t._s(t.providerInfo.providerContactPersonMobileNo)+" ")]),t._v(" "),e("div",{staticClass:"address"},[t._v(t._s(t.providerInfo.providerAddress))])]),t._v(" "),e("div",{staticClass:"col invoice-details"},[e("div",{staticClass:"date"},[t._v(" Loan Amount: "+t._s(t.loanInfo.loanMainAmount))]),t._v(" "),e("div",{staticClass:"date"},[t._v(" Issue Date: "+t._s(t.moment(t.loanInfo.created_at).format("DD MMMM YYYY"))+" ")])])]),t._v(" "),e("table",{staticClass:"table table-bordered"},[t._m(1),t._v(" "),e("tbody",[t._l(t.companyStatementList1s,(function(a,s){return e("tr",[e("td",[t._v(t._s(++s))]),t._v(" "),e("td",[t._v(" "+t._s(t.moment(a.created_at).format("DD MMMM YYYY")))]),t._v(" "),e("td",[0==a.debitAmount?e("span",[t._v(" Loan Receive ")]):t._e(),t._v(" "),0==a.creditAmount?e("span",[t._v(" Loan Pay ")]):t._e()]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(" "+t._s(a.debitAmount)+" ")]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(" "+t._s(a.creditAmount)+" ")]),t._v(" "),e("td",{staticClass:"text-right"},[a.balanceAmount>=0?e("span",{staticClass:"badge badge-success"},[t._v("\n                                "+t._s(a.balanceAmount)+"\n                              ")]):a.balanceAmount<0?e("span",{staticClass:"badge badge-danger"},[t._v("\n                                "+t._s(Math.abs(a.balanceAmount))+"\n                              ")]):t._e()])])})),t._v(" "),2==t.singleData.loanPayType?e("tr",[e("th"),t._v(" "),e("th"),t._v(" "),t._m(2),t._v(" "),e("th",{staticClass:"text-right"},[e("b",[t._v(t._s(t.totalInstallment))])]),t._v(" "),e("th"),t._v(" "),e("th")]):t._e()],2)])]),t._v(" "),e("footer",[t._v("\n                "+t._s(t.gets.generatedFrom)+"  \n                 \n                        ")])]),t._v(" "),e("div")])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"toolbar hidden-print"},[a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-info",attrs:{id:"printInvoice",onclick:"jQuery('#invoice').print()"}},[a("i",{staticClass:"fa fa-print"}),this._v(" Print")])]),this._v(" "),a("hr")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("#")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("Date")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("Narration")]),t._v(" "),e("th",{staticClass:"text-right"},[t._v("Debit")]),t._v(" "),e("th",{staticClass:"text-right"},[t._v("Credit")]),t._v(" "),e("th",{staticClass:"text-right"},[t._v("Balance")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("th",{staticClass:"text-right"},[a("b",[this._v("Total :")])])}],!1,null,null,null);a.default=r.exports}}]);