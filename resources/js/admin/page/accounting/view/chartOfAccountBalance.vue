<template id="">
  <span>

  



    <div class="card">
      <div class="card-header-tab card-header alert-info">
    <h4>
      <i class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"></i>
         Balance Information </h4>
      </div>

      <div class="supplier-entry py-4 px-2">
         <div class="card-body table-responsive bg-white">
        <table class="table table-hover table-bordered">


                            <!-- Table heading -->
                <thead>
                    <tr>
                        <th> Head Name  </th>
                        <th> Debit </th> 
                        <th> Credit </th> 
                        <th> Balance </th> 
                    </tr> 
                    
                </thead>
                <!-- // Table heading END -->
            <tbody v-html="voucherInformationLists">
              <!-- <tr
              v-for="voucherInformationList in voucherInformationLists" 
              :key="voucherInformationList.accountsCode">
                <td colspan="7">
                        <center> <b> 
                            <span v-for="chartOfAccountList in chartOfAccountLists"
                            :key="chartOfAccountList.id"
                            v-if="voucherInformationList.accountsCode==chartOfAccountList.headCode">
                                {{chartOfAccountList.headName}}
                            </span>
                            ({{voucherInformationList.accountsCode}})
                             </b> </center>
                </td>
              </tr> -->
              <!-- <tr> -->
                <!-- <td>{{moment(voucherInformationList.voucherDate).format("DD MMMM YYYY")}} </td> -->
                <!-- <td> </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td> -->
                  
              <!-- </tr> -->
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
      voucherTypeLists: [],
      voucherInformationLists: '',
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
        this.getMainHeadCode();
    this.getSubHeadCode();
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

      let url = "getChartOfAccountBalance";
      axios.get(url)
        .then((response) => {
          this.voucherInformationLists = response.data.voucherInformationHeadNameForLadger;
        });
    },
    
        voucherSearch() {
      
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
 
  },
};
</script>