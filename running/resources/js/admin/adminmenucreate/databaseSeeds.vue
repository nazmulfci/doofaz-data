<template id="">
  <span>



        <!-- ------------------- page title  -->
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-menu icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Database Seeds
            <div class="page-title-subheading">
              Database Seeds
            </div>
          </div>
        </div>
        <div class="page-title-actions">
          <router-link to="/qrCodeSetup"
            type="button"
            class="btn-shadow mr-3 btn btn-warning"
            title=""
            data-placement="bottom"
            data-toggle="tooltip"
            data-original-title="Refresh"
            
          >
            <i class="fa fa-undo text-white"></i>
          </router-link>
          <div class="d-inline-block dropdown">
            <button
              type="button"
              class="btn-shadow btn btn-info"
              onclick="window.history.back()"
            >
              
                <span class="lnr lnr-arrow-left"></span>
              Back
            </button>
            
          </div>
        </div>
      </div>
    </div>

<!-- ------------------- // page title  -->





    <div class="card">
      
      
            <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Database Seeds </h4>
        </div>
      </div>


<form @submit.prevent="getCodeDatabaseSeeds"> 
      <div class="supplier-entry py-4 px-2 comm-form-back-img">

       
         <div
          class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color"
        >
          
           
              <!-- <small v-if="exit==true" class="text-danger"> this is already exist. </small> -->
              

            <div class="form-group">
              <label> Table Name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
              <input type="text"
                v-model="form.tableName"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('tableName') }"
                >
              <has-error :form="form" field="tableName"></has-error>
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

                                <button type="submit"  class="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-paper-plane"></i>
                                    </span>
                                    <span class="mr-1"> Get Seeds Code </span>
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
        
        
        <div class="code" v-html="data"> 
          
        </div>


        </div>
      </div>
    </div>
  </span>
</template>

<script>
export default {

  
  data() {
    return {
      data: [],

      form: new Form({
        tableName: "",
      }),


    };
  },
  mounted() {
     
  },
  methods: {
 

        getCodeDatabaseSeeds(){
            alert(this.form.tableName);
          let uri = 'getCodeDatabaseSeeds/'+this.form.tableName;
        axios.get(uri).then(response=>{
            this.data = response.data.data;
        })
    },



  },
};
</script>