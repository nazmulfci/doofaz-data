<template>
    <span>
    <div class="card">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Sales Price Type Entry</h3>
      </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form @submit.prevent="salesPriceTypeUpdate()">
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
            this.getData();
           
        },
        methods: {
            getData() {
                axios.get('/salesPriceType/'+this.$route.params.salesPriceTypeId + '/edit').then(res => {
                      this.form.fill(res.data)
                  })
              },
             salesPriceTypeUpdate() {
                  this.form.put('/salesPriceType/'+this.$route.params.salesPriceTypeId).then(res => {
                  
                          Toast.fire({
                              icon: 'success',
                              title: ' Updated Successfully'
                          })
                          this.$router.push('/salesprice@type@create')
                    
                  })
              },
                
               
            }
       }
</script>
