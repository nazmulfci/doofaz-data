<template id="">
  <span>
    <div class="card">
     
     
      
            <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> SR Entry </h4>
        </div>
      </div>



      <form @submit.prevent="addProductSupplierCreate()">

<div class="supplier-entry py-4 px-2 comm-form-back-img">
         <div class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color">

              <div class="form-group">
                  <label>  Name
                     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                  </label>
                  <input v-model="form.name" type="text" name="name" :class="{ 'is-invalid': form.errors.has('name') }" placeholder=" Name" class="form-control">
                  <has-error :form="form" field="name"></has-error>
              </div>
  
               <div class="form-group">
                  <label>  Mobile Number
                     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                  </label>
                  <input v-model="form.mobileNo" type="text" name="mobileNo" :class="{ 'is-invalid': form.errors.has('mobileNo') }" placeholder="Mobile No" class="form-control">
                  <has-error :form="form" field="mobileNo"></has-error>
              </div>
  
               
               
              <div class="form-group">
                  <label> Email</label>
                  <input v-model="form.email" type="text" name="email"  placeholder="Email..." class="form-control">
                
              </div>
   

              <div class="form-group">
                  <label>Address
                     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                  </label>
                  <textarea v-model="form.address" type="text" name="address"  :class="{ 'is-invalid': form.errors.has('address') }" placeholder="Address" class="form-control"></textarea>
                  <has-error :form="form" field="address"></has-error>
              </div>

              <div class="form-group">
                  <label> Area  </label>
                  <textarea v-model="form.area" type="text" name="area"  :class="{ 'is-invalid': form.errors.has('area') }" placeholder="Area" class="form-control"></textarea>
                  <has-error :form="form" field="area"></has-error>
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
          ></i> SR List</h4>
      </div>


      <div class="supplier-entry py-1 px-1">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
           
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th> SN</th>
               <th> Name</th>
               <th> Mobile </th>
               <th> Email</th>
               <th> Address</th>
               <th> Area </th>
               <th>Action</th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(productSupplierAllData, index) in productSupplierAllDatas">
                <td>{{ index+1 }}</td>
                <td>{{ productSupplierAllData.name }} </td>
                <td>{{ productSupplierAllData.mobileNo }}</td>
                <td>{{ productSupplierAllData.email }}</td>
                <td>{{ productSupplierAllData.address }}</td>
                <td>{{ productSupplierAllData.area }}</td>
                <td>
                     <router-link :to="`/srEdit${productSupplierAllData.id}`" class="btn btn-hover-shine  btn-primary"><i class=" fa fa-edit"></i>Edit</router-link>
                  <span v-if="productSupplierAllData.product">  </span>
                  <span v-else>   <button type="button" @click="distroy(productSupplierAllData.id)" class="btn btn-hover-shine btn-danger"><i class=" fa fa-trash"></i>Delete</button></span>
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
                    name : '',
                    mobileNo: '',
                    phoneNo: '',
                    email: '',
                    address: '',
                    area: '',
                    status : '1',
                }),
                loading: false,
                openningDivStatus: '',
                productSupplierAllDatas: {},
                salesProductDiscountPriceReports : {},
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
        },



        methods:{

            addProductSupplierCreate(){
              this.loading = true;
                this.form.post('/addSREntry').then(res=>{
                  this.loading = false;
                    Toast.fire({
                        icon: 'success',
                        title: 'SR Entry Successfully'
                    })
                    this.form.reset();
                    this.getData();
                }).catch((res) => {
                      this.loading = false;
                      Toast.fire({
                        icon: "error",
                        title: "Something Missing",
                      });
        });
            },

            getData(){
                axios.get('/addSREntry').then(res =>{
                    this.productSupplierAllDatas = res.data.data;
                })
            },
      
            getPaginateList(page = 1){
              axios.get('/addSREntry?page=' + page)
              .then(response => {
                 this.productSupplierAllDatas = response.data.data;
              });
            },
           
            distroy(id){
                axios.delete('/addSREntry/'+id).then(res=>{
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
