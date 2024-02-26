<template>
   <span>
    <div class="card">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black"> Loan Providing </h3>
      </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form @submit.prevent="create()">

              <router-link :to="`/loanManagement`" class="btn btn-primary"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                Back </router-link>

                
              
               <div class="form-group">
                 <label> Loan Receiver Type </label>
                  <select v-model="form.loanProviderTypeId"
                  disabled
                   name="loanProviderTypeId" 
                  class="form-control" :class="{ 'is-invalid': form.errors.has('loanProviderTypeId') }" 
                  @change.prevent="loanProviderTypeIdCatch()">
                      <option value="">Select One</option>
                      <option v-for="loanProviderTypeList in loanProviderTypeLists" 
                      :value="loanProviderTypeList.id" 
                      v-if="loanProviderTypeList.id==1"
                      > {{ loanProviderTypeList.type }}/Company</option>
                  </select>
                  <has-error :form="form" field="loanProviderTypeId"></has-error>
              </div>

               <div class="form-group">
                 <label> Loan Receiver </label>
                  <select v-model="form.loanProviderId" name="loanProviderId" 
                  disabled
                  class="form-control" :class="{ 'is-invalid': form.errors.has('loanProviderId') }"
                  >
                      <option value=""> Select One </option>
                      <option v-for="loanProviderListById in loanProviderListByIds" 
                      :value="loanProviderListById.id" > 
                      {{ loanProviderListById.providerName }}
                      <span v-if="loanProviderListById.providerBranchName">
                           ({{loanProviderListById.providerBranchName}})
                      </span>
                      </option>
                  </select>
                  <has-error :form="form" field="loanProviderId"></has-error>
              </div>

                <div class="form-group">
                 <label> Interest Type</label>
                  <select v-model="form.interestType"
                  disabled
                  @change="interestType()"
                   name="interestType" class="form-control" :class="{ 'is-invalid': form.errors.has('interestType') }">
                      <option value="">Select One</option>
                      <option v-for="getInterestTypeList in getInterestTypeLists" 
                      :value="getInterestTypeList.id" > {{ getInterestTypeList.name }}</option>
                  </select>
                  <has-error :form="form" field="interestType"></has-error>
              </div>

                 <div class="form-group" v-if="loanPayTypeStatus">
                 <label> Loan Receive Type </label>
                  <select v-model="form.loanPayType"
                  disabled name="loanPayType" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('loanPayType') }"
                  @change="interestTime()">
                      <option value="">Select One</option>
                      <option v-for="getLoanPayTypeList in getLoanPayTypeLists" 
                      :value="getLoanPayTypeList.id" > {{ getLoanPayTypeList.name }}</option>
                  </select>
                  <has-error :form="form" field="loanPayType"></has-error>
              </div>


                <div class="form-group" style="display:none;">
                 <label> Interest Time Type </label>
                  <select v-model="form.interestTimeType" 
                  @change="interestTime()"
                  name="interestTimeType" class="form-control" :class="{ 'is-invalid': form.errors.has('interestTimeType') }">
                      <option value="">Select One</option>
                      <option v-for="getInterestTimeTypeList in getInterestTimeTypeLists" 
                      :value="getInterestTimeTypeList.id" > {{ getInterestTimeTypeList.name }}</option>
                  </select>
                  <has-error :form="form" field="interestTimeType"></has-error>
              </div>

                <div class="form-group" v-if="howMuchTimeStatus">
                 <label> How much time </label>
                  <input type="text" v-model="form.howMuchTime"  
                  name="howMuchTime" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('howMuchTime') }">
                  <has-error :form="form" field="howMuchTime"></has-error>
              </div>

              <div class="form-group">
                 <label> Loan Amount </label>
                  <input type="text" v-model="form.loanMainAmount"  
                  disabled
                  name="loanMainAmount" class="form-control" 
                  @keyup.prevent="getAmount()"
                  @keyup="calculate"
                  :class="{ 'is-invalid': form.errors.has('loanMainAmount') }">
                  <has-error :form="form" field="loanMainAmount"></has-error>
                  <span v-if="invalid" style="color:red">Negative And Character Value Not Allowed</span>
              </div>

                <div class="form-group">
                 <label>   
                     <span v-for="getInterestTimeTypeList in getInterestTimeTypeLists" 
                     v-if="getInterestTimeTypeList.id==month">
                     {{ getInterestTimeTypeList.name }}
                     </span>
                      New Amount </label>
                  <input type="text" @keyup="calculate1" v-model="form.monthlyAmount"  
                  name="monthlyAmount" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('monthlyAmount') }">
                  <has-error :form="form" field="monthlyAmount"></has-error>
                  <span v-if="invalid1" style="color:red">Negative And Character Value Not Allowed</span>
              </div>
              

                <div class="form-group">
                 <label> {{paidDateText}} </label>
                  <input type="date" v-model="form.paidDate"  
                  disabled
                  name="paidDate" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('paidDate') }">
                  <has-error :form="form" field="paidDate"></has-error>
              </div>


              <div class="form-group">
                 <label> Payment Type
                      <span v-if="available_balance_cash_status" class="badge badge-primary">
                      {{form.available_balance}}
                    </span>
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

              <div v-if="bankInformationStatus">
              
              <div class="form-group">
                 <label>Bank Type Name</label>
                  <select v-model="form.bankTypeEntryId" name="bankTypeEntryId" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('bankTypeEntryId') }" 
                  @change.prevent="bankTypeIdCatch()">
                      <option value=""> Select One </option>
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
              
 

             <div class="text-right pt-3">
               <button v-if="submit_button" type="submit" class="mr-2 btn-pill btn-hover-shine btn btn-primary"
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
                </span> Update </button>
               <button v-if="insufficent_button" type="button" class="mr-2 btn-pill btn-hover-shine btn btn-danger">Submit</button>
             </div>
          </form>
        </div>
      </div>
    </div>

   


  </span>
</template>

<script>
    export default {
        data(){
            return{
                
                    paidDateText:'',
                    loading: false,
                    month:0,
                    mobile_bank_info:0,
                    agent_bank_info:0,
                    corporate_bank_info:0,
                    howMuchTimeStatus:false,
                    loanPayTypeStatus:true,
                    bankInformationStatus:0,
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
                    branchName: '',
                    accNo: '',
                    loanProviderTypeId: '',
                    loanProviderId: '',
                    interestType: '',
                    loanPayType: '',
                    howMuchTime: '',
                    loanMainAmount: '',
                    monthlyAmount: '',
                    paidDate: '',
                    paymentType: '',
                    bankTypeEntryId: '',
                    bankEntryId: '',
                    bankAccountId: '',
                    status: 1,

                    // for validation
                    available_balance: '',
                    // /for validation
                }),
                // showDataEntrys:[],
                getInterestTypeLists:[],
                getInterestTimeTypeLists:[],
                loanProviderTypeLists:[],
                loanProviderLists:[],
                getLoanPayTypeLists:[],
                showBankNames: [],
                shopBankAllDatas: [],
                corporateBankAccountTypes: [],
                mobileBankAccountTypes: [],
                loanProviderListByIds: [],
                paymentTypeLists: [],
                showBankTypeDatas:[],
                showBankNames: [],
                showBankAccounts: [],
                bankMoreInfo: [],
                invalid: false,
                invalid1:false

            }

        },
        mounted() {
            this.getData();
            this.paymentTypeList();
            this.showloanProviderType();
            this.getInterestTypeList();
            this.getInterestTimeTypeList();
            this.getLoanPayTypeList();
            this.showBankType();
        },
        methods: {
            create() {
              this.loading = true;
                this.form.put('/addReceiverLoanPay/'+this.$route.params.id).then(res => {
                  this.loading = false;
                    if (res.data.changebankName){
                        Toast.fire({
                            icon: 'error',
                            title: 'Change Your Bank Name'
                        })
                  }
                  else{
                      Toast.fire({
                          icon: 'success',
                          title: 'Loan Pay Successfully'
                      })


                        this.howMuchTimeStatus=false;
                        this.loanPayTypeStatus=true;
                        this.bankInformationStatus=0;
                        this.bankInformationAccountInfoStatus=0;

                        this.form.reset()
                        this.getData();
                  }
                }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
            },
            getData() {
                axios.get('/addReceiverLoanPay/'+this.$route.params.id+ '/edit')
                    .then(res => {
                        this.form.fill(res.data.data);
                        this.form.monthlyAmount = '';
                        this.loanProviderTypeIdCatch();
                        this.interestType();
                    })
            },
            
            showloanProviderType() {
              axios.get('/getLoanProviderTypeList').then(res => {
                    this.loanProviderTypeLists = res.data.data
                })
            },
                         calculate(e){
         
         let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) &&  this.form.loanMainAmount !== "") {
        this.invalid = true;
       
       this.form.loanMainAmount= '';
      } else {
       this.invalid = false;
       
      }
    },
                 calculate1(e){
         
         let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) &&  this.form.monthlyAmount !== "") {
        this.invalid1 = true;
       
       this.form.monthlyAmount= '';
      } else {
       this.invalid1 = false;
       
      }
    },
            getInterestTypeList() {
              axios.get('/getInterestTypeList/0').then(res => {
                    this.getInterestTypeLists = res.data.data
                })
            },
            
            getInterestTimeTypeList() {
              axios.get('/getInterestTimeTypeList').then(res => {
                    this.getInterestTimeTypeLists = res.data.data
                })
            },
            
            getLoanPayTypeList() {
              axios.get('/getLoanPayTypeList/0').then(res => {
                    this.getLoanPayTypeLists = res.data.data
                })
            },
            
            paymentTypeList() {
              axios.get('/paymentTypeList').then(res => {
                    this.paymentTypeLists = res.data.data
                })
            },
             getAmount(){
                    this.calculate_available_balance_from_amount(); 
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
                              if(this.form.loanMainAmount>this.form.available_balance)
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

              this.insufficent_cash_balance_text_status=false;
              this.insufficent_bank_balance_text_status=false;
              this.available_balance_cash_status = false;


                if(this.form.paymentType == 2){
                    this.cashInformationStatus = 0;
                    this.bankInformationStatus = 1;
                }
                else if(this.form.paymentType == 1)
                {

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
                }
                else
                {
                    this.cashInformationStatus = 0;
                    this.bankInformationStatus = 0;
                }
            },
            showBankType() {
              axios.get('/bankTypeEntryList').then(res => {
                    this.showBankTypeDatas = res.data.show
                })
            },

            showloanProviderList() {
              axios.get('/getLoanProviderList').then(res => {
                    this.loanProviderLists = res.data.data
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

            calculate_available_balance(e,type){

              this.insufficent_cash_balance_text_status = false;
              this.insufficent_bank_balance_text_status = false;
              this.insufficent_button = false;
              this.submit_button = true;
              
              // ------------- cash condition
              if(type==1){
              if(this.form.monthlyAmount>e){
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
              if(this.form.monthlyAmount>e){
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
              if(this.form.paymentType==1){
              if(this.form.monthlyAmount>this.form.available_balance){
                
                
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
              if(this.form.paymentType==2){
              if(this.form.monthlyAmount>this.form.available_balance){
                
                
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



            loanProviderTypeIdCatch() {
                
                 if(this.form.loanProviderTypeId>1){
                     axios.get('/getInterestTypeList/1').then(res => {
                    this.getInterestTypeLists = res.data.data
                })
                 }else{
                      axios.get('/getInterestTypeList/0').then(res => {
                    this.getInterestTypeLists = res.data.data
                })
                 }
                  
                axios.get('/loanProviderListById/2/'+this.form.loanProviderTypeId).then(res => {
                    //alert(this.form.loanProviderTypeId);
                    this.loanProviderListByIds = res.data.data
                })
            },

            interestType(){

                if(this.form.loanProviderTypeId==1){
                    if(this.form.interestType==1){
                        this.loanPayTypeStatus = true;
                    }else{
                        this.loanPayTypeStatus = false;
                    }
                    
                }  
                else{

                    axios.get('/getLoanPayTypeList/1').then(res => {
                    this.getLoanPayTypeLists = res.data.data
                    });
                    this.loanPayTypeStatus = true;
                }
                
            },

            interestTime(){
                this.month = this.form.interestTimeType;
                
                if(this.form.interestTimeType ==1){
                this.paidDateText = 'Paid Date';
                }
                else if(this.form.interestTimeType ==2){
                this.paidDateText = 'Weekly Day Name';
                }
                else if(this.form.interestTimeType ==3){
                this.paidDateText = 'Paid Date';
                }
                else if(this.form.interestTimeType ==3){
                this.paidDateText = 'Month Name';
                }


                if(this.form.loanPayType == 1){
                    if(this.form.loanPayType==1){
                        this.howMuchTimeStatus = true;
                    }
                    else{
                        this.howMuchTimeStatus = false;
                    }
                    
                }
                else{
                    this.howMuchTimeStatus = false;
                }
            },

            deleteBankEntry(bankId){
                axios.delete('/addBank/'+bankId)
                    .then( res=>{
                        Toast.fire({
                            icon: 'success',
                            title: 'Shop BankEntry Deleted Successfully'
                        })
                        this.getData();
                    })
            },

            changeStatus(bankId){
                axios.get('/addBank/'+bankId).then( res => {
                    Toast.fire({
                        icon: 'success',
                        title: 'Shop Bank Status Changed Successfully'
                    })
                    this.getData();
                });
            },
        }
    }
</script>
