<template>
    <span>
      <div class="card">
          <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
             <h3 style="color:black">Warehouse Update</h3>
          </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form @submit.prevent="warehouseUpdate()">
 
               <div class="form-group">
                 <label> Warehouse Name </label>
                 <input type="text" v-model="form.warehouseName"
                 :class="{ 'is-invalid': form.errors.has('warehouseName') }"
                  name="warehouseName"  placeholder="Warehouse Name" class="form-control" >
                  <has-error :form="form" field="warehouseName"></has-error>
               </div>

               <div class="form-group">
                 <label> Location </label>
                 <input type="text" v-model="form.location"
                 :class="{ 'is-invalid': form.errors.has('location') }"
                  name="location"  placeholder="Location" class="form-control" >
                  <has-error :form="form" field="location"></has-error>
               </div>

               <div class="form-group">
                 <label> Full Address </label>
                 <textarea v-model="form.fullAddress"
                 :class="{ 'is-invalid': form.errors.has('fullAddress') }"
                  name="fullAddress"  placeholder="Full Address" class="form-control"></textarea>
               <has-error :form="form" field="fullAddress"></has-error>
               </div>

               


            
              <div class="text-right pt-3">
                <button type="submit" class="mr-2 btn-pill btn-hover-shine btn btn-primary"
                :disabled="loading">

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
          </form>
         </div>
       </div>
     </div>

 </span>

</template>

<script>
    export default {
        data(){
            return{
                form: new Form({
                    warehouseName: '',
                    location: '',
                    fullAddress: '',
                }),
            }
        },
        mounted() {
            this.getData();
        },
        methods:{
            getData(){
                axios.get('/addWarehouseEntry/'+this.$route.params.id+'/edit')
                    .then( res => {
                        this.form.fill(res.data.data)
                    })
            },
            warehouseUpdate(){
                this.form.put('/addWarehouseEntry/'+this.$route.params.id)
                    .then(res=>{
                        // if (res.data.changedBrandName) {
                        //     Toast.fire({
                        //         icon: 'error',
                        //         title: 'Changed Mobile No'
                        //     })
                        // }
                        // else{
                            Toast.fire({
                                icon: 'success',
                                title: 'Warehouse Information Updated successfully'
                            })
                            this.$router.push('/warehouseEntry')
                        // }
                    })
            }


        }
    }
</script>

<style scoped>

</style>
