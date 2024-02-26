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
                     <select class="form-control"  v-model="form.customerTypeId" aria-label="Default select example" @click.prevent="customerTypeIdCatch()"> 
      
              <option v-for="customerTypeList in customerTypeLists" :value="customerTypeList.shopCustomerTypeEntryId">{{customerTypeList.shopCustomerName}}</option>
  
            </select>
                 </div>
                 
                 
                 <div class="form-group ">
                     <label>Cusmter Name</label>
                     <multiselect v-model="form.salesCustomerEntryId" name="salesCustomerEntryId" :options="salesCustomerLists" @input="customerIdCatch" :custom-label="salesCustomerName"  placeholder="Select one" >
                          <span slot="noResult">Oops! Customer Name Not Found</span>
                     </multiselect>
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
                </span>Submit</button>
              </div> 
                     
                </div>
            </div>
          
       </form>
     </div>

      <div class="card mt-5" >
         <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
           <h3 style="color:black">Due Limit List</h3>
         </div>
         <div class="table-responsive bg-white">
           <table class="table table-hover table-bordered table-striped">
             <thead>
                <tr>
                  
                  <th>SN</th>
                  <th>Customer Type</th>
                  <th>Customer Name</th>                         
                  <th>Limit Amount</th>
                  <th>Action</th>
                </tr>
               </thead>
               <tbody>
                 <tr v-for="info,index in infos.data" :key="info.id">
                  
                   <td>{{index+1}} </td>
                   <td>{{ info.customer_type.shopCustomerName}} </td>
                   <td>{{ info.customer.customerName}} </td>                
                   <td>{{ info.limitDueAmmount }}</td>
                 
                   
                       <td>
                   <router-link :to="`/dueLimitSetup@Edit${info.id}`" class="mr-2 btn-hover-shine btn btn-shadow btn-primary">
                      <i class=" fa fa-eye pr-2"></i> Edit
                   </router-link>

                   <button type="button" @click="distroy(info.id)"  class="btn btn-hover-shine btn-danger"><i class=" fa fa-trash"></i>Delete</button>
                </td>

                
              </tr>
             </tbody>
          </table>
        </div>
      <span class="card_footer">
           <pagination :data="getDatas" :limit="limit"  @pagination-change-page="getPaginateList">
             <span slot="prev-nav">&lt; Previous</span>
             <span slot="next-nav">Next &gt;</span>
           </pagination>
        </span>
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
                  dueLimitAmmount:''
               
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
                this.form.post('/dueLimit').then(res => {
                  this.loading = false;
                   
                  if(res.data.status==0){
                        
                        Toast.fire({
                            icon: 'error',
                            title: 'This customer allready setup'
                        })
                        
                  }else{
                  
                        this.form.reset()
                        Toast.fire({
                            icon: 'success',
                            title: 'Due Limit Setup Successfully'
                        })
                        this.ShowDataLists()
                  }
                       
                   
                }).catch((res) => {
                          this.loading = false;
                          Toast.fire({
                            icon: "error",
                            title: "Something Missing",
                          });
                        });
            },
             ShowDataLists() {
              axios.get('/dueLimit').then(res => {
                this.infos = res.data.data
               
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
          distroy(id){
          axios.delete('/dueLimit/'+id).then(res => {
                Toast.fire({
                    icon: 'success',
                    title: 'Delete Successfully'
                })
                this.ShowDataLists();
           });
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
