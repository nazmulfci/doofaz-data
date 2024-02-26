<template id="">
    <span>
        <div class="card">
            
                        <div class="card-header-tab card-header alert-info">
          <div
            class="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i
              class="header-icon lnr-pencil icon-gradient bg-premium-dark"
            ></i>
           <h4> Company Owner</h4>
          </div>
        </div>
            
       <form  @submit.prevent="addCompanyOwner">
         
         <div class="supplier-entry py-4 px-2 comm-form-back-img">
  
           <!-- ============================================================ -->
       <!-- ===================== shop owner information =============== -->
       <!-- ============================================================ -->
         <div
          class="col-lg-10 px-lg-10 col-sm-11 offset-sm-1 col-12 supplier-border comm-form-box-back-color mt-5"
        >

      

          
            <div class="row">

            <div class="col-lg-6 col-12">
             

                <div class="form-group">
                <label> Owner Type
                <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                <!-- @change.prevent="changeCompanyType()" -->
                <select v-model="form.ownerTypeId"  name="ownerTypeId" class="form-control" :class="{ 'is-invalid': form.errors.has('ownerTypeId') }">
                    <option value=""> ------ </option>
                    <option v-for="companyType in companyTypes" :value="companyType.id" :key="companyType.id" > {{companyType.name}}  </option>
                    
                </select>
                <has-error :form="form" field="ownerTypeId"></has-error>
                </div>

            <div class="form-group">
              <label> Owner Name
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
 
              <input type="text"
                v-model="form.shopOwnerName"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('shopOwnerName') }"
              >  
              <has-error :form="form" field="shopOwnerName"></has-error>
            </div>
            
              


            <div class="form-group">
              <label> Owner Mobile No
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>
 
              <input type="text"
                v-model="form.shopOwnerMobileNo"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('shopOwnerMobileNo') }"
              >  
              <has-error :form="form" field="shopOwnerMobileNo"></has-error>
            </div>
            
              


            <div class="form-group">
              <label> Owner Email
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i> -->
                 </label>
 
              <input type="text"
                v-model="form.shopOwnerEmail"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('shopOwnerEmail') }"
              >
              <has-error :form="form" field="shopOwnerEmail"></has-error>
            </div>
            
            
              

            
            </div>


          <!------------------     ----------------------->

          
            <div class="col-lg-6 col-12">
            
            
               

            <div class="form-group">
              <label> Owner Address
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i> -->
                 </label>
 
              <textarea
                v-model="form.shopOwnerAddress"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('shopOwnerAddress') }"
              ></textarea>
              <has-error :form="form" field="shopOwnerAddress"></has-error>
            </div>
            
               

            <div class="form-group">
              <label> Owner Phone No
                 <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i> -->
                 </label>
 
              <input type="text"
                v-model="form.shopOwnerPhoneNo"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('shopOwnerPhoneNo') }"
              >
              <has-error :form="form" field="shopOwnerPhoneNo"></has-error>
            </div>
               
            </div>



            </div>
 
        </div>




       <!-- ============================================================ -->
       <!-- ================== // shop owner information =============== -->
       <!-- ============================================================ -->
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
                                      <span class="mr-1"> Submit </span>
                                  </button>
  
  
                              </div>
                              </div>
   
  <!-- -----------------------------   // card footer  --> 
  
        </form>
       </div>







       <div class="card main-card  element-block-example mt-5">
      <div class="card-header" >
        <h3 style="color:black">Owner List</h3>
      </div>
      </div>




      <div class="supplier-entry py-1 px-1">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
          <thead>
             <tr>
               <th>SN</th>
               <th>Owner Type</th>
               <th>Owner Name</th>
               <th>Owner Email </th>
               <th>Owner Address</th>
               <th>Action</th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(list, index) in lists">
                <td>{{ index+1 }}</td>
                <td>  
                    <option v-for="companyType in companyTypes"
                     :value="companyType.id" :key="companyType.id"
                     v-if="companyType.id==list.ownerTypeId"
                      > {{companyType.name}}  </option>
                     </td>
                <td>
                    {{ list.shopOwnerName }}
                    <br/>
                    {{ list.shopOwnerMobileNo }}
                </td>
                <td>{{ list.shopOwnerEmail }}
                    <br/>
                    {{ list.shopOwnerPhoneNo }}
                </td>
                <td>{{ list.shopOwnerAddress }}</td>
                 
                <td>
                    <!-- <button class="mb-2 mr-2 btn-hover-shine btn btn-shadow btn-primary">Edit</button> -->
                  <span> 
                     <button @click.prevent="destroy(list.shopOwnerInfoId)" class="mb-2 mr-2 btn-hover-shine btn btn-shadow btn-danger">Delete</button>
                     </span>
                </td>
              </tr>
           </tbody>
         </table>
       </div>
       </div>
  
  
        
  
    </span>
  </template>
  
  <script>
      export default {
          data(){

             return{
                  form: new Form({
                    ownerTypeId:'',
                    shopOwnerName:'',
                    shopOwnerMobileNo:'',
                    shopOwnerEmail:'',
                    shopOwnerAddress:'',
                    shopOwnerPhoneNo:'',
                  }),
                  companyTypes: [{ id: 1, name: 'Owner' }],
                  // , { id: 2, name: 'Investor' }
                  lists: [],
                  loading:false,
  
              }
          },
  
          mounted() {
             
               this.view();
              
          },
  
          methods: {
             view(){
                axios.get('/shopOwnerGet').then(res =>{
                  this.lists = res.data.data;
            });
             },

addCompanyOwner() {
    
    this.loading=true;
    
      this.form.post("shopOwnerEntry").then((response) => {
        
          Toast.fire({
            icon: "success",
            //background: '#fcd8d8', red
            background: '#c9f4c9', //green
            title: "Owner Add Successful.",
          }),
            this.view();

 
            this.form.reset(); 
            this.loading=false;
            
          
      }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
    },

    destroy(e){
        axios.get('/shopOwnerDelete/'+e).then(res =>{
            if(res.data.data==1){
                Toast.fire({
                icon: "success",
                title: "Delete Successful.",
            });
            this.view();
            }else{
                Toast.fire({
                icon: "error",
                title: "Something Missing",
            });
            }
            }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
    },


          
           
           
            
           
          }
      }
  </script>
  