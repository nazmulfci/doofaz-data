<template id="">
  <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3>Update Salary Grade Setup</h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
         <form  @submit.prevent="salaryGradeSetupUpdate()">
           <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color">
         
             <div class="form-group">
                <label>Employee Name</label>
                <select v-model="form.employeEntryId" name="employeEntryId" :class="{ 'is-invalid': form.errors.has('employeEntryId') }" class="form-control">
                  <option value="">Select One</option>
                  <option v-for="employeeName in employeeNames" :value="employeeName.shopEmployeeEntryId">{{ employeeName.userName }}</option>
                </select>
                <has-error :form="form" field="employeEntryId"></has-error>
             </div>
              <div class="form-group">
                  <label>Salary Grade Name</label>
                  <select v-model="form.gradeEntryId" name="gradeEntryId" @change.prevent="salaryGradeAmount()" :class="{ 'is-invalid': form.errors.has('gradeEntryId') }" class="form-control">
                    <option value="">Select One</option>
                    <option v-for="salaryGradeList in salaryGradeLists" :value="salaryGradeList.gradeEntryId">{{ salaryGradeList.gradeName }} ({{ salaryGradeList.gradeAmount }})</option>
                  </select>
                  <has-error :form="form" field="gradeEntryId"></has-error>
              </div>
              <div class="form-group">
                  <label>Salary Grade Amount</label>
                  <input type="text" disabled v-model="form.salaryGradeAmount"  name="salaryGradeAmount" :class="{ 'is-invalid': form.errors.has('salaryGradeAmount') }" placeholder="Salary Grade Amount" class="form-control">
                  <has-error :form="form" field="salaryGradeAmount"></has-error>
              </div>
              <div class="form-group">
                 <label>Salary Grade Setup Status</label>
                 <select v-model="form.salaryGradeSetupStatus" name="salaryGradeSetupStatus" :class="{ 'is-invalid': form.errors.has('salaryGradeSetupStatus') }" class="form-control">
                   <option value="">Select One</option>
                   <option value="1">Publish</option>
                   <option value="0">Unpublish</option>
                  </select>
                  <has-error :form="form" field="salaryGradeSetupStatus"></has-error>
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
                    employeEntryId : '',
                    gradeEntryId : '',
                    salaryGradeAmount : '',
                    salaryGradeSetupStatus: '',
                }),
                employeeNames:{},
                salaryGradeLists:{},
            }
        },
        props:{
            limit: {
                type: Number,
                default: 2
            }
        },
        mounted(){
            this.employeeNameList();
            this.salaryGradeList();
            this.salaryGradeSetupData();
        },
        methods:{
            employeeNameList(){
               axios.get('/employeeName').then(res =>{
                 this.employeeNames = res.data.employeeSetupName;
              })
            },
            salaryGradeList(){
               axios.get('/salaryGradeList').then(res =>{
                 this.salaryGradeLists = res.data.salaryGradeList;
              })
            },
            salaryGradeAmount(){
               axios.get('/salaryGradeAmount/'+this.form.gradeEntryId).then(res =>{
                 this.form.salaryGradeAmount = res.data.salaryGradeAmount;
               })
            },
            salaryGradeSetupData(){
               axios.get('/salaryGradeSetup/'+this.$route.params.salaryGradeSetupId+'/edit').then(res =>{
                  this.form.fill(res.data.salaryGradeSetupData);
                  this.form.salaryGradeAmount = res.data.gradeAmount;
               })
            },
            salaryGradeSetupUpdate(){
                this.form.put('/salaryGradeSetup/'+this.$route.params.salaryGradeSetupId).then(res =>{
                    if (res.data.changeName) {
                        Toast.fire({
                            icon: 'error',
                            title: 'Already Salary Grade Setup'
                        })
                    }
                    else{
                        Toast.fire({
                            icon: 'success',
                            title: 'Salary Grade Setup Update Successfully'
                        })
                        this.$router.push('/salarygrade@setup')
                    }
                })
            },
        }
    }

</script>
