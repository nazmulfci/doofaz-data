<template>
    <span>
      <div class="card">
            <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
                 <h3 style="color:black">Update SR Information</h3>
            </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          <form @submit.prevent="brandEntryUpdate()">
               
               <div class="form-group">
                  <label>  Name
                     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                  <input v-model="form.name" type="text" name="name" :class="{ 'is-invalid': form.errors.has('name') }" placeholder=" Name" class="form-control">
                  <has-error :form="form" field="name"></has-error>
              </div>

                <div class="form-group">
                  <label>  Mobile Number
                     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                  <input v-model="form.mobileNo" type="text" name="mobileNo" :class="{ 'is-invalid': form.errors.has('mobileNo') }" placeholder="Mobile No" class="form-control">
                  <has-error :form="form" field="mobileNo"></has-error>
              </div>
              <div class="form-group">
                  <label>  Phone Number
                     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                  <input v-model="form.phoneNo" type="text" name="phoneNo" :class="{ 'is-invalid': form.errors.has('phoneNo') }" placeholder=" Phone No" class="form-control">
                  <has-error :form="form" field="phoneNo"></has-error>
              </div>

               
              <div class="form-group">
                  <label> Email</label>
                  <input v-model="form.email" type="text" name="email"  placeholder="Email..." class="form-control">
                
              </div>
   

              <div class="form-group">
                  <label>Address
                     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                  <textarea v-model="form.address" type="text" name="address"  :class="{ 'is-invalid': form.errors.has('address') }" placeholder="Address" class="form-control"></textarea>
                  <has-error :form="form" field="address"></has-error>
              </div>

              <div class="form-group">
                  <label> Area
                     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                  <textarea v-model="form.area" type="text" name="area"  :class="{ 'is-invalid': form.errors.has('area') }" placeholder="Area" class="form-control"></textarea>
                  <has-error :form="form" field="area"></has-error>
              </div>
              
                 <div class="form-group">
                 <label> Status
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <select v-model="form.status" name="status" :class="{ 'is-invalid': form.errors.has('status') }" class="form-control">
                     <option value="">Select One</option>
                     <option value="1"> Active </option>
                     <option value="2"> Inactive </option>
                  </select>
                  <has-error :form="form" field="status"></has-error>
              </div>

              <div class="text-sm-right pr-sm-4 pr-md-5 pr-lg-4 text-right">
                  <button  class="btn-pill btn-hover-shine btn btn-primary"> Update </button>
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
                form: new Form({
                    name : '',
                    mobileNo: '',
                    phoneNo: '',
                    email: '',
                    address: '',
                    area: '',
                    status : '',
                }),
            }
        },
        mounted() {
            this.getData();
        },
        methods:{
            getData(){
                axios.get('/addSREntry/'+this.$route.params.id+'/edit')
                    .then( res => {
                        this.form.fill(res.data.data)
                    })
            },
            brandEntryUpdate(){
                this.form.put('/addSREntry/'+this.$route.params.id)
                    .then(res=>{
                        // if (res.data.changedBrandName) {
                        //     Toast.fire({
                        //         icon: 'error',
                        //         title: 'Changed Mobile No'
                        //     })
                        // }
                        // else{
                            Toast.fire({
                                icon: 'success',
                                title: 'SR Information Updated successfully'
                            })
                            this.$router.push('/srEntry')
                        // }
                    })
            }


        }
    }
</script>

<style scoped>

</style>
