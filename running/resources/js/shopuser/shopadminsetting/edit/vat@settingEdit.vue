<template id="">
  <span>
      <div class="card">
          <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
             <h3 style="color:black">Vat SetUp</h3>
          </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form @submit.prevent="update()">

            

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
               
               
               

            }
        },

        mounted() {
          this.view(); 
           
        },

        methods: {
           update() {
             this.loading = true;
              this.form.put('/vatEntry/'+this.$route.params.id)
                    .then(res=>{ 
                      this.loading = false;
                  
                       
                        Toast.fire({
                            icon: 'success',
                            title: 'Vat Updated Successfully'
                        })
                        this.$router.push('vat@setting')
                       
                   
                }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
            },
           view() {
              axios.get('/vatEntry/'+this.$route.params.id+'/edit')
                    .then(res=>{ 
                  
                     this.form.fill(res.data)  ;
                     
                       
                   
                });
            },

           
           
        }
    }
</script>
