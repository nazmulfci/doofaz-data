(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{601:function(t,a,e){"use strict";e.r(a);var r=e(5),s=e.n(r),o=e(1),i=e.n(o),n={data:function(){return{productSupplierLists:[],newBrandLists:[],productNameLists:[],resultNotFound:!1,customerStatus:1,srStatus:1,dsrStatus:1,salesCustomerLists:[],requisitionInformations:[],srLists:[],dsrLists:[],moment:i.a,loading:!1,form:new Form({rendomNumber:(new Date).getTime(),productSupplierId:"",brandId:"",productId:"",customerTypeId:"",customerId:"",customerListId:"",srListId:"",srId:"",dsrListId:"",dsrId:"",t_productId:"",t_brandId:"",t_tpRate:"",t_unitId:"",t_unit:"",t_perPcsQuantity:"",t_carton:"",t_pcs:"",t_totalPcs:"",t_totalPrice:"",totalAmount:0,OrderRequestDate:i()().format("YYYY-MM-DD")})}},components:{Multiselect:s.a},mounted:function(){this.view(),this.productSupplierList(),this.getSrDsrList(),this.customerType()},methods:{totalCalculate:function(t){$(".carton").prop("disabled",!0),$(".pcs").prop("disabled",!0);var a=parseFloat($("#productId-"+t).val()),e=parseFloat($("#brandId-"+t).val()),r=parseFloat($("#unitId-"+t).val()),s=parseFloat($("#tpRate-"+t).val()),o=parseFloat($("#pcsQuantity-"+t).val()),i=parseFloat($("#carton-"+t).val()),n=parseFloat($("#pcs-"+t).val()),c=$("#unit-"+t).val(),u=0,l=0,d=0;if(n>0&&(u=n),this.form.t_productId=a,this.form.t_brandId=e,this.form.t_tpRate=s,this.form.t_unitId=r,this.form.t_unit=c,this.form.t_perPcsQuantity=o,this.form.t_carton=i,this.form.t_pcs=u,i>0){var p=o*i+u;d=parseFloat(p*s).toFixed(2),l=p,$("#total-"+t).val(p),$("#totalText-"+t).html(p+" "+c),$("#totalPriceText-"+t).html(d),$("#totalPrice-"+t).val(d)}else $("#total-"+t).val(""),$("#totalText-"+t).html(""),$("#totalPriceText-"+t).html(""),$("#totalPrice-"+t).val("");this.form.t_totalPcs=l,this.form.t_totalPrice=d,this.changeData()},totalCalculate1:function(t){$(".carton").prop("disabled",!0),$(".pcs").prop("disabled",!0);var a=parseFloat($("#productId-"+t).val()),e=parseFloat($("#brandId-"+t).val()),r=parseFloat($("#unitId-"+t).val()),s=parseFloat($("#tpRate-"+t).val()),o=parseFloat($("#pcsQuantity-"+t).val()),i=parseFloat($("#carton-"+t).val()),n=parseFloat($("#pcs-"+t).val()),c=$("#unit-"+t).val();if(this.form.t_productId=a,this.form.t_brandId=e,this.form.t_tpRate=s,this.form.t_unitId=r,this.form.t_unit=c,this.form.t_perPcsQuantity=o,this.form.t_carton=i,this.form.t_pcs=n,o>n)if(n>0){var u=(p=o*i)+n,l=u,d=parseFloat(u*s).toFixed(2);$("#total-"+t).val(u),$("#totalText-"+t).html(u+" "+c),$("#totalPriceText-"+t).html(d),$("#totalPrice-"+t).val(d)}else{var p=o*i;d=parseFloat(p*s).toFixed(2),l=p;$("#total-"+t).val(p),$("#totalText-"+t).html(p+" "+c),$("#totalPriceText-"+t).html(d),$("#totalPrice-"+t).val(d)}else{l=p=o*i,d=parseFloat(p*s).toFixed(2);$("#pcs-"+t).val(""),$("#total-"+t).val(p),$("#totalText-"+t).html(p+" "+c),$("#totalPriceText-"+t).html(d),$("#totalPrice-"+t).val(d),Toast.fire({icon:"error",title:"Sorry..."})}this.form.t_totalPcs=l,this.form.t_totalPrice=d,this.changeData()},customerIdCatch:function(t){this.form.customerId=t.salesCustomerEntryId},selectSr:function(t){this.form.srId=t.shopEmployeeEntryId},selectDsr:function(t){this.form.dsrId=t.shopEmployeeEntryId},customerType:function(){var t=this;axios.get("/shopPriceCustomerType").then((function(a){t.form.customerTypeId=a.data.customerType,t.customerTypeIdCatch()}))},customerTypeIdCatch:function(){var t=this;axios.get("/customerTypeIdCatch/"+this.form.customerTypeId).then((function(a){t.salesCustomerLists=a.data.salesCustomerLists}))},view:function(){var t=this;axios.get("/saleOrderFinalList").then((function(a){t.requisitionInformations=a.data.data}))},salesCustomerName:function(t){var a=t.customerName,e=t.customerPhone;return"".concat(a," — ").concat(e)},customLabelSr:function(t){var a=t.fullName,e=t.phoneNumber;return"".concat(a," — ").concat(e)},customLabel:function(t){var a=t.fullName,e=t.phoneNumber;return"".concat(a," — ").concat(e)},productListShows:function(){var t=this;axios.get("/productName").then((function(a){t.productNameLists=a.data.productNameList}))},ShowDataLists:function(){var t=this;axios.get("/productBrandListPurchase").then((function(a){t.newBrandLists=a.data.shopProductBrandList}))},productSupplierList:function(){var t=this;axios.get("/shopWishProductSupplier").then((function(a){t.productSupplierLists=a.data.productSupplierList}))},productSupplierId:function(t){var a=this;this.form.productSupplierId=t.productSupplierId,axios.get("/supplierWiseBrandList/"+t.productSupplierId).then((function(t){a.newBrandLists=t.data.brandList,a.productNameLists=t.data.productList}))},selectBrandId:function(t){var a=this;this.form.brandId=t.productBrandEntryId,axios.get("/brandWiseProductList/"+this.form.productSupplierId+"/"+t.productBrandEntryId).then((function(t){a.productNameLists=t.data.productList}))},getSrDsrList:function(){var t=this;axios.get("/getSrDsrList").then((function(a){t.srLists=a.data.srList,t.dsrLists=a.data.dsrList}))},changeData:function(){var t=this;this.form.post("saleOrderRequest").then((function(a){$(".carton").prop("disabled",!1),$(".pcs").prop("disabled",!1),t.form.totalAmount=a.data.total})).catch((function(t){$(".carton").prop("disabled",!1),$(".pcs").prop("disabled",!1)}))},orderSubmit:function(){var t=this;this.loading=!0;this.form.post("saleOrderSubmit").then((function(a){Toast.fire({icon:"success",title:"Order Submit Successful."}),t.form.productSupplierListId="",t.form.brandListId="",t.productNameLists=[],t.view(),t.form.reset(),t.form.rendomNumber=(new Date).getTime(),t.form.OrderRequestDate=i()().format("YYYY-MM-DD"),t.loading=!1})).catch((function(a){t.loading=!1,Toast.fire({icon:"error",title:"Something Missing"})}))}}},c=e(0),u=Object(c.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("div",{staticClass:"card mt-5"},[t._m(0),t._v(" "),e("div",{staticClass:"supplier-entry py-4 px-2"},[e("div",{staticClass:"card-body table-responsive bg-white"},[e("table",{staticClass:"table table-hover table-striped table-bordered",staticStyle:{width:"100%"},attrs:{id:"example"}},[t._m(1),t._v(" "),e("tbody",t._l(t.requisitionInformations,(function(a,r){return e("tr",{key:a.id},[e("td",[t._v(t._s(++r))]),t._v(" "),e("td",[t._v(" "+t._s(t.moment(a.OrderRequestDate).format("DD MMMM YYYY"))+" ")]),t._v(" "),e("td",[a.supplier?e("span",[t._v(t._s(a.supplier.productSupplierName))]):t._e()]),t._v(" "),e("td",[a.customer?e("span",[t._v(t._s(a.customer.customerName))]):t._e()]),t._v(" "),e("td",[a.totalSalesAmount?e("span",[t._v(t._s(a.totalSalesAmount))]):e("span",[t._v("0")])]),t._v(" "),e("td",[a.previousDue?e("span",[t._v(t._s(a.previousDue))]):e("span",[t._v("0")])]),t._v(" "),e("td",[a.currentTotalAmount?e("span",[t._v(t._s(a.currentTotalAmount))]):e("span",[t._v("0")])]),t._v(" "),e("td",[a.currentPaidAmount?e("span",[t._v("Cash : "+t._s(a.currentPaidAmount))]):e("span",[t._v("Cash : 0")]),t._v(" "),e("br"),t._v(" "),a.mobileAmount?e("span",[t._v("Bank ("+t._s(a.receiverAccNo)+") : "+t._s(a.mobileAmount))]):e("span",[t._v("Bank : 0")]),t._v(" "),e("hr"),t._v("\n                  Total : "+t._s(a.currentPaidAmount+a.mobileAmount)+"\n                  ")]),t._v(" "),e("td",[a.currentDue?e("span",[t._v(t._s(a.currentDue))]):e("span",[t._v("0")])]),t._v(" "),e("td",[e("router-link",{staticClass:"btn-wide btn-pill btn btn-outline-primary btn-hover-shine",attrs:{to:"/viewSalesFinalOrder"+a.salesRequestId}},[e("i",{staticClass:"fa fa-eye"}),t._v(" View ")])],1)])})),0)])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header-tab card-header alert-info"},[a("h4",[a("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-premium-dark"}),this._v("\n          View Information ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("SL")]),t._v(" "),e("th",[t._v("Date")]),t._v(" "),e("th",[t._v("Company")]),t._v(" "),e("th",[t._v(" Customer ")]),t._v(" "),e("th",[t._v(" Sales Amount ")]),t._v(" "),e("th",[t._v(" Pev. Due ")]),t._v(" "),e("th",[t._v(" Total ")]),t._v(" "),e("th",[t._v(" Collection ")]),t._v(" "),e("th",[t._v(" Due ")]),t._v(" "),e("th",[t._v(" View ")])])])}],!1,null,null,null);a.default=u.exports}}]);