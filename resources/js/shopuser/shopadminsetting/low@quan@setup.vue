<template id="">
  <span>
      <div class="card">
          <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
             <h3 style="color:black">Add Low Quantity Limit</h3>
          </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form @submit.prevent="add()">

               <div class="form-group">
                 <label>Low Quantity </label>
                 <input type="text" v-model="form.lowQuantity" name="lowQuantity"  placeholder="Low Quantity Limit" >
                 
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
          </form>
         </div>
       </div>
     </div>


      <div class="card mt-5" v-if="qty.lowQuantity">
          <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
            <h3 style="color:black">Low Quantity Limit</h3>
          </div>
          <div class="table-responsive bg-white">
            <table class="table table-hover table-bordered mb-0">
              <thead>
                 <tr style="background:rgba(242, 242, 242, 0.47)">
                   <th>SN</th>                
                   <th>Quantity</th>                   
                   <th>Action</th>
                 </tr>
                </thead>

                <tbody>
                  <tr >
                    <td>1</td>
                    <td>{{ qty.lowQuantity }}</td>
                     <td>
                   <button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" data-toggle="modal" :data-target="'#quantity'+qty.id">
                      <i class=" fa fa-edit pr-2"></i> Edit
                   </button>
                </td>

                <!-- Modal -->
                <div class="modal fade" :id="'quantity'+qty.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header bg-primary text-light" >
                        <h5 class="modal-title" id="exampleModalLongTitle"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      
                        <div class="modal-body">
                            <div class="card">
          <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
             <h3 style="color:black">Update Low Quantity Limit</h3>
          </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
        


               <div class="form-group">
                 <label>Low Quantity </label>
                 <input type="text"   v-model="lowQuantity" name="lowQuantity"  placeholder="Low Quantity Limit" >
                 
               </div>

                 


              <div class="text-right pt-3">
                <button type="submit" @click.prevent="update(qty.id)" class="mr-2 btn-pill btn-hover-shine btn btn-primary"
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
                </span>Update</button>
              </div>
          
         </div>
       </div>
     </div>
                        </div>
                        <div class="modal-footer">
                           <button type="button" class="btn btn-hover-shine btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                  </div>
                </div>

                   
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
                  
                    lowQuantity: '',
                }),
                lowQuantity: '',
                qty:{},
                quan:""
            }
        },

        mounted() {
            this.ShowDataLists()
            
        },

        methods: {
            add() {
              this.loading = true;
                this.form.post('/lowQuantity').then(res => {
                  this.loading = false;
                      this.ShowDataLists()
                      this.form.lowQuantity=''
                        Toast.fire({
                            icon: 'success',
                            title: 'Low Quantity Setup Successfully'
                        })
                    }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
               
               
            },

            ShowDataLists() {
              axios.get('/lowQuantity').then(res => {
                this.qty = res.data.quan
               this.lowQuantity=this.qty.lowQuantity
              })
            },
           
            update(id) {
              this.loading = true;
           axios.put(`/lowQuantity/${id}`,{lowQuantity: this.lowQuantity}).then(res => {
             this.loading = false;
                this.ShowDataLists()
                this.$router.push('/low@quan')
                  Toast.fire({
                            icon: 'success',
                            title: 'Successfully Updated'
                        })
              }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
            },
           
      
        }
    }
</script>
