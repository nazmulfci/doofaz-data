<template id="">
  <span>
    <div class="card">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
        <h3 style="color:black">Expire Date Notification</h3>
      </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form  @submit.prevent="add()">
              <div class="form-group">
                 <label>Title</label>
                 
                 <input type="text" 
                 v-model="form.title" 
                 name="title"  
                 placeholder="Title" 
                 class="form-control">  
                

           
              </div>
              <div class="form-group">
                 <label>Details</label>
                 
                 <textarea type="text" 
                 v-model="form.details" 
                 name="details"  
                 placeholder="Details" 
                 class="form-control">  </textarea>
                

           
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
        <h3 style="color:black">Expire Date Notification Info</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th>SN</th>
               <th>Title</th>           
               <th>Details</th>           
               <th>Action</th>
             </tr>
            </thead>
            <tbody>
              <tr >
                <td>{{noti.id}}</td>
                <td>{{noti.title}}</td>
                <td>{{noti.details}}</td>
              
                <td>
                
                    <router-link
                    :to="`/expiredatenoti${noti.id}`"
                    class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine">
                      Edit </router-link> 
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
                  title: '',
                  details: '',
                }),
                noti:{},
            }

        },
      
         mounted(){
          this.view();
        
        },
        methods:{
          add(){
              this.form.post('/expireDateInfo').then(res =>{
              
                    Toast.fire({
                        icon: 'success',
                        title: 'Successfully Created'
                    })
          
                this.form.reset()
                this.view();   
              })
           },
           view(){
              axios.get('/expireDateInfo').then(res =>{
                this.noti = res.data.getNoti;
             })
           },
        
        
          
        
        },
    }
</script>
