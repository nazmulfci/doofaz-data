<template id="">
  <span>

  



    <div class="card">
      <div class="card-header-tab card-header alert-info">
<h4><i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          View Information of {{incomeExpenseCompanyInformation.companyName}} </h4>
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
                                
                                 <span v-for="chartOfAccountList1 in chartOfAccountRegisterLists"
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


            <thead>
              <tr>
                <th>SL</th>
                <th>Date</th>
                <th>Voucher No </th>
                <th>Voucher Type </th>
                <th> Amount </th>
                <th> View </th> 
              </tr>
            </thead>
            <tbody>
              <tr
              v-for="voucherInformationList,index in voucherInformationLists" 
              :key="voucherInformationList.id">
                <td>{{ ++index }}</td>
                <td>{{moment(voucherInformationList.voucherDate).format("DD MMMM YYYY")}} </td>
                <td>{{ voucherInformationList.voucherNo }}</td>
                <td>
                  <span v-for="voucherTypeList in voucherTypeLists" v-if="voucherTypeList.id==voucherInformationList.voucherType">
                    {{ voucherTypeList.name }}
                  </span>
                  </td>
                <td>{{ voucherInformationList.voucherAmount }}</td>
                 
                <td>
                  <router-link
                    :to="`/viewVoucher${voucherInformationList.id}`"
                    class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"
                  ><i class="fa fa-eye"></i> View</router-link
                  >
                </td>
                
              </tr>
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
      chartOfAccountRegisterLists: [],
      voucherTypeLists: [],
      mainHeadLists: [],
      subHeadLists: [],
      voucherInformationLists: [],
      incomeExpenseCompanyInformation: [],
      companyNameText:'',
      resultNotFound: false,
      moment: moment,
      

 
      form: new Form({
                        mainHead:'',
                        subHead:'',
                        branchId:'',
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
    this.getSubHeadCode(); 
  },
  methods: {
    view() {

this.form.mainHead = '';
this.form.subHead = '';
this.form.voucherType = '';
this.form.voucherDate = '';
this.form.voucherNo = '';

    // alert(`${this.$route.params.id}`);
      let url = `getIncomeExpenseCompanyInformation/${this.$route.params.id}`;
      axios.get(url)
        .then((response) => {
          this.voucherInformationLists = response.data.voucherInformation;
          this.voucherTypeLists = response.data.list;
          this.incomeExpenseCompanyInformation = response.data.data;
          this.mainHeadLists = response.data.mainHeadList;
        });
    },
    
        voucherSearch() {
      
      let url = 'voucherSearch';
      this.form.post(url).then((response) => {

          if(response.data.data == ''){
            this.resultNotFound = true;
          }else{
              this.resultNotFound = false;
          }
          
          this.voucherInformationLists = response.data.data;
        
          
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