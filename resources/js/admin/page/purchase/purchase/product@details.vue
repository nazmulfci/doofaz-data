<template id="">
  <span>
      <div class="card">
        <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
             <h3 style="color:black">Sales Product  Details </h3>
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
           <h3 style="color:black">Product Details</h3>
         </div>
         <div class="table-responsive bg-white">
           <table class="table table-hover table-bordered table-striped">
             <thead>
                <tr>
                  
                  <th>Product.Name</th>
                  <th>Brand</th>                         
                  <th>Mdoel.Name</th>
                  <th>Batch.Name </th>
                  <th>QR.Code</th>
                  <th>Mfg.License.NO </th>
                  <th>Warranty </th>
                  <th>Guarantee</th>
                  <th>Mfg.Date</th>
                  <th>Expiry.Date </th>
                  <th>Tax </th>
                  <th>Tax.Amount </th>
                  <th>Quantity.Type </th>
                  <th>Quantity.Notification </th>
               
                  <th>Action</th>
                </tr>
               </thead>
               <tbody>
                 <tr>
                  
                   <td>{{ info.productName}} </td>
                   <td>{{ brandinfo.productBrandName}} </td>                
                   <td>{{ productLists.modelNo }}</td>
                   <td>{{ productLists.batchNo }}</td>
                   <td>{{ productLists.qrCode }}</td>
                   <td>{{ productLists.mfgLicenseNO }}</td>
                   <td>{{ productLists.warranty }}</td>
                   <td>{{ productLists.guarantee }}</td>
                   <td>{{ productLists.mfgDate }}</td>
                   <td>{{ productLists.expiryDate }}</td>
                   <td>{{ productLists.tax }}</td>
                   <td>{{ productLists.taxAmount }}</td>
                   <td>{{ productLists.quantityType }}</td>
                   <td>{{ productLists.quantityNoti }}</td>
                   
                       <td>
                   <button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" data-toggle="modal" @click="purchaseProductIdCatch(productLists.purchaseProductId)" :data-target="'#purchaseProductId'+productLists.purchaseProductId">
                      <i class=" fa fa-eye pr-2"></i> Update
                   </button>
                </td>

                <!-- Modal -->
                   <div class="modal fade" :id="'purchaseProductId'+productLists.purchaseProductId" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                     <div class="modal-dialog" role="document">
                       <div class="modal-content">
                         <div class="modal-header">
                           <h5 class="modal-title" id="exampleModalLongTitle">Product  Detalis Update</h5>
                           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                           </button>
                         </div>
                          <form>
                             <div class="modal-body">
                               <div class="purchase-entry py-4 px-2">
                                 <div class="col-12  supplier-border shadow-custom">
                                    <div class="form-row">
                                      <input  v-model="form.purchaseProductIdCatch"  type="hidden" name="purchaseProductIdCatch" class="form-control">

                                         <div class="form-group col-md-6">
                                             <label><b>Model No </b></label>
                                             <input  v-model="form.modelNo" type="text" name="modelNo"  placeholder="Model No" class="form-control">
                                         </div>
                                         <div class="form-group col-md-6">
                                             <label><b>Batch No </b></label>
                                             <input  v-model="form.batchNo" type="text" name="batchNo"  placeholder="Batch No" class="form-control">
                                         </div>
                                     </div>

                                      <div class="form-row">
                                          <div class="form-group col-md-6">
                                              <label><b>Mfg Date </b></label>
                                              <input  v-model="form.mfgDate" type="date" name="mfgDate" class="form-control">
                                          </div>
                                         
                                        <div class="form-group col-md-6">
                                              <label><b>Expiry Date </b></label>
                                              <input  v-model="form.expiryDate" type="date" name="expiryDate"  class="form-control">
                                          </div>
                                         
                                     </div>


                                     <div class="form-row">
                                        <div class="form-group col-md-6">
                                              <label><b>Mfg License No </b></label>
                                              <input  v-model="form.mfgLicenseNO" type="text" name="mfgLicenseNO"  placeholder="Mfg License No" class="form-control">
                                          </div>
                                          <div class="form-group col-md-6">
                                              <label><b>QR Code </b></label>
                                              <input  v-model="form.qrCode" type="text" name="qrCode"  placeholder="QR Code" class="form-control">
                                          </div>
                                      </div>

                                      <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label><b>Warranty </b></label>
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                  <input  v-model="form.warranty" type="number" name="warranty"  placeholder="Warranty" class="form-control">
                                                </div>
                                                <div class="col-md-6">
                                                   <select  v-model="form.selectMothOrYearWarranty" name="selectMothOrYearWarranty" class="form-control">
                                                       <option value="">Select One</option>
                                                       <option value="1">Day</option>
                                                       <option value="2">Month</option>
                                                       <option value="3">Years</option>
                                                   </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label><b>Guarantee </b></label>
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                  <input  v-model="form.guarantee" type="number" name="guarantee"  placeholder="Guarantee" class="form-control">
                                                </div>
                                                <div class="col-md-6">
                                                   <select  v-model="form.selectMothOrYearGuarantee" name="selectMothOrYearGuarantee" class="form-control">
                                                       <option value="">Select One</option>
                                                       <option value="1">Day</option>
                                                       <option value="2">Month</option>
                                                       <option value="3">Years</option>
                                                   </select>
                                                </div>
                                            </div>
                                        </div>
                                      </div>
                                     
                                      <div class="form-row">
                                          <div class="form-group col-md-6">
                                              <label><b>Tax  </b> <hr> </label>
                                              <div class="custom-control custom-radio custom-control-inline">
                                                  <input type="radio" id="customRadioInline1" v-model="form.tax" name="tax" class="custom-control-input" value="1" @click.submit="taxYes()">
                                                  <label class="custom-control-label" for="customRadioInline1">Yes</label>
                                              </div>
                                              <div class="custom-control custom-radio custom-control-inline">
                                                  <input type="radio" id="customRadioInline2" v-model="form.tax" name="tax" class="custom-control-input" value="0" @click.submit="taxNo()">
                                                  <label class="custom-control-label" for="customRadioInline2">No</label>
                                              </div>
                                              <div class="form-group mb-0 mt-3" v-if="taxAmountTypeShow">
                                                 <div class="input-group">
                                                     <input  v-model="form.taxAmount" type="text" name="taxAmount" placeholder="Tax Amount"  class="form-control">
                                                     <div class="input-group-prepend">
                                                       <select  v-model="form.taxAmountType" name="taxAmountType" class="input-group-text">
                                                           <option value="">Select One</option>
                                                           <option value="1">Taka</option>
                                                           <option value="2">Percetage</option>
                                                       </select>
                                                     </div>
                                                 </div>
                                              </div>
                                          </div>
                                          <div class="form-group col-md-6">
                                              <label><b>Quality Type</b> <hr></label>
                                              <div class="custom-radio custom-control-inline p-0 m-0">
                                                  <input type="radio" id="customRadioInline3" v-model="form.quantityType" name="quantityType" class="custom-control-input" value="1">
                                                  <label class="custom-control-label" for="customRadioInline3">Low</label>
                                              </div>
                                              <div class="custom-radio custom-control-inline p-0 m-0">
                                                  <input type="radio" id="customRadioInline4" v-model="form.quantityType" name="quantityType" class="custom-control-input" value="2">
                                                  <label class="custom-control-label" for="customRadioInline4">Medium</label>
                                              </div>
                                              <div class="custom-radio custom-control-inline p-0 m-0">
                                                  <input type="radio" id="customRadioInline5" v-model="form.quantityType" name="quantityType" class="custom-control-input" value="3">
                                                  <label class="custom-control-label" for="customRadioInline5">High</label>
                                              </div>
                                          </div>
                                     </div>

                                     <div class="form-group">
                                         <label><b>Quantity Notification </b></label>
                                         <input  v-model="form.quantityNoti" type="number" name="quantityNoti" placeholder="Quantity Notification" class="form-control">
                                     </div>
                                     <!-- Add More Field -->
                                     <div class="form-group">
                                       <button type="button" class="btn btn-hover-shine btn-primary" @click.submit="addMoreField()" name="button">Add More Field</button>
                                     </div>


                                     <div class="moreFieldForEdit">

                                      

                                     <div class="form-row" v-if="fieldNameOneShow">
                                         <div class="form-group col-md-5">
                                             <label>Field Name</label>
                                             <input type="text" v-model="form.fieldNameOne"  name="fieldNameOne" placeholder="Enter Name" class="form-control">
                                         </div>
                                         <div class="form-group col-md-5">
                                             <label>Field Work</label>
                                             <input type="text" v-model="form.workOne"  name="workOne" placeholder="Enter Work" class="form-control">
                                         </div>
                                         <div class="form-group col-md-2">
                                             <label>Delete</label>
                                             <button type="button" class="btn btn-hover-shine btn-danger" @click.submit="oneFieldDelete(fieldNameOneShow)" ><i class="fa fa-times" aria-hidden="true"></i></button>
                                         </div>
                                    </div>
                                    <div class="form-row" v-if="fieldNameTwoShow">
                                        <div class="form-group col-md-5">
                                          <input type="text"  v-model="form.fieldNameTwo"  name="fieldNameTwo" placeholder="Enter Name" class="form-control">
                                        </div>
                                        <div class="form-group col-md-5">
                                          <input type="text"  v-model="form.workTwo"  name="workTwo" placeholder="Enter Work" class="form-control">
                                        </div>
                                        <div class="form-group col-md-2">
                                          <button type="button" class="btn btn-hover-shine btn-danger" @click.submit="twoFieldDelete(fieldNameTwoShow)" ><i class="fa fa-times" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                    <div class="form-row" v-if="fieldNameThreeShow">
                                        <div class="form-group col-md-5">
                                          <input type="text"  v-model="form.fieldNameThree"  name="fieldNameThree" placeholder="Enter Name" class="form-control">
                                        </div>
                                        <div class="form-group col-md-5">
                                          <input type="text"  v-model="form.workThree"  name="workThree" placeholder="Enter Work" class="form-control">
                                        </div>
                                        <div class="form-group col-md-2">
                                          <button type="button" class="btn btn-hover-shine btn-danger" @click.submit="threeFieldDelete(fieldNameThreeShow)" ><i class="fa fa-times" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                    <div class="form-row" v-if="fieldNameFourShow">
                                        <div class="form-group col-md-5">
                                          <input type="text"  v-model="form.fieldNameFour"  name="fieldNameFour" placeholder="Enter Name" class="form-control">
                                        </div>
                                        <div class="form-group col-md-5">
                                          <input type="text"  v-model="form.workFour"  name="workFour" placeholder="Enter Work" class="form-control">
                                        </div>
                                        <div class="form-group col-md-2">
                                          <button type="button" class="btn btn-hover-shine btn-danger" @click.submit="fourFieldDelete(fieldNameFourShow)" ><i class="fa fa-times" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                    <small class="text-danger"> Maximum field limit 4. </small>
                                    </div>


                                 </div>
                                 <div class="col-12 supplier-border mt-5 shadow-custom">
                                     <div class="form-group">
                                         <label><b> Product Description </b></label>
                                         <vue-editor v-model="form.proDescription" type="text" name="proDescription"   placeholder="Product Description" ></vue-editor>
                                     </div>
                                      <div class="form-group">
                                         <label><b> Product Advantage </b></label>
                                         <vue-editor v-model="form.proAdvantage" type="text" name="proAdvantage"  placeholder="Product Advantage" ></vue-editor>
                                      </div>
                                 </div>
                               </div>
                             </div>
                             <div class="modal-footer">
                               <button type="button" class="btn btn-hover-shine btn-danger" data-dismiss="modal">Close</button>
                               <button  class="btn btn-hover-shine btn-success" @click.prevent="updateInfo(productLists.purchaseProductId)" data-dismiss="modal" :disabled="loading"
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
Update</button>
                             </div>
                         </form>
                       </div>
                     </div>
                   </div>
              </tr>
             </tbody>
          </table>
        </div>
      
      </div>
  </span>

</template>

<script>
import { VueEditor } from "vue2-editor";
import Datepicker from 'vuejs-datepicker';
import moment from 'moment'

    export default {
        data(){
            return{
              loading: false,
                 
                form: new Form({
                        // Modal Form
                  purchaseProductIdCatch : '',
                  modelNo : '',
                  batchNo : '',
                  qrCode : '',
                  mfgLicenseNO : '',
                  warranty : '',
                  selectMothOrYearWarranty : '',
                  guarantee : '',
                  selectMothOrYearGuarantee : '',
                  mfgDate : '',
                  expiryDate : '',
                  tax : '',
                  taxAmount : '',
                  taxAmountType : '',
                  quantityType : '',
                  quantityNoti : '',
                  proDescription : '',
                  proAdvantage : '',
                  // Add More Field
                  fieldNameOne:'',
                  fieldNameTwo:'',
                  fieldNameThree:'',
                  fieldNameFour:'',
                  workOne:'',
                  workTwo:'',
                  workThree:'',
                  workFour:'',
                  //
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
               productLists:[],
                info:[],
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
            }
        },
        props:{
             limit: {
               type: Number,
               default: 2
           }
        },
        components: {
              VueEditor,
          Datepicker

        },
        mounted() {
           
            this.salesProductNameList()          
            this.ShowDataLists()
        },
        methods: {
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
              purchaseProductIdCatch(purchaseProductId){
        
          axios.get('/stockSummaryProductDetails/'+purchaseProductId).then(res => {
                this.form.fill(res.data.purchaseProductDetails)
               
          });
       },
 updateInfo(id) {
   this.loading = true;
      axios.post(`purchaseProductDetailsUpdateinfo/${id}`, this.form).then((res) => {
        this.loading = false;
       ;
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
         this.salesProductNameList()          
            this.ShowDataLists()
              this.listShow=false

      }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
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
                axios.get('/productDetailsInfo/'+this.form.purchaseProductId+'/'+this.form.productBrandId).then(res => {
                 
               
              
                  this.info=res.data.pname
                  this.brandinfo=res.data.brandget
                  this.listShow=true
               
                       this.productLists=res.data.pDetail
                         this.form.fill(res.data.pDetail);
                 
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
