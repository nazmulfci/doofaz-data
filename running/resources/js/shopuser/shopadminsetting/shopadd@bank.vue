<template>
   <span>
    <div class="card">
      
             <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Bank Entry </h4>
        </div>
      </div>


       <form @submit.prevent="create()">
           
        <div class="supplier-entry py-4 px-2 comm-form-back-img">

         <div class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color">

         
              <div class="form-group">
                 <label>Bank Type Name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <select v-model="form.bankTypeEntryId" name="bankTypeEntryId" class="form-control" :class="{ 'is-invalid': form.errors.has('bankTypeEntryId') }" @change.prevent="bankTypeIdCatch()">
                      <option value="">Select One</option>
                      <option v-for="showBankTypeData in showBankTypeDatas" :value="showBankTypeData.bankTypeEntryId" > {{ showBankTypeData.bankTypeEntryName }}</option>
                  </select>
                  <has-error :form="form" field="bankTypeEntryId"></has-error>
              </div>

                <div class="form-group">
                 <label>Bank Name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <select v-model="form.bankEntryId" name="bankEntryId" class="form-control" :class="{ 'is-invalid': form.errors.has('bankEntryId') }">
                      <option value="">Select One</option>
                      <option v-for="showBankName in showBankNames" :value="showBankName.bankEntryId" > {{ showBankName.bankName }}</option>
                  </select>
                  <has-error :form="form" field="bankEntryId"></has-error>
              </div>

               
               <div v-if="mobile_bank_info">

               <div class="form-group">
                  <label> Account Type <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <select v-model="form.bankAccountType" type="text" name="bankAccountType" :class="{ 'is-invalid': form.errors.has('bankAccountType') }" placeholder=" Account Number" class="form-control">
                      <option value=""> Select Account type </option>
                      <option v-for="mobileBankAccountType in mobileBankAccountTypes" 
                      :value="mobileBankAccountType.id"> {{mobileBankAccountType.name}} </option>
                  </select>
                  <has-error :form="form" field="bankAccountType"></has-error>
              </div>

               <div class="form-group">
                  <label> Account Number <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <input v-model="form.bankAccountNumber" type="text" name="bankAccountNumber" :class="{ 'is-invalid': form.errors.has('bankAccountNumber') }" placeholder=" Account Number" class="form-control">
                  <has-error :form="form" field="bankAccountNumber"></has-error>
              </div>
              </div>
               
               <div v-if="agent_bank_info">

               <div class="form-group">
                  <label> Account Number <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <input v-model="form.bankAccountNumber" type="text" name="bankAccountNumber" :class="{ 'is-invalid': form.errors.has('bankAccountNumber') }" placeholder=" Account Number" class="form-control">
                  <has-error :form="form" field="bankAccountNumber"></has-error>
              </div>
 
              </div>

               <div v-if="corporate_bank_info">
                

                <div class="form-group">
                  <label> Account Type <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <select v-model="form.bankAccountType" type="text" name="bankAccountType" :class="{ 'is-invalid': form.errors.has('bankAccountType') }" placeholder=" Account Number" class="form-control">
                      <option value=""> Select Account type </option>
                      <option v-for="corporateBankAccountType in corporateBankAccountTypes" 
                      :value="corporateBankAccountType.id"> {{corporateBankAccountType.name}} </option>
                  </select>
                  <has-error :form="form" field="bankAccountType"></has-error>
              </div>


               <div class="form-group">
                  <label>Bank Branch</label>
                  <input v-model="form.bankBranch" type="text" name="bankBranch" :class="{ 'is-invalid': form.errors.has('bankBranch') }" placeholder="Bank Branch" class="form-control">
                  <has-error :form="form" field="bankBranch"></has-error>
              </div>

              <div class="form-group">
                  <label>Bank Account Name</label>
                  <input v-model="form.bankAccountName" type="text" name="bankAccountName" :class="{ 'is-invalid': form.errors.has('bankAccountName') }" placeholder="Bank Account Name" class="form-control">
                  <has-error :form="form" field="bankAccountName"></has-error>
              </div>

               <div class="form-group">
                  <label>Bank Account Number <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <input v-model="form.bankAccountNumber" type="text" name="bankAccountNumber" :class="{ 'is-invalid': form.errors.has('bankAccountNumber') }" placeholder="Bank Account Number" class="form-control">
                  <has-error :form="form" field="bankAccountNumber"></has-error>
              </div>
              </div>
               <div v-if="bank_card_info">
                

                <div class="form-group">
                  <label> Card Type <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <select v-model="form.bankAccountType" type="text" name="bankAccountType" :class="{ 'is-invalid': form.errors.has('bankAccountType') }" placeholder="" class="form-control">
                      <option value=""> Select Card type </option>
                      <option v-for="bankCardTypes in bankCardTypes" 
                      :value="bankCardTypes.id"> {{bankCardTypes.name}} </option>
                  </select>
                  <has-error :form="form" field="bankAccountType"></has-error>
              </div>


              <div class="form-group">
                  <label>Cardholder Name</label>
                  <input v-model="form.bankAccountName" type="text" name="bankAccountName" :class="{ 'is-invalid': form.errors.has('bankAccountName') }" placeholder="Cardholder Name" class="form-control">
                  <has-error :form="form" field="bankAccountName"></has-error>
              </div>

               <div class="form-group">
                  <label>Card Number<i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <input v-model="form.bankAccountNumber" type="text" name="bankAccountNumber" :class="{ 'is-invalid': form.errors.has('bankAccountNumber') }" placeholder="Card Number" class="form-control">
                  <has-error :form="form" field="bankAccountNumber"></has-error>
              </div>
              </div>

               <div class="form-group" style="display:none;">
                <label>Status</label>
                <select v-model="form.status" name="status"  :class="{ 'is-invalid': form.errors.has('status') }" class="form-control">
                  <option value="">Select One</option>
                  <option value="1">Publish</option>
                  <option value="0">Unpublish</option>
                 </select>
                 <has-error :form="form" field="status"></has-error>
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

                            <span class="mr-1"> Add Bank </span>

                                </button>


                            </div>
                            </div>
 
<!-- -----------------------------   // card footer  --> 
       </form>
    </div>

   <div class="card main-card  element-block-example mt-5">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">  Bank   List</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th>SN</th>
               <th>Bank Type</th>
               <th>Bank Name</th>
               <th>Bank Branch</th>
               <th>Account Name</th>
               <th>Account Number</th>
               <th>Balance</th>
               <th>Statement</th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(shopBankAllData, index) in shopBankAllDatas">
                <td>{{ index+1 }}</td>
                <td v-if="shopBankAllData.bank_type_entry">
                    {{ shopBankAllData.bank_type_entry.bankTypeEntryName }}
                </td>
                <td v-else></td>
                <td v-if="shopBankAllData.bank_entry">
                   {{ shopBankAllData.bank_entry.bankName }}
                </td>
                <td v-else></td>
                <td>{{ shopBankAllData.bankBranch }}</td>
                <td>{{ shopBankAllData.bankAccountName }}</td>
                <td>{{ shopBankAllData.bankAccountNumber }}</td>
                <td>
                    <div v-if="shopBankAllData.status == 1">
                          <button type="button"  @click="changeStatus(shopBankAllData.bankId)" class="btn btn-hover-shine btn-success">Published</button>
                    </div>
                    <div v-else>
                          <button type="button"  @click="changeStatus(shopBankAllData.bankId)" class="btn btn-hover-shine btn-danger">Unpublish</button>
                    </div>
                </td>
                <td>
                    <router-link :to="`/shopadd@bankEdit${shopBankAllData.bankId}`" class="btn btn-hover-shine  btn-primary"><i class=" fa fa-edit"></i>Edit</router-link>
                    <!-- <button type="button" @click="deleteBankEntry(shopBankAllData.bankId)" class="btn btn-hover-shine btn-danger"><i class=" fa fa-trash"></i>Delete</button> -->
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
                
                    mobile_bank_info:0,
                    loading: false,
                    agent_bank_info:0,
                    corporate_bank_info:0,
                    bank_card_info:0,

                form: new Form({
                    bankTypeEntryId: '',
                    bankEntryId: '',
                    bankBranch: '',
                    bankAccountType: '',
                    bankAccountName: '',
                    bankAccountNumber: '',
                    status: 1,
                }),
                // showDataEntrys:[],
                showBankTypeDatas:[],
                showBankNames: [],
                shopBankAllDatas: [],
                corporateBankAccountTypes: [],
                bankCardTypes: [],
                mobileBankAccountTypes: [],
            }

        },
        mounted() {
            this.getData();
            this.showBankType();
            this.corporateBankAccountType();
            this.bankCardType();
            this.mobileBankAccountType();
        },
        methods: {
            create() {
                this.loading = true;
                this.form.post('/addBank').then(res => {
                    this.loading = false;
                    if (res.data.changebankName){
                        Toast.fire({
                            icon: 'error',
                            title: 'Change Your Bank Name'
                        })
                  }
                  else{
                      Toast.fire({
                          icon: 'success',
                          title: 'Bank Entry Successfully'
                      })
                this.mobile_bank_info=0,
                this.agent_bank_info=0,
                this.corporate_bank_info=0,
                this.bank_card_info=0,

                      this.form.reset()
                      this.getData();
                  }
                }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
            },
            getData() {
                axios.get('/addBank')
                    .then(res => {
                        this.shopBankAllDatas = res.data.showData

                    })
            },
            corporateBankAccountType() {
              axios.get('/corporateBankAccountType').then(res => {
                    this.corporateBankAccountTypes = res.data.data
                })
            },
            bankCardType() {
              axios.get('/bankCardType').then(res => {
                    this.bankCardTypes = res.data.data
                })
            },
            mobileBankAccountType() {
              axios.get('/mobileBankAccountType').then(res => {
                    this.mobileBankAccountTypes = res.data.data
                })
            },
            showBankType() {
              axios.get('/bankTypeEntryList').then(res => {
                    this.showBankTypeDatas = res.data.show
                })
            },
            bankTypeIdCatch() {
                
                if(this.form.bankTypeEntryId == 1){
                    this.corporate_bank_info=1;
                    this.mobile_bank_info=0;
                    this.agent_bank_info=0;
                    this.bank_card_info=0;
                }
                else if(this.form.bankTypeEntryId == 2){
                    this.corporate_bank_info=0;
                    this.mobile_bank_info=1;
                    this.agent_bank_info=0;
                    this.bank_card_info=0;
                }
                else if(this.form.bankTypeEntryId == 3){
                    this.corporate_bank_info=0;
                    this.mobile_bank_info=0;
                    this.agent_bank_info=0;
                    this.bank_card_info=1;
                }
                axios.get('/bankNameList/'+this.form.bankTypeEntryId).then(res => {
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
