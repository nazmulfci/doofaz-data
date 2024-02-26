<template>
   <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3> Loan Receiver Entry</h3>
      </div>

       <div class="supplier-entry py-4 px-2 comm-form-back-img">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color">
          <form @submit.prevent="create()">

              <router-link :to="`/loanManagement`" class="btn btn-primary"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                Back </router-link>


                
              <div class="form-group">
                 <label> Loan Receiver Type <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <select v-model="form.loanProviderTypeId" name="loanProviderTypeId" class="form-control" :class="{ 'is-invalid': form.errors.has('loanProviderTypeId') }" @change.prevent="bankTypeIdCatch()">
                      <option value="">Select One</option>
                      <option v-for="loanProviderTypeList in loanProviderTypeLists" 
                      :value="loanProviderTypeList.id" 
                      v-if="loanProviderTypeList.id==1"
                      > {{ loanProviderTypeList.type }}/Company</option>
                  </select>
                  <has-error :form="form" field="loanProviderTypeId"></has-error>
              </div>
  
               <div v-if="personal">

               <div class="form-group">
                  <label> Person/Company Name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <input v-model="form.personName" type="text" name="personName" :class="{ 'is-invalid': form.errors.has('personName') }" placeholder="Person/Company Name" class="form-control">
                  <has-error :form="form" field="personName"></has-error>
              </div>

               <div class="form-group">
                  <label> Mobile Number <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <input v-model="form.mobileNumber" type="text" name="mobileNumber" :class="{ 'is-invalid': form.errors.has('mobileNumber') }" placeholder=" Mobile Number" class="form-control">
                  <has-error :form="form" field="mobileNumber"></has-error>
              </div>

               <div class="form-group">
                  <label> Address <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <textarea v-model="form.address" type="text" name="address" :class="{ 'is-invalid': form.errors.has('address') }" placeholder="Address" class="form-control"></textarea>
                  <has-error :form="form" field="address"></has-error>
              </div>

              </div>
               
               <div v-if="ngo">

               <div class="form-group">
                  <label> NGO Name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <input v-model="form.personName" type="text" name="personName" :class="{ 'is-invalid': form.errors.has('personName') }" placeholder="NGO Name" class="form-control">
                  <has-error :form="form" field="personName"></has-error>
              </div>

              <div class="form-group">
                  <label> Branch Name </label>
                  <input v-model="form.branchName" type="text" name="branchName" :class="{ 'is-invalid': form.errors.has('branchName') }" placeholder="Branch Name" class="form-control">
                  <has-error :form="form" field="branchName"></has-error>
              </div>

               <div class="form-group">
                  <label> Contact Person Name </label>
                  <input v-model="form.contactPersonName" type="text" name="contactPersonName" :class="{ 'is-invalid': form.errors.has('contactPersonName') }" placeholder=" Contact Person Name" class="form-control">
                  <has-error :form="form" field="contactPersonName"></has-error>
              </div>

               <div class="form-group">
                  <label>Contact Person Mobile Number <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <input v-model="form.mobileNumber" type="text" name="mobileNumber" :class="{ 'is-invalid': form.errors.has('mobileNumber') }" placeholder="Contact Person Mobile Number" class="form-control">
                  <has-error :form="form" field="mobileNumber"></has-error>
              </div>

               <div class="form-group">
                  <label> Address <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <textarea v-model="form.address" type="text" name="address" :class="{ 'is-invalid': form.errors.has('address') }" placeholder="Address" class="form-control"></textarea>
                  <has-error :form="form" field="address"></has-error>
              </div>
 
              </div>

               <div v-if="bank">
                

                <div class="form-group">
                  <label> Bank Name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <input v-model="form.personName" type="text" name="personName" :class="{ 'is-invalid': form.errors.has('personName') }" placeholder="Bank Name" class="form-control">
                  <has-error :form="form" field="personName"></has-error>
              </div>

                <div class="form-group">
                  <label> Branch Name </label>
                  <input v-model="form.branchName" type="text" name="branchName" :class="{ 'is-invalid': form.errors.has('branchName') }" placeholder="Branch Name" class="form-control">
                  <has-error :form="form" field="branchName"></has-error>
              </div>

               <div class="form-group">
                  <label> Contact Person Name </label>
                  <input v-model="form.contactPersonName" type="text" name="contactPersonName" :class="{ 'is-invalid': form.errors.has('contactPersonName') }" placeholder=" Contact Person Name" class="form-control">
                  <has-error :form="form" field="contactPersonName"></has-error>
              </div>

               <div class="form-group">
                  <label>Contact Person Mobile Number <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <input v-model="form.mobileNumber" type="text" name="mobileNumber" :class="{ 'is-invalid': form.errors.has('mobileNumber') }" placeholder="Contact Person Mobile Number" class="form-control">
                  <has-error :form="form" field="mobileNumber"></has-error>
              </div>

               <div class="form-group">
                  <label> Address <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                </label>
                  <textarea v-model="form.address" type="text" name="address" :class="{ 'is-invalid': form.errors.has('address') }" placeholder="Address" class="form-control"></textarea>
                  <has-error :form="form" field="address"></has-error>
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

             <div class="text-right pt-3">
               <button type="submit" class="mr-2 btn-pill btn-hover-shine btn btn-primary"
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
                </span>Submit</button>
             </div>
          </form>
        </div>
      </div>
    </div>

   <div class="card main-card  element-block-example mt-5">
      <div class="card-header alert-info">
        <h3> Loan Receiver List </h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0 mt-3">
          <thead>
             <tr class="alert-info">
               <th>SN</th>
               <th> Type</th>
               <th> Name</th>
               <th> Mobile Number</th>
               <th> Address </th>
               <th>Status</th>
               <th>Action</th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(shopBankAllData, index) in shopBankAllDatas">
                <td>{{ index+1 }}</td>
                <td>
                    <span v-for="loanProviderTypeList in loanProviderTypeLists"
                    v-if="loanProviderTypeList.id==shopBankAllData.providerType"
                    >
                    {{loanProviderTypeList.type}}
                    </span>
                      
                </td> 
                <td>{{ shopBankAllData.providerName }}</td>
                <td>{{ shopBankAllData.providerContactPersonMobileNo }}</td>
                <td>{{ shopBankAllData.providerAddress }}</td>
                <td>
                    <div v-if="shopBankAllData.status == 1">
                          <button type="button" @click="changeStatus(shopBankAllData.id)" class="btn btn-hover-shine btn-success">Published</button>
                    </div>
                    <div v-else>
                          <button type="button" @click="changeStatus(shopBankAllData.id)" class="btn btn-hover-shine btn-danger">Unpublish</button>
                    </div>
                </td>
                <td>
                    <router-link :to="`/loanProvider@edit${shopBankAllData.id}`" class="btn btn-hover-shine  btn-primary"><i class=" fa fa-edit"></i>Edit</router-link>
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
                
                personal:0,
                ngo:0,
                bank:0,
                loading: false,

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
                this.loading = true;
                this.form.post('/addLoanReceiverEntry').then(res => {
                 this.loading = false;
                      Toast.fire({
                          icon: 'success',
                          title: 'Loan Receiver Entry Successfully'
                      })

                this.personal=0,
                this.ngo=0,
                this.bank=0,

                      this.form.reset()
                      this.getData();
                  
                }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
            },
            getData() {
                axios.get('/addLoanReceiverEntry')
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