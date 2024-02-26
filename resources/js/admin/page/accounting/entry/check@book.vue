.<template>
   <span>
    <div class="card">
      
      <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Check Book Entry </h4>
        </div>
      </div>


       <form @submit.prevent="create()">
         
         
         <div class="supplier-entry py-4 px-2 comm-form-back-img">

         <div class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color">
           
                <div >
              
             
         

                <div class="form-group">
                 <label>Bank Name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <select v-model="form.bankEntryId" name="bankEntryId" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('bankEntryId') }"
                  @change.prevent="bankAccountIdCatch()">
                      <option value="">Select Bank Name</option>
                      <option v-for="showBankName in showBankNames" :value="showBankName.bankEntryId" > {{ showBankName.bankName }}</option>
                  </select>
                  <has-error :form="form" field="bankEntryId"></has-error>
              </div>

                <div class="form-group">
                 <label> Account No <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <select v-model="form.bankAccountId" name="bankAccountId" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('bankAccountId') }"
                  @change="getBankMoreInfo()"
                  >
                      <option value="">Select Bank Account</option>
                      <option v-for="showBankAccount in showBankAccounts"
                       :value="showBankAccount.bankId" > 
                       <span v-if="showBankAccount.bankAccountName">
                       {{ showBankAccount.bankAccountName }} ({{showBankAccount.bankBranch}} / {{showBankAccount.bankAccountNumber}}) </span>
                       
                       <span v-else>
                       {{ showBankAccount.bankAccountNumber }} </span>
                       
                       </option>
                  </select>
                  <has-error :form="form" field="bankAccountId"></has-error>
                </div>

                <div >
                    
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
                    <label> Check Book First Page <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                    <input type="text"  v-model="form.firstPage"  
                    class="form-control" :class="{ 'is-invalid': form.errors.has('firstPage') }"
                  >
                  <has-error :form="form" field="firstPage"></has-error>
                   
                </div>
                <div class="form-group">
                    <label> Check Book Last Page <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                    <input type="text"  v-model="form.lastPage"  
                    class="form-control" :class="{ 'is-invalid': form.errors.has('lastPage') }"
                  >
                  <has-error :form="form" field="lastPage"></has-error>
                   
                </div>
                </div>

              
 


        <!-- -----------------------------   card footer  -->
 
<div class="d-block pt-3 pb-4 card-footer overflow-hidden">
<div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">


                                <button type="reset" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-undo "></i>
                                    </span>
                                    <span class="mr-1"> Clear </span>
                                </button>

                                <button type="submit" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right"
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


                            </div>
                            </div>
 
<!-- -----------------------------   // card footer  --> 
          
       
      </div>
      </form>
    </div>

   <div class="card main-card  element-block-example mt-5">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Check List</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr class="alert-info">
               <th> SN</th>
               <th> Bank </th>
               <th> Account Name</th>
               <th> Account No</th>
               <th> Branch</th>
               <th> First Page </th>
               <th> Last Page </th>
             
               <!-- <th> Delete </th> -->
             </tr>
            </thead>
            <tbody>
              <tr v-for="(dt, index) in datas" :key="dt.id">
                <td>{{ index+1 }}</td>
                <td>{{ dt.bankName }}</td>
                
                <td>
                  <span v-for="account in accounts" :key="account.id">
                  <span v-if="account.bankId==dt.bankAccountId">
                  {{ account.bankAccountName }}
                  </span>
                  </span>
                  </td>
                  <td> <span v-for="bankAccountList in bankAccountLists"
                  v-if="bankAccountList.bankId==dt.bankAccountId">
                  {{bankAccountList.bankAccountNumber}}
                  </span>
                  </td>
                  <td> <span v-for="bankAccountList in bankAccountLists"
                  v-if="bankAccountList.bankId==dt.bankAccountId">
                  {{bankAccountList.bankBranch}}
                  </span>
                  </td>
                <td>{{ dt.firstPage }}</td>
                <td>{{ dt.lastPage }}</td>
                
<!--                
                <td>
                    <router-link :to="`/expenseInvoiceView${data.id}`" class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"><i class=" fa fa-eye mr-1"></i> View</router-link>
                  </td> -->
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
                  


                form: new Form({
               

                 
                    branchName: '',
                    accNo: '',               
                    bankTypeEntryId: '',
                    bankEntryId: '',
                    bankAccountId: '',                
                    firstPage: '',                
                    lastPage: '',                
                 
                 
                }),

               
                companyLists: [],
                loading: false,
                showBankNames: [],
                shopBankAllDatas: [],
                corporateBankAccountTypes: [],              
                showBankTypeDatas:[],
                showBankNames: [],
                showBankAccounts: [],
                bankMoreInfo: [],
                datas: [],
                accounts: [],
                bankAccountLists: [],
              
            }

        },
        mounted() {

            this.bankTypeIdCatch();
            this.view();
            this.bankAccountList();
          
 

        },
        methods: {
            create() {                
              this.loading = true;
                this.form.post('/bankCheck').then(res => {
                  this.loading = false;
                   if(res.data.exist){
                        Toast.fire({
                          icon: 'error',
                          title: 'Check Book Already Entry'
                      })
 
                   }
                   else{
                      Toast.fire({
                          icon: 'success',
                          title: 'Entry Successfully'
                      })
 

                        this.form.reset()
                      this.view();
                   }
                 
                }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
                
            },
          
         
       view(){
                axios.get('/bankCheck').then(res=>{
                  this.datas=res.data.data,
                  this.accounts=res.data.account

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

       




           bankTypeIdCatch() {
                axios.get('/bankNameListGet').then(res => {
                    this.showBankNames = res.data.show
                })
            },

           bankAccountList() {
                axios.get('/addBank').then(res => {
                    this.bankAccountLists = res.data.showData
                })
            },

          
        }
    }
</script>
