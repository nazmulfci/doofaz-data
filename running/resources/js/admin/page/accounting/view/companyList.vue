.<template>
   <span>    

   <div class="card main-card  element-block-example mt-5">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black"> Person List </h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">
            <thead>
            <tr>
                <th colspan="12" class="text-center"> 
                  <center>
                    <form method="" @submit.prevent="search()">
                      <table class="">
                        <tr>                           
                            <td>
                                <select v-model="form.type" type="text" class="form-control" style="width:180px;">
                                <option value=""> Select Type </option>
                                <option v-for="typeList in typeLists" 
                               :value="typeList.id"> {{typeList.name}} </option> 
                                </select>
                            </td>
                            <td>
                                <input type="text" v-model="form.companyName" class="form-control" placeholder="Name" style="width:150px;">
                            </td>
                            <td>
                                <input type="text" v-model="form.mobileNo" class="form-control" placeholder="Mobile No" style="width:150px;">
                            </td>
                            <td> <input type="submit" class="btn btn-primary" value="Search"> </td>
                            <td> <input type="reset" class="btn btn-danger"
                            @click="getData()"> 
                            </td>
                        </tr>
                      </table>
                  </form>
                  </center> 
                   </th>
              </tr>
              </thead>
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th> SN</th>
               <th> Type </th>
               <th> Person/Company<span class="text-light">_</span>Name  </th>
               <th> Mobile No</th>
               <th> Email </th>
               <th> Address </th> 
               <th> Ladger </th>
               <th> Statement </th>
               <th> Voucher </th>
             </tr>
            </thead>
            <tbody style="display:nonee;">
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
                    <router-link :to="`/companyGeneralLadger${data.id}`" 
                    class="btn btn-hover-shine  btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    Ladger </router-link>
                </td>
                 
                <td>
                    <router-link :to="`/companyStatement${data.id}`" 
                    class="btn btn-hover-shine  btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    Statment </router-link>
                </td>
                 
                <td>
                    <router-link :to="`companyVoucherList${data.id}`" 
                    class="btn btn-hover-shine  btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    Voucher </router-link>
                </td>
                  
              </tr>
            </tbody>
            <tbody v-html="datas" style="display:none;">
               
            </tbody>
            <tr v-if="resultNotFound">
                <td colspan="16">
                  <center> Result Not Found. </center>
                </td>
              </tr>
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
                    resultNotFound: false,
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
                this.form.post('/addIncomeExpenseCompany').then(res => {
                   
                        Toast.fire({
                            icon: 'success',
                            title: 'Add Successfull'
                        })

                        this.form.reset()
                        this.getData();
                  
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
                this.form.type = '';
                this.resultNotFound=false;
                
                axios.get('/addIncomeExpenseCompany')
                    .then(res => {
                        this.datas = res.data.data

                    })
            },
            search() {
      
                let url = 'searchIncomeExpenseCompany';
                this.form.post(url).then((response) => {

                    if(response.data.data == ''){
                        this.resultNotFound = true;
                    }else{
                        this.resultNotFound = false;
                    }
                    
                    this.datas = response.data.data;
                    
                    });
            },

           
        }
    }
</script>
