<template id="">
  <span>
      <div class="card">
          <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
             <h3 style="color:black">Sales SetUp</h3>
          </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
        
               <div class="form-group" v-if="info.status==1">
                <button type="button" @click.prevent="create(2)" class="btn btn-primary"
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
                </span>First In First Out</button> 
               </div>
              
               <div class="form-group" v-if="info.status==2">
                <button type="button" @click.prevent="create(1)" class="btn btn-success"
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
                </span>Last In Last Out</button> 
               </div>
             <div class="form-group" v-if="info==0">
                <button type="button" @click.prevent="create(2)" class="btn btn-primary"
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
                </span>First In First Out</button> 
               </div>


            
        
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
                // form: new Form({
                    
                //     vat: '',
                // }),
               
                info:{},
               

            }
        },

        mounted() {

            this.data()
           
        },

        methods: {
           create(id) {
             this.loading = true;
                axios.put('/salesSt/'+id).then(res => {
                  this.loading = false;
                   
                  
                          this.data() 
                        Toast.fire({
                            icon: 'success',
                            title: 'Sales Setup Successfully'
                        })
                      
                       
                   
                }).catch((res) => {
                      this.loading = false;
                      Toast.fire({
                        icon: "error",
                        title: "Something Missing",
                      });
        });
            },
              data(){

                  axios.get('salesSt').then(res=>{
                    this.info=res.data.info;  
                  })
              }
         
           
        }
    }
</script>
