(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{674:function(t,e,o){"use strict";o.r(e);var a={data:function(){return{category:{},subcategory:{},thirdCategory:{},foreCategory:{},fiveCategory:{},sixCategory:{},sevenCategory:{},eightCategory:{},nineCategory:{},tenCategory:{},globalCategoryCount:{},globalSubcategoryCount:{},globalThirdCategoryCount:{},globalForeCategoryCount:{},globalFiveCategoryCount:{},globalSixCategoryCount:{},globalSevenCategoryCount:{},globalEightCategoryCount:{},globalNineCategoryCount:{},globalTenCategoryCount:{}}},props:{limit:{type:Number,default:2}},mounted:function(){this.assetCategoryListShow()},methods:{assetCategoryListShow:function(){var t=this;axios.get("/shopAssetCategoryReportOwner").then((function(e){t.category=e.data.category,t.subcategory=e.data.subcategory,t.thirdCategory=e.data.thirdCategory,t.foreCategory=e.data.foreCategory,t.fiveCategory=e.data.fiveCategory,t.sixCategory=e.data.sixCategory,t.sevenCategory=e.data.sevenCategory,t.eightCategory=e.data.eightCategory,t.nineCategory=e.data.nineCategory,t.tenCategory=e.data.tenCategory})),axios.get("/shopAssetCategoryReportGlobal").then((function(e){t.globalCategoryCount=e.data.globalCategoryCount,t.globalSubcategoryCount=e.data.globalSubcategoryCount,t.globalThirdCategoryCount=e.data.globalThirdCategoryCount,t.globalForeCategoryCount=e.data.globalForeCategoryCount,t.globalFiveCategoryCount=e.data.globalFiveCategoryCount,t.globalSixCategoryCount=e.data.globalSixCategoryCount,t.globalSevenCategoryCount=e.data.globalSevenCategoryCount,t.globalEightCategoryCount=e.data.globalEightCategoryCount,t.globalNineCategoryCount=e.data.globalNineCategoryCount,t.globalTenCategoryCount=e.data.globalTenCategoryCount}))}}},r=o(0),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",[o("div",{staticClass:"card main-card  element-block-example"},[t._m(0),t._v(" "),o("div",{staticClass:"table-responsive bg-white p-3"},[o("table",{staticClass:"table table-hover table-striped table-bordered"},[t._m(1),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Owner")]),t._v(" "),o("td",[o("div",{staticClass:"mr-1 float-left display-inline-css"},[0!=t.category?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@ownerreport1"}},[t._v("Category ("+t._s(t.category)+")")]):t._e(),t._v(" "),0!=t.subcategory?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@ownerreport2"}},[t._v("Sub Category ("+t._s(t.subcategory)+")")]):t._e(),t._v(" "),0!=t.thirdCategory?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@ownerreport3"}},[t._v("Third Category ("+t._s(t.thirdCategory)+")")]):t._e(),t._v(" "),0!=t.foreCategory?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@ownerreport4"}},[t._v("Four Category ("+t._s(t.foreCategory)+")")]):t._e(),t._v(" "),0!=t.fiveCategory?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@ownerreport5"}},[t._v("Five Category ("+t._s(t.fiveCategory)+")")]):t._e(),t._v(" "),0!=t.sixCategory?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@ownerreport6"}},[t._v("Six Category ("+t._s(t.sixCategory)+")")]):t._e(),t._v(" "),0!=t.sevenCategory?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@ownerreport7"}},[t._v("Seven Category ("+t._s(t.sevenCategory)+")")]):t._e(),t._v(" "),0!=t.eightCategory?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@ownerreport8"}},[t._v("Eight Category ("+t._s(t.eightCategory)+")")]):t._e(),t._v(" "),0!=t.nineCategory?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@ownerreport9"}},[t._v("Nine Category ("+t._s(t.nineCategory)+")")]):t._e(),t._v(" "),0!=t.tenCategory?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@ownerreport10"}},[t._v("Ten Category ("+t._s(t.tenCategory)+")")]):t._e()],1)])]),t._v(" "),o("tr",[o("td",[t._v("Global")]),t._v(" "),o("td",[o("div",{staticClass:"mr-1 float-left display-inline-css"},[0!=t.globalCategoryCount?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@globalreport1"}},[t._v("Category ("+t._s(t.globalCategoryCount)+")")]):t._e(),t._v(" "),0!=t.globalSubcategoryCount?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@globalreport2"}},[t._v("Sub Category ("+t._s(t.globalSubcategoryCount)+")")]):t._e(),t._v(" "),0!=t.globalThirdCategoryCount?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@globalreport3"}},[t._v("Third Category ("+t._s(t.globalThirdCategoryCount)+")")]):t._e(),t._v(" "),0!=t.globalForeCategoryCount?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@globalreport4"}},[t._v("Four Category ("+t._s(t.globalForeCategoryCount)+")")]):t._e(),t._v(" "),0!=t.globalFiveCategoryCount?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@globalreport5"}},[t._v("Five Category ("+t._s(t.globalFiveCategoryCount)+")")]):t._e(),t._v(" "),0!=t.globalSixCategoryCount?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@globalreport6"}},[t._v("Six Category ("+t._s(t.globalSixCategoryCount)+")")]):t._e(),t._v(" "),0!=t.globalSevenCategoryCount?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@globalreport7"}},[t._v("Seven Category ("+t._s(t.globalSevenCategoryCount)+")")]):t._e(),t._v(" "),0!=t.globalEightCategoryCount?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@globalreport8"}},[t._v("Eight Category ("+t._s(t.globalEightCategoryCount)+")")]):t._e(),t._v(" "),0!=t.globalNineCategoryCount?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@globalreport9"}},[t._v("Nine Category ("+t._s(t.globalNineCategoryCount)+")")]):t._e(),t._v(" "),0!=t.globalTenCategoryCount?o("router-link",{staticClass:"btn-hover-shine btn-success",attrs:{to:"/assetcategory@globalreport10"}},[t._v("Ten Category ("+t._s(t.globalTenCategoryCount)+")")]):t._e()],1)])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",[e("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"}),this._v("Asset Category Report")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",{staticClass:"alert-info"},[e("th",[this._v("Type")]),this._v(" "),e("th",[this._v("Asset Category")])])])}],!1,null,null,null);e.default=s.exports}}]);