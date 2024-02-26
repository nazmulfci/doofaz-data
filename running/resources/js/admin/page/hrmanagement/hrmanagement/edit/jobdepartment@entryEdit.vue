<template>
    <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3>Update Job Department</h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
        <form @submit.prevent="jobDepartmentUpdate()">
          <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color">
          
              <div class="form-group">
                  <label>Job Department Name</label>
                  <input type="text" v-model="form.jobDepartmentName"  name="jobDepartmentName" :class="{ 'is-invalid': form.errors.has('jobDepartmentName') }" placeholder="Job Department Name" class="form-control">
                  <has-error :form="form" field="jobDepartmentName"></has-error>
              </div>
              <div class="form-group">
                 <label>Job Department Status</label>
                 <select v-model="form.jobDepartmentStatus" name="jobDepartmentStatus" :class="{ 'is-invalid': form.errors.has('jobDepartmentStatus') }" class="form-control">
                   <option value="">Select One</option>
                   <option value="1">Publish</option>
                   <option value="0">Unpublish</option>
                  </select>
                  <has-error :form="form" field="jobDepartmentStatus"></has-error>
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
                                    <span class="mr-1"> Submit </span>
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
                    jobDepartmentName : '',
                    jobDepartmentStatus: '',
                }),
            }
        },
        mounted() {
            this.getData();
        },
        methods:{
            getData() {
                axios.get('/jobDepartmentEntry/' + this.$route.params.jobDepartmentEntryId + '/edit')
                    .then(res => {
                        this.form.fill(res.data.editData)

                    })
            },
            jobDepartmentUpdate(){
                this.form.put('/jobDepartmentEntry/'+this.$route.params.jobDepartmentEntryId)
                    .then(res=>{
                      if (res.data.changeName) {
                        Toast.fire({
                            icon: 'error',
                            title: 'Change Your Job Department Name'
                        })
                      }
                      else{
                        Toast.fire({
                            icon: 'success',
                            title: 'Job Department  Updated successfully'
                        })
                        this.$router.push('/jobdepartment@entry')
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
