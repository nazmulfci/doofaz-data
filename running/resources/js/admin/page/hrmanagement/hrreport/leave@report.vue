<template id="">
  <span>
   <div class="card main-card  element-block-example">
      <div class="card-header alert-info">
        <h3>Employee Leave Report</h3>
      </div>


      <table class="table"> 
        <tr>
          <td>
      <div class="row"> 
        <div class="col-12 col-md-4 col-xs-12"></div>
        <div class="col-12 col-md-4 col-xs-12 m-2"> 
               <div class="row"> 
                   <div class="col-12 col-md-6 col-xs-12 ">
            <div class="form-group">
    <label for="exampleInputPassword1">Select Employee</label>
     <select  @click.prevent="showEmployee()" v-model="employee" class="form-control" id="exampleFormControlSelect1">
      <option>Selecet One</option>
      <option v-for="leaveList in leaveLists" :value="leaveList.employeEntryId"><span v-if="leaveList.employee_name">{{leaveList.employee_name.userName}}</span></option>
     
    </select>
  </div>
    </div>  
     <div class="col-12 col-md-6 col-xs-12">
           <label> Select Month</label><month-picker-input :no-default="true" @change="showDate"></month-picker-input>
               </div>      
               </div>      
                 
     </div>
        <div class="col-12 col-md-4 col-xs-12"></div>
      </div>
      </td>
      </tr>
      </table>
     
      <div class="table-responsive bg-white">
        <table class="table table-hover table-striped table-bordered ">
            <thead>
            <tr class="alert-info">
               <th>SN</th>
               <th>Employee<span class="textTransparent">_</span>Name</th>
               <th>Department</th>
               <th>Designation</th>
               <th>Leave<span class="textTransparent">_</span>Start<span class="textTransparent">_</span>Date</th>
               <th>Leave<span class="textTransparent">_</span>End<span class="textTransparent">_</span>Date</th>
               <th>Day<span class="textTransparent">_</span>Remain</th>
               <th>Commitment</th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(leaveEntryList, index) in leaveEntryLists.data">
                <td>{{ index+1 }}</td>
                <td><span v-if="leaveEntryList.employee_name">{{ leaveEntryList.employee_name.userName	 }}</span></td>
                 <td><span v-if="leaveEntryList.employee_name">{{ leaveEntryList.employee_name.shop_employee_types.shopEmployeeTypeName	 }}</span></td>
                <td><span v-if="leaveEntryList.employee_name">{{ leaveEntryList.employee_name.job_departments.jobDepartmentName	 }}</span></td>
               
                <td>{{ leaveEntryList.startDate	 }}</td>
                <td>{{ leaveEntryList.endDate	 }}</td>
                <td>
                   {{ parseDate( leaveEntryList.startDate , leaveEntryList.endDate	)+1 }} Days
                    <!-- <span v-if="parseFloat(leaveEntryList.endDate.split('-')[1]) - parseFloat(currentDateMonth.split('/')[0])">
                      {{ parseFloat(leaveEntryList.endDate.split('-')[1]) - parseFloat(currentDateMonth.split('/')[0]) }} Month
                    </span>
                    
                    <span v-if="parseFloat(leaveEntryList.endDate.split('-')[2]) - parseFloat(currentDateMonth.split('/')[1]) >0">
                {{ parseFloat(leaveEntryList.endDate.split('-')[2]) - parseFloat(currentDateMonth.split('/')[1]) }} Day
                    </span>
                    <span v-else>0 Day</span>
                    <span v-if="parseFloat(leaveEntryList.endDate.split('-')[2]) - parseFloat(currentDateMonth.split('/')[1]) == 0">
                       0 Day
                    </span> -->
                </td>
                <td>{{ leaveEntryList.commitment	| shortlength('110', '...') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
       <span class="card_footer">
         <pagination :data="leaveEntryLists" :limit="limit"  @pagination-change-page="getPaginateList">
           <span slot="prev-nav">&lt; Previous</span>
           <span slot="next-nav">Next &gt;</span>
         </pagination>
      </span>
     </div>
  </span>
</template>
<script>
import { MonthPicker } from 'vue-month-picker'
import { MonthPickerInput } from 'vue-month-picker'
import moment from "moment";

Vue.use(MonthPicker)
Vue.use(MonthPickerInput)
    export default {
        data () {
            return {
                employee:'',
                employeeNames:{},
                leaveEntryLists:{},
                leaveLists:{},
                currentDateMonth:{},
                   date: {
				from: null,
				to: null,
				month: null,
        monthIndex:null,
				year: null
			},
       moment: moment,
            }
        },
        props:{
            limit: {
                type: Number,
                default: 2
            }
        },
          components: {
		MonthPicker,
    MonthPickerInput
	},
        mounted(){
            this.employeeNameList();
            this.employeeLeaveEntryList();

        },
        methods:{
          parseDate (start, end) {
        return moment(end, 'YYYY-MM-DD ').diff(moment(start, 'YYYY-MM-DD '), "days")
    },
               showDate (date) {
			this.date = date
      if(this.employee==''){
      axios.get(`/leaveReportMonth/0/${this.date.monthIndex}/${this.date.year}`).then(res =>{
                    this.leaveEntryLists = res.data.leaveReportLists;
                    this.currentDateMonth = new Date().toLocaleString().split(',')[0];
              })
      }
      else{
         axios.get(`/leaveReportMonth/${this.employee}/${this.date.monthIndex}/${this.date.year}`).then(res =>{
                    this.leaveEntryLists = res.data.leaveReportLists;
                    this.currentDateMonth = new Date().toLocaleString().split(',')[0];
              })
      }
         
		},
    showEmployee(){
        if(this.date.monthIndex==''){
      axios.get(`/leaveReportMonth/${this.employee}/0/0`).then(res =>{
                    this.leaveEntryLists = res.data.leaveReportLists;
                    this.currentDateMonth = new Date().toLocaleString().split(',')[0];
              })
      }
      else{
         axios.get(`/leaveReportMonth/${this.employee}/0/0`).then(res =>{
                    this.leaveEntryLists = res.data.leaveReportLists;
                    this.currentDateMonth = new Date().toLocaleString().split(',')[0];
              })
      }
    },
            employeeNameList(){
               axios.get('/employeeName').then(res =>{
                 this.employeeNames = res.data.employeeName;
              })
            },
            employeeLeaveEntryList(){
                axios.get('/leaveReport').then(res =>{
                    this.leaveEntryLists = res.data.leaveReportLists;
                    this.leaveLists = res.data.leaveLists;
                    this.currentDateMonth = new Date().toLocaleString().split(',')[0];
              })
            },
            getPaginateList(page = 1) {
                axios.get('leaveReport?page=' + page).then(response => {
                    this.leaveEntryLists = response.data.leaveReportLists;
              });
            },
        },
    }
</script>
