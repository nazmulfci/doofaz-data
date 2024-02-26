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
                 <label>Grace Limit Day</label>
                 
                 <input type="text" 
                 v-model="form.dayLimit" 
                 name="adminTypeName"  
                 placeholder="Grace Limit Day" 
                 class="form-control">  
                

           
              </div>
              <div class="text-right pt-3">
                <button type="submit" class="mr-2 btn btn-pill btn-hover-shine  btn-primary">Submit</button>
              </div>
          </form>
        </div>
      </div>
    </div>

  </span>
</template>
<script>
  export default {
        data () {
            return {
                form: new Form({
                  dayLimit: '',
                }),
                limit:{},
            }

        },
      
         mounted(){
          this.view();
        
        },
        methods:{
          update(){
            axios.put( `graceDateEn/${this.$route.params.id}`, this.form).then((response) => {
              
                    Toast.fire({
                        icon: 'success',
                        title: 'Successfully Updated'
                    })
          
              this.$router.push('graceDateEntry');
            
              })
           },
           view(){
                let uri = `graceDateEn/${this.$route.params.id}`;
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
