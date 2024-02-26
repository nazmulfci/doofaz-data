<template id="">
  <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3> Update Salary Start </h3>
      </div>
      <div class="supplier-entry p-0 pt-3 comm-form-back-img">
                <form  @submit.prevent="salaryStartSetupUpdate()">
                    
                      <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color">

             <div class="form-group">
                <label>Employee Name</label>
                <select v-model="form.employeEntryId" name="employeEntryId" :class="{ 'is-invalid': form.errors.has('employeEntryId') }" class="form-control" @change.prevent="employeeEntryId()">
                  <option value="">Select One</option>
                  <option v-for="employeeName in employeeNames" :value="employeeName.shopEmployeeEntryId">{{ employeeName.userName }}</option>
                </select>
                <has-error :form="form" field="employeEntryId"></has-error>
             </div>
              <div class="form-group">
                  <label>Employee Department</label>
                  <input type="text" disabled v-model="form.employeeDepartment"  name="employeeDepartment" :class="{ 'is-invalid': form.errors.has('employeeDepartment') }" placeholder="Employee Department Name" class="form-control">
                  <has-error :form="form" field="employeeDepartment"></has-error>
              </div>
              <div class="form-group">
                  <label>Grade Name</label>
                  <input type="text" disabled v-model="form.gradeName"  name="gradeName" :class="{ 'is-invalid': form.errors.has('gradeName') }" placeholder="Grade Name" class="form-control">
                  <has-error :form="form" field="gradeName"></has-error>
              </div>
              <div class="form-group">
                  <label>Grade Amount</label>
                  <input type="text" disabled v-model="form.gradeAmount"  name="gradeAmount" :class="{ 'is-invalid': form.errors.has('gradeAmount') }" placeholder="Grade Amount" class="form-control">
                  <has-error :form="form" field="gradeAmount"></has-error>
              </div>
              <div class="form-group">
             <div style="margin: auto; padding: 22px">
        <span>Select Month</span>
        <month-picker-input
          @change="showDate"
          :no-default="true"
        ></month-picker-input>
      </div>
            </div>

              <input type="hidden"  v-model="form.gradeEntryId"  name="gradeEntryId"  class="form-control">

              <div class="form-group">
                 <label>Salary Setup Status</label>
                 <select v-model="form.salarySetupStatus" name="salarySetupStatus" :class="{ 'is-invalid': form.errors.has('salarySetupStatus') }" class="form-control">
                   <option value="">Select One</option>
                   <option value="1">Publish</option>
                   <option value="0">Unpublish</option>
                  </select>
                  <has-error :form="form" field="salarySetupStatus"></has-error>
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
import { MonthPicker } from 'vue-month-picker'
import { MonthPickerInput } from 'vue-month-picker'
Vue.use(MonthPicker)
Vue.use(MonthPickerInput)
    export default {
        data () {
            return {
                form: new Form({
                    employeEntryId : '',
                    employeeDepartment : '',
                    gradeEntryId : '',
                    gradeName : '',
                    gradeAmount : '',
                    startDate : '',
                    salarySetupStatus: '',
                    	from: null,
				to: null,
				month: null,
        monthIndex:null,
				year: null,
                }),
                employeeNames:{},
                salarySetupLists:{},
            }
        },
           components: {
		MonthPicker,
    MonthPickerInput
	},
        mounted(){
            this.employeeNameList();
            this.singleDataShow();
        },
        methods:{
               showDate (date) {
			        this.form.year = date.year,
			        this.form.monthIndex = date.monthIndex
             
      },
            employeeNameList(){
               axios.get('/employeeName').then(res =>{
                 this.employeeNames = res.data.employeeSetupName;
              })
            },
            employeeEntryId(){
               axios.get('/salaryGradeName/'+this.form.employeEntryId).then(res =>{
                   this.form.gradeEntryId = res.data.salaryGradeinfo.gradeEntryId;
                   this.form.gradeName = res.data.salaryGradeinfo.gradeName;
                   this.form.gradeAmount = res.data.salaryGradeinfo.gradeAmount;
                   this.form.employeeDepartment = res.data.jobDepartmentinfo.jobDepartmentName;
               })
            },
            singleDataShow(){
                axios.get('/salaryStartSetup/'+this.$route.params.salarySetupId+'/edit' ).then(res =>{
                   this.form.fill(res.data.startSalarySetupList)
                   this.form.employeeDepartment = res.data.startSalarySetupList.job_departments.jobDepartmentName
                   this.form.gradeName = res.data.startSalarySetupList.grade_entry_list.gradeName
                   this.form.gradeAmount = res.data.startSalarySetupList.grade_entry_list.gradeAmount
                   this.form.gradeAmount = res.data.startSalarySetupList.grade_entry_list.gradeAmount
               })
            },
            salaryStartSetupUpdate(){
                this.form.put('/salaryStartSetup/'+this.$route.params.salarySetupId).then(res =>{
                    if (res.data.alreadySetup) {
                        Toast.fire({
                            icon: 'error',
                            title: 'Already Employee Salary Setup'
                        })
                    }
                    else{
                        Toast.fire({
                            icon: 'success',
                            title: 'Salary Setup Update Successfully'
                        })
                        this.$router.push('/salarystart@setup')
                    }
                })
            },
        }
    }

</script>
