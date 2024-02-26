<template id="">
  <span>

  



    <div class="card">
      <div class="card-header-tab card-header alert-info">
<h4><i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          Receive Summary </h4>
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
                                <select v-model="form.cashBankType" type="text" class="form-control" placeholder="Select" style="width:150px;">
                                    <option value=""> Select Type </option> 
                                    <option value="1"> Cash </option> 
                                    <option value="2"> Bank </option> 
                                </select>
                            </td>
                            <td>
                              <input type="hidden" v-model="form.type" class="form-control" placeholder="" style="width:150px;"> 
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
              </thead>


            <thead>
              <tr>
                <th> SL </th>
                <th> Date </th>
                <th> Type  </th>
                <th> Receipt </th>
                <th> Cash  </th>
                <th> Bank  </th>
                <th> Total  </th>
                <th> Statement  </th>
              </tr>
            </thead>
            <tbody v-html="receiveSummarys">
               
            </tbody>


             <tr v-if="resultNotFound">
                <td colspan="8">
                  <center> Result Not Found. </center>
                </td>
              </tr>



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
      voucherTypeLists: [],
      receiveSummarys: [],
      chartOfAccountLists: [],
      chartOfAccountRegisterLists: [],
      resultNotFound: false,
      moment: moment,
      

 
      form: new Form({

                        mainHead:'',
                        subHead:'',
                        cashBankType: '',
                        type: 1,
                        branchId:'',
                        voucherType:'',
                        voucherDate:'',
                        voucherNo:'',
      }),
       
    };
    
  },  
  mounted(){
    this.view();
    this.getMainHeadCode();
    this.getSubHeadCode();
  },
  methods: {
    view() {


this.form.mainHead='',
this.form.subHead='',
this.form.cashBankType= '',
this.form.voucherType = '';
this.form.voucherDate = '';
this.form.voucherNo = '';
this.resultNotFound = false;

      let url = "receiveSummaryList/1"
      axios.get(url)
        .then((response) => {
          this.receiveSummarys = response.data.receiveSummary;
          this.voucherTypeLists = response.data.voucherTypeList;
          this.chartOfAccountLists = response.data.chartOfAccountList;
          this.chartOfAccountRegisterLists = response.data.chartOfAccountRegisterList;
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


    
        getHeadSubCode() {

      let url = "getHeadSubCodeByHeadcode/"+this.form.mainHead;
      axios.get(url)
        .then((response) => {
          this.form.subHead = '';
          this.subHeadLists = response.data.list;
        });
    },

        voucherSearch() {
      
      let url = 'receiveSummarySearch';
      this.form.post(url).then((response) => {

          if(response.data.receiveSummary == ''){
            this.resultNotFound = true;
          }else{
              this.resultNotFound = false;
          }
          
          this.receiveSummarys = response.data.receiveSummary;
        
          
        });
    },
 
  },
};
</script>