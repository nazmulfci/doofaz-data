<template id="">
    <span>
   
      <div class="card">
        
              <div class="card-header-tab card-header alert-info">
          <div
            class="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i
              class="header-icon lnr-pencil icon-gradient bg-premium-dark"
            ></i>
           <h4> Area Assign </h4>
          </div>
        </div>
  
  
  <form @submit.prevent="updateAreaAssign"> 
        <div class="supplier-entry py-4 px-2 comm-form-back-img ">
  
  
  
         <!-- ===================================================================== -->
         <!-- ===================== shop Address information =============== -->
         <!-- ===================================================================== -->
           <div
            class="col-lg-7 px-lg-10 col-sm-11 offset-sm-2 col-12 supplier-border comm-form-box-back-color mt-5"
          >
   
  
            
              <div class="row">
  
              <div class="col-12">
               
              
                <div class="form-row pt-2">
                    <div class="col-sm-12 col-12">
                      <label class="p-0">Employer Name
                        <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                      </label>
                    </div>
                    <div class="col-sm-12 col-12">
                      <select class="form-control" @change.prevent="shopMenuPermissionShow()"
                        v-model="form.employeeId"
                        name="employeeId"
                        :class="{
                          'is-invalid': form.errors.has('employeId'),
                        }"
                      >
                        <option value="">Select One</option>
                        <option
                          v-for="employeeName,index in employeeNames"
                          :value="employeeName.id"
                          :key="index"
                        >
                          {{ employeeName.userName }}
                        </option>
                      </select>
                      <has-error
                        :form="form"
                        field="employeeId"
                      ></has-error>
                    </div>
                  </div>
  
              <div class="form-group d-none">
                <label> Country 
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
    
                <select
                  v-model="form.countryId"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('countryId') }"
                  name="countryId"
                  @change.prevent="divisionShow()"
                >
                   <option value=""> Select Currency  </option>
                  <option
                    v-for="currencyList in currencyLists"
                    :key="currencyList.id"
                    :value="currencyList.id"
                  >
                    {{ currencyList.country }}
                  </option>
                   
                </select>  
                <has-error :form="form" field="countryId"></has-error>
              </div>
              
  
  
                <div class="form-group d-none">
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
                    v-for="divisionList,index in divisionLists"
                    :key="divisionList.id"
                    :value="divisionList.id"
                  >
                  {{++index}},
                    {{ divisionList.division_name }}
                  </option>
                  </select>
                <has-error :form="form" field="divisionId"></has-error>
              </div>
  
              
               <div class="form-group d-none">
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
                    v-for="districtList,index in districtLists"
                    :key="districtList.id"
                    :value="districtList.id"
                  >
                  {{++index}},
                    {{ districtList.district_name }}
                  </option>
                  </select>
                <has-error :form="form" field="districtId"></has-error>
              </div>
              <div class="form-group d-none">
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
                    v-for="upazillaList,index in upazillaLists"
                    :key="upazillaList.id"
                    :value="upazillaList.id"
                  >{{++index}},
                    {{ upazillaList.upazila_name }}
                  </option>
                  </select>
                <has-error :form="form" field="thanaId"></has-error>
              </div>
              
          
              
              <div class="form-group mt-2">
                <label> এরিয়া 
                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                   </label><br/>

                 
                   <div class="row" >
                        
                        <div class="col-md-12">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" v-model="selectAll" id="customCheck">
                        <label class="custom-control-label text-primary" for="customCheck"> <b> Select All </b> </label>
                        <hr>
                    </div>
                        </div>

                        <!-- <p>{{ selected }}</p> -->

                        <div class="col-md-4 mb-2"  v-for="areaInfo in areaLists">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input"
                         :id="`customCheck`+areaInfo.id"
                         v-model="selected"
                         :value="areaInfo.id"
                          number>
                        <label class="custom-control-label" :for="`customCheck`+areaInfo.id">{{ areaInfo.areaName }}</label>
                    </div>
                        </div>


                    </div>
                  
                <has-error :form="form" field="areaId"></has-error>
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
                                      <span class="mr-1"> Update</span>
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
          countryId: "",
          divisionId: "",
          districtId: "",
          thanaId: "",
          unionId: "",
          wardId: "",
          areaId: [],
          employeeId: "",
        }),
        currencyLists:[],
        divisionLists:[],
        districtLists:[],
        upazillaLists:[],
       
        divisionList1s:[],
        districtList1s:[],
        upazillaList1s:[],

        viewAssignLists:[],
        employeeNames:[],
        areaLists:[],
        selectedAreaLists:[],
        multiple: "true",
        selected:[],
      };
    },
  
    mounted() {
      // this.shopMenuPermissionShow();
      this.currencyList();
      this.division();
      this.district();
      this.upazilla();
      this.view();
      this.employeeNameList();
      this.viewAssignList();

      axios.get(`shopPermissionAreaShows/${this.$route.params.id}`).then(response =>{
            this.form.employeeId = response.data.employeeInfo.employeeId;
            this.selected = response.data.selected;
        });
  
    },


      computed: {
        selectAll: {

            get: function () {
                return this.areaLists ? this.selected.length == this.areaLists.length : false;
            },

            set: function (value) {
                var selected = [];

                if (value) {
                    this.areaLists.forEach(function (area) {
                        selected.push(area.id);
                    });
                }

                this.selected = selected;
            }
        }
    },
  
    methods: {

       // shopMenuPermissionShow(){
       //    axios.get(`shopPermissionAreaShows/${this.$route.params.id}`).then(res =>{
       //        this.aponLists = res.data.areaIdsShows;
       //    });

       //  },

        getAreaInformation() {
          this.loading=true;
      axios.get("/getSingleArea/"+this.form.areaId).then((res) => {
        this.form.countryId = res.data.data.countryId;
        this.form.divisionId = res.data.data.divisionId;
        this.form.districtId = res.data.data.districtId;
        this.form.thanaId = res.data.data.thanaId;

        this.divisionShow();
        this.districtShow();
        this.upazillaShow();
      });
    },
        employeeNameList() {
      axios.get("/employeeListAssign").then((res) => {
        this.employeeNames = res.data.data;
      });
    },
    viewAssignList() {
      axios.get("/assignList").then((res) => {
        this.viewAssignLists = res.data.data;
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
  
  
      divisionShow() {
        axios.get("divisionListById/" + this.form.countryId).then((res) => {
          this.divisionLists = res.data.divisionList; 
          // alert(this.form.countryId);
        });
      },
  
      district() {
        axios.get("districtList").then((res) => {
          this.districtList1s = res.data.districtList; 
          // alert(this.form.countryId);
        });
      },
  
      districtShow() {
        axios.get("districtListById/" + this.form.divisionId).then((res) => {
          this.districtLists = res.data.districtList; 
          // alert(this.form.countryId);
        });
      },
  
      upazilla() {
        axios.get("upazilaList").then((res) => {
          this.upazillaList1s = res.data.upazillaList; 
          // alert(this.form.countryId);
        });
      },
  
      upazillaShow() {
        axios.get("upazilaListById/" + this.form.districtId).then((res) => {
          this.upazillaLists = res.data.upazillaList; 
          this.loading=false;
        });
      },
  
      unionShow() {
        axios.get("unionListById/" + this.form.thanaId).then((res) => {
          this.unionLists = res.data.unionList; 
          // alert(this.form.countryId);
        });
        axios.get("/viewAreaById/" + this.form.thanaId).then((res) => {
          this.areaLists = res.data.data; 
        });
      },
  
      wardShow() {
        axios.get("wardListById/" + this.form.unionId).then((res) => {
          this.wardLists = res.data.wardList; 
          // alert(this.form.countryId);
        });
      },
  
      view() {
        axios.get("/viewArea").then((res) => {
          this.areaLists = res.data.data; 
        });
      },
  
         
  
      deletePost(id){
        let uri = `qrCodeSetup/${id}`;
        axios.delete(uri).then((response) => {
          Toast.fire({
                  icon: 'success',
                  title: 'Delete Successful.'
              })
          this.view();
        });
      },
   
   
  
      updateAreaAssign() {
      
      this.loading=true;
        this.form.areaId = this.selected;
      
        this.form.post("/updateAreaAssign").then((res) => {



            Toast.fire({
              icon: "success",
              //background: '#fcd8d8', red
              background: '#c9f4c9', //green
              title: "Update Successful.",
            });
           this.form.reset();
           this.$router.push('/area@assign');
            
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

  <style scoped>
     .lists{
      padding:10px 20px;
     }
     .lists ul{
        margin:0;
        padding:0;
     }
     .lists h4{
      margin-left:25px;
     }
  </style>