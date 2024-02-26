<template id="">
  <span>
      <div class="card">
        <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
             <h3 style="color:black"> Price Type Configure </h3>
         </div>
         <form @submit.prevent="add()">
            <div class="product-discount py-4 px-2">
               <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
                   <div class="form-group ">
                     <label>Price Type</label>
            
                     <select class="form-control"
                       v-model="form.priceTypeId"> 
      
              <option v-for="customerTypeList in customerTypeLists" :value="customerTypeList.salesPriceTypeId">{{customerTypeList.salesPriceType}}</option>
  
            </select>
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
                </span>
                Update </button>
              </div> 
                     
                </div>
            </div>
          
       </form>
     </div>

    
  </span>

</template>

<script>
 

    export default {
        data(){
            return{
                 loading: false,
                form: new Form({
                  priceTypeId:'',
               
                }),
              customerTypeLists:[],
            
            }
        },
       
        
        mounted() {
               this.customerTypeList() 
        },
        methods: {
        
            
             add() {
               this.loading = true;
                axios.get('/updatePriceTypeConfigure/'+this.form.priceTypeId).then(res => {
                    this.loading = false;
                    Toast.fire({
                            icon: "success",
                            title: "Update Successful.",
                          });

                  this.customerTypeList();

                }).catch((res) => {
                          this.loading = false;
                          Toast.fire({
                            icon: "error",
                            title: "Something Missing",
                          });
                        });
            },
            
           
            customerTypeList() {
              axios.get('/salesPriceType').then(res => {
                  this.customerTypeLists = res.data.salesPriceTypes;
                  this.form.priceTypeId = res.data.priceTypeId;   
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
