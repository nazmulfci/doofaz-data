(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{555:function(e,t,a){"use strict";a.r(t);a(4);var s={data:function(){return{form:new Form({}),customerType:"",customerTypeLists:[]}},mounted:function(){this.customerInfoListReport(),this.customerInfoTypeListReport()},methods:{customerInfoListReport:function(){$("#table ").on("change",(function(){var e=$(this).val();$(this).val("default"),$(document).ready((function(){$("#sampleTable").DataTable({processing:!0,serverSide:!0,bDestroy:!0,ajax:"/salesCustomerListReportwithType/"+e,columns:[{data:"salesCustomerEntryId"},{data:"shopCustomerTypeName",name:"shopCustomerTypeName.shopCustomerName"},{data:"customerName"},{data:"customerEmail"},{data:"customerPhone"},{data:"customerImoNumber"},{data:"customerFacebookID"},{data:"customerAddress"},{data:"referenceName"},{data:"referenceEmail"},{data:"referencePhone"},{data:"salesCustomerEntryId",render:function(e,t){return'<button type="button" onclick="customerStatement('+e+')"     class="btn btn-hover-shine btn-outline-info"> Statement </button>'}}]})}))})),$(document).ready((function(){$("#sampleTable").DataTable({processing:!0,serverSide:!0,bDestroy:!0,ajax:"/salesCustomerListReport",columns:[{data:"salesCustomerEntryId"},{data:"shopCustomerTypeName",name:"shopCustomerTypeName.shopCustomerName"},{data:"customerName"},{data:"customerEmail"},{data:"customerPhone"},{data:"customerImoNumber"},{data:"customerFacebookID"},{data:"customerAddress"},{data:"referenceName"},{data:"referenceEmail"},{data:"referencePhone"},{data:"salesCustomerEntryId",render:function(e,t){return'<button type="button" onclick="customerStatement('+e+')"     class="btn btn-hover-shine btn-outline-info"> Statement </button>'}}]})}))},customerStatement:function(e){this.$router.push("/customerStatement"+e)},customerInfoTypeListReport:function(){var e=this;axios.get("/salesCustomerTypeListReport").then((function(t){e.customerTypeLists=t.data.customerTypeLists}))}},created:function(){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),window.customerStatement=this.customerStatement}},o=a(0),r=Object(o.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("div",{staticClass:"row",staticStyle:{"margin-top":"-2%"}},[a("div",{staticClass:"col-12 col-md-3 col-xs-12"}),e._v(" "),a("div",{staticClass:"col-12 col-md-4 col-xs-12"},[a("div",{staticClass:"form-group"},[a("label",{staticStyle:{"margin-left":"27%"},attrs:{for:"exampleInputPassword1"}},[e._v("Select Customer Type")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.customerType,expression:"customerType"}],staticClass:"form-control",attrs:{id:"table"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.customerType=t.target.multiple?a:a[0]}}},[a("option",[e._v("Selecet One")]),e._v(" "),e._l(e.customerTypeLists,(function(t){return a("option",{key:t.id,domProps:{value:t.shopCustomerTypeEntryId}},[e._v("\n            "+e._s(t.shopCustomerName)+"\n          ")])}))],2)])])]),e._v(" "),e._m(0)])}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card main-card  element-block-example"},[a("div",{staticClass:"card-header",staticStyle:{"background-color":"rgb(1, 176, 241)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[a("h3",{staticStyle:{color:"black"}},[e._v("  Customer List Report")])]),e._v(" "),a("div",{staticClass:"table-responsive bg-white p-2"},[a("table",{staticClass:"table table-hover table-bordered table-striped",attrs:{id:"sampleTable"}},[a("thead",[a("tr",[a("th",[e._v("SN")]),e._v(" "),a("th",[e._v("Customer Type Name")]),e._v(" "),a("th",[e._v("Customer Name")]),e._v(" "),a("th",[e._v("Customer Email")]),e._v(" "),a("th",[e._v("Customer Phone")]),e._v(" "),a("th",[e._v("Customer Imo Number")]),e._v(" "),a("th",[e._v("Customer Facebook ID")]),e._v(" "),a("th",[e._v("Customer Address")]),e._v(" "),a("th",[e._v("Reference Name")]),e._v(" "),a("th",[e._v("Reference Email")]),e._v(" "),a("th",[e._v("Reference Phone")]),e._v(" "),a("th",[e._v("Statement")])])]),e._v(" "),a("tbody")])])])}],!1,null,null,null);t.default=r.exports}}]);