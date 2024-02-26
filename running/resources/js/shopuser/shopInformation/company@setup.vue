<template id="">
    <span>
        <div class="card">
            
                        <div class="card-header-tab card-header alert-info">
          <div
            class="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i
              class="header-icon lnr-pencil icon-gradient bg-premium-dark"
            ></i>
           <h4> Company Setup </h4>
          </div>
        </div>
            
       <form @submit.prevent="shopInformationUpdate()">
         
         <div class="supplier-entry py-4 px-2 comm-form-back-img">
  
           <div
            class="col-lg-10 px-lg-5 col-sm-10 offset-sm-1 col-12 p-5 supplier-border comm-form-box-back-color"
          >
  
          <div class="row p-2">

<div class="col-lg-6 col-12">


<div class="form-group">
  <label> Company Type
     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>

  <select  v-model="form.shopLicenceTypeId" @change.prevent="changeCompanyType()" name="shopLicenceTypeId" class="form-control" :class="{ 'is-invalid': form.errors.has('shopLicenceTypeId') }">
                          <option value=""> ------ </option>
    <option v-for="companyType in companyTypes" :value="companyType.id" :key="companyType.id" > {{companyType.name}}  </option>
    
  </select>
  <has-error :form="form" field="shopLicenceTypeId"></has-error>
</div>


<div v-if="limitedCompanyInformation">
<div class="form-group">
  <label> Authorize Share
     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>

  <input type="text"
    v-model="form.authorizeShare"
    class="form-control"
    :class="{ 'is-invalid': form.errors.has('authorizeShare') }"
    @keyup.prevent="calculateCapital()"
  >  
  <has-error :form="form" field="authorizeShare"></has-error>
</div>


<div class="form-group">
  <label> Per Share Value
     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>

  <input type="text"
    v-model="form.perShareValue"
    class="form-control"
    :class="{ 'is-invalid': form.errors.has('perShareValue') }"
    @keyup.prevent="calculateCapital()"
  >  
  <has-error :form="form" field="perShareValue"></has-error>
</div>

<div class="form-group">
  <label> Total Authorize Capital
     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>

  <input type="text"
    v-model="form.authorizeCapital"
    class="form-control"
    :class="{ 'is-invalid': form.errors.has('perShareValue') }"
    disabled
  >  
  <has-error :form="form" field="perShareValue"></has-error>
</div>
</div>




<div class="form-group">
  <label> Shop ID
     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>

  <input type="text"
    v-model="form.shopSirialId"
    class="form-control"
    :class="{ 'is-invalid': form.errors.has('shopSirialId') }"
    disabled
  >  
  <has-error :form="form" field="shopSirialId"></has-error>
</div>


<div class="form-group" style="display:none">
  <label> Shop ID
     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>

  <input type="text"
    v-model="form.shopSirialNo"
    class="form-control"
    :class="{ 'is-invalid': form.errors.has('shopSirialNo') }"
    disabled
  >  
  <has-error :form="form" field="shopSirialNo"></has-error>
</div>


<div class="form-group">
  <label> Shop Name
     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>

  <input type="text"
    v-model="form.shopName"
    class="form-control"
    :class="{ 'is-invalid': form.errors.has('shopName') }"
  >  
  <has-error :form="form" field="shopName"></has-error>
</div>

   


<div class="form-group">
  <label> Shop User Name
     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>

  <input type="text"
    v-model="form.email"
    class="form-control"
    :class="{ 'is-invalid': form.errors.has('email') }"
    @change="checkUserName()"
    disabled
  >
  <has-error :form="form" field="email"></has-error>
  <span class="text-danger" v-if="userNameExist"> This user name already exist. </span>
</div>

 

  


</div>


<!------------------     ----------------------->


<div class="col-lg-6 col-12">





               

<div class="form-group">
  <label> Shop Website Link
     <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i> -->
     </label>

  <input type="text"
    v-model="form.website"
    class="form-control"
    :class="{ 'is-invalid': form.errors.has('website') }"
  >
  <has-error :form="form" field="website"></has-error>
</div>
   
               

<div class="form-group">
  <label> Shop Facebook Link
     <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i> -->
     </label>

  <input type="text"
    v-model="form.facebook"
    class="form-control"
    :class="{ 'is-invalid': form.errors.has('facebook') }"
  >
  <has-error :form="form" field="facebook"></has-error>
</div>
               

<div class="form-group">
  <label> Shop Youtube Link
     <!-- <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i> -->
     </label>

  <input type="text"
    v-model="form.youtube"
    class="form-control"
    :class="{ 'is-invalid': form.errors.has('youtube') }"
  >
  <has-error :form="form" field="youtube"></has-error>
</div>
               
 
   
</div>



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
          data(){

             return{
                  form: new Form({
                        refferType:'',
                        shopTypeId:'',
                        shopSirialId:'',
                        shopSirialNo:'',
                        shopName:'',
                        email:'',
                        refferUserId:'',
                        refferUserId:'',
                        website:'',
                        facebook:'',
                        youtube:'',


                        shopLicenceTypeId:'',
                        authorizeShare:'',
                        perShareValue:'',
                        authorizeCapital:'',
                     
                  }),
                  companyTypes: [{ id: 1, name: 'One Person Company' }, { id: 2, name: 'Partnership Company' }, { id: 3, name: 'Private Limited Company' }, { id: 4, name: 'Public Limited Company' }],
             
                  authInfo:[],
                  shopTypeLists:[],
                  employees:false,
                  userNameExist:false,
                  shops:false,
                  loading:false,
                  limitedCompanyInformation:false,
  
              }
          },
  
          mounted() {
             
              this.condition();
              
          },
  
          methods: {
            calculateCapital(){
              let share = parseFloat(this.form.authorizeShare);
              let value = parseFloat(this.form.perShareValue);
              if(share>0)
              this.form.authorizeCapital = share*value;
            },
            changeCompanyType(){
              if(this.form.shopLicenceTypeId>2){
                this.limitedCompanyInformation=true;
              }
              else{
                this.limitedCompanyInformation=false;
                this.form.authorizeShare = '';
                this.form.perShareValue='';
                this.form.authorizeCapital='';
              }
              
            },
            
    shop(){
    this.shops=true;
    this.employees=false;
    this.form.refferType=1;

  },
  employee(){
 this.shops=false;
    this.employees=true;
     this.form.refferType=2;
  },
condition(){
    axios.get('/condition').then(res =>{
        this.authInfo = res.data.authInfo;
        this.form.fill(res.data.authInfo);


        if(res.data.authInfo.shopLicenceTypeId>2){
                this.limitedCompanyInformation=true;
              }
              else{
                this.limitedCompanyInformation=false;
              }
    })
},
         
shopInformationUpdate() {
    
    this.loading=true;
    
      this.form.post("shopInformationUpdate").then((response) => {
        
          Toast.fire({
            icon: "success",
            //background: '#fcd8d8', red
            background: '#c9f4c9', //green
            title: "Information Update Successful.",
          }),
      

  
            this.loading=false;
            
          
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
  