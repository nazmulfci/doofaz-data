<template id="">
    <span>
   
      <div class="card">
        
              <div class="card-header-tab card-header alert-info">
          <div
            class="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i
              class="header-icon lnr-pencil icon-gradient bg-premium-dark"
            ></i>
           <h4> Area Entry </h4>
          </div>
        </div>
  
  
  <form @submit.prevent="areaUpdate"> 
        <div class="supplier-entry py-4 px-2 comm-form-back-img ">
  
  
  
         <!-- ===================================================================== -->
         <!-- ===================== shop Address information =============== -->
         <!-- ===================================================================== -->
           <div
            class="col-lg-7 px-lg-10 col-sm-11 offset-sm-2 col-12 supplier-border comm-form-box-back-color mt-5"
          >
   
  
            
              <div class="row">
  
              <div class="col-12">
               
              
               <input type="hidden" v-model="form.areaId">
  
              <div class="form-group">
                <label> Country 
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
    
                <select
                  v-model="form.countryId"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('countryId') }"
                  name="countryId"
                 
                >
                   <option value=""> Select Currency  </option>
                  <option
                    v-for="countryList in currencyLists"
                    :key="countryList.id"
                    :value="countryList.id"
                  >
                    {{ countryList.country }}
                  </option>
                   
                </select>  
                <has-error :form="form" field="countryId"></has-error>
              </div>
              
  
  
                <div class="form-group">
                <label> Division 
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
    
                <select
                  v-model="form.divisionId"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('divisionId') }"
                  @change.prevent="districtShow()"
                >
                  <option value=""> Select Division  </option>
                  <option
                    v-for="divisionList,index in divisionList1s"
                    :key="divisionList.id"
                    :value="divisionList.id"
                  >
                 
                    {{ divisionList.division_name }}
                  </option>
                  </select>
                <has-error :form="form" field="divisionId"></has-error>
              </div>
  
              
               <div class="form-group">
                <label> District 
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
    
                <select
                  v-model="form.districtId"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('districtId') }"
                  @change.prevent="upazillaShow()"
                >
                  <option value=""> Select District  </option>
                  <option
                    v-for="districtList,index in districtList1s"
                    :key="districtList.id"
                    :value="districtList.id"
                  >
                  
                    {{ districtList.district_name }}
                  </option>
                  </select>
                <has-error :form="form" field="districtId"></has-error>
              </div>
              <div class="form-group">
                <label> Upazilla 
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
    
                <select
                  v-model="form.thanaId"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('thanaId') }"
                  @change.prevent="unionShow()"
                >
                  <option value=""> Select Upazila  </option>
                  <option
                    v-for="upazillaList,index in upazillaList1s"
                    :key="upazillaList.id"
                    :value="upazillaList.id"
                  >
                    {{ upazillaList.upazila_name }}
                  </option>
                  </select>
                <has-error :form="form" field="thanaId"></has-error>
              </div>
              
              <div class="form-group">
                <label> Area 
                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                   </label>
    
                   <input type="text" 
                  v-model="form.areaName"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('areaName') }"
                >
                <has-error :form="form" field="areaName"></has-error>
              </div>
              
              
              
                 
              
              </div>
  
  
            <!------------------     ----------------------->
  
            
  
  
  
              </div>
   
          </div>
  
  
  
  
         <!-- ===================================================================== -->
         <!-- ==================== // shop address information ==================== -->
         <!-- ===================================================================== -->
  
  
  
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
                                      <span class="mr-1"> Update </span>
                                  </button>
  
  
                              </div>
                              </div>
   
  <!-- -----------------------------   // card footer  --> 
  
  
          
          </form>
   
      </div>

    </span>
  </template>
  
  <script>
  
  export default {
  
    
    data() {
      return {
        loading:false,
        
        form: new Form({
          
          currencyId: "",
          countryId: "",
          divisionId: "",
          districtId: "",
          thanaId: "",
          unionId: "",
          wardId: "",
          areaName: "",
          areaId:"",
  
         
  
        }),
        currencyLists:[],
        divisionLists:[],
        districtLists:[],
        upazillaLists:[],
       
        divisionList1s:[],
        districtList1s:[],
        upazillaList1s:[],

        viewAreaLists:[],
        countryLists:[],
  
      };
    },
  
    mounted() {
      this.allCountry();
      this.currencyList();
      this.division();
      this.district();
      this.upazilla();
      this.view();
      this.areaEdit();
  
    },
  
    methods: {

      allCountry(){
         axios.get('api/countryListAll').then((response)=>{
            this.countryLists = response.data.countryList;
         });
      },

        areaEdit(){
         axios.get(`areaEdit/${this.$route.params.id}`).then((response)=>{
             this.form.fill(response.data.data);
             this.form.areaId = response.data.data.id;
         });
      },
    
      currencyList() {
        let uri = `currencyList`;
        axios.get(uri).then((response) => {
          this.currencyLists = response.data.currencyList;
        });
      },
  
  
      division() {
        axios.get("divisionList").then((res) => {
          this.divisionList1s = res.data.divisionList; 
          // alert(this.form.countryId);
        });
      },
  
  
      // divisionShow() {
      //   axios.get("divisionListById/" + this.form.countryId).then((res) => {
      //     this.divisionLists = res.data.divisionList; 
      //     // alert(this.form.countryId);
      //   });
      // },
  
      district() {
        axios.get("districtList").then((res) => {
          this.districtList1s = res.data.districtList; 
          // alert(this.form.countryId);
        });
      },
  
      // districtShow() {
      //   axios.get("districtListById/" + this.form.divisionId).then((res) => {
      //     this.districtLists = res.data.districtList; 
      //     // alert(this.form.countryId);
      //   });
      // },
  
      upazilla() {
        axios.get("upazilaList").then((res) => {
          this.upazillaList1s = res.data.upazillaList; 
          // alert(this.form.countryId);
        });
      },
  
      // upazillaShow() {
      //   axios.get("upazilaListById/" + this.form.districtId).then((res) => {
      //     this.upazillaLists = res.data.upazillaList; 
      //     // alert(this.form.countryId);
      //   });
      // },
  
      // unionShow() {
      //   axios.get("unionListById/" + this.form.thanaId).then((res) => {
      //     this.unionLists = res.data.unionList; 
      //     // alert(this.form.countryId);
      //   });
      // },
  
      // wardShow() {
      //   axios.get("wardListById/" + this.form.unionId).then((res) => {
      //     this.wardLists = res.data.wardList; 
      //     // alert(this.form.countryId);
      //   });
      // },
  
      view() {
        axios.get("/viewArea").then((res) => {
          this.viewAreaLists = res.data.data; 
        });
      },
  
         
  
      deleteData(id){
        let uri = `deleteArea/${id}`;
        axios.get(uri).then((response) => {
          Toast.fire({
                  icon: 'success',
                  title: 'Delete Successful.'
              })
          this.view();
        });
      },
   
   
  
      areaUpdate() {
      
      this.loading=true;
      
        this.form.post("/areaUpdate").then((res) => {
          
            Toast.fire({
              icon: "success",
              //background: '#fcd8d8', red
              background: '#c9f4c9', //green
              title: "Area Update Successful.",
            }),
              this.view();
              this.$router.push('/area@entry')
   
              this.form.areaName = ''; 
              this.loading=false;
              
            
        });
      },
    },
  };
  </script>