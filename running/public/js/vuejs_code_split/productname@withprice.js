(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{617:function(t,a,s){"use strict";s.r(a);var e={data:function(){return{purchaseProductReports:{},modelNo:{},batchNo:{},qrCode:{},mfgLicenseNO:{},warranty:{},selectMothOrYearWarranty:{},guarantee:{},selectMothOrYearGuarantee:{},mfgDate:{},expiryDate:{},tax:{},taxAmount:{},taxAmountType:{},quantityType:{},quantityNoti:{},proDescription:{},proAdvantage:{},salesProductPriceReports:{},role:{},shopProductBrandLists:[],priceLists:[],colorLists:[],sizeLists:[],salesUnitListHistorys:[],unitNameShows:[],priceTypeLists:[]}},props:{limit:{type:Number,default:2}},mounted:function(){this.productPriceSetupList(),this.getPaginateList(),this.conditon(),this.colorList(),this.sizeList(),this.unitNameShow(),this.priceType()},methods:{salesUnitListHistory:function(t,a,s,e){var i=this;axios.get("/ProductSalePriceInfo/"+t+"/"+a+"/"+s+"/"+e).then((function(t){i.salesUnitListHistorys=t.data.salesProductPrice}))},priceType:function(){var t=this;axios.get("/salesPriceType").then((function(a){t.priceTypeLists=a.data.salesPriceTypes}))},unitNameShow:function(){var t=this;axios.get("/unitNameShow").then((function(a){t.unitNameShows=a.data.unitNameShow}))},colorList:function(){var t=this;axios.get("/colorListAll/").then((function(a){t.colorLists=a.data.colorList}))},sizeList:function(){var t=this;axios.get("/sizeListAll/").then((function(a){t.sizeLists=a.data.sizeList}))},productPriceSetupList:function(){var t=this;axios.get("/inventoryProductNameWithPrice").then((function(a){t.salesProductPriceReports=a.data.salesProductPriceReports}))},getPaginateList:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("/inventoryProductNameWithPrice?page="+a).then((function(a){t.salesProductPriceReports=a.data.salesProductPriceReports}))},purchaseProductIdCatch:function(t){var a=this;this.modelNo="",this.batchNo="",this.qrCode="",this.mfgLicenseNO="",this.warranty="",this.selectMothOrYearWarranty="",this.guarantee="",this.selectMothOrYearGuarantee="",this.mfgDate="",this.expiryDate="",this.tax="",this.taxAmount="",this.taxAmountType="",this.quantityType="",this.quantityNoti="",this.proDescription="",this.proAdvantage="",axios.get("/stockSummaryProductDetails/"+t).then((function(t){a.modelNo=t.data.purchaseProductDetails.modelNo,a.batchNo=t.data.purchaseProductDetails.batchNo,a.qrCode=t.data.purchaseProductDetails.qrCode,a.mfgLicenseNO=t.data.purchaseProductDetails.mfgLicenseNO,a.warranty=t.data.purchaseProductDetails.warranty,a.selectMothOrYearWarranty=t.data.purchaseProductDetails.selectMothOrYearWarranty,a.guarantee=t.data.purchaseProductDetails.guarantee,a.selectMothOrYearGuarantee=t.data.purchaseProductDetails.selectMothOrYearGuarantee,a.mfgDate=t.data.purchaseProductDetails.mfgDate,a.expiryDate=t.data.purchaseProductDetails.expiryDate,a.tax=t.data.purchaseProductDetails.tax,a.taxAmount=t.data.purchaseProductDetails.taxAmount,a.taxAmountType=t.data.purchaseProductDetails.taxAmountType,a.quantityType=t.data.purchaseProductDetails.quantityType,a.quantityNoti=t.data.purchaseProductDetails.quantityNoti,a.proDescription=t.data.purchaseProductDetails.proDescription,a.proAdvantage=t.data.purchaseProductDetails.proAdvantage}))},history:function(t){var a=this;axios.get("/priceUpdateHistory/"+t).then((function(t){a.priceLists=t.data.historyGet}))},conditon:function(){var t=this;axios.get("/condition").then((function(a){t.role=a.data.authInfo}))}}},i=s(0),r=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",[1!=t.role.role&&2!=t.role.role?s("div",{staticClass:"card main-card  element-block-example"},[t._m(0),t._v(" "),s("div",{staticClass:"table-responsive bg-white"},[s("table",{staticClass:"table table-hover table-bordered table-striped"},[t._m(1),t._v(" "),s("tbody",t._l(t.salesProductPriceReports.data,(function(a,e){return s("tr",[s("td",[t._v(t._s(e+1))]),t._v(" "),s("td",[t._v(t._s(a.product_name.productName)+" ("+t._s(a.product_name.productCode)+")")]),t._v(" "),a.brandname?s("td",[t._v(t._s(a.brandname.productBrandName))]):t._e(),t._v(" "),s("td",t._l(t.colorLists,(function(e){return e.id==a.colorId?s("span",[t._v(t._s(e.colorName))]):t._e()})),0),t._v(" "),s("td",t._l(t.sizeLists,(function(e){return e.id==a.sizeId?s("span",[t._v("  "+t._s(e.sizeName))]):t._e()})),0),t._v(" "),s("td",[s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#exampleModalUnit"},on:{click:function(s){return t.salesUnitListHistory(a.productId,a.brandId,a.colorId,a.sizeId)}}},[t._v(" "+t._s(a.unit.uniteEntryName)+" ")])]),t._v(" "),s("td",[t._v(t._s(a.mrpPrice))]),t._v(" "),s("td",[t._v(t._s(a.salesPrice))]),t._v(" "),s("td",[t._v(t._s(a.wholesalePrice))]),t._v(" "),s("td",[t._v(t._s(a.specialPrice))]),t._v(" "),s("td",[t._v(t._s(a.eCommercePrice))]),t._v(" "),s("td",[t._v(t._s(a.created_at))]),t._v(" "),s("td",[s("button",{staticClass:"mr-2 btn-hover-shine btn btn-shadow btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#purchaseProductId"+a.purchaseProductId},on:{click:function(s){return t.purchaseProductIdCatch(a.purchaseProductId)}}},[s("i",{staticClass:" fa fa-eye pr-2"}),t._v(" Product Details\n                   ")])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"purchaseProductId"+a.purchaseProductId,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(2,!0),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(3,!0),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(t.modelNo))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(4,!0),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(t.batchNo))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(5,!0),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(t.qrCode))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(6,!0),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(t.mfgLicenseNO))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(7,!0),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[1==t.selectMothOrYearWarranty?s("span",[t._v("\n                                           "+t._s(1*t.warranty)+" Day\n                                       ")]):t._e(),t._v(" "),2==t.selectMothOrYearWarranty?s("span",[t._v("\n                                           "+t._s(30*t.warranty)+" Day\n                                       ")]):t._e(),t._v(" "),3==t.selectMothOrYearWarranty?s("span",[t._v("\n                                           "+t._s(12*t.warranty*30)+" Day\n                                       ")]):t._e()])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(8,!0),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[1==t.selectMothOrYearGuarantee?s("span",[t._v("\n                                           "+t._s(1*t.guarantee)+" Day\n                                       ")]):t._e(),t._v(" "),2==t.selectMothOrYearGuarantee?s("span",[t._v("\n                                           "+t._s(30*t.guarantee)+" Day\n                                       ")]):t._e(),t._v(" "),3==t.selectMothOrYearGuarantee?s("span",[t._v("\n                                           "+t._s(12*t.guarantee*30)+" Day\n                                       ")]):t._e()])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(9,!0),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(t.mfgDate))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(10,!0),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(t.expiryDate))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(11,!0),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(t.tax))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(12,!0),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(t.taxAmount)+" "+t._s(1==t.taxAmountType?"Taka":"")+" "+t._s(2==t.taxAmountType?"Percetage":""))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(13,!0),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(1==t.quantityType?"Low":"")+" "+t._s(2==t.quantityType?"Medium":"")+" "+t._s(3==t.quantityType?"High":""))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(14,!0),t._v(" "),s("span",{staticClass:"col-6 p-0"},[s("h6",[t._v(t._s(t.quantityNoti))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(15,!0),t._v(" "),s("span",{staticClass:"col-8 p-0"},[s("h6",[t._v(t._s(t.proDescription))])])])]),t._v(" "),s("div",{staticClass:"col-12 pl-0 pt-2 border"},[s("div",{staticClass:"row m-0"},[t._m(16,!0),t._v(" "),s("span",{staticClass:"col-8 p-0"},[s("h6",[t._v(t._s(t.proAdvantage))])])])])]),t._v(" "),t._m(17,!0)])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"purchaseProductId2"+a.purchaseProductId,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(18,!0),t._v(" "),s("div",{staticClass:"modal-boday"},[s("div",{staticClass:"card mt-5"},[t._m(19,!0),t._v(" "),s("div",{staticClass:"table-responsive bg-white"},[s("table",{staticClass:"table table-hover table-bordered table-striped"},[t._m(20,!0),t._v(" "),t._l(t.priceLists,(function(a,e){return s("tbody",{key:a.id},[0==e?s("tr",{staticStyle:{background:"#beeeac"}},[s("td",[t._v(t._s(e+1))]),t._v(" "),s("td",[t._v(t._s(a.mrpPrice))]),t._v(" "),s("td",[t._v(t._s(a.salesPrice))]),t._v(" "),s("td",[t._v(t._s(a.wholesalePrice))]),t._v(" "),s("td",[t._v(t._s(a.specialPrice))]),t._v(" "),s("td",[t._v(t._s(a.eCommercePrice))]),t._v(" "),s("td",[t._v(t._s(a.created_at))])]):s("tr",[s("td",[t._v(t._s(e+1))]),t._v(" "),s("td",[t._v(t._s(a.mrpPrice))]),t._v(" "),s("td",[t._v(t._s(a.salesPrice))]),t._v(" "),s("td",[t._v(t._s(a.wholesalePrice))]),t._v(" "),s("td",[t._v(t._s(a.specialPrice))]),t._v(" "),s("td",[t._v(t._s(a.eCommercePrice))]),t._v(" "),s("td",[t._v(t._s(a.created_at))])])])}))],2)])])]),t._v(" "),t._m(21,!0)])])])])})),0)])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"exampleModalUnit",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(22),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"table-responsive bg-white"},[s("table",{staticClass:"table table-hover table-bordered table-striped"},[t._m(23),t._v(" "),s("tbody",t._l(t.salesUnitListHistorys,(function(a){return s("tr",{style:"background:"+a.color},[s("td",t._l(t.priceTypeLists,(function(e){return e.salesPriceTypeId==a.priceTypeId?s("span",[t._v(" "+t._s(e.salesPriceType)+" ")]):t._e()})),0),t._v(" "),s("td",t._l(t.unitNameShows,(function(e){return e.uniteEntryId==a.unitId?s("span",[t._v(" "+t._s(e.uniteEntryName)+" ")]):t._e()})),0),t._v(" "),s("td",[t._v(t._s(a.salesUnitPrice))])])})),0)])])]),t._v(" "),t._m(24)])])]),t._v(" "),s("span",{staticClass:"card_footer"},[s("pagination",{attrs:{data:t.salesProductPriceReports,limit:t.limit},on:{"pagination-change-page":t.getPaginateList}},[s("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("< Previous")]),t._v(" "),s("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next >")])])],1)]):t._e()])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header",staticStyle:{"background-color":"rgb(1, 176, 241)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[a("h3",{staticStyle:{color:"black"}},[this._v("Product Name With Price")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",{staticStyle:{background:"rgba(242, 242, 242, 0.47)"}},[s("th",[t._v("SN")]),t._v(" "),s("th",[t._v("Product.Name")]),t._v(" "),s("th",[t._v("Brand")]),t._v(" "),s("th",[t._v("Color")]),t._v(" "),s("th",[t._v("Size")]),t._v(" "),s("th",[t._v("Unit")]),t._v(" "),s("th",[t._v("MRP.Price")]),t._v(" "),s("th",[t._v("Sales.Price")]),t._v(" "),s("th",[t._v("Wholesale.Price")]),t._v(" "),s("th",[t._v("Special.Price")]),t._v(" "),s("th",[t._v("E-Commerce.Price")]),t._v(" "),s("th",[t._v("Created.Date")]),t._v(" "),s("th",[t._v("Action")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header bg-primary text-light"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[this._v("Product Detalis")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Mdoel Name :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Batch Name :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("QR Code :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Mfg License NO :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Warranty :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Guarantee :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Mfg Date :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Expiry Date :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Tax :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Tax Amount :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Quantity Type :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Quantity Notification :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Product Description :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"col-3 pr-0"},[a("h6",[this._v("Product Advantage :")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-hover-shine btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header bg-primary text-light"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[this._v("Product Price Setup History")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header",staticStyle:{"background-color":"rgb(1, 176, 241)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[a("h3",{staticStyle:{color:"black"}},[this._v("Sales Product Price Update History")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",[t._v("SN")]),t._v(" "),s("th",[t._v("MRP Price")]),t._v(" "),s("th",[t._v("Sales Price")]),t._v(" "),s("th",[t._v("Wholesale Price")]),t._v(" "),s("th",[t._v("Special Price")]),t._v(" "),s("th",[t._v("E-Commerce Price")]),t._v(" "),s("th",[t._v("Updated Date")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-hover-shine btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[this._v("Modal title")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",[this._v("Price Type")]),this._v(" "),a("th",[this._v("Unit")]),this._v(" "),a("th",[this._v("Unit Price")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[this._v(" Close ")])])}],!1,null,null,null);a.default=r.exports}}]);