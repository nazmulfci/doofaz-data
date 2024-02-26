.<template>
   <span>
    <div class="card">
      
      
                  <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Target & Budget Setup </h4>
        </div>
      </div>
      
       
       <form @submit.prevent="create()">
         
         <div class="supplier-entry py-4 px-2 comm-form-back-img">

         <div class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color">

           
              
              <div class="form-group">
                 <label> Type <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>

                 <input type="hidden" v-model="form.rendomNumber">
                   <select
                v-model="form.voucherType"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('voucherType') }"
                @change="getVoucherCode()"
              >
              <!-- @change="getCompanyByTypes()" -->
                <option value=""> Select </option>
                <option value="2"> Income Target </option>
                <option value="1"> Expense Budget </option>
              </select>
              <has-error :form="form" field="voucherType"></has-error>
              </div> 




              
            <div class="form-group">
              <!-- there show sub ladger from chart of accounts -->
              <label> Head Of Accounts <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
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
            </div>
            
            
            <div class="form-group" v-if="subHeadStatus">
              <!-- there show register from chart of accounts -->
              <label> Sub Head  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
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
            </div>

            
              <has-error :form="form" field="voucherType"></has-error>
               
                  <has-error :form="form" field="headOfAccounts"></has-error>
               
                  <has-error :form="form" field="subHead"></has-error>
           

                <div class="form-group">
                 <label> Target Type <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <select v-model="form.interestTimeType" 
                  @change="interestTime()"
                  name="interestTimeType" class="form-control" :class="{ 'is-invalid': form.errors.has('interestTimeType') }">
                      <option value="">Select One</option>
                      <option v-for="getInterestTimeTypeList in getInterestTimeTypeLists" 
                      :value="getInterestTimeTypeList.id" > {{ getInterestTimeTypeList.name }}</option>
                  </select>
                  <has-error :form="form" field="interestTimeType"></has-error>
                </div>

                <div class="form-group">
                 <label> From Date </label>
                  <input type="date" v-model="form.fromDate"  
                  name="fromDate" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('fromDate') }">
                  <has-error :form="form" field="fromDate"></has-error>
                </div>

                <div class="form-group">
                 <label> To Date </label>
                  <input type="date" v-model="form.toDate"  
                  name="toDate" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('toDate') }">
                  <has-error :form="form" field="toDate"></has-error>
                </div>

                <div class="form-group">
                 <label> Target Amount <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <input type="text" min="0" v-model="form.incomeAmount"  
                  autocomplete="off"
                  name="incomeAmount" class="form-control" @keyup="calculate"
                  :class="{ 'is-invalid': form.errors.has('incomeAmount') }">
                  <has-error :form="form" field="incomeAmount"></has-error>
                  <span v-if="invalid" style="color:red">Negative And Character Value Not Allowed</span>
                </div>

                <div class="form-group">
                 <label> Note </label>
                  <textarea type="text" v-model="form.note"  
                  name="note" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('note') }"></textarea>
                  <has-error :form="form" field="note"></has-error>
                </div>
 
 
        </div>
      </div> 

      
        <!-- -----------------------------   card footer  -->
 
<div class="d-block pt-3 pb-4 card-footer overflow-hidden">
<div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">


                                <button type="reset" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-undo "></i>
                                    </span>
                                    <span class="mr-1"> Clear </span>
                                </button>

                                <button type="submit" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right"
                                :disabled="loading"
              >
                <span
                  v-if="loading"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>

                <span v-else class="mr-2 opacity-7">
                  <i class="fa fa-paper-plane"></i>
                </span>
                                    <span class="mr-1"> Submit </span>
                                </button>


                            </div>
                            </div>
 
<!-- -----------------------------   // card footer  --> 
       </form>
    </div>

   <div class="card main-card  element-block-example mt-5">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black"> Target Or Budget List</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th> SN </th>
               <th> Head  </th>
               <th> Type </th>
               <th> Date </th>
               <th> Amount </th>
               <th> Note </th>
               <th> Status </th>
               <th> Delete </th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in datas">
                <td>{{ index+1 }}</td>
                
                <td> <span v-for="chartOfAccountRegister in chartOfAccountRegisters" v-if="chartOfAccountRegister.headCode==data.subHead"> {{chartOfAccountRegister.headName}} </span> </td>
                <td> 
                  <span v-for="getInterestTimeTypeList in getInterestTimeTypeLists" 
                      :value="getInterestTimeTypeList.id"
                      v-if="data.incomeTargetType==getInterestTimeTypeList.id"
                      >
                      {{ getInterestTimeTypeList.name }} 
                  </span>
                   
                   </td>
                <td> {{ moment(data.fromDate).format('DD MMMM YYYY') }} 
                    <span v-if="data.toDate"> <br> to <br> {{ moment(data.toDate).format('DD MMMM YYYY') }} </span> </td>
                <td> {{ data.incomeAmount }} </td> 
                <td> {{ data.note }} </td>
                 <!-- incomeInvoiceView -->
                  <td>
                    <a href="javascript:void(0)" v-if="data.status==1" @click="changeStatus(data.id)" class="badge badge-success btn-hover-shine">  Publish </a>
                    <a href="javascript:void(0)" v-else @click="changeStatus(data.id)" class="badge badge-danger btn-hover-shine">  Unpublish </a>
                  </td>
                  <td>
                    <button @click="deleteData(data.id)" class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine"><i class=" fa fa-trash mr-1"></i> Delete </button>
                  </td>
              </tr>
            </tbody>
         </table>
       </div>
     </div>


  </span>
</template>

<script>
import moment from 'moment';
    export default {
        data(){
            return{
                    moment: moment,
                    loading: false,
                    incomeTypeLists: [],
                    incomeHeadListByIds: [],
                    incomeHeadLists: [],
                    paidDateText:'',
                    totalAmountText:'',
                    
                    subHeadStatus:0,
                    targetMonthStatus:0,
                    targetDateStatus:0,
                    totalAmountRowStatus:0,
                    incomeCompanyLists:[],
                    datas:[],
                    chartOfAccounts:[],
                    chartOfAccountRegisters:[],
                    incomePurposeLists:[],
                    incomeDetailsLists:[],
                    getInterestTimeTypeLists:[],

                    bankInformationStatus:0,
                    cashInformationStatus:0,
                    bankInformationAccountInfoStatus:0,


                form: new Form({
                  rendomNumber:Math.random(1,1000),
                    item: '',
                    itemAmount: '',
                    headOfAccounts: '',
                    voucherType: '',
                    incomeAmount: '',
                    incomeCompany: '',
                    subHead: '',
                    interestTimeType: '',
                    mobileNo: '',
                    email: '',
                    address: '',
                    note: '',

                    cashAmount: '',
                    bankAmount: '',
                    dueAmount: '',
                    branchName: '',
                    accNo: '',
                    paymentType: '',
                    bankTypeEntryId: '',
                    bankEntryId: '',
                    bankAccountId: '',
                    detailsTotalAmount: '',
                 
                }),

               
                showBankNames: [],
                shopBankAllDatas: [],
                corporateBankAccountTypes: [],
                mobileBankAccountTypes: [],
                paymentTypeLists: [],
                showBankTypeDatas:[],
                showBankNames: [],
                showBankAccounts: [],
                bankMoreInfo: [],
                incomePurposeListViews: [],
                headOfCashBookLists: [],
                headOfAccountLists: [],
                subHeadOfAccountLists: [],
                invalid:false,
                
            }

        },
        mounted() {

            this.getData();
            this.incomeTypeList();
            this.incomeCompanyList();
            this.getincomeHeadList();
            this.chartOfAccount();
            this.chartOfAccountRegister();
            this.incomePurposeListViews();

            this.paymentTypeList(); 
            this.showBankType();
            this.getInterestTimeTypeList();

        },
        methods: {
            create() {
              this.loading = true;
                this.form.post('/addIncomeTarget').then(res => {
                  this.loading = false;
                   
                      Toast.fire({
                          icon: 'success',
                          title: 'Entry Successfully'
                      })
 

                        this.form.reset()
                        this.form.rendomNumber = Math.random(1,1000)
                        this.getData();
                        this.getincomeDetailsList(0);
                 
                }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
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
       calculate(e){
         
         let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) &&  this.form.incomeAmount !== "") {
        this.invalid = true;
       
       this.form.incomeAmount= '';
      } else {
       this.invalid = false;
       
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
            calculateAmount(id){
              if(id==1){
                
                let dueAmount = this.form.incomeAmount-this.form.cashAmount
                
                    if(dueAmount>=0){
                         this.form.dueAmount = this.form.incomeAmount-this.form.cashAmount
                    }
                    else{
                          this.form.dueAmount = 0
                          this.form.cashAmount = this.form.incomeAmount
                    }
                 
              }else if(id==2){

                  let dueAmount = this.form.incomeAmount-this.form.bankAmount
                    if(dueAmount>=0){
                        this.form.dueAmount = this.form.incomeAmount-this.form.bankAmount
                    }else{
                      this.form.dueAmount = 0
                      this.form.bankAmount = this.form.incomeAmount
                    }

              }
                
            },
            interestTime(){
                if(this.form.interestTimeType==3){
                    this.targetMonthStatus=1
                    this.targetDateStatus=0
                }
                else if(this.form.interestTimeType==5){
                    this.targetMonthStatus=0
                    this.targetDateStatus=1
                }
                else{
                    this.targetMonthStatus=0
                    this.targetDateStatus=0
                }
            },
            paymentTypeList() {
              axios.get('/paymentTypeList').then(res => {
                    this.paymentTypeLists = res.data.data
                })
            },
            showBankType() {
              axios.get('/bankTypeEntryList').then(res => {
                    this.showBankTypeDatas = res.data.show
                })
            },
            bankTypeIdCatch() {
                axios.get('/bankNameList/'+this.form.bankTypeEntryId).then(res => {
                    this.showBankNames = res.data.show
                })
            },
             bankAccountIdCatch() {
                axios.get('/bankAccountList/'+this.form.bankEntryId).then(res => {
                    this.showBankAccounts = res.data.data
                })
            },
            getBankMoreInfo() {
              axios.get('/bankAccountMoreInfo/'+this.form.bankAccountId).then(res => {
                  this.bankInformationAccountInfoStatus=1
                    this.form.branchName = res.data.data.bankBranch
                    this.form.accNo = res.data.data.bankAccountNumber
                })
            },

            paymentReceiveType(){
                if(this.form.paymentType == 2){
                    this.bankInformationStatus = 1;
                    this.cashInformationStatus = 0;
                }
                else if(this.form.paymentType == 1)
                {
                    this.cashInformationStatus = 1;
                    this.bankInformationStatus = 0;
                }
                else
                {
                    this.cashInformationStatus = 0;
                    this.bankInformationStatus = 0;
                }
            },





            incomeTypeList(){
                let uri = `incomeTypeList`;
                axios.get(uri).then(response=>{
                    this.incomeTypeLists = response.data.data;
                })
            },
            getData() {
                axios.get('/addIncomeTarget')
                    .then(res => {
                        this.datas = res.data.data

                    })
            },
            
            incomeCompanyList() {
              axios.get('/addIncomeExpenseCompany').then(res => {
                    this.incomeCompanyLists = res.data.data
                })
            },
            
            incomePurposeList() {
              axios.get('/getIncomePurposeListById/'+this.form.headOfAccounts).then(res => {
                    this.incomePurposeLists = res.data.data
                })
            },
            
            
            getAmount(){
                    this.form.dueAmount = this.form.incomeAmount
            },
            getDetailsData(){
                this.getincomeDetailsList(this.form.subHead);
            },
            getincomeDetailsList(id) {
              axios.get('/getIncomeDetailsListById/'+id).then(res => {
                    this.incomeDetailsLists = res.data.data
                    this.form.incomeAmount = res.data.totalAmount
                    this.form.dueAmount = res.data.totalAmount
                    this.totalAmountText = res.data.totalAmount
                    this.totalAmountRowStatus = res.data.totalAmount
                })
            },
            
            incomeItemAdd(id) {

                if(this.form.item && this.form.itemAmount){
              axios.get('/addIncomeDetailsItem/'
              +this.form.rendomNumber+'/'
              +this.form.subHead+'/'
              +this.form.item+'/'
              +this.form.itemAmount).then(res => {
                    if(res.data.status){
                    Toast.fire({
                            icon: 'success',
                            title: 'Item Add Successfull'
                        })

                        this.form.item = '',
                        this.form.itemAmount=''
                        this.getincomeDetailsList(this.form.subHead);
                    }
                    else{
                    Toast.fire({
                            icon: 'error',
                            title: 'Item Not Add'
                        })
                    }
                })
                }else{

                    if(id==1){
                     Toast.fire({
                            icon: 'error',
                            title: 'Please enter your item and value'
                        })
                    }
                }
            },
            
            deleteIncomeDetailItem(id) {
              axios.get('/deleteIncomeDetailsItem/'+id).then(res => {
                    if(res.data.status){
                    Toast.fire({
                            icon: 'success',
                            title: 'Item Delete Successfull'
                        })

                        this.form.item = '',
                        this.form.itemAmount=''
                        this.getincomeDetailsList(this.form.subHead);
                    }
                    else{
                    Toast.fire({
                            icon: 'error',
                            title: 'Item Not Delete'
                        })
                    }
                })
            },
            
            chartOfAccount() {
              axios.get('/chartOfAccount').then(res => {
                    this.chartOfAccounts = res.data.chartOfAccounts
                }),
                axios.get('/getInterestTimeTypeList').then(res => {
                    this.getInterestTimeTypeLists = res.data.data
                }),
                axios.get('/addIncomeProvider/').then(res => {
                    this.incomePurposeListViews = res.data.data
                })
            },
            chartOfAccountRegister() {
              axios.get('/chartOfAccountRegister').then(res => {
                    this.chartOfAccountRegisters = res.data.chartOfAccountList
                })
                
            },
            getincomeHead() {
              axios.get('/getIncomeHeadList/'+this.form.voucherType).then(res => {
                    this.incomeHeadListByIds = res.data.data
                })
            },
            getincomeHeadList() {
              axios.get('/addIncomeType/').then(res => {
                    this.incomeHeadLists = res.data.data
                })
            },
            getIncomeExpenseCompanyInfo() {
              axios.get('/getIncomeExpenseCompanyIncome/'+this.form.subHead).then(res => {
                    this.form.mobileNo = res.data.data.mobileNo
                    this.form.email = res.data.data.email
                    this.form.address = res.data.data.address
                })
            },
            changeStatus(id) {
              axios.get('/changeStatusTarget/'+id).then(res => {
                        this.getData();
                })
            },

            deleteData(id){
                axios.delete('/addIncomeTarget/'+id)
                    .then( res=>{
                        Toast.fire({
                            icon: 'success',
                            title: 'Delete Successfull'
                        })
                        this.getData();
                    })
            },

          
        }
    }
</script>
