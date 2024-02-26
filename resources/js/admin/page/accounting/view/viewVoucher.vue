 <template id="">
  <span>

 
    <div class="card">


     <div class="card-header-tab card-header alert-info">
          <h4>
            <i class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
            ></i>
            Voucher Information
          </h4>
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
                  <div class="col-12">
                    <center> 
                        <h4>
                           <u>
                              <span v-for="voucherTypeList in voucherTypeLists" v-if="voucherTypeList.id==voucherInformation.voucherType">
                                {{ voucherTypeList.name }}
                              </span>
                           </u> 
                        </h4> 
                    </center>
                  </div>

                    <div class="col invoice-to"> 
                        <div class="to"> Voucher No :{{ voucherInformation.voucherNo }} </div>
                        <div class="address" v-if="voucherInformation.paymentTo!=' '">Payment to :  {{ voucherInformation.paymentTo }}</div>
                        <div class="address" v-if="voucherInformation.mobileNo!=' '">Mobile No :  {{ voucherInformation.mobileNo }}</div>
                        
                    </div>
                    <div class="col invoice-details">
                        
                         <div class="date"> Voucher Date: <br> 
                         {{moment(voucherInformation.voucherDate).format("DD MMMM YYYY")}}

                         
                         </div>
                        <!-- <div class="date">Due Date: 30/10/2018</div> -->
                    </div>
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <!-- <th>A/C Code </th> -->
                            <th class="text-left">Particulars </th>
                            <!-- <th v-if="voucherInformation.voucherType<5" class="text-right">Taka </th>
                            <th v-if="voucherInformation.voucherType<5" class="text-right">Ps. </th>  -->
                            <th class="text-right">Debit </th>
                            <th class="text-right">Credit </th> 
                        </tr> 
                    </thead>



                    <tbody v-if="voucherInformation.voucherType==1">
                        <tr>
                            <!-- <td class="text-left">{{voucherInformation.accountCodeDebit}}</td> -->
                            <td class="text-left">{{headName0}}</td>
                            <td class="text-right">{{voucherInformation.voucherAmount}} </td>
                            <td class="text-right"> .00 </td>
                        </tr>
                        <tr>
                            <!-- <td class="text-left">{{voucherInformation.accountCodeCredit}}</td> -->
                            <td class="text-left">{{headName}}</td>
                            <td class="text-right"  v-if="voucherInformation.voucherType<5">.00 </td>
                            <td class="text-right"  v-if="voucherInformation.voucherType<5">{{voucherInformation.voucherAmount}} </td>
                       </tr>
                       </tbody>


                    <tbody v-if="voucherInformation.voucherType==2">
                        <tr>
                            <!-- <td class="text-left">{{voucherInformation.accountCodeDebit}}</td> -->
                            <td class="text-left">{{headName0}}</td>
                            <td class="text-right">{{voucherInformation.voucherAmount}} </td>
                            <td class="text-right"> .00 </td>
                        </tr>
                        <tr>
                            <!-- <td class="text-left">{{voucherInformation.accountCodeCredit}}</td> -->
                            <td class="text-left">{{headName}}</td>
                            <td class="text-right"  v-if="voucherInformation.voucherType<5">.00 </td>
                            <td class="text-right"  v-if="voucherInformation.voucherType<5">{{voucherInformation.voucherAmount}} </td>
                       </tr>
                       </tbody>


                    <tbody v-if="voucherInformation.voucherType==3">
                        <tr>
                            <!-- <td class="text-left">{{voucherInformation.accountCodeDebit}}</td> -->
                            <td class="text-left">{{headName0}}</td>
                            <td class="text-right">{{voucherInformation.voucherAmount}} </td>
                            <td class="text-right"> .00 </td>
                        </tr>
                        <tr>
                            <!-- <td class="text-left">{{voucherInformation.accountCodeCredit}}</td> -->
                            <td class="text-left">{{headName}}</td>
                            <td class="text-right"  v-if="voucherInformation.voucherType<5">.00 </td>
                            <td class="text-right"  v-if="voucherInformation.voucherType<5">{{voucherInformation.voucherAmount}} </td>
                       </tr>
                       </tbody>


                    <tbody v-if="voucherInformation.voucherType==4">
                        <tr>
                            <!-- <td class="text-left">{{voucherInformation.accountCodeDebit}}</td> -->
                            <td class="text-left">{{headName0}}</td>
                            <td class="text-right">{{voucherInformation.voucherAmount}} </td>
                            <td class="text-right"> .00 </td>
                        </tr>
                        <tr>
                            <!-- <td class="text-left">{{voucherInformation.accountCodeCredit}}</td> -->
                            <td class="text-left">{{headName}}</td>
                            <td class="text-right"  v-if="voucherInformation.voucherType<5">.00 </td>
                            <td class="text-right"  v-if="voucherInformation.voucherType<5">{{voucherInformation.voucherAmount}} </td>
                       </tr>
                       </tbody>


                    <tbody v-if="voucherInformation.voucherType==5">
                        <tr>
                            <!-- <td class="text-left">{{voucherInformation.accountCodeDebit}}</td> -->
                            <td class="text-left">{{headName0}}</td>
                            <td class="text-right">{{voucherInformation.voucherAmount}} </td>
                            <td class="text-right"> .00 </td>
                        </tr>
                        <tr>
                            <!-- <td class="text-left">{{voucherInformation.accountCodeCredit}}</td> -->
                            <td class="text-left">{{headName}}</td>
                            <td class="text-right">.00 </td>
                            <td class="text-right">{{voucherInformation.voucherAmount}} </td>
                       </tr>
                       </tbody>


                    <tbody v-if="voucherInformation.voucherType==6" >

                        <tr v-for="journalVoucherList in journalVoucherLists">
                          
                            <!-- <td class="text-left" v-if="journalVoucherList.type==1">{{journalVoucherList.accountsCode}}</td> -->
                            <td class="text-left" v-if="journalVoucherList.type==1">
                              <span v-for="chartOfAccountRegisterList in chartOfAccountRegisterLists"
                               v-if="journalVoucherList.accountsCode==chartOfAccountRegisterList.headCode">
                              {{chartOfAccountRegisterList.headName}} </span>
                              </td>
                            <td class="text-right" v-if="journalVoucherList.type==1">{{journalVoucherList.voucherAmount}} </td>
                            <td class="text-right" v-if="journalVoucherList.type==1"> .00 </td>

                            <!-- <td class="text-left" v-if="journalVoucherList.type==2">{{journalVoucherList.accountsCode}}</td> -->
                            <td class="text-left" v-if="journalVoucherList.type==2">
                                <span v-for="chartOfAccountRegisterList in chartOfAccountRegisterLists"
                               v-if="journalVoucherList.accountsCode==chartOfAccountRegisterList.headCode">
                              {{chartOfAccountRegisterList.headName}} </span> 
                            </td>
                            <td class="text-right" v-if="journalVoucherList.type==2"> .00 </td>
                            <td class="text-right" v-if="journalVoucherList.type==2">{{journalVoucherList.voucherAmount}} </td>
                           

                        </tr>

                       </tbody>

                    <tbody v-if="voucherInformation.voucherType==7">
                      
                        <tr v-if="voucherInformation.accountCodeDebit">
                            <!-- <td class="text-left">{{voucherInformation.accountCodeDebit}}</td> -->
                            <td class="text-left">{{headName0}}</td>
                            <td class="text-right">{{voucherInformation.voucherAmount}} </td>
                            <td class="text-right"> .00 </td>
                        </tr>
                      
                        <tr v-if="voucherInformation.accountCodeCredit">
                            <!-- <td class="text-left">{{voucherInformation.accountCodeCredit}}</td> -->
                            <td class="text-left">{{headName}}</td>
                            <td class="text-right"> .00 </td>
                            <td class="text-right">{{voucherInformation.voucherAmount}}  </td>
                        </tr>
                       
                       </tbody>



                        <tbody>
                        <tr>
                            <td class="text-left"> </td>
                            <td colspan="2" class="text-right" style="height:100px;"> {{voucherInformation.particular}} </td>
                             
                        </tr>
                         

                         <tr> 
                            <td colspan="2" class="text-right"> Grand Total </td>
                            <td class="text-right"> {{ voucherInformation.voucherAmount }} </td>
                        </tr>
                         <!-- <tr> 
                            <td colspan="4" class="text-left"> 
                              <b>In Words :</b> One Thousand Taka Only. 
                               </td>
                        </tr> -->
                        </tbody>
                     
                </table>



                 <div class="row mt-5 pt-5">
                    
                    <div class="col"> <center> <span style="text-decoration:overline;">   &nbsp; &nbsp; &nbsp; Sign &nbsp;  &nbsp; &nbsp;</span> </center> </div>
                    <div class="col"></div>
                    <div class="col"> <center> <span style="text-decoration:overline;"> &nbsp; &nbsp; &nbsp; Authorize Sign &nbsp; &nbsp; &nbsp; </span> </center> </div>
                    
                </div>
                 
            </main>
            
        </div>
        <!-- DO NOT DELETE THIS div. IT is responsible for showing footer always at the bottom -->
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
      voucherTypeLists: [],
      headName: '',
      moment: moment,
      form: new Form({
        supplier_id: "",
        scanInformation: "",
      }),
      gets:'',
      invoiceInfo:'',
      voucherInformation:'',
      invoiceProductLists:[],
      purchaseProductList:[],
      chartOfAccountRegisterLists:[],
      supplierInfo:'', 
      
    };
  },
 
  mounted(){
    this.getInvoiceSetupInformation();
    this.getVoucherInformation();
    this.chartOfAccountRegisterList();
     
  },

  methods: {

    getInvoiceSetupInformation() {
    let uri = `getInvoiceSetupInformation/3`;
    axios.get(uri).then((response) => {
      this.gets = response.data.data;
    }); 
  },

    getVoucherInformation() { 
    let uri = `getVoucherEntryInformationById/${this.$route.params.id}`;
    axios.get(uri).then((response) => {
     
      this.voucherInformation = response.data.voucherInformation;
      this.journalVoucherLists = response.data.journalVoucherLists;
      this.headName = response.data.headName;
      this.headName0 = response.data.headName0;

    });


      let url = "voucherEntryInformation";
      axios.get(url)
        .then((response) => {
          this.voucherTypeLists = response.data.list;
        });
  },
            chartOfAccountRegisterList() {
      
      let url = 'chartOfAccountRegister';
      axios.get(url).then((response) => {
          this.chartOfAccountRegisterLists = response.data.chartOfAccounts;
        });
    },
 


  },
};

 
</script>