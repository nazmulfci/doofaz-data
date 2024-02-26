<template id="">
  <span>

  



    <div class="card">
      <div class="card-header-tab card-header alert-info">
    <h4>
      <i class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"></i>
         Cash Account </h4>
      </div>

      <div class="supplier-entry py-4 px-2">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-bordered">

             
                            <!-- Table heading -->
                <thead>
                    <tr>
                        
                        <th>  Head Name  </th>
                        <th> Debit </th> 
                        <th> Credit </th> 
                        <th> Balance </th> 
                        <th> Ladger </th> 
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

 


    
        getHeadSubCode() {

      let url = "getHeadSubCodeByHeadcode/"+this.form.mainHead;
      axios.get(url)
        .then((response) => {
          this.form.subHead = '';
          this.subHeadLists = response.data.list;
        });
    },

    getGeneralLadger() {

      let url = "getCashAccountBalance";
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
            chartOfAccountRegisterList() {
      
      let url = 'chartOfAccountRegister';
      axios.get(url).then((response) => {
          this.chartOfAccountRegisterLists = response.data.chartOfAccounts;
        });
    },
 
  },
};
</script>