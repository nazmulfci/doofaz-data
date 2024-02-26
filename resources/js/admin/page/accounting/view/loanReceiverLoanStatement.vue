 <template id="">
  <span>

 
    <div class="card">


     <div class="card-header-tab card-header alert-info">
<h4><i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          Statement of <span v-if="providerInfo.providerType>1">
                                    {{ providerInfo.providerName }}
                                    ({{ providerInfo.providerBranchName }})
                                </span>
                                <span v-else="">
                                    {{ providerInfo.providerName }} 
                                </span> </h4>
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
                        <div class="text-gray-light">  &nbsp; </div>
                        <h2 class="to"> <span v-if="providerInfo.providerType>1">
                                    {{ providerInfo.providerName }}
                                    ({{ providerInfo.providerBranchName }})
                                </span>
                                <span v-else="">
                                    {{ providerInfo.providerName }} 
                                </span></h2>
                        <div class="address"> {{ providerInfo.providerContactPersonMobileNo }} </div>
                        <div class="address">{{ providerInfo.providerAddress }}</div>
                         
                    </div>
                    <div class="col invoice-details">
                        <div class="date"> Loan Amount: {{ loanInfo.loanMainAmount }}</div>
                        <div class="date"> Issue Date: {{moment(loanInfo.created_at).format('DD MMMM YYYY')}} </div>
                    </div>
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th class="text-left">Date</th>
                            <th class="text-left">Narration</th>
                            <th class="text-right">Debit</th>
                            <th class="text-right">Credit</th>
                            <th class="text-right">Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        
                        
                        <tr v-for="statementList1,index1 in companyStatementList1s">
                            <td>{{++index1}}</td>
                            <td> {{moment(statementList1.created_at).format("DD MMMM YYYY")}}</td>
                            <td> 
                              <span v-if="statementList1.debitAmount==0"> Loan Receive </span>
                              <span v-if="statementList1.creditAmount==0"> Loan Pay </span>
                               </td>
                            
                            <td class="text-right"> {{statementList1.debitAmount}} </td>
                            <td class="text-right"> {{statementList1.creditAmount}} </td>
                            <td class="text-right"> 

                               
                             <span v-if="statementList1.balanceAmount>=0" class="badge badge-success">
                                {{statementList1.balanceAmount}}
                              </span>
                              <span v-else-if="statementList1.balanceAmount<0" class="badge badge-danger">
                                {{Math.abs(statementList1.balanceAmount)}}
                              </span>
                               

                               </td>
                        </tr>
                        
                         <tr v-if="singleData.loanPayType==2">
                            <th>  </th>
                            <th>  </th>
                            <th class="text-right"> <b>Total :</b> </th>
                            <th class="text-right"> <b>{{totalInstallment}}</b> </th>
                            <th>  </th>
                            <th>  </th>
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
      providerLoanReceiveEntrys:[],
      loanInfo:[],
      loanInfo1:[],
      singleData:[], 
      providerInfo:[],
      companyInformation:[],
      companyStatementLists:[],
      companyStatementList1s:[],
      invoiceProductLists:[],
      purchaseProductList:[],
      productBrandLists:[],
      purchaseTypes:[],
      unitLists:[],
      countryLists:[],
      supplierInfo:'', 
      totalInstallment:'', 
      
    };
  },
 
  mounted(){

    this.getInvoiceSetupInformation();
    this.getInvoiceInformation();
    this.getProviderLoanReceiveEntry();
    
     
  },

  methods: {

    getInvoiceSetupInformation() {
    let uri = `getInvoiceSetupInformation/3`;
    axios.get(uri).then((response) => {
      this.gets = response.data.data;
    });
  },

    getInvoiceInformation() {
    let uri = `getLoanReceiverInfoLoanInfo/${this.$route.params.id}`;
    axios.get(uri).then((response) => {
      this.loanInfo = response.data.loanInfo;
      this.providerInfo = response.data.providerInfo;
    });
  },

    getProviderLoanReceiveEntry() {
    let uri = `getLoanReceiverLoanPayInfo/${this.$route.params.id}`;
    axios.get(uri).then((response) => {
      this.companyStatementLists = response.data.loanInfo;
      this.companyStatementList1s = response.data.loanInfo1;
      this.singleData = response.data.singleData;
      this.totalInstallment = response.data.totalInstallment;
    });
  },

 


  },
};

 
</script>