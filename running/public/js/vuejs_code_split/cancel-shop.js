(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{901:function(t,a,e){"use strict";e.r(a);var s=e(1),i=e.n(s),o={data:function(){return{userLists:[],shopTypeLists:[],countryLists:[],currencyLists:[],divisionLists:[],districtLists:[],upazillaLists:[],unionLists:[],wardLists:[],saddress:[],userNameExist:!1,moment:i.a,image:"",form:new Form({shopTypeId:"",shopSirialId:"",shopName:"",email:"",refferUserId:"",website:"",facebook:"",youtube:"",haveBranch:"",totalBranch:"0",shopOwnerName:"",shopOwnerMobileNo:"",shopOwnerEmail:"",shopOwnerAddress:"",shopOwnerPhoneNo:"",CPName:"",CPMobileNo:"",CPEmail:"",CPAddress:"",CPPhoneNo:"",SRName:"",SRMobileNo:"",SREmail:"",SRAddress:"",SRPhoneNo:"",currencyId:"",countryId:"",divisionId:"",districtId:"",thanaId:"",unionId:"",wardId:"",addressLine1:"",front:"",left:"",shopSize:"",shopNo:"",addressLine2:"",back:"",right:"",marketName:"",areaKnownName:""}),rate:"",sms:{},shopInformations:{},exit:!1,howManyBranch:!1,mess:""}},mounted:function(){this.view()},methods:{informationNeed:function(t){var a=this;axios.post("informationNeedStatus/".concat(t),{reason:this.reason}).then((function(t){Toast.fire({icon:"success",title:"Forwared Successfull."}),a.view()}))},delivered:function(t){var a=this;axios.post("deliveredShopStatus/".concat(t),{reason:this.reason}).then((function(t){Toast.fire({icon:"success",title:"Delivered Successfull."}),a.view()}))},view:function(){var t=this;axios.get("cancelShop").then((function(a){t.shopInformations=a.data.newshop,t.saddress=a.data.shopaddress}))}}},r=e(0),n=Object(r.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[t._m(0),t._v(" "),e("div",{staticClass:"card mt-5"},[e("div",{staticClass:"supplier-entry py-4 px-2"},[e("div",{staticClass:"card-body table-responsive bg-white"},[e("table",{staticClass:"table table-hover table-striped table-bordered",staticStyle:{width:"100%"},attrs:{id:"example"}},[t._m(1),t._v(" "),e("tbody",t._l(t.shopInformations,(function(a,s){return e("tr",{key:a.shopInfoId},[e("td",[t._v(t._s(++s))]),t._v(" "),e("td",[t._v(t._s(t.moment(a.created_at).format("DD MMMM YYYY, LTS")))]),t._v(" "),e("td",[t._v(t._s(a.shoptype.shopTypeName))]),t._v(" "),e("td",[t._v(t._s(a.shopName))]),t._v(" "),e("td",[t._v(t._s(a.shopSirialId))]),t._v(" "),e("td",[t._v(t._s(a.shopownerinfo.shopOwnerMobileNo))]),t._v(" "),e("td",[e("div",[e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#details"+a.id}},[e("i",{staticClass:"fa fa-info-circle",attrs:{"aria-hidden":"true"}}),t._v(" More\n")])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"details"+a.id,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog xl"},[e("div",{staticClass:"modal-content"},[t._m(2,!0),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[t._m(3,!0),t._v("\n \n              "+t._s(a.shoptype.shopTypeName)+"\n             \n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(4,!0),t._v("\n \n            "+t._s(a.shopSirialId)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(5,!0),t._v("\n \n         "+t._s(a.shopName)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(6,!0),t._v("\n \n              "+t._s(a.haveBranch)+"\n            ")])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[t._m(7,!0),t._v(" "),a.refferuser?e("span",[t._v("  "+t._s(a.refferuser.name))]):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Shop Website Link\n                 ")]),t._v("\n \n            "+t._s(a.website)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Shop Facebook Link\n                 ")]),t._v("\n \n              "+t._s(a.facebook)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Shop Youtube Link\n                 ")]),t._v("\n  "+t._s(a.yoytubr)+"\n            ")])])])]),t._v(" "),e("div",{staticClass:"col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color mt-5"},[t._m(8,!0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[t._m(9,!0),t._v("\n \n          "+t._s(a.shopownerinfo.shopOwnerName)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(10,!0),t._v("\n \n          "+t._s(a.shopownerinfo.shopOwnerMobileNo)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Owner Email:\n                 ")]),t._v("\n \n          "+t._s(a.shopownerinfo.shopOwnerEmail)+"\n            ")])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v(" Owner Address:\n                 ")]),t._v("\n \n              "+t._s(a.shopownerinfo.shopOwnerAddress)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Owner Phone No:\n                 ")]),t._v("\n \n             "+t._s(a.shopownerinfo.shopOwnerPhoneNo)+"\n            ")])])])]),t._v(" "),e("div",{staticClass:"col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color mt-5"},[t._m(11,!0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[t._m(12,!0),t._v("\n \n              "+t._s(a.shopcontactpersion.CPName)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(13,!0),t._v("\n \n              "+t._s(a.shopcontactpersion.CPMobileNo)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Email:\n                 ")]),t._v("\n \n              "+t._s(a.shopcontactpersion.CPEmail)+"\n            ")])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v("  Address:\n                 ")]),t._v("\n \n             "+t._s(a.shopcontactpersion.CPAddress)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Phone No:\n                 ")]),t._v("\n \n            "+t._s(a.shopcontactpersion.CPPhoneNo)+"\n            ")])])])]),t._v(" "),e("div",{staticClass:"col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color mt-5"},[t._m(14,!0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[t._m(15,!0),t._v("\n \n              "+t._s(a.shoprepresentative.SRName)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(16,!0),t._v("\n \n             "+t._s(a.shoprepresentative.SRMobileNo)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Email:\n                 ")]),t._v("\n \n            "+t._s(a.shoprepresentative.SREmail)+"\n            ")])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v("  Address:\n                 ")]),t._v("\n \n           "+t._s(a.shoprepresentative.SRAddress)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Phone No\n                 ")]),t._v("\n \n                  "+t._s(a.shoprepresentative.SRPhoneNo)+"\n            ")])])])]),t._v(" "),t._l(t.saddress,(function(s){return s.shopId==a.id?e("div",{staticClass:"col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color mt-5"},[t._m(17,!0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[t._m(18,!0),t._v("\n  \n            "+t._s(s.country.name)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(19,!0),t._v(" "),s.district?e("span",[t._v("     "+t._s(s.district.district_name))]):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(20,!0),t._v(" "),s.union?e("span",[t._v("     "+t._s(s.union.union_name))]):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(21,!0),t._v("\n \n             "+t._s(s.addressLine1)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Front Side:\n                 ")]),t._v("\n \n               "+t._s(s.front)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Left Side:\n                 ")]),t._v("\n \n            "+t._s(s.left)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Shop Size:\n                 ")]),t._v("\n  "+t._s(s.shopSize)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Shop No:\n                 ")]),t._v("\n \n               "+t._s(s.shopNo)+"\n            ")])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[t._m(22,!0),t._v("\n  \n               "+t._s(s.division.division_name)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(23,!0),t._v(" "),s.thana?e("span",[t._v("   "+t._s(s.thana.upazila_name))]):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(24,!0),t._v(" "),s.ward?e("span",[t._v("   "+t._s(s.ward.ward_name))]):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Address 2:\n                 ")]),t._v("\n \n             "+t._s(s.addressLine2)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Back Side:\n                 ")]),t._v("\n \n          "+t._s(s.back)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Right Side \n                 ")]),t._v("\n "+t._s(s.right)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Market Name\n                 ")]),t._v("\n \n              "+t._s(s.marketName)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Area Knone Name\n                 ")]),t._v("\n \n            "+t._s(s.areaKnownName)+"\n             \n            ")])])])]):t._e()}))],2)])])])]),t._v(" "),e("td",[e("div",{staticClass:"dropdown"},[t._m(25,!0),t._v(" "),e("div",{staticClass:"dropdown-content"},[e("a",{attrs:{href:"#","data-toggle":"modal","data-target":"#deliverd"+a.id}},[t._v("Deliverd")])])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"deliverd"+a.id,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(26,!0),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("Message:")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reason,expression:"reason"}],staticClass:"form-control",attrs:{id:"message-text"},domProps:{value:t.reason},on:{input:function(a){a.target.composing||(t.reason=a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.delivered(a.id)}}},[t._v("Save changes")])])])])])])])})),0)])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"app-page-title"},[a("div",{staticClass:"page-title-wrapper"},[a("div",{staticClass:"page-title-heading"},[a("div",{staticClass:"page-title-icon"},[a("i",{staticClass:"pe-7s-menu icon-gradient bg-mean-fruit"})]),this._v(" "),a("div",[this._v("\n            Cancel Shop\n            "),a("div",{staticClass:"page-title-subheading"},[this._v("\n              Cancel Shop\n            ")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("ID")]),t._v(" "),e("th",[t._v("Registration Date")]),t._v(" "),e("th",[t._v("Shop Type")]),t._v(" "),e("th",[t._v("Shop Name")]),t._v(" "),e("th",[t._v(" Shop Id ")]),t._v(" "),e("th",[t._v(" Phone")]),t._v(" "),e("th",[t._v("Details")]),t._v(" "),e("th",[t._v("Action")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[this._v("Details")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Show Type\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Shop ID\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Shop Name\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v("  Need branch\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Shop Reffer By\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h5",[this._v(" Shop Owner Information ")]),this._v(" "),a("hr")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Owner Name:\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Owner Mobile No:\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h5",[this._v(" Shop Contact Person ")]),this._v(" "),a("hr")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Name:\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v("  Mobile No:\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h5",[this._v(" Shop Representative ")]),this._v(" "),a("hr")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v("  Name:\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v("  Mobile No:\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h5",[this._v(" Shop Address & Location ")]),this._v(" "),a("hr")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Country :\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" District :\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Union :\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v("  Address 1:\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Division: \n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Upazilla: \n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Ward :\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"dropbtn"},[a("i",{staticClass:"fa fa-cogs",attrs:{"aria-hidden":"true"}}),this._v("\nSelect One")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[this._v("Reason")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}],!1,null,null,null);a.default=n.exports}}]);