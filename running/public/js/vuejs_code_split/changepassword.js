(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{329:function(s,r,o){"use strict";var a=o(68);o.n(a).a},330:function(s,r,o){(s.exports=o(2)(!1)).push([s.i,"\n.change-password label{\n  font-size:17px;\n}\n",""])},68:function(s,r,o){var a=o(330);"string"==typeof a&&(a=[[s.i,a,""]]);var t={hmr:!0,transform:void 0,insertInto:void 0};o(3)(a,t);a.locals&&(s.exports=a.locals)},770:function(s,r,o){"use strict";o.r(r);var a={data:function(){return{form:new Form({oldPassword:"",newPassword:"",confirmPassword:""}),thisIsDemoId:0}},mounted:function(){this.checkDemoId()},methods:{checkDemoId:function(){var s=this;this.form.get("/checkDemoId").then((function(r){s.thisIsDemoId=r.data.thisIsDemoId}))},passwordChange:function(){var s=this;this.form.post("/changePassword").then((function(r){r.data.success?(Toast.fire({icon:"success",title:"Password Change Successfully"}),s.form.reset()):r.data.nomatch?Toast.fire({icon:"error",title:"New Password and Confirm Password Not Match"}):r.data.oldPassword&&Toast.fire({icon:"error",title:"Old Password Not Match"})}))}}},t=(o(329),o(0)),e=Object(t.a)(a,(function(){var s=this,r=s.$createElement,o=s._self._c||r;return o("span",[o("div",{staticClass:"card p-0 col-10 col-sm-8 col-md-7  offset-md-3 offset-sm-2 offset-1"},[s._m(0),s._v(" "),s.thisIsDemoId?o("div",{staticClass:"change-password p-md-5 p-3 "},[o("h4",{staticClass:"text-danger"},[s._v(" Demo shop can't be change password. ")])]):o("div",{staticClass:"change-password p-md-5 p-3 "},[o("form",{on:{submit:function(r){return r.preventDefault(),s.passwordChange()}}},[o("div",{staticClass:"form-group"},[o("label",[s._v("Old Password")]),s._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:s.form.oldPassword,expression:"form.oldPassword"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("oldPassword")},attrs:{type:"password",placeholder:"Enter New Password"},domProps:{value:s.form.oldPassword},on:{input:function(r){r.target.composing||s.$set(s.form,"oldPassword",r.target.value)}}}),s._v(" "),o("has-error",{attrs:{form:s.form,field:"oldPassword"}})],1),s._v(" "),o("div",{staticClass:"form-group"},[o("label",[s._v("New Password")]),s._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:s.form.newPassword,expression:"form.newPassword"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("newPassword")},attrs:{type:"password",placeholder:"Enter Old Password"},domProps:{value:s.form.newPassword},on:{input:function(r){r.target.composing||s.$set(s.form,"newPassword",r.target.value)}}}),s._v(" "),o("has-error",{attrs:{form:s.form,field:"newPassword"}})],1),s._v(" "),o("div",{staticClass:"form-group"},[o("label",[s._v("Confirm Password")]),s._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:s.form.confirmPassword,expression:"form.confirmPassword"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("confirmPassword")},attrs:{type:"password",placeholder:"Enter Confirm Password"},domProps:{value:s.form.confirmPassword},on:{input:function(r){r.target.composing||s.$set(s.form,"confirmPassword",r.target.value)}}}),s._v(" "),o("has-error",{attrs:{form:s.form,field:"confirmPassword"}})],1),s._v(" "),s._m(1)])])])])}),[function(){var s=this.$createElement,r=this._self._c||s;return r("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.20)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[r("h3",{staticStyle:{color:"black"}},[this._v("Password Change")])])},function(){var s=this.$createElement,r=this._self._c||s;return r("div",{},[r("button",{staticClass:"mr-2 btn-pill btn-hover-shine btn btn-primary",attrs:{type:"submit"}},[this._v("Update Password")])])}],!1,null,null,null);r.default=e.exports},771:function(s,r,o){"use strict";o.r(r);var a={data:function(){return{form:new Form({current_password:"",new_password:"",new_confirm_password:""})}},methods:{playSound:function(){new Audio("https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3").play()},add:function(){var s=this;this.form.post("change-password",{method:"post",body:JSON.stringify(this.change-password),headers:{"content-type":"application/json"}}).then((function(r){s.form.reset(),s.playSound(),Toast.fire({icon:"success",title:"Successfully Change  Password"})})).catch((function(s){return console.log(s)}))}}},t=o(0),e=Object(t.a)(a,(function(){var s=this,r=s.$createElement,o=s._self._c||r;return o("div",{staticClass:"container"},[o("div",{staticClass:"row "},[o("div",{staticClass:"col-md-2  "}),s._v(" "),o("div",{staticClass:"col-md-6 "},[o("div",{staticClass:"card "},[o("div",{staticClass:"card-body  ",staticStyle:{padding:"22px"}},[o("form",{on:{submit:function(r){return r.preventDefault(),s.add(r)}}},[o("div",{staticClass:"form-group row",class:{"has-error":s.form.errors.has("current_password")}},[o("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[s._v("Current Password")]),s._v(" "),o("div",{staticClass:"col-md-6"},[o("input",{directives:[{name:"model",rawName:"v-model",value:s.form.current_password,expression:"form.current_password"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("current_password")},attrs:{id:"password",type:"password",name:"current_password",autocomplete:"current-password"},domProps:{value:s.form.current_password},on:{input:function(r){r.target.composing||s.$set(s.form,"current_password",r.target.value)}}}),s._v(" "),o("has-error",{attrs:{form:s.form,field:"current_password"}})],1)]),s._v(" "),o("div",{staticClass:"form-group row",class:{"has-error":s.form.errors.has("new_password")}},[o("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[s._v("New Password")]),s._v(" "),o("div",{staticClass:"col-md-6"},[o("input",{directives:[{name:"model",rawName:"v-model",value:s.form.new_password,expression:"form.new_password"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("new_password")},attrs:{id:"new_password",type:"password",name:"new_password",autocomplete:"current-password"},domProps:{value:s.form.new_password},on:{input:function(r){r.target.composing||s.$set(s.form,"new_password",r.target.value)}}}),s._v(" "),o("has-error",{attrs:{form:s.form,field:"new_password"}})],1)]),s._v(" "),o("div",{staticClass:"form-group row",class:{"has-error":s.form.errors.has("new_confirm_password")}},[o("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[s._v("New Confirm Password")]),s._v(" "),o("div",{staticClass:"col-md-6"},[o("input",{directives:[{name:"model",rawName:"v-model",value:s.form.new_confirm_password,expression:"form.new_confirm_password"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("new_confirm_password")},attrs:{id:"new_confirm_password",type:"password",name:"new_confirm_password",autocomplete:"current-password"},domProps:{value:s.form.new_confirm_password},on:{input:function(r){r.target.composing||s.$set(s.form,"new_confirm_password",r.target.value)}}}),s._v(" "),o("has-error",{attrs:{form:s.form,field:"new_confirm_password"}})],1)]),s._v(" "),s._m(0)])])])])])])}),[function(){var s=this.$createElement,r=this._self._c||s;return r("div",{staticClass:"form-group row mb-0"},[r("div",{staticClass:"col-md-8 offset-md-4"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("\n                                    Update Password\n                                ")])])])}],!1,null,null,null);r.default=e.exports}}]);