<template id="">
  <span>
   <div class="card main-card  element-block-example">
      <div class="card-header alert-info">
        <h3>Employee Attendance Report</h3>
      </div>
  
 <center>
   <span> Select Month</span>
   <month-picker-input :no-default="true" @change="showDate"></month-picker-input></center>
  
      <div class="table-responsive bg-white mt-3">
        <table class="table table-hover table-striped table-bordered ">
            <thead>
            <tr class="alert-info">
               <th>SN</th>
               <th>Employee<span class="textTransparent">_</span>Name</th>
               <!-- <th>Working<span class="textTransparent">_</span>Day<span class="textTransparent">_</span>{{30-workDay}}</th> -->
               <th>P</th>
               <th>A</th>
               <th>L</th>
               <th v-for="num  in number">
                  {{ num }}
               </th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(employeeName, index) in employeeNames">
                <td>{{ index+1 }}</td>
                <td>{{ employeeName.userName }}</td>
                <!-- <td></td> -->
                <td><span v-for="totalAtten in totalAttendances" v-if="totalAtten.employeEntryId== employeeName.shopEmployeeEntryId&&totalAtten.attendanceStatus=='P'">{{totalAtten.total}}</span></td>
               
                <td><span v-for="totalAtten in totalAttendances" v-if="totalAtten.employeEntryId== employeeName.shopEmployeeEntryId&&totalAtten.attendanceStatus=='A'">{{totalAtten.total}}</span></td>
               
                <td><span v-for="totalAtten in totalAttendances" v-if="totalAtten.employeEntryId== employeeName.shopEmployeeEntryId&&totalAtten.attendanceStatus=='L'">{{totalAtten.total}}</span></td>
               
               
                <td v-for="num  in number" >
                    <span v-for="attendanceReport in attendanceReports"  :title="'In Time :'+attendanceReport.employeeInTime + ' Out Time :'+attendanceReport.employeeOutTime"  v-if="attendanceReport.employeEntryId == employeeName.shopEmployeeEntryId ">
                      <span v-if="attendanceReport.employeeInDate.split('-')[0] == num">
                      {{ attendanceReport.attendanceStatus }}
                      </span>
                    </span>
                </td>

              </tr>
            </tbody>
          </table>
        </div>
     </div>
  </span>
</template>
<script>
import moment from 'moment'
import { MonthPicker } from 'vue-month-picker'
import { MonthPickerInput } from 'vue-month-picker'

Vue.use(MonthPicker)
Vue.use(MonthPickerInput)
    export default {
        data () {
            return {
                employeeNames:{},
                currentDateMonth: {},
                totalAttendance:{},
                momentFormat: {},
                momentFormatMonth: {},
                momentFormatDate: {},
                workDay:'',
                number:[
                          '01','02','03','04','05','06','07','08','09','10',
                          '11','12','13','14','15','16','17','18','19','20',
                          '21','22','23','24','25','26','27','28','29','30',
                          '31'
                      ],
                      date: {
				from: null,
				to: null,
				month: null,
        monthIndex:null,
				year: null
			},
            }
        },
        components: {
		MonthPicker,
    MonthPickerInput
	},
        mounted(){
            this.employeeLeaveEntryList();
            this.employeeLeaveEntryList();
            this.holidaySetupReport()

        },
        methods:{
          
           holidaySetupReport(){
              axios.get('/holidaySetupReport').then(res =>{
                  this.workDay = res.data.dayRemain
                 
              })
               this.currentDateMonth = new Date().toLocaleString().split(',')[0];
            },
          showDate (date) {
			this.date = date
  
          axios.get(`/employeeAttendanceReportMonthly/${this.date.monthIndex}/${this.date.year}`).then(res =>{
                    this.employeeNames = res.data.employeeNames;
                    this.attendanceReports = res.data.attendanceReports;
                     this.totalAttendances = res.data.totalAttendance;
                     this.workDay = res.data.dayRemain;
                    this.currentDateMonth = new Date().toLocaleString();

                    this.momentFormat = moment(String(this.currentDateMonth)).format('MM/DD/YYYY');
                    this.momentFormatMonth = this.momentFormat.split('/')[0];
                    this.momentFormatDate = this.momentFormat.split('/')[1];

              })
		},
            employeeLeaveEntryList(){
                axios.get('/employeeAttendanceReport').then(res =>{
                    this.employeeNames = res.data.employeeNames;
                    this.attendanceReports = res.data.attendanceReports;
                    this.totalAttendances = res.data.totalAttendance;

                    this.currentDateMonth = new Date().toLocaleString();

                    this.momentFormat = moment(String(this.currentDateMonth)).format('MM/DD/YYYY');
                    this.momentFormatMonth = this.momentFormat.split('/')[0];
                    this.momentFormatDate = this.momentFormat.split('/')[1];

              })
            },
        },
    }
</script>
