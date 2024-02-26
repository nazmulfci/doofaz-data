<template id="">
  <span>
    <div class="card">
     
     
      
            <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Demo Employee Entry </h4>
        </div>
      </div>



      <form @submit.prevent="demoEmployeeEntry()">

<div class="supplier-entry py-4 px-2 comm-form-back-img">
         <div class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color">

              <div class="form-group">
                  <label> Employee Name
                     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                  <input v-model="form.productSupplierName" type="text" name="productSupplierName" :class="{ 'is-invalid': form.errors.has('productSupplierName') }" placeholder="Product Supplier Name" class="form-control">
                  <has-error :form="form" field="productSupplierName"></has-error>
              </div>
 

               <div class="form-group">
                  <label> Phone Number
                     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                  <input v-model="form.productSupplierPhone" type="text" name="productSupplierPhone" :class="{ 'is-invalid': form.errors.has('productSupplierPhone') }" placeholder=" Phone Number" class="form-control">
                  <has-error :form="form" field="productSupplierPhone"></has-error>
              </div>
 

              <div class="form-group">
                  <label> Email</label>
                  <input v-model="form.productSupplierMail" type="text" name="productSupplierMail"  placeholder="Email..." class="form-control">
                <has-error :form="form" field="productSupplierMail"></has-error>
              </div>
 
              <div class="form-group">
                 <label> Status
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <select v-model="form.status" name="status" :class="{ 'is-invalid': form.errors.has('status') }" class="form-control">
                     <option value=""> Select One </option>
                     <option value="1"> Publish </option>
                     <option value="0"> Unpublish </option>
                  </select>
                  <has-error :form="form" field="status"></has-error>
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
                                :disabled="loading">
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
      
      <div class="card-header-tab card-header alert-info">
<h4><i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i> Product Supplier List</h4>
      </div>


      <div class="supplier-entry py-1 px-1">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
           
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th> SN</th>
               <th>  Name</th>
               <th>  Mobile</th>
               <th>  Email</th>
               <th> Status</th>
               <th> Action</th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(productSupplierAllData, index) in employeeLists">
                <td>{{ index+1 }}</td>
                <td>{{ productSupplierAllData.name }}</td>
                <td>{{ productSupplierAllData.mobileNo }}</td>
                <td>{{ productSupplierAllData.email }}</td>
                <td>
                    <span v-if="productSupplierAllData.status" class="badge badge-success">
                        Active
                    </span>
                    <span v-else  class="badge badge-danger">
                        Block
                    </span>
                </td>
                <td>
                     <router-link :to="`/demoEmployee@Edit${productSupplierAllData.id}`" class="btn btn-hover-shine  btn-primary"><i class=" fa fa-edit"></i>Edit</router-link>
                  
                  <span>  <button type="button" @click="distroy(productSupplierAllData.id)" class="btn btn-hover-shine btn-danger"><i class=" fa fa-trash"></i>Delete</button></span>
                </td>
              </tr>
            </tbody>
         </table>
       </div>
       <span class="card_footer">
         <pagination :data="productSupplierAllDatas" :limit="limit"  @pagination-change-page="getPaginateList">
           <span slot="prev-nav">&lt; Previous</span>
           <span slot="next-nav">Next &gt;</span>
         </pagination>
      </span>
     </div>
     </div>
  </span>
</template>


<script>
    export default {
        data () {
            return {
                form: new Form({
                    productSupplierName : '',
                    productSupplierCode: '',
                    productSupplierPhone: '',
                    productSupplierHotLine: '',
                    productSupplierMail: '',
                    productSupplierWeb: '',
                    productSupplierFb: '',
                    productSupplierImo: '',
                    productSupplierAddress: '',
                    status:1,
                }),
                loading: false,
                openningDivStatus: '',
                productSupplierAllDatas: {},
                salesProductDiscountPriceReports : {},
                employeeLists:[],
                
            }
        },

        props:{
             limit: {
               type: Number,
               default: 2
           }
        },


        
        mounted(){
            this.getData();
            this.getPaginateList();
            this.autoIncrementCode();
            this.checkOpenningSupplier();
        },



        methods:{
            demoEmployeeEntry(){
              this.loading = true;
                this.form.post('/addDemoEmployee').then(res=>{
                  this.loading = false;
                    Toast.fire({
                        icon: 'success',
                        title: 'Employee Entry Successfully'
                    })
                    this.form.reset();
                    this.getData();
                    this.autoIncrementCode();
                }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
            },

            getData(){
                axios.get('/addDemoEmployee').then(res =>{
                    this.employeeLists = res.data.employeeList;
                })
            },
            checkOpenningSupplier(){
                axios.get('/getCheckOpenningSupplier').then(res =>{
                    this.openningDivStatus = res.data.status;
                })
            },
            getPaginateList(page = 1){
              axios.get('/addProductSupplier?page=' + page)
              .then(response => {
                 this.productSupplierAllDatas = response.data.productSupplierGetData;
              });
            },
            autoIncrementCode(){
                axios.get('/addProductSupplier/create').then(res =>{
                    this.form.productSupplierCode = res.data.autoIncrementCode;
                })
            },

            distroy(productSupplierId){
                axios.delete('/addDemoEmployee/'+productSupplierId).then(res=>{
                    Toast.fire({
                        icon: 'success',
                        title: 'Data Delete Succuss'
                    })
                    this.getData();
                })
            },
        }

    }

</script>
