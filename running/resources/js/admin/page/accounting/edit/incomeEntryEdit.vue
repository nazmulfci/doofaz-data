.<template>
   <span>
    <div class="card">
      
       <div class="card-header alert-info">
          <h3>
            <router-link :to="`/incomeExpense`"
             class="btn btn btn-outline-primary btn-shadow  btn-hover-shine"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg> </router-link> Income Entry Edit</h3>
      </div>


      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
          <form @submit.prevent="create()">
            <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color">
 
               <div class="form-group" style="display:none;">
                 <label> Income Type  
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>

                 <input type="hidden" v-model="form.rendomNumber">
                   <select
                v-model="form.incomeType"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('incomeType') }"
                @change="getincomeHead()"
              >
                <option value=""> Select </option>
                <option v-for="incomeTypeList in incomeTypeLists" 
                :value="incomeTypeList.headCode"> {{incomeTypeList.headName}} </option> 
              </select>
              <has-error :form="form" field="incomeType"></has-error>
              </div> 

               <div class="form-group" style="display:none;">
                 <label> Income Head 
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>
                  <select v-model="form.incomeHead" name="incomeHead" 
                  class="form-control" :class="{ 'is-invalid': form.errors.has('incomeHead') }"
                  @change="incomePurposeList()"
                  >
                      <option value="">Select One</option>
                      <option v-for="incomeHeadListById in incomeHeadListByIds" 
                      :value="incomeHeadListById.id" > 
                      {{ incomeHeadListById.name }} 
                      </option>
                  </select>
                  <has-error :form="form" field="incomeHead"></has-error>
              </div>


                
              <div class="form-group">
                 <label> Income Purpose 
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>
                  <select disabled  v-model="form.incomePurpous" 
                  name="incomePurpous" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('incomePurpous') }"
                  @change.prevent="getExpenseBudget()"
                  >
                    <option value="">Select One</option>
                      <option v-for="incomePurposeList in incomePurposeLists" 
                      :value="incomePurposeList.id" >
                      {{incomePurposeList.incomePurpous}}

                       <span v-for="incomeCompanyList in incomeCompanyLists" 
                      :value="incomeCompanyList.id" 
                      v-if="incomePurposeList.incomeProviderId==incomeCompanyList.id"
                      > 
                       ({{ incomeCompanyList.companyName }})
                    </span>
                      </option>
                  </select>
                  <has-error :form="form" field="incomePurpous"></has-error>
              </div>

               



                <div class="form-group">
                 <label> Income Title </label>
                  <input type="text" disabled v-model="form.incomeTitle"  
                  name="incomeTitle" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('incomeTitle') }">
                  <has-error :form="form" field="incomeTitle"></has-error>
                </div>

                <div class="form-group">
                 <label> Income Target </label>
                  <input type="text" readonly v-model="form.target"  
                  name="target" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('address') }">
                  <has-error :form="form" field="address"></has-error>
              </div>
              
                <div class="form-group">
                 <label> Income Amount 
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>

                  <input type="hidden" v-model="form.incomeAmount2"></input>

                  <input type="text" min="0" v-model="form.incomeAmount1"
                  name="incomeAmount" class="form-control" 
                  autocomplete="off"
                  @keyup.prevent="getAmount()"
                  @keyup="calculate"
                  @change="getAmount()"
                  :class="{ 'is-invalid': form.errors.has('incomeAmount') }">
                  <has-error :form="form" field="incomeAmount"></has-error>
                    <span v-if="invalid" style="color:red">Negative And Character Value Not Allowed </span>
                </div>

                
              
 <!-- ========================= payment option  -->

                <div class="form-group" style="display:none;">
                    <label> Payment Type  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>
                    <select v-model="form.paymentType" 
                    @change="paymentReceiveType()"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('paymentType') }">
                        <option value=""> Select Payment Type </option>
                        <option value="1"> Cash </option>
                        <option value="2"> Bank </option>
                        <option value="3"> Due </option>
                        <option v-for="paymentTypeList in paymentTypeLists" 
                        :value="paymentTypeList.id" > {{ paymentTypeList.paymentType }}</option>
                    </select>
                    <has-error :form="form" field="paymentType"></has-error>
                </div>
           

              
              <div v-if="cashInformationStatus">
              
              <div class="form-group">
                 <label> Cash Amount </label>
                 <input type="number" v-model="form.cashAmount"  min="0"
                 autocomplete="off"
                 @keyup="calculateAmount(1)" 
                  name="cashAmount" class="form-control" 
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
                 <label> Bank Amount </label>
                 <input type="number" v-model="form.bankAmount"  min="0"
                 @keyup="calculateAmount(2)" 
                 autocomplete="off"
                  name="bankAmount" class="form-control" 
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
                 <label>Bank Account</label>
                  <select v-model="form.bankAccountId" name="bankAccountId" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('bankAccountId') }"
                  @change="getBankMoreInfo()"
                  >
                      <option value="">Select Bank Account</option>
                      <option v-for="showBankAccount in showBankAccounts" :value="showBankAccount.bankId" > {{ showBankAccount.bankAccountNumber }}</option>
                  </select>
                  <has-error :form="form" field="bankAccountId"></has-error>
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

 <!-- ========================= payment option -->

                <div class="form-group">
                    <label> Due Amount </label>
                    <input type="number" readonly v-model="form.dueAmount"  
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

        <!-- ----------------------------- card footer -->
 
<div class="d-block p-0 pt-3 pb-4 card-footer overflow-hidden">
<div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">


                                <button type="reset" class="btn-pill btn-shadow btn btn-outline-danger btn-lg float-left">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-undo "></i>
                                    </span>
                                    <span class="mr-1"> Clear </span>
                                </button>

                                <button type="submit" class="btn-pill btn-shadow btn btn-primary btn-lg float-right btn-hover-shine"
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
    </div>


  </span>
</template>

<script>
    export default {
        data(){
            return{
                    loading: false,
                    incomeTypeLists: [],
                    incomeHeadListByIds: [],
                    incomeHeadLists: [],
                    paidDateText:'',
                    totalAmountText:'',
                    
                    totalAmountRowStatus:0,
                    incomeCompanyLists:[],
                    datas:[],
                    chartOfAccounts:[],
                    incomePurposeLists:[],
                    incomeDetailsLists:[],

                    bankInformationStatus:0,
                    cashInformationStatus:0,
                    bankInformationAccountInfoStatus:0,


                form: new Form({
                    rendomNumber:Math.random(1,1000),
                    item: '',
                    itemAmount: '',
                    incomeHead: '',
                    incomeType: '',
                    incomeAmount: '',
                    incomeAmount1: '',
                    incomeAmount2: '',
                    incomeCompany: '',
                    incomePurpous: '',
                    incomeTitle: '',
                    mobileNo: '',
                    email: '',
                    address: '',
                    target: '',
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
                invalid:false,
                       invalidBank:false,
                invalidCash:false,
                
            }

        },
        mounted() {
            this.view();
            this.getData();
            this.incomeTypeList();
            this.incomeCompanyList();
            this.getincomeHeadList();
            this.chartOfAccount();
            this.incomePurposeListView();

            this.paymentTypeList(); 

        },
        methods: {
               view() {
        let uri = `addIncome/${this.$route.params.id}/edit`;
        axios.get(uri).then((response) => {
            this.form.fill( response.data.data);
            this.form.incomeAmount1 = response.data.data.incomeAmount;
            this.form.incomeAmount = response.data.data.incomeAmount;
            this.accountSetupHeadNameLists = response.data.accountSetupHeadNameList;
        });

      },
            create() {
              this.loading = true;
                axios.put(`addIncome/${this.$route.params.id}`, this.form).then(res => {
                   this.loading = false;

                      Toast.fire({
                          icon: 'success',
                          title: 'Update Successfully'
                      })
 
                        this.form.reset()
                        this.$router.push('incomeEntry');
                 
                }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
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
                
              }
              else if(id==2){
                   
                  let dueAmount = this.form.incomeAmount-this.form.bankAmount
                    if(dueAmount>=0){
                        this.form.dueAmount = this.form.incomeAmount-this.form.bankAmount
                    }else{
                      this.form.dueAmount = 0
                      this.form.bankAmount = this.form.incomeAmount
                    }
                

              }
              
            },
            paymentTypeList() {
              axios.get('/paymentTypeList').then(res => {
                    this.paymentTypeLists = res.data.data
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
                })
            },

            paymentReceiveType(){
                if(this.form.paymentType == 2)
                {
                    this.form.cashAmount='';
                    this.form.dueAmount=0;
                    this.form.bankAmount=this.form.incomeAmount;
                    this.bankInformationStatus = 1;
                    this.cashInformationStatus = 0;
                }
                else if(this.form.paymentType == 1)
                {
                  this.form.dueAmount=0;
                  this.form.cashAmount=this.form.incomeAmount;
                    this.form.bankAmount='';
                    this.cashInformationStatus = 1;
                    this.bankInformationStatus = 0;
                }
                else
                {
                  this.form.dueAmount=this.form.incomeAmount;
                  this.form.cashAmount='';
                    this.form.bankAmount='';
                    this.cashInformationStatus = 0;
                    this.bankInformationStatus = 0;
                }
            },





            incomeTypeList(){
                let uri = `incomeTypeList`;
                axios.get(uri).then(response=>{
                    this.incomeTypeLists = response.data.data;
                    this.form.incomeType = response.data.incomeType;

                    axios.get('/getIncomeHeadList/'+this.form.incomeType).then(res => {
                    this.incomeHeadListByIds = res.data.data
                    this.form.incomeHead = res.data.id;
                    this.incomePurposeList();

                })
                })
            },
            getData() {
                axios.get('/addIncome')
                    .then(res => {
                        this.datas = res.data.data

                    }),

                     axios.get('/bankTypeEntryList').then(res => {
                    this.showBankTypeDatas = res.data.show
                })
                // this.incomeTypeList()
            },
            
            incomeCompanyList() {
              axios.get('/addIncomeExpenseCompany').then(res => {
                    this.incomeCompanyLists = res.data.data
                })
            },
            
            incomePurposeList() {
              axios.get('/getIncomePurposeListById/'+this.form.incomeHead).then(res => {
                    this.incomePurposeLists = res.data.data
                })
            },
            
            incomePurposeListView() {
              axios.get('/addIncomeProvider/').then(res => {
                    this.incomePurposeListViews = res.data.data
                })
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
            getAmount(){

                    this.form.incomeAmount2 = this.form.incomeAmount-this.form.incomeAmount1;

                    // this.form.dueAmount = this.form.incomeAmount
                    // if(this.form.paymentType==1){
                    //   this.form.cashAmount = this.form.incomeAmount
                    //   this.form.dueAmount = this.form.incomeAmount-this.form.cashAmount
                    // }
                    // else if(this.form.paymentType==2){
                    //   this.form.bankAmount = this.form.incomeAmount
                    //   this.form.dueAmount = this.form.incomeAmount-this.form.bankAmount
                    // }
                    // else if(this.form.paymentType==3){
                    //   this.form.dueAmount = this.form.incomeAmount
                    // }
            },
            getDetailsData(){
                this.getincomeDetailsList(this.form.incomePurpous);
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
              +this.form.incomePurpous+'/'
              +this.form.item+'/'
              +this.form.itemAmount).then(res => {
                    if(res.data.status){
                    Toast.fire({
                            icon: 'success',
                            title: 'Item Add Successfull'
                        })

                        this.form.item = '',
                        this.form.itemAmount=''
                        this.getincomeDetailsList(this.form.incomePurpous);
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
                        this.getincomeDetailsList(this.form.incomePurpous);
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
                        
            getExpenseBudget() {
              axios.get('/getIncomeExpenseBudget/2/'+this.form.incomePurpous).then(res => {
                    this.form.target = res.data.data
                })
            },
             
            getincomeHeadList() {
              axios.get('/addIncomeType/').then(res => {
                    this.incomeHeadLists = res.data.data
                })
            },
            getIncomeExpenseCompanyInfo() {
              axios.get('/getIncomeExpenseCompanyIncome/'+this.form.incomePurpous).then(res => {
                    this.form.mobileNo = res.data.data.mobileNo
                    this.form.email = res.data.data.email
                    this.form.address = res.data.data.address
                    this.form.target = res.data.target
                })
            },

            deleteData(id){
                axios.delete('/addIncome/'+id)
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
