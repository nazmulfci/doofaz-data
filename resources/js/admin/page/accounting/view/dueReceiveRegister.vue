.<template>
   <span>
    

   <div class="card main-card  element-block-example mt-5">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black"> Due Register </h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">


            <thead>
            <tr>
                <th colspan="12" class="text-center"> 
                  <center>
                    <form method="" @submit.prevent="search()">
                      <table class="">
                        <tr>
                           <td>
                               <select
                                    v-model="form.voucherType"
                                    class="form-control"
                                    :class="{ 'is-invalid': form.errors.has('voucherType') }"
                                    @change="getVoucherCode()"
                                >
                                <!-- @change="getCompanyByTypes()" -->
                                    <option value=""> Select  </option>
                                    <option value="1"> Payment Register </option>
                                    <option value="2"> Receive Register </option>
                                </select>
                                <has-error :form="form" field="voucherType"></has-error>
                           </td>
                            <td>
                                <select
                                    v-model="form.headOfAccounts"
                                    class="form-control"
                                    required=""
                                    :class="{ 'is-invalid': form.errors.has('headOfAccounts') }"
                                    @change="getSubHeadOfAccounts()">
                                    <option value=""> ---------------- </option>
                                    <option v-for="headOfAccountList in headOfAccountLists" 
                                    :value="headOfAccountList.headCode"> {{headOfAccountList.headName}} </option> 
                                </select>
                                <has-error :form="form" field="headOfAccounts"></has-error>
                            </td>
                            <td>
                                <select
                                    v-model="form.subHead"
                                    class="form-control"
                                    :class="{ 'is-invalid': form.errors.has('subHead') }"
                                    @change="getLastBalance()"
                                    >
                                    <option v-for="subHeadOfAccountList in subHeadOfAccountLists" 
                                    :value="subHeadOfAccountList.headCode"> {{subHeadOfAccountList.headName}} </option> 
                                </select>
                                <has-error :form="form" field="subHead"></has-error>
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
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th> SN</th>
               <th> Head  </th>
               <th> Name </th>
               <th> Due Balance </th>
               <!-- <th> Action </th> -->
             </tr>
            </thead>
            <tbody v-html="datas">
               
            </tbody>
            <tr v-if="resultNotFound">
                <td colspan="4">
                  <center> Result Not Found. </center>
                </td>
            </tr>
         </table>
       </div>
     </div>


  </span>
</template>

<script>
    export default {
        data(){
            return{
                    
                    balance:'',
                    companyNameText:'',
                    datas:[],
                    resultNotFound: false,
                    headOfAccountLists:[],
                    subHeadOfAccountLists:[],

                form: new Form({
                    type: '',
                    companyName: '',
                    mobileNo: '',
                    email: '',
                    address: '',
                    voucherType: '',
                    headOfAccounts: '',
                    subHead: '',
                }),
                
            }

        },
        mounted() {

            this.getData();
            this.chartOfAccount();

        },
        methods: {
            create() {
                this.form.post('/addIncomeExpenseCompany').then(res => {
                   
                        Toast.fire({
                            icon: 'success',
                            title: 'Add Successfull'
                        })

                        this.form.reset()
                        this.getData();
                  
                });
            },
               getVoucherCode(){

   this.form.headOfCashBook='';
   this.form.headOfAccounts='';
   this.subHeadStatus=false;
   this.form.subHead='';
   this.headOfCashBookLists=[];
   this.headOfAccountLists=[];


let url = "getVoucherCode/"+this.form.voucherType;
      axios.get(url)
        .then((response) => {
          this.form.voucherNo = response.data.code;
        });


        


        if(this.form.voucherType == 1){
              this.paymentTo = 'Pay by';
              this.headOfCashBookTitle = 'Head Of Cash Book';
              this.paymentToStatus = true;
              this.bankInfo = false;


              // get voucher head code
                      let url = "getVoucherHeadCashbookCode/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.headOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code

        }

        else if(this.form.voucherType == 2){
              this.paymentTo = 'Receive by';
              this.headOfCashBookTitle = 'Head Of Cash Book'
              this.paymentToStatus = true;
              this.bankInfo = false;


              // get voucher head code
                      let url = "getVoucherHeadCashbookCode/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.headOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code

        }

        else if(this.form.voucherType == 3){
              this.paymentTo = 'Pay by';
              this.headOfCashBookTitle = 'Head Of Bank Book'
              this.paymentToStatus = true;
              this.bankInfo = true;

              // get voucher head code
                      let url = "getVoucherHeadCashbookCode/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.headOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code
        }

        else if(this.form.voucherType == 4){
              this.paymentTo = 'Receive by';
              this.headOfCashBookTitle = 'Head Of Bank Book'
              this.paymentToStatus = true;
              this.bankInfo = true;

              // get voucher head code
                      let url = "getVoucherHeadCashbookCode/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.headOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code
        }

        else if(this.form.voucherType == 5){
              this.paymentTo = 'Receive by';
              this.paymentToStatus = false;
              this.bankInfo = false;

              // get voucher head code
                      let url = "getVoucherHeadCashbookCode/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.headOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code
        }

        else if(this.form.voucherType == 6){
              this.paymentTo = 'Receive by';
              this.paymentToStatus = false;
              this.bankInfo = false;

              // get voucher head code
                      let url = "getVoucherHeadCashbookCode/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.headOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code
        }
 },
            getSubHeadOfAccounts(){
                this.form.subHead = '';
                // get voucher head code
                      let url = "getSubHeadOfAccounts/"+this.form.headOfAccounts;
                      axios.get(url).then((response) => {
                        this.subHeadStatus = true;
                        this.subHeadOfAccountLists = response.data.subHeadList;
                      });
              // get voucher head code
            },
            changePersonCompany(){
                if(this.form.type == 1){
                    this.companyNameText = 'Person';
                }
                else if(this.form.type == 2){
                    this.companyNameText = 'Company';
                }
            },
            getData() {
                axios.get('/addIncomeExpenseCompany')
                    .then(res => {
                        this.datas = '<tr><td colspan="4"><center> Result Not Found</center></td></tr>';
                        // this.datas = res.data.data;

                    })
            },
            search() {
      
                let url = 'searchDueRegister';
                this.form.post(url).then((response) => {

                    if(response.data.data == ''){
                        this.resultNotFound = true;
                    }else{
                        this.resultNotFound = false;
                    }
                    
                    this.datas = response.data.data;
                    
                    });
            },

           
        }
    }
</script>
