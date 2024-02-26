<template id="">
  <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3>Employee Type Update</h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
        <form  @submit.prevent="employeeTypeUpdate()">
          <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color">

              <div class="form-group">
                 <label>Employee Type Name</label>
                 <input type="text" v-model="form.shopEmployeeTypeName" name="shopEmployeeTypeName"  placeholder="Employee Type Name" class="form-control"  :class="{ 'is-invalid': form.errors.has('shopEmployeeTypeName') }">
                 <has-error :form="form" field="shopEmployeeTypeName"></has-error>
              </div>
            </div>


       <!-- -----------------------------   card footer  -->
 
<div class="d-block p-0 pt-3 pb-4 card-footer overflow-hidden">
<div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">


                                <button type="reset"
                                onclick="window.history.back()"
                                 class="btn-pill btn-shadow btn btn-outline-danger btn-lg float-left">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-undo "></i>
                                    </span>
                                    <span class="mr-1"> Back </span>
                                </button>

                                <button type="submit" class="btn-pill btn-shadow btn btn-primary btn-lg float-right btn-hover-shine">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-paper-plane"></i>
                                    </span>
                                    <span class="mr-1"> Update </span>
                                </button>


                            </div>
                            </div>
 
<!-- -----------------------------   // card footer  -->
          </form>
        </div>
      </div>
    
  </span>
</template>
<script>
  export default {
        data () {
            return {
                form: new Form({
                  shopEmployeeTypeName: '',
                }),
                employeeTypeLists:{},
            }
        },
        mounted(){
          this.employeeTypeShow()
        },
        methods:{
          employeeTypeShow(){
              axios.get('/shopEmployeeType/'+this.$route.params.shopEmployeeTypeId+'/edit').then(res =>{
                this.form.fill(res.data);
            })
          },
          employeeTypeUpdate(){
            this.form.put('/shopEmployeeType/'+this.$route.params.shopEmployeeTypeId).then(res =>{
                if (res.data.changeName) {
                  Toast.fire({
                      icon: 'error',
                      title: 'Change Your Employee Type Name'
                  })
                }
                else{
                  Toast.fire({
                      icon: 'success',
                      title: 'Shop Employee Type Successfully'
                  })
                  this.$router.push('/shopemployee@typecreate');
                }
            })
          },
       }
    }
</script>
