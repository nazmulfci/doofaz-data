<template>
   <span>
    <div class="card">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black"> Income  Expense Company Edit </h3>
      </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form @submit.prevent="loanProviderUpdate1d()">
              <div class="form-group">
                 <label> Loan Provider Type </label>
                  <select v-model="form.loanProviderTypeId" disabled name="loanProviderTypeId" class="form-control" :class="{ 'is-invalid': form.errors.has('loanProviderTypeId') }" @change.prevent="bankTypeIdCatch()">
                      <option value="">Select One</option>
                      <option v-for="loanProviderTypeList in loanProviderTypeLists" 
                      :value="loanProviderTypeList.id" > {{ loanProviderTypeList.type }}</option>
                  </select>
                  <has-error :form="form" field="loanProviderTypeId"></has-error>
              </div>
  
               <div v-if="personal">

               <div class="form-group">
                  <label> Person Name </label>
                  <input v-model="form.personName" type="text" name="personName" :class="{ 'is-invalid': form.errors.has('personName') }" placeholder="Person Name" class="form-control">
                  <has-error :form="form" field="personName"></has-error>
              </div>

               <div class="form-group">
                  <label> Mobile Number </label>
                  <input v-model="form.mobileNumber" type="text" name="mobileNumber" :class="{ 'is-invalid': form.errors.has('mobileNumber') }" placeholder=" Mobile Number" class="form-control">
                  <has-error :form="form" field="mobileNumber"></has-error>
              </div>

               <div class="form-group">
                  <label> Address </label>
                  <textarea v-model="form.address" type="text" name="address" :class="{ 'is-invalid': form.errors.has('address') }" placeholder="Address" class="form-control"></textarea>
                  <has-error :form="form" field="address"></has-error>
              </div>

              </div>
               
               <div v-if="ngo">

               <div class="form-group">
                  <label> NGO Name </label>
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
                  <label>Contact Person Mobile Number </label>
                  <input v-model="form.mobileNumber" type="text" name="mobileNumber" :class="{ 'is-invalid': form.errors.has('mobileNumber') }" placeholder="Contact Person Mobile Number" class="form-control">
                  <has-error :form="form" field="mobileNumber"></has-error>
              </div>

               <div class="form-group">
                  <label> Address </label>
                  <textarea v-model="form.address" type="text" name="address" :class="{ 'is-invalid': form.errors.has('address') }" placeholder="Address" class="form-control"></textarea>
                  <has-error :form="form" field="address"></has-error>
              </div>
 
              </div>

               <div v-if="bank">
                

                <div class="form-group">
                  <label> Bank Name </label>
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
                  <label>Contact Person Mobile Number </label>
                  <input v-model="form.mobileNumber" type="text" name="mobileNumber" :class="{ 'is-invalid': form.errors.has('mobileNumber') }" placeholder="Contact Person Mobile Number" class="form-control">
                  <has-error :form="form" field="mobileNumber"></has-error>
              </div>

               <div class="form-group">
                  <label> Address </label>
                  <textarea v-model="form.address" type="text" name="address" :class="{ 'is-invalid': form.errors.has('address') }" placeholder="Address" class="form-control"></textarea>
                  <has-error :form="form" field="address"></has-error>
              </div>

              </div>

               <div class="form-group">
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
                </span>Update</button>
             </div>
          </form>
        </div>
      </div>
    </div>
 
  </span>
</template>

<script>
    export default {
        data(){
            return{
                
                personal:0,
                loading: false,
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
            loanProviderUpdate(){
                this.loading = true;
                this.form.put('/addLoanProvider/'+this.$route.params.id)
                    .then(res=>{
                        this.loading = false;
                        
                        Toast.fire({
                            icon: 'success',
                            title: 'Loan Provider  Updated successfully'
                        })
                        this.$router.push('/loanProvider@entry')
                    }).catch((res) => {
                            this.loading = false;
                            Toast.fire({
                                icon: "error",
                                title: "Something Missing",
                            });
                            });
            },
            getData() {
                axios.get('/addLoanProvider/'+this.$route.params.id+ '/edit').then( res => {
                    
                    this.form.loanProviderTypeId = res.data.data.providerType;
                    this.form.personName = res.data.data.providerName;
                    this.form.mobileNumber = res.data.data.providerContactPersonMobileNo;
                    this.form.address = res.data.data.providerAddress;
                    this.form.branchName = res.data.data.providerBranchName;
                    this.form.contactPersonName = res.data.data.providerContactPersonName;
                     
                if(res.data.data.providerType == 1){
                    this.personal=1;
                    this.ngo=0;
                    this.bank=0;
                }
                else if(res.data.data.providerType == 2){
                    this.personal=0;
                    this.ngo=1;
                    this.bank=0;
                }
                else if(res.data.data.providerType == 3){
                    this.personal=0;
                    this.ngo=0;
                    this.bank=1;
                }
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

        }
    }
</script>
