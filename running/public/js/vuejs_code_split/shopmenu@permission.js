(window.webpackJsonp=window.webpackJsonp||[]).push([[451],{780:function(e,s,t){"use strict";t.r(s);var n={data:function(){return{shopEmployeeEntryLists:[],shopEmployeeTypeName:[],shopMenuTittleShows:[],shopMenuShows:[],shopSubMenuShows:[],employeeEntryId:"",employeeTypeId:[],shopMenuId:[],fullAccess:[],viewAccess:[],addAccess:[],editAccess:[],loading:!1,shopMenuPermissionids:[],shopSubMenuPermissionids:[]}},mounted:function(){this.shopEmployeeEntryList(),this.shopMenuTittleShow(),this.shopMenuShow(),this.shopSubMenuShow()},methods:{shopEmployeeEntryList:function(){var e=this;axios.get("/shopEmployeeEntryLists").then((function(s){e.shopEmployeeEntryLists=s.data.shopEmployeeEntryLists}))},selectShopEmployeeEntryId:function(){var e=this;axios.get("/shopEmployeeTypeName/"+this.employeeEntryId).then((function(s){e.shopEmployeeTypeName=s.data.shopEmployeeTypeName}))},shopMenuTittleShow:function(){var e=this;axios.get("/shopMenuTittleShow").then((function(s){e.shopMenuTittleShows=s.data.shopMenuTittleShows}))},shopMenuShow:function(){var e=this;axios.get("/shopMenuShow").then((function(s){e.shopMenuShows=s.data.shopMenuShows}))},shopSubMenuShow:function(){var e=this;axios.get("/shopSubMenuShow").then((function(s){e.shopSubMenuShows=s.data.shopSubMenuShows}))},ShopMenuPermissionCreate:function(){var e=this;this.loading=!0,axios.post("/shopMenuPermission",{employeeEntryId:this.employeeEntryId,employeeTypeId:this.employeeTypeId,shopMenuId:this.shopMenuId,fullAccess:this.fullAccess,viewAccess:this.viewAccess,addAccess:this.addAccess,editAccess:this.editAccess}).then((function(s){e.loading=!1,e.employeeEntryId=[],e.employeeTypeId=[],e.shopMenuId=[],e.fullAccess=[],e.viewAccess=[],e.addAccess=[],e.editAccess=[],Toast.fire({icon:"success",title:"Menu Permission Successfully"})})).catch((function(s){e.loading=!1,Toast.fire({icon:"error",title:"Something wrong"})}))},shopMenuPermissionShow:function(){var e=this;axios.get("/shopPermissionMenuShows/"+this.employeeEntryId+"/"+this.employeeTypeId).then((function(s){e.shopMenuPermissionids=s.data.shopMenuPermissionids})),axios.get("/shopPermissionSubMenuShows/"+this.employeeEntryId+"/"+this.employeeTypeId).then((function(s){e.shopSubMenuPermissionids=s.data.shopSubMenuPermissionids}))},shopMenuStatusChange:function(e){axios.get("/shopMenuPermissionChange/"+this.employeeEntryId+"/"+this.employeeTypeId+"/"+e).then((function(e){e.data.Unactive?Toast.fire({icon:"success",title:"Menu Permission Deactive"}):Toast.fire({icon:"success",title:"Menu Permission Active"})})),this.shopMenuPermissionShow()},shopSubMenuStatusDeactive:function(e){axios.get("/shopSubMenuStatusDeactive/"+this.employeeEntryId+"/"+this.employeeTypeId+"/"+e).then((function(e){Toast.fire({icon:"success",title:"SubMenu Permission Deactive"})})),this.shopMenuPermissionShow()},shopSubMenuStatusActiveFullAccess:function(e){axios.get("/shopSubMenuStatusActiveFullAccess/"+this.employeeEntryId+"/"+this.employeeTypeId+"/"+e).then((function(e){Toast.fire({icon:"success",title:"SubMenu Permission Active"})})),this.shopMenuPermissionShow()},shopSubMenuStatusActiveViewAccess:function(e){axios.get("/shopSubMenuStatusActiveViewAccess/"+this.employeeEntryId+"/"+this.employeeTypeId+"/"+e).then((function(e){Toast.fire({icon:"success",title:"SubMenu Permission Active"})})),this.shopMenuPermissionShow()},shopSubMenuStatusActiveAddAccess:function(e){axios.get("/shopSubMenuStatusActiveAddAccess/"+this.employeeEntryId+"/"+this.employeeTypeId+"/"+e).then((function(e){Toast.fire({icon:"success",title:"SubMenu Permission Active"})})),this.shopMenuPermissionShow()},shopSubMenuStatusActiveEditAccess:function(e){axios.get("/shopSubMenuStatusActiveEditAccess/"+this.employeeEntryId+"/"+this.employeeTypeId+"/"+e).then((function(e){Toast.fire({icon:"success",title:"SubMenu Permission Active"})})),this.shopMenuPermissionShow()}}},i=t(0),o=Object(i.a)(n,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",[t("div",{staticClass:"card"},[e._m(0),e._v(" "),t("div",{staticClass:"supplier-entry py-4 px-2"},[t("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border"},[t("div",{staticClass:"form-group"},[t("label",[e._v("Employee Name")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.employeeEntryId,expression:"employeeEntryId"}],staticClass:"form-control",on:{change:[function(s){var t=Array.prototype.filter.call(s.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.employeeEntryId=s.target.multiple?t:t[0]},function(s){return s.preventDefault(),e.selectShopEmployeeEntryId()}]}},[t("option",{attrs:{value:""}},[e._v("Select One")]),e._v(" "),e._l(e.shopEmployeeEntryLists,(function(s){return t("option",{key:s.id,domProps:{value:s.shopEmployeeEntryId}},[e._v("\n                       "+e._s(s.userName)+"\n                     ")])}))],2)]),e._v(" "),t("div",{staticClass:"form-group"},[t("label",[e._v("Employee Type")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.employeeTypeId,expression:"employeeTypeId"}],staticClass:"form-control",on:{change:[function(s){var t=Array.prototype.filter.call(s.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.employeeTypeId=s.target.multiple?t:t[0]},function(s){return s.preventDefault(),e.shopMenuPermissionShow()}]}},[t("option",{attrs:{value:""}},[e._v("Select One")]),e._v(" "),e.shopEmployeeTypeName.shop_employee_types?t("option",{domProps:{value:e.shopEmployeeTypeName.employeeTypeId}},[e._v(e._s(e.shopEmployeeTypeName.shop_employee_types.shopEmployeeTypeName))]):e._e()])])])])]),e._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},e._l(e.shopMenuTittleShows,(function(s){return t("div",{staticClass:"card"},[t("div",{staticClass:"card-header collapsed",attrs:{"data-toggle":"collapse","data-target":"#collapseOne"+s.adminMenuTitleId,"aria-expanded":"false"}},[t("span",{staticClass:"title"},[e._v(e._s(s.adminMenuTitleName))]),e._v(" "),e._m(1,!0)]),e._v(" "),e._l(e.shopMenuShows,(function(n,i){return n.adminMenuTitleId==s.adminMenuTitleId?t("div",{staticClass:"collapse",attrs:{id:"collapseOne"+n.adminMenuTitleId,"data-parent":"#accordionExample"}},[t("div",{staticClass:"permission-card-body"},[1==n.adminSubMenuStatus?t("div",{staticClass:"accordion",attrs:{id:"accordionSecond"}},[t("div",{staticClass:"menuCollapsed collapsed ",attrs:{"data-toggle":"collapse","data-target":"#collapseTwo"+n.adminMenuId,"aria-expanded":"false"}},[t("h6",{staticClass:"title"},[e._v(e._s(n.adminMenuName))]),e._v(" "),e._m(2,!0)]),e._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-hover table-bordered mb-0"},e._l(e.shopSubMenuShows,(function(s,i){return s.adminMenuId==n.adminMenuId?t("tr",{staticClass:"collapse p-0",attrs:{colspan:"3",id:"collapseTwo"+s.adminMenuId,"data-parent":"#accordionSecond"}},[t("td",{staticClass:"p-0"},[t("table",{staticClass:"table table-hover table-bordered mb-0"},[i+1==1?t("tr",[t("th",[e._v(" Select ")])]):e._e(),e._v(" "),t("tr",{attrs:{id:"width"}},[t("td",[e._v(e._s(s.adminSubMenuName))]),e._v(" "),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.fullAccess,expression:"fullAccess"}],attrs:{type:"checkbox"},domProps:{value:s.adminSubMenuId,checked:Array.isArray(e.fullAccess)?e._i(e.fullAccess,s.adminSubMenuId)>-1:e.fullAccess},on:{change:function(t){var n=e.fullAccess,i=t.target,o=!!i.checked;if(Array.isArray(n)){var a=s.adminSubMenuId,c=e._i(n,a);i.checked?c<0&&(e.fullAccess=n.concat([a])):c>-1&&(e.fullAccess=n.slice(0,c).concat(n.slice(c+1)))}else e.fullAccess=o}}}),e._v(" "),e._l(e.shopSubMenuPermissionids,(function(n){return n.subMenuId==s.adminSubMenuId?t("span",[1==n.fullAccess?t("span",{staticClass:"badge badge-primary btn-hover-shine subMenuActive",on:{click:function(s){return s.preventDefault(),e.shopSubMenuStatusDeactive(n.subMenuId)}}},[e._v(" Active ")]):e._e(),e._v(" "),0==n.fullAccess?t("span",{staticClass:"badge badge-danger btn-hover-shine menuActive",on:{click:function(s){return s.preventDefault(),e.shopSubMenuStatusActiveFullAccess(n.subMenuId)}}},[e._v(" Deactive ")]):e._e()]):e._e()}))],2)])])])]):e._e()})),0)])]):t("div",[t("table",{staticClass:"table table-hover table-bordered mb-0"},[t("tr",{attrs:{id:"width"}},[t("td",{attrs:{colspan:"5"}},[t("h6",{staticClass:"title ml"},[e._v(e._s(n.adminMenuName))])]),e._v(" "),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.shopMenuId,expression:"shopMenuId"}],attrs:{type:"checkbox"},domProps:{value:n.adminMenuId,checked:Array.isArray(e.shopMenuId)?e._i(e.shopMenuId,n.adminMenuId)>-1:e.shopMenuId},on:{change:function(s){var t=e.shopMenuId,i=s.target,o=!!i.checked;if(Array.isArray(t)){var a=n.adminMenuId,c=e._i(t,a);i.checked?c<0&&(e.shopMenuId=t.concat([a])):c>-1&&(e.shopMenuId=t.slice(0,c).concat(t.slice(c+1)))}else e.shopMenuId=o}}}),e._v(" "),e._l(e.shopMenuPermissionids,(function(s){return s.menuId==n.adminMenuId?t("span",[1==s.permissionStatus?t("span",{staticClass:"badge badge-primary btn-hover-shine menuActive",on:{click:function(t){return t.preventDefault(),e.shopMenuStatusChange(s.menuId)}}},[e._v(" Active ")]):t("span",{staticClass:"badge badge-danger btn-hover-shine menuActive",on:{click:function(t){return t.preventDefault(),e.shopMenuStatusChange(s.menuId)}}},[e._v(" Deactive ")])]):e._e()}))],2)])])])])]):e._e()}))],2)})),0),e._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"p-3"},[t("button",{staticClass:"mr-2 btn-pill btn-hover-shine btn btn-primary",attrs:{disabled:e.loading},on:{click:function(s){return s.preventDefault(),e.ShopMenuPermissionCreate()}}},[e.loading?t("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):e._e(),e._v(" "),e._m(3),e._v(" "),t("span",{staticClass:"mr-1"},[e._v(" Submit ")])])])])])])}),[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.20)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[s("h3",{staticStyle:{color:"black"}},[this._v("Shop Menu Permission")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("span",{staticClass:"accicon"},[s("i",{staticClass:"fas fa-angle-down rotate-icon"})])},function(){var e=this.$createElement,s=this._self._c||e;return s("span",{staticClass:"accicon"},[s("i",{staticClass:"fas fa-angle-down rotate-icon"})])},function(){var e=this.$createElement,s=this._self._c||e;return s("span",{staticClass:"mr-2 opacity-7"},[s("i",{staticClass:"fa fa-paper-plane"})])}],!1,null,null,null);s.default=o.exports}}]);