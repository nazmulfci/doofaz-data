(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{672:function(t,e,s){"use strict";s.r(e);s(4);var a=s(7),n=s.n(a),i=s(9),o=s.n(i),r=(s(8),s(10),s(11),s(12),s(13),s(14),{data:function(){return{gets:""}},mounted:function(){this.getInvoiceSetupInformation()},methods:{getInvoiceSetupInformation:function(){var t=this;axios.get("getInvoiceSetupInformation/3").then((function(e){t.gets=e.data.data,t.companyName=e.data.data.companyName,t.assetBrandList()}))},assetBrandList:function(){var t=this.gets.companyName,e=this.gets.address,a=this.gets.mobileNo+", "+this.gets.email+", "+this.gets.website,i="Asset Brand List";$(document).ready((function(){n.a.vfs=o.a.pdfMake.vfs,window.pdfMake=n.a,window.JSZip=s(8);var r=$("#sampleTable").DataTable({lengthMenu:[[10,25,50,100,200,500,-1],[10,25,50,100,200,500,"All"]],processing:!0,language:{processing:"<div style='color:white;position:fixed;top:35%;left:8%;width:90%;min-height:150px;max-height:80%;background:url(/dashboard/assets/images/pre-loader.gif),rgba(0,0,0,.2);background-repeat:no-repeat;background-position:center top;z-index:10;'>Processing..</div>"},serverSide:!0,columnDefs:[],dom:"<'row'<'col-sm-6 col-md-4 text-left'l> <'col-sm-6 col-md-4 text-center'B> <'col-sm-12 col-md-4 text-right'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",buttons:[{extend:"excelHtml5",text:'<i class="fa fa-file-excel-o"></i> Excel',title:t,filename:i,selectorOpts:{filter:"applied",order:"current"},createEmptyCells:!0,sheetName:i,messageTop:i,exportOptions:{columns:[0,1]},customize:function(t){}},{extend:"pdf",className:"btn export-pdf",text:'<i class="fa fa-file-pdf-o"></i> PDF',titleAttr:"PDF",customize:function(t){t.defaultStyle.alignment="center",t.styles.tableHeader.alignment="center"},title:t,messageTop:e+", Contact:- "+a,fileName:i+".pdf",exportOptions:{columns:[0,1]}},{extend:"print",className:"btn btn-primary",text:'<i class="fa fa-print"></i> Print',titleAttr:"Print",oSelectorOpts:{page:"all"},bShowAll:!0,title:"",messageTop:'<h3 class="text-center">'+t+'</h3><h5 class="text-center">'+e+'</h5><h5 class="text-center border-bottom">'+a+'</h5><center><span class="badge badge-light border border border-secondary">'+i+"</span></center>",exportOptions:{columns:[0,1]}}],ajax:"/shopAssetBrandReportAll",columns:[{title:"SN",render:function(t,e,s,a){return a.row+a.settings._iDisplayStart+1}},{data:"assetBrandName"}]});$(r.table().container()).removeClass("form-inline"),$(".col-xs-12").addClass("col-12").removeClass("col-xs-12")}))}}}),l=s(0),c=Object(l.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("div",{staticClass:"card main-card  element-block-example"},[e("div",{staticClass:"card-header"},[e("h3",[e("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"}),this._v(" Asset Brand Report ")])]),this._v(" "),e("div",{staticClass:"table-responsive bg-white p-3"},[e("table",{staticClass:"table table-hover table-striped table-bordered",attrs:{id:"sampleTable"}},[e("thead",[e("tr",{staticClass:"alert-info"}),e("tr",[e("th",{staticStyle:{width:"50px"}},[this._v("SN")]),this._v(" "),e("th",[this._v("Brand Name")])])]),this._v(" "),e("tbody",[e("tr",[e("td",{staticClass:"text-center",attrs:{colspan:"2"}},[e("h3",[this._v(" Loading.....")])])])])])])])])}],!1,null,null,null);e.default=c.exports}}]);