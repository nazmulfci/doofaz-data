<template id="">
  <span>
    <div class="card">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Registration Phone Number</h3>
      </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form  @submit.prevent="add()">
              <div class="form-group">
                 <label>Phone Number</label>
                 
                 <input type="text" 
                 v-model="form.phone" 
                
                 placeholder="Phone Number" 
                 class="form-control">  
                

           
              </div>
              <div class="form-group">
                 <label>WhatsApp Number</label>
                 
                 <input type="text" 
                 v-model="form.whatsApp" 
                
                 placeholder="WhatsApp Number" 
                 class="form-control">  
                

           
              </div>
              <div class="text-right pt-3">
                <button type="submit" class="mr-2 btn btn-pill btn-hover-shine  btn-primary">Submit</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  <div class="card main-card  element-block-example mt-5" >
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Phone Number</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
             
               <th>Phone Number</th>           
               <th>Whats App Number</th>           
               <th>Action</th>
             </tr>
            </thead>
            <tbody>
              <tr >
                <td>{{phones.phone}}</td>
                <td>{{phones.whatsApp}}</td>
                <!-- <td>{{limit.dayLimit}}</td> -->
              
                <td>
                
                    <button
                       @click.prevent="deleteP(phones.id)"
                    class="btn btn-danger">
                      Delete </button> 
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
        data () {
            return {
                form: new Form({
                  phone: '',
                  whatsApp: '',
                }),
              phones:''
            }

        },
      
         mounted(){
          this.view();
        
        },
        methods:{
          add(){
              this.form.post('/regiPhone').then(res =>{
              
                    Toast.fire({
                        icon: 'success',
                        title: 'Successfully Created'
                    })
          
                this.form.reset()
                this.view();   
              })
           },
           view(){
              axios.get('/regiPhone').then(res =>{
               
                this.phones = res.data.get;
                  
             })
           },
        deleteP(id){
            axios.delete('/regiPhone/'+id).then(res=>{
                this.view();   
                Toast.fire({
                    icon:'success',
                      title: 'Successfully deleted'
                })
            })
        }
        
          
        
        },
    }
</script>
