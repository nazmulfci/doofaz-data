(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{427:function(e,n,a){"use strict";a.r(n);var i={data:function(){return{adminId:"",adminNameShows:[],adminTypeShows:[],adminMenuTitleShows:[],adminMenuListShows:[],adminSubMenuShows:[],adminTypeId:[],adminMenuId:[],fullAccess:[],viewAccess:[],addAccess:[],editAccess:[],menuPermissionids:[],subMenuPermissionids:[]}},mounted:function(){this.adminSetupNameShow(),this.adminTitleNameShow(),this.adminMenulistShow(),this.adminSubMenuShow()},methods:{adminSetupNameShow:function(){var e=this;axios.get("/adminMenuPermission").then((function(n){e.adminNameShows=n.data.adminSetup}))},adminTypeShow:function(){var e=this;axios.get("/adminTypeShow/"+this.adminId).then((function(n){e.adminTypeShows=n.data.adminTypeName}))},adminTitleNameShow:function(){var e=this;axios.get("/adminMenuTitle").then((function(n){e.adminMenuTitleShows=n.data.adminMenuTitle}))},adminMenulistShow:function(){var e=this;axios.get("/adminSubMenu/create").then((function(n){e.adminMenuListShows=n.data.adminmenulist}))},adminSubMenuShow:function(){var e=this;axios.get("/adminSubMenuShow").then((function(n){e.adminSubMenuShows=n.data.subMenuList}))},adminMenuPermissionCreate:function(){var e=this;axios.post("/adminMenuPermission",{adminId:this.adminId,adminTypeId:this.adminTypeId,adminMenuId:this.adminMenuId,fullAccess:this.fullAccess,viewAccess:this.viewAccess,addAccess:this.addAccess,editAccess:this.editAccess}).then((function(n){e.adminId=[],e.adminTypeId=[],e.adminMenuId=[],e.fullAccess=[],e.viewAccess=[],e.addAccess=[],e.editAccess=[],Toast.fire({icon:"success",title:"Menu Permission Successfully"})})).catch((function(e){Toast.fire({icon:"error",title:"Something Worng"})}))},permissionMenuSubMenuStatus:function(){var e=this;axios.get("/adminPermissionMenus/"+this.adminId+"/"+this.adminTypeId).then((function(n){e.menuPermissionids=n.data.menuPermissionid})),axios.get("/adminPermissionSubMenus/"+this.adminId+"/"+this.adminTypeId).then((function(n){e.subMenuPermissionids=n.data.subMenuPermissionid}))},adminMenuStatusChange:function(e){axios.get("/adminMenuPermissionChange/"+this.adminId+"/"+this.adminTypeId+"/"+e).then((function(e){e.data.Unactive?Toast.fire({icon:"success",title:"Menu Permission Unactive"}):Toast.fire({icon:"success",title:"Menu Permission Active"})})),this.permissionMenuSubMenuStatus()},adminSubMenuStatusChange:function(e){axios.get("/adminSubMenuPermissionChange/"+this.adminId+"/"+this.adminTypeId+"/"+e).then((function(e){e.data.Unactive?Toast.fire({icon:"success",title:"SubMenu Permission Unactive"}):Toast.fire({icon:"success",title:"SubMenu Permission Active"})})),this.permissionMenuSubMenuStatus()}}},s=a(0),t=Object(s.a)(i,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("span",[a("div",{staticClass:"card"},[e._m(0),e._v(" "),a("div",{staticClass:"supplier-entry py-4 px-2"},[a("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Admin Name")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.adminId,expression:"adminId"}],staticClass:"form_control",on:{change:[function(n){var a=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.adminId=n.target.multiple?a:a[0]},function(n){return n.preventDefault(),e.adminTypeShow()}]}},[a("option",{attrs:{value:""}},[e._v("Select One")]),e._v(" "),e._l(e.adminNameShows,(function(n){return n.admin_entry_relation?a("option",{domProps:{value:n.adminId}},[e._v("\n                       "+e._s(n.admin_entry_relation.name)+"\n                     ")]):e._e()}))],2)]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",[e._v("Admin Type")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.adminTypeId,expression:"adminTypeId"}],staticClass:"form_control",on:{change:[function(n){var a=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.adminTypeId=n.target.multiple?a:a[0]},function(n){return n.preventDefault(),e.permissionMenuSubMenuStatus()}]}},[a("option",{attrs:{value:""}},[e._v("Select One")]),e._v(" "),e._l(e.adminTypeShows,(function(n){return n.admin_type_relation?a("option",{domProps:{value:n.adminTypeId}},[e._v("\n                       "+e._s(n.admin_type_relation.adminTypeName)+"\n                     ")]):e._e()}))],2)])])])]),e._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},e._l(e.adminMenuTitleShows,(function(n){return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header collapsed",attrs:{"data-toggle":"collapse","data-target":"#collapseOne"+n.adminMenuTitleId,"aria-expanded":"false"}},[a("span",{staticClass:"title"},[e._v(e._s(n.adminMenuTitleName))]),e._v(" "),e._m(1,!0)]),e._v(" "),e._l(e.adminMenuListShows,(function(i,s){return i.adminMenuTitleId==n.adminMenuTitleId?a("div",{staticClass:"collapse",attrs:{id:"collapseOne"+i.adminMenuTitleId,"data-parent":"#accordionExample"}},[a("div",{staticClass:"permission-card-body"},[1==i.adminSubMenuStatus?a("div",{staticClass:"accordion",attrs:{id:"accordionSecond"}},[a("div",{staticClass:"menuCollapsed collapsed ",attrs:{"data-toggle":"collapse","data-target":"#collapseTwo"+i.adminMenuId,"aria-expanded":"false"}},[a("h6",{staticClass:"title"},[e._v(e._s(i.adminMenuName))]),e._v(" "),e._m(2,!0)]),e._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover table-bordered mb-0"},e._l(e.adminSubMenuShows,(function(n,s){return n.adminMenuId==i.adminMenuId?a("tr",{staticClass:"collapse p-0",attrs:{colspan:"3",id:"collapseTwo"+n.adminMenuId,"data-parent":"#accordionSecond"}},[a("td",{staticClass:"p-0"},[a("table",{staticClass:"table table-hover table-bordered mb-0"},[s+1==1?a("tr",[a("th",[e._v(" Module ")]),e._v(" "),a("th",[e._v(" Full Access ")]),e._v(" "),a("th",[e._v(" View ")]),e._v(" "),a("th",[e._v(" Add ")]),e._v(" "),a("th",[e._v(" Edit ")])]):e._e(),e._v(" "),a("tr",{attrs:{id:"width"}},[a("td",[e._v(e._s(n.adminSubMenuName))]),e._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.fullAccess,expression:"fullAccess"}],attrs:{type:"checkbox"},domProps:{value:n.adminSubMenuId,checked:Array.isArray(e.fullAccess)?e._i(e.fullAccess,n.adminSubMenuId)>-1:e.fullAccess},on:{change:function(a){var i=e.fullAccess,s=a.target,t=!!s.checked;if(Array.isArray(i)){var c=n.adminSubMenuId,d=e._i(i,c);s.checked?d<0&&(e.fullAccess=i.concat([c])):d>-1&&(e.fullAccess=i.slice(0,d).concat(i.slice(d+1)))}else e.fullAccess=t}}}),e._v(" "),e._l(e.subMenuPermissionids,(function(i){return i.subMenuId==n.adminSubMenuId?a("span",[1==i.fullAccess?a("span",{staticClass:"badge badge-primary btn-hover-shine subMenuActive",on:{click:function(a){return a.preventDefault(),e.adminSubMenuStatusChange(n.adminSubMenuId)}}},[e._v(" Active ")]):e._e(),e._v(" "),0==i.fullAccess?a("span",{staticClass:"badge badge-danger btn-hover-shine menuActive",on:{click:function(a){return a.preventDefault(),e.adminSubMenuStatusChange(n.adminSubMenuId)}}},[e._v(" Deactive ")]):e._e()]):e._e()}))],2),e._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.viewAccess,expression:"viewAccess"}],attrs:{type:"checkbox"},domProps:{value:n.adminSubMenuId,checked:Array.isArray(e.viewAccess)?e._i(e.viewAccess,n.adminSubMenuId)>-1:e.viewAccess},on:{change:function(a){var i=e.viewAccess,s=a.target,t=!!s.checked;if(Array.isArray(i)){var c=n.adminSubMenuId,d=e._i(i,c);s.checked?d<0&&(e.viewAccess=i.concat([c])):d>-1&&(e.viewAccess=i.slice(0,d).concat(i.slice(d+1)))}else e.viewAccess=t}}}),e._v(" "),e._l(e.subMenuPermissionids,(function(i){return i.subMenuId==n.adminSubMenuId?a("span",[1==i.viewAccess?a("span",{staticClass:"badge badge-primary btn-hover-shine subMenuActive",on:{click:function(a){return a.preventDefault(),e.adminSubMenuStatusChange(n.adminSubMenuId)}}},[e._v(" Active ")]):e._e(),e._v(" "),0==i.viewAccess?a("span",{staticClass:"badge badge-danger btn-hover-shine menuActive",on:{click:function(a){return a.preventDefault(),e.adminSubMenuStatusChange(n.adminSubMenuId)}}},[e._v(" Deactive ")]):e._e()]):e._e()}))],2),e._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.addAccess,expression:"addAccess"}],attrs:{type:"checkbox"},domProps:{value:n.adminSubMenuId,checked:Array.isArray(e.addAccess)?e._i(e.addAccess,n.adminSubMenuId)>-1:e.addAccess},on:{change:function(a){var i=e.addAccess,s=a.target,t=!!s.checked;if(Array.isArray(i)){var c=n.adminSubMenuId,d=e._i(i,c);s.checked?d<0&&(e.addAccess=i.concat([c])):d>-1&&(e.addAccess=i.slice(0,d).concat(i.slice(d+1)))}else e.addAccess=t}}}),e._v(" "),e._l(e.subMenuPermissionids,(function(i){return i.subMenuId==n.adminSubMenuId?a("span",[1==i.addAccess?a("span",{staticClass:"badge badge-primary btn-hover-shine subMenuActive",on:{click:function(a){return a.preventDefault(),e.adminSubMenuStatusChange(n.adminSubMenuId)}}},[e._v(" Active ")]):e._e(),e._v(" "),0==i.addAccess?a("span",{staticClass:"badge badge-danger btn-hover-shine menuActive",on:{click:function(a){return a.preventDefault(),e.adminSubMenuStatusChange(n.adminSubMenuId)}}},[e._v(" Deactive ")]):e._e()]):e._e()}))],2),e._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.editAccess,expression:"editAccess"}],attrs:{type:"checkbox"},domProps:{value:n.adminSubMenuId,checked:Array.isArray(e.editAccess)?e._i(e.editAccess,n.adminSubMenuId)>-1:e.editAccess},on:{change:function(a){var i=e.editAccess,s=a.target,t=!!s.checked;if(Array.isArray(i)){var c=n.adminSubMenuId,d=e._i(i,c);s.checked?d<0&&(e.editAccess=i.concat([c])):d>-1&&(e.editAccess=i.slice(0,d).concat(i.slice(d+1)))}else e.editAccess=t}}}),e._v(" "),e._l(e.subMenuPermissionids,(function(i){return i.subMenuId==n.adminSubMenuId?a("span",[1==i.editAccess?a("span",{staticClass:"badge badge-primary btn-hover-shine subMenuActive",on:{click:function(a){return a.preventDefault(),e.adminSubMenuStatusChange(n.adminSubMenuId)}}},[e._v(" Active ")]):e._e(),e._v(" "),0==i.editAccess?a("span",{staticClass:"badge badge-danger btn-hover-shine menuActive",on:{click:function(a){return a.preventDefault(),e.adminSubMenuStatusChange(n.adminSubMenuId)}}},[e._v(" Deactive ")]):e._e()]):e._e()}))],2)])])])]):e._e()})),0)])]):a("div",[a("table",{staticClass:"table table-hover table-bordered mb-0"},[a("tr",{attrs:{id:"width"}},[a("td",{attrs:{colspan:"5"}},[a("h6",{staticClass:"title ml"},[e._v(e._s(i.adminMenuName))])]),e._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.adminMenuId,expression:"adminMenuId"}],attrs:{type:"checkbox"},domProps:{value:i.adminMenuId,checked:Array.isArray(e.adminMenuId)?e._i(e.adminMenuId,i.adminMenuId)>-1:e.adminMenuId},on:{change:function(n){var a=e.adminMenuId,s=n.target,t=!!s.checked;if(Array.isArray(a)){var c=i.adminMenuId,d=e._i(a,c);s.checked?d<0&&(e.adminMenuId=a.concat([c])):d>-1&&(e.adminMenuId=a.slice(0,d).concat(a.slice(d+1)))}else e.adminMenuId=t}}}),e._v(" "),e._l(e.menuPermissionids,(function(n){return n.menuId==i.adminMenuId?a("span",[1==n.permissionStatus?a("span",{staticClass:"badge badge-primary btn-hover-shine menuActive",on:{click:function(n){return n.preventDefault(),e.adminMenuStatusChange(i.adminMenuId)}}},[e._v(" Active ")]):a("span",{staticClass:"badge badge-danger btn-hover-shine menuActive",on:{click:function(n){return n.preventDefault(),e.adminMenuStatusChange(i.adminMenuId)}}},[e._v(" Deactive ")])]):e._e()}))],2)])])])])]):e._e()}))],2)})),0)]),e._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"p-3"},[a("button",{staticClass:"mr-2 btn-pill btn-hover-shine btn btn-primary",on:{click:function(n){return n.preventDefault(),e.adminMenuPermissionCreate()}}},[e._v("Submit")])])])])}),[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.20)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[n("h3",{staticStyle:{color:"black"}},[this._v("Menu Permission")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("span",{staticClass:"accicon"},[n("i",{staticClass:"fas fa-angle-down rotate-icon"})])},function(){var e=this.$createElement,n=this._self._c||e;return n("span",{staticClass:"accicon"},[n("i",{staticClass:"fas fa-angle-down rotate-icon"})])}],!1,null,null,null);n.default=t.exports}}]);