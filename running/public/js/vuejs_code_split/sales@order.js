(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{596:function(t,e,a){"use strict";a.r(e);var r=a(5),s=a.n(r),o=a(1),i=a.n(o),l={data:function(){return{productSupplierLists:[],newBrandLists:[],productNameLists:[],resultNotFound:!1,customerStatus:1,srStatus:0,dsrStatus:0,salesCustomerLists:[],requisitionInformations:[],srLists:[],dsrLists:[],moment:i.a,loading:!1,form:new Form({rendomNumber:(new Date).getTime(),productSupplierId:"",brandId:"",productId:"",customerTypeId:"",customerId:"",customerListId:"",srListId:"",srId:"",dsrListId:"",dsrId:"",t_productId:"",t_brandId:"",t_colorId:"",t_sizeId:"",t_tpRate:"",t_purchaseRate:"",t_unitId:"",t_unit:"",t_perPcsQuantity:"",t_carton:"",t_pcs:"",t_priceTypeId:"",t_totalPcs:"",t_totalPrice:"",totalAmount:0,OrderRequestDate:i()().format("YYYY-MM-DD")})}},components:{Multiselect:s.a},mounted:function(){this.view(),this.productSupplierList(),this.getSrDsrList(),this.customerType()},methods:{totalCalculate:function(t){var e=parseFloat($("#productId-"+t).val()),a=parseFloat($("#brandId-"+t).val()),r=parseFloat($("#colorId-"+t).val()),s=parseFloat($("#sizeId-"+t).val()),o=parseFloat($("#unitId-"+t).val()),i=parseFloat($("#priceTypeId-"+t).val()),l=$("#tpRate-"+t).val(),d=$("#purchaseRate-"+t).val(),n=parseFloat($("#pcsQuantity-"+t).val()),c=parseFloat($("#carton-"+t).val()),p=parseFloat($("#pcs-"+t).val()),u=parseFloat($("#availableStock-"+t).val()),m=$("#unit-"+t).val(),v=0,h=0,f=0;if(p>0&&(v=p),c>0)var _=c;else _=0;this.form.t_productId=e,this.form.t_brandId=a,this.form.t_colorId=r,this.form.t_sizeId=s,this.form.t_tpRate=l,this.form.t_purchaseRate=d,this.form.t_priceTypeId=i,this.form.t_unitId=o,this.form.t_unit=m,this.form.t_perPcsQuantity=n,this.form.t_carton=_,this.form.t_pcs=v;var b=n*_+v;b>u?(Toast.fire({icon:"error",title:"Invalid Stock. available stock "+u+" "+m}),$("#carton-"+t).val(""),$("#total-"+t).val(""),$("#totalText-"+t).html(""),$("#totalPriceText-"+t).html(""),$("#totalPrice-"+t).val("")):(f=parseFloat(b*l).toFixed(2),h=b,$("#total-"+t).val(b),$("#totalText-"+t).html(b+" "+m),$("#totalPriceText-"+t).html(f),$("#totalPrice-"+t).val(f)),this.form.t_totalPcs=h,this.form.t_totalPrice=f,this.changeData()},totalCalculate1:function(t){var e=parseFloat($("#productId-"+t).val()),a=parseFloat($("#brandId-"+t).val()),r=parseFloat($("#colorId-"+t).val()),s=parseFloat($("#sizeId-"+t).val()),o=parseFloat($("#unitId-"+t).val()),i=parseFloat($("#priceTypeId-"+t).val()),l=parseFloat($("#tpRate-"+t).val()),d=parseFloat($("#purchaseRate-"+t).val()),n=parseFloat($("#pcsQuantity-"+t).val()),c=parseFloat($("#carton-"+t).val()),p=parseFloat($("#pcs-"+t).val()),u=parseFloat($("#availableStock-"+t).val()),m=$("#unit-"+t).val();if(c>0)var v=c;else v=0;if(this.form.t_productId=e,this.form.t_brandId=a,this.form.t_colorId=r,this.form.t_sizeId=s,this.form.t_tpRate=l,this.form.t_purchaseRate=d,this.form.t_unitId=o,this.form.t_priceTypeId=i,this.form.t_unit=m,this.form.t_perPcsQuantity=n,this.form.t_carton=v,this.form.t_pcs=p,v>0)var h=n*v;else h=0;var f=h+p;if(f>u){var _=0,b=0;Toast.fire({icon:"error",title:"Invalid Stock. available stock "+u+" "+m}),$("#carton-"+t).val(""),$("#pcs-"+t).val(""),$("#total-"+t).val(""),$("#totalText-"+t).html(""),$("#totalPriceText-"+t).html(""),$("#totalPrice-"+t).val("")}else if(n>p){_=f,b=parseFloat(f*l).toFixed(2);$("#total-"+t).val(f),$("#totalText-"+t).html(f+" "+m),$("#totalPriceText-"+t).html(b),$("#totalPrice-"+t).val(b)}else{_=h,b=parseFloat(h*l).toFixed(2);$("#pcs-"+t).val(""),$("#total-"+t).val(h),$("#totalText-"+t).html(h+" "+m),$("#totalPriceText-"+t).html(b),$("#totalPrice-"+t).val(b)}this.form.t_totalPcs=_,this.form.t_totalPrice=b,this.changeData()},customerIdCatch:function(t){this.form.customerId=t.salesCustomerEntryId},selectSr:function(t){this.form.srId=t.shopEmployeeEntryId},selectDsr:function(t){this.form.dsrId=t.shopEmployeeEntryId},customerType:function(){var t=this;axios.get("/shopPriceCustomerType").then((function(e){t.form.customerTypeId=e.data.customerType,t.customerTypeIdCatch()}))},customerTypeIdCatch:function(){var t=this;axios.get("/customerTypeIdCatch/"+this.form.customerTypeId).then((function(e){t.salesCustomerLists=e.data.salesCustomerLists}))},view:function(){var t=this;axios.get("/saleOrderRequestList").then((function(e){t.requisitionInformations=e.data.data}))},salesCustomerName:function(t){var e=t.customerName,a=t.customerPhone;return"".concat(e," — ").concat(a)},customLabelSr:function(t){var e=t.fullName,a=t.phoneNumber;return"".concat(e," — ").concat(a)},customLabel:function(t){var e=t.fullName,a=t.phoneNumber;return"".concat(e," — ").concat(a)},productListShows:function(){var t=this;axios.get("/productName").then((function(e){t.productNameLists=e.data.productNameList}))},ShowDataLists:function(){var t=this;axios.get("/productBrandListPurchase").then((function(e){t.newBrandLists=e.data.shopProductBrandList}))},productSupplierList:function(){var t=this;axios.get("/shopWishProductSupplier").then((function(e){t.productSupplierLists=e.data.productSupplierList}))},productSupplierId:function(t){var e=this;this.form.productSupplierId=t.productSupplierId,axios.get("/supplierWiseBrandList/"+t.productSupplierId).then((function(t){e.newBrandLists=t.data.brandList,e.productNameLists=t.data.productList}))},selectBrandId:function(t){var e=this;this.form.brandId=t.productBrandEntryId,axios.get("/brandWiseProductList/"+this.form.productSupplierId+"/"+t.productBrandEntryId).then((function(t){e.productNameLists=t.data.productList}))},getSrDsrList:function(){var t=this;axios.get("/getSrDsrList").then((function(e){t.srLists=e.data.srList,t.dsrLists=e.data.dsrList}))},changeData:function(){var t=this;this.loading=!0;this.form.post("saleOrderRequest").then((function(e){t.loading=!1,t.form.totalAmount=e.data.total})).catch((function(e){t.loading=!1}))},orderSubmit:function(){var t=this;this.loading=!0;this.form.post("saleOrderSubmit").then((function(e){Toast.fire({icon:"success",title:"Order Submit Successful."}),t.form.productSupplierListId="",t.form.brandListId="",t.productNameLists=[],t.view(),t.form.reset(),t.form.rendomNumber=(new Date).getTime(),t.form.OrderRequestDate=i()().format("YYYY-MM-DD"),t.loading=!1})).catch((function(e){t.loading=!1,Toast.fire({icon:"error",title:"Something Missing"})}))}}},d=a(0),n=Object(d.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"supplier-entry py-4 px-2"},[a("div",{staticClass:"card-body table-responsive bg-white"},[a("table",{staticClass:"table table-hover table-striped table-bordered",staticStyle:{width:"100%"},attrs:{id:"example"}},[a("thead",[a("tr",[a("th",{staticClass:"text-center",attrs:{colspan:"12"}},[a("center",[a("form",{attrs:{method:""},on:{submit:function(e){return e.preventDefault(),t.changeData()}}},[a("table",{},[a("tr",[a("td",[a("multiselect",{staticClass:"form-control",class:{"is-invalid":t.form.errors.has("productSupplierId")},staticStyle:{padding:"0px !important","padding-bottom":"3px !important"},attrs:{label:"productSupplierName",placeholder:"Select Supplier",options:t.productSupplierLists,"show-labels":!1},on:{input:t.productSupplierId},model:{value:t.form.productSupplierListId,callback:function(e){t.$set(t.form,"productSupplierListId",e)},expression:"form.productSupplierListId"}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"productSupplierId"}})],1),t._v(" "),a("td",[a("multiselect",{staticClass:"form-control",class:{"is-invalid":t.form.errors.has("brandId")},staticStyle:{padding:"0px !important","padding-bottom":"3px !important"},attrs:{label:"productBrandName",placeholder:"Brand",options:t.newBrandLists,"show-labels":!1},on:{input:t.selectBrandId},model:{value:t.form.brandListId,callback:function(e){t.$set(t.form,"brandListId",e)},expression:"form.brandListId"}})],1)])])])])],1)])])]),t._v(" "),a("table",{staticClass:"table table-bordered table-striped table-hover"},[t._m(1),t._v(" "),a("tbody",[t._l(t.productNameLists,(function(e,r){return a("tr",[a("td",[t._v(t._s(++r))]),t._v(" "),a("td",[t._v(t._s(e.productName)+"  ")]),t._v(" "),a("td",[t._v(" "+t._s(parseFloat(e.tpRate).toFixed(3))+"\n              "),a("input",{attrs:{id:"tpRate-"+e.productSerialId,type:"hidden"},domProps:{value:e.tpRate}}),t._v(" "),a("input",{attrs:{id:"purchaseRate-"+e.productSerialId,type:"hidden"},domProps:{value:e.purchaseRate}}),t._v(" "),a("input",{attrs:{id:"productId-"+e.productSerialId,type:"hidden"},domProps:{value:e.productNameId}}),t._v(" "),a("input",{attrs:{id:"brandId-"+e.productSerialId,type:"hidden"},domProps:{value:e.brandId}}),t._v(" "),a("input",{attrs:{id:"colorId-"+e.productSerialId,type:"hidden"},domProps:{value:e.colorId}}),t._v(" "),a("input",{attrs:{id:"sizeId-"+e.productSerialId,type:"hidden"},domProps:{value:e.sizeId}}),t._v(" "),a("input",{attrs:{id:"priceTypeId-"+e.productSerialId,type:"hidden"},domProps:{value:e.priceTypeId}}),t._v(" "),a("input",{attrs:{id:"availableStock-"+e.productSerialId,type:"hidden"},domProps:{value:e.availableStock}}),t._v(" "),a("input",{attrs:{id:"availableCarton-"+e.productSerialId,type:"hidden"},domProps:{value:e.availableCarton}}),t._v(" "),a("input",{attrs:{id:"disabled-"+e.productSerialId,type:"hidden"},domProps:{value:e.disabled}})]),t._v(" "),a("td",[e.disabled?a("span",[t._v("1")]):a("span",[t._v(t._s(e.carton))]),t._v("\n               "+t._s(e.unit)+" \n              "),a("input",{attrs:{id:"pcsQuantity-"+e.productSerialId,type:"hidden"},domProps:{value:e.carton}}),t._v(" "),a("input",{attrs:{id:"unitId-"+e.productSerialId,type:"hidden"},domProps:{value:e.unitId}}),t._v(" "),a("input",{attrs:{id:"unit-"+e.productSerialId,type:"hidden"},domProps:{value:e.unit}})]),t._v(" "),a("td",[a("input",{staticClass:"form-control carton",staticStyle:{width:"100px"},attrs:{id:"carton-"+e.productSerialId,placeholder:e.availableCarton,disabled:e.disabled?"":t.disabled,onkeyup:"value=value.replace(/[^0-9^\\.]+/g,'').replace('.','$#$').replace(/\\./g,'').replace('$#$','.').replace(/^0+/, '')",type:"text"},on:{keyup:function(a){return t.totalCalculate(e.productSerialId)}}})]),t._v(" "),a("td",[a("input",{staticClass:"form-control pcs",staticStyle:{width:"100px"},attrs:{id:"pcs-"+e.productSerialId,placeholder:e.availableStock,onkeyup:"value=value.replace(/[^0-9^\\.]+/g,'').replace('.','$#$').replace(/\\./g,'').replace('$#$','.').replace(/^0+/, '')",type:"text"},on:{keyup:function(a){return t.totalCalculate1(e.productSerialId)}}})]),t._v(" "),a("td",[a("span",{attrs:{id:"totalText-"+e.productSerialId}}),t._v(" "),a("input",{staticClass:"form-control",staticStyle:{width:"100px"},attrs:{id:"total-"+e.productSerialId,type:"hidden"}})]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[a("span",{attrs:{id:"totalPriceText-"+e.productSerialId}}),t._v(" "),a("input",{staticClass:"form-control",staticStyle:{width:"100px"},attrs:{id:"totalPrice-"+e.productSerialId,type:"hidden"}})]),t._v(" "),a("td")])})),t._v(" "),a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"10"}},[t._v("  Total")]),t._v(" "),a("td",[t._v("  "+t._s(parseFloat(t.form.totalAmount).toFixed(3)))]),t._v(" "),a("td")])],2)]),t._v(" "),a("table",{staticClass:"table table-hover table-striped table-bordered",staticStyle:{width:"100%"},attrs:{id:"example"}},[a("thead",[a("tr",[a("th",{staticClass:"text-center",attrs:{colspan:"12"}},[a("center",[a("form",{attrs:{method:""},on:{submit:function(e){return e.preventDefault(),t.orderSubmit()}}},[a("table",{},[a("tr",[a("td",[t.customerStatus?a("multiselect",{staticClass:"form-control",class:{"is-invalid":t.form.errors.has("customerListId")},staticStyle:{padding:"0px !important","padding-bottom":"3px !important"},attrs:{placeholder:"Select Customer",options:t.salesCustomerLists,"show-labels":!1,"custom-label":t.salesCustomerName},on:{input:t.customerIdCatch},model:{value:t.form.customerListId,callback:function(e){t.$set(t.form,"customerListId",e)},expression:"form.customerListId"}}):t._e(),t._v(" "),a("has-error",{attrs:{form:t.form,field:"customerListId"}})],1),t._v(" "),a("td",[t.srStatus?a("multiselect",{staticClass:"form-control",class:{"is-invalid":t.form.errors.has("srListId")},staticStyle:{padding:"0px !important","padding-bottom":"3px !important"},attrs:{placeholder:"Select SR",options:t.srLists,"show-labels":!1,"custom-label":t.customLabelSr},on:{input:t.selectSr},model:{value:t.form.srListId,callback:function(e){t.$set(t.form,"srListId",e)},expression:"form.srListId"}}):t._e()],1),t._v(" "),a("td",[t.dsrStatus?a("multiselect",{staticClass:"form-control",class:{"is-invalid":t.form.errors.has("dsrListId")},staticStyle:{padding:"0px !important","padding-bottom":"3px !important"},attrs:{label:"fullName",placeholder:"Select DSR",options:t.dsrLists,"show-labels":!1,"custom-label":t.customLabel},on:{input:t.selectDsr},model:{value:t.form.dsrListId,callback:function(e){t.$set(t.form,"dsrListId",e)},expression:"form.dsrListId"}}):t._e()],1),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.OrderRequestDate,expression:"form.OrderRequestDate"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("OrderRequestDate")},staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"Select Date"},domProps:{value:t.form.OrderRequestDate},on:{input:function(e){e.target.composing||t.$set(t.form,"OrderRequestDate",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"OrderRequestDate"}})],1),t._v(" "),a("td",[a("button",{staticClass:"\n                              mt-3\n                              btn-pill btn-shadow \n                              fsize-1\n                              btn btn-primary float-right\n                            ",attrs:{type:"button",disabled:t.loading},on:{click:function(e){return e.preventDefault(),t.orderSubmit()}}},[t.loading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):a("span",{staticClass:"mr-2 opacity-7"},[a("i",{staticClass:"fa fa-paper-plane"})]),t._v(" "),a("span",{staticClass:"mr-1"},[t._v(" Submit ")])])])])])])])],1)])])])])])]),t._v(" "),a("div",{staticClass:"card mt-5"},[t._m(2),t._v(" "),a("div",{staticClass:"supplier-entry py-4 px-2"},[a("div",{staticClass:"card-body table-responsive bg-white"},[a("table",{staticClass:"table table-hover table-striped table-bordered",staticStyle:{width:"100%"},attrs:{id:"example"}},[t._m(3),t._v(" "),a("tbody",t._l(t.requisitionInformations,(function(e,r){return a("tr",{key:e.id},[a("td",[t._v(t._s(++r))]),t._v(" "),a("td",[t._v(" "+t._s(t.moment(e.OrderRequestDate).format("DD MMMM YYYY"))+" ")]),t._v(" "),a("td",[e.supplier?a("span",[t._v(t._s(e.supplier.productSupplierName))]):t._e()]),t._v(" "),a("td",[e.customer?a("span",[t._v(t._s(e.customer.customerName))]):t._e()]),t._v(" "),a("td",[t._v(t._s(e.totalPriceRequest))]),t._v(" "),a("td",[a("router-link",{staticClass:"btn-wide btn-pill btn btn-outline-primary btn-hover-shine",attrs:{to:"/viewSalesOrder"+e.id}},[a("i",{staticClass:"fa fa-eye"}),t._v(" View ")])],1),t._v(" "),a("td",[a("router-link",{staticClass:"btn-wide btn-pill btn btn-outline-primary btn-hover-shine",attrs:{to:"/receiveSalesOrder"+e.id}},[a("i",{staticClass:"fa fa-eye"}),t._v(" Edit ")])],1)])})),0)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header-tab card-header alert-info"},[e("h4",[e("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-premium-dark"}),this._v("\n          Sales Order ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{rowspan:"2"}},[t._v("SL")]),t._v(" "),a("th",{attrs:{rowspan:"2"}},[t._v("Product Name")]),t._v(" "),a("th",{attrs:{rowspan:"2"}},[t._v("T.P Rate")]),t._v(" "),a("th",{attrs:{rowspan:"2"}},[t._v(" Carton or Cais ")]),t._v(" "),a("th",{staticClass:"text-center",attrs:{colspan:"3"}},[t._v(" Receive ")]),t._v(" "),a("th",{staticClass:"text-center",attrs:{colspan:"3"}},[t._v(" Return ")]),t._v(" "),a("th",{attrs:{rowspan:"2"}},[t._v(" Sales Price ")]),t._v(" "),a("th",{attrs:{rowspan:"2"}},[t._v(" Total Sale ")])]),t._v(" "),a("tr",[a("th",[t._v("Carton")]),t._v(" "),a("th",[t._v("PCs")]),t._v(" "),a("th",[t._v("Total")]),t._v(" "),a("th",[t._v("Good")]),t._v(" "),a("th",[t._v("Damaged")]),t._v(" "),a("th",[t._v("Total")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header-tab card-header alert-info"},[e("h4",[e("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-premium-dark"}),this._v("\n          View Information ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("SL")]),t._v(" "),a("th",[t._v("Date")]),t._v(" "),a("th",[t._v("Company")]),t._v(" "),a("th",[t._v(" Customer ")]),t._v(" "),a("th",[t._v(" Amount ")]),t._v(" "),a("th",[t._v(" View ")]),t._v(" "),a("th",[t._v(" Edit ")])])])}],!1,null,null,null);e.default=n.exports}}]);