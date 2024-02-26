<template id="">
  <span>

  



    <div class="card">
      <div class="card-header-tab card-header alert-info">
    <h4>
      <i class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"></i>
            Balance Sheet </h4>
      </div>





      <div class="supplier-entry py-4 px-2">
         <div class="card-body table-responsive bg-white">
          <div class="row">
            <div class="col-12">
              <table class="table table-bordered">
                 <tr>
                <th colspan="12" class="text-center"> 
                  <center>
                    <form method="" @submit.prevent="voucherSearch()">
                      <table class="">
                        <tr>
                          <td> 
                                <select 
                                @change="getHeadSubCode()"
                                v-model="form.mainHead" type="text" class="form-control" placeholder="Select" style="width:150px;">
                                    <option value=""> Select Head </option>
                                    <option v-for="mainHeadList in mainHeadLists" 
                                :value="mainHeadList.accountsHeadCode"> 
                                
                                  <span v-for="chartOfAccountList in chartOfAccountLists"
                            :key="chartOfAccountList.id"
                            v-if="mainHeadList.accountsHeadCode==chartOfAccountList.headCode">
                                {{chartOfAccountList.headName}}
                            </span>
                             
                             
                              </option> 
                                </select>
                            </td> 
                           <td> 
                                <select v-model="form.subHead" type="text" class="form-control" placeholder="Select" style="width:150px;">
                                    <option value=""> Select Sub Head </option> 
                                <option v-for="subHeadList in subHeadLists" 
                                :value="subHeadList.accountsCode"> 
                                
                                 <span v-for="chartOfAccountList1 in chartOfAccountRegisterLists"
                            :key="chartOfAccountList1.id"
                            v-if="subHeadList.accountsCode==chartOfAccountList1.headCode">
                                {{chartOfAccountList1.headName}}
                            </span>
                            
                             </option> 
                                </select>
                            </td>
                            <td> 
                                <input type="date" v-model="form.voucherDate" class="form-control" placeholder="Select Date" style="width:150px;">
                            </td>
                            <td> <input type="submit" class="btn btn-primary" value="Search"> </td>
                            <td> <input type="reset" class="btn btn-danger"
                            @click="view()"> 
                            </td>
                        </tr>
                      </table>
                  </form>
                  </center> 
                   </th>
              </tr>
              </table>
            </div>
            <div class="col-12">
              <h3 class="text-center mb-3"> <u>Balance Sheet</u> </h3>
              </div>
            <div class="col-6">


        <table style="width: 100%;" id="example" class="table table-hover table-bordered">
 


                            <!-- Table heading -->
                <thead>
                    <tr class="">
                        
                        <th colspan="2" class="text-center">  Asset </th> 
                    </tr> 
                    
                </thead>
                <!-- // Table heading END -->
            <tbody v-html="voucherInformationLists">
               
               <tr v-if="resultNotFound">
                <td colspan="16">
                  <center> Result Not Found. </center>
                </td>
              </tr>

            </tbody>
          </table>
          </div>
            <div class="col-6">
        <table style="width: 100%;" id="example" class="table table-hover table-bordered">
 


                            <!-- Table heading -->
                <thead>
                  <tr class="">
                        
                        <th colspan="2" class="text-center"> Equities & Liabilities </th> 
                    </tr>
                    
                </thead>
                <!-- // Table heading END -->
            <tbody v-html="voucherInformationListLiabilitys">
               
               <tr v-if="resultNotFound">
                <td colspan="16">
                  <center> Result Not Found. </center>
                </td>
              </tr>

            </tbody>
          </table>
          </div>
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
            mainHeadLists: [],
      subHeadLists: [],
      chartOfAccountLists: [],
      chartOfAccountRegisterLists: [],
      voucherTypeLists: [],
      voucherInformationLists: '',
      clickValue: '',
      voucherInformationListLiabilitys: '',
      totalOrDaily: '(Total Balance Sheet)',
      resultNotFound: false,
      moment: moment,
      

 
      form: new Form({
                        mainHead:'',
                        subHead:'',
                        voucherType:'',
                        voucherDate:'',
                        voucherNo:'',
      }),
       
    };
  },
  mounted(){
    this.view();
    this.chartOfAccountList();
    this.chartOfAccountRegisterList();
        this.getMainHeadCode();
    //this.getSubHeadCode();
  },
  methods: {
    view() {

this.form.mainHead='',
this.form.subHead='',
this.form.voucherType = '';
this.form.voucherDate = '';
this.form.voucherNo = '';


      let url = "voucherEntryInformation";
      axios.get(url)
        .then((response) => {
          this.voucherTypeLists = response.data.list;
        });

        this.getGeneralLadger();
        this.getGeneralLadgerLiability();
    },


         getMainHeadCode(){
 
      let url = "getMainHeadCode/3";
      axios.get(url)
        .then((response) => {
          this.mainHeadLists = response.data.mainHeadList;
        });


    },

    
getsubHeadCode() {
 
      let url = "getsubHeadCode";
      axios.get(url)
        .then((response) => {
          this.subHeadLists = response.data.subHeadList;
        });
    },


    
        getHeadSubCode() {

      let url = "getHeadSubCodeByHeadcode/"+this.form.mainHead;
      axios.get(url)
        .then((response) => {
          this.form.subHead = '';
          this.subHeadLists = response.data.list;
        });
    },

    getGeneralLadger() {

      let url = "getBalanceSheetAsset";
      axios.get(url)
        .then((response) => {
          this.voucherInformationLists = response.data.voucherInformationHeadNameForLadger;
        });

    },

    getGeneralLadgerLiability() {

      let url = "getBalanceSheetLiability";
      axios.get(url)
        .then((response) => {
          this.voucherInformationListLiabilitys = response.data.voucherInformationHeadNameForLadger;
        });

    },
    
        voucherSearch() {
      
                if(this.form.voucherDate){
            this.totalOrDaily = '('+moment(this.form.voucherDate).format("DD MMM YYYY")+' Balance Sheet) ';
          }else{ 
            this.totalOrDaily = '(Total Balance Sheet) ';
          }

      let url = 'incomeSummarySearch';
      this.form.post(url).then((response) => {

          if(response.data.voucherInformationHeadNameForLadger == ''){
            this.resultNotFound = true;
          }else{
              this.resultNotFound = false;
          }
          
          this.voucherInformationLists = response.data.voucherInformationHeadNameForLadger;
        
          
        });
    },
            chartOfAccountList() {
      
      let url = 'chartOfAccount';
      axios.get(url).then((response) => {
          this.chartOfAccountLists = response.data.chartOfAccounts;
        });
    },
      
      chartOfAccountRegisterList() {
      
      let url = 'chartOfAccountRegister';
      axios.get(url).then((response) => {
          this.chartOfAccountRegisterLists = response.data.chartOfAccounts;
        });
    },
    showSubHeadCode(dat){
      $('.clk2Show-'+dat).toggle();
    },
    showSubHeadCodeAsset(dat){
      $('.clk2ShowAsset-'+dat).toggle();
    },

   
 
  },
  created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
    });
   
  
      window.showSubHeadCodeAsset = this.showSubHeadCodeAsset;
      window.showSubHeadCode = this.showSubHeadCode;
     
  },
};
</script>