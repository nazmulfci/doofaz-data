<template id="">
  <span>
      <div class="card">
          
                      <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Add Product Brand </h4>
        </div>
      </div>
          
     <form @submit.prevent="productBrandCreate()">
       
       <div class="supplier-entry py-4 px-2 comm-form-back-img">

         <div
          class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 p-5 supplier-border comm-form-box-back-color"
        >

              <div class="form-group" v-if="authInfo.role == 1 || authInfo.role == 2" >
                 <label>Select Shop Type </label>
                 <select v-model="form.shopTypeId" name="shopTypeId" :class="{ 'is-invalid': form.errors.has('productBrandStatus') }" class="form-control" @change.prevent="adminShopTypeIdSelect()">
                   <option value="">Select One</option>
                   <option  v-for="shopTypeName in shopTypeNames" :value="shopTypeName.shopTypeEntryId">{{ shopTypeName.shopTypeName }} </option>
                 </select>
                  <has-error :form="form" field="productBrandStatus"></has-error>
              </div>


               <div class="form-group">
                 <label>Product Brand Name
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                 <input type="text" v-model="form.productBrandName" name="productBrandName"  placeholder="Brand Name" class="form-control" :class="{ 'is-invalid': form.errors.has('productBrandName') }">
                   <has-error :form="form" field="productBrandName"></has-error>
               </div>

<!-- 
               <div class="form-group">
                 <label>Product Value
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                 <input type="text" v-model="form.value" name="value"  placeholder="Brand Name" class="form-control" :class="{ 'is-invalid': form.errors.has('value') }">
                   <has-error :form="form" field="value"></has-error>
               </div> -->

                 <div class="form-group"  style="display:none;">
                 <label>Product Brand Position
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                   <input type="text" disabled v-model="form.productBrandPosition" name="productBrandPosition"  placeholder="Product Brand Position" :class="{ 'is-invalid': form.errors.has('productBrandPosition') }" class="form-control">
                     <has-error :form="form" field="productBrandPosition"></has-error>
               </div>


              <div class="form-group" style="display:none;">
                 <label>Product Brand Status
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                 <select v-model="form.productBrandStatus" name="productBrandStatus" :class="{ 'is-invalid': form.errors.has('productBrandStatus') }" class="form-control">
                   <option value="">Select One</option>
                   <option value="1">Publish</option>
                   <option value="0">Unpublish</option>
                 </select>
                  <has-error :form="form" field="productBrandStatus"></has-error>
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
<h4><i class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"></i>Product Brand List</h4>
          </div>
          
          
          <div class="supplier-entry py-1 px-1">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
              <thead>
                 <tr style="background:rgba(242, 242, 242, 0.47)">
                   <th>SN</th>
                   <th v-if="authInfo.role == 1 || authInfo.role == 2">Shop Type Name</th>
                   <th>Product Brand Name</th>
                   <!-- <th>Product Brand Status</th> -->
                   <th>Edit</th>
                   <th>Delete</th>
                 </tr>
                </thead>

                <tbody v-if="authInfo.role == 1 || authInfo.role == 2">
                  <tr v-for="(adminProductBrandList, index) in adminProductBrandLists">
                    <td>{{ index+1 }}</td>
                    <td><span v-if="adminProductBrandList.shop_type_name">{{ adminProductBrandList.shop_type_name.shopTypeName }}</span></td>
                    <td>{{ adminProductBrandList.productBrandName }}</td>
                    <td>
                        <div v-if="adminProductBrandList.productBrandStatus == 1">
                          <button type="button"  @click="changeStatus(adminProductBrandList.productBrandEntryId)" class="btn btn-hover-shine btn-success">Published</button>
                        </div>
                        <div v-else>
                          <button type="button"  @click="changeStatus(adminProductBrandList.productBrandEntryId)" class="btn btn-hover-shine btn-danger">Unpublish</button>
                        </div>
                    </td>
                    <td>
                      <router-link :to="`/shopproductbrand@entryEdit${adminProductBrandList.productBrandEntryId}`" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"><i class=" fa fa-edit"></i>Edit</router-link>
                      <!-- <button @click.prevent="deleteProductBrand(showDatas.productBrandEntryId)"  class="btn-hover-shine btn btn-shadow btn btn-danger"><i class=" fa fa-trash"></i>Delete</button> -->
                   </td>
                 </tr>
               </tbody>

                <tbody v-else>
                  <tr v-for="(shopProductBrandList, index) in shopProductBrandLists">
                    <td>{{ index+1 }}</td>
                    <td>{{ shopProductBrandList.productBrandName }}</td>
                    <!-- <td>
                        <div v-if="shopProductBrandList.productBrandStatus == 1">
                          <button type="button"  @click="changeStatus(shopProductBrandList.productBrandEntryId)" class="btn btn-hover-shine btn-success">Published</button>
                        </div>
                        <div v-else>
                          <button type="button"  @click="changeStatus(shopProductBrandList.productBrandEntryId)" class="btn btn-hover-shine btn-danger">Unpublish</button>
                        </div>
                    </td> -->
                    <td v-if="shopProductBrandList.brand==null">
                      <router-link :to="`/shopproductbrand@entryEdit${shopProductBrandList.productBrandEntryId}`" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"><i class=" fa fa-edit"></i>Edit</router-link>
                   </td>
                    <td v-if="shopProductBrandList.brand==null">
                      <button type="button" @click="deleteProductBrand(shopProductBrandList.productBrandEntryId)" class="mr-2 btn-hover-shine btn btn-shadow btn-danger"><i class=" fa fa-trash"></i>Delete</button>
                   </td>
                 </tr>
              </tbody>
            </table>
           </div>
          </div>
        </div>

  </span>
</template>

<script>
    export default {
        data(){
            return{
                form: new Form({
                    value:'',
                    productBrandName:'',
                    productBrandStatus: 1,
                    shopTypeId: '',
                    productBrandPosition: '',
                }),
                adminProductBrandLists:{},
                shopProductBrandLists:{},
                shopTypeNames:{},
                authInfo:{},
                loading:false,

            }
        },

        mounted() {
            this.ShowDataLists()
            this.shopTypeNameShow();
            this.condition();
            this.productBrandPosition();
        },

        methods: {
            productBrandCreate() {
               this.loading = true;
                this.form.post('/shopproductBrandEntry').then(res => {
                   this.loading = false;
                    if (res.data.changeProductBrandName){
                      
                        Toast.fire({
                            icon: 'error',
                            title: 'Change your Product Brand Name'
                        })
                    }
                    else {
                        this.form.reset()
                        Toast.fire({
                            icon: 'success',
                            title: 'Product Brand Entry Successfully'
                        })
                        this.ShowDataLists()
                        this.productBrandPosition()
                    }
                }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
        });
            },

            ShowDataLists() {
              axios.get('/shopproductBrandEntry').then(res => {
                this.adminProductBrandLists = res.data.adminProductBrandList
                this.shopProductBrandLists = res.data.shopProductBrandList
              })
            },
            shopTypeNameShow() {
                axios.get('/category/create').then(res => {
                    this.shopTypeNames = res.data.shopTypeNames;
                });
            },
            adminShopTypeIdSelect(){
                axios.get('/adminProductBrandPosition/'+this.form.shopTypeId).then(res => {
                    this.form.productBrandPosition = res.data.productBrandIncrement;
                });
            },
            productBrandPosition(){
                axios.get('/shopProductBrandPosition').then(res=>{
                    this.form.productBrandPosition = res.data.productBrandIncrement;
                })
            },
            changeStatus(productBrandEntryId){
              axios.get("/shopproductBrandEntry/"+productBrandEntryId).then(res=>{
                Toast.fire({
                  icon: 'success',
                  title: 'Product Brand Status Change Successfully'
                })
                this.ShowDataLists()
              })
            },
            condition(){
                axios.get('/condition').then(res =>{
                    this.authInfo = res.data.authInfo
                })
            },
            deleteProductBrand(productBrandEntryId){
                axios.delete('/shopproductBrandEntry/'+productBrandEntryId)
                    .then( res=>{
                        Toast.fire({
                            icon: 'success',
                            title: 'Deleted Product BrandEntry successfully'
                        })
                        this.ShowDataLists();
                    })
            }
        }
    }
</script>
