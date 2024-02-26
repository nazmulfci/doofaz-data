 <template id="">
  <span>
     

  <div class="card main-card element-block-example mt-5">
      <div class="card-header alert-info">
        <h3>Bill Approve List</h3>
      </div>

      <div class="table-responsive bg-white p-3">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="alert-info">
              <th>SN</th>
              <th>Shop Info</th>
              <th>Billing Info</th>
              <th>Month</th>
              <th>Amount</th>
              <th>Reciver</th>
              <th>Sender</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(billRequestList, index) in billRequestLists"
              :key="billRequestList.id"
            >
              <td>{{ index + 1 }}</td>
              <td>
                  {{ billRequestList.shopSNo }}
                  <br>
                  {{ billRequestList.ShopUserName }}
                   </td>
              <td>
                  {{ billRequestList.ShopBillAmount }}
                  <br>
                  {{ billRequestList.ShopBillDate }}
                   </td>
              <td>{{ billRequestList.totalMonth }} Month</td>
              <td>{{ billRequestList.amount }}</td>
              <td v-html="billRequestList.bankDetils"></td>
              <td> 
                <span v-if="billRequestList.bankTypeEntryId==1">
                  Bank Name : {{billRequestList.bankName}} <br>
                  A/C Name : {{billRequestList.accountName}}<br>
                  A/C Number : {{billRequestList.accountNumber}}<br>
                  Branch Name : {{billRequestList.branchName}}<br>
                   Pay Slip : <a :href="billRequestList.paySlip" target="_blank"> <img :src="billRequestList.paySlip" style="width:100px;"></a>
               
                </span>
                <span v-if="billRequestList.bankTypeEntryId==2">
                  A/C Number : {{billRequestList.mbAccountNo}} <br>
                  TRX. Number : {{billRequestList.mbTrNo}}
                </span>
              </td>
              <td> 
                  {{billRequestList.submitTime}} <br>
                  {{billRequestList.submitDate}}
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

      data() {
        return {
             currencyRate:'',
             authInfos:[],
             userName:'',
             accountInfos:[],
             howManyBranch:true,
             
             billRequestLists:[],
             mobileBankInfoStatus:0,
             bankInfoStatus:0,
             bankInformationAccountInfoStatus:0,
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

 
                shopBankAllDatas: [],
                corporateBankAccountTypes: [],
                mobileBankAccountTypes: [],
                paymentTypeLists: [],
                showBankTypeDatas:[],
                showBankNames: [],
                showBankAccounts: [],
                bankMoreInfo: [],
                showMonthLists: [],


            form: new Form({
                  paymetMethod: '',
                  amount: '',
                  totalMonth: '1',
                  bankDetils: '',
                  paySlip: '',
                }),
        
        }
      },
  mounted() {
    this.getAccountInfoById();
    this.getAuthInfo(); 
    this.getCurrencyRate(); 
    this.view();
    this.showBankType();
    this.shopBillMonthList();
  },
      methods: {
        view(){
           axios.get('/shopBillCencelListAdmin/').then(res => {
              this.billRequestLists = res.data.data;
            })
        },
        billApprove(e){
                 
      this.form.get("payBill/"+e).then((response) => {
          axios.put('https://portal.safejob.net/api/newshopMonthly/'+this.authInfos.userName)     
        .then((response) => {
            
        });
      });
      this.view();
      Toast.fire({
          icon: "success",
          title: "Bill Request Approve.",
        })
        },
        billCencle(e){
           axios.get('/shopBillRequestCancel/'+e).then(res => {
              this.view();
            })
        },
        billRequest(){ 

      this.form.post("shopBillRequestEntry").then((response) => {
         
        Toast.fire({
          icon: "success",
          //background: '#fcd8d8', red
          //background: "#c9f4c9", //green
          title: "Bill Request Successfull.",
        }),
           
        this.form.reset();
      })
    },
       

      getCurrencyRate(){

      let url = 'getCurrencyRate';
      
      axios.get(url)
        .then((response) => {
          this.currencyRate = response.data.data;
          this.form.amount = response.data.data;
        });
  },



          getAuthInfo(){
      let url = "getAuthInfo";
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.authInfos = response.data;
          this.userName = response.userName;
        });
    },
  changeImage(event){
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.paySlip = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
    },

                getAccountInfoById(){
      let url = "getAccountInfoById";
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
      this.accountInfos = response.data;
        });
    },

            calculateBillAmount(){
               axios.get('/getShopBillMonthListById/'+this.form.totalMonth).then(res => {
              this.form.amount = ((this.currencyRate*this.form.totalMonth)-res.data.data.discountAmount);
            })
            },
            shopBillMonthList() {
              axios.get('/getShopBillMonthList').then(res => {
                    this.showMonthLists = res.data.data
                })
            },
            showBankType() {
              axios.get('/bankTypeEntryList').then(res => {
                    this.showBankTypeDatas = res.data.show
                })
            },

            bankTypeIdCatch() {
                axios.get('/companyBankNameList/'+this.form.bankTypeEntryId).then(res => {
                    this.showBankNames = res.data.show
                    
                    if(this.form.bankTypeEntryId==1){
                      this.mobileBankInfoStatus = 0;
                      this.bankInfoStatus = 1;
                    }else{
                      this.mobileBankInfoStatus = 1;
                      this.bankInfoStatus = 0;
                    }
                })
            },

             bankAccountIdCatch() {
                axios.get('/companyBankAccountList/'+this.form.bankAccountId).then(res => {
                  if(this.form.bankTypeEntryId==1){
                    this.form.bankDetils = 
                    'A/C Name : '+res.data.data.accountName+'<br>'+
                    'A/C Number : '+res.data.data.accountNumber+'<br>'+
                    'Branch Name : '+res.data.data.brunchName;
                  }
                  else{
                    this.form.bankDetils = 
                    'A/C Type : '+res.data.data.accountType+'<br>'+
                    'A/C Number : '+res.data.data.accountNumber;
                  }
                })
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

      }
    }
</script>