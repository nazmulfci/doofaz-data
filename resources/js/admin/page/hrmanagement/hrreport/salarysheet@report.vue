<template id="">
  <span>
    <div class="card main-card  element-block-example">
      
              <div class="card-header alert-info">
          <h3>
             <button onclick="window.history.back()"
             class="btn btn btn-outline-primary btn-shadow  btn-hover-shine"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg> </button> Basic Salary Sheet </h3>
      </div>
      
         <div style="margin: auto;padding: 22px;">
               <div class="row">
                <div class="col-lg-6 col-12">
                  <span> Select Month</span>
                  <month-picker-input  @change="showDate" :no-default="true"></month-picker-input>
                </div>
                <div class="col-lg-6 col-12">
                  <span> &nbsp; </span>
                  <br>
                  <button type="submit" @click.prevent="clickForSalarySheet()" 
                  class="mr-2 btn-wide btn-pill btn btn-hover-shine  btn-primary">Open salary Sheet</button>
                </div>
             </div>
             </div>
        <!-- <form  @submit.prevent="serchEmployeeSalary()">
          <div class="row  mx-2 my-2">
            <div class="form-group row m-0 mb-0">
                <label class="col-sm-4">Employee Name</label>
                <div class="col-sm-8">
                    <select v-model="form.employeEntryId" name="employeEntryId" class="form-control" >
                      <option value="">Select One</option>
                      <option value="all">All</option>
                      <option v-for="employeeName in employeeNames" :value="employeeName.shopEmployeeEntryId">{{ employeeName.fullName }}</option>
                    </select>
                </div>
            </div>
            <div class="form-group row m-0 mb-0">
                <label class="col-sm-4">Payment Status</label>
                <div class="col-sm-8">
                    <select v-model="form.paymentStatus" name="paymentStatus"  class="form-control" >
                      <option value="">Select One</option>
                      <option value="all">All</option>
                      <option value="1">Paid</option>
                      <option value="0">Unpaid</option>
                    </select>
                </div>
            </div>
           <div class="form-group row m-0 mb-0">
                <label class="col-sm-4">Monthly Payment</label>
                <div class="col-sm-8">
                    <select v-model="form.monthlyPayment" name="monthlyPayment"  class="form-control">
                      <option value="">Select One</option>
                      <option value="all">All</option>
                      <option value="01">January</option>
                      <option value="02">February</option>
                      <option value="03">March</option>
                      <option value="04">April</option>
                      <option value="05">May</option>
                      <option value="06">June</option>
                      <option value="07">July</option>
                      <option value="08">August</option>
                      <option value="09">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
               </div>
            </div>
            <div class="text-right">
              <button type="submit" class="ml-3 mt-1 btn-pill btn-hover-shine btn btn-primary">Search</button>
            </div>
         </div>
        </form> -->

        <div class="table-responsive bg-white p-3">
          <table class="table table-hover table-bordered table-striped">
            <thead>
               <tr class="alert-info">
                   <th>SN</th>
                   <th>Employee<span class="textTransparent">_</span>Name</th>                 
                   <th>Department</th>                 
                   <th>Designation</th>                 
                   <th>Salary<span class="textTransparent">_</span>Grade<span class="textTransparent">_</span>Name</th>
                   <th>Salary<span class="textTransparent">_</span>Grade<span class="textTransparent">_</span>Amount</th>
                   <th>Deduct<span class="textTransparent">_</span>Amount</th> 
                   <th>Net<span class="textTransparent">_</span>Amount</th>                 
           
                   <th>Action</th>
               </tr>
              </thead>
              <tbody>
                <tr v-for="(salarySheetReport, index) in salarySheetReports.data" >
                  <td>{{ index+1 }}</td>
                  <td >{{ salarySheetReport.shop_employee_name.userName }}</td>                 
                                 
                  <td ><span v-if="salarySheetReport.shop_employee_name.job_departments">{{ salarySheetReport.shop_employee_name.job_departments.jobDepartmentName	 }}</span></td>                 
                    <td ><span v-if="salarySheetReport.shop_employee_name.shop_employee_types">{{ salarySheetReport.shop_employee_name.shop_employee_types.shopEmployeeTypeName	 }}</span></td>         
                  <td >{{ salarySheetReport.grade_entry_list.gradeName	}}</td>
                  <td >{{ salarySheetReport.amount	}}</td>
                  <td >{{ salarySheetReport.deductAmount }}</td>
                  <td >{{ salarySheetReport.netAmount	}}</td>
                  <td>
                    <!-- <router-link :to="`/salarysheet@statement${salarySheetReport.employeEntryId}`" class="btn btn-hover-shine  btn-primary"><i class="fa fa-eye mr-2"></i>Statement</router-link> -->
                    <div class="dropdown">
  <button class="dropbtn"><i class="fa fa-cogs" aria-hidden="true"></i>
Select Operation</button>
  <div class="dropdown-content">
    
    
    <a href="#" @click.prevent="employeeAttendenceInfo(salarySheetReport.employeeId)"  data-toggle="modal" :data-target="'#'+'deduct'+salarySheetReport.employeeId">Salary Deduct</a>  
    <a href="#"  @click.prevent="confirm(salarySheetReport.employeeId)"> Confirm </a>  

    
     </div>
    <!-- Deduct Modal -->
    <!-- Modal -->
<div class="modal fade" :id="'deduct'+salarySheetReport.employeeId" tabindex="-1" role="dialog" :aria-labelledby="'deduct'+salarySheetReport.employeeId" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Salary Deduct</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <span style="color:red">Working Day:&nbsp;{{30-workDay}}</span><br>
        <span style="color:red">Present:&nbsp;{{present}}</span>
        <div class="form-group">
    <label for="exampleInputEmail1">Deduct Amount</label>
    <input type="text" class="form-control" v-model="form.deduct" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Amount">
    
  </div>
          <div class="form-group">
    <label for="exampleFormControlTextarea1">Reason</label>
    <textarea class="form-control" v-model="form.reason" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
   <div class="form-group">
                  <label> Date</label>
                  <input type="date" v-model="form.date"   class="form-control">
        
              </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" data-dismiss="modal" @click.prevent="deductSalary(salarySheetReport.employeeId)" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
 
 
  
 
</div> 
                  </td>
                </tr>

                <tr class="text-center" v-if="noRecode">
                    <td colspan="8"> No Record Available </td>
                </tr>
              </tbody>
           </table>
         </div>
         <span class="card_footer" v-if="recode">
           <pagination :data="salarySheetReports" :limit="limit"  @pagination-change-page="getPaginateReport">
             <span slot="prev-nav">&lt; Previous</span>
             <span slot="next-nav">Next &gt;</span>
           </pagination>
        </span>
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
        data(){
           return{
             form: new Form({
                 employeEntryId : '',
                 paymentStatus : '',
                 monthlyPayment : '',
                         reason: '',
                    date:'',
                    deduct:'',
             }),
             employeeNames:{},
             salarySheetReports: {},
             recode: true,
             workDay:'',
               date: {
				from: null,
				to: null,
				month: null,
        monthIndex:null,
				year: null
			},
             present:'',
             noRecode: false,
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
            this.salarySheetReport();
            this.getPaginateReport();
            this.holidaySetupReport();
        },
        methods:{
              showDate (date) {
			        this.date = date,
              axios.get(`monthwiseSalarySheet/${this.date.monthIndex}/${this.date.year}`).then(response=>{
                   this.salarySheetReports = response.data.salarySheetReports;   
              })
      },
          clickForSalarySheet(){
      
              axios.post('salarySheet',{monthIndex:this.date.monthIndex,year:this.date.year,monthInfo:this.date.month+','+this.date.year,mt:this.date.year+'-'+this.date.monthIndex+'-'+'01'}).then(res=>{
                if(res.data.alreadyExit){
                   Toast.fire({
                        icon: 'error',
                        title: 'This Month Salary Sheet Already Open'
                    })
                }
                else{
                   if(res.data.count){
                   Toast.fire({
                        icon: 'error',
                        title: 'No more Employee'
                    })
                }else{
                     axios.get(`monthwiseSalarySheet/${this.date.monthIndex}/${this.date.year}`).then(response=>{
                   this.salarySheetReports = response.data.salarySheetReports;   
              })
Toast.fire({
                        icon: 'success',
                        title: 'Successfully Open Salary Sheet'
                    })
                }
                }
              })
          },
            employeeNameList(){
               axios.get('/employeeName').then(res =>{
                 this.employeeNames = res.data.employeeName;
               })
            },
              holidaySetupReport(){
              axios.get('/holidaySetupReport').then(res =>{
                  this.workDay = res.data.workingDay
                 
              })
               this.currentDateMonth = new Date().toLocaleString().split(',')[0];
            },
            employeeAttendenceInfo(id){
              axios.get(`/employeeAttendanceInfo/${id}`).then(res =>{
                    this.present = res.data.present
              })  
            },
            deductSalary(id){
              
        axios.post('/salaryDeduct',{id:id,month:this.date.monthIndex,year:this.date.year,reason:this.form.reason,date:this.form.date,deduct:this.form.deduct,netamount:this.form.netamount}).then(res => {
               Toast.fire({
                        icon: 'success',
                        title: 'Change Successfully'
                    })
                   if(this.date.monthIndex==''){ this.salarySheetReport();}
                   else{
                       axios.get(`monthwiseSalarySheet/${this.date.monthIndex}/${this.date.year}`).then(response=>{
                   this.salarySheetReports = response.data.salarySheetReports;   
             });
                   }
                       });
            
           },

          confirm(id){
          
               if(this.date.monthIndex==''){
                 axios.get(`/salarySheetConfirm/${id}/0/0`).then(res => {
                Toast.fire({
                        icon: 'success',
                        title: 'Status Change Successfully'
                    })
                    this.salarySheetReport();
                    
             });
              }
                  else{
                axios.get(`/salarySheetConfirm/${id}/${this.date.monthIndex}/${this.date.year}`).then(res => {
                Toast.fire({
                        icon: 'success',
                        title: 'Status Change Successfully'
                    })
                   axios.get(`monthwiseSalarySheet/${this.date.monthIndex}/${this.date.year}`).then(response=>{
                   this.salarySheetReports = response.data.salarySheetReports;   
              })
             });
              }
           },
            salarySheetReport(){
                axios.get('/salarySheet').then(res =>{
                    this.salarySheetReports = res.data.salarySheetReports
              })
            },
            getPaginateReport(page = 1) {
                axios.get('/salarySheet?page=' + page).then(response => {
                    this.salarySheetReports = response.data.salarySheetReports;
                });
            },
            paymentStatus(salarySetupId){
                axios.get('/salaryPaymentStatus/'+salarySetupId).then(res =>{
                    Toast.fire({
                        icon: 'success',
                        title: 'Salary Payment Status Change Successfully'
                    })
                    this.salarySheetReport();
                })
            },
            serchEmployeeSalary(){
                this.form.post('/serchEmployeeSalary').then(res =>{
                     if (res.data.all) {
                         this.recode = true;
                         this.noRecode = false;
                         this.salarySheetReport();
                     }
                     else if (res.data.noRecode) {
                           this.recode = false;
                           this.noRecode = true;
                     }
                     else if (res.data.salarySheetReports) {
                           this.recode = true;
                           this.noRecode = false;
                           this.salarySheetReports = res.data.salarySheetReports
                     }
                });
            },
        },
    }
</script>