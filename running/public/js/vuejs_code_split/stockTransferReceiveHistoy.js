(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{626:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{loading:!1,form:new Form({warehouseName:"",location:"",fullAddress:""}),warehouseLists:{}}},mounted:function(){this.ShowDataLists()},methods:{warehouseCreate:function(){var t=this;this.loading=!0,this.form.post("/addWarehouseEntry").then((function(e){t.loading=!1,t.form.reset(),Toast.fire({icon:"success",title:"Warehouse Setup Successfully"}),t.ShowDataLists()})).catch((function(e){t.loading=!1,Toast.fire({icon:"error",title:"Something Missing"})}))},ShowDataLists:function(){var t=this;axios.get("/addWarehouseEntry").then((function(e){t.warehouseLists=e.data.data}))},deleteWarehouse:function(t){var e=this,s="addWarehouseEntry/".concat(t);axios.delete(s).then((function(t){Toast.fire({icon:"success",title:"Delete Successfull."}),e.ShowDataLists()}))}}},i=s(0),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("div",{staticClass:"card mt-5"},[t._m(0),t._v(" "),s("div",{staticClass:"table-responsive bg-white"},[s("table",{staticClass:"table table-hover table-bordered mb-0"},[t._m(1),t._v(" "),s("tbody",t._l(t.warehouseLists,(function(e,a){return s("tr",[s("td",[t._v(" "+t._s(++a)+" ")]),t._v(" "),s("td",[t._v(" "+t._s(e.warehouseName)+" ")]),t._v(" "),s("td",[t._v(" "+t._s(e.location)+" ")]),t._v(" "),s("td",[t._v(" "+t._s(e.fullAddress)+" ")]),t._v(" "),s("td",[s("router-link",{staticClass:"mr-2 btn-hover-shine btn btn-shadow btn-primary",attrs:{to:"/warehouseEdit"+e.id}},[s("i",{staticClass:" fa fa-edit"}),t._v("Edit")]),t._v(" "),s("button",{staticClass:"btn-hover-shine btn btn-shadow btn btn-danger",on:{click:function(s){return s.preventDefault(),t.deleteWarehouse(e.id)}}},[s("i",{staticClass:" fa fa-trash"}),t._v("Delete")])],1)])})),0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.20)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[e("h3",{staticStyle:{color:"black"}},[this._v("Warehouse List")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",{staticStyle:{background:"rgba(242, 242, 242, 0.47)"}},[s("th",[t._v(" SN ")]),t._v(" "),s("th",[t._v(" Warehouse Name ")]),t._v(" "),s("th",[t._v(" Location ")]),t._v(" "),s("th",[t._v(" Full Address ")]),t._v(" "),s("th",[t._v(" Stock Amount ")]),t._v(" "),s("th",[t._v("Stock Visit")])])])}],!1,null,null,null);e.default=n.exports}}]);