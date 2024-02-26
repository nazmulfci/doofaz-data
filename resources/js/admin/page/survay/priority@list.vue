<template id="">
    <span>

        <div class="search-form col-md-6 offset-md-3" v-if="role==3">
            <form @submit.prevent="searchPriorityListWithEmployee()" method="post">
               <div class="row">
                   <div class="col-md-6">
                        <div class="form-group">
                           <label for="">Employee</label><br/>
                           <select class="form-control" v-model="form2.employee_id">
                               <option value="">Select Employee</option>
                               <option v-for="(EmployeeInfo,index) in employeeLists" :key="index" :value="EmployeeInfo.id">
                                   {{ EmployeeInfo.userName }}
                                </option>
                           </select>
                        </div>
                   </div>
                   <div class="col-md-4">
                       <div class="form-group">
                          <label for="">Priority Status</label><br/>
                          <select class="form-control" v-model="form2.statusDelete">
                              <option value="">Select Status</option>
                              <option value="2">Delete</option>
                          </select>
                       </div>
                   </div>
                   <div class="col-md-2">
                       <div class="form-group">
                           <button type="submit" class="btn btn-sm btn-primary search_btn">Search</button>
                       </div>

                  </div>
                </div>
            </form>
        </div>

      <div class="card mt-2">
        <div class="card-header-tab card-header alert-info">
         <h4>
            <i class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"></i>
             <button class="btn btn-sm btn-info" v-if="role==4">
                <router-link to="/delete@priority" style="color:#000;font-weight:600;font-size:14px;">Delete Priority List</router-link>
            </button>
         </h4>
        </div>

        <div class="supplier-entry py-4 px-2">
           <div class="card-body table-responsive bg-white">

            <new-entry-list
            :shopInformations="shopInformations"
            :role="`all`"
            :buttonHideShow="`new`"
            :paginationStatu="1"
            :priorityDelete="true"
          ></new-entry-list>

          

          </div>
        </div>
      </div>

    </span>
  </template>

  <script>
import NewEntryList from "./newEntryList.vue";
    import moment from 'moment';
  export default {

    components: {
    "new-entry-list": NewEntryList,
  },
    data() {
      return {
 
        form2:new Form({
           employee_id:'',
           statusDelete:'',
        }),

        moment: moment,
        shopInformations: [],
        employeeLists: [],
        role:[],
      };
    },

    mounted() {
      this.view();
      this.viewEmployee();
    },

    methods: {

    view(){
      axios.get('priority/view').then((response)=>{
        this.shopInformations = response.data.data;
        this.role=response.data.role;
      })
    },




      viewEmployee(){
       axios.get('get/employee/list').then((response)=>{
          this.employeeLists=response.data.data;
       });
    },

    searchPriorityListWithEmployee(){
        if(this.form2.employee_id!=''){
            this.form2.post('/priority/search/with/employee').then((response)=>{
            this.shopInformations = response.data.data;
        });
        }else{
            Toast.fire({
                icon: 'error',
                title: 'Please Select Information'
            });
        }

    },

    },
  };
  </script>

  <style scoped>
    .dropdown-item {
      display: block;
      width: 100%;
      padding: 2px 10px;
      clear: both;
      font-weight: 400;
      color: #212529;
      text-align: inherit;
      white-space: nowrap;
      background-color: transparent;
      border: 0;
    }

  #btn_form {
    margin: 2px 0px;
    border: none;
    border-radius: 20px;
  }
  fa.fa-edit{
    margin-left:-12px!important;
  }
 span#underscore_remove{
  color:transparent!important;
 }
 .table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #e9ecef;
  background: #d0c6a6;
}
.table-bordered th, .table-bordered td {
  border: 1px solid rgba(0,0,0,.3);
}
label{
  float:left;
}

.pagination button {
	border: none;
	padding: 5px 10px;
	background: #ddd;
	margin: 5px 1px;
	cursor: pointer;
	color: #000;
	border: 1px solid rgba(0,0,0,.1);
}
.pagination button:disabled,
.pagination button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}

.btn.btn-sm.btn-primary.search_btn {
	margin-top: 29px;
	padding: 7px 20px;
}
.search-form{
	background: #fff;
	border: 1px solid rgba(0,0,0,.2);
	padding: 20px 15px 10px 10px;
}
.modal-header{
    background: #d0eeff;
}
.col-12.supplier-border.comm-form-box-back-color {
	padding: 10px;
}
  </style>
