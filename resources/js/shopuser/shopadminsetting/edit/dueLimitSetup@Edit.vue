<template id="">
  <span>
      <div class="card">
        <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
             <h3 style="color:black">Due Limit Setup</h3>
         </div>
         <form @submit.prevent="add()">
            <div class="product-discount py-4 px-2">
               <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
                   <div class="form-group ">
                     <label>Cusmter Type</label>
                     <!-- <multiselect v-model="form.customerTypeId"    name="customerTypeId"  :options="customerTypeLists" @input="customerTypeIdCatch"  :custom-label="customerTypeName"  placeholder="Select one" >
                         <span slot="noResult">Oops! Customer Type Not Found</span>
                     </multiselect> -->
                     <select class="form-control" disabled  v-model="form.customerTypeId" aria-label="Default select example" @click.prevent="customerTypeIdCatch()"> 
      
              <option v-for="customerTypeList in customerTypeLists" :value="customerTypeList.shopCustomerTypeEntryId">{{customerTypeList.shopCustomerName}}</option>
  
            </select>
                 </div>
                 
                 
                 <div class="form-group ">
                     <label> Cusmter Name </label>
                     <input type="hidden" v-model="form.salesCustomerEntryId" name="" 
                     class="form-control"/>
                     <input type="text" disabled v-model="form.salesCustomerEntryName" name="" 
                     class="form-control"/>
                 </div>
                 <div class="form-group ">
                     <label>Due Limit Ammount</label>
                    <input type="text" v-model="form.dueLimitAmmount" name="dueLimitAmmount"  placeholder="Due Limit Ammount" >
                 
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
                </span> Update </button>
              </div> 
                     
                </div>
            </div>
          
       </form>
     </div>

      
  </span>

</template>

<script>
import Multiselect from 'vue-multiselect'

    export default {
        data(){
            return{
                 loading: false,
                form: new Form({
                  customerTypeId:'',
                  salesCustomerEntryId:'',
                  dueLimitAmmount:'',
                  salesCustomerEntryName:''
               
                }),
              customerTypeLists:[],
              salesCustomerLists:[],
              infos:[],
            }
        },
        props:{
             limit: {
               type: Number,
               default: 2
           }
        },
        components: {
          Multiselect,   
        

        },
        mounted() {
           
               this.customerTypeIdCatch() 
               this.customerTypeList() 
               this.ShowDataLists()  
        },
        methods: {
         salesCustomerName ({customerName}) {
             return `${customerName}`
          }, 
            
             add() {
               this.loading = true;
                this.form.put('/dueLimit/'+this.$route.params.id).then(res => {
                  this.loading = false;
                   
                        if(res.data.status==0)
                        this.form.reset()
                        Toast.fire({
                            icon: 'success',
                            title: 'Due Limit Update Successfully'
                        })

                        this.$router.push('/due@limitSetup');
                       
                   
                }).catch((res) => {
                          this.loading = false;
                          Toast.fire({
                            icon: "error",
                            title: "Something Missing",
                          });
                        });
            },
             ShowDataLists() {
              axios.get('/dueLimit/'+this.$route.params.id+'/edit').then(res=>{
                    this.form.customerTypeId = res.data.data.customerTypeId;
                    this.form.salesCustomerEntryId = res.data.data.customerId;
                    this.form.dueLimitAmmount = res.data.data.limitDueAmmount;
                    this.form.salesCustomerEntryName = res.data.data.customer.customerName;
              })
            },
                 getPaginateList(page = 1){
              axios.get('/dueLimit?page=' + page)
              .then(response => {
                  this.getDatas = response.data.data;
              });
            },
            customerTypeList() {
              axios.get('/salesProductEntry/create').then(res => {
      
               
                  this.customerTypeLists = res.data.customerTypeLists
          
                   
              })
            
          }, 
                 customerTypeIdCatch(){
              axios.get('/customerTypeIdCatch/'+this.form.customerTypeId).then(res => {
                  this.salesCustomerLists = res.data.salesCustomerLists
                 
              })
          },
           

        }
    }
</script>
<style media="screen">
  .product-discount .input-group-text{
      padding: 0px 20px;
  }
  .product-discount .form-check-input {
    margin-left: -5px;
  }
  .product-discount input{
      background-color: #fff;
      border: 1px solid #ced4da;
      border-radius: .25rem;
      padding: 8px 20px;
  }
</style>
