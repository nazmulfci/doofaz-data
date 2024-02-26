<template>
  <div id="app">
     <form  @submit.prevent="add()" >
                      
                        <div class="form-group row">
                            <label for="userName" class="col-md-4 col-form-label text-md-right">E-Mail Address Or User Id </label>
                                  <div class="col-md-6">
                                  <input id="userName" v-model="form.userName" type="text" class="form-control"   name= "userName"  >
                                  
                                    
                               
                              </div>
                         </div>
                        <div class="form-group row">
                            <label for="userName" class="col-md-4 col-form-label text-md-right">Shop Code </label>
                                  <div class="col-md-6">
                                  <input id="userName" v-model="form.shopSiralId" type="text" class="form-control"   name= "shopSiralId"  >
                                  
                                    
                               
                              </div>
                         </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                            <div class="col-md-6">
                                <input id="password" v-model="form.password" type="password" class="form-control " name="password" >
                             
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" v-model="form.remember" type="checkbox" name="remember" id="remember" >

                                    <label class="form-check-label" for="remember">
                                      Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                   Login
                                </button>

                             
                            </div>
                        </div>
                    </form>
   
  </div>
</template>

<script>

 export default {
        data () {
            return {
                form: new Form({
                  username: '',
                  password: '',
                  shopSiralId: '',
                  remember: '',
                }),
               
            }

        },
      
         mounted(){
     
        
        },
        methods:{
          add(){
              this.form.post('/shop/login').then(response =>{
             let link= "/shop";
             window.location =link;
            
             
              }).catch((res) => {
                Toast.fire({
                        icon: 'error',
                        title: 'Not match'
                    })  
              })
           },
         
        
        
        
        },
    }
</script>
<style >

</style>