(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{514:function(t,e,a){"use strict";a.r(e);var s=a(1),o=a.n(s),i={data:function(){return{moment:o.a,loading:!1,userLists:[],employeeLIsts:[],shopTypeLists:[],countryLists:[],currencyLists:[],divisionLists:[],districtLists:[],upazillaLists:[],unionLists:[],wardLists:[],userNameExist:!1,shops:!1,employees:!1,image:"",form:new Form({currencyId:"",countryId:"",divisionId:"",districtId:"",thanaId:"",unionId:"",wardId:"",areaId:"",floorId:"",houseMarketId:"",expertPerson:"",aboutSoftwareComment:"",youtube:"",haveComputer:"",officerOrManager:"",howMuchStay:"",contactNo:"",whatsapp:"",ownersName:"",howMuchOwner:"",productTypeId:"",whyDisagree:"",usedSoftwareName:"",doYouUseSoftware:"",intarest:"",facebook:"",email:"",mobileNo:"",shopOfficeSize:"",shopOfficeNo:"",shopOfficeName:"",shopOrOffice:"",blockRoadNameNumber:"",blockRoadId:"",houseMarketName:"",houseMarketNumber:"",howMuchFloor:""}),areaLists:[],blockRoadLists:[],houseMarketLists:[],productTypeLists:[],shopInformations:[],viewAreaLists:[],totalFloor:0,usedSoftwareStatus:!1,notUsedSoftwareStatus:!1}},mounted:function(){this.userList(),this.view(),this.viewProductType(),this.viewArea()},methods:{view:function(){var t=this;axios.get("dataInformationReport").then((function(e){t.shopInformations=e.data.data}))},viewArea:function(){var t=this;axios.get("viewArea").then((function(e){t.viewAreaLists=e.data.data}))},viewProductType:function(){var t=this;axios.get("productTypeView").then((function(e){t.productTypeLists=e.data.data}))},userList:function(){var t=this;axios.get("getUserInfo").then((function(e){t.userLists=e.data.shop}))}}},r=a(0),n=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"supplier-entry py-4 px-2"},[a("div",{staticClass:"card-body table-responsive bg-white"},[a("table",{staticClass:"table table-hover table-striped table-bordered",staticStyle:{width:"100%"},attrs:{id:"example"}},[t._m(1),t._v(" "),a("tbody",t._l(t.shopInformations,(function(e,s){return a("tr",[a("td",[t._v(t._s(++s))]),t._v(" "),a("td",t._l(t.viewAreaLists,(function(s){return s.id==e.areaId?a("span",[t._v(t._s(s.areaName))]):t._e()})),0),t._v(" "),a("td",t._l(t.productTypeLists,(function(s){return s.id==e.productTypeId?a("span",[t._v(t._s(s.productType))]):t._e()})),0),t._v(" "),a("td",[t._v(t._s(e.shopOfficeName))]),t._v(" "),a("td",[t._v(t._s(e.mobileNo))]),t._v(" "),a("td",[t._v("\n                  "+t._s(t.moment(e.created_at).fromNow())+"\n                    "),a("br"),t._v("\n                  "+t._s(t.moment(e.created_at).format("DD MMMM YYYY"))+"\n                    "),a("br"),t._v("\n                  "+t._s(t.moment(e.created_at).format("h:mm:ss a"))+"\n              ")])])})),0)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header-tab card-header alert-info"},[e("h4",[e("i",{staticClass:"header-icon lnr-laptop-phone icon-gradient bg-premium-dark"}),this._v("\n          View Information ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("ID")]),t._v(" "),a("th",[t._v("Area")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Mobile No")]),t._v(" "),a("th",[t._v("Date")])])])}],!1,null,null,null);e.default=n.exports}}]);