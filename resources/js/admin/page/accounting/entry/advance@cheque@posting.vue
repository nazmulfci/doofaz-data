.<template>
   <span>
    
   <div class="card main-card  element-block-example mt-5">
      
       <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Advance Cheque Posting </h4>
        </div>
      </div>
      
      <form @submit.prevent="create()">
        
        <div class="supplier-entry py-4 px-2 comm-form-back-img">

         <div class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color">

          
               <div class="row">
                   <div class="col-12 col-md-12 col-xs-12"></div>
                     <div class="col-12 col-md-12 col-xs-12">
                <div class="form-group">
                 <label>Select Bank Name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <select v-model="form.bankEntryId" name="bankEntryId" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('bankEntryId') }"
                  @change.prevent="bankAccountIdCatch()">
                      <option value="">Select Bank Name</option>
                      <option v-for="showBankName in showBankNames" :value="showBankName.bank" :key="showBankName.id" > 
                          <span v-for="bank in banks" v-if="showBankName.bank==bank.bankEntryId">
                          {{ bank.bankName }}
                          </span>
                          </option>
                  </select>
                  <has-error :form="form" field="bankEntryId"></has-error>
              </div>
                     </div>
                     </div>
                     
                     <div class="row">
                      <div class="col-12 col-md-12 col-xs-12"></div>
                     <div class="col-12 col-md-12 col-xs-12">
                <div class="form-group">
                 <label>Select Account Name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <select v-model="form.bankAccountId" name="bankEntryId" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('bankAccountId') }"
                  @change.prevent="showInfo()">
                      <option value="">Select Account Name</option>
                      <option v-for="acc in accs" :value="acc.bankAccountId" :key="acc.id" > 
                          <span v-for="account in accounts" v-if="account.bankId==acc.bankAccountId">
                          {{ account.bankAccountName }} ({{account.bankBranch}} / {{account.bankAccountNumber}})
                          </span>
                          </option>
                  </select>
                  <has-error :form="form" field="bankAccountId"></has-error>
              </div>
                <div class="form-group">
                 <label>Select Cheque No <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <select v-model="form.chequeNo"  class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('chequeNo') }"
                >
                      <option >Select Cheque No</option>
                      <option v-for="dt  in infos" :key="dt.id" > 
                     
                          {{  dt.checkNo}}
                
                          </option>
                  </select>
                  <has-error :form="form" field="chequeNo"></has-error>
              </div>
                <div class="form-group">
                 <label>Select Cheque Type <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <select v-model="form.chequeType" @change.prevent="cType()"  class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('chequeType') }"
                >
                      <option >Select Cheque No</option>
                      <option v-for="type  in types" :value="type.id" :key="type.id" > 
                     
                          {{  type.chequeType}}
                
                          </option>
                  </select>
                  <has-error :form="form" field="chequeType"></has-error>
              </div>
               <div class="form-group" >
                    <label> Receiver Name </label>
                    <input type="text"  v-model="form.receiver"  
                    class="form-control" 
                  >
                   
                </div>
                <span v-if="account">
               <div class="form-group">
                    <label> Account Name </label>
                    <input type="text"  v-model="form.accountName"  
                    class="form-control" 
                  >
                   
                </div>
               <div class="form-group">
                    <label> Account Number</label>
                    <input type="text"  v-model="form.accountNumber"  
                    class="form-control" 
                  >
                   
                </div>
                </span>
               <div class="form-group">
                    <label> Amount <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                    <input type="text"  v-model="form.amount"  
                    class="form-control" :class="{ 'is-invalid': form.errors.has('amount') }"
                  >
                  <has-error :form="form" field="amount"></has-error>
                   
                </div>
               <div class="form-group">
                    <label> Cheque Delivery Date <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                    <input type="date"  v-model="form.cashDate"  
                    class="form-control" :class="{ 'is-invalid': form.errors.has('cashDate') }"
                  >
                  <has-error :form="form" field="cashDate"></has-error>
                   
                </div>
               <div class="form-group">
                    <label> Cheque Cash Date <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                    <input type="date"  v-model="form.issueDate"  
                    class="form-control" :class="{ 'is-invalid': form.errors.has('issueDate') }"
                  >
                  <has-error :form="form" field="issueDate"></has-error>
                   
                </div>
                      
              </div>
             
             
               </div>
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
          </form>
        <!-- <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th> SN</th>
               <th> Bank </th>
               <th> Account Name</th>
               <th> Account Number</th>
               <th> Cheque no </th>
               <th> Status </th>
               <th> View </th>
              
             
    
             </tr>
            </thead>
            <tbody>
              <tr v-for="(dt, index) in infos" :key="dt.id">
                <td>{{ index+1 }}</td>
                <td>   <span v-for="bank in banks" v-if="dt.bank==bank.bankEntryId">
                          {{ bank.bankName }}
                          </span></td>
                <td>
                  <span v-for="account in accounts" :key="account.id">
                  <span v-if="account.bankId==dt.bankAccountId">
                  {{ account.bankAccountName }}
                  </span>
                  </span>
                  </td>
                <td>
                  <span v-for="account in accounts" :key="account.id">
                  <span v-if="account.bankId==dt.bankAccountId">
                  {{ account.bankAccountNumber }}
                  </span>
                  </span>
                  </td>
                <td>{{ dt.checkNo }}</td>
                <td>Paid</td>
                <td>View</td>
              
                

              </tr>
            </tbody>
         </table> -->
       
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
                     chequeNo:'',                
                     chequeType:'',                
                     receiver:'',                
                     amount:'',                
                     cashDate:'',                
                    issueDate:'', 
                    
                    accountName:'',
                    accountNumber:'',

                 
                 
                }),

               
               account:false,
               loading: false,
                datas: [],
                types: [],
                banks: [],
                accounts: [],
                accs: [],
                infos: [],
                showBankNames: [],
              
            }

        },
        mounted() {
          
            this.view();          
            this.chequeType();          
 

        },
        methods: {
     create()   {
       this.loading = true;
       this.form.post('/chequePosting').then(res=>{
         this.loading = false;
                 this.form.reset()
        Toast.fire({
           icon: 'success',
                title: ' Successfull Posting'

        }) ;
       }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });

     },
         cType(){
                if(this.form.chequeType==1){
                  this.account=false;
                }
                else{
                    this.account=true;
                }
         },
       view(){
            axios.get('/bankCheck/create').then(res=>{
                  this.showBankNames=res.data.data,
                  this.accounts=res.data.account,
                  this.banks=res.data.bank

                 

                })
          },
           bankAccountIdCatch() {
                axios.get('/bankCheck/'+this.form.bankEntryId).then(res => {
                    this.accs = res.data.account
                })
            },
           showInfo() {
                axios.get('/chequeInfoGet/'+this.form.bankEntryId+'/'+this.form.bankAccountId).then(res => {
                    this.infos = res.data.info
                })
            },
           chequeType() {
                axios.get('/chequeType').then(res => {
                    this.types = res.data.type
                })
            },

          
        }
    }
</script>
