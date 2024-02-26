.<template>
   <span>
    <div class="card">
       <div class="card-header alert-info">
          <h3>
            <router-link :to="`/incomeExpense`"
             class="btn btn btn-outline-primary btn-shadow  btn-hover-shine"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg> </router-link> Income Provider Entry </h3>
      </div>


      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
          <form @submit.prevent="create()">
            <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color">

 
               <div class="form-group" style="display:none;">
                 <label> Income Type
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>
                   <select
                v-model="form.incomeType"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('incomeType') }">
                <option value=""> Select </option>
                <option v-for="incomeTypeList in incomeTypeLists" 
                :value="incomeTypeList.headCode"> {{incomeTypeList.headName}} </option> 
              </select>
              <has-error :form="form" field="incomeType"></has-error>
              </div> 

               <div class="form-group" style="display:none;">
                 <label> Income Head 
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>
                  <select v-model="form.incomeHead" name="incomeHead" 
                  class="form-control" :class="{ 'is-invalid': form.errors.has('incomeHead') }">
                      <option value="">Select One</option>
                      <option v-for="incomeHeadListById in incomeHeadListByIds" 
                      :value="incomeHeadListById.id" > 
                      {{ incomeHeadListById.name }} 
                      </option>
                  </select>
                  <has-error :form="form" field="incomeHead"></has-error>
              </div>

              <div class="form-group">
                 <label> Person / Company 
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                 </label>
                  <select v-model="form.incomeCompany" name="incomeCompany" 
                  class="form-control" :class="{ 'is-invalid': form.errors.has('incomeCompany') }"
                  @change="getIncomeExpenseCompanyInfo()"
                  >
                      <option value=""> Select One </option>
                      <option v-for="incomeCompanyList in incomeCompanyLists" 
                      :value="incomeCompanyList.id" > 
                      {{ incomeCompanyList.companyName }} 
                      </option>
                  </select>
                  <has-error :form="form" field="incomeCompany"></has-error>
              </div>
               

              <div class="form-group">
                 <label> Income Purpose </label>
                  <input type="text" v-model="form.incomePurpous"  
                  name="incomePurpose" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('incomePurpose') }">
                  <has-error :form="form" field="incomePurpose"></has-error>
              </div>

                

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

                                <button type="submit" class="btn-pill btn-shadow btn btn-primary btn-lg float-right btn-hover-shine"
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
  
      </div>
    </div>

   <div class="card main-card  element-block-example mt-5">
      <div class="card-header alert-info">
        <h4>
          <i class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"></i>
          Income Provider List</h4>
      </div>
      <div class="table-responsive p-3">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr class="alert-info">
               <th> SN</th>
               <!-- <th>  Income<span class="textTransparent">_</span>Head   </th> -->
               <th>  Income<span class="textTransparent">_</span>Purpose  </th>
               <th> Person/Company</th>
               <th> Note </th>
               <th> Delete </th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(data,index) in datas">
                <td>{{ index+1 }}</td>
                <!-- <td>
                  <span v-for="incomeHeadList in incomeHeadLists"
                  v-if="incomeHeadList.id==data.incomeHead">
                  {{incomeHeadList.name}}
                  </span>
                </td> -->
                <td> {{ data.incomePurpous }} </td>
                <td> 
                  <span v-for="incomeCompanyList in incomeCompanyLists" 
                      :value="incomeCompanyList.id" 
                      v-if="data.incomeProviderId==incomeCompanyList.id"
                      > 
                      {{ incomeCompanyList.companyName }} 
                      <br>
                      {{ incomeCompanyList.mobileNo }} 
                  </span>
                   
                   </td>
                <td> {{ data.note }} </td>
                 
                
                <td>
                    <button v-if="data.deleteStatus"  type="button" @click="deleteData(data.id)" 
                    class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine">
                    <i class=" fa fa-trash"></i></button>
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
                    incomeTypeLists: [],
                    incomeHeadListByIds: [],
                    incomeHeadLists: [],
                    paidDateText:'',
                    incomeCompanyLists:[],
                    datas:[],
                    chartOfAccounts:[],
                    loading: false,


                form: new Form({
                    incomeHead: '',
                    incomeType: '',
                    incomeCompany: '',
                    incomePurpous: '',
                    mobileNo: '',
                    email: '',
                    address: '',
                    note: '',
                 
                }),
                
            }

        },
        mounted() {

            this.getData();
            this.incomeTypeList();
            this.incomeCompanyList();
            this.getIncomeHeadList();
            this.chartOfAccount();

        },
        methods: {
            create() {
              this.loading = true;
                this.form.post('/addIncomeProvider').then(res => {
                   this.loading = false;
                      Toast.fire({
                          icon: 'success',
                          title: 'Entry Insert Successfully'
                      })
 

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
            incomeTypeList(){
                let uri = `incomeTypeList`;
                axios.get(uri).then(response=>{
                    this.incomeTypeLists = response.data.data;
                    this.form.incomeType = response.data.incomeType;

                    axios.get('/getIncomeHeadList/'+this.form.incomeType).then(res => {
                    this.incomeHeadListByIds = res.data.data;
                    this.form.incomeHead = res.data.id
                })

                })
            },
            getData() {
                axios.get('/addIncomeProvider')
                    .then(res => {
                        this.datas = res.data.data

                    }),
                    this.incomeTypeList()
            },
            
            incomeCompanyList() {
              axios.get('/addIncomeExpenseCompany').then(res => {
                    this.incomeCompanyLists = res.data.data
                })
            },
            
            chartOfAccount() {
              axios.get('/chartOfAccount').then(res => {
                    this.chartOfAccounts = res.data.chartOfAccounts
                })
            },
          
            getIncomeHeadList() {
              axios.get('/addIncomeType/').then(res => {
                    this.incomeHeadLists = res.data.data
                })
            },
            getIncomeExpenseCompanyInfo() {
              axios.get('/getIncomeExpenseCompanyFrom/'+this.form.incomeCompany).then(res => {
                    this.form.mobileNo = res.data.data.mobileNo
                    this.form.email = res.data.data.email
                    this.form.address = res.data.data.address
                })
            },

            deleteData(id){
                axios.delete('/addIncomeProvider/'+id)
                    .then( res=>{
                      if(res.data.delete==0){
                        Toast.fire({
                            icon: 'error',
                            title: ' Not Delete'
                        })
                      }else{
                        Toast.fire({
                            icon: 'success',
                            title: ' Delete Successfull'
                        })
                        this.getData();
                      }
                    })
            },

          
        }
    }
</script>
