.<template>
   <span>
    <div class="card">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black"> Expense Budget </h3>
      </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form @submit.prevent="create()">

          
              
               <div class="form-group">
                 <label> Expense Type  </label>

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
                 <label> Expense Head </label>
                  <select v-model="form.expenseHead" name="expenseHead" 
                  class="form-control" :class="{ 'is-invalid': form.errors.has('expenseHead') }"
                  @change="expensePurposeList()"
                  >
                      <option value="">Select One</option>
                      <option v-for="expenseHeadListById in expenseHeadListByIds" 
                      :value="expenseHeadListById.id" > 
                      {{ expenseHeadListById.name }} 
                      </option>
                  </select>
                  <has-error :form="form" field="expenseHead"></has-error>
              </div>


                
              <div class="form-group">
                 <label> Expense Purpose </label>
                  <select type="text" v-model="form.expensePurpous"  
                  name="expensePurpous" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('expensePurpous') }"
                  @change="getIncomeExpenseCompanyInfo()"
                  >
                    <option value="">Select One</option>
                      <option v-for="expensePurposeList in expensePurposeLists" 
                      :value="expensePurposeList.id" > 
                      {{ expensePurposeList.expensePurpous }} 

                       <span v-for="expenseCompanyList in expenseCompanyLists" 
                      :value="expenseCompanyList.id" 
                      v-if="expensePurposeList.expenseProviderId==expenseCompanyList.id"
                      > 
                       ({{ expenseCompanyList.companyName }})
                    </span>
                      </option>
                  </select>
                  <has-error :form="form" field="expensePurpous"></has-error>
              </div>


               <div class="form-group">
                 <label> Target Type </label>
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
                 <label> Badget Amount </label>
                  <input type="number" v-model="form.expenseAmount"  
                  name="expenseAmount" class="form-control" 
                  @keyup="getAmount()"
                  :class="{ 'is-invalid': form.errors.has('expenseAmount') }">
                  <has-error :form="form" field="expenseAmount"></has-error>
                </div>

                  
                <div class="form-group">
                 <label> Note </label>
                  <textarea type="text" v-model="form.note"  
                  name="note" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('note') }"></textarea>
                  <has-error :form="form" field="note"></has-error>
                </div>
 

             <div class="text-right pt-3">
               <button type="submit" class="mr-2 btn-pill btn-hover-shine btn btn-primary">Submit</button>
             </div>
          </form>
        </div>
      </div>
    </div>

   <div class="card main-card  element-block-example mt-5">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Expense Budget List</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th> SN</th>
               <th>  Expense Purpose  </th>
               <th> Person / Company</th>
               <th> Budget Type </th>
               <th> Amount </th> 
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
                      v-if="data.expensePurpous==expensePurposeListView.id"
                      > 
                      {{ expensePurposeListView.expensePurpous }} 
                  </span>
                </td>
                <td> 
                  <span v-for="expenseCompanyList in expenseCompanyLists" 
                      :value="expenseCompanyList.id" 
                      v-if="data.expenseCompanyId==expenseCompanyList.id"
                      >
                      {{ expenseCompanyList.companyName }} 
                      <br>
                      {{ expenseCompanyList.mobileNo }} 
                  </span>
                   
                   </td>
                <td> {{ moment(data.fromDate).format('DD MMMM YYYY') }} 
                    <span v-if="data.toDate"> <br> to <br> {{ moment(data.toDate).format('DD MMMM YYYY') }} </span> </td>
                
                <td> {{ data.expenseAmount }} </td> 
                
                <td> {{ data.note }} </td>
                 
                <td>
                   <button type="button" @click="deleteData(data.id)" class="btn btn-hover-shine btn-danger"><i class=" fa fa-trash"></i>Delete</button>
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
                    interestTimeType: '',
                    mobileNo: '',
                    email: '',
                    address: '',
                    fromDate: '',
                    toDate: '',
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
                interestTimeTypeLists: [],
                
            }

        },
        mounted() {

            this.getData();
            this.expenseTypeList();
            this.expenseCompanyList();
            this.getexpenseHeadList();
            this.chartOfAccount();
            this.expensePurposeListViews();

            this.paymentTypeList(); 
            this.showBankType();

        },
        methods: {
            create() {
                this.form.post('/addExpenseBudget').then(res => {
                   
                      Toast.fire({
                          icon: 'success',
                          title: 'Entry Successfully'
                      })
 

                        this.form.reset()
                        this.form.rendomNumber = Math.random(1,1000)
                        this.getData();
                        this.getExpenseDetailsList(0);
                 
                });
            },
            calculateAmount(id){
                this.form.dueAmount = this.form.expenseAmount-(this.form.cashAmount+this.form.bankAmount)
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





            expenseTypeList(){
                let uri = `expenseTypeList`;
                axios.get(uri).then(response=>{
                    this.expenseTypeLists = response.data.data;
                })
            },
            getData() {
                axios.get('/addExpenseBudget')
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
              axios.get('/getExpensePurposeListById/'+this.form.expenseHead).then(res => {
                    this.expensePurposeLists = res.data.data
                })
            },
            
            expensePurposeListViews() {
              
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
                }),
                axios.get('/getInterestTimeTypeList').then(res => {
                    this.getInterestTimeTypeLists = res.data.data
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
                axios.delete('/addExpenseBudget/'+id)
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
