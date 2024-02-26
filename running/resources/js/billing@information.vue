<template id="">
  <span>
    <div class="card">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Billing Information</h3>
      </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form  @submit.prevent="add()">
            <div class="form-group">
                              <label> Bank Type Name</label>
                              <select
                                v-model="form.senderbankTypeEntryId"
                                name="bankTypeEntryId"
                                class="form-control"
                                :class="{
                                  'is-invalid':
                                    form.errors.has('bankTypeEntryId'),
                                }"
                                @change.prevent="senderBankTypeIdCatch()"
                              >
                                <option value="">Select One</option>
                                <option
                                  v-for="showBankTypeData in showBankTypeDatas"
                                  :key="showBankTypeData.id"
                                  :value="showBankTypeData.bankTypeEntryId"
                                >
                                  {{ showBankTypeData.bankTypeEntryName }}
                                </option>
                              </select>
                              <has-error
                                :form="form"
                                field="bankTypeEntryId"
                              ></has-error>
                            </div>

                        <div >
                        
                          <div class="form-group">
                            <label>Bank Name</label>
                            <select
                              v-model="form.bankEntryId"
                              name="bankEntryId"
                              class="form-control"
                              :class="{
                                'is-invalid': form.errors.has('bankEntryId'),
                              }"
                            
                            >
                              <option value="">Select Bank Name</option>
                              <option
                                v-for="showBankName in showBankNames"
                                :value="showBankName.bankEntryId"
                                :key="showBankName.id"
                              >
                                {{ showBankName.bankName }}
                              </option>
                            </select>
                            <has-error
                              :form="form"
                              field="bankEntryId"
                            ></has-error>
                          </div>

                         <div class="form-group">
                          <label for="exampleFormControlFile1">Upload Instraction</label>
                          <input type="file" class="form-control-file" id="exampleFormControlFile1" @change="changeImage($event)"  name="image">
                           <img :src="form.image" class="img-responsive" height="70" width="90">
                        </div> 
                        </div>
              <div class="text-right pt-3">
                <button type="submit" class="mr-2 btn btn-pill btn-hover-shine  btn-primary">Submit</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  <div class="card main-card  element-block-example mt-5" >
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Phone Number</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
             
               <th>SN</th>           
               <th>Bank</th>           
               <th>Image</th>           
               <th>Action</th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="info ,index in infos" :key="info.id">
               
              <td>{{index+1}}</td>
                <td>
                <span v-if="info.bank">{{info.bank.bankName}}</span>
                 
                </td>
          
                  <td><img :src="'/images/'+info.image" class="img-responsive" height="70" width="90"></td>  
                   <td>                                
                                <button  class="btn btn-danger" @click.prevent="deletePost(info.id)"><i class=" fa fa-trash"></i>Delete</button> 
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
  data() {
    return {
      form: new Form({
       image:'',
        bankEntryId: "",
        senderbankTypeEntryId: "",
      
     
      }),


      showBankTypeDatas: {},
      showBankNames: {},
      infos: {},
     
    };
  },
 
  mounted() {
  
    this.getData();
    this.view();
  },
  methods: {
  
  
  add(){
      this.form.post('billingInformation').then(res=>{
             this.view();
                    Toast.fire({
                        icon: 'success',
                        title: 'Successfully Uploaded'
                    })
      })

  },
  view(){
               axios.get('/billingInformation').then(res=>{
                  this.infos=res.data.data;
               });
  },
   
    getData() {
      axios.get("/bankTypeEntryList").then((res) => {
        this.showBankTypeDatas = res.data.show;
      }),
        axios.get("/paymentTypeList").then((res) => {
          this.paymentTypeLists = res.data.data;
        }),
        axios.get("/addExpense").then((res) => {
          this.datas = res.data.data;
        });
    },
   
    senderBankTypeIdCatch() {
      axios.get("/bankNameList/" + this.form.senderbankTypeEntryId).then((res) => {
        this.showBankNames = res.data.show;
      });
      if (this.form.bankTypeEntryId == 1) {
        this.bankAccount = true;
        this.mobileAccount = false;
      }
      if (this.form.bankTypeEntryId == 2) {
        this.bankAccount = false;
        this.mobileAccount = true;
      }
    },
       changeImage(event) {
                let file = event.target.files[0];
                let reader = new FileReader();
                reader.onload = event => {
                     this.form.image = event.target.result;
                     console.log( event.target.result)
                    };
                reader.readAsDataURL(file);
        
            }, 
      
            deletePost(id){
                axios.delete('billingInformation/'+id).then(res=>{
                        this.view();
                      Toast.fire({
                        icon: 'success',
                        title: 'Successfully Deleted'
                    })    
                })
            }
 
  
  
  },
};
</script>
