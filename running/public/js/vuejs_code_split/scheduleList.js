(window.webpackJsonp=window.webpackJsonp||[]).push([[410],{920:function(t,a,e){"use strict";e.r(a);var s={data:function(){return{userLists:[],shopTypeLists:[],employeeLIsts:[],lists:[],userNameExist:!1,trainerId:"",rate:"",sms:{},shopInformations:{},exit:!1,howManyBranch:!1,mess:""}},mounted:function(){this.view(),this.userList()},methods:{userList:function(){var t=this;axios.get("https://portal.safejob.net/api/employeeList").then((function(a){t.employeeLIsts=a.data.user}))},assign:function(t){var a=this;axios.post("trainerAssign/".concat(t),{trainerId:this.trainerId}).then((function(t){Toast.fire({icon:"success",title:"Forwarded Successfull."}),a.view()}))},view:function(){var t=this;axios.get("training/create").then((function(a){t.shopInformations=a.data.newshop,t.saddress=a.data.shopaddress,t.lists=a.data.slist}))},shopTypeList:function(){var t=this;axios.get("shopTypeEntry").then((function(a){t.shopTypeLists=a.data.data}))}}},i=e(0),o=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[t._m(0),t._v(" "),e("div",{staticClass:"card mt-5"},[e("div",{staticClass:"supplier-entry py-4 px-2"},[e("div",{staticClass:"card-body table-responsive bg-white"},[e("table",{staticClass:"table table-hover table-striped table-bordered",staticStyle:{width:"100%"},attrs:{id:"example"}},[t._m(1),t._v(" "),t._l(t.lists,(function(a){return e("tbody",{key:a.id},t._l(t.shopInformations,(function(s,i){return a.shopId==s.id?e("tr",{key:s.shopInfoId},[e("td",[t._v(t._s(++i))]),t._v(" "),e("td",[t._v(t._s(s.shoptype.shopTypeName))]),t._v(" "),e("td",[t._v(t._s(s.shopName))]),t._v(" "),e("td",[t._v(t._s(s.shopSirialId))]),t._v(" "),e("td",[s.shopownerinfo?e("span",[t._v(t._s(s.shopownerinfo.shopOwnerMobileNo))]):t._e()]),t._v(" "),e("td",[t._v(t._s(a.tDate))]),t._v(" "),e("td",[t._v(t._s(a.tTime))]),t._v(" "),e("td",[t._v(t._s(a.tLocation))]),t._v(" "),e("td",[t._v(t._s(a.tMember))]),t._v(" "),e("td",[e("div",[e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#details"+s.id}},[e("i",{staticClass:"fa fa-info-circle",attrs:{"aria-hidden":"true"}}),t._v(" More\n")])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"details"+s.id,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog xl"},[e("div",{staticClass:"modal-content"},[t._m(2,!0),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[t._m(3,!0),t._v("\n \n              "+t._s(s.shoptype.shopTypeName)+"\n             \n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(4,!0),t._v("\n \n            "+t._s(s.shopSirialId)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(5,!0),t._v("\n \n         "+t._s(s.shopName)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(6,!0),t._v("\n \n              "+t._s(s.haveBranch)+"\n            ")])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[t._m(7,!0),t._v(" "),s.refferuser?e("span",[t._v("  "+t._s(s.refferuser.name))]):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Shop Website Link\n                 ")]),t._v("\n \n            "+t._s(s.website)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Shop Facebook Link\n                 ")]),t._v("\n \n              "+t._s(s.facebook)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Shop Youtube Link\n                 ")]),t._v("\n  "+t._s(s.yoytubr)+"\n            ")])])])]),t._v(" "),e("div",{staticClass:"col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color mt-5"},[t._m(8,!0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[t._m(9,!0),t._v("\n \n          "+t._s(s.shopownerinfo.shopOwnerName)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(10,!0),t._v("\n \n          "+t._s(s.shopownerinfo.shopOwnerMobileNo)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Owner Email:\n                 ")]),t._v("\n \n          "+t._s(s.shopownerinfo.shopOwnerEmail)+"\n            ")])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v(" Owner Address:\n                 ")]),t._v("\n \n              "+t._s(s.shopownerinfo.shopOwnerAddress)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Owner Phone No:\n                 ")]),t._v("\n \n             "+t._s(s.shopownerinfo.shopOwnerPhoneNo)+"\n            ")])])])]),t._v(" "),e("div",{staticClass:"col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color mt-5"},[t._m(11,!0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[t._m(12,!0),t._v("\n \n              "+t._s(s.shopcontactpersion.CPName)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(13,!0),t._v("\n \n              "+t._s(s.shopcontactpersion.CPMobileNo)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Email:\n                 ")]),t._v("\n \n              "+t._s(s.shopcontactpersion.CPEmail)+"\n            ")])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v("  Address:\n                 ")]),t._v("\n \n             "+t._s(s.shopcontactpersion.CPAddress)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Phone No:\n                 ")]),t._v("\n \n            "+t._s(s.shopcontactpersion.CPPhoneNo)+"\n            ")])])])]),t._v(" "),e("div",{staticClass:"col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color mt-5"},[t._m(14,!0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[t._m(15,!0),t._v("\n \n              "+t._s(s.shoprepresentative.SRName)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(16,!0),t._v("\n \n             "+t._s(s.shoprepresentative.SRMobileNo)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Email:\n                 ")]),t._v("\n \n            "+t._s(s.shoprepresentative.SREmail)+"\n            ")])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v("  Address:\n                 ")]),t._v("\n \n           "+t._s(s.shoprepresentative.SRAddress)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Phone No\n                 ")]),t._v("\n \n                  "+t._s(s.shoprepresentative.SRPhoneNo)+"\n            ")])])])]),t._v(" "),t._l(t.saddress,(function(a){return a.shopId==s.id?e("div",{staticClass:"col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color mt-5"},[t._m(17,!0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[t._m(18,!0),t._v("\n  \n            "+t._s(a.country.name)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(19,!0),t._v("\n              "+t._s(a.district.district_name)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(20,!0),t._v(" "),a.union?e("span",[t._v(" "+t._s(a.union.union_name))]):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(21,!0),t._v("\n \n             "+t._s(a.addressLine1)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Front Side:\n                 ")]),t._v("\n \n               "+t._s(a.front)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Left Side:\n                 ")]),t._v("\n \n            "+t._s(a.left)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Shop Size:\n                 ")]),t._v("\n  "+t._s(a.shopSize)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Shop No:\n                 ")]),t._v("\n \n               "+t._s(a.shopNo)+"\n            ")])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-12"},[e("div",{staticClass:"form-group"},[t._m(22,!0),t._v(" "),a.division?e("span",[t._v(" "+t._s(a.division.division_name))]):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(23,!0),t._v(" "),a.thana?e("span",[t._v("  "+t._s(a.thana.upazila_name))]):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[t._m(24,!0),t._v(" "),a.ward?e("span",[t._v(" "+t._s(a.ward.ward_name))]):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Address 2:\n                 ")]),t._v("\n \n             "+t._s(a.addressLine2)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Back Side:\n                 ")]),t._v("\n \n          "+t._s(a.back)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Right Side \n                 ")]),t._v("\n "+t._s(a.right)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Market Name\n                 ")]),t._v("\n \n              "+t._s(a.marketName)+"\n            ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("  Area Knone Name\n                 ")]),t._v("\n \n            "+t._s(a.areaKnownName)+"\n             \n            ")])])])]):t._e()}))],2)])])])]),t._v(" "),e("td",[e("div",{staticClass:"modal fade",attrs:{id:"triner"+s.id,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(25,!0),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Select Trainer")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.trainerId,expression:"trainerId"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.trainerId=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:""}},[t._v("Select One")]),t._v(" "),t._l(t.employeeLIsts,(function(a){return e("option",{key:a.id,domProps:{value:a.id}},[t._v("    "+t._s(a.name)+" "),e("span",{staticClass:"badge badge-info"},[t._v(t._s(a.mobile))])])}))],2)]),t._v(" "),e("button",{staticClass:"btn btn-success",attrs:{"data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return e.preventDefault(),t.assign(a.id)}}},[t._v("Assign")])])])])]),t._v(" "),e("div",{staticClass:"dropdown"},[t._m(26,!0),t._v(" "),e("div",{staticClass:"dropdown-content"},[e("a",{attrs:{href:"#","data-toggle":"modal","data-target":"#triner"+s.id}},[t._v("Assign Trainer")]),t._v(" "),e("router-link",{attrs:{to:"/trainingscheduleedit"+a.id}},[e("i",{staticClass:"fa fa-edit"}),t._v(" Next Schedule ")])],1)])])]):t._e()})),0)}))],2)])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"app-page-title"},[a("div",{staticClass:"page-title-wrapper"},[a("div",{staticClass:"page-title-heading"},[a("div",{staticClass:"page-title-icon"},[a("i",{staticClass:"pe-7s-menu icon-gradient bg-mean-fruit"})]),this._v(" "),a("div",[this._v("\n              Schedule List\n            "),a("div",{staticClass:"page-title-subheading"},[this._v("\n              Schedule List\n            ")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("ID")]),t._v(" "),e("th",[t._v("Shop Type")]),t._v(" "),e("th",[t._v("Shop Name")]),t._v(" "),e("th",[t._v("Shop Id ")]),t._v(" "),e("th",[t._v("Phone")]),t._v(" "),e("th",[t._v("Training Date")]),t._v(" "),e("th",[t._v("Training Time")]),t._v(" "),e("th",[t._v("Training Location")]),t._v(" "),e("th",[t._v("Member")]),t._v(" "),e("th",[t._v("Details")]),t._v(" "),e("th",[t._v("Action")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[this._v("Details")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Show Type\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Shop ID\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Shop Name\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v("  Need branch\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Shop Reffer By\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h5",[this._v(" Shop Owner Information ")]),this._v(" "),a("hr")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Owner Name:\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Owner Mobile No:\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h5",[this._v(" Shop Contact Person ")]),this._v(" "),a("hr")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Name:\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v("  Mobile No:\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h5",[this._v(" Shop Representative ")]),this._v(" "),a("hr")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v("  Name:\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v("  Mobile No:\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h5",[this._v(" Shop Address & Location ")]),this._v(" "),a("hr")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Country :\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" District :\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Union :\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v("  Address 1:\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Division: \n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Upazilla: \n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v(" Ward :\n                 "),a("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[this._v("Assign Triner")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"dropbtn"},[a("i",{staticClass:"fa fa-cogs",attrs:{"aria-hidden":"true"}}),this._v("\nSelect One")])}],!1,null,null,null);a.default=o.exports}}]);