.<template>
   <span>
    <div class="card">

             <div class="card-header alert-info">
          <h3>
             <router-link :to="`/incomeExpense`"
             class="btn btn btn-outline-primary btn-shadow  btn-hover-shine"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg> </router-link>
             Expense Entry </h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
          <form @submit.prevent="create()">
            <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color">
    
              
               <div class="form-group" style="display:none;">
                 <label> Expense Type 
                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>

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

               <div class="form-group" style="display:none;">
                 <label> Expense Head 
                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <select v-model="form.expenseHead" name="expenseHead" 
                  class="form-control" :class="{ 'is-invalid': form.errors.has('expenseHead') }"
                  @change="expensePurposeList()"
                  >
                      <option value=""> Select One </option>
                      <option v-for="expenseHeadListById in expenseHeadListByIds" 
                      :value="expenseHeadListById.id" > 
                      {{ expenseHeadListById.name }} 
                      </option>
                  </select>
                  <has-error :form="form" field="expenseHead"></has-error>
              </div>


                
              <div class="form-group">
                 <label> Expense Purpose 
                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <select type="text" v-model="form.expensePurpous"  
                  name="expensePurpous" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('expensePurpous') }"
                  @change.prevent="getExpenseBudget()"
                  >
                    <option value="">Select One</option> 
                      <option v-for="expensePurposeList in expensePurposeListsd" 
                      :value="expensePurposeList.id" > 
                      {{ expensePurposeList.expensePurpous }}
                      </option>
                  </select>
                  <has-error :form="form" field="expensePurpous"></has-error>
              </div>
<!-- 
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
              </div> -->
                

                <div class="form-group">
                 <label> Expense Title  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <input type="text" v-model="form.expenseTitle"  
                  name="expenseTitle" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('expenseTitle') }">
                  <has-error :form="form" field="expenseTitle"></has-error>
                </div>

                <div class="form-group">
                 <label> Budget Amount </label>
                  <input type="text" readonly v-model="form.budget"  
                  name="address" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('address') }">
                  <has-error :form="form" field="address"></has-error>
              </div>

                <div class="form-group">
                 <label> Expense Amount 
                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <input type="text" v-model="form.expenseAmount"  
                  autocomplete="off"
                  name="expenseAmount" class="form-control" 
                  @keyup.prevent="getAmount()"
                  @keyup="calculate"
                  @change="getAmount()"
                  :class="{ 'is-invalid': form.errors.has('expenseAmount') }">
                  <has-error :form="form" field="expenseAmount"></has-error>
                  <span v-if="invalid" style="color:red">
                             Negative And Character Not Allowed
                            </span>
                </div>

                <div class="form-group">
                 <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
 @click="getDetailsData()">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
</svg> Add  Details
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> Expense Details </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <table class="table table-bordered">
            <tr>
                <td></td>
                <td> <input type="text" class="form-control" placeholder="Item" v-model="form.item"> </td>
                <td> <input type="text" class="form-control" placeholder="Amount" v-model="form.itemAmount"> </td>
                <td> <input type="button" class="btn btn-primary" value="Add" @click="expenseItemAdd(1)"> </td>
            </tr>

            <tr v-if="totalAmountRowStatus">
                <td></td>
                <th class="text-right"> Total</th>
                <th>{{totalAmountText}}</th>
                <td></td>
            </tr>
               
            <tr v-for="expenseDetailsList,index in expenseDetailsLists">
                <td> {{index+1}} </td>
                <td> {{expenseDetailsList.item}} </td>
                <td> {{expenseDetailsList.itemAmount}} </td>
                <td> <button type="button" @click="deleteExpenseDetailItem(expenseDetailsList.id)" class="btn btn-danger"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                    </button>
                </td>
            </tr>
            
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="expenseItemAdd(2)" data-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>

                </div>

                
              
 <!-- ========================= payment option  -->

                <div class="form-group">
                    <label> Payment  Type
                        
                    <span v-if="available_balance_cash_status" class="badge badge-primary">
                      {{form.available_balance}}
                    </span>
                     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                    <select v-model="form.paymentType" 
                    @change="paymentReceiveType()"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('paymentType') }">
                        <option value=""> Select Payment Type </option>
                        <option v-for="paymentTypeList in paymentTypeLists" 
                        :value="paymentTypeList.id" > {{ paymentTypeList.paymentType }}</option>
                    </select>
                    <has-error :form="form" field="paymentType"></has-error>

                    <small class="badge badge-danger" v-if="insufficent_cash_balance_text_status">
                      Insufficient Balance
                    </small>
                </div>
           

              
              <div v-if="cashInformationStatus">
              
              <div class="form-group">
                 <label> Cash Amount </label>
                 <input type="number" v-model="form.cashAmount" autocomplete="off"
                 @keyup="calculateAmount(1)" 
                  name="cashAmount" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('cashAmount') }">
                  <has-error :form="form" field="cashAmount"></has-error>
              </div>
              
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
                 <label> Bank Amount </label>
                 <input type="number" v-model="form.bankAmount" 
                 autocomplete="off"
                 @keyup="calculateAmount(2)"  
                  name="bankAmount" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('bankAmount') }">
                  <has-error :form="form" field="bankAmount"></has-error>
              </div>
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
                 <label>Bank Account

                     <span v-if="available_balance_status" class="badge badge-primary">
                     {{available_balance_text}}
                   </span>

                 </label>
                  <select v-model="form.bankAccountId" name="bankAccountId" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('bankAccountId') }"
                  @change="getBankMoreInfo()"
                  >
                      <option value="">Select Bank Account</option>
                      <option v-for="showBankAccount in showBankAccounts" :value="showBankAccount.bankId" > {{ showBankAccount.bankAccountNumber }}</option>
                  </select>
                  <has-error :form="form" field="bankAccountId"></has-error>
                   
                   <input type="hidden" v-model="form.available_balance">
                 <small class="badge badge-danger" v-if="insufficent_bank_balance_text_status">
                    Insufficient Balance
                  </small>
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

 <!-- ========================= /payment option  -->

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
                </div>
       <!-- -----------------------------   card footer  -->
 
<div class="d-block p-0 pt-3 pb-4 card-footer overflow-hidden">
<div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">


                                <button type="reset" class="btn-pill btn-shadow btn btn-outline-danger btn-lg float-left">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-undo "></i>
                                    </span>
                                    <span class="mr-1"> Clear </span>
                                </button>
                                 
                                <button v-if="submit_button" type="submit" class="btn-pill btn-shadow btn btn-primary btn-lg float-right btn-hover-shine"
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
                </span>
                                    <span class="mr-1"> Submit </span>
                                </button>
                                 
                                <button v-if="insufficent_button" type="button" class="btn-pill btn-shadow btn btn-danger btn-lg float-right btn-hover-shine">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-paper-plane"></i>
                                    </span>
                                    <span class="mr-1"> Submit </span>
                                </button>


                            </div>
                            </div>
 
<!-- -----------------------------   // card footer  --> 
          </form>
 
      </div>
    </div>

   <div class="card main-card  element-block-example mt-5">
      <div class="card-header alert-info">
        <h4>
          <i class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"></i>
          Expense  List</h4>
      </div>
      <div class="table-responsive p-3">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr class="alert-info">
               <th> SN</th>
               <th>  Expense<span class="textTransparent">_</span>Purpose  </th>
               <th> Person/Company</th>
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
                  <span v-for="expenseHeadList in expenseHeadLists" 
                      :value="expenseHeadList.id" 
                      v-if="data.expenseHead==expenseHeadList.id"
                      > 
                      {{ expenseHeadList.name }} 
                  </span>
                </td>
                <td> 
                  <!-- {{data.expenseCompanyId}} -->
                  <span v-for="expenseCompanyList in expenseCompanyLists" 
                      :value="expenseCompanyList.id" 
                      v-if="data.expenseCompanyId==expenseCompanyList.id"
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
                    <router-link :to="`/expenseInvoiceView${data.id}`" 
                    class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"><i class=" fa fa-eye mr-1"></i> View</router-link>
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
                    loading: false,
                    expenseTypeLists: [],
                    expenseHeadListByIds: [],
                    expenseHeadLists: [],
                    paidDateText:'',
                    totalAmountText:'',
                    
                    totalAmountRowStatus:0,
                    expenseCompanyLists:[],
                    datas:[],
                    chartOfAccounts:[],
                    expensePurposeListsd:[],
                    expenseDetailsLists:[],

                    bankInformationStatus:0,
                    cashInformationStatus:0,
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
                    budget: '',
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

                    // for validation
                    available_balance: '',
                    // /for validation
                 
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
                expensePurposeListView1s: [],
                invalid:false
                
            }

        },
        mounted() {

            this.getData();
            this.expenseTypeList();
            this.expenseCompanyList();
            this.getexpenseHeadListFunction();
            this.chartOfAccount();
            this.expensePurposeListViews();

            this.paymentTypeList(); 
            this.showBankType();

        },
        methods: {
            create() {
              this.loading = true;
                this.form.post('/addExpense').then(res => {
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
            calculateAmount(id){
                this.form.dueAmount = this.form.expenseAmount-(this.form.cashAmount+this.form.bankAmount)
                this.calculate_available_balance_from_amount(id);
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
                axios.get('/bankAccountListWithCard/'+this.form.bankEntryId+'/'+this.form.bankTypeEntryId).then(res => {
                    this.showBankAccounts = res.data.data
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
                              this.calculate_available_balance(response.data.available_balance,2); // bank
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

            paymentReceiveType(){

              this.insufficent_cash_balance_text_status=false;
              this.insufficent_bank_balance_text_status=false;
              this.available_balance_cash_status = false;


                if(this.form.paymentType == 2){
                    this.bankInformationStatus = 1;
                    this.cashInformationStatus = 0;
                    this.form.cashAmount='';
                    this.form.bankAmount=this.form.expenseAmount;
                }
                else if(this.form.paymentType == 1)
                {

                    //======================== check balance 
                   
                   axios.get('/getCashRegister/1').then(res => {
                     
                          let url = "checkBalance/"+res.data.accCode;
                          axios.get(url)
                            .then((response) => {
                              this.available_balance_cash_status = true;
                              this.form.available_balance = response.data.available_balance;
                              this.calculate_available_balance(response.data.available_balance,1); // cash
                            });

                            });
                   
                  //======================== check balance 


                    this.cashInformationStatus = 1;
                    this.bankInformationStatus = 0;
                    this.form.cashAmount=this.form.expenseAmount;
                    this.form.bankAmount='';
                }
                else if(this.form.paymentType == 3)
                {
                    this.cashInformationStatus = 0;
                    this.bankInformationStatus = 0;
                    this.form.cashAmount='';
                    this.form.bankAmount='';
                    this.form.dueAmount = this.form.expenseAmount;
                }
            },
            calculate_available_balance(e,type){

              this.insufficent_cash_balance_text_status = false;
              this.insufficent_bank_balance_text_status = false;
              this.insufficent_button = false;
              this.submit_button = true;
              
              // ------------- cash condition
              if(type==1){
              if(this.form.cashAmount>e){
                this.insufficent_cash_balance_text_status = true;
                this.insufficent_button = true;
                this.submit_button = false;
              }
              else{
                this.insufficent_cash_balance_text_status = false;
                this.insufficent_button = false;
                this.submit_button = true;
              }
              }
              // ------------- cash condition
              
              // ------------- Bank condition
              if(type==2){
              if(this.form.bankAmount>e){
                this.insufficent_bank_balance_text_status = true;
                this.insufficent_button = true;
                this.submit_button = false;
              }
              else{
                this.insufficent_bank_balance_text_status = false;
                this.insufficent_button = false;
                this.submit_button = true;
              }
              }
              // ------------- /Bank condition
            },

            calculate_available_balance_from_amount(type){

              this.insufficent_cash_balance_text_status = false;
              this.insufficent_bank_balance_text_status = false;
              this.insufficent_button = false;
              this.submit_button = true;
              
              // ------------- cash condition
              if(type==1){
              if(this.form.cashAmount>this.form.available_balance){
                
                
                this.insufficent_cash_balance_text_status = true;
                this.insufficent_bank_balance_text_status = false;

                this.insufficent_button = true;
                this.submit_button = false;
              }
              else{
                this.insufficent_cash_balance_text_status = false;
                this.insufficent_bank_balance_text_status = false;
                this.insufficent_button = false;
                this.submit_button = true;
              }
              }
              
              // ------------- cash condition
              
              // ------------- bank condition
              if(type==2){
              if(this.form.bankAmount>this.form.available_balance){
                
                
                this.insufficent_cash_balance_text_status = false;
                this.insufficent_bank_balance_text_status = true;
                

                this.insufficent_button = true;
                this.submit_button = false;
              }
              else{
                this.insufficent_cash_balance_text_status = false;
                this.insufficent_bank_balance_text_status = false;
                this.insufficent_button = false;
                this.submit_button = true;
              }
              }
              
              // ------------- /bank condition
            },





            expenseTypeList(){
                let uri = `expenseTypeList`;
                axios.get(uri).then(response=>{
                    this.expenseTypeLists = response.data.data;
                    this.form.expenseType = response.data.expenseType;

                    axios.get('/getExpenseHeadList/'+this.form.expenseType).then(res => {
                    this.expenseHeadListByIds = res.data.data;
                    this.form.expenseHead = res.data.id;
                    this.expensePurposeList();
                })

                })
            },
            getData() {
                axios.get('/addExpense')
                    .then(res => {
                        this.datas = res.data.data

                    }),

                    this.expenseTypeList();
            },
            
            expenseCompanyList() {
              axios.get('/addIncomeExpenseCompany').then(res => {
                    this.expenseCompanyLists = res.data.data
                })
            },
            
            getExpenseBudget() {
              axios.get('/getIncomeExpenseBudget/1/'+this.form.expensePurpous).then(res => {
                    this.form.budget = res.data.data
                })
            },
            
            expensePurposeList() {
              axios.get('/getExpensePurposeListById/'+this.form.expenseHead).then(res => {
                    this.expensePurposeListsd = res.data.datas
                })
            },
            
            expensePurposeListViews() {
              
                    axios.get('/addExpenseProvider/').then(res => {
                    this.expensePurposeListView1s = res.data.data
                })
            },
            calculate(e){
                  let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) &&  this.form.expenseAmount !== "") {
        this.invalid = true;
       
       this.form.expenseAmount= '';
      } else {
       this.invalid = false;
       
      }
            },
            getAmount(){

      
                   this.form.dueAmount = 0


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
             
            getexpenseHeadListFunction() {
              axios.get('addExpenseType').then(res => {
                    this.expenseHeadLists = res.data.data
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
