(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{888:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a.n(n);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var s={data:function(){var t;return i(t={moment:o.a,incomeTypeLists:[],incomeHeadListByIds:[],incomeHeadLists:[],paidDateText:"",totalAmountText:"",totalTarget:0,targetMonthStatus:0,targetDateStatus:0,totalAmountRowStatus:0,incomeCompanyLists:[],datas:[],chartOfAccounts:[],chartOfAccountRegisters:[],incomePurposeLists:[],incomeDetailsLists:[],getInterestTimeTypeLists:[],bankInformationStatus:0,cashInformationStatus:0,bankInformationAccountInfoStatus:0,form:new Form({rendomNumber:Math.random(1,1e3),item:"",itemAmount:"",incomeHead:"",incomeType:"",incomeAmount:"",incomeCompany:"",incomePurpous:"",interestTimeType:"",mobileNo:"",email:"",address:"",note:"",cashAmount:"",bankAmount:"",dueAmount:"",branchName:"",accNo:"",paymentType:"",bankTypeEntryId:"",bankEntryId:"",bankAccountId:"",detailsTotalAmount:""}),showBankNames:[],shopBankAllDatas:[],corporateBankAccountTypes:[],mobileBankAccountTypes:[],paymentTypeLists:[],showBankTypeDatas:[]},"showBankNames",[]),i(t,"showBankAccounts",[]),i(t,"bankMoreInfo",[]),i(t,"incomePurposeListViews",[]),t},mounted:function(){this.getData(),this.incomeTypeList(),this.incomeCompanyList(),this.getincomeHeadList(),this.chartOfAccount(),this.incomePurposeListViews(),this.paymentTypeList(),this.showBankType(),this.getInterestTimeTypeList()},methods:{create:function(){var t=this;this.form.post("/addIncomeTarget").then((function(e){Toast.fire({icon:"success",title:"Entry Successfully"}),t.form.reset(),t.form.rendomNumber=Math.random(1,1e3),t.getData(),t.getincomeDetailsList(0)}))},calculateAmount:function(t){if(1==t)this.form.incomeAmount-this.form.cashAmount>=0?this.form.dueAmount=this.form.incomeAmount-this.form.cashAmount:(this.form.dueAmount=0,this.form.cashAmount=this.form.incomeAmount);else if(2==t){this.form.incomeAmount-this.form.bankAmount>=0?this.form.dueAmount=this.form.incomeAmount-this.form.bankAmount:(this.form.dueAmount=0,this.form.bankAmount=this.form.incomeAmount)}},interestTime:function(){3==this.form.interestTimeType?(this.targetMonthStatus=1,this.targetDateStatus=0):5==this.form.interestTimeType?(this.targetMonthStatus=0,this.targetDateStatus=1):(this.targetMonthStatus=0,this.targetDateStatus=0)},paymentTypeList:function(){var t=this;axios.get("/paymentTypeList").then((function(e){t.paymentTypeLists=e.data.data}))},showBankType:function(){var t=this;axios.get("/bankTypeEntryList").then((function(e){t.showBankTypeDatas=e.data.show}))},bankTypeIdCatch:function(){var t=this;axios.get("/bankNameList/"+this.form.bankTypeEntryId).then((function(e){t.showBankNames=e.data.show}))},bankAccountIdCatch:function(){var t=this;axios.get("/bankAccountList/"+this.form.bankEntryId).then((function(e){t.showBankAccounts=e.data.data}))},getBankMoreInfo:function(){var t=this;axios.get("/bankAccountMoreInfo/"+this.form.bankAccountId).then((function(e){t.bankInformationAccountInfoStatus=1,t.form.branchName=e.data.data.bankBranch,t.form.accNo=e.data.data.bankAccountNumber}))},paymentReceiveType:function(){2==this.form.paymentType?(this.bankInformationStatus=1,this.cashInformationStatus=0):1==this.form.paymentType?(this.cashInformationStatus=1,this.bankInformationStatus=0):(this.cashInformationStatus=0,this.bankInformationStatus=0)},incomeTypeList:function(){var t=this;axios.get("incomeTypeList").then((function(e){t.incomeTypeLists=e.data.data}))},getData:function(){var t=this;axios.get("/getIncomeTargetList").then((function(e){t.datas=e.data.data,t.totalTarget=e.data.totalTarget}))},incomeCompanyList:function(){var t=this;axios.get("/addIncomeExpenseCompany").then((function(e){t.incomeCompanyLists=e.data.data}))},incomePurposeList:function(){var t=this;axios.get("/getIncomePurposeListById/"+this.form.incomeHead).then((function(e){t.incomePurposeLists=e.data.data}))},getAmount:function(){this.form.dueAmount=this.form.incomeAmount},getDetailsData:function(){this.getincomeDetailsList(this.form.incomePurpous)},getincomeDetailsList:function(t){var e=this;axios.get("/getIncomeDetailsListById/"+t).then((function(t){e.incomeDetailsLists=t.data.data,e.form.incomeAmount=t.data.totalAmount,e.form.dueAmount=t.data.totalAmount,e.totalAmountText=t.data.totalAmount,e.totalAmountRowStatus=t.data.totalAmount}))},incomeItemAdd:function(t){var e=this;this.form.item&&this.form.itemAmount?axios.get("/addIncomeDetailsItem/"+this.form.rendomNumber+"/"+this.form.incomePurpous+"/"+this.form.item+"/"+this.form.itemAmount).then((function(t){t.data.status?(Toast.fire({icon:"success",title:"Item Add Successfull"}),e.form.item="",e.form.itemAmount="",e.getincomeDetailsList(e.form.incomePurpous)):Toast.fire({icon:"error",title:"Item Not Add"})})):1==t&&Toast.fire({icon:"error",title:"Please enter your item and value"})},deleteIncomeDetailItem:function(t){var e=this;axios.get("/deleteIncomeDetailsItem/"+t).then((function(t){t.data.status?(Toast.fire({icon:"success",title:"Item Delete Successfull"}),e.form.item="",e.form.itemAmount="",e.getincomeDetailsList(e.form.incomePurpous)):Toast.fire({icon:"error",title:"Item Not Delete"})}))},chartOfAccount:function(){var t=this;axios.get("/chartOfAccount").then((function(e){t.chartOfAccounts=e.data.chartOfAccounts})),axios.get("/chartOfAccountRegister").then((function(e){t.chartOfAccountRegisters=e.data.chartOfAccounts})),axios.get("/getInterestTimeTypeList").then((function(e){t.getInterestTimeTypeLists=e.data.data})),axios.get("/addIncomeProvider/").then((function(e){t.incomePurposeListViews=e.data.data}))},getincomeHead:function(){var t=this;axios.get("/getIncomeHeadList/"+this.form.incomeType).then((function(e){t.incomeHeadListByIds=e.data.data}))},getincomeHeadList:function(){var t=this;axios.get("/addIncomeType/").then((function(e){t.incomeHeadLists=e.data.data}))},getIncomeExpenseCompanyInfo:function(){var t=this;axios.get("/getIncomeExpenseCompanyIncome/"+this.form.incomePurpous).then((function(e){t.form.mobileNo=e.data.data.mobileNo,t.form.email=e.data.data.email,t.form.address=e.data.data.address}))},deleteData:function(t){var e=this;axios.delete("/addIncomeTarget/"+t).then((function(t){Toast.fire({icon:"success",title:"Delete Successfull"}),e.getData()}))}}},m=a(0),c=Object(m.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"card main-card  element-block-example mt-5"},[t._m(0),t._v(" "),a("div",{staticClass:"table-responsive bg-white"},[a("table",{staticClass:"table table-hover table-bordered mb-0"},[t._m(1),t._v(" "),a("tbody",[t._l(t.datas,(function(e,n){return a("tr",[a("td",[t._v(t._s(n+1))]),t._v(" "),a("td",t._l(t.chartOfAccountRegisters,(function(n){return e.subHead==n.headCode?a("span",[t._v(" \n                    "+t._s(n.headName)+" \n                ")]):t._e()})),0),t._v(" "),a("td",t._l(t.getInterestTimeTypeLists,(function(n){return e.incomeTargetType==n.id?a("span",{attrs:{value:n.id}},[t._v("\n                    "+t._s(n.name)+" \n                ")]):t._e()})),0),t._v(" "),a("td",[t._v(" "+t._s(t.moment(e.fromDate).format("DD MMMM YYYY"))+" \n                  "),e.toDate?a("span",[a("br"),t._v(" to "),a("br"),t._v(" "+t._s(t.moment(e.toDate).format("DD MMMM YYYY"))+" ")]):t._e()]),t._v(" "),a("td",[t._v(" "+t._s(e.incomeAmount)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.note)+" ")])])})),t._v(" "),a("tr",[t._m(2),t._v(" "),a("th",[t._v(" "+t._s(t.totalTarget)+" ")]),t._v(" "),a("td")])],2)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.20)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[e("h3",{staticStyle:{color:"black"}},[this._v(" Target Or Budget List")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticStyle:{background:"rgba(242, 242, 242, 0.47)"}},[a("th",[t._v(" SN")]),t._v(" "),a("th",[t._v(" Target Or Budget  ")]),t._v(" "),a("th",[t._v(" Target Type ")]),t._v(" "),a("th",[t._v(" Date ")]),t._v(" "),a("th",[t._v(" Target Amount ")]),t._v(" "),a("th",[t._v(" Note ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{attrs:{colspan:"4"}},[e("span",{staticClass:"float-right"},[this._v(" Total ")])])}],!1,null,null,null);e.default=c.exports}}]);