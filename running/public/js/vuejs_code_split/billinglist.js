(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{912:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{userLists:[],shopTypeLists:[],countryLists:[],currencyLists:[],divisionLists:[],districtLists:[],upazillaLists:[],unionLists:[],wardLists:[],saddress:[],lists:[],userNameExist:!1,image:"",form:new Form({shopTypeId:"",shopSirialId:"",shopName:"",email:"",refferUserId:"",website:"",facebook:"",youtube:"",haveBranch:"",totalBranch:"0",shopOwnerName:"",shopOwnerMobileNo:"",shopOwnerEmail:"",shopOwnerAddress:"",shopOwnerPhoneNo:"",CPName:"",CPMobileNo:"",CPEmail:"",CPAddress:"",CPPhoneNo:"",SRName:"",SRMobileNo:"",SREmail:"",SRAddress:"",SRPhoneNo:"",currencyId:"",countryId:"",divisionId:"",districtId:"",thanaId:"",unionId:"",wardId:"",addressLine1:"",front:"",left:"",shopSize:"",shopNo:"",addressLine2:"",back:"",right:"",marketName:"",areaKnownName:""}),rate:"",sms:{},shopInformations:[],exit:!1,howManyBranch:!1,mess:""}},mounted:function(){this.userList(),this.shopTypeList(),this.view(),this.getCurrentRate()},methods:{getCurrentRate:function(){var t=this;axios.get("https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=21eba4f4ff74e127cda2").then((function(e){t.rate=e.data}))},alertRate:function(){alert(this.rate.USD_PHP)},pending:function(t){var e=this;axios.get("billingShop/".concat(t,"/edit")).then((function(t){Toast.fire({icon:"success",title:"Forwarded Successfull."}),e.view()}))},cancel:function(t){var e=this;axios.get("billingShop/".concat(t)).then((function(t){Toast.fire({icon:"success",title:"Canceled Successfull."}),e.view()}))},delivered:function(t,e){var s=this;axios.get("deliveredBillingStatus/".concat(t)).then((function(t){axios.put("https://portal.safejob.net/api/newshop/".concat(e)).then((function(t){Toast.fire({icon:"success",title:"Delivered Successfull."}),s.view()}))}))},ownerAsContactPerson:function(t){t.target.checked?(this.form.CPName=this.form.shopOwnerName,this.form.CPMobileNo=this.form.shopOwnerMobileNo,this.form.CPEmail=this.form.shopOwnerEmail,this.form.CPAddress=this.form.shopOwnerAddress,this.form.CPPhoneNo=this.form.shopOwnerPhoneNo):(this.form.CPName="",this.form.CPMobileNo="",this.form.CPEmail="",this.form.CPAddress="",this.form.CPPhoneNo="")},ownerAsRepresentative:function(t){t.target.checked?(this.form.SRName=this.form.shopOwnerName,this.form.SRMobileNo=this.form.shopOwnerMobileNo,this.form.SREmail=this.form.shopOwnerEmail,this.form.SRAddress=this.form.shopOwnerAddress,this.form.SRPhoneNo=this.form.shopOwnerPhoneNo):(this.form.SRName="",this.form.SRMobileNo="",this.form.SREmail="",this.form.SRAddress="",this.form.SRPhoneNo="")},view:function(){var t=this;axios.get("billingList").then((function(e){t.shopInformations=e.data.newshop,t.saddress=e.data.shopaddress,t.lists=e.data.blist}))},shopTypeList:function(){var t=this;axios.get("api/shopTypeEntry").then((function(e){t.shopTypeLists=e.data.data}))},userList:function(){var t=this;axios.get("getUserInfo").then((function(e){t.userLists=e.data.data}))},changeStatus:function(t){var e=this,s="shopInformation/changeStatus/".concat(t);axios.get(s).then((function(t){var s="Welcome to cashbook. your shop user name :"+t.data.email+" and password :"+t.data.password,a=t.data.mobileNo,i=t.data.smsStatus;(Toast.fire({icon:"success",title:"Status Change Successfully"}),1==i)&&fetch("http://sms.doofazit.com/api/v1/send?api_key=44515814867233291581486723&contacts="+a+"&senderid=8801844532643&msg="+s);e.view()}))},getShopId:function(){var t=this;axios.get("getShopId/"+this.form.shopTypeId).then((function(e){t.form.shopSirialId=e.data.data}))},haveBranch:function(){1==this.form.haveBranch?this.howManyBranch=!0:this.howManyBranch=!1},checkUserName:function(){var t=this;axios.get("checkemail/"+this.form.email).then((function(e){"Allready exist."==e.data.exist?t.userNameExist=!0:t.userNameExist=!1}))},deletePost:function(t){var e=this,s="qrCodeSetup/".concat(t);axios.delete(s).then((function(t){Toast.fire({icon:"success",title:"Delete Successfull."}),e.view()}))},addShopInformation:function(){var t=this;this.form.post("shopInformation").then((function(e){Toast.fire({icon:"success",background:"#c9f4c9",title:"Shop Add Successfull."}),t.view(),$("#ownerAsContactPerson").prop("checked",!1),$("#ownerAsRepresentative").prop("checked",!1),t.form.reset()}))}}},i=s(0),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[t._m(0),t._v(" "),s("div",{staticClass:"card mt-5"},[s("div",{staticClass:"supplier-entry py-4 px-2"},[s("div",{staticClass:"card-body table-responsive bg-white"},[s("table",{staticClass:"table table-hover table-striped table-bordered",staticStyle:{width:"100%"},attrs:{id:"example"}},[t._m(1),t._v(" "),t._l(t.lists,(function(e){return s("tbody",{key:e.id},t._l(t.shopInformations,(function(a,i){return e.id==a.id?s("tr",{key:a.shopInfoId},[s("td",[t._v(t._s(++i))]),t._v(" "),s("td",[t._v(t._s(a.shoptype.shopTypeName))]),t._v(" "),s("td",[t._v(t._s(a.shopName))]),t._v(" "),s("td",[t._v(t._s(a.shopSirialId))]),t._v(" "),s("td",[a.shopownerinfo?s("span",[t._v(t._s(a.shopownerinfo.shopOwnerMobileNo))]):t._e()]),t._v(" "),s("td",[t._v(t._s(e.billingDate))]),t._v(" "),s("td",[s("div",[s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#details"+a.id}},[s("i",{staticClass:"fa fa-info-circle",attrs:{"aria-hidden":"true"}}),t._v(" More\n")])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"details"+a.id,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog xl"},[s("div",{staticClass:"modal-content"},[t._m(2,!0),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 col-12"},[s("div",{staticClass:"form-group"},[t._m(3,!0),t._v("\n \n              "+t._s(a.shoptype.shopTypeName)+"\n             \n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[t._m(4,!0),t._v("\n \n            "+t._s(a.shopSirialId)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[t._m(5,!0),t._v("\n \n         "+t._s(a.shopName)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[t._m(6,!0),t._v("\n \n              "+t._s(a.haveBranch)+"\n            ")])]),t._v(" "),s("div",{staticClass:"col-lg-6 col-12"},[s("div",{staticClass:"form-group"},[t._m(7,!0),t._v(" "),a.refferuser?s("span",[t._v("  "+t._s(a.refferuser.name))]):t._e()]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v(" Shop Website Link\n                 ")]),t._v("\n \n            "+t._s(a.website)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v(" Shop Facebook Link\n                 ")]),t._v("\n \n              "+t._s(a.facebook)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v(" Shop Youtube Link\n                 ")]),t._v("\n  "+t._s(a.yoytubr)+"\n            ")])])])]),t._v(" "),s("div",{staticClass:"col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color mt-5"},[t._m(8,!0),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 col-12"},[s("div",{staticClass:"form-group"},[t._m(9,!0),t._v("\n \n          "+t._s(a.shopownerinfo.shopOwnerName)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[t._m(10,!0),t._v("\n \n          "+t._s(a.shopownerinfo.shopOwnerMobileNo)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v(" Owner Email:\n                 ")]),t._v("\n \n          "+t._s(a.shopownerinfo.shopOwnerEmail)+"\n            ")])]),t._v(" "),s("div",{staticClass:"col-lg-6 col-12"},[s("div",{staticClass:"form-group"},[s("label",[t._v(" Owner Address:\n                 ")]),t._v("\n \n              "+t._s(a.shopownerinfo.shopOwnerAddress)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v(" Owner Phone No:\n                 ")]),t._v("\n \n             "+t._s(a.shopownerinfo.shopOwnerPhoneNo)+"\n            ")])])])]),t._v(" "),s("div",{staticClass:"col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color mt-5"},[t._m(11,!0),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 col-12"},[s("div",{staticClass:"form-group"},[t._m(12,!0),t._v("\n \n              "+t._s(a.shopcontactpersion.CPName)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[t._m(13,!0),t._v("\n \n              "+t._s(a.shopcontactpersion.CPMobileNo)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v(" Email:\n                 ")]),t._v("\n \n              "+t._s(a.shopcontactpersion.CPEmail)+"\n            ")])]),t._v(" "),s("div",{staticClass:"col-lg-6 col-12"},[s("div",{staticClass:"form-group"},[s("label",[t._v("  Address:\n                 ")]),t._v("\n \n             "+t._s(a.shopcontactpersion.CPAddress)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("  Phone No:\n                 ")]),t._v("\n \n            "+t._s(a.shopcontactpersion.CPPhoneNo)+"\n            ")])])])]),t._v(" "),s("div",{staticClass:"col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color mt-5"},[t._m(14,!0),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 col-12"},[s("div",{staticClass:"form-group"},[t._m(15,!0),t._v("\n \n              "+t._s(a.shoprepresentative.SRName)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[t._m(16,!0),t._v("\n \n             "+t._s(a.shoprepresentative.SRMobileNo)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("  Email:\n                 ")]),t._v("\n \n            "+t._s(a.shoprepresentative.SREmail)+"\n            ")])]),t._v(" "),s("div",{staticClass:"col-lg-6 col-12"},[s("div",{staticClass:"form-group"},[s("label",[t._v("  Address:\n                 ")]),t._v("\n \n           "+t._s(a.shoprepresentative.SRAddress)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("  Phone No\n                 ")]),t._v("\n \n                  "+t._s(a.shoprepresentative.SRPhoneNo)+"\n            ")])])])]),t._v(" "),t._l(t.saddress,(function(e){return e.shopId==a.id?s("div",{staticClass:"col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color mt-5"},[t._m(17,!0),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 col-12"},[s("div",{staticClass:"form-group"},[t._m(18,!0),t._v("\n  \n            "+t._s(e.country.name)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[t._m(19,!0),t._v("\n              "+t._s(e.district.district_name)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[t._m(20,!0),t._v("\n                    "+t._s(e.union.union_name)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[t._m(21,!0),t._v("\n \n             "+t._s(e.addressLine1)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("  Front Side:\n                 ")]),t._v("\n \n               "+t._s(e.front)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("  Left Side:\n                 ")]),t._v("\n \n            "+t._s(e.left)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("  Shop Size:\n                 ")]),t._v("\n  "+t._s(e.shopSize)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("  Shop No:\n                 ")]),t._v("\n \n               "+t._s(e.shopNo)+"\n            ")])]),t._v(" "),s("div",{staticClass:"col-lg-6 col-12"},[s("div",{staticClass:"form-group"},[t._m(22,!0),t._v("\n  \n               "+t._s(e.division.division_name)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[t._m(23,!0),t._v("\n   "+t._s(e.thana.upazila_name)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[t._m(24,!0),t._v("\n  \n             "+t._s(e.ward.ward_name)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("  Address 2:\n                 ")]),t._v("\n \n             "+t._s(e.addressLine2)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("  Back Side:\n                 ")]),t._v("\n \n          "+t._s(e.back)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v(" Right Side \n                 ")]),t._v("\n "+t._s(e.right)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("  Market Name\n                 ")]),t._v("\n \n              "+t._s(e.marketName)+"\n            ")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("  Area Knone Name\n                 ")]),t._v("\n \n            "+t._s(e.areaKnownName)+"\n             \n            ")])])])]):t._e()}))],2)])])])]),t._v(" "),s("td",[s("router-link",{staticClass:"btn-wide btn-pill btn btn-outline-primary btn-hover-shine",attrs:{to:"/billDate@Update"+e.id}},[t._v("\n                      Grace Date ")])],1)]):t._e()})),0)}))],2)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-page-title"},[e("div",{staticClass:"page-title-wrapper"},[e("div",{staticClass:"page-title-heading"},[e("div",{staticClass:"page-title-icon"},[e("i",{staticClass:"pe-7s-menu icon-gradient bg-mean-fruit"})]),this._v(" "),e("div",[this._v("\n            New Shop\n            "),e("div",{staticClass:"page-title-subheading"},[this._v("\n              New Shop\n            ")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("ID")]),t._v(" "),s("th",[t._v("Shop Type")]),t._v(" "),s("th",[t._v("Shop Name")]),t._v(" "),s("th",[t._v("Shop Id ")]),t._v(" "),s("th",[t._v("Phone")]),t._v(" "),s("th",[t._v("Billing Date")]),t._v(" "),s("th",[t._v("Details")]),t._v(" "),s("th",[t._v("Action")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[this._v("Details")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Show Type\n                 "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Shop ID\n                 "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Shop Name\n                 "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("  Need branch\n                 "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Shop Reffer By\n                 "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h5",[this._v(" Shop Owner Information ")]),this._v(" "),e("hr")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Owner Name:\n                 "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Owner Mobile No:\n                 "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h5",[this._v(" Shop Contact Person ")]),this._v(" "),e("hr")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Name:\n                 "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("  Mobile No:\n                 "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h5",[this._v(" Shop Representative ")]),this._v(" "),e("hr")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("  Name:\n                 "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("  Mobile No:\n                 "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h5",[this._v(" Shop Address & Location ")]),this._v(" "),e("hr")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Country :\n                 "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" District :\n                 "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Union :\n                 "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("  Address 1:\n                 "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Division: \n                 "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Upazilla: \n                 "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" Ward :\n                 "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])}],!1,null,null,null);e.default=o.exports}}]);