<template id="">
  <span>
    <!-- <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/purchaseproduct@report">Purchase Product Repot</router-link></li>
      </ol>
    </nav> -->
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
                 <th>Color/Size</th>  
                 <th>Invoice</th>  
                 <th>Unit</th>
                 <th>Quantity</th>
                 <th>Unit Price</th>
                 <th>Discount</th>
                 <th>Total Price</th>
                 <th>Action</th>
               </tr>
            </thead>
            <tbody>
              <tr v-for="(purchaseProductReport, index) in rePurchaseProductReports">
                <td>{{ index+1 }}</td>
                <td>{{ purchaseProductReport.created_at }}</td>
                <td v-if="purchaseProductReport.product_name">{{ purchaseProductReport.product_name.productName }} ({{ purchaseProductReport.product_name.productCode }})</td>
                
                <td>
                  <span v-for="allProductBrandList in allProductBrandLists"
                  v-if="allProductBrandList.productBrandEntryId==purchaseProductReport.brandId">
                      {{allProductBrandList.productBrandName}}
                  </span>
                    
                </td>
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

                  <td>  <button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" data-toggle="modal" @click.prevent="viewInvoiceInfo(purchaseProductReport.purchaseInvoiceNo)"  :data-target="'#purchaseId'">  {{ purchaseProductReport.purchaseInvoiceNo }}</button></td>
                <td v-if="purchaseProductReport.unit_name">{{ purchaseProductReport.unit_name.uniteEntryName }}</td>
                 <td>{{ purchaseProductReport.quantity }}</td>
                <td>{{ purchaseProductReport.unitPrice }}</td>
                <td>{{ purchaseProductReport.percetage }}&nbsp;%</td>
                <td>{{ purchaseProductReport.totalPrice }}</td>
                <td>
                   <button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" data-toggle="modal" @click="purchaseProductIdCatch(purchaseProductReport.purchaseProductId)" :data-target="'#purchaseProductId'+purchaseProductReport.purchaseProductId">
                      <i class=" fa fa-eye pr-2"></i> Product Details
                   </button>
                </td>
                <!-- Modal -->
              <div
                class="modal fade"
                :id="'purchaseId'"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog  modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header bg-primary text-light">
                      <h5 class="modal-title" id="exampleModalLongTitle">
                        Product Detalis
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div class="modal-body">
                      <div class="card">
                        <div class="card-header-tab card-header alert-info">
                          <h4>
                            <i
                              class="
                                header-icon
                                lnr-laptop-phone
                                icon-gradient
                                bg-premium-dark
                              "
                            ></i>
                            Purchase Invoice
                          </h4>
                        </div>

                        <div class="card-body">
                          <div class="toolbar hidden-print">
                            <div class="text-right">
                              <button
                                id="printInvoice"
                                onclick="jQuery('#invoice').print()"
                                class="btn btn-info"
                              >
                                <i class="fa fa-print"></i> Print
                              </button>
                              <!-- <button class="btn btn-info"><i class="fa fa-file-pdf-o"></i> Export as PDF</button> -->
                            </div>
                          </div>

                          <div id="invoice" style="padding-top: 0px !important">
                            <div class="invoice overflow-auto">
                              <div style="min-width: 600px">
                                <header
                                  :style="
                                    'border-bottom-color:' + gets.themeColor
                                  "
                                  style="margin-bottom: 5px !important"
                                >
                                  <div class="row" v-if="gets.logo">
                                    <div class="col">
                                      <a target="_blank" href="#">
                                        <img
                                          :src="
                                            'images/invoice_logo/' + gets.logo
                                          "
                                          style="
                                            max-height: 105px;
                                            max-width: 100%;
                                          "
                                        />
                                      </a>
                                    </div>
                                    <div class="col company-details">
                                      <!-- <h2 class="name">
                            <a target="_blank" href="#">
                            
                            </a>
                        </h2> -->

                                      <div>{{ gets.address }}</div>
                                      <div>{{ gets.mobileNo }}</div>
                                      <div>{{ gets.email }}</div>
                                      <div>{{ gets.website }}</div>
                                    </div>
                                  </div>

                                  <div class="row" v-else>
                                    <div class="col text-center">
                                      <h3 class="text-uppercase">
                                        <b> {{ gets.companyName }} </b>
                                      </h3>
                                      <div>{{ gets.address }}</div>
                                      <div>{{ gets.mobileNo }}</div>
                                      <div>{{ gets.email }}</div>
                                      <div>{{ gets.website }}</div>
                                    </div>
                                  </div>
                                </header>
                                <main>
                                  <div class="row contacts">
                                    <div class="col invoice-to">
                                      <div class="text-gray-light">
                                        <u> <b> Supplier Informatioin :</b> </u>
                                      </div>
                                      <div class="address">
                                        {{ supplierInfo.productSupplierName }}
                                      </div>
                                      <div class="address">
                                        {{
                                          supplierInfo.productSupplierAddress
                                        }}
                                      </div>
                                      <div class="email">
                                        <a
                                          :href="
                                            'mailto:' +
                                            supplierInfo.productSupplierMail
                                          "
                                          :style="'color:' + gets.themeColor"
                                        >
                                          {{
                                            supplierInfo.productSupplierMail
                                          }}</a
                                        >
                                      </div>
                                    </div>
                                    <div class="col invoice-details">
                                      <h4
                                        class="text-center invoice-id"
                                        :style="'color:' + gets.themeColor"
                                      >
                                        <u> {{ gets.toText }} </u>
                                      </h4>
                                    </div>
                                    <div class="col invoice-details">
                                      <div class="date">
                                        {{ gets.toText }}:
                                        {{ invoiceInfo.purchaseInvoiceNo }}
                                      </div>
                                      <div class="date">
                                        Purchase Date:
                                        {{ invoiceInfo.purchaseDate }}
                                      </div>
                                    </div>
                                  </div>
                                  <table
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                    class="table table-bordered border-0"
                                  >
                                    <thead>
                                      <tr>
                                        <th>#</th>
                                        <th class="text-left">Product Name</th>
                                        <th class="text-left">Product Brand</th>
                                        <th class="text-left">Purchase Type</th>
                                        <th class="text-left">Size/Size</th>
                                        <th class="text-left">UNIT</th>
                                        <th class="text-right">Quantity</th>
                                        <th class="text-right">UNIT PRICE</th>
                                        <th class="text-right">TOTAL</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr
                                        v-for="(
                                          invoiceProductList, index
                                        ) in invoiceProductLists"
                                      >
                                        <td>{{ ++index }}</td>
                                        <td class="text-left">
                                          <span
                                            v-for="purchaseProductLists in purchaseProductList"
                                            v-if="
                                              purchaseProductLists.productNameId ==
                                              invoiceProductList.productId
                                            "
                                          >
                                            {{
                                              purchaseProductLists.productName
                                            }}
                                          </span>
                                        </td>
                                         <td>
                                          <span v-for="allProductBrandList in allProductBrandLists"
                                          v-if="allProductBrandList.productBrandEntryId==invoiceProductList.brandId">
                                              {{allProductBrandList.productBrandName}}
                                          </span>
                                            
                                        </td>
                                        
                                        <td>
                                          <span
                                            v-for="purchaseType in purchaseTypes"
                                            :key="purchaseType.id"
                                            v-if="
                                              purchaseType.id ==
                                              invoiceProductList.purchaseType
                                            "
                                          >
                                            {{ purchaseType.purchaseType }}
                                          </span>

                                          <span
                                            v-for="countryList in countryLists"
                                            :key="countryList.id"
                                            v-if="
                                              countryList.id ==
                                              invoiceProductList.countryId
                                            "
                                          >
                                            <br />
                                            ({{ countryList.name }})
                                          </span>
                                        </td>

                                        <td>
                                          <span
                                          v-for="colorList in colorLists"
                                          v-if="colorList.id==invoiceProductList.colorId">{{
                                            colorList.colorName
                                          }}</span>
                                          
                                          <span
                                          v-for="sizeList in sizeLists"
                                          v-if="sizeList.id==invoiceProductList.sizeId">/ {{
                                            sizeList.sizeName
                                          }}</span>
                                        </td>

                                        <td>
                                          <span
                                            v-for="unitList in unitLists"
                                            :key="unitList.uniteEntryId"
                                            v-if="
                                              unitList.uniteEntryId ==
                                              invoiceProductList.unitId
                                            "
                                          >
                                            {{ unitList.uniteEntryName }}
                                          </span>
                                        </td>
                                          
                                        <td class="">
                                          {{ invoiceProductList.quantity }}
                                        </td>
                                        <td class="">
                                          {{ invoiceProductList.unitPrice }}
                                        </td>

                                        <td class="">
                                          {{ invoiceProductList.totalPrice }}
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tr>
                                      <td
                                        colspan="7"
                                        class="text-right border-0"
                                      >
                                        <b> Grand Total </b>
                                      </td>
                                      <td class="border-0">
                                        <b>
                                          :
                                          {{
                                            invoiceInfo.totalPurchaseValue
                                          }}</b
                                        >
                                      </td>
                                    </tr>
                                  </table>

                                  <div class="row">
                                    <div class="col"></div>
                                    <div class="col"></div>
                                    <div class="col">
                                      <table class="table table-bordered">
                                        <tbody>
                                          <tr>
                                            <td class="text-right">Discount</td>
                                            <td class="bg-light">
                                              {{ invoiceInfo.discount }}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="text-right">
                                              Supplier Payable
                                            </td>
                                            <td class="bg-light">
                                              {{ invoiceInfo.supplierPayable }}
                                            </td>
                                          </tr>

                                          <tr>
                                            <td class="text-right">
                                              Total Product Cost
                                            </td>
                                            <td>
                                              {{ invoiceInfo.totalProductCost }}
                                            </td>
                                          </tr>
                                          <tr></tr>
                                          <tr>
                                            <td class="text-right">
                                              Current Payable
                                            </td>
                                            <td class="bg-light">
                                              {{ invoiceInfo.currentPayable }}
                                            </td>
                                          </tr>
                                          <!-- <tr>
                            <td colspan="2"></td>
                            <td colspan="2"  :style="'color:'+gets.themeColor">  {{ gets.grandTotal }}  </td>
                            <td  :style="'color:'+gets.themeColor">$6,500.00</td>
                        </tr> -->
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>

                                  <div class="row mt-5">
                                    <div class="col">
                                      <center>
                                        <span style="text-decoration: overline">
                                          &nbsp; &nbsp; &nbsp; Supplier Sign
                                          &nbsp; &nbsp; &nbsp;</span
                                        >
                                      </center>
                                    </div>
                                    <div class="col"></div>
                                    <div class="col">
                                      <center>
                                        <span style="text-decoration: overline">
                                          &nbsp; &nbsp; &nbsp; Authorize Sign
                                          &nbsp; &nbsp; &nbsp;
                                        </span>
                                      </center>
                                    </div>
                                  </div>
                                </main>
                              </div>
                              <!--DO NOT DELETE THIS div. IT is responsible for showing footer always at the bottom-->
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- <div class="card main-card  element-block-example">
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
                 <th>Quantity</th>
                 <th>Unit</th>
                 <th>Unit Price</th>
                 <th>Total Price</th>
                
               </tr>
            </thead>
            <tbody>
              <tr  v-for="getInfo in purchaseInvoiceReport.purchase_product" >
                <td>{{ index+1 }}</td>
                <td>{{ getInfo.created_at }}</td>
                <td v-if="getInfo.product_name">{{ getInfo.product_name.productName }}</td>
                <td v-if="getInfo.brand_name">{{ getInfo.brand_name.productBrandName }}</td>
                <td v-if="getInfo">{{ getInfo.quantity }}</td>
                <td v-if="getInfo.unit_name">{{ getInfo.unit_name.uniteEntryName }}</td>
                <td v-if="getInfo">{{ getInfo.unitPrice }}</td>
                <td v-if="getInfo">{{ getInfo.totalPrice }}</td>
             
              </tr>
            </tbody>
        </table>
       </div>
    </div> -->
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-hover-shine btn-danger"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
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
    </div>
  </span>
</template>

<script>
  export default {
      data(){
        return{
            allProductBrandLists:[],
            shopProductBrandLists:[],
            rePurchaseProductReports:{},
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
             purchaseInvoiceReports: {},
      gets: "",
      invoiceInfo: "",
      invoiceProductLists: [],
      purchaseProductList: [],
      productBrandLists: [],
      purchaseTypes: [],
      unitLists: [],
      countryLists: [],
      colorLists: {},
      sizeLists: {},
      supplierInfo: "",
        }
      },
      mounted(){
          this.productSupplierList();
          this.shopproductBrandEntry();
              this.getInvoiceSetupInformation();
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
      productBrandList() {
      axios.get("/productBrandList").then((res) => {
        this.allProductBrandLists = res.data.productBrandList;
      });
    },
          productSupplierList(){
            axios.get('/rePurchaseProductReportList').then(res =>{
                this.rePurchaseProductReports = res.data.rePurchaseProductReports

            })
          },
           getInvoiceSetupInformation() {
      let uri = `getInvoiceSetupInformation/2`;
      axios.get(uri).then((response) => {
        this.gets = response.data.data;
      });
    },

    viewInvoiceInfo(id) {
      let uri = 'getInvoiceInformation/'+id;
      axios.get(uri).then((response) => {
        this.unitLists = response.data.unitList;
        this.countryLists = response.data.countryList;
        this.purchaseTypes = response.data.purchaseType;
        this.productBrandLists = response.data.productBrandList;
        this.supplier_id = response.data.data.productSupplierId;
        this.invoiceInfo = response.data.data;
        this.invoiceProductLists = response.data.invoiceProductLists;
        this.supplierInfo = response.data.supplierInfo;
        this.purchaseProductList = response.data.purchaseProductList;
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
