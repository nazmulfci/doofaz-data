<template id="">
  <span>

  

    <div class="card">
      
      
            <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Income Type Setup </h4>
        </div>
      </div>


<form @submit.prevent="addAccountsSetup"> 


<router-link :to="`/incomeExpense`" class="btn btn-primary"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                Back </router-link>
              



      <div class="supplier-entry py-4 px-2 comm-form-back-img">

       
         <div
          class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color"
        >
          
          <div class="form-group">
              <label>  Type <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
  
              <select
                v-model="form.expenseType"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('expenseType') }"
                @change="expenseTypeList()"
              >
                <option value=""> Select </option>
                <option v-for="expenseTypeList in expenseTypeLists" 
                :value="expenseTypeList.headCode"> {{expenseTypeList.headName}} </option> 
              </select>
              <has-error :form="form" field="expenseType"></has-error>
            </div>

 
            <div class="form-group">
              <label> Income Head Name
                <i class="fa fa-star text-danger text-10 cursor-pointer" 
                title="Mendatory Field" data-placement="top" data-toggle="tooltip" 
                data-original-title="Mendatory Field"></i></label>
 
              <input type="text"
                v-model="form.subHeadName"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('subHeadName') }"
              >
              <has-error :form="form" field="subHeadName"></has-error>
            </div>

              
        </div>
        </div>




        <!-- -----------------------------   card footer  -->
 
<div class="d-block pt-3 pb-4 card-footer overflow-hidden">
<div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">


                                <button type="reset" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-undo "></i>
                                    </span>
                                    <span class="mr-1"> Clear </span>
                                </button>

                                <button type="submit" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right"
                                :disabled="loading"
              >
                <span
                  v-if="loading"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>

                <span v-else class="mr-2 opacity-7">
                  <i class="fa fa-paper-plane"></i>
                </span>
                                    <span class="mr-1"> Add New Entry </span>
                                </button>


                            </div>
                            </div>
 
<!-- -----------------------------   // card footer  --> 


        
        </form>
 
    </div>

    <div class="card mt-5">
      <div class="card-header-tab card-header alert-info">
<h4><i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          View Information </h4>
      </div>

      <div class="supplier-entry py-4 px-2">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
            <thead>
              <tr>
                
                <th> SL </th>
           
                <th> Type </th>
                <th>Head Name</th>
                <th>Head Code</th>
                
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              
              <tr 
              v-for="(accountSetupInfo,index) in accountSetups" 
              :key="accountSetupInfo.id"
              >
               
                <td>{{ ++index }}</td>
                <td>
                    <span v-for="chartOfAccount in chartOfAccounts"
                    v-if="chartOfAccount.headCode == accountSetupInfo.incomeType"
                    >
                    {{ chartOfAccount.headName }}
                    </span>
                    </td>
                <td>{{ accountSetupInfo.name }}</td>
                <td>{{ accountSetupInfo.accountCode }}</td>
                <td>
                  <router-link
                    :to="`/accountSetupEdit${accountSetupInfo.id}`"
                    class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"
                  ><i class="fa fa-edit"></i> 
                  </router-link>
                </td>
                <td>
                  <button 
                    @click.prevent="deletePost(accountSetupInfo.id)"
                    class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine"
                >
                  <i class="fa fa-trash"></i> 
                  </button>
                </td> 
              </tr>

              <!-- empty row -->
              <!-- <tr>
                <td> . </td>
              </tr> -->
              <!-- empty row -->


            </tbody>
          </table>



          
        </div>
      </div>
    </div>
  </span>
</template>

<style>
.tree{
  width:1px;
  height: 70px;
  background: black;
  position: relative;
  float: left;
  margin-right: 20px;
  
}  
.tree1{
  width: 20px;
  height: 1px;
  background: rgb(0, 0, 0);
  margin-top: 28px;
}
</style>

<script>
export default {

  
  data() {
        return {
        chartOfAccounts: [],
        loading: false,
        accountSetups: [],
        expenseTypeLists: [],
        viewexpenseTypeLists: [],

        image: "",
        form: new Form({
                            expenseType: "",
                            subHeadName: "",
        }), 
        exit: false, 
        };
    },
  mounted() {
    this.view();
    this.expenseTypeList();
    this.chartOfAccount();
  },
  methods: {
    
    view() {
      let uri = "addIncomeType";
      axios.get(uri)
        .then((response) => {
          this.accountSetups = response.data.data;
        });
    },
    chartOfAccount() {
      let uri = "chartOfAccount";
      axios.get(uri)
        .then((response) => {
          this.chartOfAccounts = response.data.chartOfAccounts;
        });
    },
 

    placementTypeList(){

          let uri = `placementTypeList`;
          //$( "#headLavel" ).prop( "disabled", true );
        axios.get(uri).then(response=>{
          this.placementTypeLists = response.data.placementTypeList; 
        })

    },

    expenseTypeList(){
          let uri = `incomeTypeList`;
        axios.get(uri).then(response=>{
            this.expenseTypeLists = response.data.data;
        })
    },

    deletePost(id) {
      let uri = `accountSetupInfo/${id}`;
      axios.delete(uri).then((response) => {
        Toast.fire({
                icon: 'success',
                title: 'Delete Successfull.'
            })
        this.view();
      });
    },
 
 

    addAccountsSetup() {
      this.loading = true;
      this.form.post("addIncomeType").then((response) => {
        this.loading = false;
        
            Toast.fire({
                icon: "success",
                //background: '#fcd8d8', red
                //background: '#c9f4c9', green
                title: "Income Add Successfull.",
            }),

          
          this.form.reset();
          this.view();
          
      }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
    },
  },
};
</script>