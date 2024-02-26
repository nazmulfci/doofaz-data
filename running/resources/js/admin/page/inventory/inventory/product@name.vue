<template id="">
  <span>
    <div class="card">
      
                  <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Product Name Entry </h4>
        </div>
      </div>

       <form  action="" method="post" @submit.prevent="addProductName()">
         
         <div class="product-entry">
      <div class="supplier-entry py-4 px-2 comm-form-back-img">

         <div class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color  pt-4 pb-4">
             
                <div class="form-row">
                    <div class="col-sm-4 col-12">
                       <label class="p-0">Category</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <select  v-model="form.category"  @change.prevent="categorySelect()" name="category" class="form-control" :class="{ 'is-invalid': form.errors.has('category') }">
                          <option value="">Select One</option>
                          <option  v-for="cateorySelectList in cateorySelectLists" :value="cateorySelectList.categoryId"> {{ cateorySelectList.categoryName }} </option>
                      </select>
                      <has-error :form="form" field="category"></has-error>
                    </div>
                </div>
                <div class="form-row pt-2" v-if="subShow">
                   <div class="col-sm-4 col-12">
                      <label class="p-0">Sub Category</label>
                   </div>
                    <div class="col-sm-8 col-12">
                        <select  v-model="form.subCategory" @change.prevent="subCategorySelect()" name="subCategory" class="form-control">
                          <option value="">Select One</option>
                          <option v-for="subCategorySelectList in subCategorySelectLists" :value="subCategorySelectList.categoryId">{{ subCategorySelectList.categoryName }}</option>
                        </select>
                     </div>
                </div>
                <div class="form-row pt-2" v-if="thirdShow">
                    <div class="col-sm-4 col-12">
                        <label class="p-0">Third Category</label>
                     </div>
                    <div class="col-sm-8 col-12">
                      <select  v-model="form.thirdCategory" @change.prevent="thirdCategorySelect()" name="thirdCategory" class="form-control">
                        <option value="">Select One</option>
                        <option v-for="thirdCategorySelectList in thirdCategorySelectLists" :value="thirdCategorySelectList.categoryId">{{ thirdCategorySelectList.categoryName }}</option>
                      </select>
                    </div>
                </div>
                <div class="form-row pt-2" v-if="fourShow">
                   <div class="col-sm-4 col-12">
                       <label class="p-0">Four Category</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <select  v-model="form.fourCategory" @change.prevent="fourCategorySelect()" name="fourCategory" class="form-control">
                        <option value="">Select One</option>
                        <option v-for="fourCategorySelectList in fourCategorySelectLists" :value="fourCategorySelectList.categoryId">{{ fourCategorySelectList.categoryName }}</option>
                      </select>
                    </div>
                </div>
                <div class="form-row pt-2" v-if="fiveShow">
                     <div class="col-sm-4 col-12">
                        <label class="p-0">Five Category</label>
                     </div>
                     <div class="col-sm-8 col-12">
                        <select  v-model="form.fiveCategory" @change.prevent="fiveCategorySelect()" name="fiveCategory" class="form-control">
                          <option value="">Select One</option>
                          <option v-for="fiveCategorySelectList in fiveCategorySelectLists" :value="fiveCategorySelectList.categoryId">{{ fiveCategorySelectList.categoryName }}</option>
                        </select>
                     </div>
                </div>
                <div class="form-row pt-2" v-if="sixShow">
                     <div class="col-sm-4 col-12">
                        <label class="p-0">Six Category</label>
                     </div>
                     <div class="col-sm-8 col-12">
                        <select  v-model="form.sixCategory" @change.prevent="sixCategorySelect()" name="sixCategory" class="form-control">
                          <option value="">Select One</option>
                          <option v-for="sixCategorySelectList in sixCategorySelectLists" :value="sixCategorySelectList.categoryId">{{ sixCategorySelectList.categoryName }}</option>
                        </select>
                     </div>
                </div>
                <div class="form-row pt-2" v-if="sevenShow">
                     <div class="col-sm-4 col-12">
                        <label class="p-0">Seven Category</label>
                     </div>
                     <div class="col-sm-8 col-12">
                        <select  v-model="form.sevenCategory" name="sevenCategory" class="form-control">
                          <option value="">Select One</option>
                          <option v-for="sevenCategorySelectList in sevenCategorySelectLists" :value="sevenCategorySelectList.categoryId">{{ sevenCategorySelectList.categoryName }}</option>
                        </select>
                     </div>
                </div>
                <div class="form-row pt-2">
                  <div class="col-sm-4 col-12">
                    <label class="p-0 ">Product Name</label>
                  </div>
                    <div class="col-sm-8 col-12">
                        <input type="text"  v-model="form.productName" name="productName" :class="{ 'is-invalid': form.errors.has('productName') }" class="form-control" placeholder="Product Name">
                        <has-error :form="form" field="productName"></has-error>
                    </div>
                </div>
                <!--<div class="form-row pt-2">
                  <div class="col-sm-4 col-12">
                    <label class="p-0 ">Product Code</label>
                  </div>
                    <div class="col-sm-8 col-12">
                        <input type="text" disabled v-model="form.productCode" name="productCode" :class="{ 'is-invalid': form.errors.has('productCode') }" class="form-control" placeholder="Product Code">
                        <has-error :form="form" field="productCode"></has-error>
                    </div>
                </div>
                 <div class="form-row pt-2">
                  <div class="col-sm-4 col-12">
                    <label class="p-0 ">Product QR Number</label>
                  </div>
                    <div class="col-sm-8 col-12">
                        <input type="text" v-model="form.productQRNumber" name="productQRNumber" :class="{ 'is-invalid': form.errors.has('productQRNumber') }" class="form-control" placeholder="Product QR Number">
                          <has-error :form="form" field="productQRNumber"></has-error>
                    </div>
                </div> -->
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
                                    <span class="mr-1"> Add Product </span>
                                </button>


                            </div>
                            </div>
 
<!-- -----------------------------   // card footer  --> 

         </form>
    </div>

    <div class="card main-card  element-block-example mt-5">
      <div class="card-header" >
        <h3 style="color:black">Product Name List</h3>
      </div>
      </div>


       <div class="supplier-entry py-1 px-1">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th>SN</th>
               <th>Product Name</th>
               <!-- <th>Product Code</th> -->
               <!-- <th>Product QR Number</th> -->
               <th>Category Name</th>
               <th>Action</th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(productNameList, index) in productNameLists">
                <td>{{ index+1 }}</td>
              
                <td>{{ productNameList.productName }}</td>
                <!-- <td>{{ productNameList.productCode }}</td> -->
                <!-- <td>{{ productNameList.productQRNumber }}</td> -->
                <td >
                  <span v-if="productNameList.product_category">
                    <span v-for="pd in productNameList.product_category" :key="pd.id">
                        <span  class="">
                        {{ pd.category_name.categoryName }}
                    </span>

                    </span>
                 
                  </span>
              
                </td>
                <td>
                    <!-- <button class="mb-2 mr-2 btn-hover-shine btn btn-shadow btn-primary">Edit</button> -->
                  <span v-if="productNameList.product"> 
                    
                     </span>
                  <span v-else> 
                     <button @click.prevent="destroy(productNameList.productNameId)" class="mb-2 mr-2 btn-hover-shine btn btn-shadow btn-danger">Delete</button>
                     </span>
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
      data () {
          return {
              form: new Form({
                  category : '',
                  subCategory : '',
                  thirdCategory : '',
                  fourCategory: '',
                  fiveCategory: '',
                  sixCategory: '',
                  sevenCategory: '',
                  productName: '',
                  productCode: '',
                  productQRNumber: '',
              }),
              subShow : false,
              loading: false,
              thirdShow : false,
              fourShow : false,
              fiveShow : false,
              sixShow : false,
              sevenShow : false,
              cateorySelectLists:{},
              subCategorySelectLists:{},
              thirdCategorySelectLists:{},
              fourCategorySelectLists:{},
              fiveCategorySelectLists:{},
              sixCategorySelectLists:{},
              sevenCategorySelectLists:{},
              // productNameLists
              productNameLists:[],
              categoryLists:{},
          }
      },
      mounted(){
        this.categoryList();
        this.productListShows();
      },
      methods:{
          addProductName() {
            this.loading = true;
            this.form.post('/productName').then(res => {
              this.loading = false;
                  if (res.data.changeProductQR) {
                    Toast.fire({
                        icon: 'error',
                        title: 'Change product QR Number'
                    })
                  }
                  else if (res.data.changeProductName) {
                    Toast.fire({
                        icon: 'error',
                        title: 'Change product Name'
                    })
                  }
                  else{
                      Toast.fire({
                          icon: 'success',
                          title: 'Product Name Successfully'
                      })
                      this.form.reset();
                      this.subShow = false;
                      this.thirdShow = false;
                      this.fourShow = false;
                      this.fiveShow = false;
                      this.sixShow = false;
                      this.sevenShow = false;
                      this.productListShows()
                  }
             }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
          },
          productListShows(){
            axios.get('/productNameListOwner').then(res =>{
                  this.productNameLists = res.data.productNameList;
                  this.categoryLists = res.data.categoryLists;
                  this.form.productCode = res.data.productCodeCountIncre;
            });
          },
          categoryList(){
            axios.get('/productCateorySelectList').then(res =>{
                  this.cateorySelectLists = res.data.categoryList;
            });
          },
          categorySelect(){
            axios.get('/productCategoryId/'+this.form.category).then(res =>{
                  this.subCategorySelectLists = res.data.subCategoryList;
                  if (res.data.subCategoryList == "") {
                      this.subShow = false;
                  }
                  else {
                     this.subShow = true;
                  }
            });
          },
          subCategorySelect(){
            axios.get('/productSubCategoryId/'+this.form.subCategory).then(res =>{
                  this.thirdCategorySelectLists = res.data.thirdCategoryList;
                  if (res.data.thirdCategoryList == "") {
                      this.thirdShow = false;
                  }
                  else {
                     this.thirdShow = true;
                  }
            });
          },
          thirdCategorySelect(){
            axios.get('/productThirdCategoryId/'+this.form.thirdCategory).then(res =>{
                  this.fourCategorySelectLists = res.data.fourCategoryList;
                  if (res.data.fourCategoryList == "") {
                      this.fourShow = false;
                  }
                  else {
                     this.fourShow = true;
                  }
            });
          },
          fourCategorySelect(){
            axios.get('/productFourCategoryId/'+this.form.fourCategory).then(res =>{
                  this.fiveCategorySelectLists = res.data.fiveCategoryList;
                  if (res.data.fiveCategoryList == "") {
                      this.fiveShow = false;
                  }
                  else {
                     this.fiveShow = true;
                  }
            });
          },
          fiveCategorySelect(){
            axios.get('/productFiveCategoryId/'+this.form.fiveCategory).then(res =>{
                  this.sixCategorySelectLists = res.data.sixCategoryList;
                  if (res.data.sixCategoryList == "") {
                      this.sixShow = false;
                  }
                  else {
                     this.sixShow = true;
                  }
            });
          },
          sixCategorySelect(){
            axios.get('/productSixCategoryId/'+this.form.sixCategory).then(res =>{
                  this.sevenCategorySelectLists = res.data.sevenCategoryList;
                  if (res.data.sevenCategoryList == "") {
                      this.sevenShow = false;
                  }
                  else {
                     this.sevenShow = true;
                  }
            });
          },
          destroy(productNameId){
            axios.delete('/productName/'+productNameId).then(res => {
                Toast.fire({
                    icon: 'success',
                    title: 'Product Name Delete Successfully'
                })
                this.productListShows()
            });
          },
      }

    }
</script>
