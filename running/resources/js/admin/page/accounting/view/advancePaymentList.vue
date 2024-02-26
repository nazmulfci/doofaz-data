.<template>
   <span>
     
   <div class="card main-card  element-block-example mt-5">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Advance Payment List</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th> SN</th>
               <th> Supplier Name  </th>
               <th> Mobile No  </th> 
               <th> Amount </th>
               <!-- <th> Delete </th> -->
             </tr>
            </thead>
            <tbody>
                <tr v-for="advanceSupplierList,index in advanceSupplierLists">
                    <td> {{++index}} </td>
                    <td>  {{advanceSupplierList.name}} </td>
                    <td>  {{advanceSupplierList.mobile}} </td>
                    <td> {{parseFloat(advanceSupplierList.currentDue).toFixed(2)}} </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="3" class="text-right"> Total </th>
                    <th>{{parseFloat(advanceSupplierTotal).toFixed(2)}}</th>
                </tr>
            </tfoot>
         </table>
       </div>
     </div>


  </span>
</template>

<script>
    export default {
        data(){
            return{
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
                    incomeCompany: '',
                    incomePurpous: '',
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

               
                advanceSupplierLists: [],
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

        },
        methods: {
            create() {
                this.form.post('/addAdvancePayment').then(res => {
                   
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
            paymentTypeList() {
              
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
                    this.form.cashAmount = '';
                    this.form.bankAmount = this.form.incomeAmount;
                }
                else if(this.form.paymentType == 1)
                {
                    this.cashInformationStatus = 1;
                    this.bankInformationStatus = 0;
                    this.form.bankAmount = '';
                    this.form.cashAmount = this.form.incomeAmount;
                }
                else
                {
                    this.cashInformationStatus = 0;
                    this.bankInformationStatus = 0;
                    this.form.bankAmount = '';
                    this.form.cashAmount = '';
                }
            },





            incomeTypeList(){
                let uri = `incomeTypeList`;
                axios.get(uri).then(response=>{
                    this.incomeTypeLists = response.data.data;
                })
            },
            getData() {
      let url = "advanceSupplierListDashboard";
      axios.get(url).then((response) => {
        this.advanceSupplierLists = response.data.data;
        this.advanceSupplierTotal = response.data.totalDue;
    });
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
            
            incomePurposeListViews() {
             
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

                axios.get('/paymentTypeList').then(res => {
                    this.paymentTypeLists = res.data.data
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
                axios.delete('/addAdvancePayment/'+id)
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
