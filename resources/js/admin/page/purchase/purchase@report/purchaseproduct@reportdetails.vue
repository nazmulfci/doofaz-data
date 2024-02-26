<template id="">
  <span>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/purchaseproduct@report">Purchase Product Report</router-link></li>
      </ol>
    </nav>
    <div class="card main-card  element-block-example">
      <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
        <h3 style="color:black">Purchase Product List</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered  table-striped">
           <thead>
              <tr>
                 <th>SN</th>
                 <th>Purchase Date</th>
                 <th>Product Name</th>
                 <th>Brand</th>  
                 <th>Invoice</th>  
                 <th>Unit</th>
                 <th>Color/Size</th>
                 <th>Quantity</th>
                 <th>Unit Price</th>
                 <th>Discount</th>
                 <th>Total Price</th>
                 <th>Action</th>
               </tr>
            </thead>
            <tbody>
              <tr v-for="(purchaseProductReport, index) in purchaseProductReports.data">
                <td>{{ index+1 }}</td>
                <td>{{ purchaseProductReport.created_at }}</td>
                <td v-if="purchaseProductReport.product_name">{{ purchaseProductReport.product_name.productName }} ({{ purchaseProductReport.product_name.productCode }})</td>
                <td>
                  <span v-for="allProductBrandList in allProductBrandLists"
                  v-if="allProductBrandList.productBrandEntryId==purchaseProductReport.brandId">
                      {{allProductBrandList.productBrandName}}
                  </span>
                </td>
                <td>  <button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" data-toggle="modal"  :data-target="'#purchaseId'+purchaseProductReport.purchaseProductId">  {{ purchaseProductReport.purchaseInvoiceNo }}</button></td>
                <td v-if="purchaseProductReport.unit_name">{{ purchaseProductReport.unit_name.uniteEntryName }}</td>
                 <td>
                                            <span
                                            v-for="colorList in colorLists"
                                            v-if="colorList.id==purchaseProductReport.colorId">{{
                                              colorList.colorName
                                            }}</span>
                                            
                                            <span
                                            v-for="sizeList in sizeLists"
                                            v-if="sizeList.id==purchaseProductReport.sizeId">/ {{
                                              sizeList.sizeName
                                            }}</span>
                                          </td>
                 <td>{{ purchaseProductReport.quantity }}</td>
                <td>{{ purchaseProductReport.unitPrice }}</td>
                <td>{{ purchaseProductReport.percetage }}&nbsp;%</td>
                <td>{{ purchaseProductReport.totalPrice }}</td>
                <td>
                   <button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" data-toggle="modal" @click="purchaseProductIdCatch(purchaseProductReport.purchaseProductId)" :data-target="'#purchaseProductId'+purchaseProductReport.purchaseProductId">
                      <i class=" fa fa-eye pr-2"></i> Product Details
                   </button>
                </td>
                  <!-- Modal Invoice-->
                <div class="modal fade" :id="'purchaseId'+purchaseProductReport.purchaseProductId" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header bg-primary text-light" >
                        <h5 class="modal-title" id="exampleModalLongTitle"> Detalis</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                        
                       
                        <div class="modal-body">
                          <div class="card main-card  element-block-example">
      <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
        <h3 style="color:black">Purchase Invoice Repot</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered table-striped">
          <thead>
             <tr>
               <th>SN</th>
              
               <th>Purchase.Date</th>
            
                        
               <th>Total.Purchase</th>
               <th>Discount</th>
               <th>Supplier.Payable</th>
               <th>Total.Cost</th>
               <th>Previous.Due</th>
               <th>Current.Payable</th>
             </tr>
            </thead>
            <tbody>
              <tr v-if="purchaseProductReport.invoice">
                <td>{{ index+1 }}</td>
                
                <td>{{ purchaseProductReport.invoice.purchaseDate }}</td>
          
                         
                <td>{{ purchaseProductReport.invoice.totalPurchaseValue }}</td>
                <td>
                    <span v-if="purchaseProductReport.invoice.discount">
                       {{ purchaseProductReport.invoice.discount }}
                    </span>
                    <span v-else>---</span>
                </td>
                <td>{{ purchaseProductReport.invoice.supplierPayable }}</td>
                
               
                <td>{{ purchaseProductReport.invoice.totalProductCost }}</td>
                <td>
                  <span v-if="purchaseProductReport.invoice.previousPayableDue">{{ purchaseProductReport.invoice.previousPayableDue }}</span>
                  <span v-else>---</span>
                </td>
                <td>{{ purchaseProductReport.invoice.currentPayable }}</td>
                 

              
              </tr>
            </tbody>
          
         </table>
       </div>
   
     </div>
                        </div>
                       
                        <div class="modal-footer">
                           <button type="button" class="btn btn-hover-shine btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                  </div>
                </div>
                <!-- Modal -->
                <div class="modal fade" :id="'purchaseProductId'+purchaseProductReport.purchaseProductId" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header bg-primary text-light" >
                        <h5 class="modal-title" id="exampleModalLongTitle"> Detalis</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                        <div class="modal-body">
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Model Name :</h6></span>
                                <span class="col-6 p-0"><h6>{{ modelNo }}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Batch Name :</h6></span>
                                <span class="col-6 p-0"><h6>{{ batchNo }}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>QR Code :</h6></span>
                                <span class="col-6 p-0"><h6>{{ qrCode }}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Mfg License NO :</h6></span>
                                <span class="col-6 p-0"><h6>{{ mfgLicenseNO }}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Warranty :</h6></span>
                                <span class="col-6 p-0">
                                   <h6>
                                       <span  v-if="selectMothOrYearWarranty == 1">
                                           {{ (warranty * 1) }} Day
                                       </span>
                                       <span  v-if="selectMothOrYearWarranty == 2">
                                           {{ (warranty * 30) }} Day
                                       </span>
                                       <span  v-if="selectMothOrYearWarranty == 3">
                                           {{ (warranty * 12) * 30 }} Day
                                       </span>
                                   </h6>
                                </span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Guarantee :</h6></span>
                                <span class="col-6 p-0">
                                   <h6>
                                       <span  v-if="selectMothOrYearGuarantee == 1">
                                           {{ (guarantee * 1) }} Day
                                       </span>
                                       <span  v-if="selectMothOrYearGuarantee == 2">
                                           {{ (guarantee * 30) }} Day
                                       </span>
                                       <span  v-if="selectMothOrYearGuarantee == 3">
                                           {{ (guarantee * 12) * 30 }} Day
                                       </span>
                                   </h6>
                                </span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Mfg Date :</h6></span>
                                <span class="col-6 p-0"><h6>{{ mfgDate }}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Expiry Date :</h6></span>
                                <span class="col-6 p-0"><h6>{{ expiryDate }}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Tax :</h6></span>
                                <span class="col-6 p-0"><h6>{{ tax }}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Tax Amount :</h6></span>
                                <span class="col-6 p-0"><h6>{{ taxAmount }} {{ (taxAmountType == 1)? 'Taka':''}} {{ (taxAmountType == 2)? 'Percetage':''}}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Quantity Type :</h6></span>
                                <span class="col-6 p-0"><h6>{{ (quantityType == 1)? 'Low':''}} {{ (quantityType == 2)? 'Medium':''}} {{ (quantityType == 3)? 'High':''}}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Quantity Notification :</h6></span>
                                <span class="col-6 p-0"><h6>{{ quantityNoti }}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Product Description :</h6></span>
                                <span class="col-8 p-0"><h6>{{ proDescription }}</h6></span>
                              </div>
                            </div>
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Product Advantage :</h6></span>
                                <span class="col-8 p-0"><h6>{{ proAdvantage }}</h6></span>
                              </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                           <button type="button" class="btn btn-hover-shine btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                  </div>
                </div>
              </tr>
            </tbody>
        </table>
       </div>
         <span class="card_footer">
         <pagination :data="purchaseProductReports" :limit="limit"  @pagination-change-page="getPaginateList">
           <span slot="prev-nav">&lt; Previous</span>
           <span slot="next-nav">Next &gt;</span>
         </pagination>
      </span>
    </div>
  </span>
</template>

<script>
  export default {
      data(){
        return{
            allProductBrandLists:[],
            shopProductBrandLists:[],
            purchaseProductReports:{},
            modelNo:{},
            batchNo:{},
            qrCode:{},
            mfgLicenseNO:{},
            warranty:{},
            selectMothOrYearWarranty:{},
            guarantee:{},
            selectMothOrYearGuarantee:{},
            mfgDate:{},
            expiryDate:{},
            tax:{},
            taxAmount:{},
            taxAmountType:{},
            quantityType:{},
            quantityNoti:{},
            proDescription:{},
            proAdvantage:{},
            colorLists: {},
            sizeLists: {},
        }
      },
      props:{
        limit: {
          type: Number,
          default: 2
        }
      },
      mounted(){
          this.productSupplierList();
          this.shopproductBrandEntry();
          this.getPaginateList();
          this.productBrandList();
          this.colorList();
          this.sizeList();
      },
      methods:{
         colorList(){
      axios.get("/colorListAll").then((res) => {
        this.colorLists = res.data.colorList;
      });
    },
    sizeList(){
      axios.get("/sizeListAll").then((res) => {
        this.sizeLists = res.data.sizeList;
      });
    },
          shopproductBrandEntry(){
            axios.get('/shopproductBrandEntry').then(res =>{
                this.shopProductBrandLists = res.data.shopProductBrandList

            })
          },
          productSupplierList(){
            axios.get('/purchaseProductReportList/'+this.$route.params.purchaseProductId).then(res =>{
                this.purchaseProductReports = res.data.purchaseProductReports

            })
          },
                  productBrandList() {
      axios.get("/productBrandList").then((res) => {
        this.allProductBrandLists = res.data.productBrandList;
      });
    },
      //      getPaginateList(page = 1){
      //     axios.get('/purchaseProductReportList/'+this.$route.params.purchaseProductId+'?page=' + page).then(response => {
      //       this.purchaseProductReports = response.data.purchaseProductReports;
      //     });
      // },
          purchaseProductIdCatch(purchaseProductId){
              this.modelNo = '';
              this.batchNo = '';
              this.qrCode = '';
              this.mfgLicenseNO = '';
              this.warranty = '';
              this.selectMothOrYearWarranty = '';
              this.guarantee = '';
              this.selectMothOrYearGuarantee = '';
              this.mfgDate = '';
              this.expiryDate = '';
              this.tax = '';
              this.taxAmount = '';
              this.taxAmountType = '';
              this.quantityType = '';
              this.quantityNoti = '';
              this.proDescription = '';
              this.proAdvantage = '';
              axios.get('/purchaseProductReportDetails/'+purchaseProductId).then(res => {
                    this.modelNo = res.data.purchaseProductDetails.modelNo
                    this.batchNo = res.data.purchaseProductDetails.batchNo
                    this.qrCode = res.data.purchaseProductDetails.qrCode
                    this.mfgLicenseNO = res.data.purchaseProductDetails.mfgLicenseNO
                    this.warranty = res.data.purchaseProductDetails.warranty
                    this.selectMothOrYearWarranty = res.data.purchaseProductDetails.selectMothOrYearWarranty
                    this.guarantee = res.data.purchaseProductDetails.guarantee
                    this.selectMothOrYearGuarantee = res.data.purchaseProductDetails.selectMothOrYearGuarantee
                    this.mfgDate = res.data.purchaseProductDetails.mfgDate
                    this.expiryDate = res.data.purchaseProductDetails.expiryDate
                    this.tax = res.data.purchaseProductDetails.tax
                    this.taxAmount = res.data.purchaseProductDetails.taxAmount
                    this.taxAmountType = res.data.purchaseProductDetails.taxAmountType
                    this.quantityType = res.data.purchaseProductDetails.quantityType
                    this.quantityNoti = res.data.purchaseProductDetails.quantityNoti
                    this.proDescription = res.data.purchaseProductDetails.proDescription
                    this.proAdvantage = res.data.purchaseProductDetails.proAdvantage
              });
          },
       }
  }
</script>
