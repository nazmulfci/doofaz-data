<template id="">
  <span>
    <div class="card main-card  element-block-example" v-if="role.role != 1 && role.role != 2">
      <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
        <h3 style="color:black">Product Name With Price</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered table-striped">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th>SN</th>
               <th>Product.Name</th>
               <th>Brand</th>
               <th>Color</th>
               <th>Size</th>
               <th>Unit</th>
               <th>MRP.Price</th>
               <th>Sales.Price</th>
               <th>Wholesale.Price</th>
               <th>Special.Price</th>
               <th>E-Commerce.Price</th>
               <th>Created.Date</th>
               <th>Action</th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(salesProductPriceReport, index) in salesProductPriceReports.data">
                <td>{{ index+1 }}</td>
                <td>{{ salesProductPriceReport.product_name.productName }} ({{ salesProductPriceReport.product_name.productCode }})</td>
                <td  v-if="salesProductPriceReport.brandname">{{salesProductPriceReport.brandname.productBrandName}}</td>
                <td>
                  <span
                  v-for="colorList in colorLists"
                  v-if="colorList.id==salesProductPriceReport.colorId">{{
                    colorList.colorName
                  }}</span>
                </td>
                <td>
                  <span
                  v-for="sizeList in sizeLists"
                  v-if="sizeList.id==salesProductPriceReport.sizeId">  {{
                    sizeList.sizeName
                  }}</span>
                </td>
                <td>
                  <button type="button" class="btn btn-primary"
                   @click="salesUnitListHistory(salesProductPriceReport.productId,salesProductPriceReport.brandId,salesProductPriceReport.colorId,salesProductPriceReport.sizeId)"
                    data-toggle="modal" data-target="#exampleModalUnit"> {{ salesProductPriceReport.unit.uniteEntryName }} </button>
                    </td>
                <td>{{ salesProductPriceReport.mrpPrice }}</td>
                <td>{{ salesProductPriceReport.salesPrice }}</td>
                <td>{{ salesProductPriceReport.wholesalePrice }}</td>
                <td>{{ salesProductPriceReport.specialPrice }}</td>
                <td>{{ salesProductPriceReport.eCommercePrice }}</td>
                <td>{{ salesProductPriceReport.created_at }}</td>
                   <td>
                   <button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" data-toggle="modal" @click="purchaseProductIdCatch(salesProductPriceReport.purchaseProductId)" :data-target="'#purchaseProductId'+salesProductPriceReport.purchaseProductId">
                      <i class=" fa fa-eye pr-2"></i> Product Details
                   </button>
                   <!-- <button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-danger" data-toggle="modal" @click="history(salesProductPriceReport.purchaseProductId)" :data-target="'#purchaseProductId2'+salesProductPriceReport.purchaseProductId">
                      <i class=" fa fa-info  pr-2"></i> Price Update History
                   </button> -->
                </td>

                <!-- Modal -->
                <div class="modal fade" :id="'purchaseProductId'+salesProductPriceReport.purchaseProductId" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header bg-primary text-light" >
                        <h5 class="modal-title" id="exampleModalLongTitle">Product Detalis</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                        <div class="modal-body">
                            <div class="col-12 pl-0 pt-2 border">
                              <div class="row m-0">
                                <span class="col-3 pr-0"><h6>Mdoel Name :</h6></span>
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
                <!-- Modal History-->
                <div class="modal fade" :id="'purchaseProductId2'+salesProductPriceReport.purchaseProductId" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header bg-primary text-light" >
                        <h5 class="modal-title" id="exampleModalLongTitle">Product Price Setup History</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                        
                        <div class="modal-boday">
                            <div class="card mt-5" >
         <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
           <h3 style="color:black">Sales Product Price Update History</h3>
         </div>
         <div class="table-responsive bg-white">
           <table class="table table-hover table-bordered table-striped">
             <thead>
                <tr>                                     
                  <th>SN</th>
                  <th>MRP Price</th>
                  <th>Sales Price</th>
                  <th>Wholesale Price</th>
                  <th>Special Price</th>
                  <th>E-Commerce Price</th>
                  <th>Updated Date</th>
              
                </tr>
               </thead>
               <tbody  v-for="(priceList,index) in priceLists" :key="priceList.id">
                 <tr v-if="index==0" style="background:#beeeac">
                   
                   <td>{{index+1}}</td>  
                            
                   <td>{{ priceList.mrpPrice }}</td>
                   <td>{{ priceList.salesPrice }}</td>
                   <td>{{ priceList.wholesalePrice }}</td>
                   <td>{{ priceList.specialPrice }}</td>
                   <td>{{ priceList.eCommercePrice }}</td>
                   <td>{{ priceList.created_at }}</td>
                 
              </tr>
                 <tr v-else >
                  
                   <td>{{index+1}}</td>         
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
         
           <table class="table table-hover table-bordered table-striped">
             <thead>
                <tr>
                  <th>Price Type</th>
                  <th>Unit</th>
                  <th>Unit Price</th>
                </tr>
               </thead>
               <tbody>
                 <tr v-for="priceList in salesUnitListHistorys" :style="`background:`+priceList.color">
                  
                   <td><span v-for="priceTypeList in priceTypeLists" v-if="priceTypeList.salesPriceTypeId==priceList.priceTypeId"> {{priceTypeList.salesPriceType}} </span></td>
                   <td><span v-for="unitNameShow in unitNameShows" v-if="unitNameShow.uniteEntryId==priceList.unitId"> {{unitNameShow.uniteEntryName}} </span></td>
                   <td>{{ priceList.salesUnitPrice }}</td>
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
      





       <span class="card_footer">
         <pagination :data="salesProductPriceReports" :limit="limit"  @pagination-change-page="getPaginateList">
           <span slot="prev-nav">&lt; Previous</span>
           <span slot="next-nav">Next &gt;</span>
         </pagination>
       </span>
     </div>
  </span>
</template>
<script>
    export default {
      data () {
          return {
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
             salesProductPriceReports:{},
             role:{},
             shopProductBrandLists:[],
             priceLists:[],
             colorLists:[],
             sizeLists:[],
             salesUnitListHistorys:[],
             unitNameShows:[],
             priceTypeLists:[],
          }
      },
      props:{
           limit: {
             type: Number,
             default: 2
         }
      },
      mounted(){
         this.productPriceSetupList();
         this.getPaginateList();
         this.conditon();
         this.colorList();
         this.sizeList();
         this.unitNameShow();
         this.priceType();
        
      },
      methods:{


        
            salesUnitListHistory(pId,bId,cId,sId) {
                axios.get('/ProductSalePriceInfo/'+pId+'/'+bId+'/'+cId+'/'+sId).then(res => {
                  this.salesUnitListHistorys=res.data.salesProductPrice
                })
            },

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
          productPriceSetupList(){
            axios.get('/inventoryProductNameWithPrice').then(res =>{
                this.salesProductPriceReports =  res.data.salesProductPriceReports
            })
          },
          getPaginateList(page = 1){
            axios.get('/inventoryProductNameWithPrice?page=' + page).then(response => {
              this.salesProductPriceReports = response.data.salesProductPriceReports;
            });
          },
          
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
          axios.get('/stockSummaryProductDetails/'+purchaseProductId).then(res => {
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
           history(purchaseProductId){       
          axios.get('/priceUpdateHistory/'+purchaseProductId).then(res => {
            this.priceLists=res.data.historyGet    
          });
       },
          conditon(){
              axios.get('/condition').then(res =>{
                 this.role = res.data.authInfo;
              })
          },
      }
    }
</script>
