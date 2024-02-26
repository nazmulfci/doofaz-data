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
             Person/Company Entry </h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
          <form @submit.prevent="create()">
            <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color">
        
           
                <div class="form-group">
                 <label> Type 
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <select type="text" v-model="form.type"  
                  name="type" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('type') }"
                  @change="changePersonCompany()"
                  >
                  <option value=""> Select Type </option>
                  <option v-for="typeList in typeLists" :value="typeList.id"> {{typeList.name}} </option>
                  </select>
                  <has-error :form="form" field="type"></has-error>
              </div>
                 
                <div class="form-group">
                 <label> {{companyNameText}} Name 
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <input type="text" v-model="form.companyName"  
                  name="companyName" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('companyName') }">
                  <has-error :form="form" field="companyName"></has-error>
              </div>
 
                <div class="form-group">
                 <label> Mobile No 
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <input type="number" v-model.number="form.mobileNo"  
                  name="mobileNo" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('mobileNo') }">
                  <has-error :form="form" field="mobileNo"></has-error>
              </div>

                <div class="form-group">
                 <label> Email </label>
                  <input type="text" v-model="form.email"  
                  name="email" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('email') }">
                  <has-error :form="form" field="email"></has-error>
              </div>

                <div class="form-group">
                 <label> Address </label>
                  <textarea type="text" v-model="form.address"  
                  name="address" class="form-control" 
                  :class="{ 'is-invalid': form.errors.has('address') }"></textarea>
                  <has-error :form="form" field="address"></has-error>
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
          Person/Company List</h4>
      </div>
      <div class="table-responsive p-3">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr class="alert-info">
               <th> SN</th>
               <th> Type </th>
               <th> Name  </th>
               <th> Mobile<span class="textTransparent">_</span>No</th>
               <th> Email </th>
               <th> Address </th>
               <th> Edit </th>
               <th> Delete </th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in datas">
                <td>{{ index+1 }}</td>
                <td> 
                    <span v-for="typeList in typeLists" :value="typeList.id"
                    v-if="typeList.id==data.type"
                    > {{typeList.name}} </span>
                      </td>
                <td> {{ data.companyName }}  </td>
                <td> {{ data.mobileNo }}  </td>
                <td> {{ data.email }}  </td>
                <td> {{ data.address }}  </td>
                 
                <td>
                    <router-link :to="`/incomeExpenseCompany@edit${data.id}`"
                     class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"><i class=" fa fa-edit"></i></router-link>
                </td>
                 
                <td>
                     <button type="button" @click="deleteData(data.id)" 
                     class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine"><i class=" fa fa-trash"></i></button>
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
                    
                    companyNameText:'',
                    datas:[],
                    loading: false,
                    typeLists:[
                                { id: '1', name: 'Person' },
                                { id: '2', name: 'Company' }
                              ],

                form: new Form({
                    type: '',
                    companyName: '',
                    mobileNo: '',
                    email: '',
                    address: '',
                }),
                
            }

        },
        mounted() {
            this.getData();
        },
        methods: {
            create() {
              this.loading = true;
                this.form.post('/addIncomeExpenseCompany').then(res => {
                   this.loading = false;
                        Toast.fire({
                            icon: 'success',
                            title: 'Add Successfull'
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
            changePersonCompany(){
                if(this.form.type == 1){
                    this.companyNameText = 'Person';
                }
                else if(this.form.type == 2){
                    this.companyNameText = 'Company';
                }
            },
            getData() {
                axios.get('/addIncomeExpenseCompany')
                    .then(res => {
                        this.datas = res.data.data

                    })
            },
            deleteData(id){
                axios.delete('/addIncomeExpenseCompany/'+id)
                    .then( res=>{
                      if(res.data.delete==0){
                        Toast.fire({
                            icon: 'error',
                            title: 'Not Delete'
                        })
                      }else{
                        Toast.fire({
                            icon: 'success',
                            title: 'Deleted Successfully'
                        })
                        this.getData();
                      }
                    })
            },

           
        }
    }
</script>
