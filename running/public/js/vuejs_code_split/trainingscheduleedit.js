(window.webpackJsonp=window.webpackJsonp||[]).push([[499],{922:function(t,e,a){"use strict";a.r(e);var i={data:function(){return{form:new Form({tDate:"",tTime:"",tMember:"",tLocation:""}),limit:{}}},mounted:function(){this.view()},methods:{update:function(){var t=this,e="training/".concat(this.$route.params.id);axios.put(e,this.form).then((function(e){Toast.fire({icon:"success",title:"Update Successfull"}),t.form.reset()}))},view:function(){var t=this,e="training/".concat(this.$route.params.id,"/edit");axios.get(e).then((function(e){t.form.fill(e.data)}))},distroy:function(t){var e=this;axios.delete("graceDateEn/".concat(t)).then((function(t){Toast.fire({icon:"success",title:" Delete Successfully"}),e.view()}))}}},o=a(0),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"supplier-entry py-4 px-2"},[a("div",{staticClass:"col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.update()}}},[a("div",{staticClass:"form-group"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tDate,expression:"form.tDate"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.form.tDate},on:{input:function(e){e.target.composing||t.$set(t.form,"tDate",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Training Time")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tTime,expression:"form.tTime"}],staticClass:"form-control",attrs:{type:"text",name:"tTime",placeholder:"Training Time"},domProps:{value:t.form.tTime},on:{input:function(e){e.target.composing||t.$set(t.form,"tTime",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Total Member")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tMember,expression:"form.tMember"}],staticClass:"form-control",attrs:{type:"text",name:"tMember",placeholder:"Member"},domProps:{value:t.form.tMember},on:{input:function(e){e.target.composing||t.$set(t.form,"tMember",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Location")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tLocation,expression:"form.tLocation"}],staticClass:"form-control",attrs:{type:"text",name:"tLocation",placeholder:"Training Location"},domProps:{value:t.form.tLocation},on:{input:function(e){e.target.composing||t.$set(t.form,"tLocation",e.target.value)}}})]),t._v(" "),t._m(2)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header",staticStyle:{background:"rgba(221, 221, 221, 0.20)",border:"1px solid rgba(0, 0, 0, 0.05)"}},[e("h3",{staticStyle:{color:"black"}},[this._v("Admin Type Create")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("Training date\n               "),e("i",{staticClass:"fa fa-star text-danger text-10 cursor-pointer",attrs:{title:"Mendatory Field","data-placement":"top","data-toggle":"tooltip","data-original-title":"Mendatory Field"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-right pt-3"},[e("button",{staticClass:"mr-2 btn btn-pill btn-hover-shine  btn-primary",attrs:{type:"submit"}},[this._v("Submit")])])}],!1,null,null,null);e.default=r.exports}}]);