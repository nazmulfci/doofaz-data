.<template>
   <span>
    <div class="card">
      <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Security Money </h4>
        </div>
      </div>


      <form @submit.prevent="create()">
        <div class="supplier-entry py-4 px-2 comm-form-back-img">

         <div class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color">


            <div class="form-group">
                 <label> Expense Type 
                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>

                 <input type="hidden" v-model="form.rendomNumber">
                   <select
                v-model="form.expenseType"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('expenseType') }"
                @change="getexpenseHead()"
              >
                <option value=""> Select </option>
                <option v-for="expenseTypeList in expenseTypeLists" 
                :value="expenseTypeList.headCode"> {{expenseTypeList.headName}} </option> 
              </select>
              <has-error :form="form" field="expenseType"></has-error>
              </div> 

               <div class="form-group">
                 <label> Expense Head 
                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <select v-model="form.expenseHead" name="expenseHead" 
                  class="form-control" :class="{ 'is-invalid': form.errors.has('expenseHead') }"
                  @change="expensePurposeList()"
                  >
                      <option value=""> Select One </option>
                      <option v-for="expenseHeadListById in expenseHeadListByIds" 
                      :value="expenseHeadListById.accountCode" > 
                      {{ expenseHeadListById.name }} 
                      </option>
                  </select>
                  <has-error :form="form" field="expenseHead"></has-error>
              </div>


                
              <div class="form-group">
                 <label> Expense Purpose 
                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <select type="text" v-model="form.expensePurpous"
                  name="expensePurpous" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('expensePurpous') }"
                  @change.prevent="getExpenseBudget()"
                  >
                    <option value="">Select One</option> 
                      <option v-for="expensePurposeList in expensePurposeListsd" 
                      :value="expensePurposeList.accountCodeSecurityDeposit" > 
                      {{ expensePurposeList.expensePurpous }}
                      </option>
                  </select>
                  <has-error :form="form" field="expensePurpous"></has-error>
              </div>
                  
            

               

                <div class="form-group">
                 <label> Security Title  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <input type="text" v-model="form.expenseTitle"  
                  name="expenseTitle" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('expenseTitle') }">
                  <has-error :form="form" field="expenseTitle"></has-error>
                </div>

                <div class="form-group">
                 <label> Security Amount </label>
                  <input type="text" v-model="form.expenseAmount"  
                  autocomplete="off"
                  name="expenseAmount" class="form-control" 
                  @keyup.prevent="getAmount()"
                  @keyup="calculate"
                  :class="{ 'is-invalid': form.errors.has('expenseAmount') }">
                  <has-error :form="form" field="expenseAmount"></has-error>
                  <span v-if="invalid" style="color:red">Negative And Character Value Not allowed</span>
                </div>

                
              
 <!-- ========================= payment option  -->

                <div class="form-group">
                    <label> Payment Type
                          
                    <span v-if="available_balance_cash_status" class="badge badge-primary">
                      {{form.available_balance}}
                    </span>
                      <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                    <select v-model="form.paymentType" 
                    @change="paymentReceiveType()"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('paymentType') }">
                        <option value=""> Select Payment Type </option>
                        <option v-for="paymentTypeList in paymentTypeLists" 
                        :value="paymentTypeList.id" > {{ paymentTypeList.paymentType }}</option>
                    </select>
                    <has-error :form="form" field="paymentType"></has-error>

                    <small class="badge badge-danger" v-if="insufficent_cash_balance_text_status">
                      Insufficient Balance
                    </small>

                </div>
           

              
              <div v-if="cashInformationStatus">
              
              <div class="form-group">
                 <label> Cash Amount <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                 <input type="number" v-model="form.cashAmount"
                  name="cashAmount" class="form-control" 
                  @keyup.prevent="calculateAmount(1)"
                  autocomplete="off"
                  :class="{ 'is-invalid': form.errors.has('cashAmount') }">
                  <has-error :form="form" field="cashAmount"></has-error>
              </div>
              
              <div class="form-group">
                 <label> Person Name </label>
                 <input type="text" v-model="form.personName"  
                  name="personName" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('personName') }">
                  <has-error :form="form" field="personName"></has-error>
              </div>
              
              <div class="form-group">
                 <label> Person Mobile No</label>
                 <input type="text" v-model="form.personMobileNo"  
                  name="personMobileNo" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('personMobileNo') }">
                  <has-error :form="form" field="personMobileNo"></has-error>
              </div>

              </div>

              <div v-if="bankInformationStatus">
              
              <div class="form-group">
                 <label> Bank Amount <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                 <input type="number" v-model="form.bankAmount"
                 autocomplete="off"
                  name="bankAmount" class="form-control" 
                  @keyup.prevent="calculateAmount(2)"
                  :class="{ 'is-invalid': form.errors.has('bankAmount') }">
                  <has-error :form="form" field="bankAmount"></has-error>
              </div>
              <div class="form-group">
                 <label> Bank Type Name </label>
                  <select v-model="form.bankTypeEntryId" name="bankTypeEntryId" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('bankTypeEntryId') }" 
                  @change.prevent="bankTypeIdCatch()">
                      <option value="">Select One</option>
                      <option v-for="showBankTypeData in showBankTypeDatas" :value="showBankTypeData.bankTypeEntryId" > {{ showBankTypeData.bankTypeEntryName }}</option>
                  </select>
                  <has-error :form="form" field="bankTypeEntryId"></has-error>
              </div>

                <div class="form-group">
                 <label>Bank Name</label>
                  <select v-model="form.bankEntryId" name="bankEntryId" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('bankEntryId') }"
                  @change.prevent="bankAccountIdCatch()">
                      <option value="">Select Bank Name</option>
                      <option v-for="showBankName in showBankNames" :value="showBankName.bankEntryId" > {{ showBankName.bankName }}</option>
                  </select>
                  <has-error :form="form" field="bankEntryId"></has-error>
              </div>

                <div class="form-group">
                 <label>Bank Account

                     <span v-if="available_balance_status" class="badge badge-primary">
                     {{available_balance_text}}
                   </span>

                 </label>
                  <select v-model="form.bankAccountId" name="bankAccountId" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('bankAccountId') }"
                  @change="getBankMoreInfo()"
                  >
                      <option value="">Select Bank Account</option>
                      <option v-for="showBankAccount in showBankAccounts" :value="showBankAccount.bankId" > {{ showBankAccount.bankAccountNumber }}</option>
                  </select>
                  <has-error :form="form" field="bankAccountId"></has-error>

                  
                   <input type="hidden" v-model="form.available_balance">
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
                  <input type="text" v-model="form.dueAmount"  disabled
                  name="dueAmount" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('dueAmount') }">
                  <has-error :form="form" field="dueAmount"></has-error>
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

   


  </span>
</template>

<script>
    export default {
        data(){
            return{
                    headOfAccountLists: [],
                    loading: false,
                    subHeadOfAccountLists: [],
                    expenseTypeLists: [],
                    expenseHeadListByIds: [],
                    expenseHeadLists: [],
                    paidDateText:'',
                    totalAmountText:'',
                    
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


                form: new Form({
                  rendomNumber:Math.random(1,1000),
                    voucherType: '',
                    headOfAccounts: '',
                    subHead: '',
                    item: '',
                    itemAmount: '',
                    expenseHead: '',
                    expenseType: '',
                    expenseAmount: '',
                    expenseCompany: '',
                    expensePurpous: '',
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

                    // for validation
                    available_balance: '',
                    // /for validation
                 
                }),

               
                expensePurposeListsd: [],
                showBankNames: [],
                shopBankAllDatas: [],
                corporateBankAccountTypes: [],
                mobileBankAccountTypes: [],
                paymentTypeLists: [],
                showBankTypeDatas:[],
                showBankNames: [],
                showBankAccounts: [],
                bankMoreInfo: [],
                expensePurposeListViews: [],
                invalid:false,
                
            }

        },
        mounted() {

            this.getData();
            this.expenseTypeList();
            this.expenseCompanyList();
            this.getexpenseHeadList();
            this.chartOfAccount();
            this.paymentTypeList(); 
            this.showBankType();

        },
        methods: {
            create() {
              this.loading = true;
                this.form.post('/addSecurityMoney').then(res => {
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
            getLastBalance() {
              axios.get('getLastBalanceByAccCode/'+this.form.subHead).then(res => {
                    this.form.lastBalance = res.data.balance
                })
            },
                           calculate(e){
         
         let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) &&  this.form.expenseAmount !== "") {
        this.invalid = true;
       
       this.form.expenseAmount= '';
      } else {
       this.invalid = false;
       
      }
    },

            calculateAmount(id){
                if(id==1){
                if(this.form.cashAmount>this.form.expenseAmount){
                  this.form.cashAmount = this.form.expenseAmount
                }
                }
                if(id==2){
                if(this.form.bankAmount>this.form.expenseAmount){
                  this.form.bankAmount = this.form.expenseAmount
                }
                }
                this.calculate_available_balance_from_amount(id);
            },
            paymentTypeList() {
              axios.get('/paymentTypeList').then(res => {
                    this.paymentTypeLists = res.data.data
                })
            },
            showBankType() {
              
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
                     
                          let url = "checkBalance/"+res.data.data.accountCode;
                          axios.get(url)
                            .then((response) => {
                              this.available_balance_status = true;
                              this.available_balance_text = response.data.available_balance;
                              this.form.available_balance = response.data.available_balance;
                              this.calculate_available_balance(response.data.available_balance,2); // bank
                            });



                            // ---------------
                              if(this.form.bankAmount>this.form.available_balance)
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

                     
                    //======================== /check balance 
                })
            },

            paymentReceiveType(){

              axios.get('/bankTypeEntryList').then(res => {
                    this.showBankTypeDatas = res.data.show
                })

              this.insufficent_cash_balance_text_status=false;
              this.insufficent_bank_balance_text_status=false;
              this.available_balance_cash_status = false;

                if(this.form.paymentType == 2){
                    this.form.bankAmount = this.form.expenseAmount;
                    this.form.cashAmount = '';
                    this.bankInformationStatus = 1;
                    this.cashInformationStatus = 0;
                    this.form.dueAmount=0;
                }
                else if(this.form.paymentType == 1)
                {
                  this.form.dueAmount=0;

                  
                    //======================== check balance 
                   
                   axios.get('/getCashRegister/1').then(res => {
                     
                          let url = "checkBalance/"+res.data.accCode;
                          axios.get(url)
                            .then((response) => {
                              this.available_balance_cash_status = true;
                              this.form.available_balance = response.data.available_balance;
                              this.calculate_available_balance(response.data.available_balance,1); // cash
                            });

                            });
                   
                  //======================== check balance 


                    this.cashInformationStatus = 1;
                    this.bankInformationStatus = 0;
                    this.form.bankAmount = '';
                    this.form.cashAmount = this.form.expenseAmount;
                }
                else
                {
                    this.cashInformationStatus = 0;
                    this.bankInformationStatus = 0;
                    this.form.bankAmount = '';
                    this.form.cashAmount = '';
                    this.form.dueAmount = this.form.expenseAmount;
                }
            },
            calculate_available_balance(e,type){

              this.insufficent_cash_balance_text_status = false;
              this.insufficent_bank_balance_text_status = false;
              this.insufficent_button = false;
              this.submit_button = true;
              
              // ------------- cash condition
              if(type==1){
              if(this.form.cashAmount>e){
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
              if(this.form.bankAmount>e){
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

            calculate_available_balance_from_amount(type){

              this.insufficent_cash_balance_text_status = false;
              this.insufficent_bank_balance_text_status = false;
              this.insufficent_button = false;
              this.submit_button = true;
              
              // ------------- cash condition
              if(type==1){
              if(this.form.cashAmount>this.form.available_balance){
                
                
                this.insufficent_cash_balance_text_status = true;
                this.insufficent_bank_balance_text_status = false;

                this.insufficent_button = true;
                this.submit_button = false;
              }
              else{
                this.insufficent_cash_balance_text_status = false;
                this.insufficent_bank_balance_text_status = false;
                this.insufficent_button = false;
                this.submit_button = true;
              }
              }
              
              // ------------- cash condition
              
              // ------------- bank condition
              if(type==2){
              if(this.form.bankAmount>this.form.available_balance){
                
                
                this.insufficent_cash_balance_text_status = false;
                this.insufficent_bank_balance_text_status = true;
                

                this.insufficent_button = true;
                this.submit_button = false;
              }
              else{
                this.insufficent_cash_balance_text_status = false;
                this.insufficent_bank_balance_text_status = false;
                this.insufficent_button = false;
                this.submit_button = true;
              }
              }
              
              // ------------- /bank condition
            },





            expenseTypeList(){
                let uri = `expenseTypeList`;
                axios.get(uri).then(response=>{
                    this.expenseTypeLists = response.data.data;
                })
            },
            getData() {
                axios.get('/addSecurityMoney')
                    .then(res => {
                        this.datas = res.data.data

                    }),

                    axios.get('/addExpenseProvider/').then(res => {
                    this.expensePurposeListViews = res.data.data
                })

            },
            
            expenseCompanyList() {
              axios.get('/addIncomeExpenseCompany').then(res => {
                    this.expenseCompanyLists = res.data.data
                })
            },
            
            expensePurposeList() {
              axios.get('/getExpensePurposeListByIdForSecurity/'+this.form.expenseHead).then(res => {
                    this.expensePurposeListsd = res.data.datas
                })
            },
        
            getAmount(){
                    this.form.dueAmount = this.form.expenseAmount
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
                            title: 'Item Add Successfull'
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
                            title: 'Item Delete Successfull'
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
            getIncomeExpenseCompanyInfo() {
              axios.get('/getIncomeExpenseCompany/'+this.form.expensePurpous).then(res => {
                    this.form.mobileNo = res.data.data.mobileNo
                    this.form.email = res.data.data.email
                    this.form.address = res.data.data.address
                })
            },

            deleteData(id){
                axios.delete('/addExpense/'+id)
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
