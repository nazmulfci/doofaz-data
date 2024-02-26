.<template>
   <span>
    <div class="card">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black"> Security Money Withdraw/Adjustment </h3>
      </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">


            <table class="table table-bordered">
                <tr>
                    <th>
                        Purpose
                    </th>
                    <td> 
                        <span v-for="expensePurposeListView in expensePurposeListViews" 
                      :value="expensePurposeListView.id" 
                      v-if="datas.expensePurpous==expensePurposeListView.accountCodeSecurityDeposit"
                      > 
                      {{ expensePurposeListView.expensePurpous }} 
                  </span>
                  
                   </td>
                </tr>

                <tr>
                    <th>
                        Person / Company
                    </th>
                    <td> 
                        <span v-for="expenseCompanyList in expenseCompanyLists" 
                      :value="expenseCompanyList.id" 
                      v-if="datas.expenseCompany==expenseCompanyList.id"
                      >
                      {{ expenseCompanyList.companyName }} 
                      <br>
                      {{ expenseCompanyList.mobileNo }} 
                  </span>
                   </td>
                </tr>

                <tr>
                    <th>
                        Title
                    </th>
                    <td>

                        <input type="hidden" v-model="form.expenseType">

                        <input type="hidden" v-model="form.expenseHead">

                        <input type="hidden" v-model="form.expensePurpous">

                        <input type="hidden" v-model="form.expenseTitle">
                        <input type="hidden" v-model="form.expenseCode">
                        <input type="hidden" v-model="form.expenseTargetAmount">
                        

                         {{ datas.expenseTitle }} </td> 
                </tr>

                <tr>
                    <th>
                        Security Amount
                    </th>
                    <td> {{ datas.mainSecurityAmount }} </td> 
                </tr>
            </table>

          <form @submit.prevent="create()" class="mt-3">

           
              
               <div class="form-group" v-if="">
                 <label> Return Type  </label>

                <select
                v-model="form.returnType"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('returnType') }"
                @change="withdrawAdjustment()"
              >
                <option value=""> Select </option>
                <option value="1"> Withdraw </option>
                <option value="2"> Adjustment </option>
              </select>
              <has-error :form="form" field="returnType"></has-error>
              </div> 

                

                <div v-if="withdrawAdjustmentStatus">
                <div class="form-group">
                 <label> Security Amount </label>
                  <input type="number" readonly v-model="form.expenseAmount"  
                  name="expenseAmount" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('expenseAmount') }">
                  <has-error :form="form" field="expenseAmount"></has-error>
                </div>
                

                <div class="form-group" v-if="expenseTitleStatus">
                 <label> Expense Title </label>
                  <input type="text" v-model="form.expenseTitle" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('expenseTitle') }">
                  <has-error :form="form" field="expenseTitle"></has-error>
                </div>

                <div class="form-group">
                 <label> {{receiveAmountText}} Amount </label>
                  <input type="number" v-model="form.receiveAmount"  
                  name="receiveAmount" class="form-control"
                  min="1"
                  @keyup.prevent="getAmount()"
                  :max="securityAmountForShow"
                  :class="{ 'is-invalid': form.errors.has('receiveAmount') }">
                  <has-error :form="form" field="receiveAmount"></has-error>
                </div>

                
              
 <!-- ========================= payment option  -->

                <div class="form-group" v-if="payment_type_status">
                    <label> Payment Type </label>
                    <select v-model="form.paymentType" 
                    @change="paymentReceiveType()"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('paymentType') }">
                        <option value=""> Select Payment Type </option>
                        <option v-for="paymentTypeList in paymentTypeLists" 
                        :value="paymentTypeList.id" > {{ paymentTypeList.paymentType }}</option>
                    </select>
                    <has-error :form="form" field="paymentType"></has-error>
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
                 <label>Bank Account</label>
                  <select v-model="form.bankAccountId" name="bankAccountId" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('bankAccountId') }"
                  @change="getBankMoreInfo()"
                  >
                      <option value="">Select Bank Account</option>
                      <option v-for="showBankAccount in showBankAccounts" :value="showBankAccount.bankId" > 
                          {{ showBankAccount.bankAccountNumber }}</option>
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

 <!-- ========================= payment option  -->

                <div class="form-group">
                 <label> Note </label>
                  <textarea type="text" v-model="form.note" 
                  name="note" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('note') }"></textarea>
                  <has-error :form="form" field="note"></has-error>
                </div>
 

             <div class="text-right pt-3">
               <button type="submit" class="mr-2 btn-pill btn-hover-shine btn btn-primary"
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
             </div>
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
                    expenseTypeLists: [],
                    loading: false,
                    expenseHeadListByIds: [],
                    expenseHeadLists: [],
                    paidDateText:'',
                    receiveAmountText:'',
                    totalAmountText:'',
                    
                    payment_type_status:1,
                    minimumAmount:0,
                    expenseTitleStatus:0,
                    securityAmountForShow:0,
                    withdrawAdjustmentStatus:0,
                    expenseCompanyLists:[],
                    datas:[],
                    chartOfAccounts:[],
                    expensePurposeLists:[],
                    expenseDetailsLists:[],

                    bankInformationStatus:0,
                    cashInformationStatus:0,
                    bankInformationAccountInfoStatus:0,


                form: new Form({
                  rendomNumber:Math.random(1,1000),
                    returnType: '',
                    item: '',
                    itemAmount: '',
                    expenseHead: '',
                    expenseType: '',
                    expenseAmount: '',
                    expenseCompany: '',
                    expensePurpous: '',
                    expenseTitle: '',
                    expenseCode: '',
                    expenseTargetAmount: '',
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
                expensePurposeListViews: [],
                expenseHaveStatus: 0,
                
            }

        },
        mounted() {

            this.getData();
            this.expenseTypeList();
            this.expenseCompanyList();
            this.getexpenseHeadList();
            this.chartOfAccount();
            this.expensePurposeListView();

            this.paymentTypeList(); 
            this.showBankType();

        },
        methods: {
            create() {
                this.loading = true;
                this.form.post('/addSecurityMoneyWithdraw').then(res => {
                    this.loading = false;
                   
                      Toast.fire({
                          icon: 'success',
                          title: 'Entry Successfully'
                      })
 
                        this.withdrawAdjustmentStatus=0
                        this.form.reset()
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
            calculateAmount(id){
                this.form.dueAmount = this.form.expenseAmount-(this.form.cashAmount+this.form.bankAmount)
            },
            paymentTypeList() {
              
            },
            showBankType() {
              
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

              axios.get('/bankTypeEntryList').then(res => {
                    this.showBankTypeDatas = res.data.show
                })



                if(this.form.paymentType == 2){
                    this.form.bankAmount = this.form.expenseAmount;
                    this.form.cashAmount = '';
                    this.bankInformationStatus = 1;
                    this.cashInformationStatus = 0;
                }
                else if(this.form.paymentType == 1)
                {
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
                }
            },





            expenseTypeList(){
                let uri = `expenseTypeList`;
                axios.get(uri).then(response=>{
                    this.expenseTypeLists = response.data.data;
                })
            },
            getData() {
                axios.get('getSecurityMoneyInfoById/'+this.$route.params.id)
                    .then(res => {
                        this.datas = res.data.data
                        this.securityAmountForShow = res.data.balance
                        this.form.expenseAmount = res.data.balance
                        this.form.expenseType = res.data.data.expenseType
                        this.form.expenseHead = res.data.data.expenseHead
                        this.form.expensePurpous = res.data.data.expensePurpous
                        this.form.expenseTitle = res.data.data.expenseTitle
                        this.form.expenseCode = res.data.expenseCode
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
              axios.get('/getExpensePurposeListById/'+this.form.expenseHead).then(res => {
                    this.expensePurposeLists = res.data.data
                })
            },
            
            expensePurposeListView() {
              
            },
            getAmount(){
                if(this.form.receiveAmount>this.form.expenseTargetAmount){
                        this.form.receiveAmount = this.form.expenseTargetAmount
                    }else{
                if(this.form.receiveAmount>this.form.expenseAmount){
                    this.form.receiveAmount = this.form.expenseAmount
                }else{
                    this.form.receiveAmount = this.form.receiveAmount
                }
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
                }),

                axios.get('/paymentTypeList').then(res => {
                    this.paymentTypeLists = res.data.data
                })
            },
            withdrawAdjustment() {

                if(this.form.returnType==2){

                axios.get('/checkSecurityExpenseInStatement/'+this.form.expensePurpous).then(res => {
                    
                    if(res.data.status==1){

                        this.withdrawAdjustmentStatus=1
                        this.form.expenseAmount = this.securityAmountForShow
                        
                        axios.get('/checkBalance/'+this.form.expenseCode).then(res => {
                        this.form.expenseTargetAmount = Math.abs(res.data.available_balance)
                        });

                        this.minimumAmount=this.securityAmountForShow
                        
                        this.payment_type_status=0
                        this.expenseTitleStatus=1
                        this.form.expenseTitle = '';
                        this.receiveAmountText='Adjustment';
                    }
                    else{
                        this.withdrawAdjustmentStatus=0
                        Toast.fire({
                            icon: 'error',
                            title: 'Please expense entry for security adjust.'
                        })
                    }
                    
                });

                }
                else if(this.form.returnType==1){

                    this.withdrawAdjustmentStatus=1
                    this.form.expenseAmount = this.securityAmountForShow
                    this.form.expenseTargetAmount = this.securityAmountForShow
                    this.minimumAmount=this.securityAmountForShow

                    this.payment_type_status=1
                    this.expenseTitleStatus=0
                    this.form.expenseTitle = this.datas.expenseTitle
                    this.receiveAmountText='Withdraw';
                }
                else{
                    this.withdrawAdjustmentStatus=0
                }

               
               
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
