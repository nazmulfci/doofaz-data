 <template id="">
  <span>

 
    <div class="card">


     <div class="card-header-tab card-header alert-info">
<h4><i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          Income Invoice </h4>
          </div>




      <div class="card-body">
        

    <div class="toolbar hidden-print">
        <div class="text-right">
            <button id="printInvoice"  onclick="jQuery('#invoice').print()"  class="btn btn-info"><i class="fa fa-print"></i> Print</button>
            <!-- <button class="btn btn-info"><i class="fa fa-file-pdf-o"></i> Export as PDF</button> -->
        </div>
    </div>
        
        
        
        
        <div id="invoice">
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
                        
                        <h2 class="to"> {{ supplierInfo.companyName }} </h2>
                        <div class="address">{{ supplierInfo.address }}</div>
                        <div class="email">
                          <a 
                          :href="'mailto:'+ supplierInfo.email " 
                         :style="'color:'+gets.themeColor">
                          {{ supplierInfo.email }}</a>
                          </div>
                        <div class="address"> {{ supplierInfo.mobileNo }} </div>
                    </div>
                    <div class="col invoice-details">
                        <h3 class="invoice-id"  :style="'color:'+gets.themeColor"> Invoice#{{invoiceInfo.id}} </h3>
                        <div class="date"> Invoice Date: {{moment(invoiceInfo.created_at).format("DD MMMM YYYY")}}</div>
                        <div class="date"> Income Title: {{ invoiceInfo.incomeTitle }}</div>
                    </div>
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th class="text-left">  Item Name {{invoiceDetailsHave}} </th>
                            <th class="text-right"> Item Amount </th> 
                        </tr>
                    </thead>
                    <tbody v-if="invoiceDetailsHave==1">
                        
                        <tr v-for="invoiceProductList,index in invoiceProductLists">
                            <td>{{++index}}</td>
                           


                             <td class=""> {{invoiceProductList.item}} </td>
                             <td class="text-right"> {{invoiceProductList.itemAmount}} </td>
                            
                        </tr>
                         
                    </tbody>


                    <tbody v-else>
                        <tr>
                            <td> 1 </td>
                            <td> {{ invoiceInfo.incomeTitle }} </td>
                            <td class="text-right"> {{ invoiceInfo.incomeAmount }} </td>

                        </tr>
                    </tbody>



                    <tfoot>
                        <tr> 
                            <td></td>
                            <td class="border-left-0">  Grand Total </td>
                            <td > {{ invoiceInfo.incomeAmount }} </td>
                        </tr>
                        
                        
                        <tr> 
                            <td colspan="2"> 
                                Paid
                                <span v-if="invoiceInfo.paymentType==1"> (Cash) </span>
                                <span v-else-if="invoiceInfo.paymentType==2"> (Bank) </span>
                                 </td>
                             <td> 
                                 <span v-if="invoiceInfo.paymentType==1"> {{invoiceInfo.cashAmount}} </span>
                                 <span v-else-if="invoiceInfo.paymentType==2"> {{invoiceInfo.bankAmount}} </span>
                                 <span v-else> 0 </span>
                            </td>
                        </tr> 
                        <tr>
                            <td colspan="2">  Due </td>
                            <td class="bg-light"> {{ invoiceInfo.dueAmount }} </td>
                        </tr>
                        <!-- <tr>
                            <td colspan="2"></td>
                            <td colspan="2"  :style="'color:'+gets.themeColor">  {{ gets.grandTotal }}  </td>
                            <td  :style="'color:'+gets.themeColor">$6,500.00</td>
                        </tr> -->
                    </tfoot>
                </table>
                <div class="thanks">  {{ gets.thankyou }}  </div>
                <div class="notices" :style="'border-color:'+gets.themeColor">
                    <div> {{ gets.noticeTitle }} </div>
                    <div class="notice"> {{ gets.noticeDetails }} </div>
                </div>
            </main>
            <footer style="border:none!important;">
               

                 <div class="row mt-5 pt-5">
                    
                    <div class="col"> <center> <span style="text-decoration:overline;">   &nbsp; &nbsp; &nbsp; Sign &nbsp;  &nbsp; &nbsp;</span> </center> </div>
                    <div class="col"></div>
                    <div class="col"> <center> <span style="text-decoration:overline;"> &nbsp; &nbsp; &nbsp; Authorize Sign &nbsp; &nbsp; &nbsp; </span> </center> </div>
                    
                </div>
            </footer>
        </div>
        <!--DO NOT DELETE THIS div. IT is responsible for showing footer always at the bottom-->
        <div></div>
    </div>
</div>





    </div>
    </div>

  
  </span>
</template>

 

<script>


 


import moment from 'moment';
export default {
  data() {
    return {
      form: new Form({
      
        supplier_id: "",
        scanInformation: "",
      }),
    
      moment: moment,
      gets:'',
      invoiceInfo:'',
      invoiceProductLists:[],
      purchaseProductList:[],
      productBrandLists:[],
      purchaseTypes:[],
      unitLists:[],
      countryLists:[],
      supplierInfo:'', 
      
    };
  },
 
  mounted(){

    this.getInvoiceSetupInformation();
    this.getInvoiceInformation();
    this.getSupplyerInformation();
    this.getProductList();
 
     
  },

  methods: {

    getInvoiceSetupInformation() {
    let uri = `getInvoiceSetupInformation/3`;
    axios.get(uri).then((response) => {
      this.gets = response.data.data;
    });
  },

    getInvoiceInformation() {
    let uri = `getIncomeInvoiceInformation/${this.$route.params.id}`;
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

      this.invoiceDetailsHave = response.invoiceDetailsHave;
    });
  },

 


  },
};

 
</script>