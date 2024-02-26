<template id="">
  <span>
    <div class="card">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Bill Offer Information</h3>
      </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form  @submit.prevent="add()">
            

                        <div >


                          
            <div class="form-group">
              <label> Country 
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
  
              <select
                v-model="form.countryId"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('countryId') }"
                name="countryId"
              >
                 <option value=""> Select Currency  </option>
                <option
                  v-for="currencyList in currencyLists"
                  :key="currencyList.id"
                  :value="currencyList.id"
                >
                  {{ currencyList.country }}
                </option>
                 
              </select>  
              <has-error :form="form" field="countryId"></has-error>
            </div>
            

                        
                          <div class="form-group">
                            <label> Title </label>
                            <input
                              v-model="form.title"
                              name="title"
                              class="form-control"
                              :class="{
                                'is-invalid': form.errors.has('title'),
                              }"
                            
                            >
                            <has-error
                              :form="form"
                              field="title"
                            ></has-error>
                          </div>
                        
                          <div class="form-group">
                            <label> Month Amount</label>
                            <input type="number"
                              v-model="form.month"
                              name="month"
                              class="form-control"
                              :class="{
                                'is-invalid': form.errors.has('month'),
                              }"
                            
                            >
                            <has-error
                              :form="form"
                              field="month"
                            ></has-error>
                          </div>
                        
                          <div class="form-group">
                            <label> Discount Amount </label>
                            <input type="number"
                              v-model="form.discountAmount"
                              name="discountAmount"
                              class="form-control"
                              :class="{
                                        'is-invalid': form.errors.has('discountAmount'),
                                      }">
                            <has-error :form="form" field="discountAmount"></has-error>
                          </div>
                        
                          <div class="form-group">
                            <label> Discount Text </label>
                            <input
                              v-model="form.discountText"
                              name="discountText"
                              class="form-control"
                              :class="{
                                'is-invalid': form.errors.has('discountText'),
                              }"
                            
                            >
                            <has-error
                              :form="form"
                              field="discountText"
                            ></has-error>
                          </div>

                          
                        </div>
              <div class="text-right pt-3">
                <button type="submit" class="mr-2 btn btn-pill btn-hover-shine btn-primary"> Submit </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  <div class="card main-card  element-block-example mt-5" >
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black"> Bill Offer Information </h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
             
               <th>SN</th>           
               <th>Country</th>           
               <th>Title</th>           
               <th>Month</th>           
               <th>Discount Amount </th>
               <th>Discount Text </th>
               <th>  </th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="info ,index in infos" :key="info.id">
               
                <td> {{index+1}} </td>
                <td> <option
                  v-for="currencyList in currencyLists"
                  v-if="currencyList.id==info.countryId"
                  :value="currencyList.id"
                >
                  {{ currencyList.country }}
                </option>  </td>
                <td> {{info.title}} </td>
                <td> {{info.month}} </td>
                <td> {{info.discountAmount}} </td>
                <td> {{info.discountText}} </td>
          
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
                countryId:'',
                title:'',
                month:'',
                discountAmount:'',
                discountText:' ',
      }),

      currencyLists:[],
      showBankTypeDatas: {},
      showBankNames: {},
      infos: {},
     
    };
  },
 
  mounted() {
  
    this.getData();
    this.view();
    this.currencyList();
  },
  methods: {
  
    currencyList() {
      let uri = `currencyList`;
      axios.get(uri).then((response) => {
        this.currencyLists = response.data.currencyList;
      });
    },

  
  add(){
      this.form.post('billOffer').then(res=>{
             this.view();
                    Toast.fire({
                        icon: 'success',
                        title: 'Successfully Insert.'
                    });
                    this.form.reset();
      })

  },
  view(){
               axios.get('/getBillOfferList').then(res=>{
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
                axios.get('deleteBillOffer/'+id).then(res=>{
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
