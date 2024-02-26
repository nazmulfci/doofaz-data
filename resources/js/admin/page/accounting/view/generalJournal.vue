<template id="">
  <span>

  



    <div class="card">
      <div class="card-header-tab card-header alert-info">
<h4><i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          General Journal </h4>
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
                                :value="mainHeadList.accountsHeadCode"> 
                                
                                  <span v-for="chartOfAccountList in chartOfAccountMainLists"
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


            <thead>
              <tr>
                <th>SL</th>
                <th>Date</th>
                <th>Voucher No </th>
                <th style="width:300px;">Particulars </th>
                <th style="width:100px;"> Debit </th>
                <th style="width:50px;"> Ps. </th> 
                <th style="width:100px;"> Credit </th> 
                <th style="width:50px;"> Ps. </th> 
              </tr>
            </thead>
            <tbody>
              <tr
              v-for="voucherInformationList,index in voucherInformationLists" 
              :key="voucherInformationList.id">
                <td>{{ ++index }}</td>
                <td>{{moment(voucherInformationList.voucherDate).format("DD MMMM YYYY")}} </td>
                <td>{{ voucherInformationList.voucherNo }}</td>
                <td colspan="5" class="p-0">
                    <table class="table m-0">
                        <tr v-if="voucherInformationList.type==1">
                            <td style="width:300px;">
                            <span v-for="chartOfAccountList in chartOfAccountLists"
                                v-if="chartOfAccountList.headCode==voucherInformationList.accountsCode">
                             {{chartOfAccountList.headName }}
                             </span>
                             </td>
                            <td style="width:100px;"> {{ voucherInformationList.voucherAmount }} </td>
                            <td style="width:50px;"> .00 </td>
                            <td style="width:100px;"> -  </td>
                            <td style="width:50px;"> .00 </td>
                        </tr>
                        <tr v-if="voucherInformationList.type==2">
                            <td> <span v-for="chartOfAccountList in chartOfAccountLists"
                                v-if="chartOfAccountList.headCode==voucherInformationList.accountsCode">
                             {{chartOfAccountList.headName }}
                             </span>
                              </td>
                            <td style="width:100px;"> - </td>
                            <td style="width:50px;"> .00 </td>
                            <td style="width:100px;"> {{ voucherInformationList.voucherAmount }} </td>
                            <td style="width:50px;"> .00 </td>
                        </tr>
                    </table>
                  
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
      chartOfAccountMainLists: [],
      chartOfAccountLists: [],
      mainHeadLists: [],
      subHeadLists: [],
      voucherTypeLists: [],
      voucherInformationLists: [],
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
    this.chartOfAccountMainList();
    this.getMainHeadCode();
  },
  methods: {
    view() {

this.form.mainHead = '';
this.form.subHead = '';
this.form.voucherType = '';
this.form.voucherDate = '';
this.form.voucherNo = '';


      let url = "getGeneralJournal";
      axios.get(url)
        .then((response) => {
          if(response.data.voucherInformation){
            this.resultNotFound = false;
            this.voucherInformationLists = response.data.voucherInformation;
            this.voucherTypeLists = response.data.list;
          }else{
            this.resultNotFound = false;
          }
          
        });
    },
    
    getMainHeadCode(){
 
      let url = "getMainHeadCode/0";
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

getsubHeadCode() {
 
      let url = "getsubHeadCode";
      axios.get(url)
        .then((response) => {
          this.subHeadLists = response.data.subHeadList;
        });


    },

        voucherSearch() {
      
      let url = 'getGeneralJournalSearch';
      this.form.post(url).then((response) => {

          if(response.data.voucherInformation == ''){
            this.resultNotFound = true;
          }else{
              this.resultNotFound = false;
          }
          
          this.voucherInformationLists = response.data.voucherInformation;
        
          
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


            chartOfAccountMainList() {
      
      let url = 'chartOfAccount';
      axios.get(url).then((response) => {
          this.chartOfAccountMainLists = response.data.chartOfAccounts;
        });
    },

            chartOfAccountList() {
      
      let url = 'chartOfAccountRegister';
      axios.get(url).then((response) => {
          this.chartOfAccountLists = response.data.chartOfAccounts;
        });
    },
 
  },
};
</script>