<template id="">
  <span>
      <div class="card">
          <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
             <h3 style="color:black">Add Expire Soon Date Limit Limit</h3>
          </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form @submit.prevent="add()">


               <div class="form-group">
                 <label>Expire Soon Date Limit</label>
                 <input type="text" v-model="form.soonDate" name="soonDate"  placeholder="Expire Soon Limit" >
                 
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


      <div class="card mt-5">
          <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
            <h3 style="color:black">Expire Soon Date Limit Limit</h3>
          </div>
          <div class="table-responsive bg-white">
            <table class="table table-hover table-bordered mb-0">
              <thead>
                 <tr style="background:rgba(242, 242, 242, 0.47)">
                   <th>SN</th>                
                   <th>Expire Soon Date Limit</th>                   
                   <th>Action</th>
                 </tr>
                </thead>

                <tbody>
                  <tr >
                    <td>1</td>
                    <td>{{ exp.soonDate }}</td>
                     <td>
                   <button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" data-toggle="modal" :data-target="'#quantity'+exp.id">
                      <i class=" fa fa-edit pr-2"></i> Edit
                   </button>
                </td>

                <!-- Modal -->
                <div class="modal fade" :id="'quantity'+exp.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
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
             <h3 style="color:black">Update Expire Soon Date Limit</h3>
          </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
        


               <div class="form-group">
                 <label>Expire Soon Date Limit</label>
                 <input type="text"   v-model="soonDate" name="soonDate"  placeholder="Low Quantity Limit" >
                 
               </div>

                 


              <div class="text-right pt-3">
                <button type="submit" @click.prevent="update(exp.id)" class="mr-2 btn-pill btn-hover-shine btn btn-primary"
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
                  
                    soonDate: '',
                }),
                soonDate: '',
                exp:{},
                
            }
        },

        mounted() {
            this.ShowDataLists()
            
        },

        methods: {
            add() {
              this.loading = true;
                this.form.post('/expLimit').then(res => {
                  this.loading = false;
                      this.ShowDataLists()
                      this.form.soonDate=''
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
              axios.get('/expLimit').then(res => {
                this.exp = res.data.exp
               this.soonDate=this.exp.soonDate
              })
            },
           
            update(id) {
              this.loading = true;
           axios.put(`/expLimit/${id}`,{soonDate: this.soonDate}).then(res => {
             this.loading = false;
                this.ShowDataLists()
                this.$router.push('/expire@soon@setup')
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
