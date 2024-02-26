<template>
    <span>
    <div class="card">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Sales Price Type Entry</h3>
      </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form @submit.prevent="salesPriceTypeEntry()">
              <div class="form-group">
                  <label>Sales Price Type</label>
                  <input  type="text" v-model="form.salesPriceType"  name="salesPriceType" :class="{ 'is-invalid': form.errors.has('salesPriceType') }" placeholder="Sales Price Type"  class="form-control">
                  <has-error :form="form" field="salesPriceType"></has-error>
              </div>

           

             <div class="text-right pt-3">
               <button type="submit" class="mr-2 btn-pill btn-hover-shine btn btn-primary">Submit</button>
             </div>
          </form>
        </div>
      </div>
    </div>

   <div class="card main-card  element-block-example mt-5">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Purchase Type List</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th>SN</th>
               <th>Sales Price Type</th>
              
               <th>Action</th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(type, index) in salesPriceTypes">
                <td>{{ index+1 }}</td>
                <td>{{ type.salesPriceType }}</td>
               
                <td>
                  <router-link :to="`/salesprice@type@edit${type.salesPriceTypeId}`" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"><i class=" fa fa-edit"></i>Edit</router-link>
                  <!-- <button type="button"  @click.prevent="destroy(type.salesPriceTypeId)" class="btn-hover-shine btn btn-shadow btn btn-danger"><i class=" fa fa-trash"></i>Delete</button> -->
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
                    salesPriceType: '',
                   
                }),
                salesPriceTypes:{},
            }
        },
      
        mounted() {
            this.showDataList();
           
        },
        methods: {
            salesPriceTypeEntry() {
                this.form.post('/salesPriceType').then(res => {
                  
                   
                        Toast.fire({
                            icon: 'success',
                            title: 'Sales Price Type Entry successfully'
                        })
                            this.form.reset()
                            this.showDataList();
                      
                  });
                },
                showDataList() {
                    axios.get('/salesPriceType').then(res => {
                           this.salesPriceTypes = res.data.salesPriceTypes
                      })
                },
                
                
               
            }
       }
</script>
