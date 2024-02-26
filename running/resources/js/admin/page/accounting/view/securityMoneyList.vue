.<template>
   <span>
    

   <div class="card main-card  element-block-example mt-5">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Security Money List</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th> SN</th>
               <th>  Purpose  </th>
               <th> Person / Company</th>
               <th> Title </th>
               <th> Note </th>
               <th> Date </th>
               <th> Security Amount </th>
               <th> Security Return </th>
               <th> Balance </th>
               <th colspan="2" class="text-center"> Action </th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in datas">
                <td>{{ index+1 }}</td>
                
                <td> 
                  <span v-for="chartOfAccountRegister in chartOfAccountRegisters" 
                      v-if="data.expensePurpous==chartOfAccountRegister.headCode"
                      > 
                      {{ chartOfAccountRegister.headName }} 
                  </span>
                </td>
                <td> 
                  <span v-for="expenseCompanyList in expenseCompanyLists" 
                      :value="expenseCompanyList.id" 
                      v-if="data.expenseCompany==expenseCompanyList.id"
                      >
                      {{ expenseCompanyList.companyName }} 
                      <br>
                      {{ expenseCompanyList.mobileNo }} 
                  </span>
                   
                   </td>
                <td> {{ data.expenseTitle }} </td>
                <td> {{ data.note }} </td>
                <td> {{ moment(data.created_at).format('DD MMMM YYYY') }} </td>
                <td>
                        <span v-if="data.type==1">
                             {{ data.mainSecurityAmount }}
                        </span>
                        <span v-else="">
                             {{ data.mainSecurityAmount }}
                        </span>
                     </td> 
                    <td> 
                        <span v-if="data.totalReturnAmount>0">
                            {{ data.totalReturnAmount }}
                        </span>
                        <span v-else="">
                            0
                        </span>
                        </td> 
                    <td> {{ data.dueAmount }}</td> 
                <td>
                    <router-link :to="`/viewSecurityMoneyWithdraw${data.expensePurpous}`" class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine">
                    View </router-link>
                  </td>
                <td>
                    <router-link :to="`/securityMoneyWithdraw${data.id}`" class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine">
                    Withdraw/Adjust </router-link>
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
                    chartOfAccountRegisters:[],
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
                
            }

        },
        mounted() {

            this.getData();
            this.expenseTypeList();
            this.expenseCompanyList();
            this.getexpenseHeadList();
            this.chartOfAccount();
            this.chartOfAccountRegister();
            this.expensePurposeListViews();

            this.paymentTypeList(); 
            this.showBankType();

        },
        methods: {
            create() {
                this.form.post('/addSecurityMoney').then(res => {
                   
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
                })
            },
            chartOfAccountRegister() {
              axios.get('/chartOfAccountRegister').then(res => {
                    this.chartOfAccountRegisters = res.data.chartOfAccounts
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
