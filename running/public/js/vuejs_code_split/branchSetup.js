(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{475:function(t,a,e){"use strict";e.r(a);var r={data:function(){return{addBranchInformation:!1,submitBtn:"Submit",branchInformations:[],authInfos:[],image:"",form:new Form({branchName:"",branchCode:"",branchMobileNo:"",branchRepresentativeName:"",branchRepresentativeMobileNo:"",branchAddress:""}),qrCodeSetup:{},exit:!1,mess:"",totalBranchPermission:"",totalBranchCreate:""}},mounted:function(){this.getAuthInfo(),this.getTotalBranchCreate(),this.getBranchCode(),this.view()},methods:{getAuthInfo:function(){var t=this;fetch("getAuthInfo").then((function(t){return t.json()})).then((function(a){t.authInfos=a.data}))},view:function(){var t=this;axios.get("branchInformationByShop").then((function(a){t.branchInformations=a.data.data}))},getBranchCode:function(){var t=this;axios.get("getBranchCode").then((function(a){t.form.branchCode=a.data.branchCode}))},showAddInformation:function(){this.addBranchInformation=!0},getTotalBranchCreate:function(){var t=this;axios.get("/getTotalBranchCreate").then((function(a){t.totalBranchCreate=a.data.totalCreate}))},editBrach:function(t){var a=this;this.addBranchInformation=!0;var e="getBranchInformationEdit/".concat(t);axios.get(e).then((function(t){a.form.branchName=t.data.data.branchName,a.form.branchCode=t.data.data.branchCode,a.form.branchMobileNo=t.data.data.branchMobileNo,a.form.branchRepresentativeName=t.data.data.branchRepresentativeName,a.form.branchRepresentativeMobileNo=t.data.data.branchRepresentativeMobileNo,a.form.branchAddress=t.data.data.branchAddress}))},addBranchInformationEntry:function(){var t=this;this.form.post("BranchInformation").then((function(a){Toast.fire({icon:"success",title:"Successfull."}),t.addBranchInformation=!1,t.getTotalBranchCreate(),t.getBranchCode(),t.view(),t.form.reset()}))}}},s=e(0),o=Object(s.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("div",{staticClass:"app-page-title"},[e("div",{staticClass:"page-title-wrapper"},[t._m(0),t._v(" "),e("div",{staticClass:"page-title-actions"},[e("router-link",{staticClass:"btn-shadow mr-3 btn btn-warning",attrs:{to:"/qrCodeSetup",type:"button",title:"","data-placement":"bottom","data-toggle":"tooltip","data-original-title":"Refresh"}},[e("i",{staticClass:"fa fa-undo text-white"})]),t._v(" "),t._m(1)],1)])]),t._v(" "),t.addBranchInformation?e("div",{staticClass:"card  mb-5"},[t._m(2),t._v(" "),e("form",{on:{submit:function(a){return a.preventDefault(),t.addBranchInformationEntry(a)}}},[e("div",{staticClass:"supplier-entry py-4 px-2 comm-form-back-img"},[e("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color"},[e("div",{staticClass:"form-group"},[e("label",[t._v(" Branch Name ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.branchName,expression:"form.branchName"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("branchName")},attrs:{type:"text",name:"branchName",placeholder:"Branch Name"},domProps:{value:t.form.branchName},on:{input:function(a){a.target.composing||t.$set(t.form,"branchName",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"branchName"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Branch Code ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.branchCode,expression:"form.branchCode"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("branchCode")},attrs:{type:"text",readonly:"",name:"branchCode",placeholder:"Branch Code"},domProps:{value:t.form.branchCode},on:{input:function(a){a.target.composing||t.$set(t.form,"branchCode",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"branchCode"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Branch Mobile No ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.branchMobileNo,expression:"form.branchMobileNo"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("branchMobileNo")},attrs:{type:"text",name:"branchMobileNo",placeholder:"Branch Mobile No"},domProps:{value:t.form.branchMobileNo},on:{input:function(a){a.target.composing||t.$set(t.form,"branchMobileNo",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"branchMobileNo"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Representative Name ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.branchRepresentativeName,expression:"form.branchRepresentativeName"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("branchRepresentativeName")},attrs:{type:"text",name:"branchRepresentativeName",placeholder:"Representive Name"},domProps:{value:t.form.branchRepresentativeName},on:{input:function(a){a.target.composing||t.$set(t.form,"branchRepresentativeName",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"branchRepresentativeName"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Representative Mobile No ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.branchRepresentativeMobileNo,expression:"form.branchRepresentativeMobileNo"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("branchRepresentativeMobileNo")},attrs:{type:"text",name:"branchRepresentativeMobileNo",placeholder:"Representive Mobile No"},domProps:{value:t.form.branchRepresentativeMobileNo},on:{input:function(a){a.target.composing||t.$set(t.form,"branchRepresentativeMobileNo",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"branchRepresentativeMobileNo"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Address ")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.branchAddress,expression:"form.branchAddress"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("branchAddress")},attrs:{type:"text",name:"branchAddress",placeholder:"Branch Address"},domProps:{value:t.form.branchAddress},on:{input:function(a){a.target.composing||t.$set(t.form,"branchAddress",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"branchAddress"}})],1)])]),t._v(" "),e("div",{staticClass:"d-block pt-3 pb-4 card-footer overflow-hidden"},[e("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12"},[t._m(3),t._v(" "),e("button",{staticClass:"btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right",attrs:{type:"submit"}},[t._m(4),t._v(" "),e("span",{staticClass:"mr-1"},[t._v(" "+t._s(t.submitBtn)+" ")])])])])])]):t._e(),t._v(" "),e("div",{staticClass:"card"},[t._m(5),t._v(" "),e("form",{on:{submit:function(a){return a.preventDefault(),t.addQrCodeInformation(a)}}},[e("div",{staticClass:"supplier-entry py-4 px-2 comm-form-back-img"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color"},[e("div",{staticClass:"col-12"},[e("h4",[t._v(" You have \n              "),t.authInfos.totalBranch?e("span",{staticClass:"badge badge-danger rounded-circle"},[t._v(" "+t._s(t.authInfos.totalBranch)+" ")]):e("span",{staticClass:"badge badge-danger rounded-circle"},[t._v(" No ")]),t._v("\n              branch.")])])]),t._v(" "),e("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color"},[e("div",{staticClass:"row"},[t._l(t.branchInformations,(function(a){return e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"col-lg-12 border rounded shadow p-4 mb-4 bg-white"},[e("h4",[t._v(" "+t._s(a.branchName)+" ")]),t._v(" "),e("h6",[t._v(" "+t._s(a.branchMobileNo)+" ")]),t._v(" "),e("span",{staticClass:"badge badge-success rounded"},[t._v(" Branch Code : "+t._s(a.branchCode)+" ")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"text-muted"},[t._v(" "+t._s(a.branchAddress)+" ")]),t._v(" "),e("div",{staticClass:"col-12"},[e("router-link",{staticClass:"btn-wide btn-pill btn btn-outline-primary btn-hover-shine",attrs:{to:"/branchSetup@Edit"+a.id}},[e("i",{staticClass:"fa fa-edit"}),t._v("Edit")])],1)])])})),t._v(" "),t.authInfos.totalBranch>t.totalBranchCreate?e("div",{staticClass:"col-lg-4 cursor-pointer"},[e("div",{staticClass:"col-lg-12 border rounded shadow p-4 mb-4 bg-white"},[e("a",{attrs:{href:"#"},on:{click:function(a){return t.showAddInformation()}}},[e("img",{staticClass:"img img-thumbnail",attrs:{src:"https://www.kindpng.com/picc/m/173-1737013_new-file-icon-png-transparent-png.png"}})])])]):t._e()],2)])])]),t._v(" "),t._m(6)])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-title-heading"},[a("div",{staticClass:"page-title-icon"},[a("i",{staticClass:"pe-7s-menu icon-gradient bg-mean-fruit"})]),this._v(" "),a("div",[this._v("\n            Branch Setup\n            "),a("div",{staticClass:"page-title-subheading"},[this._v("\n              Branch Setup\n            ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"d-inline-block dropdown"},[a("button",{staticClass:"btn-shadow btn btn-info",attrs:{type:"button",onclick:"window.history.back()"}},[a("span",{staticClass:"lnr lnr-arrow-left"}),this._v("\n              Back\n            ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header-tab card-header alert-info"},[a("div",{staticClass:"card-header-title font-size-lg text-capitalize font-weight-normal"},[a("i",{staticClass:"header-icon lnr-pencil icon-gradient bg-premium-dark"}),this._v(" "),a("h4",[this._v(" Add Information ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left",attrs:{type:"reset"}},[a("span",{staticClass:"mr-2 opacity-7"},[a("i",{staticClass:"fa fa-undo "})]),this._v(" "),a("span",{staticClass:"mr-1"},[this._v(" Clear ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"mr-2 opacity-7"},[a("i",{staticClass:"fa fa-paper-plane"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header-tab card-header alert-info"},[a("div",{staticClass:"card-header-title font-size-lg text-capitalize font-weight-normal"},[a("i",{staticClass:"header-icon lnr-pencil icon-gradient bg-premium-dark"}),this._v(" "),a("h4",[this._v(" View Branch Information ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"d-block pt-3 pb-4 card-footer overflow-hidden"},[a("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12"})])}],!1,null,null,null);a.default=o.exports}}]);