<template id="">
  <span>
      <div class="card">
        <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
             <h3 style="color:black">Sales Product  Price </h3>
         </div>
         <form @submit.prevent="productDiscountPriceEntry()">
            <div class="product-discount py-4 px-2">
               <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
                  <div class="form-group">
                         <label>Product Name/Code</label>


                         <select v-model="form.purchaseProductId" class="form-control" 
                         @change.prevent="showProductBrand()">
                            <option value="">Select One</option>
                            <option v-for="purchaseProductList in purchaseProductLists" 
                            :value="purchaseProductList.product_name.productNameId">
                            {{ purchaseProductList.product_name.productName }} 
                            ({{ purchaseProductList.product_name.productCode }})</option>
                         </select>
                         <has-error :form="form" field="purchaseProductId"></has-error>
                     </div>

                    
                     <div class="form-group" v-if="productBrand">
                         <label> Product Brand </label>
                         
                         <select  v-model="form.productBrandId" class="form-control" 
                           @change.prevent="productIdCatch()" 
                      >
                        
                            <option value=""> Select One </option>
                             
                             <option
                             v-for="brandList in brandLists" 
                              :key="brandList.brandId"
                             
                              :value="brandList.brandId"
                              >
          
                              <span 
                              v-for="productBrandList in productBrandLists"
                              :key="productBrandList.productBrandEntryId"
                              :value="productBrandList.productBrandEntryId"
                              v-if="productBrandList.productBrandEntryId==brandList.brandId"
                              >
                                {{ productBrandList.productBrandName }}
                             
                              </span>
                            </option>
                            
                           
                            </select>
                         <has-error :form="form" field="productBrandId"></has-error>
                     </div>

                     
                </div>
            </div>
          
       </form>
     </div>

      <div class="card mt-5" v-if="listShow">
         <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
           <h3 style="color:black">Sales Product Price List</h3>
         </div>
         <div class="table-responsive bg-white p-3">
           <table class="table table-hover table-bordered table-striped">
             <thead>
                <tr>
                  
                  <th>Product Name</th>
                  <th>Brand</th>                         
                  <th>Color</th>                         
                  <th>Size</th>                         
                  <th>Unit</th>                         
                  <th>MRP Price</th>
                  <th>Sales Price</th>
                  <th>Wholesale Price</th>
                  <th>Special Price</th>
                  <th>E-Commerce Price</th>
                  <th>Created Date</th>
                  <th colspan="2" class="text-center">History</th>
                  <th>Action</th>
                </tr>
               </thead>
               <tbody>
                 <tr v-for="priceList in priceLists">
                  
                   <td> {{info.productName}} </td>                
                   <td><span v-for="pBrandList in pBrandLists" v-if="priceList.brandId==pBrandList.productBrandEntryId"> {{pBrandList.productBrandName}} </span> </td>                
                   <td><span v-for="colorList in colorLists" v-if="priceList.colorId==colorList.id"> {{colorList.colorName}} </span> </td>                              
                   <td><span v-for="sizeList in sizeLists" v-if="priceList.sizeId==sizeList.id"> {{sizeList.sizeName}} </span> </td>                                         
                   <td><span v-for="unitNameShow in unitNameShows" v-if="unitNameShow.uniteEntryId==priceList.unitId"> {{unitNameShow.uniteEntryName}} </span> </td>                                         
                   <td>{{ priceList.mrpPrice }}</td>
                   <td>{{ priceList.salesPrice }}</td>
                   <td>{{ priceList.wholesalePrice }}</td>
                   <td>{{ priceList.specialPrice }}</td>
                   <td>{{ priceList.eCommercePrice }}</td>
                   <td>{{ priceList.created_at }}</td>
                   <td> <button type="button" class="btn btn-primary"
                   @click="salesUnitListHistory(priceList.productId,priceList.brandId,priceList.colorId,priceList.sizeId)"
                    data-toggle="modal" data-target="#exampleModalUnit"> History Kg </button></td>
                    <td> <button type="button" class="btn btn-primary"
                   @click="productIdCatch1(priceList.productId,priceList.brandId,priceList.colorId,priceList.sizeId)"
                    data-toggle="modal" data-target="#exampleModal"> History </button></td>
                   
                   <td>
                     <router-link :to="`/productprice@edit${priceList.salesProductPriceEntryId}`" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"><i class=" fa fa-edit"></i>Update</router-link>
                   </td>
              </tr>
             </tbody>
          </table>
        </div>

         
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="table-responsive bg-white">
           <table class="table table-hover table-bordered table-striped">
             <thead>
                <tr>
                  
                  <th>Product Name</th>
                  <th>Brand</th>                         
                  <th>Color</th>                         
                  <th>Size</th>                         
                  <th>Unit</th>                         
                  <th>MRP Price</th>
                  <th>Sales Price</th>
                  <th>Wholesale Price</th>
                  <th>Special Price</th>
                  <th>E-Commerce Price</th>
                  <th>Created Date</th>
                </tr>
               </thead>
               <tbody>
                 <tr v-for="priceList in priceListModals">
                  
                   <td>{{info.productName}}</td>
                   <td><span v-for="pBrandList in pBrandLists" v-if="priceList.brandId==pBrandList.productBrandEntryId"> {{pBrandList.productBrandName}} </span> </td>                
                   <td><span v-for="colorList in colorLists" v-if="priceList.colorId==colorList.id"> {{colorList.colorName}} </span> </td>                              
                   <td><span v-for="sizeList in sizeLists" v-if="priceList.sizeId==sizeList.id"> {{sizeList.sizeName}} </span> </td>                                         
                   <td><span v-for="unitNameShow in unitNameShows" v-if="unitNameShow.uniteEntryId==priceList.unitId"> {{unitNameShow.uniteEntryName}} </span> </td>                                         
                   <td>{{ priceList.mrpPrice }}</td>
                   <td>{{ priceList.salesPrice }}</td>
                   <td>{{ priceList.wholesalePrice }}</td>
                   <td>{{ priceList.specialPrice }}</td>
                   <td>{{ priceList.eCommercePrice }}</td>
                   <td>{{ priceList.created_at }}</td>  
              </tr>
             </tbody>
          </table>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal"> Close </button>
      </div>
    </div>
  </div>
</div>
      
         
<!-- Modal -->
<div class="modal fade" id="exampleModalUnit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="table-responsive bg-white">
          <table class="table table-bordered">
            <tr>
              <th> Product Name </th>
              <th> Brand </th>
              <th> Color </th>
              <th> Size </th>
            </tr>
            <tr>
              <td>{{info.productName}} </td>                
                   <td><span v-for="pBrandList in pBrandLists" v-if="productInfo.brandId==pBrandList.productBrandEntryId"> {{pBrandList.productBrandName}} </span> </td>                
                   <td><span v-for="colorList in colorLists" v-if="productInfo.colorId==colorList.id"> {{colorList.colorName}} </span> </td>                              
                   <td><span v-for="sizeList in sizeLists" v-if="productInfo.sizeId==sizeList.id"> {{sizeList.sizeName}} </span> </td> 
            </tr>
          </table>
           <table class="table table-hover table-bordered table-striped">
             <thead>
                <tr>
                  <th>Price Type</th>
                  <th>Unit</th>
                  <th>Unit Price</th>
                  <th> Date</th>
                </tr>
               </thead>
               <tbody>
                 <tr v-for="priceList in salesUnitListHistorys" :style="`background:`+priceList.color">
                  
                   <td><span v-for="priceTypeList in priceTypeLists" v-if="priceTypeList.salesPriceTypeId==priceList.priceTypeId"> {{priceTypeList.salesPriceType}} </span></td>
                   <td><span v-for="unitNameShow in unitNameShows" v-if="unitNameShow.uniteEntryId==priceList.unitId"> {{unitNameShow.uniteEntryName}} </span></td>
                   <td>{{ priceList.salesUnitPrice }}</td>
                   <td>{{ priceList.created_at }}</td>  
              </tr>
             </tbody>
          </table>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal"> Close </button>
      </div>
    </div>
  </div>
</div>
      
      </div>




 
      
  </span>

</template>

<script>
import Datepicker from 'vuejs-datepicker';
import moment from 'moment'

    export default {
        data(){
            return{
                form: new Form({
                    purchaseProductId:'',
                    productNameId:'',
                    productId:'',
                    unitPrice:'',
                    mrpPrice:'',
                    salesPrice:'',
                    wholesalePrice: '',
                    specialPrice:'',
                    eCommercePrice:'',
                    inputCheck:'',

                    mrpDiscountAmount:'',
                    mrpDiscountType:'',
                    mrpCheckInputValue:'',
                    mrpStartDate:'',
                    mrpExpiredDate:'',

                    salesDiscountAmount:'',
                    salesDiscountType:'',
                    salesCheckInputValue:'',
                    salesStartDate:'',
                    salesExpiredDate:'',

                    wholesaleDiscountAmount:'',
                    wholesaleDiscountType:'',
                    wholesaleCheckInputValue:'',
                    wholesaleStartDate:'',
                    wholesaleExpiredDate:'',

                    specialDiscountAmount:'',
                    specialDiscountType:'',
                    specialCheckInputValue:'',
                    specialStartDate:'',
                    specialExpiredDate:'',

                    eCommerceDiscountAmount:'',
                    eCommerceDiscountType:'',
                    eCommerceCheckInputValue:'',
                    eCommerceStartDate:'',
                    eCommerceExpiredDate:'',
                    productBrandId:''

                }),
                purchaseProductLists:{},
                salesProductDiscountPriceLists:{},
                priceLists:[],
                priceListModals:[],
                salesUnitListHistorys:[],
                unitNameShows:[],
                info:[],
                productNameLists:[],
                colorLists:[],
                sizeLists:[],
                pBrandLists:[],
                brandinfo:[],
                brandLists:[],
                shopProductBrandLists:[],
                productBrandLists:[],
                mrpPriceBoxShow:false,
                salesPriceBoxShow:false,
                wholesalePriceBoxShow:false,
                specialPriceBoxShow:false,
                eCommercePriceBoxShow:false,
                productBrand:false,
                listShow:false,
                productInfo:'',
                priceTypeLists:[],
            }
        },
        props:{
             limit: {
               type: Number,
               default: 2
           }
        },
        components: {
          Datepicker
        },
        mounted() {
           
            this.salesProductNameList()          
            this.ShowDataLists()
            this.productBrandList()
            this.colorList()
            this.sizeList()
            this.productNameList()
            this.unitNameShow()
            this.priceType()
        },
        methods: {



  

              priceType() {
      axios.get("/salesPriceType").then((res) => {
        this.priceTypeLists = res.data.salesPriceTypes;
      });
    },
  

              unitNameShow() {
      axios.get("/unitNameShow").then((res) => {
        this.unitNameShows = res.data.unitNameShow;
      });
    },


          productNameList(){
      axios.get("productNameList").then((res) => {
        this.productNameLists = res.data.productList;
      });
    },
          colorList(){
      axios.get("/colorListAll/").then((res) => {
        this.colorLists = res.data.colorList;
      });
    },
    sizeList(){
      axios.get("/sizeListAll/").then((res) => {
        this.sizeLists = res.data.sizeList;
      });
    },
        productBrandList() {
      axios.get("/productBrandList").then((res) => {
        this.pBrandLists = res.data.productBrandList;
      });
    },
            customFormatter(date) {
              return moment(date).format('DD-MM-YYYY');
            },
            salesProductNameList() {
                axios.get('/salesProductNameShow').then(res => {
                     this.purchaseProductLists = res.data.purchaseProductListinfo
                })
            },
               ShowDataLists() {
              axios.get('/shopproductBrandEntry').then(res => {
              
                this.shopProductBrandLists = res.data.shopProductBrandList
              })
            },

             showProductBrand() {
               
                // alert(this.form.purchaseProductId);
                axios.get('/productUnitePrice/'+this.form.purchaseProductId).then(res => {
                
                     this.brandLists = res.data.brandListinfo
                     this.productBrandLists = res.data.productBrandList
                     this.productBrand = true
                                      
                })
            },

            productIdCatch() {
                axios.get('/productPriceEntryInfoForPriceUpdate/'+this.form.purchaseProductId+'/'+this.form.productBrandId).then(res => {
                  this.priceLists=res.data.salesProductPrice
                  this.info=res.data.pname
                  this.brandinfo=res.data.brandget
                  this.listShow=true
                })
            },

            productIdCatch1(pId,bId,cId,sId) {
                axios.get('/productPriceEntryInfoForPriceHistory/'+pId+'/'+bId+'/'+cId+'/'+sId).then(res => {
                  this.priceListModals=res.data.salesProductPrice
                })
            },

            salesUnitListHistory(pId,bId,cId,sId) {
                axios.get('/productPriceEntryUnitHistory/'+pId+'/'+bId+'/'+cId+'/'+sId).then(res => {
                  this.salesUnitListHistorys=res.data.salesProductPrice
                  this.productInfo=res.data.productInfo
                })
            },
           

        }
    }
</script>
<style media="screen">
  .product-discount .input-group-text{
      padding: 0px 20px;
  }
  .product-discount .form-check-input {
    margin-left: -5px;
  }
  .product-discount input{
      background-color: #fff;
      border: 1px solid #ced4da;
      border-radius: .25rem;
      padding: 8px 20px;
  }
</style>
