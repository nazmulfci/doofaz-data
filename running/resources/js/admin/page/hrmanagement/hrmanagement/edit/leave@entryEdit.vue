<template id="">
  <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3>Update Employee Leave Entry</h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
        <form  @submit.prevent="updateLeaveEntry()">
          <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color">
          
              <div class="form-group">
                 <label>Employee Name</label>
                 <select disabled v-model="form.employeEntryId" name="employeEntryId" :class="{ 'is-invalid': form.errors.has('employeEntryId') }" class="form-control">
                   <option value="">Select One</option>
                   <option v-for="employeeName in employeeNames" :value="employeeName.shopEmployeeEntryId">{{ employeeName.userName }}</option>
                 </select>
                 <has-error :form="form" field="employeEntryId"></has-error>
              </div>
              <div class="form-group">
                  <label>Start Date</label>
                  <input type="date" v-model="form.startDate"  name="startDate" :class="{ 'is-invalid': form.errors.has('startDate') }" placeholder="Job Department Name" class="form-control">
                  <has-error :form="form" field="startDate"></has-error>
              </div>
              <div class="form-group">
                  <label>End Date</label>
                  <input type="date" v-model="form.endDate"  name="endDate" :class="{ 'is-invalid': form.errors.has('endDate') }"  class="form-control">
                  <has-error :form="form" field="endDate"></has-error>
              </div>
              <div class="form-group">
                  <label>Commitment</label>
                  <textarea v-model="form.commitment"  name="commitment" class="form-control" placeholder="Commitment" :class="{ 'is-invalid': form.errors.has('commitment') }" style="height:130px">
                  </textarea>
                  <has-error :form="form" field="commitment"></has-error>
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
                    employeEntryId: '',
                    startDate : '',
                    endDate : '',
                    commitment: '',
                }),
                employeeNames:{},
            }
        },
        mounted(){
            this.employeeNameList();
            this.employeeLeaveEntryInfor();
        },
        methods:{
            employeeNameList(){
               axios.get('/employeeName').then(res =>{
                 this.employeeNames = res.data.employeeNameInfo;
              })
            },
            employeeLeaveEntryInfor(){
               axios.get('/employeeLeaveEntry/'+this.$route.params.leaveEntryId+'/edit').then(res =>{
                  this.form.fill(res.data);
              })
            },
            updateLeaveEntry(){
                this.form.put('/employeeLeaveEntry/'+this.$route.params.leaveEntryId).then(res =>{
                    if (res.data.alreadyEntry) {
                        Toast.fire({
                            icon: 'error',
                            title: 'Already Employee Leave Entry'
                        })
                    }
                    else{
                        Toast.fire({
                            icon: 'success',
                            title: 'Employee Leave Update Successfully'
                        })
                        this.$router.push('/leave@entry')
                    }
                })
            },
        }
    }

</script>
