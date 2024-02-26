<template id="">
  <span>
    <div class="card">
     
     
      
            <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Product Supplier Entry </h4>
        </div>
      </div>



      <form @submit.prevent="addProductSupplierCreate()">

<div class="supplier-entry py-4 px-2 comm-form-back-img">
         <div class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color">

              <div class="form-group">
                  <label> Product Supplier Name
                     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                  <input v-model="form.productSupplierName" type="text" name="productSupplierName" :class="{ 'is-invalid': form.errors.has('productSupplierName') }" placeholder="Product Supplier Name" class="form-control">
                  <has-error :form="form" field="productSupplierName"></has-error>
              </div>

               <div class="form-group">
                  <label> Product Supplier Code
                     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                  <input disabled v-model="form.productSupplierCode" type="text" name="productSupplierCode" :class="{ 'is-invalid': form.errors.has('productSupplierCode') }" placeholder="Product Supplier Code" class="form-control">
                  <has-error :form="form" field="productSupplierCode"></has-error>
              </div>

               <div class="form-group">
                  <label> Product Supplier Phone Number
                     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                  <input v-model="form.productSupplierPhone" type="text" name="productSupplierPhone" :class="{ 'is-invalid': form.errors.has('productSupplierPhone') }" placeholder="Product Supplier Phone" class="form-control">
                  <has-error :form="form" field="productSupplierPhone"></has-error>
              </div>

              <div class="form-group">
                  <label> Product Supplier Hot Line</label>
                  <input v-model="form.productSupplierHotLine" type="text" name="productSupplierHotLine" :class="{ 'is-invalid': form.errors.has('productSupplierHotLine') }" placeholder="Product Supplier Hot Line" class="form-control">
                  <has-error :form="form" field="productSupplierHotLine"></has-error>
              </div>

              <div class="form-group">
                  <label> Product Supplier Mail</label>
                  <input v-model="form.productSupplierMail" type="text" name="productSupplierMail"  placeholder="Product Supplier Mail..." class="form-control">
                
              </div>

              <div class="form-group">
                  <label> Product Supplier Facebook</label>
                  <input v-model="form.productSupplierFb" type="text" name="productSupplierFb" :class="{ 'is-invalid': form.errors.has('productSupplierFb') }" placeholder="Product Supplier Facebook..." class="form-control">
                  <has-error :form="form" field="productSupplierFb"></has-error>
              </div>

              <div class="form-group">
                  <label> Product Supplier Web</label>
                  <input v-model="form.productSupplierWeb" type="text" name="productSupplierWeb" :class="{ 'is-invalid': form.errors.has('productSupplierWeb') }" placeholder="Product Supplier Web..." class="form-control">
                  <has-error :form="form" field="productSupplierWeb"></has-error>
              </div>


                 <div class="form-group">
                  <label> Product Supplier Imo</label>
                  <input v-model="form.productSupplierImo" type="text" name="productSupplierImo" :class="{ 'is-invalid': form.errors.has('productSupplierImo') }" placeholder="Product Supplier Imo..." class="form-control">
                  <has-error :form="form" field="productSupplierImo"></has-error>
              </div>

              <div class="form-group">
                  <label>Address
                     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                  <textarea v-model="form.productSupplierAddress" type="text" name="productSupplierAddress"  :class="{ 'is-invalid': form.errors.has('productSupplierAddress') }" placeholder="Product Supplier Address" class="form-control"></textarea>
                  <has-error :form="form" field="productSupplierAddress"></has-error>
              </div>
              <!-- openningDivStatus -->
              <div class="form-group" v-if="0">
                 <label> Opening
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <select v-model="form.openingStatus" name="brandStatus" :class="{ 'is-invalid': form.errors.has('brandStatus') }" class="form-control">
                     <option value="">Select One</option>
                     <option value="1"> Yes </option>
                     <option value="0"> No </option>
                  </select>
                  <has-error :form="form" field="brandStatus"></has-error>
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
               <th>SN</th>
               <th>Supplier Name</th>
               <th>Supplier Code</th>
               <th>Supplier Phone</th>
               <th>Supplier Hot Line</th>
               <th>Supplier Mail</th>
               <th>Supplier Web</th>
               <th>Supplier Facebook</th>
               <th>Supplier Imo</th>
               <th>Supplier Address</th>
               <th>Create Date</th>
               <th>Action</th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(productSupplierAllData, index) in productSupplierAllDatas.data">
                <td>{{ index+1 }}</td>
                <td>{{ productSupplierAllData.productSupplierName }}
                  <span v-if="productSupplierAllData.openingStatus">
                    (Openning)
                  </span>

                </td>
                <td>{{ productSupplierAllData.productSupplierCode }}</td>
                <td>{{ productSupplierAllData.productSupplierPhone }}</td>
                <td>{{ productSupplierAllData.productSupplierHotLine }}</td>
                <td>{{ productSupplierAllData.productSupplierMail }}</td>
                <td>{{ productSupplierAllData.productSupplierWeb }}</td>
                <td>{{ productSupplierAllData.productSupplierFb }}</td>
                <td>{{ productSupplierAllData.productSupplierImo }}</td>
                <td>{{ productSupplierAllData.productSupplierAddress }}</td>
                <td>{{ productSupplierAllData.created_at }}</td>
                <td>
                     <router-link :to="`/shopproductsupplier@entryEdit${productSupplierAllData.productSupplierId}`" class="btn btn-hover-shine  btn-primary"><i class=" fa fa-edit"></i>Edit</router-link>
                  <span v-if="productSupplierAllData.product">  </span>
                  <span v-else>   <button type="button" @click="distroy(productSupplierAllData.productSupplierId)" class="btn btn-hover-shine btn-danger"><i class=" fa fa-trash"></i>Delete</button></span>
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
                    openingStatus: '0',
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
            this.checkOpenningSupplier();
        },



        methods:{
            addProductSupplierCreate(){
              this.loading = true;
                this.form.post('/addProductSupplier').then(res=>{
                  this.loading = false;
                    Toast.fire({
                        icon: 'success',
                        title: 'Product Supplier Entry Successfully'
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
                axios.get('/addProductSupplier').then(res =>{
                    this.productSupplierAllDatas = res.data.productSupplierGetData;
                });
                this.autoIncrementCode();
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
                axios.delete('/addProductSupplier/'+productSupplierId).then(res=>{

                  if(res.data.delete==1){
                     Toast.fire({
                        icon: 'success',
                        title: 'Data Delete Succuss'
                    })
                  }
                  else{ Toast.fire({
                        icon: 'error',
                        title: 'Not Delete'
                    })
                    
                  }
                   
                    this.getData();
                    
                })
            },
        }

    }

</script>
