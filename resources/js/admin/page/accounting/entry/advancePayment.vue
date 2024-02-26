.<template>
   <span>
    <div class="card">
     
     
                <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Advance Payment </h4>
        </div>
      </div>
      
      
      
       <form @submit.prevent="create()">

           <div class="supplier-entry py-4 px-2 comm-form-back-img">

         <div class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color">


          
               <div class="form-group">
                 <label> Type  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>

                 <input type="hidden" v-model="form.rendomNumber">
                   <select
                v-model="form.voucherType"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('voucherType') }"
                @change="getVoucherCode()"
              >
              <!-- @change="getCompanyByTypes()" -->
                <option value=""> Select  </option>
                <option value="1"> Payment  </option>
              </select>
              <has-error :form="form" field="voucherType"></has-error>
              </div> 

            <div class="form-group" style="display:none;">
              <!-- there show sub ladger from chart of accounts -->
              <label> Head Of Accounts <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
 
              <select
              disabled
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
              <label> Sub Head  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
 

              <multiselect
                          @input="getLastBalance"
                          label="headName"
                          placeholder="-------"
                          :options="subHeadOfAccountLists"
                          :show-labels="false"
                          v-model="form.subHeadMulti"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('productSupplierId'),
                          }"
                          style="
                            padding: 0px !important;
                            padding-bottom: 3px !important;
                          "
                        >
                        </multiselect>


              <select style="display:none;"
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
 
                <div class="form-group">
                 <label> Balance <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                  <input type="text" readonly v-model="form.lastBalanceDisplay"  
                  name="lastBalanceDisplay" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('lastBalanceDisplay') }">
                  <has-error :form="form" field="lastBalanceDisplay"></has-error>
              </div>
 

                <div class="form-group">
                 <label> Amount <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                  <input type="text" v-model="form.amount"
                  autocomplete="off"
                  name="amount" class="form-control"
                  @keyup.prevent="getAmount()" @keyup="calculate"
                  :class="{ 'is-invalid': form.errors.has('amount') }">
                  <has-error :form="form" field="amount"></has-error>
                  <span v-if="valid1" style="color:red">Negative and Character value Not Allowed</span>
                </div>

             
              
 <!-- ========================= payment option  -->

                <div class="form-group">
                    <label> Payment Type <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>

                    <span v-if="available_balance_cash_status" class="badge badge-primary">
                      {{form.available_balance}}
                    </span>

                    <select v-model="form.paymentType" 
                    @change="paymentReceiveType()"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('paymentType') }">
                        <option value=""> Select Payment Type </option>
                        <option v-for="paymentTypeList in paymentTypeLists" 
                        v-if="paymentTypeList.id<3"
                        :value="paymentTypeList.id"
                         > {{ paymentTypeList.paymentType }}</option>
                    </select>
                    <has-error :form="form" field="paymentType"></has-error>
                    <small class="badge badge-danger" v-if="insufficent_cash_balance_text_status">
                      Insufficent Balance
                    </small>
                </div>
           

              
              <div v-if="cashInformationStatus">
                
                  <div class="form-group">
                    <label> Person Name </label>
                    <input type="text" v-model="form.personName"  
                      name="personName" class="form-control" 
                      :class="{ 'is-invalid': form.errors.has('personName') }">
                      <has-error :form="form" field="personName"></has-error>
                  </div>

                  <div class="form-group">
                    <label> Person Mobile No </label>
                    <input type="text" v-model="form.personMobileNo"  
                      name="personMobileNo" class="form-control" 
                      :class="{ 'is-invalid': form.errors.has('personMobileNo') }">
                      <has-error :form="form" field="personMobileNo"></has-error>
                  </div>

              </div>

              <div v-if="bankInformationStatus">
              
             
              <div class="form-group">
                 <label>Bank Type Name</label>
                  <select v-model="form.bankTypeEntryId" name="bankTypeEntryId" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('bankTypeEntryId') }" 
                  @change.prevent="bankTypeIdCatch()">
                      <option value="">Select One</option>
                      <option v-for="showBankTypeData in showBankTypeDatas" 
                      :value="showBankTypeData.bankTypeEntryId" > 
                      {{ showBankTypeData.bankTypeEntryName }}</option>
                  </select>
                  <has-error :form="form" field="bankTypeEntryId"></has-error>
              </div>

                <div class="form-group">
                 <label> Bank Name </label>
                  <select v-model="form.bankEntryId" name="bankEntryId" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('bankEntryId') }"
                  @change.prevent="bankAccountIdCatch()">
                      <option value="">Select Bank Name</option>
                      <option v-for="showBankName in showBankNames" :value="showBankName.bankEntryId" > {{ showBankName.bankName }}</option>
                  </select>
                  <has-error :form="form" field="bankEntryId"></has-error>
              </div>

                <div class="form-group">
                 <label> Account No
                   <span v-if="available_balance_status" class="badge badge-primary">
                     {{available_balance_text}}
                   </span>

                 </label>
                 <input type="hidden" v-model="form.available_balance">
                  <select v-model="form.bankAccountId" name="bankAccountId" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('bankAccountId') }"
                  @change="getBankMoreInfo()"
                  >
                      <option value="">Select Bank Account</option>
                      <option v-for="showBankAccount in showBankAccounts"
                       :value="showBankAccount.bankId" > 
                       <span v-if="showBankAccount.bankAccountName">
                       {{ showBankAccount.bankAccountName }} ({{showBankAccount.bankAccountNumber}})</span>
                       
                       <span v-else>
                       {{ showBankAccount.bankAccountNumber }} </span>
                       </option>
                  </select>
                  <has-error :form="form" field="bankAccountId"></has-error>
                  <small class="badge badge-danger" v-if="insufficent_bank_balance_text_status">
                    Insufficient Balance
                  </small>
                </div>

                <div v-if="bankInformationAccountInfoStatus">
                    
                <div class="form-group">
                 <label> Branch Name </label>
                  <input type="text" v-model="form.branchName"  
                  class="form-control" readonly> 
              </div>

                <div class="form-group">
                 <label> Account No </label>
                  <input type="text" v-model="form.accNo"  
                  class="form-control" readonly> 
              </div>
                 
                </div>

              </div>

 <!-- ========================= payment option  -->

                <div class="form-group">
                    <label> Due Amount </label>
                    
                    <input type="number" readonly v-model="form.dueAmountDisplay"  
                    name="dueAmountDisplay" class="form-control" 
                    :class="{ 'is-invalid': form.errors.has('dueAmountDisplay') }">
                    <has-error :form="form" field="dueAmountDisplay"></has-error>
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


                                <button type="reset" @click="clearForm()" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-undo "></i>
                                    </span>
                                    <span class="mr-1"> Clear </span>
                                </button>


                                 <button v-if="submit_button" type="submit" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right"
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
                </span>Submit</button>
               <button v-if="insufficent_button" type="button" class="mr-2 btn-pill btn-hover-shine btn btn-danger">Submit</button>
              


                            </div>
                            </div>
 
<!-- -----------------------------   // card footer  --> 
      
      </form>
    </div>

   




  </span>
</template>

<script>
import Multiselect from "vue-multiselect";
    export default {
        data(){
            return{

                     valid1:false,
                     loading: false,
                    expenseTypeLists: [],
                    expenseHeadListByIds: [],
                    expenseHeadLists: [],
                    getCompanyByType: [],
                    paidDateText:'',
                    totalAmountText:'',

                    // for validation
                    available_balance_cash_status : false,
                    available_balance_cash_text : '',
                    
                    available_balance_text:'',
                    available_balance_status:false,
                    submit_button_status : true,
                    available_button_status : false,
                    available_text:'',
                    insufficent_cash_balance_text_status:false,
                    insufficent_bank_balance_text_status:false,
                    insufficent_balance_text_status:false,
                    insufficent_button:false,
                    submit_button:true,

                    
                    // /for validation
                    
                    totalAmountRowStatus:0,
                    expenseCompanyLists:[],
                    datas:[],
                    chartOfAccounts:[],
                    expensePurposeLists:[],
                    expenseDetailsLists:[],

                    subHeadStatus:0,
                    bankInformationStatus:0,
                    cashInformationStatus:0,
                    bankInformationAccountInfoStatus:0,
                    headOfAccountLists:[],
                    subHeadOfAccountLists:[],
                  


                form: new Form({
                    rendomNumber:Math.random(1,1000),
                    voucherType: 1,
                    headOfAccounts: '',
                    subHead: '',
                    subHeadMulti: '',
                    item: '',
                    itemAmount: '',
                    expenseHead: '',
                    expenseType: '',
                    expenseAmount: '',
                    expenseCompany: '',
                    expensePurpous: '',
                    mobileNo: '',
                    type: '',
                    companyId: '',
                    email: '',
                    address: '',
                    note: '',
                    // for validation
                    available_balance: '',
                    // /for validation
                    lastBalanceDisplay: '',
                    lastBalance: '',
                    cashAmount: '',
                    bankAmount: '',
                    dueAmountDisplay: '',
                    dueAmount: '',
                    branchName: '',
                    accNo: '',
                    paymentType: '',
                    bankTypeEntryId: '',
                    bankEntryId: '',
                    bankAccountId: '',
                    detailsTotalAmount: '',
                 
                }),

                companyLists: [],
                showBankNames: [],
                shopBankAllDatas: [],
                corporateBankAccountTypes: [],
                mobileBankAccountTypes: [],
                paymentTypeLists: [],
                showBankTypeDatas:[],
                showBankNames: [],
                showBankAccounts: [],
                bankMoreInfo: [],
             
                
            }

        },
            components: {
              Multiselect,
            },
        mounted() {

            this.getData();
            this.getVoucherCode();
            this.expenseTypeList();
            this.expenseCompanyList();
            this.getexpenseHeadList();
            this.chartOfAccount();
         
 

        },
        methods: {
          clearForm(){
            this.form.subHeadMulti = '';
            this.available_balance_cash_status = false;
          },
            create() {
                this.loading = true;
                this.form.post('/advancePayment').then(res => {
                   this.loading = false;
                      Toast.fire({
                          icon: 'success',
                          title: 'Entry Successfully'
                      })
 
                        this.form.reset()
                        this.form.rendomNumber = Math.random(1,1000)
                        this.getData();
                        this.getExpenseDetailsList(0);
                 
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
   this.form.subHeadMulti='';
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
              this.subHeadStatus = true;


              // get voucher head code
                      let url = "supplierAccountList/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.subHeadOfAccountLists = response.data.headOfAccountList;
                      });
              // get voucher head code

        }

        else if(this.form.voucherType == 2){

              this.paymentTo = 'Receive by';
              this.headOfCashBookTitle = 'Head Of Cash Book';
              this.paymentToStatus = true;
              this.bankInfo = false;
              this.subHeadStatus = true;


              // get voucher head code
                      let url = "supplierAccountList/"+this.form.voucherType;
                      axios.get(url).then((response) => {
                        this.headOfCashBookLists = response.data.headOfCashBookList;
                        this.subHeadOfAccountLists = response.data.headOfAccountList;
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
            calculateAmount(id){
                this.form.dueAmount = this.form.expenseAmount-(this.form.cashAmount+this.form.bankAmount)
            },
                           calculate(e){
         
         let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) &&  this.form.amount !== "") {
        this.valid1 = true;
       
       this.form.amount= '';
      } else {
       this.valid1 = false;
       
      }
    },
            
            getCompanyByTypes() {
              axios.get('getIncomeExpenseCompanyByIEType/'+this.form.type).then(res => {
                    this.companyLists = res.data.data
                })
            },
             
            bankTypeIdCatch() {
                axios.get('/bankNameList/'+this.form.bankTypeEntryId).then(res => {
                    this.showBankNames = res.data.show
                })
            },
             bankAccountIdCatch() {
                axios.get('/bankAccountListWithCard/'+this.form.bankEntryId+'/'+this.form.bankTypeEntryId).then(res => {
                    this.showBankAccounts = res.data.data
                })
            },
            getBankMoreInfo() {
              axios.get('/bankAccountMoreInfo/'+this.form.bankAccountId).then(res => {
                  this.bankInformationAccountInfoStatus=1
                    this.form.branchName = res.data.data.bankBranch
                    this.form.accNo = res.data.data.bankAccountNumber 

                    //======================== check balance 
                    if(this.form.voucherType==1){
                          let url = "checkBalance/"+res.data.data.accountCode;
                          axios.get(url)
                            .then((response) => {
                              this.available_balance_status = true;
                              this.available_balance_text = response.data.available_balance;
                              this.form.available_balance = response.data.available_balance;
                              this.calculate_available_balance(response.data.available_balance,2); // bank
                            });



                            // ---------------
                              if(this.form.amount>this.form.available_balance)
                              {
                                // this.insufficent_balance_text_status=true
                                this.insufficent_bank_balance_text_status=false
                                this.submit_button_status = true;
                                this.available_button_status = false;
                              }
                              else
                              {
                                this.insufficent_bank_balance_text_status=false
                              }
                            // ---------------

                    }
                    //======================== /check balance 
                })
            },

            paymentReceiveType(){

              this.insufficent_cash_balance_text_status=false;
              this.insufficent_bank_balance_text_status=false;
              this.available_balance_cash_status = false;

                if(this.form.paymentType == 2){
                    this.bankInformationStatus = 1;
                    this.cashInformationStatus = 0;
                }
                else if(this.form.paymentType == 1)
                {
                   
                  //======================== check balance 
                  if(this.form.voucherType==1){
                   axios.get('/getCashRegister/1').then(res => {
                     
                          let url = "checkBalance/"+res.data.accCode;
                          axios.get(url)
                            .then((response) => {
                              this.available_balance_cash_status = true;
                              this.form.available_balance = response.data.available_balance;
                              this.calculate_available_balance(response.data.available_balance,1); // cash
                            });

                            });
                  }
                  //======================== check balance 
                  

                    this.cashInformationStatus = 1;
                    this.bankInformationStatus = 0;
                }
                else
                {
                    this.available_balance_cash_status = false;
                    this.cashInformationStatus = 0;
                    this.bankInformationStatus = 0;
                }
            },
            calculate_available_balance(e,type){

              this.insufficent_cash_balance_text_status = false;
              this.insufficent_bank_balance_text_status = false;
              this.insufficent_button = false;
              this.submit_button = true;
              
              // ------------- cash condition
              if(type==1){
              if(this.form.amount>e){
                this.insufficent_cash_balance_text_status = true;
                this.insufficent_button = true;
                this.submit_button = false;
              }
              else{
                this.insufficent_cash_balance_text_status = false;
                this.insufficent_button = false;
                this.submit_button = true;
              }
              }
              // ------------- cash condition
              
              // ------------- Bank condition
              if(type==2){
              if(this.form.amount>e){
                this.insufficent_bank_balance_text_status = true;
                this.insufficent_button = true;
                this.submit_button = false;
              }
              else{
                this.insufficent_bank_balance_text_status = false;
                this.insufficent_button = false;
                this.submit_button = true;
              }
              }
              // ------------- /Bank condition
            },

            calculate_available_balance_from_amount(){

              this.insufficent_cash_balance_text_status = false;
              this.insufficent_bank_balance_text_status = false;
              this.insufficent_button = false;
              this.submit_button = true;
              
              // ------------- cash condition
              
              if(this.form.amount>this.form.available_balance){
                
                if(this.form.paymentType==1)
                {
                this.insufficent_cash_balance_text_status = true;
                this.insufficent_bank_balance_text_status = false;
                }
                else
                {
                this.insufficent_cash_balance_text_status = false;
                this.insufficent_bank_balance_text_status = true;
                }

                this.insufficent_button = true;
                this.submit_button = false;
              }
              else{
                this.insufficent_cash_balance_text_status = false;
                this.insufficent_bank_balance_text_status = false;
                this.insufficent_button = false;
                this.submit_button = true;
              }
              
              // ------------- cash condition
            },





            expenseTypeList(){
                let uri = `expenseTypeList`;
                axios.get(uri).then(response=>{
                    this.expenseTypeLists = response.data.data;
                })
            },
            getData() {


                axios.get('/bankTypeEntryList').then(res => {
                    this.showBankTypeDatas = res.data.show
                }),


                axios.get('/paymentTypeList').then(res => {
                    this.paymentTypeLists = res.data.data
                }),



                axios.get('/addExpense')
                    .then(res => {
                        this.datas = res.data.data

                    })
            },
            
            expenseCompanyList() {
              axios.get('/addIncomeExpenseCompany').then(res => {
                    this.expenseCompanyLists = res.data.data
                })
            },
            
            expensePurposeList() {
              axios.get('/getExpensePurposeListById/'+this.form.expenseHead).then(res => {
                    this.expensePurposeLists = res.data.data
                })
            },
            
           
            getAmount(){
                    if(this.form.voucherType==1){
                      //alert('pay');
                      this.form.dueAmount = parseFloat(this.form.lastBalance)+parseFloat(this.form.amount);
                      this.form.dueAmountDisplay = Math.abs(this.form.dueAmount);
                    }
                    else{
                      this.form.dueAmount = parseFloat(this.form.lastBalance)-parseFloat(this.form.amount);
                      this.form.dueAmountDisplay = Math.abs(this.form.dueAmount);
                    }

                    if(this.form.voucherType==1){
                    this.calculate_available_balance_from_amount();
                    }
                    
            },
            getDetailsData(){
                this.getExpenseDetailsList(this.form.expensePurpous);
            },
            getExpenseDetailsList(id) {
              axios.get('/getExpenseDetailsListById/'+id).then(res => {
                    this.expenseDetailsLists = res.data.data
                    this.form.expenseAmount = res.data.totalAmount
                    this.form.dueAmount = res.data.totalAmount
                    this.totalAmountText = res.data.totalAmount
                    this.totalAmountRowStatus = res.data.totalAmount
                })
            },
            
            expenseItemAdd(id) {

                if(this.form.item && this.form.itemAmount){
              axios.get('/addExpenseDetailsItem/'
              +this.form.rendomNumber+'/'
              +this.form.expensePurpous+'/'
              +this.form.item+'/'
              +this.form.itemAmount).then(res => {
                    if(res.data.status){
                    Toast.fire({
                            icon: 'success',
                            title: 'Item Add Successful'
                        })

                        this.form.item = '',
                        this.form.itemAmount=''
                        this.getExpenseDetailsList(this.form.expensePurpous);
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
            
            deleteExpenseDetailItem(id) {
              axios.get('/deleteExpenseDetailsItem/'+id).then(res => {
                    if(res.data.status){
                    Toast.fire({
                            icon: 'success',
                            title: 'Item Delete Successful'
                        })

                        this.form.item = '',
                        this.form.itemAmount=''
                        this.getExpenseDetailsList(this.form.expensePurpous);
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
                })
            },
            getexpenseHead() {
              axios.get('/getExpenseHeadList/'+this.form.expenseType).then(res => {
                    this.expenseHeadListByIds = res.data.data
                })
            },
            getexpenseHeadList() {
              axios.get('/addexpenseType/').then(res => {
                    this.expenseHeadLists = res.data.data
                })
            },
            getLastBalance(value) {
              this.form.subHead = value.headCode;
              axios.get('getLastBalanceByAccCodeAdvPayment/'+this.form.subHead).then(res => {
                    this.form.lastBalanceDisplay = Math.abs(res.data.balance);
                    this.form.lastBalance = res.data.balance;

                    this.headOfAccountLists = res.data.headAcc;
                    this.form.headOfAccounts = res.data.precode;

                })
            },

            deleteData(id){
                axios.delete('/addExpense/'+id)
                    .then( res=>{
                        Toast.fire({
                            icon: 'success',
                            title: 'Delete Successful'
                        })
                        this.getData();
                    })
            },

          
        }
    }
</script>
