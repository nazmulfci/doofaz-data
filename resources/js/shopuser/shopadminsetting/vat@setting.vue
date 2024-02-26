<template id="">
  <span>
      <div class="card">
          <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
             <h3 style="color:black">Vat SetUp</h3>
          </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form @submit.prevent="vatCreate()">

            

               <div class="form-group">
                 <label>Vat  </label>
                 <input type="text" v-model="form.vat" name="vat"  placeholder="Vat Entry" class="form-control" >
                   
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
            <h3 style="color:black">Product Brand List</h3>
          </div>
          <div class="table-responsive bg-white">
            <table class="table table-hover table-bordered mb-0">
              <thead>
                 <tr style="background:rgba(242, 242, 242, 0.47)">
                   <th>SN</th>                
                   <th>Vat</th>                 
                   <th>Action</th>
                 </tr>
                </thead>

                <tbody >
                 <tr>
                     <td>1</td>
                     <td>{{info.vat}}</td>
                    <td>
                      <router-link :to="`/vat@settingEdit${info.id}`" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"><i class=" fa fa-edit"></i>Edit</router-link>
                      <!-- <button @click.prevent="deleteProductBrand(showDatas.productBrandEntryId)"  class="btn-hover-shine btn btn-shadow btn btn-danger"><i class=" fa fa-trash"></i>Delete</button> -->
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
                    
                    vat: '',
                }),
               
                info:{},
               

            }
        },

        mounted() {
            this.ShowDataLists()
           
        },

        methods: {
           vatCreate() {
             this.loading = true;
                this.form.post('/vatEntry').then(res => {
                  this.loading = false;
                   
                  
                        this.form.reset()
                        Toast.fire({
                            icon: 'success',
                            title: 'Vat Setup Successfully'
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
              axios.get('/vatEntry').then(res => {
                this.info = res.data.data
               
              })
            },
           
        }
    }
</script>
