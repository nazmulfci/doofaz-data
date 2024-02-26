<template>
   <span>
    

   <div class="card main-card  element-block-example mt-5">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black"> Loan Reciever List</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th> SN</th>
               <th> Type</th>
               <th> Name</th>
               <th> Mobile Number</th>
               <th> Address</th> 
               <th> Loan Amount </th> 
               <th> Paid Amount</th> 
               <th> Due Amount</th> 
               <th> Ladger</th>
               <th> Voucher </th>
               <th> View</th>
             </tr>
            </thead>
            <!-- v-html="shopBankAllDatas" -->
            <tbody >
               <tr v-for="(shopBankAllData, index) in shopBankAllDatas">
                <td>{{ index+1 }}</td>
                <td>
                    <span v-for="loanProviderTypeList in loanProviderTypeLists"
                    v-if="loanProviderTypeList.id==shopBankAllData.providerType"
                    >
                    {{loanProviderTypeList.type}}
                    </span>
                      
                </td> 
                <td>{{ shopBankAllData.providerName }}

                    <span  v-if="shopBankAllData.providerType>1">
                        ({{shopBankAllData.providerBranchName}})
                    </span>

                </td>
                <td>{{ shopBankAllData.providerContactPersonMobileNo }}</td>
                <td>{{ shopBankAllData.providerAddress }}</td>
                <td>{{ shopBankAllData.totalLoan }}</td>
                <td>{{ shopBankAllData.totalPaid }}</td>
                <td>{{ shopBankAllData.totalDue }}</td>
                  
                  <td>
                    <router-link :to="`/loanReceiverGeneralLadger${shopBankAllData.id}`" 
                    class="btn btn-hover-shine  btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    Ladger </router-link>
                </td>
                <td>
                    <router-link :to="`loanReceiverVoucherList${shopBankAllData.id}`" 
                    class="btn btn-hover-shine  btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    Voucher </router-link>
                </td>
                <td>
                    <router-link :to="`/loanReceiverLoanList${shopBankAllData.id}`" class="btn btn-hover-shine  btn-primary"><i class=" fa fa-eye"></i> View </router-link>
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
                
                personal:0,
                ngo:0,
                bank:0,

                form: new Form({
                    loanProviderTypeId: '',
                    personName: '',
                    mobileNumber: '',
                    address: '',
                    branchName:'',
                    contactPersonName:'',
                    status: 1,
                }),
                // showDataEntrys:[],
                loanProviderTypeLists:[],
                showBankNames: [],
                shopBankAllDatas: [],
                corporateBankAccountTypes: [],
                mobileBankAccountTypes: [],
            }

        },
        mounted() {
            this.getData();
            this.showloanProviderType();
            this.corporateBankAccountType();
            this.mobileBankAccountType();
        },
        methods: {
            create() {
                this.form.post('/addLoanProvider').then(res => {
                 
                      Toast.fire({
                          icon: 'success',
                          title: 'Loan Provider Entry Successfully'
                      })

                this.personal=0,
                this.ngo=0,
                this.bank=0,

                      this.form.reset()
                      this.getData();
                  
                });
            },
            getData() {
                // addLoanProvider
                axios.get('/getLoanReceiverWithLoanNpadiAmount')
                    .then(res => {
                        this.shopBankAllDatas = res.data.data

                    })
            },
            corporateBankAccountType() {
              axios.get('/corporateBankAccountType').then(res => {
                    this.corporateBankAccountTypes = res.data.data
                })
            },
            mobileBankAccountType() {
              axios.get('/mobileBankAccountType').then(res => {
                    this.mobileBankAccountTypes = res.data.data
                })
            },
            showloanProviderType() {
              axios.get('/getLoanProviderTypeList').then(res => {
                    this.loanProviderTypeLists = res.data.data
                })
            },
            bankTypeIdCatch() {
                
                if(this.form.loanProviderTypeId == 1){
                    this.personal=1;
                    this.ngo=0;
                    this.bank=0;
                }
                else if(this.form.loanProviderTypeId == 2){
                    this.personal=0;
                    this.ngo=1;
                    this.bank=0;
                }
                else if(this.form.loanProviderTypeId == 3){
                    this.personal=0;
                    this.ngo=0;
                    this.bank=1;
                }
                else{
                    this.personal=0;
                    this.ngo=0;
                    this.bank=0;
                }
                axios.get('/bankNameList/'+this.form.loanProviderTypeId).then(res => {
                    this.showBankNames = res.data.show
                })
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
