(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{677:function(e,t,a){"use strict";a.r(t);a(4);var s=a(7),o=a.n(s),n=a(9),i=a.n(n),r=(a(8),a(10),a(11),a(12),a(13),a(14),{data:function(){return{gets:""}},mounted:function(){this.getInvoiceSetupInformation()},methods:{getInvoiceSetupInformation:function(){var e=this;axios.get("getInvoiceSetupInformation/3").then((function(t){e.gets=t.data.data,e.companyName=t.data.data.companyName,e.assetBrandList()}))},assetBrandList:function(){var e=this.gets.companyName,t=this.gets.address,s=this.gets.mobileNo+", "+this.gets.email+", "+this.gets.website,n="Asset Code List";$(document).ready((function(){o.a.vfs=i.a.pdfMake.vfs,window.pdfMake=o.a,window.JSZip=a(8);var r=$("#sampleTable").DataTable({lengthMenu:[[10,25,50,100,-1],[10,25,50,100,"All"]],processing:!0,language:{processing:"<div style='color:white;position:fixed;top:35%;left:8%;width:90%;min-height:150px;max-height:80%;background:url(/dashboard/assets/images/pre-loader.gif),rgba(0,0,0,.2);background-repeat:no-repeat;background-position:center top;z-index:10;'>Processing..</div>"},serverSide:!0,columnDefs:[],dom:"<'row'<'col-sm-6 col-md-4 text-left'l> <'col-sm-6 col-md-4 text-center'B> <'col-sm-12 col-md-4 text-right'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",buttons:[{extend:"excelHtml5",text:'<i class="fa fa-file-excel-o"></i> Excel',title:e,filename:n,selectorOpts:{filter:"applied",order:"current"},createEmptyCells:!0,sheetName:n,messageTop:n,exportOptions:{columns:[0,1,2,3]},customize:function(e){}},{extend:"pdf",className:"btn export-pdf",text:'<i class="fa fa-file-pdf-o"></i> PDF',titleAttr:"PDF",customize:function(e){e.defaultStyle.alignment="center",e.styles.tableHeader.alignment="center"},title:e,messageTop:t+", Contact:- "+s,fileName:n+".pdf",exportOptions:{columns:[0,1,2,3]}},{extend:"print",className:"btn btn-primary",text:'<i class="fa fa-print"></i> Print',titleAttr:"Print",oSelectorOpts:{page:"all"},bShowAll:!0,title:"",messageTop:'<h3 class="text-center">'+e+'</h3><h5 class="text-center">'+t+'</h5><h5 class="text-center border-bottom">'+s+'</h5><center><span class="badge badge-light border border border-secondary">'+n+"</span></center>",exportOptions:{columns:[0,1,2,3]}}],ajax:"/assetCodeReport",columns:[{title:"SN",render:function(e,t,a,s){return s.row+s.settings._iDisplayStart+1}},{data:"asset_category_name.assetCategoryName"},{data:"assetPorductName"},{data:"assetPorductCode"}]});$(r.table().container()).removeClass("form-inline"),$(".col-xs-12").addClass("col-12").removeClass("col-xs-12")}))}}}),l=a(0),c=Object(l.a)(r,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("div",{staticClass:"card main-card  element-block-example"},[a("div",{staticClass:"card-header"},[a("h3",[a("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"}),e._v(" Asset Code Report ")])]),e._v(" "),a("div",{staticClass:"table-responsive bg-white p-3"},[a("table",{staticClass:"table table-hover table-striped table-bordered",attrs:{id:"sampleTable"}},[a("thead",[a("tr",{staticClass:"alert-info"}),a("tr",[a("th",{staticStyle:{width:"50px"}},[e._v("SN")]),e._v(" "),a("th",[e._v(" Category ")]),e._v(" "),a("th",[e._v(" Asset Name ")]),e._v(" "),a("th",[e._v(" Asset Code ")])])])])])])])}],!1,null,null,null);t.default=c.exports}}]);