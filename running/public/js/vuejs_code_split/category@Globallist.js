(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{818:function(t,a,e){"use strict";e.r(a);var r={data:function(){return{CategoryListShows:{}}},mounted:function(){this.CategoryGetData()},methods:{CategoryGetData:function(){var t=this;axios.get("/categoryGlobalShow/"+this.$route.params.categorylabelId).then((function(a){t.CategoryListShows=a.data.categoryListData}))}}},o=e(0),s=Object(o.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:"/category@report"}},[t._v("Category Report")])],1)])]),t._v(" "),e("div",{staticClass:"card main-card  element-block-example"},[t._m(0),t._v(" "),e("div",{staticClass:"table-responsive bg-white"},[e("table",{staticClass:"table table-hover table-bordered mb-0 "},[e("thead",[e("tr",{staticStyle:{background:"rgba(242, 242, 242, 0.47)"}},[e("th",[t._v("SN")]),t._v(" "),1==this.$route.params.categorylabelId?e("th",[t._v("Category")]):t._e(),t._v(" "),2==this.$route.params.categorylabelId?e("th",[t._v("Sub Category")]):t._e(),t._v(" "),3==this.$route.params.categorylabelId?e("th",[t._v("Third Category")]):t._e(),t._v(" "),4==this.$route.params.categorylabelId?e("th",[t._v("Fore Category")]):t._e(),t._v(" "),5==this.$route.params.categorylabelId?e("th",[t._v("Five Category")]):t._e(),t._v(" "),6==this.$route.params.categorylabelId?e("th",[t._v("Six Category")]):t._e(),t._v(" "),7==this.$route.params.categorylabelId?e("th",[t._v("Seven Category")]):t._e(),t._v(" "),8==this.$route.params.categorylabelId?e("th",[t._v("Eight Category")]):t._e(),t._v(" "),9==this.$route.params.categorylabelId?e("th",[t._v("Nine Category")]):t._e(),t._v(" "),10==this.$route.params.categorylabelId?e("th",[t._v("Ten Category")]):t._e()])]),t._v(" "),e("tbody",t._l(t.CategoryListShows,(function(a,r){return e("tr",[e("td",[t._v(t._s(r+1))]),t._v(" "),e("td",[t._v(t._s(a.categoryName))])])})),0)])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.20)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[a("h3",{staticStyle:{color:"black"}},[this._v("Category List")])])}],!1,null,"0e369748",null);a.default=s.exports}}]);