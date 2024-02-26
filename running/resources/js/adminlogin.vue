<template>
  <div id="app">
     <form  @submit.prevent="add()" >
                      
                        <div class="form-group row">
                            <label for="adminAccessId" class="col-md-4 col-form-label text-md-right">E-Mail Address Or User Id </label>
                                  <div class="col-md-6">
                                  <input id="adminAccessId" v-model="form.adminAccessId" type="text" class="form-control"   name= "adminAccessId"  >
                                  
                                    
                               
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
                  adminAccessId: '',
                  password: '',
                  remember: '',
                }),
               
            }

        },
      
         mounted(){
     
        
        },
        methods:{
          add(){
              this.form.post('/admin/login').then(response =>{
             let link= "/home";
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