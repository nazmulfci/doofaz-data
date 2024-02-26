 <template id="">
  <span>

 
    <div class="card">


     <div class="card-header-tab card-header alert-info">
<h4><i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          Statement of {{companyInformation.companyName}} </h4>
          </div>




<div class="card-body">
        

    <div class="toolbar hidden-print">
        <div class="text-right">
            <button id="printInvoice"  onclick="jQuery('#invoice').print()"  class="btn btn-info"><i class="fa fa-print"></i> Print</button>
            <!-- <button class="btn btn-info"><i class="fa fa-file-pdf-o"></i> Export as PDF</button> -->
        </div>
        <hr>
    </div>
        
        
        
        
        <div id="invoice">
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
                        <div class="text-gray-light">  &nbsp; </div>
                        <h2 class="to"> {{ companyInformation.companyName }} </h2>
                        <div class="address"> {{ companyInformation.mobileNo }} </div>
                        <div class="address">{{ companyInformation.address }}</div>
                        <div class="email">
                          <a 
                          :href="'mailto:'+ companyInformation.email" 
                         :style="'color:'+gets.themeColor">
                          {{ companyInformation.email }}</a></div>
                    </div>
                    <div class="col invoice-details">
                        <!-- <h1 class="invoice-id"  :style="'color:'+gets.themeColor"> {{gets.titleText}} {{invoiceInfo.purchaseInvoiceNo}} </h1>
                        <div class="date"> Purchase Date: {{ invoiceInfo.purchaseDate }}</div> -->
                        <!-- <div class="date">Due Date: 30/10/2018</div> -->
                    </div>
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Invoice #</th>
                            <th class="text-left">Date</th>
                            <th class="text-left">Narration</th>
                            <th class="text-left">Debit</th>
                            <th class="text-left">Credit</th>
                            <th class="text-right">Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr v-for="statementList,index in companyStatementLists">
                            <td>{{++index}}</td>
                            <td> {{moment(statementList.created_at).format("DD MMMM YYYY")}}</td>
                            <td> {{statementList.title}} ({{statementList.note}}) </td>
                            <td class="text-right"> {{statementList.debitAmount}} </td>
                            <td class="text-right"> {{Math.abs(statementList.creditAmount)}} </td>
                            <td class="text-right"> 
                              <span v-if="statementList.balanceAmount>=0" class="badge badge-success">
                                {{statementList.balanceAmount}}
                              </span>
                              <span v-else-if="statementList.balanceAmount<0" class="badge badge-danger">
                                {{Math.abs(statementList.balanceAmount)}}
                              </span>
                               </td>
                        </tr>
                         
                    </tbody>
                    
                </table>
                
            </main>
            <footer >
                {{gets.generatedFrom }}  
                 
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

      moment: moment,


      form: new Form({
        supplier_id: "",
        scanInformation: "",
      }),
      gets:'',
      invoiceInfo:'',
      companyInformation:[],
      companyStatementLists:[],
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
    
     
  },

  methods: {

    getInvoiceSetupInformation() {
    let uri = `getInvoiceSetupInformation/3`;
    axios.get(uri).then((response) => {
      this.gets = response.data.data;
    });
  },

  getInvoiceInformation() {

    let uri = `getIncomeExpenseInvoiceInformation/${this.$route.params.id}`;
    axios.get(uri).then((response) => {
      this.companyInformation = response.data.data1;
      this.companyStatementLists = response.data.statementList;
    });
    
  },

 


  },
};

 
</script>