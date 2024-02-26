<template id="">
  <span>
    <div class="card">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Admin Type Create</h3>
      </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form  @submit.prevent="update()">
             <div class="form-group">
              <label>Training date
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
 
              <input type="date"
                v-model="form.tDate"
                class="form-control"
                
              > 
              
            </div>
              <div class="form-group">
                 <label>Training Time</label>
                 
                 <input type="text" 
                 v-model="form.tTime" 
                 name="tTime"  
                 placeholder="Training Time" 
                 class="form-control">  
                

           
              </div>
              <div class="form-group">
                 <label>Total Member</label>
                 
                 <input type="text" 
                 v-model="form.tMember" 
                 name="tMember"  
                 placeholder="Member" 
                 class="form-control">  
                

           
              </div>
              <div class="form-group">
                 <label>Location</label>
                 
                 <input type="text" 
                 v-model="form.tLocation" 
                 name="tLocation"  
                 placeholder="Training Location" 
                 class="form-control">  
                

           
              </div>
              <div class="text-right pt-3">
                <button type="submit" class="mr-2 btn btn-pill btn-hover-shine  btn-primary">Submit</button>
              </div>
          </form>
        </div>
      </div>
    </div>

    <!-- <div class="card main-card  element-block-example mt-5" >
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Grace Day Limit</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th>SN</th>
               <th>Day Limit</th>           
               <th>Action</th>
             </tr>
            </thead>
            <tbody>
              <tr >
                <td>{{limit.id}}</td>
                <td>{{limit.dayLimit}}</td>
              
                <td>
                
                    <router-link
                    :to="`/graceDateUpdate${limit.id}`"
                    class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine">
                      Edit </router-link> 
                </td>
             </tr>
            </tbody>
         </table>
       </div>
      
     </div> -->
  </span>
</template>
<script>
  export default {
        data () {
            return {
                  form: new Form({
                       tDate:'',
              tTime:'',
              tMember:'',
              tLocation:'',
                }),
           
                limit:{},
            }
            

        },
      
         mounted(){
          this.view();
        
        },
        methods:{
          update(){
                 let uri = `training/${this.$route.params.id}`;
          axios.put(uri, this.form).then((response) => {
               Toast.fire({
                        icon: 'success',
                        title: 'Update Successfull'
                    })
                 this.form.reset()

          })
              
                     
     
             
        
           },
         
           view(){
                let uri = `training/${this.$route.params.id}/edit`;
        axios.get(uri).then((response) => {
            this.form.fill( response.data);
        });
       
           },
        
        
            distroy(id){
              axios.delete(`graceDateEn/${id}`).then(res=>{
                  Toast.fire({
                      icon: 'success',
                      title: ' Delete Successfully'
                  })
                this.view();
              })
            },
        
        },
    }
</script>
