.<template>
   <span>
    <div class="card">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black"> Bill Pay & Receive </h3>
      </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form @submit.prevent="create()">

          
              
               <div class="form-group">
                 <label> Type  </label>

                 <input type="hidden" v-model="form.rendomNumber">
                   <select
                v-model="form.type"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('type') }"
                @change="getCompanyByTypes()"
              >
                <option value=""> Select </option> 
                <option value="1"> Bill Pay </option> 
                <option value="2"> Bill Receive </option> 
              </select>
              <has-error :form="form" field="type"></has-error>
              </div> 
  
              <div class="form-group">
                 <label> From </label>
                  <select type="text" v-model="form.companyId"  
                  name="companyId" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('companyId') }"
                  @change="getIncomeExpenseCompanyInfo()"
                  >
                    <option value="">Select One</option>
                      <option v-for="companyList in companyLists" 
                      :value="companyList.id"> 
                      {{ companyList.companyName }} 
 
                      </option>
                  </select>
                  <has-error :form="form" field="companyId"></has-error>
              </div>

                <div class="form-group">
                 <label> Mobile No </label>
                  <input type="text" readonly v-model="form.mobileNo"  
                  name="mobileNo" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('mobileNo') }">
                  <has-error :form="form" field="mobileNo"></has-error>
              </div>

                <div class="form-group">
                 <label> Email </label>
                  <input type="text" readonly v-model="form.email"  
                  name="email" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('email') }">
                  <has-error :form="form" field="email"></has-error>
              </div>

                <div class="form-group">
                 <label> Address </label>
                  <input type="text" readonly v-model="form.address"  
                  name="address" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('address') }">
                  <has-error :form="form" field="address"></has-error>
              </div>

                <div class="form-group">
                 <label> Balance </label>
                  <input type="text" readonly v-model="form.lastBalance"  
                  name="lastBalance" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('lastBalance') }">
                  <has-error :form="form" field="lastBalance"></has-error>
              </div>
 

                <div class="form-group">
                 <label>  Amount </label>
                  <input type="text" v-model="form.amount"  
                  name="amount" class="form-control" min="0"
                  @change="getAmount()" @keyup="calculate"
                  :class="{ 'is-invalid': form.errors.has('amount') }">
                  <has-error :form="form" field="amount"></has-error>
                  <span v-if="invalid" style="color:red">Negative And Character Value Not Allowed</span>
                </div>

             
              
 <!-- ========================= payment option  -->

                <div class="form-group">
                    <label> Payment  Type </label>
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
                      <option v-for="showBankTypeData in showBankTypeDatas" 
                      :value="showBankTypeData.bankTypeEntryId" > 
                      {{ showBankTypeData.bankTypeEntryName }}</option>
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
                 <label> Account No</label>
                  <select v-model="form.bankAccountId" name="bankAccountId" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('bankAccountId') }"
                  @change="getBankMoreInfo()"
                  >
                      <option value="">Select Bank Account</option>
                      <option v-for="showBankAccount in showBankAccounts"
                       :value="showBankAccount.bankId" > 
                       <span v-if="showBankAccount.bankAccountName">
                       {{ showBankAccount.bankAccountName }} </span>
                       
                       <span v-else>
                       {{ showBankAccount.bankAccountNumber }} </span>
                       
                       </option>
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
          </form>
        </div>
      </div>
    </div>

   <div class="card main-card  element-block-example mt-5">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Expense List</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th> SN</th>
               <th>  Expense Purpose  </th>
               <th> Person / Company</th>
               <th> Title </th>
               <th> Amount </th>
               <th> Due </th>
               <th> Note </th>
               <th> Delete </th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in datas">
                <td>{{ index+1 }}</td>
                
                <td> 
                  <span v-for="expensePurposeListView in expensePurposeListViews" 
                      :value="expensePurposeListView.id" 
                      v-if="data.expenseHead==expensePurposeListView.type"
                      > 
                      {{ expensePurposeListView.expensePurpous }} 
                  </span>
                </td>
                <td> 
                  <span v-for="expenseCompanyList in expenseCompanyLists" 
                      :value="expenseCompanyList.id" 
                      v-if="data.expensePurpous==expenseCompanyList.type"
                      >
                      {{ expenseCompanyList.companyName }} 
                      <br>
                      {{ expenseCompanyList.mobileNo }} 
                  </span>
                   
                   </td>
                <td> {{ data.expenseTitle }} </td>
                <td> {{ data.expenseAmount }} </td>
                <td> {{ data.dueAmount }} </td>
                
                <td> {{ data.note }} </td>
                 
                <td>
                    <router-link :to="`/expenseInvoiceView${data.id}`" class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"><i class=" fa fa-eye mr-1"></i> View</router-link>
                  </td>
              </tr>
            </tbody>
         </table>
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
                    getCompanyByType: [],
                    paidDateText:'',
                    totalAmountText:'',
                    
                    totalAmountRowStatus:0,
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

                    lastBalance: '',
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
            this.expensePurposeListViews();
 

        },
        methods: {
            create() {
                this.loading = true;
                this.form.post('/addBillPaymentReceive').then(res => {
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
                  calculate(e){
         
         let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) &&  this.form.amount !== "") {
        this.invalid = true;
       
       this.form.amount= '';
      } else {
       this.invalid = false;
       
      }
    },
            calculateAmount(id){
                this.form.dueAmount = this.form.expenseAmount-(this.form.cashAmount+this.form.bankAmount)
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
            
            expensePurposeListViews() {
              axios.get('/addExpenseProvider/').then(res => {
                    this.expensePurposeListViews = res.data.data
                })
            },
            getAmount(){
                    let enterAmount =  this.form.lastBalance-this.form.amount;
                    // alert(enterAmount);
                    // if(this.form.type==2){
                    if(enterAmount>=0){
                      this.form.dueAmount = this.form.lastBalance-this.form.amount;
                    }
                    else{
                      this.form.dueAmount = 0;
                      this.form.amount = this.form.lastBalance;
                    }
                    // }
                    
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
              axios.get('getIncomeExpenseCompanyFrom/'+this.form.companyId).then(res => {
                    this.form.mobileNo = res.data.data.mobileNo
                    this.form.email = res.data.data.email
                    this.form.address = res.data.data.address
                })
              axios.get('getIncomeExpenseCompanyLastBalance/'+this.form.companyId).then(res => {
                    this.form.lastBalance = res.data.balance
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
