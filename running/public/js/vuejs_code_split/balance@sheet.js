(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{557:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{form:new Form({date:"",dateDue:"",employeeId:""}),modalTitle:"",empLists:[],infos:[],banks:[],dues:[],totaldues:[],customerLists:[],emid:0,shopOrEmployee:0,searchStatus:!1}},mounted:function(){this.info(),this.getShopOrEmployee(),this.dueSale()},methods:{changeDate:function(){this.form.date=""},showCustomerList:function(t){var e=this,a="getCustomerListBSheet/"+t;this.form.date&&this.form.employeeId?a="getCustomerListBSheetDateEId/"+t+"/"+this.form.date+"/"+this.form.employeeId:this.form.date?a="getCustomerListBSheetDate/"+t+"/"+this.form.date:this.form.employeeId&&(a="getCustomerListBSheetEId/"+t+"/"+this.form.employeeId),axios.get(a).then((function(t){e.customerLists=t.data.customerList,e.modalTitle=t.data.customerTypeName}))},info:function(){var t=this;axios.get("salesBalanceSheetUser").then((function(e){t.infos=e.data,t.banks=e.data.bank})),axios.get("employeeList").then((function(e){t.empLists=e.data.employeeName}))},dueSale:function(){var t=this;axios.get("dueSaleTodayUser").then((function(e){t.dues=e.data.due,t.totaldues=e.data}))},getShopOrEmployee:function(){var t=this;axios.get("getShopOrEmployee").then((function(e){t.shopOrEmployee=e.data.shopOrEmployee,3==e.data.shopOrEmployee?t.searchStatus=!0:t.searchStatus=!1}))},dateSearch:function(){var t=this,e="",a="";this.form.employeeId>0?(this.emid=this.form.employeeId,e="salesBalanceSheetDateUserWithId/"+this.form.date+"/"+this.emid,a="salesBalanceSheetDateDueUserWithId/"+this.form.date+"/"+this.emid):(e="salesBalanceSheetDateUser/"+this.form.date,a="salesBalanceSheetDateDueUser/"+this.form.date),axios.get(e).then((function(e){t.infos=e.data,t.banks=e.data.bank})),axios.get(a).then((function(e){t.dues=e.data.due,t.totaldues=e.data}))}}},o=a(0),i=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"table-responsive bg-white p-2"},[a("center",[a("div",{staticClass:"form-group col-md-2 col-sm-8 col-8"},[t.searchStatus?a("table",{staticClass:"table table-bordered"},[a("tr",[a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.employeeId,expression:"form.employeeId"}],staticClass:"form-control",staticStyle:{width:"150px"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"employeeId",e.target.multiple?a:a[0])},function(e){return t.changeDate()}]}},[a("option",{attrs:{value:""}},[t._v(" Select Salesman ")]),t._v(" "),t._l(t.empLists,(function(e){return a("option",{domProps:{value:e.id}},[t._v(" "+t._s(e.employeeName)+" ("+t._s(e.job)+") ")])}))],2)]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.date,expression:"form.date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.form.date},on:{change:function(e){return e.preventDefault(),t.dateSearch()},input:function(e){e.target.composing||t.$set(t.form,"date",e.target.value)}}})])])]):t._e()])]),t._v(" "),a("table",{staticClass:"table table-hover table-bordered mb-0"},[a("thead",[a("tr",{staticStyle:{background:"rgba(242, 242, 242, 0.47)"}},[a("th",{staticClass:"text-center",attrs:{colspan:"15"}},[a("h5",[t._v("Total Sale  \n                  "+t._s(t.infos.totalSale)+" ")])])]),t._v(" "),t._m(1)]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v(t._s(t.infos.cashAmountStatement))]),t._v(" "),a("td",t._l(t.banks,(function(e){return a("span",{key:e.id},[e.bank?a("span",[t._v(t._s(e.bank.bankName))]):t._e(),t._v("\n                     = "+t._s(e.creditAmount)),a("br")])})),0),t._v(" "),a("td",[t._v(t._s(parseFloat(t.infos.cashAmountStatement)+parseFloat(t.infos.bankAmountStatement)))]),t._v(" "),a("td",[t._v(t._s(t.infos.currentDue))])])])]),t._v(" "),a("table",{staticClass:"table table-hover table-bordered mb-0"},[a("thead",[a("tr",{staticStyle:{background:"rgba(242, 242, 242, 0.47)"}},[a("th",{staticClass:"text-center",attrs:{colspan:"15"}},[a("h5",[t._v("Due Sale Today  "+t._s(t.totaldues.totaldue)+"\n                  ")])])]),t._v(" "),t._m(2)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"list-group"},t._l(t.dues,(function(e){return a("a",{key:e.id,staticClass:"list-group-item list-group-item-action d-flex justify-content-between align-items-center",attrs:{href:"#","data-toggle":"modal","data-target":"#exampleModal"},on:{click:function(a){return t.showCustomerList(e.type.shopCustomerTypeEntryId)}}},[t._v("\n                            "+t._s(e.type.shopCustomerName)+"\n                            "),a("span",{staticClass:"badge badge-primary badge-pill"},[t._v(t._s(e.currentDue))])])})),0)]),t._v(" "),a("div",{staticClass:"col-4"}),t._v(" "),a("div",{staticClass:"col-4"})])],1),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.modalTitle))]),t._v(" "),t._m(3)]),t._v(" "),a("div",{staticClass:"modal-body"},[a("table",{staticClass:"table table-bordered"},[t._m(4),t._v(" "),t._l(t.customerLists,(function(e,s){return a("tr",[a("td",[t._v(" "+t._s(++s)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.customerName)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(e.due)+" ")])])}))],2)]),t._v(" "),t._m(5)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.46)",border:"1px solid rgba(0, 0, 0, 0.12)"}},[e("h3",{staticStyle:{color:"black"}},[this._v(" Today Total Sales ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticStyle:{background:"rgba(242, 242, 242, 0.47)"}},[e("th",[this._v("Cash Receive")]),this._v(" "),e("th",[this._v("Bank Receive")]),this._v(" "),e("th",[this._v("Total Receive")]),this._v(" "),e("th",[this._v("Due Sale")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticStyle:{background:"rgba(242, 242, 242, 0.47)"}},[e("th",[this._v("Customer")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v(" SL ")]),this._v(" "),e("th",[this._v(" Customer Name ")]),this._v(" "),e("th",[this._v(" Due ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])}],!1,null,null,null);e.default=i.exports}}]);