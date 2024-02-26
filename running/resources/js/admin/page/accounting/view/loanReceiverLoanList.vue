<template>
   <span>
    

   <div class="card main-card  element-block-example mt-5">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black"> Loan Information of {{loanProviderInfo.providerName}} </h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th> SN</th>
               <th> Provider </th>
               <th> Interest  </th>
               <th> Loan Amount</th>
               <th> Installment </th>
               <th> Total Pay</th>
               <th> Total Due </th>
               <th> Statement </th> 
               <th> Re-Loan </th> 
             </tr>
            </thead>
            <tbody>
              <tr v-for="(shopBankAllData, index) in shopBankAllDatas">
                <td>{{ index+1 }}</td>
                <td>
                    <span v-for="loanProviderTypeList in loanProviderTypeLists"
                    v-if="loanProviderTypeList.id==shopBankAllData.loanProviderTypeId">
                    {{ loanProviderTypeList.type }}
                    </span>
                    <br>

                     <span 
                     v-for="loanProviderList in loanProviderLists"
                     v-if="loanProviderList.id==shopBankAllData.loanProviderId"
                     >
                         {{loanProviderList.providerName}}
                     </span>
                     
                    
                    </td>
                <td>
                    <span v-for="getInterestTypeList in getInterestTypeLists"
                    v-if="getInterestTypeList.id==shopBankAllData.interestType">
                        {{getInterestTypeList.name}}
                    </span>
                    
                    <br>
                    <span v-for="getLoanPayTypeList in getLoanPayTypeLists"
                    v-if="getLoanPayTypeList.id==shopBankAllData.loanPayType">
                    {{getLoanPayTypeList.name}}
                    </span>
                    
                    </td>
                <td> {{ shopBankAllData.loanMainAmount }}  </td>
                <td> {{ shopBankAllData.monthlyAmount }} <br> {{shopBankAllData.paidDate}}  </td>
                <td> {{ shopBankAllData.paidAmount }} </td>
                <td> {{ shopBankAllData.dueAmount }} </td>
                 
                <td>
                    <router-link :to="`/loanReceiverLoanStatement${shopBankAllData.id}`" class="btn btn-hover-shine  btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    Statement</router-link>
                </td>
                <td>
                    <router-link :to="`/loanReceiverLoanEdit${shopBankAllData.id}`" class="btn btn-hover-shine  btn-primary">
                    Re-Loan</router-link> 
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
                
                    companyName:'',
                    monthlyDateStatus:1,
                    monthlyAmountStatus:1,
                    paidDateText:'',
                    month:0,
                    mobile_bank_info:0,
                    agent_bank_info:0,
                    corporate_bank_info:0,
                    howMuchTimeStatus:false,
                    loanPayTypeStatus:true,
                    bankInformationStatus:0,
                    bankInformationAccountInfoStatus:0,

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
                }),
                // showDataEntrys:[],
                getInterestTypeLists:[],
                getInterestTimeTypeLists:[],
                loanProviderTypeLists:[],
                loanProviderLists:[],
                loanProviderInfo:[],
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
            this.showloanProviderList();
            this.showloanProviderInfo();
        },
        methods: {
            create() {
                this.form.post('/addProviderLoanReceive').then(res => {
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
                        this.bankInformationAccountInfoStatus=0;

                        this.form.reset()
                        this.getData();
                  }
                });
            },
            getData() {
                axios.get(`getLoanReceiverLoanList/${this.$route.params.id}`)
                    .then(res => {
                        this.shopBankAllDatas = res.data.data
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
              axios.get(`/getInterestTimeTypeList/${this.$route.params.id}`).then(res => {
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
                }
                else
                {
                    this.bankInformationStatus = 0;
                }
            },
            showBankType() {
              axios.get('/bankTypeEntryList').then(res => {
                    this.showBankTypeDatas = res.data.show
                })
            },

            showloanProviderList() {
              axios.get(`addLoanReceiverEntry`).then(res => {
                    this.loanProviderLists = res.data.data
                })
            },

            showloanProviderInfo() {
              axios.get(`getLoanProviderById/${this.$route.params.id}`).then(res => {
                    this.loanProviderInfo = res.data.data
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


                if(this.form.interestTimeType>4){
                    this.monthlyDateStatus=0
                    this.monthlyAmountStatus=0
                }else{
                    this.monthlyDateStatus=1
                    this.monthlyAmountStatus=1
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
