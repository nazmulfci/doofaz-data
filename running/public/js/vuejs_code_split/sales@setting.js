(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{794:function(t,s,a){"use strict";a.r(s);var i={data:function(){return{loading:!1,info:{}}},mounted:function(){this.data()},methods:{create:function(t){var s=this;this.loading=!0,axios.put("/salesSt/"+t).then((function(t){s.loading=!1,s.data(),Toast.fire({icon:"success",title:"Sales Setup Successfully"})})).catch((function(t){s.loading=!1,Toast.fire({icon:"error",title:"Something Missing"})}))},data:function(){var t=this;axios.get("salesSt").then((function(s){t.info=s.data.info}))}}},n=a(0),e=Object(n.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"supplier-entry py-4 px-2"},[a("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border"},[1==t.info.status?a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.loading},on:{click:function(s){return s.preventDefault(),t.create(2)}}},[t.loading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):a("span",{staticClass:"mr-2 opacity-7"},[a("i",{staticClass:"fa fa-paper-plane"})]),t._v("First In First Out")])]):t._e(),t._v(" "),2==t.info.status?a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-success",attrs:{type:"button",disabled:t.loading},on:{click:function(s){return s.preventDefault(),t.create(1)}}},[t.loading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):a("span",{staticClass:"mr-2 opacity-7"},[a("i",{staticClass:"fa fa-paper-plane"})]),t._v("Last In Last Out")])]):t._e(),t._v(" "),0==t.info?a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.loading},on:{click:function(s){return s.preventDefault(),t.create(2)}}},[t.loading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):a("span",{staticClass:"mr-2 opacity-7"},[a("i",{staticClass:"fa fa-paper-plane"})]),t._v("First In First Out")])]):t._e()])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.20)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[s("h3",{staticStyle:{color:"black"}},[this._v("Sales SetUp")])])}],!1,null,null,null);s.default=e.exports}}]);