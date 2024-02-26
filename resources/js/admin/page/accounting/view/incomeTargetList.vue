.<template>
   <span>
    

   <div class="card main-card  element-block-example mt-5">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black"> Target Or Budget List</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th> SN</th>
               <th> Target Or Budget  </th> 
               <th> Target Type </th>
               <th> Date </th>
               <th> Target Amount </th>
               <th> Note </th> 
             </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in datas">
                <td>{{ index+1 }}</td>
                
                <td> 
                  <span v-for="chartOfAccountRegister in chartOfAccountRegisters" 
                      v-if="data.subHead==chartOfAccountRegister.headCode"
                      > 
                      {{ chartOfAccountRegister.headName }} 
                  </span>
                </td>
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
                 
                
              </tr>
              <tr>
                  <th colspan="4"> <span  class="float-right"> Total </span> </th>
                  <th> {{totalTarget}} </th>
                  <td>  </td>
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
                    incomeTypeLists: [],
                    incomeHeadListByIds: [],
                    incomeHeadLists: [],
                    paidDateText:'',
                    totalAmountText:'',
                    
                    totalTarget:0,
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
                    incomeHead: '',
                    incomeType: '',
                    incomeAmount: '',
                    incomeCompany: '',
                    incomePurpous: '',
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
                
            }

        },
        mounted() {

            this.getData();
            this.incomeTypeList();
            this.incomeCompanyList();
            this.getincomeHeadList();
            this.chartOfAccount();
            this.incomePurposeListViews();

            this.paymentTypeList(); 
            this.showBankType();
            this.getInterestTimeTypeList();

        },
        methods: {
            create() {
                this.form.post('/addIncomeTarget').then(res => {
                   
                      Toast.fire({
                          icon: 'success',
                          title: 'Entry Successfully'
                      })
 

                        this.form.reset()
                        this.form.rendomNumber = Math.random(1,1000)
                        this.getData();
                        this.getincomeDetailsList(0);
                 
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
                axios.get('/getIncomeTargetList')
                    .then(res => {
                        this.datas = res.data.data
                        this.totalTarget = res.data.totalTarget
                    })
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
            
            
            getAmount(){
                    this.form.dueAmount = this.form.incomeAmount
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
                }),
              axios.get('/chartOfAccountRegister').then(res => {
                    this.chartOfAccountRegisters = res.data.chartOfAccounts
                }),
                axios.get('/getInterestTimeTypeList').then(res => {
                    this.getInterestTimeTypeLists = res.data.data
                }),
                axios.get('/addIncomeProvider/').then(res => {
                    this.incomePurposeListViews = res.data.data
                })
            },
            getincomeHead() {
              axios.get('/getIncomeHeadList/'+this.form.incomeType).then(res => {
                    this.incomeHeadListByIds = res.data.data
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
