(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{878:function(t,a,e){"use strict";e.r(a);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var o={data:function(){var t;return n(t={companyName:"",monthlyDateStatus:1,monthlyAmountStatus:1,paidDateText:"",month:0,mobile_bank_info:0,agent_bank_info:0,corporate_bank_info:0,howMuchTimeStatus:!1,loanPayTypeStatus:!0,bankInformationStatus:0,bankInformationAccountInfoStatus:0,form:new Form({branchName:"",accNo:"",loanProviderTypeId:"",loanProviderId:"",interestType:"",loanPayType:"",howMuchTime:"",loanMainAmount:"",monthlyAmount:"",paidDate:"",paymentType:"",bankTypeEntryId:"",bankEntryId:"",bankAccountId:"",status:1}),getInterestTypeLists:[],getInterestTimeTypeLists:[],loanProviderTypeLists:[],loanProviderLists:[],loanProviderInfo:[],getLoanPayTypeLists:[],showBankNames:[],shopBankAllDatas:[],corporateBankAccountTypes:[],mobileBankAccountTypes:[],loanProviderListByIds:[],paymentTypeLists:[],showBankTypeDatas:[]},"showBankNames",[]),n(t,"showBankAccounts",[]),n(t,"bankMoreInfo",[]),t},mounted:function(){this.getData(),this.paymentTypeList(),this.showloanProviderType(),this.getInterestTypeList(),this.getInterestTimeTypeList(),this.getLoanPayTypeList(),this.showBankType(),this.showloanProviderList(),this.showloanProviderInfo()},methods:{create:function(){var t=this;this.form.post("/addProviderLoanReceive").then((function(a){a.data.changebankName?Toast.fire({icon:"error",title:"Change Your Bank Name"}):(Toast.fire({icon:"success",title:"Loan Receive Successfully"}),t.howMuchTimeStatus=!1,t.loanPayTypeStatus=!0,t.bankInformationStatus=0,t.bankInformationAccountInfoStatus=0,t.form.reset(),t.getData())}))},getData:function(){var t=this;axios.get("getLoanReceiverLoanList/".concat(this.$route.params.id)).then((function(a){t.shopBankAllDatas=a.data.data}))},showloanProviderType:function(){var t=this;axios.get("/getLoanProviderTypeList").then((function(a){t.loanProviderTypeLists=a.data.data}))},getInterestTypeList:function(){var t=this;axios.get("/getInterestTypeList/0").then((function(a){t.getInterestTypeLists=a.data.data}))},getInterestTimeTypeList:function(){var t=this;axios.get("/getInterestTimeTypeList/".concat(this.$route.params.id)).then((function(a){t.getInterestTimeTypeLists=a.data.data}))},getLoanPayTypeList:function(){var t=this;axios.get("/getLoanPayTypeList/0").then((function(a){t.getLoanPayTypeLists=a.data.data}))},paymentTypeList:function(){var t=this;axios.get("/paymentTypeList").then((function(a){t.paymentTypeLists=a.data.data}))},getBankMoreInfo:function(){var t=this;axios.get("/bankAccountMoreInfo/"+this.form.bankAccountId).then((function(a){t.bankInformationAccountInfoStatus=1,t.form.branchName=a.data.data.bankBranch,t.form.accNo=a.data.data.bankAccountNumber}))},paymentReceiveType:function(){2==this.form.paymentType?this.bankInformationStatus=1:this.bankInformationStatus=0},showBankType:function(){var t=this;axios.get("/bankTypeEntryList").then((function(a){t.showBankTypeDatas=a.data.show}))},showloanProviderList:function(){var t=this;axios.get("addLoanReceiverEntry").then((function(a){t.loanProviderLists=a.data.data}))},showloanProviderInfo:function(){var t=this;axios.get("getLoanProviderById/".concat(this.$route.params.id)).then((function(a){t.loanProviderInfo=a.data.data}))},bankTypeIdCatch:function(){var t=this;axios.get("/bankNameList/"+this.form.bankTypeEntryId).then((function(a){t.showBankNames=a.data.show}))},bankAccountIdCatch:function(){var t=this;axios.get("/bankAccountList/"+this.form.bankEntryId).then((function(a){t.showBankAccounts=a.data.data}))},loanProviderTypeIdCatch:function(){var t=this;this.form.loanProviderTypeId>1?axios.get("/getInterestTypeList/1").then((function(a){t.getInterestTypeLists=a.data.data})):axios.get("/getInterestTypeList/0").then((function(a){t.getInterestTypeLists=a.data.data})),axios.get("/loanProviderListById/1/"+this.form.loanProviderTypeId).then((function(a){t.loanProviderListByIds=a.data.data}))},interestType:function(){var t=this;1==this.form.loanProviderTypeId?1==this.form.interestType?this.loanPayTypeStatus=!0:this.loanPayTypeStatus=!1:(axios.get("/getLoanPayTypeList/1").then((function(a){t.getLoanPayTypeLists=a.data.data})),this.loanPayTypeStatus=!0)},interestTime:function(){this.month=this.form.interestTimeType,1==this.form.interestTimeType?this.paidDateText="Paid Date":2==this.form.interestTimeType?this.paidDateText="Weekly Day Name":3==this.form.interestTimeType?this.paidDateText="Paid Date":3==this.form.interestTimeType&&(this.paidDateText="Month Name"),1==this.form.loanPayType&&1==this.form.loanPayType?this.howMuchTimeStatus=!0:this.howMuchTimeStatus=!1,this.form.interestTimeType>4?(this.monthlyDateStatus=0,this.monthlyAmountStatus=0):(this.monthlyDateStatus=1,this.monthlyAmountStatus=1)},deleteBankEntry:function(t){var a=this;axios.delete("/addBank/"+t).then((function(t){Toast.fire({icon:"success",title:"Shop BankEntry Deleted Successfully"}),a.getData()}))},changeStatus:function(t){var a=this;axios.get("/addBank/"+t).then((function(t){Toast.fire({icon:"success",title:"Shop Bank Status Changed Successfully"}),a.getData()}))}}},i=e(0),s=Object(i.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("div",{staticClass:"card main-card  element-block-example mt-5"},[e("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.20)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[e("h3",{staticStyle:{color:"black"}},[t._v(" Loan Information of "+t._s(t.loanProviderInfo.providerName)+" ")])]),t._v(" "),e("div",{staticClass:"table-responsive bg-white"},[e("table",{staticClass:"table table-hover table-bordered mb-0"},[t._m(0),t._v(" "),e("tbody",t._l(t.shopBankAllDatas,(function(a,n){return e("tr",[e("td",[t._v(t._s(n+1))]),t._v(" "),e("td",[t._l(t.loanProviderTypeLists,(function(n){return n.id==a.loanProviderTypeId?e("span",[t._v("\n                  "+t._s(n.type)+"\n                  ")]):t._e()})),t._v(" "),e("br"),t._v(" "),t._l(t.loanProviderLists,(function(n){return n.id==a.loanProviderId?e("span",[t._v("\n                       "+t._s(n.providerName)+"\n                   ")]):t._e()}))],2),t._v(" "),e("td",[t._l(t.getInterestTypeLists,(function(n){return n.id==a.interestType?e("span",[t._v("\n                      "+t._s(n.name)+"\n                  ")]):t._e()})),t._v(" "),e("br"),t._v(" "),t._l(t.getLoanPayTypeLists,(function(n){return n.id==a.loanPayType?e("span",[t._v("\n                  "+t._s(n.name)+"\n                  ")]):t._e()}))],2),t._v(" "),e("td",[t._v(" "+t._s(a.loanMainAmount)+"  ")]),t._v(" "),e("td",[t._v(" "+t._s(a.monthlyAmount)+" "),e("br"),t._v(" "+t._s(a.paidDate)+"  ")]),t._v(" "),e("td",[t._v(" "+t._s(a.paidAmount)+" ")]),t._v(" "),e("td",[t._v(" "+t._s(a.dueAmount)+" ")]),t._v(" "),e("td",[e("router-link",{staticClass:"btn btn-hover-shine  btn-primary",attrs:{to:"/loanReceiverLoanStatement"+a.id}},[e("svg",{staticClass:"bi bi-list-ul",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}})]),t._v("\n                  Statement")])],1),t._v(" "),e("td",[e("router-link",{staticClass:"btn btn-hover-shine  btn-primary",attrs:{to:"/loanReceiverLoanEdit"+a.id}},[t._v("\n                  Re-Loan")])],1)])})),0)])])])])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{staticStyle:{background:"rgba(242, 242, 242, 0.47)"}},[e("th",[t._v(" SN")]),t._v(" "),e("th",[t._v(" Provider ")]),t._v(" "),e("th",[t._v(" Interest  ")]),t._v(" "),e("th",[t._v(" Loan Amount")]),t._v(" "),e("th",[t._v(" Installment ")]),t._v(" "),e("th",[t._v(" Total Pay")]),t._v(" "),e("th",[t._v(" Total Due ")]),t._v(" "),e("th",[t._v(" Statement ")]),t._v(" "),e("th",[t._v(" Re-Loan ")])])])}],!1,null,null,null);a.default=s.exports}}]);