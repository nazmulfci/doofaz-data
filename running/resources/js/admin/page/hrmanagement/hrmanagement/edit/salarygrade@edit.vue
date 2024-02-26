<template id="">
  <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3>Salary Grade Update</h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
        <form  @submit.prevent="gradeUpdate()">
          <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color">
          
              <div class="form-group">
                  <label>Grade Name</label>
                  <input type="text" v-model="form.gradeName"  name="gradeName" :class="{ 'is-invalid': form.errors.has('gradeName') }" placeholder="Grade Name" class="form-control">
                  <has-error :form="form" field="gradeName"></has-error>
              </div>
              <div class="form-group">
                  <label>Grade Amount</label>
                  <input type="text" v-model="form.gradeAmount"  name="gradeAmount" :class="{ 'is-invalid': form.errors.has('gradeAmount') }" placeholder="Grade Amount" class="form-control">
                  <has-error :form="form" field="gradeAmount"></has-error>
              </div>
              <div class="form-group">
                 <label>Grade Status</label>
                 <select v-model="form.gradeStatus" name="gradeStatus" :class="{ 'is-invalid': form.errors.has('gradeStatus') }" class="form-control">
                   <option value="">Select One</option>
                   <option value="1">Publish</option>
                   <option value="0">Unpublish</option>
                  </select>
                  <has-error :form="form" field="gradeStatus"></has-error>
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
                    gradeName : '',
                    gradeAmount: '',
                    gradeStatus: '',
                }),
            }
        },
        mounted(){
          this.golidayEntryShow();
        },
        methods:{
            gradeUpdate(){
                this.form.put('/salaryGradeEntry/'+this.$route.params.gradeEntryId).then(res =>{
                    if (res.data.changeName){
                        Toast.fire({
                            icon: 'error',
                            title: 'Change Your Grade Name'
                        })
                    }
                    else{
                      Toast.fire({
                        icon: 'success',
                        title: 'Grade  Update Successfully '
                      })
                      this.$router.push('/salarygrade@entry')
                    }
                })
            },
            golidayEntryShow(){
              axios.get('/salaryGradeEntry/'+this.$route.params.gradeEntryId+'/edit').then(res =>{
                  this.form.fill(res.data.gradeSingleShow)
              })
            },
        }
    }

</script>
