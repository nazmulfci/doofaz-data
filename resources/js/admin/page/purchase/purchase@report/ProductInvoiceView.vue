 <template id="">
  <span>

 
    <div class="card">


     <div class="card-header-tab card-header alert-info">
<h4><i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          Purchase Invoice </h4>
          </div>




      <div class="card-body">
        

    <div class="toolbar hidden-print">
        <div class="text-right">
            <button id="printInvoice"  onclick="jQuery('#invoice').print()"  class="btn btn-info"><i class="fa fa-print"></i> Print</button>
            <!-- <button class="btn btn-info"><i class="fa fa-file-pdf-o"></i> Export as PDF</button> -->
        </div> 
    </div>
        
        
        
        
        <div id="invoice" style="padding-top:0px!important;">
    <div class="invoice overflow-auto">
        <div style="min-width: 600px">
            <header  :style="'border-bottom-color:'+gets.themeColor" style="margin-bottom:5px!important;">
                <div class="row" v-if="gets.logo">
                    <div class="col">
                        <a target="_blank" href="#">
                            <img :src="'images/invoice_logo/'+ gets.logo" style="max-height:105px;max-width:100%;"/>
                            </a>
                    </div>
                    <div class="col company-details">
                        <!-- <h2 class="name">
                            <a target="_blank" href="#">
                            
                            </a>
                        </h2> -->
                        
                        <div>  {{gets.address}} </div>
                          <div>{{gets.mobileNo}}</div>
                        <div> {{gets.email}} </div> 
                        <div> {{gets.website}} </div>
                    </div>
                </div>

                <div class="row" v-else>
                  <div class="col text-center">
                    <h3 class="text-uppercase"> <b> {{gets.companyName}} </b> </h3>
                    <div>  {{gets.address}} </div>
                          <div>{{gets.mobileNo}}</div>
                        <div> {{gets.email}} </div> 
                        <div> {{gets.website}} </div>
                  </div>
                </div>
            </header>
            <main>
                <div class="row contacts">
                    <div class="col invoice-to">
                        <div class="text-gray-light">  <u> <b> Supplier Informatioin :</b> </u> </div>
                        <div class="address"> {{ supplierInfo.productSupplierName }} </div>
                        <div class="address">{{ supplierInfo.productSupplierAddress }}</div>
                        <div class="email">
                          <a 
                          :href="'mailto:'+ supplierInfo.productSupplierMail " 
                         :style="'color:'+gets.themeColor">
                          {{ supplierInfo.productSupplierMail }}</a></div>
                    </div>
                    <div class="col invoice-details">
                        <h4 class="text-center invoice-id"  :style="'color:'+gets.themeColor"> <u> {{gets.toText}} </u> </h4>
                        
                    </div>
                    <div class="col invoice-details">
                        <div class="date"> {{gets.toText}}: {{ invoiceInfo.purchaseInvoiceNo }}</div>
                        <div class="date"> Purchase Date: {{ invoiceInfo.purchaseDate }}</div>
                    </div>
                </div>
                <table border="0" cellspacing="0" cellpadding="0" class="table table-bordered border-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th class="text-left">Product Name</th>
                            <th class="text-left">Product Brand</th>
                            <th class="text-left">Purchase Type</th>
                            <th class="text-left">UNIT</th>
                            <th class="text-left">Color/Size</th>
                            <th class="text-right">Quantity</th>
                            <th class="text-right">UNIT PRICE</th>
                            <th class="text-right">TOTAL PRICE</th>
                            <th class="text-right">DISCOUNT</th>
                            <th class="text-right">TOTAL</th>
                        </tr> 
                    </thead>
                    <tbody>
                        
                        <tr v-for="invoiceProductList,index in invoiceProductLists">
                            <td>{{++index}}</td>
                            <td class="text-left">

                              <span 
                              v-for="purchaseProductLists in purchaseProductList"
                              v-if="purchaseProductLists.productNameId==invoiceProductList.productId"
                              >
                              {{purchaseProductLists.productName}} </span>
                            </td>

                            <td> <span
                                    v-for="productBrandList in productBrandLists"
                                    :key="productBrandList.productBrandEntryId"
                                    v-if="productBrandList.productBrandEntryId==invoiceProductList.brandId"
                                    >{{ productBrandList.productBrandName }}</span>
                   
                   </td>
                   <td> 
                      <span 
                        v-for="purchaseType in purchaseTypes" 
                        :key="purchaseType.id"
                        v-if="purchaseType.id==invoiceProductList.purchaseType"
                        >
                            {{ purchaseType.purchaseType }}
                        </span>
                        
                    <span
                      v-for="countryList in countryLists"
                      :key="countryList.id"
                      v-if="countryList.id==invoiceProductList.countryId"
                      > <br> ({{ countryList.name }}) </span>
                   </td>


                   <td> 
                      <span 
                        v-for="unitList in unitLists" 
                        :key="unitList.uniteEntryId"
                        v-if="unitList.uniteEntryId==invoiceProductList.unitId"
                        >
                            {{ unitList.uniteEntryName }}
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

                            <td class=""> {{invoiceProductList.quantity}} </td>
                            <td class=""> {{invoiceProductList.unitPrice}} </td>
                            <td class="">{{invoiceProductList.totalPrice}}</td>
                            <td class="">
                              <span v-if="invoiceProductList.discount">
                              {{invoiceProductList.discount}}(%)
                              </span>
                              </td>
                              <td class="">{{invoiceProductList.totalWithDiscount}}</td>
                            
                        </tr>
                         
                    </tbody>
                    <tr>
                            <td colspan="10" class="text-right border-0"> <b> Grand Total  </b> </td>
                            <td class="border-0"> <b> : {{ invoiceInfo.totalPurchaseValue }}</b> </td>
                        </tr>
                </table>


                <div class="row">
                <div class="col"> </div>
                <div class="col"> </div>
                <div class="col"> 

                    <table class="table table-bordered">
                    <tbody>
                        
                       
                        <tr> 
                            <td class="text-right"> Discount </td>
                             <td class="bg-light"> {{ invoiceInfo.discount }} </td>
                        </tr>
                        <tr> 
                            <td class="text-right"> Supplier Payable </td>
                             <td class="bg-light"> {{ invoiceInfo.supplierPayable }} </td>
                        </tr>
                        
                        <tr> 
                            <td class="text-right"> Total Product Cost </td>
                             <td> {{ invoiceInfo.totalProductCost }} </td>
                        </tr> 
                        <tr>
                        <tr> 
                            <td class="text-right"> Current Payable </td>
                             <td class="bg-light"> {{ invoiceInfo.currentPayable }} </td>
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
                    
                    <div class="col"> <center> <span style="text-decoration:overline;">   &nbsp; &nbsp; &nbsp; Supplier Sign &nbsp;  &nbsp; &nbsp;</span> </center> </div>
                    <div class="col"></div>
                    <div class="col"> <center> <span style="text-decoration:overline;"> &nbsp; &nbsp; &nbsp; Authorize Sign &nbsp; &nbsp; &nbsp; </span> </center> </div>
                    
                </div>
               
            </main>
            
        </div>
        <!--DO NOT DELETE THIS div. IT is responsible for showing footer always at the bottom-->
        <div></div>
    </div>
</div>





    </div>
    </div>

  
  </span>
</template>

 <style>
    .table tr td{
       padding:5px; 
    }
 </style>



<script>


 



export default {
  data() {
    return {
      form: new Form({
        supplier_id: "",
        scanInformation: "",
      }),
      gets:'',
      invoiceInfo:'',
      invoiceProductLists:[],
      purchaseProductList:[],
      productBrandLists:[],
      purchaseTypes:[],
      unitLists:[],
      countryLists:[],
      colorLists: {},
      sizeLists: {},
      supplierInfo:'', 
      
    };
  },
 
  mounted(){

    this.getInvoiceSetupInformation();
    this.getInvoiceInformation();
    this.colorList();
    this.sizeList();
    this.getProductList();
 
     
  },

  methods: {

    getInvoiceSetupInformation() {
    let uri = `getInvoiceSetupInformation/2`;
    axios.get(uri).then((response) => {
      this.gets = response.data.data;
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

    getInvoiceInformation() {
    let uri = `getInvoiceInformation/${this.$route.params.id}`;
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

 


  },
};

 
</script>