<template id="">
  <span>
      <div class="card">
          <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
             <h3 style="color:black">Warehouse Setup</h3>
          </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form @submit.prevent="warehouseCreate()">
 
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
                </span>Submit</button>
              </div>
          </form>
         </div>
       </div>
     </div>


      <div class="card mt-5">
          <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
            <h3 style="color:black">Warehouse List</h3>
          </div>
          <div class="table-responsive bg-white">
            <table class="table table-hover table-bordered mb-0">
              <thead>
                 <tr style="background:rgba(242, 242, 242, 0.47)">
                   <th>SN</th>                
                   <th>Warehouse Name</th>                 
                   <th>Location</th>                 
                   <th>Full Address</th>                 
                   <th>Action</th>
                 </tr>
                </thead>

                <tbody >
                 <tr v-for="(warehouseList,index) in warehouseLists">
                     <td> {{++index}} </td>
                     <td> {{warehouseList.warehouseName}} </td>
                     <td> {{warehouseList.location}} </td>
                     <td> {{warehouseList.fullAddress}} </td>
                    <td>
                      <router-link :to="`/warehouseEdit${warehouseList.id}`" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"><i class=" fa fa-edit"></i>Edit</router-link>
                    
                    <button @click.prevent="deleteWarehouse(warehouseList.id)"  class="btn-hover-shine btn btn-shadow btn btn-danger"><i class=" fa fa-trash"></i>Delete</button>
                   
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
        data(){
            return{
              loading: false,
                form: new Form({
                    
                    warehouseName: '',
                    location: '',
                    fullAddress: '',

                }),
               
                warehouseLists:{},
               

            }
        },

        mounted() {
            this.ShowDataLists()
           
        },

        methods: {
           warehouseCreate() {
             this.loading = true;
                this.form.post('/addWarehouseEntry').then(res => {
                  this.loading = false;
                   
                  
                        this.form.reset()
                        Toast.fire({
                            icon: 'success',
                            title: 'Warehouse Setup Successfully'
                        })
                        this.ShowDataLists()
                       
                   
                }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
            },

            ShowDataLists() {
              axios.get('/addWarehouseEntry').then(res => {
                
                this.warehouseLists = res.data.data
                
              })
            },
 
                deleteWarehouse(id) {
                let uri = `addWarehouseEntry/${id}`;
                axios.delete(uri).then((response) => {
                    Toast.fire({
                            icon: 'success',
                            title: 'Delete Successfull.'
                        })
                    this.ShowDataLists();
                });
                },
           
        }
    }
</script>
