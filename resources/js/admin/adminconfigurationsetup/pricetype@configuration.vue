<template id="">
  <span>
    <div class="card">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Shop Customer Type Entry</h3>
      </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form  @submit.prevent="add()">
              
              
              <div class="form-group">
                  <label>Cusmter Type</label>
                   
                     <select class="form-control" v-model="form.customerType"  aria-label="Default select example" > 
      
              <option v-for="customerTypeList in customerTypeLists" :value="customerTypeList.shopCustomerTypeEntryId">{{customerTypeList.shopCustomerName}}</option>
  
            </select>
              </div>
          

                <div class="form-group">
                 <label> Price Type</label>
                     
                       <select class="form-control"  v-model="form.priceType" aria-label="Default select example" > 
      
              <option v-for="salesPriceType in salesPriceTypes" :value="salesPriceType.salesPriceTypeId">{{salesPriceType.salesPriceType}}</option> 
                 </select>
              </div>

             <div class="text-right pt-3">
               <button type="submit" class="mr-2 btn-pill btn-hover-shine btn btn-primary">Submit</button>
             </div>
          </form>
        </div>
      </div>
    </div>

    <div class="card main-card  element-block-example mt-5">
      <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
        <h3 style="color:black">Price Type setup List</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered table-striped">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th>SN</th>
               <th> Customer Type Name</th>
               <th>Price Type Name</th>
               
             </tr>
            </thead>
            <tbody>
              <tr v-for="(psetup, index) in psetups">
                <td>{{ index+1 }}</td>
                <td>{{ psetup.customertype.shopCustomerName }}</td>
                <td>{{ psetup.pricetype.salesPriceType }}</td>
               
              </tr>

            </tbody>
         </table>
       </div>
     </div>
  </span>
</template>
<script>
    export default {
        data () {
            return {
                form: new Form({
                    customerType : '',
                    priceType : '',
                    
                }),
                customerTypeLists:[],
                salesPriceTypes:[],
                psetups:[],

            }
        },
        mounted(){
            this.customerTypeList();
            this.showDataList();
            this.viewInfo();
        },

        //
        methods:{
            add(){
                this.form.post('/priceTypeSetup').then(res=>{
                  Toast.fire({
                        icon: 'success',
                        title: 'Setup  Successfully'
                    })   
                    this.viewInfo();
            this.customerTypeList();
            this.showDataList();
                })
            },
            viewInfo(){
               axios.get('/priceTypeSetup').then(res=>{
                   this.psetups=res.data.data
               })
            },
             customerTypeList() {
              axios.get('/salesProductEntry/create').then(res => {
                  this.uniteLists = res.data.uniteLists
               
                  this.customerTypeLists = res.data.customerTypeLists
                  this.form.customerTypeId = 1
               
                  this.productPriceLists = res.data.productPriceLists
                   
              })
            
          },
            showDataList() {
                    axios.get('/salesPriceType').then(res => {
                           this.salesPriceTypes = res.data.salesPriceTypes
                          
                      })
                },
        }

    }

</script>
