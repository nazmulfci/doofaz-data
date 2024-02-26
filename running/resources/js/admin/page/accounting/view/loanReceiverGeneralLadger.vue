<template id="">
  <span>

  



    <div class="card">
      <div class="card-header-tab card-header alert-info">
    <h4>
      <i class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"></i>
          General Ladger of 
          
          <span v-if="IncomeExpenseCompanyList.providerType>1">
                                    {{ IncomeExpenseCompanyList.providerName }}
                                    ({{ IncomeExpenseCompanyList.providerBranchName }})
                                </span>
                                <span v-else="">
                                    {{ IncomeExpenseCompanyList.providerName }} 
                                </span>
                                
                                 </h4>
      </div>

      <div class="supplier-entry py-4 px-2">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">

            <thead>
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
                                :value="mainHeadList.headCode">
                                {{mainHeadList.headName}}
                                </option> 
                                </select>
                            </td>
                            <td> 
                                <select v-model="form.subHead" type="text" class="form-control" placeholder="Select" style="width:150px;">
                                    <option value=""> Select Sub Head </option> 
                                <option v-for="subHeadList in subHeadLists" 
                                :value="subHeadList.accountsCode"> 
                                
                                 <span v-for="chartOfAccountList1 in chartOfAccountLists"
                            :key="chartOfAccountList1.id"
                            v-if="subHeadList.accountsCode==chartOfAccountList1.headCode">
                                {{chartOfAccountList1.headName}}
                            </span>
                            
                             </option> 
                                </select>
                            </td>
                            <td> 
                                <select v-model="form.voucherType" type="text" class="form-control" placeholder="Select Voucher Type" style="width:180px;">
                                <option value=""> Select Voucher Type </option> 
                                <option v-for="voucherTypeList in voucherTypeLists" 
                                :value="voucherTypeList.id"> {{voucherTypeList.name}} </option> 
                                </select>
                            </td>
                            <td> 
                                <input type="date" v-model="form.voucherDate" class="form-control" placeholder="Select Date" style="width:150px;">
                            </td>
                            <td> 
                                <input type="text" v-model="form.voucherNo" class="form-control" placeholder="Voucher No" style="width:150px;">
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
              </thead>


                            <!-- Table heading -->
                <thead>
                    <tr>
                        
                        <th> Date </th>
                        <th> Voucher No </th>
                        <th> Particular </th>
                        <th  colspan="2" class="text-center">  </th> 
                        <th colspan="2"> <center> Balance </center> </th>
                    </tr> 
                    <tr>
                        <th>   </th>
                        <th>   </th>
                        <th>   </th>
                        <th class=""> DR  </th>
                        <th class="alert-success-custom"> CR </th>
                        <th class="text-center"> DR </th>
                        <th class="text-center alert-success-custom"> CR </th>
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
      chartOfAccountLists: [],
      mainHeadLists: [],
      subHeadLists: [],
      voucherTypeLists: [],
      IncomeExpenseCompanyList: [],
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
    this.getGeneralLadger();
    this.getMainHeadCode();
    this.getSubHeadCode();
  },
  methods: {

    view() {

this.form.mainHead = '';
this.form.subHead = '';
this.form.voucherType = '';
this.form.voucherDate = '';
this.form.voucherNo = '';

 

    },




getsubHeadCode() {
 
      let url = "getsubHeadCode";
      axios.get(url)
        .then((response) => {
          this.subHeadLists = response.data.subHeadList;
        });


    },


    getGeneralLadger() {

      let url = `/getLoanReceiverGeneralLadger/${this.$route.params.id}`;
      axios.get(url)
        .then((response) => {
          this.IncomeExpenseCompanyList = response.data.companyInformation;
          this.voucherTypeLists = response.data.voucherList;
          this.mainHeadLists = response.data.mainHeadList;
          this.voucherInformationLists = response.data.voucherInformationHeadNameForLadger;
        });
    },

    
    voucherSearch() {
      
      let url = 'getGeneralLadgerSearch';
      this.form.post(url).then((response) => {

          if(response.data.data == ''){
            this.resultNotFound = true;
          }else{
              this.resultNotFound = false;
          }

          this.form.subHead = '';
          this.voucherInformationLists = response.data.voucherInformationHeadNameForLadger;
        
          
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
    
    chartOfAccountList() {
      
      let url = 'chartOfAccount';
      axios.get(url).then((response) => {
          this.chartOfAccountLists = response.data.chartOfAccounts;
        });
    },
 
  },
};
</script>