(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{486:function(t,e,s){"use strict";s.r(e);var i=s(1),a=s.n(i),n={data:function(){return{shopLists:[],moment:a.a}},mounted:function(){this.view()},methods:{view:function(){var t=this;fetch("adminOpenTemps").then((function(t){return t.json()})).then((function(e){t.shopLists=e}))}}},r=s(0),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[t._m(0),t._v(" "),s("div",{staticClass:"card mt-5"},[t._m(1),t._v(" "),s("div",{staticClass:"supplier-entry py-4 px-2"},[s("div",{staticClass:"card-body table-responsive bg-white"},[s("table",{staticClass:"table table-hover table-striped table-bordered",staticStyle:{width:"100%"}},[s("tbody",[t._m(2),t._v(" "),t._l(t.shopLists,(function(e,i){return s("tr",{key:e.id},[s("td",[t._v(" "+t._s(++i)+" ")]),t._v(" "),s("td",[t._v(t._s(e.shopName))]),t._v(" "),s("td",[t._v(t._s(t.moment(e.created_at).format("DD-MM-YYYY")))]),t._v(" "),s("td",[t._v(t._s(e.userName))]),t._v(" "),s("td",[t._v(t._s(e.shopOwnerMobileNo))]),t._v(" "),s("td",[s("router-link",{staticClass:"btn-wide btn-pill btn btn-outline-primary btn-hover-shine",attrs:{to:"/open@shop"+e.id}},[s("i",{staticClass:"fa fa-edit"}),t._v(" View ")])],1)])}))],2)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-page-title"},[e("div",{staticClass:"page-title-wrapper"},[e("div",{staticClass:"page-title-heading"},[e("div",{staticClass:"page-title-icon"},[e("i",{staticClass:"pe-7s-menu icon-gradient bg-mean-fruit"})]),this._v(" "),e("div",[this._v("\n            Shop Report\n            "),e("div",{staticClass:"page-title-subheading"},[this._v("\n               Shop Report\n            ")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header-tab card-header alert-info"},[e("h4",[e("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-premium-dark"}),this._v("\n          Shop Report ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("th",[t._v(" SL ")]),t._v(" "),s("th",[t._v(" Shop Name ")]),t._v(" "),s("th",[t._v(" Registration Date ")]),t._v(" "),s("th",[t._v(" User Name ")]),t._v(" "),s("th",[t._v(" Shop Phone ")]),t._v(" "),s("th",[t._v(" Action ")])])}],!1,null,null,null);e.default=o.exports}}]);