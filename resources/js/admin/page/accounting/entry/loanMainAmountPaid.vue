<template>
   <span>
    <div class="card">
     <div class="card-header alert-info">
        <h3 style="color:black"> Loan Main Amount Pay </h3>
      </div>
      <div class="supplier-entry py-4 px-2  comm-form-back-img">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color">
           <form @submit.prevent="create()">

              <router-link :to="`/loanManagement`" class="btn btn-primary"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                Back </router-link>
              
               <div class="form-group">
                 <label> Loan Provider Type <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <select v-model="form.loanProviderTypeId" name="loanProviderTypeId" 
                  class="form-control" :class="{ 'is-invalid': form.errors.has('loanProviderTypeId') }" 
                  @change.prevent="loanProviderTypeIdCatch()">
                      <option value="">Select One</option>
                      <option v-for="loanProviderTypeList in loanProviderTypeLists" 
                      :value="loanProviderTypeList.id" > {{ loanProviderTypeList.type }}</option>
                  </select>
                  <has-error :form="form" field="loanProviderTypeId"></has-error>
              </div>

              

               <div class="form-group">
                 <label> Loan Provider <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <select v-model="form.loanProviderId" name="loanProviderId" 
                  @change="getProviderLoanInformation()"
                  class="form-control" :class="{ 'is-invalid': form.errors.has('loanProviderId') }"
                  >
                      <option value="">Select One</option>
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
                 <label> Loan  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <select v-model="form.loanProviderLoanId" name="loanProviderLoanId" 
                  @change="getProviderInformation()"
                  class="form-control" :class="{ 'is-invalid': form.errors.has('loanProviderLoanId') }"
                  >
                      <option value="">Select One</option>
                      <option v-for="loanProviderLoanListById in loanProviderLoanListByIds" 
                      :value="loanProviderLoanListById.id" > 
                      {{ loanProviderLoanListById.loanMainAmount }}
                      
                        ({{moment(loanProviderLoanListById.created_at).format("DD MMMM YYYY")}})
                      
                      </option>
                  </select>
                  <has-error :form="form" field="loanProviderLoanId"></has-error>
              </div>

                <div class="row">
                
                <div class="form-group col-md-12">
                 <label> Interest Type </label>
                  <input type="text" readonly v-model="form.interestType"
                   name="interestType" class="form-control" :class="{ 'is-invalid': form.errors.has('interestType') }">
                      
                  <has-error :form="form" field="interestType"></has-error>
                </div>

                 <div class="form-group col-12">
                 <label> Loan Pay Type </label>
                 <input type="hidden" v-model="form.loanPayTypeId">
                  <input  type="text" readonly  v-model="form.loanPayType" name="loanPayType" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('loanPayType') }"
                 > 
                  <has-error :form="form" field="loanPayType"></has-error>
              </div>


                <div class="form-group col-12">
                 <label> Interest Time Type </label>
                  <input type="text" readonly v-model="form.interestTimeType"
                  name="interestTimeType" class="form-control" :class="{ 'is-invalid': form.errors.has('interestTimeType') }">
                    
                  <has-error :form="form" field="interestTimeType"></has-error>
              </div>

                <div class="form-group col-12">
                 <label> How much time </label>
                  <input type="text" readonly v-model="form.howMuchTime"  
                  name="howMuchTime" class="form-control">
              </div>

              <div class="form-group col-12">
                 <label> Loan Amount <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <input type="text" readonly v-model="form.loanMainAmount"  
                  name="loanMainAmount" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('loanMainAmount') }">
                  <has-error :form="form" field="loanMainAmount"></has-error>
              </div>
 
                <div class="form-group col-12">
                 <label> Paid Amount </label>
                  <input type="text" readonly v-model="form.loanPaidAmount"  
                  name="paidDate" class="form-control"> 
              </div>
 
                <div class="form-group col-12">
                 <label> Due Amount </label>
                  <input type="text" readonly v-model="form.loanDueAmount"  
                  name="paidDate" class="form-control"> 
              </div>

                <div class="form-group col-12">
                 <label> {{paidDateText}} </label>
                  <input type="date" readonly v-model="form.paidDate"  
                  name="paidDate" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('paidDate') }">
                  <has-error :form="form" field="paidDate"></has-error>
              </div>

                
                <div class="form-group col-12">
                 <label>   
                     Main Amount <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <input type="text" v-model="form.installmentAmount"
                  autocomplete="off"
                  name="installmentAmount" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('installmentAmount') }"
                  @keyup.prevent="getAmount()" @keyup="calculate">
                  <has-error :form="form" field="installmentAmount"></has-error>
                  <span v-if="invalid" style="color:red">Negative And Character Value Not Allowed</span>
              </div> 

              
              <div class="form-group col-md-12">
                 <label> Payment  Type 
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
              </div>

              
              <div v-if="cashInformationStatus">
              
              <div class="form-group">
                 <label> Person Name</label>
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
                 <label>Bank Type Name</label>
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

              <div class="form-group">
                 <label> Note <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                 <textarea  v-model="form.note"  
                  name="note" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('note') }"></textarea>
                  <has-error :form="form" field="note"></has-error>
              </div>
              
 

             <div class="text-right pt-3">
               <button type="submit" v-if="submit_button" class="mr-2 btn-pill btn-hover-shine btn btn-primary"
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
               <button type="button" v-if="insufficent_button" class="mr-2 btn-pill btn-hover-shine btn btn-danger">Submit</button>
             </div>
          </form>
        </div>
      </div>
    </div>

   


  </span>
</template>

<script>

import moment from 'moment';
    export default {
        data(){
            return{
                    loading: false,
                    paidDateText:'',
                    month:0,
                    mobile_bank_info:0,
                    agent_bank_info:0,
                    corporate_bank_info:0,
                    howMuchTimeStatus:false,
                    loanPayTypeStatus:true,
                    bankInformationStatus:0,
                    cashInformationStatus:0,
                    bankInformationAccountInfoStatus:0,
                    moment: moment,

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
                    loanPayTypeId: '',
                    loanPayType: '',
                    howMuchTime: '',
                    loanMainAmount: '',
                    installmentAmount: '',
                    paidDate: '',
                    paymentType: '',
                    bankTypeEntryId: '',
                    bankEntryId: '',
                    bankAccountId: '',
                    loanProviderLoanId: '',
                    status: 1,
                    loanPaidAmount: '',
                    
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
                loanProviderLoanListByIds: [],
                paymentTypeLists: [],
                showBankTypeDatas:[],
                showBankNames: [],
                showBankAccounts: [],
                bankMoreInfo: [],
                invalid:false,
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
            this.showloanProviderList() ;
        },
        methods: {
            create() {
              this.loading = true;
                this.form.post('/addLoanMainAmountPaid').then(res => {
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
                          title: 'Loan Receive Successfully'
                      })


                        this.howMuchTimeStatus=false;
                        this.loanPayTypeStatus=true;
                        this.bankInformationStatus=0;
                        this.cashInformationStatus=0;
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
                axios.get('/addInstallment')
                    .then(res => {
                        this.shopBankAllDatas = res.data.data

                    })
            },
                   calculate(e){
         
         let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) &&  this.form.installmentAmount !== "") {
        this.invalid = true;
       
       this.form.installmentAmount= '';
      } else {
       this.invalid = false;
       
      }
    },

            getProviderInformation(){
                axios.get('/getLoanProviderInformation/'+this.form.loanProviderLoanId).then(res => {

                    this.form.interestType = res.data.interestType
                    this.form.loanPayTypeId = res.data.loanPayTypeId
                    this.form.loanPayType = res.data.loanPayType
                    this.form.interestTimeType = res.data.interestTimeType
                    this.form.howMuchTime = res.data.howMuchTime
                    this.form.loanMainAmount = res.data.loanMainAmount
                    this.form.installmentAmount = res.data.loanDueAmount
                    this.form.loanDueAmount = res.data.loanDueAmount
                    this.form.loanPaidAmount = res.data.loanPaidAmount
                    this.form.paidDate = res.data.paidDate
                    this.form.bankAccountId = res.data.bankAccountId

                })
            },
            getProviderLoanInformation(){
                axios.get('/getLoanProviderLoanInformation/0/'+this.form.loanProviderId).then(res => {

                    this.loanProviderLoanListByIds = res.data.data
                })
            },
            
            showloanProviderType() {
              axios.get('/getLoanProviderTypeList').then(res => {
                    this.loanProviderTypeLists = res.data.data
                })
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
                    
                    if(this.form.installmentAmount>this.form.loanDueAmount){
                        this.form.installmentAmount = this.form.loanDueAmount;
                    }
                    
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
            calculate_available_balance(e,type){

              this.insufficent_cash_balance_text_status = false;
              this.insufficent_bank_balance_text_status = false;
              this.insufficent_button = false;
              this.submit_button = true;
              
              // ------------- cash condition
              if(type==1){
              if(this.form.installmentAmount>e){
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
              if(this.form.installmentAmount>e){
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
              if(this.form.installmentAmount>this.form.available_balance){
                
                
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
              if(this.form.installmentAmount>this.form.available_balance){
                
                
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


            showBankType() {
              axios.get('/bankTypeEntryList').then(res => {
                    this.showBankTypeDatas = res.data.show
                })
            },

            showloanProviderList() {
              axios.get('/addLoanProvider').then(res => {
                    this.loanProviderLists = res.data.data
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
                  
                axios.get('/loanProviderListById/1/'+this.form.loanProviderTypeId).then(res => {
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
