(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{597:function(t,e,a){"use strict";a.r(e);var o=a(5),r=a.n(o),s=a(1),n=a.n(s);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l={data:function(){var t;return i(t={productSupplierLists:[],newBrandLists:[],productNameLists:[],resultNotFound:!1,customerStatus:1,srStatus:1,dsrStatus:1,salesCustomerLists:[],requisitionInformation:[],srLists:[],dsrLists:[],moment:n.a,loading:!1,form:new Form({id:"",productSupplierId:"",brandId:"",productId:"",customerTypeId:"",customerId:"",customerListId:"",srListId:"",srId:"",dsrListId:"",dsrId:"",rendomNumber:"",t_id:"",t_productId:"",t_brandId:"",t_tpRate:"",t_purchaseRate:"",t_unitId:"",t_unit:"",t_perPcsQuantity:"",t_carton:"",t_pcs:"",t_returnQuantity:"",t_saleQuantity:"",t_totalPcs:"",t_totalPrice:"",t_totalPurchasePrice:"",OrderRequestDate:n()().format("YYYY-MM-DD"),totalSalesAmount:"",todayDue:"",pevDueCollection:"",totalCollection:"",netCollection:"",limitDueAmountShow:"~",limitDueAmount:0,totalPrice:"",totalQuantity:"",totalBalance:"",discountPrice:"",totalVat:0,totalVat1:2,vatCalculate:"",totalPayable:"",previousDue:"",currentTotalAmount:"",currentPaidAmount:0,currentDue:0,totalDis:"",senderbankTypeEntryId:"",senderBankName:"",senderAcNo:"",senderAcName:"",senderBranchName:"",senderMobileAcNo:"",senderTrxNo:"",receiverbankTypeEntryId:"",receiverbankEntryId:"",receiverbankAccountId:"",receiverbranchName:"",receiverAccNo:""}),shopProductBrandLists:[],purchaseProductReports:{},modelNo:{},batchNo:{},qrCode:{},mfgLicenseNO:{},warranty:{},selectMothOrYearWarranty:{},guarantee:{},selectMothOrYearGuarantee:{},mfgDate:{},expiryDate:{},tax:{},taxAmount:{},taxAmountType:{},quantityType:{},quantityNoti:{},proDescription:{},proAdvantage:{},lmt:"",totalQt:"",paynow:!0,paynow1:!0,dueLimitMessage:!1,generalCustomerDueMessage:!1,negative:!1,invalid:!1,avil:!1,fromshow:!1,guestInfo:!0,pendingCount:"",paymentTypeLists:{},showBankNames:[],showBankAccounts:[],showBankTypeDatas:[],bankInformationAccountInfoStatus:[],mobileAccount:!1,bankCardAccount:!1,bankAccount:!1,morepay:!0,close:!1,productBarcodeStatus:!1,predue:""},"loading",!1),i(t,"loadingPay",!1),i(t,"lists",""),i(t,"lists",""),i(t,"total",""),i(t,"due",""),i(t,"discount",""),i(t,"paymentOption",!1),t},components:{Multiselect:r.a},mounted:function(){this.getDataForShow(),this.getSrDsrList(),this.customerType(),this.bankTypeList()},methods:{calculateAllDiscount:function(){var t=this.form.discountPrice,e=this.form.totalBalance,a=this.form.totalPayable,o=(this.form.currentTotalAmount,this.form.previousDue);t>e?(t="",a=parseFloat(e).toFixed(2),parseFloat(e).toFixed(2)):t>0?(a=parseFloat(e-t).toFixed(2),parseFloat(a+o).toFixed(2)):(a=parseFloat(e).toFixed(2),parseFloat(a+o).toFixed(2))},salesCustomerDueLimit:function(t){var e=this;axios.get("/dueLimit/"+t).then((function(t){null==t.data.get?e.form.previousDue=0:e.form.previousDue=t.data.get.balanceAmount,null==t.data.data?e.lmt=0:e.lmt=t.data.data,1234567890==t.data.limitDueAmount?e.form.limitDueAmountShow="~":e.form.limitDueAmountShow=parseFloat(t.data.limitDueAmount).toFixed(2),e.form.limitDueAmount=parseFloat(t.data.limitDueAmount).toFixed(2)}))},bankTypeList:function(){var t=this;axios.get("/bankTypeEntryList").then((function(e){t.showBankTypeDatas=e.data.show}))},senderBankTypeIdCatch:function(){var t=this;this.form.senderBankName="",this.form.senderAcName="",this.form.senderAcNo="",this.form.senderBankName="",this.form.senderAcNo="",this.form.senderAcName="",this.form.senderMobileAcNo="",this.form.senderTrxNo="",this.form.receiverbankEntryId="",this.form.receiverbankAccountId="",this.form.receiverbranchName="",this.form.receiverAccNo="",this.form.mobileAmount="",this.form.currentDue=this.form.currentTotalAmount-this.form.currentPaidAmount,""==this.form.senderbankTypeEntryId?this.fromshow=!1:(axios.get("/bankNameListByShop/"+this.form.senderbankTypeEntryId).then((function(e){t.showBankNames=e.data.show,t.fromshow=!0})),1==this.form.senderbankTypeEntryId?(this.form.receiverbankTypeEntryId=1,this.bankAccount=!0,this.mobileAccount=!1,this.bankCardAccount=!1):2==this.form.senderbankTypeEntryId?(this.form.receiverbankTypeEntryId=2,this.bankAccount=!1,this.bankCardAccount=!1,this.mobileAccount=!0):3==this.form.senderbankTypeEntryId&&(this.form.receiverbankTypeEntryId=3,this.bankAccount=!1,this.bankCardAccount=!0,this.mobileAccount=!1))},bankTypeIdCatch:function(){var t=this;axios.get("/bankNameList/"+this.form.receiverbankTypeEntryId).then((function(e){t.showBankNames=e.data.show})),1==this.form.receiverbankTypeEntryId?(this.bankAccount=!0,this.mobileAccount=!1,this.bankCardAccount=!1):2==this.form.receiverbankTypeEntryId?(this.bankAccount=!1,this.bankCardAccount=!1,this.mobileAccount=!0):3==this.form.receiverbankTypeEntryId&&(this.bankAccount=!1,this.mobileAccount=!1,this.bankCardAccount=!0)},bankAccountIdCatch:function(){var t=this;axios.get("/bankAccountListWithCard/"+this.form.receiverbankEntryId+"/"+this.form.receiverbankTypeEntryId).then((function(e){t.showBankAccounts=e.data.data}))},getBankMoreInfo:function(){var t=this;axios.get("/bankAccountMoreInfo/"+this.form.receiverbankAccountId).then((function(e){t.form.receiverbranchName=e.data.data.bankBranch,t.form.receiverAccNo=e.data.data.bankAccountNumber,t.bankInformationAccountInfoStatus=1}))},getDataForShow:function(){var t=this;this.form.id=this.$route.params.id,axios.get("/saleOrderListById/"+this.$route.params.id).then((function(e){t.requisitionInformation=e.data.data,t.form.productSupplierId=e.data.data.supplierId,t.form.customerId=e.data.data.customerId,t.reqProductList(e.data.data.rendomNumber),t.salesCustomerDueLimit(e.data.data.customerId)}))},totalCalculate:function(t){var e=$("#rendomNumber-"+t).val(),a=(parseFloat($("#productId-"+t).val()),parseFloat($("#brandId-"+t).val()),parseFloat($("#unitId-"+t).val()),parseFloat($("#tpRate-"+t).val())),o=parseFloat($("#purchaseRate-"+t).val()),r=parseFloat($("#reqQnt-"+t).val()),s=(parseFloat($("#reqPrice-"+t).val()),parseFloat($("#carton-"+t).val())),n=parseFloat($("#pcs-"+t).val()),i=$("#unit-"+t).val(),l=0,c=0;n>0&&(l=n);var m=(s=s>0?s:0)+l;if(m>r)Toast.fire({icon:"error",title:"Invalid Quantity. Returnable quantity "+r+" "+i}),$("#carton-"+t).val(""),$("#total-"+t).val(""),$("#totalText-"+t).html(""),$("#totalSaleText-"+t).html(""),$("#totalSale-"+t).val(""),$("#totalSalePriceText-"+t).html(""),$("#totalSalePrice-"+t).val("");else if(s>0){var u=r-(c=m),d=parseFloat(a*u).toFixed(2),p=parseFloat(o*u).toFixed(2);$("#total-"+t).val(m),$("#totalText-"+t).html(m+" "+i),$("#totalSaleText-"+t).html(u),$("#totalSale-"+t).val(u),$("#totalSalePriceText-"+t).html(d),$("#totalSalePrice-"+t).val(d),$("#totalPurchasePrice-"+t).val(p)}else $("#total-"+t).val(""),$("#totalText-"+t).html(""),$("#totalPriceText-"+t).html(""),$("#totalPrice-"+t).val("");this.form.t_id=t,this.form.rendomNumber=e,this.form.t_carton=s,this.form.t_pcs=l,this.form.t_returnQuantity=c,this.form.t_saleQuantity=u,this.form.t_purchaseRate=o,this.form.t_totalPurchasePrice=p,this.form.t_totalPrice=d,this.form.totalSalesAmount=d},totalCalculate1:function(t){var e=$("#rendomNumber-"+t).val(),a=(parseFloat($("#productId-"+t).val()),parseFloat($("#brandId-"+t).val()),parseFloat($("#unitId-"+t).val()),parseFloat($("#tpRate-"+t).val())),o=parseFloat($("#purchaseRate-"+t).val()),r=parseFloat($("#reqQnt-"+t).val()),s=(parseFloat($("#reqPrice-"+t).val()),parseFloat($("#carton-"+t).val())),n=0,i=parseFloat($("#pcs-"+t).val()),l=0,c=$("#unit-"+t).val();s>0&&(n=s),i>0&&(l=i);var m,u=n,d=u+l;d>r&&(Toast.fire({icon:"error",title:"Invalid Quantity. Returnable quantity "+r+" "+c}),$("#pcs-"+t).val(""),l=0);var p=r-(m=d=u+l),v=parseFloat(a*p).toFixed(2),f=parseFloat(o*p).toFixed(2);$("#total-"+t).val(d),$("#totalText-"+t).html(d+" "+c),$("#totalSaleText-"+t).html(p),$("#totalSale-"+t).val(p),$("#totalSalePriceText-"+t).html(v),$("#totalSalePrice-"+t).val(v),$("#totalPurchasePrice-"+t).val(f),this.form.t_id=t,this.form.rendomNumber=e,this.form.t_carton=n,this.form.t_pcs=l,this.form.t_returnQuantity=m,this.form.t_saleQuantity=p,this.form.t_totalPrice=v,this.form.t_purchaseRate=o,this.form.t_totalPurchasePrice=f,this.form.totalSalesAmount=v},customerIdCatch:function(t){this.form.customerId=t.salesCustomerEntryId},selectSr:function(t){this.form.srId=t.shopEmployeeEntryId},selectDsr:function(t){this.form.dsrId=t.shopEmployeeEntryId},customerType:function(){var t=this;axios.get("/shopPriceCustomerType").then((function(e){t.form.customerTypeId=e.data.customerType,t.customerTypeIdCatch()}))},customerTypeIdCatch:function(){var t=this;axios.get("/customerTypeIdCatch/"+this.form.customerTypeId).then((function(e){t.salesCustomerLists=e.data.salesCustomerLists}))},salesCustomerName:function(t){var e=t.customerName,a=t.customerPhone;return"".concat(e," — ").concat(a)},customLabelSr:function(t){var e=t.fullName,a=t.phoneNumber;return"".concat(e," — ").concat(a)},customLabel:function(t){var e=t.fullName,a=t.phoneNumber;return"".concat(e," — ").concat(a)},productListShows:function(){var t=this;axios.get("/productName").then((function(e){t.productNameLists=e.data.productNameList}))},ShowDataLists:function(){var t=this;axios.get("/productBrandListPurchase").then((function(e){t.newBrandLists=e.data.shopProductBrandList}))},productSupplierList:function(){var t=this;axios.get("/shopWishProductSupplier").then((function(e){t.productSupplierLists=e.data.productSupplierList}))},reqProductList:function(t){var e=this;axios.get("/requisitionProductList/"+t).then((function(t){e.productNameLists=t.data.productList}))},getSrDsrList:function(){var t=this;axios.get("/getSrDsrList").then((function(e){t.srLists=e.data.srList,t.dsrLists=e.data.dsrList}))},cashBankCalculate:function(t){var e=parseFloat(this.form.currentPaidAmount),a=parseFloat(this.form.mobileAmount);e=""==e||isNaN(e)||0==e?0:e,a=""==a||isNaN(a)||0==a?0:a;var o=parseFloat(e+a).toFixed(2),r=parseFloat(this.form.currentTotalAmount-o).toFixed(2);r<0?1==t?(this.form.currentPaidAmount="",this.form.currentDue=parseFloat(this.form.currentTotalAmount-a).toFixed(2)):2==t&&(this.form.mobileAmount="",this.form.currentDue=parseFloat(this.form.currentTotalAmount-e).toFixed(2)):this.form.currentDue=r,1==this.form.customerTypeId?this.generalCustomerDue(this.form.currentDue):this.calculateDueLimit(this.form.currentDue)},generalCustomerDue:function(t){0==parseFloat(t)?(this.paynow1=!0,this.generalCustomerDueMessage=!1):(this.paynow1=!1,this.generalCustomerDueMessage=!0)},calculateDueLimit:function(t){var e=parseFloat(t),a=parseFloat(this.form.limitDueAmount);e===a?(this.paynow1=!0,this.dueLimitMessage=!1):e<a?(this.paynow1=!0,this.dueLimitMessage=!1):e>a&&(this.paynow1=!1,this.dueLimitMessage=!0)},changeData:function(){var t=this;this.loading=!0;this.form.post("orderReceiveRequest").then((function(e){var a=t.form.previousDue,o=e.data.total;t.form.totalSalesAmount=parseFloat(o).toFixed(2),t.form.totalBalance=parseFloat(o).toFixed(2),t.form.totalPayable=parseFloat(o).toFixed(2),t.form.currentTotalAmount=parseFloat(o+a).toFixed(2),t.form.currentDue=parseFloat(o+a).toFixed(2),t.loading=!1,t.paymentOption=!0})).catch((function(e){t.loading=!1}))},orderSubmit:function(){var t=this;this.loading=!0;this.form.post("saleOrderReceiveSubmit").then((function(e){Toast.fire({icon:"success",title:"Order Submit Successful."}),t.$router.push("/sales@order@list"),t.loading=!1})).catch((function(e){t.loading=!1,Toast.fire({icon:"error",title:"Something Missing"})}))}}},c=a(0),m=Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"supplier-entry py-4 px-2"},[a("div",{staticClass:"card-body table-responsive bg-white"},[a("table",{staticClass:"table table-hover table-striped table-bordered",staticStyle:{width:"100%"},attrs:{id:"example"}},[a("thead",[a("tr",[a("td",{staticClass:"text-center",attrs:{colspan:"12"}},[a("center",[a("form",{attrs:{method:""},on:{submit:function(e){return e.preventDefault(),t.changeData()}}},[a("table",{},[a("tr",[a("th",[t._v(" Date ")]),t._v(" "),a("th",[t._v(" Supplier ")]),t._v(" "),a("th",[t._v(" Customer ")])]),t._v(" "),a("tr",[a("td",[t._v(" "+t._s(t.moment(t.requisitionInformation.OrderRequestDate).format("YYYY-MM-DD"))+" ")]),t._v(" "),a("td",[t.requisitionInformation.supplier?a("span",[t._v(t._s(t.requisitionInformation.supplier.productSupplierName))]):t._e()]),t._v(" "),a("td",[t.requisitionInformation.customer?a("span",[t._v(t._s(t.requisitionInformation.customer.customerName))]):t._e()])])])])])],1)])])]),t._v(" "),a("table",{staticClass:"table table-bordered table-striped table-hover"},[t._m(1),t._v(" "),a("tbody",t._l(t.productNameLists,(function(e,o){return a("tr",[a("td",[t._v(t._s(++o))]),t._v(" "),a("td",[t._v(t._s(e.productName)+"  ")]),t._v(" "),a("td",[t._v(" "+t._s(parseFloat(e.tpRate).toFixed(2))+" ")]),t._v(" "),a("td",[t._v(t._s(e.perCarton)+"  "+t._s(e.perCartonUnitName)+"  ")]),t._v(" "),a("td",[t._v(t._s(e.cartonRequest)+" ")]),t._v(" "),a("td",[t._v(t._s(e.pieceRequest)+" ")]),t._v(" "),a("td",[t._v(t._s(e.totalPieceRequest)+"  "+t._s(e.perCartonUnitName)+" ")]),t._v(" "),a("td",[t._v(t._s(e.totalPriceRequest)+" Tk ")]),t._v(" "),a("td",[a("input",{attrs:{id:"rendomNumber-"+e.id,type:"hidden"},domProps:{value:e.rendomNumber}}),t._v(" "),a("input",{attrs:{id:"id-"+e.id,type:"hidden"},domProps:{value:e.id}}),t._v(" "),a("input",{attrs:{id:"tpRate-"+e.id,type:"hidden"},domProps:{value:e.tpRate}}),t._v(" "),a("input",{attrs:{id:"purchaseRate-"+e.id,type:"hidden"},domProps:{value:e.purchaseRate}}),t._v(" "),a("input",{attrs:{id:"unit-"+e.id,type:"hidden"},domProps:{value:e.perCartonUnitName}}),t._v(" "),a("input",{attrs:{id:"reqQnt-"+e.id,type:"hidden"},domProps:{value:e.totalPieceRequest}}),t._v(" "),a("input",{attrs:{id:"reqPrice-"+e.id,type:"hidden"},domProps:{value:e.totalPriceRequest}}),t._v(" "),a("input",{staticClass:"form-control carton",staticStyle:{width:"100px"},attrs:{id:"carton-"+e.id,onkeyup:"value=value.replace(/[^0-9^\\.]+/g,'').replace('.','$#$').replace(/\\./g,'').replace('$#$','.')",type:"text"},on:{keyup:function(a){return t.totalCalculate(e.id)},change:function(e){return t.changeData()}}})]),t._v(" "),a("td",[a("input",{staticClass:"form-control pcs",staticStyle:{width:"100px"},attrs:{id:"pcs-"+e.id,onkeyup:"value=value.replace(/[^0-9^\\.]+/g,'').replace('.','$#$').replace(/\\./g,'').replace('$#$','.')",type:"text"},on:{keyup:function(a){return t.totalCalculate1(e.id)},change:function(e){return t.changeData()}}})]),t._v(" "),a("td",[a("span",{attrs:{id:"totalText-"+e.id}}),t._v(" "),a("input",{staticClass:"form-control",staticStyle:{width:"100px"},attrs:{id:"total-"+e.id,type:"hidden"}})]),t._v(" "),a("td",[a("span",{attrs:{id:"totalSaleText-"+e.id}}),t._v(" "),a("input",{staticClass:"form-control",staticStyle:{width:"100px"},attrs:{id:"totalSale-"+e.id,type:"hidden"}})]),t._v(" "),a("td",[a("span",{attrs:{id:"totalSalePriceText-"+e.id}}),t._v(" "),a("input",{staticClass:"form-control",staticStyle:{width:"100px"},attrs:{id:"totalSalePrice-"+e.id,type:"hidden"}}),t._v(" "),a("input",{staticClass:"form-control",staticStyle:{width:"100px"},attrs:{id:"totalPurchasePrice-"+e.id,type:"hidden"}})])])})),0)]),t._v(" "),t.paymentOption?a("div",{staticClass:"product-detail pb-4 alert-success mt-4"},[a("div",{staticClass:"row m-0"},[a("div",{staticClass:"col-lg-6 col-12 p-0 pl-2"},[a("form",{staticClass:"form-row m-0",attrs:{action:"#",method:"post"}},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group m-0 row mt-2"},[t._m(2),t._v(" "),a("div",{staticClass:"col-md-7 col-sm-8 col-12 pl-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.totalBalance,expression:"form.totalBalance"}],staticClass:"form-control",attrs:{type:"text",disabled:"",placeholder:"Gross Amount"},domProps:{value:t.form.totalBalance},on:{input:function(e){e.target.composing||t.$set(t.form,"totalBalance",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group m-0 row mt-2"},[t._m(3),t._v(" "),a("div",{staticClass:"col-md-7 col-sm-8 col-12 pl-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.discountPrice,expression:"form.discountPrice"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Discount",onkeyup:"value=value.replace(/[^0-9^\\.]+/g,'').replace('.','$#$').replace(/\\./g,'').replace('$#$','.').replace(/^0+/, '')"},domProps:{value:t.form.discountPrice},on:{keyup:function(e){return e.preventDefault(),t.calculateAllDiscount()},input:function(e){e.target.composing||t.$set(t.form,"discountPrice",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group m-0 row mt-2"},[t._m(4),t._v(" "),a("div",{staticClass:"col-md-7 col-sm-8 col-12 pl-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.totalVat,expression:"form.totalVat"}],staticClass:"form-control",attrs:{type:"text",disabled:"",placeholder:"Total VAT"},domProps:{value:t.form.totalVat},on:{input:function(e){e.target.composing||t.$set(t.form,"totalVat",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group m-0 row mt-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.vatCalculate,expression:"form.vatCalculate"}],staticClass:"form-control",attrs:{type:"hidden",placeholder:"Total Payable"},domProps:{value:t.form.vatCalculate},on:{input:function(e){e.target.composing||t.$set(t.form,"vatCalculate",e.target.value)}}}),t._v(" "),t._m(5),t._v(" "),a("div",{staticClass:"col-lg-7 col-md-6 col-sm-8 col-12 pl-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.totalPayable,expression:"form.totalPayable"}],staticClass:"form-control",attrs:{type:"text",disabled:"",placeholder:"Sub Total"},domProps:{value:t.form.totalPayable},on:{input:function(e){e.target.composing||t.$set(t.form,"totalPayable",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group m-0 row mt-2"},[t._m(6),t._v(" "),a("div",{staticClass:"col-lg-7 col-md-6 col-sm-8 col-12 pl-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.previousDue,expression:"form.previousDue"}],staticClass:"form-control",attrs:{type:"text",disabled:"",placeholder:"Previous Due"},domProps:{value:t.form.previousDue},on:{input:function(e){e.target.composing||t.$set(t.form,"previousDue",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group m-0 row mt-2"},[t._m(7),t._v(" "),a("div",{staticClass:"col-lg-7 col-md-6 col-sm-8 col-12 pl-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.limitDueAmountShow,expression:"form.limitDueAmountShow"}],staticClass:"form-control",attrs:{type:"text",disabled:"",placeholder:"0"},domProps:{value:t.form.limitDueAmountShow},on:{input:function(e){e.target.composing||t.$set(t.form,"limitDueAmountShow",e.target.value)}}})])])])])]),t._v(" "),a("div",{staticClass:"col-lg-6 col-md-6 col-12 px-3 float-right",staticStyle:{"border-left":"3px solid #c8cac8"}},[1==t.guestInfo?a("div",{staticClass:"modal-body pt-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 col-xs-12"},[a("div",{staticClass:"form-group m-0 row mt-2"},[t._m(8),t._v(" "),t._m(9),t._v(" "),a("div",{staticClass:"col-lg-7 col-md-7 col-sm-8 col-12 pl-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.currentTotalAmount,expression:"form.currentTotalAmount"}],staticClass:"form-control",attrs:{type:"text",disabled:"",placeholder:"Grand Total"},domProps:{value:t.form.currentTotalAmount},on:{input:function(e){e.target.composing||t.$set(t.form,"currentTotalAmount",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group m-0 row mt-2"},[t._m(10),t._v(" "),a("div",{staticClass:"col-lg-7 col-md-7 col-sm-8 col-12 pl-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.currentPaidAmount,expression:"form.currentPaidAmount"}],staticClass:"form-control noscroll",attrs:{type:"text",onkeyup:"value=value.replace(/[^0-9^\\.]+/g,'').replace('.','$#$').replace(/\\./g,'').replace('$#$','.').replace(/^0+/, '').replace('-', '')",autocomplete:"off",placeholder:"Cash Amount"},domProps:{value:t.form.currentPaidAmount},on:{keyup:function(e){return t.cashBankCalculate(1)},input:function(e){e.target.composing||t.$set(t.form,"currentPaidAmount",e.target.value)}}}),t._v(" "),1==t.negative?a("span",{staticStyle:{color:"red"}},[t._v(" Negative Amount Not Allowed ")]):t._e()])]),t._v(" "),a("div",{staticClass:"form-group m-0 row mt-2"},[t._m(11),t._v(" "),a("div",{staticClass:"col-lg-7 col-md-7 col-sm-8 col-12 pl-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.currentDue,expression:"form.currentDue"}],staticClass:"form-control",attrs:{type:"text",disabled:"",placeholder:"Cash Amount"},domProps:{value:t.form.currentDue},on:{input:function(e){e.target.composing||t.$set(t.form,"currentDue",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 col-xs-12 p-0"},[0==t.morepay?a("button",{staticClass:"btn btn-info",on:{click:function(e){return e.preventDefault(),t.open()}}},[a("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}}),t._v(" More\n                            pay\n                          ")]):t._e(),t._v(" "),1==t.close?a("button",{staticClass:"btn btn-danger",on:{click:function(e){return e.preventDefault(),t.closeForm()}}},[a("i",{staticClass:"fa fa-minus",attrs:{"aria-hidden":"true"}}),t._v(" Close\n                          ")]):t._e(),t._v(" "),t.morepay?a("div",[a("div",{staticClass:"row border-bottom text-center"},[a("label",[t._v(" Bank Payment ")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.senderbankTypeEntryId,expression:"form.senderbankTypeEntryId"}],staticClass:"form-control mt-2",class:{"is-invalid":t.form.errors.has("bankTypeEntryId")},attrs:{name:"bankTypeEntryId"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"senderbankTypeEntryId",e.target.multiple?a:a[0])},function(e){return e.preventDefault(),t.senderBankTypeIdCatch()}]}},[a("option",{attrs:{value:""}},[t._v(" --------- ")]),t._v(" "),t._l(t.showBankTypeDatas,(function(e){return a("option",{domProps:{value:e.bankTypeEntryId}},[t._v("\n                                  "+t._s(e.bankTypeEntryName)+"\n                                ")])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"bankTypeEntryId"}})],1),t._v(" "),t.fromshow?a("div",[t.bankAccount?a("div",{staticClass:"border border-success p-2 mt-3",staticStyle:{position:"relative"}},[a("label",{staticClass:"text-center alert-success",staticStyle:{position:"absolute",top:"-17px"}},[t._v("      Sender Information      ")]),t._v(" "),a("div",{staticClass:"form-group mt-2"},[a("span",[t._v(" Bank Name ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.senderBankName,expression:"form.senderBankName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.senderBankName},on:{input:function(e){e.target.composing||t.$set(t.form,"senderBankName",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("span",[t._v(" A/C Name ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.senderAcName,expression:"form.senderAcName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.senderAcName},on:{input:function(e){e.target.composing||t.$set(t.form,"senderAcName",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("span",[t._v(" A/C No ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.senderAcNo,expression:"form.senderAcNo"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.senderAcNo},on:{input:function(e){e.target.composing||t.$set(t.form,"senderAcNo",e.target.value)}}})])]):t._e(),t._v(" "),t.bankCardAccount?a("div",{staticClass:"border border-success p-2 mt-3",staticStyle:{position:"relative"}},[a("label",{staticClass:"text-center alert-success",staticStyle:{position:"absolute",top:"-17px"}},[t._v("      Sender Information      ")]),t._v(" "),a("div",{staticClass:"form-group mt-2"},[a("span",[t._v(" Bank Name ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.senderBankName,expression:"form.senderBankName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.senderBankName},on:{input:function(e){e.target.composing||t.$set(t.form,"senderBankName",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("span",[t._v("  Card No ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.senderAcNo,expression:"form.senderAcNo"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.senderAcNo},on:{input:function(e){e.target.composing||t.$set(t.form,"senderAcNo",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("span",[t._v(" Cardholder Name ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.senderAcName,expression:"form.senderAcName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.senderAcName},on:{input:function(e){e.target.composing||t.$set(t.form,"senderAcName",e.target.value)}}})])]):t._e(),t._v(" "),t.mobileAccount?a("div",{staticClass:"border border-success p-2 mt-3",staticStyle:{position:"relative"}},[a("label",{staticClass:"text-center alert-success",staticStyle:{position:"absolute",top:"-17px"}},[t._v("Sender Information")]),t._v(" "),a("div",{staticClass:"form-group mt-2"},[t._m(12),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.senderMobileAcNo,expression:"form.senderMobileAcNo"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.senderMobileAcNo},on:{input:function(e){e.target.composing||t.$set(t.form,"senderMobileAcNo",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("span",[t._v(" Trx No ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.senderTrxNo,expression:"form.senderTrxNo"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.senderTrxNo},on:{input:function(e){e.target.composing||t.$set(t.form,"senderTrxNo",e.target.value)}}})])]):t._e(),t._v(" "),a("div",{staticClass:"border border-success p-2 mt-3",staticStyle:{position:"relative"}},[a("label",{staticClass:"text-center alert-success",staticStyle:{position:"absolute",top:"-17px"}},[t._v("Receiver Information")]),t._v(" "),a("div",{staticClass:"form-group mt-2"},[a("span",[t._v("Bank Type Name")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.receiverbankTypeEntryId,expression:"form.receiverbankTypeEntryId"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("bankTypeEntryId")},attrs:{disabled:"",name:"bankTypeEntryId"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"receiverbankTypeEntryId",e.target.multiple?a:a[0])},function(e){return e.preventDefault(),t.bankTypeIdCatch()}]}},[a("option",{attrs:{value:""}},[t._v("Select One")]),t._v(" "),t._l(t.showBankTypeDatas,(function(e){return a("option",{domProps:{value:e.bankTypeEntryId}},[t._v("\n                                    "+t._s(e.bankTypeEntryName)+"\n                                  ")])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"bankTypeEntryId"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("span",[t._v(" Bank Name")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.receiverbankEntryId,expression:"form.receiverbankEntryId"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("bankEntryId")},attrs:{name:"bankEntryId"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"receiverbankEntryId",e.target.multiple?a:a[0])},function(e){return e.preventDefault(),t.bankAccountIdCatch()}]}},[a("option",{attrs:{value:""}},[t._v("Select Bank Name")]),t._v(" "),t._l(t.showBankNames,(function(e){return a("option",{domProps:{value:e.bankEntryId}},[t._v("\n                                    "+t._s(e.bankName)+"\n                                  ")])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"bankEntryId"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("span",[t._v("  Account No")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.receiverbankAccountId,expression:"form.receiverbankAccountId"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("bankAccountId")},attrs:{name:"bankAccountId"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"receiverbankAccountId",e.target.multiple?a:a[0])},function(e){return t.getBankMoreInfo()}]}},[a("option",{attrs:{value:""}},[t._v("Select Bank Account")]),t._v(" "),t._l(t.showBankAccounts,(function(e){return a("option",{domProps:{value:e.bankId}},[e.bankAccountName?a("span",[t._v("\n                                      "+t._s(e.bankAccountName)+"\n                                    ")]):a("span",[t._v("\n                                      "+t._s(e.bankAccountNumber)+"\n                                    ")])])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"bankAccountId"}})],1),t._v(" "),t.bankInformationAccountInfoStatus?a("div",[a("div",{staticClass:"form-group",staticStyle:{display:"none"}},[a("span",[t._v("  Branch Name ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.receiverbranchName,expression:"form.receiverbranchName"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.form.receiverbranchName},on:{input:function(e){e.target.composing||t.$set(t.form,"receiverbranchName",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("span",[t._v("  Account No ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.receiverAccNo,expression:"form.receiverAccNo"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.form.receiverAccNo},on:{input:function(e){e.target.composing||t.$set(t.form,"receiverAccNo",e.target.value)}}})])]):t._e()]),t._v(" "),a("div",{staticClass:"form-group m-0 row mt-2"},[t._m(13),t._v(" "),a("div",{staticClass:"col-lg-7 col-md-6 col-sm-8 col-12 pl-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mobileAmount,expression:"form.mobileAmount"}],staticClass:"form-control noscroll",attrs:{type:"text",onkeyup:"value=Math.abs(value.replace(/[^0-9^\\.]+/g,'').replace('.','$#$').replace(/\\./g,'').replace('$#$','.').replace(/^0+/, ''))",autocomplete:"off",placeholder:"Bank Amount"},domProps:{value:t.form.mobileAmount},on:{keyup:function(e){return t.cashBankCalculate(2)},input:function(e){e.target.composing||t.$set(t.form,"mobileAmount",e.target.value)}}}),t._v(" "),1==t.negative?a("span",{staticStyle:{color:"red"}},[t._v(" Negative Amount Not Allowed ")]):t._e()])]),t._v(" "),a("div",{staticClass:"form-group m-0 row mt-2"},[t._m(14),t._v(" "),a("div",{staticClass:"col-lg-7 col-md-6 col-sm-8 col-12 pl-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.currentDue,expression:"form.currentDue"}],staticClass:"form-control",attrs:{type:"text",disabled:"",placeholder:"Cash Amount"},domProps:{value:t.form.currentDue},on:{input:function(e){e.target.composing||t.$set(t.form,"currentDue",e.target.value)}}})])])]):t._e(),t._v(" "),a("div",{staticClass:"row p-0 mt-2"},[1==t.dueLimitMessage?a("span",{staticClass:"badge badge-danger pl-2 pr-2"},[t._v(" Due Limit Exit.\n                          ")]):t._e(),t._v(" "),1==t.generalCustomerDueMessage?a("span",{staticClass:"badge badge-danger pl-2 pr-2"},[t._v(" General customer due not allow.\n                            ")]):t._e()]),t._v(" "),a("div",{staticClass:"row p-0"},[a("div",{staticClass:"col-6 p-0"}),t._v(" "),a("div",{staticClass:"col-6 p-0"},[0==t.paynow1?a("span",[t._m(15)]):t._e(),t._v(" "),1==t.paynow1?a("span",[a("button",{staticClass:"\n                              mt-3\n                              btn-pill btn-shadow \n                              fsize-1\n                              btn btn-primary float-right\n                            ",attrs:{type:"button",disabled:t.loading},on:{click:function(e){return e.preventDefault(),t.orderSubmit()}}},[t.loading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):a("span",{staticClass:"mr-2 opacity-7"},[a("i",{staticClass:"fa fa-paper-plane"})]),t._v(" "),a("span",{staticClass:"mr-1"},[t._v(" Submit ")])])]):t._e()])])]):t._e()])]),t._v(" "),a("center")],1):t._e(),t._v(" "),0==t.guestInfo?a("div",{staticClass:"col-lg-6 col-md-6 col-12"},[a("div",{staticClass:"due-bal"},[a("label",{attrs:{for:""}},[t._v(" Customer Name ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.guestCustomerName,expression:"form.guestCustomerName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Guest Customer Name"},domProps:{value:t.form.guestCustomerName},on:{input:function(e){e.target.composing||t.$set(t.form,"guestCustomerName",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"due-bal"},[a("label",{attrs:{for:""}},[t._v(" Mobile No ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.guestCustomerPhone,expression:"form.guestCustomerPhone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Guest Customer Phone"},domProps:{value:t.form.guestCustomerPhone},on:{input:function(e){e.target.composing||t.$set(t.form,"guestCustomerPhone",e.target.value)}}})]),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-success float-right",on:{click:function(e){return e.preventDefault(),t.salesInvoiceEntryPending()}}},[t._v("\n                    Add\n                  ")]),t._v(" "),a("button",{staticClass:"btn btn-danger float-left",on:{click:function(e){return e.preventDefault(),t.salesInvoicePendingCancel()}}},[t._v("\n                    Cancel\n                  ")])]):t._e(),t._v(" "),0==t.paynow?a("span",[a("span",{staticStyle:{color:"red"}},[t._v("Due Limit Is Over")]),t._v(" "),a("button",{staticClass:"mt-3 ml-2 btn btn-warning",attrs:{type:"button",disabled:""},on:{click:function(e){return e.preventDefault(),t.salesInvoiceEntry()}}},[t._m(16),t._v(" "),a("span",{staticClass:"mr-1"},[t._v(" Pay Now 1")])])]):t._e()])])]):t._e()])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header-tab card-header alert-info"},[e("h4",[e("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-premium-dark"}),this._v("\n          Sales Order view ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{rowspan:"2"}},[t._v("SL")]),t._v(" "),a("th",{attrs:{rowspan:"2"}},[t._v("Product Name")]),t._v(" "),a("th",{attrs:{rowspan:"2"}},[t._v("T.P Rate")]),t._v(" "),a("th",{attrs:{rowspan:"2"}},[t._v(" Carton or Cais ")]),t._v(" "),a("th",{staticClass:"text-center",attrs:{colspan:"4"}},[t._v(" Receive ")]),t._v(" "),a("th",{staticClass:"text-center",attrs:{colspan:"3"}},[t._v(" Return ")]),t._v(" "),a("th",{attrs:{rowspan:"2"}},[t._v(" Total Sale  ")]),t._v(" "),a("th",{attrs:{rowspan:"2"}},[t._v(" Sales Price ")])]),t._v(" "),a("tr",[a("th",[t._v("Carton")]),t._v(" "),a("th",[t._v("PCs")]),t._v(" "),a("th",[t._v("T.Qnt")]),t._v(" "),a("th",[t._v("T.Price")]),t._v(" "),a("th",[t._v("Good")]),t._v(" "),a("th",[t._v("Damaged")]),t._v(" "),a("th",[t._v("Total")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-5 col-sm-5 col-12 pl-0"},[e("p",[this._v(" Gross Amount ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-5 col-sm-5 col-12 pl-0"},[e("p",[this._v("Less(tk)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-5 col-sm-5 col-12 pl-0"},[e("p",[this._v("VAT")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-4 col-md-6 col-sm-4 col-12 pl-0"},[e("p",[this._v("Sub Total")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-4 col-md-6 col-sm-4 col-12 pl-0"},[e("p",[this._v("Pre.Due")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-4 col-md-6 col-sm-4 col-12 pl-0"},[e("p",[this._v("Due.Limit")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 pl-0 border-bottom text-center mb-2"},[e("label",[this._v(" Cash Payment ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-5 col-md-5 col-sm-4 col-12 pl-0"},[e("p",[this._v("Grand Total  ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-5 col-md-5 col-sm-4 col-12 pl-0"},[e("p",[this._v("Cash ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-5 col-md-5 col-sm-4 col-12 pl-0"},[e("p",[this._v("Due ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v(" Mobile A/C No\n                                    "),e("i",{staticClass:"\n                                        fa fa-star\n                                        text-danger text-10\n                                        cursor-pointer\n                                      ",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-4 col-md-6 col-sm-4 col-12 pl-0"},[e("label",[this._v("Amount ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-4 col-md-6 col-sm-4 col-12 pl-0"},[e("label",[this._v(" Due ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"\n                              mt-3\n                              btn-pill btn-shadow \n                              fsize-1\n                              btn btn-primary float-right\n                            ",attrs:{type:"button",disabled:""}},[e("span",{staticClass:"mr-2 opacity-7"},[e("i",{staticClass:"fa fa-paper-plane"})]),this._v(" "),e("span",{staticClass:"mr-1"},[this._v(" Submit ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"mr-2 opacity-7"},[e("i",{staticClass:"fa fa-paper-plane"})])}],!1,null,null,null);e.default=m.exports}}]);