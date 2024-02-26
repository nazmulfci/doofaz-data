<template id="">
  <span>
      <div class="card">
          <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
             <h3 style="color:black">Language Setup</h3>
          </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
         
         
              <div class="btn-group" v-if="infos.language==1">
                    <button type="button" class="btn border btn-primary"> English </button>
                    <button type="button" class="btn border btn-default" @click="change(2)"> বাংলা </button>
             </div> 

              <div class="btn-group" v-if="infos.language==2">
                    <button type="button" class="btn border btn-default"  @click="change(1)"> English </button>
                    <button type="button" class="btn border btn-primary"> বাংলা </button>
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
              shopId: '',
                // form: new Form({
                    
                //     vat: '',
                // }),
               
                infos:{},
               

            }
        },

        mounted() {

            this.getAuthInfo()
           
        },

        methods: {
           change(id) {
              
                axios.get('/changeLanguage/'+id+'/'+this.shopId).then(res => {
                    
                          this.getAuthInfo() 
                        Toast.fire({
                            icon: 'success',
                            title: 'Language Change Successfully'
                        })
                        window.location.replace('');
                      
                       
                   
                }).catch((res) => {
                       
                      Toast.fire({
                        icon: "error",
                        title: "Something Missing",
                      });
        });
            },
              getAuthInfo() {
      let url = "getAuthInfo";
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          
          this.infos = response.info
          this.shopId = response.info.id
        });
    },
         
           
        }
    }
</script>
