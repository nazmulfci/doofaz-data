(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{616:function(t,e,r){"use strict";r.r(e);var a={data:function(){return{productNameLists:{}}},props:{limit:{type:Number,default:2}},mounted:function(){this.productListShows()},methods:{productListShows:function(){var t=this;axios.get("/inventoryProductNameWithoutPrice").then((function(e){t.productNameLists=e.data.productNameList}))}}},s=r(0),o=Object(s.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("div",{staticClass:"card main-card  element-block-example"},[t._m(0),t._v(" "),r("div",{staticClass:"table-responsive bg-white"},[r("table",{staticClass:"table table-hover table-bordered table-striped"},[t._m(1),t._v(" "),r("tbody",t._l(t.productNameLists,(function(e,a){return r("tr",[r("td",[t._v(t._s(a+1))]),t._v(" "),r("td",[t._v(t._s(e.productName)+" ")]),t._v(" "),r("td",[t._v(t._s(e.productBrandName)+" ")]),t._v(" "),r("td",[t._v(t._s(e.color)+" ")]),t._v(" "),r("td",[t._v(t._s(e.size)+" ")])])})),0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header",staticStyle:{"background-color":"rgb(1, 176, 241)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[e("h3",{staticStyle:{color:"black"}},[this._v("Product Name Without Price")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("SN")]),t._v(" "),r("th",[t._v("Product Name")]),t._v(" "),r("th",[t._v("Brand Name")]),t._v(" "),r("th",[t._v("Color")]),t._v(" "),r("th",[t._v("Size")])])])}],!1,null,null,null);e.default=o.exports}}]);