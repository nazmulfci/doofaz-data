 <template id="">
  <span>
    <div class="card">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black"> Bill Request </h3>
      </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
        


        <form @submit.prevent="billRequest()">
               
            <div class="form-group">
                 <label> Month 
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <select v-model="form.totalMonth" name="totalMonth" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('totalMonth') }" 
                  @change.prevent="calculateBillAmount()">
                      <option value="">Select Month</option>
                      <option v-for="showMonthList in showMonthLists"
                       :value="showMonthList.month" > {{ showMonthList.title }}  
                       <span v-if="showMonthList.discountAmount">
                         ({{ showMonthList.discountText }})</span>
                         </option>
                  </select>
                  <has-error :form="form" field="totalMonth"></has-error>
              </div>
              

            <div class="form-group">
              <label> Bill <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
              <input type="text"
                v-model="form.amount"
                class="form-control"
                disabled
                :class="{ 'is-invalid': form.errors.has('amount') }">
 
              <input type="hidden"
                v-model="form.lastBillDate"
                class="form-control"
                disabled
                :class="{ 'is-invalid': form.errors.has('lastBillDate') }">

              <has-error :form="form" field="amount"></has-error>
            </div>   
            
              
 <!-- ========================= payment option  -->
 
           

              
             

              <div>
              
              <div class="form-group">
                 <label> Bank Type  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                  <select v-model="form.bankTypeEntryId" name="bankTypeEntryId" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('bankTypeEntryId') }" 
                  @change.prevent="bankTypeIdCatch()">
                      <option value="">Select Bank Type </option>
                      <option v-for="showBankTypeData in showBankTypeDatas" :value="showBankTypeData.bankTypeEntryId" > {{ showBankTypeData.bankTypeEntryName }}</option>
                  </select>
                  <has-error :form="form" field="bankTypeEntryId"></has-error>
              </div>

                <div class="form-group">
                 <label>Bank Name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                  <select v-model="form.bankAccountId" name="bankAccountId" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('bankAccountId') }"
                  @change.prevent="bankAccountIdCatch()">
                      <option value=""> Select Bank Name </option>
                      <option v-for="showBankName in showBankNames" :value="showBankName.bankEntryId" > {{ showBankName.bankName }}</option>
                  </select>
                  <has-error :form="form" field="bankAccountId"></has-error>
              </div>

                <div class="form-group">
                 <label> Company Account Details <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                 <br>
                  <input type="hidden" class="form-control border bg-light" style="height:auto;" v-model="form.bankDetils">
                  <span class="form-control border bg-light pb-2" style="height:auto;" v-html="form.bankDetils"></span>
                </div>

                <div v-if="mobileBankInfoStatus">
                <div class="form-group">
              <label> Sender Account Number <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
              <input type="text"
                v-model="form.mbAccountNo"
                class="form-control"
                
                :class="{ 'is-invalid': form.errors.has('mbAccountNo') }">
              <has-error :form="form" field="mbAccountNo"></has-error>
            </div>  

                <div class="form-group">
              <label> Transaction Number <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
              <input type="text"
                v-model="form.mbTrNo"
                class="form-control"
                
                :class="{ 'is-invalid': form.errors.has('mbTrNo') }">
              <has-error :form="form" field="mbTrNo"></has-error>
            </div>  
            </div>  

                <div v-if="bankInfoStatus">
                <div class="form-group">
              <label> Sender Bank Name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
              <input type="text"
                v-model="form.bankName"
                class="form-control"
                
                :class="{ 'is-invalid': form.errors.has('bankName') }">
              <has-error :form="form" field="bankName"></has-error>
            </div>  

                <div class="form-group">
              <label> Sender Account Name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
              <input type="text"
                v-model="form.accountName"
                class="form-control"
                
                :class="{ 'is-invalid': form.errors.has('accountName') }">
              <has-error :form="form" field="accountName"></has-error>
            </div>  

                <div class="form-group">
              <label> Sender Account Number <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
              <input type="text"
                v-model="form.accountNumber"
                class="form-control"
                
                :class="{ 'is-invalid': form.errors.has('accountNumber') }">
              <has-error :form="form" field="accountNumber"></has-error>
            </div>  

                <div class="form-group">
              <label> Sender Branch Name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
              <input type="text"
                v-model="form.branchName"
                class="form-control"
                
                :class="{ 'is-invalid': form.errors.has('branchName') }">
              <has-error :form="form" field="branchName"></has-error>
            </div>  
                <div class="form-group">
              <label for="paySlip"> Pay Slip <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label> 
              
                      <img :src="form.paySlip"
                      class="img img-responsive"
                      style="max-height:100px; max-width:200px;">
                      <input type="file" id="paySlip" @change="changeImage($event)" class="form-control">
                      
                      <small class="text-danger"> Supported image formet only jpg, jpeg, png </small>
                      <has-error :form="form" field="paySlip"></has-error>
            </div>  
            </div>  
                

              </div>

 <!-- ========================= /payment option  -->
              
       
              <div class="text-right pt-3">
                  <!-- <span class="badge badge-danger" v-if="accountInfos.topupCurrentBalance<currencyRate"> Insufficient Balance </span> -->
                <button type="submit" class="mr-2 btn btn-pill btn-hover-shine  btn-primary"> Submit </button>
              </div>
          </form>
        </div>
      </div>
    </div>

  


  <div class="card main-card element-block-example mt-5">
      <div class="card-header alert-info">
        <h3>Bill Request List</h3>
      </div>

      <div class="table-responsive bg-white p-3">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="alert-info">
              <th>SN</th>
              <th>Last Bill Date</th>
              <th>Month</th>
              
              <th>Amount</th>
              <th>Reciver</th>
              <th>Sender</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(billRequestList, index) in billRequestLists"
              :key="billRequestList.id"
            >
              <td>{{ index + 1 }}</td>
              
              <td>{{ moment(billRequestList.lastBillDate).format("DD MMMM YYYY") }}</td>
              <td>{{ billRequestList.totalMonth }} Month</td>
              <td>{{ billRequestList.amount }}</td>
              <td v-html="billRequestList.bankDetils"></td>
              <td>
                <span v-if="billRequestList.bankTypeEntryId==1">
                  Bank Name : {{billRequestList.bankName}} <br>
                  A/C Name : {{billRequestList.accountName}}<br>
                  A/C Number : {{billRequestList.accountNumber}}<br>
                  Branch Name : {{billRequestList.branchName}}<br>
                  Pay Slip : <img :src="billRequestList.paySlip" v-if="billRequestList.paySlip" style="width:100px;">
                </span>
                <span v-if="billRequestList.bankTypeEntryId==2">
                  A/C Number : {{billRequestList.mbAccountNo}} <br>
                  TRX. Number : {{billRequestList.mbTrNo}}
                </span>
              </td>
              <td> {{moment(billRequestList.created_at).format("DD MMMM YYYY")}} </td>
              <td> 
                <span v-if="billRequestList.status==0"> Pending... </span>
                <span v-if="billRequestList.status==1"> Waiting... </span>
                <span v-if="billRequestList.status==2"> Apporved </span>
                <span v-if="billRequestList.status==3"> Cancel </span>
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

      data() {
        return {
             moment: moment,
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
                  lastBillDate: '',
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
           axios.get('/shopBillRequestList/').then(res => {
              this.billRequestLists = res.data.data;
            })
        },
        billRequest(){ 

      this.form.post("shopBillRequestEntry").then((response) => {
         
         if(response.data.ok==0){
           Toast.fire({
          icon: "error",
          //background: '#fcd8d8', red
          //background: "#c9f4c9", //green
          title: "Your allready send request.",
        })
         }else{
        Toast.fire({
          icon: "success",
          //background: '#fcd8d8', red
          //background: "#c9f4c9", //green
          title: "Bill Request Successfull.",
        }),
           
        this.form.reset();
        this.view();
         }
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
      this.form.lastBillDate = response.data.billingDate;
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