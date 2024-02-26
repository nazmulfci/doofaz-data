require('./bootstrap');
window.Vue = require('vue');


// var moment = require('moment');

// const moment = require('vue-moment');
// Vue.use(moment);

Vue.use(require('vue-moment'));


// Import Editor
import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.use( CKEditor );

// import 'vue-search-select/dist/VueSearchSelect.css'

import Vuex from 'vuex';
Vue.use(Vuex);
import storeInfo from "./store";
const store = new Vuex.Store(storeInfo);

// Filter import
import {filter} from './filter'

// Import Route
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {routes} from './routes'
// const router = new VueRouter({
//     routes,
//     mode:'history',
// })

// Import Form
import { Form, HasError, AlertError } from 'vform'
window.Form = Form
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// Import Alert
import Swal from 'sweetalert2'
window.Swal = Swal
const Toast = Swal.mixin({
  toast: true,
  position: 'center-center',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
window.Toast = Toast

// Master Component
Vue.component('admin-content', require('./admin/AdminMaster.vue').default);
Vue.component('pay-now', require('./PayNow.vue').default);
// Vue.component('top-up', require('./admin/shopinformation/topUp.vue').default);
Vue.component('invoice', require('./invoice.vue').default);

Vue.component('loading', require('./Loading.vue').default);


// Paginate
Vue.component('pagination', require('laravel-vue-pagination'));
const router = new VueRouter({
  routes,
  mode:'history',


});

//vuetify


const app = new Vue({
  data: { loading: false },
    el: '#app',
    router,
    store,
    methods:{
      logout(){
        axios.get('admin/logout').then(res=>{
          window.location="/login"
        })
      },
      logoutShop(){
        axios.get('shop/logout').then(res=>{
          window.location="/shop/login"
        })
      }
    }

});

router.beforeEach((to, from, next) => {
  app.loading = true
    next()
})

router.afterEach(() => {
  setTimeout(() => app.loading = false, 100) // timeout for demo purposes
})

// ================= for data table
// import Vue from 'vue';
// import { VuejsDatatableFactory } from 'vuejs-datatable';

// Vue.use( VuejsDatatableFactory );
// =============== // for data table


import { MonthPicker } from 'vue-month-picker'
import { MonthPickerInput } from 'vue-month-picker'
import Axios from 'axios';

Vue.use(MonthPicker)
Vue.use(MonthPickerInput)




